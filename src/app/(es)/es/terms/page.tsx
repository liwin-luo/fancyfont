import { LegalPageTemplate } from "@/components/page-templates/privacy";
import { termsContent } from "@/lib/content/page-terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/terms/", termsContent.es.meta);

export default function Page() {
  return <LegalPageTemplate content={termsContent.es} locale="es" path="/terms/" />;
}
