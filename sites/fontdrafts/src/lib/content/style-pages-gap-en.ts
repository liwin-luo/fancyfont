// Gap pages: dedicated pages for keyword families with 50k+ demand but no
// page (keyword-clusters analysis 2026-11, content-gaps.md P0). English-only
// first version, same pattern as the migration landing pages.

import type { Locale } from "../i18n";
import type { StylePageCopy } from "../style-pages";

export const stylePagesGapEn: Record<string, { [L in Locale]?: StylePageCopy }> = {
  "superscript-subscript-generator": {
    en: {
      navName: "Superscript",
      h1: "Superscript & Subscript Generator",
      title: "Superscript & Subscript Generator — Small Raised Text",
      description:
        "Type x2 and get ˣ² — fancy superscript and subscript letters for math notes, chemistry and bios. Live preview, copy in one tap, notes on missing glyphs.",
      intro: [
        "Type x2 below and the superscript version ˣ² appears on the card — raised letters, lowered letters, no formatting attached. Tap to copy and paste it into a note, a bio, a homework doc or a chat message.",
        "These are real Unicode characters, not a font: the small raised ˣ and the small lowered ₂ each have their own code point. That is why they survive copy and paste everywhere — and why a few rare letters simply do not exist and stay normal-size, which we mark instead of hiding.",
      ],
      steps: [
        "Type the letter or formula fragment you need in the box.",
        "Compare the superscript row ˣ² with the subscript row ₓ₂ on the cards.",
        "Tap the card that fits — it copies instantly.",
        "Paste into your note, bio or message and check the glyphs all drew.",
      ],
      about: {
        heading: "How raised and lowered letters work",
        paragraphs: [
          "Unicode ships a small set of raised and lowered Latin letters scattered across legacy blocks — phonetic extensions, superscript digits and a handful of others. A generator swaps each normal letter for the raised or lowered character at the same position, so order, length and case stay identical.",
          "Coverage is the honest caveat: every digit and most lowercase letters have a raised form, but the full uppercase alphabet does not — W in particular has no superscript glyph in Unicode. Where a glyph is missing, the letter stays normal-size rather than silently changing your text into something else.",
        ],
      },
      faq: [
        {
          q: "Why do some letters stay normal-size?",
          a: "Unicode simply has no raised or lowered glyph for every letter — superscript W, for example, does not exist. The generator keeps the original character instead of faking it, so your text stays honest and editable.",
        },
        {
          q: "Is x² here the same as the ² on my keyboard?",
          a: "The ² key inserts one ready-made superscript digit — fine for digits, useless for letters. This page converts whole words letter by letter, so ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ is possible, not just ¹²³.",
        },
        {
          q: "Where can I paste raised and lowered text?",
          a: "Almost anywhere plain text goes — notes apps, bios, chats, document titles. Code editors and terminals usually render them too. When an app lacks the glyph you get a box, same as any rare character.",
        },
        {
          q: "Does superscript text help with SEO or search?",
          a: "No — raised letters are different code points, so ˢᵘᵖᵉʳ does not match a search for super. Use it for looks, never for keywords, handles or anything people will type into a search box.",
        },
      ],
    },
  },
  "signature-font-generator": {
    en: {
      navName: "Signature",
      h1: "Signature Font Generator",
      title: "Signature Font Generator — Script Styles for Your Name",
      description:
        "Turn your name into a handwritten-style fancy signature for email sign-offs, Discord, streams and bios. Copy in one tap. Not an ink or legal signature.",
      intro: [
        "Type your name and watch it become a flowing script signature — 𝒮𝒾𝓃𝒸𝑒𝓇𝑒𝓁𝓎, 𝒜𝓁𝑒𝓍 or 𝕊𝕡𝕒𝕣𝕜 — live on the cards as you type. Tap the one that feels like you and it is on your clipboard.",
        "A text signature is plain Unicode, not an image and not a font file: it pastes into email sign-offs, Discord profiles, stream titles and bios anywhere. It will never replace an ink signature on paper — this page is for the fun, everyday kind.",
      ],
      steps: [
        "Type the name or initials you sign with in the box.",
        "Compare the flowing script with the bolder script and the italic rows.",
        "Tap the card you like — it copies instantly.",
        "Paste it into your email sign-off, profile bio or chat and check it drew cleanly.",
      ],
      about: {
        heading: "What a text signature can and cannot be",
        paragraphs: [
          "The script looks are Unicode math-alphanumeric letters — the same technology as every cursive style on this site. Because they are plain characters, your signature travels with the text: it survives copy and paste into any app that renders Unicode, with nothing to install and nothing uploaded.",
          "What it cannot do is be legally yours: an e-mail sign-off in 𝓈𝒸𝓇𝒾𝓅𝓉 has no more legal weight than typed text. Real signatures — contracts, banks, deliveries — need ink or a proper e-signature service. For everything social and personal, a text signature is the quick middle ground.",
        ],
      },
      faq: [
        {
          q: "Can I use this as my legal or email signature?",
          a: "Legally, no — a styled-text signature carries no more weight than plain typed text, and contracts need ink or a real e-signature tool. For email sign-offs, Discord, bios and stream titles, it works everywhere plain text does.",
        },
        {
          q: "Why does my signature look different on my friend's phone?",
          a: "Every device draws Unicode with its own fonts, so the same script can look slightly bolder, thinner or rounder elsewhere. The characters stay identical — only the rendering changes.",
        },
        {
          q: "Which style looks most like real handwriting?",
          a: "The flowing script and bold script rows are the closest — keep the name short (first name, or initials) and it reads as a signature rather than a word. Long phrases always look like decorated text, not a signature.",
        },
        {
          q: "Will the signature work in my email client?",
          a: "Most modern clients render it fine in HTML mode. Plain-text mode and some corporate filters strip it back to normal letters — paste a test mail to yourself before relying on it.",
        },
      ],
    },
  },
};
