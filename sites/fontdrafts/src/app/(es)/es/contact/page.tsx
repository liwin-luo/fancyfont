import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("es", "contact");

export default function Page() {
  return <LegalPage locale="es" kind="contact" />;
}
