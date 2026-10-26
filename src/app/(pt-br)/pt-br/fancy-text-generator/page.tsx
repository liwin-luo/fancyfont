import { FancyPageTemplate } from "@/components/page-templates/fancy";
import { fancyContent } from "@/lib/content/page-fancy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "pt-br",
  "/fancy-text-generator/",
  fancyContent["pt-br"].meta,
);

export default function Page() {
  return <FancyPageTemplate locale="pt-br" />;
}
