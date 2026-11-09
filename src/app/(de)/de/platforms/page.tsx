import { hubMetadata, PlatformsHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("de", "platforms");

export default function Page() {
  return <PlatformsHubRoute locale="de" />;
}
