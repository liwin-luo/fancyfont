// Unicode text style conversion engine.
//
// Each style maps ASCII letters/digits to styled Unicode code points
// (e.g. "Mathematical Bold"). Characters outside a style's supported
// range pass through unchanged, so mixed input never breaks.
//
// Every style carries metadata used by the UI and for honest coverage
// labeling: which characters it converts and whether it has known
// display risks on some devices.

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
  | "doubleStruck"
  | "monospace"
  | "smallCaps"
  | "superscript"
  | "subscript"
  | "bubble"
  | "circled"
  | "parenthesized"
  | "squared"
  | "fullwidth"
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
  | "zalgoHeavy";

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

/** Honest coverage label shown in the UI. */
export type StyleCoverage =
  /** Converts A–Z and a–z only. */
  | "letters"
  /** Converts A–Z, a–z and 0–9. */
  | "lettersDigits"
  /** Converts most letters; some have no styled form and stay unchanged. */
  | "partial"
  /** Works on any character (adds combining marks). */
  | "all";

export interface TextStyle {
  id: TextStyleId;
  name: string;
  note: string;
  category: StyleCategory;
  coverage: StyleCoverage;
  /** Optional warning about how the style may render somewhere. */
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
  { id: "script", name: "Script" },
  { id: "gothic", name: "Gothic" },
  { id: "bold", name: "Bold & Italic" },
  { id: "sans", name: "Sans & Mono" },
  { id: "small", name: "Small & Tiny" },
  { id: "enclosed", name: "Bubble & Circled" },
  { id: "wide", name: "Wide" },
  { id: "flipped", name: "Upside Down" },
  { id: "effects", name: "Effects & Glitch" },
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
  /** ASCII code point -> replacement code point (typographic exceptions). */
  exceptions?: Record<number, number>;
  /** Widens spaces to this code point (used by the fullwidth style). */
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

// --- Latin small caps -----------------------------------------------------
// There is no small-capital X in Unicode, so it stays lowercase. Q uses
// U+01EB, the convention most generators follow for better font coverage.
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
  l: "\u1D0C",
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

// --- Circled / bubble / enclosed -------------------------------------------
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

// --- Upside down ------------------------------------------------------------
// Flips each character to a lookalike, then reverses the string so the
// result reads upside down.
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

// --- Superscript / subscript ------------------------------------------------
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

// --- Zalgo (glitch) ----------------------------------------------------------
// Deterministic by design: marks are chosen from a fixed list via a seeded
// PRNG keyed on character code + position + style salt, so the server and
// client always render the same output and tests can assert it.
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

// --- Style table -------------------------------------------------------------

export const textStyles: TextStyle[] = [
  {
    id: "script",
    name: "Cursive",
    note: "Handwritten script look. Letters only.",
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
    name: "Bold Cursive",
    note: "Heavy handwritten look. Letters only.",
    category: "script",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d4d0, lower: 0x1d4ea }),
  },
  {
    id: "fraktur",
    name: "Gothic",
    note: "Old-style blackletter. Letters only.",
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
    name: "Bold Gothic",
    note: "Heavy blackletter. Letters only.",
    category: "gothic",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d56c, lower: 0x1d586 }),
  },
  {
    id: "bold",
    name: "Bold",
    note: "Bold letters and digits.",
    category: "bold",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
  },
  {
    id: "italic",
    name: "Italic",
    note: "Slanted letters. Digits keep their normal look.",
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
    name: "Bold Italic",
    note: "Heavy slanted letters. Digits keep their normal look.",
    category: "bold",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d468, lower: 0x1d482 }),
  },
  {
    id: "sansBold",
    name: "Bold Sans",
    note: "Clean bold letters and digits.",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec }),
  },
  {
    id: "sansItalic",
    name: "Sans Italic",
    note: "Clean slanted letters. Digits keep their normal look.",
    category: "sans",
    coverage: "letters",
    transform: fromAlphabet({ upper: 0x1d608, lower: 0x1d622 }),
  },
  {
    id: "doubleStruck",
    name: "Outline",
    note: "Hollow letters, like chalkboard bold.",
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
    name: "Monospace",
    note: "Typewriter-style spacing.",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 }),
  },
  {
    id: "smallCaps",
    name: "Small Caps",
    note: "Small capital letters.",
    category: "small",
    coverage: "letters",
    transform: toSmallCaps,
  },
  {
    id: "superscript",
    name: "Tiny (Superscript)",
    note: "Raised tiny letters. Some capitals stay unchanged.",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUPERSCRIPT_MAP),
  },
  {
    id: "subscript",
    name: "Subscript",
    note: "Sunken tiny letters. Letters without a subscript form stay unchanged.",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUBSCRIPT_MAP),
  },
  {
    id: "bubble",
    name: "Bubble",
    note: "Filled circles around letters.",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toBubble,
  },
  {
    id: "circled",
    name: "Circled",
    note: "Thin circles around letters and digits.",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toCircled,
  },
  {
    id: "parenthesized",
    name: "Parenthesized",
    note: "Letters and digits 1–20 in parentheses. Zero stays unchanged.",
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
    name: "Squared",
    note: "Letters inside filled squares.",
    category: "enclosed",
    coverage: "letters",
    risk: "Often renders as a colorful emoji.",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 0x1f130 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 0x1f130 + cp - LOWERCASE_A;
      return null;
    }),
  },
  {
    id: "fullwidth",
    name: "Full Width",
    note: "Wide aesthetic letters. Also widens spaces.",
    category: "wide",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 0xff21, lower: 0xff41, digits: 0xff10, space: 0x3000 }),
  },
  {
    id: "upsideDown",
    name: "Upside Down",
    note: "Flips your text upside down, including punctuation.",
    category: "flipped",
    coverage: "lettersDigits",
    transform: toUpsideDown,
  },
  {
    id: "strike",
    name: "Strikethrough",
    note: "Draws a line through every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0336"),
  },
  {
    id: "underline",
    name: "Underline",
    note: "Draws a line under every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0332"),
  },
  {
    id: "doubleUnderline",
    name: "Double Underline",
    note: "Draws two lines under every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0333"),
  },
  {
    id: "slash",
    name: "Slashed",
    note: "Draws a slash through every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0338"),
  },
  {
    id: "boldStrike",
    name: "Bold Strikethrough",
    note: "Bold letters with a line through them.",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
      withCombiningMark("\u0336"),
    ),
  },
  {
    id: "boldUnderline",
    name: "Bold Underline",
    note: "Bold letters with a line underneath.",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
      withCombiningMark("\u0332"),
    ),
  },
  {
    id: "italicUnderline",
    name: "Italic Underline",
    note: "Slanted letters with a line underneath.",
    category: "effects",
    coverage: "letters",
    transform: compose(
      fromAlphabet({ upper: 0x1d434, lower: 0x1d44e }),
      withCombiningMark("\u0332"),
    ),
  },
  {
    id: "zalgoLight",
    name: "Glitch Light",
    note: "A few stray marks for a subtly cursed look.",
    category: "effects",
    coverage: "all",
    risk: "Heavy mark use can confuse some apps and screen readers.",
    transform: (text) => toZalgo(text, { salt: 11, above: [0, 1], below: [0, 1] }),
  },
  {
    id: "zalgoMedium",
    name: "Glitch Medium",
    note: "Medium glitch intensity.",
    category: "effects",
    coverage: "all",
    risk: "Heavy mark use can confuse some apps and screen readers.",
    transform: (text) => toZalgo(text, { salt: 37, above: [1, 2], below: [1, 2] }),
  },
  {
    id: "zalgoHeavy",
    name: "Glitch Heavy",
    note: "Maximum cursed energy. Use with care.",
    category: "effects",
    coverage: "all",
    risk: "Very heavy marks may break layout or copy in some apps.",
    transform: (text) => toZalgo(text, { salt: 73, above: [2, 4], below: [2, 4] }),
  },
];

// Shared helper for styles defined by a bare code-point mapper.
function mapCodePointsWrap(map: (cp: number) => number | null) {
  return (text: string) => mapCodePoints(text, map);
}

export function getStyle(id: TextStyleId): TextStyle {
  const style = textStyles.find((s) => s.id === id);
  if (!style) throw new Error(`Unknown text style: ${id}`);
  return style;
}

export function convertText(text: string, id: TextStyleId): string {
  return getStyle(id).transform(text);
}

/** Paste a decoration pair around text. Spaces live in the pair, not here. */
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
