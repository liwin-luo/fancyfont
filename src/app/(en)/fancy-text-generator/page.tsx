import { FancyPageTemplate } from "@/components/page-templates/fancy";
import { fancyContent } from "@/lib/content/page-fancy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/fancy-text-generator/",
  fancyContent["en"].meta,
);

export default function Page() {
  return <FancyPageTemplate locale="en" />;
}
