/** Cursor and Claude Desktop stdio config. The path points at the downloaded file. */
export const MCP_DOWNLOAD_NAME = "fancyfont-mcp.mjs";
export const MCP_DOWNLOAD_PATH = `/${MCP_DOWNLOAD_NAME}`;

export const MCP_INSTALL_CONFIG = `{
  "mcpServers": {
    "fancyfont": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/${MCP_DOWNLOAD_NAME}"]
    }
  }
}
`;
