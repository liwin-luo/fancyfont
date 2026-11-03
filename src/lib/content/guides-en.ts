// English copy for the /learn/ guides. Sources for every limit and claim:
// seo/产品事实底稿.md and the platform pages' own FAQ wording. Sample outputs
// were generated from src/lib/text-styles.ts (convertText), not typed by hand.
// The style-risk table is computed from the engine at build time
// (src/lib/style-risk.ts), so it can never drift from what the tool does.

import type { GuideDef } from "@/lib/guides";
import { digitsText, styleRiskRows, styleRiskSummary } from "@/lib/style-risk";
import { decorationCostRows } from "@/lib/nickname";

const risk = styleRiskSummary();

const STYLE_RISK_TABLE = {
  head: ["Style", "Each letter becomes", "Digits", "Notes"],
  rows: styleRiskRows().map((row) => [
    row.name,
    row.stacking,
    digitsText(row.digitsStyledCount),
    row.note ?? "—",
  ]),
};

const DECORATION_ROWS = decorationCostRows();
const decorationCostCounts = DECORATION_ROWS.reduce<Record<number, number>>((acc, row) => {
  acc[row.cost] = (acc[row.cost] ?? 0) + 1;
  return acc;
}, {});

const DECORATION_COST_TABLE = {
  head: ["Decoration", "Adds around your name", "Example with Shadow"],
  rows: DECORATION_ROWS.map((row) => [row.label, `+${row.cost} code points`, row.example]),
};

export const GUIDES_EN: GuideDef[] = [
  {
    slug: "change-instagram-bio-font",
    title: "How to Change Your Instagram Bio Font, Step by Step | FancyFont",
    h1: "How to Change Your Instagram Bio Font (Step by Step)",
    description:
      "Instagram has no font picker, but your bio accepts Unicode text. Copy styled characters in five steps, plus where fonts work and what to do when they don't.",
    published: "2026-11-01",
    updated: "2026-11-01",
    intro: [
      "Instagram has no font picker — there is no button anywhere in the app that turns your bio into cursive. What people call an \"Instagram font\" is a string of look-alike Unicode characters you paste in, and the app's own font renders them. That is the whole trick, and it takes about a minute.",
      "This guide walks through the copy-paste, where styled text works on Instagram and where it does not, and what to check when a pasted font comes out wrong.",
    ],
    sections: [
      {
        heading: "What an Instagram bio font actually is",
        paragraphs: [
          "Instagram's text fields hold plain text. When you paste 𝒸𝓊𝓇𝓈𝒾𝓋ℯ instead of cursive, you pasted separate Unicode characters that happen to look like a handwritten alphabet — not a font Instagram applied. That is why the same copied string also works in a TikTok nickname or a Discord status, and why nothing gets installed on your phone.",
          "It also explains the one limitation that matters: a viewer's phone needs a glyph for every character you pasted. Popular alphabets (cursive, bold, small caps) are covered almost everywhere; exotic decorations are where boxes come from.",
        ],
      },
      {
        heading: "Change your bio font in five steps",
        steps: [
          "Open the Instagram fonts generator, type the line for your bio, and watch the styles update as you type. The bio draft picker keeps your line breaks in place.",
          "Pick a style. Each result is real text you can copy. If a style looks unusual, open its character report to see which letters changed and which stayed as typed.",
          "Copy the styled line. If you want the line as an image instead — for a post or a story — use the PNG export.",
          "In Instagram, open your profile, tap Edit profile, and paste the line into the Bio field. Paste it the same way into Name if you want the styled look on top of your profile.",
          "Save and look at it in the app. Instagram shows roughly 150 characters in a bio; if your line is longer, the end can get cut, so trim before you publish.",
        ],
        image: {
          src: "/guides/ig-tool.webp",
          alt: "FancyFont's Instagram tool with a bio draft picked and the Cursive style applied, next to a Copy button",
          width: 1200,
          height: 600,
          caption:
            "Steps 1–3 in one screen: pick a bio draft, choose the Cursive style, and copy. The line under the preview counts the about-150 limit before you paste.",
        },
        paragraphs: [
          "A before/after example, straight from the generator: type coffee and late walks, choose the cursive style, and you copy out 𝒸ℴ𝒻𝒻ℯℯ 𝒶𝓃𝒹 𝓁𝒶𝓉ℯ 𝓌𝒶𝓁𝓀𝓈 — one tap, no app install.",
        ],
      },
      {
        heading: "Where styled text works on Instagram — and where it never does",
        bullets: [
          "Bio — works, with line breaks. Around 150 characters, which the generator counts for you before you copy.",
          "Display name — works, and it is where fonts get seen most: the name shows up in comments and in followers' feeds. It is a shorter field, around 30 characters.",
          "Username — never. Your @handle only accepts plain letters, digits, periods and underscores, and Instagram applies that to everyone. Keep the handle plain and put the style in the display name.",
        ],
      },
      {
        heading: "Which styles travel best",
        paragraphs: [
          `Most "my font turned into boxes" trouble comes from how a style is built, not from Instagram. We measured every style the generator ships, straight from the conversion engine: ${risk.single} of ${risk.total} swap each letter for exactly one new Unicode character — the safest kind, because there is simply one glyph for the reader's phone to draw. The other ${risk.marked} (${risk.markFamilies.strike} strikethrough and underline variants plus ${risk.markFamilies.zalgo} strengths of glitch) stack combining marks after each letter, and each stacked mark is another chance for a device to render unevenly.`,
          `Digits are their own split: ${risk.digitsAll} styles also restyle all ten digits, ${risk.digitsPartly} restyle some of them, and ${risk.digitsPlain} leave digits plain — which is why a bold "2026" keeps its numbers while a cursive one does not.`,
        ],
        table: STYLE_RISK_TABLE,
        seeAlso: [],
      },
      {
        heading: "If the paste fails or shows boxes",
        paragraphs: [
          "Boxes (□□□) mean the viewer's device is missing a glyph — the characters arrived, but the phone has nothing to draw for them. The fix is to pick a more common style: the table above puts the one-character-per-letter alphabets in one place, and those are covered nearly everywhere. The mark-stacking styles are the ones that break.",
          "If a paste into the bio comes out wrong, copy the line again from the generator and check the character report for combining-mark styles; strikethrough and zalgo stack marks on every letter and can render unevenly inside Instagram's fields. These are Unicode characters, not an Instagram feature — Instagram can change how it renders them at any time, so paste and check on your own account first.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I put a fancy font in my Instagram username?",
        a: "No. The @handle field only accepts plain letters, digits, periods and underscores for every account — there is no workaround, and apps claiming to style usernames are not doing anything real. Style the display name and bio instead; they are the fields people actually see.",
      },
      {
        q: "Do I need an app or a font keyboard to change my bio font?",
        a: "No. The whole method on this page runs in a browser: type, copy, paste — nothing to install and no Instagram login anywhere. That is also a useful filter: styling text never requires your password, so be careful with any app that asks for one just to give you fonts.",
      },
      {
        q: "Which bio styles are least likely to show as boxes?",
        a: "The one-character-per-letter alphabets: cursive, bold, small caps and their cousins — the table above lists all of them. The stacked-mark styles (strikethrough, underline, glitch) are the ones most likely to render unevenly on some devices.",
      },
      {
        q: "How many characters fit in an Instagram bio?",
        a: "About 150 characters. Instagram counts its own way, so the generator's count is a guide, not a guarantee — if the line is longer, trim it and check the saved profile.",
      },
    ],
    cta: {
      after: "Where styled text works on Instagram — and where it never does",
      heading: "Try it: style your bio line",
      body: "Type your bio line, pick a style, and copy — the Instagram tool keeps your line breaks and counts the about-150 bio limit before you paste.",
      label: "Open the Instagram Fonts Generator",
      href: "/instagram-fonts/",
    },
    appearOn: ["instagram-fonts"],
    relatedTools: [
      {
        href: "/instagram-fonts/",
        title: "Instagram Fonts Generator",
        description: "Bio drafts, display-name presets and a live preview before you copy.",
      },
      {
        href: "/fancy-text-generator/",
        title: "Fancy Text Generator",
        description: "All 30 Unicode styles for any short line, with a character report.",
      },
    ],
  },
  {
    slug: "pubg-free-fire-stylish-name",
    title: "PUBG & Free Fire Stylish Names: Steps and Paste Fixes | FancyFont",
    h1: "Stylish Names in PUBG & Free Fire: How to Change Them, and What to Do When the Paste Fails",
    description:
      "How players change a PUBG or Free Fire name to a stylish Unicode name, the about-16 and about-12 character limits, and the paste fixes that work on iPhone and iPad.",
    published: "2026-11-01",
    updated: "2026-11-01",
    intro: [
      "PUBG and Free Fire both let you style your name the same way: the name field holds plain text, and you paste in Unicode characters that look like a decorated font. The catch is that both games keep the field short — around 16 characters in PUBG, around 12 in Free Fire — and both can trim or reject what does not fit.",
      "This guide covers the change itself, the length math that decides whether a name survives, and the paste fixes for the case every iPhone player hits sooner or later: the name simply will not paste.",
    ],
    sections: [
      {
        heading: "Generate a name that fits before you touch the game",
        steps: [
          "Open the gaming name generator and type your base name. It builds decorated combinations — frames, marks, styled alphabets — from what you type.",
          "Check the length warning. PUBG fields usually take around 16 characters and some modes fewer; Free Fire is around 12 including every symbol. The preview counts code points and flags the name before you copy it.",
          "Copy the combination you like, or build your own from a styled word plus one mark — one mark plus a short word fits more often than a frame on both sides.",
          "In the game, open the screen where names are changed (most players get there with a rename card or item), paste the name, confirm, and look at it in the lobby.",
        ],
        image: {
          src: "/guides/pubg-length-warning.webp",
          alt: "FancyFont's PUBG preview flagging a decorated name at 17 code points against the usual 16",
          width: 1200,
          height: 850,
          caption:
            "Step 2's warning in action: ShadowWarrior plus decorations counts 17 code points against PUBG's usual 16 — flagged in orange before you copy, along with the standing not-tested-here notice.",
        },
        paragraphs: [
          "An example that fits both games with room to spare: the base name Shadow in the bold style comes out as 𝗦𝗵𝗮𝗱𝗼𝘄 — 6 characters. Wrapped in corner brackets, 「𝗦𝗵𝗮𝗱𝗼𝘄」 counts 8, which still clears PUBG's usual 16 with half the budget to spare.",
        ],
      },
      {
        heading: "What each decoration costs you",
        paragraphs: [
          `Every decoration pair in the builder was measured against a plain name: ${decorationCostCounts[2] ?? 0} of the ${DECORATION_ROWS.length} pairs add exactly 2 code points, the heavy frames add 4, and the star-dust frame (⋆｡˚ name ˚｡⋆) adds 6. Two details the table makes visible: the skull pair looks like 2 characters but carries a hidden variation-selector code point on each side, and the dot/dash pairs include their spacing spaces in the count.`,
          `That math is the whole game on short fields: a +6 frame eats half of Free Fire's about-12 budget before your name starts, while a +2 pair leaves room for an 8-letter styled word inside PUBG's about-16.`,
        ],
        table: DECORATION_COST_TABLE,
        seeAlso: [],
      },
      {
        heading: "If the name will not paste (iPhone and iPad)",
        paragraphs: [
          "The paste failure is usually the phone, not the game: the clipboard never picked the styled string up cleanly, or the game's field ignored the long-press. Players fix it with this sequence:",
        ],
        steps: [
          "Copy the name again from the generator, and wait for the copied confirmation before you leave the page.",
          "Open Notes, paste the name there, and look at it. If Notes shows the full styled name, tap into it, select all, and copy again from Notes — this re-copies it as one clean string.",
          "In the game's name field, press and hold until the Paste bubble appears, then lift your finger on Paste. A quick tap will not open the menu.",
          "Still nothing? Shorten the name and try again. Long decorated strings are the ones that fail to paste and get cut; a 6–8 character name almost always goes through.",
        ],
      },
      {
        heading: "What these fixes do and don't do",
        paragraphs: [
          "None of these steps change what the game accepts — they only get the characters to the field. The game still filters the name after that, and its filters can change without notice.",
          "That is also why the generator never promises a name will work: it sizes the string and warns on length, but the in-game field is the only test that counts.",
        ],
      },
      {
        heading: "If the game cuts your name short or rejects it",
        bullets: [
          "Count symbols as characters. A 16-character PUBG budget includes every bracket and mark; Free Fire's 12 goes fast.",
          "Drop the decoration first when a name is rejected. A plain short name the game accepts beats a styled one it cuts off.",
          "Prefer one-character-per-letter styles inside games. Of the 30 styles in the generator, 10 stack extra marks onto every letter — strikethrough, underline and the three glitch strengths. Each stacked mark is another chance for the game's field or another player's phone to trip.",
          "Remember the ID never changes. The numeric player ID cannot be styled — only the nickname is a text field.",
          "Re-check after game updates. Both games can tighten their filters; a name that worked last season can turn into boxes this one.",
        ],
        seeAlso: [
          {
            label: "Which styles travel best — all 30 measured",
            href: "/learn/change-instagram-bio-font/#guide-which-styles-travel-best",
          },
        ],
      },
      {
        heading: "Will other players see the style?",
        paragraphs: [
          "Usually, but it depends on their device: a stylish name renders from the other player's game build and fonts, not yours. Common alphabets show nearly everywhere; heavy decorations are the ones that show as boxes to some players. If the lobby preview looks right on your screen, most players will see what you see — and the players whose phone lacks a glyph will see boxes no matter which decorated style you picked.",
          "Before you spend a rename card, paste the name into a chat or a second device if you have one. The generator's character report also flags the styles that stack combining marks — those are the ones most likely to render unevenly across phones.",
        ],
      },
    ],
    faq: [
      {
        q: "How long can a PUBG name be?",
        a: "Plan for around 16 characters, including every symbol. Some PUBG Mobile flows are shorter. The generator's preview counts code points and warns when a name is over 16.",
      },
      {
        q: "Why won't my stylish name paste in PUBG Mobile on iPhone?",
        a: "Copy the name again, paste it into Notes first and re-copy it from there, then press and hold the name field until Paste appears. If it still fails, shorten the name — long decorated strings are the ones that drop.",
      },
      {
        q: "Can I use symbols in a Free Fire name?",
        a: "The nickname is about 12 characters including symbols, and the game filters what it does not accept. One mark plus a short styled word fits more often than a full frame.",
      },
      {
        q: "Will a stylish name show for other players?",
        a: "Only if their game build has the glyph and the name passes the filter. Paste it in and look at the lobby — if you see a box, pick a plainer style.",
      },
    ],
    cta: {
      after: "What each decoration costs you",
      heading: "Try it: build a name that fits",
      body: "Type your base name, add one decoration pair, and check the code-point count before you copy — the builder flags names over the about-16 PUBG and about-12 Free Fire budgets.",
      label: "Open the Gaming Name Generator",
      href: "/gaming-name-generator/",
    },
    appearOn: ["pubg-name-generator", "free-fire-name-generator", "cod-name-generator"],
    relatedTools: [
      {
        href: "/pubg-name-generator/",
        title: "PUBG Name Generator",
        description: "Lobby-card preview with the about-16 character warning built in.",
      },
      {
        href: "/free-fire-name-generator/",
        title: "Free Fire Name Generator",
        description: "Short nicknames sized for the about-12 character field.",
      },
      {
        href: "/gaming-name-generator/",
        title: "Gaming Name Generator",
        description: "Frames, marks and styled alphabets you can combine yourself.",
      },
    ],
  },
  {
    slug: "roblox-display-name-rules",
    title: "Roblox Display Names: 3–20, 7-Day Wait & What Help Says | FancyFont",
    h1: "Roblox Display Names: Official Rules, the 7-Day Wait, and What Help Does Not Promise",
    description:
      "Username vs display name on Roblox: the 7-day wait, 3–20 length from Roblox's staff announcement, free display-name changes, and why Help does not promise fancy Unicode or symbols. Checked against Roblox Support on 2026-11-03.",
    published: "2026-11-01",
    updated: "2026-11-03",
    intro: [
      "Roblox gives you two names with different jobs. The username is your unique login handle. The display name is what other players see above your head, in chat, and on your profile. Most rejected names come from treating those fields as the same box.",
      "This guide restates what Roblox Support publishes (checked 2026-11-03), cites the staff announcement for the 3–20 length, and clearly marks where Help is silent — especially about fancy Unicode letters and symbols. FancyFont cannot promise that a styled paste will save.",
    ],
    sections: [
      {
        heading: "Username vs display name: two fields, two rulebooks",
        paragraphs: [
          "Both fields have published rules — just not all in one place. The free weekly change, the continuous filtering, and the reset-to-username rule come from Roblox Help: Changing Your Display Name; the paid username change is described in Roblox Help: Changing Your Username; the username character limits are stated in Roblox Help: username character guidelines; and the 3–20 display-name length comes from the Roblox staff display-name announcement, which the current Help article does not repeat.",
        ],
        bullets: [
          "Username — your unique login id. Roblox Help's signup guidelines say 3–20 characters, letters and digits only (A–Z, 0–9), and at most one underscore that is not the first or last character. No spaces, symbols, emoji, or styled letters. Changing it costs Robux (Roblox Help: Changing Your Username). See also Roblox Help: username character guidelines.",
          "Display name — what others see. Roblox Help: Changing Your Display Name says you can change it for free, once every seven days, that it is filtered under the Community Rules, and that a name which breaks the rules may be reset to your username. Help does not publish a full list of allowed letters or symbols, and it does not say mathematical bold, script, or emoji will save.",
          "Length for display names: Roblox's staff announcement set display names at 3–20 characters. The current Help article does not repeat that number. Treat 3–20 as the announced cap, then confirm on Roblox's own save screen.",
        ],
        links: [
          {
            label: "Roblox Help: username character guidelines",
            href: "https://en.help.roblox.com/hc/en-us/articles/4412614080532-Xbox-Error-901",
          },
          {
            label: "Roblox Help: Changing Your Username",
            href: "https://en.help.roblox.com/hc/en-us/articles/203313130-Changing-Your-Username",
          },
          {
            label: "Roblox Help: Changing Your Display Name",
            href: "https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name",
          },
          {
            label: "Roblox staff display-name announcement",
            href: "https://devforum.roblox.com/t/say-hello-to-display-names/1036435",
          },
        ],
      },
      {
        heading: "Change your display name in four steps",
        steps: [
          "Log in and open Settings → Account Info, then open the Change Display Name entry (Roblox moves settings around now and then — look for the display name field, not the username one).",
          "Draft a short plain name first (3–20 characters). If you try decorations, keep a plain backup — Help does not guarantee styled characters will save.",
          "Paste into Roblox's field and save. Rejection happens in that UI; a failed save does not spend Robux on the display name.",
          "After a successful save, check the name in an experience. You can change the display name only once every seven days, so what you saved is what you wear for the week.",
        ],
        image: {
          src: "/guides/roblox-tool.webp",
          alt: "FancyFont's Roblox generator with ShadowHero typed in, counting the display name against the announced 3–20 range",
          width: 1200,
          height: 650,
          caption:
            "Step 2's preparation screen: the Roblox generator keeps the login username plain, drafts the display name separately, and counts it against the announced 3–20 range — whether a styled draft saves is Roblox's to decide, not the preview's.",
        },
        paragraphs: [
          "What comes next is the wait: you can change a display name only once every seven days, and every successful save occupies that week-long window. Check the saved name in an experience before you rely on it.",
        ],
      },
      {
        heading: "What Roblox publishes about characters (and what it does not)",
        paragraphs: [
          "Roblox Help: Changing Your Display Name states that display names are filtered continuously and must follow Community Rules. It notes Japanese characters in a beta for some users, with more character support planned. It does not list Latin \"fancy font\" alphabets, emoji, or punctuation symbols as allowed. Checked 2026-11-03.",
          "Because Help is silent on a full allow-list, this page does not invent one. Independent testers who ran names through Roblox's own validation (for example Alt Typist's 15 October 2026 write-up) report that symbols, emoji, and styled Unicode letters are commonly refused, while plain letters and digits — with at most one space and one underscore — are the dependable set. That is a third-party test, not a Roblox document: always believe the Save result on your own account.",
          "Practical habit: keep a plain base name you can fall back to. If a paste fails or is later reset to your username, wait out the seven-day timer only after a successful save — not after a rejected attempt that never applied.",
        ],
        links: [
          {
            label: "Roblox Help: Changing Your Display Name",
            href: "https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name",
          },
        ],
        seeAlso: [
          {
            label: "All 30 styles measured — which travel best",
            href: "/learn/change-instagram-bio-font/#guide-which-styles-travel-best",
          },
          {
            label: "What each decoration pair costs in code points",
            href: "/learn/pubg-free-fire-stylish-name/#guide-what-each-decoration-costs-you",
          },
        ],
      },
      {
        heading: "If the name is rejected or reverts",
        bullets: [
          "Drop the decoration first and shorten toward the 3–20 range. A plain short name Roblox accepts beats a styled one it bounces — especially with the 7-day wait behind it.",
          "Re-type rather than re-paste once. Some paste operations carry invisible characters along; typing the name fresh rules that out.",
          "Remember the experience games. Adopt Me and Berry Avenue show your Roblox display name, so the same rules (and the same 3–20 range) follow you there — Berry Avenue's overhead name preview can truncate long names.",
          "Expect resets, not leniency. Roblox's automated moderation can reset a display name to the username on its own, and Help offers no appeal that makes a styled name pass — a rejected style usually stays rejected until you pick a plainer one.",
        ],
      },
    ],
    faq: [
      {
        q: "How often can I change my Roblox display name?",
        a: "Once every seven days, according to Roblox Help: Changing Your Display Name. The change is free; the wait is what makes each successful save count.",
      },
      {
        q: "Can my Roblox display name have symbols and fonts?",
        a: "Roblox Help does not publish a list of fancy Unicode fonts or symbols that display names accept. It says names are filtered and mentions Japanese characters only as a beta for some users (checked 2026-11-03). Third-party checks against Roblox's validation often see symbols, emoji, and styled letters rejected. Do not rely on a generator preview — only Roblox's save screen decides.",
      },
      {
        q: "Can my Roblox username have symbols or fonts?",
        a: "No. Roblox Help: username character guidelines limit usernames to 3–20 letters and digits with at most one underscore that is not first or last. Styled text does not belong in the username.",
      },
      {
        q: "Does changing your display name cost Robux?",
        a: "No. Roblox Help: Changing Your Display Name describes display-name changes as free. Username changes require Robux (Roblox Help: Changing Your Username). This page does not invent a Robux price.",
      },
      {
        q: "How long can a Roblox display name be?",
        a: "Roblox's staff display-name announcement said 3–20 characters. The current Help article does not repeat that figure. Use 3–20 as the announced range, count decorations as characters if you attempt any, and confirm in Settings.",
      },
    ],
    cta: {
      after: "What Roblox publishes about characters (and what it does not)",
      heading: "Try it: draft a display name that fits",
      body: "Type your base name and the Roblox preview counts it against the announced 3–20 range while keeping your login username plain — the save screen, not the preview, decides what Roblox accepts.",
      label: "Open the Roblox Name Generator",
      href: "/roblox-name-generator/",
    },
    appearOn: ["roblox-name-generator", "adopt-me-fonts", "berry-avenue-fonts"],
    relatedTools: [
      {
        href: "/roblox-name-generator/",
        title: "Roblox Name Generator",
        description: "Display-name ideas with the username rules kept separate.",
      },
      {
        href: "/berry-avenue-fonts/",
        title: "Berry Avenue Fonts",
        description: "Head-name preview that truncates past 20 characters.",
      },
      {
        href: "/adopt-me-fonts/",
        title: "Adopt Me Fonts",
        description: "Adopt Me display names inherit the Roblox rules.",
      },
    ],
  },
  {
    slug: "twitch-display-name-fancy-text",
    title: "Twitch Display Names Can't Use Fancy Fonts (Bio Instead) | FancyFont",
    h1: "Twitch Display Names Can't Use Fancy Unicode Fonts",
    description:
      "Twitch display names only change your username's capitalization, and localized names follow a separate script rule. Where styled Unicode can still go: About, panels, chat.",
    published: "2026-11-02",
    updated: "2026-11-02",
    intro: [
      "No — a normal Twitch display name cannot hold fancy Unicode. Twitch's Help article on display names defines the field in one line: your display name is a change in capitalization from your username. That is the whole feature. The cursive or bold characters a generator produces are different Unicode letters, not capitalization, so a paste into the display name has nothing to land on — the field keeps showing your username in whatever letter case you saved.",
      "This guide covers what Twitch officially says, the one real exception (localized display names), where styled text may still paste — channel About, panels, chat — and how to get a readable name without any Unicode. Claims about the display name come from Twitch's own Help article; the fields it does not cover are marked check-it-yourself throughout.",
    ],
    sections: [
      {
        heading: "What Twitch officially says a display name is",
        paragraphs: [
          "Twitch's Help article About display names states the rule plainly: \"Your display name is a change in capitalization from your username. Your display name capitalization appears most everywhere on Twitch. Unlike usernames, display names can be changed at any time.\" No cooldown on the casing, and no path for styled alphabets — 𝑪𝒐𝒐𝒍𝑮𝒂𝒎𝒆𝒓 is a different set of characters than coolgamer, not a re-capitalization of it.",
          "Changing the case takes under a minute, and it can be redone whenever you like:",
        ],
        steps: [
          "Open your Profile Settings on Twitch.",
          "Enter the custom capitalization for your username — upper- and lower-case letters are the only thing this field edits.",
          "Save Changes. The new casing shows across Twitch, and you can set it again at any time.",
        ],
        links: [
          {
            label: "About display names",
            href: "https://help.twitch.tv/s/article/display-names-on-twitch",
          },
        ],
      },
      {
        heading: "Username vs display name: which field is which",
        bullets: [
          "Username — the login handle you registered. Changing the letters themselves means a username change, and Twitch's FAQ puts those at once every 60 days. The display-name article does not define the username character rules — those live in Twitch's account docs, and this page does not restate them.",
          "Display name — the same username with your chosen capitalization, shown most everywhere on Twitch. No cooldown: change the casing as often as you like.",
          "The practical split: case is free and instant, letters are a 60-day decision. Generators blur this because they only produce letters.",
        ],
      },
      {
        heading: "Localized display names: the real exception, and still not a fancy font",
        paragraphs: [
          "Twitch does offer a way to put different characters ahead of your username, but it is a language feature, not a style feature. With the website language set to Arabic, Chinese (Simplified), Chinese (Traditional), Korean, or Japanese, you can add a localized display name in that language's script, shown ahead of your username. Twitch describes it as affecting display names only — it is not a name change.",
          "That rule rules out the generator use case on its own: a Latin cursive or bold alphabet is neither an Arabic nor a CJK script, so there is no way to smuggle English fancy text into this feature. A name like 𝑪𝒐𝒐𝒍𝑮𝒂𝒎𝒆𝒓 is exactly what the no-English rule excludes. One quirk if you do use a localized name: Twitch's search guidance says to find localized names through search results, not search suggestions — suggestion clicks can error out.",
        ],
        bullets: [
          "Unique — no two users can hold the same localized name.",
          "Script-locked — localized display names cannot mix English characters or symbols.",
          "Cooldown — localized names can be changed once every 60 days.",
          "No recycle period — once you change away from one, anyone can claim it.",
          "Removal — switch the website language back to English, then set your display name to match your username.",
        ],
      },
      {
        heading: "Where styled text may still help on Twitch",
        paragraphs: [
          "The display-name article covers names only. It says nothing about the channel About section, panels, stream titles, or chat — the plain-text fields where creators commonly paste Unicode. Treat those fields as paste-and-check: nothing on this page represents Twitch confirming them, so save, then look at your own channel in the app — and for chat, look in a channel whose bots you don't control.",
          "Aim any styling at a short line — a panel heading, one About line — rather than a decorated wall. The styles that travel best swap each letter for exactly one character, so the reader's device has a single glyph to draw per letter; the mark-stacking styles (strikethrough, glitch) are the ones most likely to come out uneven.",
        ],
        table: {
          head: ["Twitch field", "Styled Unicode?", "What Twitch documents"],
          rows: [
            ["Display name", "No", "Capitalization of your username only — Help, About display names"],
            ["Localized display name", "No", "Own-script names; cannot mix English characters or symbols; once per 60 days"],
            ["Username", "No", "Plain handle; changes once per 60 days per the Help FAQ"],
            ["Channel About / bio", "Paste and check", "Not covered by the display-name article"],
            ["Panels", "Paste and check", "Not covered by the display-name article"],
            ["Chat", "Paste and check", "Not covered; some channels' bots filter unusual characters"],
          ],
        },
        seeAlso: [
          {
            label: "Which styles travel best — all 30 measured",
            href: "/learn/change-instagram-bio-font/#guide-which-styles-travel-best",
          },
        ],
      },
      {
        heading: "A readable display name without any Unicode",
        bullets: [
          "Use the casing you already own: coolgamer → CoolGamer reads as two words in chat, clips, and tags — and with no cooldown, a wrong guess costs nothing.",
          "Capitalize each word (CoolGamerTV) or split a long name at a natural boundary. Capitalization is the only edit this field takes, so make it carry the whole job.",
          "If the letters themselves must change, that is a username change: budget it against the once-every-60-days rule instead of experimenting.",
          "Save the decoration for fields that take it — a panel heading in small caps, an About line with a few symbols — not the name Twitch shows in every chat.",
        ],
      },
      {
        heading: "Why Twitch is different from Discord (and why generators confuse people)",
        paragraphs: [
          "On Discord, a nickname is a plain text field, and a pasted 𝑪𝒐𝒐𝒍𝑮𝒂𝒎𝒆𝒓 simply stays — our Discord fonts page is built around that behavior. People carry the expectation across, paste into the Twitch display name, and the paste goes nowhere, because Twitch defines the field as capitalization rather than free text.",
          "That mismatch is also the honest answer to most \"Twitch font generator\" pages: they emit Unicode without telling you which Twitch field can hold it. On Twitch the generator's job is narrow — styled lines for panels, About, chat — while the name itself is Twitch's to render from your username.",
        ],
      },
      {
        heading: "Sources and how far this page goes",
        paragraphs: [
          "Every display-name claim on this page — the capitalization definition, the no-cooldown casing change, the localized-name script rules, the 60-day timers — comes from Twitch's Help article About display names, re-read on 2026-11-02. The username-change timer is from the same article's FAQ.",
          "Nothing on this page was checked inside a logged-in Twitch account, and the fields the article does not cover are labeled paste-and-check above rather than presented as Twitch-approved. If Twitch updates the article, the wording here should be re-checked against it.",
        ],
        links: [
          {
            label: "About display names",
            href: "https://help.twitch.tv/s/article/display-names-on-twitch",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Can I use a fancy font in my Twitch display name?",
        a: "No — not for a normal Twitch display name. Twitch Help describes your display name as a capitalization change of your existing username (for example, coolgamer → CoolGamer). It is not a place to paste cursive, bold, or symbol-decorated Unicode from a fancy-text generator. Changing the letters themselves means changing your username, which Twitch allows once every 60 days.",
      },
      {
        q: "What about Twitch's localized display names?",
        a: "If your Twitch website language is set to Arabic, Chinese (Simplified or Traditional), Korean, or Japanese, you can add a localized display name in that language's script, shown ahead of your username. Twitch Help says localized display names must be unique and cannot mix English characters or symbols — so English fancy-font characters are excluded by rule — and localized names can only be changed once every 60 days.",
      },
      {
        q: "Where can I use fancy Unicode on Twitch instead?",
        a: "Creators commonly paste styled Unicode into plain-text areas such as the channel About/bio, panel text, or chat messages. Twitch's display-name Help article does not document those fields, so treat them as paste-and-check: save, then look at your channel in the Twitch app. Prefer short panel headings over decorated paragraphs, and expect some channels' chat bots to filter unusual characters.",
      },
      {
        q: "How do I change my Twitch display name capitalization?",
        a: "Open Profile Settings on Twitch, enter the custom capitalization for your username, and save. There is no cooldown — you can change the capitalization again at any time. Removing a localized display name is different: switch your website language back to English, then set your display name to match your username.",
      },
    ],
    cta: {
      after: "Where styled text may still help on Twitch",
      heading: "Try it: build your panel heading",
      body: "Type your line, pick a one-character-per-letter style like small caps or bold, and copy it into the fields that take styled text — panel headings and About lines, not the display name.",
      label: "Open the Fancy Text Generator",
      href: "/fancy-text-generator/",
    },
    appearOn: ["discord-fonts", "gaming-name-generator"],
    relatedTools: [
      {
        href: "/fancy-text-generator/",
        title: "Fancy Text Generator",
        description: "All 30 Unicode styles for a short line — panel headings and About lines, not display names.",
      },
      {
        href: "/small-caps-generator/",
        title: "Small Caps Generator",
        description: "The quiet one-character-per-letter alphabet that renders on the most devices.",
      },
      {
        href: "/symbols/",
        title: "Symbols & Decorators",
        description: "Hearts, crowns and brackets for panel headings — not for display names.",
      },
      {
        href: "/discord-fonts/",
        title: "Discord Fonts",
        description: "Where a pasted styled name actually works: Discord's nickname field.",
      },
    ],
  },
];
