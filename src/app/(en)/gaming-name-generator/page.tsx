import { GamingPageTemplate } from "@/components/page-templates/gaming";
import { gamingContent } from "@/lib/content/page-gaming";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/gaming-name-generator/",
  gamingContent["en"].meta,
);

export default function Page() {
  return <GamingPageTemplate locale="en" />;
}
