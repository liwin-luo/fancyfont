import { LegalPageTemplate } from "@/components/page-templates/privacy";
import { termsContent } from "@/lib/content/page-terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("id", "/terms/", termsContent.id.meta);

export default function Page() {
  return <LegalPageTemplate content={termsContent.id} locale="id" path="/terms/" />;
}
