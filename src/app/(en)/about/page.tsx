import { AboutPageTemplate } from "@/components/page-templates/about-contact";
import { aboutContent } from "@/lib/content/page-about-contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/about/", aboutContent["en"].meta);

export default function Page() {
  return <AboutPageTemplate locale="en" />;
}
