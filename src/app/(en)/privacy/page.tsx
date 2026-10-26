import { PrivacyPageTemplate } from "@/components/page-templates/privacy";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/privacy/", privacyContent["en"].meta);

export default function Page() {
  return <PrivacyPageTemplate locale="en" />;
}
