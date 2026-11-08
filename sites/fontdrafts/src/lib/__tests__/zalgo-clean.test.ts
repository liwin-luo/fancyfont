import { describe, expect, it } from "vitest";
import { stripZalgo } from "@/lib/zalgo-clean";

describe("zalgo-clean 清洗器", () => {
  it("剥离上下叠加的组合符号", () => {
    const { text, removed } = stripZalgo("c\u0300u\u035Cr\u0316s\u034Ae\u0489d");
    expect(text).toBe("cursed");
    expect(removed).toBe(5);
  });

  it("保留汉字、emoji 基础字符", () => {
    const { text } = stripZalgo("你好⭐");
    expect(text).toBe("你好⭐");
  });

  it("剥离 emoji 变体选择符(含 VS16)", () => {
    const { text, removed } = stripZalgo("⭐\uFE0F");
    expect(text).toBe("⭐");
    expect(removed).toBe(1);
  });

  it("干净文本零改动", () => {
    const { text, removed } = stripZalgo("normal text 2026");
    expect(text).toBe("normal text 2026");
    expect(removed).toBe(0);
  });

  it("空串安全", () => {
    expect(stripZalgo("")).toEqual({ text: "", removed: 0 });
  });
});
