// 各语言路由组的共享壳。每组根 layout 渲染 <html lang>,页面从不重复 header/footer。

import { htmlLang, type Locale } from "@/lib/i18n";
import { getUi } from "@/lib/ui-strings";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildNav, type NavItem } from "@/lib/nav";

export function AppShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const ui = getUi(locale);
  const nav: NavItem[] = buildNav(locale);
  return (
    <html lang={htmlLang[locale]}>
      <body className="bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">
          {ui.skip}
        </a>
        <Header locale={locale} nav={nav} />
        {/* 信息条:装饰性内容对屏幕阅读器隐藏 */}
        <div aria-hidden="true" className="overflow-hidden border-b-2 border-ink bg-pop-blue">
          <div className="ticker-move flex w-max gap-0 py-1 text-xs font-bold whitespace-nowrap text-paper">
            <span className="px-4">{ui.ticker}</span>
            <span className="px-4">{ui.ticker}</span>
          </div>
        </div>
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
