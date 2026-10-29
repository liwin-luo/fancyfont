import { ContactPageTemplate } from "@/components/page-templates/about-contact";
import { contactContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/contact/", contactContent["en"].meta);

export default function Page() {
  return <ContactPageTemplate locale="en" />;
}
