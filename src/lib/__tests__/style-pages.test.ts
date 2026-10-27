import { describe, expect, it } from "vitest";
import { platformPages } from "@/lib/platform-pages";
import { convertText } from "@/lib/text-styles";
import { isLookPage, previewStylePage, stylePages } from "@/lib/style-pages";

describe("look pages", () => {
  const looks = stylePages.filter(isLookPage);

  it("keeps looks with disjoint decorations and a bare primary alphabet", () => {
    expect(looks.map((page) => page.slug)).toEqual([
      "cute-font-generator",
      "cool-font-generator",
      "dark-font-generator",
      "elegant-font-generator",
      "aesthetic-text-generator",
      "coquette-font-generator",
      "preppy-font-generator",
      "heart-font-generator",
      "chicano-font-generator",
    ]);

    const seen = new Set<string>();
    for (const page of looks) {
      expect(page.wrappers?.length).toBeGreaterThan(0);
      for (const wrapper of page.wrappers ?? []) {
        const key = wrapper.join("|");
        expect(seen.has(key)).toBe(false);
        seen.add(key);
      }
      for (const slug of page.related) {
        const known =
          stylePages.some((other) => other.slug === slug) || platformPages.some((other) => other.slug === slug);
        expect(known).toBe(true);
      }
    }

    expect(previewStylePage("Cute", looks[0])).toBe(`♡ ${convertText("Cute", "bubble")} ♡`);
    expect(previewStylePage("Cool", looks[1])).toBe(`⚡ ${convertText("Cool", "bold")} ⚡`);
    expect(previewStylePage("Dark", looks[2])).toContain(convertText("Dark", "boldFraktur"));
    expect(previewStylePage("Rose", looks[3])).toContain(convertText("Rose", "boldScript"));
    expect(previewStylePage("aesthetic", looks[4])).toContain(convertText("aesthetic", "fullwidth"));
    expect(previewStylePage("Mia", looks[5])).toBe(`𐙚 ${convertText("Mia", "boldScript")} 𐙚`);
    expect(previewStylePage("Belle", looks[5])).not.toContain("\u212F");
    expect(previewStylePage("Mila", looks[6])).toBe(`🤍 ${convertText("Mila", "smallCaps")} 🤍`);
    const heart = looks[7];
    expect(heart.wrappers?.length).toBeGreaterThanOrEqual(10);
    expect(previewStylePage("Love", heart)).toBe(`❤ ${convertText("Love", "boldScript")} ❤`);
    const chicano = looks[8];
    expect(chicano.wrappers?.length).toBeGreaterThanOrEqual(10);
    expect(previewStylePage("Rosa", chicano)).toBe(`✠ ${convertText("Rosa", "fraktur")} ✠`);

    const previews = looks.map((page) => previewStylePage("Name", page));
    expect(new Set(previews).size).toBe(looks.length);
  });

  it("leaves letter pages undecorated", () => {
    const letters = stylePages.filter((page) => !isLookPage(page));
    expect(letters.map((page) => page.slug)).toContain("cursive-text-generator");
    expect(letters.map((page) => page.slug)).not.toContain("cute-font-generator");
    for (const page of letters) {
      expect(page.wrappers).toBeUndefined();
      expect(previewStylePage("Name", page)).toBe(convertText("Name", page.styleIds[0]));
    }
  });
});
