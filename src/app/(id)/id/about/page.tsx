import { AboutPageTemplate } from "@/components/page-templates/about-contact";
import { aboutContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("id", "/about/", aboutContent["id"].meta);

export default function Page() {
  return <AboutPageTemplate locale="id" />;
}
