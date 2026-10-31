import { describe, expect, it, vi } from "vitest";
import { measurementIds, track, type AnalyticsParams } from "@/lib/analytics";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { locales } from "@/lib/i18n";

type AssertNoText = "text" extends keyof AnalyticsParams ? never : true;
const _noText: AssertNoText = true;

describe("track", () => {
  it("does nothing when gtag is missing", () => {
    vi.stubGlobal("window", { location: { pathname: "/fancy-text-generator/" } });
    expect(() => track("fancy_text_view", { tool: "fancy" })).not.toThrow();
    vi.unstubAllGlobals();
  });

  it("forwards only allowlisted fields and drops typed text", () => {
    const calls: unknown[][] = [];
    vi.stubGlobal("window", {
      location: { pathname: "/fancy-text-generator/" },
      gtag: (...args: unknown[]) => calls.push(args),
    });
    track("fancy_text_copy", {
      tool: "fancy",
      style_id: "bold",
      length_bucket: "1-20",
      ok: true,
      ...({ text: "Hello secret" } as object),
    });
    track("fancy_text_copy", {
      tool: "fancy",
      style_id: "꧁Alex꧂",
      length_bucket: "Hello secret",
    });
    expect(calls).toHaveLength(2);
    expect(calls[0]?.[0]).toBe("event");
    expect(calls[0]?.[1]).toBe("fancy_text_copy");
    expect(calls[0]?.[2]).toEqual({
      page: "/fancy-text-generator/",
      tool: "fancy",
      style_id: "bold",
      length_bucket: "1-20",
      ok: true,
    });
    expect(calls[1]?.[2]).toEqual({
      page: "/fancy-text-generator/",
      tool: "fancy",
    });
    expect(JSON.stringify(calls)).not.toContain("Hello");
    expect(_noText).toBe(true);
    vi.unstubAllGlobals();
  });
});

describe("measurementIds", () => {
  it("accepts a GA4 id and rejects a script-looking clarity id", () => {
    vi.stubEnv("NEXT_PUBLIC_GA_ID", "G-TEST123");
    vi.stubEnv("NEXT_PUBLIC_CLARITY_ID", "<script>");
    expect(measurementIds()).toEqual({ ga: "G-TEST123", clarity: null });
    vi.unstubAllEnvs();
  });
});

describe("privacy copy", () => {
  it("names both analytics tools and no longer treats them as future work", () => {
    for (const locale of locales) {
      const text = privacyContent[locale].sections.map((section) => `${section.h2}\n${section.body}`).join("\n");
      expect(text).toContain("Google Analytics 4");
      expect(text).toContain("Clarity");
      expect(text).not.toMatch(/optional analytics|analíticas opcionales|análises opcionais|可选的统计分析|analitik opsional/);
    }
  });
});
