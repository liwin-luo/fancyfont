// 示例区块守卫:2026-11-10 周维护新增的一键复制示例区,数量与长度达标。
// Berry Avenue 的显示名上限口径是页面已声明的 ~20 字符(Roblox 3–20),
// 所以所有示例按码点数 ≤20 校验(每个符号按 1 个码点算)。
import { describe, expect, it } from "vitest";
import { getPlatformPage, type PlatformPageCopy } from "@/lib/platform-pages";
import { getStylePage, type StylePageCopy } from "@/lib/style-pages";
import type { Locale } from "@/lib/i18n";

type CopyGroups = NonNullable<PlatformPageCopy["copyGroups"] | StylePageCopy["copyGroups"]>;

function flatItems(copyGroups: CopyGroups | undefined): string[] {
  return (copyGroups ?? []).flatMap((group) => group.groups.flatMap((sub) => sub.items));
}

function codePoints(text: string): number {
  return [...text].length;
}

describe("Berry Avenue 示例区(EN/ES/PT-BR 同步)", () => {
  const page = getPlatformPage("berry-avenue-fonts")!;
  for (const locale of ["en", "es", "pt-br"] as Locale[]) {
    it(`${locale}: 示例 ≥15 个、四个分组,每个 ≤20 码点(显示名口径)`, () => {
      const copy = page.copy[locale]!;
      expect(copy.copyGroups).toHaveLength(1);
      expect(copy.copyGroups![0].groups).toHaveLength(4);
      const items = flatItems(copy.copyGroups);
      expect(items.length).toBeGreaterThanOrEqual(15);
      expect(items.filter((item) => codePoints(item) > 20)).toEqual([]);
    });
    it(`${locale}: 字段对照表 4 行 × 3 列`, () => {
      const table = page.copy[locale]!.fieldTable;
      expect(table).toBeDefined();
      expect(table!.columns).toHaveLength(3);
      expect(table!.rows).toHaveLength(4);
      for (const row of table!.rows) expect(row).toHaveLength(3);
    });
  }
});

describe("西语样式页示例区", () => {
  it("coquette:符号/emoji 组合 ≥12 个", () => {
    const copy = getStylePage("coquette-font-generator")!.copy.es!;
    expect(copy.copyGroups).toHaveLength(1);
    expect(flatItems(copy.copyGroups).length).toBeGreaterThanOrEqual(12);
  });
  it("preppy:Adopt Me/Roblox/TikTok 示例 ≥10 个,每个 ≤20 码点", () => {
    const copy = getStylePage("preppy-font-generator")!.copy.es!;
    expect(copy.copyGroups).toHaveLength(1);
    const items = flatItems(copy.copyGroups);
    expect(items.length).toBeGreaterThanOrEqual(10);
    expect(items.filter((item) => codePoints(item) > 20)).toEqual([]);
  });
  it("preppy 相关卡片含 coquette 与 chicana", () => {
    const related = getStylePage("preppy-font-generator")!.related;
    expect(related).toContain("coquette-font-generator");
    expect(related).toContain("chicano-font-generator");
  });
});

describe("PUBG clan tag & symbol ideas", () => {
  it("可复制符号 + 示例 ≥12 个", () => {
    const copy = getPlatformPage("pubg-name-generator")!.copy.en!;
    expect(copy.copyGroups).toHaveLength(1);
    expect(flatItems(copy.copyGroups).length).toBeGreaterThanOrEqual(12);
  });
});
