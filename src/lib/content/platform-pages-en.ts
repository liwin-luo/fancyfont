// English copy for the platform preset pages.
// Each page carries real, platform-specific guidance with honest wording —
// platform rules change, so nothing promises a character "will work".

export interface PlatformPageFaq {
  q: string;
  a: string;
}

export interface PlatformGuidance {
  label: string;
  body: string;
}

export interface PlatformPresetCopy {
  label: string;
  left: string;
  right: string;
  transform: string;
}

export interface BioTemplate {
  id: string;
  label: string;
  text: string;
}

export interface PlatformPageCopy {
  navName: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  defaultText: string;
  bios?: BioTemplate[];
  presets: PlatformPresetCopy[];
  guidance: PlatformGuidance[];
  compatNote: string;
  faq: PlatformPageFaq[];
}

export const platformPagesEn: Record<string, PlatformPageCopy> = {
  "instagram-fonts": {
    navName: "Instagram",
    h1: "Instagram Fonts Generator",
    title: "Instagram Fonts Generator – Stylish Bio & Name Fonts",
    description:
      "Stylish Unicode fonts for your Instagram bio and display name — preview how each style looks and copy it in one tap.",
    intro:
      "Instagram has no font picker. The draft below is for the bio, and the line breaks are already in it. The display name is the short field, about 30 characters, and the username stays plain.",
    defaultText: "Instagram",
    bios: [
      { id: "name", label: "Name, then symbols", text: "Alex\n\n♡ ✦ ♡" },
      { id: "line", label: "One line about you", text: "coffee and late walks\n\n✦" },
      { id: "note", label: "Name and a note", text: "Alex\n\nnew here" },
    ],
    presets: [
      { label: "Soft name frame", left: "✦ ", right: " ✦", transform: "script" },
      { label: "Aesthetic spacing", left: "", right: "", transform: "fullwidth" },
      { label: "Cute bows", left: "୨୧ ", right: " ୨୧", transform: "smallCaps" },
      { label: "Bold intro", left: "「 ", right: " 」", transform: "sansBold" },
    ],
    guidance: [
      {
        label: "Display name",
        body: "Around 30 characters. Styled text works here and is where fonts make the biggest difference — it shows in comments and followers' feeds.",
      },
      {
        label: "Bio",
        body: "Around 150 characters. Fonts, symbols and decorative combos all work, and line breaks are preserved — the prime spot for a styled name or accent row.",
      },
      {
        label: "Username",
        body: "Letters, digits, periods and underscores only. No Unicode fonts here — keep your handle plain and put the style in your display name.",
      },
    ],
    compatNote:
      "These are Unicode characters, not an Instagram feature — Instagram can change how it renders them at any time. Styles hold well in bios and display names today, but always paste and check on your own account first.",
    faq: [
      {
        q: "How do I add these fonts to my Instagram bio?",
        a: "Convert your text above and copy it. On Instagram, go to Edit Profile, paste into the Bio or Name field, and save. Check the result on both the app and the web version.",
      },
      {
        q: "Can I get banned for using fonts in my bio?",
        a: "Styled text in your name or bio is normal profile content, not a known violation. Keep it out of your username, follow Instagram's rules, and you are using it the same way millions of profiles do.",
      },
      {
        q: "Why does my font show squares to some followers?",
        a: "Their device or Instagram version is missing a glyph. Sticking to popular styles like cursive, small caps and bold keeps that risk low.",
      },
    ],
  },
  "tiktok-fonts": {
    navName: "TikTok",
    h1: "TikTok Fonts Generator",
    title: "TikTok Fonts Generator – Stylish Nicknames & Bio Text",
    description:
      "Stylish Unicode fonts for your TikTok nickname and bio — preview, copy and paste into your profile in seconds.",
    intro:
      "TikTok's built-in text options stop at its video editor. Your nickname and bio accept Unicode — pick a style below and paste it into your profile.",
    defaultText: "TikTok",
    bios: [
      { id: "name", label: "Name, then a mark", text: "Alex\n\n♪" },
      { id: "line", label: "What you post", text: "daily clips\n\n★" },
      { id: "note", label: "Name and a note", text: "Alex\nhere for the edits" },
    ],
    presets: [
      { label: "Clan frame", left: "꧁༒ ", right: " ༒꧂", transform: "boldScript" },
      { label: "Sparkle accent", left: "⋆｡˚ ", right: " ˚｡⋆", transform: "smallCaps" },
      { label: "Wide vibe", left: "", right: "", transform: "fullwidth" },
      { label: "Heart frame", left: "♡ ", right: " ♡", transform: "script" },
    ],
    guidance: [
      {
        label: "Nickname",
        body: "Around 24 characters, and the most visible styled text on your profile — it shows on every video. Styled characters work here.",
      },
      {
        label: "Bio",
        body: "Around 80 characters — short. One styled name line plus a compact accent combo usually fits; full-width text eats the limit fast.",
      },
      {
        label: "Username",
        body: "Letters, digits, periods and underscores only. Usernames never accept styled fonts — style your nickname instead.",
      },
    ],
    compatNote:
      "These are Unicode characters, not a TikTok feature, and TikTok controls how they render. Nicknames and bios hold styled text today — test on your own account, and remember profile rules can change.",
    faq: [
      {
        q: "How do I change my TikTok nickname to a styled font?",
        a: "Copy your styled name above, then open TikTok → Profile → Edit profile → Name, paste, and save. Your nickname updates everywhere your videos appear.",
      },
      {
        q: "Do fonts work in TikTok comments and captions?",
        a: "Yes — comments and captions accept Unicode characters. Styled text is most effective in the nickname, where it shows on every video.",
      },
      {
        q: "Why did part of my styled bio disappear?",
        a: "The bio character limit is short and some platforms trim unusual characters. Try a simpler style or shorten the surrounding text.",
      },
    ],
  },
  "discord-fonts": {
    navName: "Discord",
    h1: "Discord Fonts Generator",
    title: "Discord Fonts Generator – Nicknames & Status Text Styles",
    description:
      "Stylish Unicode fonts for Discord nicknames and statuses — plus honest notes on where Discord's real markdown formatting applies.",
    intro:
      "Discord nicknames and custom statuses have no formatting buttons — Unicode fills the gap. Pick a style, copy it, and paste it into your profile.",
    defaultText: "Discord",
    bios: [
      { id: "name", label: "Name and a status", text: "Alex\n\nlistening" },
      { id: "line", label: "What you're doing", text: "in a call\n\n✦" },
      { id: "note", label: "Short away note", text: "Alex\naway" },
    ],
    presets: [
      { label: "Server tag", left: "『", right: "』", transform: "monospace" },
      { label: "Mod mode", left: "† ", right: " †", transform: "fraktur" },
      { label: "Quiet flex", left: "", right: "", transform: "smallCaps" },
      { label: "Status accent", left: "✦ ", right: "", transform: "bold" },
    ],
    guidance: [
      {
        label: "Nickname / display name",
        body: "Around 32 characters, per server. Styled Unicode works — this is where fonts shine, especially combined with server tags like 『tag』.",
      },
      {
        label: "Custom status",
        body: "Around 128 characters. Styled text and symbols both work; keep it short enough to read in the member list.",
      },
      {
        label: "Username",
        body: "Letters, digits, periods and underscores, lowercase. No styled fonts — Discord is strict here.",
      },
      {
        label: "Messages",
        body: "Discord messages support real markdown: **bold**, *italic*, __underline__ and ~~strikethrough~~. Prefer markdown in chat — Unicode styles are for the parts of your profile markdown can't reach.",
      },
      {
        label: "Profile frames vs text",
        body: "Discord's shop sells Profile Frames — paid borders that decorate the look of your whole profile. They never touch your text: the nickname, custom status and About Me still take plain characters only, so Unicode styles remain the only way to bold or curve those.",
      },
    ],
    compatNote:
      "These are Unicode characters, not a Discord feature. Server owners can also change nickname permissions at any time. Styles work in nicknames and statuses today — paste and check in your server first.",
    faq: [
      {
        q: "How do I change my Discord nickname to a styled font?",
        a: "Copy the styled text above, then right-click the server icon → Edit Server Profile (or your user profile), paste into the nickname field, and save. Server-wide nicknames need the right permission.",
      },
      {
        q: "Why use Unicode fonts if Discord has markdown?",
        a: "Markdown only formats messages. Your nickname, custom status and About Me have no formatting options — Unicode styles are the only bold or cursive those fields can have.",
      },
      {
        q: "Why does my styled nickname revert in some servers?",
        a: "Server owners and bots can reset or moderate nicknames. If it changes back in one server only, that server's rules — not the characters — are the cause.",
      },
    ],
  },
  "roblox-name-generator": {
    navName: "Roblox",
    h1: "Roblox Name Generator",
    title: "Roblox Name Generator – Cool Display Names & Honest Limits",
    description:
      "Generate decorated Roblox display name ideas with symbols and styles — plus a clear guide to Roblox's username vs display name rules.",
    intro:
      "Decorate your Roblox name with symbols and styles — and know exactly where each kind of name can be used, because Roblox draws a hard line between usernames and display names.",
    defaultText: "ShadowHero",
    presets: [
      { label: "Arena frame", left: "꧁ ", right: " ꧂", transform: "bold" },
      { label: "Pro tag", left: "✪ ", right: "", transform: "smallCaps" },
      { label: "Star wrap", left: "★ ", right: " ★", transform: "identity" },
      { label: "Brackets", left: "『", right: "』", transform: "bold" },
    ],
    guidance: [
      {
        label: "Username",
        body: "Your login handle: 3–20 characters, letters, digits and a single underscore. Strictly enforced — no symbols, spaces or styled characters, ever.",
      },
      {
        label: "Display name",
        body: "The name other players see, changeable in settings. More flexible than the username, but still filtered — decorated styles may be rejected or changed. Test before you spend a change.",
      },
      {
        label: "Where styles fit",
        body: "Keep your base name plain and add decoration you can strip: if a game or update rejects symbols, you still have a clean name underneath.",
      },
    ],
    compatNote:
      "Roblox enforces its own character filters on names and updates them over time. Nothing here guarantees a decorated name will be accepted — generate, copy, and try it in Roblox's own name-change screen before committing.",
    faq: [
      {
        q: "Can my Roblox username have symbols or fonts?",
        a: "No. Usernames are locked to letters, digits and one underscore. Decorated styles only ever apply to your display name — and even there, Roblox's filters decide.",
      },
      {
        q: "Why did my display name get changed?",
        a: "Roblox runs automated filters on display names, and styled or symbol-heavy names are frequent targets. A plainer combo, or your base name with a single symbol, survives more often.",
      },
      {
        q: "Is this generator affiliated with Roblox?",
        a: "No — FancyFont is an independent tool. Roblox and related marks belong to Roblox Corporation; this page just helps you pick a name within their rules.",
      },
    ],
  },
};
