// TDK 预算门禁:所有页面 title ≤60 / description ≤160(SERP 截断口径),
// title 全站唯一。口径依据 SERP 竞品分析 FONT-TDK-06;与 scripts/audit-tdk.mjs 同源。
// CJK 描述不按拉丁字符数设下限(信息密度高,见旧站口径 F-06)。
import { describe, expect, it } from "vitest";
import { homeMetadata, hubMetadata, guideIndexMetadata } from "@/app/_shared/handlers";
import { stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";
import { guidesFor } from "@/lib/guides";
import { symbolsEn, blankSpaceEn } from "@/lib/content/tools-en";
import { locales, type Locale } from "@/lib/i18n";

interface Row {
  group: string;
  key: string;
  title: string;
  description: string;
}

function collect(): Row[] {
  const rows: Row[] = [];
  for (const p of stylePages) {
    for (const [loc, c] of Object.entries(p.copy)) {
      rows.push({ group: "style", key: `${p.slug}:${loc}`, title: c.title, description: c.description });
    }
  }
  for (const p of platformPages) {
    for (const [loc, c] of Object.entries(p.copy)) {
      rows.push({ group: "platform", key: `${p.slug}:${loc}`, title: c.title, description: c.description });
    }
  }
  for (const loc of locales) {
    for (const g of guidesFor(loc)) {
      rows.push({ group: "guide", key: `${g.slug}:${g.locale}`, title: g.title, description: g.description });
    }
    const h = homeMetadata(loc);
    rows.push({ group: "home", key: loc, title: String(h.title), description: String(h.description) });
    for (const kind of ["styles", "platforms"] as const) {
      const hb = hubMetadata(loc, kind);
      rows.push({ group: `hub-${kind}`, key: loc, title: String(hb.title), description: String(hb.description) });
    }
    const gi = guideIndexMetadata(loc);
    rows.push({ group: "guide-index", key: loc, title: String(gi.title), description: String(gi.description) });
  }
  rows.push({ group: "tools", key: "symbols", title: symbolsEn.meta.title, description: symbolsEn.meta.description });
  rows.push({ group: "tools", key: "blank-space", title: blankSpaceEn.meta.title, description: blankSpaceEn.meta.description });
  return rows;
}

describe("TDK 预算(FONT-TDK-06)", () => {
  const rows = collect();

  it("页面 meta 数量合理(风格+平台+指南+hubs+特殊页)", () => {
    expect(rows.length).toBeGreaterThanOrEqual(190);
  });

  it("所有 title ≤60 字符", () => {
    const bad = rows.filter((r) => r.title.length > 60);
    expect(bad.map((r) => `${r.key} (${r.title.length})`)).toEqual([]);
  });

  it("所有 description ≤160 字符", () => {
    const bad = rows.filter((r) => r.description.length > 160);
    expect(bad.map((r) => `${r.key} (${r.description.length})`)).toEqual([]);
  });

  it("拉丁语种 description ≥70 字符(CJK 豁免)", () => {
    const bad = rows.filter(
      (r) => !/[\u4e00-\u9fff]/.test(r.description) && r.description.length < 70,
    );
    expect(bad.map((r) => `${r.key} (${r.description.length})`)).toEqual([]);
  });

  it("title 全站唯一(同 locale 内不重复)", () => {
    const seen = new Map<string, number>();
    for (const r of rows) seen.set(`${r.title}`, (seen.get(r.title) ?? 0) + 1);
    const dups = [...seen.entries()].filter(([, n]) => n > 1);
    expect(dups).toEqual([]);
  });
});
