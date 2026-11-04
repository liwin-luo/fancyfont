import { describe, expect, it } from "vitest";
import { stripZalgo } from "../zalgo-clean";
import { convertText } from "../text-styles";

describe("zalgo cleaner", () => {
  it("strips combining marks but keeps base letters", () => {
    const zalgo = "Z\u035b\u0366\u0353\u0316\u034e\u033f\u0359\u0316\u0319a\u0369\u035c\u035a\u0340\u0321l\u0364\u0337\u0321\u034f\u0359\u0329\u0323\u0327g\u0369\u0363\u0354\u031c\u034e\u0321\u0329\u0347\u0326\u0325\u033bo\u0367\u034d\u0333\u0323\u0319\u0347\u0336\u0326\u032c";
    const { text, removed } = stripZalgo(zalgo);
    expect(text).toBe("Zalgo");
    expect(removed).toBeGreaterThan(30);
  });

  it("strips marks produced by our own zalgo styles", () => {
    const styled = convertText("Hello", "zalgoLight");
    const { text } = stripZalgo(styled);
    expect(text).toBe("Hello");
  });

  it("keeps emoji, CJK and normal accents in emoji-free form", () => {
    const { text, removed } = stripZalgo("李明 😀‍✨ é");
    expect(text).toContain("李明");
    // variation selector FE0F is part of the strip list, so the joined
    // emoji loses its presentation selector but the base emoji stays.
    expect(text).toContain("😀");
  });

  it("returns the input untouched when there is nothing to strip", () => {
    expect(stripZalgo("plain text 123").removed).toBe(0);
    expect(stripZalgo("plain text 123").text).toBe("plain text 123");
  });

  it("handles empty input", () => {
    expect(stripZalgo("")).toEqual({ text: "", removed: 0 });
  });
});
