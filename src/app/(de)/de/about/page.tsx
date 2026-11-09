import { LegalPage, legalMetadata } from "@/app/_shared/handlers";

export const metadata = legalMetadata("de", "about");

export default function Page() {
  return <LegalPage locale="de" kind="about" />;
}
