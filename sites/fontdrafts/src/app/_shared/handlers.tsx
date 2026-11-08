// 共享路由处理器:四个语言组用同一套页面工厂,路由文件只传 locale。
// generateStaticParams 按语言过滤注册表,保证 SSG 只产出该语言存在的页面。

import { notFound } from "next/navigation";
import { PlatformsHubPage, StylesHubPage } from "@/components/page-templates/hubs";
import { HomePage } from "@/components/page-templates/home";
import { GuidePageTemplate } from "@/components/page-templates/guide";
import { ProsePageTemplate } from "@/components/page-templates/prose";
import { legalContent } from "@/lib/content/legal";
import { guidesFor, getGuide, guidePath, guideBase } from "@/lib/guides";
import { getPlatformPageFor, platformPages } from "@/lib/platform-pages";
import { getStylePageFor, stylePages } from "@/lib/style-pages";
import { pageMetadata } from "@/lib/metadata";
import { localePath, ACTIVE_LOCALES, type Locale } from "@/lib/i18n";
import { JsonLd, Breadcrumbs } from "@/components/sections";
import { breadcrumbJsonLd } from "@/lib/schema";
import Link from "next/link";
import { getUi } from "@/lib/ui-strings";

/** [slug] 页的静态参数:样式页 + 平台页,过滤到该语言。 */
export function slugParams(locale: Locale): { slug: string }[] {
  return [
    ...stylePages.filter((page) => page.copy[locale]).map((page) => ({ slug: page.slug })),
    ...platformPages.filter((page) => page.copy[locale]).map((page) => ({ slug: page.slug })),
  ];
}

/** 无 AI 插图页面的专属 OG 图(scripts/gen-og.sh 生成,其余页走全站默认 /og.png)。 */
const OG_SPECIAL: Record<string, string> = {
  "medieval-fonts": "/og-medieval.png",
  "japanese-font-generator": "/og-japanese.png",
  "korean-font-generator": "/og-korean.png",
};

function ogForPage(slug: string, art?: string): { ogImage?: string } {
  const ogImage = art ?? OG_SPECIAL[slug];
  return ogImage ? { ogImage } : {};
}

export async function slugMetadata(locale: Locale, slug: string) {
  const stylePage = getStylePageFor(slug, locale);
  if (stylePage) {
    const copy = stylePage.copy[locale]!;
    const siblings = stylePageLocales(stylePage);
    return pageMetadata(
      locale,
      `/${slug}/`,
      { title: copy.title, description: copy.description },
      siblings,
      undefined,
      ogForPage(slug, stylePage.theme?.art),
    );
  }
  const platformPage = getPlatformPageFor(slug, locale);
  if (!platformPage) return {};
  const copy = platformPage.copy[locale]!;
  return pageMetadata(
    locale,
    `/${slug}/`,
    { title: copy.title, description: copy.description },
    platformPageLocales(platformPage),
    undefined,
    ogForPage(slug, platformPage.theme?.art),
  );
}

export async function SlugPage({ locale, slug }: { locale: Locale; slug: string }) {
  const stylePage = getStylePageFor(slug, locale);
  if (stylePage) return <StylePageTemplate locale={locale} page={stylePage} />;
  const platformPage = getPlatformPageFor(slug, locale);
  if (platformPage) return <PlatformPageTemplate locale={locale} page={platformPage} />;
  notFound();
}

import { StylePageTemplate } from "@/components/page-templates/style-page";
import { PlatformPageTemplate } from "@/components/page-templates/platform-page";

import { stylePageLocales } from "@/lib/style-pages";
import { platformPageLocales } from "@/lib/platform-pages";

/** 指南索引页。 */
export function GuideIndexPage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const guides = guidesFor(locale);
  const base = guideBase(locale);
  const accent = ["bg-pop-yellow", "bg-pop-pink text-paper", "bg-pop-blue text-paper", "bg-pop-green text-paper"];
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.breadcrumb.home, path: localePath(locale, "/") },
          { name: ui.breadcrumb.guides, path: base + "/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: ui.breadcrumb.home, href: localePath(locale, "/") },
          { name: ui.breadcrumb.guides, href: base + "/" },
        ]}
      />
      <h1 className="mt-4 text-3xl font-black sm:text-4xl">{ui.guideIndex.h1}</h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{ui.guideIndex.intro}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {guides.map((guide, index) => (
          <li key={guide.slug}>
            <Link
              href={guidePath(locale, guide.slug)}
              className="card-pop group block h-full p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
            >
              <span className={`sticker -rotate-2 text-xs ${accent[index % 4]}`}>
                {ui.guideIndex.cardLabel} {index + 1}
              </span>
              <p className="mt-2 font-black group-hover:text-pop-green">{guide.navName}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{guide.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function guideIndexMetadata(locale: Locale) {
  const ui = getUi(locale);
  // 指南索引路径按语言不同(/learn/、/zh/zhinan/、/guia/),hreflang 逐语言映射。
  const pathsByLocale = Object.fromEntries(
    ACTIVE_LOCALES.map((l) => [l, `${guideBase(l)}/`]),
  ) as Partial<Record<Locale, string>>;
  return pageMetadata(
    locale,
    `${guideBase(locale)}/`,
    {
      title: `${ui.guideIndex.h1} — ${ui.home.guidesIntro}`,
      description: ui.guideIndex.intro,
    },
    ACTIVE_LOCALES,
    pathsByLocale,
  );
}

export function guidePageMetadata(locale: Locale, slug: string) {
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  // 同主题指南 slug 跨语言一致;只为真实存在该篇的语言输出 alternate,
  // 且路径取各语言自己的指南前缀,避免 hreflang 指向 404。
  const siblings = ACTIVE_LOCALES.filter((l) => getGuide(l, slug));
  const pathsByLocale = Object.fromEntries(
    siblings.map((l) => [l, guidePath(l, slug)]),
  ) as Partial<Record<Locale, string>>;
  return pageMetadata(
    locale,
    guidePath(locale, slug),
    {
      title: guide.title,
      description: guide.description,
    },
    siblings,
    pathsByLocale,
    guide.heroImage ? { ogImage: guide.heroImage.src } : undefined,
  );
}

export async function GuideArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  return <GuidePageTemplate locale={locale} guide={guide} />;
}

export function guideParams(locale: Locale): { slug: string }[] {
  return guidesFor(locale).map((guide) => ({ slug: guide.slug }));
}

/** 法务/信息页。 */
export function LegalPage({ locale, kind }: { locale: Locale; kind: "about" | "contact" | "privacy" | "terms" }) {
  return <ProsePageTemplate locale={locale} content={legalContent[locale][kind]} />;
}

export function legalMetadata(locale: Locale, kind: "about" | "contact" | "privacy" | "terms") {
  const content = legalContent[locale][kind];
  // title 用一次品牌位(h1 里有 "About FancyFonts" 会造成重复);desc 取导语首句。
  const firstSentence = (content.intro?.[0] ?? content.h1).split(/(?<=[.。!!?])\s/)[0] ?? content.h1;
  const description = firstSentence.length > 155 ? `${firstSentence.slice(0, 152).trimEnd()}…` : firstSentence;
  return pageMetadata(locale, `/${kind}/`, {
    title: `${content.navName} — ${siteName}`,
    description,
  });
}

import { siteName } from "@/lib/site";

/** 404 页。 */
export function NotFoundPage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="sticker -rotate-2 bg-pop-pink text-paper">{ui.notFound.badge}</p>
      <h1 className="mt-4 text-3xl font-black sm:text-4xl">{ui.notFound.h1}</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{ui.notFound.body}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href={localePath(locale, "/")} className="btn-pop">
          {ui.notFound.back}
        </Link>
        <Link href={lp("decorated-nicknames")} className="btn-pop-secondary">
          {ui.notFound.secondary}
        </Link>
      </div>
    </div>
  );
}

// 首页元数据:按 FONT-TDK-01/02/05/06 的短标题(≤60)+ 含数字描述(≤160)结构,
// 数量从引擎动态取,扩容不再过期。
import { textStyles } from "@/lib/text-styles";
import { cjkStyles } from "@/lib/cjk-styles";
const HOME_SEO: Record<Locale, { title: string; description: string }> = {
  en: {
    title: `Fancy Font Generator — ${textStyles.length} Styles & ${cjkStyles.length} Nickname Frames`,
    description:
      `Type once: ${textStyles.length} fancy font styles for letters & numbers plus ${cjkStyles.length} nickname decorations. Update as you type, copy in one tap. Runs locally — nothing uploaded.`,
  },
  "zh-cn": {
    title: `花式字体生成器 — ${textStyles.length} 种字体样式 + ${cjkStyles.length} 种昵称装饰`,
    description:
      `输入即出结果:${textStyles.length} 种英文字体样式、${cjkStyles.length} 种中文昵称装饰,实时预览、一键复制。浏览器本地转换,文本不上传,免注册。`,
  },
  es: {
    title: `Generador de letras bonitas — ${textStyles.length} estilos y ${cjkStyles.length} marcos`,
    description:
      `Escribe una vez: ${textStyles.length} estilos fancy para letras y números y ${cjkStyles.length} marcos para apodos. Se actualizan al escribir, copia en un toque. Todo local en tu navegador.`,
  },
  "pt-br": {
    title: `Gerador de letras diferentes — ${textStyles.length} estilos e ${cjkStyles.length} molduras`,
    description:
      `Digite uma vez: ${textStyles.length} estilos fancy para letras e números e ${cjkStyles.length} molduras para apelidos. Atualizam ao digitar, copie num toque. Tudo local no navegador.`,
  },
  de: {
    title: `Zierfont Generator — ${textStyles.length} Stile & ${cjkStyles.length} Nickname-Rahmen`,
    description: `Einmal tippen: ${textStyles.length} Zierfonts für Buchstaben & Zahlen plus ${cjkStyles.length} Nickname-Dekorationen. Live-Vorschau, ein Tipp zum Kopieren. Läuft lokal — nichts wird hochgeladen.`,
  },
};

/** 中间层 hub 页:分类目录(styles/platforms),四语言全有。 */
export function hubMetadata(locale: Locale, kind: "styles" | "platforms") {
  const meta = kind === "styles" ? getUi(locale).hub.styles : getUi(locale).hub.platforms;
  return pageMetadata(locale, `/${kind}/`, { title: meta.title, description: meta.description }, ACTIVE_LOCALES);
}

export function StylesHubRoute({ locale }: { locale: Locale }) {
  return <StylesHubPage locale={locale} />;
}

export function PlatformsHubRoute({ locale }: { locale: Locale }) {
  return <PlatformsHubPage locale={locale} />;
}

export function homeMetadata(locale: Locale) {
  return pageMetadata(locale, "/", HOME_SEO[locale], ACTIVE_LOCALES);
}
