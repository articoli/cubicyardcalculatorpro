# Cubic Yard Calculator Pro

Production-oriented Next.js static-export website for **https://cubicyardcalculatorpro.com/**.

## Launch scope

- Homepage with interactive volume calculator, semantic content, conversions, material navigation, reference tables, worked examples and FAQ.
- Conversion calculators: cubic feet → cubic yards, square feet + depth → cubic yards, cubic yards → US short tons, cubic meters → cubic yards.
- Material calculators: concrete, gravel, mulch, topsoil and fill dirt.
- Guides: how to calculate cubic yards, what is a cubic yard, cubic yard coverage chart.
- About and calculation methodology pages.
- 15 indexable pages total, with structured navigation, unique metadata, sitemap.xml, robots.txt and breadcrumbs.

## Technology

- Next.js App Router, React 19, TypeScript.
- Tailwind CSS plus custom responsive CSS.
- Static HTML export. Interactive calculators are client-side React; no server runtime required.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
```

The build output is in `out/`.

## Cloudflare Pages

1. Connect GitHub repository `articoli/cubicyardcalculatorpro`.
2. Framework preset: **Next.js (Static HTML Export)**.
3. Build command: `npm run build`.
4. Build output directory: `out`.
5. Set Node.js environment to 22 (or another supported modern version).
6. Connect custom domain `cubicyardcalculatorpro.com` after the first successful deployment.

`next.config.ts` enables `output: "export"`, trailing slashes, and unoptimized Next images for compatibility.

## Calculator assumptions

- 1 cubic yard = exactly 27 cubic feet = 46,656 cubic inches = 0.764554857984 cubic meters.
- All density presets are illustrative and editable. For precise order quantities, obtain supplier-specific data.
- Volume calculations are geometric. Extra allowances do not represent a validated compaction or swell factor.
- Final material quantities require supplier or project verification.

## Content architecture

The initial launch includes 15 pages, built around the homepage. Additional planned expansion can cover sand, landscape rock, compost, excavation, truckloads, bags, cost, and deeper explanatory guides as search demand is validated.
