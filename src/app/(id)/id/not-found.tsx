import { NotFoundTemplate, notFoundMetadata } from "@/components/page-templates/not-found";

export const metadata = notFoundMetadata.id;

export default function NotFoundPage() {
  return <NotFoundTemplate locale="id" />;
}
