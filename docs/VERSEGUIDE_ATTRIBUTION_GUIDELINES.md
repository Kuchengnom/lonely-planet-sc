# VerseGuide Attribution Guidelines

## Overview

This document outlines the attribution requirements and legal compliance guidelines for using VerseGuide data in the Lonely Planet: Star Citizen project.

## Key Findings from Terms of Use

### Basic Requirements

1. **VerseGuide Nature**: VerseGuide is an "unofficial Star Citizen fansite, run by a private individual as a personal, non-commercial fan project. It is not a company and not a separate legal entity."

2. **Disclaimer Requirement**: Any usage must include clear attribution that "VerseGuide is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies."

3. **Copyright**: "All content on this site not authored by its host or users are property of their respective owners."

### Required Attribution Elements

When using VerseGuide data (coordinates, location information, images):

1. **Inline Attribution**: For coordinates and data, link to VerseGuide with a clear indication of the source
2. **Footer Credit**: For pages with significant VerseGuide data, include the VerseGuideCredit component
3. **Image Credits**: All images sourced from VerseGuide must include attribution to the photographer where available

## Existing Components

The project already has three attribution components:

1. **ImageAttribution**: For images sourced from VerseGuide
2. **TextAttribution**: For coordinates, navigation info, and text-based VerseGuide data
3. **VerseGuideCredit**: For footer credits on pages with substantial VerseGuide usage

## Compliance Guidelines

### When to Use Each Component

| Use Case | Component | Location |
|----------|-----------|----------|
| Images from VerseGuide | `ImageAttribution` | Overlay on image or below image |
| Coordinates from VerseGuide | `CoordinateDisplay` or `TextAttribution` | Fast facts sidebar, inline text |
| Navigation routes from VerseGuide | `TextAttribution` | Inline text, step descriptions |
| Full-page VerseGuide data use | `VerseGuideCredit` | Footer section of page |

### Footer Credit Placement

The `VerseGuideCredit` component should be placed:
- At the end of the main content, before any "Sources" section
- After all POI/Attraction entries that use VerseGuide data
- Always visible (not hidden in hover states)

### Text Attribution Examples

```mdx
// For coordinates:
The location is at `808.662 / 417.866 / 415.655` 
<LocationDataAttribution dataType="coordinates" locationName="The River" />

// For navigation:
Follow the route to The River. 
<RouteAttribution locationName="The River" />

// For general content enhancement:
This guide is enhanced with data from VerseGuide. 
<ContentAttribution />
```

## Image Attribution

### When images are used from VerseGuide:

1. Include the photographer credit if available in `ImageAttribution.photographer`
2. Always link to the original VerseGuide location
3. Display attribution visibly (not hidden on hover for critical information)

### Image credit format:

```astro
<ImageAttribution
  imageSource="VerseGuide"
  locationName="The River"
  imageUrl="https://verseguide.com/location/..."
  photographer="lov3pixel"
  showOnHover={false}
/>
```

## Legal Disclaimers

### Required disclaimer text:

```
VerseGuide is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners. The official site is robertsspaceindustries.com.
```

This disclaimer should appear:
- In the `VerseGuideCredit` footer
- In the "Sources" section of pages with VerseGuide data
- Near any VerseGuide links in the text

## Contact Information

For questions about VerseGuide attribution or usage:
- Email: contact@verseguide.com
- Website: https://verseguide.com
- Last updated: July 14, 2026

## Compliance Checklist

For any page using VerseGuide data:

- [ ] All coordinates include attribution (via `CoordinateDisplay` or `TextAttribution`)
- [ ] All images from VerseGuide include `ImageAttribution` with photographer credit
- [ ] Pages with significant VerseGuide data include `VerseGuideCredit` in footer
- [ ] All VerseGuide links point to the correct URL
- [ ] The official Star Citizen disclaimer is included
- [ ] Photographer credits are included where available

## Updates and Changes

The `TODO.md` item for this document is:
```
- [ ] Review VerseGuide terms of use; write attribution guidelines; legal compliance review
```

This document (created [DATE]) completes the "Review" and "write attribution guidelines" portions of the task.

## External Resources

- [VerseGuide Terms and Conditions](https://verseguide.com/legal/terms)
- [VerseGuide Privacy Policy](https://verseguide.com/legal/privacy)
- [VerseGuide Cookies Policy](https://verseguide.com/legal/cookies)
- [VerseGuide Contact](mailto:contact@verseguide.com)

## Notes

1. The Attribution components (`ImageAttribution`, `TextAttribution`, `CoordinateDisplay`) are already implemented in the codebase and build successfully.

2. The `VerseGuideCredit` component exists and renders a footer credit section.

3. Current usage in the project:
   - Pyro system pages use `VerseGuideCredit`
   - Some PHDS pages use `ImageAttribution` and `CoordinateDisplay`

4. The project needs to systematically add attribution to pages that currently lack it.

## Next Steps

1. Audit existing pages to verify VerseGuide attribution is present where needed
2. Add `VerseGuideCredit` to pages that use VerseGuide data extensively
3. Add inline attributions (`TextAttribution`) to pages with coordinates or navigation data
4. Ensure all VerseGuide links are properly formatted and point to correct locations
5. Add photographer credits where available in `ImageAttribution` components