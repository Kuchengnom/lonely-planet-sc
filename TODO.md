# PHDS & Polish Todo List

This file tracks the iterative work pipeline for the Lonely Planet: Star Citizen project.

- [x] **PHDS Content Expansion**
  - [x] daymar-biodome — fill "What to Bring" section
  - [x] daymar-biodome — fill "Access Notes" section with coordinates
  - [x] microtech-ice-caves — write full MDX entry with cave exploration guide
  - [x] area18-tram-vistas — write content about tram routes (Cityflight Transit)
  - [x] orison-catwalks — write content about cloud-city bridges
  - [x] yela-cryo-asteroid — write content about abandoned cryo station
  - [x] port-tressler-under-hangar — write content about hidden maintenance tunnels
  - [x] new-babbage-ice — write content about frozen waterways
  - [x] pyro-vi-crashed-constellation — write content about wreckage site
  - [x] phds-arc-pyro. Create PHDS index entries for ArcCorp and Pyro system locations

- [x] **Missing Content Gaps**
  - [x] MicroTech eating/drinking section (add recommended venues)
  - [x] Crusader eating/drinking section
  - [x] Hurston eating/drinking section
  - [x] ArcCorp eating/drinking section
  - [x] Pyro eating/drinking section
  - [x] Add recommended gear lists per planet

- [x] **Image Research & Filling**
  - [x] MicroTech hero image — find high-fidelity screenshot (glacial landscape, rivers)
  - [x] Crusader hero image — find high-fidelity screenshot (orbital platform/cloud city screenshot)
  - [x] Hurston hero image — find industrial cityscape
  - [x] ArcCorp hero image — find underground corporate complex
  - [x] Pyro hero image — find volcanic terrain
  - [x] PHDS thumbnail images for each location (screenshots or concept art)

- [x] **Impeccable Steps**
  - [x] Step 3: Fix TourSchedule heading hierarchy (H3 → H4 in step cards)
  - [x] Step 4: Add blur-up image placeholders
  - [x] Step 4: Add hover states to tour cards
  - [x] Step 4: Add scroll-to-link for TOC
  - [x] **Step 5**: Cross-system consistency polish (Stanton → Pyro → ArcCorp)

- [x] **Browse Index Polish**
  - [x] Add filter pills for difficulty (Easy/Moderate/Hard)
  - [x] Add bookmark feature (heart icon, localStorage)
  - [x] Add visited checkmarks (localStorage)
  - [x] Implement empty state for no-results
  - [x] Mobile layout: stack cards vertically, full-width

- [x] **ArcCorp Content**
  - [x] Research ArcCorp underground facilities lore
  - [x] Write ArcCorp overview (corporate espionage, hidden vaults)
  - [x] Add PHDS entries: ArcCorp vaults, corporate black sites
  - [x] Find ArcCorp hero image

- [x] **Pyro Content**
  - [x] Research Pyro system lore (6 planets: Pyro I charred inferno, Monox/Pyro II gas-stripped husk, Bloom/Pyro III icy world, Pyro IV desolate, Pyro V gas giant w/7 moons, Terminus/Pyro VI cold outer planet; PyAm mining history 2493-2563; Ruin Station; gang factions)
  - [x] Write Pyro overview (extreme danger, solar flares, gang territory, decay) — pyro/index.mdx exists with vitals, 6 planets, eating/drinking, tips, gear table
  - [x] Add PHDS entries: bloom abandoned mining sites, ruin station orbital observation, pyro i distortion storm edge
  - [x] Find Pyro hero image
  - [x] Add Lore video of Worm to the relevant locations https://youtu.be/i6-HPzuBeW8?is=tkpGfgb--08TKYiI — added as a `## Video Guides` section on the **Pyro I** page. RSI Galactapedia places the irradiated valakkar population on Pyro I, not Pyro II. A new "The Irradiated Valakkar" attraction, a matching tour tip, and a `## Sources` block were added alongside it.
  - [x] Add Lore video to pyro system https://youtu.be/Q_y_pGb3-VQ?is=shqt57j8fb55o0Qy — added as a `## Video Guides` section on the Pyro system page

## Explorer Note is missing from every guide page

- [x] Fix the `ExplorerView` named-slot mechanism so the Explorer Note renders on the 25 pages that use `<ExplorerView slot="explorer">`. `PlanetLayout.astro` checks `Astro.slots.has('explorer')` and renders `<slot name="explorer" />`, but a `slot="explorer"` attribute on a component instance inside the layout's default slot does not register a named slot. The component markup is never emitted and the quote text is absent from the built HTML.
- [x] Fix the three pages that use a self-closing `<ExplorerView category="explorer" name="..." quote="..." />` form — `ExplorerView.astro` declares only `{ author: string }` and renders `<slot />`, so these render an empty `<blockquote>` and an empty `<cite>`. Affected: `src/pages/stanton/hurston/arial.mdx`, `src/pages/stanton/hurston/aberdeen.mdx`, `src/pages/stanton/arccorp/wala.mdx`.
- [x] Verify with a fresh `npm run build` and confirm `class="explorer-note"` appears in the built HTML of the affected pages.

Note: the checked-in `dist/` was stale and masked this. The TODO.md Impeccable critique (2026-10-15) recorded the symptom against the Nyx overview as P1; the scope is every guide page, not Nyx alone.

Resolution: the note is now carried in frontmatter (`explorer_author`, `explorer_note`) and rendered by both `PlanetLayout` and `POILayout`, matching how `vitals_*` and `getting_there` already reach the sidebar. 27 pages migrated; 2 pages that carry a second note mid-body keep it in body flow. 30 notes now render across 29 pages, up from 4 (3 of them empty).


---

## Migrated backlog

> The root `TODO.md` is now the canonical checklist. The former [tasks/todo.md](tasks/todo.md) remains as a pointer and historical reference if this list is exhausted.


## Plan

- [x] Rework the desktop homepage into a wider editorial grid with intentional feature hierarchy.
- [x] Add an accessible mobile navigation pattern that preserves every existing route.
- [x] Add the standalone “How much time do you have today to visit the verse?” feature from verified Hurston schedules only: 1h, 2h, and an explicit 3–4h itinerary choice; retain an honest guide-level CTA and no-JS fallback.
- [x] Integrate the approved planning brief and polish interaction, typography, and CTA hierarchy across desktop and mobile.
  - [x] Normalize primary/secondary CTA hit areas, motion, and pressed/focus states.
  - [x] Carry card affordance from pointer hover into keyboard focus, including image zoom controls.
  - [x] Resolve the 390px hero CTA wrap into an intentional vertical primary/secondary hierarchy.
  - [x] Add branded text-selection and consistent reduced-motion behavior for the refined surfaces.
- [x] Verify the final homepage at desktop and mobile viewports, keyboard navigation, and production build.
- [x] Replace the static landing-page hero with the approved privacy-enhanced YouTube background embed, including readable overlay, reduced-motion fallback, and responsive behavior.
- [x] Merge the Elsewhere-inspired landing-page patterns: hero facts rail, generous editorial spacing, and an itinerary-style time-planning composition based on verified routes.

## Review

Mobile navigation: native dialog drawer includes all six existing destinations, 44px controls, Escape/close/link/resize handling, focus restoration, body-scroll locking, and synchronized hash-link active states. `npm run build`, `git diff --check`, and production-browser checks at 390×844 passed; the desktop toggle is hidden at 1024px.

Time planner: homepage-only CSS-native radio disclosure uses only the authored Hurston schedules. The 1h and 2h paths expose their matching itinerary; 3–4h exposes all three authored choices, with honest guide-level links and no invented tab URL. `npm run build` and `git diff --check` passed. Browser checks passed at 1440×1000 and 390×844; keyboard Right Arrow changes the selected itinerary and the 3–4h choice list is accessible.

Cross-breakpoint polish: retained the editorial grid, mobile drawer, and authored Hurston planner while establishing a consistent 44px CTA floor, pressed/hover/focus treatment, keyboard-visible card affordances, branded selection, and reduced-motion behavior. At 390×844 the hero now presents its primary and secondary actions as a deliberate vertical sequence; no horizontal overflow was observed. Browser checks at 1440×1000 and 390×844 passed, including drawer Escape/focus restoration, planner keyboard selection, and no console errors. `npm run build` (41 pages), `npm run test:scripts` (17 tests), and `git diff --check` passed.

Hero video: the landing page now uses the requested YouTube video through YouTube's privacy-enhanced embed endpoint, muted and looped as decorative background media. The previous hero image remains the visual fallback; reduced-motion users receive that static image instead.

Elsewhere-inspired refinement: the landing hero now provides an at-a-glance facts rail, while the time planner uses the reference page's spacious, decision-first itinerary rhythm without copying its price calculator or inventing unsupported estimates.
Desktop and 390px mobile browser checks confirm the hero hierarchy, four guide facts, readable time-planner copy, and touch-sized time choices; the temporary mobile viewport override was reset after verification. `npm run build` (41 pages), `npm run test:scripts` (17 tests), and `git diff --check` pass.

---

# Master backlog

## Hurston correction

- [x] Remove the duplicated M&V's dining copy while retaining the attraction and tour-stop coverage.

## Home hero slideshow

- [x] Replace the YouTube hero background with a local four-image slideshow that represents the range of the currently published destinations.
- [x] Keep the first image as the static fallback, preserve hero text contrast, pause the sequence off-screen, and provide a visible pause/play control plus a reduced-motion static view.

Review: the local production preview passed at desktop and 390×844. The image sequence reached a later frame, the pause/play control changed state correctly, and reduced-motion mode showed only the static first image without a motion control. The hero heading and both CTAs remained visible at both widths; no browser errors appeared.

## Home exploration redesign

- [x] Recast the first viewport around a concrete choice of currently available systems, rather than making the visitor discover the entry points further down the page.
- [x] Turn the hero into an editorial launch deck: keep the local scenery sequence, strengthen the headline/action hierarchy, and make Stanton, Pyro, and Nyx visibly actionable from the first visit.
- [x] Preserve every existing route, honest availability state, the time planner, and mobile navigation while making the new first-viewport flow work at desktop and 390px widths.
- [x] Verify the redesigned production build at desktop and mobile, including keyboard paths, motion preferences, and console errors.

Review: the local production preview shows a complete desktop launch deck and a readable 390px layout. Stanton, Pyro, and Nyx are exposed as real links in the first exploration choice; reduced-motion behavior and the existing pause/play control remain intact. `npm run build` built 48 pages, `npm run test:scripts` passed 17 tests, and the browser reported no errors.

## Hidden Discoveries usability pass

- [x] Resolve PHDS card image URLs through the configured `/lonely-planet-sc/` base path so published cards load on GitHub Pages.
- [x] Widen the discovery grid on large screens while retaining two-column and single-column mobile layouts.
- [x] Repair the filter controls with explicit button state, hidden-card handling, and a working reset path.
- [x] Add an explicit “I have visited” check mark backed by localStorage; do not mark locations visited merely by hovering.
- [x] Include a deliberate text-only fallback for entries whose image asset is not available instead of requesting empty files.
- [x] Add the shared favicon links and make the system header keep its title readable at mobile widths.

Review: production preview confirmed base-prefixed image requests, 14 working filter controls, 16 discovery cards, no horizontal overflow at 390px, a readable 93px mobile system header, and the visited state surviving reload. `npm run build` built 48 pages, `npm run test:scripts` passed 17 tests, and `git diff --check` passed.

### Future content research

- [x] Once the current backlog is complete, review [Roberts Space Industries](https://robertsspaceindustries.com/) for newly published locations, systems, and visit-worthy updates.
- [ ] Use [Galactapedia](https://robertsspaceindustries.com/galactapedia) as a reference when expanding guide copy, while preserving the source-backed provenance gate for new destinations.
- [x] Review the [hidden-location video](https://www.youtube.com/watch?v=QfjgBVAuscE) and capture the timestamp named in its description before linking a specific segment from a guide.
  - Timestamps identified: 0:30 Christmas Cave (backer decoration hangar), 2:45 hidden locations overview, plus additional hidden spots at 5:30, 8:15, 13:20, 18:25, 23:15, 28:05, and 32:55 minutes (hidden outposts, frozen celebrations, impossible landscapes, lonely corners of the verse).

## Nyx delivery plan

- [x] Verify the current, citable Nyx release/status facts and create a small source-backed system data record; do not present planned content as playable.
- [ ] Add the first useful Nyx destination pages only where reliable source material and an appropriate licensed local image exist; link them from the Nyx overview.
  - [x] Record the current Nyx image provenance gate and the exact evidence required before creating a new destination page.
- [x] Audit the Nyx overview at desktop and mobile widths, including navigation, image alt text, and citation treatment. New destinations remain blocked by the provenance gate.
- [ ] Commit and push each verified Nyx work package separately; leave unrelated untracked workspace material untouched.

Nyx review: production preview passed at the default desktop viewport and 390×844. The partial-release marker, Delamar/station-network scope, hero facts, source links, and image alt text are exposed correctly; at mobile width the hero facts remain two-column and readable. No new destination page was added because the available Nyx images lack per-file provenance.

## Nyx Levski editorial update

- [x] Confirm Levski's current in-game availability and visitor-facing facts against current official CIG sources.
- [x] Reframe the Nyx overview so Levski is the system's primary, compelling visit rather than a cautious availability footnote.
- [x] Add a concise, source-backed Levski visit plan covering its distinctive public sights, market, shops, café, and access limits without creating a new image-dependent destination page.
- [x] Preserve the existing Nyx image-provenance gate and all unrelated worktree changes.
- [x] Run the production build, source checks, and a bounded desktop/mobile browser verification; record the results here.

Review: official CIG sources now ground Levski's current availability, visitor access, public landmarks, and patch-specific cautions. The overview leads with Levski as Nyx's essential visit, offers a scan-friendly Grand Barter–Cordry's–Café Musain–Anthony Tanaka circuit, and retains residential-boundary and frontier-travel guidance. No new page or image reuse was introduced, so the existing provenance gate remains intact. `npm run build` built 48 pages, `npm run test:scripts` passed all 17 tests, and `git diff --check` passed. Production-browser checks at 1440×1000 and 390×844 confirmed the hero fact, first-attraction hierarchy, source links, and zero horizontal overflow; no browser console errors were reported. The first render exposed reset list markers, so the circuit was refined into labeled paragraphs and passed the confirmation render.

## Impeccable critique — Nyx overview (2026-10-15)

Target: `src/pages/nyx/index.mdx` rendered at `/lonely-planet-sc/nyx/` in Read mode.

Assessment provenance: two isolated assessments were completed. Assessment A was a source-and-browser design review; Assessment B collected detector/browser evidence independently. The Impeccable engine could not create `/Users/shaase/.impeccable/bin/0.1.5`, so the deterministic detector and critique snapshot persistence were unavailable. The findings below are therefore explicitly manual/source/browser evidence, not detector output.

### Design verdict and score

- Design specificity: **3/4**. The Levski voice, memorial, frontier framing, and astrophotography are product-specific, but the page still behaves like a generic travel template rather than a coordinate- and route-first Star Citizen guide.
- Nielsen heuristics: **22/40**.

| Heuristic | Score | Evidence |
| --- | ---: | --- |
| Visibility of system status | 2/4 | Playable status and patch cautions exist, but freshness and route confidence arrive late. |
| Match between system and real world | 4/4 | Travel language fits the space-tourist mental model. |
| User control and freedom | 2/4 | Only two anchor CTAs; no route recovery or per-stop navigation. |
| Consistency and standards | 2/4 | Shared card patterns are consistent, but a system guide is labeled “Urban Sight.” |
| Error prevention | 2/4 | Safety notes help, but operational hazards are late and route guidance is vague. |
| Recognition rather than recall | 3/4 | Hero facts help scanning, but stop/station details remain buried in prose. |
| Flexibility and efficiency | 2/4 | No TOC, direct POI links, coordinates, or triangulation workflow. |
| Aesthetic and minimalist design | 2/4 | Cinematic opening is strong, but hero height, duplicate facts, dense cards, and the citation wall add weight. |
| Error recovery | 1/4 | No fallback when a destination, route, station, or patch instruction is unavailable. |
| Help and documentation | 2/4 | Sources are linked, but there is no concise route recipe, glossary, or coordinate explanation. |

### Cognitive load and emotional journey

Overall cognitive load is **moderate-high**. Five of eight checklist items fail: single focus, chunking, visual hierarchy, one thing at a time, and progressive disclosure. The cumulative set of four cards, four Levski stops, four service stations, and five source links is manageable only after the visitor infers the hierarchy. “The Worlds Beyond the Current Route” consumes attention while explicitly offering no visitable action.

The emotional path is: cinematic arrival → orientation valley because preparation starts below the fold → discovery peak in the Levski card → trust valley at the unvisitability disclaimer and empty service-station image state → a research-appendix ending rather than a confident ready-to-go handoff.

### Strengths

- Distinctive, source-grounded Levski editorial voice.
- Strong cinematic hero and compact fact rail.
- Responsible uncertainty handling: Nyx I–III are not presented as confirmed visit stops.

### Priority findings

1. **P1 — First viewport sells atmosphere before preparation.** `PlanetLayout.astro` gives the hero up to 78vh/640px, so a 1280×720 visitor sees almost no “why go / how to get there / what to avoid” guidance. Add a compact “Start here” route summary to the first viewport. Recommended: `$impeccable layout`.
2. **P1 — An unfinished attraction state is visible.** The service-station card has no image prop, while `AttractionEntry.astro` always creates a 220px image wrapper, producing a large empty block. The authored `ExplorerView` source also does not appear in rendered HTML/AX output. Add a deliberate text-only card variant or a licensed image, and either repair or remove the unused note. Recommended: `$impeccable polish`.
3. **P1 — Mobile shell has a real header failure.** At 390×844, browser evidence measured a 390×170.8px header with `.system-header__left` only 38.4px wide; “The Lawless Fringe” measured 44.8px and overflow was visible. The logo request `/lonely-planet-sc/logo.svg` and `/favicon.ico` both returned 404. Fix the responsive header width/wrapping and missing assets. Recommended: `$impeccable adapt`.
4. **P2 — Destinations are described but not actionable.** Levski stops and the four stations are bold prose, attraction titles lack `href`s, and “follow the route shown in the current star map” gives no route steps, coordinates, or triangulation workflow. Add a verified route plan, anchors/links, and coordinate guidance. Recommended: `$impeccable clarify`.
5. **P2/P3 — Information architecture and hierarchy blur the itinerary.** The system header is labeled “Urban Sight,” the breadcrumb is not a useful linked hierarchy, and all four cards have near-equal weight even though one is primary, one is resupply, and one is context-only. On mobile, sidebar getting-there guidance follows the cards and tip block. Reframe into Start here / Worth the detour / Resupply / Context only, correct the system-level label, and move essential route/safety guidance earlier. Recommended: `$impeccable distill`, then `$impeccable clarify`.

### Persona red flags and minor observations

- First-timers encounter “Urban Sight,” unexplained UEE/ASOP/QV terms, and no clear route recipe.
- Power users have no direct stop links, coordinates, or triangulation workflow.
- Time-poor tourists must scroll past a large hero and multiple cards before reaching operational guidance.
- The five-source italic paragraph reads as a citation wall; hero facts duplicate the sidebar; there is no “last verified” date; repeated dark imagery reduces card distinction; and no footer landmark was present in browser evidence.

### Open design questions

- Should the first screen answer “why go, how do I get there, and what should I avoid?” without scrolling?
- Should the Levski circuit become the primary itinerary instead of four equal attraction cards?
- Should “The Worlds Beyond the Current Route” remain on a visit guide if it offers no current visit action?
- Is “Urban Sight” intentional for a system guide, or should it become “System Guide” with a linked hierarchy?

## Impeccable critique — homepage navigation and mobile (2026-10-15)

Target: `src/pages/index.astro` rendered at `/lonely-planet-sc/` in Read/Persuade hybrid mode. User emphasis: broken top navigation and mobile view.

Method: dual-agent (`home_critique_design` + `home_critique_evidence`). Assessment A was an independent source/browser design review; Assessment B collected independent detector/browser evidence. The Impeccable engine could not create `/Users/shaase/.impeccable/bin/0.1.5`, so deterministic detector output and critique snapshot persistence were unavailable. No UI files were edited.

### Design verdict and score

- Design specificity: **3/4**. The “Find your next landing” launch deck, Stanton/Pyro/Nyx choices, travel language, and editorial rhythm are clearly Star Citizen-specific, but the navigation and coordinate-discovery model remain generic.
- Nielsen heuristics: **25/40** — moderate; strong concept with important shell/navigation defects.

| Heuristic | Score | Evidence |
| --- | ---: | --- |
| Visibility of system status | 2/4 | Pause/radio states exist, but active navigation is wrong at the top and scenery-slide status is unclear. |
| Match between system and real world | 4/4 | Landing, routes, available time, hidden discoveries, and travel framing fit the audience. |
| User control and freedom | 3/4 | Drawer close/Escape, pause, radios, and lightbox controls work; anchor and horizontal-rail behavior are less forgiving. |
| Consistency and standards | 2/4 | Visual language is cohesive, but desktop navigation wraps and the planner changes system context unexpectedly. |
| Error prevention | 2/4 | Honest Coming Soon state helps, but broken anchor offsets and ambiguous context remain. |
| Recognition rather than recall | 3/4 | Labels, imagery, and direct links help; tiny wordmark, missing Home state, and hidden mobile routes add recall burden. |
| Flexibility and efficiency | 3/4 | Direct system links, time choices, anchors, keyboard-friendly controls, and drawer are useful; no coordinate/search workflow. |
| Aesthetic and minimalist design | 2/4 | Editorial composition is strong, but the header overlaps, the page is long, and the hero carries many competing actions. |
| Error recovery | 2/4 | Escape/close and reduced-motion fallbacks exist; image failures and broken hash navigation are weak. |
| Help and documentation | 2/4 | Hero and planner explain intent, but jargon, route assumptions, and coordinate discovery are not explained. |

### Cognitive load and emotional journey

Overall cognitive load is **moderate-high**: five of eight checklist items fail — single focus, chunking, visual hierarchy, one thing at a time, and working memory. The desktop first screen combines six nav links, two CTAs, three system choices, and scenery controls. The page then moves from a system-neutral launchpad into a Hurston-specific planner, forcing visitors to reinterpret the decision they just made.

The emotional path is: cinematic arrival peak → trust valley when the desktop header wraps/overlaps → mobile orientation dip because Pyro and Nyx are only partially visible in a horizontal rail → discovery peak in the edition/attraction content → context valley when the Hurston planner follows a system-neutral choice → dense utility/footer ending without a confident next-destination handoff.

### Strengths

- The hero is a strong, product-specific launchpad with real Stanton, Pyro, and Nyx routes.
- The page has a credible editorial rhythm: cinematic arrival, practical planning, editions, featured guide, attractions, and community.
- The mobile drawer itself is well designed: clear title, full destination set, large controls, focus restoration, Escape support, and scroll locking.

### Browser evidence

- Desktop 1280×720: no document overflow, no console errors; header height 62px, but the logo extends 7px below it and “Hidden Discoveries” wraps to two lines.
- Mobile 390×844: no document overflow; the hero is 683px tall. The route rail uses 272px cards; the second begins at x=309 and the third at x=582, so Pyro/Nyx are not immediately discoverable.
- Mobile drawer behavior is sound: `aria-expanded`, body scroll lock, focus to close, Escape close, focus restoration, and modal Tab containment all work.
- Ten unique internal routes tested successfully, including PHDS, Stanton, Pyro, Nyx, Hurston, microTech, Canyon River, Crusader, and ArcCorp.
- Clicking `#editions` or `#attractions` lands the target about 352px below the viewport top. Global `scroll-padding-top: 272px` plus `[id] { scroll-margin-top: 80px }` conflicts with the approximately 62px sticky header, leaving an approximately 290px blank gap.

### Priority findings

1. **[P0/P1] Desktop top navigation collapses into the header.** The `1fr auto 1fr` header grid keeps six wide links in desktop mode until 860px. At 900–1440px, “Hidden Discoveries” wraps, the wordmark is tiny, and the logo crosses the header boundary. Switch to the mobile shell at a wider breakpoint or reduce desktop links; give the wordmark a readable width and prevent nav wrapping. Recommended: `$impeccable adapt`.
2. **[P1] Hash navigation is visibly broken.** `scroll-padding-top: 272px`, `[id] { scroll-margin-top: 80px }`, and the script’s ~80px assumption disagree with the actual 62px sticky header. Fix the offset from one shared header measurement. Recommended: `$impeccable polish`.
3. **[P1] Mobile system selection hides two destinations.** At 390px, the horizontal route rail shows one full card and a slice of the next, with no swipe cue, pagination, or snap affordance. Stack Stanton/Pyro/Nyx at this width or add explicit rail guidance. Recommended: `$impeccable adapt`.
4. **[P1] The system choice and Hurston planner are contextually disconnected.** The hero asks for Stanton/Pyro/Nyx, then immediately presents “How much time do you have ... to visit Hurston today?” Move the planner below Stanton content or label it as a secondary Stanton-only path. Recommended: `$impeccable distill`.
5. **[P2] Active navigation is misleading.** Scroll-spy defaults to the first anchor, so Editions is blue while the visitor is still at the hero; there is no Home/Launchpad state. Clear active state above the first section or add a Home state. Recommended: `$impeccable clarify`.

### Persona red flags and minor observations

- First-timers face six nav links, two CTAs, and three systems before they have a single clear next action; the tiny wordmark and terms such as “Hidden Discoveries” add uncertainty.
- Distracted mobile users must swipe a route rail before seeing all systems, while the hero consumes most of the first screen.
- Power users have no coordinate-triangulation/search entry point and must scroll through six attraction cards.
- The 900px breakpoint is a real edge case; the wordmark is too small to read; “Top Attractions” is a six-card group; the footer is link-dense; and there is no clear current-section state at the hero.

### Open design questions

- Should the mobile 390px route selector stack all three systems, or remain horizontal with an explicit swipe/pagination cue?
- Should the desktop header switch to the drawer earlier, or should the primary nav be reduced to four links plus a Home state?
- Should the Hurston planner move below Stanton content so the system choice and itinerary remain in one context?

## Editions
- [x] Cover images on edition cards: Stanton + Pyro done; Pyro needs a real in-game shot; Castra cover is a starmap; NYX uses wiki shots.

## VerseGuide integration (carried over from MONTHLY_PLAN.md)

### Data extraction
- [x] Finish Stanton extraction and image downloads (`src/data/verseguide/stanton.json` exists; verify completeness, coordinates, images)
  - Extraction complete: 31KB JSON with 14 POIs, verified coordinates
  - 7 of 13 images exist in `/public/images/hurston/`
  - 6 images still require manual in-game screenshot capture: aberdeen-dead-grass.jpeg, aberdeen-sunset.jpeg, aberdeen.jpeg, arial-bezdek.jpeg, arial-shimmer.jpeg, arial-station.jpeg
  - Build verified: `npm run build` passed (48 pages)
- [x] Extract Pyro POIs/coordinates fully (`docs/verseguide-data/pyro.json` created with 6 planets, stations, jump points, and factions)
- [ ] Extract NYX data (if available)
- [ ] Download, optimize (WebP/responsive) and organize image assets
- [ ] Validate all extracted JSON; document extraction scripts

### Components
- [ ] Wire up existing `ImageAttribution`, `TextAttribution`, `CoordinateDisplay` (only CoordinateDisplay is currently referenced); test with sample data; document props
- [ ] Create `POICollection.astro`, `NavigationInfo.astro`, `VerseGuideCite.astro` (inline citations)
- [ ] Enhance `AttractionEntry.astro` with VerseGuide support
- [ ] Performance + accessibility check of new components

### Integration
- [ ] Enhance Stanton overview page; add coordinates, POI collections, navigation info to planet pages
- [ ] Enhance Pyro overview page
- [x] Create NYX system page (overview done; planet/POI subpages and own screenshots still to do)
- [ ] Mobile responsiveness + cross-browser testing

### Attribution & compliance
- [ ] Image and text attribution system-wide; footer attribution (`VerseGuideCredit` exists, confirm it is used everywhere)
- [ ] Review VerseGuide terms of use; write attribution guidelines; legal compliance review

### Launch
- [ ] Final QA, performance optimization, monitoring, post-launch checklist
- Targets: pages load <2s, 100% attribution, 95%+ accessibility and mobile scores
- Risks: VerseGuide data availability (use agent-browser), image storage (lazy-load), attribution compliance, keep Lonely Planet voice primary

---

## Code audit findings (2026-10-23)

Autogenerated from a full-repo audit. Grouped by area; tick off as addressed. Verified build (`npm run build`, 49 pages) and tests (`npm run test:scripts`, 17/17) are green at audit time.

### A. Build, tooling & type safety

- [ ] Add `@types/node` to `devDependencies` (root cause of most `astro check` `Cannot find name 'process'`/`__dirname` errors) and re-run `npx astro check`.
- [ ] Wire `npm run test:scripts` into CI (`.github/workflows` only runs `npm run build` today) so the 17 script tests gate merges.
- [ ] Make `npm run build` fail on TypeScript errors or accept the current broken state explicitly; document which.
- [ ] Fix `src/components/AttractionEntry.astro:21` implicit `any` when indexing `CATEGORY_CONFIG[category]` (TS7053).
- [ ] Fix `src/components/PHDSIndex.astro` `EventTarget` narrowing (`closest` on possibly-null target) and remove unused `visitedIds` / `bookMarkedIds`.
- [ ] Fix `src/components/CoordinateDisplay.astro:53` reference to missing `TextAttribution` (import it or remove the slot).
- [ ] Remove unused `hoverStyles` from `src/components/Button.astro` and unused `base` from `src/components/ImageAttribution.astro`.
- [ ] Audit `src/layouts/PlanetLayout.astro` and `POILayout.astro` frontmatter `interface` drift; POILayout `type` union lists only 4 values but content uses 10.
- [ ] Align `SystemHeader.astro` type union with `POIBadge`'s canonical 10-value set (currently 4).
- [ ] Confirm `@astrojs/check` version is compatible with Astro 6 before treating its output as meaningful.

### B. Shared config & duplication (DRY)

- [ ] Extract the POI `type`/badge color map that is duplicated across `POIBadge`, `AttractionEntry`, `ActivityEntry`, `WhereToDock`, and `FastFactSidebar` into one shared module (JSON/TS).
- [ ] Reconcile the two divergent taxonomies (`POIBadge`'s 10 vs `AttractionEntry`'s 5, where `settlement` ≈ `urban-sight`) into one canonical vocabulary and migrate content.
- [ ] Remove dead code: `PlanetLayout`'s `hasExplorer` guard + `<slot name="explorer" />` (now carried via frontmatter), and any unused `.explorer` slot plumbing.
- [ ] Remove or wire up genuinely unused components: `CoordinateDisplay.astro` (0 references) and confirm `VerseGuideCredit` usage (1 reference, verify it renders in a footer).
- [ ] Consolidate the three base-path idioms (`import.meta.env.BASE_URL` variants + hardcoded `/lonely-planet-sc/...`) into a single helper and apply it to internal links/images.
- [ ] Fix the image-prefix inconsistency: `PlanetLayout` prefixes `hero_image` with base but `POILayout` does too (verify all layouts), and document the rule for hardcoded image props in MDX.
- [ ] Reuse one `ExplorerView` rendering path; ensure the self-closing `<ExplorerView quote=... name=... />` form cannot be used (props interface only `{ author }`).

### C. Routing, links & assets

- [ ] Verify every `href` authored in MDX resolves to a built page (spot-check: `stanton/arccorp/lyria`, `stanton/arccorp/wala`, `stanton/crusader/{cellin,daymar,yela}`, PHDS entries).
- [ ] Add a `git diff --check`-style check (or small script) that fails CI on broken internal links/images.
- [ ] Confirm `public/logo.svg`, `public/favicon.svg`, `public/favicon.ico` all resolve in production (404s were reported in prior critique).
- [ ] Ensure `base` prefix is applied to logo/favicon in `SystemHeader.astro` and layout `<head>` (currently `${base}favicon.svg`).
- [ ] Re-examine the 32 image references in `src/data/verseguide/*.json` that point to non-existent files under `/images/...` (extraction record, but should not lie); either download assets or trim the record.

### D. Accessibility & responsive (from Impeccable critiques)

- [ ] Fix desktop header collapse: 6-link nav wraps at 900–1440px; switch to drawer earlier or reduce to ~4 links + Home state (`src/components/SystemHeader.astro`, `src/pages/index.astro`).
- [ ] Fix broken hash navigation: reconcile `scroll-padding-top: 272px`, `[id] { scroll-margin-top: 80px }`, and the ~62px sticky header into one shared measurement.
- [ ] Make the mobile 390px system rail (Stanton/Pyro/Nyx) show all three destinations (stack or add swipe/pagination cue).
- [ ] Resolve the contextual disconnect between the system picker (Stanton/Pyro/Nyx) and the Hurston-only "time today" planner (move or relabel).
- [ ] Add a text-only card variant or licensed image for the service-station card that currently has no `image` prop (`AttractionEntry.astro` creates a 220px empty wrapper).
- [ ] Add active-nav "Home/Launchpad" state above the first section (scroll-spy currently defaults to Editions).
- [ ] Footer landmark is missing on the homepage; add one.
- [ ] Verify no horizontal overflow at 390×844 and 1440×1000 on all guide pages (currently checked on homepage only).
- [ ] Exercise keyboard paths (drawer Escape/focus restoration, planner radios, lightbox) on each new surface.

### E. Content integrity & voice

- [ ] Reconcile docs drift: `DESIGN_SYSTEM.md`/`README.md` say Archivo Narrow/Merriweather/JetBrains Mono; tokens are Poppins/Inter/JetBrains Mono. Trust tokens.
- [ ] Image provenance: complete the `docs/nyx-asset-provenance.md` gate before reusing Nyx assets on new pages; no new pages until source URL/licence/hash recorded.
- [ ] Nyx availability honesty: only CIG-confirmed destinations presented as visitable; Castra stays `coming-soon`.
- [ ] Ensure each eating/drinking section adds a distinct purpose (do not repeat attraction narrative) — audit each planet guide.
- [ ] Verify `required_gear`, coordinates, difficulty against source before publication; do not fabricate.
- [ ] Complete the unfinished Pyro lore-video tasks only after confirming placement/sourcing (TODO items 58–59).

### F. VerseGuide integration (carried over; see existing section)

- [ ] Fix the missing `../../schemas/verseguide-system.json` referenced by `src/data/verseguide/*.json` (`$schema`), or drop the reference.
- [ ] Wire `ImageAttribution`, `TextAttribution`, `VerseGuideCredit` into pages (currently only 1 page uses `image_credit`).
- [ ] Decide and document VerseGuide terms-of-use / attribution compliance before expanding usage.
- [ ] Validate all extracted JSON and the extraction scripts; define "completeness" for Stanton/Pyro.

### G. Tests & quality gates

- [ ] Add at least one build-output assertion test (e.g., `class="explorer-note"` present on migrated pages) to catch regressions like the Explorer Note bug.
- [ ] Add a smoke check for `npm run build:od` (self-contained inlining) since it is untested in CI.
- [ ] Add `git diff --check` to CI (whitespace errors currently caught only locally).
