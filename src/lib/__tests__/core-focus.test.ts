import { describe, expect, it } from "vitest";
import { coreFocus, corePages } from "@/lib/content/core-focus";
import { homeContent } from "@/lib/content/page-home";
import { locales } from "@/lib/i18n";

describe("core page focus", () => {
  it("gives every core page one sentence in every locale", () => {
    for (const locale of locales) {
      for (const page of corePages) {
        expect(coreFocus[locale][page].length).toBeGreaterThan(20);
      }
      const joined = corePages.map((page) => coreFocus[locale][page]).join("\n");
      expect(joined.toLowerCase()).not.toMatch(/will work|guaranteed/);
      expect(joined).not.toContain("已验证");
    }
    expect(coreFocus.en["pubg-name-generator"]).toContain("16");
    expect(coreFocus.en["free-fire-name-generator"]).toContain("12");
    expect(coreFocus.en["free-fire-name-generator"].toLowerCase()).not.toContain("pubg");
    expect(coreFocus.en["pubg-name-generator"]).not.toContain("12");
  });

  it("names the three homepage jobs in the new hero", () => {
    expect(homeContent.en.hero.pre).toBe("Fancy Font Generator");
    expect(homeContent.en.hero.accent).toBe("Stylish Text, Names & Symbols");
    expect(homeContent.en.hero.sub).toContain("stylish Unicode text");
    expect(homeContent.en.hero.sub).toContain("gaming name");
    expect(homeContent.en.hero.sub).toContain("symbol");
    expect(homeContent.es.hero.sub).toContain("nombre gamer");
    expect(homeContent["pt-br"].hero.sub).toContain("nome de jogo");
    expect(homeContent["zh-cn"].hero.sub).toContain("游戏昵称");
    expect(homeContent.id.hero.sub).toContain("nama game");
  });
});
