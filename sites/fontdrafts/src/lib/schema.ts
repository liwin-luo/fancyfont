// 共享 schema.org 结构:发布者身份与内容时间戳(who/when),再按页面类型
// 组合出 WebSite / WebApplication / FAQPage / BreadcrumbList / Article。
// 每页可见内容与 JSON-LD 保持一致——只标注页面上真实存在的东西。

import { contactEmail, contentPublished, contentUpdated, getSiteUrl, siteName } from "./site";

export function workMeta(): {
  author: { "@type": "Organization"; name: string; url: string; email: string };
  datePublished: string;
  dateModified: string;
} {
  return {
    // About 页是爬虫可以验证的发布者身份,schema 指向它而不是裸域名。
    author: {
      "@type": "Organization",
      name: siteName,
      url: `${getSiteUrl()}/about/`,
      email: contactEmail,
    },
    datePublished: contentPublished,
    dateModified: contentUpdated,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): object {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/** 操作步骤页(样式/平台专页)的 HowTo:步骤与页面可见的步骤列表一致。 */
export function howToJsonLd(name: string, steps: string[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };
}
