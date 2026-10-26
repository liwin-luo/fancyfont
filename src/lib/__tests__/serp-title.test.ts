import { describe, expect, it } from "vitest";
import { serpScript, serpTitle } from "@/lib/serp-title";
import { convertText } from "@/lib/text-styles";

describe("serp titles", () => {
  it("uses even bold script instead of the thin script with broken e/g/o", () => {
    const script = serpScript("en");
    expect(script).toBe(`\u2661 ${convertText("Copy & Paste", "boldScript")}`);
    expect(script).not.toContain("\u212F"); // ℯ
    expect(script).not.toContain("\u2134"); // ℴ
    expect(serpScript("es")).not.toContain("\u212F");
    expect(serpScript("es")).not.toContain("\u210A"); // ℊ
    expect(serpTitle("Fancy Text Generator", "en")).toBe(
      `Fancy Text Generator \u2014 ${script}`,
    );
  });
});
