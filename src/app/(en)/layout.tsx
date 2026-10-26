import { AppShell } from "@/components/app-shell";
import { layoutMetadata, viewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = layoutMetadata("en");

export { viewport };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AppShell locale="en">{children}</AppShell>;
}
