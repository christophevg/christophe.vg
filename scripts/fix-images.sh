#!/bin/bash
#
# fix-images.sh - Optimize oversized images
#
# Usage:
#   ./scripts/fix-images.sh [SIZE] [FOLDER]
#
# Arguments:
#   SIZE   - Maximum dimension in pixels (default: 1200)
#   FOLDER - Directory to scan (default: .)
#
# Environment variables:
#   MAX_IMAGE_SIZE   - Override default size
#   MAX_FILE_SIZE_KB - Maximum file size in KB (default: 200)
#   DRY_RUN          - Set to 1 to preview changes without modifying files
#
# Examples:
#   ./scripts/fix-images.sh                    # Fix all oversized images
#   ./scripts/fix-images.sh 800                # Resize to max 800px
#   ./scripts/fix-images.sh 1200 technology/   # Fix technology folder only
#   DRY_RUN=1 ./scripts/fix-images.sh          # Preview changes only

set -e

# Configuration
MAX_SIZE=${MAX_IMAGE_SIZE:-${1:-1200}}
MAX_FILE_SIZE=${MAX_FILE_SIZE_KB:-200}
FOLDER=${2:-.}
DRY_RUN=${DRY_RUN:-0}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Counters
FIXED_COUNT=0
SKIPPED_COUNT=0
ERROR_COUNT=0

echo -e "${BLUE}=== Image Optimization ===${NC}"
echo -e "Scanning: ${FOLDER}"
echo -e "Max dimension: ${MAX_SIZE}px"
echo -e "Max file size: ${MAX_FILE_SIZE}KB"
if [[ $DRY_RUN -eq 1 ]]; then
  echo -e "${YELLOW}Mode: DRY RUN (no changes will be made)${NC}"
fi
echo ""

# Check for required tools
if command -v sips &>/dev/null; then
  RESIZE_CMD="sips"
elif command -v convert &>/dev/null; then
  RESIZE_CMD="convert"
else
  echo -e "${RED}Error: Neither sips (macOS) nor ImageMagick (convert) found.${NC}"
  echo "Install one of:"
  echo "  macOS: sips is built-in"
  echo "  Linux: apt install imagemagick"
  exit 1
fi

# Function to resize an image
resize_image() {
  local image="$1"
  local size="$2"

  if [[ $DRY_RUN -eq 1 ]]; then
    echo -e "  ${CYAN}[DRY] Would resize to ${size}px${NC}"
    return 0
  fi

  if [[ $RESIZE_CMD == "sips" ]]; then
    sips -Z "$size" "$image" &>/dev/null
  else
    convert "$image" -resize "${size}x${size}>" "$image" 2>/dev/null
  fi
}

# Function to compress an image (requires ImageMagick or optipng/jpegoptim)
compress_image() {
  local image="$1"
  local quality="${2:-85}"

  if [[ $DRY_RUN -eq 1 ]]; then
    echo -e "  ${CYAN}[DRY] Would compress to ${quality}% quality${NC}"
    return 0
  fi

  local ext="${image##*.}"
  ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  case "$ext" in
    jpg|jpeg)
      if command -v jpegoptim &>/dev/null; then
        jpegoptim --max=$quality --strip-all "$image" &>/dev/null
      elif command -v convert &>/dev/null; then
        convert "$image" -quality $quality "$image" 2>/dev/null
      fi
      ;;
    png)
      if command -v optipng &>/dev/null; then
        optipng -quiet "$image" 2>/dev/null
      elif command -v convert &>/dev/null; then
        convert "$image" -quality $quality "$image" 2>/dev/null
      fi
      ;;
    webp)
      if command -v cwebp &>/dev/null; then
        # WebP compression is more complex, skip for now
        :
      fi
      ;;
  esac
}

# Find all images and process them
while IFS= read -r -d '' image; do
  # Get dimensions
  if [[ $RESIZE_CMD == "sips" ]]; then
    read width height < <(sips -g pixelWidth -g pixelHeight "$image" 2>/dev/null | \
      awk '/pixelWidth:/{w=$2} /pixelHeight:/{h=$2} END{print w " " h}')
  else
    read width height < <(identify -format "%w %h" "$image" 2>/dev/null)
  fi

  # Get file size
  file_size=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
  file_size_kb=$((file_size / 1024))

  # Determine what needs to be done
  needs_resize=0
  needs_compress=0

  if [[ -n "$height" && -n "$width" ]] && [[ $height -gt $MAX_SIZE || $width -gt $MAX_SIZE ]]; then
    needs_resize=1
  fi

  if [[ $file_size_kb -gt $MAX_FILE_SIZE ]]; then
    needs_compress=1
  fi

  # Skip if nothing to do
  if [[ $needs_resize -eq 0 && $needs_compress -eq 0 ]]; then
    continue
  fi

  echo -e "${YELLOW}Processing:${NC} $(basename "$image")"
  echo -e "  Path: ${image}"
  echo -e "  Current: ${width}x${height}, ${file_size_kb}KB"

  # Resize if needed
  if [[ $needs_resize -eq 1 ]]; then
    resize_image "$image" "$MAX_SIZE"
  fi

  # Compress if needed
  if [[ $needs_compress -eq 1 ]]; then
    compress_image "$image" 85
  fi

  # Get new file size if not dry run
  if [[ $DRY_RUN -eq 0 ]]; then
    new_size=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
    new_size_kb=$((new_size / 1024))
    savings=$((file_size_kb - new_size_kb))
    echo -e "  ${GREEN}✓ Saved ${savings}KB (${file_size_kb}KB → ${new_size_kb}KB)${NC}"
    FIXED_COUNT=$((FIXED_COUNT + 1))
  else
    FIXED_COUNT=$((FIXED_COUNT + 1))
  fi

  echo ""

done < <(find "$FOLDER" \( -path "./_site" -o -path "./.git" -o -path "./node_modules" \) -prune -o \
  \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) -print0 2>/dev/null)

# Summary
echo -e "${BLUE}=== Summary ===${NC}"
echo ""

if [[ $FIXED_COUNT -eq 0 ]]; then
  echo -e "${GREEN}✓ No images needed optimization.${NC}"
else
  if [[ $DRY_RUN -eq 1 ]]; then
    echo -e "${YELLOW}Would optimize ${FIXED_COUNT} image(s).${NC}"
    echo ""
    echo "Run without DRY_RUN=1 to apply changes."
  else
    echo -e "${GREEN}✓ Optimized ${FIXED_COUNT} image(s).${NC}"
    echo ""
    echo "Consider committing these changes."
  fi
fi

exit 0