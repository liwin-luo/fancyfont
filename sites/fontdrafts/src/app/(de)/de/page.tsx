import { HomePage } from "@/components/page-templates/home";
import { homeMetadata } from "@/app/_shared/handlers";

export const metadata = homeMetadata("de");

export default function Page() {
  return <HomePage locale="de" />;
}
