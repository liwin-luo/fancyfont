// English copy for the ten migration style pages, ported from the old site
// and restructured into the shared StylePageCopy shape.

import type { StylePageCopy } from "../style-pages";

export const stylePagesMigrationEn: Record<string, { en: StylePageCopy }> = {
  "cool-font-generator": {
    en: {
      navName: "Cool",
      h1: "Cool Font Generator",
      title: "Cool Font Generator — Lightning, Stars & Bold Names",
      description:
        "Cool font generator for fancy copy-and-paste names: bold letters with lightning ⚡, star wings ★彡 or 『』 brackets. Free — type, compare, copy.",
      intro: [
        "Type a name and the cool versions build as you type: heavy bold letters, a quieter small-caps line, and decorated rows that add lightning ⚡, the star-wing ★彡 or 『』 brackets. Tap a card to copy — no font files, no sign-up, and everything runs in your browser.",
        "The heavy line is Unicode Mathematical Bold, so the weight is baked into the characters themselves and survives any paste. People arrive here searching for stylish text or a clan tag — it is the same look: bold letters dressed with a symbol pair, not a separate alphabet.",
      ],
      steps: [
        "Type your name or tag — a single word reads heavier than a long one.",
        "Compare the bare bold line with the lightning, star-wing and bracket rows; small caps is the quiet fallback.",
        "Copy the winner and paste it into a Discord display name, a bio or a game tag.",
        "Check the app's own preview: ASCII-only game fields strip bold Unicode, and the symbols are the first thing older phones drop.",
      ],
      about: {
        heading: "What makes a name read cool",
        paragraphs: [
          "Bold converts letters and digits; small caps covers most letters and leaves a few unchanged where Unicode has no small-cap form. The lightning, stars and brackets are extra characters wrapped around the bold row, and they count toward whatever length limit your target field enforces.",
          "This page builds one decorated name — the loudest look in the generator. If a symbol disappears in an app's preview, the bare bold row always copies cleanly, which is why every cool name should have a plain version on hand.",
        ],
      },
      faq: [
        {
          q: "Are cool letters the same as cool fonts?",
          a: "Yes — cool letters, cool fonts and cool text all describe the same thing: bold or small-caps Unicode letters dressed with stars, wings or brackets. Type above, pick a look and copy it.",
        },
        {
          q: "What does stylish text mean here?",
          a: "The same decorated bold names. Stylish, on this page, is the lightning, star-wing and bracket rows — not a separate alphabet.",
        },
        {
          q: "Will a clan tag fit a game username?",
          a: "Often the symbol is the part that gets rejected. If the wings or lightning disappear in the game's preview, use the plain bold row — it passes wherever the game takes normal letters.",
        },
        {
          q: "How long can a cool name be?",
          a: "Watch the field: Discord nicknames run about 32 characters and Instagram display names about 30, and every decoration counts as one. A short word plus a single symbol pair fits with room to spare.",
        },
        {
          q: "Is bold Unicode safe for screen readers?",
          a: "Some screen readers announce the mathematical letters letter-by-letter or spell them oddly. Fine for a name or a single word; keep sentences in plain text.",
        },
        {
          q: "Does cool text work on Instagram and TikTok?",
          a: "Yes — bios, captions and display names take the bold letters on modern phones. Handles stay plain: Instagram usernames only allow letters, digits, periods and underscores.",
        },
      ],
    },
  },

  "elegant-font-generator": {
    en: {
      navName: "Elegant",
      h1: "Elegant Font Generator",
      title: "Elegant Font Generator — Script Names & Fleur-de-lis",
      description:
        "Elegant fancy-text generator for copy-and-paste names: script with a fleur-de-lis ⚜ or floral heart ❦. For bios, captions and formal display names — free.",
      intro: [
        "Type a name and the elegant versions build as you go: heavy bold script, a thinner bare script beside it, and decorated rows that add a fleur-de-lis ⚜ or a floral heart ❦. Royal and princess names are this same look — flowing letters and one formal symbol.",
        "The letters are Unicode Bold Script, and each fleur or heart is a separate symbol wrapped around that row only, one pair per result. It is text you paste, not a calligraphy font file and not round bubble type — which is exactly why it works in bios and display names.",
      ],
      steps: [
        "Type the name or short caption you want to dress up — a word or two is the sweet spot.",
        "Compare heavy bold script with the thinner script row, then try the fleur-de-lis and floral-heart pairs.",
        "Copy the row that fits and paste it into a display name, bio or caption.",
        "If the heavy script shows boxes on an older phone, copy the thinner script row — same style, wider device support.",
      ],
      about: {
        heading: "Dressed-up script, honestly explained",
        paragraphs: [
          "Both script styles convert letters only — digits, accented letters and emoji stay as typed, because Unicode ships no script forms for them. Each fleur-de-lis or floral heart is an extra character on its side of the name, and decorations count toward the field's length limit.",
          "The look suits wedding and beauty display names, a royal or princess name in a bio, and short captions that should feel dressed up. For full sentences the bare script row reads cleaner — save the symbols for names.",
        ],
      },
      faq: [
        {
          q: "Is elegant the same as cursive?",
          a: "Cursive is the bare script alphabet. Elegant leads with the heavier script and adds one formal symbol: a fleur-de-lis or a floral heart.",
        },
        {
          q: "Where are royal and princess fonts?",
          a: "On this page. A princess or royal name here is script plus a fleur-de-lis or a floral heart — not a separate download.",
        },
        {
          q: "Is this a calligraphy font file?",
          a: "No. You copy characters. Calligraphy font files are something you install, and this site does not offer those.",
        },
        {
          q: "Is this what people mean by a luxury font?",
          a: "Often, yes. Luxury font searches usually want the same formal look — flowing script with ornate marks and tidy spacing. Like everything here it is Unicode text, so it pastes into bios and profiles.",
        },
        {
          q: "Can this go in my Instagram username?",
          a: "No. Usernames only allow letters, digits, periods and underscores. Paste the script name into your display name or bio — that is where styled characters are accepted.",
        },
        {
          q: "How long can an elegant name be?",
          a: "Instagram display names run about 30 characters and Discord nicknames about 32, and each fleur or heart adds one per side. A short name plus a single symbol pair is the comfortable size.",
        },
      ],
    },
  },

  "dark-font-generator": {
    en: {
      navName: "Dark",
      h1: "Dark Font Generator",
      title: "Dark Font Generator — Blackletter, Skulls & Blades",
      description:
        "Dark fancy-text generator for copy-and-paste names: blackletter with a skull ☠ or crossed blades ⚔. For dark bios and emo names — not a font download.",
      intro: [
        "Type a word and the dark rows build it in blackletter with one dark symbol each — a skull ☠ or a pair of crossed blades ⚔. Emo lettering is exactly this mix: fraktur letters plus a mark. The bare alphabet with no skulls lives on the gothic page.",
        "The letters are Unicode Fraktur; the heavy bold cut carries the decorations and stays readable at small sizes. Digits stay as you typed them — Unicode ships no fraktur numbers — and the skull is a symbol that can draw slightly differently on each phone.",
      ],
      steps: [
        "Type your one-word name or motto — Night, Raven, whatever should read moody.",
        "Compare the skull and blade rows with the bare bold fraktur underneath; there are strike, slash and underline variants too.",
        "Copy a row and paste it into a Discord name, bio or Halloween post.",
        "If the skull shows as an empty box on a phone, copy the blade row or the bare fraktur row instead.",
      ],
      about: {
        heading: "The decorated dark look",
        paragraphs: [
          "Both fraktur styles convert A–Z and a–z only — digits, accented letters and other scripts pass through untouched. The skull and blades are separate symbols on the decorated rows, and like the letters they count toward name-length limits.",
          "Where it fits: dark bios and Discord names, emo or moody one-word names, and Halloween lines that still need to copy as plain text. Games that require plain ASCII reject fraktur outright, so check the game's own preview before renaming anything important.",
        ],
      },
      faq: [
        {
          q: "Is emo text different from gothic?",
          a: "Gothic, on this site, is the bare blackletter alphabet. Emo is that alphabet plus a skull or a blade — which is this page.",
        },
        {
          q: "Can I download a dark font?",
          a: "No. You copy characters. A font file would have to be installed, and nothing here is installed — which is why the style survives pasting at all.",
        },
        {
          q: "Why do some letters look different from the rest?",
          a: "Fraktur keeps historical forms for C, H, I, R and Z, and Unicode has no fraktur digits, so numbers stay plain. That shape is the alphabet, not a glitch.",
        },
        {
          q: "Does dark text work in Instagram bios?",
          a: "Yes — fraktur letters paste into Instagram bios and display names on modern phones. The username stays plain, and a few older Android devices may miss some glyphs.",
        },
        {
          q: "Will games accept blackletter names?",
          a: "Many reject it. Games with ASCII-only name fields strip fraktur entirely, so test in the game's own name-change preview before you commit to a dark tag.",
        },
        {
          q: "Is dark text okay for screen readers?",
          a: "Like other mathematical alphabets, fraktur can be announced letter-by-letter or skipped. Keep it to names and short lines — never for information someone needs to read.",
        },
      ],
    },
  },

  "heart-font-generator": {
    en: {
      navName: "Heart",
      h1: "Heart Font Generator",
      title: "Heart Font Generator — Copy Paste Names with Hearts",
      description:
        "Heart fancy-text generator for copy-and-paste names: script letters with a heart ♡ on each side, or a flower ✿ row. Free in the browser, nothing to install.",
      intro: [
        "Script letters, then a heart ♡ on each side — the softest way to dress up a name. Type Love, Mia or Honey and every row rebuilds as you type; tap to copy the one that fits.",
        "The heart rows wrap Unicode Bold Script, the heavier alphabet with real forms of e, g and o, so short names keep their lettershapes. A flower ✿ row is there when a heart feels too sweet, and the bubble and small-caps rows stay bare so the name itself stays readable.",
      ],
      steps: [
        "Type the name or short caption — a single word keeps the heart pair the focus.",
        "Compare the heart ♡ and flower ✿ rows with the bare script and bubble rows underneath.",
        "Copy a row and paste it into an Instagram display name, TikTok bio or Discord nickname.",
        "If a decoration shows as an empty box on your phone, copy the bare script row — same letters, nothing to break.",
      ],
      about: {
        heading: "One heart per side, then stop",
        paragraphs: [
          "Script and bold script convert A–Z and a–z; bubble converts letters and digits too, while small caps leaves a few letters unchanged. Digits, accented letters and emoji pass through untouched. Hearts and flowers are extra characters and count toward name-length limits.",
          "One heart on bubble letters stays on the cute page, and one clean heart on small caps stays on the preppy page — this page keeps the flowing-script version. Best fit: Instagram and TikTok display names, bios, and Discord nicknames where one heart on each side is enough.",
        ],
      },
      faq: [
        {
          q: "Is a heart font a file I download?",
          a: "No. The result is Unicode characters, which is why it pastes into apps that only accept plain text. This site does not offer font files, and it does not draw the letters into a picture.",
        },
        {
          q: "How is this different from the cute and preppy pages?",
          a: "Cute leads with bubble letters and one decoration; preppy is small caps with a clean heart. This page is flowing script with a heart ♡ or flower ✿ on each side.",
        },
        {
          q: "Can I use a heart name as my Instagram username?",
          a: "No. Instagram usernames only allow letters, digits, periods and underscores. Paste the heart name into your display name or bio.",
        },
        {
          q: "How many characters does a heart name use?",
          a: "Each heart adds one per side, on top of the letters. Instagram display names run about 30 characters and Discord nicknames about 32, so a short word plus one pair fits comfortably.",
        },
        {
          q: "Do heart names work on TikTok?",
          a: "Yes — TikTok bios and display-style names accept the script letters and the hearts. Handles stay plain, and what the app finally accepts is up to the app, so paste a test before saving.",
        },
        {
          q: "Can screen readers read heart text?",
          a: "Often not as the word you typed — styled Unicode may be spelled letter-by-letter or skipped. Keep a plain-text backup of the name and never put essential information in styled characters.",
        },
      ],
    },
  },

  "coquette-font-generator": {
    en: {
      navName: "Coquette",
      h1: "Coquette Font Generator",
      title: "Coquette Font Generator — Copy Paste Ribbon Letters",
      description:
        "Free coquette fancy-text letters with a ୨୧ ribbon bow. Copy and paste script text for Instagram names and Discord nicknames — not a font file to install.",
      intro: [
        "Script letters, then one bow. Type a name — Mia, Lila, Belle — and the rows rebuild in your browser: the ୨୧ ribbon-bow pair on heavy script, with hearts ♡, flowers ✿ and soft brackets ꒰꒱ as alternatives. Cute text on this site is round bubble letters; this page stays the ribbon look.",
        "The bow wraps Unicode Bold Script — the heavier alphabet with real forms of e, g and o — so names like Belle keep their lettershapes. The thinner script sits underneath with no bow, and on that row e, g and o are stand-ins. The bows are separate symbols added around the bold row only.",
      ],
      steps: [
        "Type the name you want — one word keeps the bow the focus.",
        "Use the bold script rows so e, g and o keep their proper shapes.",
        "Copy a row and paste it into an Instagram display name, a TikTok name, a caption or a Discord nickname — never the username.",
        "If a bow shows as an empty box on your phone, copy the heart or flower row instead, and keep the plain-text backup.",
      ],
      about: {
        heading: "Ribbon letters and where they go",
        paragraphs: [
          "Script converts A–Z and a–z; digits stay as typed. Every bow, heart and flower is an extra character that counts toward name limits — Instagram display names run about 30 characters and Discord nicknames about 32, so a one-word name with a single pair fits with room to spare.",
          "Screen readers often cannot speak styled Unicode as the word you typed, so keep a plain-text backup of the name. Everything converts in your browser and nothing is uploaded; what an app finally accepts is up to the app, so check its own preview before you save.",
        ],
      },
      faq: [
        {
          q: "Is coquette a font I download?",
          a: "No. You copy characters. A font file would have to be installed, and this site does not offer one.",
        },
        {
          q: "How is this different from the cute font page?",
          a: "Cute is bubble letters with a heart, a bow or a flower. Coquette is flowing script with the ୨୧ ribbon-bow pair. The two pages do not share a look.",
        },
        {
          q: "Can I put a coquette name in my Instagram username?",
          a: "No. The username stays plain letters, digits and a few marks. Try the styled name in the display name or the bio instead — the app decides which characters it accepts.",
        },
        {
          q: "Can I use a coquette name on TikTok?",
          a: "Yes — TikTok display-style names and bios take the script letters and the bows. The handle stays plain, and what TikTok renders is TikTok's call, so check it in the app.",
        },
        {
          q: "Does the bow work in captions?",
          a: "Yes — a short caption with one bow pair is a natural fit. If the bow becomes an empty box on a reader's phone, the heart and flower rows still copy.",
        },
        {
          q: "How do I keep the name if styled characters fail?",
          a: "Keep a plain-text backup. Screen readers may also skip or spell out styled letters, so the plain version is kinder for accessibility — and it pastes anywhere, every time.",
        },
      ],
    },
  },

  "chicano-font-generator": {
    en: {
      navName: "Chicano",
      h1: "Chicano Font Generator",
      title: "Chicano Font Generator — Blackletter & Script to Copy",
      description:
        "Chicano fancy-text generator for names and bios: blackletter with one ornament, plus a script line to copy. Free — not a font file or a tattoo stencil.",
      intro: [
        "Classic blackletter, then one ornament per decorated row — the skull ☠ and the crossed blades ⚔. Type a short name or motto and every row rebuilds as you type; bare blackletter with no ornaments lives on the gothic page.",
        "The ornament rows wrap Unicode Fraktur, the blackletter alphabet often called Old English, with bold fraktur as the heavier cut underneath. Bold script is the third row and stays bare: it stands in for the flowing half of Chicano lettering, and its letters are not joined.",
      ],
      steps: [
        "Type a short name or motto — Rosa, Luz, Vida.",
        "Compare the ornament rows with bare bold fraktur, and check the script row for the flowing half of the look.",
        "Copy a row and paste it into a bio or display name, then look at it in that app before saving.",
        "Briefing a lettering artist? Use the rows to decide which half of the style you actually want inked.",
      ],
      about: {
        heading: "An approximation, honestly labeled",
        paragraphs: [
          "Both fraktur styles convert A–Z and a–z only. Digits, accented letters such as á, é and ñ, and emoji stay as typed, because Unicode has no fraktur forms for them. Bold script converts letters only, and each ornament is an extra character that counts toward name-length limits.",
          "Traditional Chicano lettering is hand-drawn blackletter and script from Mexican-American graphic work — murals, cars, tattoos. These rows only approximate the blackletter look and are no substitute for an artist; what they are good for is trying a short name in a bio and settling which half of the style you want before commissioning anything.",
        ],
      },
      faq: [
        {
          q: "Is this a Chicano font I download?",
          a: "No. You copy Unicode characters. This site does not offer a font file, and it does not load the retail blackletter or script faces that image generators use.",
        },
        {
          q: "Is this traditional Chicano lettering?",
          a: "No. Chicano lettering is hand-drawn blackletter and script from Mexican-American graphic work — murals, cars, tattoos. These rows approximate the blackletter look plus one script alphabet; they are not a stencil.",
        },
        {
          q: "Why do ñ and accented letters stay plain?",
          a: "Unicode fraktur has no styled form for them, so they pass through unchanged while the other letters still convert — á and ñ in a name keep their real accents.",
        },
        {
          q: "Will Instagram or TikTok accept these characters?",
          a: "Display names and bios usually take fraktur on modern phones; handles do not. Games that only accept plain letters reject blackletter outright, so paste a test in the actual field first.",
        },
        {
          q: "How long can the name be?",
          a: "Instagram display names run about 30 characters and Discord nicknames about 32, and each ornament adds one per side. A short word plus a single mark fits; a rare symbol can also render as an empty box on some phones.",
        },
        {
          q: "Can I use this as a tattoo stencil?",
          a: "Please don't. These are text glyphs, not a drawing sized for skin. Explore the look here, then take the idea — and the reference photos — to a lettering artist.",
        },
      ],
    },
  },

  "preppy-font-generator": {
    en: {
      navName: "Preppy",
      h1: "Preppy Font Generator",
      title: "Preppy Fonts — Generator, Copy & Paste Clean Styles",
      description:
        "Preppy fonts are clean small-cap fancy-text styles with one tidy heart ♡. Copy and paste them into bios, TikTok names and Adopt Me display names — free.",
      intro: [
        "Preppy fonts are the clean small-cap look with one tidy heart ♡ — the style behind most preppy names in Adopt Me and TikTok bios. Type Mila, Blair or Tess and the rows build as you type, one decoration per side so the name stays the point.",
        "Small caps are Unicode modifier letters that look like shorter capitals; script and bubble are the softer second options. Sparkles ✧ work when a heart feels too sweet, and every decoration is a separate symbol added around the row you pick.",
      ],
      steps: [
        "Type the short name — one word, five letters or fewer, is the comfortable size.",
        "Pick the decoration: a heart ♡, a sparkle ✧, or nothing at all on the bare rows.",
        "Copy and paste into an Instagram bio, a TikTok name or an Adopt Me display name.",
        "Paste it on Roblox's own name screen and check the preview before you confirm the change.",
      ],
      about: {
        heading: "Why preppy stays tidy",
        paragraphs: [
          "Small caps cover most letters and leave a few unchanged where Unicode has no small-cap form; script converts letters only, so digits in that row stay plain. Hearts and sparkles are extra characters — and some heart variants are emoji, which are the first thing a game filter may reject. If one disappears, the plain text heart or sparkle row still copies.",
          "Adopt Me shows your Roblox display name — usually about 20 characters — and the username itself cannot take fonts at all. A short small-caps name with one heart fits that box more often than a stack of bows, which is why this page keeps the decorations plain.",
        ],
      },
      faq: [
        {
          q: "Is preppy the same as coquette?",
          a: "No. Coquette is flowing script with a ribbon-bow pair. Preppy is small caps with one clean heart — tidier, shorter, closer to the ground.",
        },
        {
          q: "Will this work as an Adopt Me username?",
          a: "No — the Roblox username stays letters, digits and one underscore. Try the styled name as the display name, and only after the game's own preview accepts it.",
        },
        {
          q: "Why keep the decorations so plain?",
          a: "A stack of bows eats the 20-character display name and gets filtered more often. One heart is the preppy mark, and it still leaves room for the name.",
        },
        {
          q: "What is the preppy font called?",
          a: "There is no single preppy font. What social media calls preppy is usually small caps — shorter capitals — often with one clean heart or sparkle next to it. It is all Unicode text, not an installed font, which is why it survives copy and paste.",
        },
        {
          q: "How do I get preppy fonts?",
          a: "Type your name above, pick a style row and a decoration, then copy. Paste it into your Instagram bio, TikTok display name or Adopt Me profile, and check the platform's own preview before saving.",
        },
        {
          q: "Why do a few letters stay lowercase?",
          a: "Unicode never defined small-capital forms for every letter, so those few stay as typed. Every generator has the same gaps — ones that do convert them substitute characters that may not render on all devices.",
        },
      ],
    },
  },

  "crazy-font-generator": {
    en: {
      navName: "Crazy",
      h1: "Crazy Font Generator",
      title: "Crazy Font Generator — Wild Unicode Styles to Copy",
      description:
        "Crazy font generator for bios, game names and chats: zalgo, upside-down, slashed and spaced fancy styles in one place. Copy in a tap — free, no sign-up.",
      intro: [
        "One style is never crazy enough. This page collects the loud ones in a single row of cards: zalgo corruption in three intensities, upside-down text, fraktur, slashes, strikes, spaced-out letters and negative squares — with sparkle ✧ and skull ☠ pairs on top.",
        "Every result is the same trick underneath: ordinary letters swapped for lookalike Unicode characters, which is why anything here copies and pastes like plain text. The chaos is in the characters, not a font file — so what you see is what travels.",
      ],
      steps: [
        "Type your name or handle — Cr@zy, GlitchQueen, whatever should look unhinged.",
        "Step through the cards: zalgo for corruption, upside-down for confusion, fraktur and slashes for edges.",
        "Add a sparkle or skull pair if the row needs one more push over the line.",
        "Copy and paste into a bio, display name, stream title or clan tag — then check the app's preview before saving.",
      ],
      about: {
        heading: "Chaos with a method",
        paragraphs: [
          "The wild styles convert A–Z and a–z, some also digits. Characters without a styled lookalike — accented letters, emoji, Chinese — pass through untouched, so a wild result can deliberately blend styled and plain characters. Decorations add to the length your target field counts.",
          "Best fit: game names and clan tags that should look chaotic on purpose, profiles that already tried the cool and gothic styles and want something louder, and one-off jokes, stream titles and chat handles with unhinged energy. Keep it to a word or two — this style is a costume, not a body font.",
        ],
      },
      faq: [
        {
          q: "What are crazy fonts?",
          a: "Not fonts at all — each crazy result is ordinary text where letters have been swapped for lookalike Unicode characters. That is why you can copy and paste them anywhere plain text goes.",
        },
        {
          q: "How is this different from the glitch (zalgo) page?",
          a: "The zalgo rows here stack combining marks on top of normal letters. The other styles swap the letters themselves — upside-down forms, fraktur, slashes — so this page is the whole loud toolbox in one place.",
        },
        {
          q: "Will crazy text work in my game name?",
          a: "It depends on the game. Many mobile games accept decorative Unicode; ASCII-only fields do not. Copy a variant, paste it into the actual field, and check before you save.",
        },
        {
          q: "Is crazy text readable or screen-reader friendly?",
          a: "Barely, by design. Screen readers may spell out the styled letters one by one, which is noise for listeners. Keep it to names, tags and jokes — never anything someone needs to actually read.",
        },
        {
          q: "How long can a crazy name be?",
          a: "Watch the field's limit: every styled letter counts as one character and decorations add more. Discord nicknames run about 32 characters, so a short word plus a light pair of symbols fits; longer names get cut off.",
        },
        {
          q: "Why does my text show squares on some phones?",
          a: "The device is missing fonts for those characters — negative squares and heavy zalgo are the usual offenders. If your audience is on older Androids, prefer the fraktur and spaced rows, which render almost everywhere.",
        },
      ],
    },
  },

  "italic-text-generator": {
    en: {
      navName: "Italic",
      h1: "Italic Text Generator",
      title: "Italic Text Generator — Serif & Sans Italic to Copy",
      description:
        "Italic fancy-text generator for slanted copy-and-paste letters: serif italic and clean sans italic. Paste into bios, captions and chats — instant preview.",
      intro: [
        "Elegant slanted text you can paste into bios, captions and chats — wherever the apps forgot to give you an italic button. Type a phrase and both italics render live; tap to copy.",
        "The classic style draws from Unicode's Mathematical Italic range — including the historic ℎ for h — and the sans variant from the Sans-Serif Italic range for a cleaner, more modern slant. Both convert letters only; Unicode defines no italic digits, so numbers keep their normal shape.",
      ],
      steps: [
        "Type the word or line you want slanted — a title, a mood line, a foreign phrase.",
        "Compare serif italic, which reads classic and bookish, with sans italic, which stays cleaner at small sizes.",
        "Copy the winner and paste it into a bio, caption or chat.",
        "Italicize a word or a line, not the whole bio — long stretches of slanted text are hard to read and hard to listen to.",
      ],
      about: {
        heading: "Slant without a formatting button",
        paragraphs: [
          "Both italic styles convert letters only — digits, punctuation, emoji and other scripts stay exactly as typed. Bold italic adds weight to the slant, and the italic-with-underline combos draw a line under it. Best fit: bookish captions and reading bios, highlighted titles and foreign phrases, and a softer accent inside otherwise plain bios.",
          "Italic Unicode is safe in bios, display names and messages on all major platforms. In apps that do have formatting — Discord messages, for example — prefer the app's own italic: it renders more consistently and stays screen-reader friendly.",
        ],
      },
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
          a: "You can, but we would not recommend it: long stretches of mathematical characters are read awkwardly by assistive tech and look busy. Italicize a word or a line instead.",
        },
        {
          q: "Does italic text work on Instagram and TikTok?",
          a: "Yes — bios, captions and display names on both accept the italic letters. Handles and hashtags stay plain: a styled hashtag is not indexed or clickable.",
        },
        {
          q: "Is italic text okay for screen readers?",
          a: "Some screen readers announce the mathematical letters letter-by-letter or spell them oddly. One or two words is fine; a whole paragraph of italic Unicode is genuinely hard to listen to.",
        },
        {
          q: "Why does the letter h look different?",
          a: "The classic style uses the historic ℎ — the symbol for Planck's constant — for h, and it sits a little apart from the rest of the alphabet. That is authentic to the Unicode range, not a glitch.",
        },
      ],
    },
  },

  "tiny-text-generator": {
    en: {
      navName: "Tiny",
      h1: "Tiny Text Generator",
      title: "Tiny Text Generator — Superscript & Subscript to Copy",
      description:
        "Tiny fancy-text generator with superscript and subscript letters. Shrink words to whisper size for bios and side comments — two tiny styles, one tap to copy.",
      intro: [
        "Shrink your words to whisper size. Superscript floats your text above the line; subscript sinks it below. Both copy as plain text, straight into bios, footnotes and side comments.",
        "Tiny text uses Unicode superscript and subscript modifier letters — the same characters footnote markers and chemical formulas are built from. It is the most partial style on the site: most lowercase letters convert, but some have no tiny form at all, and the honest ones stay normal size.",
      ],
      steps: [
        "Type the word or aside you want tiny — whisper, H2O, note:.",
        "Pick superscript for a lifted look or subscript for a sunken one; tiny digits are fully covered.",
        "Copy and paste into a bio, a footnote-style aside or a quiet side comment.",
        "If the gaps where letters stay normal bother you, small caps give a similar quiet feel with full coverage.",
      ],
      about: {
        heading: "Whisper size, honest gaps",
        paragraphs: [
          "Anything without a tiny form — most capitals, q in superscript, and b, c, d, f, g, q, w, y and z in subscript — stays normal size, which is why mixed results are normal here. The generator does not fake missing letters with lookalikes that may not render. Digits are the exception: superscript and subscript digits are fully covered, from ⁰ to ⁹ and ₀ to ₉.",
          "Best fit: footnote-style asides in bios — she/her, tiny credits — chemistry and math inverts in study accounts, and quiet side comments next to louder text. It is best for a word or two, not sentences, and never for information someone must be able to read.",
        ],
      },
      faq: [
        {
          q: "Why are some letters big and some tiny?",
          a: "Unicode has no superscript or subscript form for every letter. The missing ones stay normal size — a known trade-off of the style, not a bug in the generator.",
        },
        {
          q: "Can I write tiny numbers?",
          a: "Yes — superscript and subscript digits are fully covered, from ⁰ to ⁹ and ₀ to ₉. That is why H₂O works perfectly.",
        },
        {
          q: "Is tiny text readable?",
          a: "At bio sizes, mostly. It is best for a word or two, not sentences — and never for information that must be accessible.",
        },
        {
          q: "Can I use tiny text in my Instagram bio?",
          a: "Yes — superscript and subscript letters paste into Instagram bios and display names. They count as normal characters toward the limit, so keep the tiny part to a word or two.",
        },
        {
          q: "Is tiny text accessible?",
          a: "Not really. Screen readers may skip the modifier letters or read them out of order, and the size strains readers at bio scale. Use it for flavor, never for substance.",
        },
        {
          q: "Why does tiny text look uneven on some phones?",
          a: "Fonts draw the modifier letters at slightly different sizes, and where letters are missing the full-size originals create gaps. Small caps are the steadier option if the mix bothers you.",
        },
      ],
    },
  },
};
