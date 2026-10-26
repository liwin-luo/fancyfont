import { PrivacyPageTemplate } from "@/components/page-templates/privacy";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("zh-cn", "/privacy/", privacyContent["zh-cn"].meta);

export default function Page() {
  return <PrivacyPageTemplate locale="zh-cn" />;
}
