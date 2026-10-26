import { describe, expect, it } from "vitest";
import { clipCodePoints, codePointLength, plainHandle } from "@/lib/platform-preview";

describe("platform preview handles", () => {
  it("keeps a plain handle and drops characters that username fields reject", () => {
    expect(plainHandle("Shadow Hero!", "social")).toBe("ShadowHero");
    expect(plainHandle("Shadow Hero!", "discord")).toBe("shadowhero");
    expect(plainHandle("a__b!!", "roblox")).toBe("a_b");
    expect(plainHandle("浩然", "roblox")).toBe("Player");
    expect(plainHandle("a..b", "discord")).toBe("a.b");
    expect(plainHandle("___", "roblox")).toBe("Player");
    expect(plainHandle("Shadow Hero!", "youtube")).toBe("shadowhero");
    expect(plainHandle("浩然", "youtube")).toBe("channel");
  });

  it("counts and clips by code point", () => {
    expect(codePointLength("𝐀𝐥𝐞𝐱")).toBe(4);
    expect(clipCodePoints("𝐀𝐥𝐞𝐱!", 4)).toBe("𝐀𝐥𝐞𝐱…");
    expect(clipCodePoints("Alex", 10)).toBe("Alex");
  });
});
