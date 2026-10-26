import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { Faq, JsonLd, faqJsonLd } from "@/components/sections";
import { mcpContent } from "@/lib/content/page-mcp";
import { localePath, type Locale } from "@/lib/i18n";
import { MCP_DOWNLOAD_NAME, MCP_DOWNLOAD_PATH, MCP_INSTALL_CONFIG } from "@/mcp/install";
import { getUi } from "@/lib/ui-strings";

export function McpPageTemplate({ locale }: { locale: Locale }) {
  const c = mcpContent[locale];
  const t = getUi(locale);
  const links = [
    { href: "/fancy-text-generator/", label: t.tools.fancy },
    { href: "/gaming-name-generator/", label: t.tools.gaming },
    { href: "/symbols/", label: t.tools.symbols },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={faqJsonLd(c.faq)} />
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-600">{c.intro}</p>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.installHeading}</h2>
      <a href={MCP_DOWNLOAD_PATH} download={MCP_DOWNLOAD_NAME} className="btn-primary mt-4 inline-flex">
        {c.downloadLabel}
      </a>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-700">
        {c.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="mt-4 flex justify-end">
        <CopyButton text={MCP_INSTALL_CONFIG} label={t.common.copy} />
      </div>
      <pre className="overflow-x-auto rounded-xl bg-ink-900 p-4 text-xs leading-relaxed text-white">
        <code>{MCP_INSTALL_CONFIG}</code>
      </pre>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.configNote}</p>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.toolsHeading}</h2>
      <ul className="mt-3 space-y-3">
        {c.tools.map((tool) => (
          <li key={tool.name} className="card p-4">
            <code className="text-sm font-semibold text-ink-900">{tool.name}</code>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{tool.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.privacyHeading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.privacy}</p>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.webHeading}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" href={localePath(locale, link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.faqHeading}</h2>
      <Faq items={c.faq} />
    </article>
  );
}
