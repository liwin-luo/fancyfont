import { ContactPageTemplate } from "@/components/page-templates/about-contact";
import { contactContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("id", "/contact/", contactContent["id"].meta);

export default function Page() {
  return <ContactPageTemplate locale="id" />;
}
