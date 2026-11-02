// English copy for the dedicated style generator pages.
// Every entry is hand-written so each page has genuinely unique content.

import type { TextStyleId } from "../text-styles";

export interface StylePageFaq {
  q: string;
  a: string;
}

export interface StylePageCopy {
  navName: string;
  h1: string;
  description: string;
  intro: string;
  howItWorks: string;
  coverageNote: string;
  bestFor: string[];
  sampleInputs: string[];
  platformTip: string;
  faq: StylePageFaq[];
  /** Plain SERP title. Omit to keep the shared script title. */
  title?: string;
  examplesHeading?: string;
  examplesHint?: string;
  copyExamples?: readonly string[];
}

export interface StylePageShared {
  slug: string;
  styleIds: TextStyleId[];
  related: string[];
}

export const stylePagesEn: Record<string, StylePageCopy> = {
  "cursive-text-generator": {
    navName: "Cursive",
    h1: "Cursive Text Generator",
    description:
      "Turn ordinary text into flowing cursive Unicode text. Two weights, instant preview, copy and paste into bios, names and chats.",
    intro:
      "Turn your text into flowing cursive letters with Unicode script characters — no font to install, nothing to sign up for. Type below, pick a weight, and copy.",
    howItWorks:
      "Cursive text is built from the Unicode Mathematical Script and Bold Script ranges. Each letter is swapped for a lookalike character that happens to be drawn with connected, handwritten strokes — which is exactly why the style survives copy and paste while a real font would not.",
    coverageNote:
      "Both cursive styles convert A–Z and a–z. Unicode has no cursive digits, so numbers stay as you typed them, and accented letters, emoji and other scripts pass through untouched. Bold cursive is one continuous alphabet. Lighter cursive has no single mathematical form for e, g, and o, so those three letters use a different cut (ℯ ℊ ℴ).",
    bestFor: [
      "Instagram bios and display names that need a soft, handwritten touch",
      "Beauty, wedding and lifestyle branding in profiles",
      "Short quotes and captions where a script font would feel at home",
    ],
    sampleInputs: ["Your Name", "Sweet Tea", "Mr & Mrs"],
    platformTip:
      "Cursive letters work in most bios and display names on Instagram, TikTok and Discord. Some games reject them because their built-in fonts only cover plain ASCII — preview before you commit.",
    faq: [
      {
        q: "Is cursive text a real font?",
        a: "No. It is a set of Unicode characters that look like cursive handwriting. That is what makes it copyable into apps that only accept plain text.",
      },
      {
        q: "Why does my cursive text show squares on some devices?",
        a: "The device is missing a font for those characters. Older Android phones are the most common offender. Pick the bold cursive weight or a different style if that happens to your audience.",
      },
      {
        q: "Can I use cursive text for my Instagram username?",
        a: "No — Instagram usernames only allow letters, digits, periods and underscores. Cursive works in your display name and bio instead.",
      },
    ],
  },
  "gothic-text-generator": {
    navName: "Gothic",
    h1: "Gothic Text Generator",
    description:
      "Fraktur and Old English font generator for gothic blackletter. Classic and bold weights, live preview, one-tap copy for names, bios and clans.",
    intro:
      "Type anything and turn it into Fraktur, the Old English blackletter in metal logos, clan tags and moody bios. Classic and bold weights, copy in one click.",
    howItWorks:
      "Gothic text uses the Unicode Mathematical Fraktur ranges. Fraktur, often called Old English, is a historical German blackletter style, and Unicode ships a full lookalike alphabet for it — including typographically correct special forms for C, H, I, R and Z.",
    coverageNote:
      "Both gothic styles convert A–Z and a–z only. Digits, accented letters and emoji are kept exactly as typed, because Unicode ships no fraktur digits.",
    bestFor: [
      "Metal, gaming and dark-aesthetic usernames and clan tags",
      "Halloween bios and event promos",
      "Band-style wordmarks in social profiles",
    ],
    sampleInputs: ["Shadow", "Nightfall", "Raven"],
    platformTip:
      "Blackletter characters are widely supported on modern phones, but a few older devices show boxes. Test in the app you are targeting — especially inside games.",
    faq: [
      {
        q: "Is Fraktur or Old English a different generator from gothic?",
        a: "No. This page is all three names. Fraktur and Old English are names for the same blackletter alphabet, and gothic is the usual search name for those characters. There is no separate font file.",
      },
      {
        q: "What is the difference between the two gothic styles?",
        a: "The first is classic Fraktur with thinner strokes; the second is the bold weight with heavier strokes that stays readable at small sizes.",
      },
      {
        q: "Why do some letters look different from the rest?",
        a: "Letters like C, H, I, R and Z come from historic blackletter typefaces rather than the mathematical range, so their shapes differ slightly. That is authentic to the style.",
      },
      {
        q: "Does gothic text work in Roblox or Fortnite names?",
        a: "Both games restrict nickname character sets, and many players report gothic characters being rejected. Try a name-change preview first, or use the plain-name combos in the Gaming Name Generator.",
      },
    ],
  },
  "bold-text-generator": {
    navName: "Bold",
    h1: "Bold Text Generator",
    description:
      "Make your text bold everywhere plain text is accepted. Serif, sans and italic bold weights — preview and copy in seconds.",
    intro:
      "Real bold that survives copy and paste — into WhatsApp statuses, X posts, Discord nicknames and anywhere formatting buttons can't reach.",
    howItWorks:
      "The bold styles draw from three Unicode ranges: Mathematical Bold for a classic serif weight, Mathematical Sans-Serif Bold for a cleaner look, and Mathematical Bold Italic for extra emphasis. Each letter is a separate character, so the weight travels with the text.",
    coverageNote:
      "Serif and sans bold convert letters and digits. The bold italic style covers letters only — Unicode has no bold italic digits — and anything outside A–Z, a–z and 0–9 stays unchanged.",
    bestFor: [
      "Emphasising a word or two inside bios and captions",
      "Announcement posts where formatting is unavailable",
      "Strong, readable gaming tags",
    ],
    sampleInputs: ["Breaking News", "Sale 50%", "GOAT"],
    platformTip:
      "Bold Unicode works almost everywhere plain text works. In apps that do support formatting, like Discord messages, prefer the app's own bold — it renders more consistently.",
    faq: [
      {
        q: "Why not just use a bold button?",
        a: "Many places — Instagram captions, TikTok bios, most game names — have no formatting option. Bold Unicode characters are the only way to get weight there.",
      },
      {
        q: "Do bold characters hurt screen readers?",
        a: "Some screen readers read the mathematical letters letter-by-letter or spell them oddly. For long paragraphs, real formatting is kinder; for a name or a word, it is fine.",
      },
      {
        q: "Is there a bold number?",
        a: "Yes — in the serif and sans bold styles. The bold italic style has no bold italic digits, so numbers pass through unchanged there.",
      },
    ],
  },
  "italic-text-generator": {
    navName: "Italic",
    h1: "Italic Text Generator",
    description:
      "Write slanted italic text that copies anywhere. Classic serif italic and clean sans italic, with instant preview.",
    intro:
      "Elegant slanted text you can paste into bios, captions and chats — wherever the apps forgot to give you an italic button.",
    howItWorks:
      "The classic style uses the Unicode Mathematical Italic range, including the historic ℎ for the letter h. The sans italic variant draws from the Mathematical Sans-Serif Italic range for a cleaner, more modern slant.",
    coverageNote:
      "Both italic styles convert letters only — Unicode defines no italic digits. Digits, punctuation, emoji and other scripts stay exactly as typed.",
    bestFor: [
      "Bookish, poetic captions and reading bios",
      "Highlighting titles and foreign phrases",
      "A softer accent inside otherwise plain bios",
    ],
    sampleInputs: ["once upon a time", "mood: cozy", "part 2"],
    platformTip:
      "Italic Unicode is safe in bios, display names and messages on all major platforms. Avoid long paragraphs — some screen readers stumble on mathematical letters, and slanted text is harder to read in bulk.",
    faq: [
      {
        q: "Why did my numbers not change?",
        a: "Unicode has no italic digits — only letters. Your numbers stay in the normal style, which usually looks fine mixed with italic letters.",
      },
      {
        q: "Which italic should I pick?",
        a: "Serif italic reads classic and bookish; sans italic looks cleaner at small sizes. Both copy the same way, so try both on your text.",
      },
      {
        q: "Can I italicize a whole Instagram bio?",
        a: "You can, but we would not recommend it: long stretches of mathematical characters can be read awkwardly by assistive tech and look busy. Italicize a word or a line instead.",
      },
    ],
  },
  "bubble-letters-generator": {
    navName: "Bubble",
    h1: "Bubble Letters Generator",
    description:
      "Bubble your text in filled circles, thin rings or squares. Playful Unicode letters with live preview and one-tap copy.",
    intro:
      "Wrap every letter in its own bubble. Three flavours — filled bubbles, thin rings and bold squares — all copyable as plain text.",
    howItWorks:
      "Bubble text uses the Enclosed Alphanumerics and Enclosed Alphanumeric Supplement blocks: filled circles for the bubble look, thin circled forms for a lighter touch, and negative squares for a blocky alternative. Each enclosed character is a single Unicode code point.",
    coverageNote:
      "Bubble and circled styles cover letters and digits, including a special character for zero. The squared style is letters-only and often renders as a colorful emoji on phones — fun, but test it first.",
    bestFor: [
      "Playful usernames and friend-group inside jokes",
      "Kids' party invites and casual event posts",
      "Highlighting single letters or numbers in bios",
    ],
    sampleInputs: ["Bubbles", "Party 2026", "ABC"],
    platformTip:
      "Enclosed characters are well supported on phones, which is where they are used most. The squared style is the exception — many devices render it as emoji, so check how it lands where you plan to paste it.",
    faq: [
      {
        q: "What is the difference between bubble and circled?",
        a: "Bubble letters sit in filled black circles; circled letters sit in thin outlined rings. Bubble is louder, circled is neater.",
      },
      {
        q: "Why does zero look different?",
        a: "Unicode encloses zero differently from the other digits, so it gets its own character. Both styles handle it — the parenthesized style is the only one that skips zero entirely.",
      },
      {
        q: "Can I use bubble letters in a game name?",
        a: "Some games allow enclosed characters, but strict ones do not. Copy a combo from the Gaming Name Generator that keeps your base name plain, so you always have a fallback.",
      },
    ],
  },
  "small-caps-generator": {
    navName: "Small Caps",
    h1: "Small Caps Generator",
    description:
      "Type in small capitals — a quiet, premium look for bios, display names and captions. Convert and copy instantly.",
    intro:
      "Small caps turn your text into miniature capitals — the quiet, premium look you see in clean bios and aesthetic profiles. Type, convert, copy.",
    howItWorks:
      "Small caps use the Unicode Phonetic Extensions and Small Form Variants: a dedicated set of miniature capital letters typographers use for scholarly notation. Letters without a small-capital form — like lowercase x — stay as they are, which is why the style still reads naturally.",
    coverageNote:
      "Small caps convert A–Z and a–z. Digits and punctuation are unaffected. One quirk to know: lowercase x has no small-capital form anywhere in Unicode, so it stays lowercase.",
    bestFor: [
      "Minimalist bios and aesthetic display names",
      "Chapter headings and section labels in posts",
      "A premium, understated look for short phrases",
    ],
    sampleInputs: ["aesthetic", "Chapter One", "mood"],
    platformTip:
      "Small caps are among the safest styled characters — they render on nearly every device and are accepted almost everywhere, including most games.",
    faq: [
      {
        q: "Why does the x stay small?",
        a: "Unicode never defined a small-capital X, so there is nothing to swap it with. Generators that do convert x are substituting a different character that may not render on all devices.",
      },
      {
        q: "Is small caps the same as lowercase?",
        a: "No — they are distinct capital letterforms at a smaller size, with different shapes from lowercase letters. Copy one of each and compare.",
      },
      {
        q: "Does small caps work in game names?",
        a: "Usually, yes — it is one of the most widely accepted styles. Strict games can still reject it, so preview in a name-change screen first.",
      },
    ],
  },
  "strikethrough-text-generator": {
    navName: "Strikethrough",
    h1: "Strikethrough Text Generator",
    description:
      "Cross out text with a strikethrough line, a slash, or bold struck letters. Copy the result anywhere plain text works.",
    intro:
      "Cross out any text — for jokes, price drops, sarcasm and edits. Three strike flavours, all copyable into apps with no formatting button.",
    howItWorks:
      "Strikethrough does not swap letters at all — it appends a combining slash mark after every character. Your original text stays intact underneath, which is why struck text works on letters, digits, emoji and even Chinese characters alike.",
    coverageNote:
      "Because the style adds marks rather than replacing characters, it works on any input. One trade-off: screen readers may read the underlying text normally, and some apps space the marks unevenly.",
    bestFor: [
      "Funny corrections and self-aware jokes in bios and chats",
      "Crossed-out sale prices in posts",
      "Edits and revoke notes in group chats",
    ],
    sampleInputs: ["bad idea", "was $99", "never mind"],
    platformTip:
      "Strikethrough renders in most modern apps. In Discord, plain-text markdown (~~like this~~) exists for messages — Unicode strikes are for bios, nicknames and everywhere markdown is not available.",
    faq: [
      {
        q: "Why does my struck text look uneven?",
        a: "Apps draw combining marks with their own fonts, and some align them imperfectly. If the line looks broken, the bold struck style often aligns better because the letters are wider.",
      },
      {
        q: "Can I strike through emoji?",
        a: "Yes — the mark is added after the emoji, so the line crosses it. Results vary slightly per platform because emoji glyphs differ.",
      },
      {
        q: "Is the original text still there underneath?",
        a: "Yes. Strikethrough is purely visual — the characters are unchanged, so copy-paste, search and screen readers still see the base text.",
      },
    ],
  },
  "glitch-text-generator": {
    navName: "Glitch",
    h1: "Glitch Text Generator",
    description:
      "Corrupt your text with cursed combining marks — three glitch intensities, from subtly wrong to fully zalgo. Copy with one tap.",
    intro:
      "Infest your text with crawling marks. Pick a corruption level — from subtly off to full zalgo — and paste the chaos anywhere.",
    howItWorks:
      "Zalgo text stacks Unicode combining marks above and below each character. This generator picks marks with a seeded, deterministic process — the same input always produces the same glitch, so what you preview is exactly what you copy.",
    coverageNote:
      "Glitch works on any character — letters, digits, emoji — because nothing is replaced. Heavy intensities stack many marks per letter, which is where the horror-movie look comes from.",
    bestFor: [
      "Cursed usernames and horror-themed profiles",
      "Meme posts and chaotic group-chat energy",
      "Spooky season bios and Halloween events",
    ],
    sampleInputs: ["help", "do not look", "hello"],
    platformTip:
      "Glitch text is the most demanding style you can paste. Some apps cap the number of combining marks, trim them, or render them in a straight line — always test before renaming anything important.",
    faq: [
      {
        q: "What is zalgo?",
        a: "An internet legend born from a 2004 comic: text corrupted with stacking diacritics until it looks possessed. The name stuck as the style's name.",
      },
      {
        q: "Why does my glitch text look tame in some apps?",
        a: "Apps cap or normalize combining marks to keep text renderable. Nothing is broken — the app is protecting its own layout.",
      },
      {
        q: "Is glitch text bad for screen readers?",
        a: "Yes — stacked marks are read as dozens of diacritics or skipped entirely. Keep it to names and jokes, never important information.",
      },
    ],
  },
  "upside-down-text-generator": {
    navName: "Upside Down",
    h1: "Upside Down Text Generator",
    description:
      "Flip your text upside down with flipped Unicode letters and punctuation. Type, watch it flip, copy and confuse everyone.",
    intro:
      "Flip it. This generator rewrites your text with upside-down letterforms and reverses the order, so the whole line reads rotated 180°.",
    howItWorks:
      "Each character is swapped for a rotated lookalike — a becomes ɐ, b becomes q — and the result is reversed so the last letter lands first. Punctuation flips too: an exclamation mark becomes ¡, question marks become ¿.",
    coverageNote:
      "Letters and digits convert well; a few rarer capitals like K and Q have no good rotated form and stay as they are. Anything the map cannot flip — including emoji — passes through unchanged.",
    bestFor: [
      "Bio puzzles and 'read if you can' captions",
      "Reply pranks in group chats",
      "Profile names that make people tilt their heads",
    ],
    sampleInputs: ["hello", "turn me", "wow"],
    platformTip:
      "Flipped text is well supported in bios and messages. Note that screen readers will read the reversed, substituted text literally — keep it short and playful.",
    faq: [
      {
        q: "Does it actually rotate, or substitute letters?",
        a: "It substitutes: Unicode has dedicated upside-down letterforms like ɐ and ǝ. That substitution is why the text survives copy and paste.",
      },
      {
        q: "Why is my text reversed?",
        a: "Rotated text reads right-to-left visually, so reversing the order is what makes it read correctly when the page is upside down.",
      },
      {
        q: "Can I flip emoji?",
        a: "No — emoji have no rotated forms, so they pass through unchanged and stay right-side up.",
      },
    ],
  },
  "tiny-text-generator": {
    navName: "Tiny",
    h1: "Tiny Text Generator",
    description:
      "Shrink your text with Unicode superscript and subscript letters. Two tiny styles, instant preview, copy and paste anywhere.",
    intro:
      "Shrink your words to whisper size. Superscript floats your text above the line; subscript sinks it below. Both copy as plain text.",
    howItWorks:
      "Tiny text uses Unicode superscript and subscript modifier letters — the same characters footnote markers and chemical formulas are built from. Each character is a compact lookalike at a fraction of the normal size.",
    coverageNote:
      "This is the most partial style on the site: lowercase superscripts cover most letters but not q, and subscripts skip b, c, d, f, g, q, w, y and z. Anything without a tiny form — including most capitals — stays normal, which is why mixed results are normal here.",
    bestFor: [
      "Footnote-style asides in bios ('she/her', tiny credits)",
      "Chemistry and math inverts in study accounts",
      "Quiet side comments next to louder text",
    ],
    sampleInputs: ["whisper", "H2O", "note:"],
    platformTip:
      "Tiny text renders reliably in bios and messages, but gaps where letters are missing can look uneven. If that bothers you, small caps give a similar quiet feel with full coverage.",
    faq: [
      {
        q: "Why are some letters big and some tiny?",
        a: "Unicode has no superscript or subscript form for every letter. The missing ones stay normal size — a known trade-off of the style.",
      },
      {
        q: "Can I write tiny numbers?",
        a: "Yes — superscript and subscript digits are fully covered, from ⁰ to ⁹ and ₀ to ₉. That is why H₂O works perfectly.",
      },
      {
        q: "Is tiny text readable?",
        a: "At bio sizes, mostly. It is best for a word or two, not sentences — and never for information that must be accessible.",
      },
    ],
  },
  "cute-font-generator": {
    navName: "Cute",
    h1: "Cute Font Generator",
    description:
      "Cute copy-and-paste text: round bubble letters with one heart, bow, or flower. Free in the browser, nothing to install.",
    intro:
      "Type a name and get round bubble letters with one heart, the ୨୧ bow, or a flower. People also call this kawaii or soft lettering. A script line sits underneath if you want it quieter. Ribbon script is the coquette page. These are characters you paste, not a font file.",
    howItWorks:
      "Bubble and circled letters are enclosed alphanumerics. The flowing line is Mathematical Script. Hearts, bows (୨୧), flowers, and soft brackets are separate symbols, and only the bubble row wears them — one pair at a time, so the name stays readable.",
    coverageNote:
      "Bubble and circled convert A–Z, a–z, and digits. Script converts letters only, so numbers in that row stay plain. Accented letters, emoji, and other scripts pass through. Decorations are extra characters around the word.",
    bestFor: [
      "Display names and bios that should feel soft",
      "A short name with one heart or one bow",
      "Captions, not full sentences",
    ],
    sampleInputs: ["Momo", "Soft", "Peach"],
    platformTip:
      "Cute letters work in most Instagram, TikTok, and Discord display names and bios. Usernames that only allow plain letters will reject them. If a bow or soft bracket shows as an empty box, copy the heart row instead.",
    faq: [
      {
        q: "Is a cute font a file I download?",
        a: "No. The result is Unicode characters, which is why it pastes into apps that only accept plain text. This site does not offer font files.",
      },
      {
        q: "Is coquette or kawaii text a different generator?",
        a: "Kawaii stays on this page: bubble letters with a heart, the ୨୧ bow, or a flower. Coquette is the other page, script letters with a ribbon bow.",
      },
      {
        q: "Can I use this as my Instagram username?",
        a: "No. Instagram usernames only allow letters, digits, periods, and underscores. Paste the cute name into your display name or bio.",
      },
    ],
  },
  "cool-font-generator": {
    navName: "Cool",
    h1: "Cool Font Generator",
    description:
      "Cool copy-and-paste names: bold letters with lightning, stars, or a clan wing. Free, and it stays in your browser.",
    intro:
      "Bold letters, then lightning, a star mark, or the clan wings ꧁༒. People also call this stylish text or a clan tag. It builds one decorated name. The full list of every alphabet, with no symbols, is the Fancy Text page.",
    howItWorks:
      "The heavy letters are Unicode Mathematical Bold. Small caps is the quieter second row and stays bare, so you can compare it with the decorated bold line. Stars, lightning, and wing brackets are symbols wrapped around the bold row only.",
    coverageNote:
      "Bold converts letters and digits. Small caps converts most letters and leaves a few unchanged when Unicode has no small-cap form. Decorations count toward name-length limits.",
    bestFor: [
      "Discord display names and game tags",
      "A clan-style name with one wing pair",
      "A single word that should read heavier than script",
    ],
    sampleInputs: ["Nova", "Ace", "Clan"],
    platformTip:
      "Bold Unicode usually survives Discord and social bios. Games that only accept plain ASCII will strip it. Wing brackets fail first on older phones — if they vanish, copy the lightning row.",
    faq: [
      {
        q: "Is this the same as the fancy text page?",
        a: "No. Fancy Text lists every alphabet and adds no decorations. This page only builds the cool look: bold letters plus lightning, stars, or clan wings.",
      },
      {
        q: "What does stylish text mean here?",
        a: "The same decorated bold names. Stylish, on this page, is the lightning, star, and wing rows — not a separate alphabet.",
      },
      {
        q: "Will a clan tag fit a game username?",
        a: "Often the symbol is the part that gets rejected. If the wings disappear in the game's preview, use the plain bold row.",
      },
    ],
  },
  "dark-font-generator": {
    navName: "Dark",
    h1: "Dark Font Generator",
    description:
      "Dark copy-and-paste names: blackletter with a skull, a dagger, or a moon. For bios and display names, not a font download.",
    intro:
      "Blackletter with one dark symbol — a skull, a dagger, or a moon. Emo lettering is this mix. The gothic page is the bare alphabet, with no skulls. This page is the decorated version.",
    howItWorks:
      "The letters are Unicode Fraktur. The heavy bold cut is wrapped; the regular cut stays bare underneath. Skulls, daggers, and moons are separate symbols on the bold row only.",
    coverageNote:
      "Both fraktur styles convert A–Z and a–z only. Digits stay as you typed them. The skull is a symbol and can look different on each phone. Accented letters and other scripts pass through.",
    bestFor: [
      "Dark bios and Discord names",
      "Emo or moody one-word names",
      "Halloween lines that still need to be copied as text",
    ],
    sampleInputs: ["Night", "Emo", "Raven"],
    platformTip:
      "Fraktur works in many bios and fails in games that require plain ASCII. If the skull shows as an empty box, copy the dagger or the moon row.",
    faq: [
      {
        q: "Is emo text different from gothic?",
        a: "Gothic, on this site, is the bare blackletter alphabet. Emo is that alphabet plus a skull, a dagger, or a moon — which is this page.",
      },
      {
        q: "Can I download a dark font?",
        a: "No. You copy characters. A font file would have to be installed, and nothing here is installed.",
      },
      {
        q: "Why do some letters look different from the rest?",
        a: "Fraktur keeps historical forms for C, H, I, R, and Z. That shape is the alphabet, not a glitch.",
      },
    ],
  },
  "elegant-font-generator": {
    navName: "Elegant",
    h1: "Elegant Font Generator",
    description:
      "Elegant copy-and-paste script with a crown, a fleur-de-lis, or a floral heart. For names, captions, and bios.",
    intro:
      "Heavy script, then a crown, a fleur-de-lis, or a floral heart. Royal and princess names are this same look: flowing letters and one formal symbol, not round bubble type.",
    howItWorks:
      "Letters are Unicode Bold Script, with the thinner script as a bare second row. Crowns, fleurs, and floral hearts wrap the bold script only, so the decoration stays one pair per result.",
    coverageNote:
      "Both script styles convert letters only. Digits, accents, and emoji stay as typed. Each crown or fleur is an extra character on that side of the name.",
    bestFor: [
      "Wedding, beauty, and formal display names",
      "A royal or princess name in a bio",
      "Short captions that should feel dressed up",
    ],
    sampleInputs: ["Rose", "Royal", "Ada"],
    platformTip:
      "Script works in most Instagram, TikTok, and Discord display names and bios, not in usernames limited to plain letters. If the heavy script shows boxes, copy the thinner script row.",
    faq: [
      {
        q: "Is elegant the same as cursive?",
        a: "Cursive is the bare script alphabet. Elegant leads with the heavier script and adds one formal symbol: a crown, a fleur, or a floral heart.",
      },
      {
        q: "Where are royal and princess fonts?",
        a: "On this page. A princess or royal name here is script plus a crown or a fleur-de-lis, not a separate download.",
      },
      {
        q: "Is this a calligraphy font file?",
        a: "No. You copy characters. Calligraphy font files are something you install, and this site does not offer those.",
      },
    ],
  },
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Aesthetic Font Generator",
    description:
      "Wide vaporwave letters with a sparkle or a dot-mist on either side, plus small caps if you want it quieter. Copy and paste, no font file.",
    intro:
      "Wide full-width letters — the vaporwave look — with a mist of dots or a sparkle on either side. Small caps is the second row when the wide letters feel too loud.",
    howItWorks:
      "Full-width characters come from legacy encodings where CJK and Latin text shared fixed-width grids, so Latin letters got wide boxes of their own. Spaces widen too, which is the slow rhythm. The dot-mist and the sparkle are symbols wrapped around that wide line only. They are not part of the full-width alphabet.",
    coverageNote:
      "Full-width covers letters, digits, and spaces. Small caps covers most letters and leaves a few unchanged. Punctuation stays plain. The decorations add characters and make the line wider still.",
    bestFor: [
      "Vaporwave, lo-fi, and retro profiles",
      "A wide one-word bio with a little sparkle",
      "Retro-tech and 80s/90s posts",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "dream 1997"],
    platformTip:
      "Full-width text shows up wherever CJK text does, which is almost everywhere. It is wide, and the sparkle makes it wider — check that the line still fits your bio. If a sparkle fails, the plain wide row still copies.",
    faq: [
      {
        q: "Why is it called vaporwave text?",
        a: "Wide letters and slow spacing became the visual signature of vaporwave. The technical name of the letters is full-width text. The sparkle is a separate symbol on either side.",
      },
      {
        q: "Does the wide spacing copy too?",
        a: "Yes. The wide space is a real character, the ideographic space, so the airy rhythm survives pasting. It also uses more of a character limit.",
      },
      {
        q: "Will decorations count in my bio?",
        a: "Yes. Each full-width letter counts as one, and each sparkle or dot counts as well. A short word is the comfortable length.",
      },
    ],
  },
  "coquette-font-generator": {
    navName: "Coquette",
    h1: "Coquette Font Generator",
    description:
      "Coquette copy-and-paste text: script letters with one ribbon bow. For Instagram display names and Discord nicknames, not a font download.",
    intro:
      "Script letters, then one bow. The rows are a small bow, a ribbon pair, and a ribbon emoji. Cute text on this site is round bubble letters. This page stays the ribbon look.",
    howItWorks:
      "The bow wraps Unicode Bold Script. That heavier alphabet has a real e, g, and o. The thinner script sits underneath with no bow, and on that row e, g, and o are stand-ins, so a name like Belle should use the bold row. The bows and the ribbon are separate symbols on the bold row only.",
    coverageNote:
      "Script converts A–Z and a–z. Digits stay as typed. The small bow is a rare character and can show as an empty box. If it does, copy the ribbon-emoji row. Decorations count toward the name limit.",
    bestFor: [
      "Instagram display names and bios",
      "Discord nicknames and short statuses",
      "A one-word name with a single bow",
    ],
    sampleInputs: ["Mia", "Lila", "Belle"],
    platformTip:
      "Paste this into an Instagram display name or a Discord nickname. Those usernames only take plain letters, digits, and a few marks, so the bow stays off the handle. A display name is about 30 characters on Instagram and a nickname about 32 on Discord. If the small bow fails, the ribbon emoji still copies.",
    faq: [
      {
        q: "Is coquette a font I download?",
        a: "No. You copy characters. A font file would have to be installed, and this site does not offer one.",
      },
      {
        q: "How is this different from the cute font page?",
        a: "Cute is bubble letters with a heart, the ୨୧ bow, or a flower. Coquette is script with a ribbon bow. The two pages do not share decorations.",
      },
      {
        q: "Can I put a coquette name in my Instagram username?",
        a: "No. The username stays plain. Paste the styled name into the display name or the bio.",
      },
    ],
  },
  "preppy-font-generator": {
    navName: "Preppy",
    h1: "Preppy Font Generator",
    description:
      "Preppy copy-and-paste names: small caps with one clean heart. Short enough to try on an Adopt Me display name.",
    intro:
      "Small caps, then one heart: white, a suit heart, or a rotated heart. No bows and no bubble letters. That louder cute look is the other page. This one stays clean, which is what preppy names in Adopt Me usually want.",
    howItWorks:
      "Small caps are Unicode modifier letters that look like shorter capitals. Script is the bare second row. Each heart is a symbol on the small-caps row only, one pair or one side, so the name stays short.",
    coverageNote:
      "Small caps cover most letters and leave a few unchanged when Unicode has no small-cap form. Script converts letters only, so digits in that row stay plain. Hearts are extra characters. The white heart is an emoji and is the first one a game filter may reject.",
    bestFor: [
      "Short Adopt Me display names",
      "A clean name with a single heart",
      "Bios that should feel tidy rather than bubbly",
    ],
    sampleInputs: ["Mila", "Blair", "Tess"],
    platformTip:
      "Adopt Me shows your Roblox display name, usually about 20 characters, and the username cannot take fonts. A short small-caps name with one heart fits that box more often than a bow on both sides. Paste it on Roblox's own name screen before you confirm the change.",
    faq: [
      {
        q: "Is preppy the same as coquette?",
        a: "No. Coquette is script with a ribbon bow. Preppy is small caps with one clean heart.",
      },
      {
        q: "Will this work as an Adopt Me username?",
        a: "The Roblox username stays letters, digits, and one underscore. Try the styled name as the display name, and only after the game's own preview accepts it.",
      },
      {
        q: "Why keep the hearts so plain?",
        a: "A stack of bows eats the 20-character display name and gets filtered more often. One heart is the preppy mark, and it still leaves room for the name.",
      },
    ],
  },
  "heart-font-generator": {
    navName: "Heart",
    h1: "Heart Font Generator",
    description:
      "Heart copy-and-paste text: script letters with a different heart on each of twelve rows. Free in the browser, nothing to install.",
    intro:
      "Script letters, then one heart pair per row — twelve hearts, and no two rows share a symbol. One heart on bubble letters stays on the cute page. One clean heart on small caps stays on the preppy page. You copy characters. This is not a font file and not a picture of lettering.",
    howItWorks:
      "The heart rows wrap Unicode Bold Script, the heavier alphabet with a real e, g, and o. The thinner script sits underneath with no heart — on that row e, g, and o are stand-ins, so a name like Love or Belle should stay on a heart row. Bubble is the third row and stays bare, so it does not repeat the cute page. Each heart is a separate symbol on the bold row only.",
    coverageNote:
      "Script and bold script convert A–Z and a–z. Digits stay as typed. Bubble converts letters and digits. Accented letters, emoji, and other scripts pass through. Hearts are extra characters and count toward name-length limits. The smaller hearts are rare and can show as an empty box — if one fails, copy the red heart or the sparkle row.",
    bestFor: [
      "Instagram and TikTok display names and bios",
      "A one-word name or a short caption",
      "Discord nicknames where one heart on each side is enough",
    ],
    sampleInputs: ["Love", "Mia", "Honey"],
    platformTip:
      "Paste a heart name into an Instagram display name or bio, a TikTok bio, or a Discord nickname. Handles that only allow plain letters will reject the hearts. A display name is about 30 characters on Instagram and a nickname about 32 on Discord, so one heart on each side of a short word fits more often than a stack of symbols.",
    faq: [
      {
        q: "Is a heart font a file I download?",
        a: "No. The result is Unicode characters, which is why it pastes into apps that only accept plain text. This site does not offer font files, and it does not draw the letters into a picture.",
      },
      {
        q: "How is this different from the cute and preppy pages?",
        a: "Cute is bubble letters with one heart, a bow, or a flower. Preppy is small caps with one clean heart. This page is script with twelve different heart pairs, and those hearts are not used on the other pages.",
      },
      {
        q: "Can I use a heart name as my Instagram username?",
        a: "No. Instagram usernames only allow letters, digits, periods, and underscores. Paste the heart name into your display name or bio.",
      },
    ],
  },
  "chicano-font-generator": {
    navName: "Chicano",
    h1: "Chicano Font Generator",
    description:
      "Chicano-style copy-and-paste text: blackletter with one ornament per row, plus a script line. Free in the browser. Not a font file or a tattoo stencil.",
    intro:
      "Classic blackletter, then one ornament per row — twelve marks, and none of them are the skulls or moons on the dark page. Bare blackletter, with no ornaments, is the gothic page. You copy characters. This is not hand-drawn Chicano lettering, and it is not a stencil.",
    howItWorks:
      "The ornament rows wrap Unicode Fraktur, the blackletter alphabet often called Old English. Bold fraktur sits underneath with no ornament, so the heavier weight stays readable at small sizes. Bold script is the third row and stays bare: it stands in for the flowing half of the style, and the letters are not joined. Each ornament is a separate symbol on the classic fraktur row only.",
    coverageNote:
      "Both fraktur styles convert A–Z and a–z only. Digits, accented letters such as á, é, and ñ, and emoji stay as typed, because Unicode has no fraktur forms for them. Bold script converts letters only. Ornaments are extra characters and count toward name-length limits. A rare ornament can show as an empty box — if it does, copy the cross row or the bare fraktur row.",
    bestFor: [
      "A short name or a one-word motto in a bio",
      "Comparing blackletter and script before you brief a lettering artist",
      "A display name that wants blackletter without the dark-page skulls",
    ],
    sampleInputs: ["Rosa", "Luz", "Vida"],
    platformTip:
      "Paste into a display name or bio, then check that app. Games that only accept plain letters will reject blackletter. These characters are not a tattoo stencil: the strokes are text glyphs, not a drawing sized for skin.",
    faq: [
      {
        q: "Is this a Chicano font I download?",
        a: "No. You copy Unicode characters. This site does not offer a font file, and it does not load the retail blackletter or script faces that image generators use.",
      },
      {
        q: "Is this traditional Chicano lettering?",
        a: "No. Chicano lettering is hand-drawn blackletter and script from Mexican-American graphic work — murals, cars, and tattoos. These rows only approximate the blackletter look, plus one script alphabet. They are not a stencil or a stand-in for an artist.",
      },
      {
        q: "Why do ñ and accented letters stay plain?",
        a: "Unicode fraktur has no styled form for them, so they pass through and the other letters still convert.",
      },
    ],
  },
};
