import { GamingPageTemplate } from "@/components/page-templates/gaming";
import { gamingContent } from "@/lib/content/page-gaming";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "es",
  "/gaming-name-generator/",
  gamingContent["es"].meta,
);

export default function Page() {
  return <GamingPageTemplate locale="es" />;
}
