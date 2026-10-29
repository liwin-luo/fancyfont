import { AboutPageTemplate } from "@/components/page-templates/about-contact";
import { aboutContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pt-br", "/about/", aboutContent["pt-br"].meta);

export default function Page() {
  return <AboutPageTemplate locale="pt-br" />;
}
