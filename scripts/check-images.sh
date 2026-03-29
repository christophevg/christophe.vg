#!/bin/bash
#
# check-images.sh - Report oversized images that should be optimized
#
# Usage:
#   ./scripts/check-images.sh [SIZE] [FOLDER]
#
# Arguments:
#   SIZE   - Maximum dimension in pixels (default: 1200)
#   FOLDER - Directory to scan (default: .)
#
# Environment variables:
#   MAX_IMAGE_SIZE   - Override default size
#   MAX_FILE_SIZE_KB - Maximum file size in KB (default: 200)
#
# Exit codes:
#   0 - All images within limits
#   1 - Oversized images found
#
# Examples:
#   ./scripts/check-images.sh                    # Check all images, max 1200px
#   ./scripts/check-images.sh 800                # Check all images, max 800px
#   ./scripts/check-images.sh 1200 technology/   # Check technology folder only
#   MAX_FILE_SIZE_KB=100 ./scripts/check-images.sh # Also check file size

set -e

# Configuration
MAX_SIZE=${MAX_IMAGE_SIZE:-${1:-1200}}
MAX_FILE_SIZE=${MAX_FILE_SIZE_KB:-200}
FOLDER=${2:-.}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Image Size Report ===${NC}"
echo -e "Scanning: ${FOLDER}"
echo -e "Max dimension: ${MAX_SIZE}px"
echo -e "Max file size: ${MAX_FILE_SIZE}KB"
echo ""

# Counter for oversized images
OVERSIZED_COUNT=0

# Find all images and process them
while IFS= read -r -d '' image; do
  # Get dimensions (macOS sips)
  if command -v sips &>/dev/null; then
    read width height < <(sips -g pixelWidth -g pixelHeight "$image" 2>/dev/null | \
      awk '/pixelWidth:/{w=$2} /pixelHeight:/{h=$2} END{print w " " h}')
  # Linux alternative (ImageMagick)
  elif command -v identify &>/dev/null; then
    read width height < <(identify -format "%w %h" "$image" 2>/dev/null)
  else
    echo -e "${YELLOW}Warning: Neither sips nor ImageMagick found. Install one to check dimensions.${NC}"
    width=0
    height=0
  fi

  # Get file size
  file_size=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
  file_size_kb=$((file_size / 1024))

  # Build list of issues
  issues=""

  if [[ -n "$height" && -n "$width" ]] && [[ $height -gt $MAX_SIZE || $width -gt $MAX_SIZE ]]; then
    issues="dimension:${width}x${height}>${MAX_SIZE}px"
  fi

  if [[ $file_size_kb -gt $MAX_FILE_SIZE ]]; then
    if [[ -n $issues ]]; then
      issues="${issues}, "
    fi
    issues="${issues}filesize:${file_size_kb}KB>${MAX_FILE_SIZE}KB"
  fi

  # Report if there are issues
  if [[ -n $issues ]]; then
    OVERSIZED_COUNT=$((OVERSIZED_COUNT + 1))
    echo -e "${RED}✗${NC} $(basename "$image")"
    echo -e "  Path: ${image}"
    echo -e "  Issues: ${YELLOW}${issues}${NC}"
    echo ""
  fi

done < <(find "$FOLDER" \( -path "./_site" -o -path "./.git" -o -path "./node_modules" \) -prune -o \
  \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) -print0 2>/dev/null)

echo -e "${BLUE}=== Summary ===${NC}"
echo ""

if [[ $OVERSIZED_COUNT -gt 0 ]]; then
  echo -e "${RED}Found ${OVERSIZED_COUNT} oversized image(s) that need optimization.${NC}"
  echo ""
  echo "Run ./scripts/fix-images.sh to optimize them."
  echo ""
  exit 1
else
  echo -e "${GREEN}✓ All images within size limits.${NC}"
  exit 0
fi