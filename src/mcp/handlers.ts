// Local MCP tool surface over the existing engines.
//
// ponytail: newline-delimited JSON-RPC for initialize, tools/list, and
// tools/call — the subset Cursor and Claude Desktop use. No resources,
// prompts, or streaming. If a client rejects that subset, replace this
// file with @modelcontextprotocol/sdk and keep the same tool names.

import { convertAll, convertText, textStyles, type TextStyleId } from "../lib/text-styles";
import { generateNicknames, vibeStyles, type NicknameStyle } from "../lib/nickname";
import { searchSymbols, symbolCategories } from "../lib/symbols-data";

const SERVER_VERSION = "0.1.0";
const PROTOCOLS = ["2024-11-05", "2025-03-26", "2025-06-18"];
const MAX_TEXT = 120;
const MAX_NICKNAMES = 24;

const INSTRUCTIONS =
  "FancyFont converts Latin letters into Unicode text styles, builds gaming nicknames, and searches a symbol list. Conversion runs in this process. Most styles change only A-Z and a-z. Accented letters and Chinese characters stay as typed.";

type RpcId = number | string | null;

class ToolError extends Error {}

const TOOLS = [
  {
    name: "fancyfont_list_styles",
    description:
      "List FancyFont Unicode text styles. Each line is id, name, coverage, and a short note. Coverage is letters, lettersDigits, partial, or all.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "fancyfont_convert_text",
    description:
      "Convert plain text into one FancyFont Unicode style, or every style when style is omitted. Max 120 characters. Only A-Z and a-z change in most styles.",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Plain text, 120 characters max." },
        style: {
          type: "string",
          description: "Style id from fancyfont_list_styles. Omit to return every style.",
        },
      },
      required: ["text"],
      additionalProperties: false,
    },
  },
  {
    name: "fancyfont_generate_nicknames",
    description:
      "Build decorated gaming nicknames from a short name. style is cool, dark, cute, pro, minimal, or all. count is 1 to 24. nonce changes the shuffle.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Name to decorate, 24 characters max." },
        style: { type: "string", description: "cool, dark, cute, pro, minimal, or all. Default all." },
        count: { type: "integer", description: "How many nicknames to return, 1 to 24. Default 12." },
        nonce: { type: "integer", description: "Shuffle seed. Default 0." },
      },
      required: ["name"],
      additionalProperties: false,
    },
  },
  {
    name: "fancyfont_search_symbols",
    description:
      "Search FancyFont symbols. Each line is the character, its code point, category, and label. Invisible characters are still listed by code point.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Word to match against labels and keywords." },
        category: { type: "string", description: "Category id, such as hearts, stars, or invisible." },
        limit: { type: "integer", description: "Max results, 1 to 40. Default 20." },
      },
      additionalProperties: false,
    },
  },
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toolText(text: string, isError = false) {
  const content = [{ type: "text" as const, text }];
  return isError ? { content, isError: true } : { content };
}

function requireString(args: Record<string, unknown>, key: string): string {
  const value = args[key];
  if (typeof value !== "string" || !value.trim()) throw new ToolError(`${key} is required`);
  return value;
}

function optionalString(args: Record<string, unknown>, key: string): string | undefined {
  const value = args[key];
  if (value === undefined) return undefined;
  if (typeof value !== "string") throw new ToolError(`${key} must be a string`);
  return value;
}

function optionalInt(args: Record<string, unknown>, key: string, fallback: number, max: number): number {
  const value = args[key];
  if (value === undefined) return fallback;
  if (typeof value !== "number" || !Number.isInteger(value)) throw new ToolError(`${key} must be an integer`);
  if (value < 0 || value > max) throw new ToolError(`${key} must be between 0 and ${max}`);
  return value;
}

function isStyleId(value: string): value is TextStyleId {
  return textStyles.some((style) => style.id === value);
}

function callTool(name: string, rawArgs: unknown) {
  if (rawArgs !== undefined && !isRecord(rawArgs)) throw new ToolError("arguments must be an object");
  const args = rawArgs ?? {};

  if (name === "fancyfont_list_styles") {
    const lines = textStyles.map((style) => `${style.id}\t${style.name}\t${style.coverage}\t${style.note}`);
    return toolText(lines.join("\n"));
  }

  if (name === "fancyfont_convert_text") {
    const text = requireString(args, "text").trim();
    if (text.length > MAX_TEXT) throw new ToolError(`text must be ${MAX_TEXT} characters or fewer`);
    const style = optionalString(args, "style")?.trim();
    if (!style) {
      const lines = convertAll(text).map((item) => `${item.id}\t${item.name}\t${item.text}`);
      return toolText(lines.join("\n"));
    }
    if (!isStyleId(style)) {
      throw new ToolError(`unknown style. Use fancyfont_list_styles. Known ids: ${textStyles.map((s) => s.id).join(", ")}`);
    }
    return toolText(convertText(text, style));
  }

  if (name === "fancyfont_generate_nicknames") {
    const name = requireString(args, "name").trim();
    const style = (optionalString(args, "style")?.trim() || "all") as NicknameStyle;
    const known = style === "all" || vibeStyles.some((vibe) => vibe.id === style);
    if (!known) {
      throw new ToolError(`unknown style. Use one of: all, ${vibeStyles.map((vibe) => vibe.id).join(", ")}`);
    }
    const count = optionalInt(args, "count", 12, MAX_NICKNAMES);
    if (count < 1) throw new ToolError("count must be between 1 and 24");
    const nonce = optionalInt(args, "nonce", 0, 100_000);
    const names = generateNicknames(name, style, nonce, count);
    if (names.length === 0) throw new ToolError("name is empty");
    return toolText(names.join("\n"));
  }

  if (name === "fancyfont_search_symbols") {
    const query = optionalString(args, "query") ?? "";
    const category = optionalString(args, "category")?.trim();
    if (category && !symbolCategories.some((item) => item.id === category)) {
      throw new ToolError(`unknown category. Use one of: ${symbolCategories.map((item) => item.id).join(", ")}`);
    }
    const limit = optionalInt(args, "limit", 20, 40);
    if (limit < 1) throw new ToolError("limit must be between 1 and 40");
    const matches = searchSymbols(query, category || null).slice(0, limit);
    if (matches.length === 0) return toolText("No symbols matched.");
    const lines = matches.map((entry) => {
      const points = [...entry.symbol]
        .map((char) => `U+${(char.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`)
        .join(" ");
      return `${entry.symbol}\t${points}\t${entry.category}\t${entry.label}`;
    });
    return toolText(lines.join("\n"));
  }

  throw new ToolError(`unknown tool: ${name}`);
}

function dispatch(method: string, params: unknown, id: RpcId) {
  if (method === "initialize") {
    const requested = isRecord(params) && typeof params.protocolVersion === "string" ? params.protocolVersion : "";
    return {
      protocolVersion: PROTOCOLS.includes(requested) ? requested : PROTOCOLS[0],
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "fancyfont", version: SERVER_VERSION },
      instructions: INSTRUCTIONS,
    };
  }

  if (method === "ping") return {};
  if (method === "tools/list") return { tools: TOOLS };
  if (method === "resources/list") return { resources: [] };
  if (method === "prompts/list") return { prompts: [] };

  if (method === "tools/call") {
    if (!isRecord(params) || typeof params.name !== "string") {
      return toolText("tools/call needs a tool name", true);
    }
    try {
      return callTool(params.name, params.arguments);
    } catch (error) {
      const message = error instanceof ToolError ? error.message : "Tool failed";
      return toolText(message, true);
    }
  }

  return { error: true as const, id, code: -32601, message: `Method not found: ${method}` };
}

/** Returns a JSON-RPC response, or null when the message is a notification. */
export function handleMcpMessage(message: unknown): object | null {
  if (!isRecord(message) || message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    const id = isRecord(message) && (typeof message.id === "string" || typeof message.id === "number") ? message.id : null;
    return { jsonrpc: "2.0", id, error: { code: -32600, message: "Invalid Request" } };
  }

  const method = message.method;
  const isNotification = message.id === undefined;
  if (method === "notifications/initialized" || method === "notifications/cancelled") return null;

  const id: RpcId =
    typeof message.id === "string" || typeof message.id === "number" || message.id === null ? message.id : null;
  const result = dispatch(method, message.params, id);
  if (isNotification) return null;

  const missing = methodNotFound(result);
  if (missing) return { jsonrpc: "2.0", id, error: missing };
  return { jsonrpc: "2.0", id, result };
}

function methodNotFound(result: unknown): { code: number; message: string } | null {
  if (!isRecord(result) || result.error !== true) return null;
  if (typeof result.code !== "number" || typeof result.message !== "string") return null;
  return { code: result.code, message: result.message };
}
