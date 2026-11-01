// Symbol library data.
//
// A single structured source of truth for the /symbols page. Every entry
// has an id, the symbol itself, a category, a human label and search
// keywords, so nothing is hard-coded inside components.

export interface SymbolCategory {
  id: string;
  name: string;
}

export interface SymbolEntry {
  id: string;
  symbol: string;
  category: string;
  label: string;
  keywords: string[];
}

export interface SymbolCombo {
  id: string;
  text: string;
  label: string;
}

export const symbolCategories: SymbolCategory[] = [
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
  { id: "invisible", name: "Invisible" },
];

/** `#hearts` opens that category. Anything else, including an empty hash, stays on all. */
export function categoryFromHash(hash: string): string | null {
  let id = hash.replace(/^#/, "");
  try {
    id = decodeURIComponent(id);
  } catch {
    return null;
  }
  return symbolCategories.some((category) => category.id === id) ? id : null;
}

type Row = [symbol: string, label: string, keywords: string];

const DATA: Record<string, Row[]> = {
  hearts: [
    ["♥", "Black heart suit", "heart love"],
    ["♡", "White heart outline", "heart love outline"],
    ["❤️", "Red heart", "heart love emoji"],
    ["🩷", "Pink heart", "heart pink emoji"],
    ["🧡", "Orange heart", "heart orange emoji"],
    ["💛", "Yellow heart", "heart yellow emoji"],
    ["💚", "Green heart", "heart green emoji"],
    ["💙", "Blue heart", "heart blue emoji"],
    ["🩵", "Light blue heart", "heart cyan emoji"],
    ["💜", "Purple heart", "heart purple emoji"],
    ["🤎", "Brown heart", "heart brown emoji"],
    ["🖤", "Black heart emoji", "heart black emoji"],
    ["🩶", "Grey heart", "heart gray emoji"],
    ["🤍", "White heart emoji", "heart white emoji"],
    ["💔", "Broken heart", "heart broken sad emoji"],
    ["❣️", "Heart exclamation", "heart exclamation"],
    ["💕", "Two hearts", "hearts love emoji"],
    ["💞", "Revolving hearts", "hearts spinning emoji"],
    ["💓", "Beating heart", "heart pulse emoji"],
    ["💗", "Growing heart", "heart emoji"],
    ["💖", "Sparkling heart", "heart sparkle emoji"],
    ["💘", "Heart with arrow", "heart arrow valentine emoji"],
    ["💝", "Heart with ribbon", "heart gift emoji"],
    ["❥", "Rotated heavy heart", "heart decorative"],
    ["❦", "Floral heart", "heart ornament"],
    ["❧", "Rotated floral heart", "heart ornament"],
    ["ღ", "Georgian heart", "heart"],
    ["ᰔ", "Cute script heart", "heart cute decorative"],
    ["ᥫ᭡", "Heart fingers", "heart cute tiktok"],
    ["♡̷", "Heart with slash", "heart"],
  ],
  stars: [
    ["★", "Black star", "star favorite"],
    ["☆", "White star outline", "star outline"],
    ["✦", "Four-pointed star", "star sparkle"],
    ["✧", "Outline four-pointed star", "star sparkle outline"],
    ["✨", "Sparkles", "sparkles shine emoji"],
    ["⭐", "Star emoji", "star emoji"],
    ["🌟", "Glowing star", "star glow emoji"],
    ["💫", "Dizzy star", "star dizzy emoji"],
    ["🌠", "Shooting star", "star shooting meteor emoji"],
    ["✩", "Star with circle", "star"],
    ["✪", "Circled star", "star circle"],
    ["✫", "Open center star", "star"],
    ["✬", "Black center star", "star"],
    ["✭", "Outlined pointed star", "star"],
    ["✮", "Bold pointed star", "star"],
    ["✯", "Pinwheel star", "star"],
    ["✰", "Shadowed white star", "star"],
    ["⋆", "Small star operator", "star tiny"],
    ["✵", "Eight-pointed pinwheel star", "star"],
    ["✶", "Six-pointed black star", "star"],
    ["✷", "Six-pointed star with dot", "star"],
    ["✸", "Eight-pointed black star", "star"],
    ["✹", "Twelve-pointed black star", "star"],
    ["✺", "Sixteen-pointed asterisk star", "star burst"],
    ["❂", "Circled open-center star", "star sun"],
    ["❉", "Balloon-spoked asterisk star", "star"],
    ["☄️", "Comet", "comet star emoji"],
  ],
  arrows: [
    ["→", "Rightwards arrow", "arrow right"],
    ["←", "Leftwards arrow", "arrow left"],
    ["↑", "Upwards arrow", "arrow up"],
    ["↓", "Downwards arrow", "arrow down"],
    ["↖", "Up-left arrow", "arrow diagonal"],
    ["↗", "Up-right arrow", "arrow diagonal"],
    ["↘", "Down-right arrow", "arrow diagonal"],
    ["↙", "Down-left arrow", "arrow diagonal"],
    ["↔", "Left-right arrow", "arrow both"],
    ["↕", "Up-down arrow", "arrow both"],
    ["⇒", "Double rightwards arrow", "arrow double right"],
    ["⇐", "Double leftwards arrow", "arrow double left"],
    ["⇔", "Double left-right arrow", "arrow double both"],
    ["➜", "Heavy round-tipped arrow", "arrow"],
    ["➤", "Black rightwards arrowhead", "arrow"],
    ["➔", "Heavy wide-headed arrow", "arrow"],
    ["➟", "Dashed triangle arrow", "arrow"],
    ["➠", "Heavy dashed triangle arrow", "arrow"],
    ["➥", "Black curved down-right arrow", "arrow"],
    ["➦", "Heavy black curved up-right arrow", "arrow"],
    ["➵", "Rightwards feathered arrow", "arrow"],
    ["➸", "Heavy black-feathered arrow", "arrow"],
    ["↝", "Rightwards wavy arrow", "arrow wavy"],
    ["⇢", "Rightwards dashed arrow", "arrow dashed"],
    ["⇠", "Leftwards dashed arrow", "arrow dashed"],
    ["⤴", "Arrow curving up", "arrow curve"],
    ["⤵", "Arrow curving down", "arrow curve"],
    ["↩", "Leftwards hook arrow", "arrow hook return"],
    ["↪", "Rightwards hook arrow", "arrow hook"],
  ],
  crowns: [
    ["♔", "White chess king", "crown king chess"],
    ["♕", "White chess queen", "crown queen chess"],
    ["♚", "Black chess king", "crown king chess"],
    ["♛", "Black chess queen", "crown queen chess"],
    ["👑", "Crown emoji", "crown king queen emoji"],
    ["⚜", "Fleur-de-lis", "royal lily emblem"],
    ["♜", "Black chess rook", "castle chess tower"],
    ["🫅", "Person with crown", "royal crown emoji"],
  ],
  flowers: [
    ["✿", "Black flower", "flower"],
    ["❀", "White flower outline", "flower"],
    ["❁", "Eight-petal flower outline", "flower"],
    ["✾", "Six-petal black flower", "flower"],
    ["✽", "Heavy teardrop flower", "flower"],
    ["✼", "Open-center teardrop flower", "flower"],
    ["❃", "Heavy teardrop-spoked flower", "flower"],
    ["❋", "Heavy eight-teardrop flower", "flower snowflake"],
    ["✤", "Heavy four-balloon flower", "flower"],
    ["✥", "Four-balloon club flower", "flower"],
    ["⚘", "Flower glyph", "flower plant"],
    ["❊", "Eight-teardrop propeller flower", "flower"],
    ["🌸", "Cherry blossom", "flower sakura pink emoji"],
    ["🌺", "Hibiscus", "flower tropical emoji"],
    ["🌻", "Sunflower", "flower yellow emoji"],
    ["🌼", "Blossom", "flower daisy emoji"],
    ["🌷", "Tulip", "flower pink emoji"],
    ["🌹", "Rose", "flower red emoji"],
    ["💐", "Bouquet", "flowers gift emoji"],
    ["💮", "White flower", "flower emoji"],
    ["🏵️", "Rosette", "flower badge emoji"],
    ["🥀", "Wilted flower", "flower sad emoji"],
  ],
  wings: [
    ["୨", "Bow left", "bow wing cute"],
    ["୧", "Bow right", "bow wing cute"],
    ["୨୧", "Bows pair", "bow wing cute aesthetic"],
    ["ʚ", "Fish hook left", "wing left cute"],
    ["ɞ", "Fish hook right", "wing right cute"],
    ["ʚ♥ɞ", "Wings around heart", "wing heart"],
    ["꒰", "Left tortoise bracket cute", "wing bracket soft"],
    ["꒱", "Right tortoise bracket cute", "wing bracket soft"],
    ["꒰♥꒱", "Soft brackets around heart", "wing heart"],
    ["⋘", "Triple chevron left", "wing left"],
    ["⋙", "Triple chevron right", "wing right"],
    ["«", "Left guillemet", "wing quote left"],
    ["»", "Right guillemet", "wing quote right"],
    ["‹", "Single guillemet left", "wing quote"],
    ["›", "Single guillemet right", "wing quote"],
    ["≪", "Double angle left", "wing"],
    ["≫", "Double angle right", "wing"],
    ["𓆃", "Egyptian feather", "wing feather aesthetic"],
    ["𓂃", "Egyptian swoosh", "wing aesthetic"],
    ["🪽", "Wing emoji", "wing angel emoji"],
    ["🎀", "Ribbon bow", "bow pink cute emoji"],
  ],
  brackets: [
    ["【】", "Lenticular brackets", "bracket japanese"],
    ["『』", "White corner brackets", "bracket japanese"],
    ["「」", "Corner brackets", "bracket japanese"],
    ["〖〗", "White tortoise shell brackets", "bracket"],
    ["〔〕", "Tortoise shell brackets", "bracket"],
    ["《》", "Double angle brackets", "bracket"],
    ["〈〉", "Angle brackets", "bracket"],
    ["❨❩", "Medium parentheses", "bracket"],
    ["❰❱", "Heavy angle brackets", "bracket"],
    ["⟦⟧", "Mathematical white square brackets", "bracket"],
    ["⟪⟫", "Mathematical double angle brackets", "bracket"],
    ["⌈⌉", "Ceiling brackets", "bracket corner"],
    ["⌊⌋", "Floor brackets", "bracket corner"],
    ["⌜⌝", "Top corner brackets", "bracket corner"],
    ["⌞⌟", "Bottom corner brackets", "bracket corner"],
    ["꧁꧂", "Javanese ornaments", "bracket decorative popular"],
    ["༺༻", "Tibetan marks", "bracket decorative popular"],
    ["⟨⟩", "Mathematical angle brackets", "bracket"],
    ["❲❳", "Medium square brackets", "bracket"],
    ["()", "Parentheses", "bracket plain"],
  ],
  lines: [
    ["─", "Light horizontal line", "line divider"],
    ["━", "Heavy horizontal line", "line divider bold"],
    ["═", "Double horizontal line", "line divider double"],
    ["║", "Double vertical line", "line double"],
    ["│", "Light vertical line", "line"],
    ["┃", "Heavy vertical line", "line bold"],
    ["┄", "Dashed horizontal line", "line dashed"],
    ["┅", "Heavy dashed horizontal line", "line dashed"],
    ["┈", "Dotted horizontal line", "line dotted"],
    ["┉", "Heavy dotted horizontal line", "line dotted"],
    ["╭", "Rounded corner down-right", "line rounded"],
    ["╮", "Rounded corner down-left", "line rounded"],
    ["╯", "Rounded corner up-left", "line rounded"],
    ["╰", "Rounded corner up-right", "line rounded"],
    ["╱", "Diagonal slash", "line diagonal"],
    ["╲", "Diagonal backslash", "line diagonal"],
    ["╳", "Diagonal cross", "line cross"],
    ["▬", "Black rectangle bar", "line bar"],
    ["▁", "Lower block one eighth", "line block"],
    ["▄", "Lower block half", "line block"],
    ["▀", "Upper block half", "line block"],
    ["█", "Full block", "line block"],
    ["⌒", "Arc", "line curve"],
  ],
  faces: [
    ["ツ", "Katakana tsu smiley", "face smile japanese"],
    ["シ", "Katakana shi smiley", "face smile japanese"],
    ["㋛", "Squared shi smiley", "face smile"],
    ["ﭢ", "Smiling mark", "face smile"],
    ["(ツ)", "Tsu smiley in brackets", "face smile classic"],
    ["¯\\_(ツ)_/¯", "Shrug kaomoji", "face shrug"],
    ["(•‿•)", "Happy face", "face smile kaomoji"],
    ["(◕‿◕)", "Cute face", "face cute kaomoji"],
    ["(♥‿♥)", "Heart-eyes face", "face love kaomoji"],
    ["(¬‿¬)", "Sly face", "face sly kaomoji"],
    ["ʕ•ᴥ•ʔ", "Bear kaomoji", "face bear cute"],
    ["ᵔᴥᵔ", "Dog face", "face dog cute"],
    ["(☞ﾟヮﾟ)☞", "Pointing face", "face point kaomoji"],
  ],
  vibes: [
    ["♪", "Eighth note", "music note"],
    ["♫", "Beamed eighth notes", "music notes"],
    ["♬", "Beamed sixteenth notes", "music notes"],
    ["♩", "Quarter note", "music note"],
    ["♭", "Music flat sign", "music flat"],
    ["♮", "Music natural sign", "music natural"],
    ["♯", "Music sharp sign", "music sharp"],
    ["𝄞", "Treble clef", "music clef"],
    ["🎵", "Musical note", "music emoji"],
    ["🎶", "Musical notes", "music emoji"],
    ["🎸", "Guitar", "music guitar emoji"],
    ["🎧", "Headphone", "music audio emoji"],
    ["🌙", "Crescent moon", "moon night emoji"],
    ["☾", "Crescent moon left", "moon night"],
    ["☽", "Crescent moon right", "moon night"],
    ["⚡", "High voltage bolt", "lightning bolt energy emoji"],
    ["☁️", "Cloud", "cloud sky emoji"],
    ["💎", "Gem stone", "diamond gem emoji"],
    ["♠", "Black spade suit", "card spade"],
    ["♤", "White spade suit", "card spade outline"],
    ["♣", "Black club suit", "card club"],
    ["♧", "White club suit", "card club outline"],
    ["♦", "Black diamond suit", "card diamond"],
    ["♢", "White diamond suit", "card diamond outline"],
  ],
  checks: [
    ["✓", "Check mark", "check tick yes"],
    ["✔", "Heavy check mark", "check tick bold"],
    ["✅", "White heavy check mark", "check tick emoji"],
    ["☑", "Ballot box with check", "checkbox check"],
    ["☐", "Ballot box empty", "checkbox empty"],
    ["☒", "Ballot box with x", "checkbox cross"],
    ["✗", "Ballot x", "cross no x"],
    ["✘", "Heavy ballot x", "cross no bold"],
    ["✕", "Multiplication x", "cross x"],
    ["❌", "Cross mark emoji", "cross no red emoji"],
    ["❎", "Green cross mark", "cross no green emoji"],
    ["×", "Multiplication sign", "multiply times x"],
    ["√", "Square root", "check radical root"],
    ["⊗", "Circled times", "cross circle"],
    ["⊘", "Circled division slash", "no circle forbidden"],
    ["⛓️‍💥", "Broken chain", "broken link emoji"],
  ],
  math: [
    ["+", "Plus sign", "math plus add"],
    ["−", "Minus sign", "math minus subtract"],
    ["÷", "Division sign", "math divide"],
    ["=", "Equals sign", "math equals"],
    ["≠", "Not equal to", "math unequal"],
    ["≈", "Almost equal", "math approx"],
    ["≡", "Identical to", "math identical"],
    ["±", "Plus minus", "math plus minus"],
    ["∞", "Infinity", "math infinite forever"],
    ["∑", "N-ary summation", "math sum sigma"],
    ["∏", "N-ary product", "math product pi"],
    ["∫", "Integral", "math integral"],
    ["∂", "Partial differential", "math partial"],
    ["π", "Greek small pi", "math pi"],
    ["µ", "Micro sign", "math micro mu"],
    ["°", "Degree sign", "degree temperature"],
    ["‰", "Per mille sign", "permille percent"],
    ["≤", "Less or equal", "math compare"],
    ["≥", "Greater or equal", "math compare"],
    ["∪", "Union", "math set union"],
    ["∩", "Intersection", "math set intersect"],
    ["∈", "Element of", "math set member"],
    ["∴", "Therefore", "math therefore"],
    ["∵", "Because", "math because"],
    ["⊥", "Up tack perpendicular", "math perpendicular"],
  ],
  greek: [
    ["α", "Greek small alpha", "greek alpha"],
    ["β", "Greek small beta", "greek beta"],
    ["γ", "Greek small gamma", "greek gamma"],
    ["δ", "Greek small delta", "greek delta"],
    ["ε", "Greek small epsilon", "greek epsilon"],
    ["ζ", "Greek small zeta", "greek zeta"],
    ["η", "Greek small eta", "greek eta"],
    ["θ", "Greek small theta", "greek theta"],
    ["ι", "Greek small iota", "greek iota"],
    ["κ", "Greek small kappa", "greek kappa"],
    ["λ", "Greek small lambda", "greek lambda"],
    ["μ", "Greek small mu", "greek mu"],
    ["ν", "Greek small nu", "greek nu"],
    ["ξ", "Greek small xi", "greek xi"],
    ["ο", "Greek small omicron", "greek omicron"],
    ["π", "Greek small pi", "greek pi"],
    ["ρ", "Greek small rho", "greek rho"],
    ["σ", "Greek small sigma", "greek sigma"],
    ["τ", "Greek small tau", "greek tau"],
    ["υ", "Greek small upsilon", "greek upsilon"],
    ["φ", "Greek small phi", "greek phi"],
    ["χ", "Greek small chi", "greek chi"],
    ["ψ", "Greek small psi", "greek psi"],
    ["ω", "Greek small omega", "greek omega"],
    ["Ω", "Greek capital omega", "greek omega ohm"],
    ["Δ", "Greek capital delta", "greek delta triangle"],
    ["Σ", "Greek capital sigma", "greek sigma sum"],
    ["Φ", "Greek capital phi", "greek phi"],
    ["Ψ", "Greek capital psi", "greek psi"],
    ["Γ", "Greek capital gamma", "greek gamma"],
  ],
  currency: [
    ["$", "Dollar sign", "money dollar usd"],
    ["€", "Euro sign", "money euro eur"],
    ["£", "Pound sign", "money pound gbp"],
    ["¥", "Yen sign", "money yen yuan"],
    ["¢", "Cent sign", "money cent"],
    ["¤", "Currency sign", "money generic"],
    ["₽", "Ruble sign", "money ruble russia"],
    ["₩", "Won sign", "money won korea"],
    ["₹", "Rupee sign", "money rupee india"],
    ["₿", "Bitcoin sign", "money bitcoin crypto"],
    ["₴", "Hryvnia sign", "money ukraine"],
    ["₱", "Peso sign", "money peso"],
    ["₺", "Lira sign", "money lira turkey"],
    ["₦", "Naira sign", "money naira nigeria"],
    ["₮", "Tugrik sign", "money tugrik mongolia"],
    ["₲", "Guarani sign", "money guarani paraguay"],
    ["₵", "Cedi sign", "money cedi ghana"],
    ["₡", "Colon sign", "money colon costa rica"],
    ["₪", "New shekel sign", "money shekel israel"],
    ["₫", "Dong sign", "money dong vietnam"],
    ["৳", "Bengali taka", "money taka bangladesh"],
    ["ƒ", "Florin sign", "money florin guilder"],
  ],
  numbers: [
    ["Ⅰ", "Roman numeral one", "roman number 1"],
    ["Ⅱ", "Roman numeral two", "roman number 2"],
    ["Ⅲ", "Roman numeral three", "roman number 3"],
    ["Ⅳ", "Roman numeral four", "roman number 4"],
    ["Ⅴ", "Roman numeral five", "roman number 5"],
    ["Ⅵ", "Roman numeral six", "roman number 6"],
    ["Ⅶ", "Roman numeral seven", "roman number 7"],
    ["Ⅷ", "Roman numeral eight", "roman number 8"],
    ["Ⅸ", "Roman numeral nine", "roman number 9"],
    ["Ⅹ", "Roman numeral ten", "roman number 10"],
    ["Ⅺ", "Roman numeral eleven", "roman number 11"],
    ["Ⅻ", "Roman numeral twelve", "roman number 12"],
    ["①", "Circled digit one", "number circled 1"],
    ["②", "Circled digit two", "number circled 2"],
    ["③", "Circled digit three", "number circled 3"],
    ["④", "Circled digit four", "number circled 4"],
    ["⑤", "Circled digit five", "number circled 5"],
    ["⑥", "Circled digit six", "number circled 6"],
    ["⑦", "Circled digit seven", "number circled 7"],
    ["⑧", "Circled digit eight", "number circled 8"],
    ["⑨", "Circled digit nine", "number circled 9"],
    ["⑩", "Circled number ten", "number circled 10"],
    ["❶", "Negative circled one", "number bold 1"],
    ["❷", "Negative circled two", "number bold 2"],
    ["❸", "Negative circled three", "number bold 3"],
    ["❹", "Negative circled four", "number bold 4"],
    ["❺", "Negative circled five", "number bold 5"],
    ["❻", "Negative circled six", "number bold 6"],
    ["❼", "Negative circled seven", "number bold 7"],
    ["❽", "Negative circled eight", "number bold 8"],
    ["❾", "Negative circled nine", "number bold 9"],
    ["❿", "Negative circled ten", "number bold 10"],
  ],
  dots: [
    ["•", "Bullet", "dot list bullet"],
    ["·", "Middle dot", "dot interpunct"],
    ["∘", "Ring operator small", "dot circle small"],
    ["◦", "White bullet", "dot circle outline"],
    ["●", "Black circle", "dot filled circle"],
    ["○", "White circle", "circle outline"],
    ["◉", "Fisheye", "circle target"],
    ["◎", "Bullseye", "circle double target"],
    ["⊙", "Circled dot operator", "circle dot"],
    ["⁃", "Hyphen bullet", "dash bullet list"],
    ["▪", "Black small square", "square small filled"],
    ["▫", "White small square", "square small outline"],
    ["■", "Black square", "square filled"],
    ["□", "White square", "square outline"],
    ["▣", "Square with contained square", "square button"],
    ["▢", "White square with rounded corners", "square rounded"],
    ["‥", "En leader dots", "dots two"],
    ["…", "Horizontal ellipsis", "dots ellipsis"],
    ["⋮", "Vertical ellipsis", "dots vertical"],
    ["⌁", "Electric arrow", "zigzag bolt"],
    ["⁂", "Asterism", "dots three stars"],
    ["⟡", "Concave rotated diamond", "sparkle diamond"],
  ],
  kaomoji: [
    ["(˶ᵔ ᵕ ᵔ˶)", "Soft smile", "kaomoji cute face"],
    ["(ᵔᗜᵔ)", "Happy face", "kaomoji cute"],
    ["(｡•́︿•̀｡)", "Sad face", "kaomoji sad"],
    ["(╯°□°)╯", "Table flip", "kaomoji angry"],
    ["(✿◠‿◠)", "Flower smile", "kaomoji cute flower"],
    ["(づ｡◕‿‿◕｡)づ", "Hug", "kaomoji hug"],
    ["(¬‿¬)", "Smirk", "kaomoji smirk"],
    ["(•̀ᴗ•́)و", "Cheering", "kaomoji cheer"],
    ["( ˘͈ ᵕ ˘͈♡)", "Love face", "kaomoji heart"],
    ["(｡♥‿♥｡)", "Heart eyes", "kaomoji heart eyes"],
    ["(ᵕ—ᴗ—)", "Calm smile", "kaomoji calm"],
    ["(๑˃̵ᴗ˂̵)", "Shy face", "kaomoji shy"],
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
    ["\u034F", "Combining grapheme joiner", "invisible blank combining"],
  ],
};

function buildEntries(): SymbolEntry[] {
  const entries: SymbolEntry[] = [];
  for (const category of symbolCategories) {
    const rows = DATA[category.id] ?? [];
    rows.forEach(([symbol, label, keywords], i) => {
      entries.push({
        id: `${category.id}-${i + 1}`,
        symbol,
        category: category.id,
        label,
        keywords: keywords.split(" "),
      });
    });
  }
  return entries;
}

export const symbols: SymbolEntry[] = buildEntries();

const INVISIBLE_SYMBOLS = new Set(
  symbols.filter((entry) => entry.category === "invisible").map((entry) => entry.symbol),
);

/** Visual stand-in for blank characters. Copy `entry.symbol`, not this. */
export function displaySymbol(symbol: string): string {
  return INVISIBLE_SYMBOLS.has(symbol) ? "◌" : symbol;
}

export const symbolCombos: SymbolCombo[] = [
  { id: "combo-star-divider", text: "─── ⋆⋅☆⋅⋆ ───", label: "Star divider" },
  { id: "combo-sparkle-accent", text: "⋆｡°✩", label: "Sparkle accent" },
  { id: "combo-aesthetic-mist", text: "·˚ ༘ ₊˚", label: "Aesthetic mist" },
  { id: "combo-magic-trail", text: "✧･ﾟ: *✧･ﾟ:*", label: "Magic trail" },
  { id: "combo-stripe-wave", text: "▄▀▄▀▄▀▄", label: "Stripe wave" },
  { id: "combo-bold-divider", text: "━━━━━◉━━━━━", label: "Bold divider" },
  { id: "combo-arrow-burst", text: "➶➶➶➶➶", label: "Feather arrows" },
  { id: "combo-arrow-burst-r", text: "➷➷➷➷➷", label: "Feather arrows right" },
  { id: "combo-star-thread", text: "★・・・・・・★", label: "Star thread" },
  { id: "combo-curly-wave", text: "•?((¯°·._.•", label: "Curly wave" },
  { id: "combo-curly-wave-r", text: "•._.·°¯))•?", label: "Curly wave right" },
  { id: "combo-zigzag", text: "╱╲╱╲╱╲", label: "Zigzag" },
  { id: "combo-moon-line", text: "☾─────☆─────☽", label: "Moon divider" },
  { id: "combo-cute-row", text: "♡・♫・♡", label: "Cute row" },
];

export function searchSymbols(query: string, category: string | null): SymbolEntry[] {
  const q = query.trim().toLowerCase();
  return symbols.filter((entry) => {
    if (category && entry.category !== category) return false;
    if (!q) return true;
    return (
      entry.label.toLowerCase().includes(q) ||
      entry.keywords.some((k) => k.includes(q)) ||
      entry.symbol.includes(q)
    );
  });
}

export function categoryName(id: string): string {
  return symbolCategories.find((c) => c.id === id)?.name ?? id;
}

/** Text first, then the board, in the order the symbols were added. */
export function joinBoard(text: string, symbols: string[]): string {
  return text + symbols.join("");
}
