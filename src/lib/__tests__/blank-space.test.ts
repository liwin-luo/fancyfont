import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  COPY_LENGTHS,
  GAP_MAX,
  codePointLength,
  repeatBlank,
  withBlankGaps,
} from "@/lib/blank-space";
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { locales } from "@/lib/i18n";
import { convertText } from "@/lib/text-styles";

const HANGUL = "\u3164";

describe("blank gaps", () => {
  it("count 0 keeps the styled text, including spaces", () => {
    const styled = convertText("Lu na", "bold");
    expect(withBlankGaps(styled, HANGUL, 0)).toBe(styled);
  });

  it("inserts the blank between letters and drops a typed space", () => {
    const tight = withBlankGaps(convertText("Luna", "bold"), HANGUL, 1);
    const spaced = withBlankGaps(convertText("Lu na", "bold"), HANGUL, 1);
    expect(spaced).toBe(tight);
    expect([...tight].filter((ch) => ch === HANGUL)).toHaveLength(3);
    expect(codePointLength(withBlankGaps(convertText("Luna", "bold"), HANGUL, 3))).toBe(13);
  });

  it("drops a fullwidth-style space the same way", () => {
    const tight = withBlankGaps(convertText("AB", "fullwidth"), HANGUL, 1);
    const spaced = withBlankGaps(convertText("A B", "fullwidth"), HANGUL, 1);
    expect(spaced).toBe(tight);
  });

  it("keeps a strikethrough mark on the letter", () => {
    const out = withBlankGaps(convertText("Ab", "strike"), HANGUL, 1);
    const parts = [...new Intl.Segmenter().segment(out)].map((part) => part.segment);
    expect(parts).toEqual(["A\u0336", HANGUL, "b\u0336"]);
  });

  it("copies 1, a line of 20, or a block of 100", () => {
    expect(COPY_LENGTHS).toEqual([1, 20, 100]);
    expect(codePointLength(repeatBlank("\u2800", 20))).toBe(20);
    expect(GAP_MAX).toBe(5);
  });
});

describe("blank space page", () => {
  it("has copy in every locale and a sitemap URL per locale", () => {
    for (const locale of locales) {
      const copy = blankSpaceContent[locale];
      expect(copy.h1.length).toBeGreaterThan(0);
      expect(copy.meta.title.startsWith(copy.h1)).toBe(true);
      expect(copy.faq.length).toBeGreaterThanOrEqual(3);
      expect(copy.related.map((link) => link.path)).toEqual([
        "/fancy-text-generator/",
        "/symbols/",
      ]);
    }
    const entries = sitemap().filter((entry) => entry.url.includes("/blank-space/"));
    expect(entries).toHaveLength(locales.length);
  });
});
