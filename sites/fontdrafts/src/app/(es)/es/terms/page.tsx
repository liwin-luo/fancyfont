import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("es", "terms");

export default function Page() {
  return <LegalPage locale="es" kind="terms" />;
}
