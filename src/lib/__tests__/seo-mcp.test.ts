import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { llmsTxt } from "@/lib/llms";
import { convertText } from "@/lib/text-styles";
import { handleMcpMessage } from "@/mcp/handlers";
import { MCP_INSTALL_CONFIG } from "@/mcp/install";

function call(method: string, params?: object, id: number | null = 1) {
  return handleMcpMessage({ jsonrpc: "2.0", id, method, params });
}

describe("local MCP", () => {
  it("answers initialize and lists the four tools", () => {
    const init = call("initialize", { protocolVersion: "2025-03-26" });
    expect(init).toMatchObject({
      result: { protocolVersion: "2025-03-26", serverInfo: { name: "fancyfont" } },
    });
    expect(handleMcpMessage({ jsonrpc: "2.0", method: "notifications/initialized" })).toBeNull();

    const listed = call("tools/list");
    const names = (listed as { result: { tools: { name: string }[] } }).result.tools.map((tool) => tool.name);
    expect(names).toEqual([
      "fancyfont_list_styles",
      "fancyfont_convert_text",
      "fancyfont_generate_nicknames",
      "fancyfont_search_symbols",
    ]);
  });

  it("converts with the same engine as the website and rejects a bad style", () => {
    const ok = call("tools/call", {
      name: "fancyfont_convert_text",
      arguments: { text: "Alex", style: "bold" },
    }) as { result: { content: { text: string }[]; isError?: boolean } };
    expect(ok.result.isError).toBeUndefined();
    expect(ok.result.content[0].text).toBe(convertText("Alex", "bold"));

    const bad = call("tools/call", {
      name: "fancyfont_convert_text",
      arguments: { text: "Alex", style: "comic" },
    }) as { result: { isError: boolean; content: { text: string }[] } };
    expect(bad.result.isError).toBe(true);
    expect(bad.result.content[0].text).toContain("unknown style");
  });

  it("returns nicknames and a symbol code point", () => {
    const names = call("tools/call", {
      name: "fancyfont_generate_nicknames",
      arguments: { name: "Alex", style: "minimal", count: 3, nonce: 1 },
    }) as { result: { content: { text: string }[] } };
    expect(names.result.content[0].text.split("\n")).toHaveLength(3);

    const hearts = call("tools/call", {
      name: "fancyfont_search_symbols",
      arguments: { query: "heart", category: "hearts", limit: 2 },
    }) as { result: { content: { text: string }[] } };
    expect(hearts.result.content[0].text).toContain("U+");
    expect(hearts.result.content[0].text.split("\n")).toHaveLength(2);
  });
});

describe("GEO files", () => {
  it("llms.txt names the tools, the domain, and the style boundary", () => {
    const text = llmsTxt("https://fancyfont.tools");
    expect(text).toContain("https://fancyfont.tools/mcp/");
    expect(text).toContain("https://fancyfont.tools/fancyfont-mcp.mjs");
    expect(MCP_INSTALL_CONFIG).toContain('"command": "node"');
    expect(MCP_INSTALL_CONFIG).toContain("fancyfont-mcp.mjs");
    expect(text).toContain("fancyfont_convert_text");
    expect(text).toContain("A–Z");
    expect(text).toContain("does not offer font files");
    expect(text).toContain("https://fancyfont.tools/terms/");
  });

  it("sitemap includes the MCP page once per locale and keeps a stable lastmod", () => {
    const entries = sitemap();
    const mcp = entries.filter((entry) => entry.url.endsWith("/mcp/"));
    expect(mcp).toHaveLength(5);
    expect(entries.filter((entry) => entry.url.endsWith("/terms/"))).toHaveLength(5);
    const stamps = new Set(entries.map((entry) => String(entry.lastModified)));
    expect(stamps.size).toBe(1);
  });
});
