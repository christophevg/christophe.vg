#!/bin/bash

SIZE=$1
FOLDER=${2:-.}

find $FOLDER -path ./_site -prune -o \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -print0 | \
while read -d $'\0' -r image; do
  read width height < <(sips -g pixelWidth -g pixelHeight "$image" | \
  awk '/Width:/{width=$2} /Height:/{height=$2} END{print width " " height}')
  if [[ $height -gt $SIZE || $width -gt $SIZE ]]; then
    echo $image $width $height
    sips -Z $SIZE $image
  fi
done
