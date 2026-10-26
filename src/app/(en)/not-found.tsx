import { NotFoundTemplate, notFoundMetadata } from "@/components/page-templates/not-found";

export const metadata = notFoundMetadata.en;

export default function NotFoundPage() {
  return <NotFoundTemplate locale="en" />;
}
