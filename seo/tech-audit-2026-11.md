# 技术 SEO 抽查（2026-11-01）

抽查对象：本地 `http://127.0.0.1:3470` 上的当前代码。Canonical 与 sitemap 指向 `https://fancyfont.tools`，与站点配置一致。

通过：首页与 `/fancy-text-generator/` 返回 200；不存在的路径返回 404；`robots.txt` 允许抓取并给出 sitemap；sitemap 含 `/es/`、`/pt-br/`、`/zh-cn/`、`/id/`；西班牙语工具页 canonical 指向自己的 URL；`hreflang="zh-Hans"` 指向 `/zh-cn/`；首页和 Fancy Text 的 H1 在首屏 HTML 里；未配置测量 ID 时 HTML 不含 GA4 或 Clarity 脚本。

失败项：无。
