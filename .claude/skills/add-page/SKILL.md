---
name: add-page
description: Scaffold a new marketing page for the RapidCheck website
disable-model-invocation: true
---

Create a new marketing page: $ARGUMENTS

1. Create `pages/{name}.js` following the IIFE pattern used by existing pages
2. Register the page: `window.__pages['/route'] = pageFn`
3. The page function should return an HTML template literal with Tailwind classes
4. Add `<script src="pages/{name}.js">` to `index.html`
5. Add navigation link in nav and/or footer in `index.html`
6. Use `reveal-on-scroll` class for scroll-triggered animations
7. Follow the color scheme: emerald (#10b981) accent, dark (#050505) background
8. Test by opening `index.html` in a browser and navigating to the new route
