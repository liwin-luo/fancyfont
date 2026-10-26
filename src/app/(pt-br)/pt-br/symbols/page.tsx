import { SymbolsPageTemplate } from "@/components/page-templates/symbols";
import { symbolsContent } from "@/lib/content/page-symbols-privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pt-br", "/symbols/", symbolsContent["pt-br"].meta);

export default function Page() {
  return <SymbolsPageTemplate locale="pt-br" />;
}
