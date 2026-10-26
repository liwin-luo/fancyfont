import { FancyPageTemplate } from "@/components/page-templates/fancy";
import { fancyContent } from "@/lib/content/page-fancy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "zh-cn",
  "/fancy-text-generator/",
  fancyContent["zh-cn"].meta,
);

export default function Page() {
  return <FancyPageTemplate locale="zh-cn" />;
}
