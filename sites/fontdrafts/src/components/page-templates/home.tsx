// 首页模板:全量生成器 + 全部入口(按 locale 过滤)。h1 聚焦核心关键词。

import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { FancyTextTool } from "@/components/fancy-text-tool";
import { Faq, JsonLd, faqJsonLd, RelatedTools } from "@/components/sections";
import {
  HeroGlyphField,
  PlatformChipInner,
  SquiggleDivider,
  StyleCardGlyph,
  sampleGlyph,
} from "@/components/illustrations";
import { cjkStyles } from "@/lib/cjk-styles";
import { featuredGameTextLinks } from "@/lib/contextual-links";
import { FEATURED_STYLE_SLUGS, hubPath } from "@/lib/hubs";
import { guidesFor, guidePath } from "@/lib/guides";
import { platformPages } from "@/lib/platform-pages";
import { siteName } from "@/lib/site";
import { stylePages } from "@/lib/style-pages";
import { textStyles } from "@/lib/text-styles";
import { getUi } from "@/lib/ui-strings";

const HERO_GLYPHS: Record<Locale, string[]> = {
  en: ["𝓗", "𝔊", "Ⓗ", "Ｈ", "ʇxǝʇ"],
  "zh-cn": ["𝓗", "꧁字꧂", "Ⓗ", "『字』", "Ｈ"],
  es: ["𝓗", "𝔊", "Ⓗ", "Ｈ", "⋆luna⋆"],
  "pt-br": ["𝓗", "𝔊", "Ⓗ", "Ｈ", "♡sol♡"],
  de: ["𝓗", "𝔊", "Ⓗ", "Ｈ", "✧traum✧"],
};

export function HomePage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  const localeStyles = stylePages.filter((page) => page.copy[locale]);
  const localePlatforms = platformPages.filter((page) => page.copy[locale]);
  // 首页只放精选卡片,完整目录走 /styles/ /platforms/ 中间层页。
  const featuredStyles = FEATURED_STYLE_SLUGS.map((slug) => localeStyles.find((page) => page.slug === slug)).filter(
    (page): page is (typeof localeStyles)[number] => Boolean(page),
  );
  const localeGuides = guidesFor(locale);
  const gameText = featuredGameTextLinks(locale);
  const accent = ["bg-pop-yellow", "bg-pop-pink text-paper", "bg-pop-blue text-paper", "bg-pop-green text-paper"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: localePath(locale, "/"),
          description: ui.home.intro,
        }}
      />
      <JsonLd data={faqJsonLd(ui.home.faq)} />

      {/* Hero(背景字形拼贴) */}
      <section className="relative pt-4 text-center">
        <HeroGlyphField glyphs={HERO_GLYPHS[locale]} />
        <div className="relative">
          <p className="sticker -rotate-2 bg-pop-pink text-paper">{ui.home.badge}</p>
          <h1 className="mt-4 text-3xl leading-tight font-black sm:text-5xl">
            {ui.home.h1}
            <span className="mt-2 block text-lg font-bold text-ink-soft sm:text-xl">{ui.home.h1Sub}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {ui.home.intro}
          </p>
        </div>
      </section>

      {/* 全量生成器(中文装饰网格仅中文站展示) */}
      <section aria-label={ui.home.h1}>
        <FancyTextTool
          locale={locale}
          styleIds={[]}
          placeholder={locale === "zh-cn" ? "你好 FancyFonts" : "Hello FancyFonts"}
          showCjk={locale === "zh-cn"}
        />
      </section>

      {/* 信任条 */}
      <section aria-label={ui.home.stylesHeading} className="mt-12">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card-pop p-4 text-center">
            <p className="text-3xl font-black">{textStyles.length}</p>
            <p className="mt-1 text-sm font-bold text-ink-soft">{ui.home.statStyles}</p>
          </div>
          <div className="card-pop p-4 text-center">
            <p className="text-3xl font-black">{cjkStyles.length}</p>
            <p className="mt-1 text-sm font-bold text-ink-soft">{ui.home.statCjk}</p>
          </div>
          <div className="card-pop p-4 text-center">
            <p className="text-3xl font-black">0</p>
            <p className="mt-1 text-sm font-bold text-ink-soft">{ui.home.statLocal}</p>
          </div>
        </div>
      </section>

      {/* 样式专页 */}
      <section id="styles" aria-labelledby="styles-heading" className="mt-14 scroll-mt-20">
        <h2 id="styles-heading" className="text-2xl font-black">
          {ui.home.stylesHeading}
        </h2>
        <p className="mt-1 text-sm text-ink-soft">{ui.home.stylesIntro}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStyles.map((page, index) => {
            const copy = page.copy[locale]!;
            return (
              <Link
                key={page.slug}
                href={lp(page.slug)}
                className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`sticker -rotate-2 text-xs ${accent[index % 4]}`}>{copy.navName}</span>
                  <StyleCardGlyph page={page} />
                </div>
                <p className="mt-2 font-black group-hover:text-pop-pink">{copy.h1}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{copy.description}</p>
              </Link>
            );
          })}
        </div>
        {localeStyles.length > featuredStyles.length ? (
          <p className="mt-4">
            <Link href={hubPath(locale, "styles")} className="text-sm font-bold underline-offset-2 hover:underline">
              {ui.footerCols.allStyles}
            </Link>
          </p>
        ) : null}
      </section>

      <SquiggleDivider className="mt-14" />

      {/* 平台专页 */}
      <section aria-labelledby="platform-heading" className="mt-10">
        <h2 id="platform-heading" className="text-2xl font-black">
          {ui.home.platformsHeading}
        </h2>
        <p className="mt-1 text-sm text-ink-soft">{ui.home.platformsIntro}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {localePlatforms.slice(0, 8).map((page) => {
            const copy = page.copy[locale]!;
            return (
              <Link
                key={page.slug}
                href={lp(page.slug)}
                className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
              >
                <PlatformChipInner platform={copy.platform} />
                <p className="mt-2 font-black group-hover:text-pop-blue">{copy.navName}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">
                  {ui.home.platformCard} {copy.platform}
                </p>
              </Link>
            );
          })}
        </div>
        <p className="mt-4">
          <Link href={hubPath(locale, "platforms")} className="text-sm font-bold underline-offset-2 hover:underline">
            {ui.footerCols.allPlatforms}
          </Link>
        </p>
      </section>

      {gameText.length > 0 ? (
        <section aria-labelledby="game-text-heading" className="mt-10">
          <h2 id="game-text-heading" className="text-2xl font-black">
            {ui.home.gameTextHeading}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-ink-soft">{ui.home.gameTextIntro}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {gameText.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
              >
                <p className="font-black group-hover:text-pop-pink">{link.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* 指南 */}
      {localeGuides.length > 0 ? (
        <section aria-labelledby="guide-heading" className="mt-14">
          <h2 id="guide-heading" className="text-2xl font-black">
            {ui.home.guidesHeading}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">{ui.home.guidesIntro}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {localeGuides.slice(0, 4).map((guide) => (
              <Link
                key={guide.slug}
                href={guidePath(locale, guide.slug)}
                className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
              >
                <p className="font-black group-hover:text-pop-green">{guide.navName}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{guide.description}</p>
              </Link>
            ))}
          </div>
          {localeGuides.length > 4 ? (
            <p className="mt-4">
              <Link href={guidePath(locale, "")} className="text-sm font-bold underline-offset-2 hover:underline">
                {ui.home.guidesAll}
              </Link>
            </p>
          ) : null}
        </section>
      ) : null}

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mt-14">
        <h2 id="faq-heading" className="text-2xl font-black">
          {ui.home.faqHeading}
        </h2>
        <Faq items={ui.home.faq} />
      </section>

      <RelatedTools heading={ui.home.startHeading} links={ui.home.startLinks} />
    </div>
  );
}
