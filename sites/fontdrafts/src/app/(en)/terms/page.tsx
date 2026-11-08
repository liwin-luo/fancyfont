import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("en", "terms");

export default function Page() {
  return <LegalPage locale="en" kind="terms" />;
}
