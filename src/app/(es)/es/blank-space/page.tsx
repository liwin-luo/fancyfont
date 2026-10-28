import { BlankSpacePageTemplate } from "@/components/page-templates/blank-space";
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/blank-space/", blankSpaceContent.es.meta);

export default function Page() {
  return <BlankSpacePageTemplate locale="es" />;
}
