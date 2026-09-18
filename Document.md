# MAAC — Museo

Landing page for a museum. Single page, App Router, fully typed, structure-only (no real content yet — owner fills it in later).

## Stack

- **Next.js 15.5** (App Router) + **TypeScript** + **pnpm**
- **Tailwind CSS** — utility-first styling
- **Sass** (`.scss`) — animation-specific styles
- **CSS Globals** — design tokens (colors, spacing, typography) as CSS custom properties in `src/styles/tokens.css`
- **Motion** (formerly Framer Motion) — component-level animations
- **GSAP + ScrollTrigger** — scroll-driven animations (hero, parallax, reveals)
- **Screaming Architecture** — folders scream the domain, not the tech layer
- **Container / Presentational** — strict split inside every module

## Sections

1. `museum-hero` — Hero + identidad. GSAP-driven (parallax, split-text intro).
2. `museum-history` — Historia del museo. Scroll reveals (GSAP / Motion hybrid).
3. `museum-contact` — Contacto + Footer. Form scaffold (no backend wired yet).

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css               # imports tokens.css + animations.scss
│
├── modules/                      # SCREAMING ARCHITECTURE — one folder per domain
│   ├── museum-hero/
│   │   ├── components/
│   │   │   ├── MuseumHero.tsx        # CONTAINER — owns data, state, orchestration
│   │   │   ├── HeroBackdrop.tsx      # PRESENTATIONAL
│   │   │   ├── HeroTitle.tsx         # PRESENTATIONAL
│   │   │   ├── HeroScrollHint.tsx    # PRESENTATIONAL
│   │   │   └── index.ts
│   │   ├── animations/
│   │   │   └── hero.gsap.ts          # GSAP timeline / ScrollTrigger
│   │   ├── hooks/
│   │   │   └── useHeroAnimation.ts
│   │   ├── types.ts
│   │   └── index.ts                  # public API (MuseumHero)
│   │
│   ├── museum-history/
│   │   ├── components/
│   │   │   ├── MuseumHistory.tsx     # CONTAINER
│   │   │   ├── HistoryBlock.tsx      # PRESENTATIONAL
│   │   │   ├── HistoryTimeline.tsx   # PRESENTATIONAL
│   │   │   └── index.ts
│   │   ├── animations/
│   │   │   └── history.gsap.ts
│   │   ├── hooks/
│   │   │   └── useHistoryReveal.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   └── museum-contact/
│       ├── components/
│       │   ├── MuseumContact.tsx     # CONTAINER
│       │   ├── ContactForm.tsx       # PRESENTATIONAL
│       │   ├── ContactInfo.tsx       # PRESENTATIONAL
│       │   ├── MuseumFooter.tsx      # PRESENTATIONAL
│       │   └── index.ts
│       ├── hooks/
│       │   └── useContactForm.ts
│       ├── types.ts
│       └── index.ts
│
├── shared/                       # Cross-module primitives
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Typography.tsx
│   ├── motion/
│   │   ├── variants.ts             # Motion variants (fadeUp, stagger, etc.)
│   │   └── presets.ts
│   └── gsap/
│       ├── scroll.ts               # ScrollTrigger helpers
│       └── register.ts             # plugin registration
│
├── styles/
│   ├── tokens.css                 # Global design tokens (CSS custom properties)
│   └── animations.scss            # Animation utilities (Sass)
│
├── lib/
│   └── utils.ts                   # cn() and small helpers
│
└── types/
    └── global.d.ts
```

## Architecture Rules

### Screaming Architecture
- Top-level folders are **domains** (`museum-hero`), not technical roles (`components/`, `hooks/`).
- Each module owns its components, hooks, animations, types.
- Public surface is the module's `index.ts`. Everything else is private to the module.

### Container / Presentational
- **Container** (e.g. `MuseumHero.tsx`): owns data, state, side effects, animation orchestration. Knows about the rest of the app.
- **Presentational** (e.g. `HeroTitle.tsx`): pure UI, receives props, emits events. Zero data fetching, zero state beyond UI-only (hover, focus).
- Co-locate in `components/`, but the file naming + responsibility makes the split explicit.

### Styling Rules
- **Tokens** live in `src/styles/tokens.css` as CSS custom properties (`--color-bg`, `--space-4`, etc.).
- **Layout / utilities** in Tailwind classes on the JSX.
- **Animations** in Sass (`src/styles/animations.scss`) using `@use` + mixins for keyframes and easing curves.
- Never hardcode hex values or magic numbers in components — reference tokens.

### Animation Rules
- **GSAP** for: scroll-bound sequences (parallax, pinned sections, scrubbed timelines), hero intro with split-text.
- **Motion** for: in-view reveals, hover, mount/unmount transitions, micro-interactions.
- All GSAP animations live in `modules/<module>/animations/<module>.gsap.ts` and are wired via a hook in `hooks/`.
- Plugins (`ScrollTrigger`) are registered once in `src/shared/gsap/register.ts` and imported where needed (client components only).

### App Router Rules
- Default to **Server Components**.
- Anything using GSAP, Motion, `useState`, `useEffect`, refs, or browser APIs → `"use client"`.
- Containers may be client; presentational components must stay server-safe unless they need interactivity themselves.

## Commands

```bash
pnpm dev        # local dev server
pnpm build      # production build
pnpm start      # production server
pnpm typecheck  # tsc --noEmit
```

> Lint is not wired yet. `next lint` is deprecated in Next 15 — owner should add ESLint 9 flat config + eslint-config-next manually when ready.

## Conventions

- **Naming**: PascalCase for components, camelCase for hooks/utils, kebab-case for filenames inside `animations/`, `hooks/`, `lib/`.
- **Imports**: `@/modules/museum-hero` for the public API of a module; deep imports only inside the module itself.
- **No barrel abuse**: each module's `index.ts` exports only the public container + types.
- **No comments unless asked.**
- **No hardcoded content**: owner fills in copy, images, and data. Placeholders for structural slots only.

## Status

- [x] Architecture decided
- [x] Project bootstrapped (Next.js 15.5.25 + React 19 + Tailwind v4 + pnpm)
- [x] Tokens + base styles (`src/styles/tokens.css`, `src/styles/animations.scss`)
- [x] Animation libs wired (`src/shared/gsap/`, `src/shared/motion/`)
- [x] Museum-hero module
- [x] Museum-history module
- [x] Museum-contact module
- [x] Shared UI primitives (`src/shared/ui/`)
- [x] App layout + page wired (`src/app/layout.tsx`, `src/app/page.tsx`)
- [x] Build green (`pnpm build` ✓, `pnpm typecheck` ✓)