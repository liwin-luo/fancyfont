// English platform pages: Instagram, TikTok, Discord, WhatsApp, Roblox,
// PUBG and the general game-name entry. Limits are "about" values — the
// platform's own counter is always the source of truth.

import type { Locale } from "../i18n";
import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesEn: Record<string, { [L in Locale]?: PlatformPageCopy }> = {
  "instagram-fonts": {
    en: {
      navName: "Instagram fonts",
      h1: "Instagram Font Generator",
      title: "Instagram Font Generator — Name 30 & Bio 150",
      description:
        "Fancy fonts for Instagram: display Name (about 30 characters) and Bio (150). Styles update as you type, one tap to copy — the @username stays plain.",
      platform: "Instagram",
      intro: [
        "Instagram's display name and bio both accept fancy Unicode characters — 𝓈𝓊𝓃𝓈ℯ𝓉 and ｖａｐｏｒｗａｖｅ are IG classics. Type below, preview live, tap to copy.",
        "The boundary is your @username: letters, digits, dots and underscores only, fancy characters get rejected. Keep styles in the name and bio; handles and hashtags stay plain.",
      ],
      limits: [
        { label: "Display name", value: "30 characters, fancy symbols count in" },
        { label: "Bio", value: "150 characters, supports line breaks & fancy characters" },
        { label: "@username", value: "Letters/digits/dots/underscores only — no fancy characters" },
      ],
      compat: [
        "Display name: script, fullwidth and framed styles all work",
        "Bio: fancy characters supported; combine with line breaks for layout",
        "Stories/Reels text: uses the in-app font system — unrelated to character styles",
        "Hashtags: fancy characters break tag matching — keep tags plain",
      ],
      examples: ["𝓈𝓊𝓃𝓈ℯ𝓉", "ｖａｐｏｒｗａｖｅ", "୨୧melody୨୧", "⋆t_r_a_v_e_l⋆", "ᴍɪʟᴋ ᴛᴇᴀ"],
      steps: [
        "Open Instagram → Edit profile → Name or Bio.",
        "Generate candidates here — script and fullwidth are the IG classics.",
        "Paste and check the 30/150 character counters.",
        "After saving, search for yourself once — keep a plain version in the bio for lookup.",
      ],
      faq: [
        {
          q: "Name vs username — what's the difference?",
          a: "The @username is your login and lookup ID, plain characters only. The Name is the display line, 30 characters with fancy styles allowed. Fancy fonts apply to Name and Bio only.",
        },
        {
          q: "Does strikethrough work in the bio?",
          a: "The characters paste fine, but IG's rendering can misalign combining marks. For bio layout prefer whole-glyph styles like script and fullwidth.",
        },
        {
          q: "Does a fancy name affect tagging?",
          a: "No — @mentions match the @username, which is unaffected by a styled display name.",
        },
        {
          q: "Do fancy characters use up my 30/150 character limits faster?",
          a: "Mostly no — script, bold and fullwidth letters count one each, same as ordinary letters. A few heavy symbols can count as display width 2, so check IG's own counter after pasting.",
        },
        {
          q: "Do fancy fonts work in Stories or Reels?",
          a: "Not as character styles — Stories and Reels text uses Instagram's in-app font menu, which is separate from what you paste. Fancy Unicode belongs in your Name and Bio; in Stories, pick from the built-in styles.",
        },
        {
          q: "Is this Instagram font tool free?",
          a: "Yes — free, no sign-up, and nothing installed or connected to your account. You copy the characters here and paste them into Instagram yourself.",
        },
      ],
    },
  },
  "tiktok-fonts": {
    en: {
      navName: "TikTok fonts",
      h1: "TikTok Font Generator",
      title: "TikTok Font Generator — Nickname ~24 & Bio ~80",
      description:
        "Fancy fonts for TikTok nicknames (about 24 characters) and bios (about 80). Live preview, one-tap copy; the @handle and hashtags stay plain.",
      platform: "TikTok",
      intro: [
        "TikTok nicknames accept fancy Unicode characters, and the bio takes most styles too. Type your nickname below — gamer frames, script, fullwidth — and tap to copy.",
        "Watch the boundary: your @handle only takes plain characters, and hashtags with fancy characters won't match. Styles belong in the nickname and bio.",
      ],
      limits: [
        { label: "Nickname", value: "About 24 characters — trust the edit screen's counter" },
        { label: "Bio", value: "About 80 characters, fancy symbols count in" },
        { label: "@handle", value: "Letters/digits/dots/underscores only — no fancy characters" },
      ],
      compat: [
        "Nickname: fancy characters work; nickname edits are rate-limited",
        "Bio: most styles fine; heavy combining marks can break on older Androids",
        "Comments: supported, but symbol walls may get folded",
        "Search: fancy nicknames may not match verbatim — keep a plain alias in the bio",
      ],
      examples: ["꧁starlight꧂", "ｖａｐｏｒｗａｖｅ", "𝓈𝓊𝓃𝓈ℯ𝓉", "☾moongirl☾", "★彡hype彡★"],
      steps: [
        "Open TikTok → Profile → Edit profile → Name.",
        "Generate candidates here and star two or three.",
        "Paste into the name field and watch the counter.",
        "Save, then view your profile on another device to check rendering.",
      ],
      faq: [
        {
          q: "Will a fancy nickname hurt my reach?",
          a: "No — fancy characters are ordinary text; reach depends on content. The real trade-off is search: a styled nickname may not match verbatim, so put a plain version in your bio.",
        },
        {
          q: "Can I use fancy fonts in captions?",
          a: "Yes, captions accept the characters. But hashtags must stay plain or the tag won't resolve.",
        },
        {
          q: "Why did my name fail to save?",
          a: "TikTok validates nicknames with a blocklist; a few exotic symbols trip it. Swap the decoration for a safer one (♡ ★ 『』) and retry.",
        },
        {
          q: "Why does my nickname show boxes on older Androids?",
          a: "Those devices lack fonts for the heavier styles — combining marks and rare stacks fail first. Script, bold and common frames (꧁꧂ ★ ♡) survive the widest range of phones.",
        },
        {
          q: "Do fancy characters count more toward the nickname or bio limit?",
          a: "Usually one each — but some heavy symbols count as display width 2. With only ~24 name characters to play with, watch the edit screen's counter before saving.",
        },
        {
          q: "How often can I change my TikTok nickname?",
          a: "Nickname edits are rate-limited, so a failed save can lock you out for a while. Decide here first, star two candidates, and only paste one you're confident in.",
        },
      ],
    },
  },
  "discord-fonts": {
    en: {
      navName: "Discord fonts",
      h1: "Discord Font Generator",
      title: "Discord Font Generator — Names, Status & Messages",
      description:
        "Styled Unicode for Discord display names, server nicknames (about 32), status and messages — no Nitro needed. Updates as you type; mentions stay plain.",
      platform: "Discord",
      intro: [
        "Discord display names, server nicknames and messages all accept fancy Unicode — no Nitro needed, because these are characters, not fonts. Type below and tap to copy.",
        "Where it works: your display name, per-server nickname, status and messages. Where it doesn't: @mentions and slash commands match your actual handle, so keep it plain.",
      ],
      limits: [
        { label: "Display name", value: "About 32 characters" },
        { label: "Server nickname", value: "About 32 characters, set per server" },
        { label: "Messages", value: "2000 characters — styled text counts normally" },
      ],
      compat: [
        "Display name / server nickname: fancy characters fully supported",
        "Status: fancy characters work",
        "Messages: supported; heavy combining marks can wrap oddly",
        "Bots & mentions: match the plain handle — fancy text won't ping",
      ],
      examples: ["𝔡𝔞𝔯𝔨𝔫𝔦𝔤𝔥𝔱", "⚡stormcaller⚡", "ᴍɪʀᴀɢᴇ", "꧁ACE꧂", "ⓜⓞⓞⓝⓒⓗⓘⓛⓓ"],
      steps: [
        "Open Discord → User settings → Display name (or right-click a server → Edit nickname).",
        "Generate candidates here and copy your favorite.",
        "Paste into the name field and save.",
        "Test a message and a ping — mentions must still hit your plain handle.",
      ],
      faq: [
        {
          q: "Do I need Nitro for a fancy Discord name?",
          a: "No. Server-wide emoji and other Nitro perks are separate — fancy characters are just text and work on every account.",
        },
        {
          q: "Can I style my @mention?",
          a: "No — mentions resolve against your plain handle. Keep the handle ordinary and decorate the display name.",
        },
        {
          q: "Why does my fancy name show boxes for some members?",
          a: "Their system fonts lack those glyphs. Popular frames (꧁꧂ ★ ♡) are safer than exotic script mixes.",
        },
        {
          q: "Does fancy text count differently against Discord's limits?",
          a: "No — every character counts normally against the ~32-character name limit and the 2000-character message cap. A frame pair like ꧁꧂ costs just 2.",
        },
        {
          q: "Are styled Discord names okay for screen readers?",
          a: "Screen readers may spell 𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱 out as “Fraktur” letters, which is noise for anyone listening. A styled display name is your call; keep messages people actually need to read in plain text.",
        },
        {
          q: "Can I have a different fancy name in each server?",
          a: "Yes — server nicknames are set per server, so you can be 𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱 in one community and plain in another. Your account-level display name stays whatever you set in User Settings.",
        },
      ],
    },
  },
  "whatsapp-fonts": {
    en: {
      navName: "WhatsApp fonts",
      h1: "WhatsApp Font Generator",
      title: "WhatsApp Font Generator — Name ~25 & About ~139",
      description:
        "Unicode fonts for the WhatsApp profile name (about 25 characters) and About line (about 139). Styles survive messages end to end — copy in one tap.",
      platform: "WhatsApp",
      intro: [
        "WhatsApp's profile name and About line accept fancy Unicode, and messages keep the style end to end because it's all plain characters. Type below, tap to copy.",
        "Decorate with restraint — WhatsApp is where your family and coworkers live. Thin frames and small caps age better than heavy gamer stacks.",
      ],
      limits: [
        { label: "Profile name", value: "About 25 characters" },
        { label: "About", value: "About 139 characters" },
        { label: "Messages", value: "About 65,536 characters — styled text counts normally" },
      ],
      compat: [
        "Profile name: fancy characters supported",
        "About: supported, visible on your contact card",
        "Messages: styles survive the whole way — the characters are the style",
        "Groups: your name shows per group; keep it recognizable for work groups",
      ],
      examples: ["★彡drifter彡★", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶", "⋆o n l i n e⋆", "✧focused✧", "『quiet mode』"],
      steps: [
        "Open WhatsApp → Settings → your profile → Name (or About).",
        "Generate candidates here and copy one.",
        "Paste into the field and save.",
        "Ask a contact how it renders — old Androids are the usual box offenders.",
      ],
      faq: [
        {
          q: "Do fancy fonts work in WhatsApp messages?",
          a: "Yes — better than most apps, because the style is in the characters themselves. WhatsApp's own *bold* _italic_ syntax is separate and unchanged.",
        },
        {
          q: "Will a styled name confuse my contacts?",
          a: "It can — people search contacts by name. A decorated name may not match; keep your real name findable in the About line.",
        },
        {
          q: "Does WhatsApp's built-in formatting conflict?",
          a: "No — *bold* and _italic_ are syntax around ordinary text; fancy characters don't interfere with them.",
        },
        {
          q: "Why does my name show as boxes for some contacts?",
          a: "Their phone lacks the fonts for those glyphs — old Androids are the usual offenders. Ask one contact to check before you commit, and keep a plainer backup starred.",
        },
        {
          q: "Should I use a fancy name in work groups?",
          a: "Better not — colleagues find and save you by name, and a decorated one is easy to lose track of. Keep your real name plain for work and put the styling in your About line or personal chats.",
        },
        {
          q: "Can screen readers read styled WhatsApp names?",
          a: "They try, but 𝓂𝒾𝓁𝓀 𝓉𝑒𝒶 may come out as a list of “script” letter names. Keep the styling to your profile name and About; write messages that need to be understood in ordinary text.",
        },
      ],
    },
  },
  "roblox-name-generator": {
    en: {
      navName: "Roblox names",
      h1: "Roblox Name Generator",
      title: "Roblox Name Generator — Display ~20, Username 3–20",
      description:
        "Roblox display name styles (about 20 characters, filter-validated) and the @username rule: 3–20 plain characters. Star two candidates, then commit.",
      platform: "Roblox",
      intro: [
        "Roblox has two names: the @username (plain characters, unique) and the display name (what others see). Fancy characters go in the display name — type below and tap to copy.",
        "Roblox validates names with a filter, and styled characters pass inconsistently. Always paste-test in the settings screen before committing a change.",
      ],
      limits: [
        { label: "Display name", value: "3–20 characters; changes may be rate-limited" },
        { label: "@username", value: "3–20 characters, letters/digits/underscore only" },
        { label: "Validation", value: "Roblox filters names — styled characters can be refused" },
      ],
      compat: [
        "Display name: bold/script/outline usually pass validation",
        "Combining marks (strike, zalgo): often refused — avoid for your main name",
        "@username: plain characters only, never supports styles",
        "Search: friends find you by exact username, keep it shareable",
      ],
      examples: ["𝐒𝐡𝐚𝐝𝐨𝐰", "𝒮𝓀𝓎𝑒", "ᴘʀᴏxʏ", "⚡Blitz⚡", "𝕊𝕡𝕒𝕣𝕜"],
      steps: [
        "Open Roblox → Settings → Account info → Display name.",
        "Generate candidates here; keep 2–3 starred backups.",
        "Paste, pass the filter, save.",
        "If refused, swap to the next candidate instead of tweaking symbols.",
      ],
      faq: [
        {
          q: "Why was my styled name rejected?",
          a: "Roblox runs names through a filter that rejects characters outside its allowed set — combining marks are the usual casualties. Whole-glyph styles (bold, script) pass more often.",
        },
        {
          q: "Is my username affected?",
          a: "Never — @usernames are plain by definition. Fancy styles only ever go in the display name.",
        },
        {
          q: "How often can I change my display name?",
          a: "Roblox rate-limits display name changes, so decide here first and use one attempt on your favorite.",
        },
        {
          q: "Do fancy characters use up my 20 display-name characters?",
          a: "Yes — styled letters count one each against the 3–20 limit, same as plain ones. A frame like ⚡…⚡ adds 2 more, so budget decorations into the total.",
        },
        {
          q: "Will friends still find me if my display name is styled?",
          a: "Yes — search and friend requests match the @username, which stays plain. The display name is only what people see; share your username, not the styled version.",
        },
        {
          q: "Does this tool need my Roblox login?",
          a: "No — it never asks for credentials and connects to nothing. You generate and copy names here, then paste them into Roblox's own settings screen yourself.",
        },
      ],
    },
  },
  "pubg-name-generator": {
    en: {
      navName: "PUBG names",
      h1: "PUBG Name Generator",
      title: "PUBG Name Generator — Gamer Frames, About 5–16",
      description:
        "Stylish PUBG IDs with ꧁꧂ frames — nicknames run about 5–16 characters and renames cost a card. Star two candidates, paste-test, then commit.",
      platform: "PUBG",
      intro: [
        "꧁ACE꧂, ★彡sniper彡★, 𝗦𝗛𝗔𝗗𝗢𝗪 — gamer frames are the shared language of shooter IDs. Type your name, preview the styles, copy into the rename card flow.",
        "Rename cards cost money, so decide here: star two or three candidates, then spend one attempt on the one that validates.",
      ],
      limits: [
        { label: "Nickname", value: "About 5–16 characters depending on version" },
        { label: "Rename cost", value: "Rename card or in-game currency — preview before spending" },
        { label: "Validation", value: "Version-dependent whitelist; failures say “invalid characters”" },
      ],
      compat: [
        "Most versions accept common frames ꧁꧂ ༺༻ ★彡彡★",
        "Combining marks (strike/zalgo): refused on stricter servers",
        "Esports accounts: tournament rules require plain names",
        "Friend search: styled IDs resist exact search — share your ID string",
      ],
      examples: ["꧁ACE꧂", "★彡sniper彡★", "𝗦𝗛𝗔𝗗𝗢𝗪", "♛heir♛", "꧔꧇1v5꧇꧕"],
      steps: [
        "Generate candidates here and star the top two.",
        "Open the game → inventory → rename card → enter new name.",
        "Paste the first candidate; if the filter refuses, use the backup.",
        "Squad up and have a teammate check your name in the list.",
      ],
      faq: [
        {
          q: "Can a fancy name get me banned?",
          a: "No — the characters are text, not cheats. Bans target behavior and offensive wording; validation failures simply refuse the save.",
        },
        {
          q: "Why did my name fail with “invalid characters”?",
          a: "That server whitelists characters and your symbol isn't on it. Pick a more common frame or drop decorations on the strictest servers.",
        },
        {
          q: "Do pro/tournament names allow styles?",
          a: "No — registered competitive names follow tournament rules, typically plain letters, digits and CJK. Keep styles to your matchmaking ID.",
        },
        {
          q: "Do frames like ꧁꧂ eat into my 16-character limit?",
          a: "Yes — every frame symbol counts as a character, and a ★彡…彡★ stack can eat 6 on its own. Design the core name first, then add frames with whatever budget is left.",
        },
        {
          q: "Will teammates on older phones see my name correctly?",
          a: "Usually — the common frames are widely supported, but exotic script mixes can show boxes on old devices. After renaming, have a teammate check the squad list from their screen.",
        },
        {
          q: "How do I avoid wasting a rename card?",
          a: "Decide before you open the game — star two or three candidates here and rank them. One card buys one attempt, so paste your strongest candidate first and keep the backup for a refusal.",
        },
      ],
    },
  },
  "game-name-generator": {
    en: {
      navName: "Game names",
      h1: "Game Name Generator",
      title: "Game Name Generator — Underline, Strike & Frames",
      description:
        "Gamer frames and styled IDs for any game — nicknames run about 6–16 characters and whitelists refuse exotics. Star candidates, paste-test, commit.",
      platform: "Games",
      intro: [
        "꧁ACE꧂, ♛heir♚, 𝗦𝗧𝗢𝗥𝗠 — the universal gamer-frame grammar, working across shooters, MOBAs and gacha games. Type your name, pick a style, copy into the rename dialog.",
        "Support varies by game: most accept common frames; whitelists refuse exotic ones. Name changes often cost currency — star candidates here, then commit in-game.",
      ],
      limits: [
        { label: "Typical nickname", value: "About 6–16 characters per game — trust the in-game counter" },
        { label: "Rename cost", value: "Cards or currency in most games; preview before spending" },
        { label: "Validation", value: "Whitelist checks in some titles; failures mean “invalid characters”" },
      ],
      compat: [
        "Shooters & MOBAs: common frames ꧁꧂ ༺༻ ★彡彡★ mostly accepted",
        "Anime-style games: characters fine, but softer frames match the art",
        "Esports accounts: plain names only, per tournament rules",
        "Friend search: styled IDs hard to find exactly — share the ID string",
      ],
      examples: ["꧁ACE꧂", "♛heir♚", "𝗦𝗡𝗜𝗣𝗘𝗥", "⚡storm⚡", "꧔꧇1v5꧇꧕"],
      steps: [
        "Type your game name and star 2–3 candidates.",
        "Open the rename screen in your game and paste the first one.",
        "If the filter refuses, try the next candidate — don't fight the whitelist.",
        "Ask a teammate to check the ID list rendering.",
      ],
      faq: [
        {
          q: "Why do some games refuse fancy names?",
          a: "Anti-impersonation filters whitelist allowed characters; everything else is refused. It's a save-block, not a ban — switch to plain characters.",
        },
        {
          q: "Can styled names look like staff names and cause trouble?",
          a: "Impersonating admins/moderators is a violation on its own — the styled characters don't protect you. Never decorate a name to look official.",
        },
        {
          q: "One name for many games — how do I pick?",
          a: "Design for the strictest game you play (shortest limit, hardest whitelist); it'll fit everywhere else automatically.",
        },
        {
          q: "Do decorations count against the 6–16 character limit?",
          a: "Yes — every symbol is a character, so ꧁ACE꧂ costs 7, not 3. Build the core name first and add frames only if the in-game counter has room.",
        },
        {
          q: "Is this generator free — do I need an account?",
          a: "Free, no account, nothing to install — styled names are Unicode characters you copy and paste yourself. The only costs are in-game, like rename cards.",
        },
        {
          q: "What styles suit anime or cute-styled games?",
          a: "Softer frames — ♡name♡, ✿name✿, small caps — match that art style better than heavy shooter stacks. They validate the same way as any other characters; the difference is purely aesthetic fit.",
        },
      ],
    },
  },
};
