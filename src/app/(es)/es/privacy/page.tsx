import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("es", "privacy");

export default function Page() {
  return <LegalPage locale="es" kind="privacy" />;
}
