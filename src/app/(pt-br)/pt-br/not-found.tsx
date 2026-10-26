import { NotFoundTemplate, notFoundMetadata } from "@/components/page-templates/not-found";

export const metadata = notFoundMetadata["pt-br"];

export default function NotFoundPage() {
  return <NotFoundTemplate locale="pt-br" />;
}
