// 站点身份常量。品牌与域名当前是占位符:上线前把 NEXT_PUBLIC_SITE_URL
// 设为真实域名(或在下方 fallback 一处修改),并同步替换品牌名。
// 全站 canonical / sitemap / robots / JSON-LD 都从 getSiteUrl() 取值。

export const siteName = "FancyFont";

/** 公开收件箱。域名公布前邮箱必须真实存在。 */
export const contactEmail = "hello@fancyfont.tools";

/** 站点首次公开日,作为结构化数据的 datePublished。 */
export const contentPublished = "2026-11-07";

/** 公开页面内容变更时更新,保证 sitemap lastmod 在多次请求间稳定。 */
export const contentUpdated = "2026-11-07";

export const ogImagePath = "/og.png";
export const ogImageAlt = "FancyFont — 花式字体生成器,复制即用的 Unicode 文字样式";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fancyfont.tools").replace(/\/+$/, "");
}
