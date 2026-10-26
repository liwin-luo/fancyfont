import { llmsTxt } from "@/lib/llms";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(getSiteUrl()), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400",
    },
  });
}
