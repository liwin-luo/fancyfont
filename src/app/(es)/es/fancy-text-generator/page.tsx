import { FancyPageTemplate } from "@/components/page-templates/fancy";
import { fancyContent } from "@/lib/content/page-fancy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "es",
  "/fancy-text-generator/",
  fancyContent["es"].meta,
);

export default function Page() {
  return <FancyPageTemplate locale="es" />;
}
