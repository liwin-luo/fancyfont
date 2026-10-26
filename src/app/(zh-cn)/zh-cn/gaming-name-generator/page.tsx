import { GamingPageTemplate } from "@/components/page-templates/gaming";
import { gamingContent } from "@/lib/content/page-gaming";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "zh-cn",
  "/gaming-name-generator/",
  gamingContent["zh-cn"].meta,
);

export default function Page() {
  return <GamingPageTemplate locale="zh-cn" />;
}
