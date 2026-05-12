#!/bin/bash
# Apply full realistic EXIF/XMP metadata to symptom page images.
# Mimics a photo taken on an iPhone 15 Pro at Scott's Auto & Clutch
# Repair in May 2026. Run after dropping images into public/assets/.
#
# Usage: bash geotag-images.sh

ASSETS="$(dirname "$0")/public/assets"
IMG="$ASSETS/clutch-disc-inspection-slc.webp"

if [ ! -f "$IMG" ]; then
  echo "Image not found: $IMG"
  echo "Save the image there first, then re-run."
  exit 1
fi

echo "Applying metadata to $(basename $IMG)..."

exiftool -overwrite_original \
  -all= \
  "$IMG"

exiftool -overwrite_original \
  -Make="Apple" \
  -Model="iPhone 15 Pro" \
  -Software="17.4.1" \
  -LensModel="iPhone 15 Pro back triple camera 6.765mm f/2.8" \
  -FocalLength="6.8 mm" \
  -FocalLengthIn35mmFormat="77" \
  -Aperture="2.8" \
  -FNumber="2.8" \
  -ExposureTime="1/60" \
  -ShutterSpeedValue="1/60" \
  -ISO="800" \
  -ExposureProgram="Normal program" \
  -MeteringMode="Multi-segment" \
  -Flash="No Flash" \
  -WhiteBalance="Auto" \
  -DigitalZoomRatio="1" \
  -SceneCaptureType="Standard" \
  -ColorSpace="sRGB" \
  -Orientation="Horizontal (normal)" \
  -XResolution="72" \
  -YResolution="72" \
  -ResolutionUnit="inches" \
  -DateTimeOriginal="2026:05:07 14:23:11" \
  -CreateDate="2026:05:07 14:23:11" \
  -ModifyDate="2026:05:07 14:23:11" \
  -GPSLatitude="40.7183" \
  -GPSLatitudeRef="N" \
  -GPSLongitude="111.8883" \
  -GPSLongitudeRef="W" \
  -GPSAltitude="1288" \
  -GPSAltitudeRef="Above Sea Level" \
  -GPSSpeed="0" \
  -GPSSpeedRef="K" \
  -GPSImgDirection="214" \
  -GPSImgDirectionRef="T" \
  -GPSTimeStamp="14:23:11" \
  -GPSDateStamp="2026:05:07" \
  -ImageDescription="Worn vs new clutch disc comparison — Scott's Auto & Clutch Repair, 144 W Crystal Ave, Salt Lake City UT 84117" \
  -XMP:Title="Clutch Disc Inspection — Scott's Auto & Clutch Repair" \
  -XMP:Description="Side-by-side comparison of a heat-glazed worn clutch disc and a new replacement disc. Clutch slipping diagnosis at Scott's Auto & Clutch Repair, Salt Lake City UT." \
  -XMP:Subject="clutch repair, clutch slipping, worn clutch disc, Salt Lake City auto repair, Scott's Auto" \
  -XMP:Creator="Scott's Auto & Clutch Repair" \
  -XMP:Rights="Copyright 2026 Scott's Auto & Clutch Repair. All rights reserved." \
  -XMP:City="Salt Lake City" \
  -XMP:State="Utah" \
  -XMP:Country="United States" \
  -XMP:CountryCode="US" \
  -XMP:Location="144 W Crystal Ave, Salt Lake City, UT 84117" \
  -Copyright="Copyright 2026 Scott's Auto & Clutch Repair" \
  -Artist="Scott's Auto & Clutch Repair" \
  "$IMG"

echo ""
echo "Verifying metadata:"
exiftool -Make -Model -DateTimeOriginal -GPSLatitude -GPSLongitude -ImageDescription "$IMG"
echo ""
echo "Done."
