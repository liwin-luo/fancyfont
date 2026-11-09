import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("pt-br", "about");

export default function Page() {
  return <LegalPage locale="pt-br" kind="about" />;
}
