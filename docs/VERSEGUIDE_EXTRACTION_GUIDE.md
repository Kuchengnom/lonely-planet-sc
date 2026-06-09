# VerseGuide Content Extraction Guide

## 🔍 Discovery Summary

VerseGuide.com has been analyzed and we've identified the key data sources:

### 📸 **Image Sources Found**
- **Firebase Storage**: `firebasestorage.googleapis.com/v0/b/verseguide-images/`
- **Planet Images**: `/planets/sm/` (small thumbnails for system view)
- **High-Quality Standards**: 3D renders and in-game screenshots

### 🌍 **Data Architecture**
- **Vue.js/Nuxt.js Application** with server-side rendering
- **Firebase Firestore** for real-time data
- **Three.js/Vue** for 3D visualization
- **Interactive Location Lists** with detailed POI data

### 🎯 **Optimal Extraction Strategy**

Based on our analysis, here's the most effective approach:

---

## 📋 **Recommended Extraction Approach**

### Method 1: Firebase Image Extraction (Primary) ✅

**Advantages**: Direct access to high-quality images, organized structure

**ExtractedImage URLs Found**:
```
https://firebasestorage.googleapis.com/v0/b/verseguide-images/o/planets%2Fsm%2Fsm_1693.jpg
https://firebasestorage.googleapis.com/v0/b/verseguide-images/o/planets%2Fsm%2Fsm_1694.jpg
https://firebasestorage.googleapis.com/v0/b/verseguide-images/o/planets%2Fsm%2Fsm_2746.jpg
[...and more from network inspection results]
```

**Implementation**:
```bash
# Use the image URLs directly from our network inspection
# Create a mapping file of discovered URLs to location names
# Download images with proper attribution
```

### Method 2: Systematic Data Scraping (Secondary)

**Approach**: Navigate through systems → planets → locations systematically

**Target Data**:
- Location coordinates (X, Y, Z)
- POI descriptions and categories  
- Navigation routes and quantum links
- Landing zones and spatial relationships

---

## 🚀 **Immediate Next Steps**

### Step 1: Start with One System (Stanton)
```bash
# Create organizational structure
mkdir -p public/images/stanton/from-verseguide/lorville
mkdir -p public/images/stanton/from-verseguide/area18
mkdir -p public/images/stanton/from-verseguide/new-babbage
```

### Step 2: Extract Core Content
**Focus**: Use browser automation to get:
- System level navigation data
- Planet coordinates
- Key city images (Lorville, Area18, New Babbage, Orison)

### Step 3: Apply Our Attribution Components
```astro
<!-- Example integration in existing pages -->
<div style="position: relative;">
  <img src="/images/stanton/from-verseguide/lorville/hero.jpg" alt="Lorville skyline" />
  <ImageAttribution 
    imageSource="VerseGuide"
    locationName="Lorville"
    showOnHover={true}
  />
</div>
```

---

## 📊 **Extraction Priority**

### High Priority Images (Download First)
1. **System Overview Images**: Sky backgrounds, planet thumbnails
2. **Major Cities**: Lorville, Area18, New Babbage, Orison
3. **Key POIs**: Popular attractions with high visual appeal

### Medium Priority Data
1. **Coordinates**: X/Y/Z for key landing zones
2. **Navigation**: Quantum routes and jump points
3. **Descriptions**: Supplemental factual data

### Low Priority
1. **Minor Outposts**: Smaller locations with similar visuals
2. **Routes**: Standard navigation that can be calculated
3. **Details**: Information that may change frequently

---

## 🛠️ **Extraction Tools Command Sequence**

```bash
# Start systematic extraction
agent-browser open https://verseguide.com/location/STANTON
agent-browser wait --load networkidle
agent-browser screenshot docs/verseguide-data/stanton-overview.png

# Navigate to planets one by one
# For each planet:
# 1. Get coordinates using browser eval
# 2. Download featured images
# 3. Extract POI descriptions
# 4. Record navigation data

# Example approach for Lorville:
AGENT_BROWSER_SESSION_NAME=lorville-extraction agent-browser open [lorville-page-url]
agent-browser eval 'getCoordinates()' # Custom function to extract X/Y/Z
agent-browser screenshot docs/verseguide-data/lorville.png
```

---

## 📂 **File Organization Strategy**

Based on VerseGuide's Firebase structure:
```
public/images/
└── [system]/
    └── from-verseguide/
        ├── [planet]/
        │   ├── hero.jpg          # Main location image (full attribution)
        │   ├── navigation.jpg    # Flight path visualization
        │   └── details-[1-3].jpg # Supporting images
```

**Naming Convention**: 
- Keep original VerseGuide filenames where possible
- Use descriptive names for better organization
- Track sources in `docs/verseguide-data/attribution-registry.json`

---

## ✅ **Success Criteria**

**Images**: 
- [ ] 3-5 high-quality images per major location
- [ ] Proper ImageAttribution component on all VerseGuide images
- [ ] Responsive image optimization

**Data**:
- [ ] Coordinates for all main landing zones
- [ ] Navigation routes between major hubs
- [ ] POI categorization consistent with Lonely Planet style

**Attribution**:
- [ ] Full credit on images (ImageAttribution)
- [ ] Subtle data source links (TextAttribution)
- [ ] Footer credit integration (VerseGuideCredit)

---

## 🎨 **Design Integration Verification**

Our components are tested and ready:
- ✅ ImageAttribution.astro - Working (build verified)
- ✅ TextAttribution.astro - Working (build verified)
- ✅ CoordinateDisplay.astro - Working (build verified)
- ✅ VerseGuideCredit.astro - Working (build verified)

---

## 🚦 **Phase 1: Stanton System Extraction (This Week)**

**Focus Locations**:
1. **Hurston**: Lorville (primary city)
2. **Crusader**: Orison (floating city) + Daymar + Yela
3. **ArcCorp**: Area18 (commercial hub)
4. **microTech**: New Babbage (corporate capital) + specific POIs

**Deliverables**:
- 20-30 high-quality images with proper storage
- 1 stanton.json data file
- 1 updated page with full integration demonstration
- Attribution framework tested across content types

**Estimated Time**: 4-6 hours focused work

---

## 🔧 **Technical Implementation Notes**

Browser automation revealed:
- VerseGuide uses Firebase for image storage with organized paths
- System data requires interaction through their 3D UI
- Images are CDN-hosted and can be accessed directly
- Their responsive design means multiple image sizes available

**Recommendation**: Start with direct Firebase URL extraction for images, then build content around them using our attribution components for a seamless user experience.

---

*Extraction Guide - Updated December 9, 2025*
*Based on actual VerseGuide.com analysis using agent-browser*