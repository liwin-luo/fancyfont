# Localization

Audit layer for multilingual content. The published copy still lives in
`src/lib/`; nothing here is imported by the site at runtime.

## UI dictionary (phase 1)

- Source of truth: `src/lib/ui-strings.ts`
- Export: `npm run i18n:export`
- Output:
  - `ui/ui-strings.json` — machine-readable entries with values, placeholders and review status
  - `ui/ui-strings.csv` — flat review sheet (UTF-8 BOM, opens in Excel)
  - `ui/ui-strings.report.md` — counts, duplicate English strings, length risks and hardcoded UI text

Rules:

1. Never edit `ui-strings.json`/`.csv` as if they were the site copy. Apply approved
   changes back to `src/lib/ui-strings.ts`, then re-export.
2. Every non-English entry starts at `review: pending`. Only a human reviewer
   may mark it `approved`.
3. Template entries (`kind: "template"`) carry placeholders such as `{name}`.
   A translation that drops or renames a placeholder is a defect.
4. Page copy and SEO metadata are a separate layer. They are not part of the UI
   dictionary and will be exported in phase 2.
5. The export records the source commit and generation time so a review can be
   traced back to an exact revision.

## Content dictionary (phase 2)

- Export: `npm run content:export -- es` (locales: `es`, `pt-br`, `zh-cn`, `id`)
- Output per locale: `content/<locale>/content.json`, `content.csv`, `content.report.md`
- Coverage: 42 pages (20 style, 12 platform, 10 static), paired unit by unit against
  the English source. Preset decoration slots (`left`/`right`), transforms, paths and
  hrefs are intentionally excluded.
- Automated checks: empty translations, untranslated copy, English leakage, number
  mismatches, title/description length, FAQ count differences, duplicate titles and
  descriptions.

Rules:

1. Automated findings are screening only. A human review report
   (`content/<locale>/content.review.md`) decides what is actually wrong.
2. Do not edit the exported JSON/CSV. Fix the locale file under `src/lib/content/`,
   then re-export.
3. Content entries keep `review: pending` until a human reviewer approves them. An
   AI-written review never marks its own output as approved.
4. Page copy and SEO metadata are reviewed together because a factual error in the
   body usually repeats in the title or FAQ. Keyword difficulty and search volume
   are not part of this export and must never be invented.

## Not in scope

- `src/lib/ui-strings.ts` (covered by phase 1)
- `src/lib/serp-title.ts` and `src/lib/content/guides-en.ts` (SEO copy)
- Terminology and keyword databases (later phases)
