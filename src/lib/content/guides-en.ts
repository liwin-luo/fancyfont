// English guides: 6 condensed guides for the international audience.
// Platform limits use "about" wording; the platform's own counter rules.

import type { GuideDef } from "../guides";

export const guidesEn: GuideDef[] = [
  {
    locale: "en",
    slug: "what-are-unicode-fonts",
    navName: "What are Unicode fonts?",
    h1: "What Are Unicode Fonts? The Principle in Plain Words",
    title: "What Are Unicode Fonts? How Fancy Text Actually Works",
    description:
      "Fancy fonts aren't font files — they're styled Unicode characters. The principle behind them, where they work, where they fail, and what makes them differ.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Every “fancy font” you've seen — 𝓱𝓮𝓵𝓵𝓸, ꧁ace꧂ — is not a font at all. Those are ordinary characters from the Unicode table, exactly like the letters in this sentence: text, not formatting.",
      "Once you internalize that one fact, most mysteries solve themselves: why the style survives pasting, why some devices show boxes, why search can't find styled names, and why @handles refuse them.",
    ],
    sections: [
      {
        heading: "A second alphabet inside the character table",
        paragraphs: [
          "Unicode is the global catalog that gives every character in every writing system a number. Around 2001 it added a full set of styled Latin letters for mathematical typesetting — bold, italic, script, outline and gothic each got A–Z and a–z, followed later by bubble, circled and squared decorations.",
          "Those letters were meant for formulas, but because they look like a different typeface, they were borrowed for personal text. [A generator](/cursive-fonts/) does exactly one thing: swap each ordinary letter for the styled character at the same position. The text is identical; only the glyphs change.",
        ],
      },
      {
        heading: "Why the style survives every paste",
        paragraphs: [
          "Bold in a word processor is a formatting flag — it disappears when the destination doesn't support it. A styled letter simply IS bold: boldness is a property of the character, not the environment. Every place that accepts the text accepts the style.",
          "It also explains counting: one styled letter is still one character (except strike/zalgo, where invisible combining marks are counted too).",
        ],
      },
      {
        heading: "Where the boundaries are",
        bullets: [
          "Limited coverage: styled glyphs exist only for Latin letters and digits. Other scripts have no second form — Chinese nicknames use decorative frames instead.",
          "Search mismatch: styled characters aren't plain letters; verbatim search, @mentions and hashtags may fail.",
          "Display depends on fonts: a device without the glyph shows a box — see the boxes guide.",
          "Accessibility cost: screen readers may spell out the full character names. Never use for essential information.",
        ],
      },
    ],
    faq: [
      {
        q: "Does the reader need to install anything?",
        a: "No installation — but their font library must contain the glyphs. Mainstream systems cover the popular styles; exotic symbols are where boxes come from.",
      },
      {
        q: "Will other scripts ever get styled forms?",
        a: "Unicode could add them, but for huge scripts the work never materialized. Frames and decorations are the practical route — which is exactly what the nickname decorator does.",
      },
    ],
    relatedTools: [
      { href: "/cursive-fonts/", title: "Cursive generator", description: "Try character substitution yourself." },
      { href: "/fancy-numbers/", title: "Nickname decorator", description: "Frames that work on any text." },
      { href: "/italic-text-generator/", title: "Italic", description: "Open it and try it as you read." },
    ],
    appearOn: ["cursive-fonts", "bold-fonts", "fancy-numbers", "upside-down-text", "italic-text-generator", "cool-font-generator", "chicano-font-generator"],
  },
  {
    locale: "en",
    slug: "why-boxes-appear",
    navName: "Why boxes appear",
    h1: "Why Fancy Text Shows Boxes (□) on Some Devices",
    title: "Why Fancy Text Shows Boxes (□) — and How to Fix It",
    description:
      "Boxes mean the receiving device lacks the glyph — not a broken copy. The mechanism, the high-risk styles, the safe ones, and what to do when it happens.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "It looks fine on your screen, then arrives as a row of boxes □ on an older phone — the classic fancy-text failure. Boxes aren't corruption and nothing was lost in copying: the other device simply has no drawing for that character.",
      "This guide covers the mechanism, which styles are risky, which are near-bulletproof, and the recovery order.",
    ],
    sections: [
      {
        heading: "Missing glyph, not missing data",
        paragraphs: [
          "To display a character, the device's font library needs a drawing for it. Unicode catalogs tens of thousands of characters and no device ships drawings for all of them. The character arrived intact — the device just can't paint it, so it draws a placeholder box saying “there's a character here I can't draw”.",
          "That's why boxes are always a receiver-side issue: you see it fine, they see boxes — your fonts cover it, theirs don't.",
        ],
      },
      {
        heading: "High-risk vs low-risk styles",
        bullets: [
          "Exotic-script decorations: ꧁ ꧇ ᨳ from Javanese and Lontara — great gamer energy, high box rate on old devices.",
          "Emoji-presentation characters: 🅱 ⚜ get forced into color emoji on some platforms, not what you designed.",
          "Dense combining marks: zalgo stacks dozens of marks; old renderers choke.",
          "Low-risk picks: fullwidth letters (a CJK staple), circled digits ①, and basic symbols ♡ ★ ✿ — near-universal coverage.",
        ],
      },
      {
        heading: "The recovery order",
        paragraphs: [
          "First [swap the style](/bold-fonts/) — every intent has a safer twin (꧁꧂ → 『』, 🅱 → 𝗕). Then swap the symbol — exotic decorations → basic ♡ ★. Finally accept the limit — on a ten-year-old device anything fancy can fail, so keep important messages plain.",
          "The cheapest insurance: view your own post on a second device before you commit.",
        ],
      },
    ],
    faq: [
      {
        q: "Can the other person copy the boxed text correctly?",
        a: "Yes — the box is only a display placeholder; the data is intact. Forwarded to a device with better fonts, it shows perfectly.",
      },
      {
        q: "Is there a style that displays everywhere?",
        a: "Fullwidth letters, circled digits and basic symbols come close — but nothing is 100%. Choose with “works on almost everything” expectations.",
      },
    ],
    relatedTools: [
      { href: "/zalgo-text/", title: "Zalgo cleaner", description: "Strip stacked marks from broken text." },
      { href: "/zalgo-text/", title: "Nickname decorator", description: "Risk labels on every decoration." },
      { href: "/crazy-font-generator/", title: "Crazy", description: "Open it and try it as you read." },
    ],
    appearOn: ["zalgo-text", "cute-fonts", "decorated-nicknames", "crazy-font-generator"],
  },
  {
    locale: "en",
    slug: "name-length-limits",
    navName: "Name length limits",
    h1: "Name Character Limits, Platform by Platform",
    title: "Name Length Limits by Platform — IG, TikTok, Discord & More",
    description:
      "Nickname and bio character limits for Instagram, TikTok, Discord, WhatsApp, Roblox and shooters — how fancy characters count, and what to do at the limit.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Fancy characters don't add visible length (one letter swaps for one character), but decoration frames do — 1–2 symbols per side. Tight platforms need decoration plans that fit the cap.",
      "The table below collects common values. Rules shift over time, numbers are “about”, and the input box's live counter is always the final judge.",
    ],
    sections: [
      {
        heading: "The quick reference",
        table: {
          head: ["Platform", "Name limit (about)", "Decoration advice"],
          rows: [
            ["Instagram", "Name 30 / Bio 150", "Name for the style, Bio for a plain-text lookup line"],
            ["TikTok", "About 24 (Bio ~80)", "Single-symbol frames ✧ ⋆ keep room for text"],
            ["Discord", "About 32 (display name)", "Room for double frames ꧁༺༻꧂"],
            ["WhatsApp", "About 25 (About ~139)", "Thin frames ━ ✧ fit the tight field"],
            ["Roblox", "3–20 display name", "Validation is strict — plain glyphs pass most often"],
            ["Shooters (PUBG & co.)", "About 5–16", "Two-letter IDs + ꧁꧂ fit perfectly; count first"],
            ["Steam", "About 32", "Generous; long frames fit"],
            ["Telegram", "About 64", "The most generous — anything fits"],
          ],
        },
      },
      {
        heading: "Two counting traps",
        bullets: [
          "Combining marks count: strike/zalgo add 1–4 invisible symbols per visible character — counters double and strict fields overflow.",
          "Fullwidth counting varies: most platforms count one per letter, some count display width as two — watch the counter after pasting.",
        ],
      },
      {
        heading: "When you're over the limit",
        paragraphs: [
          "Shorten the text, not the decoration — the frame is the style's core. ꧁starlight꧂ that doesn't fit becomes ꧁star꧂, which beats dropping to plain text.",
          "Keeping one name across platforms? [Design for the strictest game you play](/game-name-generator/) and the rest follow.",
        ],
      },
    ],
    faq: [
      {
        q: "Where are the official numbers?",
        a: "Each platform's help center documents them. This table is community-maintained “about” values — the input box counter never lies.",
      },
      {
        q: "Why does my count differ from a friend's?",
        a: "Combining-mark counting differs: some platforms count each mark, some merge to grapheme clusters. Trust the counter where you paste.",
      },
    ],
    relatedTools: [
      { href: "/fancy-numbers/", title: "Nickname decorator", description: "Pick frames to fit the budget." },
      { href: "/fancy-numbers/", title: "Fancy numbers", description: "Short numbered decorations." },
      { href: "/blank-space/", title: "blank-space", description: "Open it and try it as you read." },
    ],
    appearOn: ["instagram-fonts", "tiktok-fonts", "game-name-generator", "discord-fonts", "fortnite-name-generator", "facebook-fonts", "blank-space", "fancy-numbers", "fancy-numbers"],
  },
  {
    locale: "en",
    slug: "screen-reader-safety",
    navName: "Screen reader safety",
    h1: "Fancy Text and Screen Readers: the Accessibility Cost",
    title: "Fancy Text and Screen Readers — the Accessibility Cost",
    description:
      "Screen readers may announce 𝗕𝗼𝗹𝗱 as “mathematical bold capital B…” — cool for you, noise for blind users. The real costs and the boundaries.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Fancy characters carry a hidden cost for blind users: screen readers don't recognize decorated letters and many announce the full table name — 𝗕𝗼𝗹𝗱 becomes “mathematical sans bold B, mathematical sans bold o”, completely unintelligible.",
      "This isn't a ban on fancy text — it's a boundary map: where to use it freely, where to hold back, and where never to.",
    ],
    sections: [
      {
        heading: "How screen readers read styled letters",
        paragraphs: [
          "Screen readers turn characters into speech using name tables. Ordinary letters have short names (“B”); styled math letters carry formal names like “MATHEMATICAL BOLD CAPITAL B” — announced as a description string.",
          "Support varies by reader and version; newer ones try to fold the names, but coverage is patchy. The safe assumption: styled characters come out as noise.",
        ],
      },
      {
        heading: "Where to draw your own lines",
        bullets: [
          "Free to decorate: display names, bios, signatures — identity decoration, and assistive tech locates you by your ID anyway.",
          "Use sparingly in content: one or two stressed words in a post; full styled paragraphs are an readability disaster.",
          "Never in function fields: verification codes, payment details, critical notices — systems validate plain characters only.",
          "Combining marks are the worst: strike/zalgo add per-character noise; avoid where information density matters.",
        ],
      },
      {
        heading: "Better tools for emphasis",
        paragraphs: [
          "To emphasize without sacrificing readability, prefer the platform's native formatting: [Discord markdown](/discord-fonts/), WhatsApp *bold*, Reddit formatting. Those are layout-level and read correctly.",
          "Give fancy characters the identity job: make the nickname recognizable and the signature stylish — they exist to be seen, not read aloud.",
        ],
      },
    ],
    faq: [
      {
        q: "Will a fancy nickname make blind users block me?",
        a: "No. Assistive tech finds people by their handle; keep @IDs and important info plain and a decorated nickname is perfectly reasonable.",
      },
      {
        q: "Is there a screen-reader-friendly style?",
        a: "Relatively: some readers treat fullwidth letters as ordinary. Combining-mark styles are the least friendly — it's the character table's design, not a style choice.",
      },
    ],
    relatedTools: [
      { href: "/strikethrough-text/", title: "Strikethrough generator", description: "See how combining marks work." },
      { href: "/zalgo-text/", title: "Zalgo cleaner", description: "Undo over-stacked marks." },
      { href: "/tiny-text-generator/", title: "Tiny", description: "Open it and try it as you read." },
    ],
    appearOn: ["strikethrough-text", "zalgo-text", "bold-fonts", "tiny-text-generator"],
  },
  {
    locale: "en",
    slug: "account-safety",
    navName: "Ban risks",
    h1: "Can Fancy Names Get You Banned? The Real Rules",
    title: "Can Fancy Names Get You Banned? Platform Rules, Explained",
    description:
      "Fancy names are ordinary text — they don't trigger bans. Where platforms actually draw lines: whitelists, search mismatch, and impersonation.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "“Will a fancy name get me banned?” is the most-asked question. Answer: fancy characters are ordinary text with no code inside — no platform bans you for the characters themselves.",
      "Real restrictions cluster in three kinds: character whitelists (some games), lookup mismatch (search fails), and impersonation (styled text pretending to be official). Only the last one is a genuine ban risk.",
    ],
    sections: [
      {
        heading: "Three shapes of platform rules",
        bullets: [
          "Open: Discord, WhatsApp, Telegram and most bios accept fancy characters; checks look at content, not glyph style.",
          "Whitelist validation: some games allow only a known character set — “invalid characters” means a refused save, not a ban.",
          "Context-sensitive: the name itself is legal, but styling it to impersonate staff or dodge filters is treated as the violation it is.",
        ],
      },
      {
        heading: "The three things worth worrying about",
        paragraphs: [
          "Impersonation: styling “Official Support” to look like a verified account is a clear violation — the ban reason is the impersonation, not the glyphs.",
          "Evasion: writing slurs or ads in styled characters to slip past filters is punished as filter evasion.",
          "Scam contexts: styled characters in payment details or verification codes — never do this, and teach family not to trust “official notices” written in fancy text.",
        ],
      },
      {
        heading: "The safe-use checklist",
        bullets: [
          "Nicknames, bios, signatures: decorate freely — that's identity expression.",
          "Critical info (contacts, IDs, amounts): always plain characters.",
          "“Invalid characters” error: switch characters or platforms; don't hunt for bypasses.",
          "After a rename, post one test: confirm both display and search still work.",
        ],
      },
    ],
    faq: [
      {
        q: "Someone said a fancy nickname got them throttled — real?",
        a: "Throttling targets content and behavior, not glyph shapes. The timing coincidence is easy to blame on the new name; check the actual post that got limited.",
      },
      {
        q: "Do styled characters interfere with account security checks?",
        a: "No — security binds to phone/email/ID verification. Display names are display-only and never enter security flows.",
      },
    ],
    relatedTools: [
      { href: "/game-name-generator/", title: "Nickname decorator", description: "Safe decoration ideas." },
      { href: "/game-name-generator/", title: "Game name generator", description: "Whitelist-friendly styles." },
      { href: "/cod-name-generator/", title: "COD", description: "Open it and try it as you read." },
    ],
    appearOn: ["game-name-generator", "pubg-name-generator", "roblox-name-generator", "tiktok-fonts", "cod-name-generator", "adopt-me-fonts"],
  },
  {
    locale: "en",
    slug: "pick-your-style",
    navName: "Pick your style",
    h1: "Pick Your Style: From Game IDs to Work Signatures",
    title: "How to Choose a Fancy Style — Match the Look to the Place",
    description:
      "Game IDs, social nicknames, work signatures, matching names — different places call for different styles. Six scenarios with ready-made formulas.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Thirty styles and twenty-seven frames, all at once — and suddenly choosing is hard. Styles aren't better or worse, they're matched or not: game IDs want presence, work signatures want restraint, matching names come in pairs.",
      "Six high-frequency scenarios, recommended combos, ready-made formulas — choosing drops from ten minutes to one.",
    ],
    sections: [
      {
        heading: "Six scenarios, six combos",
        table: {
          head: ["Scenario", "Recommended", "Formula examples"],
          rows: [
            ["Game ID", "Gamer frame / gothic", "꧁ace꧂, ☠Knight☠"],
            ["Short-video name", "Book frame / script", "『sunset archivist』, 𝒮𝓊𝓃𝓈ℯ𝓉"],
            ["Creator communities", "Sweet frame / bubble", "୨୧peachy୨୧, ♡sugar high♡"],
            ["Work signature", "Small caps / thin line", "ᴏɴɢᴏɪɴɢ ᴘʀᴏᴊᴇᴄᴛ, ━focus mode━"],
            ["Matching names", "Paired sweet frames / script", "♡sugar♡ / ♡spice♡, 𝒮𝓊𝓃 & ℳℴℴ𝓃"],
            ["Dark/horror copy", "Zalgo / upside down", "light zalgo, ʇxǝʇ dᴉlɟ"],
          ],
        },
      },
      {
        heading: "The one-highlight rule",
        paragraphs: [
          "At most one “wow” element per name: a gamer frame is already loud — don't add zalgo to the text; [script](/cursive-fonts/) is already elegant — pick thin-line decorations, not solid blocks. Competing highlights erase each other.",
          "Same logic for symbol families: keep sweet (♡ ୨୧ ✿) with sweet, dark (☠ ⚔ ☬) with dark; cross-family mixes need a bridge symbol (★ ✧ go with everything).",
        ],
      },
      {
        heading: "A/B test with favorites",
        paragraphs: [
          "Don't commit on day one: [star 3–5 candidates](/cool-font-generator/), rotate through them for a week, and see which one people ask about — the answer surfaces on its own.",
          "Favorites live in your browser only and don't follow you across devices — keep a copy of the important ones in a notes app.",
        ],
      },
    ],
    faq: [
      {
        q: "Is there a universal style?",
        a: "Closest candidates are the book frame 『』 and small caps ᴛᴇxᴛ — restrained, durable, compatible. The price of universal is unremarkable; for big moments, match the scenario.",
      },
      {
        q: "Do styles go out of fashion?",
        a: "The character table never changes; only popular pairings do. Yesterday's ﹏wave reads as retro today. Pick what you enjoy looking at — that never dates.",
      },
    ],
    relatedTools: [
      { href: "/gothic-fonts/", title: "Nickname decorator", description: "The full frame collection." },
      { href: "/cursive-fonts/", title: "Cursive generator", description: "The classic starting point." },
      { href: "/elegant-font-generator/", title: "Elegant", description: "Open it and try it as you read." },
    ],
    appearOn: ["cursive-fonts", "bold-fonts", "gothic-fonts", "decorated-nicknames", "elegant-font-generator", "dark-font-generator", "bubble-fonts"],
  },
  {
    locale: "en",
    slug: "fancy-text-usernames",
    navName: "Fancy text in usernames",
    h1: "Fancy Fonts in Usernames: Where They Work and Where They Fail",
    title: "Fancy Fonts in Usernames — What Works on Every Platform",
    description:
      "Usernames, display names and bios follow three different rulebooks. Per-field and per-platform verdicts for IG, TikTok, Discord, WhatsApp, Roblox and shooters.",
    published: "2026-11-07",
    updated: "2026-11-08",
    intro: [
      "The fastest way to waste a name change is pasting fancy text into the wrong field. Platforms split your identity into several fields — handle, display name, bio — and each one has its own rulebook for styled Unicode characters.",
      "This guide gives the per-field verdicts, then the per-platform verdicts, then one pattern that passes everywhere. No trial-and-error required.",
    ],
    heroImage: {
      src: "/guides/usernames-panels.png",
      alt: "Three panels comparing a plain @handle, a decorated display name and a mixed bio",
      width: 1200,
      height: 675,
      caption: "Three fields, three rulebooks: the handle is for lookup, the display name is for style, the bio takes both.",
    },
    sections: [
      {
        heading: "The three name fields, decoded",
        table: {
          head: ["Field", "Fancy text?", "What it's actually for"],
          rows: [
            ["@handle / username ID", "❌ Never", "Login and lookup — systems match it as plain characters"],
            ["Display name / nickname", "✅ Yes", "What other people see — pure presentation"],
            ["Bio / signature / About", "✅ Mostly", "Presentation plus search on some platforms"],
          ],
        },
        paragraphs: [
          "The pattern behind the table: fields that machines match (login, lookup, mentions) validate strict character sets; fields that only humans read accept ordinary Unicode. Fancy characters are text, so display fields wave them through while lookup fields refuse them.",
          "The expensive mistake is decorating the handle: it doesn't just fail the save, on some platforms a decorated-looking name breaks friend search forever. Handles stay plain — always.",
        ],
      },
      {
        heading: "Per-platform verdicts",
        image: {
          src: "/guides/username-matrix.png",
          alt: "Matrix of platforms versus name fields with verdict marks",
          width: 1200,
          height: 675,
          caption: "Verdicts by platform: green means fancy text passes, red means the field is plain-only.",
        },
        bullets: [
          "Instagram: display Name ✅ (30 chars), bio ✅ (150), @username ❌ plain only.",
          "TikTok: nickname ✅ (about 24), bio ✅ (about 80), @handle ❌.",
          "Discord: display name ✅ and per-server nicknames ✅ (about 32), messages ✅, @mentions ❌.",
          "WhatsApp: profile name ✅ (about 25), About ✅ (about 139).",
          "Roblox: display name ✅ but the filter is strict — whole-glyph styles pass, combining marks usually fail. @username ❌ plain.",
          "Shooters (PUBG, Free Fire & co.): whitelist validation — common frames pass, exotic symbols get “invalid characters”. Esports accounts: plain names only.",
        ],
      },
      {
        heading: "The pattern that always works",
        paragraphs: [
          "Keep the handle plain, decorate the display name with one frame (꧁꧂ or ★彡 彡★), and put a plain-text version of your name in the bio's first line. That combination passes every platform above, stays searchable, and still reads styled at first glance.",
          "Before spending a rename card or a cooldown, [star two candidates in the generator](/game-name-generator/) and paste-test the first — if a whitelist refuses it, the backup is one paste away.",
        ],
      },
      {
        heading: "Aesthetic username formulas (handles included)",
        bullets: [
          "The twist: aesthetic usernames are NOT fancy Unicode \u2014 they are plain characters arranged well, which is exactly why they live in @handles that refuse styled text.",
          "lowercase + dots: milk.tea \u00b7 soft.rain \u00b7 luna.jpg \u00b7 petal.wav \u00b7 mint.milk",
          "lowercase + underscores: moon_base \u00b7 hazy_days \u00b7 june_bug \u00b7 late_nineties",
          "word-pair recipes: soft noun + concrete noun (cloud.curtain), time + noun (3am.notes), place.jpg (rooftop.jpg)",
          "keep it type-able: every character must exist on a keyboard \u2014 that is the whole trick",
        ],
      },
    ],
    faq: [
      {
        q: "Can I put fancy fonts in my @username anywhere?",
        a: "No. Handles are machine-matched identifiers — Instagram, TikTok, Discord, WhatsApp and Roblox all restrict them to letters, digits and a couple of punctuation marks. Styled characters belong in display fields.",
      },
      {
        q: "My styled name saved fine — why can't people find me?",
        a: "Search matches the exact characters. A decorated name no longer matches the plain spelling, so keep a plain version in your bio and share your @handle for lookups.",
      },
      {
        q: "Do fancy characters risk a ban?",
        a: "No — they're ordinary text. The real violations are impersonation and filter evasion; validation failures just refuse the save.",
      },
      {
        q: "What makes a username aesthetic?",
        a: "Lowercase everything, dots or underscores as joints, and soft concrete nouns \u2014 milk.tea, luna.jpg, hazy_days. It reads as style precisely because every character is plain and keyboard-typeable.",
      },
    ],
    relatedTools: [
      { href: "/game-name-generator/", title: "Game name generator", description: "Whitelist-friendly styles for shooters." },
      { href: "/instagram-fonts/", title: "Instagram fonts", description: "IG name/bio limits and ready examples." },
      { href: "/discord-fonts/", title: "Discord fonts", description: "Names, nicknames and message text." },
      { href: "/youtube-fonts/", title: "YouTube", description: "Open it and try it as you read." },
    ],
    appearOn: ["instagram-fonts", "tiktok-fonts", "discord-fonts", "whatsapp-fonts", "roblox-name-generator", "pubg-name-generator", "game-name-generator", "youtube-fonts"],
  },
  {
    locale: "en",
    slug: "discord-fonts-guide",
    navName: "Discord fonts deep-dive",
    h1: "Discord Fonts: What Actually Works (Names, Nicknames, Messages)",
    title: "Discord Fonts Guide — Markdown vs Unicode & Zones",
    description:
      "Discord has two styling systems — markdown and Unicode — and they do different jobs. Where fancy fonts land in names, nicknames, statuses and messages.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Discord is unusual: it ships its own formatting system (markdown) AND accepts styled Unicode characters everywhere plain text goes. Mixing them up is why so many attempts look broken.",
      "The short version: markdown formats ordinary text inside messages; Unicode characters carry their style into names, nicknames, statuses — places markdown can't reach. This guide maps both.",
    ],
    heroImage: {
      src: "/guides/discord-chat.png",
      alt: "A Discord-style chat mockup with styled display names and a markdown versus Unicode comparison",
      width: 1200,
      height: 675,
      caption: "Markdown formats the message text; the styled display names come from Unicode characters that need no Nitro.",
    },
    sections: [
      {
        heading: "Two systems, two jobs",
        table: {
          head: ["", "Discord markdown", "Unicode characters"],
          rows: [
            ["What it is", "**bold**, _italic_, `code` syntax", "Styled characters (𝗕𝗼𝗹𝗱, 𝔡𝔞𝔯𝔨)"],
            ["Where it works", "Messages only", "Display name, server nick, status, messages"],
            ["Survives copy-paste", "No — formatting stays behind", "Yes — the style is in the characters"],
            ["Needs Nitro", "No", "No"],
          ],
        },
        paragraphs: [
          "Use markdown when you're writing a message you control end-to-end. Use Unicode characters when the style must travel — [your display name](/discord-fonts/), a server-specific nickname, your status, or text that will be copied onward.",
        ],
      },
      {
        heading: "Where fancy text lands in Discord",
        image: {
          src: "/guides/discord-zones.png",
          alt: "Panel showing green check marks for display name, server nickname, status and messages, and red crosses for mentions and bot commands",
          width: 1200,
          height: 675,
          caption: "Display name, server nickname, status and messages take styled characters; mentions and bot commands need the plain handle.",
        },
        bullets: [
          "Display name (about 32 characters) — the main stage; whole-glyph styles read best.",
          "Server nickname — set per server, same character rules; useful for role-flavored names.",
          "Status — supports styled characters, but very long stacks may clip on mobile.",
          "Messages — styled characters survive, though dense combining marks can wrap oddly.",
          "@mentions and slash commands — match your plain handle; styled text won't ping anyone.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Two traps cover most of the failures. First, zalgo and strike stacks in names: they save, but they're the styles most likely to wrap badly in the member list and to be refused by auto-mod filters that treat mark-stacks as spam signals. Second, decorating your handle to look official — that's impersonation regardless of the characters used, and moderators ban for the behavior, not the glyphs.",
          "The readable sweet spot: whole-glyph styles ([bold](/bold-fonts/), script, small caps) for the name, one thin frame if you want flair, and markdown for emphasis inside messages.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need Nitro for a styled Discord name?",
        a: "No. Nitro covers server-wide emoji and other perks; styled characters are ordinary text and work on every account, server nickname included.",
      },
      {
        q: "Why did my fancy name show boxes to one friend?",
        a: "Their system fonts lack those glyphs. Popular styles (bold, small caps, ꧁꧂ frames) have near-universal coverage; exotic script mixes are the box-makers.",
      },
      {
        q: "Can I @mention someone by their styled name?",
        a: "No — mentions resolve against the plain handle. Type @ and pick the user from the list; the styled display name is display-only.",
      },
    ],
    relatedTools: [
      { href: "/discord-fonts/", title: "Discord font generator", description: "Styles with Discord limits baked in." },
      { href: "/bold-fonts/", title: "Bold text generator", description: "The safe whole-glyph workhorse." },
      { href: "/zalgo-text/", title: "Zalgo cleaner", description: "Undo mark-stacks gone wrong." },
      { href: "/symbols/", title: "Symbols", description: "Open it and try it as you read." },
    ],
    appearOn: ["discord-fonts", "symbols", "bold-fonts", "zalgo-text"],
  },
  {
    locale: "en",
    slug: "instagram-bio-fonts",
    navName: "Instagram bio fonts",
    h1: "Instagram Bio Fonts: What Works in the Name, Bio and Captions",
    title: "Instagram Bio Fonts — Name vs Bio vs Captions",
    description:
      "Three text zones with three personalities: the 30-character Name, the 150-character Bio, and captions. Where fancy fonts belong — and a bio layout that works.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Instagram treats its text zones differently, and the difference decides where fancy fonts help you and where they quietly cost you reach. The Name and Bio are display-first — styles shine there. Captions and hashtags are retrieval-first — plain characters win.",
      "This guide maps the three zones, then walks through a bio layout that keeps the pretty AND the searchable.",
    ],
    heroImage: {
      src: "/guides/ig-profile.png",
      alt: "An Instagram profile mockup with a styled display name and a formatted bio",
      width: 1200,
      height: 675,
      caption: "Styled characters in the Name and Bio; the @username underneath stays plain for lookup.",
    },
    sections: [
      {
        heading: "The three text zones",
        table: {
          head: ["Zone", "Limit", "Fancy fonts", "Watch out"],
          rows: [
            ["Name (display)", "30 characters", "✅ The best stage", "Search matches exact characters"],
            ["Bio", "150 characters", "✅ Styles + line breaks", "Combining marks can misalign in IG's font"],
            ["Captions", "2,200 characters", "⚠️ OK for a word", "Hashtags inside captions must stay plain"],
            ["@username", "30 characters", "❌ Never", "Plain characters only, always"],
          ],
        },
      },
      {
        heading: "A bio layout that works",
        image: {
          src: "/guides/ig-bio-layout.png",
          alt: "Anatomy of an Instagram bio: styled name line, decorated descriptor, small-caps interest line and location line",
          width: 1200,
          height: 675,
          caption: "Line one styles the identity, line two says what you do, line three adds character, line four anchors with plain text.",
        },
        paragraphs: [
          "The layout above balances pretty and findable: the display name carries the style (𝓈𝓊𝓃𝓈ℯ𝓉), the first bio line states what you do in decorated plain text, [small caps](/small-fonts/) add a quiet signature line, and the last line keeps location or contact in ordinary characters.",
          "The plain-text rule matters more than it looks: IG search and tag pages match ordinary characters, so one plain line in the bio keeps you discoverable while everything else stays styled.",
          "On TikTok? The fields work differently — see [TikTok bio fonts](/learn/tiktok-bio-fonts/).",
        ],
      },
      {
        heading: "Limits and the lookup trade-off",
        bullets: [
          "Name: 30 characters, and decorations count — a double frame eats 4 of them.",
          "Bio: 150 characters; use line breaks instead of symbol walls for structure.",
          "Whole-glyph styles (script, fullwidth, small caps) survive IG's rendering better than combining-mark styles like strikethrough.",
          "After saving, search your own plain name once — if it fails, add the plain spelling to the bio.",
        ],
      },
    ],
    faq: [
      {
        q: "Do Instagram bio fonts need an app?",
        a: "No. Styled characters are ordinary text — generate, copy, paste. Apps that 'add fonts' to your profile are just dressing up the same Unicode characters.",
      },
      {
        q: "Can I use fancy fonts in my captions?",
        a: "Yes for a stressed word or a sign-off. Keep hashtags plain — styled characters break tag matching — and avoid full styled paragraphs: readability and reach both suffer.",
      },
      {
        q: "Why did my bio font look different on my friend's phone?",
        a: "IG renders text with its own font stack; a few glyphs draw slightly thinner or offset. Whole-glyph styles are the stable picks — that's why the bio layout above avoids combining marks.",
      },
    ],
    relatedTools: [
      { href: "/instagram-fonts/", title: "Instagram font generator", description: "IG-ready styles with limits in view." },
      { href: "/aesthetic-fonts/", title: "Aesthetic font generator", description: "The fullwidth vaporwave look." },
      { href: "/small-fonts/", title: "Small text generator", description: "Quiet small-caps signature lines." },
      { href: "/coquette-font-generator/", title: "Coquette", description: "Open it and try it as you read." },
    ],
    appearOn: ["instagram-fonts", "aesthetic-fonts", "small-fonts", "coquette-font-generator", "preppy-font-generator", "heart-font-generator", "berry-avenue-fonts"],
  },
  {
    locale: "en",
    slug: "tiktok-bio-fonts",
    navName: "TikTok bio fonts",
    h1: "How to Change Your TikTok Bio and Name Font",
    title: "How to Change Your TikTok Bio & Name Font (No App)",
    description:
      "Fancy fonts work in your TikTok Name and Bio, but not your @username. Copy styled text, paste it in Edit profile, then check the 30 and 80 character counters.",
    published: "2026-11-10",
    updated: "2026-11-10",
    intro: [
      "TikTok doesn't have a font menu, so “changing the font” means pasting Unicode characters that look styled. Generate them in a tool like FancyFont, copy, then go to Profile → Edit profile → Name or Bio, paste and save — the Name takes up to 30 characters and can be changed once every 7 days. Your @username can't be styled: TikTok only allows letters, numbers, underscores and periods there.",
      "This guide shows where styled text works on TikTok, a bio layout that stays readable, and what to do when TikTok won't save your new name. FancyFont is a free tool and isn't affiliated with TikTok.",
    ],
    heroImage: {
      src: "/guides/tiktok-profile-fields.png",
      alt: "Diagram of a TikTok profile: styled Name, styled Bio, plain @username",
      width: 1200,
      height: 675,
      caption:
        "Illustration, not a TikTok screenshot: the Name and Bio take styled characters, the @username underneath stays plain for lookup.",
    },
    sections: [
      {
        heading: "Where fancy fonts work on TikTok",
        table: {
          head: ["Field", "Limit", "Fancy fonts", "Changes"],
          rows: [
            ["Name (nickname)", "Up to 30 characters", "✅ Yes — the best place", "Once every 7 days"],
            ["Bio", "80 characters (check your counter)", "✅ Most styles", "Any time"],
            ["@username", "2–24 characters", "❌ Letters, numbers, _ and . only", "Once every 30 days"],
            ["Captions & comments", "Not published in TikTok Help", "⚠️ A styled word is fine", "—"],
            ["Hashtags", "—", "❌ Keep plain so the tag matches", "—"],
          ],
        },
        paragraphs: [
          "The Name is what people see on the For You feed, in comments and in direct messages — it's the display layer. The @username is different: it's what your profile link is made of, so it stays plain. Other apps split the fields the same way — see [how other apps handle usernames](/learn/fancy-text-usernames/).",
          "Source: [TikTok Help: Changing your nickname](https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-nickname) and [Changing your username](https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-username).",
        ],
      },
      {
        heading: "How to change your TikTok name font, step by step",
        paragraphs: [
          "Step one happens outside TikTok: type your name in the [TikTok font generator](/tiktok-fonts/) and pick a style you like — the remaining steps are pastes and taps.",
        ],
        bullets: [
          "Tap the result to copy it.",
          "In TikTok: Profile → Edit profile → Name.",
          "Paste, watch the counter, tap Save.",
          "Check your profile from another phone or the web before you settle — you can't change it again for 7 days.",
        ],
        image: {
          src: "/guides/tiktok-fonts-tool.png",
          alt: "FancyFont TikTok font generator showing styled versions of \"Mia Daily Vlogs\"",
          width: 1200,
          height: 675,
          caption: "FancyFont's TikTok page: type once, tap a style to copy.",
        },
      },
      {
        heading: "How to change your TikTok bio font",
        paragraphs: [
          "The Bio takes most styles too, and there's no 7-day cooldown on it — if a paste doesn't land, you can fix it right away.",
        ],
        bullets: [
          "In TikTok: Profile → Edit profile → Bio.",
          "Paste the styled line you generated.",
          "Watch the counter — the Bio cap is 80 characters (your counter is the final word).",
          "Tap Save. On the web it's the same fields: tiktok.com → Profile → Edit profile.",
        ],
      },
      {
        heading: "Copy-ready examples (made with FancyFont)",
        table: {
          head: ["Style", "Example", "Notes"],
          rows: [
            ["Script", "ℳ𝒾𝒶 𝒟𝒶𝒾𝓁𝓎 𝒱𝓁ℴℊ𝓈", "Name · 25 UTF-16 units"],
            ["Bold script", "𝓜𝓲𝓪 𝓓𝓪𝓲𝓵𝔂 𝓥𝓵𝓸𝓰𝓼", "Name · 28 UTF-16 units"],
            ["Sans bold", "𝗠𝗶𝗮 𝗗𝗮𝗶𝗹𝘆 𝗩𝗹𝗼𝗴𝘀", "Name or bio keyword · 28 UTF-16 units"],
            ["Small caps", "ᴍɪᴀ ᴅᴀɪʟʏ ᴠʟᴏɢꜱ", "Name or bio · 15 UTF-16 units"],
            ["Fullwidth", "Ｍｉａ　Ｄａｉｌｙ　Ｖｌｏｇｓ", "Name (very wide) · 15 UTF-16 units"],
            ["Double-struck", "𝕄𝕚𝕒 𝔻𝕒𝕚𝕝𝕪 𝕍𝕝𝕠𝕘𝕤", "Name · 28 UTF-16 units"],
            ["Mixed", "𝓜𝓲𝓪 ✨ ᴅᴀɪʟʏ ᴠʟᴏɢꜱ", "Name · 20 UTF-16 units"],
            ["Frame ꧁꧂", "꧁𝓜𝓲𝓪꧂", "Name · 8 UTF-16 units"],
            ["Frame ★彡", "★彡𝗠𝗶𝗮彡★", "Name · 10 UTF-16 units"],
            ["Bio line (small caps)", "ᴅᴀɪʟʏ ᴠʟᴏɢꜱ & ꜱᴛᴜᴅʏ ɴᴏᴛᴇꜱ", "Bio · 25 UTF-16 units"],
            ["Bio line (italic)", "𝑐𝑜𝑓𝑓𝑒𝑒 𝑓𝑖𝑟𝑠𝑡, 𝑡ℎ𝑒𝑛 𝑐ℎ𝑎𝑜𝑠", "Bio · 42 UTF-16 units"],
            ["Bio keyword", "𝗡𝗘𝗪 𝗩𝗜𝗗𝗘𝗢 every friday", "Bio · 30 UTF-16 units"],
            ["Avoid: strike", "M̶i̶a̶ ̶V̶l̶o̶g̶s̶", "Avoid — marks double the length and screen readers stumble · 18 UTF-16 units"],
            ["Avoid: upside down", "sƃolɅ ɐᴉW", "Avoid — hard to read · 9 UTF-16 units"],
            ["@username", "mia.creates", "Plain only — the only form the field accepts"],
          ],
        },
      },
      {
        heading: "A bio layout that stays readable",
        paragraphs: [
          "Four lines cover both pretty and findable: a styled identity line, a small-caps line that says what you do, one bold keyword for energy, and a plain last line — because TikTok search and screen readers both work on ordinary characters ([how screen readers read styled text](/learn/screen-reader-safety/)).",
        ],
        table: {
          head: ["Line", "Content", "Style"],
          rows: [
            ["1 · Identity", "𝓜𝓲𝓪 𝓓𝓪𝓲𝓵𝔂 𝓥𝓵𝓸𝓰𝓼", "Bold script · 28 UTF-16 units"],
            ["2 · What you do", "ᴅᴀɪʟʏ ᴠʟᴏɢꜱ & ꜱᴛᴜᴅʏ ɴᴏᴛᴇꜱ", "Small caps · 25 UTF-16 units"],
            ["3 · Keyword", "𝗡𝗘𝗪 𝗩𝗜𝗗𝗘𝗢 every friday", "Sans bold + plain · 30 UTF-16 units"],
            ["4 · Plain anchor", "📍 NYC · mia.creates@email", "Plain text — searchable and screen-reader safe"],
          ],
        },
      },
      {
        heading: "Why the counter jumps (and why your name won't fit)",
        paragraphs: [
          "Most styled letters live on Unicode's supplementary planes, so each one takes two UTF-16 units. The bold-script 𝓜𝓲𝓪 𝓓𝓪𝓲𝓵𝔂 𝓥𝓵𝓸𝓰𝓼 in the table above is 15 characters but 28 UTF-16 units, while the small-caps ᴍɪᴀ ᴅᴀɪʟʏ ᴠʟᴏɢꜱ is 15 either way — fullwidth letters are one unit each too. TikTok hasn't published which counting its counter uses, so treat the edit screen as the truth: if the counter jumps by two per letter, switch the long part of your name to small caps and it stops growing. The same accounting shows up in the [character limits on other platforms](/learn/name-length-limits/).",
        ],
      },
      {
        heading: "TikTok won't save my name — what to check",
        bullets: [
          "Over the limit → shorten the text or switch the long part to small caps.",
          "Changed in the last 7 days → TikTok only allows a nickname change once every 7 days.",
          "Trying to style the @username → not allowed; style the Name instead.",
          "A word or symbol breaks the Community Guidelines → remove it.",
          "Looks like boxes on another phone → switch to script, bold or small caps.",
        ],
        paragraphs: [
          "The 7-day cooldown is official — see [TikTok Help: Changing your nickname](https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-nickname) — and boxes on a friend's phone mean that device lacks the glyph for the character, not that your copy broke: [why fancy text shows boxes](/learn/why-boxes-appear/).",
        ],
      },
    ],
    faq: [
      {
        q: "Can you change the font on TikTok without an app?",
        a: "Yes. TikTok has no built-in font picker for profiles; styled text is just Unicode characters. Copy them from a browser tool and paste them into Edit profile — nothing to install.",
      },
      {
        q: "Why can't I use fancy fonts in my TikTok username?",
        a: "TikTok's rules allow only letters, numbers, underscores and periods in the @username, which is also your profile link. Put the style in your Name instead.",
      },
      {
        q: "How often can I change my TikTok name?",
        a: "TikTok lets you change your nickname once every 7 days and your username once every 30 days, so check the result before you save.",
      },
      {
        q: "Why does my TikTok name show boxes on some phones?",
        a: "The phone is missing a font for that character. Script, bold and small caps show up on the most devices; see why fancy text shows boxes.",
      },
      {
        q: "Do fancy fonts hurt my TikTok reach?",
        a: "We're not aware of any TikTok rule against styled characters, but people searching for your name type plain letters. Keep a plain spelling in your bio so they can still find you.",
      },
      {
        q: "Do fancy letters count as more than one character?",
        a: "Some do. Most styled letters take two UTF-16 units, while small caps and fullwidth take one. If TikTok's counter fills up fast, switch part of your name to small caps.",
      },
    ],
    relatedTools: [
      { href: "/tiktok-fonts/", title: "TikTok font generator", description: "Styles sized for the 30-character Name." },
      { href: "/small-fonts/", title: "Small caps", description: "One UTF-16 unit per letter — saves room." },
      { href: "/cursive-fonts/", title: "Cursive / script", description: "The classic styled-name look." },
      { href: "/symbols/", title: "Symbols", description: "Frames and sparkles for your Name." },
    ],
    appearOn: ["tiktok-fonts", "small-fonts", "cursive-fonts"],
  },
  {
    locale: "en",
    slug: "free-fire-name-styles",
    navName: "Free Fire name styles",
    h1: "Free Fire Name Styles: How the ꧁꧂ Names Are Built",
    title: "Free Fire Name Styles — Frames, Fonts & Real Limits",
    description:
      "How Free Fire nicknames work: the 6–12 character field, which styled letters survive the in-game font, how ꧁꧂ frames are assembled — plus ready examples.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "The names that look uncopyable — ꧁༺ ᴅᴇᴍᴏɴ ༻꧂, ⚡ 𝐒𝐧𝐢𝐩𝐞𝐫 ⚡, ᴄʀᴇᴡ ᴍᴀɪɴ — are three tricks stacked together: a decorative frame, styled Unicode letters and a symbol accent. None of it is a mod or an app; it is plain text assembled piece by piece.",
      "Free Fire is friendlier to styled text than most shooters — the in-game font renders the popular letter styles — but the name field is short (about 6–12 characters), so every character has to earn its place. This guide shows the assembly rules and what to avoid.",
    ],
    sections: [
      {
        heading: "The field you are working with",
        bullets: [
          "Nickname length: about 6–12 characters — a full frame like ꧁༺…༻꧂ eats 8 of them before your name starts. Short frames ꧁…꧂ (4 characters) are the practical pick.",
          "Renaming costs: changing your nickname later usually costs diamonds, so assemble and test the name before you commit it.",
          "Counting: styled letters count as one character each, but combining-mark styles (strike, zalgo) add invisible marks that count too.",
          "Clan tags are a separate, shorter field — the clean small-cap styles fit there better than full frames.",
        ],
      },
      {
        heading: "The three building blocks",
        paragraphs: [
          "Block one is the frame: ꧁…꧂, ▄︻…︻▄, ⚡…⚡, ✦…✦. Frames wrap the name and do the visual work, which is why almost every memorable Free Fire name has one. Block two is the letter style — bold 𝐁𝐨𝐥𝐝, script 𝓈𝓬𝓻𝓲𝓹𝓽, small caps ᴄʟᴇᴀɴ — generated letter by letter from plain text. Block three is a symbol accent: a single ⚡, ♞ or ✧ placed where a space would be.",
          "A [name generator](/game-name-generator/) does all three in one pass: type the base name, pick a style, and the frames are pre-assembled so the result already fits the field. That is also the fastest way to test five candidates in a minute before spending diamonds on a rename.",
        ],
      },
      {
        heading: "Ready examples by look",
        bullets: [
          "Classic frames: ꧁ᴅᴇᴍᴏɴ꧂ · ꧁༺ sɴɪᴘᴇʀ ༻꧂ · ꧁ 𝐊𝐈𝐍𝐆 ꧂",
          "Clean small caps: ᴄʀᴇᴡ ᴍᴀɪɴ · ᴘʀᴏ sɴɪᴘᴇ · ʟᴏɴᴇ ᴡᴏʟғ",
          "Bold with accent: ⚡ 𝐒𝐧𝐢𝐩𝐞𝐫 ⚡ · ♞ 𝐑𝐨𝐲𝐚𝐥 ♞ · ✧ 𝐃𝐚𝐫𝐤 ✧",
          "Symbol wings: ⚡ Vortex ⚡ · ⛧ Rebel ⛧ · 乪 Shadow 乫",
          "Compact one-liners for the 6-character squeeze: ᴠᴏɪᴅ · ꧁ᴢᴇᴄ꧂ · 𝕬𝖝𝖊",
        ],
      },
      {
        heading: "What to avoid",
        bullets: [
          "Exotic symbols beyond the popular sets risk drawing as boxes on some devices — test on a teammate's screen before renaming.",
          "Zalgo stacks overflow the small field and render badly — they belong on Discord, not in the nickname box.",
          "Impersonation styling (fancy versions of pro players' names) is the fastest route to reports — keep the name yours.",
        ],
      },
    ],
    faq: [
      {
        q: "Why does my styled name show boxes for some players?",
        a: "Their device font lacks that glyph. The popular styles — bold, script, small caps and the ꧁꧂ frames — render on nearly everything; rare decorative symbols are where boxes come from.",
      },
      {
        q: "Can a stylish name get my Free Fire account banned?",
        a: "No — styled names are ordinary text characters, not a modification. What does get reported is impersonation or offensive wording; the styling itself is cosmetic.",
      },
      {
        q: "How do I change my Free Fire name after making one?",
        a: "In-game: profile → your nickname → edit. The change usually costs diamonds, which is why it pays to generate and compare several candidates first — a name generator assembles framed candidates in seconds.",
      },
    ],
    relatedTools: [
      { href: "/game-name-generator/", title: "Game name generator", description: "Frames pre-assembled for short name fields." },
      { href: "/pubg-name-generator/", title: "PUBG name generator", description: "The same ꧁꧂ builds for PUBG & BGMI." },
      { href: "/fancy-numbers/", title: "Fancy numbers", description: "Styled digits for squad numbers and IDs." },
    ],
    appearOn: ["game-name-generator", "pubg-name-generator", "fortnite-name-generator", "cod-name-generator", "discord-fonts"],
  },
  {
    locale: "en",
    slug: "lingojam-alternatives",
    navName: "LingoJam alternatives",
    h1: "LingoJam Alternatives: Fancy Text Tools Compared Honestly",
    title: "LingoJam Alternatives — Fancy Text Tools Compared",
    description:
      "LingoJam still works — but when it's down or too basic for you: honest alternatives compared, symbol libraries, IG-focused tools and live-preview generators.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "LingoJam has been the default answer to \"fancy text generator\" for a decade, and searches for it — and for alternatives to it — are still huge. This page is the honest version of that comparison: what LingoJam does well, where it falls short, and which tool fits which job, including our own.",
      "One fact up front, because it shapes everything: every tool in this category does the same core trick — swapping letters for styled Unicode characters. The differences are in the workflow (live preview vs. translate-a-copy), the extras (symbols, blank characters, favorites) and how well the site holds up.",
    ],
    sections: [
      {
        heading: "Quick answer",
        bullets: [
          "LingoJam still works and is free: a two-box translator — paste left, get a styled list right. No sign-up, familiar, fine for a one-off copy.",
          "Want to see your text rendered in many styles at once, with one-tap copy per card? That is what [our homepage generator](/) does — 180 letter & number styles plus 27 nickname frames, live as you type.",
          "Need single symbols rather than styled words — hearts, stars, arrows, kaomoji? A symbol library beats a text generator: ours is [388 symbols](/symbols/) with click-to-copy.",
          "Want an invisible name or empty bio line? That is a blank-character job, not a font job — see [blank space copy and paste](/blank-space/).",
        ],
      },
      {
        heading: "When LingoJam is the right pick",
        paragraphs: [
          "Credit where due: LingoJam is free, requires no account, and has outlived most of its contemporaries. Its translator layout is genuinely good for one job — rewriting the same sentence into several different styles at once, including translated-style output that no plain generator attempts.",
          "If you know its URL, trust it, and just need a quick copy — there is nothing wrong with using it. Tools in this category are commodities; habit and uptime are legitimate reasons to stay.",
        ],
      },
      {
        heading: "When to reach for an alternative",
        bullets: [
          "Downtime and maintenance: it is a single long-running service, and when it is slow or unreachable there is no fallback on the same site. Every search for \"LingoJam alternative\" is someone hitting exactly this.",
          "No live preview: the translator pattern means typing your text into a box and reading a flat list — you cannot watch the styles render as you type or tap-to-copy straight off a card.",
          "Depth of toolkit: one generator page, no symbol library, no blank-character tool, no glitch cleaner — multi-step decorating means multiple sites.",
          "Language: an English-only interface, while the underlying trick is language-independent — Spanish, Portuguese, Chinese and German users get a localized workflow elsewhere.",
        ],
      },
      {
        heading: "The wider landscape, honestly sorted",
        bullets: [
          "Instagram-branded generators (igfonts, instafonts and cousins): same Unicode swap, packaged for IG bio/name workflows. Convenient branding, same output characters.",
          "Symbol libraries (coolsymbol and similar): the right tool for single characters and kaomoji, not for styling whole words.",
          "Logo and image text makers (cooltext, fontmeme): a different intent entirely — they produce images, not copy-paste text. If your paste target is a bio field, they are the wrong category.",
          "Font download sites (fontspace and friends): real font files for design software. Nothing there can be pasted into a nickname field — different job again.",
        ],
      },
    ],
    faq: [
      {
        q: "Is LingoJam down?",
        a: "It has outages like any single-hosted service, but it has not shut down. If it will not load for you, try again later or use any generator that does the same character swap — the output text is identical technology.",
      },
      {
        q: "Are fancy text generators safe to use?",
        a: "The reputable ones, yes — they run the conversion in your browser and produce ordinary text. Pick tools that do not ask for login or app installs, and be skeptical of any \"generator\" that wants account access to your social profiles.",
      },
      {
        q: "Do all these tools give the same result?",
        a: "For the popular styles — bold, script, bubble, small caps — yes: they map to the same Unicode characters, so output is interchangeable. Toolkits differ in how many exotic styles they include and in what surrounds the generator (symbols, cleaners, guides).",
      },
    ],
    relatedTools: [
      { href: "/cursive-fonts/", title: "Cursive font generator", description: "Live-preview script styles, tap to copy." },
      { href: "/symbols/", title: "Symbols copy and paste", description: "388 symbols — hearts, stars, wings, kaomoji." },
      { href: "/blank-space/", title: "Blank space copy and paste", description: "Invisible characters for empty names and bios." },
    ],
    appearOn: [],
  },
  {
    locale: "en",
    slug: "whatsapp-fonts-guide",
    navName: "WhatsApp text guide",
    h1: "WhatsApp Text Tricks: Native Formatting Meets Unicode Fonts",
    title: "WhatsApp Fonts Guide — Native Formatting & Unicode Limits",
    description:
      "WhatsApp has native *bold* and _italic_ codes most people never use — plus where Unicode fonts work: name ~25, About ~139, messages ~65,536. Honest limits.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "Most people who search for a \u201cWhatsApp font changer\u201d never learn that WhatsApp ships with four text formats built in \u2014 bold, italic, strikethrough and monospace \u2014 triggered by nothing more than punctuation. They are codes, not characters: the recipient sees the style, never the asterisk.",
      "Beyond those native codes, styled Unicode characters travel through WhatsApp end to end, because in WhatsApp \u2014 unlike most apps \u2014 the characters ARE the style. This guide maps the native formats first, then exactly where fonts, symbols and blank characters work, with the numbers.",
    ],
    sections: [
      {
        heading: "The four formats WhatsApp ships with",
        bullets: [
          "*bold* \u2014 wrap the word in asterisks: *hello* sends as bold hello.",
          "_italic_ \u2014 underscores on both sides.",
          "~strikethrough~ \u2014 tildes on both sides.",
          "```monospace``` \u2014 three backticks before and after the text; handy for code, IDs and coordinates.",
        ],
        paragraphs: [
          "These are formatting flags, the same idea as bold in a word processor: invisible markup that WhatsApp renders on the receiving end. They work in every chat, group and reply, need no settings, and they survive forwarding.",
          "Everything else people call \u201cWhatsApp fonts\u201d is the second trick \u2014 swapping letters for styled Unicode characters. Unlike the native codes, those are real characters: they count toward length, they survive copy and paste anywhere, and they render even where WhatsApp's own formatting does not (like your profile name).",
        ],
      },
      {
        heading: "Where Unicode fonts actually work",
        bullets: [
          "Profile name: about 25 characters \u2014 styled fonts supported, visible to every chat.",
          "About line: about 139 characters \u2014 supported, shows on your contact card.",
          "Messages: about 65,536 characters \u2014 styles survive the whole way; the characters are the style.",
          "Groups: your name displays per group \u2014 keep it recognizable in work and family groups.",
        ],
      },
      {
        heading: "Symbols and the invisible trick",
        bullets: [
          "Text symbols \u2014 \u2661 \u2605 \u2727 \u2014 render as monochrome glyphs; emoji like \u2764\ufe0f render colored. Both are plain characters and copy the same way.",
          "An invisible name or empty About uses a blank character (the Hangul filler U+3164) \u2014 see the blank space tool; it is one paste, no app.",
          "Restraint scales: thin frames and small caps age better in a contact list you share with family and coworkers than heavy gamer stacks.",
        ],
      },
      {
        heading: "What not to do",
        bullets: [
          "No font apps needed \u2014 anything claiming to \u201cinstall fonts on WhatsApp\u201d is repackaging the same Unicode characters.",
          "Skip zalgo and heavy glitch stacks: screen readers spell them out letter by letter, and old devices draw boxes.",
          "Keep one findable anchor: a styled name does not match search \u2014 leave the plain spelling in a message to yourself or in your About.",
        ],
      },
    ],
    faq: [
      {
        q: "Does WhatsApp have a built-in font changer?",
        a: "Yes \u2014 four formats via punctuation: *bold*, _italic_, ~strikethrough~ and ```monospace```. Everything beyond those is styled Unicode characters, which need no app either \u2014 generate, copy, paste.",
      },
      {
        q: "Why do my fancy fonts show as boxes to some contacts?",
        a: "Their device font lacks the glyph for that character. Popular styles \u2014 script, bold, small caps, thin frames \u2014 render on nearly everything; exotic symbols are where boxes come from.",
      },
      {
        q: "Can I use a styled name on WhatsApp Business?",
        a: "Yes \u2014 the name and About fields work the same. For a business profile keep the styled part subtle and leave the actual business name readable: customers search for the plain spelling.",
      },
    ],
    relatedTools: [
      { href: "/whatsapp-fonts/", title: "WhatsApp font generator", description: "Name & About sized styles, limits in view." },
      { href: "/symbols/", title: "Symbols copy and paste", description: "388 symbols that render in chats." },
      { href: "/blank-space/", title: "Blank space copy and paste", description: "Invisible characters for empty names." },
    ],
    appearOn: ["whatsapp-fonts", "symbols", "blank-space"],
  },
  {
    locale: "en",
    slug: "nickname-ideas",
    navName: "Nickname ideas",
    h1: "50 Nickname Ideas \u2014 and the Formulas Behind Them",
    title: "50 Nickname Ideas \u2014 Formulas, Frames & Examples",
    description:
      "Nickname formulas that beat random syllables \u2014 hobby + verb, mains, real-name derivatives, frames ꧁꧂ \u2014 with 50 examples grouped by look, sized for real limits.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "Random syllable generators produce names that fail the friend-test: nobody can pronounce them, nobody remembers them, and six months later you are renaming again. Nicknames that stick come from small formulas applied to something personal \u2014 then dressed with a frame and a font.",
      "This page gives the five formulas first, the dressing rules second, and 50 ready examples grouped by look \u2014 every one sized for real platform limits (6\u201316 in most games, ~24 on TikTok, 3\u201320 on Roblox). Take one as-is or rebuild it with your own base word.",
    ],
    sections: [
      {
        heading: "Five formulas that produce usable nicknames",
        bullets: [
          "Hobby + verb: PixelRuns, ByteForge, ClayShots \u2014 a thing you do plus an action reads as a person, not a product.",
          "Main + role: AshMain, SupportQueen, IGLShadow \u2014 instant identity in team games.",
          "Real-name derivative: Alexandra \u2192 Xander, Nicholas \u2192 Nick- oto \u2014 personal without exposing your full name.",
          "Adjective + noun: QuietWolf, IronPigeon, SleepyTac \u2014 the adjective does the character work.",
          "Old tag minus numbers: NightWolf92 \u2192 NightWolf \u2014 retire the digits; they are what made it look dated.",
        ],
      },
      {
        heading: "Dress the winner: frames and fonts",
        paragraphs: [
          "The frame does the visual work and costs characters: ꧁꧂ adds 2, \u2661\u2026\u2661 pairs add 2\u20136. A 6\u201312 character field fits ꧁ACE꧂ (7) but not ꧁\u2550 sɴɪᴘᴇʀ \u2550꧂ (12+). Fonts are free by comparison \u2014 swapping letters for bold or small caps adds zero characters \u2014 so the cheap upgrade path is: plain name \u2192 styled font \u2192 light frame, in that order.",
          "The [nickname generator](/nickname-generator/) does all three layers at once and counts characters as you go, which is the fastest way to see what actually fits your target platform's field.",
        ],
      },
      {
        heading: "50 examples, grouped by look",
        bullets: [
          "Gamer frames: ꧁ACE꧂ \u00b7 ꧁\u1d85\u1d49\u1d50\u1d0f\u1d3f꧂ \u00b7 ꧁\u0280\u1d49\u1d05꧂ \u00b7 ꧁\u1d5c\u1d0f\u1d58\u1d48꧂ \u00b7 ꧁\u1d22\u1d07\u1d04꧂ \u00b7 ꧁\u0274\u1d0f\u1d20\u1d00꧂ \u00b7 ꧁\u0262\u029f\u1d00\u0280\u1d07꧂ \u00b7 ꧁\u1d0b\u026a\u0280\u026a\u1d1b\u1d0f꧂ \u00b7 \u0f3a sᴛᴏʀᴍ \u0f3b \u00b7 ꧁\u1d0d\u026as\u1d1b꧂",
          "Clean small caps: \u1d04\u0280\u1d07\u1d21 ᴍᴀɪɴ \u00b7 \u1d18\u0280\u1d0f sɴɪᴘᴇ \u00b7 ʟᴏɴᴇ ᴡᴏʟꜰ \u00b7 ǫᴜɪᴇᴛ sᴛᴏʀᴍ \u00b7 ᴅᴀʀᴋ ᴍᴀᴛᴛᴇʀ \u00b7 ꜰɪɴᴀʟ ʟᴀᴘ \u00b7 ꜰɪʀsᴛ ʙʟᴏᴏᴅ \u00b7 ɴɪɢʜᴛ ᴏᴡʟ \u00b7 ɪʀᴏɴ ᴍᴏᴏɴ \u00b7 ꜱᴏꜰᴛ ʟᴀᴜɴᴄʜ",
          "Bold with accent: ⚡ 𝐒𝐧𝐢𝐩𝐞𝐫 ⚡ \u00b7 ♞ 𝐑𝐨𝐲𝐚𝐥 ♞ \u00b7 ✧ 𝐃𝐚𝐫𝐤 ✧ \u00b7 ★ 𝐀𝐜𝐞 ★ \u00b7 ❖ 𝐕𝐞𝐧𝐨𝐦 ❖ \u00b7 ⚡ 𝐒𝐭𝐨𝐫𝐦 ⚡ \u00b7 ✦ 𝐋𝐮𝐧𝐚 ✦ \u00b7 ♆ 𝐓𝐢𝐝𝐞 ♆ \u00b7 ⚔ 𝐈𝐫𝐨𝐧 ⚔ \u00b7 ✰ 𝐍𝐞𝐨𝐧 ✰",
          "Soft and cute: ♡ milktea ♡ \u00b7 ୨୧ petal ୨୧ \u00b7 ✿ blossom ✿ \u00b7 ♡ softbaby ♡ \u00b7 ୨୧ mochi ୨୧ \u00b7 ✿ june ✿ \u00b7 ♡ cloudnine ♡ \u00b7 ୨୧ berry ୨୧ \u00b7 ✿ peachy ✿ \u00b7 ♡ lullaby ♡",
          "Minimal one-word: ᴠᴏɪᴅ \u00b7 ᴀsʜᴇs \u00b7 ɴᴇʙᴜʟᴀ \u00b7 ᴅʀɪꜰᴛ \u00b7 ᴏɴʏx \u00b7 ᴇᴄʜᴏ \u00b7 ᴢᴇɴ \u00b7 ʀᴜꜱᴛ \u00b7 ꜰᴏɢ \u00b7 ᴀᴛʟᴀꜱ",
        ],
      },
      {
        heading: "The friend-test",
        bullets: [
          "Pronounceable beats clever: if a teammate cannot say it on voice chat, it is a screen name, not a nickname.",
          "Two words maximum: the styled alphabet already adds visual noise; the base name should stay simple.",
          "Search honesty: 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 does not match a search for starlight \u2014 keep the @handle plain and a plain spelling somewhere findable.",
          "Never impersonate: styling a pro player's or staff member's name reads as a violation even when the characters differ.",
        ],
      },
    ],
    faq: [
      {
        q: "How long should a nickname be?",
        a: "The sweet spot is 4\u201312 characters: short enough for every field (most games cap 6\u201316, TikTok ~24, Instagram ~30), long enough to be pronounceable. Decorations count toward every limit.",
      },
      {
        q: "Are styled nicknames bad for being found?",
        a: "Partly \u2014 search matches exact characters, so styled text breaks name search everywhere. Keep the @handle plain and drop a plain-text spelling in a bio line; the styled version is the display layer.",
      },
      {
        q: "Why not just use a random generator?",
        a: "Random output fails the friend-test \u2014 unpronounceable, unmemorable, replaceable. Formulas produce a base that is yours; the generator's job is the fonts, frames and limits around that base.",
      },
    ],
    relatedTools: [
      { href: "/nickname-generator/", title: "Nickname generator", description: "Frames + fonts with a live counter." },
      { href: "/game-name-generator/", title: "Game name generator", description: "Whitelist-friendly styles for shooters." },
      { href: "/fancy-numbers/", title: "Fancy numbers", description: "Styled digits for squad numbers." },
    ],
    appearOn: ["nickname-generator", "game-name-generator", "fancy-numbers"],
  },
];

