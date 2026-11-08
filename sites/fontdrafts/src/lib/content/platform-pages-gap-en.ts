// Gap pages (platform): twitter-fonts + minecraft-fonts — 50k+ keyword
// families with no competitor coverage in the 29-site SERP archive
// (content-gaps.md P0). English-only first, migration-page pattern.

import type { Locale } from "../i18n";
import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesGapEn: Record<string, { [L in Locale]?: PlatformPageCopy }> = {
  "twitter-fonts": {
    en: {
      navName: "X (Twitter)",
      h1: "Twitter Font Generator",
      title: "Fonts for Twitter & X — Bio 160 & Display Name 50",
      description:
        "Fonts for Twitter and X: style your display name (50 characters) and bio (160) with real Unicode, preview live, copy in one tap. The @handle stays plain.",
      platform: "X (Twitter)",
      intro: [
        "X has no font picker, but your display name and bio are plain text — so 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉, ᴅᴀɪʟʏ ᴛʜʀᴇᴀᴅs and ✦ moonbase ✦ show up on your profile as-is. Type below, tap a card to copy.",
        "Two boundaries to respect: the @handle is a plain lowercase username that never takes styles, and posts use weighted counting — many styled letters count as 2 toward the 280 limit, so keep heavy styling to the name and bio.",
      ],
      limits: [
        { label: "Display name", value: "About 50 characters — the field that takes styles best" },
        { label: "Bio", value: "About 160 characters, styled text and line breaks work" },
        { label: "@handle", value: "4–15 characters, plain lowercase letters/digits/underscores only" },
        { label: "Posts", value: "280 weighted characters — styled letters often count as 2" },
      ],
      compat: [
        "Display name: styled text saves and renders on your profile — confirm after saving",
        "Bio: styled text and line breaks both work; keep one plain keyword line for search",
        "Posts and replies: Unicode styles render, but weighted counting eats the budget fast",
        "Hashtags and @mentions: plain only — styled characters break matching and search",
      ],
      examples: ["𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉", "ᴅᴀɪʟʏ ᴛʜʀᴇᴀᴅs", "✦ moonbase ✦", "𝕏 𝗗𝗲𝘃", "♡ soft launches ♡", "ｖａｐｏｒ ｆｍ", "⚡ 𝗦𝗽𝗮𝗿𝗸 ⚡"],
      steps: [
        "Style your display name or bio line here and copy the favorite.",
        "Open X → your profile → Edit — paste into Name or Bio.",
        "Save, then view your public profile and confirm every glyph drew.",
        "Leave the @handle untouched — it is plain by design and never resolves styled.",
      ],
      faq: [
        {
          q: "Does X allow fancy fonts in my name and bio?",
          a: "Yes — the display name and bio are plain text fields and render Unicode styles. The @handle is the exception: it is a lowercase username and only accepts letters, digits and underscores.",
        },
        {
          q: "Why does my styled post count toward the limit twice as fast?",
          a: "X uses weighted counting: most characters cost 1, but many styled letters cost 2 because the platform classifies them like CJK. A post that looks 140 characters long can hit the 280 weighted limit — keep heavy styling out of posts.",
        },
        {
          q: "Can people still find me if my name is styled?",
          a: "Partly — search matches the literal characters, so 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 does not match a search for starlight. Keep your @handle plain and put searchable words in the bio so people can still find you.",
        },
        {
          q: "Why do some letters show as boxes for other people?",
          a: "Their device or app lacks the glyph for that rare character. Common styles like bold, script and small caps render almost everywhere; exotic frames are the ones that risk boxes.",
        },
      ],
    },
  },
  "minecraft-fonts": {
    en: {
      navName: "Minecraft",
      h1: "Minecraft Font Generator",
      title: "Minecraft Fonts — Where Styled Text Actually Works",
      description:
        "Minecraft renders a fixed font, so most fancy letters turn to boxes in-game. Style your server Discord, clan tag and video titles instead — copy in one tap.",
      platform: "Minecraft",
      intro: [
        "Honest answer first: inside Minecraft the chat, nametags and the username all render one fixed font, so 𝐟𝐚𝐧𝐜𝐲 letters and 𝔤𝔬𝔱𝔥𝔦𝔠 mostly draw as boxes — that is the game's font pack, not a bug you can fix with a generator.",
        "Where styled text does work: the server's Discord, clan and crew tags, video titles, launcher profiles that allow it, and anywhere else plain Unicode goes. Style those here — tap a card to copy.",
      ],
      limits: [
        { label: "Username", value: "Java: 3–16 characters, plain a–z 0–9 _ only — set at Microsoft account level" },
        { label: "In-game chat & nametags", value: "Vanilla font renders plain and accented letters — styled A–Z draw as boxes" },
        { label: "Server MOTD", value: "Uses § color/format codes in the host panel — not Unicode styles" },
        { label: "Server Discord & clan tags", value: "Styled Unicode works — this is where the generator helps" },
      ],
      compat: [
        "Java Edition: chat and nametags follow the resource pack font; math-alphanumeric letters are not in the vanilla set",
        "Bedrock Edition: same story — the built-in font has no styled Latin alphabet",
        "Server MOTD: use your host's § code editor for colors and formatting instead",
        "Around the game: Discord names, clan tags, video titles and forum signatures all render styled Unicode",
      ],
      examples: ["꧁ᴍɪɴᴇʀ꧂", "⛏ MinerMax ⛏", "✦ Bedwood ✦", "[PRO] 𝐒𝐭𝐞𝐯𝐞", "⚡Creeper⚡", "ᴄʀᴇᴡ ᴍᴀɪɴ", "꧁ Redstone ꧂"],
      steps: [
        "Style your clan tag or crew name here and copy the favorite.",
        "Paste it into the server's Discord nickname, roster sheet or video title.",
        "For the in-game name: that is your Microsoft/Xbox account name — plain letters only, changed there not here.",
        "For a colored MOTD: use the § codes in your server host's panel, then preview in the server list.",
      ],
      faq: [
        {
          q: "Can I style my Minecraft username?",
          a: "No — Java usernames are 3–16 plain characters (a–z, 0–9, underscore) tied to your Microsoft account, and Bedrock uses the Xbox gamertag. Both reject styled characters at input, not just at render.",
        },
        {
          q: "Why do fancy fonts show as boxes in-game?",
          a: "Minecraft draws text with its own fixed font, which only covers the letters it ships with. Styled Unicode letters are different code points the font has no picture for, so you get the missing-glyph box — every client does it.",
        },
        {
          q: "How do servers get colored, formatted MOTD text?",
          a: "With § section-sign color and format codes typed into the server.properties MOTD line or the host panel's editor. Those codes are Minecraft-specific formatting, separate from Unicode character styles.",
        },
        {
          q: "So where should I actually use a styled name?",
          a: "Everywhere around the game: the server's Discord, clan and crew tags, YouTube and Twitch titles, forum signatures and team rosters. Those are plain-text fields, and that is what this generator is for.",
        },
      ],
    },
  },
  "free-fire-name-generator": {
    en: {
      navName: "Free Fire",
      h1: "Free Fire Name Generator",
      title: "Free Fire Name Generator — Stylish Nickname Styles",
      description:
        "Stylish Free Fire nicknames — ꧁꧂ frames, fonts and symbols sized for the 6–12 field. Live preview, favorites, copy in one tap. Honest box-risk notes.",
      platform: "Free Fire",
      intro: [
        "꧁ᴅᴇᴍᴏɴ꧂, ⚡ 𝐒𝐧𝐢𝐩𝐞𝐫 ⚡, ᴄʀᴇᴡ ᴍᴀɪɴ — the Free Fire look is a short styled name inside a frame. Type your base name below and the cards are sized for the game's tight nickname field before you copy.",
        "The field is short (about 6–12 characters) and renames usually cost diamonds, so build a shortlist here first. Free Fire renders the popular letter styles well; exotic symbols are the ones that risk boxes on some devices.",
      ],
      limits: [
        { label: "Nickname", value: "About 6–12 characters — every decoration counts toward it" },
        { label: "Rename cost", value: "Usually diamonds — preview here before spending" },
        { label: "Clan tag", value: "Separate, shorter field — small caps fit better than frames" },
        { label: "Counting", value: "Styled letters count as one; strike/zalgo add invisible marks" },
      ],
      compat: [
        "Nickname: popular styles (script, bold, small caps) render in-game on nearly all devices",
        "Exotic symbols: risk boxes on some phones — test on a teammate's screen first",
        "Server/community Discord: styled Unicode works — the safest place for heavy frames",
        "Clan tag: keep it plain small caps; frames eat the short budget",
      ],
      examples: ["꧁ᴅᴇᴍᴏɴ꧂", "⚡ 𝐒𝐧𝐢𝐩𝐞𝐫 ⚡", "ᴄʀᴇᴡ ᴍᴀɪɴ", "꧁༺ sɴɪᴘᴇʀ ༻꧂", "✧ 𝐃𝐚𝐫𝐤 ✧", "ᴠᴏɪᴅ", "꧁ᴢᴇᴄ꧂"],
      steps: [
        "Type your base name and star 2–3 framed candidates.",
        "Check the counter — the whole name, frame included, must fit the 6–12 field.",
        "Open Free Fire → profile → nickname, paste the winner.",
        "If it draws badly on your phone, paste the next candidate — don't spend diamonds twice.",
      ],
      faq: [
        {
          q: "Why does my styled name show boxes for some players?",
          a: "Their device font lacks that glyph. The popular styles — script, bold, small caps, the ꧁꧂ frame — render on nearly everything; rare decorative symbols are where boxes come from.",
        },
        {
          q: "Can a stylish name get my Free Fire account banned?",
          a: "No — styled names are ordinary text characters, not a modification. What gets reported is impersonation or offensive wording; the styling itself is cosmetic.",
        },
        {
          q: "How much does it cost to change my Free Fire name?",
          a: "The rename usually costs diamonds via an in-game name-change item. Because it is a paid action, generate and compare several candidates here before you commit one.",
        },
        {
          q: "Which characters does Free Fire actually allow?",
          a: "Letters, digits and most common symbols; the field rejects nothing at input for ordinary Unicode, but the in-game font decides what draws. Frames ꧁꧂ and the popular styled alphabets are the safe picks.",
        },
        {
          q: "How do pros make those ꧁꧂ names?",
          a: "They assemble them: a base name, a frame from a generator, a symbol accent — exactly what the cards above produce. Nothing is hand-typed; it is copy and paste like here.",
        },
        {
          q: "What about my clan tag?",
          a: "It is a separate, shorter field. Keep it readable — small caps like ᴄʀᴇᴡ ᴍᴀɪɴ survive every device, while full frames rarely fit the tag budget.",
        },
      ],
    },
  },
};
