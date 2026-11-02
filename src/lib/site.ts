export const siteName = "FancyFont";

/** Public inbox. The mailbox has to exist before the domain is announced. */
export const contactEmail = "hello@fancyfont.tools";

/** Day the site first went public, used as datePublished in structured data. */
export const contentPublished = "2026-10-26";

/** Bump when public pages change so sitemap lastmod stays stable between requests. */
export const contentUpdated = "2026-11-02";

export const ogImagePath = "/og/";
export const ogImageAlt = "FancyFont — stylish Unicode text, gaming names and symbols";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fancyfont.tools").replace(/\/+$/, "");
}
