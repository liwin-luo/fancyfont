import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("zh-cn", "terms");

export default function Page() {
  return <LegalPage locale="zh-cn" kind="terms" />;
}
