import { HomePage } from "@/components/page-templates/home";
import { homeMetadata } from "@/app/_shared/handlers";

export const metadata = homeMetadata("pt-br");

export default function Page() {
  return <HomePage locale="pt-br" />;
}
