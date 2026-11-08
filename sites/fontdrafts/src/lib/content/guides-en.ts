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
    updated: "2026-11-07",
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
];
