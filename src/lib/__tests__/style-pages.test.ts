import { describe, expect, it } from "vitest";
import { convertText } from "@/lib/text-styles";
import { isLookPage, previewStylePage, stylePages } from "@/lib/style-pages";

describe("look pages", () => {
  const looks = stylePages.filter(isLookPage);

  it("keeps five looks with disjoint decorations and a bare primary alphabet", () => {
    expect(looks.map((page) => page.slug)).toEqual([
      "cute-font-generator",
      "cool-font-generator",
      "dark-font-generator",
      "elegant-font-generator",
      "aesthetic-text-generator",
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
        expect(stylePages.some((other) => other.slug === slug)).toBe(true);
      }
    }

    expect(previewStylePage("Cute", looks[0])).toBe(`♡ ${convertText("Cute", "bubble")} ♡`);
    expect(previewStylePage("Cool", looks[1])).toBe(`⚡ ${convertText("Cool", "bold")} ⚡`);
    expect(previewStylePage("Dark", looks[2])).toContain(convertText("Dark", "boldFraktur"));
    expect(previewStylePage("Rose", looks[3])).toContain(convertText("Rose", "boldScript"));
    expect(previewStylePage("aesthetic", looks[4])).toContain(convertText("aesthetic", "fullwidth"));

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
