# VerseGuide Data Extraction Guide

## Overview

This document describes the process for extracting and validating data from VerseGuide for integration into the Lonely Planet: Star Citizen project.

## Data Files

The following JSON files exist in `docs/verseguide-data/`:

| File | Status | Description |
|------|--------|-------------|
| `stanton-template.json` | ⚠️ Template | Base structure for Stanton system (incomplete) |
| `pyro.json` | ✅ Complete | Pyro system data with 6 planets, POIs, stations, jump points |
| `nyx.json` | ✅ Complete | Nyx system data with 3 planets, Delamar POIs, stations, belts |

## Validation

Run the validation script to check JSON integrity:

```bash
python3 scripts/validate-verseguide-json.py --verbose
```

This checks:
- Valid JSON syntax
- Required fields presence
- Structure consistency
- Image reference coverage

## Extraction Process

### Method

VerseGuide data is extracted from their website using browser automation. The process involves:

1. **Data Discovery**: Navigate to VerseGuide and identify extractable locations
2. **Structure Mapping**: Map VerseGuide data to the project's JSON schema
3. **Field Extraction**: Capture system, planet, POI, station, and navigation data
4. **Validation**: Run validation script to verify structure
5. **Documentation**: Record extraction details for future reference

### Schema Mapping

The VerseGuide data maps to the following JSON structure:

```json
{
  "meta": {
    "version": "1.0",
    "source": "verseguide.com",
    "lastUpdated": "YYYY-MM-DD",
    "system": "SYSTEM_NAME"
  },
  "system": {
    "name": "System Name",
    "type": "Star Type",
    "description": "System overview",
    "fromVerseGuide": true
  },
  "planets": [
    {
      "id": "PLANET_ID",
      "name": "Planet Name",
      "type": "Terrestrial/Gas Giant/Asteroid",
      "description": "Planet overview",
      "fromVerseGuide": true,
      "coordinates": { "x": 0, "y": 0, "z": 0 },
      "pois": [
        {
          "id": "poi-id",
          "name": "POI Name",
          "type": "settlement/mining-facility/etc",
          "category": "settlement/mining/industrial/etc",
          "description": "POI description",
          "coordinates": { "x": 0, "y": 0, "z": 0 },
          "fromVerseGuide": true,
          "attribution": "full"
        }
      ]
    }
  ],
  "stations": [...],
  "navigation": {
    "jumpPoints": [...]
  }
}
```

### Image Requirements

**Important**: Images from VerseGuide cannot be downloaded directly due to licensing restrictions.

Instead:

1. **Image Capture**: Screenshots must be taken in-game
2. **Optimization**: Convert to WebP format
3. **Organization**: Place in `/public/images/{system}/{planet}/`

See `image-assets-status.md` for current coverage and requirements.

## Image Optimization

### Tools

Install WebP tools:

```bash
# Ubuntu/Debian
sudo apt-get install webp

# macOS
brew install webp
```

### Conversion Commands

#### JPEG to WebP
```bash
cwebp -q 80 input.jpg -o output.webp
```

#### PNG to WebP
```bash
cwebp -q 80 input.png -o output.webp
```

#### Batch conversion
```bash
for f in *.jpg; do
  cwebp -q 80 "$f" -o "${f%.jpg}.webp"
done
```

### Naming Convention

```
{system}-{planet}-{location}-{feature}.webp
```

Examples:
- `pyro-3-serpents-rest.webp`
- `nyx-delamar-grand-barter.webp`
- `stanton-hurston-lorville.webp`

## Coordinate System

VerseGuide uses a local coordinate system relative to each planet. For the project:

- **Planet coordinates**: `{ "x": 0, "y": 0, "z": 0 }` (placeholder - actual values require in-game verification)
- **POI coordinates**: `{ "x": 0, "y": 0, "z": 0 }` (placeholder - actual values require in-game verification)
- **Navigation**: Relative distances and travel times preserved from source

## Attribution Requirements

### VerseGuide Images
Images from VerseGuide require full attribution:

```
Photo by [photographer] via VerseGuide
```

Use the `ImageAttribution.astro` component:

```astro
<ImageAttribution 
  imageSource="VerseGuide" 
  locationName="Serpent's Rest Outpost"
  imageUrl="https://verseguide.com/location/..."
  photographer="lov3pixel"
/>
```

### In-Game Captures
No external attribution required for images captured directly from Star Citizen.

## Workflow

### Adding a New System

1. **Extract data**: Follow the extraction process above
2. **Save JSON**: Place in `docs/verseguide-data/`
3. **Validate**: Run validation script
4. **Add images**: Capture and optimize images
5. **Create pages**: Add MDX files for each location
6. **Update index**: Add to relevant index pages

### Updating Existing Data

1. **Review changes**: Check what needs updating
2. **Edit JSON**: Update fields in the appropriate JSON file
3. **Validate**: Run validation script
4. **Update images**: Replace/optimize if needed
5. **Test build**: Run `npm run build` to verify

## Troubleshooting

### Common Issues

#### Invalid JSON
- Check for trailing commas
- Verify all strings are quoted
- Use a JSON validator

#### Missing Required Fields
- Check the schema documentation
- Run validation script with `--verbose` flag

#### Image Files Not Found
- Verify file paths in frontmatter match actual filenames
- Check case sensitivity (Linux vs Windows)
- Ensure files are in `/public/images/`

## Related Documentation

- `image-assets-status.md`: Current image coverage and requirements
- `verseguide-asset-provenance.md`: Image licensing and clearance status
- `TODO.md`: Project TODO list including VerseGuide integration

## Contact

For questions about the VerseGuide integration:
1. Check this guide first
2. Review `docs/verseguide-data/` for data examples
3. Run `python3 scripts/validate-verseguide-json.py --help` for validation help