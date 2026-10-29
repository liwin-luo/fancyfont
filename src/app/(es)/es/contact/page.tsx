import { ContactPageTemplate } from "@/components/page-templates/about-contact";
import { contactContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/contact/", contactContent["es"].meta);

export default function Page() {
  return <ContactPageTemplate locale="es" />;
}
