# Askēsis — Design System v1

> The single source of truth for how Askēsis looks, moves, and grows.
> Read this before adding any component, page, or illustration.
> The site is one poster that became a library: a red world, one cream
> reading sheet, zero persistent chrome.

---

## 1. Principles

1. **One surface.** The cream sheet is the only reading surface. No new
   pages, sidebars, drawers, or persistent nav. New affordances (reader
   toolbar, sticky bar) appear contextually and disappear with context.
2. **Poster first, library second.** Desktop keeps the fixed-art-board poster
   composition. Every addition must survive at poster scale and at phone width.
3. **Edited, not encyclopedic-looking.** Short hooks, diagrams before
   paragraphs, max three of anything (positions, related, objections).
   If it needs a fourth bullet, it needs an editor.
4. **Flat and punchy.** Solid fills, black keylines, offset shadows, press
   motion. Never glows, gradients, blur, or drop-shadow softness.
5. **Motion explains.** Animation shows hierarchy (rise), place (sheet-grow),
   or state (dots, progress). Decorative motion must be pausable or one-shot.

---

## 2. Tokens

### Palette

| Token | Hex | Meaning | Use for | Never for |
|---|---|---|---|---|
| `--red` | `#d1393c` | the world behind | page/scene background, progress hairline, quote bar, `h2` chips, danger accents | large text fills |
| `--card` | `#a50000` | backdrop cards | background scenery cards only | foreground UI |
| `--cream` | `#fadede` | the reading surface | sheet background, ghost/ink-card text | page background |
| `--cream-2` | `#fbd7d7` | figure ground | inline figure art fallback | text |
| `--pink` | `#feabe3` | topics / primary | entry cards, argument header, atlas dots, position 3 | body text |
| `--purple` | `#d8aafe` | series / puzzles | series cards, experiment art, sv numerals | body text |
| `--ink` | `#0a0505` | structure | text, keylines, ink cards, pills, sv background | large flat areas |
| `--paper-ink` | `#160808` | long-form text | entry paragraphs | display type |
| `--card-text` | `#ffd8d6` | scenery text | text on red bg-cards | foreground UI |
| `--white` | `#fff8f4` | relief | daily strip, quote/cite/notes blocks, medallion rings | page background |
| `--line` | `#060204` | keylines | every border | text color |
| `--mut` | `rgba(10,5,5,.58)` | secondary text | bylines, hints, captions | essential labels |

Contrast rule: pink/purple/cream carry **ink text only**. White carries ink
text. Ink carries cream text. Red carries white display text at ≥30px only.

### Type

Two families, no third:

- **Display:** `"Bebas Neue"` (`--display`), fallback `"Arial Narrow", Impact`.
  Headings, card titles, numbers, dots, ticker, seal. Tight leading
  (`0.85–0.95`), negative tracking (`-0.2px to -0.8px`), uppercase.
- **Body:** `"Helvetica Neue", Helvetica, Arial` (`--ui`). Everything else.
  Kickers/labels are 700 weight, 10–12px, `0.08–0.2em` tracking, uppercase.

Scale (desktop): sheet title 84px · section titles 42–60px · card titles
23–44px · body 15–17px (21px max at `xl` text size) · captions 12–14px.

### Keylines, shadows, radius

- Keylines: 2.5–4px solid `var(--line)`. Dashed keylines mean **unfinished**
  (ghost shelves, how-to boxes) — never use dashed decoratively.
- Shadows: `--sh: 4px 4px 0 var(--line)`, `--sh-lg: 6px 6px 0 var(--line)`.
  Hover lifts to +2px offset; active press collapses to 1px. No blur radius, ever.
- Radius: sheet `6px` top (`10px` grown, `20px` mobile) · pills `16–25px` ·
  dots/medallions `50%` · everything else `0–6px`.
- Spacing: sheet padding `48px` desktop / `18px` mobile · section gap `40px` ·
  card gap `12–16px` · card padding `12–20px`.

### Z-index map

`scene 1 · masthead 3 · grain 4 · rails 5 · panel 10 · doc-top(sticky) 20/25 ·
progress 30 · search-pop 90 · search-btn 60 (120 mobile) · skip 200 ·
gloss-tip 300 · toast 400`.

---

## 3. Motion system

Easing: `cubic-bezier(.22,1,.36,1)` (rise/grow), `ease` for fades.
Durations: press 90ms · hover 170ms · reveals 340–460ms ·
entrances 240–300ms · ticker 32s linear.

| Behavior | Trigger | Implementation |
|---|---|---|
| **Sheet-grow (scrubbed)** | any scroll; doc view opens | `--gp` (0→1) is written from `scrollTop/240` on the sheet's scroll event (forced 1 in doc view) — no lerp, no transition lag. Sheet geometry, scene parallax, and masthead fade are pure `calc()` off `--gp`. `.is-grown` (>0.5) is a chrome-only hook. Disabled <900px. |
| **Scroll reveal** | element enters viewport | `.rv` → `.in` via one `IntersectionObserver` (`watchRv()`); stagger `--d` = sibling index × 35ms, capped 5. Uses the `translate` property so hover transforms keep working. |
| **Whole-page scroll frame** | wheel or paging keys anywhere on stage | Wheel over red scenery forwards to the sheet (`ctrl` = pinch-zoom untouched). `Arrows/Space/PgUp/PgDn/Home/End` page the sheet when focus is on no control. No CSS smooth-scroll: the sheet tracks the gesture exactly. `scroll-padding-top: 110px` keeps anchors clear of the sticky bar. |
| **Search entrance** | popover opens | `pop` keyframe on popover; `rise` stagger on results (`nth-child` delays). |
| **Dice** | hover/active on Surprise | `dice-roll` (180°). |
| **Hero micro-motion** | always, per-motif | Each hero motif lives a little: masks drift, fork endpoints pulse, the eye looks around, the veil sways, scales tip, NOW bobs, the cogito heartbeat. Translate/opacity keyframes only, scoped to `.hero-art` (still in `.t-art` cells), silenced under reduced motion. |
| **Arrows** | hover on daily / featured | `nudge-x` loop. |
| **Ticker** | always (pauses on hover) | `tick` marquee, duplicated content. |
| **Toast / glossary** | shown | `pop` + opacity/transform transitions. |

Reduced motion (`prefers-reduced-motion`): reveals render instantly, ticker
and keyed loops stop, global durations collapse. Never ship motion without
checking this block in `styles.css`.

---

## 4. Components

Conventions: Bebas class names are lowercase (`doc-title`, `arg-r.qed`).
Interactive cards are `<a>`/`<button>` with ≥44px targets, visible
`:focus-visible` (3px ink outline), and press physics
(`translate(±2px)` + shadow collapse).

| Component | Classes | Rules |
|---|---|---|
| Sheet | `.explore-panel` `#sheet` `.sheet-scroll` | Only surface. Internal scroll on desktop; page scroll on mobile. Never add a second panel. |
| Progress | `.progress` | 5px red hairline, width = scroll %. |
| Explore header | `.panel-top` `.explore-title` `.surprise` | Bebas 60px + ink pill button with dice SVG. |
| Daily question | `.daily` | White card, ink kicker pill, 17px semibold question, nudging arrow. One line, links to an entry. |
| Topic cards | `.topics` `.topic` | Pink, Bebas 30px, number + `read · tradition` meta. 3-col grid → 2-col mobile. |
| Start / Featured | `.duo` `.start-card` `.featured-mini` | Ink vs purple pair, kicker + display title + sub. Steps dots on Start. |
| Section titles | `.series-title` `.section-sub` | Bebas 54px + 14px muted sub. Every section gets both; no orphan headings. Auto-numbered `SHELF 01…` via CSS counter on `#view-explore` (encyclopedia rhythm, zero markup). |
| Stats line | `.stats` `#statsRow` | One auto-counted line (`N SHELVES · N THINKERS · …`) rendered at build time from data. Muted 11px kicks; counts update themselves when data grows. |
| Topic cards | `.topics` `.topic` `.t-art` | Pink, Bebas 30px, number + `read · tradition` meta. 3-col grid → 2-col mobile. The newest shelf spans full width (`:last-child:nth-child(3n+1)` / mobile `2n+1`). Each card carries a 56px art cell with its hero motif cropped (`slice`) — the grid reads as a gallery wall, not a list. Art is still in heroes; motion is disabled in cells. |
| Mini scrolls | `.series-row` `.series-card` `.series-art` `.scroll-rod` `.seals` | Rolled-papyrus cards: white field, ink roller rods on both edges (finial caps past the card boundary), 108px woodblock art cell (`seriesArt(i)` 118×118), kicker `SCROLL Nº 01 · 60″`, Bebas title, five wax-seal dots — first broken (red). Hover nudges `UNROLL →`. |
| Experiment cards | `.exp-row` `.exp-card` `.exp-art` | White, 74px art band tinted per puzzle, byline meta. 4-col → 2-col mobile. |
| Atlas | `.atlas` `.atlas-era` `.e-map` `.e-lines` `.dot` | An ink star-chart plate, not four cards: `THE ATLAS · FOUR FIELDS` plate bar, four era fields divided by dashed rules, roman numeral + name + span from `ERAS`, and a constellation map per era (cream dashed `e-lines` + star dots). Published entries are numbered 44px pink/lilac stars with ring + crosshair; soon entries are hollow dashed stars (✎). Each field carries a faint `eraArt(name)` sigil (column, arch, telescope, orbit), a `N SHELVES · Nº 0X/04` footer, and the dot is still the link. Ink plate footer holds the published/being-written legend and `OLDEST FIRST`. Mobile: 2×2 fields, dots flow inline, constellations drop away. |
| Atlas era field | `.atlas-era` `.e-rom` `.e-name` `.e-map` `.e-sigil` | `atlas-era` (not `.era`) keeps the star-chart field independent of the entry `.era-ribbon`; never reuse `.era` for new Atlas work. |
| The Schools | `.schools` `.crest` `.crest-art` | Traditions as heraldic crests: heater-shield SVG (`crestArt()` 96×108; pink/purple/cream-2 field by school; Sisyphus boulder / column / question / arch-star / door-ajar / gavel sigils), name + entry count below. 6-col → 3-col mobile → 2-col small phones. Replaces the old chip wall. |
| Chips | `.chips` (+ `.filters`) | Cream pills, ink `.on` for the active filter. Used by the search popover's type filters. |
| Recent | `.recent` `.recent-row` | Rendered only when non-empty; max 3. |
| Ticker | `.ticker` `.ticker-in` | Ink strip, Bebas 26px, aria-hidden, pause on hover. |
| Footer | `.sheet-foot` `.seal` | Meta line + links + giant faint `Æ` watermark (`rgba ink .08`, 168px). |
| Reader bar | `.doc-top` `.back` `.doc-tools` `.tool` `.doc-now` | Back link + entry title + Aa / Listen / Share. Title centers itself, ellipsizes, and only appears when the sheet is grown (desktop) — context without chrome. Sticks to sheet top when grown (desktop) or always (mobile). |
| Crumbs | `.crumbs` `.crumb` `.readtime` | `.p` pink = tradition, `.u` purple = format; read-time is an ink pill. |
| Entry head | `.doc-title` `.doc-hook` `.doc-stand` | 84px title (56 mobile), 21px semibold hook, muted standfirst. Hook opens with an ink drop-cap (`::first-letter`, Bebas, cream on ink) — the entry starts like print. |
| Hero | `.hero` `.hero-art` `.hero-cap` `.stamp` | 220px art cell (pink/purple/cream-2) + kicker/big/sub. Grid → stacked mobile. A rotated ink press stamp (`2 MIN · EDITED` / `1 MIN · PUZZLE` / `BEING WRITTEN`) pins the corner like a library due-date slip. Hero motifs carry micro-motion (drift, pulse, look, sway, pans, bob, beat — translate/opacity only, still in topic cells, off under reduced motion). |
| Sections | `.doc-sec` | `h2` gets a 14px red chip marker; sections auto-number as `CHAPTER 01…` kickers via CSS counter on `#view-doc` — every entry reads like a booklet, zero markup. |
| Breath | `.breath` | White card, red-chip kicker `IN ONE BREATH`, 17px summary. |
| Sections | `.doc-sec` | `h2` gets a 14px red chip marker (`::before`); paragraphs `--paper-ink`, 16.5px/1.65. |
| Positions | `.positions` `.position` `.avatar` `.tape` | 3 cards (cream/white/pink), 44px ink medallion initial, `01–03` numerals. Above them the tale-of-the-tape: an ink strip (`.tape-cell`: medallion initial + name + `tag` verdict) — the whole debate at a glance. Stacks to one column on mobile. |
| Argument card | `.arg` `.arg-h` `.arg-r` `.tag` `.qed` | Pink header + COPY; rows `P1/P2/∴`; conclusion row is ink-on-cream-inverted. Shareable text format: `P1… P2… ∴… — via Askēsis <url>`. |
| Objection duel | `.duel` `.duel-card` `.vs` | The objection section is a duel, not a paragraph: white OBJECTION card vs pink REPLY card (both from data: `objection` + `reply`), joined by an ink-ringed red VS medallion. Stacks on mobile, side-by-side in print. |
| Era ribbon | `.era-ribbon` `.era.now` | `WHERE THIS SITS`: all four eras with date spans from `ERAS`; the entry's era is an ink cell with a pink `◉ THIS ENTRY` marker. 4-col → 2×2 mobile. |
| Chapter index | `.toc` | `IN THIS ENTRY · FIVE STOPS`: anchor links (01–05) to tension/positions/argument/duel/quote with dot leaders + ink number chips. Hidden in print; `scroll-margin-top` keeps targets clear of the sticky bar. |
| Read next | `.readnext` `.rel-grid` `.call` | Max 3 cards (pink/purple/white rotation). Catalogue `CALL Nº 07` ink chips — the shelf mark, not just a link. |
| The Cast | `.cast-stage` `.cast-marquee` `.cast-drape` `.cast` `.cast-card` `.cast-face` `.cast-floor` | A real proscenium, not a row of cards: red scalloped pelmet, ink house, pleated red drapes at both edges, a `REPERTORY COMPANY · Nº 05 · 9 MINDS` marquee, cream stage floor with board seams and nine pink footlights. Nine playbills are pinned slightly askew (`--ct`, red pin) on the stage — `Nº` ticket, flat two-tone SVG portrait (`thinkerPortrait()` 96×96; glasses, wig, mustache, beard, tonsure, bat, …) in a cream-2 mat, Bebas name, years · school, entry count. Hover straightens the bill and lifts it off the stage. 9-col → 3-col mobile → 2-col small phones (drapes/floor drop away, marquee condenses). Pick a playbill instead of a chip. |
| Tug of war | `.tug` `.tug-rope` `.knot` | The tension section ends in a rope pull: position 1 vs position 3 (names + verdict tags from data — no new copy, nothing quantified, the knot stays centered), red knot on an ink rope. Stacks on mobile, prints flat. Emblematic, not metric. |
| Margin filing slip | `.breath-file` | Wide screens (≥1200px) only: the breath card splits into summary + a cream-2 filing slip (`Nº 07 · tradition · era · read time`). Redundant meta, so hidden below 1200px and reference-marked, not read twice. |
| NEW stamp | `.topic.latest` `.new-stamp` | The newest shelf (last in `ENTRIES`) carries a rotated red `NEW` stamp, computed in the template — no data flag to rot. Sits on the full-width latest card. |
| Colophon | `.colophon` | Every entry ends with the printer's mark: `SET IN BEBAS NEUE & HELVETICA · PRINTED ON CREAM · ENTRY Nº 07 OF 12`. Dashed rule, muted kicks, centered. |
| Quote poster | `.quote::after` | Giant pink `“` (190px Bebas) hangs behind the quote — the card reads as a poster, not a paragraph. Screen + print, `aria`-neutral pseudo-element. |
| Figures | `.fig` `.fig-art` `figcaption` | Bordered diagram + `FIG. N — caption`. Art bg rotates pink/purple/cream-2. Caption ≤12 words. |
| Quote | `.quote` | White card, 14px red left bar, Bebas 40px quote, byline, COPY QUOTE / SHARE. |
| Read next | `.readnext` `.rel-grid` | Max 3 cards (pink/purple/white rotation). |
| Prev / Next | `.prevnext` | Two white cards; fallbacks: back-to-explore / start-here. |
| Cite / Notes | `.extras` `.cite` `.notes` | Tabs APA/MLA/BibTeX + copy; textarea persisted to `localStorage` per slug. |
| Series viewer | `.series-view` `.sv-track` `.sv-stage` `.sv-card` `.sv-art` `.sv-copy` `.sv-bar` `.sv-dots` `.sv-seg` | An unrolled papyrus on an ink stage: cream paper card between two scroll rods, a large illustrated art pane (`seriesCardArt(slug, i)`) and a copy pane (card number, Bebas title, rule, body, footer cue), giant faint `01–05` numeral behind. The bar carries `←` / five roman-numeral segments with a live `CARD 0X / 05 · TITLE` count / `→`; selected segment is purple, current card is ringed, first `←` is disabled. Last `→` becomes `END OF SCROLL` and follows `data-next` to the matching full entry. Mobile: single column (art above copy), rods hidden, bar stays prev / rail / next in one row. |
| Series hero | `.series-hero` `.series-plate` `.series-art` `.series-stamp` `.series-seals` | 92–120px framed plate with `seriesArt(i)` woodblock, rotated `60″` stamp, kicker `MINI SCROLL Nº 0X · 60″`, title, standfirst, five seal dots (first broken red). |
| Thinker | `.person` `.face` | 120px medallion (school tint + white inset ring), name/years/school/line, entry links. |
| Tradition | `.school` `.mark` | Square 120px initial mark (pink/purple/cream-2 by color), short version, orientation how-to, entries. |
| Stub (soon) | reuses `.hero` `.howto` `.readnext` | `BEING WRITTEN` pill, dashed scroll art (`soonArt()`), 3 locked points, published alternatives. Route `#/soon/:slug`. |
| 404 | `.nf` `.nf-art` | Broken-column SVG + `LOST PAGE` + 3 doors. Same voice as everything else. |
| Search | `.search-pop` `.cat-head` `.search-field` `.cat-tab` `.filters` `.sr` `.sr-call` `.cat-pull` `.s-keys` | The Index's card-catalogue drawer, pulled out over the sheet: ink `ASKĒSIS · CARD CATALOGUE / DRAWER 01` head, a white ruled subject card with a pink `SUBJECT` tab, and file-tab filters (active tab ink, `aria-pressed`). Results are index cards — a call-number column (`E 01`, `T 02`, … from type), type badge (pink entry, purple series, dashed soon, cream rest), Bebas title, meta, and a `→`; a pink drawer pull closes the object. Empty state is a dashed `NOTHING IN THIS DRAWER` card with three paper-slip suggestions. `aria-live` results; footer kbd-hint strip (`↑↓ MOVE · ↵ OPEN · ESC CLOSE`, `aria-hidden` — screen readers already get roles/live regions). Launcher is a black `SEARCH` plate on desktop, a round button on mobile. |
| Glossary | `button.g` `.g-tip` | Dotted-red-underline terms open an ink popover near the term. 8 terms in `GLOSS`. |
| The Index | `.az` `#azRow` `.az-case` `.az-cornice` `.az-books` `.book` `.az-plank` `.az-panel` | A framed two-tier bookcase, still pure encyclopedia furniture. Ink cornice (`THE INDEX` / `A–Z · 26 SPINES · 33 CARDS`) over a cream interior; 26 spine buttons in two 13-spine tiers with seeded heights, tilts and pastel `--spine` colours, headbands, diamond marks and count tickets. Books lean at the ends against ink bookends; a lit spine lifts off the plank, and the open one turns ink with a pink label and red ribbon. Shelf plates read `A–M` / `N–Z` with tier totals; the base plinth carries the library line, `PULL A LIT SPINE →` and `CATALOGUE Nº 06`. Tapping opens the card-catalogue drawer: call-letter chips, title, and right-aligned type · meta (stacked under the title on mobile). Mobile: each tier scrolls horizontally (snap), bookends hide, and the spines keep their physical proportions instead of compressing into 13 columns. No new surface, no search round-trip. |
| Toast | `.toast` | Ink pill, bottom-center, 2.2s. One message at a time. |

---

## 5. Illustration rules

- Inline SVG only, `viewBox` art, no raster except `grain.png` (scene only).
- Fills: palette solids only. Keylines `--line`, 5–7px at hero scale.
- Context backdrops (`bg-card`, grain, rails, ticker, sv track) are
  `aria-hidden`. Informative diagrams get `role="img"` + `aria-label`.
- Heroes: `heroSVG(slug)` 200×150 per entry. Figures: `figureSVG(slug)`
  430×150 + ≤12-word caption. Experiments: `expArt()` 120×74.
  Series art: `seriesArt(i)` 118×118 woodblock scenes; the viewer uses `seriesCardArt(slug, i)` per card. Atlas sigils: `eraArt(name)`. Thinker portraits: `thinkerPortrait()` 96×96. Tradition crests: `crestArt()` 96×108. Stubs share `soonArt()`.
- No emojis as iconography. `✎ → ← ∴ ·` glyphs are fine (type, not emoji).
- Big faint numerals (`sv-card::after`, `.seal`) use `--display` at low
  opacity — never photographic, never stroked text.

---

## 6. IA, routes & content

Routes are real static pages (built by Astro; shareable, `document.title`
set at build):

`/` explore · `/entry/:slug/` · `/thinker/:slug/` · `/tradition/:slug/` ·
`/experiment/:slug/` · `/series/:slug/` · `/soon/:slug/` ·
`/start-here/` · unknown → styled 404.

Schemas (all in `src/data/library.js`, one source of truth):

- **Entry:** `slug num title tradition era read hero{k,bg,big,sub}
  hook breath tension[] positions[{who,name,tag,text}] argument{p1,p2,c}
  objection reply quote{text,by} related[≤3] keys cite{apa,mla,bib}`.
- **Soon:** `slug title era hook points[3] related[2] keys`.
- **Thinker:** `slug name years school line entries[]`.
- **Tradition:** `slug name color('p'|''|'u') line entries[]`.
- **Experiment:** `slug title by read color setup steps[3] link`.
- **Series:** `slug title meta cards[{t,p}]×5`.

Adding an entry: append to `ENTRIES` (+1 num), add hero + figure branches,
wire `related` both ways, extend `INDEX` (automatic), add atlas dot
(automatic by `era`), update `feed.xml`, rebuild `docs/`.

---

## 7. Search, keyboard, a11y

- Full-text over title/hook/keys/bylines; synonym map `SYN`
  (`freedom→free will`, `mary→qualia`…); empty query returns 8; cap 9.
- Filter axis: All / Entries (+soon) / Thinkers / Puzzles / Schools.
- Keys: `/` or `⌘K` open · `Esc` close · `J/K` or arrows move ·
  `Enter` open · `R` surprise (when not typing).
- Skip link to sheet · `aria-live` results + toast · `role=dialog` search ·
  focus moved to sheet on route change · 44px minimum targets ·
  dotted-underline affordance for glossary · reduced-motion respected ·
  pink/purple always paired with ink text.

---

## 8. Responsive, print, feeds

- **≥900px:** 1600×959 art-board scaled by width (`fitStage()`); sheet
  absolute, grows `top 276→36px` on scroll/route; scene parallaxes,
  masthead yields.
- **<900px:** true composition — stacked scene (360px; top card row hidden,
  lower card strip below the masthead), full-width sheet, 2-col topics/puzzles,
  1-col everything else, horizontal series snap, sticky reader bar, fixed
  search button. Atlas folds to a 2×2 star chart; each Index tier scrolls
  horizontally; the Cast drops its drapes and floor to become a 3/2-col
  playbill board; the catalogue drawer goes full-width with scrolling results;
  the series bar stays prev / rail / next in one row. Grow disabled.
- **Print:** one clean cream page of the open entry; scenery, tools,
  navigation, ticker, seal hidden; shadows off.
- **RSS** (`feed.xml`) mirrors entries. **Sitemap** is a build-time route (`src/pages/sitemap.xml.ts`, generated from `library.js` — never drifts) plus `robots.txt` pointing at it. **PWA** is manifest-only for now —
  offline waits for content worth caching. No cookies, no trackers;
  `localStorage` holds recents + notes only.

---

## 9. Anti-patterns (do not add)

Accounts, comments, likes, streaks, quizzes, spaced repetition, AI chat,
dark mode, badges, filter sidebars, graph views, persistent top nav,
third font, new hue outside the palette, gradients/glows/blur,
autoplay, share-count widgets, modal dialogs (search popover and
glossary tip are the only overlays). "More fun" comes from format —
argument cards, puzzles, 60-second series — never from engagement chrome.

---

## 10. File map

`src/pages/` — routes (`index`, `entry/[slug]`, `thinker`, `tradition`,
`experiment`, `series`, `soon`, `start-here`, `404`).
`src/layouts/Base.astro` — shell, scene, sheet skeleton, search pop.
`src/styles/styles.css` — tokens → scene → sheet → components → motion →
responsive → print (this doc mirrors that order).
`src/data/library.js` — content + search index + A–Z. `src/lib/` — SVG art,
glossary, base-aware URLs. `public/js/app.js` — search, scroll/grow, reading
tools, notes/recents. `docs/` — built site committed for GitHub Pages
(no Actions). `feed.xml`, `sitemap.xml`, `manifest.webmanifest`. This file.
