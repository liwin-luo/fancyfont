import { McpPageTemplate } from "@/components/page-templates/mcp";
import { mcpContent } from "@/lib/content/page-mcp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/mcp/", mcpContent.en.meta);

export default function Page() {
  return <McpPageTemplate locale="en" />;
}
