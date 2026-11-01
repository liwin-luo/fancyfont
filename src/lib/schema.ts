// Shared schema.org properties for pages treated as CreativeWorks:
// who publishes the site and when the content was first published / last
// revised. Spread into each page's JSON-LD so crawlers see the same
// attribution and freshness signals everywhere.

import { contactEmail, contentPublished, contentUpdated, getSiteUrl, siteName } from "./site";

export function workMeta(): {
  author: { "@type": "Organization"; name: string; url: string; email: string };
  datePublished: string;
  dateModified: string;
} {
  return {
    // The About page is the publisher identity crawlers can verify, so schema
    // points there rather than at the bare domain.
    author: { "@type": "Organization", name: siteName, url: `${getSiteUrl()}/about/`, email: contactEmail },
    datePublished: contentPublished,
    dateModified: contentUpdated,
  };
}
