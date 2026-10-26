import { McpPageTemplate } from "@/components/page-templates/mcp";
import { mcpContent } from "@/lib/content/page-mcp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pt-br", "/mcp/", mcpContent["pt-br"].meta);

export default function Page() {
  return <McpPageTemplate locale="pt-br" />;
}
