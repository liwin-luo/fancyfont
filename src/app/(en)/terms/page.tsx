import { LegalPageTemplate } from "@/components/page-templates/privacy";
import { termsContent } from "@/lib/content/page-terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/terms/", termsContent.en.meta);

export default function Page() {
  return <LegalPageTemplate content={termsContent.en} locale="en" path="/terms/" />;
}
