// English copy for the /learn/ guides. Sources for every limit and claim:
// seo/产品事实底稿.md and the platform pages' own FAQ wording. Sample outputs
// were generated from src/lib/text-styles.ts (convertText), not typed by hand.
// The style-risk table is computed from the engine at build time
// (src/lib/style-risk.ts), so it can never drift from what the tool does.

import type { GuideDef } from "@/lib/guides";
import { digitsText, styleRiskRows, styleRiskSummary } from "@/lib/style-risk";

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
];
