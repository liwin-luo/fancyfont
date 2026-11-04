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

## Not in scope

- `src/lib/content/style-pages-*.ts`, `platform-pages-*.ts`, `page-*.ts` (page copy)
- `src/lib/serp-title.ts` and `src/lib/content/guides-en.ts` (SEO copy)
- Terminology and keyword databases (later phases)
