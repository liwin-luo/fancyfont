import { AboutPageTemplate } from "@/components/page-templates/about-contact";
import { aboutContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("zh-cn", "/about/", aboutContent["zh-cn"].meta);

export default function Page() {
  return <AboutPageTemplate locale="zh-cn" />;
}
