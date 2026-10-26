import type { Locale } from "@/lib/i18n";
import { htmlLang } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast";
import { LocaleProvider } from "@/components/locale-context";

/**
 * Shared shell for the three locale route groups. Each group's root layout
 * renders this with its own locale so <html lang> is always correct.
 */
export function AppShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={htmlLang[locale]}>
      <body className="bg-page text-ink-900 antialiased">
        <LocaleProvider locale={locale}>
          <ToastProvider>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <Header locale={locale} />
            <main id="main">{children}</main>
            <Footer locale={locale} />
          </ToastProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
