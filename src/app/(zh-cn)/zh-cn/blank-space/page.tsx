import { BlankSpacePageTemplate } from "@/components/page-templates/blank-space";
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("zh-cn", "/blank-space/", blankSpaceContent["zh-cn"].meta);

export default function Page() {
  return <BlankSpacePageTemplate locale="zh-cn" />;
}
