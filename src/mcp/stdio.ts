// Stdio entry for the local FancyFont MCP server.
// stdout is the protocol. Do not log there.

import { createInterface } from "node:readline";
import { handleMcpMessage } from "./handlers";

const input = createInterface({ input: process.stdin, terminal: false });

input.on("line", (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let message: unknown;
  try {
    message = JSON.parse(trimmed);
  } catch {
    process.stdout.write(
      `${JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } })}\n`,
    );
    return;
  }

  const response = handleMcpMessage(message);
  if (response) process.stdout.write(`${JSON.stringify(response)}\n`);
});
