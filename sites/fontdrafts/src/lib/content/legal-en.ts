// English legal/info pages.

import type { LegalBundle } from "./legal";
import { contentUpdated, contactEmail, siteName } from "../site";

export const legalEn: LegalBundle = {
  about: {
    navName: "About",
    h1: `About ${siteName}`,
    intro: [
      `${siteName} is a fancy-text toolkit: it turns letters and numbers into styled Unicode characters and decorates nicknames with symbol frames. Every conversion runs in your browser — nothing you type reaches a server.`,
    ],
    sections: [
      {
        heading: "How we make content",
        paragraphs: [
          "Every style page, platform page and guide is written by hand from one shared fact base: the output is ordinary text; styled glyphs cover only Latin letters and digits; platform rules change without notice.",
          "Wherever platform limits appear, we mark them “about” and point to the platform's own live counter — we don't make claims we can't verify, and we don't speak for any platform.",
        ],
      },
      {
        heading: "Honest labeling",
        paragraphs: [
          "Styles that render poorly on old devices or rare fonts carry a visible ⚠ risk note on the card itself — not buried in a help page. Symbol sources, coverage limits and counting quirks are explained on the page where you use them.",
          "This site is independent and unaffiliated with any platform, game or app mentioned; all trademarks belong to their owners.",
        ],
      },
      {
        heading: "Technical notes",
        paragraphs: [
          "The site is fully static: no accounts, no tracking cookies. Favorites and recent copies live in your browser's localStorage and belong to your device alone.",
          "Found a bug or want a new style? The contact page has our inbox.",
        ],
      },
    ],
  },
  contact: {
    navName: "Contact",
    h1: "Contact us",
    intro: [
      `One inbox reaches the team: ${contactEmail}`,
      "Tell us the page you were on, your browser/device, and what happened — screenshots help. We usually reply within a week.",
    ],
    sections: [
      {
        heading: "What we welcome",
        paragraphs: [
          "Bug reports (styles rendering wrong, pages misbehaving); style and decoration requests; corrections when platform rules change; partnership inquiries — please introduce your organization.",
        ],
      },
      {
        heading: "What we don't handle",
        paragraphs: [
          "Account appeals: we're unaffiliated with any platform and can't act on bans. Paid placements: not accepted. Requests to “bypass a platform's validation”: those exist to protect people, and we won't reply.",
        ],
      },
    ],
  },
  privacy: {
    navName: "Privacy",
    h1: "Privacy policy",
    intro: [
      `Last updated: ${contentUpdated}. The short version: your text stays on your device.`,
    ],
    sections: [
      {
        heading: "What we process",
        paragraphs: [
          "The text you convert is processed in your browser's memory only. It is never sent to, logged by, or stored on any server — the pages have no backend to receive it.",
          "Favorites and recent copies are saved in your browser's localStorage, exist only on your device, and vanish when you clear browser data. We cannot access or recover them.",
        ],
      },
      {
        heading: "What we don't do",
        paragraphs: [
          "No tracking cookies, no third-party analytics or ad scripts, no account system, no fingerprinting.",
          "Our hosting provider may record standard anonymous access logs (IP, timestamps) as part of serving the site; that pipeline is separate from text conversion, which never leaves the page.",
        ],
      },
      {
        heading: "Third-party links",
        paragraphs: [
          "Guide pages mention platforms by name for compatibility context only; they do not embed third-party assets. If that ever changes, this section will say so.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "Material changes update this page and its date. Significant changes will be flagged on the home page for at least 14 days.",
        ],
      },
    ],
  },
  terms: {
    navName: "Terms",
    h1: "Terms of use",
    intro: [`Last updated: ${contentUpdated}. By using ${siteName} you accept the terms below.`],
    sections: [
      {
        heading: "What this service is",
        paragraphs: [
          "A free Unicode text conversion tool, provided “as is”, with no warranty of merchantability or fitness for a purpose. The output is ordinary text characters; we claim no rights over it and make no promises about how any platform or device displays it.",
        ],
      },
      {
        heading: "Independence",
        paragraphs: [
          "This site is not affiliated with, endorsed by, or connected to any platform, game or app mentioned on it. Names and trademarks belong to their respective owners and appear only as compatibility context.",
        ],
      },
      {
        heading: "Your responsibilities",
        paragraphs: [
          "Use of the output must follow the target platform's terms and your local law. Using styled characters to impersonate people or officials, to evade content filters, or to obscure payment/verification details is prohibited and entirely on you.",
          "Platform support rules are set by platforms and change without notice; “about” values on this site are reference only.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, we are not liable for any direct or indirect loss arising from use or inability to use this service. Changes to these terms update this page's date.",
        ],
      },
    ],
  },
};
