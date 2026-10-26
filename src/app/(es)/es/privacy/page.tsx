import { PrivacyPageTemplate } from "@/components/page-templates/privacy";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/privacy/", privacyContent["es"].meta);

export default function Page() {
  return <PrivacyPageTemplate locale="es" />;
}
