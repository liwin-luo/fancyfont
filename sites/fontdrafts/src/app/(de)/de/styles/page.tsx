import { hubMetadata, StylesHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("de", "styles");

export default function Page() {
  return <StylesHubRoute locale="de" />;
}
