// 指南正文行内链接的纯解析层(无 JSX,便于单测)。
// 既有格式 `[文字](/路径/)` → 站内 token,行为不变;
// Step 4 向后兼容扩展:同时识别 `[文字](https://…)` 外链 token,由模板渲染普通 <a>。

export type InlineToken =
  | { kind: "text"; value: string }
  | { kind: "internal"; label: string; href: string }
  | { kind: "external"; label: string; href: string };

const INLINE_TOKEN_RE = /(\[[^\]]+\]\((?:\/[^)]+\/|https:\/\/[^)]+)\))/g;

export function parseInlineLinks(text: string): InlineToken[] {
  const parts = text.split(INLINE_TOKEN_RE);
  if (parts.length === 1) return [{ kind: "text", value: text }];
  const tokens: InlineToken[] = [];
  for (const part of parts) {
    const internal = part.match(/^\[([^\]]+)\]\((\/[^)]+\/)\)$/);
    if (internal) {
      tokens.push({ kind: "internal", label: internal[1], href: internal[2] });
      continue;
    }
    const external = part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    if (external) {
      tokens.push({ kind: "external", label: external[1], href: external[2] });
      continue;
    }
    tokens.push({ kind: "text", value: part });
  }
  return tokens;
}
