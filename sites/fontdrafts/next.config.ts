import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // ── 新站内部迁移:中文从根路径迁到 /zh/ 后,旧根级地址重定向到新位置。──
    const zhOnlyPages = [
      "decorated-nicknames",
      "douyin-fonts",
      "xiaohongshu-fonts",
      "weibo-fonts",
      "wechat-fonts",
      "qq-fonts",
      "bilibili-fonts",
    ];

    // ── 旧站(线上 fancyfont.tools)链接保护 ──
    // 旧站 URL 前缀:/(en)、/es/、/pt-br/、/zh-cn/、/id/;新站英文在根路径、
    // 中文前缀改为 /zh/,印尼语下线(流量并入英文)。
    //
    // 换了 slug 的旧页 → 新页。迁移后保留原 slug 的 18 个落地页(symbols、
    // blank-space、facebook-fonts、chicano-font-generator 等)不在表里——
    // 新站直接以同路径接住,零重定向。
    const legacyPathChanges: [string, string][] = [
      ["/fancy-text-generator", "/"],
      ["/gaming-name-generator", "/game-name-generator/"],
      ["/mcp", "/"],
      ["/cursive-text-generator", "/cursive-fonts/"],
      ["/gothic-text-generator", "/gothic-fonts/"],
      ["/bold-text-generator", "/bold-fonts/"],
      ["/bubble-letters-generator", "/bubble-fonts/"],
      ["/small-caps-generator", "/small-fonts/"],
      ["/strikethrough-text-generator", "/strikethrough-text/"],
      ["/glitch-text-generator", "/zalgo-text/"],
      ["/upside-down-text-generator", "/upside-down-text/"],
      ["/aesthetic-text-generator", "/aesthetic-fonts/"],
      ["/cute-font-generator", "/cute-fonts/"],
      // 旧 /learn/ 文章 → 新指南(旧站 learn 仅英文)
      ["/learn/unicode-fonts-vs-real-fonts", "/learn/what-are-unicode-fonts/"],
      ["/learn/fancy-fonts-in-username", "/learn/fancy-text-usernames/"],
      ["/learn/fancy-fonts-character-limit", "/learn/name-length-limits/"],
      ["/learn/fancy-fonts-accessibility", "/learn/screen-reader-safety/"],
      ["/learn/fonts-on-discord", "/learn/discord-fonts-guide/"],
      ["/learn/fonts-for-your-instagram", "/learn/instagram-bio-fonts/"],
      ["/learn/fonts-for-social-media", "/learn/name-length-limits/"],
      ["/learn/fancy-fonts-on-tiktok", "/tiktok-fonts/"],
      ["/learn/cursive-fonts", "/cursive-fonts/"],
      ["/learn/gothic-blackletter-fonts", "/gothic-fonts/"],
      // 旧站线上实际存在的 4 篇 learn 文章
      ["/learn/change-instagram-bio-font", "/learn/instagram-bio-fonts/"],
      ["/learn/pubg-free-fire-stylish-name", "/pubg-name-generator/"],
      ["/learn/roblox-display-name-rules", "/roblox-name-generator/"],
      ["/learn/twitch-display-name-fancy-text", "/game-name-generator/"],
    ];

    // 目标页在 es/pt-br/zh 都有本地化版本的才展开语言前缀;learn 等旧站本就
    // 仅英文的内容不展开(game-name-generator 无 es/pt-br 版,es/pt-br 单独
    // 指向 free-fire)。zh-cn 旧前缀映射到新 /zh/;id 一律并入英文目标。
    const multilangDests = new Set([
      "/",
      "/cursive-fonts/",
      "/gothic-fonts/",
      "/bold-fonts/",
      "/bubble-fonts/",
      "/small-fonts/",
      "/strikethrough-text/",
      "/zalgo-text/",
      "/upside-down-text/",
      "/aesthetic-fonts/",
      "/cute-fonts/",
    ]);

    // 迁移落地页:16 个注册表页已有 es/pt-br 版(es/pt-br 地址直达本地页,
    // 不再跳英文);仅英文的工具页(symbols/blank-space)四个语言都先跳英文页;
    // zh-cn 与 id 一律先跳英文页(等 zh 本地化后再调整)。
    const migratedRegistryPages = [
      "adopt-me-fonts",
      "berry-avenue-fonts",
      "cod-name-generator",
      "fortnite-name-generator",
      "facebook-fonts",
      "youtube-fonts",
      "cool-font-generator",
      "elegant-font-generator",
      "dark-font-generator",
      "heart-font-generator",
      "coquette-font-generator",
      "chicano-font-generator",
      "preppy-font-generator",
      "crazy-font-generator",
      "italic-text-generator",
      "tiny-text-generator",
    ];
    const migratedEnOnly = ["symbols", "blank-space"];

    // 新旧 slug 相同的共享页:该语言版本存在则路径不变无需处理,不存在才
    // 重定向(回退英文页;Free Fire 无英文版,回退 es)。
    const sameSlugSharedRedirects: { source: string; destination: string }[] = [
      { source: "/zh-cn/instagram-fonts", destination: "/zh/instagram-fonts/" },
      { source: "/zh-cn/tiktok-fonts", destination: "/tiktok-fonts/" },
      { source: "/zh-cn/discord-fonts", destination: "/discord-fonts/" },
      { source: "/zh-cn/whatsapp-fonts", destination: "/whatsapp-fonts/" },
      { source: "/zh-cn/pubg-name-generator", destination: "/pubg-name-generator/" },
      { source: "/zh-cn/roblox-name-generator", destination: "/roblox-name-generator/" },
      { source: "/es/pubg-name-generator", destination: "/pubg-name-generator/" },
      { source: "/es/roblox-name-generator", destination: "/roblox-name-generator/" },
      { source: "/pt-br/pubg-name-generator", destination: "/pubg-name-generator/" },
      { source: "/pt-br/discord-fonts", destination: "/discord-fonts/" },
      { source: "/id/instagram-fonts", destination: "/instagram-fonts/" },
      { source: "/id/tiktok-fonts", destination: "/tiktok-fonts/" },
      { source: "/id/discord-fonts", destination: "/discord-fonts/" },
      { source: "/id/whatsapp-fonts", destination: "/whatsapp-fonts/" },
      { source: "/id/pubg-name-generator", destination: "/pubg-name-generator/" },
      { source: "/id/roblox-name-generator", destination: "/roblox-name-generator/" },
      { source: "/id/free-fire-name-generator", destination: "/es/free-fire-name-generator/" },
    ];

    const redirects: { source: string; destination: string; permanent: boolean }[] = [
      { source: "/zhinan", destination: "/zh/zhinan/", permanent: true },
      { source: "/zhinan/:path*", destination: "/zh/zhinan/:path*", permanent: true },
      ...zhOnlyPages.map((slug) => ({
        source: `/${slug}`,
        destination: `/zh/${slug}/`,
        permanent: true,
      })),
      // 旧站中文/印尼语根路径与法务页(es/pt-br 同路径无需处理)
      { source: "/zh-cn", destination: "/zh/", permanent: true },
      { source: "/zh-cn/about", destination: "/zh/about/", permanent: true },
      { source: "/zh-cn/contact", destination: "/zh/contact/", permanent: true },
      { source: "/zh-cn/privacy", destination: "/zh/privacy/", permanent: true },
      { source: "/zh-cn/terms", destination: "/zh/terms/", permanent: true },
      { source: "/id", destination: "/", permanent: true },
      { source: "/id/about", destination: "/about/", permanent: true },
      { source: "/id/contact", destination: "/contact/", permanent: true },
      { source: "/id/privacy", destination: "/privacy/", permanent: true },
      { source: "/id/terms", destination: "/terms/", permanent: true },
      ...migratedRegistryPages.flatMap((slug) =>
        [`/zh-cn/${slug}`, `/id/${slug}`].map((source) => ({
          source,
          destination: `/${slug}/`,
          permanent: true,
        })),
      ),
      ...migratedEnOnly.flatMap((slug) =>
        [`/es/${slug}`, `/pt-br/${slug}`, `/zh-cn/${slug}`, `/id/${slug}`].map((source) => ({
          source,
          destination: `/${slug}/`,
          permanent: true,
        })),
      ),
      ...sameSlugSharedRedirects.map((row) => ({ ...row, permanent: true })),
    ];

    for (const [from, to] of legacyPathChanges) {
      // 根路径(英文)与印尼语(整站并入英文)一律跳英文目标。
      redirects.push({ source: from, destination: to, permanent: true });
      redirects.push({ source: `/id${from}`, destination: to, permanent: true });
      if (!multilangDests.has(to)) continue;
      redirects.push({ source: `/es${from}`, destination: `/es${to}`, permanent: true });
      redirects.push({ source: `/pt-br${from}`, destination: `/pt-br${to}`, permanent: true });
      redirects.push({ source: `/zh-cn${from}`, destination: `/zh${to}`, permanent: true });
    }

    // game-name-generator 没有 es/pt-br 版:旧站西/葡语游戏名页指向该语言
    // 的 free-fire 页(es/pt-br 市场的主力游戏页);zh-cn 版指向 zh 游戏名页。
    redirects.push({ source: "/es/gaming-name-generator", destination: "/es/free-fire-name-generator/", permanent: true });
    redirects.push({ source: "/pt-br/gaming-name-generator", destination: "/pt-br/free-fire-name-generator/", permanent: true });
    redirects.push({ source: "/zh-cn/gaming-name-generator", destination: "/zh/game-name-generator/", permanent: true });
    // free-fire 没有 EN/zh 版:英文与旧 zh-cn 页指向游戏名页(伞页)。
    redirects.push({ source: "/free-fire-name-generator", destination: "/game-name-generator/", permanent: true });
    redirects.push({ source: "/zh-cn/free-fire-name-generator", destination: "/zh/game-name-generator/", permanent: true });

    return redirects;
  },
};

export default nextConfig;
