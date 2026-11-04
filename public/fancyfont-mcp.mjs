// FancyFont local MCP server. Run: node fancyfont-mcp.mjs

// src/mcp/stdio.ts
import { createInterface } from "node:readline";

// src/lib/text-styles.ts
var UPPERCASE_A = 65;
var UPPERCASE_Z = 90;
var LOWERCASE_A = 97;
var LOWERCASE_Z = 122;
var DIGIT_ZERO = 48;
var DIGIT_NINE = 57;
var SPACE = 32;
function mapCodePoints(text, map) {
  let out = "";
  for (const ch of text) {
    const mapped = map(ch.codePointAt(0));
    out += mapped === null ? ch : String.fromCodePoint(mapped);
  }
  return out;
}
function fromAlphabet(spec) {
  return (text) => mapCodePoints(text, (cp) => {
    const exception = spec.exceptions?.[cp];
    if (exception !== void 0) return exception;
    if (spec.space !== void 0 && cp === SPACE) return spec.space;
    if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return spec.upper + cp - UPPERCASE_A;
    if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return spec.lower + cp - LOWERCASE_A;
    if (spec.digits !== void 0 && cp >= DIGIT_ZERO && cp <= DIGIT_NINE) {
      return spec.digits + cp - DIGIT_ZERO;
    }
    return null;
  });
}
function fromLetterMap(map) {
  return (text) => {
    let out = "";
    for (const ch of text) {
      const mapped = map[ch] ?? map[ch.toLowerCase()];
      out += mapped ?? ch;
    }
    return out;
  };
}
function compose(...steps) {
  return (text) => steps.reduce((acc, step) => step(acc), text);
}
function withCombiningMark(mark) {
  return (text) => {
    let out = "";
    for (const ch of text) out += ch + mark;
    return out;
  };
}
var SMALL_CAPS_MAP = {
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
  z: "\u1D22"
};
function toSmallCaps(text) {
  return fromLetterMap(SMALL_CAPS_MAP)(text);
}
function toCircled(text) {
  return mapCodePoints(text, (cp) => {
    if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 9398 + cp - UPPERCASE_A;
    if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 9424 + cp - LOWERCASE_A;
    if (cp === DIGIT_ZERO) return 9450;
    if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_NINE) return 9312 + cp - DIGIT_ZERO - 1;
    return null;
  });
}
function toBubble(text) {
  return mapCodePoints(text, (cp) => {
    if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 127312 + cp - UPPERCASE_A;
    if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 127312 + cp - LOWERCASE_A;
    if (cp === DIGIT_ZERO) return 9471;
    if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_NINE) return 10101 + cp - DIGIT_ZERO;
    return null;
  });
}
var UPSIDE_DOWN_MAP = {
  a: "\u0250",
  b: "q",
  c: "\u0254",
  d: "p",
  e: "\u01DD",
  f: "\u025F",
  g: "\u0183",
  h: "\u0265",
  i: "\u1D09",
  j: "\u027E",
  k: "\u029E",
  l: "l",
  m: "\u026F",
  n: "u",
  o: "o",
  p: "d",
  q: "b",
  r: "\u0279",
  s: "s",
  t: "\u0287",
  u: "n",
  v: "\u028C",
  w: "\u028D",
  x: "x",
  y: "\u028E",
  z: "z",
  A: "\u2200",
  B: "\u1660",
  C: "\u0186",
  E: "\u018E",
  F: "\u2132",
  G: "\u2141",
  J: "\u017F",
  L: "\u02E5",
  M: "W",
  P: "\u0500",
  R: "\u1D1A",
  T: "\u22A5",
  U: "\u2229",
  V: "\u0245",
  W: "M",
  Y: "\u2144",
  "1": "\u0196",
  "2": "\u1105",
  "3": "\u0190",
  "4": "\u3123",
  "5": "\u03DB",
  "6": "9",
  "7": "\u3125",
  "9": "6",
  ".": "\u02D9",
  ",": "'",
  "?": "\xBF",
  "!": "\xA1",
  "'": ",",
  '"': "\u201E",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "&": "\u214B",
  _: "\u203E"
};
function toUpsideDown(text) {
  let out = "";
  for (const ch of text) {
    out += UPSIDE_DOWN_MAP[ch] ?? UPSIDE_DOWN_MAP[ch.toLowerCase()] ?? ch;
  }
  return Array.from(out).reverse().join("");
}
var SUPERSCRIPT_MAP = {
  a: "\u1D43",
  b: "\u1D47",
  c: "\u1D9C",
  d: "\u1D48",
  e: "\u1D49",
  f: "\u1DA0",
  g: "\u1D4D",
  h: "\u02B0",
  i: "\u2071",
  j: "\u02B2",
  k: "\u1D4F",
  l: "\u02E1",
  m: "\u1D50",
  n: "\u207F",
  o: "\u1D52",
  p: "\u1D56",
  r: "\u02B3",
  s: "\u02E2",
  t: "\u1D57",
  u: "\u1D58",
  v: "\u1D5B",
  w: "\u02B7",
  x: "\u02E3",
  y: "\u02B8",
  z: "\u1DBB",
  A: "\u1D2C",
  B: "\u1D2E",
  D: "\u1D30",
  E: "\u1D31",
  G: "\u1D33",
  H: "\u1D34",
  I: "\u1D35",
  J: "\u1D36",
  K: "\u1D37",
  L: "\u1D38",
  M: "\u1D39",
  N: "\u1D3A",
  O: "\u1D3C",
  P: "\u1D3E",
  R: "\u1D3F",
  T: "\u1D40",
  U: "\u1D41",
  V: "\u2C7D",
  W: "\u1D42",
  "0": "\u2070",
  "1": "\xB9",
  "2": "\xB2",
  "3": "\xB3",
  "4": "\u2074",
  "5": "\u2075",
  "6": "\u2076",
  "7": "\u2077",
  "8": "\u2078",
  "9": "\u2079",
  "+": "\u207A",
  "-": "\u207B",
  "=": "\u207C",
  "(": "\u207D",
  ")": "\u207E"
};
var SUBSCRIPT_MAP = {
  a: "\u2090",
  e: "\u2091",
  h: "\u2095",
  i: "\u1D62",
  j: "\u2C7C",
  k: "\u2096",
  l: "\u2097",
  m: "\u2098",
  n: "\u2099",
  o: "\u2092",
  p: "\u209A",
  r: "\u1D63",
  s: "\u209B",
  t: "\u209C",
  u: "\u1D64",
  v: "\u1D65",
  x: "\u2093",
  "0": "\u2080",
  "1": "\u2081",
  "2": "\u2082",
  "3": "\u2083",
  "4": "\u2084",
  "5": "\u2085",
  "6": "\u2086",
  "7": "\u2087",
  "8": "\u2088",
  "9": "\u2089",
  "+": "\u208A",
  "-": "\u208B",
  "=": "\u208C",
  "(": "\u208D",
  ")": "\u208E"
};
var ZALGO_ABOVE = [
  "\u0300",
  "\u0301",
  "\u0302",
  "\u0303",
  "\u0304",
  "\u0306",
  "\u0307",
  "\u0308",
  "\u030A",
  "\u030B",
  "\u030C",
  "\u033D",
  "\u033E",
  "\u0342",
  "\u0343",
  "\u0344",
  "\u034A",
  "\u034B",
  "\u034C"
];
var ZALGO_BELOW = [
  "\u0316",
  "\u0317",
  "\u0318",
  "\u0319",
  "\u031C",
  "\u0320",
  "\u0321",
  "\u0322",
  "\u0324",
  "\u0325",
  "\u0326",
  "\u0329",
  "\u032A",
  "\u032B",
  "\u032C",
  "\u032D",
  "\u032E",
  "\u0330",
  "\u0331",
  "\u0339",
  "\u033A",
  "\u033B",
  "\u033C",
  "\u0345",
  "\u0347",
  "\u0348",
  "\u0349",
  "\u034D",
  "\u034E"
];
function toZalgo(text, intensity) {
  const chars = Array.from(text);
  let out = "";
  chars.forEach((ch, i) => {
    out += ch;
    let state = (ch.charCodeAt(0) * 2654435761 ^ i * 40503 ^ intensity.salt * 97) >>> 0;
    const rand = () => {
      state = state * 1664525 + 1013904223 >>> 0;
      return state / 4294967296;
    };
    const pick = (list) => list[Math.floor(rand() * list.length)];
    const [aMin, aMax] = intensity.above;
    const [bMin, bMax] = intensity.below;
    const aboveCount = aMin + Math.floor(rand() * (aMax - aMin + 1));
    const belowCount = bMin + Math.floor(rand() * (bMax - bMin + 1));
    for (let a = 0; a < aboveCount; a++) out += pick(ZALGO_ABOVE);
    for (let b = 0; b < belowCount; b++) out += pick(ZALGO_BELOW);
  });
  return out;
}
var textStyles = [
  {
    id: "script",
    name: "Cursive",
    aliases: ["cursive", "handwriting"],
    note: "Handwritten script look. Letters only.",
    category: "script",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 119964,
      lower: 119990,
      exceptions: {
        66: 8492,
        // B -> ℬ
        69: 8496,
        // E -> ℰ
        70: 8497,
        // F -> ℱ
        72: 8459,
        // H -> ℋ
        73: 8464,
        // I -> ℐ
        76: 8467,
        // L -> ℓ
        77: 8499,
        // M -> ℳ
        82: 8475,
        // R -> ℛ
        101: 8495,
        // e -> ℯ
        103: 8458,
        // g -> ℊ
        111: 8500
        // o -> ℴ
      }
    })
  },
  {
    id: "boldScript",
    name: "Bold Cursive",
    note: "Heavy handwritten look. Letters only.",
    category: "script",
    coverage: "letters",
    transform: fromAlphabet({ upper: 120016, lower: 120042 })
  },
  {
    id: "fraktur",
    name: "Gothic",
    aliases: ["gothic", "old english"],
    note: "Old-style blackletter. Letters only.",
    category: "gothic",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 120068,
      lower: 120094,
      exceptions: {
        67: 8493,
        // C -> ℭ
        72: 8460,
        // H -> ℌ
        73: 8465,
        // I -> ℑ
        82: 8476,
        // R -> ℜ
        90: 8488
        // Z -> ℨ
      }
    })
  },
  {
    id: "boldFraktur",
    name: "Bold Gothic",
    note: "Heavy blackletter. Letters only.",
    category: "gothic",
    coverage: "letters",
    transform: fromAlphabet({ upper: 120172, lower: 120198 })
  },
  {
    id: "bold",
    name: "Bold",
    note: "Bold letters and digits.",
    category: "bold",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 119808, lower: 119834, digits: 120782 })
  },
  {
    id: "italic",
    name: "Italic",
    note: "Slanted letters. Digits keep their normal look.",
    category: "bold",
    coverage: "letters",
    transform: fromAlphabet({
      upper: 119860,
      lower: 119886,
      exceptions: { 104: 8462 }
      // h -> ℎ
    })
  },
  {
    id: "boldItalic",
    name: "Bold Italic",
    note: "Heavy slanted letters. Digits keep their normal look.",
    category: "bold",
    coverage: "letters",
    transform: fromAlphabet({ upper: 119912, lower: 119938 })
  },
  {
    id: "sansBold",
    name: "Bold Sans",
    note: "Clean bold letters and digits.",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 120276, lower: 120302, digits: 120812 })
  },
  {
    id: "sansItalic",
    name: "Sans Italic",
    note: "Clean slanted letters. Digits keep their normal look.",
    category: "sans",
    coverage: "letters",
    transform: fromAlphabet({ upper: 120328, lower: 120354 })
  },
  {
    id: "doubleStruck",
    name: "Outline",
    note: "Hollow letters, like chalkboard bold.",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({
      upper: 120120,
      lower: 120146,
      digits: 120792,
      exceptions: {
        67: 8450,
        // C -> ℂ
        72: 8461,
        // H -> ℍ
        78: 8469,
        // N -> ℕ
        80: 8473,
        // P -> ℙ
        81: 8474,
        // Q -> ℚ
        82: 8477,
        // R -> ℝ
        90: 8484
        // Z -> ℤ
      }
    })
  },
  {
    id: "monospace",
    name: "Monospace",
    note: "Typewriter-style spacing.",
    category: "sans",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 120432, lower: 120458, digits: 120822 })
  },
  {
    id: "smallCaps",
    name: "Small Caps",
    aliases: ["small caps"],
    note: "Small capital letters.",
    category: "small",
    coverage: "letters",
    transform: toSmallCaps
  },
  {
    id: "superscript",
    name: "Tiny (Superscript)",
    aliases: ["tiny"],
    note: "Raised tiny letters. Some capitals stay unchanged.",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUPERSCRIPT_MAP)
  },
  {
    id: "subscript",
    name: "Subscript",
    aliases: ["tiny"],
    note: "Sunken tiny letters. Letters without a subscript form stay unchanged.",
    category: "small",
    coverage: "partial",
    transform: fromLetterMap(SUBSCRIPT_MAP)
  },
  {
    id: "bubble",
    name: "Bubble",
    aliases: ["bubble letters"],
    note: "Filled circles around letters.",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toBubble
  },
  {
    id: "circled",
    name: "Circled",
    note: "Thin circles around letters and digits.",
    category: "enclosed",
    coverage: "lettersDigits",
    transform: toCircled
  },
  {
    id: "parenthesized",
    name: "Parenthesized",
    note: "Letters and digits 1\u201320 in parentheses. Zero stays unchanged.",
    category: "enclosed",
    coverage: "partial",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 127248 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 9372 + cp - LOWERCASE_A;
      if (cp >= DIGIT_ZERO + 1 && cp <= DIGIT_ZERO + 20) return 9332 + cp - DIGIT_ZERO - 1;
      return null;
    })
  },
  {
    id: "squared",
    name: "Squared",
    note: "Letters inside filled squares.",
    category: "enclosed",
    coverage: "letters",
    risk: "Often renders as a colorful emoji.",
    transform: mapCodePointsWrap((cp) => {
      if (cp >= UPPERCASE_A && cp <= UPPERCASE_Z) return 127280 + cp - UPPERCASE_A;
      if (cp >= LOWERCASE_A && cp <= LOWERCASE_Z) return 127280 + cp - LOWERCASE_A;
      return null;
    })
  },
  {
    id: "fullwidth",
    name: "Full Width",
    note: "Wide aesthetic letters. Also widens spaces.",
    category: "wide",
    coverage: "lettersDigits",
    transform: fromAlphabet({ upper: 65313, lower: 65345, digits: 65296, space: 12288 })
  },
  {
    id: "upsideDown",
    name: "Upside Down",
    aliases: ["upside down", "flip"],
    note: "Flips your text upside down, including punctuation.",
    category: "flipped",
    coverage: "lettersDigits",
    transform: toUpsideDown
  },
  {
    id: "strike",
    name: "Strikethrough",
    note: "Draws a line through every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0336")
  },
  {
    id: "underline",
    name: "Underline",
    note: "Draws a line under every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0332")
  },
  {
    id: "doubleUnderline",
    name: "Double Underline",
    note: "Draws two lines under every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0333")
  },
  {
    id: "slash",
    name: "Slashed",
    note: "Draws a slash through every character.",
    category: "effects",
    coverage: "all",
    transform: withCombiningMark("\u0338")
  },
  {
    id: "boldStrike",
    name: "Bold Strikethrough",
    note: "Bold letters with a line through them.",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 119808, lower: 119834, digits: 120782 }),
      withCombiningMark("\u0336")
    )
  },
  {
    id: "boldUnderline",
    name: "Bold Underline",
    note: "Bold letters with a line underneath.",
    category: "effects",
    coverage: "lettersDigits",
    transform: compose(
      fromAlphabet({ upper: 119808, lower: 119834, digits: 120782 }),
      withCombiningMark("\u0332")
    )
  },
  {
    id: "italicUnderline",
    name: "Italic Underline",
    note: "Slanted letters with a line underneath.",
    category: "effects",
    coverage: "letters",
    transform: compose(
      fromAlphabet({ upper: 119860, lower: 119886 }),
      withCombiningMark("\u0332")
    )
  },
  {
    id: "zalgoLight",
    name: "Glitch Light",
    aliases: ["zalgo", "glitch"],
    note: "A few stray marks for a subtly cursed look.",
    category: "effects",
    coverage: "all",
    risk: "Heavy mark use can confuse some apps and screen readers.",
    transform: (text) => toZalgo(text, { salt: 11, above: [0, 1], below: [0, 1] })
  },
  {
    id: "zalgoMedium",
    name: "Glitch Medium",
    aliases: ["zalgo", "glitch"],
    note: "Medium glitch intensity.",
    category: "effects",
    coverage: "all",
    risk: "Heavy mark use can confuse some apps and screen readers.",
    transform: (text) => toZalgo(text, { salt: 37, above: [1, 2], below: [1, 2] })
  },
  {
    id: "zalgoHeavy",
    name: "Glitch Heavy",
    aliases: ["zalgo", "glitch"],
    note: "Maximum cursed energy. Use with care.",
    category: "effects",
    coverage: "all",
    risk: "Very heavy marks may break layout or copy in some apps.",
    transform: (text) => toZalgo(text, { salt: 73, above: [2, 4], below: [2, 4] })
  }
];
function mapCodePointsWrap(map) {
  return (text) => mapCodePoints(text, map);
}
function getStyle(id) {
  const style = textStyles.find((s) => s.id === id);
  if (!style) throw new Error(`Unknown text style: ${id}`);
  return style;
}
function convertText(text, id) {
  return getStyle(id).transform(text);
}
function convertAll(text) {
  return textStyles.map((style) => ({
    id: style.id,
    name: style.name,
    note: style.note,
    category: style.category,
    coverage: style.coverage,
    risk: style.risk,
    text: style.transform(text)
  }));
}

// src/lib/nickname.ts
var vibeStyles = [
  {
    id: "cool",
    name: "Cool",
    accent: "#60A5FA",
    wrappers: [
      ["\uA9C1\u0F12", "\u0F12\uA9C2"],
      ["\u2605\u5F61", "\u5F61\u2605"],
      ["\u26A1", "\u26A1"],
      ["\u2646", "\u2646"],
      ["\u300E", "\u300F"],
      ["\u2726", "\u2726"],
      ["\u5F61", "\u5F61"],
      ["\uA9C1", "\uA9C2"],
      ["\u3010", "\u3011"]
    ],
    transforms: ["script", "smallCaps", "bold", "identity"]
  },
  {
    id: "dark",
    name: "Dark",
    accent: "#8B5CF6",
    wrappers: [
      ["\uA9C1\u2620\uFE0E", "\u2620\uFE0E\uA9C2"],
      ["\u2620\uFE0E", "\u2620\uFE0E"],
      ["\u2020", "\u2020"],
      ["\u271E", "\u271E"],
      ["\u300C\u2718", "\u2718\u300D"],
      ["\u25E4", "\u25E5"],
      ["\u263E", "\u263D"],
      ["\u0F04", "\u0F04"]
    ],
    transforms: ["fraktur", "boldFraktur", "smallCaps", "identity"]
  },
  {
    id: "cute",
    name: "Cute",
    accent: "#F9A8D4",
    wrappers: [
      ["\u2661", "\u2661"],
      ["\u0B68\u0B67", "\u0B68\u0B67"],
      ["\u273F", "\u273F"],
      ["\uA4B0", "\uA4B1"],
      ["\u22C6\uFF61\u02DA", "\u02DA\uFF61\u22C6"],
      ["\u2740", "\u2740"],
      ["\u0B67", "\u0B68"],
      ["\u1C14\u1A5A", "\u1C14\u1A5A"]
    ],
    transforms: ["bubble", "script", "circled", "identity"]
  },
  {
    id: "pro",
    name: "Pro",
    accent: "#64748B",
    wrappers: [
      ["\u272A", "\u272A"],
      ["\u300C", "\u300D"],
      ["\u3014", "\u3015"],
      ["\u25E4", "\u25E5"],
      ["\u3016", "\u3017"],
      ["\u2308", "\u2309"]
    ],
    transforms: ["smallCaps", "bold", "monospace", "identity"]
  },
  {
    id: "minimal",
    name: "Minimal",
    accent: "#A8A29E",
    wrappers: [
      ["", ""],
      ["\xB7 ", " \xB7"],
      ["\u2014 ", " \u2014"],
      ["\u2726 ", ""],
      ["", " \u2727"]
    ],
    transforms: ["smallCaps", "identity"]
  },
  {
    id: "gothic",
    name: "Gothic",
    accent: "#3F3F46",
    wrappers: [
      ["\u269C", "\u269C"],
      ["\u2767", "\u2767"],
      ["\u2720", "\u2720"],
      ["\u276E", "\u276F"],
      ["\u27E6", "\u27E7"],
      ["\u231C", "\u231D"],
      ["\u0F3A", "\u0F3B"],
      ["\u2694", "\u2694"]
    ],
    transforms: ["fraktur", "boldFraktur", "boldScript", "identity"]
  },
  {
    id: "aesthetic",
    name: "Aesthetic",
    accent: "#A5B4FC",
    wrappers: [
      ["\xB7\u02DA", "\u02DA\xB7"],
      ["\u2727\uFF65\uFF9F", "\uFF65\uFF9F\u2727"],
      ["\u22C6", "\u22C6"],
      ["\u22B9", "\u22B9"],
      ["\u2661", "\u2661"],
      ["\u02D6", "\u02D6"],
      ["\u22C6\u02DA", "\u02DA\u22C6"]
    ],
    transforms: ["fullwidth", "smallCaps", "script", "identity"]
  }
];
var MAX_NICKNAME_LENGTH = 24;
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return h >>> 0;
}
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function shuffle(items, seed) {
  const rand = mulberry32(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
var SUGGESTED_BASES = ["Nova", "Luna", "Rex", "Milo", "Aria", "Kai", "Nyx", "Juno"];
function suggestedBases(style, nonce) {
  return shuffle([...SUGGESTED_BASES], hashSeed(`suggest|${style}|${nonce}`)).slice(0, 4);
}
function poolFor(name, style) {
  const selected = style === "all" ? vibeStyles : vibeStyles.filter((s) => s.id === style);
  const pool = [];
  for (const vibe of selected) {
    for (const [left, right] of vibe.wrappers) {
      for (const transform of vibe.transforms) {
        const inner = transform === "identity" ? name : convertText(name, transform);
        pool.push(left + inner + right);
      }
    }
  }
  return pool;
}
function generateNicknames(rawName, style = "all", nonce = 0, count = 24) {
  const name = rawName.trim().replace(/\s+/g, " ").slice(0, MAX_NICKNAME_LENGTH);
  const names = name ? [name] : suggestedBases(style, nonce);
  const unique = Array.from(new Set(names.flatMap((base) => poolFor(base, style))));
  const seed = hashSeed(`${(name || "suggest").toLowerCase()}|${style}|${nonce}`);
  return shuffle(unique, seed).slice(0, count);
}

// src/lib/symbols-data.ts
var symbolCategories = [
  { id: "hearts", name: "Hearts" },
  { id: "stars", name: "Stars" },
  { id: "arrows", name: "Arrows" },
  { id: "crowns", name: "Crowns" },
  { id: "flowers", name: "Flowers" },
  { id: "wings", name: "Wings & Bows" },
  { id: "brackets", name: "Brackets" },
  { id: "lines", name: "Lines & Borders" },
  { id: "faces", name: "Faces" },
  { id: "kaomoji", name: "Kaomoji" },
  { id: "vibes", name: "Music & Vibes" },
  { id: "checks", name: "Check & Cross" },
  { id: "math", name: "Math" },
  { id: "greek", name: "Greek" },
  { id: "currency", name: "Currency" },
  { id: "numbers", name: "Numbers & Roman" },
  { id: "dots", name: "Dots & Marks" },
  { id: "invisible", name: "Invisible" }
];
var DATA = {
  hearts: [
    ["\u2665", "Black heart suit", "heart love"],
    ["\u2661", "White heart outline", "heart love outline"],
    ["\u2764\uFE0F", "Red heart", "heart love emoji"],
    ["\u{1FA77}", "Pink heart", "heart pink emoji"],
    ["\u{1F9E1}", "Orange heart", "heart orange emoji"],
    ["\u{1F49B}", "Yellow heart", "heart yellow emoji"],
    ["\u{1F49A}", "Green heart", "heart green emoji"],
    ["\u{1F499}", "Blue heart", "heart blue emoji"],
    ["\u{1FA75}", "Light blue heart", "heart cyan emoji"],
    ["\u{1F49C}", "Purple heart", "heart purple emoji"],
    ["\u{1F90E}", "Brown heart", "heart brown emoji"],
    ["\u{1F5A4}", "Black heart emoji", "heart black emoji"],
    ["\u{1FA76}", "Grey heart", "heart gray emoji"],
    ["\u{1F90D}", "White heart emoji", "heart white emoji"],
    ["\u{1F494}", "Broken heart", "heart broken sad emoji"],
    ["\u2763\uFE0F", "Heart exclamation", "heart exclamation"],
    ["\u{1F495}", "Two hearts", "hearts love emoji"],
    ["\u{1F49E}", "Revolving hearts", "hearts spinning emoji"],
    ["\u{1F493}", "Beating heart", "heart pulse emoji"],
    ["\u{1F497}", "Growing heart", "heart emoji"],
    ["\u{1F496}", "Sparkling heart", "heart sparkle emoji"],
    ["\u{1F498}", "Heart with arrow", "heart arrow valentine emoji"],
    ["\u{1F49D}", "Heart with ribbon", "heart gift emoji"],
    ["\u2765", "Rotated heavy heart", "heart decorative"],
    ["\u2766", "Floral heart", "heart ornament"],
    ["\u2767", "Rotated floral heart", "heart ornament"],
    ["\u10E6", "Georgian heart", "heart"],
    ["\u1C14", "Cute script heart", "heart cute decorative"],
    ["\u196B\u1B61", "Heart fingers", "heart cute tiktok"],
    ["\u2661\u0337", "Heart with slash", "heart"]
  ],
  stars: [
    ["\u2605", "Black star", "star favorite"],
    ["\u2606", "White star outline", "star outline"],
    ["\u2726", "Four-pointed star", "star sparkle"],
    ["\u2727", "Outline four-pointed star", "star sparkle outline"],
    ["\u2728", "Sparkles", "sparkles shine emoji"],
    ["\u2B50", "Star emoji", "star emoji"],
    ["\u{1F31F}", "Glowing star", "star glow emoji"],
    ["\u{1F4AB}", "Dizzy star", "star dizzy emoji"],
    ["\u{1F320}", "Shooting star", "star shooting meteor emoji"],
    ["\u2729", "Star with circle", "star"],
    ["\u272A", "Circled star", "star circle"],
    ["\u272B", "Open center star", "star"],
    ["\u272C", "Black center star", "star"],
    ["\u272D", "Outlined pointed star", "star"],
    ["\u272E", "Bold pointed star", "star"],
    ["\u272F", "Pinwheel star", "star"],
    ["\u2730", "Shadowed white star", "star"],
    ["\u22C6", "Small star operator", "star tiny"],
    ["\u2735", "Eight-pointed pinwheel star", "star"],
    ["\u2736", "Six-pointed black star", "star"],
    ["\u2737", "Six-pointed star with dot", "star"],
    ["\u2738", "Eight-pointed black star", "star"],
    ["\u2739", "Twelve-pointed black star", "star"],
    ["\u273A", "Sixteen-pointed asterisk star", "star burst"],
    ["\u2742", "Circled open-center star", "star sun"],
    ["\u2749", "Balloon-spoked asterisk star", "star"],
    ["\u2604\uFE0F", "Comet", "comet star emoji"]
  ],
  arrows: [
    ["\u2192", "Rightwards arrow", "arrow right"],
    ["\u2190", "Leftwards arrow", "arrow left"],
    ["\u2191", "Upwards arrow", "arrow up"],
    ["\u2193", "Downwards arrow", "arrow down"],
    ["\u2196", "Up-left arrow", "arrow diagonal"],
    ["\u2197", "Up-right arrow", "arrow diagonal"],
    ["\u2198", "Down-right arrow", "arrow diagonal"],
    ["\u2199", "Down-left arrow", "arrow diagonal"],
    ["\u2194", "Left-right arrow", "arrow both"],
    ["\u2195", "Up-down arrow", "arrow both"],
    ["\u21D2", "Double rightwards arrow", "arrow double right"],
    ["\u21D0", "Double leftwards arrow", "arrow double left"],
    ["\u21D4", "Double left-right arrow", "arrow double both"],
    ["\u279C", "Heavy round-tipped arrow", "arrow"],
    ["\u27A4", "Black rightwards arrowhead", "arrow"],
    ["\u2794", "Heavy wide-headed arrow", "arrow"],
    ["\u279F", "Dashed triangle arrow", "arrow"],
    ["\u27A0", "Heavy dashed triangle arrow", "arrow"],
    ["\u27A5", "Black curved down-right arrow", "arrow"],
    ["\u27A6", "Heavy black curved up-right arrow", "arrow"],
    ["\u27B5", "Rightwards feathered arrow", "arrow"],
    ["\u27B8", "Heavy black-feathered arrow", "arrow"],
    ["\u219D", "Rightwards wavy arrow", "arrow wavy"],
    ["\u21E2", "Rightwards dashed arrow", "arrow dashed"],
    ["\u21E0", "Leftwards dashed arrow", "arrow dashed"],
    ["\u2934", "Arrow curving up", "arrow curve"],
    ["\u2935", "Arrow curving down", "arrow curve"],
    ["\u21A9", "Leftwards hook arrow", "arrow hook return"],
    ["\u21AA", "Rightwards hook arrow", "arrow hook"]
  ],
  crowns: [
    ["\u2654", "White chess king", "crown king chess"],
    ["\u2655", "White chess queen", "crown queen chess"],
    ["\u265A", "Black chess king", "crown king chess"],
    ["\u265B", "Black chess queen", "crown queen chess"],
    ["\u{1F451}", "Crown emoji", "crown king queen emoji"],
    ["\u269C", "Fleur-de-lis", "royal lily emblem"],
    ["\u265C", "Black chess rook", "castle chess tower"],
    ["\u{1FAC5}", "Person with crown", "royal crown emoji"]
  ],
  flowers: [
    ["\u273F", "Black flower", "flower"],
    ["\u2740", "White flower outline", "flower"],
    ["\u2741", "Eight-petal flower outline", "flower"],
    ["\u273E", "Six-petal black flower", "flower"],
    ["\u273D", "Heavy teardrop flower", "flower"],
    ["\u273C", "Open-center teardrop flower", "flower"],
    ["\u2743", "Heavy teardrop-spoked flower", "flower"],
    ["\u274B", "Heavy eight-teardrop flower", "flower snowflake"],
    ["\u2724", "Heavy four-balloon flower", "flower"],
    ["\u2725", "Four-balloon club flower", "flower"],
    ["\u2698", "Flower glyph", "flower plant"],
    ["\u274A", "Eight-teardrop propeller flower", "flower"],
    ["\u{1F338}", "Cherry blossom", "flower sakura pink emoji"],
    ["\u{1F33A}", "Hibiscus", "flower tropical emoji"],
    ["\u{1F33B}", "Sunflower", "flower yellow emoji"],
    ["\u{1F33C}", "Blossom", "flower daisy emoji"],
    ["\u{1F337}", "Tulip", "flower pink emoji"],
    ["\u{1F339}", "Rose", "flower red emoji"],
    ["\u{1F490}", "Bouquet", "flowers gift emoji"],
    ["\u{1F4AE}", "White flower", "flower emoji"],
    ["\u{1F3F5}\uFE0F", "Rosette", "flower badge emoji"],
    ["\u{1F940}", "Wilted flower", "flower sad emoji"]
  ],
  wings: [
    ["\u0B68", "Bow left", "bow wing cute"],
    ["\u0B67", "Bow right", "bow wing cute"],
    ["\u0B68\u0B67", "Bows pair", "bow wing cute aesthetic"],
    ["\u029A", "Fish hook left", "wing left cute"],
    ["\u025E", "Fish hook right", "wing right cute"],
    ["\u029A\u2665\u025E", "Wings around heart", "wing heart"],
    ["\uA4B0", "Left tortoise bracket cute", "wing bracket soft"],
    ["\uA4B1", "Right tortoise bracket cute", "wing bracket soft"],
    ["\uA4B0\u2665\uA4B1", "Soft brackets around heart", "wing heart"],
    ["\u22D8", "Triple chevron left", "wing left"],
    ["\u22D9", "Triple chevron right", "wing right"],
    ["\xAB", "Left guillemet", "wing quote left"],
    ["\xBB", "Right guillemet", "wing quote right"],
    ["\u2039", "Single guillemet left", "wing quote"],
    ["\u203A", "Single guillemet right", "wing quote"],
    ["\u226A", "Double angle left", "wing"],
    ["\u226B", "Double angle right", "wing"],
    ["\u{13183}", "Egyptian feather", "wing feather aesthetic"],
    ["\u{13083}", "Egyptian swoosh", "wing aesthetic"],
    ["\u{1FABD}", "Wing emoji", "wing angel emoji"],
    ["\u{1F380}", "Ribbon bow", "bow pink cute emoji"]
  ],
  brackets: [
    ["\u3010\u3011", "Lenticular brackets", "bracket japanese"],
    ["\u300E\u300F", "White corner brackets", "bracket japanese"],
    ["\u300C\u300D", "Corner brackets", "bracket japanese"],
    ["\u3016\u3017", "White tortoise shell brackets", "bracket"],
    ["\u3014\u3015", "Tortoise shell brackets", "bracket"],
    ["\u300A\u300B", "Double angle brackets", "bracket"],
    ["\u3008\u3009", "Angle brackets", "bracket"],
    ["\u2768\u2769", "Medium parentheses", "bracket"],
    ["\u2770\u2771", "Heavy angle brackets", "bracket"],
    ["\u27E6\u27E7", "Mathematical white square brackets", "bracket"],
    ["\u27EA\u27EB", "Mathematical double angle brackets", "bracket"],
    ["\u2308\u2309", "Ceiling brackets", "bracket corner"],
    ["\u230A\u230B", "Floor brackets", "bracket corner"],
    ["\u231C\u231D", "Top corner brackets", "bracket corner"],
    ["\u231E\u231F", "Bottom corner brackets", "bracket corner"],
    ["\uA9C1\uA9C2", "Javanese ornaments", "bracket decorative popular"],
    ["\u0F3A\u0F3B", "Tibetan marks", "bracket decorative popular"],
    ["\u27E8\u27E9", "Mathematical angle brackets", "bracket"],
    ["\u2772\u2773", "Medium square brackets", "bracket"],
    ["()", "Parentheses", "bracket plain"]
  ],
  lines: [
    ["\u2500", "Light horizontal line", "line divider"],
    ["\u2501", "Heavy horizontal line", "line divider bold"],
    ["\u2550", "Double horizontal line", "line divider double"],
    ["\u2551", "Double vertical line", "line double"],
    ["\u2502", "Light vertical line", "line"],
    ["\u2503", "Heavy vertical line", "line bold"],
    ["\u2504", "Dashed horizontal line", "line dashed"],
    ["\u2505", "Heavy dashed horizontal line", "line dashed"],
    ["\u2508", "Dotted horizontal line", "line dotted"],
    ["\u2509", "Heavy dotted horizontal line", "line dotted"],
    ["\u256D", "Rounded corner down-right", "line rounded"],
    ["\u256E", "Rounded corner down-left", "line rounded"],
    ["\u256F", "Rounded corner up-left", "line rounded"],
    ["\u2570", "Rounded corner up-right", "line rounded"],
    ["\u2571", "Diagonal slash", "line diagonal"],
    ["\u2572", "Diagonal backslash", "line diagonal"],
    ["\u2573", "Diagonal cross", "line cross"],
    ["\u25AC", "Black rectangle bar", "line bar"],
    ["\u2581", "Lower block one eighth", "line block"],
    ["\u2584", "Lower block half", "line block"],
    ["\u2580", "Upper block half", "line block"],
    ["\u2588", "Full block", "line block"],
    ["\u2312", "Arc", "line curve"]
  ],
  faces: [
    ["\u30C4", "Katakana tsu smiley", "face smile japanese"],
    ["\u30B7", "Katakana shi smiley", "face smile japanese"],
    ["\u32DB", "Squared shi smiley", "face smile"],
    ["\uFB62", "Smiling mark", "face smile"],
    ["(\u30C4)", "Tsu smiley in brackets", "face smile classic"],
    ["\xAF\\_(\u30C4)_/\xAF", "Shrug kaomoji", "face shrug"],
    ["(\u2022\u203F\u2022)", "Happy face", "face smile kaomoji"],
    ["(\u25D5\u203F\u25D5)", "Cute face", "face cute kaomoji"],
    ["(\u2665\u203F\u2665)", "Heart-eyes face", "face love kaomoji"],
    ["(\xAC\u203F\xAC)", "Sly face", "face sly kaomoji"],
    ["\u0295\u2022\u1D25\u2022\u0294", "Bear kaomoji", "face bear cute"],
    ["\u1D54\u1D25\u1D54", "Dog face", "face dog cute"],
    ["(\u261E\uFF9F\u30EE\uFF9F)\u261E", "Pointing face", "face point kaomoji"]
  ],
  vibes: [
    ["\u266A", "Eighth note", "music note"],
    ["\u266B", "Beamed eighth notes", "music notes"],
    ["\u266C", "Beamed sixteenth notes", "music notes"],
    ["\u2669", "Quarter note", "music note"],
    ["\u266D", "Music flat sign", "music flat"],
    ["\u266E", "Music natural sign", "music natural"],
    ["\u266F", "Music sharp sign", "music sharp"],
    ["\u{1D11E}", "Treble clef", "music clef"],
    ["\u{1F3B5}", "Musical note", "music emoji"],
    ["\u{1F3B6}", "Musical notes", "music emoji"],
    ["\u{1F3B8}", "Guitar", "music guitar emoji"],
    ["\u{1F3A7}", "Headphone", "music audio emoji"],
    ["\u{1F319}", "Crescent moon", "moon night emoji"],
    ["\u263E", "Crescent moon left", "moon night"],
    ["\u263D", "Crescent moon right", "moon night"],
    ["\u26A1", "High voltage bolt", "lightning bolt energy emoji"],
    ["\u2601\uFE0F", "Cloud", "cloud sky emoji"],
    ["\u{1F48E}", "Gem stone", "diamond gem emoji"],
    ["\u2660", "Black spade suit", "card spade"],
    ["\u2664", "White spade suit", "card spade outline"],
    ["\u2663", "Black club suit", "card club"],
    ["\u2667", "White club suit", "card club outline"],
    ["\u2666", "Black diamond suit", "card diamond"],
    ["\u2662", "White diamond suit", "card diamond outline"]
  ],
  checks: [
    ["\u2713", "Check mark", "check tick yes"],
    ["\u2714", "Heavy check mark", "check tick bold"],
    ["\u2705", "White heavy check mark", "check tick emoji"],
    ["\u2611", "Ballot box with check", "checkbox check"],
    ["\u2610", "Ballot box empty", "checkbox empty"],
    ["\u2612", "Ballot box with x", "checkbox cross"],
    ["\u2717", "Ballot x", "cross no x"],
    ["\u2718", "Heavy ballot x", "cross no bold"],
    ["\u2715", "Multiplication x", "cross x"],
    ["\u274C", "Cross mark emoji", "cross no red emoji"],
    ["\u274E", "Green cross mark", "cross no green emoji"],
    ["\xD7", "Multiplication sign", "multiply times x"],
    ["\u221A", "Square root", "check radical root"],
    ["\u2297", "Circled times", "cross circle"],
    ["\u2298", "Circled division slash", "no circle forbidden"],
    ["\u26D3\uFE0F\u200D\u{1F4A5}", "Broken chain", "broken link emoji"]
  ],
  math: [
    ["+", "Plus sign", "math plus add"],
    ["\u2212", "Minus sign", "math minus subtract"],
    ["\xF7", "Division sign", "math divide"],
    ["=", "Equals sign", "math equals"],
    ["\u2260", "Not equal to", "math unequal"],
    ["\u2248", "Almost equal", "math approx"],
    ["\u2261", "Identical to", "math identical"],
    ["\xB1", "Plus minus", "math plus minus"],
    ["\u221E", "Infinity", "math infinite forever"],
    ["\u2211", "N-ary summation", "math sum sigma"],
    ["\u220F", "N-ary product", "math product pi"],
    ["\u222B", "Integral", "math integral"],
    ["\u2202", "Partial differential", "math partial"],
    ["\u03C0", "Greek small pi", "math pi"],
    ["\xB5", "Micro sign", "math micro mu"],
    ["\xB0", "Degree sign", "degree temperature"],
    ["\u2030", "Per mille sign", "permille percent"],
    ["\u2264", "Less or equal", "math compare"],
    ["\u2265", "Greater or equal", "math compare"],
    ["\u222A", "Union", "math set union"],
    ["\u2229", "Intersection", "math set intersect"],
    ["\u2208", "Element of", "math set member"],
    ["\u2234", "Therefore", "math therefore"],
    ["\u2235", "Because", "math because"],
    ["\u22A5", "Up tack perpendicular", "math perpendicular"]
  ],
  greek: [
    ["\u03B1", "Greek small alpha", "greek alpha"],
    ["\u03B2", "Greek small beta", "greek beta"],
    ["\u03B3", "Greek small gamma", "greek gamma"],
    ["\u03B4", "Greek small delta", "greek delta"],
    ["\u03B5", "Greek small epsilon", "greek epsilon"],
    ["\u03B6", "Greek small zeta", "greek zeta"],
    ["\u03B7", "Greek small eta", "greek eta"],
    ["\u03B8", "Greek small theta", "greek theta"],
    ["\u03B9", "Greek small iota", "greek iota"],
    ["\u03BA", "Greek small kappa", "greek kappa"],
    ["\u03BB", "Greek small lambda", "greek lambda"],
    ["\u03BC", "Greek small mu", "greek mu"],
    ["\u03BD", "Greek small nu", "greek nu"],
    ["\u03BE", "Greek small xi", "greek xi"],
    ["\u03BF", "Greek small omicron", "greek omicron"],
    ["\u03C0", "Greek small pi", "greek pi"],
    ["\u03C1", "Greek small rho", "greek rho"],
    ["\u03C3", "Greek small sigma", "greek sigma"],
    ["\u03C4", "Greek small tau", "greek tau"],
    ["\u03C5", "Greek small upsilon", "greek upsilon"],
    ["\u03C6", "Greek small phi", "greek phi"],
    ["\u03C7", "Greek small chi", "greek chi"],
    ["\u03C8", "Greek small psi", "greek psi"],
    ["\u03C9", "Greek small omega", "greek omega"],
    ["\u03A9", "Greek capital omega", "greek omega ohm"],
    ["\u0394", "Greek capital delta", "greek delta triangle"],
    ["\u03A3", "Greek capital sigma", "greek sigma sum"],
    ["\u03A6", "Greek capital phi", "greek phi"],
    ["\u03A8", "Greek capital psi", "greek psi"],
    ["\u0393", "Greek capital gamma", "greek gamma"]
  ],
  currency: [
    ["$", "Dollar sign", "money dollar usd"],
    ["\u20AC", "Euro sign", "money euro eur"],
    ["\xA3", "Pound sign", "money pound gbp"],
    ["\xA5", "Yen sign", "money yen yuan"],
    ["\xA2", "Cent sign", "money cent"],
    ["\xA4", "Currency sign", "money generic"],
    ["\u20BD", "Ruble sign", "money ruble russia"],
    ["\u20A9", "Won sign", "money won korea"],
    ["\u20B9", "Rupee sign", "money rupee india"],
    ["\u20BF", "Bitcoin sign", "money bitcoin crypto"],
    ["\u20B4", "Hryvnia sign", "money ukraine"],
    ["\u20B1", "Peso sign", "money peso"],
    ["\u20BA", "Lira sign", "money lira turkey"],
    ["\u20A6", "Naira sign", "money naira nigeria"],
    ["\u20AE", "Tugrik sign", "money tugrik mongolia"],
    ["\u20B2", "Guarani sign", "money guarani paraguay"],
    ["\u20B5", "Cedi sign", "money cedi ghana"],
    ["\u20A1", "Colon sign", "money colon costa rica"],
    ["\u20AA", "New shekel sign", "money shekel israel"],
    ["\u20AB", "Dong sign", "money dong vietnam"],
    ["\u09F3", "Bengali taka", "money taka bangladesh"],
    ["\u0192", "Florin sign", "money florin guilder"]
  ],
  numbers: [
    ["\u2160", "Roman numeral one", "roman number 1"],
    ["\u2161", "Roman numeral two", "roman number 2"],
    ["\u2162", "Roman numeral three", "roman number 3"],
    ["\u2163", "Roman numeral four", "roman number 4"],
    ["\u2164", "Roman numeral five", "roman number 5"],
    ["\u2165", "Roman numeral six", "roman number 6"],
    ["\u2166", "Roman numeral seven", "roman number 7"],
    ["\u2167", "Roman numeral eight", "roman number 8"],
    ["\u2168", "Roman numeral nine", "roman number 9"],
    ["\u2169", "Roman numeral ten", "roman number 10"],
    ["\u216A", "Roman numeral eleven", "roman number 11"],
    ["\u216B", "Roman numeral twelve", "roman number 12"],
    ["\u2460", "Circled digit one", "number circled 1"],
    ["\u2461", "Circled digit two", "number circled 2"],
    ["\u2462", "Circled digit three", "number circled 3"],
    ["\u2463", "Circled digit four", "number circled 4"],
    ["\u2464", "Circled digit five", "number circled 5"],
    ["\u2465", "Circled digit six", "number circled 6"],
    ["\u2466", "Circled digit seven", "number circled 7"],
    ["\u2467", "Circled digit eight", "number circled 8"],
    ["\u2468", "Circled digit nine", "number circled 9"],
    ["\u2469", "Circled number ten", "number circled 10"],
    ["\u2776", "Negative circled one", "number bold 1"],
    ["\u2777", "Negative circled two", "number bold 2"],
    ["\u2778", "Negative circled three", "number bold 3"],
    ["\u2779", "Negative circled four", "number bold 4"],
    ["\u277A", "Negative circled five", "number bold 5"],
    ["\u277B", "Negative circled six", "number bold 6"],
    ["\u277C", "Negative circled seven", "number bold 7"],
    ["\u277D", "Negative circled eight", "number bold 8"],
    ["\u277E", "Negative circled nine", "number bold 9"],
    ["\u277F", "Negative circled ten", "number bold 10"]
  ],
  dots: [
    ["\u2022", "Bullet", "dot list bullet"],
    ["\xB7", "Middle dot", "dot interpunct"],
    ["\u2218", "Ring operator small", "dot circle small"],
    ["\u25E6", "White bullet", "dot circle outline"],
    ["\u25CF", "Black circle", "dot filled circle"],
    ["\u25CB", "White circle", "circle outline"],
    ["\u25C9", "Fisheye", "circle target"],
    ["\u25CE", "Bullseye", "circle double target"],
    ["\u2299", "Circled dot operator", "circle dot"],
    ["\u2043", "Hyphen bullet", "dash bullet list"],
    ["\u25AA", "Black small square", "square small filled"],
    ["\u25AB", "White small square", "square small outline"],
    ["\u25A0", "Black square", "square filled"],
    ["\u25A1", "White square", "square outline"],
    ["\u25A3", "Square with contained square", "square button"],
    ["\u25A2", "White square with rounded corners", "square rounded"],
    ["\u2025", "En leader dots", "dots two"],
    ["\u2026", "Horizontal ellipsis", "dots ellipsis"],
    ["\u22EE", "Vertical ellipsis", "dots vertical"],
    ["\u2301", "Electric arrow", "zigzag bolt"],
    ["\u2042", "Asterism", "dots three stars"],
    ["\u27E1", "Concave rotated diamond", "sparkle diamond"]
  ],
  kaomoji: [
    ["(\u02F6\u1D54 \u1D55 \u1D54\u02F6)", "Soft smile", "kaomoji cute face"],
    ["(\u1D54\u15DC\u1D54)", "Happy face", "kaomoji cute"],
    ["(\uFF61\u2022\u0301\uFE3F\u2022\u0300\uFF61)", "Sad face", "kaomoji sad"],
    ["(\u256F\xB0\u25A1\xB0)\u256F", "Table flip", "kaomoji angry"],
    ["(\u273F\u25E0\u203F\u25E0)", "Flower smile", "kaomoji cute flower"],
    ["(\u3065\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3065", "Hug", "kaomoji hug"],
    ["(\xAC\u203F\xAC)", "Smirk", "kaomoji smirk"],
    ["(\u2022\u0300\u1D17\u2022\u0301)\u0648", "Cheering", "kaomoji cheer"],
    ["( \u02D8\u0348 \u1D55 \u02D8\u0348\u2661)", "Love face", "kaomoji heart"],
    ["(\uFF61\u2665\u203F\u2665\uFF61)", "Heart eyes", "kaomoji heart eyes"],
    ["(\u1D55\u2014\u1D17\u2014)", "Calm smile", "kaomoji calm"],
    ["(\u0E51\u02C3\u0335\u1D17\u02C2\u0335)", "Shy face", "kaomoji shy"]
  ],
  // Blank code points used for empty game names. The UI draws U+25CC (◌)
  // as a marker; copying still writes the real character.
  invisible: [
    ["\u3164", "Hangul filler", "invisible blank empty name hangul"],
    ["\u2800", "Braille blank", "invisible blank empty braille"],
    ["\u115F", "Hangul choseong filler", "invisible blank hangul name"],
    ["\u1160", "Hangul jungseong filler", "invisible blank hangul name"],
    ["\uFFA0", "Halfwidth hangul filler", "invisible blank hangul"],
    ["\u200B", "Zero width space", "invisible blank zwsp empty"],
    ["\u200C", "Zero width non-joiner", "invisible blank zwnj"],
    ["\u200D", "Zero width joiner", "invisible blank zwj"],
    ["\u2060", "Word joiner", "invisible blank word joiner"],
    ["\uFEFF", "Zero width no-break space", "invisible blank bom"],
    ["\u2063", "Invisible separator", "invisible blank separator"],
    ["\u034F", "Combining grapheme joiner", "invisible blank combining"]
  ]
};
function buildEntries() {
  const entries = [];
  for (const category of symbolCategories) {
    const rows = DATA[category.id] ?? [];
    rows.forEach(([symbol, label, keywords], i) => {
      entries.push({
        id: `${category.id}-${i + 1}`,
        symbol,
        category: category.id,
        label,
        keywords: keywords.split(" ")
      });
    });
  }
  return entries;
}
var symbols = buildEntries();
var INVISIBLE_SYMBOLS = new Set(
  symbols.filter((entry) => entry.category === "invisible").map((entry) => entry.symbol)
);
function searchSymbols(query, category) {
  const q = query.trim().toLowerCase();
  return symbols.filter((entry) => {
    if (category && entry.category !== category) return false;
    if (!q) return true;
    return entry.label.toLowerCase().includes(q) || entry.keywords.some((k) => k.includes(q)) || entry.symbol.includes(q);
  });
}

// src/mcp/handlers.ts
var SERVER_VERSION = "0.1.0";
var PROTOCOLS = ["2024-11-05", "2025-03-26", "2025-06-18"];
var MAX_TEXT = 120;
var MAX_NICKNAMES = 24;
var INSTRUCTIONS = "FancyFont converts Latin letters into Unicode text styles, builds gaming nicknames, and searches a symbol list. Conversion runs in this process. Most styles change only A-Z and a-z. Accented letters and Chinese characters stay as typed.";
var ToolError = class extends Error {
};
var TOOLS = [
  {
    name: "fancyfont_list_styles",
    description: "List FancyFont Unicode text styles. Each line is id, name, coverage, and a short note. Coverage is letters, lettersDigits, partial, or all.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    name: "fancyfont_convert_text",
    description: "Convert plain text into one FancyFont Unicode style, or every style when style is omitted. Max 120 characters. Only A-Z and a-z change in most styles.",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Plain text, 120 characters max." },
        style: {
          type: "string",
          description: "Style id from fancyfont_list_styles. Omit to return every style."
        }
      },
      required: ["text"],
      additionalProperties: false
    }
  },
  {
    name: "fancyfont_generate_nicknames",
    description: "Build decorated gaming nicknames from a short name. style is cool, dark, cute, pro, minimal, or all. count is 1 to 24. nonce changes the shuffle.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Name to decorate, 24 characters max." },
        style: { type: "string", description: "cool, dark, cute, pro, minimal, or all. Default all." },
        count: { type: "integer", description: "How many nicknames to return, 1 to 24. Default 12." },
        nonce: { type: "integer", description: "Shuffle seed. Default 0." }
      },
      required: ["name"],
      additionalProperties: false
    }
  },
  {
    name: "fancyfont_search_symbols",
    description: "Search FancyFont symbols. Each line is the character, its code point, category, and label. Invisible characters are still listed by code point.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Word to match against labels and keywords." },
        category: { type: "string", description: "Category id, such as hearts, stars, or invisible." },
        limit: { type: "integer", description: "Max results, 1 to 40. Default 20." }
      },
      additionalProperties: false
    }
  }
];
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function toolText(text, isError = false) {
  const content = [{ type: "text", text }];
  return isError ? { content, isError: true } : { content };
}
function requireString(args, key) {
  const value = args[key];
  if (typeof value !== "string" || !value.trim()) throw new ToolError(`${key} is required`);
  return value;
}
function optionalString(args, key) {
  const value = args[key];
  if (value === void 0) return void 0;
  if (typeof value !== "string") throw new ToolError(`${key} must be a string`);
  return value;
}
function optionalInt(args, key, fallback, max) {
  const value = args[key];
  if (value === void 0) return fallback;
  if (typeof value !== "number" || !Number.isInteger(value)) throw new ToolError(`${key} must be an integer`);
  if (value < 0 || value > max) throw new ToolError(`${key} must be between 0 and ${max}`);
  return value;
}
function isStyleId(value) {
  return textStyles.some((style) => style.id === value);
}
function callTool(name, rawArgs) {
  if (rawArgs !== void 0 && !isRecord(rawArgs)) throw new ToolError("arguments must be an object");
  const args = rawArgs ?? {};
  if (name === "fancyfont_list_styles") {
    const lines = textStyles.map((style) => `${style.id}	${style.name}	${style.coverage}	${style.note}`);
    return toolText(lines.join("\n"));
  }
  if (name === "fancyfont_convert_text") {
    const text = requireString(args, "text").trim();
    if (text.length > MAX_TEXT) throw new ToolError(`text must be ${MAX_TEXT} characters or fewer`);
    const style = optionalString(args, "style")?.trim();
    if (!style) {
      const lines = convertAll(text).map((item) => `${item.id}	${item.name}	${item.text}`);
      return toolText(lines.join("\n"));
    }
    if (!isStyleId(style)) {
      throw new ToolError(`unknown style. Use fancyfont_list_styles. Known ids: ${textStyles.map((s) => s.id).join(", ")}`);
    }
    return toolText(convertText(text, style));
  }
  if (name === "fancyfont_generate_nicknames") {
    const name2 = requireString(args, "name").trim();
    const style = optionalString(args, "style")?.trim() || "all";
    const known = style === "all" || vibeStyles.some((vibe) => vibe.id === style);
    if (!known) {
      throw new ToolError(`unknown style. Use one of: all, ${vibeStyles.map((vibe) => vibe.id).join(", ")}`);
    }
    const count = optionalInt(args, "count", 12, MAX_NICKNAMES);
    if (count < 1) throw new ToolError("count must be between 1 and 24");
    const nonce = optionalInt(args, "nonce", 0, 1e5);
    const names = generateNicknames(name2, style, nonce, count);
    if (names.length === 0) throw new ToolError("name is empty");
    return toolText(names.join("\n"));
  }
  if (name === "fancyfont_search_symbols") {
    const query = optionalString(args, "query") ?? "";
    const category = optionalString(args, "category")?.trim();
    if (category && !symbolCategories.some((item) => item.id === category)) {
      throw new ToolError(`unknown category. Use one of: ${symbolCategories.map((item) => item.id).join(", ")}`);
    }
    const limit = optionalInt(args, "limit", 20, 40);
    if (limit < 1) throw new ToolError("limit must be between 1 and 40");
    const matches = searchSymbols(query, category || null).slice(0, limit);
    if (matches.length === 0) return toolText("No symbols matched.");
    const lines = matches.map((entry) => {
      const points = [...entry.symbol].map((char) => `U+${(char.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`).join(" ");
      return `${entry.symbol}	${points}	${entry.category}	${entry.label}`;
    });
    return toolText(lines.join("\n"));
  }
  throw new ToolError(`unknown tool: ${name}`);
}
function dispatch(method, params, id) {
  if (method === "initialize") {
    const requested = isRecord(params) && typeof params.protocolVersion === "string" ? params.protocolVersion : "";
    return {
      protocolVersion: PROTOCOLS.includes(requested) ? requested : PROTOCOLS[0],
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "fancyfont", version: SERVER_VERSION },
      instructions: INSTRUCTIONS
    };
  }
  if (method === "ping") return {};
  if (method === "tools/list") return { tools: TOOLS };
  if (method === "resources/list") return { resources: [] };
  if (method === "prompts/list") return { prompts: [] };
  if (method === "tools/call") {
    if (!isRecord(params) || typeof params.name !== "string") {
      return toolText("tools/call needs a tool name", true);
    }
    try {
      return callTool(params.name, params.arguments);
    } catch (error) {
      const message = error instanceof ToolError ? error.message : "Tool failed";
      return toolText(message, true);
    }
  }
  return { error: true, id, code: -32601, message: `Method not found: ${method}` };
}
function handleMcpMessage(message) {
  if (!isRecord(message) || message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    const id2 = isRecord(message) && (typeof message.id === "string" || typeof message.id === "number") ? message.id : null;
    return { jsonrpc: "2.0", id: id2, error: { code: -32600, message: "Invalid Request" } };
  }
  const method = message.method;
  const isNotification = message.id === void 0;
  if (method === "notifications/initialized" || method === "notifications/cancelled") return null;
  const id = typeof message.id === "string" || typeof message.id === "number" || message.id === null ? message.id : null;
  const result = dispatch(method, message.params, id);
  if (isNotification) return null;
  const missing = methodNotFound(result);
  if (missing) return { jsonrpc: "2.0", id, error: missing };
  return { jsonrpc: "2.0", id, result };
}
function methodNotFound(result) {
  if (!isRecord(result) || result.error !== true) return null;
  if (typeof result.code !== "number" || typeof result.message !== "string") return null;
  return { code: result.code, message: result.message };
}

// src/mcp/stdio.ts
var input = createInterface({ input: process.stdin, terminal: false });
input.on("line", (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  let message;
  try {
    message = JSON.parse(trimmed);
  } catch {
    process.stdout.write(
      `${JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } })}
`
    );
    return;
  }
  const response = handleMcpMessage(message);
  if (response) process.stdout.write(`${JSON.stringify(response)}
`);
});
