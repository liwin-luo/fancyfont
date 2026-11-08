import { hubMetadata, StylesHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("zh-cn", "styles");

export default function Page() {
  return <StylesHubRoute locale="zh-cn" />;
}
