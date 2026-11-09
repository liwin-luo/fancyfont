import { GuideIndexPage, guideIndexMetadata } from "@/app/_shared/handlers";

export const metadata = guideIndexMetadata("zh-cn");

export default function Page() {
  return <GuideIndexPage locale="zh-cn" />;
}
