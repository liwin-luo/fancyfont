import { build } from "esbuild";

await build({
  entryPoints: ["src/mcp/stdio.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "public/fancyfont-mcp.mjs",
  banner: { js: "// FancyFont local MCP server. Run: node fancyfont-mcp.mjs" },
});
