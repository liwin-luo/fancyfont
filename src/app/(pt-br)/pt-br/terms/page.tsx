import { LegalPageTemplate } from "@/components/page-templates/privacy";
import { termsContent } from "@/lib/content/page-terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pt-br", "/terms/", termsContent["pt-br"].meta);

export default function Page() {
  return <LegalPageTemplate content={termsContent["pt-br"]} locale="pt-br" path="/terms/" />;
}
