import { getSiteUrl } from "@/lib/site";
import { llmsFullTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(getSiteUrl()), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
