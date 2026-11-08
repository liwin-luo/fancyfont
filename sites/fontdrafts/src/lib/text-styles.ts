// Unicode 文字样式转换引擎。
//
// 每种样式把 ASCII 字母/数字映射到带样式的 Unicode 码点(如
// "Mathematical Bold")。样式支持范围之外的字符原样保留,中英混输不会坏。
//
// 每个样式携带 UI 与"诚实覆盖标注"所需的元数据:能转换哪些字符、
// 在部分设备上是否有已知显示风险。

export type TextStyleId =
  | "script"
  | "boldScript"
  | "fraktur"
  | "boldFraktur"
  | "bold"
  | "italic"
  | "boldItalic"
  | "sansBold"
  | "sansItalic"
  | "sansBoldItalic"
  | "doubleStruck"
  | "monospace"
  | "smallCaps"
  | "superscript"
  | "subscript"
  | "bubble"
  | "circled"
  | "parenthesized"
  | "squared"
  | "negativeCircled"
  | "negativeSquared"
  | "fullwidth"
  | "spaced"
  | "upsideDown"
  | "strike"
  | "underline"
  | "doubleUnderline"
  | "slash"
  | "boldStrike"
  | "boldUnderline"
  | "italicUnderline"
  | "zalgoLight"
  | "zalgoMedium"
  | "zalgoHeavy"
  | "scriptStrike"
  | "scriptUnderline"
  | "scriptDoubleUnderline"
  | "scriptSlash"
  | "scriptSpaced"
  | "scriptZalgo"
  | "boldScriptStrike"
  | "boldScriptUnderline"
  | "frakturStrike"
  | "frakturUnderline"
  | "frakturSlash"
  | "frakturSpaced"
  | "frakturZalgo"
  | "frakturDoubleUnderline"
  | "boldFrakturStrike"
  | "boldFrakturUnderline"
  | "boldSpaced"
  | "italicStrike"
  | "italicSpaced"
  | "boldOverline"
  | "italicZalgo"
  | "boldDoubleUnderline"
  | "boldZalgo"
  | "sansBoldStrike"
  | "sansBoldUnderline"
  | "sansBoldSpaced"
  | "sansBoldZalgo"
  | "doubleStruckStrike"
  | "smallCapsStrike"
  | "smallCapsUnderline"
  | "smallCapsSpaced"
  | "smallCapsZalgo"
  | "superscriptSpaced"
  | "subscriptSpaced"
  | "superscriptUnderline"
  | "circledStrike"
  | "circledSpaced"
  | "squaredSpaced"
  | "negativeCircledStrike"
  | "fullwidthStrike"
  | "fullwidthUnderline"
  | "fullwidthDoubleUnderline"
  | "fullwidthSlash"
  | "fullwidthZalgo"
  | "spacedStrike"
  | "spacedUnderline"
  | "spacedZalgo"
  | "upsideDownStrike"
  | "upsideDownUnderline"
  | "upsideDownDoubleUnderline"
  | "upsideDownSlash"
  | "upsideDownSpaced"
  | "upsideDownZalgo"
  | "upsideDownOverline"
  | "reverse"
  | "reverseSpaced"
  | "boldScriptSlash"
  | "boldScriptSpaced"
  | "boldScriptZalgo"
  | "boldScriptDoubleUnderline"
  | "boldScriptOverline"
  | "scriptOverline"
  | "scriptHalo"
  | "scriptWavy"
  | "scriptDotted"
  | "scriptArrow"
  | "frakturOverline"
  | "frakturHalo"
  | "frakturWavy"
  | "frakturDotted"
  | "frakturArrow"
  | "boldFrakturSlash"
  | "boldFrakturSpaced"
  | "boldFrakturZalgo"
  | "boldFrakturDoubleUnderline"
  | "boldFrakturOverline"
  | "boldHalo"
  | "boldWavy"
  | "boldDotted"
  | "boldSlash"
  | "italicDoubleUnderline"
  | "italicOverline"
  | "italicHalo"
  | "italicSlash"
  | "boldItalicStrike"
  | "boldItalicUnderline"
  | "sansBoldSlash"
  | "sansBoldOverline"
  | "sansBoldHalo"
  | "sansBoldWavy"
  | "sansBoldDotted"
  | "sansBoldDoubleUnderline"
  | "doubleStruckUnderline"
  | "doubleStruckSlash"
  | "doubleStruckSpaced"
  | "monospaceStrike"
  | "smallCapsSlash"
  | "smallCapsOverline"
  | "smallCapsHalo"
  | "smallCapsWavy"
  | "smallCapsDotted"
  | "smallCapsDoubleUnderline"
  | "superscriptStrike"
  | "subscriptStrike"
  | "superscriptSlash"
  | "smallCapsArrow"
  | "negativeSquaredStrike"
  | "negativeSquaredSpaced"
  | "parenthesizedSpaced"
  | "bubbleSpaced"
  | "bubbleStrike"
  | "squaredStrike"
  | "circledUnderline"
  | "circledOverline"
  | "circledWavy"
  | "negativeCircledUnderline"
  | "fullwidthOverline"
  | "fullwidthHalo"
  | "fullwidthWavy"
  | "fullwidthDotted"
  | "fullwidthArrow"
  | "spacedSlash"
  | "spacedDoubleUnderline"
  | "spacedOverline"
  | "spacedHalo"
  | "spacedWavy"
  | "reverseStrike"
  | "reverseUnderline"
  | "reverseDoubleUnderline"
  | "reverseSlash"
  | "reverseZalgo"
  | "reverseHalo"
  | "upsideDownHalo"
  | "upsideDownWavy"
  | "upsideDownDotted"
  | "upsideDownArrow"
  | "overline"
  | "doubleOverline"
  | "dotted"
  | "halo"
  | "wavy"
  | "arrow"
  | "crossedUnderline"
  | "tildeUnder"
  | "dotBelow"
  | "xAbove";

export type StyleCategory =
  | "script"
  | "gothic"
  | "bold"
  | "sans"
  | "small"
  | "enclosed"
  | "wide"
  | "flipped"
  | "effects";

/** UI 中展示的诚实覆盖标注。 */
export type StyleCoverage =
  /** 只转换 A–Z 和 a–z。 */
  | "letters"
  /** 转换 A–Z、a–z 和 0–9。 */
  | "lettersDigits"
  /** 转换大部分字母;个别没有带样式字形,保持原样。 */
  | "partial"
  /** 对任意字符生效(叠加组合符号)。 */
  | "all";

export const coverageLabels: Record<StyleCoverage, string> = {
  letters: "仅字母",
  lettersDigits: "字母+数字",
  partial: "部分字符",
  all: "任意字符",
};

export interface TextStyle {
  id: TextStyleId;
  name: string;
  note: string;
  category: StyleCategory;
  coverage: StyleCoverage;
  /** 搜索关键词(中英文都收)。 */
  aliases?: readonly string[];
  /** 该样式在某些场景可能如何渲染的风险提示。 */
  risk?: string;
  transform: (text: string) => string;
}

export interface ConvertedText {
  id: TextStyleId;
  name: string;
  note: string;
  category: StyleCategory;
  coverage: StyleCoverage;
  risk?: string;
  text: string;
}

export const styleCategories: { id: StyleCategory; name: string }[] = [
  { id: "script", name: "花体" },
  { id: "gothic", name: "哥特" },
  { id: "bold", name: "粗斜" },
  { id: "sans", name: "无衬线" },
  { id: "small", name: "小字" },
  { id: "enclosed", name: "圈框" },
  { id: "wide", name: "全角" },
  { id: "flipped", name: "倒立" },
  { id: "effects", name: "特效" },
];

export function styleCategoryName(id: StyleCategory): string {
  return styleCategories.find((c) => c.id === id)?.name ?? id;
}

const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;
const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const DIGIT_ZERO = 48;
const DIGIT_NINE = 57;
const SPACE = 32;

function mapCodePoints(text: string, map: (cp: number) => number | null): string {
  let out = "";
  for (const ch of text) {
    const mapped = map(ch.codePointAt(0)!);
    out += mapped === null ? ch : String.fromCodePoint(mapped);
  }
  return out;
}

interface AlphabetSpec {
  upper: number;
  lower: number;
  digits?: number;
  /** ASCII 码点 -> 替换码点(个别字母的特殊字形)。 */
  exceptions?: Record<number, number>;
  /** 把空格加宽到该码点(fullwidth 样式使用)。 */
  space?: number;
}

function fromAlphabet(spec: AlphabetSpec) {
  return (text: string) =>
    mapCodePoints(text, (cp) => {
      const exception = spec.exceptions?.[cp];
      if (exception !== undefined) return exception;
      if (spec.space !== undefined && cp === SPACE) return spec.space;
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return spec.upper + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return spec.lower + cp - LOWERCASE_A;
      if (spec.digits !== undefined && cp >= DIGIT_ZERO && cp <= DIGIT_NINE) {
        return spec.digits + cp - DIGIT_ZERO;
      }
      return null;
    });
}

function fromLetterMap(map: Record<string, string>) {
  return (text: string) => {
    let out = "";
    for (const ch of text) {
      const mapped = map[ch] ?? map[ch.toLowerCase()];
      out += mapped ?? ch;
    }
    return out;
  };
}

function compose(...steps: ((text: string) => string)[]) {
  return (text: string) => steps.reduce((acc, step) => step(acc), text);
}

function withCombiningMark(mark: string) {
  return (text: string) => {
    let out = "";
    for (const ch of text) out += ch + mark;
    return out;
  };
}

function spacedOut(text: string) {
  let out = "";
  for (const ch of text) {
    out += ch;
    if (ch !== " ") out += " ";
  }
  return out.trimEnd();
}

// --- Latin 小型大写 ---------------------------------------------------------
// Unicode 没有小型大写 X,所以 X 保持小写。Q 约定用 U+01EB,与主流
// 生成器一致,字体覆盖率更好。
const SMALL_CAPS_MAP: Record<string, string> = {
  a: "\u1D00",
  b: "\u0299",
  c: "\u1D04",
  d: "\u1D05",
  e: "\u1D07",
  f: "\uA730",
  g: "\u0262",
  h: "\u029C",
  i: "\u026A",
  j: "\u1D0A",
  k: "\u1D0B",
  l: "\u029F",
  m: "\u1D0D",
  n: "\u0274",
  o: "\u1D0F",
  p: "\u1D18",
  q: "\u01EB",
  r: "\u0280",
  s: "\uA731",
  t: "\u1D1B",
  u: "\u1D1C",
  v: "\u1D20",
  w: "\u1D21",
  y: "\u028F",
  z: "\u1D22",
};

function toSmallCaps(text: string): string {
  return fromLetterMap(SMALL_CAPS_MAP)(text);
}

// --- 圈字 / 气泡字 / 括号字 ---------------------------------------------------
function toCircled(text: string): string {
  return mapCodePoints(text, (cp) => {
    if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x24b6 + cp - UPPERCASE_A;
    if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x24d0 + cp - LOWERCASE_A;
    if (cp === DIGIT_ZERO) return 0x24ea; // ⓪
    if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_NINE) return 0x2460 + cp - DIGIT_ZERO - 1;
    return null;
  });
}

function toBubble(text: string): string {
  return mapCodePoints(text, (cp) => {
    if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f150 + cp - UPPERCASE_A;
    if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x1f150 + cp - LOWERCASE_A;
    if (cp === DIGIT_ZERO) return 0x24ff; // ⓿
    if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_NINE) return 0x2775 + cp - DIGIT_ZERO;
    return null;
  });
}

// --- 倒立字 -------------------------------------------------------------------
// 先把每个字符换成镜像近似形,再反转字符串,结果上下颠倒。
const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
  i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
  q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z",
  A: "∀", B: "ᙠ", C: "Ɔ", E: "Ǝ", F: "Ⅎ", G: "⅁", J: "ſ", L: "˥",
  M: "W", P: "Ԁ", R: "ᴚ", T: "⊥", U: "∩", V: "Ʌ", W: "M", Y: "⅄",
  "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "9": "6",
  ".": "˙", ",": "'", "?": "¿", "!": "¡", "'": ",", '"': "„",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
  "<": ">", ">": "<", "&": "⅋", _: "‾",
};

function toUpsideDown(text: string): string {
  let out = "";
  for (const ch of text) {
    out += UPSIDE_DOWN_MAP[ch] ?? UPSIDE_DOWN_MAP[ch.toLowerCase()] ?? ch;
  }
  return Array.from(out).reverse().join("");
}

// --- 上标 / 下标 ----------------------------------------------------------------
const SUPERSCRIPT_MAP: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", D: "ᴰ", E: "ᴱ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", R: "ᴿ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

const SUBSCRIPT_MAP: Record<string, string> = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ",
  n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

// --- Zalgo(乱码/ glitch)-------------------------------------------------------
// 刻意做成确定性输出:符号从固定列表中按"字符码点 + 位置 + 样式盐值"
// 的种子伪随机选取,服务端和客户端渲染结果一致,测试可断言。
const ZALGO_ABOVE = [
  "\u0300", "\u0301", "\u0302", "\u0303", "\u0304", "\u0306", "\u0307", "\u0308",
  "\u030A", "\u030B", "\u030C", "\u033D", "\u033E", "\u0342", "\u0343", "\u0344",
  "\u034A", "\u034B", "\u034C",
];

const ZALGO_BELOW = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031C", "\u0320", "\u0321", "\u0322",
  "\u0324", "\u0325", "\u0326", "\u0329", "\u032A", "\u032B", "\u032C", "\u032D",
  "\u032E", "\u0330", "\u0331", "\u0339", "\u033A", "\u033B", "\u033C", "\u0345",
  "\u0347", "\u0348", "\u0349", "\u034D", "\u034E",
];

interface ZalgoIntensity {
  salt: number;
  above: [number, number];
  below: [number, number];
}

function toZalgo(text: string, intensity: ZalgoIntensity): string {
  const chars = Array.from(text);
  let out = "";
  chars.forEach((ch, i) => {
    out += ch;
    let state = ((ch.charCodeAt(0) * 2654435761) ^ (i * 40503) ^ (intensity.salt * 97)) >>> 0;
    const rand = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
    const pick = (list: string[]) => list[Math.floor(rand() * list.length)];
    const [aMin, aMax] = intensity.above;
    const [bMin, bMax] = intensity.below;
    const aboveCount = aMin + Math.floor(rand() * (aMax - aMin + 1));
    const belowCount = bMin + Math.floor(rand() * (bMax - bMin + 1));
    for (let a = 0; a < aboveCount; a++) out += pick(ZALGO_ABOVE);
    for (let b = 0; b < belowCount; b++) out += pick(ZALGO_BELOW);
  });
  return out;
}

// 样式定义用的裸码点映射包装。
function mapCodePointsWrap(map: (cp: number) => number | null) {
  return (text: string) => mapCodePoints(text, map);
}

// --- 样式表 ---------------------------------------------------------------------

export const textStyles: TextStyle[] = [
  {
    id: "script",
    name: "花体",
    aliases: ["cursive", "handwriting", "英文花体", "手写体"],
    note: "手写花体感。仅字母。",
    category: "script",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 0x1d49c,
      lower: 0x1d4b6,
      exceptions: {
        66: 0x212c, // B -> ℬ
        69: 0x2130, // E -> ℰ
        70: 0x2131, // F -> ℱ
        72: 0x210b, // H -> ℋ
        73: 0x2110, // I -> ℐ
        76: 0x2113, // L -> ℓ
        77: 0x2133, // M -> ℳ
        82: 0x211b, // R -> ℛ
        101: 0x212f, // e -> ℯ
        103: 0x210a, // g -> ℊ
        111: 0x2134, // o -> ℴ
      },
    }),
  },
  {
    id: "boldScript",
    name: "粗花体",
    note: "加粗手写感。仅字母。",
    category: "script",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d4d0, lower: 0x1d4ea }),
  },
  {
    id: "fraktur",
    name: "哥特体",
    aliases: ["gothic", "old english", "哥特", "暗黑"],
    note: "古老的黑体字感。仅字母。",
    category: "gothic",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 0x1d504,
      lower: 0x1d51e,
      exceptions: {
        67: 0x212d, // C -> ℭ
        72: 0x210c, // H -> ℌ
        73: 0x2111, // I -> ℑ
        82: 0x211c, // R -> ℜ
        90: 0x2128, // Z -> ℨ
      },
    }),
  },
  {
    id: "boldFraktur",
    name: "粗哥特体",
    note: "加粗黑体字感。仅字母。",
    category: "gothic",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d56c, lower: 0x1d586 }),
  },
  {
    id: "bold",
    name: "粗体",
    note: "加粗字母与数字。",
    category: "bold",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
  },
  {
    id: "italic",
    name: "斜体",
    note: "倾斜字母。数字保持原样。",
    category: "bold",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 0x1d434,
      lower: 0x1d44e,
      exceptions: { 104: 0x210e }, // h -> ℎ
    }),
  },
  {
    id: "boldItalic",
    name: "粗斜体",
    note: "加粗倾斜字母。数字保持原样。",
    category: "bold",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d468, lower: 0x1d482 }),
  },
  {
    id: "sansBold",
    name: "无衬线粗体",
    note: "干净利落的粗字母与数字。",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec }),
  },
  {
    id: "sansItalic",
    name: "无衬线斜体",
    note: "干净利落的倾斜字母。数字保持原样。",
    category: "sans",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d608, lower: 0x1d622 }),
  },
  {
    id: "sansBoldItalic",
    name: "粗斜无衬线",
    aliases: ["sans bold italic", "italic bold", "粗斜体"],
    note: "无衬线粗斜体,字母数字都带样式。",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d63c, lower: 0x1d656, digits: 0x1d7ec }),
  },
  {
    id: "doubleStruck",
    name: "空心体",
    note: "镂空字母,黑板粗体感。",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({
      upper: 0x1d538,
      lower: 0x1d552,
      digits: 0x1d7d8,
      exceptions: {
        67: 0x2102, // C -> ℂ
        72: 0x210d, // H -> ℍ
        78: 0x2115, // N -> ℕ
        80: 0x2119, // P -> ℙ
        81: 0x211a, // Q -> ℚ
        82: 0x211d, // R -> ℝ
        90: 0x2124, // Z -> ℤ
      },
    }),
  },
  {
    id: "monospace",
    name: "等宽体",
    note: "打字机式等宽间距。",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 }),
  },
  {
    id: "smallCaps",
    name: "小型大写",
    aliases: ["small caps", "小型大写字母"],
    note: "小型大写字母。",
    category: "small",
    coverage: "letters",
    transform: toSmallCaps,
  },
  {
    id: "superscript",
    name: "上标小字",
    aliases: ["tiny", "迷你字"],
    note: "上浮的小字母。部分大写字母保持原样。",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUPERSCRIPT_MAP),
  },
  {
    id: "subscript",
    name: "下标小字",
    aliases: ["tiny", "迷你字"],
    note: "下沉的小字母。没有下标形的字母保持原样。",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUBSCRIPT_MAP),
  },
  {
    id: "bubble",
    name: "气泡字",
    aliases: ["bubble letters", "气泡"],
    note: "字母外面包着实心圆。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toBubble,
  },
  {
    id: "circled",
    name: "圆圈字",
    note: "字母和数字外面包着细圆圈。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toCircled,
  },
  {
    id: "parenthesized",
    name: "括号字",
    note: "字母和数字 1–20 包在括号里。数字 0 保持原样。",
    category: "enclosed",
    coverage: "partial",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f110 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x249c + cp - LOWERCASE_A;
      if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_ZERO + 20) return 0x2474 + cp - DIGIT_ZERO - 1;
      return null;
    }),
  },
  {
    id: "squared",
    name: "方块字",
    note: "字母包在实心方块里。",
    category: "enclosed",
    coverage: "letters",
    risk: "在部分设备上会渲染成彩色 emoji。",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f130 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x1f130 + cp - LOWERCASE_A;
      return null;
    }),
  },
  {
    id: "negativeCircled",
    name: "黑圈字",
    aliases: ["negative circled", "dark circle", "黑底圆圈"],
    note: "黑底圆圈字母,数字 ❶-❾。",
    category: "enclosed",
    coverage: "lettersDigits",
    risk: "在部分设备上会渲染成彩色 emoji。",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f150 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x1f150 + cp - LOWERCASE_A;
      if (cp === 48) return 0x24ff; // ⓿
      if (cp >= 49 && cp <= 57) return 0x2775 + cp - 48; // ❶-❾
      return null;
    }),
  },
  {
    id: "negativeSquared",
    name: "黑方框字",
    aliases: ["negative squared", "dark square", "黑底方框"],
    note: "黑底方框字母。仅字母。",
    category: "enclosed",
    coverage: "letters",
    risk: "在部分设备上会渲染成彩色 emoji。",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f170 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x1f170 + cp - LOWERCASE_A;
      return null;
    }),
  },
  {
    id: "fullwidth",
    name: "全角字",
    aliases: ["vaporwave", "蒸汽波", " aesthetic"],
    note: "加宽的美学字母,空格也加宽。",
    category: "wide",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0xff21, lower: 0xff41, digits: 0xff10, space: 0x3000 }),
  },
  {
    id: "spaced",
    name: "空格间隔",
    aliases: ["spaced letters", "aesthetic spacing", "间隔字", "空格字"],
    note: "字符之间加空格,任意字符可用。",
    category: "wide",
    coverage: "all",
    transform: spacedOut,
  },
  {
    id: "upsideDown",
    name: "倒立字",
    aliases: ["upside down", "flip", "翻转"],
    note: "文字上下颠倒,标点也翻转。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: toUpsideDown,
  },
  {
    id: "strike",
    name: "删除线",
    note: "每个字符中间画一条线。",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0336"),
  },
  {
    id: "underline",
    name: "下划线",
    note: "每个字符底下画一条线。",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0332"),
  },
  {
    id: "doubleUnderline",
    name: "双下划线",
    note: "每个字符底下画两条线。",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0333"),
  },
  {
    id: "slash",
    name: "斜线字",
    note: "每个字符中间画一条斜线。",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0338"),
  },
  {
    id: "boldStrike",
    name: "粗体删除线",
    note: "粗字母加贯穿线。",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
      withCombiningMark("\u0336"),
    ),
  },
  {
    id: "boldUnderline",
    name: "粗体下划线",
    note: "粗字母加底线。",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
      withCombiningMark("\u0332"),
    ),
  },
  {
    id: "italicUnderline",
    name: "斜体下划线",
    note: "倾斜字母加底线。",
    category: "effects",
    coverage: "letters",
    transform: compose(
      fromAlphabet({ upper: 0x1d434, lower: 0x1d44e }),
      withCombiningMark("\u0332"),
    ),
  },
  {
    id: "zalgoLight",
    name: "轻度乱码",
    aliases: ["zalgo", "glitch", "诡异", "故障"],
    note: "零星符号,轻微诡异感。",
    category: "effects",
    coverage: "all",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => toZalgo(text, { salt: 11, above: [0, 1], below: [0, 1] }),
  },
  {
    id: "zalgoMedium",
    name: "中度乱码",
    aliases: ["zalgo", "glitch", "诡异", "故障"],
    note: "中等强度的乱码。",
    category: "effects",
    coverage: "all",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => toZalgo(text, { salt: 37, above: [1, 2], below: [1, 2] }),
  },
  {
    id: "zalgoHeavy",
    name: "重度乱码",
    aliases: ["zalgo", "glitch", "诡异", "故障"],
    note: "最猛的诡异能量,慎用。",
    category: "effects",
    coverage: "all",
    risk: "符号过密可能导致部分应用排版或复制异常。",
    transform: (text) => toZalgo(text, { salt: 73, above: [2, 4], below: [2, 4] }),
  },
  {
    id: "scriptStrike",
    name: "花体删除线",
    note: "花体加删除线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "script")),
  },
  {
    id: "scriptUnderline",
    name: "花体下划线",
    note: "花体加下划线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "script")),
  },
  {
    id: "scriptDoubleUnderline",
    name: "花体双下划线",
    note: "花体加双下划线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "script")),
  },
  {
    id: "scriptSlash",
    name: "花体斜线",
    note: "花体加斜线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "script")),
  },
  {
    id: "scriptSpaced",
    name: "花体间隔",
    note: "花体加间隔的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "script")),
  },
  {
    id: "scriptZalgo",
    name: "花体乱码",
    note: "花体加乱码的组合变体。",
    category: "script",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "script"), "zalgoLight"),
  },
  {
    id: "boldScriptStrike",
    name: "粗花体删除线",
    note: "粗花体加删除线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "boldScript")),
  },
  {
    id: "boldScriptUnderline",
    name: "粗花体下划线",
    note: "粗花体加下划线的组合变体。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "boldScript")),
  },
  {
    id: "frakturStrike",
    name: "哥特体删除线",
    note: "哥特体加删除线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "fraktur")),
  },
  {
    id: "frakturUnderline",
    name: "哥特体下划线",
    note: "哥特体加下划线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "fraktur")),
  },
  {
    id: "frakturSlash",
    name: "哥特体斜线",
    note: "哥特体加斜线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "fraktur")),
  },
  {
    id: "frakturSpaced",
    name: "哥特体间隔",
    note: "哥特体加间隔的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "fraktur")),
  },
  {
    id: "frakturZalgo",
    name: "哥特体乱码",
    note: "哥特体加乱码的组合变体。",
    category: "gothic",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "fraktur"), "zalgoLight"),
  },
  {
    id: "frakturDoubleUnderline",
    name: "哥特体双下划线",
    note: "哥特体加双下划线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "fraktur")),
  },
  {
    id: "boldFrakturStrike",
    name: "粗哥特体删除线",
    note: "粗哥特体加删除线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "boldFraktur")),
  },
  {
    id: "boldFrakturUnderline",
    name: "粗哥特体下划线",
    note: "粗哥特体加下划线的组合变体。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "boldFraktur")),
  },
  {
    id: "boldSpaced",
    name: "粗体间隔",
    note: "粗体加间隔的组合变体。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "bold")),
  },
  {
    id: "italicStrike",
    name: "斜体删除线",
    note: "斜体加删除线的组合变体。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "italic")),
  },
  {
    id: "italicSpaced",
    name: "斜体间隔",
    note: "斜体加间隔的组合变体。",
    category: "bold",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "italic")),
  },
  {
    id: "boldOverline",
    name: "粗体上划线",
    note: "粗体加上划线的组合变体。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "bold")),
  },
  {
    id: "italicZalgo",
    name: "斜体乱码",
    note: "斜体加乱码的组合变体。",
    category: "bold",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "italic"), "zalgoLight"),
  },
  {
    id: "boldDoubleUnderline",
    name: "粗体双下划线",
    note: "粗体加双下划线的组合变体。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "bold")),
  },
  {
    id: "boldZalgo",
    name: "粗体乱码",
    note: "粗体加乱码的组合变体。",
    category: "bold",
    coverage: "lettersDigits",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "bold"), "zalgoLight"),
  },
  {
    id: "sansBoldStrike",
    name: "无衬线粗体删除线",
    note: "无衬线粗体加删除线的组合变体。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldUnderline",
    name: "无衬线粗体下划线",
    note: "无衬线粗体加下划线的组合变体。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldSpaced",
    name: "无衬线粗体间隔",
    note: "无衬线粗体加间隔的组合变体。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldZalgo",
    name: "无衬线粗体乱码",
    note: "无衬线粗体加乱码的组合变体。",
    category: "sans",
    coverage: "lettersDigits",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "sansBold"), "zalgoLight"),
  },
  {
    id: "doubleStruckStrike",
    name: "空心体删除线",
    note: "空心体加删除线的组合变体。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "doubleStruck")),
  },
  {
    id: "smallCapsStrike",
    name: "小型大写删除线",
    note: "小型大写加删除线的组合变体。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsUnderline",
    name: "小型大写下划线",
    note: "小型大写加下划线的组合变体。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsSpaced",
    name: "小型大写间隔",
    note: "小型大写加间隔的组合变体。",
    category: "small",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsZalgo",
    name: "小型大写乱码",
    note: "小型大写加乱码的组合变体。",
    category: "small",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "smallCaps"), "zalgoLight"),
  },
  {
    id: "superscriptSpaced",
    name: "上标小字间隔",
    note: "上标小字加间隔的组合变体。",
    category: "small",
    coverage: "partial",
    transform: (text) => spacedOut(convertText(text, "superscript")),
  },
  {
    id: "subscriptSpaced",
    name: "下标小字间隔",
    note: "下标小字加间隔的组合变体。",
    category: "small",
    coverage: "partial",
    transform: (text) => spacedOut(convertText(text, "subscript")),
  },
  {
    id: "superscriptUnderline",
    name: "上标小字下划线",
    note: "上标小字加下划线的组合变体。",
    category: "small",
    coverage: "partial",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "superscript")),
  },
  {
    id: "circledStrike",
    name: "圆圈字删除线",
    note: "圆圈字加删除线的组合变体。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "circled")),
  },
  {
    id: "circledSpaced",
    name: "圆圈字间隔",
    note: "圆圈字加间隔的组合变体。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "circled")),
  },
  {
    id: "squaredSpaced",
    name: "方块字间隔",
    note: "方块字加间隔的组合变体。",
    category: "enclosed",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "squared")),
  },
  {
    id: "negativeCircledStrike",
    name: "黑圈字删除线",
    note: "黑圈字加删除线的组合变体。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "negativeCircled")),
  },
  {
    id: "fullwidthStrike",
    name: "全角字删除线",
    note: "全角字加删除线的组合变体。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthUnderline",
    name: "全角字下划线",
    note: "全角字加下划线的组合变体。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthDoubleUnderline",
    name: "全角字双下划线",
    note: "全角字加双下划线的组合变体。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthSlash",
    name: "全角字斜线",
    note: "全角字加斜线的组合变体。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthZalgo",
    name: "全角字乱码",
    note: "全角字加乱码的组合变体。",
    category: "wide",
    coverage: "lettersDigits",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "fullwidth"), "zalgoLight"),
  },
  {
    id: "spacedStrike",
    name: "空格间隔删除线",
    note: "空格间隔加删除线的组合变体。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "spaced")),
  },
  {
    id: "spacedUnderline",
    name: "空格间隔下划线",
    note: "空格间隔加下划线的组合变体。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "spaced")),
  },
  {
    id: "spacedZalgo",
    name: "空格间隔乱码",
    note: "空格间隔加乱码的组合变体。",
    category: "wide",
    coverage: "all",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "spaced"), "zalgoLight"),
  },
  {
    id: "upsideDownStrike",
    name: "倒立字删除线",
    note: "倒立字加删除线的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownUnderline",
    name: "倒立字下划线",
    note: "倒立字加下划线的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownDoubleUnderline",
    name: "倒立字双下划线",
    note: "倒立字加双下划线的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownSlash",
    name: "倒立字斜线",
    note: "倒立字加斜线的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownSpaced",
    name: "倒立字间隔",
    note: "倒立字加间隔的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownZalgo",
    name: "倒立字乱码",
    note: "倒立字加乱码的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "upsideDown"), "zalgoLight"),
  },
  {
    id: "upsideDownOverline",
    name: "倒立字上划线",
    note: "倒立字加上划线的组合变体。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "upsideDown")),
  },
  {
    id: "reverse",
    name: "倒序字",
    note: "字符顺序整个倒过来,任意字符可用。",
    category: "flipped",
    coverage: "all",
    transform: (text) => Array.from(text).reverse().join(""),
  },
  {
    id: "reverseSpaced",
    name: "倒序字间隔",
    note: "倒序字加间隔的组合变体。",
    category: "flipped",
    coverage: "all",
    transform: (text) => spacedOut(convertText(text, "reverse")),
  },
  {
    id: "boldScriptSlash",
    name: "粗花体斜线",
    note: "粗花体加斜线的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "boldScript")),
  },
  {
    id: "boldScriptSpaced",
    name: "粗花体间隔",
    note: "粗花体加间隔的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "boldScript")),
  },
  {
    id: "boldScriptZalgo",
    name: "粗花体乱码",
    note: "粗花体加乱码的花式组合。",
    category: "script",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "boldScript"), "zalgoLight"),
  },
  {
    id: "boldScriptDoubleUnderline",
    name: "粗花体双下划线",
    note: "粗花体加双下划线的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "boldScript")),
  },
  {
    id: "boldScriptOverline",
    name: "粗花体上划线",
    note: "粗花体加上划线的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "boldScript")),
  },
  {
    id: "scriptOverline",
    name: "花体上划线",
    note: "花体加上划线的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "script")),
  },
  {
    id: "scriptHalo",
    name: "花体光环",
    note: "花体加光环的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "script")),
  },
  {
    id: "scriptWavy",
    name: "花体波浪",
    note: "花体加波浪的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "script")),
  },
  {
    id: "scriptDotted",
    name: "花体点子",
    note: "花体加点子的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "script")),
  },
  {
    id: "scriptArrow",
    name: "花体箭头",
    note: "花体加箭头的花式组合。",
    category: "script",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u20d7")(convertText(text, "script")),
  },
  {
    id: "frakturOverline",
    name: "哥特体上划线",
    note: "哥特体加上划线的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "fraktur")),
  },
  {
    id: "frakturHalo",
    name: "哥特体光环",
    note: "哥特体加光环的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "fraktur")),
  },
  {
    id: "frakturWavy",
    name: "哥特体波浪",
    note: "哥特体加波浪的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "fraktur")),
  },
  {
    id: "frakturDotted",
    name: "哥特体点子",
    note: "哥特体加点子的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "fraktur")),
  },
  {
    id: "frakturArrow",
    name: "哥特体箭头",
    note: "哥特体加箭头的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u20d7")(convertText(text, "fraktur")),
  },
  {
    id: "boldFrakturSlash",
    name: "粗哥特体斜线",
    note: "粗哥特体加斜线的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "boldFraktur")),
  },
  {
    id: "boldFrakturSpaced",
    name: "粗哥特体间隔",
    note: "粗哥特体加间隔的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "boldFraktur")),
  },
  {
    id: "boldFrakturZalgo",
    name: "粗哥特体乱码",
    note: "粗哥特体加乱码的花式组合。",
    category: "gothic",
    coverage: "letters",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "boldFraktur"), "zalgoLight"),
  },
  {
    id: "boldFrakturDoubleUnderline",
    name: "粗哥特体双下划线",
    note: "粗哥特体加双下划线的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "boldFraktur")),
  },
  {
    id: "boldFrakturOverline",
    name: "粗哥特体上划线",
    note: "粗哥特体加上划线的花式组合。",
    category: "gothic",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "boldFraktur")),
  },
  {
    id: "boldHalo",
    name: "粗体光环",
    note: "粗体加光环的花式组合。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "bold")),
  },
  {
    id: "boldWavy",
    name: "粗体波浪",
    note: "粗体加波浪的花式组合。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "bold")),
  },
  {
    id: "boldDotted",
    name: "粗体点子",
    note: "粗体加点子的花式组合。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "bold")),
  },
  {
    id: "boldSlash",
    name: "粗体斜线",
    note: "粗体加斜线的花式组合。",
    category: "bold",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "bold")),
  },
  {
    id: "italicDoubleUnderline",
    name: "斜体双下划线",
    note: "斜体加双下划线的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "italic")),
  },
  {
    id: "italicOverline",
    name: "斜体上划线",
    note: "斜体加上划线的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "italic")),
  },
  {
    id: "italicHalo",
    name: "斜体光环",
    note: "斜体加光环的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "italic")),
  },
  {
    id: "italicSlash",
    name: "斜体斜线",
    note: "斜体加斜线的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "italic")),
  },
  {
    id: "boldItalicStrike",
    name: "粗斜体删除线",
    note: "粗斜体加删除线的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "boldItalic")),
  },
  {
    id: "boldItalicUnderline",
    name: "粗斜体下划线",
    note: "粗斜体加下划线的花式组合。",
    category: "bold",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "boldItalic")),
  },
  {
    id: "sansBoldSlash",
    name: "无衬线粗体斜线",
    note: "无衬线粗体加斜线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldOverline",
    name: "无衬线粗体上划线",
    note: "无衬线粗体加上划线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldHalo",
    name: "无衬线粗体光环",
    note: "无衬线粗体加光环的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldWavy",
    name: "无衬线粗体波浪",
    note: "无衬线粗体加波浪的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldDotted",
    name: "无衬线粗体点子",
    note: "无衬线粗体加点子的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "sansBold")),
  },
  {
    id: "sansBoldDoubleUnderline",
    name: "无衬线粗体双下划线",
    note: "无衬线粗体加双下划线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "sansBold")),
  },
  {
    id: "doubleStruckUnderline",
    name: "空心体下划线",
    note: "空心体加下划线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "doubleStruck")),
  },
  {
    id: "doubleStruckSlash",
    name: "空心体斜线",
    note: "空心体加斜线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "doubleStruck")),
  },
  {
    id: "doubleStruckSpaced",
    name: "空心体间隔",
    note: "空心体加间隔的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "doubleStruck")),
  },
  {
    id: "monospaceStrike",
    name: "等宽体删除线",
    note: "等宽体加删除线的花式组合。",
    category: "sans",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "monospace")),
  },
  {
    id: "smallCapsSlash",
    name: "小型大写斜线",
    note: "小型大写加斜线的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsOverline",
    name: "小型大写上划线",
    note: "小型大写加上划线的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsHalo",
    name: "小型大写光环",
    note: "小型大写加光环的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsWavy",
    name: "小型大写波浪",
    note: "小型大写加波浪的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsDotted",
    name: "小型大写点子",
    note: "小型大写加点子的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "smallCaps")),
  },
  {
    id: "smallCapsDoubleUnderline",
    name: "小型大写双下划线",
    note: "小型大写加双下划线的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "smallCaps")),
  },
  {
    id: "superscriptStrike",
    name: "上标小字删除线",
    note: "上标小字加删除线的花式组合。",
    category: "small",
    coverage: "partial",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "superscript")),
  },
  {
    id: "subscriptStrike",
    name: "下标小字删除线",
    note: "下标小字加删除线的花式组合。",
    category: "small",
    coverage: "partial",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "subscript")),
  },
  {
    id: "superscriptSlash",
    name: "上标小字斜线",
    note: "上标小字加斜线的花式组合。",
    category: "small",
    coverage: "partial",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "superscript")),
  },
  {
    id: "smallCapsArrow",
    name: "小型大写箭头",
    note: "小型大写加箭头的花式组合。",
    category: "small",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u20d7")(convertText(text, "smallCaps")),
  },
  {
    id: "negativeSquaredStrike",
    name: "黑方框字删除线",
    note: "黑方框字加删除线的花式组合。",
    category: "enclosed",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "negativeSquared")),
  },
  {
    id: "negativeSquaredSpaced",
    name: "黑方框字间隔",
    note: "黑方框字加间隔的花式组合。",
    category: "enclosed",
    coverage: "letters",
    transform: (text) => spacedOut(convertText(text, "negativeSquared")),
  },
  {
    id: "parenthesizedSpaced",
    name: "括号字间隔",
    note: "括号字加间隔的花式组合。",
    category: "enclosed",
    coverage: "partial",
    transform: (text) => spacedOut(convertText(text, "parenthesized")),
  },
  {
    id: "bubbleSpaced",
    name: "气泡字间隔",
    note: "气泡字加间隔的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => spacedOut(convertText(text, "bubble")),
  },
  {
    id: "bubbleStrike",
    name: "气泡字删除线",
    note: "气泡字加删除线的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "bubble")),
  },
  {
    id: "squaredStrike",
    name: "方块字删除线",
    note: "方块字加删除线的花式组合。",
    category: "enclosed",
    coverage: "letters",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "squared")),
  },
  {
    id: "circledUnderline",
    name: "圆圈字下划线",
    note: "圆圈字加下划线的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "circled")),
  },
  {
    id: "circledOverline",
    name: "圆圈字上划线",
    note: "圆圈字加上划线的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "circled")),
  },
  {
    id: "circledWavy",
    name: "圆圈字波浪",
    note: "圆圈字加波浪的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "circled")),
  },
  {
    id: "negativeCircledUnderline",
    name: "黑圈字下划线",
    note: "黑圈字加下划线的花式组合。",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "negativeCircled")),
  },
  {
    id: "fullwidthOverline",
    name: "全角字上划线",
    note: "全角字加上划线的花式组合。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthHalo",
    name: "全角字光环",
    note: "全角字加光环的花式组合。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthWavy",
    name: "全角字波浪",
    note: "全角字加波浪的花式组合。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthDotted",
    name: "全角字点子",
    note: "全角字加点子的花式组合。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "fullwidth")),
  },
  {
    id: "fullwidthArrow",
    name: "全角字箭头",
    note: "全角字加箭头的花式组合。",
    category: "wide",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u20d7")(convertText(text, "fullwidth")),
  },
  {
    id: "spacedSlash",
    name: "空格间隔斜线",
    note: "空格间隔加斜线的花式组合。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "spaced")),
  },
  {
    id: "spacedDoubleUnderline",
    name: "空格间隔双下划线",
    note: "空格间隔加双下划线的花式组合。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "spaced")),
  },
  {
    id: "spacedOverline",
    name: "空格间隔上划线",
    note: "空格间隔加上划线的花式组合。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0305")(convertText(text, "spaced")),
  },
  {
    id: "spacedHalo",
    name: "空格间隔光环",
    note: "空格间隔加光环的花式组合。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "spaced")),
  },
  {
    id: "spacedWavy",
    name: "空格间隔波浪",
    note: "空格间隔加波浪的花式组合。",
    category: "wide",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "spaced")),
  },
  {
    id: "reverseStrike",
    name: "倒序字删除线",
    note: "倒序字加删除线的花式组合。",
    category: "flipped",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0336")(convertText(text, "reverse")),
  },
  {
    id: "reverseUnderline",
    name: "倒序字下划线",
    note: "倒序字加下划线的花式组合。",
    category: "flipped",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0332")(convertText(text, "reverse")),
  },
  {
    id: "reverseDoubleUnderline",
    name: "倒序字双下划线",
    note: "倒序字加双下划线的花式组合。",
    category: "flipped",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0333")(convertText(text, "reverse")),
  },
  {
    id: "reverseSlash",
    name: "倒序字斜线",
    note: "倒序字加斜线的花式组合。",
    category: "flipped",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0337")(convertText(text, "reverse")),
  },
  {
    id: "reverseZalgo",
    name: "倒序字乱码",
    note: "倒序字加乱码的花式组合。",
    category: "flipped",
    coverage: "all",
    risk: "密集符号可能让部分应用和屏幕阅读器困惑。",
    transform: (text) => convertText(convertText(text, "reverse"), "zalgoLight"),
  },
  {
    id: "reverseHalo",
    name: "倒序字光环",
    note: "倒序字加光环的花式组合。",
    category: "flipped",
    coverage: "all",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "reverse")),
  },
  {
    id: "upsideDownHalo",
    name: "倒立字光环",
    note: "倒立字加光环的花式组合。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u030a")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownWavy",
    name: "倒立字波浪",
    note: "倒立字加波浪的花式组合。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0334")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownDotted",
    name: "倒立字点子",
    note: "倒立字加点子的花式组合。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u0307")(convertText(text, "upsideDown")),
  },
  {
    id: "upsideDownArrow",
    name: "倒立字箭头",
    note: "倒立字加箭头的花式组合。",
    category: "flipped",
    coverage: "lettersDigits",
    transform: (text) => withCombiningMark("\u20d7")(convertText(text, "upsideDown")),
  },
  {
    id: "overline",
    name: "上划线",
    note: "任意字符叠加上划线标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0305")(text),
  },
  {
    id: "doubleOverline",
    name: "双上划线",
    note: "任意字符叠加双上划线标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u033f")(text),
  },
  {
    id: "dotted",
    name: "点子",
    note: "任意字符叠加点子标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0307")(text),
  },
  {
    id: "halo",
    name: "光环",
    note: "任意字符叠加光环标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u030a")(text),
  },
  {
    id: "wavy",
    name: "波浪",
    note: "任意字符叠加波浪标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0334")(text),
  },
  {
    id: "arrow",
    name: "箭头",
    note: "任意字符叠加箭头标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u20d7")(text),
  },
  {
    id: "crossedUnderline",
    name: "划线交叉",
    note: "任意字符叠加划线交叉标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0336\u0332")(text),
  },
  {
    id: "tildeUnder",
    name: "波浪下划线",
    note: "任意字符叠加波浪下划线标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0330")(text),
  },
  {
    id: "dotBelow",
    name: "下加点",
    note: "任意字符叠加下加点标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u0323")(text),
  },
  {
    id: "xAbove",
    name: "打叉",
    note: "任意字符叠加打叉标记,花式感直接拉满。",
    category: "effects",
    coverage: "all",
    transform: (text) => withCombiningMark("\u033d")(text),
  },
];

/** 查询是否命中样式的名称、说明或别名(中英文都可搜)。 */
export function styleMatches(style: TextStyle, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [style.name, style.note, ...(style.aliases ?? [])].some((part) =>
    part.toLowerCase().includes(q),
  );
}

export function getStyle(id: TextStyleId): TextStyle {
  const style = textStyles.find((s) => s.id === id);
  if (!style) throw new Error(`Unknown text style: ${id}`);
  return style;
}

export function convertText(text: string, id: TextStyleId): string {
  return getStyle(id).transform(text);
}

/** 在文本两侧贴装饰对。空格属于装饰对本身,不在这里处理。 */
export function withWrapper(text: string, wrapper: readonly [string, string]): string {
  return wrapper[0] + text + wrapper[1];
}

export function convertAll(text: string): ConvertedText[] {
  return textStyles.map((style) => ({
    id: style.id,
    name: style.name,
    note: style.note,
    category: style.category,
    coverage: style.coverage,
    risk: style.risk,
    text: style.transform(text),
  }));
}
