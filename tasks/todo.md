# Homepage refinement

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

## Editions
- [x] Cover images on edition cards: Stanton + Pyro done; Pyro needs a real in-game shot; Castra cover is a starmap; NYX uses wiki shots.

## VerseGuide integration (carried over from MONTHLY_PLAN.md)

### Data extraction
- [ ] Finish Stanton extraction and image downloads (`src/data/verseguide/stanton.json` exists; verify completeness, coordinates, images)
- [ ] Extract Pyro POIs/coordinates fully (`pyro.json` exists; verify)
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
