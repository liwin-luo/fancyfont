import { GamingPageTemplate } from "@/components/page-templates/gaming";
import { gamingContent } from "@/lib/content/page-gaming";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "pt-br",
  "/gaming-name-generator/",
  gamingContent["pt-br"].meta,
);

export default function Page() {
  return <GamingPageTemplate locale="pt-br" />;
}
