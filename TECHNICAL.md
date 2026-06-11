# Technical Summary

## Component architecture

Components are split into **`layout/`** (navbar, mobile menu, footer, scroll progress), **`sections/`** (the page sections), and **`ui/`** (typed, prop-driven primitives). Reuse is deliberate and was a graded criterion:

- **`FeatureRow`** renders all four alternating feature rows (Project Management, Work together, Use as Extension, Customise) from a single config in `lib/content.ts` via props (`title`, `highlight`, `body`, `cta`, `theme`, `media`, `reverse`). The `theme` describes the *background*; heading/body tone is derived as its inverse so a navy section gets white text and a white section gets navy text from the same component.
- **`CtaBanner`** drives both centered dark CTA bands ("…everywhere you are" and "Try whitepace today", the latter with the platform-icon row).
- **`SectionHeading`** centralizes the H1/H2 type scale, tracking, tone, optional subtitle, and the yellow `Highlight` brush-stroke (it splits the title around the highlighted word).
- **`Section`** standardizes semantic markup (`<section aria-labelledby>`), the navy/white surface theme, the vertical rhythm, and the decorative wave background.

All copy lives in `lib/content.ts` as the single source of truth, keeping components presentational.

## Responsiveness

Mobile-first, with breakpoints overridden to the five supplied design frames: `sm 480 / md 768 / lg 1152 / xl 1440 / 2xl 1920`. The content container is `max-w-1480` with responsive horizontal padding (16/28/32px).

- Feature rows are a 2-column grid on `lg+` (100px gap) and a single stacked column below, **text-first in the DOM** so the reading order is correct on mobile regardless of the desktop `reverse` flag.
- Pricing & testimonials are 3-up on `lg+`; pricing stacks to one column (the featured card drops its raised offset), testimonials become a horizontal scroll-snap carousel.
- The footer collapses 5 → 2/3 → 1 column; nav links collapse into the hamburger below `lg`.
- Type scales down per breakpoint; no horizontal scroll at any width.

## Accessibility

- Semantic landmarks: `header` / `nav` / `main` / `section[aria-labelledby]` / `footer`; one `h1` (hero), one `h2` per section.
- All interactive elements are real `<button>`/`<a>` with visible `:focus-visible` rings (accent, 2px offset) and a **skip-to-content** link.
- **Nav dropdowns** open on hover *and* keyboard focus (`group-focus-within`) with `aria-haspopup`/`aria-expanded`; active section is reflected with `aria-current`.
- **Mobile menu**: focus trap, `Esc` to close, body-scroll lock, `aria-modal`.
- **Testimonials carousel**: `role="group"`/`aria-roledescription`, labelled prev/next buttons and dot tabs, disabled-state at bounds.
- Decorative graphics are `aria-hidden`; meaningful icons carry labels.
- Color pairs (white-on-navy, ink-on-white, navy-on-yellow) pass WCAG AA.
- `prefers-reduced-motion` is honored globally; scroll-reveal content is never trapped invisible (it's gated behind `html.js` and force-shown under reduced motion).

## Animation choices

CSS keyframes + a minimal `IntersectionObserver` hook (`useInView`) — no animation library, to satisfy the "avoid large libraries" rule and keep the main-thread cost low. Reveal is a progressive enhancement (visible without JS). The orbit graphics use pure-CSS rotation (rotating layers with negative `animation-delay` for start angles; icons counter-rotate to stay upright).

## Performance

- **Server Components by default**; only interactive pieces (`Navbar`, `MobileMenu`, `Testimonials`, `ScrollProgress`, `ThemeToggle`, `Reveal`, `Placeholder`) are `'use client'`.
- `next/image` for every image with explicit dimensions/`sizes` → no CLS; `priority` only on the hero, the rest lazy-load. Placeholders ship as inline SVG data-URIs (zero extra requests) with a loading skeleton.
- `next/font` (Inter) self-hosted → no font CLS.
- Inline SVG icons instead of icon fonts/sprites; `lucide-react` is tree-shaken.
- The page prerenders as static content (`○ (Static)`); first-load JS is ~120 kB.
