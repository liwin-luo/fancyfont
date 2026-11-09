import { getSiteUrl } from "@/lib/site";
import { llmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(getSiteUrl()), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
