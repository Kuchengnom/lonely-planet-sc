# PHDS Community Maps Research

**Research Date**: 2026-06-08
**Status**: Initial compilation
**Purpose**: Identify and catalog community-built maps for Lonely Planet: Star Citizen PHDS locations

---

## Research Strategy

### Primary Sources (Priority Order)
1. **RSI Community Hub** (robertsspaceindustries.com/community-hub)
   - Search for: "{location} map", "{location} navigation", "{location} layout"
   - Look for: Image posts with map diagrams, navigation guides

2. **Reddit r/starcizen**
   - Search for: "{location} map", "city map", "navigation guide"
   - Look for: Imgur links, direct image posts, pinned guides

3. **starcitizen.tools Wiki**
   - Check: Location-specific pages for embedded maps
   - Look for: Layout diagrams, POI markers, coordinate systems

4. **Imgur Galleries**
   - Search: "star citizen {location} map"
   - Look for: Community-created navigation maps

5. **Discord Archives**
   - Mapping communities: starcitizen.tools community, exploration servers
   - Look for: Shared map resources and navigation guides

---

## Current PHDS Locations: Map Availability

### ✅ **High Confidence Maps Exist**

#### 1. **Orison (Crusader, Stanton)**
**Status**: Multiple community maps available
**Known Sources**:
- RSI Community Hub: "UPDATE: Crusader Orison City Map 3.15" by Citko
  - URL: https://robertsspaceindustries.com/community-hub/post/update-crusader-orison-city-map-3-15-ljlio1RhUTNmB
  - Type: City layout with platform positions
  - Relevance: High for orison-catwalks PHDS location

- Reddit: Multiple city map posts
  - Search: `site:reddit.com/r/starcitizen ORISON map`
  - Typical: Imgur galleries with overhead layouts

- starcitizen.tools: Orison page
  - URL: https://starcitizen.tools/Orison
  - Contains: Embedded location diagrams and POI markers

**Map Components Likely Available**:
- Platform positions and elevations
- Transit/transport connections
- Cloud layer corridors
- Catwalk locations (relevant to PHDS)

---

#### 2. **Area18 (ArcCorp, Stanton)**
**Status**: Likely maps available
**Known Sources**:
- RSI Community Hub: Search for "Area18 map", "Area18 tram"
- Reddit: Dedicated guides for新手 ناوکطه and navigation

**Map Components Likely Available**:
- District layouts (T1, T2, T3)
- Tram routes and station positions
- Building POIs
- Elevated perspectives (relevant to area18-tram-vistas PHDS)

---

#### 3. **New Babbage (MicroTech, Stanton)**
**Status**: Likely maps available
**Known Sources**:
- RSI Community Hub: Search for "New B Frozen canal map"
- Reddit: Frozen canal discovery posts with navigation aids

**Map Components Likely Available**:
- Frozen canal positions
- Transparent ice wall locations (relevant to new-babbage-ice PHDS)
- Approach routes
- POI markers

---

#### 4. **Benny Henge (Yela, Stanton)**
**Status**: Navigation guides exist (not maps per se)
**Current Content**: Already has detailed text navigation with OM triangulation
**Supplementary Resources**:
- Visual diagrams of beacon chain
- Navigation bearing charts
- Asteroid belt positioning maps

---

### ⚠️ **Moderate Confidence Maps Exist**

#### 5. **Daymar Bio-domes (Daymar, Stanton)**
**Status**: Limited specialized maps
**Research Needed**:
- Surface position maps
- Dome cluster layouts
- Approach vectors
- Community discovery posts with coordinates

---

#### 6. **MicroTech Ice Caves**
**Status**: Geographic maps limited
**Research Needed**:
- Cave system schematics
- Entrance locations
- Geothermal zone maps
- Northern Wastes navigation charts

---

#### 7. **Yela Cryo-asteroid Field**
**Status**: Navigation resources exist (belt maps)
**Available in**:
- Benny Henge navigation guides (belt positioning)
- Yela wiki pages with orbital diagrams
- Mining operation maps

---

### ❌ **Low Confidence/Unlikely Maps**

#### 8. **Port Tressler Under-Hangar (MicroTech, Stanton)**
**Status**: Unlikely to have detailed station maps
**Reason**: Specific maintenance catwalk access points rarely mapped
**Alternative**: General Port Tressler station diagrams may exist
**Research Strategy**: Look for station floor plans, not just catwalk-specific

---

#### 9. **Pyro System Locations**
**Status**: Very few maps due to system's recent development
**Available**:
- Pyro system overview charts (starcitizen.tools)
- Basic location diagrams
- Limited detailed maps for specific crash sites
**Reason**: Pyro is under active development, community mapping lags behind

---

## Map Integration Strategy

### Phase 1: Catalog High-Confidence Maps
**Locations**: Orison, Area18, New Babbage, Benny Henge
**Action**:
1. Visit RSI Community Hub posts to extract direct image URLs
2. Check starcitizen.tools for downloadable wiki images
3. Identify licenses/attribution requirements

### Phase 2: Research Moderate-Confidence Areas
**Locations**: Daymar, MicroTech ice caves, Yela belt
**Action**:
1. Search Reddit and Discord archives
2. Look for community guides with incidental maps
3. Identify alternative resources (coordinate lists, navigational aids)

### Phase 3: Address Low-Confidence Areas
**Locations**: Port Tressler, Pyro system
**Action**:
1. Create general station/system overview references
2. Note when maps don't exist in documentation
3. Provide alternative navigation aids (OM ranges, coordinate breadcrumbs)

---

## License and Attribution Considerations

### RSI Community Hub Posts
- **Default**: Individual creator copyright
- **Use**: Contact creator for permission before downloading/hosting
- **Alternative**: Link directly to RSI hub post (no download needed)

### Reddit Posts
- **Default**: Reddit content license (user retains rights)
- **Use**: Contact OP for permission, or link to Reddit post
- **Imgur galleries**: Check Imgur terms, usually permissive with attribution

### starcitizen.tools Wiki
- **License**: CC BY-SA 3.0 or 4.0 (verify per image)
- **Use**: Can download and embed with attribution to wiki and original creator
- **Requirement**: Must maintain CC license and attribute sources

### Commercial Use Considerations
- Most community maps are for personal/informational use
- For public website deployment, explicit permission is recommended
- Happy path: Direct linking to RSI/Reddit posts (no hosting required)

---

## Implementation Options

### Option A: Direct Links (Recommended)
**Pros**:
- No copyright issues (link to source)
- Always up-to-date if creator updates
- Minimal maintenance

**Cons**:
- External dependency
- Links may break over time

**Implementation**:
```markdown
## Maps and Navigation

**Orison City Layout Map**
- Creator: [Citko](https://robertsspaceindustries.com/community-hub/users/Citko)
- Source: [RSI Community Hub](https://robertsspaceindustries.com/community-hub/post/update-crusader-orison-city-map-3-15-ljlio1RhUTNmB)
- What it shows: Platform positions, transit connections, cloud layer corridors
```

### Option B: Local Hosting (Requires Permission)
**Pros**:
- Faster loading
- No external dependencies
- Full control over presentation

**Cons**:
- Requires explicit permission from creators
- Maintenance burden if maps update
- Copyright compliance required

**Implementation**:
1. Contact creators for permission
2. Download images with attribution metadata
3. Host in `/public/maps/` directory
4. Add license/attribution notes to each image

---

## Next Actions

### Immediate (This Session)
1. **Verify high-confidence map URLs**:
   - Visit Orison RSI hub post to extract image details
   - Check starcitizen.tools Orison page for downloadable images
   - Identify direct Imgur links from Reddit posts

2. **Create map reference format**:
   - Decide between Option A (direct links) or Option B (local hosting)
   - Design consistent "Maps and Navigation" section format
   - Test integration on one PHDS location (recommended: orison-catwalks)

### Short-Term (Next Session)
1. **Complete high-confidence locations**:
   - Add map references to Orison, Area18, New Babbage, Benny Henge
   - Test link accessibility
   - Verify attribution accuracy

2. **Research moderate-confidence areas**:
   - Search Discord archives for Daymar maps
   - Look for MicroTech cave system diagrams
   - Identify Yela belt navigation resources

### Long-Term (Future Sessions)
1. **Ecosystem expansion**:
   - Create central "Community Maps Index" page
   - Add map contribution guidelines
   - Build map update notification system

2. **Creator engagement**:
   - Reach out to map creators for updated versions
   - Request permission for local hosting if needed
   - Establish ongoing relationships with mapping community

---

## Known Map Creators to Contact

Based on community knowledge:
- **Citko**: Orison city map creator (RSI Hub)
- **[Various Reddit users]**: Area18 and New Babbage map creators
- **starcitizen.tools contributors**: Wiki map maintainers

**Contact Template**:
```
Hello [Creator Name],

I'm working on the Lonely Planet: Star Citizen project, an open-source
travel guide for Star Citizen locations. We'd love to include your
[map name] in our guides to help explorers navigate [location].

Would you be open to either:
1. Feature your map with direct attribution and link to your post?
2. Grant permission to host a local copy with full attribution?

Please let me know your preference and any attribution requirements.
Thanks for creating such valuable community resources!

Best regards,
[Lonely Planet: Star Citizen project team]
```

---

## Technical Notes

### Map Image Formats
- **Preferred**: PNG (lossless, good for diagrams)
- **Acceptable**: JPG (smaller file size, some compression artifacts)
- **Avoid**: PDF, SVG (browser compatibility issues with some readers)

### Image Optimization
- Target file size: <500KB per map
- Width: 800-1200px (responsive)
- Alt text: Descriptive text for accessibility

### Storage Structure (if hosting locally)
```
/public/maps/
  ├── stanton/
  │   ├── crusader/
  │   │   ├── orison/
  │   │   │   ├── orison-city-layout.png
  │   │   │   └── orison-transit-map.png
  │   │   └── yela/
  │   │       └── benny-henge-navigation.png
  │   ├── arccorp/
  │   │   └── area18/
  │   │       └── area18-tram-map.png
  │   ├── microtech/
  │   │   ├── new-babbage/
  │   │   │   └── new-babbage-frozen-canal.png
  │   │   ├── port-tressler/
  │   │   │   └── port-tressler-station-layout.png
  │   │   └── ice-caves/
  │   │       └── microtech-cave-entrance-locations.png
  │   └── hurston/
  │       └── daymar/
  │           └── daymar-biodome-surface-map.png
  └── pyro/
      ├── pyro-i/
      │   └── pyro-i-crash-site.png
      └── pyro-vi/
          └── pyro-vi-crash-site.png
```

---

**Changelog**:
- 2026-06-08: Initial research document created, identified high-confidence maps for 4 locations
- [Future updates will be added as research progresses]
