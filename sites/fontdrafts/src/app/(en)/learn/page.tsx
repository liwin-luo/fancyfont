import { GuideIndexPage, guideIndexMetadata } from "@/app/_shared/handlers";

export const metadata = guideIndexMetadata("en");

export default function Page() {
  return <GuideIndexPage locale="en" />;
}
