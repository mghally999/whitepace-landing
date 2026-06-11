# whitepace — Landing Page

A production-quality, fully responsive recreation of the **whitepace** SaaS landing page (Takamul frontend assessment), built with the Next.js App Router. The implementation matches the supplied V1 design (dark-hero theme) and adds a real dark mode plus the bonus interaction/animation features.

## Tech stack

- **Next.js 15** (App Router) — Server Components by default
- **TypeScript** (strict)
- **Tailwind CSS** (the only styling system)
- **lucide-react** — tree-shakeable generic icons (arrow, chevron, check, menu, quote, globe…)
- **next-themes** — class-based dark mode
- `next/font` (Inter, self-hosted) and `next/image` throughout

No large UI component libraries are used.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (next/core-web-vitals + TS) |

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into Vercel — the framework preset (**Next.js**) is auto-detected; no env vars are required.
3. Build command `next build`, output handled automatically. Deploy.

> Update `SITE_URL` in [app/layout.tsx](app/layout.tsx) to your production domain so Open Graph / `metadataBase` resolve correctly.

## Component structure

```
app/
├── layout.tsx        # <html lang>, Inter via next/font, Metadata API, ThemeProvider, .js gate
├── page.tsx          # composes the 13 sections in order
└── globals.css       # tokens as CSS vars, base styles, reduced-motion + reveal rules

components/
├── layout/
│   ├── Navbar.tsx        # sticky, dropdowns, active-section highlighting, mobile trigger
│   ├── MobileMenu.tsx    # animated, focus-trapped, Esc-to-close mobile nav
│   ├── Footer.tsx        # 5 columns + bottom bar (language, legal, socials)
│   └── ScrollProgress.tsx# top scroll-progress bar
├── sections/
│   ├── Hero.tsx
│   ├── FeatureRow.tsx    # ONE reusable component → Project Management / Work together /
│   │                     #   Use as Extension / Customise (driven by props)
│   ├── Pricing.tsx
│   ├── CtaBanner.tsx     # reusable → "everywhere you are" + "Try whitepace today"
│   ├── DataSecurity.tsx  # "100% your data" + node diagram
│   ├── Sponsors.tsx
│   ├── Integrations.tsx  # "Favorite Apps" orbit
│   └── Testimonials.tsx  # accessible carousel
├── ui/
│   ├── Button.tsx        # variants: primary | login | outline | outline-light
│   ├── Container.tsx     # max-w-1480 + responsive padding
│   ├── Section.tsx       # semantic <section>, theme bg, vertical rhythm, wave bg
│   ├── SectionHeading.tsx# H1/H2 + <Highlight> word + optional subtitle
│   ├── Highlight.tsx     # yellow brush-stroke underline
│   ├── Logo.tsx          # whitepace mark + wordmark (tone prop)
│   ├── Placeholder.tsx   # next/image dashboard placeholder with skeleton
│   ├── IntegrationOrbit.tsx # animated orbit (rotating dots / app bubbles)
│   ├── NodeDiagram.tsx   # data-security node diagram
│   ├── Reveal.tsx        # scroll-reveal wrapper (IntersectionObserver)
│   ├── ThemeToggle.tsx   # dark-mode toggle
│   └── icons.tsx         # inline brand SVGs (Apple, Microsoft, Slack, Google, Dropbox…)
├── theme/ThemeProvider.tsx
└── lib/
    ├── content.ts        # all copy + section config (single source of truth)
    ├── useInView.ts       # IntersectionObserver hook
    └── cn.ts              # className joiner
```

## Animation approach

Animations are **CSS keyframes triggered by a tiny `IntersectionObserver` hook** — no animation library, which keeps the bundle small and Lighthouse-friendly.

- **Section reveal** — `Reveal` adds `.is-visible` when an element scrolls into view (`opacity`/`translateY`). It's a **progressive enhancement**: the hidden state is scoped to `html.js`, so without JS (or before the observer fires) content is fully visible — important for SEO/no-JS robustness.
- **Hero** — load-time fade/rise (`animate-hero-in`, `animate-fade-up`).
- **Orbit graphics** — dots and app icons ride on rotating layers (`animate-orbit`) so they continuously orbit the center; icons counter-rotate to stay upright. Node-diagram tiles float.
- **Buttons / cards** — hover lift + color transitions (~150ms).
- **Reduced motion** — a global `@media (prefers-reduced-motion: reduce)` rule disables animations and forces revealed content visible.

## Assumptions & trade-offs

- **V1 (dark-hero) built**, per the brief — it shows more range than the all-light V2. A real **inverted dark mode** is implemented as a bonus (not V2).
- **Placeholder dashboards**: the supplied design (and the Figma "Breakpoint V1" board) use light-blue placeholder rectangles for product screenshots; these are reproduced with `next/image` (generated SVG data-URI + loading skeleton) rather than inventing mockups.
- **Copy standardized** from the template's naming bugs: every product reference is "whitepace"/"Whitepace", every primary CTA is "Try Whitepace free"; the design's stray "Taskey/TasKey", "Evernote" and the "Whitepate" typo are corrected. The testimonial heading uses the canonical **"What Our Clients Says"** (some frames showed "See what our trusted users Say").
- **Icons**: brand glyphs are inline SVG (simple-icons paths); generic UI icons come from `lucide-react`.
- **Design tokens** were reconciled against the actual Figma file via the Figma MCP (Inter; H1 72 / H2 64–72px with −0.02em tracking; section padding 140px; 100px feature-column gap; palette `#043873 #4F9CF9 #FFE492 #A7CEFC #212529` + `#C4DEFD` placeholder).
- The **Statistics / How-It-Works / Resources / FAQ** sections from the generic task checklist are **not present in this design**, so they were omitted in favor of matching the design 1:1 (the objective prioritizes design fidelity).

See [TECHNICAL.md](TECHNICAL.md) for the architecture/accessibility/performance summary.
