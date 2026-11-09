import { hubMetadata, StylesHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("pt-br", "styles");

export default function Page() {
  return <StylesHubRoute locale="pt-br" />;
}
