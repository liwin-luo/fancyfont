import Script from "next/script";
import type { Locale } from "@/lib/i18n";
import { htmlLang } from "@/lib/i18n";
import { measurementIds } from "@/lib/analytics";
import { Header } from "@/components/header";
import { PixelHeart, PixelSpark, PixelStar } from "@/components/pixel-star";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast";
import { LocaleProvider } from "@/components/locale-context";

/**
 * Shared shell for the three locale route groups. Each group's root layout
 * renders this with its own locale so <html lang> is always correct.
 */
export function AppShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const { ga, clarity } = measurementIds();
  return (
    <html lang={htmlLang[locale]}>
      <body className="bg-page text-ink-900 antialiased">
        {ga ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        ) : null}
        {clarity ? (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}
          </Script>
        ) : null}
        <LocaleProvider locale={locale}>
          <ToastProvider>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <Header locale={locale} />
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 hidden min-[1280px]:block">
              <PixelHeart className="pixel-float absolute top-[26%] left-3 h-4 w-4 text-pixel-pink" />
              <PixelSpark className="pixel-float absolute top-[42%] right-3 h-4 w-4 text-pixel-lime [animation-delay:600ms]" />
              <PixelStar className="pixel-float absolute top-[64%] left-4 h-3 w-3 text-brand-300 [animation-delay:1.1s]" />
              <PixelHeart className="pixel-float absolute top-[78%] right-5 h-3 w-3 text-pixel-blue [animation-delay:1.5s]" />
            </div>
            <main id="main">{children}</main>
            <Footer locale={locale} />
          </ToastProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
