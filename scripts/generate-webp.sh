#!/bin/bash
#
# generate-webp.sh - Generate WebP versions of images
#
# Usage:
#   ./scripts/generate-webp.sh <category> <image_name>
#
# Arguments:
#   category   - Content category (e.g., koken, technology, about)
#   image_name - Image name without extension (e.g., rode-lasagnesoep)
#
# Environment variables:
#   QUALITY - WebP quality (default: 85)
#   DRY_RUN - Set to 1 to preview changes without modifying files
#
# Examples:
#   ./scripts/generate-webp.sh koken rode-lasagnesoep
#   ./scripts/generate-webp.sh technology screenshot-2024
#   QUALITY=90 ./scripts/generate-webp.sh koken lasagne
#   DRY_RUN=1 ./scripts/generate-webp.sh koken rode-lasagnesoep

set -e

# Configuration
QUALITY=${QUALITY:-85}
DRY_RUN=${DRY_RUN:-0}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Counters
GENERATED_COUNT=0
SKIPPED_COUNT=0
ERROR_COUNT=0

# Check arguments
if [[ $# -lt 2 ]]; then
  echo -e "${RED}Error: Missing arguments${NC}"
  echo ""
  echo "Usage: $0 <category> <image_name>"
  echo ""
  echo "Examples:"
  echo "  $0 koken rode-lasagnesoep"
  echo "  $0 technology screenshot-2024"
  echo ""
  exit 1
fi

CATEGORY="$1"
IMAGE_NAME="$2"

# Verify category directory exists
if [[ ! -d "$CATEGORY" ]]; then
  echo -e "${RED}Error: Category directory '$CATEGORY' not found${NC}"
  exit 1
fi

# Image subdirectories to check
IMAGE_DIRS=("full" "header" "thumb")

# Check for required tools
if command -v cwebp &>/dev/null; then
  CONVERT_CMD="cwebp"
elif command -v convert &>/dev/null; then
  CONVERT_CMD="convert"
else
  echo -e "${RED}Error: Neither cwebp (WebP tools) nor ImageMagick (convert) found.${NC}"
  echo "Install one of:"
  echo "  macOS: brew install webp"
  echo "  Linux: apt install webp"
  echo "  Alternative: apt install imagemagick"
  exit 1
fi

echo -e "${BLUE}=== WebP Generation ===${NC}"
echo -e "Category: ${CATEGORY}"
echo -e "Image: ${IMAGE_NAME}"
echo -e "Quality: ${QUALITY}%"
if [[ $DRY_RUN -eq 1 ]]; then
  echo -e "${YELLOW}Mode: DRY RUN (no changes will be made)${NC}"
fi
echo ""

# Function to generate WebP from an image
generate_webp() {
  local source="$1"
  local target="$2"

  if [[ $DRY_RUN -eq 1 ]]; then
    echo -e "  ${CYAN}[DRY] Would generate: $(basename "$target")${NC}"
    return 0
  fi

  if [[ $CONVERT_CMD == "cwebp" ]]; then
    cwebp -q "$QUALITY" "$source" -o "$target" &>/dev/null
  else
    convert "$source" -quality "$QUALITY" "$target" 2>/dev/null
  fi

  if [[ $? -eq 0 ]]; then
    local source_size=$(stat -f%z "$source" 2>/dev/null || stat -c%s "$source" 2>/dev/null)
    local target_size=$(stat -f%z "$target" 2>/dev/null || stat -c%s "$target" 2>/dev/null)
    local savings=$((source_size - target_size))
    local savings_kb=$((savings / 1024))
    echo -e "  ${GREEN}✓ Generated: $(basename "$target") (saved ${savings_kb}KB)${NC}"
    return 0
  else
    echo -e "  ${RED}✗ Failed to generate: $(basename "$target")${NC}"
    return 1
  fi
}

# Process each image directory
for dir in "${IMAGE_DIRS[@]}"; do
  image_dir="${CATEGORY}/images/${dir}"

  # Skip if directory doesn't exist
  if [[ ! -d "$image_dir" ]]; then
    continue
  fi

  # Find the source image (any extension)
  source_image=""
  for ext in jpg jpeg png gif JPG JPEG PNG GIF; do
    candidate="${image_dir}/${IMAGE_NAME}.${ext}"
    if [[ -f "$candidate" ]]; then
      source_image="$candidate"
      break
    fi
  done

  # Skip if no source image found
  if [[ -z "$source_image" ]]; then
    continue
  fi

  echo -e "${YELLOW}Processing:${NC} ${dir}/${IMAGE_NAME}"

  # Check if WebP already exists
  webp_image="${image_dir}/${IMAGE_NAME}.webp"
  if [[ -f "$webp_image" ]]; then
    echo -e "  ${GREEN}✓ WebP already exists, skipping${NC}"
    SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
    echo ""
    continue
  fi

  # Generate WebP
  if generate_webp "$source_image" "$webp_image"; then
    GENERATED_COUNT=$((GENERATED_COUNT + 1))
  else
    ERROR_COUNT=$((ERROR_COUNT + 1))
  fi

  echo ""
done

# Summary
echo -e "${BLUE}=== Summary ===${NC}"
echo ""

if [[ $GENERATED_COUNT -eq 0 && $SKIPPED_COUNT -eq 0 && $ERROR_COUNT -eq 0 ]]; then
  echo -e "${YELLOW}No images found for '${IMAGE_NAME}' in ${CATEGORY}${NC}"
  exit 1
elif [[ $DRY_RUN -eq 1 ]]; then
  echo -e "${YELLOW}Would generate ${GENERATED_COUNT} WebP image(s)${NC}"
  if [[ $SKIPPED_COUNT -gt 0 ]]; then
    echo -e "Skipped ${SKIPPED_COUNT} (already WebP)"
  fi
  echo ""
  echo "Run without DRY_RUN=1 to apply changes."
else
  if [[ $GENERATED_COUNT -gt 0 ]]; then
    echo -e "${GREEN}✓ Generated ${GENERATED_COUNT} WebP image(s)${NC}"
  fi
  if [[ $SKIPPED_COUNT -gt 0 ]]; then
    echo -e "Skipped ${SKIPPED_COUNT} (already WebP)"
  fi
  if [[ $ERROR_COUNT -gt 0 ]]; then
    echo -e "${RED}Failed ${ERROR_COUNT} image(s)${NC}"
    exit 1
  fi
  echo ""
  echo "Consider committing these changes."
fi

exit 0