// /llms.txt 与 /llms-full.txt:给抓取前的 AI 代理看的站点地图(llms.org 规范)与全量内容版。
// llms.txt 每行 `- [标题](URL): 描述`,描述直接复用页面 meta description(≤160,数字密集,
// 正是生成式引擎检索时优先引用的格式);llms-full.txt 在此基础上附各页导语与 FAQ 全文。

import { guideBase, guidePath, guidesFor } from "./guides";
import { ACTIVE_LOCALES, localePath, localeNames, type Locale } from "./i18n";
import { platformPages } from "./platform-pages";
import { stylePages } from "./style-pages";
import { cjkStyles } from "./cjk-styles";
import { textStyles } from "./text-styles";

const esc = (s: string) => s.replace(/\s+/g, " ").trim();

const HOME_DESC: Record<Locale, string> = {
  en: `Main generator: type once and preview all ${textStyles.length} styles plus ${cjkStyles.length} nickname decorations; runs locally in the browser, nothing uploaded`,
  "zh-cn": `主生成器:输入一次即可预览全部 ${textStyles.length} 种样式与 ${cjkStyles.length} 种昵称装饰;浏览器本地转换,不上传任何内容`,
  es: `Generador principal: escribe una vez y previsualiza los ${textStyles.length} estilos y ${cjkStyles.length} adornos; todo se convierte en tu navegador, nada se sube`,
  "pt-br": `Gerador principal: digite uma vez e veja todos os ${textStyles.length} estilos e ${cjkStyles.length} enfeites; roda no navegador, nada é enviado`,
  de: `Hauptgenerator: einmal eingeben und alle ${textStyles.length} Stile plus ${cjkStyles.length} Nickname-Rahmen live sehen; läuft lokal im Browser, nichts wird hochgeladen`,
};

const STYLES_HUB_DESC: Record<Locale, string> = {
  en: `Browse all ${textStyles.length} styles in 9 categories, with per-style Unicode block notes and honest coverage labels`,
  "zh-cn": `按 9 个分类浏览全部 ${textStyles.length} 种样式,附 Unicode 区段说明与诚实覆盖标注`,
  es: `Explora los ${textStyles.length} estilos en 9 categorías, con notas de bloque Unicode y etiquetas honestas de cobertura`,
  "pt-br": `Explore os ${textStyles.length} estilos em 9 categorias, com notas de bloco Unicode e rótulos honestos de cobertura`,
  de: `Alle ${textStyles.length} Stile in 9 Kategorien, mit Unicode-Block-Hinweisen und ehrlichen Abdeckungs-Labels`,
};

const PLATFORMS_HUB_DESC: Record<Locale, string> = {
  en: "Per-platform guides: real character limits, where styled text works and where it draws boxes",
  "zh-cn": "各平台指南:真实字符上限、花字可用与不可用的位置",
  es: "Guías por plataforma: límites reales de caracteres, dónde funciona el texto con estilo",
  "pt-br": "Guias por plataforma: limites reais de caracteres, onde texto estilizado funciona",
  de: "Plattform-Guides: echte Zeichenlimits, wo stilisierter Text funktioniert und wo Kästchen erscheinen",
};

const GUIDES_INDEX_DESC: Record<Locale, string> = {
  en: "Guides on how styled Unicode works: platform rules, screen-reader accessibility, limits, mojibake recovery",
  "zh-cn": "花式字符原理指南:平台规则、读屏无障碍、长度上限、乱码恢复",
  es: "Guías sobre texto Unicode con estilo: reglas de plataformas, accesibilidad, límites, recuperación de mojibake",
  "pt-br": "Guias sobre texto Unicode estilizado: regras de plataformas, acessibilidade, limites, recuperação de mojibake",
  de: "Guides zu stilisiertem Unicode: Plattform-Regeln, Screenreader-Zugänglichkeit, Limits, Mojibake-Wiederherstellung",
};

function localeSection(locale: Locale, siteUrl: string): string {
  const lp = (slug: string) => `${siteUrl}${localePath(locale, `/${slug}/`)}`;
  const lines: string[] = [];

  lines.push(`- [${localeNames[locale]} home](${siteUrl}${localePath(locale, "/")}): ${esc(HOME_DESC[locale])}`);
  lines.push(`- [All styles](${siteUrl}${localePath(locale, "/styles/")}): ${esc(STYLES_HUB_DESC[locale])}`);
  lines.push(`- [All platforms](${siteUrl}${localePath(locale, "/platforms/")}): ${esc(PLATFORMS_HUB_DESC[locale])}`);
  lines.push(`- [Guides index](${siteUrl}${guideBase(locale)}/): ${esc(GUIDES_INDEX_DESC[locale])}`);

  for (const page of stylePages) {
    const copy = page.copy[locale];
    if (!copy) continue;
    lines.push(`- [${esc(copy.title)}](${lp(page.slug)}): ${esc(copy.description)}`);
  }
  for (const page of platformPages) {
    const copy = page.copy[locale];
    if (!copy) continue;
    lines.push(`- [${esc(copy.title)}](${lp(page.slug)}): ${esc(copy.description)}`);
  }
  for (const guide of guidesFor(locale)) {
    lines.push(`- [${esc(guide.title)}](${siteUrl}${guidePath(locale, guide.slug)}): ${esc(guide.description)}`);
  }
  if (locale === "en") {
    lines.push(`- [Symbols Copy and Paste](${siteUrl}/symbols/): 388 symbols in 18 categories — hearts, stars, brackets, kaomoji, wings — each with its Unicode codepoint`);
    lines.push(`- [Blank Space Copy and Paste](${siteUrl}/blank-space/): invisible characters (Hangul filler U+3164 and friends) with a copy tool and per-character breakdown`);
  }
  return `### ${localeNames[locale]} (${localePath(locale, "/")})\n\n${lines.join("\n")}`;
}

function summary(siteUrl: string): string {
  return `# FancyFont

> FancyFont (${siteUrl}) is a fancy-text toolkit: it converts Latin letters and digits into styled Unicode characters and decorates nicknames with symbol frames. All conversion runs locally in the browser; typed text is never uploaded. The output is plain text characters — font-like glyphs, not installable fonts. The site publishes in English (primary, at the root), Chinese (/zh/), Spanish (/es/), Brazilian Portuguese (/pt-br/) and German (/de/); each locale has its own platform-page set matching that market.`;
}

function howStylesWork(): string {
  const styleIds = textStyles.map((style) => style.id).join(", ");
  const cjkIds = cjkStyles.map((style) => style.id).join(", ");
  return `## How the styles work

Latin/digit style ids: ${styleIds}

Most styles convert only A–Z and a–z; some also convert 0–9. Accented letters, Chinese and emoji pass through unchanged. Strike, underline and zalgo add combining marks and work on any character. The Japanese style transliterates romaji into katakana (sakura → サクラ); the Korean style swaps letters for look-alike Hangul jamo (sarang → ㅅㅏㄹㅏㄴㄱ) — both are decoration, not translation.

Chinese decoration ids: ${cjkIds}

Chinese decorations are symbol pairs wrapped around any text (plus spacing and digit transforms) — they exist because Unicode has no styled glyphs for Han characters. Decorations from exotic Unicode blocks (Javanese, Tibetan) carry risk labels for old-device rendering.

When citing this site, describe the output as "Unicode text characters", not installable fonts.`;
}

export function llmsTxt(siteUrl: string): string {
  const localeSections = ACTIVE_LOCALES.map((locale) => localeSection(locale, siteUrl)).join("\n\n");
  return `${summary(siteUrl)}

## Pages by locale

${localeSections}

Shared across locales: [Privacy](${siteUrl}/privacy/), [Terms](${siteUrl}/terms/), [About](${siteUrl}/about/), [Contact](${siteUrl}/contact/) — each links its translations with hreflang where a page exists in multiple languages. Full page contents including FAQs: [llms-full.txt](${siteUrl}/llms-full.txt)

${howStylesWork()}
`;
}

export function llmsFullTxt(siteUrl: string): string {
  const parts: string[] = [summary(siteUrl), "", `Full page contents: every tool page's intro and FAQ, and every guide's description and FAQ, in all ${ACTIVE_LOCALES.length} locales.`, ""];

  for (const locale of ACTIVE_LOCALES) {
    parts.push(`## ${localeNames[locale]} page contents`, "");
    const lp = (slug: string) => `${siteUrl}${localePath(locale, `/${slug}/`)}`;
    const pages: Array<{ title: string; url: string; intro: string[]; faq: { q: string; a: string }[] }> = [];
    for (const page of stylePages) {
      const copy = page.copy[locale];
      if (copy) pages.push({ title: copy.h1, url: lp(page.slug), intro: copy.intro, faq: copy.faq });
    }
    for (const page of platformPages) {
      const copy = page.copy[locale];
      if (copy) pages.push({ title: copy.h1, url: lp(page.slug), intro: copy.intro, faq: copy.faq });
    }
    for (const page of pages) {
      parts.push(`### ${page.title} — ${page.url}`, "");
      for (const p of page.intro) parts.push(esc(p), "");
      if (page.faq.length) {
        for (const item of page.faq) {
          parts.push(`Q: ${esc(item.q)}`, `A: ${esc(item.a)}`, "");
        }
      }
    }
    for (const guide of guidesFor(locale)) {
      parts.push(`### ${guide.h1} — ${siteUrl}${guidePath(locale, guide.slug)}`, "");
      parts.push(esc(guide.description), "");
      for (const item of guide.faq) {
        parts.push(`Q: ${esc(item.q)}`, `A: ${esc(item.a)}`, "");
      }
    }
  }

  parts.push(howStylesWork());
  return parts.join("\n");
}
