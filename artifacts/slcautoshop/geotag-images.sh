#!/bin/bash
# Geotag symptom page images with Scott's Auto & Clutch Repair shop metadata.
# Run after dropping generated images into public/assets/.
#
# Usage: bash geotag-images.sh

ASSETS="$(dirname "$0")/public/assets"

# Shop metadata
LAT="40.7183"
LON="-111.8883"
CITY="Salt Lake City"
STATE="UT"
ZIP="84117"
ADDRESS="144 W Crystal Ave, Salt Lake City, UT 84117"
DATE="2026:05:11 10:00:00"

geotag() {
  local file="$ASSETS/$1"
  local desc="$2"
  local keywords="$3"

  if [ ! -f "$file" ]; then
    echo "SKIP (not found): $1"
    return
  fi

  exiftool -overwrite_original \
    -GPSLatitude="$LAT" \
    -GPSLatitudeRef=N \
    -GPSLongitude="${LON#-}" \
    -GPSLongitudeRef=W \
    -DateTimeOriginal="$DATE" \
    -CreateDate="$DATE" \
    -ImageDescription="$desc" \
    -XMP:Description="$desc" \
    -XMP:Subject="$keywords" \
    -XMP:City="$CITY" \
    -XMP:State="$STATE" \
    -XMP:CountryCode="US" \
    -XMP:Location="$ADDRESS" \
    -Copyright="Scott's Auto & Clutch Repair, $ADDRESS" \
    "$file" && echo "Tagged: $1"
}

geotag \
  "clutch-disc-inspection-slc.webp" \
  "Worn clutch disc inspection at Scott's Auto & Clutch Repair, 144 W Crystal Ave, Salt Lake City UT 84117" \
  "clutch repair, clutch slipping, clutch disc, Salt Lake City auto repair, Scott's Auto"

geotag \
  "clutch-repair-mechanic-slc.webp" \
  "Clutch replacement in progress at Scott's Auto & Clutch Repair, Salt Lake City UT — specialists since 1990" \
  "clutch replacement, auto mechanic, Salt Lake City, Scott's Auto & Clutch Repair"

echo "Done."
