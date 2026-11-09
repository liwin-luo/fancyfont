// 字素级截断与码点标签:输入框长度限制、结果计数提示用。

let segmenter: Intl.Segmenter | undefined;

function graphemeParts(text: string): string[] {
  segmenter ??= new Intl.Segmenter(undefined, { granularity: "grapheme" });
  return [...segmenter.segment(text)].map((part) => part.segment);
}

export function sliceGraphemes(text: string, max: number): string {
  if (max <= 0) return "";
  const parts = graphemeParts(text);
  if (parts.length <= max) return text;
  return parts.slice(0, max).join("");
}

/** 调试提示用:U+XXXX 形式的码点标签。 */
export function formatCodePoint(cp: number): string {
  return `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`;
}
