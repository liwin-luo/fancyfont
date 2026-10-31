// Three lengths users mix up: what they see, Unicode code points, and
// the UTF-16 units JavaScript's string.length counts.

export interface TextMeasures {
  graphemes: number;
  codePoints: number;
  utf16: number;
}

export function graphemeParts(text: string): string[] {
  if (typeof Intl.Segmenter !== "function") return [...text];
  // ponytail: one segmenter per call. Upgrade path is a module-level cache if profiling shows input lag.
  return [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text)].map(
    (part) => part.segment,
  );
}

export function measureText(text: string): TextMeasures {
  return {
    graphemes: graphemeParts(text).length,
    codePoints: [...text].length,
    utf16: text.length,
  };
}

/** Keeps whole visible characters. A UTF-16 slice can cut an emoji in half. */
export function sliceGraphemes(text: string, max: number): string {
  if (max <= 0) return "";
  const parts = graphemeParts(text);
  if (parts.length <= max) return text;
  return parts.slice(0, max).join("");
}

export function lengthBucket(graphemes: number): "0" | "1-20" | "21-120" | "121+" {
  if (graphemes <= 0) return "0";
  if (graphemes <= 20) return "1-20";
  if (graphemes <= 120) return "21-120";
  return "121+";
}
