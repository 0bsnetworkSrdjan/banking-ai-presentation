# Claude Agent Notes

## here.now skill

- Skill name: `here-now`
- Installed location: `~/.agents/skills/here-now`
- Primary instructions file: `~/.agents/skills/here-now/SKILL.md`

### Verify availability

```bash
npx skills list -g
```

Look for `here-now` in Global Skills.

### Install or update

```bash
npx skills add heredotnow/skill --skill here-now -g
```

### Quick usage

```bash
cd ~/.agents/skills/here-now
./scripts/publish.sh {file-or-dir}
```

The command returns a live `https://{slug}.here.now/` URL.

## Site architecture (default)

Use Option A by default: one independent here.now site per client, linked under one verified custom domain.

- Base domain: `here.blockstruct.io`
- Client URLs use paths: `https://here.blockstruct.io/<client-slug>`
- Example: `https://here.blockstruct.io/unicredit-rs`

### Why this default

- Fastest setup (no extra DNS for each client site)
- Clean separation of deployments (one site slug per client)
- Per-client access control via site-level password protection

### Security and privacy rules

- Never put multiple clients into one shared site build.
- Create a new here.now site (new slug) for each client.
- Set a distinct password per client site.
- Do not expose other client links on the root landing page.
- Do not store API keys in this repository or in `CLAUDE.md`.
- Store here.now credentials in `~/.herenow/credentials` or `HERENOW_API_KEY`.

### Publishing pattern

1. Publish each client site from its own folder to get a site slug.
2. Map that slug to a unique path location on `here.blockstruct.io`.
3. Set/update password protection for that site.
4. Verify only the intended client path is shared.

## New client bootstrap (2-minute setup)

Use this flow for every new client site.

### 0) Set variables

```bash
export HERENOW_API_KEY="<YOUR_HERE_NOW_API_KEY>"
export CLIENT_SLUG="unicredit-rs"
export SITE_SLUG="<PUBLISHED_SITE_SLUG>"
export CLIENT_PASSWORD="<STRONG_UNIQUE_PASSWORD>"
```

Notes:
- `CLIENT_SLUG` becomes the path under `here.blockstruct.io`.
- `SITE_SLUG` is returned by publish.

### 1) Publish the client folder

```bash
cd ~/.agents/skills/here-now
./scripts/publish.sh "/absolute/path/to/client-site-folder"
```

Copy the returned slug into `SITE_SLUG`.

### 2) Link site to client path on custom domain

```bash
curl -sS https://here.now/api/v1/links \
  -H "Authorization: Bearer $HERENOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"location\":\"$CLIENT_SLUG\",\"slug\":\"$SITE_SLUG\",\"domain\":\"here.blockstruct.io\"}"
```

### 3) Set per-client password protection

```bash
curl -sS -X PATCH "https://here.now/api/v1/publish/$SITE_SLUG/metadata" \
  -H "Authorization: Bearer $HERENOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"password\":\"$CLIENT_PASSWORD\"}"
```

### 4) Verify routing and visibility

```bash
curl -I "https://here.blockstruct.io/$CLIENT_SLUG"
```

Expected:
- URL resolves to the intended client site.
- Site requires password before serving content.
- No root landing page links to other client paths.

### Troubleshooting quick fixes

- Link change not visible yet:
  - Link updates can take up to ~60 seconds to propagate.
  - Re-test after 60-90 seconds.

- Wrong content at `/$CLIENT_SLUG`:
  - Repoint location to the correct site slug:

```bash
curl -sS -X PATCH "https://here.now/api/v1/links/$CLIENT_SLUG" \
  -H "Authorization: Bearer $HERENOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"slug\":\"$SITE_SLUG\",\"domain\":\"here.blockstruct.io\"}"
```

- Need to inspect current links:

```bash
curl -sS "https://here.now/api/v1/links?domain=here.blockstruct.io" \
  -H "Authorization: Bearer $HERENOW_API_KEY"
```

- Forgot or need to rotate client password:

```bash
curl -sS -X PATCH "https://here.now/api/v1/publish/$SITE_SLUG/metadata" \
  -H "Authorization: Bearer $HERENOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"password\":\"<NEW_STRONG_PASSWORD>\"}"
```

- Remove password temporarily (only when necessary):

```bash
curl -sS -X PATCH "https://here.now/api/v1/publish/$SITE_SLUG/metadata" \
  -H "Authorization: Bearer $HERENOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"password\":null}"
```

- Cleanly remove a client path mapping:

```bash
curl -sS -X DELETE "https://here.now/api/v1/links/$CLIENT_SLUG?domain=here.blockstruct.io" \
  -H "Authorization: Bearer $HERENOW_API_KEY"
```

## Web build playbook (speed + quality)

Use a React-first static approach with reusable components and minimal runtime complexity.

### Folder and file conventions

- One client site per folder, e.g. `sites/unicredit-rs/`.
- Keep structure shallow:
  - `index.html`
  - `assets/css/main.css`
  - `assets/js/main.js`
  - `assets/img/`
  - `assets/docs/`
- Use lowercase kebab-case filenames only.
- Keep all links relative so previews and publish behave identically.

### Reusable component pattern (React preferred)

- Build pages from reusable components and sections:
  - Header/Nav
  - Hero
  - Agenda
  - Content blocks
  - CTA
  - Footer
- Mark sections with clear ids/classes: `section--agenda`, `card`, `cta`, etc.
- Keep styling tokenized with CSS variables in `:root` (colors, spacing, radius, shadow).
- Reuse utility classes for spacing/layout (`.container`, `.stack`, `.grid-2`, `.btn`).
- Prefer composition over duplication: create shared components for cards, timelines, and CTA blocks.

### Speed defaults

- Start from a minimal template, then duplicate sections instead of rebuilding.
- Keep JS optional and small; prefer CSS-first interactions.
- Avoid adding dependencies unless they remove substantial manual work.
- Compress media before commit/publish.
- Prefer SVG for logos/icons and modern formats for photos.

### Typography standard (free for web/commercial use)

Use open-source fonts only to avoid licensing risk.

- Body sans-serif: `Manrope`
- Titles/headings serif (design-forward, web-readable): `Cormorant Garamond`
- Striking statements (avant-garde, bold): `Archivo Black`

Fallback pairings:
- Body fallback: `Inter`, then `system-ui`, `sans-serif`
- Heading fallback: `Spectral`, then generic `serif`
- Statement fallback: `Anton`, then `system-ui`, `sans-serif`

Implementation rule:
- Load fonts from Google Fonts or self-hosted WOFF2 files.
- Do not use proprietary fonts (including Avenir Next, Druk, Editorial New) unless a verified web license is documented in project notes.

### Color tokens (approved palette)

Use these values as the default design tokens for this project.

- `--color-primary`: `rgb(100, 110, 250)` / `#646EFA`
- `--color-white`: `rgb(255, 255, 255)` / `#FFFFFF`
- `--color-mint-300`: `rgb(170, 205, 170)` / `#AACDAA`
- `--color-mint-700`: `rgb(80, 135, 100)` / `#508764`
- `--color-sand-100`: `rgb(245, 235, 200)` / `#F5EBC8`
- `--color-sand-300`: `rgb(250, 210, 150)` / `#FAD296`
- `--color-accent-orange`: `rgb(255, 120, 40)` / `#FF7828`
- `--color-accent-red`: `rgb(230, 60, 70)` / `#E63C46`
- `--color-accent-light-blue`: `rgb(120, 200, 255)` / `#78C8FF`

Suggested semantic usage:
- Primary actions and highlights: `--color-primary`
- Main page background/surfaces: `--color-white`, `--color-sand-100`
- Secondary accents and supporting UI: `--color-mint-300`, `--color-sand-300`
- Strong accent/contrast blocks: `--color-mint-700`
- Attention-grabbing highlights: `--color-accent-orange`
- Error, urgency, or critical emphasis: `--color-accent-red`
- Informational or fresh highlight accents: `--color-accent-light-blue`

### Approved frontend libraries (React standard)

Use these when they meaningfully improve delivery speed or visual quality:

- `tailwindcss` (fast utility-first styling)
- `gsap` (timeline and scroll animation orchestration)
- `lenis` (smooth scrolling and scroll feel tuning)
- `motion` / Motion One (lightweight declarative motion)
- `three` / Three.js (advanced visual scenes only when needed)

Guidance:
- Keep the dependency set minimal per client site.
- React is the preferred implementation standard for all new client sites.
- Default to one animation stack per page (GSAP or Motion One) to reduce complexity.
- Add Three.js only for clearly justified hero/background effects.

### Presentation interaction model (default)

Build workshop sites as horizontal slide presentations instead of long vertical pages.

- Primary navigation axis is horizontal (left/right).
- One topic per slide; slides are clearly bounded viewport panels.
- When advancing to the next topic, previous slide content exits and the next slide enters.
- Keep the active slide visually dominant; non-active slides should be visually quieter.

Implementation guidance:
- Use CSS scroll snap on the x-axis (`scroll-snap-type: x mandatory`) for slide locking.
- Use Lenis/GSAP to normalize wheel and trackpad behavior into horizontal progression.
- Keep a single source of truth for `activeSlide` in React state for animation triggers.
- Support keyboard and presenter controls (`ArrowLeft`, `ArrowRight`, optional click zones).
- Default content frame target is `80vw` x `80vh` for desktop presentation contexts.
- Enforce a desktop minimum frame size to preserve legibility (current baseline: `860px` x `560px`).
- On smaller screens, relax minimums and switch to responsive viewport-relative sizing.

### Motion system for slide content

Default to dynamic/animated presentation of nearly all visible elements, but keep it controlled.

- Animate slide entry/exit transitions and in-slide content reveals.
- Use staggered reveal for headings, bullets, charts, and media.
- On slide exit, animate all slide content out before/while transitioning to next slide.
- Respect accessibility: disable heavy motion when `prefers-reduced-motion` is enabled.

Recommended pattern:
- Slide transition timing: ~500-800ms.
- Element reveal timing: ~300-500ms, stagger 60-120ms.
- Use opacity/translate/blur combos; avoid overly complex transforms during live presentations.

### Section grouping and visual differentiation

Slides within one section should feel like a coherent chapter; new sections should be visibly distinct.

- Group slides into explicit sections (e.g., Intro, Context, Solution, Roadmap).
- Apply a subtle background tone shift per section.
- Keep contrast and readability stable while shifting section mood.
- Add a persistent section indicator (top rail, mini progress, or label) to show current chapter.

Token strategy:
- Define section background tokens (example: `--section-a-bg`, `--section-b-bg`, `--section-c-bg`).
- Derive section tones from approved palette to keep brand consistency.
- Keep shifts subtle (about 5-12% perceived tone change), not dramatic full-theme swaps.

### Frosted glass card standard (CSS-only — current approach)

Use pure CSS for slide card glass surfaces. No WebGL, no SVG displacement libraries. This is the proven, stable default for this project.

**Why CSS-only:**
- Works identically in Chrome, Safari, and Firefox
- No dependency risk or browser-feature gating
- Easier to tune incrementally (opacity, blur, border)
- Content is always visible and readable — no hiding/showing logic needed

**The four-layer CSS technique** (applied to `.slide-glass`):

1. **Directional body gradient** — `linear-gradient(148deg, ...)` brighter at top-left, dimmer at bottom-right. Simulates overhead light hitting a glass panel.
2. **Asymmetric border** — top/left edges bright (`0.78 / 0.52` white), right/bottom edges near-invisible (`0.22 / 0.16`). The single most convincing glass-edge cue.
3. **Four-layer elevation shadows** — sharp contact shadow → near → mid → deep ambient. Creates genuine perceived depth without any CSS transforms.
4. **Prism edge line** (`::after`) — 1.5px blue→mint gradient at the card base, imitating colour dispersion at a real glass edge.
5. **Secondary highlight film** (`::before`) — additional `rgba(255,255,255,0.32)` gradient on the top-left quadrant.

**Current tuned values (as of April 2026):**
```css
background: linear-gradient(148deg,
  rgba(255,255,255,0.84) 0%,
  rgba(255,255,255,0.66) 36%,
  rgba(255,255,255,0.54) 100%
);
backdrop-filter: blur(36px) saturate(1.25) brightness(1.10);
```

**Tuning guide:**
- More frosted / whiter → raise all three background rgba alpha values by ~0.08 each; raise blur by 4–8px; lower saturation
- More transparent / glassier → lower alphas, lower blur, raise saturation toward 1.6–1.8
- Keep `brightness` between 1.04–1.12 to avoid washing out the background image

**Do not use `liquid-glass-react` or WebGL overlays** for slide cards. Those approaches were trialled and abandoned: they disconnect glass from DOM content, create incoherent motion, and have cross-browser reliability issues.

### Glass card anatomy — header / body split

Every slide (except `title` and `quote`) uses a **stacked layout**: a thin header glass box on top and one or more content glass boxes filling the rest.

```
.slide-shell--stacked  (flex column, gap: 0.85rem)
  .slide-glass--header   flex: 0 0 auto  — kicker + h1 + section chip
  .slide-glass--body     flex: 1          — lead paragraph + bullet grid
```

For two-col and image-text, the bottom row is a `.slide-two-pane` containing two `.slide-glass--col` elements instead of a single body glass.

**No-header option:** if a slide has no `kicker` AND no `title`, `HeaderGlass` renders nothing. The body/col glass(es) automatically expand to fill the full shell height via `flex: 1`.

`title` and `quote` layouts use `.slide-shell--centered` with a single `.slide-glass--full` that fills the whole shell — no split.

**CSS size roles:**

| class | flex behaviour | used for |
|---|---|---|
| `.slide-glass--full` | `flex: 1` | title / quote full-card |
| `.slide-glass--header` | `flex: 0 0 auto` | compact title strip |
| `.slide-glass--body` | `flex: 1, min-height: 0` | single/bullets body content |
| `.slide-glass--col` | `flex: 1, min-width/height: 0` | column in two-col / image-text |

**CSS specificity rule for dark/tinted variants:** layout rules (e.g. `.slide-layout--quote blockquote p`) come after variant rules in the file and override them. Always add a combined selector when overriding layout-level colours inside a variant:
```css
/* correct — beats the layout rule */
.slide-glass--dark.slide-layout--quote blockquote p { color: #ffffff; }
```

### Glass style variants

Four named styles controlled by the `style:` frontmatter field:

| style | appearance | text |
|---|---|---|
| *(omit)* / `default` | white frosted glass | dark |
| `dark` | deep dark green-black glass | white, mint accents |
| `tinted` | primary-blue frosted glass | white, light-blue accents |
| `ghost` | near-transparent, minimal blur | dark |

Each variant overrides: `background`, `backdrop-filter`, `border-*`, `h1`/`h2`, `.kicker`, `.lead`, `.subtitle`, `.section-chip`, `.points li`, and `blockquote` colours. When adding a new variant, add all of these. Apply colours to both `.slide-content__inner` **and** `.slide-header-inner` so header and body glass boxes match.

### Slide navigation standard

Slides are horizontal, navigated by wheel scroll and keyboard arrows. Content stays visible at all times — there is no transition state machine or content-hiding logic.

**Working pattern (current):**
- The `.deck` element is the scrollable container (`overflow-x: auto`, `scroll-snap-type: x mandatory`)
- Navigation calls `el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })` directly on the deck element
- **Do not use Lenis** for deck navigation — Lenis defaults to scrolling `window`, not the deck div, and breaks horizontal slide navigation
- Wheel events are captured on the deck element with `{ passive: false }` and a 680ms debounce lock
- Keyboard events (`ArrowLeft` / `ArrowRight`) are on `window`
- GSAP stagger-reveals slide content on `activeSlide` state change via `.slide.is-active .animated` selector
- **ProgressRail:** dot `key` must use `index`, not `slide.title` — not all slides have a title (e.g. quote slides). `aria-label` falls back: `slide.title ?? slide.quote ?? slide.kicker ?? \`Slide ${index + 1}\``

### Accessibility and UX baseline

- One `h1` per page; logical heading order.
- All images have meaningful `alt` text (or empty alt when decorative).
- Ensure keyboard focus visibility and usable tab flow.
- Hit minimum contrast for text and UI controls.
- Test at common widths: 1440, 1024, 768, 390.
- Apply responsive design by default: fluid type, adaptive spacing, breakpoint-aware layout shifts, and touch-friendly targets on small screens.

### Responsive breakpoints standard

Use this default breakpoint system for all new client builds.

- Desktop XL: `>= 1440px`
- Desktop: `1024px - 1439px`
- Tablet: `768px - 1023px`
- Mobile: `< 768px`

Default behavior by breakpoint:
- Desktop XL/Desktop: full presentation mode, `80vw x 80vh` content frame with desktop minimums.
- Tablet: reduce spacing and type scale, keep slide clarity and chapter indicators.
- Mobile: prioritize readability and controls (larger tap targets, simpler motion, relaxed minimum frame constraints).

Implementation notes:
- Use `clamp()` for font sizes and key spacing values.
- Prefer container-width-aware layouts over fixed pixel grids.
- Validate no horizontal clipping of critical text at `390px` width.

### Per-slide animation system

Each slide can specify an animation preset and optional timing overrides in frontmatter. The GSAP reveal logic lives in `App.jsx` inside the `useEffect([activeSlide])` block.

**Presets** (defined in the `PRESETS` object in `App.jsx`):

| preset | behaviour |
|---|---|
| `fade-up` | opacity 0→1, y 24→0, blur 8px→0 — **default** |
| `fade-in` | opacity 0→1 only, no movement |
| `rise` | opacity 0→1, y 56→0, no blur — dramatic |
| `blur-in` | stays in place, blur 22px→0, scale 0.98→1 |
| `stagger` | like fade-up but slower stagger (0.18s) between elements |
| `instant` | no animation — `gsap.set()` to final state immediately |

**Timing overrides:**
- `anim_duration` — seconds per element (float, default `0.5`; `blur-in` default `0.7`)
- `anim_stagger` — seconds delay between elements (float, default `0.07`; `stagger` default `0.18`)

**Adding a new preset:** add an entry to `PRESETS` in `App.jsx`. Each entry has `from` (GSAP initial state), `to` (GSAP target state), and optional `defaultDuration` / `defaultStagger`. `instant` is `null` — handled as a special case with `gsap.set()`.

**What gets animated:** any element with the `.animated` CSS class inside the active `.slide`. All layout renderers in `SlideFrame.jsx` already apply `.animated` to headings, kickers, body text, bullets, and attribution lines.

### Slide content authoring standard

Slides are authored in a single markdown file and translated by the agent into `slides.js` on request.

**Source file:** `sites/unicredit-rs/src/content/slides.md`

**Workflow:**
1. User writes or edits `slides.md`.
2. Every slide must have a stable `id` in frontmatter: 10 random alphanumeric characters.
3. User marks edited slides by appending `-edited` to the id (example: `id: a1B2c3D4e5-edited`).
4. User tells the agent "update slides" (or similar).
5. Agent reads `slides.md`, processes only marked/new/deleted slides, and updates `slides.js` incrementally.
6. After successful processing, the agent removes `-edited` from processed slide ids.
7. No build-pipeline changes or Vite plugins required.

**File format — one `---SLIDE---` divider between each slide:**

```markdown
---SLIDE---
layout: single
section: Context
chapter: "01"
kicker: Why We're Here
tone: section-a
---
# Business Context & Goals

Short body paragraph. Keep to 2–3 sentences max.

- Bullet one
- Bullet two
- Bullet three
```

**Frontmatter fields (YAML between the `---SLIDE---` line and the `---` closing line):**

| field | required | values / notes |
|---|---|---|
| `id` | yes | stable 10-char alphanumeric slide id, e.g. `a1B2c3D4e5`; append `-edited` when the slide content changed |
| `layout` | yes | see layout table below |
| `section` | yes | section label shown in TopBar and section chip |
| `chapter` | no | chapter number string, e.g. `"01"` |
| `kicker` | no | small all-caps label above the title in the header glass |
| `title` | no | slide heading shown in the header glass (h1). If omitted along with `kicker`, no header glass renders and content fills full height |
| `tone` | yes | `section-a` (warm/sand) or `section-b` (cool/mint) |
| `style` | no | `default` (white), `dark` (dark glass), `tinted` (blue glass), `ghost` (transparent). Default: `default` |
| `animation` | no | `fade-up` (default), `fade-in`, `rise`, `blur-in`, `stagger`, `instant` |
| `anim_duration` | no | seconds per animated element, e.g. `0.9`. Default: `0.5` |
| `anim_stagger` | no | seconds between successive elements, e.g. `0.18`. Default: `0.07` |
| `image` | layout-dependent | filename only, e.g. `platform-diagram.png` — file must be in `public/img/` |

**After the closing `---`, the content body is free markdown:**
- `#` heading → slide-level `title` (goes in the header glass; h1)
- `##` heading → `subtitle` (title layout only, below the h1)
- Plain paragraph → `body` lead text (in the content glass)
- `- item` bullet list → `bullets` array (rendered as `.points` grid)
- `[left]` / `[right]` on their own line → split body into two named blocks for `two-col` and `image-text`
- `> text` blockquote → `quote` text (quote layout only)
- Line starting `—` or `–` after a blockquote → `attribution`

**Layout reference:**

| keyword | glass structure | content |
|---|---|---|
| `title` | single full-height glass (centered) | kicker + big h1 + subtitle |
| `single` | header glass + body glass | kicker, title in header; body + bullets in body glass |
| `two-col` | header glass + two col glasses side by side | kicker/title in header; `[left]` and `[right]` in col glasses |
| `image-text` | header glass + image glass + text glass | kicker/title in header; `image:` file left; `[right]` body+bullets right |
| `quote` | single full-height glass (centered) | `>` quote text + attribution |
| `bullets-only` | header glass + body glass (no body paragraph) | kicker/title in header; bullets only in body glass |

**No-header slides:** omit both `kicker` and `title`. The header glass is not rendered. Content glass(es) fill the full shell height. Section chip (if `section`/`chapter` set) moves into the body glass.

**Example — two-column slide with slide-level title:**

```markdown
---SLIDE---
layout: two-col
section: Solution
chapter: "02"
kicker: Our Approach
title: Challenge vs Solution
tone: section-b
animation: stagger
---
[left]
# What We're Solving
The legacy stack creates a 14-month delivery cycle.

- Fragmented tooling
- Manual compliance checks

[right]
# How We Solve It
A modular platform layer decouples deployment from release.

- Unified API gateway
- Feature-flag driven releases
```

**Example — image + text slide (title at slide level):**

```markdown
---SLIDE---
layout: image-text
section: Solution
chapter: "03"
kicker: In Practice
title: Platform Architecture
tone: section-b
image: platform-diagram.png
---
[right]
End-to-end flow from customer request to fulfilment in under 200ms.

- Event sourcing at every layer
- Kafka-based async messaging
```

**Example — no-header slide (content fills full height):**

```markdown
---SLIDE---
layout: single
section: Appendix
tone: section-a
---
Body text and bullets fill the entire glass card with no title strip above.

- Point one
- Point two
```

**Image files:** Place in `sites/unicredit-rs/public/img/`. Reference by filename only (`image: filename.png`). Rendered with `object-fit: cover` filling the left glass card.

**Parsing rules the agent must follow when reading `slides.md`:**
- Split on `---SLIDE---` (trim surrounding whitespace)
- Within each block, parse YAML frontmatter between the first `---` and second `---`
- Read `id` as slide identity. If it ends with `-edited`, treat the base 10-char prefix as id and mark the slide as dirty.
- Remainder after frontmatter is the markdown body
- `[left]` and `[right]` markers (on their own line) split the body into two named blocks for two-col / image-text
- `[langcode]` markers (e.g. `[de]`, `[sr]`) start a translation override block for that language; the block uses the same syntax as the English body
- `#` heading → `title`; `##` → `subtitle`; paragraphs → `body`; bullets → `bullets` array; `>` → `quote`; line starting `—`/`–` → `attribution`
- Same rules apply inside `[left]`/`[right]` blocks: `#` → `side.title`, paragraph → `side.body`, bullets → `side.bullets`
- Do not infer — if a field is absent, omit it from the JS object

**Translation override rules (CRITICAL — always follow):**
- When a `[langcode]` block exists for a slide, use its content verbatim for that language's fields — do NOT auto-translate those fields
- Fields present in the `[langcode]` block override auto-translation for that field only; absent fields are still auto-translated
- `[langcode]` blocks are for any configured language except `en` (English is always the authoritative source)
- Preserve all existing `[langcode]` override blocks when updating `slides.md` — never remove them
- When writing `slides.js`, override values take priority: `{ en: 'auto', de: 'manual override' }`

**Translation update logic:**
- When the user asks to "update slides", "rebuild", "translate", etc.:
  1. Read `slides.md` META block for configured languages
  2. Classify slides by id: `new`, `edited` (`id` ends with `-edited`), `unchanged`, `deleted`
  3. Parse the English body as source of truth for `new` + `edited`; skip `unchanged`
  4. For each non-English language on `new` + `edited` slides: check for a `[langcode]` override block; use overrides verbatim, auto-translate the rest
  5. Update `slides.js` incrementally (do not regenerate from scratch after bootstrap)
  6. Remove `-edited` from every processed slide id in `slides.md`
- No git diffing and no source-hash tracking are required for this workflow.

### Multilingual system

The presentation is multilingual. Languages are defined in the `---META---` block at the top of `slides.md`. The agent translates all text fields at build time.

**Source file:** `sites/unicredit-rs/src/content/slides.md` — always authored in English.

**META block (top of slides.md):**
```
---META---
languages: en, de, sr, it
default: en
---META---
```
The first language listed becomes the default. Each code maps to a button in the language selector.

**Agent translation workflow:**
1. User writes/edits slides in English and appends `-edited` to each changed slide id.
2. User asks "update slides" (or "build the site", "translate", etc.).
3. Agent reads the META block to get configured languages.
4. Agent processes only `new` + `edited` slides, updates `slides.js` incrementally, and keeps unchanged slides as-is.
5. Agent removes `-edited` from processed slide ids in `slides.md`.

**Data structure in `slides.js`:**
```js
export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]
export const DEFAULT_LANG = 'en'

export const slides = [
  {
    // Non-translatable — plain values
    layout: 'single',
    tone: 'section-a',
    chapter: '01',
    animation: 'fade-up',

    // Translatable — objects keyed by language code
    section: { en: 'Context',                    de: 'Kontext' },
    kicker:  { en: 'Why We\'re Here',             de: 'Warum wir hier sind' },
    title:   { en: 'Business Context & Goals',    de: 'Geschäftskontext & Ziele' },
    body:    { en: 'The banking sector faces...', de: 'Der Bankensektor sieht...' },
    bullets: {
      en: ['Point one', 'Point two'],
      de: ['Punkt eins', 'Punkt zwei'],
    },
  },
]
```

**Translatable fields:** `section`, `kicker`, `title`, `subtitle`, `body`, `bullets`, `quote`, `attribution`, `imageAlt`, and all nested side fields: `left.kicker`, `left.title`, `left.body`, `left.bullets`, `right.kicker`, `right.title`, `right.body`, `right.bullets`.

**Non-translatable fields:** `layout`, `tone`, `style`, `animation`, `anim_duration`, `anim_stagger`, `image`, `chapter`.

**`t()` helper** (`src/i18n.js`):
```js
t(field, lang)     // resolves string or array field for given lang
tSide(side, lang)  // resolves all fields of a left/right side object
```
Falls back: `field[lang] → field.en → first available`. Plain strings and arrays are returned as-is (no-op).

**Language persistence:** selected language is stored in `localStorage` under key `presentation-lang`. Reloading the page restores the last-used language.

**Language selector:** rendered inside `TopBar` on the right side (alongside the slide count). Only shown when `LANGUAGES` has more than one entry.

**Adding a new language:**
1. Add `{ code: 'sr', label: 'SR' }` to `LANGUAGES` in `slides.js`.
2. Add `sr` to `languages:` in the META block of `slides.md`.
3. Ask the agent to "add Serbian translations" — it reads the English fields and writes `sr` values for every translatable field.

### Collaboration and clarification rule

- Do not guess when direction is ambiguous.
- If multiple meaningful choices exist and requirements are unclear, ask for clarification before implementation.
- When proposing choices, present short trade-offs and request a decision.

### Content and security rules

- No confidential client data, credentials, or internal-only notes in published files.
- Use placeholders/anonymized examples in demos.
- Do not include hidden links to other client paths.
- Add a small footer note with owner/contact and date/version.

### Pre-publish QA checklist

1. Validate all internal links and document downloads.
2. Verify page title, meta description, and social preview basics.
3. Check mobile nav and all CTA buttons.
4. Confirm password gate is enabled for client site.
5. Publish and test final URL path on `here.blockstruct.io/<client-slug>`.
