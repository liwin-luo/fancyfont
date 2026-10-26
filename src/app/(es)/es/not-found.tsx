import { NotFoundTemplate, notFoundMetadata } from "@/components/page-templates/not-found";

export const metadata = notFoundMetadata.es;

export default function NotFoundPage() {
  return <NotFoundTemplate locale="es" />;
}
