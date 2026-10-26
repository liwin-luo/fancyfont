import { describe, expect, it } from "vitest";
import { locales } from "@/lib/i18n";
import { sampleNames } from "@/lib/sample-names";
import { convertText } from "@/lib/text-styles";

describe("homepage sample names", () => {
  it("gives every locale several ascii names that styles fully convert", () => {
    for (const locale of locales) {
      const names = sampleNames[locale];
      expect(names.length).toBeGreaterThanOrEqual(6);
      expect(new Set(names).size).toBe(names.length);
      for (const name of names) {
        expect(name).toMatch(/^[A-Za-z]+$/);
        expect(convertText(name, "bold")).not.toBe(name);
        expect(convertText(name, "script")).not.toBe(name);
      }
    }
  });
});
