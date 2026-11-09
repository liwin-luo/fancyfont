import { GuideIndexPage, guideIndexMetadata } from "@/app/_shared/handlers";

export const metadata = guideIndexMetadata("pt-br");

export default function Page() {
  return <GuideIndexPage locale="pt-br" />;
}
