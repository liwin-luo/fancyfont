import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("en", "privacy");

export default function Page() {
  return <LegalPage locale="en" kind="privacy" />;
}
