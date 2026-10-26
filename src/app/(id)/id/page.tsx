import { HomePageTemplate } from "@/components/page-templates/home";
import { homeContent } from "@/lib/content/page-home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("id", "/", homeContent["id"].meta);

export default function Page() {
  return <HomePageTemplate locale="id" />;
}
