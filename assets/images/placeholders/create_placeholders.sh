#!/bin/bash

# Placeholder Image Generator for christophe.vg
# Creates thumbnail (800x600) and header (1200x240) placeholder images
# with category-specific color schemes, in both PNG and WebP formats.

PLACEHOLDER_DIR="assets/images/placeholders"

# Generic placeholders (neutral gray)
create_placeholder() {
  local name=$1
  local bg=$2
  local accent=$3
  local width=$4
  local height=$5
  local label=$6

  local png_file="${PLACEHOLDER_DIR}/${name}.png"
  local webp_file="${PLACEHOLDER_DIR}/${name}.webp"

  magick -size ${width}x${height} \
    gradient:"${bg}-${accent}" \
    -gravity center \
    -fill "rgba(255,255,255,0.8)" \
    -font Helvetica \
    -pointsize $((width / 20)) \
    -annotate 0 "${label}" \
    "${png_file}"

  # Create WebP version for browser optimization
  magick "${png_file}" -quality 85 "${webp_file}"

  echo "Created: ${name}.png / ${name}.webp"
}

echo "Creating placeholder images..."
echo ""

# Generic placeholders (neutral gray)
create_placeholder "thumb-placeholder" "#4a5568" "#718096" 800 600 "Thumbnail Placeholder"
create_placeholder "header-placeholder" "#4a5568" "#718096" 1200 240 "Header Placeholder"

# Category-specific placeholders

# About - deep blue (professional)
create_placeholder "thumb-about" "#2c5282" "#4299e1" 800 600 "About"
create_placeholder "header-about" "#2c5282" "#4299e1" 1200 240 "About"

# Technology - green (tech/growth)
create_placeholder "thumb-technology" "#276749" "#48bb78" 800 600 "Technology"
create_placeholder "header-technology" "#276749" "#48bb78" 1200 240 "Technology"

# Koken - orange (cooking/warmth)
create_placeholder "thumb-koken" "#c05621" "#ed8936" 800 600 "Koken"
create_placeholder "header-koken" "#c05621" "#ed8936" 1200 240 "Koken"

# Zeilen - cyan-blue (water/sailing)
create_placeholder "thumb-zeilen" "#2b6cb0" "#4299e1" 800 600 "Zeilen"
create_placeholder "header-zeilen" "#2b6cb0" "#4299e1" 1200 240 "Zeilen"

# Fotografie - purple (creative)
create_placeholder "thumb-fotografie" "#6b46c1" "#9f7aea" 800 600 "Fotografie"
create_placeholder "header-fotografie" "#6b46c1" "#9f7aea" 1200 240 "Fotografie"

# Makes - red (maker/DIY)
create_placeholder "thumb-makes" "#c53030" "#fc8181" 800 600 "Makes"
create_placeholder "header-makes" "#c53030" "#fc8181" 1200 240 "Makes"

echo ""
echo "Done! Files created in ${PLACEHOLDER_DIR}/"