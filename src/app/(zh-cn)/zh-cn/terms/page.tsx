import { LegalPageTemplate } from "@/components/page-templates/privacy";
import { termsContent } from "@/lib/content/page-terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("zh-cn", "/terms/", termsContent["zh-cn"].meta);

export default function Page() {
  return <LegalPageTemplate content={termsContent["zh-cn"]} locale="zh-cn" path="/terms/" />;
}
