import Link from "next/link";
import { BioTool } from "@/components/bio-tool";
import { PlatformTextTool } from "@/components/platform-text-tool";
import { CodScenarioKits } from "@/components/cod-scenario-kits";
import { GamingNameTool } from "@/components/gaming-name-tool";
import {
  CompatNote,
  Faq,
  JsonLd,
  LinkedText,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { PlatformChips } from "@/components/platform-chips";
import { PlatformMark, platformTone } from "@/components/platform-mark";
import { codExtra, codPageFaq } from "@/lib/content/cod-extra";
import { coreFocus, type CorePage } from "@/lib/content/core-focus";
import { robloxExtra, robloxPageFaq } from "@/lib/content/roblox-extra";
import { relatedToolLinks, type PlatformPageDef } from "@/lib/platform-pages";
import { guidePath, guidesForPage } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site";
import { workMeta } from "@/lib/schema";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

function textSteps(locale: Locale, platform: string): [string, string, string] {
  if (locale === "en") {
    return [
      "Type your text above — styles and presets update as you type.",
      "Copy the look you want, or download it as a PNG to share.",
      `Paste it into your ${platform} profile, then check the result in the app itself.`,
    ];
  }
  if (locale === "es") {
    return [
      "Escribe tu texto arriba — los estilos y presets se actualizan mientras escribes.",
      "Copia el look que quieras o descárgalo como PNG para compartir.",
      `Pégalo en tu perfil de ${platform} y revisa el resultado en la app.`,
    ];
  }
  if (locale === "pt-br") {
    return [
      "Digite seu texto acima — estilos e presets atualizam enquanto você digita.",
      "Copie o visual que quiser ou baixe como PNG para compartilhar.",
      `Cole no seu perfil do ${platform} e confira o resultado no próprio app.`,
    ];
  }
  if (locale === "zh-cn") {
    return [
      "在上方输入你的文字——样式和预设会随输入实时更新。",
      "复制想要的效果，或下载为 PNG 图片分享。",
      `粘贴到你的 ${platform} 资料里，然后回到应用本身确认效果。`,
    ];
  }
  return [
    "Ketik teksmu di atas — gaya dan preset berubah saat kamu mengetik.",
    "Salin tampilan yang kamu mau, atau unduh sebagai PNG untuk dibagikan.",
    `Tempel ke profil ${platform} kamu, lalu cek hasilnya di aplikasinya sendiri.`,
  ];
}

const bioSteps: Record<Locale, [string, string, string]> = {
  en: [
    "Pick a draft. The line breaks are already in it.",
    "Choose a letter style. Symbols on your board are added at the end.",
    "Copy the draft or save a PNG, then paste it into the app and check it there.",
  ],
  es: [
    "Elige un borrador. Los saltos de línea ya están puestos.",
    "Elige un estilo de letra. Los símbolos de tu bandeja se añaden al final.",
    "Copia el borrador o guarda un PNG, pégalo en la app y revísalo allí.",
  ],
  "pt-br": [
    "Escolha um rascunho. As quebras de linha já estão nele.",
    "Escolha um estilo de letra. Os símbolos da sua bandeja entram no final.",
    "Copie o rascunho ou salve um PNG, cole no app e confira lá.",
  ],
  "zh-cn": [
    "选一份草稿，换行已经写好。",
    "选一个字母样式。托盘里的符号会加在末尾。",
    "复制整段或保存 PNG，贴进应用里再看一眼。",
  ],
  id: [
    "Pilih satu draf. Pemisah barisnya sudah ada.",
    "Pilih gaya huruf. Simbol di baki kamu ditambahkan di akhir.",
    "Salin draf atau simpan PNG, tempel ke aplikasinya, lalu cek di sana.",
  ],
};

export function PlatformPageTemplate({ page, locale }: { page: PlatformPageDef; locale: Locale }) {
  const c = page.copy[locale];
  const t = getUi(locale);
  const path = localePath(locale, `/${page.slug}/`);
  const cod = page.slug === "cod-name-generator" ? codExtra[locale] : null;
  const roblox = page.slug === "roblox-name-generator" ? robloxExtra[locale] : null;
  const faq = cod ? codPageFaq(locale, c.faq) : roblox ? robloxPageFaq(locale, c.faq) : c.faq;

  const relatedLinks = [
    ...relatedToolLinks(locale, page.related),
    {
      href: localePath(locale, page.toolMode === "gaming" ? "/symbols/" : "/fancy-text-generator/"),
      title: page.toolMode === "gaming" ? t.tools.symbols : t.tools.fancy,
      description: page.toolMode === "gaming" ? t.sections.browseSymbols : t.sections.browseFancy,
    },
  ];
  // Guides exist only in English, so only the English template links them.
  const pageGuides = locale === "en" ? guidesForPage(page.slug) : [];

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
    ...workMeta(),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(faq)} />

      <PlatformChips locale={locale} active={page.slug} />

      <header className="mt-6 flex items-start gap-3">
        <PlatformMark id={page.preview} className="mt-1 h-11 w-11" />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
          <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
          {page.slug in coreFocus.en && (
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {coreFocus[locale][page.slug as CorePage]}
            </p>
          )}
        </div>
      </header>

      <div className="mt-8">
        {page.toolMode === "gaming" ? (
          <GamingNameTool defaultName={c.defaultText} preview={{ id: page.preview, platform: page.platform }} />
        ) : page.bioMode && c.bios ? (
          <BioTool
            platformId={page.preview}
            platform={page.platform}
            templates={c.bios}
            styles={page.featuredStyles}
          />
        ) : (
          <PlatformTextTool
            platform={page.platform}
            preview={page.preview}
            defaultText={c.defaultText}
            featuredStyles={page.featuredStyles}
            presets={c.presets}
            pinnedPreview={c.pinnedPreview}
          />
        )}
      </div>

      {cod ? <CodScenarioKits copy={cod.kits} defaultName={c.defaultText} /> : null}

      <CompatNote locale={locale} />

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-ink-900">
          {t.sections.howToUse}
        </h2>
        <Steps items={page.bioMode ? bioSteps[locale] : textSteps(locale, page.platform)} />
      </section>

      <section className="mt-12" aria-labelledby="guidance-heading">
        <h2 id="guidance-heading" className="text-xl font-bold text-ink-900">
          {t.sections.onPlatforms}
        </h2>
        <div className={`mt-4 gap-3 ${page.slug === "roblox-name-generator" ? "grid sm:grid-cols-2" : "space-y-3"}`}>
          {c.guidance.map((item, index) => (
            <div
              key={item.label}
              className={`rounded-xl border border-line bg-surface p-4 ${
                page.slug === "roblox-name-generator" && index > 1 ? "sm:col-span-2" : ""
              }`}
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

      {pageGuides.length > 0 && (
        <section className="mt-12" aria-labelledby="guides-heading">
          <h2 id="guides-heading" className="text-xl font-bold text-ink-900">
            Related guides
          </h2>
          <div className="mt-4 space-y-3">
            {pageGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guidePath(guide.slug)}
                className="card group block p-4 transition-colors hover:border-brand-300"
              >
                <p className="font-semibold text-ink-900 group-hover:text-brand-700">{guide.h1}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {cod ? (
        <section className="mt-12" aria-labelledby="cod-safety-heading">
          <h2 id="cod-safety-heading" className="text-xl font-bold text-ink-900">
            {cod.safety.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            <LinkedText text={cod.safety.body} />
          </p>
        </section>
      ) : null}

      {roblox ? (
        <section className="mt-12" aria-labelledby="roblox-safety-heading">
          <h2 id="roblox-safety-heading" className="text-xl font-bold text-ink-900">
            {roblox.safety.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            <LinkedText text={roblox.safety.body} />
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {roblox.berryBefore}
            <Link
              href={localePath(locale, "/berry-avenue-fonts/")}
              className="font-medium text-brand-700 underline-offset-2 hover:underline"
            >
              {roblox.berryLabel}
            </Link>
            {roblox.berryAfter}
          </p>
        </section>
      ) : null}

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-bold text-ink-900">
          {t.sections.faq}
        </h2>
        <Faq items={faq} />
      </section>

      <p className="mt-10 text-center">
        <Link href={localePath(locale, "/")} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          {t.sections.exploreAll}
        </Link>
      </p>
    </div>
  );
}
