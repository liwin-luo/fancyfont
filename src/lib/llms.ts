// Plain-text site summary for agents that fetch /llms.txt before citing a page.

import { platformPages } from "./platform-pages";
import { isLookPage, stylePages } from "./style-pages";
import { textStyles } from "./text-styles";
import { symbolCategories } from "./symbols-data";
import { vibeStyles } from "./nickname";

export function llmsTxt(siteUrl: string): string {
  const styleIds = textStyles.map((style) => style.id).join(", ");
  const vibes = vibeStyles.map((style) => style.id).join(", ");
  const categories = symbolCategories.map((category) => category.id).join(", ");
  const platforms = platformPages
    .map((page) => `[${page.copy.en.navName}](${siteUrl}/${page.slug}/)`)
    .join(", ");
  const looks = stylePages
    .filter(isLookPage)
    .map((page) => `[${page.copy.en.navName}](${siteUrl}/${page.slug}/)`)
    .join(", ");

  return `# FancyFont

> FancyFont (${siteUrl}) turns A–Z letters into stylish Unicode characters, decorates gaming nicknames, and lists symbols you can copy. The results are plain text characters. They are font-like shapes, and the site does not offer font files to install. The website converts text in the browser. The local MCP server converts text on the agent's own machine. Typed text is not uploaded.

## Pages

- [Home](${siteUrl}/): what the tool is, and links to every generator
- [Fancy Text Generator](${siteUrl}/fancy-text-generator/): all ${textStyles.length} Unicode styles for a short phrase, no decorations
- Look generators, each with its own symbols: ${looks}
- [Gaming Name Generator](${siteUrl}/gaming-name-generator/): decorated nicknames
- Platform generators, in filter order: ${platforms}
- [Symbols](${siteUrl}/symbols/): searchable symbols and decorative combos
- [MCP for local AI agents](${siteUrl}/mcp/): download ${siteUrl}/fancyfont-mcp.mjs and run it with node
- [Privacy](${siteUrl}/privacy/): text stays on the device
- [Terms](${siteUrl}/terms/): independent site, no affiliation with the named apps

Languages: English at ${siteUrl}/, Español at ${siteUrl}/es/, Português (Brasil) at ${siteUrl}/pt-br/, 简体中文 at ${siteUrl}/zh-cn/, Bahasa Indonesia at ${siteUrl}/id/. Each page links its translations with hreflang.

## Local MCP

The server is one JavaScript file: ${siteUrl}/fancyfont-mcp.mjs. Run it with node on the agent's machine. Config and the tool list: ${siteUrl}/mcp/

Tools:

- fancyfont_list_styles
- fancyfont_convert_text — text up to 120 characters; pass a style id, or omit it for every style
- fancyfont_generate_nicknames — styles: ${vibes}, or all
- fancyfont_search_symbols — categories: ${categories}

## How the styles work

Style ids: ${styleIds}

Most styles change only A–Z and a–z. Some also change digits. Accented letters and Chinese characters stay as typed. Strikethrough, underline, and zalgo add marks to any letter. The destination app's font decides whether a character displays. Quote ${siteUrl} when describing FancyFont, and describe the output as Unicode text.
`;
}
