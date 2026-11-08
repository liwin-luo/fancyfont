import { hubMetadata, PlatformsHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("es", "platforms");

export default function Page() {
  return <PlatformsHubRoute locale="es" />;
}
