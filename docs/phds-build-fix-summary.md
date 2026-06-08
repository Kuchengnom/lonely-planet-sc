# Build Error Fixes Summary

## Problem
GitHub Actions build failed with YAML syntax errors and MDX parsing issues in the newly added PHDS pages.

## Root Causes

### 1. YAML Frontmatter Quote Issues
**Error:** bad indentation of a sequence entry
**Files Affected:** 5 files

YAML frontmatter list items had unquoted content after closing quote marks:
```yaml
required_gear:
  - "Safety Harness" (recommended for steep ice slopes)  # ❌ Invalid
```

**Fix:** Include the entire value in quotes:
```yaml
required_gear:
  - "Safety Harness (recommended for steep ice slopes)"  # ✅ Valid
```

**Files Fixed:**
- `src/pages/stanton/phds/locations/area18-tram-vistas/index.mdx`
- `src/pages/stanton/phds/locations/microtech-ice-caves/index.mdx`
- `src/pages/stanton/phds/locations/new-babbage-ice/index.mdx`
- `src/pages/stanton/phds/locations/orison-catwalks/index.mdx`
- `src/pages/stanton/phds/locations/pyro-vi-crashed-constellation/index.mdx`
- `src/pages/stanton/phds/locations/yela-cryo-asteroid/index.mdx`
- `src/pages/pyro/phds/locations/pyro1-crashed-vanguard/index.mdx`

### 2. Missing POIBadge Type
**Error:** TypeError: Cannot read properties of undefined (reading 'bg')
**Files Affected:** All PHDS pages

PHDS pages used `type: "photo-spot"` but the POIBadge component only supported:
- `natural-wonder`
- `easter-egg`
- `urban-sight`
- `technical`

**Fix:** Added `photo-spot` type to POIBadge component:

```typescript
interface Props {
  type: 'natural-wonder' | 'easter-egg' | 'urban-sight' | 'technical' | 'photo-spot';
}

const BADGE_CONFIG = {
  'natural-wonder': { label: 'Natural Wonder', emoji: '🏔️', bg: '#059669' },
  'easter-egg':     { label: 'Easter Egg',     emoji: '🎄', bg: '#7c3aed' },
  'urban-sight':    { label: 'Urban Sight',    emoji: '🏢', bg: 'var(--color-primary-600)' },
  'technical':      { label: 'Technical',      emoji: '🛸', bg: '#d97706' },
  'photo-spot':     { label: 'Photo Spot',     emoji: '📸',  bg: '#db2777' },  // ✅ New
} as const;
```

### 3. Incorrect Layout Path
**Error:** Could not resolve "../../../../layouts/POILayout.astro"

PHDS index page had one extra `../` in the path.

**Fix:**
```yaml
# ❌ Before (src/pages/stanton/phds/index.mdx)
layout: '../../../../layouts/POILayout.astro'

# ✅ After
layout: '../../../layouts/POILayout.astro'
```

### 4. Malformed Import Statement
**Error:** Could not parse import/exports with acorn - Unterminated string constant

**Fix:**
```javascript
// ❌ Before (src/pages/stanton/phds/locations/pyro-vi-crashed-constellation/index.mdx:19)
import TouristTip from '../../../../../components/TouristTip.astro>;

// ✅ After
import TouristTip from '../../../../../components/TouristTip.astro';
```

### 5. Typo in Closing Tag
**Error:** Unexpected closing tag `</TouranistTip>`, expected `</TouristTip>`

**Fix:**
```html
<!-- ❌ Before -->
</TouranistTip>

<!-- ✅ After -->
</TouristTip>
```

### 6. HTML Entity Escape Needed
**Error:** Unexpected character `1` (U+0031) before name

**Fix:**
```markdown
<!-- ❌ Before -->
narrow to <1 meter.

<!-- ✅ After -->
narrow to &lt;1 meter.
```

## Resolution

All build errors fixed with targeted patches:
- 7 YAML frontmatter syntax fixes
- 1 POIBadge component enhancement
- 1 layout path correction
- 1 import statement fix
- 1 closing tag typo fix
- 1 HTML entity escape

**Build Status:** ✅ SUCCESS - 33 pages built

## Commit Information

- Commit: `bca48c2`
- Message: "fix: Resolve PHDS page build errors"
- Files Changed: 11 files (9 modified, 2 added - documentation artifacts)

## Lessons Learned

1. **YAML Strictness:** MDX frontmatter uses strict YAML parsing - all list values must be fully quoted if they contain special characters
2. **Component Type Safety:** New content types must be added to component interfaces and config objects
3. **Path Resolution:** Layout paths must be accurate relative to each page's directory depth
4. **JSX Syntax:** MDX requires valid JavaScript/JSX for imports and component tags
5. **HTML Special Characters:** Use HTML entities for `<`, `>`, `&` in MDX content to avoid parsing errors

## Testing

Before pushing, always run:
```bash
npm run build
```

This caught all syntax errors before deployment.
