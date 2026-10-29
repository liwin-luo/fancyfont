import { AboutPageTemplate } from "@/components/page-templates/about-contact";
import { aboutContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/about/", aboutContent["es"].meta);

export default function Page() {
  return <AboutPageTemplate locale="es" />;
}
