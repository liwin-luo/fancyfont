import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("pt-br", "privacy");

export default function Page() {
  return <LegalPage locale="pt-br" kind="privacy" />;
}
