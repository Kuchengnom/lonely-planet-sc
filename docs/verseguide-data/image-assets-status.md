# VerseGuide Image Assets Status

Reviewed: 2026-10-25

This document tracks which images are needed for the VerseGuide integration work.

## Overview

The VerseGuide integration project requires actual images for locations referenced in the JSON data files. These images cannot be downloaded from VerseGuide directly due to licensing and terms-of-use restrictions. Instead, images must be captured in-game and then optimized for web use.

## Current Image Coverage

### Pyro System
- **Status**: ✅ Partial coverage
- **Images available**: 18 images in `/public/images/pyro/`
- **JSON data**: Complete (pyro.json with 6 planets, POIs, stations, jump points, factions)
- **Coverage notes**:
  - Pyro I: 5 images (mining, crystal, sulfur, lava, claims)
  - Pyro II: 2 images (glass, spine)
  - Pyro III: 4 images (garden, Serpent's Rest, wastes, Old Serpent Channel)
  - Pyro IV: 3 images (mud flats, overlook, salvage yards)
  - Pyro V: 3 images (frozen city, pole station, Amber Lakes)
  - Pyro VI: 2 images (mining, rings)
  - Ruin Station: 1 image (broken deck)
  - From VerseGuide: 1 image (sacrens-plot.jpg) - Provisional clearance

### Nyx System
- **Status**: ✅ Basic coverage
- **Images available**: 3 images in `/public/images/nyx/`
- **JSON data**: Complete (nyx.json with 3 planets, Delamar/Levski POIs, 5 stations, 2 asteroid belts, 2 jump points)
- **Coverage notes**:
  - Glaciem Ring: 1 image (glaciem.webp)
  - Keeger Belt: 1 image (keeger.webp)
  - In-space view: 1 image (in-space.webp)
  - **Missing**: Specific images for Levski locations (Grand Barter, Conscientious Objects, Café Musain, Anthony Tanaka Memorial)

### Stanton System
- **Status**: ⚠️ Template exists, no extraction
- **Images available**: Many images in `/public/images/stanton/`
- **JSON data**: Only stanton-template.json exists withHurston/Lorville placeholder
- **Coverage notes**:
  - Needs full extraction from VerseGuide
  - Lorville (Hurston) - template shows need for image but actual data missing

## Required Image Assets

### Priority 1 - Missing Key Locations

| System | Planet/Location | Image Required | Notes |
|--------|-----------------|----------------|-------|
| Nyx | Levski (Delamar) | Multiple | Grand Barter, Conscientious Objects & Cordry's, Café Musain, Anthony Tanaka Memorial |
| Stanton | Hurston | Various | Lorville, and other locations from verseguide data |

### Priority 2 - Optimization & Organization

| System | Asset | Current Format | Target Format | Notes |
|--------|-------|----------------|---------------|-------|
| All | New captures | JPEG/PNG | WebP | For better compression and performance |
| Pyro | All | Mixed | WebP | Verify existing images are optimized |

## Image Optimization Process

### Tools Required
- `cwebp` (WebP encoder)
- `optipng` or `zopflipng` (PNG optimization)
- `jpegoptim` or `mozjpeg` (JPEG optimization)

### Command Examples

#### Convert JPEG to WebP
```bash
cwebp -q 80 input.jpg -o output.webp
```

#### Convert PNG to WebP
```bash
cwebp -q 80 input.png -o output.webp
```

#### Optimize existing WebP
```bash
cwebp -q 80 -m 6 -af input.webp -o output.webp
```

### Naming Convention
```
{system}-{planet}-{location}-{feature}.webp
```

Examples:
- `pyro-3-serpents-rest.webp`
- `nyx-delamar-grand-barter.webp`
- `stanton-hurston-lorville.webp`

## Next Steps

1. **Validate JSON structure** - Complete (see separate validation script)
2. **Document image requirements** - This document
3. **Capture missing images** - In-game screenshot capture
4. **Optimize to WebP** - Batch conversion
5. **Organize assets** - Move to proper directories
6. **Update JSON** - Add actual image references

## Attribution Requirements

Images from VerseGuide (like `sacrens-plot.jpg`) require:
- Full credit in `ImageAttribution` component
- Photographer credit: "Photography by **lov3pixel**, via VerseGuide"
- Source link to specific location page

Images captured in-game do not require VerseGuide attribution but should be credited to the site's photographer.

## Legal Notes

- **VerseGuide images**: Provisional clearance only. Terms-of-use review pending (see TODO.md line 321).
- **In-game captures**: No external attribution required.
- **All images**: Must be optimized to WebP for performance.