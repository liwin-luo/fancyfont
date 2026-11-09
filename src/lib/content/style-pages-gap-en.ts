// Gap pages: dedicated pages for keyword families with 50k+ demand but no
// page (keyword-clusters analysis 2026-11, content-gaps.md P0). English-only
// first version, same pattern as the migration landing pages.

import type { Locale } from "../i18n";
import type { StylePageCopy } from "../style-pages";

export const stylePagesGapEn: Record<string, { [L in Locale]?: StylePageCopy }> = {
  "superscript-subscript-generator": {
    en: {
      navName: "Superscript",
      h1: "Superscript & Subscript Generator",
      title: "Superscript & Subscript Generator — Small Raised Text",
      description:
        "Type x2 and get ˣ² — fancy superscript and subscript letters for math notes, chemistry and bios. Live preview, copy in one tap, notes on missing glyphs.",
      intro: [
        "Type x2 below and the superscript version ˣ² appears on the card — raised letters, lowered letters, no formatting attached. Tap to copy and paste it into a note, a bio, a homework doc or a chat message.",
        "These are real Unicode characters, not a font: the small raised ˣ and the small lowered ₂ each have their own code point. That is why they survive copy and paste everywhere — and why a few rare letters simply do not exist and stay normal-size, which we mark instead of hiding.",
      ],
      steps: [
        "Type the letter or formula fragment you need in the box.",
        "Compare the superscript row ˣ² with the subscript row ₓ₂ on the cards.",
        "Tap the card that fits — it copies instantly.",
        "Paste into your note, bio or message and check the glyphs all drew.",
      ],
      about: {
        heading: "How raised and lowered letters work",
        paragraphs: [
          "Unicode ships a small set of raised and lowered Latin letters scattered across legacy blocks — phonetic extensions, superscript digits and a handful of others. A generator swaps each normal letter for the raised or lowered character at the same position, so order, length and case stay identical.",
          "Coverage is the honest caveat: every digit and most lowercase letters have a raised form, but the full uppercase alphabet does not — W in particular has no superscript glyph in Unicode. Where a glyph is missing, the letter stays normal-size rather than silently changing your text into something else.",
        ],
      },
      faq: [
        {
          q: "Why do some letters stay normal-size?",
          a: "Unicode simply has no raised or lowered glyph for every letter — superscript W, for example, does not exist. The generator keeps the original character instead of faking it, so your text stays honest and editable.",
        },
        {
          q: "Is x² here the same as the ² on my keyboard?",
          a: "The ² key inserts one ready-made superscript digit — fine for digits, useless for letters. This page converts whole words letter by letter, so ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ is possible, not just ¹²³.",
        },
        {
          q: "Where can I paste raised and lowered text?",
          a: "Almost anywhere plain text goes — notes apps, bios, chats, document titles. Code editors and terminals usually render them too. When an app lacks the glyph you get a box, same as any rare character.",
        },
        {
          q: "Does superscript text help with SEO or search?",
          a: "No — raised letters are different code points, so ˢᵘᵖᵉʳ does not match a search for super. Use it for looks, never for keywords, handles or anything people will type into a search box.",
        },
      ],
    },
  },
  "signature-font-generator": {
    en: {
      navName: "Signature",
      h1: "Signature Font Generator",
      title: "Signature Font Generator — Script Styles for Your Name",
      description:
        "Turn your name into a handwritten-style fancy signature for email sign-offs, Discord, streams and bios. Copy in one tap. Not an ink or legal signature.",
      intro: [
        "Type your name and watch it become a flowing script signature — 𝒮𝒾𝓃𝒸𝑒𝓇𝑒𝓁𝓎, 𝒜𝓁𝑒𝓍 or 𝕊𝕡𝕒𝕣𝕜 — live on the cards as you type. Tap the one that feels like you and it is on your clipboard.",
        "A text signature is plain Unicode, not an image and not a font file: it pastes into email sign-offs, Discord profiles, stream titles and bios anywhere. It will never replace an ink signature on paper — this page is for the fun, everyday kind.",
      ],
      steps: [
        "Type the name or initials you sign with in the box.",
        "Compare the flowing script with the bolder script and the italic rows.",
        "Tap the card you like — it copies instantly.",
        "Paste it into your email sign-off, profile bio or chat and check it drew cleanly.",
      ],
      about: {
        heading: "What a text signature can and cannot be",
        paragraphs: [
          "The script looks are Unicode math-alphanumeric letters — the same technology as every cursive style on this site. Because they are plain characters, your signature travels with the text: it survives copy and paste into any app that renders Unicode, with nothing to install and nothing uploaded.",
          "What it cannot do is be legally yours: an e-mail sign-off in 𝓈𝒸𝓇𝒾𝓅𝓉 has no more legal weight than typed text. Real signatures — contracts, banks, deliveries — need ink or a proper e-signature service. For everything social and personal, a text signature is the quick middle ground.",
          "No image export here, by design: this page produces characters, not pictures, so there is no PNG to download. If you want a copy you can keep, screenshot the card — or paste the signature into a document and use the browser's print → Save as PDF, which preserves the styling because it is text.",
        ],
      },
      faq: [
        {
          q: "Can I use this as my legal or email signature?",
          a: "Legally, no — a styled-text signature carries no more weight than plain typed text, and contracts need ink or a real e-signature tool. For email sign-offs, Discord, bios and stream titles, it works everywhere plain text does.",
        },
        {
          q: "Why does my signature look different on my friend's phone?",
          a: "Every device draws Unicode with its own fonts, so the same script can look slightly bolder, thinner or rounder elsewhere. The characters stay identical — only the rendering changes.",
        },
        {
          q: "Which style looks most like real handwriting?",
          a: "The flowing script and bold script rows are the closest — keep the name short (first name, or initials) and it reads as a signature rather than a word. Long phrases always look like decorated text, not a signature.",
        },
        {
          q: "Will the signature work in my email client?",
          a: "Most modern clients render it fine in HTML mode. Plain-text mode and some corporate filters strip it back to normal letters — paste a test mail to yourself before relying on it.",
        },
        {
          q: "Can I download my signature as a PNG or image?",
          a: "No — the generator outputs styled characters, not images, so there is nothing to download. For a picture, screenshot the card you like; for anything printable, paste the signature into a document and print it to PDF — the style survives because it is text.",
        },
        {
          q: "How do I save or print my signature for later?",
          a: "Copy your favorite into a note or document and it keeps the look wherever Unicode renders. To file a reusable copy, screenshot it; to put it on paper, paste into any document and use print → Save as PDF — no image file needed.",
        },
      ],
    },
  },
  "nickname-generator": {
    en: {
      navName: "Nicknames",
      h1: "Nickname Generator",
      title: "Nickname Generator — Fancy Name Maker & Fonts",
      description:
        "Fancy nicknames in one place: styled fonts, ꧁꧂ gamer frames and name ideas — Instagram ~30, Roblox 3–20, Discord ~32. Live preview, favorites, one-tap copy.",
      intro: [
        "Type a name once and watch it become 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉, ᴛʜᴇ ꧁ɢʀɪᴍ꧂ or ♡ ｍｉｌｋｔｅａ ♡ — styled fonts on top, gamer frames and symbol pairs layered underneath. Star your favorites, compare on one screen, copy the winner in one tap.",
        "Two honest notes before you commit: platforms cap nicknames differently (Instagram ~30, TikTok ~24, Roblox 3–20, Discord ~32 — decorations count toward every one of them), and whitelisted games refuse exotic characters entirely. Build the shortlist here, test in the app, then rename.",
      ],
      steps: [
        "Type the name or word you want to turn into a nickname.",
        "Pick a font style, then add a ꧁꧂ frame or a ♡ pair from the decoration rows.",
        "Star 2–3 candidates — the character counter keeps each one inside real platform limits.",
        "Paste into the app, save one test post, and confirm every glyph drew before renaming.",
      ],
      about: {
        heading: "Fonts, frames and ideas — what this page actually does",
        paragraphs: [
          "The font rows swap each letter for a styled Unicode character — script, bold, small caps, fullwidth — which is why the result pastes anywhere as plain text. The decoration rows wrap whatever you typed in ꧁꧂ gamer frames, ♡ hearts or 『』 brackets; every symbol counts as a character, so ꧁ACE꧂ costs 7, not 3.",
          "As for ideas: the best nicknames are short, pronounceable and personal — a hobby, a mains' verb, an old gamer tag with the numbers dropped. Generate from a real word, not random syllables; random strings fail the friend-test (nobody can find or remember them), and styled text is already hard to search, so keep the base name simple.",
        ],
      },
      faq: [
        {
          q: "Why do some games refuse my decorated nickname?",
          a: "Anti-impersonation whitelists only allow known characters — exotic frames get refused with an “invalid characters” error. It's a save-block, not a ban: strip the decorations back to fonts or plain letters.",
        },
        {
          q: "Do frames and symbols count toward the nickname limit?",
          a: "Yes, every one: ꧁꧂ adds 2, ♡…♡ adds 2–6 depending on the pair. Keep the base name inside the platform cap minus decorations — the counter on this page shows the real length as you go.",
        },
        {
          q: "Can I use the same nickname on Instagram, TikTok and Discord?",
          a: "Usually, if you design for the smallest cap (~24 on TikTok) and keep @handles separate — handles are plain usernames and never accept styles. The display name and bio are where decorated nicknames live.",
        },
        {
          q: "Why does my nickname show boxes on some devices?",
          a: "Older devices and rare fonts lack glyphs for exotic symbols — the ꧁꧂ family and ♡ ♛ ✧ render almost everywhere; that is why this page features them. Test on a friend's phone before committing anywhere permanent.",
        },
        {
          q: "Is the generator free — do I need an account?",
          a: "Free, no account, nothing uploaded — the styles are Unicode characters converted locally in your browser, and favorites are saved on your device only.",
        },
        {
          q: "Will a styled nickname hurt my searchability?",
          a: "Yes, somewhat — 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 does not match a search for starlight. Keep your @handle and one plain-text mention somewhere findable, and treat the styled nickname as the display layer.",
        },
      ],
    },
  },
  "medieval-fonts": {
    en: {
      navName: "Medieval",
      h1: "Medieval Font Generator",
      title: "Medieval Font Generator (𝕮𝖔𝖕𝖞 𝖆𝖓𝖉 𝖕𝖆𝖘𝖙𝖊)",
      description:
        "Turn text into 𝖒𝖊𝖉𝖎𝖊𝖛𝖆𝖑 fonts — Fraktur and Old English styles for clan tags, guild names, D&D characters and bios. Free, no sign-up, copy in one tap.",
      intro: [
        "Type a word and watch it turn 𝕮𝖆𝖒𝖊𝖑𝖔𝖙 — blackletter lettering, the ornate fraktur look people call Old English. Every row below converts as you type, and tapping a card copies it instantly.",
        "These styles fit clan tags, guild names, tabletop character sheets and gothic bios. One honest quirk: the regular Fraktur row borrows ℭ, ℌ, ℑ, ℜ, ℨ for C, H, I, R and Z — real letterlike symbols that read slightly differently. The bold row has no such substitutes.",
      ],
      steps: [
        "Type your word — a clan tag, guild name or character name — in the box.",
        "Compare the regular Fraktur row with the bold one and the decorated variants: underline, halo, wavy, arrows.",
        "Tap the card you like — it copies instantly. Star a few to keep a shortlist.",
        "Paste it where it's going and check every letter drew — read the boundaries note below before taking it into a game.",
      ],
      about: {
        heading: "Where medieval fonts fit — and where they draw boxes",
        paragraphs: [
          "The lettering comes from the Mathematical Fraktur block: ornate capitals born for old math papers, adopted everywhere as the gothic, Old English look. Because the letters are plain Unicode characters, your text travels like any copy-and-paste font — nothing installs, nothing uploads, and the decorated variants just add combining marks around the same letters.",
          "Where it does not work is inside game engines with fixed font packs: Minecraft chat, Roblox in-game text and most console UIs render 𝖌𝖔𝖙𝖍𝖎𝖈 as boxes, because the game ships its own alphabet. Use medieval styles around the games — platform bios, Discord names, clan tags on services that accept them — and test in the actual field before committing anywhere permanent.",
        ],
      },
      faq: [
        {
          q: "Is this the same as your Gothic fonts page?",
          a: "Related, not duplicates. The gothic page mixes blackletter with skulls, strikes and glitch for a dark aesthetic; this page stays inside the Fraktur family — regular, bold and its decorated variants — for the medieval, Old English look specifically.",
        },
        {
          q: "Can I use medieval fonts inside Minecraft, Roblox or other games?",
          a: "Inside the game, usually no — chat, nametags and menus use the engine's fixed font pack, so fraktur letters draw as boxes. Around the game it works: profile bios, Discord names, clan tags on platforms that accept Unicode.",
        },
        {
          q: "Why do some letters look different in the regular Fraktur row?",
          a: "Unicode defines proper blackletter shapes for only a few capitals — C, H, I, R and Z exist as the letterlike symbols ℭ ℌ ℑ ℜ ℨ, so the converter uses them. They carry the same gothic flavor with a slightly different skeleton; the bold Fraktur row needs no substitutes at all.",
        },
        {
          q: "Which medieval style is boldest?",
          a: "Bold Fraktur and its decorated variants (bold underline, bold strike) carry the most weight — start there for short clan tags. Regular Fraktur reads lighter and more manuscript-like; halo, wavy and arrow variants add ornament, not thickness.",
        },
        {
          q: "Do medieval fonts work in Discord server names and channel names?",
          a: "Server names behave like a display name and take styled characters. Channel names do not — Discord slugifies them to plain lowercase, so 𝖌𝖚𝖎𝖑𝖉-𝖍𝖆𝖑𝖑 becomes guild-hall regardless. Keep the lettering in the server name, nicknames and messages.",
        },
        {
          q: "Will 𝕮𝖆𝖒𝖊𝖑𝖔𝖙 render on phones?",
          a: "Modern iOS and Android ship fonts for the Fraktur blocks, so it draws on most phones you'll meet. Very old devices may miss some decorated variants — paste a test message before renaming anything permanent.",
        },
      ],
    },
  },

  "japanese-font-generator": {
    en: {
      navName: "Japanese",
      h1: "Japanese Font Generator",
      title: "Japanese Font Generator — Katakana & Vaporwave Text",
      description:
        "Type romaji, get katakana — sakura becomes サクラ — plus vaporwave fullwidth text for bios, usernames and Discord. Honest note: transliteration, not translation.",
      intro: [
        "Type a word in English letters and it comes out as katakana — sakura turns into サクラ, hello into ヘルロ — while the vaporwave row re-renders it as ｗｉｄｅ aesthetic text. Tap any card to copy.",
        "Two honest notes before you paste: this is transliteration — it spells your word with Japanese sounds, it does not translate meaning — and real Japanese (kanji and all) needs a translator, not a font generator. Everything here is decoration-grade Unicode.",
      ],
      steps: [
        "Type your word in romaji — English letters — in the box.",
        "Compare the katakana row with the wide ｆｕｌｌｗｉｄｔｈ row and the rest of the aesthetic styles.",
        "Tap the card you like — it copies instantly. Star favorites to keep a shortlist.",
        "Paste it into your bio or profile and check every glyph drew — see the boundaries note below for games.",
      ],
      about: {
        heading: "What this generator actually does — and what it doesn't",
        paragraphs: [
          "The katakana row spells your word syllable by syllable using the standard romaji-to-katakana chart: sa-ku-ra becomes サクラ, and doubled consonants pick up the small ッ (sakka → サッカ). Letters with no Japanese sound — q, x — pass through as themselves. The output is plain Unicode, so it pastes into any app that renders Japanese text.",
          "Where it does not work: games with character whitelists often refuse katakana in names, and nothing here translates — ａｅｓｔｈｅｔｉｃ in katakana still just spells aesthetic. Use it for bios, display names and decorative captions; keep anything a Japanese speaker must actually read in real Japanese.",
        ],
      },
      faq: [
        {
          q: "Is this real Japanese?",
          a: "It is real katakana characters spelling your word phonetically — サクラ really reads sakura. What it is not: a translation. Your English sentence stays an English sentence, just written in Japanese sound-units.",
        },
        {
          q: "Can a Japanese speaker read my katakana name?",
          a: "Usually yes — they would pronounce it as your word. That also means it is not private or secret code; it is styling. Avoid spelling anything you would not say out loud.",
        },
        {
          q: "Why do games refuse my katakana nickname?",
          a: "Anti-impersonation whitelists only allow characters the game's font pack knows — many refuse kana entirely, with an invalid characters error. It is a save-block, not a ban: test in the actual field before committing.",
        },
        {
          q: "What does this have to do with vaporwave text?",
          a: "The ｗｉｄｅ fullwidth row is the vaporwave look — letters pulled from the same halfwidth/fullwidth Unicode block as halfwidth katakana, which is why aesthetic Japanese and ｗｉｄｅ text travel together. Both rows are on this page.",
        },
        {
          q: "Can I use katakana in my Instagram @handle?",
          a: "No — @handles allow plain letters, digits, periods and underscores only. Katakana works in your display name and bio; keep the handle plain so people can find and mention you.",
        },
        {
          q: "Will サクラ show up on phones?",
          a: "Yes — Japanese fonts ship on virtually every phone and computer, so katakana is among the safest styled text you can paste. Halfwidth decorations and rare small kana are the only spots older devices may miss.",
        },
      ],
    },
  },
  "korean-font-generator": {
    en: {
      navName: "Korean",
      h1: "Korean Font Generator",
      title: "Korean Font Generator — Hangul-Style Text Copy & Paste",
      description:
        "Turn text into look-alike Korean letters — sarang becomes ㅅㅏㄹㅏㄴㄱ — for bios, nicknames and profiles. One-tap copy; honest note inside: decoration, not Korean.",
      intro: [
        "Type a word and each letter swaps for a similar-looking Hangul letter — sarang comes out ㅅㅏㄹㅏㄴㄱ, close enough to the real word 사랑 to fool the eye at a glance. Tap any card to copy.",
        "The honest note, up front: these are Hangul letters chosen for shape, not sound — ㅅㅏㄹㅏㄴㄱ is not a Korean word and a Korean speaker cannot read it as one. It is decoration that borrows the alphabet's look, nothing more.",
      ],
      steps: [
        "Type the word you want to Korean-ify in the box.",
        "Compare the jamo row with small caps, circled and the other aesthetic styles.",
        "Tap your favorite — it copies instantly. Star a few to compare later.",
        "Paste where it's going and check it drew — the boundaries note below covers games and handles.",
      ],
      about: {
        heading: "How the look-alike mapping works — and where it trips",
        paragraphs: [
          "Every letter maps to the Hangul Compatibility Jamo block by shape: B takes ㅂ because the curves match, M takes ㅁ because of the box, R takes ㄹ for the zigzag. A few letters share a look-alike — L and N both take ㄴ — because the Korean alphabet simply has fewer corner shapes than Latin. Spaces, digits and punctuation pass through untouched.",
          "The result pastes anywhere Korean text renders, but two things trip: character whitelists in games often refuse jamo outright, and the spelling is shape-based, so it will not read as Korean words. Use it for bios, display names and aesthetic captions — not for anything a Korean speaker needs to read.",
        ],
      },
      faq: [
        {
          q: "Is this real Korean?",
          a: "No — and the page says so plainly. The letters are genuine Hangul jamo, but they are picked for shape, not sound, so the output is a look-alike pattern, not Korean words. For real Korean, use a translator or type Korean directly.",
        },
        {
          q: "Can Korean speakers read my ㅅㅏㄹㅏㄴㄱ name?",
          a: "Not as a word — ㅅㅏㄹㅏㄴㄱ is jamo spelled out letter by letter, while real Korean composes them into syllable blocks (사랑). They will recognize the style instantly and read nothing beyond the shapes.",
        },
        {
          q: "Why do games refuse my Korean-style name?",
          a: "Many games whitelist exactly which characters a name may contain, and jamo letters usually are not on the list — you get an invalid characters error at save. It is a save-block, not a ban: test before you commit.",
        },
        {
          q: "Can I use these letters in my @handle?",
          a: "No — handles on Instagram, TikTok and X allow plain Latin letters, digits, periods and underscores only. The jamo style belongs in display names and bios; keep your handle searchable.",
        },
        {
          q: "Why do L and N turn into the same letter?",
          a: "Both take ㄴ, the corner-shaped jamo — Hangul has fewer distinct shapes than the Latin alphabet, so two letters sometimes share one look-alike. The mapping on this page favors the closest shape over uniqueness.",
        },
        {
          q: "Does ㅅㅏㄹㅏㄴㄱ render on phones?",
          a: "Yes — Hangul ships on every modern phone and computer, and the compatibility jamo block is decades old. Like all styled text, paste a test first if the destination is anything permanent.",
        },
      ],
    },
  },
};
