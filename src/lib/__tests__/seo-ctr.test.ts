import { describe, expect, it } from "vitest";
import { faqJsonLd } from "@/components/sections";
import { coquetteCopyExamples } from "@/lib/coquette-examples";
import { gamingContent } from "@/lib/content/page-gaming";
import { localePath, type Locale } from "@/lib/i18n";
import { measureText } from "@/lib/measure";
import { buildCustomNickname, type CustomCombo } from "@/lib/nickname";
import { getPlatformPage } from "@/lib/platform-pages";
import { previewNameMax } from "@/lib/platform-rules";
import { resolvedStyleTitle } from "@/lib/serp-title";
import { getStylePage } from "@/lib/style-pages";

function titleBudget(title: string): [number, number] {
  // Ideographs are about twice as wide as Latin letters in a Google title.
  return /[\u3400-\u9fff]/.test(title) ? [24, 36] : [50, 60];
}

function expectVisibleFaq(items: { q: string; a: string }[]) {
  const data = faqJsonLd(items);
  expect(data["@type"]).toBe("FAQPage");
  expect(data.mainEntity.map((entry) => entry.name)).toEqual(items.map((item) => item.q));
  expect(data.mainEntity.map((entry) => entry.acceptedAnswer.text)).toEqual(items.map((item) => item.a));
}

describe("strike-zone titles, FAQ, and above-the-fold modules", () => {
  const berryLocales: Locale[] = ["en", "es", "pt-br", "zh-cn", "id"];

  it("keeps the rewritten titles inside the SERP budget and distinct", () => {
    const titles: string[] = [];
    const berry = getPlatformPage("en", "berry-avenue-fonts");
    expect(berry).toBeDefined();
    for (const locale of berryLocales) {
      const copy = berry!.copy[locale];
      titles.push(copy.title);
      expect(copy.h1.length).toBeGreaterThan(0);
      expect(copy.h1).not.toBe(copy.title);
      expect(copy.pinnedPreview?.approxNote.length).toBeGreaterThan(0);
      expect(copy.pinnedPreview?.signNote).not.toMatch(/\d/);
      expectVisibleFaq(copy.faq);
    }

    const esCoquette = getStylePage("es", "coquette-font-generator")!.copy.es;
    const ptCoquette = getStylePage("pt-br", "coquette-font-generator")!.copy["pt-br"];
    const zhCursive = getStylePage("zh-cn", "cursive-text-generator")!.copy["zh-cn"];
    const ptCod = getPlatformPage("pt-br", "cod-name-generator")!.copy["pt-br"];
    const enCoquette = getStylePage("en", "coquette-font-generator")!.copy.en;
    titles.push(
      resolvedStyleTitle(enCoquette, "coquette-font-generator", "en"),
      resolvedStyleTitle(esCoquette, "coquette-font-generator", "es"),
      resolvedStyleTitle(ptCoquette, "coquette-font-generator", "pt-br"),
      resolvedStyleTitle(zhCursive, "cursive-text-generator", "zh-cn"),
      ptCod.title,
    );
    expect(enCoquette.title).toBe("Coquette Font Generator — Copy Paste Ribbon Letters");
    expect(resolvedStyleTitle(enCoquette, "coquette-font-generator", "en")).toBe(enCoquette.title);
    expect(resolvedStyleTitle(esCoquette, "coquette-font-generator", "es")).toBe(esCoquette.title);
    expect(getPlatformPage("en", "berry-avenue-fonts")!.copy.en.title).toBe(
      "Berry Avenue Fonts — Free Copy & Paste (~20 Chars)",
    );
    expect(getPlatformPage("es", "berry-avenue-fonts")!.copy.es.title).toBe(
      "Fuentes Berry Avenue — copia y pega el nombre (~20)",
    );
    expect(getPlatformPage("pt-br", "berry-avenue-fonts")!.copy["pt-br"].title).toBe(
      "Fontes para Berry Avenue — copie grátis (~20 chars)",
    );
    expect(esCoquette.title).toBe("Letras coquette para copiar y pegar — lazo en bios");
    expect(ptCoquette.title).toBe("Letras coquette para copiar e colar — laço na bios");
    expectVisibleFaq(esCoquette.faq);
    expectVisibleFaq(ptCoquette.faq);
    expectVisibleFaq(zhCursive.faq);
    expectVisibleFaq(ptCod.faq);

    for (const title of titles) {
      const [min, max] = titleBudget(title);
      expect(title.length, title).toBeGreaterThanOrEqual(min);
      expect(title.length, title).toBeLessThanOrEqual(max);
    }
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("counts the Berry display name in graphemes against the approximate ceiling", () => {
    expect(typeof Intl.Segmenter).toBe("function");
    expect(measureText("🎀").graphemes).toBe(1);
    expect("🎀".length).toBe(2);

    const page = getPlatformPage("en", "berry-avenue-fonts")!;
    const preset = page.copy.en.presets[0] as CustomCombo;
    const fitted = buildCustomNickname(page.copy.en.defaultText, preset);
    expect(measureText(fitted).graphemes).toBeLessThanOrEqual(previewNameMax("roblox"));
    const crowded = buildCustomNickname("SuperLongBerryName", preset);
    expect(measureText(crowded).graphemes).toBeGreaterThan(previewNameMax("roblox"));
    expect(page.copy.en.pinnedPreview?.counter).toContain("~{max}");
  });

  it("puts bow examples only on the Spanish and Brazilian coquette pages", () => {
    expect(coquetteCopyExamples.length).toBeGreaterThanOrEqual(6);
    expect(coquetteCopyExamples.length).toBeLessThanOrEqual(12);
    expect(new Set(coquetteCopyExamples).size).toBe(coquetteCopyExamples.length);
    for (const example of coquetteCopyExamples) expect(example).toContain("🎀");

    expect(getStylePage("es", "coquette-font-generator")!.copy.es.copyExamples).toEqual(coquetteCopyExamples);
    expect(getStylePage("pt-br", "coquette-font-generator")!.copy["pt-br"].copyExamples).toEqual(
      coquetteCopyExamples,
    );
    expect(getStylePage("en", "coquette-font-generator")!.copy.en.copyExamples).toBeUndefined();
    expect(getStylePage("zh-cn", "coquette-font-generator")!.copy["zh-cn"].copyExamples).toBeUndefined();
    expect(getStylePage("id", "coquette-font-generator")!.copy.id.copyExamples).toBeUndefined();
  });

  it("links the Spanish gaming hub only to platform pages that exist", () => {
    expect(gamingContent.en.hub).toBeUndefined();
    expect(gamingContent["pt-br"].hub).toBeUndefined();
    const hub = gamingContent.es.hub;
    expect(hub?.cards.map((card) => card.slug)).toEqual([
      "cod-name-generator",
      "pubg-name-generator",
      "free-fire-name-generator",
      "roblox-name-generator",
    ]);
    for (const card of hub?.cards ?? []) {
      expect(getPlatformPage("es", card.slug)?.slug).toBe(card.slug);
      expect(localePath("es", `/${card.slug}/`)).toBe(`/es/${card.slug}/`);
    }
  });
});
