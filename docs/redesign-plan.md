# PMD First Aid & CPR — Visual Overhaul Execution Plan

_Last updated: 2026-07-05. Companion to the "Current initiative" section of CLAUDE.md._

## Goals & guardrails

- **Modernize the look** — visuals, imagery, layout, motion — while the **content stays the same**.
- **Keep the brand palette** (company blues/greens); everything else (type, spacing, components, imagery) can change.
- **Fix responsive sizing** across screen sizes; site must work well in **both EN and FR** (French copy runs longer).
- Preserve: all copy + i18n keys, EmailJS contact form, Botpress chat, CRA + Tailwind v3.
- Process: feature branches + PRs (never commit to master), before/after screenshots at mobile + desktop via chrome-devtools, console clean, tests after changes.
- Sign-off flow (per Xavier): **2–3 design directions as static HTML mockups first** → pick winner → prove it on the home page → roll out page by page.
- Imagery: free to replace with free-license photography/graphics; Xavier reviews before shipping.

## Baseline audit findings (2026-07-05)

1. **Brand colors are not formalized.** `tailwind.config.js` defines no custom colors. Code leans on Tailwind `blue-500/600` (+ blue hexes) with `slate`/`gray` neutrals and stray `indigo` boilerplate. **Green is almost absent from the code** (2 minor uses) — the company green lives only in the logo/video assets. Must be sampled and confirmed as a token.
2. **Typography is broken.** `font-header` (31 uses) and `font-body` are **not defined** in the Tailwind theme — they render as browser/Tailwind defaults. Meanwhile `public/index.html` loads **17+ font families from 3 CDNs** (Google Fonts, rsms.me, cdnfonts) that are mostly unused. Fixing this alone changes the site's look and page weight significantly.
3. **No custom CSS layer** — `src/styles/index.css` is bare Tailwind directives. The design system will live in `tailwind.config.js` + shared components.
4. **Dead code**: `src/components/Archive/` (10 components) and `src/pages/Landing2.jsx` (unrouted duplicate landing page). Candidates for deletion during foundation work.
5. **Surface area**: 8 routed pages — Landing `/`, About, CourseSelect, Course (one `CourseView` template serving 10 courses), Testimonial, Contact, Error + `Layout` shell — plus Navigation (NavigationBar, Footer, mobile menu, language dropdown) and per-section components.

## Tooling (researched 2026-07-05)

**Already connected and sufficient:**
- **chrome-devtools MCP** — screenshots, device emulation/resizing (responsive testing), console monitoring, Lighthouse audits (perf + accessibility), performance traces. The workhorse for before/after verification.
- **artifact-design skill** — for the Phase 1 direction mockups (self-contained HTML artifacts).
- **GitHub MCP / gh-less PR flow** — PRs per phase; **Firebase MCP/CLI** — deploys.
- **code-review, simplify, verify, run skills** — quality gates per phase.
- **dataviz skill** — contains a color-contrast validation method usable when finalizing brand tokens.

**Added for this initiative (2026-07-05):**
- **frontend-design skill** (official Anthropic, Apache 2.0) — installed at `.claude/skills/frontend-design/`. Guidance for distinctive, non-templated UI design: two-pass design planning (token system → self-critique → build), typography-led personality, one signature element with restraint elsewhere, motion discipline, and interface copywriting rules. Applies to Phase 1 mockups and Phases 2–4 implementation.
- **PMD design-system skill** (to be authored in Phase 2 after direction sign-off) — will encode the chosen tokens, component conventions, and do/don'ts so future styling work stays consistent.

**Considered and not adopted** (from ecosystem sweep): Figma MCP (no Figma designs exist — nothing to extract), Storybook MCP (real value for large design systems; overkill for ~6 shared primitives on a marketing site — revisit if the component library grows), community Tailwind MCP server (marginal value, maintenance risk), a11y MCP (redundant with Lighthouse + manual contrast checks), image-optimizer MCP (local `sharp-cli` at imagery phase does the same without a server), Playwright MCP (redundant with chrome-devtools).

## Phases

### Phase 0 — Baseline & brand tokens (no visual changes) — ✅ DONE 2026-07-05 (pending hex confirmation)
Results in `.claude/redesign-baseline/` (28 screenshots + notes.md). Sampled brand tokens: blue `#1D86EB`, green `#23AB39`. Lighthouse (prod home, mobile): A11y 93 / BP 100 / SEO 100; one real a11y bug (buttons without accessible names). Console not clean (Botpress lib warnings).
- Dev server up; chrome-devtools full-page screenshots of **every route × {375px, 768px, 1440px} × {EN, FR}** → baseline set.
- Console + Lighthouse (perf/a11y) baseline per page.
- Sample the exact brand blue + green (logo assets + current dominant classes) → **confirm hex values with Xavier** → define `brand.*` color tokens and proper `font-header`/`font-body` in `tailwind.config.js` (tokens only; applied later).
- **Deliverable:** baseline screenshots + confirmed token proposal.

### Phase 1 — Direction mockups (no code changes) — ✅ DELIVERED 2026-07-05 (awaiting pick)
Three artifacts published (A: Clinical Modern 🩺, B: Human & Warm 🤝, C: Confident & Bold ⚡). Brand hexes provisionally confirmed (#1D86EB / #23AB39); fallback agreed if Xavier changes his mind after mockups: revert to the original site blue and pick a complementary green. Mockup sources in session scratchpad (`direction-{a,b,c}.tpl.html` + build script).

**Round 2 (2026-07-05):** Xavier's verdict — A's layout best, B's fonts/colors best, C worst; all three felt "incohesive and sterile" (root causes: photo placeholders + too many visual devices). Delivered **Direction D ⛑️ "Warm Clinical"** synthesis: A's layout + Fraunces/Nunito + warm palette + real PMD photos (from `public/assets/images`, incl. Paul cutout and real Red Cross/WSIB badges) + single signature device (lifeline) + sentence case throughout. C discarded.

**Round 3 (2026-07-05):** Xavier: "D is much closer — but capture some of the feel of the current site." Redeployed D (label `current-site-feel`) with: cinematic city-video hero restored (still frame in mockup; real page keeps `public/assets/videos/city-background.mp4`), dark translucent nav over the video, the WordFlip Bilingual/Accessible/Equitable animation, glass fact chips, and airy blue gradient washes in course/testimonial bands. Rest of D's system unchanged.

**Round 4 (2026-07-05):** Xavier: "I like this quite a bit — a few more tastefully placed animations and this could be a nice change." Delivered motion pass (label `motion-pass`): hero staggered entrance + slow ambient zoom on the video (the orchestrated moment), scroll-triggered section fade-ups (scroll-position based, not IntersectionObserver — IO misses crossings on fast scroll jumps), quote-mark pop-in, card-photo hover zoom, link-arrow nudges, slow green gradient drift on the booking band. Everything gated behind prefers-reduced-motion. **This is the de-facto approved direction pending Xavier's final word — Phase 2 (tokens + components on a feature branch, Framer Motion port of this motion language) is next.**
- 3 distinct home-page mockups as self-contained HTML artifacts, all on the brand palette, e.g.:
  - **A. Clinical Modern** — calm, generous white space, precise type, subtle motion (trust/credibility).
  - **B. Human & Warm** — photography-forward, soft shapes, community feel (bilingual/inclusive PMD story).
  - **C. Confident & Bold** — strong color blocking, large type, dynamic hero (stands out; still professional).
- Each defines: type pairing, spacing rhythm, button/card/nav treatment, imagery style, motion notes.
- **Deliverable:** side-by-side artifacts → Xavier picks a winner (+ tweaks).

### Phase 2 — Design-system foundation (branch `redesign/foundation`) — ✅ IMPLEMENTED 2026-07-05 (PR pending review)
Done: brand tokens + Fraunces/Nunito in `tailwind.config.js`; font loads cut from 17+ families to 2 in `index.html`; base typography layer in `styles/index.css`; Shared primitives (Button, Container, SectionHeading, CourseCard, TrustChip, Lifeline, Reveal, motionVariants); stray one-off font classes migrated; `Archive/` + `Landing2.jsx` deleted; `.firebase/` cache untracked; PMD design-system skill authored at `.claude/skills/pmd-design-system/` (local). **Deferred to Phase 3:** NavigationBar + Footer restyle — they're part of the home-page visual gate, so they land with that sign-off. Note: repo has zero Jest tests (found during verification) — consider adding smoke tests later.
- `tailwind.config.js`: brand color scale, **max 2 font families** (define `font-header`/`font-body`), type scale, spacing/radius/shadow tokens; strip unused font loads from `index.html`.
- Shared primitives (`src/components/Shared/`): Button, Card, SectionHeading, Container, Badge; restyled NavigationBar + Footer; a Framer Motion variants module for a consistent motion language.
- Delete `Archive/` + `Landing2.jsx` (confirm first).
- **Deliverable:** PR with tokens + primitives (site look mostly unchanged until pages adopt them).

### Phase 3 — Home page implementation (branch `redesign/home`) — GO/NO-GO GATE
- Rebuild Landing with the new system per the chosen direction.
- Before/after screenshots (mobile + desktop, EN + FR), console clean, integrations intact.
- **Deliverable:** PR + screenshot comparison for sign-off. Rollout starts only after approval.

### Phase 4 — Page-by-page rollout (one PR per page/group)
Order: CourseSelect (buttons + dropdown) → Course/CourseView template (all 10 course pages at once) → About → Testimonials → Contact (EmailJS intact) → Error + leftovers. Same checks every PR.

### Phase 5 — Imagery pass
- Curate free-license replacements (Unsplash/Pexels) for course photos + hero treatment; optimize locally (responsive sizes, WebP via sharp-cli).
- **Deliverable:** contact-sheet review with Xavier before shipping.

### Phase 6 — Responsive & accessibility hardening
- Sweep all pages at 360/390/768/1024/1280/1536, EN + FR; fix sizing issues (a stated goal of this overhaul).
- Keyboard/focus states, semantic markup, contrast validation of final tokens; Lighthouse vs Phase 0 baseline.

### Ship
- Final `/code-review`, merge, `npm run build`, `firebase deploy --only hosting`; optional summary email to Paul.

## Risks / notes
- **FR strings are longer than EN** — every layout check runs in both languages.
- The `font-header` fix will visibly change typography by itself — done deliberately in Phase 2, not as a side effect.
- Botpress widget and EmailJS form get a functional check in every phase that touches their pages.
