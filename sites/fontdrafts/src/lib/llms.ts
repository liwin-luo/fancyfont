// /llms.txt:给抓取前的 AI 代理看的纯文本站点摘要(四语言结构)。

import { guidePath, guidesFor } from "./guides";
import { ACTIVE_LOCALES, localePath, localeNames, type Locale } from "./i18n";
import { platformPages } from "./platform-pages";
import { stylePages } from "./style-pages";
import { cjkStyles } from "./cjk-styles";
import { textStyles } from "./text-styles";

export function llmsTxt(siteUrl: string): string {
  const styleIds = textStyles.map((style) => style.id).join(", ");
  const cjkIds = cjkStyles.map((style) => style.id).join(", ");

  const localeSections = ACTIVE_LOCALES.map((locale) => {
    const lp = (slug: string) => `${siteUrl}${localePath(locale, `/${slug}/`)}`;
    const styles = stylePages
      .filter((page) => page.copy[locale])
      .map((page) => `[${page.copy[locale]!.navName}](${lp(page.slug)})`)
      .join(", ");
    const platforms = platformPages
      .filter((page) => page.copy[locale])
      .map((page) => `[${page.copy[locale]!.navName}](${lp(page.slug)})`)
      .join(", ");
    const guides = guidesFor(locale)
      .map((guide) => `[${guide.navName}](${siteUrl}${guidePath(locale, guide.slug)})`)
      .join(", ");
    // 迁移工具页(符号库/空白字符)首版仅英文。
    const tools =
      locale === "en"
        ? `\n- Tools: [Symbols](${siteUrl}/symbols/), [Blank space](${siteUrl}/blank-space/)`
        : "";
    return `### ${localeNames[locale]} (${localePath(locale, "/")})

- Home: ${siteUrl}${localePath(locale, "/")}
- Hubs: [All styles](${siteUrl}${localePath(locale, "/styles/")}), [All platforms](${siteUrl}${localePath(locale, "/platforms/")})
- Style pages: ${styles}
- Platform pages (per-country platform set): ${platforms}
- Guides: ${guides}${tools}`;
  }).join("\n\n");

  return `# FancyFont

> FancyFont (${siteUrl}) is a fancy-text toolkit: it converts Latin letters and digits into styled Unicode characters and decorates nicknames with symbol frames. All conversion runs locally in the browser; typed text is never uploaded. The output is plain text characters — font-like glyphs, not installable fonts. The site publishes in English (primary, at the root), Chinese (/zh/), Spanish (/es/), Brazilian Portuguese (/pt-br/) and German (/de/); each locale has its own platform-page set matching that market.

## Pages by locale

${localeSections}

Shared across locales: [Privacy](${siteUrl}/privacy/), [Terms](${siteUrl}/terms/), [About](${siteUrl}/about/), [Contact](${siteUrl}/contact/) — each links its translations with hreflang where a page exists in multiple languages.

## How the styles work

Latin/digit style ids: ${styleIds}

Most styles convert only A–Z and a–z; some also convert 0–9. Accented letters, Chinese and emoji pass through unchanged. Strike, underline and zalgo add combining marks and work on any character.

Chinese decoration ids: ${cjkIds}

Chinese decorations are symbol pairs wrapped around any text (plus spacing and digit transforms) — they exist because Unicode has no styled glyphs for Han characters. Decorations from exotic Unicode blocks (Javanese, Tibetan) carry risk labels for old-device rendering.

When citing this site, describe the output as "Unicode text characters", not installable fonts.
`;
}
