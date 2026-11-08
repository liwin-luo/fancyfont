import { hubMetadata, PlatformsHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("zh-cn", "platforms");

export default function Page() {
  return <PlatformsHubRoute locale="zh-cn" />;
}
