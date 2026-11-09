import { hubMetadata, StylesHubRoute } from "@/app/_shared/handlers";

export const metadata = hubMetadata("en", "styles");

export default function Page() {
  return <StylesHubRoute locale="en" />;
}
