import { hubMetadata, PlatformsHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("pt-br", "platforms");

export default function Page() {
  return <PlatformsHubRoute locale="pt-br" />;
}
