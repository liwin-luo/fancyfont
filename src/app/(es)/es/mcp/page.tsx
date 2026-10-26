import { McpPageTemplate } from "@/components/page-templates/mcp";
import { mcpContent } from "@/lib/content/page-mcp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/mcp/", mcpContent.es.meta);

export default function Page() {
  return <McpPageTemplate locale="es" />;
}
