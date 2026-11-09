import { hubMetadata, StylesHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("es", "styles");

export default function Page() {
  return <StylesHubRoute locale="es" />;
}
