#!/bin/bash
#
# clean-webp.sh - Remove unused WebP files from the repository
#
# WebP versions are only needed for images served via <picture> tags in
# templates. Only header images, timeline banner images, and a few hardcoded
# images use <picture>. WebP files in full/ and thumb/ directories are never
# referenced by any template and are dead weight.
#
# This script:
#   1. Identifies all .webp files in the repository
#   2. Determines which ones are actually referenced by templates
#   3. Removes the unreferenced ones
#
# Usage:
#   ./scripts/clean-webp.sh              # Remove unused WebP files
#   ./scripts/clean-webp.sh --check      # Report only, don't delete
#
# Exit codes:
#   0 - Success (or no unused files found)
#   1 - Error

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

MODE="clean"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Parse arguments
for arg in "$@"; do
  case $arg in
    --check) MODE="check" ;;
    *) echo -e "${RED}Unknown argument: $arg${NC}"; exit 1 ;;
  esac
done

echo -e "${BLUE}=== WebP Cleanup ===${NC}"
if [[ $MODE == "check" ]]; then
  echo -e "Mode: ${YELLOW}Check only (report unused files)${NC}"
else
  echo -e "Mode: ${RED}Remove unused WebP files${NC}"
fi
echo ""

# Directories where WebP files ARE used (by <picture> tags in templates):
#   */images/header/     - page__hero.html
#   */images/banner/     - timeline.html
#   assets/images/       - hardcoded in hi.html, 404.html
#
# Directories where WebP files are NOT used (plain <img> tags only):
#   */images/full/       - image, images, gallery, figure includes
#   */images/thumb/      - image, images, thumbs, archive-single includes
#
# Additionally, some specific assets/images/ webp files are used and must
# be kept. We'll protect assets/images/ entirely and only clean full/ and thumb/

UNUSED_COUNT=0
UNUSED_SIZE=0
KEPT_COUNT=0
declare -a UNUSED_FILES

# Find all .webp files and classify them
while IFS= read -r -d '' webp_file; do
  # Get path relative to repo
  rel_path="${webp_file#$REPO_DIR/}"

  # Determine if this file is in a "used" location
  is_used=false

  # Header images: */images/header/*.webp
  if [[ "$rel_path" == */images/header/*.webp ]]; then
    is_used=true
  fi

  # Banner images: */images/banner/*.webp
  if [[ "$rel_path" == */images/banner/*.webp ]]; then
    is_used=true
  fi

  # Assets images: assets/images/*.webp (hardcoded template references)
  if [[ "$rel_path" == assets/images/*.webp ]]; then
    is_used=true
  fi

  # Placeholders: assets/images/placeholders/*.webp
  if [[ "$rel_path" == assets/images/placeholders/*.webp ]]; then
    is_used=true
  fi

  # Customers: assets/images/customers/*.webp (used in about pages)
  if [[ "$rel_path" == assets/images/customers/*.webp ]]; then
    is_used=true
  fi

  if $is_used; then
    KEPT_COUNT=$((KEPT_COUNT + 1))
  else
    # Get file size
    file_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
    UNUSED_COUNT=$((UNUSED_COUNT + 1))
    UNUSED_SIZE=$((UNUSED_SIZE + file_size))
    UNUSED_FILES+=("$rel_path")

    size_kb=$((file_size / 1024))
    if [[ $MODE == "check" ]]; then
      echo -e "  ${YELLOW}UNUSED${NC} ${rel_path} (${size_kb}KB)"
    else
      rm "$webp_file"
      echo -e "  ${RED}REMOVED${NC} ${rel_path} (${size_kb}KB)"
    fi
  fi

done < <(find "$REPO_DIR" \
  \( -path "$REPO_DIR/_site" -o -path "$REPO_DIR/.git" -o -path "$REPO_DIR/.jekyll-cache" \) -prune \
  -o -iname "*.webp" -print0 2>/dev/null)

echo ""
echo -e "${BLUE}=== Summary ===${NC}"
echo ""
echo -e "WebP files kept (in used locations):   ${GREEN}${KEPT_COUNT}${NC}"
echo -e "WebP files unused (in unused locations): ${RED}${UNUSED_COUNT}${NC}"

if [[ $UNUSED_COUNT -gt 0 ]]; then
  total_mb=$((UNUSED_SIZE / 1024 / 1024))
  total_kb=$((UNUSED_SIZE / 1024))
  if [[ $total_mb -gt 0 ]]; then
    echo -e "Total size of unused files:            ${YELLOW}${total_mb}MB${NC}"
  else
    echo -e "Total size of unused files:            ${YELLOW}${total_kb}KB${NC}"
  fi
fi

echo ""

if [[ $UNUSED_COUNT -eq 0 ]]; then
  echo -e "${GREEN}✓ No unused WebP files found.${NC}"
else
  if [[ $MODE == "check" ]]; then
    echo -e "${YELLOW}Found ${UNUSED_COUNT} unused WebP file(s).${NC}"
    echo ""
    echo "Run ./scripts/clean-webp.sh (without --check) to remove them."
  else
    echo -e "${GREEN}✓ Removed ${UNUSED_COUNT} unused WebP file(s).${NC}"
    echo ""
    echo "Consider committing these changes."
  fi
fi

exit 0