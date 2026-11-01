# FancyFont

**Stylish Names, Fonts & Symbols** — a free online toolkit that turns plain text into
copyable Unicode styles, decorates gaming nicknames, and serves a searchable symbol
library. No sign-up, nothing uploaded: every conversion runs in the browser.

Built per `FancyFont_Product_Roadmap_MVP.md` (P0 + P1 scope) and
`FancyFont_UI_UX_Design_Spec.md` (Modern Pixel Utility, light theme, lavender brand).
The public site is [fancyfont.tools](https://fancyfont.tools).

## Tech stack

- **Next.js 15 (App Router)** — every page is prerendered static HTML (SSG), which is
  the fastest and most crawlable option for Vercel.
- **Tailwind CSS v4** — design tokens from the UI spec live in `src/app/globals.css`
  (`@theme` block); no external web fonts. The only raster image is a generated
  Open Graph card at `/og/`.
- **TypeScript + Vitest** — engines and data are pure modules covered by 60 unit tests.

## What's inside

**30 text styles** — cursive, gothic, bold/italic families, sans & mono, small caps,
tiny superscript/subscript, bubble/circled/parenthesized/squared, full width,
upside down, strikethrough family, and three deterministic zalgo intensities. Every
style carries honest coverage metadata (`letters` / `lettersDigits` / `partial` /
`all`) and display-risk notes shown in the UI.

**388 symbols in 18 categories** — hearts, stars, arrows, crowns, flowers, wings &
bows, brackets, lines, faces, music & vibes, check & cross, math, Greek, currency,
numbers & Roman, dots & marks, and invisible blanks for empty game names — plus 14
ready-made decorative combos. Searchable by name and keyword.

**40 index paths in 5 languages (200 URLs)**, all static: home, three core tools,
style and platform pages, blank space, privacy, terms, about, contact, and a local
MCP page. Custom 404 stays out of the sitemap. Each index path is localized in
**English, Español (`/es/`), Português-BR (`/pt-br/`), 简体中文 (`/zh-cn/`) and
Bahasa Indonesia (`/id/`)**.

**Competitive features** (from the §13 competitor study of YayText, FancyText.io,
CoolSymbol, fsymbols, LingoJam):

- Style search + category filters on the generator (competitors: flat grids only)
- Favorites for styles and nicknames, recent symbols — all `localStorage`, no accounts
- Symbol batch tray: multi-select, copy all at once
- Custom combo builder on the gaming page (pick decoration + letter style, save combos)
- PNG export for any result (canvas, client-side), with an optional transparent background
- Preview size slider, share a style to X or WhatsApp, copy every favorite or saved name at once
- Per-page honest platform guidance (username vs display name vs bio rules), plus a local profile card that shows the styled text in that field and keeps the username plain

## Internationalization (roadmap §6)

- English at the root; Spanish under `/es/`, Brazilian Portuguese under `/pt-br/`,
  Simplified Chinese under `/zh-cn/`, and Indonesian under `/id/` — independent,
  stable URLs, no browser-based redirects, clear EN/ES/PT/中文/ID switcher.
- Every page declares `hreflang` for its siblings plus `x-default` → the English URL,
  and each locale keeps its own canonical (never all canonical to English).
- Copy is genuinely localized (headings, tool UI, FAQs, long-form style/platform
  content, privacy policy) — not just navigation labels. TypeScript enforces
  translation completeness at build time (`ui-strings.ts` + i18n unit tests).
- `<html lang>` is correct per locale via five route-group root layouts
  (`en`, `es`, `pt-BR`, `zh-CN`, `id`).
- `sitemap.xml` lists all 200 URLs, each entry carrying its hreflang alternates.
  `lastmod` is a fixed content date, so it does not change on every request.
- Chinese note (roadmap §6.3): styles convert Latin letters only — Chinese
  characters pass through unchanged. This boundary is stated honestly in every
  zh page's coverage notes; the tools are aimed at Latin-script game/social names.
- Adding a language: extend `locales` in `src/lib/i18n.ts`, add a content locale file
  for style/platform pages + UI strings, and create the route group.

## SEO built in

- Unique `<title>`, meta description, and single `<h1>` per page.
- Canonical URLs with trailing slashes (`trailingSlash: true`; non-slash URLs 308-redirect).
- `sitemap.xml` with all 40 index paths (`src/app/sitemap.ts`), `robots.txt` (including
  an explicit allow for common AI crawlers), and `/llms.txt` for agents that
  cite the site.
- Default Open Graph image at `/og/` and `summary_large_image` Twitter cards.
  Missing pages send `noindex`.
- JSON-LD: `WebSite` (home), `WebApplication` + `FAQPage` on every tool page — FAQ
  markup mirrors visible content only.
- Internal linking per the roadmap: fancy → all style pages, gaming → platform pages,
  homepage directory of every generator, footer navigation columns.
- Tool content is server-rendered into the initial HTML (results and the symbol grid
  are visible to crawlers without JavaScript).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # vitest unit tests
npm run build:mcp  # refresh public/fancyfont-mcp.mjs, the file the site offers for download
npm run mcp        # local MCP server on stdio, from source (downloads tsx on first run)
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Deploy to Vercel

### Option A — Git integration (recommended)

1. Push this folder to a GitHub/GitLab repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset **Next.js** is detected automatically — no build settings needed.
4. Deploy.

### Option B — Vercel CLI

```bash
npx vercel login
npx vercel          # preview deployment
npx vercel --prod   # production
```

### After deploying

1. **Set the site URL**: in Vercel → Settings → Environment Variables, add
   `NEXT_PUBLIC_SITE_URL=https://fancyfont.tools` (this is also the default).
   It drives canonical URLs, `sitemap.xml`, `robots.txt`, and JSON-LD. Set it
   before submitting to Search Console, and redeploy after changing it.
2. **Search Console**: add `fancyfont.tools` as a property and submit
   `https://fancyfont.tools/sitemap.xml`.
3. **Analytics (optional)**: add `NEXT_PUBLIC_GA_ID` (a `G-…` measurement ID) and
   `NEXT_PUBLIC_CLARITY_ID` in the same place, then redeploy. Scripts load only when
   the ID is set; the privacy page already describes what they collect. Events never
   include the text a user typed (`src/lib/analytics.ts`).
4. Spot-check: every page returns 200, canonicals point at `https://fancyfont.tools`,
   `/sitemap.xml` and `/robots.txt` resolve, and JSON-LD validates (Google Rich Results
   Test).

## Project structure

```
src/
  app/                    # routes (all static): pages, layout, sitemap, robots, icon, 404
    [slug]/               # 11 style + 4 platform pages (generateStaticParams, data-driven)
    fancy-text-generator/
    gaming-name-generator/
    symbols/
    privacy/
    mcp/                    # install page for the local stdio MCP server
  components/             # header, footer, tools (client), templates, toast, sections
  lib/
    text-styles.ts        # 30-style Unicode conversion engine (coverage metadata, zalgo)
    nickname.ts           # seeded, deterministic nickname combinator + custom builder API
    symbols-data.ts       # 388 symbols, 18 categories, search, combos
    style-pages.ts        # hand-written content for the 11 style pages
    platform-pages.ts     # hand-written content for the 4 platform pages
    storage.ts            # SSR-safe localStorage lists (favorites/recents/saved)
    export-image.ts       # canvas PNG export
    copy.ts               # clipboard with legacy fallback
    site.ts               # site URL (env: NEXT_PUBLIC_SITE_URL)
    llms.ts               # /llms.txt body
  mcp/
    stdio.ts              # local MCP entry; bundled to public/fancyfont-mcp.mjs
    handlers.ts           # JSON-RPC tool calls into the engines above
  lib/__tests__/          # vitest suites: engines, data, platform/style pages
```

## Deliberate boundaries (per roadmap)

- No font files, no accounts, and no hosted model calls. A local MCP server
  (`npm run mcp` from this repo, or the `fancyfont-mcp.mjs` download on `/mcp/`)
  lets an agent on your machine call the same engines. It does not upload text.
- No auto-generated thin pages — every style/platform page has hand-written unique
  content. The MCP page is short on purpose and written per locale.
- No analytics yet; when added, do not send user input (roadmap §8.5).
- Unicode compatibility is honestly disclosed on every tool page — no "works
  everywhere" claims; platform pages stress that rules change and must be tested.
