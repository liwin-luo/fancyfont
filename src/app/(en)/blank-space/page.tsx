import { BlankSpacePageTemplate } from "@/components/page-templates/blank-space";
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/blank-space/", blankSpaceContent.en.meta);

export default function Page() {
  return <BlankSpacePageTemplate locale="en" />;
}
