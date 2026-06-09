# Food Chain Tag — Landing Page UX/UI Guide

This document defines the recommended structure, visual direction, and implementation priorities for the educator-focused landing page. It is based on the current components in `src/components/home/` and references product sites like [Catan](https://www.catan.com/) and [Cards Against Humanity](https://www.cardsagainsthumanity.com/) — informational, confident, and scannable rather than flashy.

---

## 1. Audience & Primary Goal

**Primary audience:** Educators (teachers, PE coaches, outdoor ed instructors, youth group leaders).

**What they need in the first 30 seconds:**

1. What is this? (active outdoor learning game about food chains)
2. Is it right for my class? (age, group size, time, setting)
3. How does it work? (simple rules, not a wall of biology)
4. Can I trust it? (curriculum tie-in, classroom fit)
5. Where do I get it? (clear purchase path)

**Design implication:** Lead with *utility*, not spectacle. Educators are busy; they scan headings, bullet points, and stat chips before reading paragraphs.

---

## 2. Recommended Section Order

Current order in `page.tsx`:

```
Hero → AboutGame → Details → CTA → QuickInfo
```

**Recommended order:**

```
1. Hero (compact)
2. QuickInfo — "How the game works" (rules at a glance)
3. AboutGame — "What is Food Chain Tag?" (product overview + stats)
4. Details — "What's in the deck" (card types + deck breakdown)
5. CTA — Order on Amazon
```

### Why this order

| Section | Role in the journey |
|--------|----------------------|
| **Hero** | Brand + one-line promise. Sets tone; does not teach. |
| **QuickInfo** | Answers "How do I run this?" immediately after the hero. Educators came to learn — give them the lesson flow before product specs. |
| **AboutGame** | Product positioning: who it's for, where it works, quick facts. |
| **Details** | Deeper content for the curious: card illustrations, deck composition, win conditions. |
| **CTA** | Conversion after the visitor understands the game. |

**QuickInfo at the bottom is too late.** Predator/prey definitions and food-chain context support the rules section; they should appear *before* or *within* "how to play," not after the buy button.

### Optional future section (not in current code)

- **Social proof** — 1–2 educator quotes or star rating between Details and CTA. Even a single testimonial increases trust for classroom purchases.

---

## 3. Page-Level Design Principles

### 3.1 Tone & visual language

- **Playful but professional.** Green (`#59b223`) and amber/gold accents match the ecosystem theme without feeling childish.
- **Reference sites:** Catan uses clear section bands, product imagery, and "learn / buy" separation. CAH uses bold typography and humor with almost no animation. Both prioritize *readability over motion*.
- **Reduce motion:** The hero's full-viewport parallax (`useScroll`, `bg-fixed`) feels heavy for educators on school networks and mobile. Prefer a short hero (40–50vh max) with at most a subtle fade-in on load.

### 3.2 Layout system

Use a consistent container everywhere:

```txt
max-w-6xl mx-auto px-6 py-16 md:py-20
```

Alternate background bands for rhythm:

- White → `bg-zinc-50` → white → `bg-zinc-50` → accent (CTA)

Avoid stacking three `bg-zinc-100` sections in a row (currently Details + QuickInfo both use it).

### 3.3 Typography hierarchy

| Element | Suggested style |
|--------|------------------|
| Section label (optional) | `text-sm font-semibold uppercase tracking-widest text-emerald-700` |
| H2 | `text-3xl md:text-4xl font-bold text-zinc-900` |
| Body | `text-lg text-zinc-600 leading-relaxed max-w-prose` |
| Stat label | `text-xs uppercase tracking-wider text-zinc-500` |
| Stat value | `text-xl font-bold text-zinc-900` |

### 3.4 Educator-specific patterns

- **Stat chips** (players, ages, time) — always visible near the product description.
- **"Classroom fit" line** — gym, schoolyard, forest; tie to NGSS / science standards if you have copy for it later.
- **Scannable rules** — numbered steps or a 3-column "Setup → Play → Win" grid, not long paragraphs.
- **One primary CTA** — "Order on Amazon" (external link). Secondary: link to Education page for lesson plans.

---

## 4. Component-by-Component Recommendations

### 4.1 `HeroSection.tsx` — Shrink and simplify

**Problems today**

- `h-screen` blocks the fold; users must scroll before seeing any substance.
- Three taglines compete with the headline.
- Parallax + `bg-fixed` can jank on mobile Safari.
- `"use client"` + Framer Motion only for scroll effects — unnecessary JS for a static hero.

**Recommended design**

```txt
┌─────────────────────────────────────────────────────────┐
│  [Logo / subtle green band, ~40vh]                      │
│                                                         │
│     Food Chain Tag                                      │
│     Active outdoor learning for food chains & webs      │
│                                                         │
│     [ See how it works ↓ ]    [ Order on Amazon ]       │
└─────────────────────────────────────────────────────────┘
```

**Specs**

- Height: `min-h-[40vh] md:min-h-[45vh]`, not full screen.
- Headline: product name + one educator-focused subline.
- Remove scroll-linked opacity/transform unless you add a deliberate "scroll cue" chevron.
- Two actions: anchor link to `#how-it-works` and external Amazon URL.
- Consider making this a **server component** (no animation) for faster LCP.

**Copy direction**

- Headline: `Food Chain Tag` (not "Welcome to the Ecosystem!" — save ecosystem language for body copy).
- Subline: e.g. *"A card-driven tag game that teaches food chains through movement."*

---

### 4.2 `QuickInfo.tsx` — Rename conceptually to "How It Works"

**Problems today**

- Reads like a glossary appendix at the bottom of the page.
- No visual structure; walls of text.
- Title "What is a predator?" is too narrow for the section's real job (teaching the game loop).

**Recommended design**

Section id: `id="how-it-works"` for hero anchor.

**Structure: 3 steps + optional glossary**

```txt
How It Works
────────────

  ① Deal roles          ② Tag & eat           ③ Survive & win
  Each player gets      Predators tag prey.   Last standing or
  a card (producer,     Lower tiers eat       most energy wins.
  herbivore, etc.)       higher tiers.

  [Optional accordion or sidebar]
  Quick science: Predator · Prey · Food chain · Food web
```

**Layout**

- Desktop: 3 equal columns with icons (Lucide: `Shuffle`, `Footprints`, `Trophy`).
- Mobile: vertical stack with clear step numbers.
- Glossary (predator, prey, food chain paragraph) moves to a **collapsible "Science background"** block or a muted callout below the steps — so rules stay primary, definitions stay available.

**Do not** duplicate the full biology lesson if `/education` will host deeper content. Link: *"Full lesson ideas → Education"*.

---

### 4.3 `AboutGame.tsx` — Two-column layout (text left, stats + card right)

**Problems today**

- Center-aligned paragraph, then a horizontal row mixing stats and card — confusing scan path.
- Card image in `w-32 h-40` with `fill` is easy to clip or look tiny; aspect ratio may not match the asset.
- Typo: "gymansiums".
- Stats and image feel like separate afterthoughts.

**Recommended layout**

```txt
What is Food Chain Tag?
─────────────────────────────────────────────────────────────

┌──────────────────────────────┬────────────────────────────┐
│  Body paragraph (left)       │  ┌─────────────────────┐   │
│  Educator-focused value      │  │  [Card back image]  │   │
│  prop. Where it works.       │  └─────────────────────┘   │
│                              │                            │
│  "Great for educators..."    │  ┌──────┬──────┬──────┐   │
│                              │  │ 15+  │  8+  │20-60m│   │
│                              │  │players│ ages │ time │   │
│                              │  └──────┴──────┴──────┘   │
└──────────────────────────────┴────────────────────────────┘
```

**Grid:** `grid md:grid-cols-2 gap-10 md:gap-16 items-start`

**Left column**

- H2 + prose paragraph (`text-left`, `max-w-prose`).
- Audience line as a short bullet list or tags: Educators · Sports teams · Youth groups.

**Right column**

- Card image on top, stats in a **vertical stack or 3-cell grid** below (not inline with icons splitting attention).
- Card image fix:
  - Use explicit `width` / `height` from the PNG dimensions, or `aspect-[3/4]` wrapper with `object-contain`.
  - Add `sizes="(max-width: 768px) 200px, 280px"` for Next/Image.
  - Wrapper: `relative aspect-[3/4] w-full max-w-[240px] mx-auto md:mx-0`.
  - Drop `fill` if fixed dimensions are known — often simpler and less buggy.

**Icons:** Keep Lucide icons but pair them only in the stat grid, not as a separate horizontal toolbar.

---

### 4.4 `Details.tsx` — Deck showcase + win condition

**Problems today**

- Placeholder empty grid; card assets defined but not rendered.
- "How to Win" mixes win rules with materials list.
- Commented deck table not surfaced.
- Typos: "thirve", "Onmivore", "Carivore".

**Recommended split**

Treat this as two subsections in one band:

**A. How to win** (short)

- 2–3 bullet points max from existing copy (edited).
- No paragraph longer than 2 lines.

**B. What's in the deck**

```txt
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Producer   │  │  Omnivore   │  │  Carnivore  │
│  [image]    │  │  [image]    │  │  [image]    │
│  1-line role│  │  1-line role│  │  1-line role│
└─────────────┘  └─────────────┘  └─────────────┘

Deck composition (52 cards)
┌────────────────────┬───────┐
│ Producer           │  18   │
│ 1° Herbivore       │  12   │
│ ...                │  ...  │
└────────────────────┴───────┘
```

**Card grid**

- `grid sm:grid-cols-3 gap-6`
- Each card: image + role name + one sentence (e.g. "Makes energy from sunlight — bottom of the chain").
- Use consistent card frame: rounded border, subtle shadow, same aspect ratio.

**Deck table**

- Simple HTML table or definition list; right-aligned counts.
- Footnote: "Plus Disease, Human, Truck Driver — special cards" so the table stays clean.

**Visual note:** Show three *representative* cards (Producer, Omnivore, Carnivore) as hero examples; the table carries full composition. This matches Catan-style "component gallery + spec sheet."

---

### 4.5 `CTA.tsx` — Single conversion moment

**Problems today**

- Links to `/order` which is a stub (`hi`).
- `px-30` is non-standard Tailwind (likely meant `px-6` or section padding).
- Section is left-aligned without container centering — feels unfinished vs. CAH/Catan full-width bands.

**Recommended design**

```txt
┌─────────────────────────────────────────────────────────┐
│  gold/amber gradient band, centered content             │
│                                                         │
│     Ready to bring Food Chain Tag to your class?        │
│     One deck. 15+ players. Outdoor or gym.              │
│                                                         │
│              [ Order on Amazon → ]                      │
│                                                         │
│     Also available: lesson ideas on our Education page  │
└─────────────────────────────────────────────────────────┘
```

**Implementation**

- `href` → Amazon product URL (open in new tab: `target="_blank" rel="noopener noreferrer"`).
- Remove dependency on `/order` until that page is real, or make `/order` a redirect to Amazon.
- Center content: `max-w-2xl mx-auto text-center py-16 px-6`.
- Button: high contrast on gold (`bg-zinc-900 text-white` or brand green).

**Placement:** Only one strong CTA on the page. Header "Order" nav can point to the same Amazon URL or scroll to `#order`.

---

## 5. Information Architecture (Header alignment)

Current nav: Home · Education · Order · Review · About

| Nav item | Landing page relationship |
|----------|---------------------------|
| Home | This page |
| Education | Deep lesson plans — link from QuickInfo footer |
| Order | Same Amazon URL as CTA |
| Review | Future social proof; consider quoting on landing page later |
| About | Creator story; keep off landing page main flow |

Landing page should **not** try to replace Education or About — it should **tease** and link.

---

## 6. Code Cleanup Checklist

### Structure

- [ ] Reorder sections in `page.tsx` per Section 2.
- [ ] Add section IDs: `how-it-works`, `about`, `deck`, `order`.
- [ ] Extract shared `Section` wrapper (title, subtitle, container classes) to DRY layout.
- [ ] Rename `QuickInfo` → `HowItWorks` (file + export) when implementing — name should match user mental model.

### HeroSection

- [ ] Reduce to ~40vh; remove `h-screen`.
- [ ] Remove or simplify Framer scroll transforms; prefer CSS-only or static.
- [ ] Add primary + secondary CTA buttons.
- [ ] Consider server component.

### AboutGame

- [ ] Two-column grid: text left, image + stats right.
- [ ] Fix card image sizing (`aspect-ratio` + `object-contain` or explicit dimensions).
- [ ] Left-align body copy; fix typos.
- [ ] Unify border/color tokens (`zinc` vs `stone`).

### Details

- [ ] Render `cardItems` in 3-column grid with `next/image`.
- [ ] Implement deck composition table from commented data.
- [ ] Split win condition vs. deck content visually (subheadings).
- [ ] Fix typos in copy.

### QuickInfo / HowItWorks

- [ ] Reframe as 3-step "How it works".
- [ ] Move glossary to collapsible or secondary callout.
- [ ] Link to `/education` for extended content.

### CTA

- [ ] Point to Amazon URL.
- [ ] Fix padding classes; center layout.
- [ ] Add `id="order"` for in-page anchor from header/hero.

### Global polish

- [ ] Alternate section backgrounds (avoid adjacent identical grays).
- [ ] Ensure responsive spacing is consistent (`py-16` not `py-8` for major sections).
- [ ] Add `alt` text that describes card roles, not just file names.
- [ ] Run Lighthouse — hero image and card PNGs should use appropriate `sizes` and compression.

---

## 7. Wireframe (Full Page Flow)

```txt
┌ Header ─────────────────────────────────────────────────┐
│                                    Home  Education  Order│
├─────────────────────────────────────────────────────────┤
│ HERO (compact green, logo, title, 2 CTAs)               │
├─────────────────────────────────────────────────────────┤
│ HOW IT WORKS (#how-it-works)          [white]           │
│   Step 1 · Step 2 · Step 3                              │
│   [Science background ▾ optional]                       │
├─────────────────────────────────────────────────────────┤
│ WHAT IS FOOD CHAIN TAG?               [zinc-50]         │
│   Text left │ Card + stats right                        │
├─────────────────────────────────────────────────────────┤
│ THE DECK & HOW TO WIN                 [white]           │
│   Win bullets · 3 card illustrations · table          │
├─────────────────────────────────────────────────────────┤
│ CTA — ORDER (#order)                  [gold gradient]   │
├─────────────────────────────────────────────────────────┤
│ Footer (future: links, copyright)                       │
└─────────────────────────────────────────────────────────┘
```

---

## 8. What to defer (avoid scope creep)

- Custom `/order` page — use Amazon until you need bundles or school POs.
- Heavy animation, video backgrounds, or 3D card flips.
- Full curriculum on the landing page — belongs on `/education`.
- Reviews section — add when you have real quotes.

---

## 9. Success Metrics (how you'll know the UX works)

- **Scroll depth:** Most educators reach "How it works" without bouncing (compact hero helps).
- **CTA clicks:** Amazon outbound clicks from hero + bottom CTA.
- **Time on page:** 1–3 minutes is healthy for an informational product page.
- **Qualitative:** A teacher can explain the game to a colleague after one skim.

---

## 10. Suggested `page.tsx` target structure

```tsx
<main>
  <HeroSection />
  <HowItWorks />      {/* was QuickInfo — moved up */}
  <AboutGame />
  <Details />
  <CTA />
</main>
```

This order teaches first, sells second — aligned with educator intent and with how strong tabletop product sites (Catan, CAH) separate "learn the game" from "get the box."
