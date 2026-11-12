<div align="center">

# ASKĒSIS

### PHILOSOPHY, REFRAMED

A pocket library of philosophy. Twelve two-minute shelves, nine thinkers,
six schools, four thought experiments — set as one red poster and a single
cream reading sheet.

[![Astro 5](https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-d1393c?style=for-the-badge&logo=github&logoColor=white)](https://abhinav-prabhakar.github.io/Askesis/)
[![Static](https://img.shields.io/badge/build-static-0a0505?style=for-the-badge)](https://abhinav-prabhakar.github.io/Askesis/)
[![No trackers](https://img.shields.io/badge/trackers-0-feabe3?style=for-the-badge&labelColor=0a0505)](https://abhinav-prabhakar.github.io/Askesis/)

<br>

<a href="https://abhinav-prabhakar.github.io/Askesis/">
  <img src="assets/readme/home.jpg" alt="The Askēsis Explore sheet: a red poster world holding a cream reading surface with twelve entry cards, a daily question, and a floating search button." width="100%">
</a>

**[Enter the library →](https://abhinav-prabhakar.github.io/Askesis/)**

*No account · no ads · no autoplay · no analytics*

</div>

---

## A LIBRARY, NOT A FEED

No chronology, no infinite scroll, no up-next. Just six rooms you can walk
through in an afternoon. Even the red cards behind the sheet are doors.

<a href="https://abhinav-prabhakar.github.io/Askesis/">
  <img src="assets/readme/atlas.jpg" alt="The Atlas: four era plates — Ancient, Medieval, Modern, Contemporary — drawn as star charts, with each entry plotted on a constellation." width="100%">
</a>

<p align="center"><b>THE ATLAS</b> — every shelf plotted on a star chart, from Thales to the block universe.</p>

<table>
<tr>
<td width="50%">
<a href="https://abhinav-prabhakar.github.io/Askesis/"><img src="assets/readme/cast.jpg" alt="The Cast: a proscenium stage with red drapes, a marquee, footlights, and nine thinkers pinned as playbills." width="100%"></a>
</td>
<td width="50%">
<a href="https://abhinav-prabhakar.github.io/Askesis/"><img src="assets/readme/index.jpg" alt="The Index: a two-tier A–Z bookcase of coloured spines, with drawer A open to four catalogue cards." width="100%"></a>
</td>
</tr>
<tr>
<td valign="top"><b>THE CAST</b><br>Nine thinkers pinned to a working proscenium — drapes, marquee, footlights. Pull a playbill.</td>
<td valign="top"><b>THE INDEX</b><br>A–Z as a physical bookcase. Pull a lit spine; the drawer opens to its cards.</td>
</tr>
</table>

## TWO MINUTES IN, ONE IDEA OUT

Every shelf is edited to the same shape: a hook, one breath, three positions,
the argument in three lines, the strongest objection, a quote, and what to read next.

<a href="https://abhinav-prabhakar.github.io/Askesis/entry/sartre-bad-faith/">
  <img src="assets/readme/entry.jpg" alt="An entry page: Sartre's Bad Faith, with its hero panel, 'In one breath' summary, era ribbon, and entry contents." width="100%">
</a>

<table>
<tr>
<td width="50%">
<a href="https://abhinav-prabhakar.github.io/Askesis/series/bad-faith-60/"><img src="assets/readme/series.jpg" alt="A mini-scroll series viewer: five cards, a spooling reader with a drawn illustration and a card, and a five-stop rail." width="100%"></a>
</td>
<td width="50%">
<a href="https://abhinav-prabhakar.github.io/Askesis/"><img src="assets/readme/search.jpg" alt="The search dialog: one quiet surface with a ruled input, tab filters, and ruled result rows." width="100%"></a>
</td>
</tr>
<tr>
<td valign="top"><b>MINI SCROLLS</b><br>Five cards, sixty seconds. Swipe or use the rail — the whole argument on one spool.</td>
<td valign="top"><b>THE CATALOGUE</b><br>Search entries, thinkers, schools, puzzles. Press <kbd>/</kbd> anywhere.</td>
</tr>
</table>

## READ IT, THEN KEEP IT

Copy a citation in APA, MLA, or BibTeX. Save a private note. The quote card is built
to be shared as an image, not to chase a click.

<img src="assets/readme/quote.jpg" alt="The end of an entry: a pull-quote card, Read Next recommendations, citation styles, and a private note field." width="100%">

## SMALL SCREEN, SAME LIBRARY

<img src="assets/readme/mobile.png" width="250" align="right" alt="The mobile view: the poster reduces to a masthead, and the reading sheet fills the screen with full-width entry cards.">

The poster folds down to a masthead, and the sheet takes the whole screen.

- One column, no horizontal scroll.
- Search, filters, and the cast reflow — nothing hides behind a menu.
- The stage and the bookcase keep their proportions instead of shrinking to noise.
- Works offline once loaded; the whole library is static HTML.

<br clear="both">

---

## UNDER THE HOOD

| | |
|---|---|
| **Framework** | Astro 5 — static output, no hydration |
| **Runtime** | ~30 KB of hand-written vanilla JS for search, notes, and the sheet |
| **Art** | Every portrait, crest, chart, and diagram is inline SVG written by hand |
| **Type** | Bebas Neue + Helvetica, self-hosted |
| **Privacy** | No cookies, no analytics, no third-party requests |
| **Deploy** | Built output committed to `docs/`, served by GitHub Pages |

```sh
git clone https://github.com/Abhinav-Prabhakar/Askesis.git
cd Askesis
npm install
npm run dev       # http://localhost:4321/Askesis/
```

```sh
npm run build     # writes the static site to docs/
npm run deploy    # rebuild, commit docs/, push
```

> **Pages setup:** Settings → Pages → Deploy from a branch → `main` / `/docs`.
> No Actions, no build service. The committed site is the site.

Design rules, tokens, and every component live in [**`design.md`**](design.md).

<div align="center">
<br>

**“MAN IS CONDEMNED TO BE FREE.”**

*Twelve shelves. Nine minds. One reading sheet.*

**[Enter the library →](https://abhinav-prabhakar.github.io/Askesis/)**

</div>
