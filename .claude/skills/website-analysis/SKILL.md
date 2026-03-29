---
name: website-analysis
description: Use this skill when the user asks to analyze website performance, run Lighthouse audits, or check Core Web Vitals.
---

# Website Performance Analysis

This skill provides tools for analyzing website performance using Lighthouse.

## Running an Analysis

### Prerequisites

Ensure Lighthouse is available (will be installed via npx if not present):

```bash
npx lighthouse --version
```

### Quick Analysis

Run the analysis script to get a comprehensive report:

```bash
python3 .claude/skills/website-analysis/analyze.py https://example.com
```

### Output

The script outputs:
- Core Web Vitals scores
- Performance category scores
- Top optimization opportunities
- Largest resources by size
- Accessibility issues

### Full Lighthouse Report

To generate a full HTML report for manual inspection:

```bash
npx lighthouse https://christophe.vg --output=html --output-path=docs/performance-audit-$(date +%Y-%m-%d).html --view
```

## Interpreting Results

### Core Web Vitals Thresholds

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤2.5s | 2.5s-4.0s | >4.0s |
| FID | ≤100ms | 100ms-300ms | >300ms |
| CLS | ≤0.1 | 0.1-0.25 | >0.25 |

### Performance Score Interpretation

- 90-100: Good
- 50-89: Needs Improvement
- 0-49: Poor

## Common Optimizations

### Images (Largest Impact)

1. **Convert to WebP**: Use `cwebp` or image processing tools
2. **Compress**: Target <100KB for most images
3. **Lazy load**: Add `loading="lazy"` to images below fold
4. **Responsive**: Use `srcset` for different viewport sizes

### JavaScript

1. **Tree shake**: Remove unused code
2. **Code split**: Load non-critical JS asynchronously
3. **Minify**: Ensure production builds are minified

### CSS

1. **Critical CSS**: Inline above-fold styles
2. **Defer non-critical**: Load fonts and styles asynchronously

## Storing Results

Store audit reports in `docs/performance-audit-YYYY-MM-DD.md` for historical tracking.