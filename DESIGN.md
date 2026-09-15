---
name: Frogtoberfest 2026
description: A month-long AI-agent build challenge for Nepal's open-source community, run by Leapfrog.
colors:
  paper: "#EFE8DA"
  paper-dim: "#E4DBC7"
  surface: "#6A5257"
  surface-2: "#4F3D41"
  cyan: "#2AE8D2"
  go: "#0B6649"
  carbon: "#2B1E1A"
  copper: "#B96A32"
  copper-dim: "#8C5027"
  copper-light: "#D1893F"
  green: "#8EBB81"
  green-dim: "#3E6136"
  green-light: "#B3DDA6"
  leaf: "#67885A"
  leaf-dim: "#465C3D"
  leaf-light: "#9EB894"
  copper-pale: "#DAA076"
  on-dark: "#F3EEE1"
  on-dark-dim: "#A9BDB8"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(52px, 7vw, 124px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 68px)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
  label-xs:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.1em"
  label-2xs:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.16em"
  ui-sm:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
  ui-sm-alt:
    fontFamily: "Inter, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
  ui-md:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
  ui-md-alt:
    fontFamily: "Inter, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
  ui-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  ui-lg-alt:
    fontFamily: "Oswald, sans-serif"
    fontSize: "17px"
    fontWeight: 500
  body-alt:
    fontFamily: "Inter, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  all: "0px"
spacing:
  unit: "8px"
  margin: "64px"
  margin-compact: "24px"
  content-max: "1792px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.all}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.cyan}"
  button-primary-active:
    backgroundColor: "{colors.go}"
    textColor: "{colors.on-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.carbon}"
    rounded: "{rounded.all}"
    padding: "16px 28px"
---

# Design System: Frogtoberfest 2026

## Overview

**Creative North Star: "Analog Autonomy"**

The site's own art-direction brief states it plainly: Gundam x Ghost in the Shell x Voltron, filtered through brutalist editorial layout. Every surface reads like a field manual or mission terminal for a mech pilot: hairline blueprint grids, HUD-style mono labels, engineering-plate tables, and a single frog-shaped mecha rendered with real illustrative weight rather than flat vector iconography. The tension the name captures — "analog" (paper texture, hand-drafted grid lines, warm printed-matter palette) against "autonomy" (the AI-agent subject matter, cyan status accents, terminal typography) — is the system's organizing idea, not a decoration on top of a generic SaaS template.

Depth comes from borders and hard offsets, never blur. Corners are square everywhere, without exception. Color is disciplined: a warm paper-and-copper base carries almost the entire page, and the one saturated color (cyan) is reserved for AI/system-status meaning, never used decoratively.

**Key Characteristics:**
- Sharp corners only — zero border-radius anywhere in the system, enforced globally
- 2px borders as the primary structural/depth device, replacing box-shadow-based elevation
- A warm, paper-textured neutral base (grain + scanline overlays at 2-5% opacity) instead of a stark white or black canvas
- Cyan is a status/AI-activity signal color, not a general accent — used sparingly and consistently
- Numbered HUD labels (01/02/03) and mono-font engineering tags are load-bearing thematic devices, repeated deliberately across every major section
- One real illustrated hero subject (the frog mech + its human pilot) carries the emotional register the copy doesn't reach for alone

## Colors

The palette is a warm, desaturated "engineering paper" base with two disciplined accent families (copper for mechanical/decorative moments, cyan reserved for status) and a cooler surface tone for navigation and dark sections.

### Primary
- **Signal Cyan** (`#2AE8D2`): The system's one saturated color. Used only for AI-activity/status meaning — the primary CTA, active nav indicators, HUD chips, active timeline nodes. **The One Signal Rule.** Cyan never appears as generic decoration; every instance means "this is active, primary, or AI-related."

### Secondary
- **Field Copper** (`#B96A32` / dim `#8C5027` / light `#D1893F`): Mechanical accent family, sampled from the mech's armor trim. `copper` is decorative/large-scale only (icons, large glyphs); `copper-dim` is the text-safe variant that clears AA contrast on paper; `copper-light` is the background variant for dark text on top.
- **Organic Green** (`#8EBB81` / dim `#3E6136` / light `#B3DDA6`): Sampled from the mech's armor plating, used for supporting numbered labels and secondary status marks where copper would be too warm.
- **Leaf** (`#67885A` / dim `#465C3D` / light `#9EB894`): A third, deliberately distinct green accent — muted/olive rather than the sage-toned Organic Green above. `leaf` (raw) is large-text/icon/border use only (3.28:1 on paper); `leaf-dim` clears AA for small text on paper (6.0:1); `leaf-light` is the on-`surface` variant (3.3:1). Introduced to give brown/cyan/green equal visual weight as the system's three primary colors — see the Recognition badges, where all three sit side by side.
- **Copper Pale** (`#DAA076`): Copper lightened for large-text use on the `surface` color (3.1:1) — the on-dark counterpart to `copper`/`copper-dim`, which are both too low-contrast against `surface` to use directly.

### Neutral
- **Engineering Paper** (`#EFE8DA`): Primary page background — warm, not stark white.
- **Recessed Paper** (`#E4DBC7`): Muted background for panels sitting slightly behind the main paper plane (e.g. hero mission-parameters card header row).
- **Mauve Surface** (`#6A5257` / deep `#4F3D41`): Navigation bar and dark-section backgrounds. Darkened ~8% from its source scanline asset specifically to clear AA text contrast — a deliberate accessibility adjustment, not an arbitrary brand color.
- **Carbon** (`#2B1E1A`): All typography and all borders. The system's ink color.
- **On-Dark** (`#F3EEE1`): Body text on the mauve/carbon surfaces.
- **On-Dark-Dim** (`#A9BDB8`): Borders and dividers on dark surfaces **only** — not text (documented in the token itself; if you need dim text on a dark surface, verify contrast rather than reaching for this token by habit — it was authored for structural lines, not reading copy).

### Named Rules
**The No-Gray Rule.** There is no neutral gray anywhere in the system. Every "muted" surface is a warm paper or mauve tone; every "dim" text color is a desaturated step of an actual palette hue (copper-dim, green-dim), never a generic gray.

## Typography

**Display/Headline Font:** Oswald (condensed sans, stands in for a DIN Condensed display face)
**Body Font:** Inter
**Label/Mono Font:** IBM Plex Mono — reserved for UI chrome, HUD tags, and data labels; never body copy

**Character:** Oswald's condensed, heavy-weight uppercase carries the poster-headline register; Inter stays quiet and legible for actual reading; IBM Plex Mono signals "this is a system readout" every time it appears — the three together do the analog/autonomy tension in type alone.

### Hierarchy
- **Display** (700, `clamp(52px, 7vw, 124px)`, line-height 0.92): Section-closing statements (Demo Day headline) and the hero wordmark crop.
- **Headline** (700, `clamp(36px, 4.2vw, 68px)`, line-height 0.96): Every section title (Beyond Contributing, Timeline, Guidelines, Registration, Resources).
- **Body Large / Body Alt** (400, 22px / 19px, line-height 1.5 / 1.65): Section-opening lede paragraphs; 19px is the hero and registration variant, 22px elsewhere.
- **Body** (400, 18px, line-height 1.6): Supporting copy, card descriptions.
- **Label / Label XS / Label 2XS** (400, 12px / 11px / 10px, uppercase, tracked 0.1–0.16em): Eyebrow tags, HUD chips, table headers, nav links, serial numbers — always mono, always uppercase. 12px is the default; 11px and 10px are the same role at smaller HUD scales (nav-code, hero annotation, meta-card labels).

### The UI Micro-Scale
Below the named roles, dense UI chrome (buttons, table cells, timeline entries, card headings) draws from a reused secondary scale rather than the primary hierarchy: **13px / 13.5px / 14px / 14.5px / 16px / 17px**, split between mono (buttons, timeline dates) and Inter/Oswald (card copy, `<dd>` values) depending on context. Each step is reused 2+ times across the system — this is a real, intentional fine-grained scale that grew from matching a lot of small distinct components, not accidental drift. **Reuse the nearest existing step before introducing a new size.**

A small number of true one-offs remain undocumented on purpose (15px, 15.5px, 28px — each used exactly once) rather than promoted into the scale; treat a detector flag on one of those three as a real signal to either reuse a neighboring step or fold it into the scale above if you're about to reuse it too.

### Named Rules
**The Mono-Means-System Rule.** IBM Plex Mono is reserved for UI chrome and data — nav links, tags, table cells, serial numbers. It never appears as a stylistic flourish on body prose; if a label is in mono, it's meant to read as machine-generated or instrument-panel text.

## Layout

Content is capped at 1792px (`--content-max`, derived as 1920 − 64×2) and centered, with a 64px side margin on desktop that compresses to 24px under 900px. Sections use a shared 96px vertical `screen-pad` rhythm (56px under 900px). The base unit is 8px.

The hero and several feature sections use CSS Grid two-column layouts (a fixed-width copy column against a flexible art column) that collapse to a single stacked column under 1100px. Below 680px, the nav's secondary links move into a slide-down panel behind a hamburger toggle rather than disappearing — every nav destination stays reachable at every width.

## Elevation & Depth

**The system uses borders and hard offsets instead of blur-based shadows — this is a confirmed brief requirement** ("2px borders instead of shadows," stated directly in the stylesheet's own header), not a default reached for by habit. Every card, table, panel, and section boundary is a flat 2px `carbon` border with no blur.

The one exception is intentional and load-bearing: the primary CTA button uses a **hard, zero-blur offset shadow** (`0 6px 0 0 var(--carbon)`) that lifts on hover and compresses flush on click/active state — a literal "key-press" physics metaphor for a mission-control button. This is the system's single elevation device, reserved for the one most-important action per screen.

### Shadow Vocabulary
- **Key-press primary** (`box-shadow: 0 6px 0 0 var(--carbon), 0 12px 10px rgba(43,30,26,.25)` at rest, compressing to `0 0 0 0` + a cyan glow on active): The primary CTA only.
- **Drop shade (decorative, hero wordmark)**: A soft, low-opacity offset shadow behind the hero logo crop — the one place a conventional soft shadow appears, used for a physical "sticker" read on the wordmark rather than for UI elevation.

### Named Rules
**The One Shadow Rule.** Blur-based shadows do not exist in this system outside the hero wordmark's sticker treatment. If something needs to feel elevated, give it a border and, if it's the primary action, the key-press hard-offset treatment — don't reach for a soft box-shadow.

## Shapes

**The No-Curves Rule.** `border-radius: 0` is enforced globally with `!important` on a universal selector — there are no exceptions anywhere in the system, including buttons, chips, cards, and images. Every corner is square. Borders are consistently 2px solid `carbon` (or `on-dark-dim` on dark surfaces). Decorative corner brackets (small L-shaped marks at card corners) appear on a few components as a HUD-panel signature detail, reinforcing the blueprint/schematic register rather than softening it.

## Components

### Buttons
- **Shape:** Square corners, 2px `carbon` border, no exceptions.
- **Primary:** Cyan background, carbon text, mono uppercase label with a small square "chip" glyph before the text. Padding 16px 28px. Key-press physics on hover/active (see Elevation).
- **Hover / Focus:** Primary inverts to carbon background / cyan text and lifts 2px before pressing down on click.
- **Outline/Ghost:** Transparent background, carbon border and text; inverts to solid carbon on hover.

### Cards / Panel Tables
- **Corner Style:** Square, always.
- **Background:** `paper` or `paper-dim`, with a darker `surface` header bar for labeled panels (e.g. "Mission Parameters").
- **Border:** 2px `carbon`, shared/collapsed between adjacent grid cells so a multi-cell table reads as one engineering plate rather than separate boxes.
- **Internal Padding:** Roughly 18-28px depending on density; header bars use tighter 11px vertical padding.

### Navigation
- **Style:** Mauve surface bar, sticky to viewport top, with subtle scanline SVG art at both edges. Mono uppercase links with a 2px underline that appears in cyan on hover.
- **Default/Hover/Active:** Links are transparent-underline at rest, cyan-underline + brightened text on hover. The primary CTA duplicates into the nav (collapsed/hidden) and slides in only once the page's own hero CTA scrolls out of view, so exactly one "Enter the Mission" action is ever reachable on screen at once.
- **Mobile:** Below 680px, secondary links (Participation/Timeline/FAQs/Guidelines) move into a full-width slide-down panel behind a hamburger toggle that morphs into an X when open. Each link gets a 44px-minimum touch target.

### HUD Labels (signature component)
Small mono-uppercase eyebrow tags (e.g. "Screen 03 · Mission Log") paired with a 8px cyan or copper square precede nearly every section heading. Numbered index labels (01/02/03) ride beside repeated card headings throughout — Beyond Contributing's reasons, Guidelines' criteria, Registration's steps. This numbering is a deliberate, sitewide HUD-panel convention (matching the "field manual" north star), not incidental scaffolding — it's consistent across every section that uses it and echoes the blueprint-grid backgrounds used the same way.

## Do's and Don'ts

### Do:
- **Do** keep border-radius at 0 everywhere, including on any new component.
- **Do** use 2px `carbon` borders as the default depth device; reach for the key-press hard-offset shadow only on the single primary action per screen.
- **Do** reserve cyan for AI-activity/status/primary-action meaning; use copper or green for decorative or secondary accents instead.
- **Do** use IBM Plex Mono only for UI chrome, labels, and data — never for body prose.
- **Do** keep the numbered-label and blueprint-grid HUD motifs consistent if extending them to a new section; they read as a system precisely because they repeat identically.
- **Do** keep every nav destination reachable at every viewport width — collapse into a toggleable panel, never `display:none` into nothing.

### Don't:
- **Don't** introduce a soft, blurred box-shadow anywhere outside the hero wordmark's sticker treatment.
- **Don't** use gray for "muted" text or surfaces — desaturate from an existing palette hue (copper-dim, green-dim, on-dark-dim) instead.
- **Don't** use `on-dark-dim` as body text color on dark surfaces without checking contrast — it's documented as a border/divider token, not a text token, even though it happens to clear AAA where it's currently used for the Demo Day paragraph.
- **Don't** add rounded corners, drop shadows, or gradient fills to any component; they contradict the brief's stated brutalist-HUD direction.
