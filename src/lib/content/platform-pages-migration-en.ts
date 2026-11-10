// EN landing copy migrated from the old site (platform-pages-more.ts, with
// depth from cod-extra.ts and berry-avenue-extra.ts). Six platform pages:
// facebook-fonts, youtube-fonts, adopt-me-fonts, berry-avenue-fonts,
// cod-name-generator, fortnite-name-generator.
// Limits are "about" values carried over from the old copy — the platform's
// own counter is always the source of truth.

import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesMigrationEn: Record<string, { en: PlatformPageCopy }> = {
  "facebook-fonts": {
    en: {
      navName: "Facebook",
      h1: "Facebook Fonts Generator",
      title: "Facebook Fonts Generator – Stylish Name & Intro",
      description:
        "Facebook fonts for your profile name and intro — real Unicode characters with live preview and one-tap copy. Name fits ~50 characters; the username stays plain.",
      platform: "Facebook",
      intro: [
        "Facebook has no font picker, but your profile name and the short intro are plain text — so Unicode styles like 𝐄𝐦𝐢𝐥𝐲 𝐑𝐨𝐬𝐞 and ✧ ᴀᴜʀᴏʀᴀ ✧ show up right on your profile. Type below, preview live, tap to copy.",
        "The boundary is the username: letters, numbers and periods only, and Facebook also expects the profile name to look like a real name — it can refuse or revert unusual characters. Put the style in the name and intro, and keep the username plain.",
      ],
      limits: [
        { label: "Profile name", value: "About 50 characters — fancy characters may count as more than one" },
        { label: "Intro", value: "About 101 characters on the short intro line" },
        { label: "Username", value: "Letters, numbers and periods only — no fancy characters" },
        { label: "Counting", value: "Some counters treat one styled letter as several characters — trust Facebook's own counter" },
      ],
      compat: [
        "Profile name and intro: styled text usually saves and shows on desktop and in the app",
        "Facebook can reject or revert a name that doesn't look like a name — always check the saved profile",
        "Username and Page @handles stay plain — fonts never apply there",
        "Posts, comments and Messenger render Unicode styles as ordinary text; rare glyphs can draw as boxes on older devices",
      ],
      examples: ["𝐄𝐦𝐢𝐥𝐲 𝐑𝐨𝐬𝐞", "𝓙𝓮𝓷𝓷𝓲𝓯𝓮𝓻", "ᴍɪᴋᴇ ᴊᴏɴᴇs", "✧ ᴀᴜʀᴏʀᴀ ✧", "𝕁𝕒𝕪 𝕊𝕡𝕒𝕣𝕜𝕤", "☾ 𝐬𝐭𝐚𝐫𝐠𝐚𝐳𝐞𝐫 ☽", "𝓜𝓲𝓪 ✿"],
      steps: [
        "Style your name or intro here and copy the version you like.",
        "Open Facebook → Edit profile → paste into Name or the short Intro.",
        "Save, then open your profile the way a visitor sees it — confirm every character drew.",
        "If Facebook reverts the name, keep the styled line in the intro instead and leave the name plain.",
      ],
      faq: [
        {
          q: "Can I use fonts in my Facebook name?",
          a: "You can paste Unicode into the profile name and the intro. Facebook may refuse it or change it back — it expects names that look like real names. The username cannot take fonts at all.",
        },
        {
          q: "How long is the Facebook intro?",
          a: "The short intro is about 101 characters, and the profile name is about 50. A styled line fits; a long decoration plus a sentence usually does not.",
        },
        {
          q: "Could a fancy name get my account banned or reset?",
          a: "Styled characters are just text, not a violation on their own. The realistic risk is smaller: Facebook can refuse the save or revert the name to a plain version. Nothing you paste here gets your account suspended.",
        },
        {
          q: "Do fancy characters use more of my 50/101 limit?",
          a: "They can. Many styled letters sit outside the basic alphabet, and some Facebook counters treat them as more than one character. Leave yourself a few characters of slack and trust Facebook's counter over any estimate.",
        },
        {
          q: "How do I copy and paste, and why does it look different on my phone?",
          a: "Tap a row to copy it, then long-press the Facebook field and paste. If the style looks off on your phone, the device is missing the glyph — pick a plainer alphabet like bold or small caps, which render on almost everything.",
        },
        {
          q: "Is this an official Facebook tool?",
          a: "No. FancyFont is independent. Facebook and its marks belong to Meta. This page only converts the characters in your browser.",
        },
      ],
    },
  },

  "youtube-fonts": {
    en: {
      navName: "YouTube",
      h1: "YouTube Fonts Generator",
      title: "YouTube Fonts Generator – Channel Name & Description",
      description:
        "YouTube fonts for your channel name and description — style it here, preview live, copy, then paste into YouTube Studio and check. The @handle stays plain.",
      platform: "YouTube",
      intro: [
        "YouTube has no font picker, but the channel name and description are plain text — Unicode styles like 𝐆𝐚𝐦𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐌𝐚𝐱 and ★ Pixel Forge ★ show up on your channel page. Type below and tap to copy.",
        "The boundary is the @handle: lowercase letters, digits, underscores and periods, plain only — a styled handle won't resolve in search or mentions. Put the style in the channel name and the description.",
      ],
      limits: [
        { label: "Channel name", value: "About 100 characters — the field that runs out first" },
        { label: "@handle", value: "About 30 characters, plain lowercase letters/digits/underscores/periods" },
        { label: "Description", value: "About 1,000 characters — a styled name plus a normal sentence fits easily" },
        { label: "Counting", value: "Some counters treat one styled letter as several characters — trust YouTube's counter" },
      ],
      compat: [
        "Channel name: styled text usually saves; confirm it on the public channel page after publishing",
        "@handle: plain only, always — fonts break mentions and search matching",
        "Description and About: styled text works, but keep keywords and links in plain characters so search can read them",
        "Comments: Unicode styles render; some devices draw boxes for rare glyphs",
      ],
      examples: ["𝐆𝐚𝐦𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐌𝐚𝐱", "𝓒𝓸𝓸𝓴𝓲𝓷𝓰 𝓒𝓸𝓻𝓷𝓮𝓻", "★ Pixel Forge ★", "ᴅᴀɪʟʏ ᴠʟᴏɢs", "𝕊𝕡𝕒𝕔𝕖 𝕂𝕚𝕥", "ミ★ lo-fi nights 彡★", "𝘚𝘩𝘰𝘳𝘵𝘴 𝘏𝘶𝘣"],
      steps: [
        "Style the channel name here and copy your favorite.",
        "Open YouTube Studio → Customization → Basic info → paste into Channel name (and Description if you want).",
        "Publish, then open your public channel page and confirm every character drew.",
        "Leave the @handle untouched — it's plain by design and never takes styles.",
      ],
      faq: [
        {
          q: "Can my YouTube handle use a fancy font?",
          a: "No. The @handle is a plain lowercase username — letters, digits, underscores and periods. Put the style in the channel name and the description, which are separate fields.",
        },
        {
          q: "Where do I paste a styled channel name?",
          a: "Copy it here, open YouTube Studio → Customization → Basic info, paste into the channel name, and publish. Check the public channel page after you save.",
        },
        {
          q: "Will a styled channel name hurt my channel in search?",
          a: "It can, a little. Search matches text, and a fully styled name is harder to match verbatim. A safe pattern: styled name for looks, and your plain channel name once in the description so search can read it.",
        },
        {
          q: "How long can the channel name and description be?",
          a: "Plan for about 100 characters on the name and about 1,000 on the description. Styled letters can count as more than one character in some counters, so leave a little slack and trust YouTube's counter.",
        },
        {
          q: "Why does my styled name show boxes on some devices?",
          a: "The viewer's device has no glyph for that character. Common alphabets — bold, small caps, fullwidth — render almost everywhere; exotic symbol stacks are the ones that turn into boxes.",
        },
        {
          q: "Is this an official YouTube tool?",
          a: "No. FancyFont is independent. YouTube and its marks belong to Google. This page only converts the characters in your browser.",
        },
      ],
    },
  },

  "adopt-me-fonts": {
    en: {
      navName: "Adopt Me",
      h1: "Adopt Me Fonts",
      title: "Adopt Me Fonts That Work – Roblox Display Names",
      description:
        "Adopt Me fonts that fit your Roblox display name — preppy hearts and cute bows near the ~20 character limit. Preview, copy, then save on Roblox.",
      platform: "Adopt Me!",
      intro: [
        "Adopt Me shows your Roblox name above your avatar — the username stays plain letters, digits and one underscore, and the display name other players see is about 20 characters. Rows like 🤍 ᴍɪʟᴀ 🤍 and ♡ sᴋʏʟᴀʀ ♡ are the preppy look, cut short enough to fit. Type below and tap to copy.",
        "Roblox filters display names and can still refuse a symbol, and display-name changes are limited — about one per 7 days. So decide here: preview the name, keep it inside the limit, and paste-test on Roblox's own screen before you confirm.",
      ],
      limits: [
        { label: "Display name", value: "About 20 characters (Roblox announced 3–20) — every heart counts" },
        { label: "@username", value: "3–20 characters, letters/digits/one underscore — plain only" },
        { label: "Name changes", value: "About once per 7 days per Roblox Help — don't spend one unchecked" },
        { label: "Counting", value: "Some counters treat one styled letter as several characters — trust Roblox's field" },
      ],
      compat: [
        "Display name: whole-glyph styles like small caps and script pass Roblox's filter most often",
        "Stacked bows and rare symbols are refused first — Roblox may reset the name to your username",
        "@username: never accepts styles, in Adopt Me or anywhere else on Roblox",
        "Chat: styled text works, but Roblox's filter can hash blocked words into #### — send the plain backup",
      ],
      examples: ["🤍 ᴍɪʟᴀ 🤍", "♥ ᴄʟᴏᴠᴇʀ", "♡ sᴋʏʟᴀʀ ♡", "୨୧ ʙᴜɴɴʏ", "☆ ᴘᴇᴀᴄʜʏ ☆", "𝒮𝓌𝑒𝑒𝑡𝑝𝑒𝑎", "🤍 ᴘʀɪɴᴄᴇss ᴋ"],
      steps: [
        "Draft the display name here — keep it about 20 characters including every heart.",
        "Open Roblox → Settings → Account info → Display name (Adopt Me uses your Roblox name).",
        "Paste, watch Roblox's own preview, and save only when it accepts the name.",
        "If it's refused, swap to the next candidate instead of tweaking symbols — changes are limited to about one per 7 days.",
      ],
      faq: [
        {
          q: "Can my Adopt Me username use these fonts?",
          a: "No. The username is the Roblox login name: letters, digits and one underscore. Put the style in the display name — that's the field other players see above your avatar.",
        },
        {
          q: "Why did my fancy Adopt Me name get rejected?",
          a: "Roblox filters display names, and stacked bows and rare symbols fail first. Try the single-heart rows or plain small caps, and check the game's own preview before saving.",
        },
        {
          q: "Could a styled name get my account banned?",
          a: "No — the characters are ordinary text, not cheats or exploits. The realistic risk is that Roblox refuses the save or resets the name to your username. Impersonating staff or hiding banned words is a separate, real violation.",
        },
        {
          q: "How long can an Adopt Me display name be?",
          a: "About 20 characters, and Roblox's announcement puts the range at 3–20. Hearts, bows and styled letters all count toward it, so a short name plus one mark fits more often than a full frame.",
        },
        {
          q: "Why does my styled name look different on my phone?",
          a: "Your device is missing the glyph for that character, so it draws a box. Small caps and bold render almost everywhere; the small bow (୨୧) is the usual offender. Check the name on the device you actually play on.",
        },
        {
          q: "How do I copy and paste the name into Adopt Me?",
          a: "Tap a row to copy it. Open Roblox → Settings → Account info → Display name, paste, and read Roblox's own preview before saving. Adopt Me picks the name up automatically — there's no in-game name field.",
        },
      ],
    },
  },

  "berry-avenue-fonts": {
    en: {
      navName: "Berry Avenue",
      h1: "Berry Avenue Fonts: Copy & Paste Names, Bios & Emoji Combos",
      title: "Berry Avenue Fonts — Copy & Paste Names, Bios & Emoji Combos",
      description:
        "Berry Avenue fonts to copy and paste — coquette bows, preppy caps and emoji combos for your Roblox display name. About 20 characters fit; @username stays plain.",
      platform: "Berry Avenue",
      intro: [
        "Berry Avenue fonts are styled Unicode letters and symbols you copy and paste into your Roblox display name — the name Berry Avenue shows over your character. The display name fits about 20 characters, bows and emoji included, and rows like 𝜗𝜚 𝑩𝒍𝒂𝒊𝒓 𝜗𝜚 are sized to fit. The @username stays plain: Roblox only allows ordinary letters, digits and one underscore there.",
        "These are Unicode characters you paste, not a font you install — so Roblox's filter and your device's glyphs decide the final look. Keep the display name inside the limit, save only when Roblox's own screen accepts it, and put longer lines in chat or on a sign.",
      ],
      limits: [
        { label: "Display name", value: "About 20 characters (Roblox announced 3–20) — bows and hearts count" },
        { label: "@username", value: "Plain letters/digits/one underscore — fonts don't go here" },
        { label: "Name changes", value: "About once per 7 days per Roblox Help" },
        { label: "Chat & signs", value: "No published Berry Avenue limit for these fields — test on your device" },
      ],
      compat: [
        "Display name: small caps and script alphabets hold up best; the small bow (୨୧) can draw as a box on some devices",
        "Chat lines and house signs can run longer than the overhead name — check they render on your own device first",
        "@username: plain only, always — players still find you by that handle",
        "Roblox's chat filter can turn styled words into #### — keep a plain-text backup for anything important",
      ],
      examples: ["𝜗𝜚 𝑩𝒍𝒂𝒊𝒓 𝜗𝜚", "🎀 𝒮𝓀𝓎𝑒", "𐙚 𝓡𝓸𝓼𝓲𝓮 𐙚", "♡ 𝓔𝓵𝓵𝓲𝓮", "ᴊᴀᴅᴇ ᴠᴀʟᴇ", "꒰ 𝓝𝓲𝓬𝓸𝓵𝓮 ꒱", "𐙚 𝑫𝒂𝒚𝒍𝒆𝒆"],
      copyGroups: [
        {
          heading: "Berry Avenue name & bio examples",
          note: "Every row fits the ~20-character display name — tap to copy. The bow ୨୧ and the star 𐙚 are the symbols most likely to draw as a box (□) on some devices; hearts ♡, sparkles ✧ and emoji like 🎀 render on nearly every modern phone. The same characters work in any field that accepts pasted text, so longer bios and roleplay lines can reuse these rows.",
          groups: [
            {
              label: "Coquette & cute",
              items: ["𝜗𝜚 𝑩𝒍𝒂𝒊𝒓 𝜗𝜚", "𐙚 𝓡𝓸𝓼𝓲𝓮 𐙚", "♡ 𝓔𝓵𝓵𝓲𝓮 ♡", "𝜗𝜚 𝑺𝒐𝒇𝒊 𝜗𝜚"],
            },
            {
              label: "Preppy",
              items: ["✧ ᴍɪʟᴀ ✧", "ᴊᴀᴅᴇ ᴠᴀʟᴇ", "♡ ᴄʟᴀɪʀᴇ ♡", "ᴘʀᴇᴘᴘʏ ᴄʟᴜʙ"],
            },
            {
              label: "Family roleplay: mom, dad & baby",
              items: ["ᴍᴏᴍ ♡ ʟɪʟʏ", "ᴅᴀᴅ ★ ᴊᴀᴄᴋ", "𝓑𝓪𝓫𝔂 𝓥𝓲𝓸𝓵𝓮𝓽", "𐙚 ʙᴀʙʏ ᴍɪᴀ 𐙚"],
            },
            {
              label: "Aesthetic emoji combos",
              items: ["🎀 𝒮𝓀𝓎𝑒 🎀", "✿ 𝒻𝓁𝑜𝓌𝑒𝓇 ✿", "☾ 𝓂𝑜𝑜𝓃 ☽", "✧ 𝓈𝓉𝒶𝓇𝓈 ✧"],
            },
          ],
        },
      ],
      fieldTable: {
        heading: "Where Berry Avenue fonts go — field by field",
        columns: ["Field", "Fancy fonts?", "Notes"],
        rows: [
          ["Display name", "Yes", "Copy and paste Unicode. About 20 characters (Roblox announced 3–20) — bows, hearts and emoji count toward the limit."],
          ["@username", "No — plain only", "Ordinary letters, digits and one underscore. Players still find you by this handle."],
          ["Chat", "Yes, but filtered", "No published Berry Avenue limit. Roblox's filter can turn styled words into #### — keep a plain-text backup."],
          ["House sign", "Yes", "No published limit either. Check that longer lines actually draw on your own device before decorating."],
        ],
      },
      steps: [
        "Type your name and copy a row that stays near 20 characters.",
        "Open Roblox → Settings → Account info → Display name (Berry Avenue shows your Roblox name).",
        "Paste, let Roblox's own screen validate the name, then save.",
        "Put longer roleplay lines in chat or on a house sign — after you've seen them draw on your device.",
      ],
      faq: [
        {
          q: "What fonts work for Berry Avenue?",
          a: "Start with a display name of about 20 characters. The quiet small-caps rows add no extra symbols. Add a bow only if Roblox's own name screen still accepts it. These are Unicode characters you paste, not a font file you install.",
        },
        {
          q: "Are Berry Avenue fonts for the username?",
          a: "No. Roblox treats the display name and the @username as different fields. The display name is what other players see over your character; the @username is the login handle. Styled letters go on the display name only, and a longer roleplay line belongs in chat.",
        },
        {
          q: "Why did Roblox reject my Berry Avenue name?",
          a: "Display names are filtered, and a name that breaks the rules can be reset to your username. Drop rare symbols, keep the name inside 3–20, leave out personal details, and save only after Roblox's own screen accepts it.",
        },
        {
          q: "Why do Berry Avenue fonts show as empty boxes?",
          a: "A styled letter is a Unicode character, and a device with no glyph for it draws a box (□). This page doesn't install a font — your phone or computer decides what it can draw. Copy the plain small-caps row instead and check the name on the device you play on.",
        },
        {
          q: "How do I copy and paste my Berry Avenue name?",
          a: "Tap a row to copy it, open Roblox → Settings → Account info → Display name, and paste. Berry Avenue picks the name up from Roblox — there's no in-game name field to find.",
        },
        {
          q: "Is this a Berry Avenue font generator?",
          a: "It drafts a display name you can copy, and it's not an official Berry Avenue or Roblox tool. Nothing here guarantees the game will accept the characters — Roblox's own screen is the final check.",
        },
        {
          q: "Can I use Berry Avenue fonts in my bio?",
          a: "Yes — any field that accepts pasted text takes the same characters, including longer bio and roleplay lines. Only the display name (~20 characters) and the @username (plain) have stated rules; for everything else there's no published Berry Avenue limit, so paste and check it renders on your device.",
        },
      ],
    },
  },

  "cod-name-generator": {
    en: {
      navName: "COD",
      h1: "COD Name Generator",
      title: "COD Name Generator – Call of Duty Player Names",
      description:
        "Stylish COD names for Call of Duty — the player name fits about 16 characters and the clan tag stays short and plain. Preview, copy, test in game.",
      platform: "Call of Duty",
      intro: [
        "Call of Duty player names run about 16 characters in many titles, including Warzone and Mobile — one field shown in every lobby and kill feed. Rows like ꧁𝐕𝐄𝐍𝐎𝐌꧂ and 「ᴘʀᴇᴅᴀᴛᴏʀ」 are sized to fit. Type below, preview, and copy.",
        "The clan tag is a separate field of about 2–4 characters, so a decorated name doesn't belong there — keep the tag short and plain. And because renames can cost you, read the name back in the game's own preview before you confirm anything.",
      ],
      limits: [
        { label: "Player name", value: "About 16 characters in many titles — the cap varies by game" },
        { label: "Clan tag", value: "About 2–4 characters, plain text — a styled name won't fit" },
        { label: "Rename cost", value: "Mobile: 500 COD Points, once every 3 days · Activision ID titles: rename tokens (1 per 6 months, hold 2)" },
        { label: "Counting", value: "Some counters treat one styled letter as several characters — trust the game's field" },
      ],
      compat: [
        "Player name: bold, small caps and common frames (꧁꧂ 「」) usually pass; heavy stacked marks fail first",
        "Clan tag: plain text only — never paste the framed name into the tag",
        "A name that fails the Activision ID filter can be replaced with anon plus digits (e.g. anon123456789012)",
        "Kill feed and lobby lists render the raw characters — check that every glyph draws before you pay for a rename",
      ],
      examples: ["꧁𝐕𝐄𝐍𝐎𝐌꧂", "★彡𝐒𝐍𝐈𝐏𝐄𝐑彡★", "༺𝐆𝐇𝐎𝐒𝐓༻", "「ᴘʀᴇᴅᴀᴛᴏʀ」", "𝕿𝖔𝖝𝖎𝖈", "⚡𝐑𝐚𝐢𝐝𝐞𝐫", "♛𝐊𝐈𝐍𝐆♛", "𝗩𝗮𝗺𝗽𝗶𝗿𝗲"],
      steps: [
        "Draft the player name here and keep it about 16 characters.",
        "Open the game's rename screen — Mobile: Player Profile → Edit; Activision ID titles: rename token flow.",
        "Paste the name and read it back in the game's own preview before confirming.",
        "Keep the clan tag short and plain — 2–4 characters, no styling.",
      ],
      faq: [
        {
          q: "Can my COD clan tag use these fonts?",
          a: "No. The clan tag is only about 2–4 characters — a planning estimate, not an official cap — and it takes plain text. Keep the tag short and put the style on the player name.",
        },
        {
          q: "How long is a Call of Duty name?",
          a: "Plan for around 16 characters. Warzone, Mobile and older titles are not identical, so the game's own field is the real limit — Activision's rename articles don't state a hard cap.",
        },
        {
          q: "Could a styled name get me banned?",
          a: "No — the characters are text, not cheats. The realistic risks are practical: the filter refuses the save, or a name that fails the Activision ID filter gets replaced with anon followed by digits. Impersonating staff or offensive wording is a separate violation.",
        },
        {
          q: "How much does a COD name change cost?",
          a: "Call of Duty: Mobile: 500 COD Points, once every three days, via a Rename Card. Activision ID titles like Warzone: rename tokens — you get one every six months and can hold two at most. A change forced by invalid characters can return a token; a Code of Conduct change does not.",
        },
        {
          q: "Why does my styled name show boxes on my phone?",
          a: "Your phone is missing the glyph for that character. Bold and small caps render almost everywhere; exotic symbol stacks are the ones that draw as boxes. Paste and read the name in the game before you spend a rename.",
        },
        {
          q: "Is this an official Call of Duty tool?",
          a: "No. FancyFont is independent and is not affiliated with Activision. This page drafts a name and converts the characters in your browser — nothing is uploaded.",
        },
      ],
    },
  },

  "fortnite-name-generator": {
    en: {
      navName: "Fortnite",
      h1: "Fortnite Name Generator",
      title: "Fortnite Name Generator – Stylish Display Names",
      description:
        "Stylish Fortnite names with frames and Unicode styles — the display name fits about 16 characters. Preview, copy, then save from your Epic account.",
      platform: "Fortnite",
      intro: [
        "Fortnite shows your Epic display name in every lobby, kill feed and replay — one field, usually around 16 characters. Rows like ★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★ and ༺𝐃𝐚𝐫𝐤𝐍𝐢𝐧𝐣𝐚༻ are sized to fit. Type below, preview, and copy.",
        "The name is account-level: you change it from your Epic account settings, and Epic's filter decides which characters survive. Whole-glyph alphabets like bold and small caps hold up better than stacked decorations — star two candidates here before you commit.",
      ],
      limits: [
        { label: "Display name", value: "About 16 characters — the in-game field is the final judge" },
        { label: "Name changes", value: "Changed from your Epic account settings; rate-limited by Epic" },
        { label: "Epic account ID", value: "A number — stays plain, no styling" },
        { label: "Counting", value: "Some counters treat one styled letter as several characters — trust Epic's field" },
      ],
      compat: [
        "Display name: whole-glyph alphabets (bold, small caps) survive Epic's filter more often than stacked decorations",
        "If the lobby shows boxes, Epic's filter trimmed or rejected the style — pick a plainer one",
        "The change follows your account: the new name appears on every platform you log in from",
        "Party lists and kill feeds render raw Unicode — older devices may miss rare glyphs",
      ],
      examples: ["★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★", "꧁𝐒𝐭𝐨𝐫𝐦𝐁𝐫𝐢𝐧𝐠𝐞𝐫꧂", "༺𝐃𝐚𝐫𝐤𝐍𝐢𝐧𝐣𝐚༻", "⚡ɢᴀʟᴀxʏ", "「𝐑𝐚𝐩𝐭𝐨𝐫」", "𝕭𝖑𝖆𝖟𝖊", "♛𝐋𝐨𝐨𝐭 𝐊𝐢𝐧𝐠♛", "彡𝐧𝐨𝐬𝐜𝐨𝐩𝐞彡"],
      steps: [
        "Draft the display name here and star two candidates.",
        "Open your Epic account settings on the web → General → Display Name (or Account from the game's settings).",
        "Paste the first candidate, save, and check the lobby and kill feed.",
        "If it shows boxes or gets trimmed, use the plainer backup instead of fighting the filter.",
      ],
      faq: [
        {
          q: "How long can a Fortnite name be?",
          a: "Plan for around 16 characters. The preview counts characters and warns before you copy; the in-game field is the final judge.",
        },
        {
          q: "How do I change my Fortnite name?",
          a: "From your Epic account settings on the web, or the account section in the game. The display name is account-level, so the change follows you on every platform you play.",
        },
        {
          q: "Can I put symbols in my Fortnite name?",
          a: "Styled Unicode characters usually save, but Epic's filter can trim or reject them. Plainer alphabets — bold, small caps — survive more often than heavy decorations.",
        },
        {
          q: "Could a styled name get me banned?",
          a: "No — styled characters are ordinary text, and a failed save is just a failed save. Bans target behavior and offensive or impersonating names, not the alphabet you typed them in.",
        },
        {
          q: "How do I copy and paste the name, and why does it look different on my phone?",
          a: "Tap a row to copy it, paste into Epic's Display Name field, and save. If it looks wrong on your phone but fine on PC, the phone lacks the glyph — pick small caps or bold, which render almost everywhere.",
        },
        {
          q: "Is this an official Fortnite tool?",
          a: "No. FancyFont is independent and is not affiliated with Epic Games or Fortnite. This page drafts the name in your browser; Epic's own settings screen does the change.",
        },
      ],
    },
  },
};
