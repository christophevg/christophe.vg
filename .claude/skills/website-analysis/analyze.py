#!/usr/bin/env python3
"""
Website Performance Analyzer

Runs Lighthouse audit and extracts key performance metrics and recommendations.

Usage:
    python3 analyze.py <URL> [--output json|markdown]

Example:
    python3 analyze.py https://christophe.vg
    python3 analyze.py https://christophe.vg --output markdown
"""

import json
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any


def run_lighthouse(url: str, output_path: str) -> dict:
    """Run Lighthouse and return parsed results."""
    cmd = [
        "npx", "lighthouse", url,
        "--output=json",
        f"--output-path={output_path}",
        "--quiet",
        "--chrome-flags=--headless"
    ]
    subprocess.run(cmd, capture_output=True)

    with open(output_path) as f:
        return json.load(f)


def format_bytes(bytes_val: int) -> str:
    """Format bytes as human-readable size."""
    if bytes_val >= 1024 * 1024:
        return f"{bytes_val / (1024 * 1024):.1f}MB"
    return f"{bytes_val // 1024}KB"


def format_ms(ms_val: float) -> str:
    """Format milliseconds as human-readable time."""
    if ms_val >= 1000:
        return f"{ms_val / 1000:.1f}s"
    return f"{ms_val:.0f}ms"


def analyze(data: dict) -> dict[str, Any]:
    """Extract key metrics and recommendations from Lighthouse data."""
    audits = data.get("audits", {})
    categories = data.get("categories", {})

    result = {
        "url": data.get("finalUrl", data.get("requestedUrl", "unknown")),
        "fetchTime": data.get("fetchTime", "unknown"),
        "scores": {},
        "coreWebVitals": {},
        "issues": [],
        "resources": [],
        "opportunities": [],
    }

    # Category scores
    for cat_name, cat_data in categories.items():
        score = cat_data.get("score")
        if score is not None:
            result["scores"][cat_name] = round(score * 100)

    # Core Web Vitals
    cwv_metrics = [
        ("first-contentful-paint", "FCP"),
        ("largest-contentful-paint", "LCP"),
        ("speed-index", "SI"),
        ("interactive", "TTI"),
        ("total-blocking-time", "TBT"),
        ("cumulative-layout-shift", "CLS"),
    ]

    for audit_id, name in cwv_metrics:
        if audit_id in audits:
            a = audits[audit_id]
            result["coreWebVitals"][name] = {
                "value": a.get("displayValue", "N/A"),
                "score": a.get("score"),
                "numeric": a.get("numericValue"),
            }

    # Network payload - top resources
    if "total-byte-weight" in audits:
        tbw = audits["total-byte-weight"]
        total_bytes = 0
        for item in tbw.get("details", {}).get("items", []):
            url = item.get("url", "")
            size = item.get("totalBytes", 0)
            total_bytes += size
            if len(result["resources"]) < 10:
                result["resources"].append({
                    "url": url.split("/")[-1] if url else "unknown",
                    "size": size,
                    "formatted": format_bytes(size),
                })
        result["totalPayload"] = format_bytes(total_bytes)

    # Accessibility issues
    a11y_audits = [
        "image-alt",
        "button-name",
        "label",
        "color-contrast",
    ]
    for audit_id in a11y_audits:
        if audit_id in audits:
            a = audits[audit_id]
            if a.get("score") == 0:
                result["issues"].append({
                    "type": "accessibility",
                    "audit": audit_id,
                    "title": a.get("title", audit_id),
                })

    # Performance opportunities - all audits with 'opportunity' type
    for audit_id, audit in audits.items():
        if audit.get("details", {}).get("type") == "opportunity":
            details = audit.get("details", {})
            # Check for byte savings
            wasted_bytes = details.get("overallSavingsBytes", 0)
            # Check for time savings
            wasted_ms = details.get("overallSavingsMs", 0)
            # Also check numericValue for some audits
            numeric_val = audit.get("numericValue", 0)

            if wasted_bytes > 0:
                result["opportunities"].append({
                    "audit": audit_id,
                    "title": audit.get("title", audit_id),
                    "savings": format_bytes(wasted_bytes),
                    "type": "bytes",
                })
            elif wasted_ms > 0 or numeric_val > 0:
                savings_val = wasted_ms if wasted_ms > 0 else numeric_val
                result["opportunities"].append({
                    "audit": audit_id,
                    "title": audit.get("title", audit_id),
                    "savings": format_ms(savings_val),
                    "type": "time",
                })

    return result


def print_markdown(result: dict) -> None:
    """Print results in Markdown format."""
    print(f"# Performance Analysis: {result['url']}\n")
    print(f"**Date:** {result['fetchTime']}\n")

    # Scores
    print("## Scores\n")
    print("| Category | Score |")
    print("|----------|-------|")
    for cat, score in result["scores"].items():
        print(f"| {cat} | {score}/100 |")
    print()

    # Core Web Vitals
    print("## Core Web Vitals\n")
    print("| Metric | Value | Score |")
    print("|--------|-------|-------|")
    for name, data in result["coreWebVitals"].items():
        score = data.get("score")
        score_display = f"{score:.2f}" if score is not None else "N/A"
        print(f"| {name} | {data.get('value', 'N/A')} | {score_display} |")
    print()

    # Top Resources
    if result["resources"]:
        print("## Top Resources\n")
        print(f"**Total Payload:** {result.get('totalPayload', 'N/A')}\n")
        print("| Resource | Size |")
        print("|----------|------|")
        for res in result["resources"]:
            print(f"| {res['url']} | {res['formatted']} |")
        print()

    # Opportunities
    if result["opportunities"]:
        print("## Optimization Opportunities\n")
        for opp in result["opportunities"]:
            print(f"- **{opp['title']}**: {opp['savings']} savings")
        print()

    # Issues
    if result["issues"]:
        print("## Issues\n")
        for issue in result["issues"]:
            print(f"- [{issue['type']}] {issue['title']}")


def print_json(result: dict) -> None:
    """Print results as JSON."""
    print(json.dumps(result, indent=2))


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 analyze.py <URL> [--output json|markdown]", file=sys.stderr)
        sys.exit(1)

    url = sys.argv[1]
    output_format = "markdown"

    if "--output" in sys.argv:
        idx = sys.argv.index("--output")
        if idx + 1 < len(sys.argv):
            output_format = sys.argv[idx + 1]

    with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as tmp:
        tmp_path = tmp.name

    try:
        print(f"Running Lighthouse on {url}...", file=sys.stderr)
        data = run_lighthouse(url, tmp_path)
        result = analyze(data)

        if output_format == "json":
            print_json(result)
        else:
            print_markdown(result)
    finally:
        Path(tmp_path).unlink(missing_ok=True)


if __name__ == "__main__":
    main()