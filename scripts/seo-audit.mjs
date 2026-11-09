// 全站技术 SEO 审计:抓 sitemap 全部 URL,逐页检查索引/规范/结构化数据/内链健康。
// 用法: node scripts/seo-audit.mjs [--base https://fancyfont.tools]
import fs from "node:fs";

const BASE = process.argv.includes("--base") ? process.argv[process.argv.indexOf("--base") + 1] : "https://fancyfont.tools";
const CONC = 10;
const issues = [];
const stats = { pages: 0, slow: 0, noAltImgs: 0 };

async function fetchText(url, timeoutMs = 20000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { signal: ac.signal, redirect: "follow" });
    const body = await r.text();
    return { status: r.status, body, headers: r.headers };
  } finally {
    clearTimeout(t);
  }
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
}

// 线上 HTML 会把 & → &amp;、' → &#x27;,先解码再量长度,否则全是假阳性
function decodeEntities(s) {
  return s
    .replace(/&#x27;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");
}

function auditPage(url, body, ms, sitemapSet) {
  const problems = [];
  const path = url.replace(BASE, "") || "/";
  stats.pages++;
  if (ms > 3000) { stats.slow++; problems.push(`slow ${ms}ms`); }

  // canonical
  const canonTag = body.match(/<link rel="canonical"[^>]*>/i)?.[0];
  const canon = canonTag ? attr(canonTag, "href") : null;
  if (!canon) problems.push("no canonical");
  else if (canon !== url) problems.push(`canonical mismatch -> ${canon}`);

  // noindex
  const robotsMeta = body.match(/<meta name="robots"[^>]*>/i)?.[0];
  if (robotsMeta && /noindex/i.test(robotsMeta)) problems.push("noindex meta!");

  // hreflang:不变量是「每个 alternate 目标都在 sitemap 里(即可达)」且含 x-default;
  // 部分语种簇是设计使然(copy 键决定),指向 404 的 hreflang 才是真错误。
  const altTags = [...body.matchAll(/<link rel="alternate"[^>]*>/gi)].map((t) => t[0]);
  const altTargets = altTags.map((t) => attr(t, "href")).filter(Boolean);
  const alts = altTags.map((t) => attr(t, "hrefLang") ?? attr(t, "hreflang")).filter(Boolean);
  for (const target of altTargets) {
    if (!sitemapSet.has(target)) problems.push(`hreflang target not in sitemap: ${target}`);
  }
  if (altTargets.length > 0 && !altTargets.includes(url)) problems.push("hreflang cluster misses self");
  if (altTags.length >= 2 && !alts.includes("x-default")) problems.push("no x-default");

  // h1 exactly one
  const h1s = (body.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) problems.push(`h1 count ${h1s}`);

  // title/desc present + budgets (live double-check, entity-decoded)
  const title = decodeEntities(body.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "");
  if (!title) problems.push("no <title>");
  else if (title.length > 60) problems.push(`title ${title.length}>60`);
  const descM = body.match(/<meta name="description" content="([^"]*)"/i);
  if (!descM) problems.push("no meta description");
  else if (decodeEntities(descM[1]).length > 160) problems.push(`desc ${decodeEntities(descM[1]).length}>160`);

  // OG basics
  if (!/<meta property="og:title"/i.test(body)) problems.push("no og:title");
  if (!/<meta property="og:image"/i.test(body)) problems.push("no og:image");

  // html lang
  const htmlTag = body.match(/<html[^>]*>/i)?.[0] ?? "";
  if (!/\slang="[^"]+"/.test(htmlTag)) problems.push("html lang missing");

  // JSON-LD parses
  for (const m of body.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(m[1]);
    } catch {
      problems.push("broken JSON-LD block");
    }
  }

  // images without alt
  const imgs = [...body.matchAll(/<img\b[^>]*>/gi)];
  const noAlt = imgs.filter((t) => attr(t[0], "alt") === null).length;
  if (noAlt > 0) { stats.noAltImgs += noAlt; problems.push(`${noAlt} img without alt`); }

  // mixed content: http:// refs to non-this-host assets/links
  const mixed = (body.match(/(?:src|href)="http:\/\/(?!fancyfont\.tools)/gi) || []).length;
  if (mixed > 0) problems.push(`${mixed} http:// mixed-content refs`);

  if (problems.length) issues.push({ path, problems });
}

async function main() {
  const t0 = Date.now();
  // 1) sitemap
  const sm = await fetchText(`${BASE}/sitemap.xml`);
  if (sm.status !== 200) { console.error(`sitemap ${sm.status}`); process.exit(1); }
  const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`sitemap URLs: ${urls.length}`);

  // 2) robots + sitemap declared
  const robots = await fetchText(`${BASE}/robots.txt`);
  if (!/Sitemap:/i.test(robots.body)) issues.push({ path: "/robots.txt", problems: ["no Sitemap line"] });

  // 3) page audits, concurrency-limited
  const sitemapSet = new Set(urls);
  const queue = [...urls];
  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      const s = Date.now();
      try {
        const r = await fetchText(url);
        if (r.status !== 200) issues.push({ path: url.replace(BASE, ""), problems: [`status ${r.status}`] });
        else auditPage(url, r.body, Date.now() - s, sitemapSet);
      } catch (e) {
        issues.push({ path: url.replace(BASE, ""), problems: [`fetch failed: ${String(e).slice(0, 60)}`] });
      }
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));

  // 4) infrastructure probes
  const probes = [
    [`${BASE.replace("https://", "http://")}/`, "http->https"],
    [`${BASE}/cursive-fonts`, "no-trailing-slash"],
    [`${BASE}/definitely-not-a-page-xyz/`, "404 probe"],
    [`https://www.fancyfont.tools/`, "www subdomain"],
  ];
  for (const [u, label] of probes) {
    const ac = new AbortController();
    const r = await fetch(u, { redirect: "manual", signal: ac.signal }).catch(() => null);
    if (!r) issues.push({ path: `[probe] ${label}`, problems: ["connection failed"] });
    else if (label === "404 probe" && r.status !== 404) issues.push({ path: "[probe] 404", problems: [`soft-404? status ${r.status}`] });
    else if (label !== "404 probe" && r.status !== 308) issues.push({ path: `[probe] ${label}`, problems: [`status ${r.status}`] });
  }

  // 5) report
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`audited ${stats.pages} pages in ${secs}s | slow(>3s): ${stats.slow} | imgs-without-alt: ${stats.noAltImgs}`);
  if (issues.length === 0) {
    console.log("ALL CLEAN ✓");
  } else {
    console.log(`\nISSUES: ${issues.length}`);
    for (const i of issues) console.log(`  ${i.path}\n    - ${i.problems.join("; ")}`);
  }
  fs.writeFileSync(new URL("./seo-audit-report.json", import.meta.url), JSON.stringify({ base: BASE, stats, issues }, null, 1));
}

main();
