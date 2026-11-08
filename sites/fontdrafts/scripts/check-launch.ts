// 上线前一致性校验:
// 1. 每个样式页 styleIds ≥ 10(花式昵称页除外,它走 CJK 网格)
// 2. 每个平台页的 en styleIds ≥ 10
// 3. 每个样式/平台页都有 EN 文案(页面先出英文,迁移页首版仅英文)
// 4. 旧站迁移的 18 个落地页 slug 确实在注册表里
// 5. 重定向目标(legacyPathChanges)都能解析到真实页面
// 6. 引擎新样式可转换
// 用法:npx tsx scripts/check-launch.ts

import { blankSpaceEn, symbolsEn } from "../src/lib/content/tools-en";
import { PLATFORM_GROUPS, STYLE_GROUPS } from "../src/lib/hubs";
import { platformPages } from "../src/lib/platform-pages";
import { stylePages } from "../src/lib/style-pages";
import { convertText, getStyle, textStyles } from "../src/lib/text-styles";
import { styleCategories } from "../src/lib/text-styles";
import { getGuide, guidesFor } from "../src/lib/guides";
import { ACTIVE_LOCALES } from "../src/lib/i18n";

let failures = 0;
const fail = (msg: string) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg: string) => console.log(`  ✓ ${msg}`);

console.log("— 引擎每分类 ≥10 —");
const catCount = new Map<string, number>();
for (const s of textStyles) catCount.set(s.category, (catCount.get(s.category) ?? 0) + 1);
for (const c of styleCategories) {
  const n = catCount.get(c.id) ?? 0;
  if (n >= 20) ok(`${c.id}: ${n}`);
  else fail(`${c.id}: 只有 ${n} 种`);
}

console.log("— 样式页 = 全目录(精选置顶,分类筛选有货)—");
for (const page of stylePages) {
  if (page.extraCjk) {
    ok(`${page.slug}: CJK 网格页,跳过 (${page.styleIds.length} latin)`);
    continue;
  }
  if (page.styleIds.length === textStyles.length && page.styleIds.length >= 10) ok(`${page.slug}: ${page.styleIds.length}`);
  else fail(`${page.slug}: styleIds ${page.styleIds.length},应为全目录 ${textStyles.length}`);
}

console.log("— 平台页 styleIds ≥ 10(按可用语言)—");
for (const page of platformPages) {
  const available = Object.keys(page.copy) as (keyof typeof page.styleIds)[];
  const checked: string[] = [];
  let bad = false;
  for (const locale of available) {
    const n = page.styleIds[locale]?.length ?? 0;
    checked.push(`${locale}:${n}`);
    if (n !== textStyles.length) bad = true;
  }
  if (available.length === 0) fail(`${page.slug}: 无可用语言`);
  else if (bad) fail(`${page.slug}: ${checked.join(" ")}`);
  else ok(`${page.slug}: ${checked.join(" ")}`);
}

console.log("— 文案齐备(每页至少一个语言;zh-only 除外)—");
const localesOf = (copy: Record<string, unknown>) => Object.keys(copy);
for (const page of stylePages) {
  const ls = localesOf(page.copy);
  if (ls.length === 0) fail(`style ${page.slug}: 无任何语言文案`);
  else if (!page.copy.en && ls.length === 1 && ls[0] === "zh-cn") ok(`${page.slug}: zh-only(设计内)`);
  else if (!page.copy.en) fail(`style ${page.slug}: 缺 EN 文案`);
}
for (const page of platformPages) {
  const ls = localesOf(page.copy);
  if (ls.length === 0) fail(`platform ${page.slug}: 无任何语言文案`);
  else if (!page.copy.en && ls.every((l) => l === "zh-cn")) ok(`${page.slug}: zh-only(设计内)`);
  else if (!page.copy.en) ok(`${page.slug}: 无 EN,${ls.join("+")} 专属(设计内)`);
}
if (symbolsEn.faq.length >= 6 && blankSpaceEn.faq.length >= 6) ok("symbols/blank-space 文案+FAQ 6 问");
else fail("symbols/blank-space FAQ 不足 6 问");

console.log("— 迁移落地页 slug 存在 —");
const migratedEnOnly = [
  "adopt-me-fonts",
  "berry-avenue-fonts",
  "cod-name-generator",
  "fortnite-name-generator",
  "facebook-fonts",
  "youtube-fonts",
  "symbols",
  "blank-space",
  "cool-font-generator",
  "elegant-font-generator",
  "dark-font-generator",
  "heart-font-generator",
  "coquette-font-generator",
  "chicano-font-generator",
  "preppy-font-generator",
  "crazy-font-generator",
  "italic-text-generator",
  "tiny-text-generator",
];
const styleSlugs = new Set(stylePages.map((p) => p.slug));
const platformSlugs = new Set(platformPages.map((p) => p.slug));
const toolSlugs = new Set(["symbols", "blank-space"]);
for (const slug of migratedEnOnly) {
  if (styleSlugs.has(slug) || platformSlugs.has(slug) || toolSlugs.has(slug)) ok(slug);
  else fail(`${slug}: 不在任何注册表`);
}

console.log("— 重定向目标可解析 —");
// 与 next.config.ts legacyPathChanges 保持同步(那边不能 import 应用层注册表)。
const legacyDestinations: [string, string][] = [
  ["/fancy-text-generator", "/"],
  ["/gaming-name-generator", "/game-name-generator/"],
  ["/mcp", "/"],
  ["/cursive-text-generator", "/cursive-fonts/"],
  ["/gothic-text-generator", "/gothic-fonts/"],
  ["/bold-text-generator", "/bold-fonts/"],
  ["/bubble-letters-generator", "/bubble-fonts/"],
  ["/small-caps-generator", "/small-fonts/"],
  ["/strikethrough-text-generator", "/strikethrough-text/"],
  ["/glitch-text-generator", "/zalgo-text/"],
  ["/upside-down-text-generator", "/upside-down-text/"],
  ["/aesthetic-text-generator", "/aesthetic-fonts/"],
  ["/cute-font-generator", "/cute-fonts/"],
];
const legalPaths = new Set(["/", "/about/", "/contact/", "/privacy/", "/terms/"]);
for (const [from, to] of legacyDestinations) {
  const destSlug = to.replaceAll("/", "");
  if (legalPaths.has(to) || styleSlugs.has(destSlug) || platformSlugs.has(destSlug)) ok(`${from} -> ${to}`);
  else fail(`${from} -> ${to}: 目标不存在`);
}

console.log("— 引擎新样式 —");
const expected = 180;
if (textStyles.length === expected) ok(`引擎共 ${expected} 种样式`);
else fail(`引擎样式数 ${textStyles.length},期望 ${expected}`);
for (const id of ["sansBoldItalic", "negativeCircled", "negativeSquared", "spaced"] as const) {
  const style = getStyle(id);
  const out = convertText("Ab9", id);
  if (style && out !== "Ab9" && [...out].length > 0) ok(`${id}: "${out}"`);
  else fail(`${id}: 转换异常`);
}

console.log("— Hub 分组覆盖(每页恰好一组)—");
const styleCoverage = new Map<string, number>();
for (const group of STYLE_GROUPS) for (const slug of group.slugs) styleCoverage.set(slug, (styleCoverage.get(slug) ?? 0) + 1);
for (const page of stylePages) {
  const n = styleCoverage.get(page.slug) ?? 0;
  if (n === 1) ok(`${page.slug}: styles hub 覆盖`);
  else fail(`${page.slug}: hub 覆盖 ${n} 次`);
}
const platformCoverage = new Map<string, number>();
for (const group of PLATFORM_GROUPS) for (const slug of group.slugs) platformCoverage.set(slug, (platformCoverage.get(slug) ?? 0) + 1);
for (const page of platformPages) {
  const n = platformCoverage.get(page.slug) ?? 0;
  if (n === 1) ok(`${page.slug}: platforms hub 覆盖`);
  else fail(`${page.slug}: hub 覆盖 ${n} 次`);
}

console.log("— 迁移页相关链接可解析 —");
for (const page of stylePages) {
  for (const slug of page.related) {
    if (!styleSlugs.has(slug) && !platformSlugs.has(slug)) fail(`${page.slug}.related: ${slug} 不存在`);
  }
}

if (getGuide("en", "what-are-unicode-fonts")) ok("指南注册表可查询");
else fail("指南注册表查询失败");

console.log("— 指南↔工具内链覆盖 —");
const PAGE_PREFIX: Record<string, string> = { en: "", "zh-cn": "/zh", es: "/es", "pt-br": "/pt-br", de: "/de" };
const TOOL_PAGES = new Set(["symbols", "blank-space"]); // 仅英文的工具页
for (const locale of ACTIVE_LOCALES) {
  const guides = guidesFor(locale);
  const knownPages = new Set([
    ...stylePages.filter((p2) => p2.copy[locale]).map((p2) => p2.slug),
    ...platformPages.filter((p2) => p2.copy[locale]).map((p2) => p2.slug),
  ]);
  const allPages = [...stylePages, ...platformPages].filter((p2) => p2.copy[locale]);
  // 每个工具页 ≥1 篇指南反链(en 硬校验;其他语言软提示)
  let zeroLinked = 0;
  for (const page of allPages) {
    const n = guides.filter((g) => g.appearOn.includes(page.slug)).length;
    if (n === 0) {
      zeroLinked += 1;
      if (locale === "en") fail(`${page.slug}: en 无指南反链`);
    }
  }
  if (locale !== "en" && zeroLinked > 0) console.log(`  ⚠ ${locale}: ${zeroLinked} 个页面暂无指南反链(待补语言文章)`);
  // relatedTools:目标存在 + 对称(appearOn 应含本篇)
  for (const g of guides) {
    if (g.relatedTools.length > 4) fail(`guide ${g.slug}: relatedTools 超过 4 个`);
    for (const rt of g.relatedTools) {
      const slug = rt.href.replace(PAGE_PREFIX[locale], "").replaceAll("/", "");
      if (!knownPages.has(slug) && !(locale === "en" && TOOL_PAGES.has(slug))) {
        fail(`guide ${g.slug} relatedTools: 目标 ${rt.href} 在 ${locale} 不存在`);
      } else if (!g.appearOn.includes(slug)) {
        fail(`guide ${g.slug}: relatedTools 指向 ${slug} 但 appearOn 未含(不对称)`);
      }
    }
    // 行内链接语法目标校验
    for (const sec of g.sections) {
      for (const para of sec.paragraphs ?? []) {
        for (const m of para.matchAll(/\]\((\/[^)]+\/)\)/g)) {
          const slug = m[1].replace(PAGE_PREFIX[locale], "").replaceAll("/", "");
          if (!knownPages.has(slug) && !(locale === "en" && TOOL_PAGES.has(slug))) {
            fail(`guide ${g.slug} 正文内链: 目标 ${m[1]} 在 ${locale} 不存在`);
          }
        }
      }
    }
  }
}
ok("内链图校验完成");

console.log(failures === 0 ? "\n全部通过 ✓" : `\n${failures} 项失败 ✗`);
process.exit(failures === 0 ? 0 : 1);
