// TDK 长度审计:扫全部页面 title/description,按 SERP 截断口径 ≤60/≤160。
// 运行:npx tsx scripts/audit-tdk.mjs
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const SRC = path.resolve(import.meta.dirname, "../src/lib");

// 用 tsx 载入内容模块(内容文件是 TS,先经 tsc 桥不便,这里直接以 tsx 子进程求值)
const EVAL = `
import { homeMetadata, hubMetadata, guideIndexMetadata } from "../src/app/_shared/handlers";
import { stylePages as routedStyles } from "../src/lib/style-pages";
import { platformPages as routedPlatforms } from "../src/lib/platform-pages";
import { guidesFor } from "../src/lib/guides";
import { symbolsEn, blankSpaceEn } from "../src/lib/content/tools-en";

const rows = [];
for (const p of routedStyles) {
  for (const [loc, c] of Object.entries(p.copy)) {
    rows.push({ group: "style", key: p.slug + ":" + loc, title: c.title, description: c.description });
  }
}
for (const p of routedPlatforms) {
  for (const [loc, c] of Object.entries(p.copy)) {
    rows.push({ group: "platform", key: p.slug + ":" + loc, title: c.title, description: c.description });
  }
}
const LOCALES = ["en", "es", "pt-br", "zh-cn", "de"];
for (const loc of LOCALES) {
  for (const g of guidesFor(loc)) {
    rows.push({ group: "guide", key: g.slug + ":" + g.locale, title: g.title, description: g.description });
  }
  const h = homeMetadata(loc);
  rows.push({ group: "home", key: loc, title: String(h.title), description: String(h.description) });
  for (const kind of ["styles", "platforms"]) {
    const hb = hubMetadata(loc, kind);
    rows.push({ group: "hub-" + kind, key: loc, title: String(hb.title), description: String(hb.description) });
  }
  const gi = guideIndexMetadata(loc);
  rows.push({ group: "guide-index", key: loc, title: String(gi.title), description: String(gi.description) });
}
rows.push({ group: "tools", key: "symbols", title: symbolsEn.meta.title, description: symbolsEn.meta.description });
rows.push({ group: "tools", key: "blank-space", title: blankSpaceEn.meta.title, description: blankSpaceEn.meta.description });
console.log(JSON.stringify(rows));
`;

const out = import.meta.dirname;
const probe = path.join(out, ".tdk-audit-probe.mts");
fs.writeFileSync(probe, EVAL);
const r = spawnSync("npx", ["-y", "tsx", probe], {
  cwd: SRC, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"],
});
fs.rmSync(probe, { force: true });
if (r.status !== 0) {
  console.error(r.stderr);
  process.exit(1);
}
const rows = JSON.parse(r.stdout.trim().split("\n").pop());

let bad = 0;
const seen = new Map();
for (const row of rows) {
  const tLen = row.title.length;
  const dLen = (row.description ?? "").length;
  const dupKey = row.group + "|" + row.title;
  seen.set(dupKey, (seen.get(dupKey) ?? 0) + 1);
  const issues = [];
  if (tLen > 60) issues.push(`title ${tLen}>60`);
  if (dLen > 160) issues.push(`desc ${dLen}>160`);
  // CJK 描述信息密度高,不按拉丁字符数下限卡(与旧站口径一致:F-06)
  const latin = !/[\u4e00-\u9fff]/.test(row.description ?? "");
  if (latin && (!row.description || dLen < 70)) issues.push(`desc too short(${dLen})`);
  if (issues.length) {
    bad++;
    console.log(`✗ [${row.group}] ${row.key}\n    T(${tLen}): ${row.title}\n    D(${dLen}): ${(row.description ?? "").slice(0, 180)}`);
    console.log("    ->", issues.join("; "));
  }
}
const dups = [...seen.entries()].filter(([, n]) => n > 1);
for (const [k, n] of dups) {
  bad++;
  console.log(`✗ 重复 title ×${n}: ${k}`);
}
console.log(`\n审计页面 meta ${rows.length} 条,违规 ${bad} 条`);
if (bad > 0) process.exit(2);
