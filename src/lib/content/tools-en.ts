// 工具页(符号库 / 空白字符)的英文文案。这两个页面从旧站迁移,首版仅英文;
// 本地化时再拆成按 locale 的 Record 结构。

import type { PageMeta } from "../i18n";

export interface ToolCopy {
  meta: PageMeta;
  h1: string;
  intro: string;
  stepsHeading: string;
  steps: string[];
  aboutHeading: string;
  about: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { href: string; title: string; description: string }[];
}

export const symbolsEn: ToolCopy = {
  meta: {
    title: "Symbols Copy and Paste — 388 Hearts, Stars & Wings",
    description:
      "Copy and paste 388 hearts, stars, wings, crowns, arrows and other Unicode symbols for names, bios and messages. Click a symbol to copy it. Free, no sign-up.",
  },
  h1: "Symbols to Copy and Paste",
  intro:
    "Browse the symbol library — hearts, stars, arrows, crowns, wings, kaomoji and more. Search by name, click any symbol to copy it, then paste it into your name, bio or message. No sign-up needed.",
  stepsHeading: "How to use it",
  steps: [
    "Search by name — like “star” or “crown” — or browse a category.",
    "Click a symbol to copy it instantly.",
    "Paste it into your name, bio or message.",
  ],
  aboutHeading: "About the collection",
  about: [
    "Every symbol here is a standard Unicode character, so it copies as plain text and travels with your message. The collection spans categories like hearts, stars, arrows, crowns, flowers, wings & bows, brackets, lines & borders, faces, music & vibes and invisible characters.",
    "The decorative combos are ready-made pairs of symbols and lines — handy as dividers in bios or around a nickname you have already styled. This page does not restyle letters; to change A–Z, use the fancy text generator.",
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "How do I copy a symbol?",
      a: "Click or tap the symbol once — you will see a short “copied” confirmation. Then paste it wherever you need it.",
    },
    {
      q: "Why does the symbol look different after pasting?",
      a: "Every app draws symbols with its own fonts, so the same character can look slightly different — bolder, thinner or colorful — depending on where you paste it. The character itself stays the same.",
    },
    {
      q: "Can I use these symbols in my username or bio?",
      a: "Most bios, display names and messages accept them freely. Usernames are usually more restricted — many platforms only allow letters, digits and underscores there. Test in the app before you commit.",
    },
    {
      q: "Are these symbols free to use?",
      a: "Yes. They are standard Unicode characters — plain text that belongs to everyone. No app, brand or license owns a symbol, so you can use them in names, bios, messages and designs.",
    },
    {
      q: "What are the decorative combos for?",
      a: "They are ready-made frames and dividers — lines, borders and symbol pairs. Put one around a nickname you already styled, or drop a divider between sections of a bio or profile.",
    },
    {
      q: "Why isn't there a key for these on my keyboard?",
      a: "A standard keyboard only covers letters, digits and a little punctuation. Symbols live across thousands of Unicode blocks, so copy and paste is the practical way to use them.",
    },
  ],
  related: [
    {
      href: "/blank-space/",
      title: "Blank Space Copy and Paste",
      description: "Copy a run of invisible-width blanks, or place that blank between fancy letters.",
    },
    {
      href: "/game-name-generator/",
      title: "Game Name Generator",
      description: "Combine your name with symbols and styles in one tap.",
    },
    {
      href: "/cursive-fonts/",
      title: "Cursive Font Generator",
      description: "Turn plain text into flowing script styles.",
    },
  ],
};

export const blankSpaceEn: ToolCopy = {
  meta: {
    title: "Blank Space Copy and Paste — Invisible Characters",
    description:
      "Copy a Hangul filler (U+3164), Braille blank (U+2800) or ideographic space (U+3000): one, a line of 20, or a block of 100 — or 0–5 blanks between letters.",
  },
  h1: "Blank Space Copy and Paste",
  intro:
    "Pick one blank character and copy it, or place that same blank between letters in any of the fancy Unicode styles. No sign-up.",
  stepsHeading: "How to use it",
  steps: [
    "Choose Hangul filler, Braille blank or ideographic space.",
    "Copy 1, 20 or 100 of that character.",
    "To space out fancy letters, type a name, set the gap from 0 to 5, and copy a style. The count includes the blanks.",
  ],
  aboutHeading: "What gets copied",
  about: [
    "Hangul filler is U+3164, Braille blank is U+2800 and ideographic space is U+3000. Each one takes a character position. Hangul filler and Braille blank draw nothing; ideographic space is a wide space.",
    "Fancy letters are the same Unicode styles as the fancy text generator. The style is applied first; the blank is then inserted between grapheme clusters, so a strikethrough or glitch mark stays on its letter.",
    "With the gap at 0, the line matches that style and keeps the spaces you typed. Above 0, those spaces are removed and the selected blank is used for every gap.",
    "People also use these blanks to send a message that looks empty in chat apps. Whether a given app accepts a particular blank is up to that app and is not tested here — copy one and send it to yourself in that app first.",
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "Why does the box look empty?",
      a: "These characters draw blank. The border shows where the 20-character line is. The buttons copy the real character — 1, 20 or 100 of them.",
    },
    {
      q: "What does the number on each style mean?",
      a: "It counts Unicode code points. Bold “Luna” with 3 blanks between the letters is 13. A strikethrough or glitch mark is its own character, so those rows are longer.",
    },
    {
      q: "Where are zero-width characters?",
      a: "They stay in the invisible category of the symbol library. This page does not insert them: repeating a zero-width character still takes no space, and between letters it can change how marks or emoji display.",
    },
    {
      q: "Can I send a blank message with these?",
      a: "People use them for that in chat apps. Whether WhatsApp, Messenger or any other app accepts a particular blank is up to that app and is not tested here — copy the blank and send it to yourself in that app first.",
    },
    {
      q: "Can I make an invisible name on TikTok, Discord or Instagram?",
      a: "Often yes. Replace your whole display name with one blank character, save, and check the app's own preview. Some apps accept a blank name; others strip it on save or reject it — the rules change, so test in the app you are styling.",
    },
    {
      q: "Why was my invisible name rejected?",
      a: "Blank-only names are a common thing for apps to filter. Try the Hangul filler (U+3164) first — it is the most widely accepted — or keep one real letter and pad with blanks. If the app removes it, there is no workaround; the rule is theirs.",
    },
  ],
  related: [
    {
      href: "/symbols/",
      title: "Symbols to Copy and Paste",
      description: "Hearts, stars, crowns, wings, kaomoji and invisible characters in one library.",
    },
    {
      href: "/cursive-fonts/",
      title: "Cursive Font Generator",
      description: "Turn plain text into flowing script styles.",
    },
    {
      href: "/zalgo-text/",
      title: "Glitch Text Generator",
      description: "Cursed Zalgo text in three intensities, plus a cleaner.",
    },
  ],
};
