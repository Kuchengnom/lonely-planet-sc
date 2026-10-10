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

## Review

Mobile navigation: native dialog drawer includes all six existing destinations, 44px controls, Escape/close/link/resize handling, focus restoration, body-scroll locking, and synchronized hash-link active states. `npm run build`, `git diff --check`, and production-browser checks at 390×844 passed; the desktop toggle is hidden at 1024px.

Time planner: homepage-only CSS-native radio disclosure uses only the authored Hurston schedules. The 1h and 2h paths expose their matching itinerary; 3–4h exposes all three authored choices, with honest guide-level links and no invented tab URL. `npm run build` and `git diff --check` passed. Browser checks passed at 1440×1000 and 390×844; keyboard Right Arrow changes the selected itinerary and the 3–4h choice list is accessible.

Cross-breakpoint polish: retained the editorial grid, mobile drawer, and authored Hurston planner while establishing a consistent 44px CTA floor, pressed/hover/focus treatment, keyboard-visible card affordances, branded selection, and reduced-motion behavior. At 390×844 the hero now presents its primary and secondary actions as a deliberate vertical sequence; no horizontal overflow was observed. Browser checks at 1440×1000 and 390×844 passed, including drawer Escape/focus restoration, planner keyboard selection, and no console errors. `npm run build` (41 pages), `npm run test:scripts` (17 tests), and `git diff --check` passed.
