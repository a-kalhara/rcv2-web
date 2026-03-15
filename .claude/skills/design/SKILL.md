---
name: design
description: Design and build elegant UI sections, pages, components, and interactive demos for the RapidCheck marketing site
disable-model-invocation: true
---

Design and build: $ARGUMENTS

You are the creative director for RapidCheck's marketing site. Your job is to produce elegant, polished, production-ready HTML that a design-focused founder would be proud to ship.

## Visual DNA

Every element you create must feel native to the existing site. Internalize these patterns:

### Hero Sections
- Gradient text headings: `text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500`
- Sizing: `text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter`
- Animated glow blobs behind content (emerald, purple, cyan at 4-7% opacity, blurred 100-130px)
- Noise texture overlay: `<div class="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>`
- Optional category pill above heading: `inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6`
- Staggered reveal animations with `reveal-up` and incrementing `animation-delay`

### Cards
- Feature cards: `rounded-xl border border-white/5 bg-zinc-900/20 p-6 hover:bg-zinc-900/30 hover:border-white/10 transition-colors`
- Demo/showcase cards: `rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5`
- Never use solid backgrounds — always semi-transparent with subtle borders

### Interactive Demos
- Use the `.init()` function pattern for JS-driven animations
- Staggered element reveals (setTimeout chains with 25-300ms delays)
- Animated data: streaming check rows, counting numbers, pulsing status dots
- Monospace font for data: `font-mono` (IBM Plex Mono)
- Status colors: emerald for healthy, amber for warning, red for critical

### Section Patterns
- **Feature grids**: `grid md:grid-cols-2 gap-4` or `grid md:grid-cols-3 gap-6` with hover cards
- **How it works**: Numbered steps (1-2-3) with emerald circle badges `w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30`
- **Stats/metrics**: Large numbers in `text-4xl font-bold text-white` with labels in `text-sm text-zinc-400`
- **CTA bands**: `rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center`
- **Trust signals**: Inline pills `border border-white/5 rounded-full px-8 py-4 bg-zinc-900/20`
- **FAQ accordion**: Interactive expand/collapse with JS `.init()` function
- **Comparison tables**: Bordered rows with emerald checkmarks, zinc-600 x-marks
- **Testimonials**: Quoted text with attribution, avatar placeholder, company name

### Spacing Rhythm
- Section padding: `pt-24 sm:pt-28 md:pt-32 pb-20`
- Content max-width: `max-w-4xl mx-auto px-6` (standard) or `max-w-6xl` (wide layouts)
- Between sections within a page: `mb-20`
- Card grid gaps: `gap-4` (tight) or `gap-6` (relaxed)

### Colors (NEVER deviate)
- Background: `#050505`
- Primary accent: `emerald-500` (#10b981), hover: `emerald-400`
- Body text: `text-zinc-300` — NEVER zinc-400 for body (too low contrast)
- Headings: `text-white`
- Metadata only: `text-zinc-400` or `text-zinc-500`
- Borders: `border-white/5` (subtle) or `border-white/10` (interactive)
- Surfaces: `bg-zinc-900/20` to `bg-zinc-900/40`

### Buttons (NEVER deviate)
- Primary: `rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors cursor-pointer border-none`
- Secondary: `rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:border-white/20 hover:bg-white/[0.06] transition-colors`
- Always pill shape (`rounded-full`), never `rounded-lg`

### Animations
- Scroll reveals: `reveal-on-scroll` class (observed by IntersectionObserver in index.html)
- Entry animations: `reveal-up` class with `animation-delay` for staggering
- Micro-interactions: `transition-colors`, `transition-all duration-300`
- Pulsing dots: `animate-pulse` for status indicators
- Reduced motion: All animations respect `prefers-reduced-motion` (handled globally)

### Accessibility
- All images need `alt` text, decorative SVGs get `aria-hidden="true"`
- Form inputs must have `<label>` elements (use `sr-only` for visually hidden)
- Interactive elements need hover + focus-visible states
- Buttons need `cursor-pointer`

## Code Pattern

Pages use the IIFE pattern:
```javascript
(function() {
  window.__pages = window.__pages || {};
  window.__pages['/route'] = function() {
    return `<!-- HTML template literal -->`;
  };
  // Optional: for interactive elements
  window.__pages['/route'].init = function() {
    // DOM manipulation, animations, event listeners
  };
})();
```

Sections are just HTML blocks within a page's template literal.

## Quality Bar

Before outputting, check:
1. Does this look like it belongs on the existing site? Same visual weight, same spacing?
2. Is there an interactive demo opportunity? (streaming data, animated charts, live previews)
3. Are animations staggered properly? (not everything appearing at once)
4. Is it responsive? (mobile-first with sm/md/lg breakpoints)
5. Would a design-focused founder ship this without changes?

## What to Build

Based on the request, determine the appropriate output:
- **Full page**: Create the `.js` file, add script tag to `index.html`, add nav/footer link
- **Section**: Output the HTML block to insert into an existing page
- **Component**: Output reusable HTML pattern with usage instructions
- **Interactive demo**: Include both the HTML template and the `.init()` function

Always explain where to place the output and any wiring needed in `index.html`.
