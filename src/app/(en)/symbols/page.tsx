import { SymbolsPageTemplate } from "@/components/page-templates/symbols";
import { symbolsContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/symbols/", symbolsContent["en"].meta);

export default function Page() {
  return <SymbolsPageTemplate locale="en" />;
}
