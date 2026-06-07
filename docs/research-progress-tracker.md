# Research Progress Tracker — Lonely Planet: Star Citizen

> Pages needing images/videos by system and status. Updated 2025-01-09.

---

## OVERALL STATUS

| System | Pages | With Images | Without Images | Progress |
|--------|-------|-------------|----------------|----------|
| Pyro | 11 | 2 | 9 | 18% |
| Stanton | 24 | 8 | 16 | 33% |
| **TOTAL** | **35** | **10** | **25** | **29%** |

---

## RECENT WORK (2025-01-09)

### Assets Downloaded (Wiki Sources)
Using direct CLI downloads from `starcitizen.tools`:

| Page | Images Downloaded | Status |
|------|-------------------|--------|
| **Wala** (ArcCorp moon) | 8 files (orbit, surface, art, ATV) | ✅ Ready |
| **Benny Henge** (Yela) | 6 files (formation, detail, NPC) | ✅ Ready |
| **Aberdeen** (Hurston moon) | 8 files (orbit, surface, landscape) | ✅ Ready |
| **Arial** (Hurston moon) | 8 files (orbit, transit, surface) | ✅ Ready |

Total new assets: **30 files** (~24 MB)

### Documentation Created
- `docs/visual-attribution-log.md` — Complete attribution table for all 30 images
- Attribution format: Filename, Source (wiki), URL, License (CC BY-SA 3.0), Access Date, Notes
- Assets verified as valid images via `file` command

### Technical Status
- All images stored in `public/images/stanton/[system]/[page]/`
- File format verification: JPEG (baseline/progressive), WebP, PNG
- Frontmatter wiring pending: hero and images[] fields to be added/updated

---

## PYRO SYSTEM

### ✅ COMPLETE (Have Images)

| Page | Images | Videos |
|------|--------|--------|
| Pyro System Index | Hero image | — |

### 🟡 PARTIAL (Some Images)

| Page | Missing | Notes |
|------|---------|-------|
| Pyro I | Hero + attraction images | Videos needed |
| Pyro II | Hero + attraction images | Videos needed |
| Pyro III | Hero + attraction images | Videos needed |
| Pyro IV | Hero + attraction images | Videos needed |
| Pyro V | Hero + attraction images | Videos needed |
| Pyro VI | Hero + attraction images | Videos needed |
| Pyro Belt | Hero + station images | Videos needed |
| Ruin Station | Hero + station images | Videos needed |
| Crashed Vanguard Yela Basin | Hero + POI images | Videos exist (see PHDS) |

---

## STANTON SYSTEM

### ✅ COMPLETE (Have Images)

| Page | Images | Videos |
|------|--------|--------|
| MicroTech Index | Hero + 9 images in `/public/images/microtech/` | — |
| The River POI | Hero + canyon/river images | — |
| **Wala** | **8 images** — orbit (prolate shape), surface, art, ATV | **NEW — ✅ DOWNLOADED** |
| **Benny Henge** | **6 images** — formation, detail, NPC body | **NEW — ✅ DOWNLOADED** |
| **Aberdeen** | **8 images** — orbit, surface, landscape | **NEW — ✅ DOWNLOADED** |
| **Arial** | **8 images** — orbit, transit, surface | **NEW — ✅ DOWNLOADED** |

### 🟡 PARTIAL (Some Images)

| Page | Missing | Notes |
|------|---------|-------|
| ArcCorp | Hero + attraction images | — |
| Lyria | Hero + moon surface images | — |
| Crusader | Hero + attraction images | — |
| Cellin | Hero + moon surface images | — |
| Daymar | Hero + dome images | — |
| Daymar Enhanced | Hero + dome interior images | — |
| Yela | Hero + asteroid belt images | Videos exist (Farrister, PewPew, Apoolofwomen) |
| Hurston | Hero + attraction images | — |
| Port Tressler | Hero + station images | — |

### PHDS (Hidden Discovery Sites) — Image Status

| Location | Images | Videos | Status |
|----------|--------|--------|--------|
| Yela Cryo-Asteroid | Missing | ✅ Excellent (39 min 4K, 59 sec HDR) | 🟡 Has video, needs screenshots |
| Orison Catwalks | Missing | ✅ Good (Farrister 6:22, 2:51) | 🟡 Has video, needs screenshots |
| Area18 Tram Vistas | Missing | 🟡 Some (general urban guides) | 🔴 Needs research |
| Daymar Biodome | Missing | 🟡 Limited (Jumptown nav) | 🔴 Needs research |
| MicroTech Ice Caves | Missing | 🟡 Recent (cave exploration exists) | 🔴 Needs research |
| New Babbage Ice | Missing | 🟡 Emergent | 🔴 Needs research |
| Port Tressler Under-Hangar | Missing | 🟡 Limited | 🔴 Needs research |
| Pyro VI Crashed Constellation | Missing | 🟡 Emergent (growing with Pyro) | 🔴 Needs research |

---

## ASSET STATUS SUMMARY

### New Pages — COMPLETE (Assets Downloaded)

| Page | Key Visual Assets Available | Sources |
|------|----------------------------|---------|
| **Wala** | Prolate orbit views (3.5, 3.8, 3.12), surface landscape, concept art, ATV screenshots | Wiki — CC BY-SA 3.0 |
| **Benny Henge** | Formation shots (3 angles), detail views, NPC body (Halloween event) | Wiki — CC BY-SA 3.0 |
| **Aberdeen** | Orbit views (multiple patches), dead grasslands surface, mountain landscapes | Wiki — CC BY-SA 3.0 |
| **Arial** | Orbit views with heat haze, surface boiling view, transit visualization to Aberdeen | Wiki — CC BY-SA 3.0 |

---

## NEXT ACTIONS

### Immediate (Frontmatter Integration)
1. Wire hero images into page frontmatter for Wala, Benny Henge, Aberdeen, Arial
2. Update images[] arrays with relative paths (e.g., `/images/stanton/arccorp/wala/Stanton-arccorp-wala-orbit-3.12.jpg`)
3. Verify page builds locally with updated frontmatter
4. Commit frontmatter changes

### Secondary (Remaining Asset Research)
5. Pyro system index — Hero image of star + planets
6. Pyro I–VI — Planet-specific hero images
7. Yela — Extract from existing PHDS videos (Farrister, PewPew, Apoolofwomen)
8. Orison — Extract from existing PHDS videos
9. PHDS locations — Screenshots from identified video sources

### Video Research — Current Blockers
- YouTube: Bot detection blocks automated navigation (Cancelled during this session)
- Reddit: Cloudflare protection blocks direct access (Cancelled during this session)
- Alternative approach: Manual screenshot extraction from known video IDs when user access is available
- Note: Video assets already catalogued in `docs/phds-visual-resources-summary.md`

### Attribution & Licensing
- All wiki assets: CC BY-SA 3.0 — requires attribution to Star Citizen Tools Wiki
- Attribution log complete: `docs/visual-attribution-log.md`
- Frontmatter attribute fields should cite sources

---

## PUBLIC FOLDER STRUCTURE

```
public/
├── images/
│   ├── microtech/        ✅ 9 images exist
│   ├── pyro/             🔴 Empty
│   └── stanton/
│       ├── arccorp/
│       │   └── wala/     ✅ 8 images
│       ├── crusader/
│       │   └── benny-henge/  ✅ 6 images
│       └── hurston/
│           ├── aberdeen/ ✅ 8 images
│           └── arial/    ✅ 8 images
```

---

## RESEARCH NOTES

### Sources Successfully Accessed
- Star Citizen Tools Wiki — Direct image downloads via curl
- All images verified as valid JPEG/WebP/PNG
- File sizes: 192KB — 2.82MB (appropriate for web use)

### Sources Blocked in This Session
- YouTube — Network security block (Cloudflare/bot detection)
- Reddit r/starcitizen — Cloudflare protection

### Alternative Approaches
- Manual video screenshot extraction when direct user access available
- Wiki sourcing continues to be reliable for static assets
- Community content creators identified (Farrister, Red's Resort, LevelCapGaming, Apoolofwomen, PewPewStarGalaxy) in PHDS documentation

---

*Last updated: 2025-01-09 — Download complete: 30 new assets for 4 new pages. Attribution logged. Frontmatter integration pending.*
