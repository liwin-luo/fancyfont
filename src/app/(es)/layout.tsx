import { AppShell } from "@/components/app-shell";
import { layoutMetadata, viewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = layoutMetadata("es");

export { viewport };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AppShell locale="es">{children}</AppShell>;
}
