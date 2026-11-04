// Exports page content for one locale into a reviewable dictionary under
// localization/content/<locale>/. The source of truth stays src/lib/content;
// the exported files are an audit layer, never the published copy.
//
// Usage: npx -y tsx scripts/export-content-dictionary.ts es

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { localeNames, localePrefix, locales, type Locale } from "../src/lib/i18n";
import { resolvedStyleTitle } from "../src/lib/serp-title";
import { stylePages } from "../src/lib/style-pages";
import { platformPages } from "../src/lib/platform-pages";
import { homeContent } from "../src/lib/content/page-home";
import { fancyContent } from "../src/lib/content/page-fancy";
import { gamingContent } from "../src/lib/content/page-gaming";
import { blankSpaceContent } from "../src/lib/content/page-blank-space";
import { symbolsContent, privacyContent } from "../src/lib/content/page-symbols-privacy";
import { aboutContent, contactContent } from "../src/lib/content/page-about-contact";
import { termsContent } from "../src/lib/content/page-terms";
import { mcpContent } from "../src/lib/content/page-mcp";

const ROOT = process.cwd();
const SOURCE_LOCALE: Locale = "en";

type PageGroup = "style" | "platform" | "static";
type UnitKind = "text" | "template" | "seo";

interface Unit {
  path: string;
  kind: UnitKind;
  source: string;
  target: string;
  flags: string[];
}

interface PageRecord {
  route: string;
  url: string;
  group: PageGroup;
  title: { source: string; target: string };
  description: { source: string; target: string };
  faqCount: { source: number; target: number };
  units: Unit[];
}

interface Report {
  locale: Locale;
  pages: PageRecord[];
}

const STATIC_PAGES: { route: string; group: string; content: Record<Locale, unknown> }[] = [
  { route: "/", group: "home", content: homeContent },
  { route: "/fancy-text-generator/", group: "fancy", content: fancyContent },
  { route: "/gaming-name-generator/", group: "gaming", content: gamingContent },
  { route: "/blank-space/", group: "blank-space", content: blankSpaceContent },
  { route: "/symbols/", group: "symbols", content: symbolsContent },
  { route: "/privacy/", group: "privacy", content: privacyContent },
  { route: "/about/", group: "about", content: aboutContent },
  { route: "/contact/", group: "contact", content: contactContent },
  { route: "/terms/", group: "terms", content: termsContent },
  { route: "/mcp/", group: "mcp", content: mcpContent },
];

const ENGLISH_WORDS = [
  "the",
  "and",
  "your",
  "you",
  "with",
  "from",
  "this",
  "that",
  "what",
  "how",
  "when",
  "why",
  "does",
  "can",
  "they",
  "will",
  "more",
  "than",
  "into",
  "about",
  "have",
  "was",
  "were",
];

// Terminology hints, not rules: they expose drift for a human reviewer.
const TERM_VARIANTS: Partial<Record<Locale, { concept: string; variants: string[] }[]>> = {
  es: [
    { concept: "cursive", variants: ["cursiva", "cursivo", "script"] },
    { concept: "gothic / blackletter names", variants: ["gótica", "gótico", "blackletter", "fraktur", "old english"] },
    { concept: "small caps", variants: ["versalitas", "small caps", "minúsculas versalitas"] },
    { concept: "username", variants: ["nombre de usuario", "usuario"] },
    { concept: "display name", variants: ["nombre visible", "nombre para mostrar"] },
    { concept: "nickname", variants: ["apodo", "nickname", "sobrenombre"] },
    { concept: "font weight", variants: ["grosor", "peso"] },
  ],
};

function gitCommit(): string {
  try {
    return execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
  } catch {
    return "unknown";
  }
}

/** Renders function-valued copy with placeholder argument values. */
function renderFunction(fn: (...args: number[]) => unknown): unknown {
  return fn(...Array.from({ length: fn.length }, () => 30));
}

function flatten(value: unknown, prefix: string, out: { path: string; kind: UnitKind; value: string }[], kind: UnitKind = "text") {
  if (typeof value === "function") {
    flatten(renderFunction(value as (...args: number[]) => unknown), prefix, out, "template");
    return;
  }
  if (typeof value === "string") {
    out.push({ path: prefix, kind, value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, `${prefix}[${index}]`, out, kind));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (key === "path" || key === "href" || key === "styleId" || key === "transform") continue;
      flatten(child, prefix ? `${prefix}.${key}` : key, out, kind);
    }
  }
}

function collectContent(value: unknown): { path: string; kind: UnitKind; value: string }[] {
  const out: { path: string; kind: UnitKind; value: string }[] = [];
  flatten(value, "", out);
  return out;
}

function asRecord<T>(value: Record<Locale, T>, locale: Locale): T {
  const resolved = value[locale];
  if (!resolved) throw new Error(`Missing content for locale ${locale}`);
  return resolved;
}

function collectPages(locale: Locale): PageRecord[] {
  const pages: PageRecord[] = [];

  for (const page of stylePages) {
    const sourceCopy = page.copy[SOURCE_LOCALE];
    const targetCopy = page.copy[locale];
    pages.push({
      route: `/${page.slug}/`,
      url: `${localePrefix[locale]}/${page.slug}/`,
      group: "style",
      title: {
        source: resolvedStyleTitle(sourceCopy, page.slug, SOURCE_LOCALE),
        target: resolvedStyleTitle(targetCopy, page.slug, locale),
      },
      description: { source: sourceCopy.description, target: targetCopy.description },
      faqCount: { source: sourceCopy.faq.length, target: targetCopy.faq.length },
      units: [],
    });
  }

  for (const page of platformPages) {
    const sourceCopy = page.copy[SOURCE_LOCALE];
    const targetCopy = page.copy[locale];
    pages.push({
      route: `/${page.slug}/`,
      url: `${localePrefix[locale]}/${page.slug}/`,
      group: "platform",
      title: { source: sourceCopy.title, target: targetCopy.title },
      description: { source: sourceCopy.description, target: targetCopy.description },
      faqCount: { source: sourceCopy.faq.length, target: targetCopy.faq.length },
      units: [],
    });
  }

  for (const entry of STATIC_PAGES) {
    const sourceContent = asRecord(entry.content, SOURCE_LOCALE);
    const targetContent = asRecord(entry.content, locale);
    const sourceMeta = (sourceContent as { meta: { title: string; description: string } }).meta;
    const targetMeta = (targetContent as { meta: { title: string; description: string } }).meta;
    pages.push({
      route: entry.route,
      url: `${localePrefix[locale]}${entry.route}`,
      group: "static",
      title: { source: sourceMeta.title, target: targetMeta.title },
      description: { source: sourceMeta.description, target: targetMeta.description },
      faqCount: {
        source: countFaq(sourceContent),
        target: countFaq(targetContent),
      },
      units: [],
    });
  }

  for (const page of pages) {
    const sourceUnits = new Map<string, { kind: UnitKind; value: string }>();
    const targetUnits = new Map<string, { kind: UnitKind; value: string }>();

    if (page.group === "style") {
      const def = stylePages.find((candidate) => `/${candidate.slug}/` === page.route)!;
      for (const unit of collectContent(def.copy[SOURCE_LOCALE])) sourceUnits.set(unit.path, unit);
      for (const unit of collectContent(def.copy[locale])) targetUnits.set(unit.path, unit);
    } else if (page.group === "platform") {
      const def = platformPages.find((candidate) => `/${candidate.slug}/` === page.route)!;
      for (const unit of collectContent(def.copy[SOURCE_LOCALE])) sourceUnits.set(unit.path, unit);
      for (const unit of collectContent(def.copy[locale])) targetUnits.set(unit.path, unit);
    } else {
      const entry = STATIC_PAGES.find((candidate) => candidate.route === page.route)!;
      for (const unit of collectContent(asRecord(entry.content, SOURCE_LOCALE))) sourceUnits.set(unit.path, unit);
      for (const unit of collectContent(asRecord(entry.content, locale))) targetUnits.set(unit.path, unit);
    }

    page.title = { source: sourceUnits.get("title")?.value ?? page.title.source, target: targetUnits.get("title")?.value ?? page.title.target };
    page.description = {
      source: sourceUnits.get("description")?.value ?? page.description.source,
      target: targetUnits.get("description")?.value ?? page.description.target,
    };
    // Static pages keep their SEO copy under meta.*.
    if (page.group === "static") {
      page.title = { source: sourceUnits.get("meta.title")?.value ?? page.title.source, target: targetUnits.get("meta.title")?.value ?? page.title.target };
      page.description = {
        source: sourceUnits.get("meta.description")?.value ?? page.description.source,
        target: targetUnits.get("meta.description")?.value ?? page.description.target,
      };
    }

    const keys = new Set([...sourceUnits.keys(), ...targetUnits.keys()]);
    for (const key of keys) {
      const source = sourceUnits.get(key);
      const target = targetUnits.get(key);
      const flags: string[] = [];
      const sourceValue = source?.value ?? "";
      const targetValue = target?.value ?? "";

      if (!targetValue.trim() && sourceValue.trim()) flags.push("empty-target");
      if (
        targetValue.trim() &&
        targetValue.trim() === sourceValue.trim() &&
        sourceValue.length >= 25 &&
        !isIdentifier(key, sourceValue)
      ) {
        flags.push("untranslated");
      }
      if (targetValue && locale !== SOURCE_LOCALE && hasEnglishWords(targetValue)) {
        flags.push("english-leak");
      }
      if (sourceValue && targetValue && numbersDiffer(sourceValue, targetValue)) {
        flags.push("number-mismatch");
      }

      page.units.push({
        path: key,
        kind: key === "title" || key === "description" || key.startsWith("meta.") ? "seo" : source?.kind ?? target?.kind ?? "text",
        source: sourceValue,
        target: targetValue,
        flags,
      });
    }
  }

  return pages;
}

function countFaq(content: unknown): number {
  const units = collectContent(content);
  return units.filter((unit) => unit.path.endsWith(".q")).length;
}

/** Tool names, slugs and config keys are identifiers, not translatable copy. */
function isIdentifier(key: string, value: string): boolean {
  return key.endsWith(".name") && /^[a-z0-9_]+$/.test(value);
}

function hasEnglishWords(value: string): boolean {
  const lower = ` ${value.toLowerCase()} `;
  return ENGLISH_WORDS.some((word) => new RegExp(`[^a-zà-ÿ]${word}[^a-zà-ÿ]`, "u").test(lower));
}

function normaliseNumber(value: string): string {
  return value.replace(/(\d)[.,](?=\d)/g, "$1");
}

function numbersDiffer(source: string, target: string): boolean {
  const sourceNumbers = [...new Set(source.match(/\d+(?:[.,]\d+)?/g)?.map(normaliseNumber) ?? [])].sort();
  if (sourceNumbers.length === 0) return false;
  const targetNumbers = [...new Set(target.match(/\d+(?:[.,]\d+)?/g)?.map(normaliseNumber) ?? [])].sort();
  return sourceNumbers.join(",") !== targetNumbers.join(",");
}

function length(value: string): number {
  return Array.from(value).length;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function terminology(locale: Locale, pages: PageRecord[]) {
  const terms = TERM_VARIANTS[locale];
  if (!terms) return [];
  return terms.map((term) => {
    const counts = term.variants.map((variant) => {
      const pattern = new RegExp(`\\b${escapeRegex(variant)}\\b`, "giu");
      let pagesUsing = 0;
      let occurrences = 0;
      for (const page of pages) {
        const text = page.units.map((unit) => unit.target).join("\n");
        const matches = text.match(pattern)?.length ?? 0;
        if (matches > 0) pagesUsing += 1;
        occurrences += matches;
      }
      return { variant, pagesUsing, occurrences };
    });
    const mixedPages = pages
      .filter((page) => {
        const text = page.units.map((unit) => unit.target).join("\n");
        const used = term.variants.filter((variant) => new RegExp(`\\b${escapeRegex(variant)}\\b`, "giu").test(text));
        return used.length > 1;
      })
      .map((page) => page.route);
    return { concept: term.concept, counts, mixedPages };
  });
}

function writeReport(locale: Locale, pages: PageRecord[], commit: string): string {
  const allUnits = pages.flatMap((page) => page.units);
  const flagged = allUnits.filter((unit) => unit.flags.length > 0);
  const byFlag = (flag: string) => flagged.filter((unit) => unit.flags.includes(flag));

  const titleIssues = pages.filter((page) => {
    const titleLength = length(page.title.target);
    return titleLength < 20 || titleLength > 60;
  });
  const descriptionIssues = pages.filter((page) => {
    const descriptionLength = length(page.description.target);
    return descriptionLength < 70 || descriptionLength > 160;
  });
  const duplicateTitles = duplicates(pages, (page) => page.title.target);
  const duplicateDescriptions = duplicates(pages, (page) => page.description.target);
  const faqMismatch = pages.filter((page) => page.faqCount.source !== page.faqCount.target);
  const terms = terminology(locale, pages);

  const lines: string[] = [];
  lines.push(`# 内容审核 · ${localeNames[locale]} (\`${locale}\`)`);
  lines.push("");
  lines.push(`- 生成时间：${new Date().toISOString()}`);
  lines.push(`- 源提交：\`${commit}\``);
  lines.push(`- 源语言：English (\`en\`)`);
  lines.push(`- 范围：风格页 ${pages.filter((p) => p.group === "style").length}、平台页 ${pages.filter((p) => p.group === "platform").length}、静态页 ${pages.filter((p) => p.group === "static").length}`);
  lines.push(`- 审查单元：${allUnits.length}`);
  lines.push(`- 审核状态：全部待人工审核（\`pending\`），本报告不构成发布批准`);
  lines.push("");
  lines.push("## 自动检测汇总");
  lines.push("");
  lines.push("| 检测项 | 数量 |");
  lines.push("|---|---|");
  lines.push(`| 空翻译 | ${byFlag("empty-target").length} |`);
  lines.push(`| 与英文完全相同 | ${byFlag("untranslated").length} |`);
  lines.push(`| 英文残留 | ${byFlag("english-leak").length} |`);
  lines.push(`| 数字/事实不一致 | ${byFlag("number-mismatch").length} |`);
  lines.push(`| 标题长度异常 (<20 或 >60) | ${titleIssues.length} |`);
  lines.push(`| 描述长度异常 (<70 或 >160) | ${descriptionIssues.length} |`);
  lines.push(`| FAQ 数量不一致 | ${faqMismatch.length} |`);
  lines.push(`| 重复标题 | ${duplicateTitles.length} 组 |`);
  lines.push(`| 重复描述 | ${duplicateDescriptions.length} 组 |`);
  lines.push("");
  lines.push("## 页面概览");
  lines.push("");
  lines.push("| 路径 | 标题 en→es | 描述 en→es | FAQ | 问题数 |");
  lines.push("|---|---|---|---|---|");
  for (const page of pages) {
    const issues = page.units.filter((unit) => unit.flags.length > 0).length;
    lines.push(
      `| \`${page.route}\` | ${length(page.title.source)}→${length(page.title.target)} | ${length(page.description.source)}→${length(page.description.target)} | ${page.faqCount.target} | ${issues} |`,
    );
  }
  lines.push("");

  const sections: { flag: string; title: string }[] = [
    { flag: "empty-target", title: "空翻译" },
    { flag: "untranslated", title: "与英文完全相同（疑似未翻译）" },
    { flag: "english-leak", title: "英文残留" },
    { flag: "number-mismatch", title: "数字/事实不一致" },
  ];
  for (const section of sections) {
    lines.push(`## ${section.title}`);
    lines.push("");
    const items = pages.flatMap((page) =>
      page.units.filter((unit) => unit.flags.includes(section.flag)).map((unit) => ({ page, unit })),
    );
    if (items.length === 0) {
      lines.push("无。");
      lines.push("");
      continue;
    }
    lines.push("| 路径 | key | 英文 | 译文 |");
    lines.push("|---|---|---|---|");
    for (const { page, unit } of items.slice(0, 100)) {
      lines.push(`| \`${page.route}\` | \`${unit.path}\` | ${escapeCell(unit.source)} | ${escapeCell(unit.target)} |`);
    }
    if (items.length > 100) lines.push(`| … | 另有 ${items.length - 100} 条 | | |`);
    lines.push("");
  }

  lines.push("## 标题长度异常");
  lines.push("");
  lines.push("SERP 截断风险提示，不是错误：Google 按像素截断，品牌尾通常最先丢失，查询词仍在前面。");
  lines.push("");
  if (titleIssues.length === 0) {
    lines.push("无。");
  } else {
    lines.push("| 路径 | 长度 | 标题 |");
    lines.push("|---|---|---|");
    for (const page of titleIssues) {
      lines.push(`| \`${page.route}\` | ${length(page.title.target)} | ${escapeCell(page.title.target)} |`);
    }
  }
  lines.push("");
  lines.push("## 描述长度异常");
  lines.push("");
  lines.push("超过 160 字符时搜索结果会截断；低于 70 字符则没有充分利用摘要空间。不是排名错误。");
  lines.push("");
  if (descriptionIssues.length === 0) {
    lines.push("无。");
  } else {
    lines.push("| 路径 | 长度 | 描述 |");
    lines.push("|---|---|---|");
    for (const page of descriptionIssues) {
      lines.push(`| \`${page.route}\` | ${length(page.description.target)} | ${escapeCell(page.description.target)} |`);
    }
  }
  lines.push("");
  lines.push("## FAQ 数量不一致");
  lines.push("");
  if (faqMismatch.length === 0) {
    lines.push("无。");
  } else {
    lines.push("| 路径 | 英文 | 译文 |");
    lines.push("|---|---|---|");
    for (const page of faqMismatch) {
      lines.push(`| \`${page.route}\` | ${page.faqCount.source} | ${page.faqCount.target} |`);
    }
  }
  lines.push("");
  lines.push("## 重复标题 / 描述");
  lines.push("");
  if (duplicateTitles.length === 0 && duplicateDescriptions.length === 0) {
    lines.push("无。");
  } else {
    for (const group of duplicateTitles) {
      lines.push(`- 标题重复：${escapeCell(group.value)} (` + group.routes.map((route) => `\`${route}\``).join(", ") + ")");
    }
    for (const group of duplicateDescriptions) {
      lines.push(`- 描述重复：${escapeCell(group.value)} (` + group.routes.map((route) => `\`${route}\``).join(", ") + ")");
    }
  }
  lines.push("");
  lines.push("## 术语用法（提示，不是规则）");
  lines.push("");
  if (terms.length === 0) {
    lines.push("该语言尚未配置术语提示。");
  } else {
    lines.push("| 概念 | 变体 | 出现次数 | 涉及页面 | 同页混用 |");
    lines.push("|---|---|---|---|---|");
    for (const term of terms) {
      for (const count of term.counts) {
        if (count.occurrences === 0) continue;
        lines.push(`| ${term.concept} | ${count.variant} | ${count.occurrences} | ${count.pagesUsing} | ${term.mixedPages.length > 0 ? term.mixedPages.length : 0} |`);
      }
      if (term.mixedPages.length > 0) {
        lines.push(`| ${term.concept} | 同页混用页面 | — | — | ${term.mixedPages.map((route) => `\`${route}\``).join(", ")} |`);
      }
    }
  }
  lines.push("");
  lines.push("## 未验证项");
  lines.push("");
  lines.push("- 搜索量、关键词难度、SERP 排名：没有关键词工具或 GSC 数据，报告中不包含任何数字。");
  lines.push("- 关键词与搜索意图匹配：需要目标市场关键词库后才能判定。");
  lines.push("- 母语自然度与专业术语：AI 审查只能标记疑点，不能替代母语编辑。");
  lines.push("- 页面事实：数字一致性由脚本比对英文原文；语义级事实仍需对照 `seo/产品事实底稿.md`。");
  lines.push("");
  return lines.join("\n");
}

function duplicates(pages: PageRecord[], select: (page: PageRecord) => string): { value: string; routes: string[] }[] {
  const groups = new Map<string, string[]>();
  for (const page of pages) {
    const value = select(page).trim();
    if (!value) continue;
    const routes = groups.get(value) ?? [];
    routes.push(page.route);
    groups.set(value, routes);
  }
  return [...groups.entries()]
    .filter(([, routes]) => routes.length > 1)
    .map(([value, routes]) => ({ value, routes }));
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function writeCsv(locale: Locale, pages: PageRecord[], file: string) {
  const header = ["locale", "route", "group", "key", "kind", "source_en", "target", "flags"];
  const rows = [header];
  for (const page of pages) {
    for (const unit of page.units) {
      rows.push([locale, page.route, page.group, unit.path, unit.kind, unit.source, unit.target, unit.flags.join(";")]);
    }
  }
  const csv = rows
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
    .join("\n");
  writeFileSync(file, `\uFEFF${csv}\n`, "utf8");
}

function main() {
  const arg = process.argv[2];
  const locale = arg && locales.includes(arg as Locale) ? (arg as Locale) : null;
  if (!locale) {
    console.error(`Usage: npx -y tsx scripts/export-content-dictionary.ts <${locales.join("|")}>`);
    process.exit(1);
  }

  const commit = gitCommit();
  const pages = collectPages(locale);
  const outDir = join(ROOT, "localization", "content", locale);
  mkdirSync(outDir, { recursive: true });

  const report: Report = { locale, pages };
  writeFileSync(join(outDir, "content.json"), JSON.stringify({ generatedAt: new Date().toISOString(), sourceCommit: commit, schemaVersion: 1, ...report }, null, 2) + "\n", "utf8");
  writeCsv(locale, pages, join(outDir, "content.csv"));
  writeFileSync(join(outDir, "content.report.md"), writeReport(locale, pages, commit) + "\n", "utf8");

  const units = pages.flatMap((page) => page.units);
  const flagged = units.filter((unit) => unit.flags.length > 0);
  const titleIssues = pages.filter((page) => length(page.title.target) < 20 || length(page.title.target) > 60);
  const descriptionIssues = pages.filter((page) => length(page.description.target) < 70 || length(page.description.target) > 160);
  console.log(
    `Exported ${pages.length} pages / ${units.length} units for ${locale}; ` +
      `${flagged.length} flagged, ${titleIssues.length} title length, ${descriptionIssues.length} description length.`,
  );
}

main();
