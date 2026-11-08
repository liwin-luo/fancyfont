import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("de", "terms");

export default function Page() {
  return <LegalPage locale="de" kind="terms" />;
}
