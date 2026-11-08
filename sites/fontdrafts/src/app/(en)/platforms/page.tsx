import { hubMetadata, PlatformsHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("en", "platforms");

export default function Page() {
  return <PlatformsHubRoute locale="en" />;
}
