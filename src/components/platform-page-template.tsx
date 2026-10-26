import Link from "next/link";
import { PlatformTextTool } from "@/components/platform-text-tool";
import { GamingNameTool } from "@/components/gaming-name-tool";
import {
  CompatNote,
  Faq,
  JsonLd,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { PlatformChips } from "@/components/platform-chips";
import { PlatformMark, platformTone } from "@/components/platform-mark";
import { relatedToolLinks, type PlatformPageDef } from "@/lib/platform-pages";
import { getSiteUrl } from "@/lib/site";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function PlatformPageTemplate({ page, locale }: { page: PlatformPageDef; locale: Locale }) {
  const c = page.copy[locale];
  const t = getUi(locale);
  const path = localePath(locale, `/${page.slug}/`);

  const relatedLinks = [
    ...relatedToolLinks(locale, page.related),
    {
      href: localePath(locale, page.toolMode === "gaming" ? "/symbols/" : "/fancy-text-generator/"),
      title: page.toolMode === "gaming" ? t.tools.symbols : t.tools.fancy,
      description: page.toolMode === "gaming" ? t.sections.browseSymbols : t.sections.browseFancy,
    },
  ];

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: c.h1,
    url: `${siteUrl}${path}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description: c.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      <PlatformChips locale={locale} active={page.slug} />

      <header className="mt-6 flex items-start gap-3">
        <PlatformMark id={page.preview} className="mt-1 h-11 w-11" />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
          <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
        </div>
      </header>

      <div className="mt-8">
        {page.toolMode === "gaming" ? (
          <GamingNameTool defaultName={c.defaultText} preview={{ id: page.preview, platform: page.platform }} />
        ) : (
          <PlatformTextTool
            platform={page.platform}
            preview={page.preview}
            defaultText={c.defaultText}
            featuredStyles={page.featuredStyles}
            presets={c.presets}
          />
        )}
      </div>

      <CompatNote locale={locale} />

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-ink-900">
          {t.sections.howToUse}
        </h2>
        <Steps
          items={
            locale === "en"
              ? [
                  "Type your text above — styles and presets update as you type.",
                  "Copy the look you want, or download it as a PNG to share.",
                  `Paste it into your ${page.platform} profile, then check the result in the app itself.`,
                ]
              : locale === "es"
                ? [
                    "Escribe tu texto arriba — los estilos y presets se actualizan mientras escribes.",
                    "Copia el look que quieras o descárgalo como PNG para compartir.",
                    `Pégalo en tu perfil de ${page.platform} y revisa el resultado en la app.`,
                  ]
              : locale === "pt-br"
                ? [
                    "Digite seu texto acima — estilos e presets atualizam enquanto você digita.",
                    "Copie o visual que quiser ou baixe como PNG para compartilhar.",
                    `Cole no seu perfil do ${page.platform} e confira o resultado no próprio app.`,
                  ]
              : locale === "zh-cn"
                ? [
                    "在上方输入你的文字——样式和预设会随输入实时更新。",
                    "复制想要的效果，或下载为 PNG 图片分享。",
                    `粘贴到你的 ${page.platform} 资料里，然后回到应用本身确认效果。`,
                  ]
                : [
                    "Ketik teksmu di atas — gaya dan preset berubah saat kamu mengetik.",
                    "Salin tampilan yang kamu mau, atau unduh sebagai PNG untuk dibagikan.",
                    `Tempel ke profil ${page.platform} kamu, lalu cek hasilnya di aplikasinya sendiri.`,
                  ]
          }
        />
      </section>

      <section className="mt-12" aria-labelledby="guidance-heading">
        <h2 id="guidance-heading" className="text-xl font-bold text-ink-900">
          {t.sections.onPlatforms}
        </h2>
        <div className="mt-4 space-y-3">
          {c.guidance.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-line bg-surface p-4"
              style={{ borderTopColor: platformTone[page.preview].bg, borderTopWidth: 3 }}
            >
              <p className="font-semibold text-ink-900">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">{c.compatNote}</p>
      </section>

      <RelatedTools locale={locale} links={relatedLinks} />

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-bold text-ink-900">
          {t.sections.faq}
        </h2>
        <Faq items={c.faq} />
      </section>

      <p className="mt-10 text-center">
        <Link href={localePath(locale, "/")} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          {t.sections.exploreAll}
        </Link>
      </p>
    </div>
  );
}
