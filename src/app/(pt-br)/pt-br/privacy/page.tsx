import { PrivacyPageTemplate } from "@/components/page-templates/privacy";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pt-br", "/privacy/", privacyContent["pt-br"].meta);

export default function Page() {
  return <PrivacyPageTemplate locale="pt-br" />;
}
