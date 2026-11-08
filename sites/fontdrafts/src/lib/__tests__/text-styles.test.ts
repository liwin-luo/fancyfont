import { describe, expect, it } from "vitest";
import {
  convertAll,
  convertText,
  getStyle,
  styleMatches,
  textStyles,
  withWrapper,
} from "@/lib/text-styles";
import { stripZalgo } from "@/lib/zalgo-clean";

describe("text-styles 引擎", () => {
  it("样式表完整:180 种样式,无重复 id", () => {
    expect(textStyles).toHaveLength(180);
    const ids = textStyles.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("花体 hello(小写 e/l/o 走公认例外字形)", () => {
    expect(convertText("hello", "script")).toBe("𝒽ℯ𝓁𝓁ℴ");
  });

  it("粗体含数字", () => {
    expect(convertText("Bold2026", "bold")).toBe("𝐁𝐨𝐥𝐝𝟐𝟎𝟐𝟔");
  });

  it("哥特体个别字母用公认替代字形", () => {
    // C 没有标准 Fraktur 码点,用 ℭ(U+212D)补齐。
    expect(convertText("CHIC", "fraktur")).toBe("ℭℌℑℭ");
  });

  it("汉字在拉丁样式中原样保留", () => {
    expect(convertText("你好", "script")).toBe("你好");
    expect(convertText("你好 hello", "script")).toBe("你好 𝒽ℯ𝓁𝓁ℴ");
  });

  it("小型大写:X 无字形则保持原样(诚实覆盖),L 用主流 ʟ", () => {
    expect(convertText("text", "smallCaps")).toBe("ᴛᴇxᴛ");
    expect(convertText("milk", "smallCaps")).toBe("ᴍɪʟᴋ");
  });

  it("删除线对汉字生效,字符数翻倍", () => {
    const struck = convertText("中文", "strike");
    expect(Array.from(struck)).toHaveLength(4);
    expect(struck.startsWith("中")).toBe(true);
  });

  it("全角样式加宽字母与空格", () => {
    expect(convertText("a b", "fullwidth")).toBe("ａ\u3000ｂ");
  });

  it("倒立字:镜像并反转", () => {
    expect(convertText("flip", "upsideDown")).toBe("dᴉlɟ");
  });

  it("zalgo 输出确定性:同输入同输出", () => {
    const a = convertText("cursed", "zalgoHeavy");
    const b = convertText("cursed", "zalgoHeavy");
    expect(a).toBe(b);
    expect(a).not.toBe("cursed");
  });

  it("zalgo 生成后可被清洗还原", () => {
    const original = "cursed 中文";
    const cursed = convertText(original, "zalgoMedium");
    const cleaned = stripZalgo(cursed);
    expect(cleaned.text).toBe(original);
    expect(cleaned.removed).toBeGreaterThan(0);
  });

  it("convertAll 覆盖全部样式且不修改原文本", () => {
    const all = convertAll("abc");
    expect(all).toHaveLength(textStyles.length);
    expect(all[0].id).toBe(textStyles[0].id);
  });

  it("withWrapper 贴装饰对", () => {
    expect(withWrapper("清风", ["꧁", "꧂"])).toBe("꧁清风꧂");
  });

  it("styleMatches 命中中文名与英文别名", () => {
    const script = getStyle("script");
    expect(styleMatches(script, "花体")).toBe(true);
    expect(styleMatches(script, "cursive")).toBe(true);
    expect(styleMatches(script, "无关词")).toBe(false);
  });

  it("未知样式 id 抛错", () => {
    expect(() => getStyle("nonexistent" as never)).toThrow();
  });
});
