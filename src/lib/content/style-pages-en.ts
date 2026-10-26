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
      "Both cursive styles convert A–Z and a–z. Unicode has no cursive digits, so numbers stay as you typed them, and accented letters, emoji and other scripts pass through untouched.",
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
      "Create gothic blackletter text from any word. Classic and bold weights, live preview, one-tap copy for names, bios and clans.",
    intro:
      "Type anything and turn it into gothic blackletter — the old-world style you see in metal logos, clan tags and moody bios. Copy it in one click.",
    howItWorks:
      "Gothic text uses the Unicode Mathematical Fraktur ranges. Fraktur is a historical German blackletter style, and Unicode ships a full lookalike alphabet for it — including typographically correct special forms for C, H, I, R and Z.",
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
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Aesthetic Text Generator",
    description:
      "Turn text into wide vaporwave letters — ａｅｓｔｈｅｔｉｃ spacing for bios, captions and lo-fi profiles. Copy in one tap.",
    intro:
      "ａｅｓｔｈｅｔｉｃ. This generator widens every letter into full-width forms — the slow, spaced-out vaporwave look that defined an entire aesthetic.",
    howItWorks:
      "Full-width characters come from legacy encodings where CJK and Latin text shared fixed-width grids, so Latin letters got wide boxes of their own. Spaces widen too — each one becomes a full ideographic space — which is where the slow, floating rhythm comes from.",
    coverageNote:
      "Full-width covers letters, digits and spaces, so whole phrases convert cleanly. Punctuation stays in its normal form, and emoji and other scripts are unaffected.",
    bestFor: [
      "Vaporwave, lo-fi and retro profiles",
      "Slow, spaced-out one-word bios",
      "Retro-tech and 80s/90s themed posts",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "dream 1997"],
    platformTip:
      "Full-width text renders everywhere CJK text renders — which is essentially everywhere. It is wide, though: check that long phrases fit your bio without wrapping awkwardly.",
    faq: [
      {
        q: "Why is it called vaporwave text?",
        a: "The style became the visual signature of vaporwave music culture — wide letters, slow spacing, retro-future vibes. The technical name is full-width text.",
      },
      {
        q: "Does the wide spacing copy too?",
        a: "Yes — the wide space is a real character (the ideographic space), so the airy rhythm survives pasting. It also means the text takes up more room in character limits.",
      },
      {
        q: "Will it count as more characters in my bio?",
        a: "Each full-width character counts as one character, same as a normal letter — but the wide spaces count too, so a phrase effectively uses more of your limit.",
      },
    ],
  },
};
