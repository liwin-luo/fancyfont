// English copy for the 11 multilingual style pages.
// decorated-nicknames is Chinese-only and lives in style-pages-zh-cn.ts.

import type { Locale } from "../i18n";
import type { StylePageCopy } from "../style-pages";

export const stylePagesEn: Record<string, { [L in Locale]?: StylePageCopy }> = {
  "cursive-fonts": {
    en: {
      navName: "Cursive",
      h1: "Cursive Font Generator",
      title: "Cursive Font Generator — Script Styles, Copy & Paste",
      description:
        "Turn English words into fancy cursive. Script and bold script update as you type — one tap to copy for bios, signatures and display names.",
      intro: [
        "Type an English word, name or short phrase below and the cursive versions appear on every card in real time. Tap to copy — no font files, no sign-up, no limits.",
        "These “cursive fonts” aren't fonts at all: they're Unicode characters from the Mathematical Alphanumeric Symbols block that happen to look handwritten. Because they're ordinary text, the style survives any copy-paste into nicknames, bios and signatures.",
      ],
      steps: [
        "Type your English name or favorite phrase in the box.",
        "Compare the light script with the bold script; the ♡ and ✧ combos add decorations automatically.",
        "Tap copy on the winner, or star a few candidates and pick later.",
        "Paste into the target app and post a test before you commit.",
      ],
      about: {
        heading: "How cursive text works",
        paragraphs: [
          "The styled letters come from Unicode's Mathematical Alphanumeric Symbols block, added in 2001 so formulas could be typeset. A generator simply swaps each ordinary letter for the styled character at the same code position — order, length and capitalization stay identical.",
          "Because every letter needs a matching glyph, cursive only covers A–Z. Chinese, Japanese and Arabic have no styled forms in Unicode — that's why Chinese nicknames rely on decorative frames instead (see the nickname decorator, Chinese site only).",
        ],
      },
      faq: [
        {
          q: "Where can I paste cursive text?",
          a: "Anywhere plain text is accepted: display names, bios, signatures, chat nicknames, game IDs. Fields that validate strictly — @handles, login IDs — usually reject styled characters.",
        },
        {
          q: "Why do some letters show as boxes on other devices?",
          a: "The receiving device's fonts lack those glyphs — common on old systems. Switching to bold script usually fixes it. Star two candidates so you have a backup.",
        },
        {
          q: "Does cursive text hurt searchability?",
          a: "Yes. Styled characters aren't ordinary letters, so searching your nickname verbatim may fail. Keep the real name in plain characters somewhere — decorations are for display, not lookup.",
        },
        {
          q: "Does cursive text take up more characters in my bio?",
          a: "No — each ordinary letter swaps for exactly one cursive letter, so the length stays identical. Whatever fit in the field before still fits.",
        },
        {
          q: "Will screen readers read cursive text properly?",
          a: "Not really — many announce it as “mathematical script” letter by letter. Keep cursive to names and short accents, and write anything meant to be read aloud in plain text.",
        },
        {
          q: "Is the generator free? Do I need an account or a font install?",
          a: "Free, no sign-up, and nothing to install — cursive letters are Unicode characters, not font files. The style travels inside the copied text itself.",
        },
      ],
    },
  },
  "bold-fonts": {
    en: {
      navName: "Bold",
      h1: "Bold Text Generator",
      title: "Bold Font Generator — Serif, Sans & Bold Italic",
      description:
        "Make genuinely bold fancy-text characters in four styles — serif, clean sans, bold italic and italic. Updates as you type; one tap to copy anywhere.",
      intro: [
        "Most chat apps and social platforms can't bold a single word — here the characters themselves are bold, so the emphasis survives every paste.",
        "Four weights to choose from: classic bold, clean sans bold, bold italic and italic. Digits get bold forms too, so dates and numbers work.",
      ],
      steps: [
        "Type the word, phrase or number you want to emphasize.",
        "Compare the four weights — bold for headings, italic for accents.",
        "Copy and paste into chat, a signature or a title.",
        "If the target app renders it oddly, switch to sans bold.",
      ],
      about: {
        heading: "Character-level bolding",
        paragraphs: [
          "This bold is different from a word processor's: it isn't a formatting flag, it's a swap to the Mathematical Bold block of Unicode. Boldness is baked into the character itself, independent of any layout engine.",
          "The cost is accessibility: screen readers may announce 𝗕𝗼𝗹𝗱 as “mathematical sans bold B…” — noise for visually impaired listeners. Keep it to short phrases, never paragraphs.",
        ],
      },
      faq: [
        {
          q: "Does bold work in chat apps like WhatsApp or Discord?",
          a: "Yes — the boldness is part of the characters, so chat bubbles keep it without any formatting syntax.",
        },
        {
          q: "Can I mix bold with Chinese or emoji?",
          a: "Yes. Chinese and emoji have no bold forms and pass through unchanged while the Latin parts turn bold — mixed text works fine.",
        },
        {
          q: "Can I use bold characters in hashtags?",
          a: "Better not. Hashtags match plain letters; a styled #Bold won't be indexed or clickable. Keep hashtags in ordinary characters.",
        },
        {
          q: "Will screen readers cope with bold characters?",
          a: "Poorly — they may announce 𝗕 as “mathematical sans bold B” instead of just B. Bold one or two words at most, and keep anything meant to be read aloud plain.",
        },
        {
          q: "Why do bold letters show as boxes on some phones?",
          a: "The receiving device's fonts lack glyphs for the mathematical block — rare, but common on very old systems. There's nothing the sender can fix; resend in plain text if it happens.",
        },
        {
          q: "Does the bold survive pasting into Word or Google Docs?",
          a: "Yes — the boldness lives in the characters themselves, so it survives documents, spreadsheets and emails. It even stays bold where the app's own formatting would be stripped.",
        },
      ],
    },
  },
  "gothic-fonts": {
    en: {
      navName: "Gothic",
      h1: "Gothic Font Generator",
      title: "Gothic Font Generator — Old English Blackletter",
      description:
        "Turn text into Fraktur blackletter in two weights — the dark fancy-text look for IDs, band names and moody bios. Updates as you type, one tap to copy.",
      intro: [
        "Gothic (Fraktur/Blackletter) is the lettering on old newspaper mastheads and metal band logos. Type an English word and both weights render live — tap a card to copy.",
        "Pair it with ☠ or ⚔ decorations and you have a ready-made dark-themed nickname. Latin letters only — other scripts pass through unchanged.",
      ],
      steps: [
        "Type your English nickname, band name or short phrase.",
        "Compare the two weights — the bold one stays legible at small sizes.",
        "Copy, paste into the name field, then post a test to check rendering.",
        "If boxes appear on older devices, switch to the bold weight or cursive.",
      ],
      about: {
        heading: "Newspaper lettering as Unicode",
        paragraphs: [
          "Unicode's Mathematical Alphanumeric Symbols block includes a Fraktur A–Z. Its readability is naturally low, so keep it to two or three words — nicknames and titles, never sentences.",
          "A few letters (C, H, I, R, Z) have no standard Fraktur code point, so the well-known decorative substitutes fill in — the same convention every generator follows.",
        ],
      },
      faq: [
        {
          q: "Can I use gothic text in games?",
          a: "Most games accept Unicode nicknames, and blackletter usually passes. Games with whitelist validation may refuse — if you see an “illegal characters” error, plain letters are the only option there.",
        },
        {
          q: "Is gothic the same as Old English?",
          a: "Colloquially yes — “Old English font” almost always means Fraktur blackletter, not the actual Old English language.",
        },
        {
          q: "Why do some letters look off?",
          a: "Unicode only ships Fraktur glyphs for part of the alphabet; C, H, I, R and Z use decorative stand-ins. Every generator produces the same result.",
        },
        {
          q: "Does gothic text take up more characters?",
          a: "No — it's a one-for-one letter swap, so 𝔊𝔬𝔱𝔥𝔦𝔠 counts the same as “gothic”. Decorations like ☠ add their own characters, one each.",
        },
        {
          q: "Is blackletter readable to screen readers?",
          a: "Not naturally — they tend to announce it as “Fraktur” or “mathematical” letters. Keep gothic to nicknames and titles; never use it for a sentence someone needs to hear.",
        },
        {
          q: "Can I add ☠ or ⚔ to a gothic name?",
          a: "Yes — they're ordinary Unicode symbols and pair naturally with blackletter. Both are widely supported, though a few very old devices may still show boxes.",
        },
      ],
    },
  },
  "small-fonts": {
    en: {
      navName: "Small caps",
      h1: "Small Text Generator",
      title: "Small Font Generator — Small Caps, Super & Subscript",
      description:
        "Quiet small caps, superscript and subscript for clean bios. Updates as you type, one tap to copy. Honest fancy-text coverage: a few capitals stay unchanged.",
      intro: [
        "Need a quiet second line in your bio? Small caps turn letters into miniature capitals, superscript lifts text up and subscript drops it down. Live preview, tap to copy.",
        "All three styles share one quality: they don't shout. A small-caps line inside a loud row of styles adds instant hierarchy.",
      ],
      steps: [
        "Type the English phrase you want to shrink.",
        "Small caps suit whole lines; superscript and subscript fit one or two words.",
        "Copy and paste into your bio, signature or note.",
        "A few capitals have no small-caps glyph and stay unchanged — that's normal.",
      ],
      about: {
        heading: "The limits of going small",
        paragraphs: [
          "Unicode's small-capital set has no X (and Q uses a lookalike), and the superscript table is missing several capitals. The engine is honest about it: characters without a styled form stay as typed rather than being faked.",
          "“Small” here means different characters, not a font-size change — so line height and spacing stay under the platform's control, and the text stays legible on small screens.",
        ],
      },
      faq: [
        {
          q: "Why didn't some letters change?",
          a: "Unicode doesn't ship small-capital glyphs for every letter — X has none at all. All generators have the same gaps.",
        },
        {
          q: "What are superscript digits good for?",
          a: "Year badges like ²⁰²⁶, footnotes and formula jokes — they also pair nicely with normal text as annotations.",
        },
        {
          q: "Is small text harder to read?",
          a: "The letterforms are ordinary; only the visual size differs. But screen readers may announce “superscript” per character, so avoid it for anything that must be read aloud.",
        },
        {
          q: "Do small caps count the same in my bio?",
          a: "Yes — one styled character per ordinary letter, so the count doesn't change. Small caps change the look, not the length.",
        },
        {
          q: "Why do superscript letters show as boxes on older devices?",
          a: "The superscript table is one of the patchiest sets in Unicode, and old fonts miss much of it. If boxes appear, fall back to small caps — they have the best coverage of the three styles.",
        },
        {
          q: "Can I set my whole bio in small caps?",
          a: "You can — small caps suit whole lines better than superscript or subscript do. But a bio in one uniform style loses hierarchy; keep the main line normal and style the second line instead.",
        },
      ],
    },
  },
  "aesthetic-fonts": {
    en: {
      navName: "Aesthetic",
      h1: "Aesthetic Font Generator",
      title: "Aesthetic Font Generator — Fullwidth & Vaporwave",
      description:
        "ＡＥＳＴＨＥＴＩＣ fullwidth letters — the vaporwave fancy-text look — with ✧ ｡ﾟ heart combos. Live preview, one tap to copy for bios and captions.",
      intro: [
        "ａｅｓｔｈｅｔｉｃ — swapping ordinary letters for fullwidth forms widens everything into an even, dreamy rhythm. Add a ✧ or ｡ﾟ frame and you have the complete vaporwave package. Tap to copy.",
        "Fullwidth characters were designed for CJK typesetting, which is exactly why English set in them gets that unmistakable Japanese-manual vibe.",
      ],
      steps: [
        "Type a short English word or phrase — shorter reads better.",
        "Take the fullwidth body or layer a ✧・｡ﾟ decoration combo.",
        "Copy and paste into your bio, caption or video description.",
        "Fullwidth letters are wide — check the platform's character counter.",
      ],
      about: {
        heading: "Why it's called aesthetic",
        paragraphs: [
          "Fullwidth Forms are Unicode's widened Latin alphabet, built for compatibility with old CJK terminals. Every character occupies a full ideographic cell, giving English an intentional airy spacing — the core ingredient of the vaporwave look.",
          "The decoration combos use characters from the same width family, so the rhythm stays even instead of turning noisy like random emoji do.",
        ],
      },
      faq: [
        {
          q: "How many characters does fullwidth count as?",
          a: "Most platforms count one character each; a few count display width as 2. Watch the platform's own counter after pasting.",
        },
        {
          q: "Does fullwidth mix well with Chinese?",
          a: "Perfectly — fullwidth letters share the exact width of Han characters, so mixed bios keep an even rhythm. It's the best English style for CJK-mixed text.",
        },
        {
          q: "Why does it look Japanese?",
          a: "Fullwidth forms belong to the CJK typesetting tradition, which Japanese text uses heavily. They remain standard Unicode characters, tied to no language.",
        },
        {
          q: "Will screen readers read fullwidth text?",
          a: "Usually yes, but slowly — many announce each letter as a “fullwidth” character. Fine for a one-word bio accent; not for anything that has to be read aloud.",
        },
        {
          q: "Does fullwidth text still work in search?",
          a: "No — searching “vaporwave” won't match ｖａｐｏｒｗａｖｅ, because the characters are different code points. Use fullwidth for display lines and keep anything meant to be found in ordinary letters.",
        },
        {
          q: "Do I need to download a vaporwave font?",
          a: "No — fullwidth letters are standard Unicode characters, not font files. There's nothing to install and no account to make; the look travels with the copied text.",
        },
      ],
    },
  },
  "cute-fonts": {
    en: {
      navName: "Cute",
      h1: "Cute Font Generator",
      title: "Cute Font Generator — Hearts, Bows & Soft Frames",
      description:
        "Sweet fancy-text bubble, script and circled letters wrapped in ♡ ୨୧ ✿ frames. Live preview, one-tap copy for soft, matching names.",
      intro: [
        "Bubble letters, hearts, bows and soft brackets — the whole sweet-toolkit on one page. Type a name and every style and combo renders live; tap to copy.",
        "Decoration combos wrap the winning style in a symbol pair — ♡Sweetie♡. Save several variants and switch with your mood.",
      ],
      steps: [
        "Type an English name or a sweet short phrase.",
        "Pick the base: bubble is roundest, script is softest.",
        "Layer a decoration combo — hearts and bows are the crowd favorites.",
        "Star a few candidates and test how they render on the platform.",
      ],
      about: {
        heading: "The recipe for cute",
        paragraphs: [
          "Cuteness comes from round glyphs plus symmetric decorations. Bubble and circled letters carry the roundness; hearts and flowers on both sides add a soft rhythm.",
          "Decoration symbols differ in compatibility: ♡ and ✿ work almost everywhere, while ୨୧ may turn into boxes on old devices. Post a test before committing — risk notes are on every card.",
        ],
      },
      faq: [
        {
          q: "How do I make matching names for couples or besties?",
          a: "Wrap the same name in two different combos — one ♡, one ୨୧. Star both so they're ready to paste.",
        },
        {
          q: "Do decorations use extra characters?",
          a: "The letters swap one-for-one; each decoration adds 1–2 symbols per side. Keep an eye on the platform's name-length counter.",
        },
        {
          q: "The bow symbol shows as a box — what now?",
          a: "That device lacks the glyph. Switch to ♡ or ✿; the bubble letters themselves are highly compatible.",
        },
        {
          q: "Will screen readers handle a cute decorated name?",
          a: "Mostly — ♡ and ✿ are announced as short symbol names, but frames around every word get noisy fast. Decorate the name, not the sentences.",
        },
        {
          q: "Why does ♡ sometimes render in color like an emoji?",
          a: "Some platforms give heart shapes an emoji presentation and paint them red. It varies by device, not by your text — if it bothers you, ✿ or ✧ stay black-and-white more reliably.",
        },
        {
          q: "Is the cute generator free — do I need to install anything?",
          a: "Free, no account, nothing to install. Bubble and circled letters are Unicode characters, so the style is copied along with the text itself.",
        },
      ],
    },
  },
  "bubble-fonts": {
    en: {
      navName: "Bubble",
      h1: "Bubble Letters Generator",
      title: "Bubble Font Generator — Circled, Squared & Parenthesized",
      description:
        "Wrap every letter in fancy bubbles: filled bubbles, thin circles, parentheses and squared badges. Live preview, one tap to copy for names and numbering.",
      intro: [
        "Letters inside circles and boxes: 🅑🅤🅑🅑🅛🅔 filled bubbles, ⓑⓤⓑⓑⓛⓔ thin circles, plus parenthesized and squared variants. Type, preview, tap to copy.",
        "The four wraps differ in weight: bubbles are the heaviest, thin circles the lightest, parentheses the airiest, squares the most badge-like (watch for emoji rendering).",
      ],
      steps: [
        "Type an English word — 2 to 6 letters works best.",
        "Compare the four wraps and pick a density that fits the context.",
        "Copy and paste into a name, group card or numbered list.",
        "If squares turn into colored emoji, switch to bubbles or circles.",
      ],
      about: {
        heading: "Two families of enclosed letters",
        paragraphs: [
          "Thin circle letters come from Unicode's classic Enclosed Alphanumerics (neighbors of ①②③), which also covers circled digits 1–20; filled bubbles and squares come from the newer Enclosed block, where some characters carry an emoji presentation.",
          "That emoji identity is why 🅱 occasionally renders in color — a dual identity, not a bug. Switch styles when a platform forces the colorful form.",
        ],
      },
      faq: [
        {
          q: "Do digits get wrapped too?",
          a: "Yes — bubbles and circles cover 0–9, parentheses cover 1–20. Numbered lists like ⓶⓪⓶ work out of the box.",
        },
        {
          q: "Why did my square letter turn colorful?",
          a: "Characters like 🅱🅰 have an emoji identity and some platforms prefer that rendering. Use thin circles when you want the plain black-and-white form.",
        },
        {
          q: "Are bubble letters good for long sentences?",
          a: "No — enclosed characters are visually dense and get noisy fast. Single words, numbers and keywords are the right dose.",
        },
        {
          q: "Do circle letters count as two characters?",
          a: "One each in most counters, but enclosed letters are wide — some platforms count display width as 2. Paste first and watch the platform's own counter.",
        },
        {
          q: "Are bubble letters readable by screen readers?",
          a: "Not smoothly — many announce ⓑ as “circled latin small letter b”. Fine for a display name; keep sentences and anything read aloud in plain letters.",
        },
        {
          q: "Do I need to install a bubble font?",
          a: "No — these are Unicode characters, not font files. Nothing to install and no account needed; the bubbles travel inside the copied text itself.",
        },
      ],
    },
  },
  "strikethrough-text": {
    en: {
      navName: "Strikethrough",
      h1: "Strikethrough Text Generator",
      title: "Strikethrough Text Generator — Slash & Underlines",
      description:
        "Strike, slash or underline any fancy text — Chinese and emoji included. Copy in one tap; screen readers still read the base text, counters may double.",
      intro: [
        "Chat apps won't let you strike a word — here the line is baked into the characters, so it survives every paste and works on any script.",
        "Strikethrough for jokes and corrections, underline for emphasis; six variants from single lines to double underlines.",
      ],
      steps: [
        "Type the word or phrase to line through.",
        "Strikethrough reads as “crossed out”; underline reads as emphasis.",
        "Copy and paste into chat, a bio or a comment.",
        "Line alignment depends on the reader's font — slight offsets are normal.",
      ],
      about: {
        heading: "How combining marks draw lines",
        paragraphs: [
          "The lines aren't graphics — they're Unicode combining marks (U+0336 and friends) stacked onto each character. Rendering draws the line through the previous glyph, which is why the trick works on Chinese and emoji too.",
          "The cost: copied text counts roughly double — every visible character carries an invisible mark. Watch the counter in strict input fields.",
        ],
      },
      faq: [
        {
          q: "Does strikethrough work on Chinese?",
          a: "Yes — every Han character gets the line too. Some fonts render it thinner on CJK glyphs; the effect varies by platform.",
        },
        {
          q: "Why did my character count double?",
          a: "Every visible character carries an invisible combining mark that counters include. Struck text is about twice as long as it looks.",
        },
        {
          q: "Can I use underlined text as a game name?",
          a: "Depends on the game. Most accept combining marks; strict anti-cheat validations may refuse. Test in the rename dialog before spending a name-change card.",
        },
        {
          q: "Will screen readers still read struck-through text?",
          a: "Yes — the combining marks don't change the base characters, so the words come through. The “crossed out” joke is lost on listeners, though; don't rely on the line to carry meaning.",
        },
        {
          q: "How do I remove a strikethrough later?",
          a: "Delete the text and retype it — the marks are part of the characters, so nothing can toggle them off. A tool that strips combining marks (like a zalgo cleaner) also undoes it.",
        },
        {
          q: "Can I strike through emoji too?",
          a: "Yes — combining marks stack on any character, emoji included. Rendering varies: some apps draw the line cleanly, others offset it or skip it on the emoji glyph.",
        },
      ],
    },
  },
  "fancy-numbers": {
    en: {
      navName: "Numbers",
      h1: "Fancy Numbers Generator",
      title: "Fancy Numbers Generator — Circled, Bold & Bubble",
      description:
        "Turn digits into ① 𝟙 ➊ — six fancy digit families for dates, door numbers and IDs. Honest coverage notes; copy in one tap.",
      intro: [
        "①②③ 𝟙𝟚𝟛 ➊➋➌ — every digit style you can type, on one page. Enter a number, date or room number and the styles render live.",
        "Digit styles mix well with words: 𝟐𝟎𝟐𝟕 class, ⓿ errors. The page also outputs letter forms so you can copy labels together with numbers.",
      ],
      steps: [
        "Type the number — units and letters welcome (like No.1).",
        "Circled digits suit list numbering; bold suits years.",
        "Copy and paste into posts, titles or nicknames.",
        "If boxes appear on older devices, switch to bold or monospace.",
      ],
      about: {
        heading: "Six shapes for ten digits",
        paragraphs: [
          "Unicode gives 0–9 several styled families: mathematical bold/outline/monospace in the math block; circled digits in the classic symbols block next to ①; filled bubbles in the enclosed block. Font coverage differs per family — older systems miss the rarest ones.",
          "A rough reliability order: plain bold > monospace > outline > circled > bubble. When sending to unknown devices, prefer the top of that list.",
        ],
      },
      faq: [
        {
          q: "Can I send phone numbers in fancy digits?",
          a: "Please don't. Verification codes, order numbers and phone numbers must be recognized as ordinary digits — styled digits break recognition.",
        },
        {
          q: "What's the difference between ① and ➊?",
          a: "① is a thin circle from the classic symbols block, ➊ a filled bubble from the enclosed block — different sources, looks and font coverage. Swap them when one renders badly.",
        },
        {
          q: "Is a fancy-digits user ID searchable?",
          a: "No. People can't type styled digits to find you. Show contact info in ordinary digits next to any decorated version.",
        },
        {
          q: "Why do circled digits show as boxes on older phones?",
          a: "Older fonts cover plain bold and monospace digits well but miss rarer families like bubbles and filled outlines. When sending to unknown devices, start at the top of the reliability list — bold first, bubble last.",
        },
        {
          q: "How do screen readers handle fancy digits?",
          a: "They may announce ① as “circled digit one” or skip the style entirely. Never use styled digits for anything that must be read back or dialed — a year in a post is fine, an address is not.",
        },
        {
          q: "Is this generator free to use?",
          a: "Yes — free, no account, nothing to install. Styled digits are ordinary Unicode characters you copy like any other text.",
        },
      ],
    },
  },
  "zalgo-text": {
    en: {
      navName: "Zalgo",
      h1: "Zalgo Text Generator",
      title: "Zalgo Text Generator — 3 Glitch Levels & Cleaner",
      description:
        "Stack cursed fancy-text marks in three intensities on any character. Copy in one tap, or strip corruption with the built-in cleaner. Screen readers skip it.",
      intro: [
        "Zalgo stacks combining marks onto characters until the text bleeds. Three intensities from lightly off to fully cursed — type, preview, copy.",
        "The cleaner at the bottom of the page closes the loop: paste corrupted text from anywhere and strip every mark back to the clean original.",
      ],
      steps: [
        "Type a phrase — zalgo works on any characters, Chinese and emoji included.",
        "Pick an intensity: light suits signatures, heavy is for short horror copy.",
        "Tap copy and paste into a name, bio or spooky post.",
        "Regret it? Drop the text into the cleaner below and restore it.",
      ],
      about: {
        heading: "Combining marks, taken too far",
        paragraphs: [
          "Letters, Han characters and emoji are all ordinary characters — and Unicode ships hundreds of combining marks with no width of their own, drawn stacked on the previous glyph. Zalgo stuffs 2–8 of them after every character.",
          "The denser the stack, the more layout engines struggle: rows get clipped, counters explode, and screen readers recite every mark. Heavy zalgo belongs in short copy only — never in anything important.",
        ],
      },
      faq: [
        {
          q: "Can zalgo text damage my account?",
          a: "No — it's plain text with no code attached. The risks are display-level: broken layout, refused saves in some games. Test short first; the cleaner always restores.",
        },
        {
          q: "Why does it render as tiny marks or squares elsewhere?",
          a: "The device's fonts lack those combining glyphs. A lighter intensity usually survives; that's why heavy is for short copy.",
        },
        {
          q: "How do I clean zalgo someone sent me?",
          a: "Paste the whole thing into the cleaner on this page — it strips every combining mark and variation selector, keeping only base characters, all locally in your browser.",
        },
        {
          q: "How much longer does zalgo text get?",
          a: "A lot — every character carries 2–8 invisible marks, so a heavy curse can triple the length and blow past strict counters. Light zalgo fits a 30-character name; heavy rarely does.",
        },
        {
          q: "Is zalgo readable by screen readers?",
          a: "Essentially no — screen readers recite every combining mark, turning one name into minutes of noise. It's the least accessible style on this site; keep it to short copy aimed at eyes, not ears.",
        },
        {
          q: "Where can I actually post zalgo text?",
          a: "Bios, display names and comments — short, decorative spots. Strict fields (logins, handles, forms) refuse the marks or clip the stack, and games with name filters often reject it outright.",
        },
      ],
    },
  },
  "upside-down-text": {
    en: {
      navName: "Upside down",
      h1: "Upside Down Text Generator",
      title: "Upside Down Text Generator — Flip Letters & Marks",
      description:
        "Mirror every letter and reverse the line — a becomes ɐ, ! becomes ¡. Type, watch it flip, copy in one tap. Well supported fancy text for bios and messages.",
      intro: [
        "ʇı dᴉlℲ — mirror every letter, then run the string backwards, and the whole line reads upside down. Type, preview, copy.",
        "Letters, digits 1–9 and common punctuation all have upside-down forms. Chinese has none and passes through, so mixed text flips halfway — which is its own kind of fun.",
      ],
      steps: [
        "Type the English phrase to flip.",
        "Check the preview — punctuation flips too.",
        "Copy and paste into a signature or comment.",
        "Want the Chinese part to look odd too? Add a frame or spacing from the decorator.",
      ],
      about: {
        heading: "It's not rotation — it's substitution",
        paragraphs: [
          "Upside-down text isn't a graphic effect: the engine swaps each letter for a Unicode lookalike (a→ɐ, e→ǝ) and then reverses the string, so reading order runs right-to-left and the line looks inverted.",
          "The map covers both cases, digits and common punctuation; characters without an upside-down form (like W or Chinese) stay put. It's still ordinary text — copy, paste and counters all behave.",
        ],
      },
      faq: [
        {
          q: "Does flipped text display fine on phones?",
          a: "Yes — the mirror characters are ordinary letters covered by mainstream system fonts. A few shapes look slightly odd by nature.",
        },
        {
          q: "Why didn't the Chinese flip?",
          a: "Unicode has no mirrored Han glyphs, so Chinese passes through. Frame it or space it out for the “something's off” effect.",
        },
        {
          q: "How do I read it back?",
          a: "Paste it back into the box and flip again — the transform is its own inverse.",
        },
        {
          q: "Will screen readers understand flipped text?",
          a: "No — they read the mirrored letters as written, which sounds like gibberish, and the reversal scrambles the order further. Flip only short, decorative lines.",
        },
        {
          q: "Why did some letters stay upright?",
          a: "A few characters have no upside-down lookalike — W is the famous one — so they're left as typed. It's a gap in Unicode's mirror table, not a bug in the generator.",
        },
        {
          q: "Can I use upside-down text in a username?",
          a: "Display names usually take it; strict @handles and login fields typically reject the mirrored characters. Test in the real field first — and remember nobody can type it to search for you.",
        },
      ],
    },
  },
};
