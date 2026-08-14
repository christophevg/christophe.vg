#!/bin/bash
#
# check-webp.sh - Audit and ensure WebP versions exist for required images
#
# This script identifies all images that need .webp versions (based on which
# templates actually serve WebP via <picture> tags) and generates any that
# are missing using generate-webp.sh.
#
# Rules for requiring WebP:
#   1. Header images: referenced in post front matter as `header.image`
#      (served by page__hero.html via <picture>)
#      Location: */images/header/
#      Exception: external URLs (contain ://), overlay images (header.overlay_image)
#
#   2. Timeline banner images: referenced in _data/timeline.yaml
#      (served by timeline.html via <picture>)
#      Location: */images/banner/
#
#   3. Hardcoded <picture> images in templates (already exist, not auto-generated)
#
# Usage:
#   ./scripts/check-webp.sh              # Check and generate missing WebP
#   ./scripts/check-webp.sh --check      # Check only, report missing (no generation)
#   ./scripts/check-webp.sh --dry-run    # Show what would be generated
#
# Environment variables:
#   QUALITY - WebP quality (default: 85, passed to generate-webp.sh)
#
# Exit codes:
#   0 - All required WebP versions exist (or were generated)
#   1 - Some WebP versions are missing (in --check mode)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
QUALITY=${QUALITY:-85}
MODE="generate"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Parse arguments
for arg in "$@"; do
  case $arg in
    --check)   MODE="check" ;;
    --dry-run) MODE="dry-run" ;;
    *) echo -e "${RED}Unknown argument: $arg${NC}"; exit 1 ;;
  esac
done

echo -e "${BLUE}=== WebP Audit ===${NC}"
if [[ $MODE == "check" ]]; then
  echo -e "Mode: ${YELLOW}Check only (report missing)${NC}"
elif [[ $MODE == "dry-run" ]]; then
  echo -e "Mode: ${YELLOW}Dry run (show what would be generated)${NC}"
else
  echo -e "Mode: ${GREEN}Check and generate${NC}"
fi
echo ""

# Counters
TOTAL_REQUIRED=0
TOTAL_EXISTING=0
TOTAL_MISSING=0
TOTAL_GENERATED=0
TOTAL_FAILED=0

# Array to collect missing images for summary
declare -a MISSING_LIST

# Function to check if a WebP version exists for a given image path
# Arguments: $1 = full image path (relative to repo root, starting with /)
# Returns: 0 if WebP exists, 1 if missing
check_webp_exists() {
  local image_path="$1"
  # Remove leading slash for filesystem path
  local fs_path="${image_path#/}"

  # Get the webp equivalent path
  local webp_path="${fs_path%.*}.webp"

  if [[ -f "$REPO_DIR/$webp_path" ]]; then
    return 0
  else
    return 1
  fi
}

# Function to extract category and image name from a path like
# /koken/images/header/rode-lasagnesoep.jpeg
# Sets: CATEGORY, IMAGE_NAME
extract_parts() {
  local image_path="$1"
  # Remove leading slash
  local p="${image_path#/}"

  # Extract category (first path component)
  CATEGORY="${p%%/*}"

  # Extract the filename without extension
  local filename="$(basename "$p")"
  IMAGE_NAME="${filename%.*}"
}

# Function to process a single required image
# Arguments: $1 = image path (as referenced in front matter, starting with /)
#            $2 = source description (for logging)
process_image() {
  local image_path="$1"
  local source_desc="$2"

  # Skip external URLs
  if [[ "$image_path" == *"://"* ]]; then
    return 0
  fi

  # Skip non-raster formats (svg, gif, pdf, etc.)
  local ext="${image_path##*.}"
  ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  if [[ "$ext" != "jpg" && "$ext" != "jpeg" && "$ext" != "png" ]]; then
    return 0
  fi

  TOTAL_REQUIRED=$((TOTAL_REQUIRED + 1))

  if check_webp_exists "$image_path"; then
    TOTAL_EXISTING=$((TOTAL_EXISTING + 1))
  else
    TOTAL_MISSING=$((TOTAL_MISSING + 1))
    MISSING_LIST+=("$image_path ($source_desc)")

    echo -e "  ${RED}✗ Missing:${NC} ${image_path}"
    echo -e "    Source: ${source_desc}"

    if [[ $MODE == "generate" || $MODE == "dry-run" ]]; then
      extract_parts "$image_path"

      if [[ $MODE == "dry-run" ]]; then
        echo -e "    ${CYAN}[DRY] Would run: ./scripts/generate-webp.sh $CATEGORY $IMAGE_NAME${NC}"
      else
        echo -e "    ${CYAN}Generating: ./scripts/generate-webp.sh $CATEGORY $IMAGE_NAME${NC}"
        if QUALITY="$QUALITY" "$SCRIPT_DIR/generate-webp.sh" "$CATEGORY" "$IMAGE_NAME" 2>&1 | \
           grep -E "(Generated|Failed|exists|Error|No images)" | head -5; then
          TOTAL_GENERATED=$((TOTAL_GENERATED + 1))
        else
          # Check if it was actually created
          local fs_path="${image_path#/}"
          local webp_path="${fs_path%.*}.webp"
          if [[ -f "$REPO_DIR/$webp_path" ]]; then
            TOTAL_GENERATED=$((TOTAL_GENERATED + 1))
          else
            TOTAL_FAILED=$((TOTAL_FAILED + 1))
            echo -e "    ${RED}✗ Generation failed${NC}"
          fi
        fi
      fi
    fi
  fi
}

# ── 1. Scan post front matter for header.image ──
echo -e "${BLUE}Scanning post header images...${NC}"
echo ""

# Search all markdown/md files in _posts directories for header.image
# Pattern: "image: /path/to/images/header/filename.ext"
# The image: field is typically indented under "header:" in front matter

while IFS= read -r match; do
  # grep output format: filename:linenumber:content
  # Extract file (everything up to first :)
  file="${match%%:*}"
  # Extract content (everything after second :)
  rest="${match#*:}"
  line_content="${rest#*:}"

  # Extract the path (everything after "image:")
  image_path="$(echo "$line_content" | sed 's/^[[:space:]]*image:[[:space:]]*//' | tr -d '"' | tr -d "'" | tr -d ' ')"

  # Skip empty, external, and non-header paths
  [[ -z "$image_path" ]] && continue
  [[ "$image_path" == *"://"* ]] && continue
  [[ "$image_path" != *"/images/header/"* ]] && continue

  # Get a short source description
  post_name="$(basename "$file")"
  process_image "$image_path" "post: $post_name"
done < <(find "$REPO_DIR" -type d -name "_posts" \
  -not -path "*/_site/*" -not -path "*/.git/*" -not -path "*/.jekyll-cache/*" \
  -exec sh -c 'grep -Hrn "^[[:space:]]*image:" "$1"/*.markdown "$1"/*.md 2>/dev/null || true' _ {} \;)

echo ""

# ── 2. Scan timeline.yaml for banner images ──
echo -e "${BLUE}Scanning timeline banner images...${NC}"
echo ""

TIMELINE_FILE="$REPO_DIR/_data/timeline.yaml"
if [[ -f "$TIMELINE_FILE" ]]; then
  while IFS= read -r line; do
    # Extract path from "src: /path/to/images/banner/filename.ext"
    image_path="$(echo "$line" | sed -n 's/^[[:space:]]*src:[[:space:]]*//p' | tr -d '"' | tr -d "'")"

    [[ -z "$image_path" ]] && continue
    [[ "$image_path" == *"://"* ]] && continue
    [[ "$image_path" != *"/images/banner/"* ]] && continue

    process_image "$image_path" "timeline.yaml"
  done < <(grep '^\s*src:' "$TIMELINE_FILE")
fi

echo ""

# ── 3. Check hardcoded template images ──
echo -e "${BLUE}Checking hardcoded template images...${NC}"
echo ""

# These are images directly referenced in _includes/*.html and 404.html
# with <source srcset="...webp" type="image/webp"> patterns.
# We check that the webp version exists.

check_hardcoded() {
  local webp_path="$1"
  local template="$2"

  local webp_fs="${webp_path#/}"

  TOTAL_REQUIRED=$((TOTAL_REQUIRED + 1))

  if [[ -f "$REPO_DIR/$webp_fs" ]]; then
    TOTAL_EXISTING=$((TOTAL_EXISTING + 1))
  else
    TOTAL_MISSING=$((TOTAL_MISSING + 1))
    MISSING_LIST+=("$webp_path (hardcoded in $template)")
    echo -e "  ${RED}✗ Missing:${NC} ${webp_path}"
    echo -e "    Source: hardcoded in ${template}"
    echo -e "    ${YELLOW}Note: Hardcoded images must be created manually.${NC}"
  fi
}

# From hi.html: /assets/images/nametag.webp
check_hardcoded "/assets/images/nametag.webp" "hi.html"
# From 404.html: /assets/images/header/current.webp
check_hardcoded "/assets/images/header/current.webp" "404.html"
# From 404.html: /assets/images/avatar.webp
check_hardcoded "/assets/images/avatar.webp" "404.html"

echo ""

# ── Summary ──
echo -e "${BLUE}=== Summary ===${NC}"
echo ""
echo -e "Required WebP images:  ${TOTAL_REQUIRED}"
echo -e "  Already existing:    ${GREEN}${TOTAL_EXISTING}${NC}"
echo -e "  Missing:             ${RED}${TOTAL_MISSING}${NC}"

if [[ $TOTAL_GENERATED -gt 0 ]]; then
  echo -e "  Generated now:       ${GREEN}${TOTAL_GENERATED}${NC}"
fi
if [[ $TOTAL_FAILED -gt 0 ]]; then
  echo -e "  Generation failed:   ${RED}${TOTAL_FAILED}${NC}"
fi

echo ""

if [[ $TOTAL_MISSING -eq 0 ]]; then
  echo -e "${GREEN}✓ All required WebP versions exist.${NC}"
  exit 0
else
  if [[ $MODE == "check" ]]; then
    echo -e "${RED}Found ${TOTAL_MISSING} missing WebP version(s).${NC}"
    echo ""
    echo "Run ./scripts/check-webp.sh to generate them."
    exit 1
  elif [[ $MODE == "dry-run" ]]; then
    echo -e "${YELLOW}Would generate ${TOTAL_MISSING} WebP version(s).${NC}"
    echo ""
    echo "Run ./scripts/check-webp.sh (without --dry-run) to generate them."
    exit 0
  else
    if [[ $TOTAL_FAILED -gt 0 ]]; then
      echo -e "${RED}${TOTAL_FAILED} WebP version(s) failed to generate.${NC}"
      exit 1
    else
      echo -e "${GREEN}✓ Generated ${TOTAL_GENERATED} missing WebP version(s).${NC}"
      exit 0
    fi
  fi
fi