// InlineLinks 解析层测试:旧格式站内链接行为不变;外链(https)为新扩展,
// 渲染为普通 <a rel="noopener noreferrer">(模板层)。其余写法一律按纯文本。
import { describe, expect, it } from "vitest";
import { parseInlineLinks } from "../inline-links";

describe("parseInlineLinks(InlineLinks 的纯解析层)", () => {
  it("纯文本不拆分(与旧行为一致:整体返回)", () => {
    const text = "Plain paragraph with no links at all.";
    expect(parseInlineLinks(text)).toEqual([{ kind: "text", value: text }]);
  });

  it("旧格式站内链接:拆出 internal token,href 保留尾斜杠", () => {
    const tokens = parseInlineLinks("Type your name in the [TikTok font generator](/tiktok-fonts/) and pick a style.");
    expect(tokens).toEqual([
      { kind: "text", value: "Type your name in the " },
      { kind: "internal", label: "TikTok font generator", href: "/tiktok-fonts/" },
      { kind: "text", value: " and pick a style." },
    ]);
  });

  it("旧格式:同段多个站内链接全部解析", () => {
    const tokens = parseInlineLinks("[small caps](/small-fonts/) and [script](/cursive-fonts/)");
    expect(tokens.filter((t) => t.kind === "internal")).toHaveLength(2);
  });

  it("新扩展:https 外链解析为 external token", () => {
    const tokens = parseInlineLinks(
      "Source: [TikTok Help: Changing your nickname](https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-nickname).",
    );
    expect(tokens).toEqual([
      { kind: "text", value: "Source: " },
      {
        kind: "external",
        label: "TikTok Help: Changing your nickname",
        href: "https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-nickname",
      },
      { kind: "text", value: "." },
    ]);
  });

  it("非约定写法保持纯文本:http 链接、无尾斜杠路径、裸 markdown", () => {
    for (const text of [
      "[x](http://example.com/)",
      "[x](/no-trailing-slash)",
      "[unclosed](/cursive-fonts/",
      "plain [brackets] only",
    ]) {
      const tokens = parseInlineLinks(text);
      expect(tokens).toEqual([{ kind: "text", value: text }]);
    }
  });
});
