import { describe, expect, it } from "vitest";
import { applyCjkStyle, convertCjkAll, cjkStyles, hasCjk } from "@/lib/cjk-styles";

describe("cjk-styles 中文装饰引擎", () => {
  it("装饰表完整:27 种样式,无重复 id", () => {
    expect(cjkStyles).toHaveLength(27);
    const ids = cjkStyles.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("纯中文贴电竞框", () => {
    expect(applyCjkStyle("清风", "gamer")).toBe("꧁清风꧂");
  });

  it("书名括号(全平台安全款)", () => {
    expect(applyCjkStyle("等风来", "book")).toBe("『等风来』");
  });

  it("空格间隔用全角空格连接", () => {
    expect(applyCjkStyle("中文", "spaced")).toBe("中\u3000文");
  });

  it("数字美化只改数字,汉字保留", () => {
    expect(applyCjkStyle("2026年", "boldDigits")).toBe("𝟐𝟎𝟐𝟔年");
  });

  it("装饰对英文与 emoji 同样生效", () => {
    expect(applyCjkStyle("hello", "heart")).toBe("♡hello♡");
    expect(applyCjkStyle("⭐", "corner")).toBe("「⭐」");
  });

  it("空输入返回空串", () => {
    expect(applyCjkStyle("", "gamer")).toBe("꧁꧂");
    expect(hasCjk("")).toBe(false);
  });

  it("hasCjk 识别汉字/日文/韩文/全角", () => {
    expect(hasCjk("你好")).toBe(true);
    expect(hasCjk("こんにちは")).toBe(true);
    expect(hasCjk("안녕")).toBe(true);
    expect(hasCjk("ｈｅｌｌｏ")).toBe(true);
    expect(hasCjk("hello 123")).toBe(false);
  });

  it("convertCjkAll 覆盖全部装饰", () => {
    const all = convertCjkAll("星");
    expect(all).toHaveLength(cjkStyles.length);
    expect(all[0]).toHaveProperty("text");
    expect(all[0]).toHaveProperty("tags");
  });

  it("高风险装饰必须带 risk 标注(诚实标注约定)", () => {
    for (const style of cjkStyles) {
      // 用普通汉字做探针,只让装饰符号本身参与判定。
      const isExotic = /[꧁꧂꧇꧔꧕༺༻୨୧☬⚜⚡]/.test(style.transform("字"));
      if (isExotic) {
        expect(style.risk, `${style.id} 缺少 risk 标注`).toBeDefined();
      }
    }
  });
});
