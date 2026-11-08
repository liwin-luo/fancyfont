import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("de", "privacy");

export default function Page() {
  return <LegalPage locale="de" kind="privacy" />;
}
