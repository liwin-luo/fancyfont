import { describe, expect, it } from "vitest";
import { composeBio } from "@/lib/bio";
import { locales } from "@/lib/i18n";
import { platformPages } from "@/lib/platform-pages";
import { previewExtraMax } from "@/lib/platform-rules";

describe("composeBio", () => {
  it("styles the draft and appends the board without dropping characters", () => {
    expect(composeBio("A\n\nb", "bold", ["♥"], 150)).toEqual({
      text: "\u{1D400}\n\n\u{1D41B}♥",
      over: false,
    });
    const emoji = "❤️";
    const over = composeBio("A", "plain", [emoji], 1);
    expect(over.text).toBe(`A${emoji}`);
    expect(over.over).toBe(true);
    expect(composeBio("A\n\nb", "bold", ["♥"], 1).text).toBe("\u{1D400}\n\n\u{1D41B}♥");
  });
});

describe("bio drafts", () => {
  it("gives Instagram, TikTok and Discord three drafts in every locale", () => {
    const slugs = ["instagram-fonts", "tiktok-fonts", "discord-fonts"];
    for (const page of platformPages) {
      if (!slugs.includes(page.slug)) {
        expect(page.bioMode).toBeUndefined();
        continue;
      }
      expect(page.bioMode).toBe(true);
      expect(previewExtraMax(page.preview)).toEqual(expect.any(Number));
      for (const locale of locales) {
        expect(page.copy[locale].bios?.map((draft) => draft.id)).toEqual(["name", "line", "note"]);
        for (const draft of page.copy[locale].bios ?? []) {
          expect(draft.label.length).toBeGreaterThan(0);
          expect(draft.text.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
