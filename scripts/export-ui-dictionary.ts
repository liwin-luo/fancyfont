// Exports the typed UI strings into an audit dictionary under localization/ui/.
// The source of truth stays src/lib/ui-strings.ts; the exported files are a
// review layer and must never be treated as the published copy.

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { locales, localeNames, type Locale } from "../src/lib/i18n";
import { ui } from "../src/lib/ui-strings";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "localization", "ui");
const SOURCE_FILE = "src/lib/ui-strings.ts";
const SOURCE_LOCALE: Locale = "en";

type Kind = "text" | "template" | "enum";

interface Entry {
  key: string;
  kind: Kind;
  context: string;
  description: string;
  source: string;
  sourceLocale: Locale;
  values: Record<string, string | Record<string, string>>;
  placeholders: string[];
  lengths: Record<string, number>;
  riskLocales: Locale[];
  sourceLength: number;
  maxTargetLength: number;
  lengthRatio: number;
  review: Record<string, string>;
}

interface HardcodedHit {
  file: string;
  line: number;
  attribute: string;
  value: string;
}

// Fallback context when the interface has no JSDoc for a key.
const CONTEXT_LABELS: Record<string, string> = {
  languageLabel: "Language switcher label",
  localeSuggest: "One-time suggestion when the browser language differs",
  nav: "Header navigation",
  tools: "Footer tool names and labels",
  common: "Shared tool UI: buttons, counters, status messages",
  symbols: "Symbols tool",
  gaming: "Gaming name generator",
  styleNames: "Style display names",
  styleCategoryNames: "Style category names",
  vibeNames: "Gaming vibe preset names",
  crazyLevelNames: "Crazy generator intensity levels",
  symbolCats: "Symbol category names",
  symbolCatNotes: "Symbol category notes",
  platformTool: "Platform preset tool",
  platformPreview: "Platform preview card",
  bio: "Bio draft tool",
  sections: "Shared page sections",
  compat: "Compatibility report",
  stylePageSteps: "Style page how-it-works steps",
};

// Function-valued strings that select a fixed variant instead of interpolating.
const ENUM_VARIANTS: Record<string, string[]> = {
  "gaming.platformRule": ["needs_verification", "partial", "verified"],
};

const PLACEHOLDER = /\{([a-zA-Z0-9_]+)\}/g;

function getByPath(value: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, part) => {
    if (current && typeof current === "object") {
      return (current as Record<string, unknown>)[part];
    }
    return undefined;
  }, value);
}

function paramNames(fn: (...args: unknown[]) => unknown): string[] {
  const source = fn.toString().trim();
  const match =
    source.match(/^(?:async\s*)?\(?([^()=]*)\)?\s*=>/) ??
    source.match(/^function[^(]*\(([^)]*)\)/);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((part) => part.trim().split(":")[0].trim())
    .filter(Boolean);
}

function invoke(fn: (...args: unknown[]) => unknown, args: string[]): string | null {
  try {
    const output = fn(...args);
    return typeof output === "string" ? output : null;
  } catch {
    return null;
  }
}

function placeholdersIn(values: readonly string[]): string[] {
  const found = new Set<string>();
  for (const value of values) {
    for (const match of value.matchAll(PLACEHOLDER)) found.add(`{${match[1]}}`);
  }
  return [...found].sort();
}

function readDescriptions(): Map<string, string> {
  const source = readFileSync(join(ROOT, SOURCE_FILE), "utf8");
  const start = source.indexOf("export interface UiStrings {");
  if (start === -1) return new Map();

  const descriptions = new Map<string, string>();
  const stack: Array<{ key: string; comment: string }> = [];
  const lines = source.slice(start).split("\n").slice(1);
  let comment: string[] = [];

  const normalize = (parts: string[]) =>
    parts
      .map((line) => line.replace(/^\s*\*\s?/, "").replace(/\/\*\*|\*\//g, "").trim())
      .filter(Boolean)
      .join(" ")
      .trim();

  const parentComment = () => {
    for (let index = stack.length - 1; index >= 0; index -= 1) {
      if (stack[index].comment) return stack[index].comment;
    }
    return "";
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("/**")) {
      comment = [line];
      if (line.includes("*/")) {
        const pending = normalize(comment);
        comment = [];
        // A one-line JSDoc is attached to the property on the next line.
        descriptions.set("__pending__", pending);
      }
      continue;
    }
    if (comment.length) {
      comment.push(line);
      if (line.includes("*/")) {
        descriptions.set("__pending__", normalize(comment));
        comment = [];
      }
      continue;
    }
    if (line === "}" || line === "};") {
      stack.pop();
      continue;
    }

    const pending = descriptions.get("__pending__") ?? "";
    const prefix = stack.map((entry) => entry.key).join(".");
    const pathFor = (key: string) => (prefix ? `${prefix}.${key}` : key);

    const inlineObject = line.match(/^([A-Za-z0-9_]+)\s*[?:]\s*\{\s*(.+?)\s*\}\s*;?$/);
    if (inlineObject) {
      const parent = inlineObject[1];
      const parentPath = pathFor(parent);
      const inherited = pending || parentComment();
      descriptions.set(parentPath, inherited);
      for (const inner of inlineObject[2].matchAll(/([A-Za-z0-9_]+)\s*[?:]/g)) {
        descriptions.set(`${parentPath}.${inner[1]}`, inherited);
      }
      descriptions.delete("__pending__");
      continue;
    }

    const openObject = line.match(/^([A-Za-z0-9_]+)\s*[?:]\s*\{$/);
    if (openObject) {
      stack.push({ key: openObject[1], comment: pending });
      descriptions.set(pathFor(openObject[1]), pending);
      descriptions.delete("__pending__");
      continue;
    }

    const leaf = line.match(/^([A-Za-z0-9_]+)\s*[?:]/);
    if (leaf) {
      descriptions.set(pathFor(leaf[1]), pending || parentComment());
      descriptions.delete("__pending__");
    }
  }

  descriptions.delete("__pending__");
  return descriptions;
}

function walkLeaves(
  value: unknown,
  path: string,
  output: Array<{ key: string; value: unknown }>,
): void {
  if (typeof value === "string" || typeof value === "function") {
    output.push({ key: path, value });
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      walkLeaves(child, path ? `${path}.${key}` : key, output);
    }
  }
}

function buildEntries(): Entry[] {
  const descriptions = readDescriptions();
  const leaves: Array<{ key: string; value: unknown }> = [];
  walkLeaves(ui[SOURCE_LOCALE], "", leaves);

  return leaves.map(({ key, value }) => {
    const variants = ENUM_VARIANTS[key];
    const values: Record<string, string | Record<string, string>> = {};

    let kind: Kind;
    if (typeof value === "string") {
      kind = "text";
      for (const locale of locales) {
        const localized = getByPath(ui[locale], key);
        values[locale] = typeof localized === "string" ? localized : "";
      }
    } else if (variants) {
      kind = "enum";
      for (const locale of locales) {
        const localized = getByPath(ui[locale], key);
        const result: Record<string, string> = {};
        if (typeof localized === "function") {
          for (const variant of variants) {
            result[variant] = invoke(localized as (...args: unknown[]) => unknown, [variant]) ?? "";
          }
        }
        values[locale] = result;
      }
    } else {
      kind = "template";
      const args = paramNames(value as (...args: unknown[]) => unknown).map((name) => `{${name}}`);
      for (const locale of locales) {
        const localized = getByPath(ui[locale], key);
        values[locale] =
          typeof localized === "function"
            ? invoke(localized as (...args: unknown[]) => unknown, args) ?? ""
            : "";
      }
    }

    const strings = Object.values(values).flatMap((entry) =>
      typeof entry === "string" ? [entry] : Object.values(entry),
    );
    const lengths: Record<string, number> = {};
    for (const locale of locales) {
      const entry = values[locale];
      lengths[locale] =
        typeof entry === "string"
          ? entry.length
          : Math.max(0, ...Object.values(entry).map((text) => text.length));
    }
    const sourceLength = lengths[SOURCE_LOCALE];
    const maxTargetLength = Math.max(
      0,
      ...locales.filter((locale) => locale !== SOURCE_LOCALE).map((locale) => lengths[locale]),
    );
    const riskLocales = locales.filter(
      (locale) =>
        locale !== SOURCE_LOCALE &&
        sourceLength > 0 &&
        lengths[locale] > sourceLength * 1.5,
    );

    const review: Record<string, string> = {};
    for (const locale of locales) review[locale] = locale === SOURCE_LOCALE ? "source" : "pending";

    return {
      key,
      kind,
      context: key.split(".")[0],
      description: descriptions.get(key) || CONTEXT_LABELS[key.split(".")[0]] || "",
      source: SOURCE_FILE,
      sourceLocale: SOURCE_LOCALE,
      values,
      placeholders: placeholdersIn(strings),
      lengths,
      riskLocales,
      sourceLength,
      maxTargetLength,
      lengthRatio: sourceLength ? Number((maxTargetLength / sourceLength).toFixed(2)) : 0,
      review,
    };
  });
}

function csvCell(value: unknown): string {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function collectFiles(dir: string): string[] {
  const files: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) files.push(...collectFiles(full));
    else if (/\.(ts|tsx)$/.test(name) && !name.endsWith(".d.ts")) files.push(full);
  }
  return files;
}

function scanHardcoded(): HardcodedHit[] {
  const hits: HardcodedHit[] = [];
  const roots = [join(ROOT, "src", "components"), join(ROOT, "src", "app")];
  const attribute = /\b(aria-label|placeholder|title)="([^"]*[A-Za-z][^"]*)"/g;
  for (const root of roots) {
    for (const file of collectFiles(root)) {
      const lines = readFileSync(file, "utf8").split("\n");
      lines.forEach((line, index) => {
        for (const match of line.matchAll(attribute)) {
          const value = match[2];
          if (value.includes("{") || value.startsWith("http")) continue;
          hits.push({
            file: relative(ROOT, file),
            line: index + 1,
            attribute: match[1],
            value,
          });
        }
      });
    }
  }
  return hits;
}

function reviewTable(entries: Entry[]): string {
  const lines = [
    "| 语言 | 条目 | 空值 | 占位符不一致 | 长度风险 (>1.5×) |",
    "|---|---|---|---|---|",
  ];
  for (const locale of locales) {
    const empty = entries.filter((entry) => {
      const value = entry.values[locale];
      return typeof value === "string" ? !value.trim() : Object.values(value).some((item) => !item.trim());
    }).length;
    const placeholderIssues = entries.filter((entry) => {
      const value = entry.values[locale];
      const strings = typeof value === "string" ? [value] : Object.values(value);
      const found = placeholdersIn(strings);
      return found.join("|") !== entry.placeholders.join("|");
    }).length;
    const lengthRisks = entries.filter((entry) => entry.riskLocales.includes(locale)).length;
    lines.push(
      `| ${localeNames[locale]} (\`${locale}\`) | ${entries.length} | ${empty} | ${placeholderIssues} | ${lengthRisks} |`,
    );
  }
  return lines.join("\n");
}

function duplicateTable(entries: Entry[]): string {
  const groups = new Map<string, string[]>();
  for (const entry of entries) {
    const value = entry.values[SOURCE_LOCALE];
    const text = typeof value === "string" ? value : "";
    if (!text) continue;
    groups.set(text, [...(groups.get(text) ?? []), entry.key]);
  }
  const rows = [...groups.entries()]
    .filter(([, keys]) => keys.length > 1)
    .sort((a, b) => b[1].length - a[1].length);
  if (!rows.length) return "无。";
  return [
    "| 英文 | 出现的 key |",
    "|---|---|",
    ...rows.map(([text, keys]) => `| ${text.replace(/\|/g, "\\|")} | ${keys.join(", ")} |`),
  ].join("\n");
}

function lengthTable(entries: Entry[]): string {
  const rows = entries
    .filter((entry) => entry.riskLocales.length > 0)
    .sort((a, b) => b.lengthRatio - a.lengthRatio);
  if (!rows.length) return "无。";
  return [
    "| key | en | es | pt-br | zh-cn | id | 超限语言 |",
    "|---|---|---|---|---|---|---|",
    ...rows.map(
      (entry) =>
        `| \`${entry.key}\` | ${entry.lengths.en} | ${entry.lengths.es} | ${entry.lengths["pt-br"]} | ${entry.lengths["zh-cn"]} | ${entry.lengths.id} | ${entry.riskLocales.join(", ")} |`,
    ),
  ].join("\n");
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  const entries = buildEntries();
  const hardcoded = scanHardcoded();
  const commit = (() => {
    try {
      return execFileSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
    } catch {
      return "unknown";
    }
  })();
  const generatedAt = new Date().toISOString();

  const payload = {
    schemaVersion: 1,
    generatedAt,
    sourceCommit: commit,
    source: SOURCE_FILE,
    sourceLocale: SOURCE_LOCALE,
    locales,
    counts: {
      entries: entries.length,
      text: entries.filter((entry) => entry.kind === "text").length,
      template: entries.filter((entry) => entry.kind === "template").length,
      enum: entries.filter((entry) => entry.kind === "enum").length,
    },
    entries,
  };
  writeFileSync(join(OUT_DIR, "ui-strings.json"), `${JSON.stringify(payload, null, 2)}\n`);

  const columns = [
    "key",
    "kind",
    "context",
    "description",
    "en",
    "es",
    "pt-br",
    "zh-cn",
    "id",
    "placeholders",
    "en_length",
    "length_es",
    "length_pt-br",
    "length_zh-cn",
    "length_id",
    "max_target_length",
    "length_ratio",
    "risk_locales",
    "review_es",
    "review_pt_br",
    "review_zh_cn",
    "review_id",
  ];
  const rows = entries.map((entry) => [
    entry.key,
    entry.kind,
    entry.context,
    entry.description,
    entry.values.en,
    entry.values.es,
    entry.values["pt-br"],
    entry.values["zh-cn"],
    entry.values.id,
    entry.placeholders.join(" "),
    String(entry.lengths.en),
    String(entry.lengths.es),
    String(entry.lengths["pt-br"]),
    String(entry.lengths["zh-cn"]),
    String(entry.lengths.id),
    String(entry.maxTargetLength),
    String(entry.lengthRatio),
    entry.riskLocales.join(" "),
    entry.review.es,
    entry.review["pt-br"],
    entry.review["zh-cn"],
    entry.review.id,
  ]);
  const csv = [columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  writeFileSync(join(OUT_DIR, "ui-strings.csv"), `\uFEFF${csv}\n`);

  const report = [
    "# UI 字典导出报告",
    "",
    `- 生成时间：${generatedAt}`,
    `- 源提交：\`${commit}\``,
    `- 源文件：\`${SOURCE_FILE}\`（唯一真源，导出文件只用于审核）`,
    `- 语言：${locales.map((locale) => `${localeNames[locale]} (\`${locale}\`)`).join("、")}`,
    "",
    "## 总量",
    "",
    `- 条目：${payload.counts.entries}（普通文本 ${payload.counts.text}、函数模板 ${payload.counts.template}、枚举 ${payload.counts.enum}）`,
    `- 翻译单元：${payload.counts.entries} × ${locales.length} = ${payload.counts.entries * locales.length}`,
    "",
    reviewTable(entries),
    "",
    "## 重复英文（同文案、不同 key，不能全局替换）",
    "",
    duplicateTable(entries),
    "",
    "## 长度风险（任一译文超过英文 1.5 倍）",
    "",
    lengthTable(entries),
    "",
    "## 字典外硬编码（aria-label / placeholder / title）",
    "",
    hardcoded.length
      ? [
          "| 文件 | 行 | 属性 | 值 |",
          "|---|---|---|---|",
          ...hardcoded.map(
            (hit) => `| \`${hit.file}\` | ${hit.line} | ${hit.attribute} | ${hit.value} |`,
          ),
        ].join("\n")
      : "无。",
    "",
    "## 说明",
    "",
    "- 所有非英文条目的 `review` 均为 `pending`，未经人工审核不得标记为 `approved`。",
    "- `template` 条目由函数调用还原，占位符形如 `{name}`、`{count}`；翻译时必须保留。",
    "- `enum` 条目按固定取值导出，不是可自由翻译的句子。",
    "- 页面内容与 SEO 文案不在本字典范围内（第二阶段单独导出）。",
    "",
  ].join("\n");
  writeFileSync(join(OUT_DIR, "ui-strings.report.md"), report);

  console.log(
    `Wrote ${entries.length} entries (${payload.counts.text} text, ${payload.counts.template} template, ${payload.counts.enum} enum) to ${relative(ROOT, OUT_DIR)}/`,
  );
  console.log(`Hardcoded UI attributes found: ${hardcoded.length}`);
}

main();
