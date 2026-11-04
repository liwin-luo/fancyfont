# FancyFont 项目审计总览（project-overview）

- 审计日期：2026-11-04
- 审计范围：本地代码库 commit `e8b85c3`（main）
- 审计方式：只读。未修改任何生产代码、URL、SEO 元信息或业务逻辑
- 对应规范：`fancyfont-refactoring-plan.md` 第 12 章第一阶段（Day 1～3）、第 17 章总执行指令
- 配套交付：`route-inventory.csv`、`tool-inventory.csv`、`locale-inventory.csv`、`component-inventory.md`、`risk-list.md`

---

## 1. 技术栈与构建

| 项 | 内容 |
|---|---|
| 框架 | Next.js 15.5（App Router），全站 SSG 预渲染 |
| UI | React 19 + Tailwind CSS v4（设计 token 在 `src/app/globals.css` `@theme`） |
| 语言 | TypeScript 5.6，`npm run typecheck` 当前通过、无错误 |
| 测试 | Vitest 3：23 个测试文件 / **135 个测试，当前全部通过**（`npm test` 实测） |
| 部署 | Vercel；`trailingSlash: true`，无斜杠 URL 308 跳转 |
| 后端 | 无。全部转换、组合、统计在浏览器本地完成 |
| 依赖 | 仅 `@vercel/analytics`；无其他运行时依赖 |

`next.config.ts` 只有 4 行配置：trailingSlash、reactStrictMode、poweredByHeader:false。无自定义 webpack/redirect/headers。

## 2. 路由架构

- 5 个语言 route group：`(en)`（根路径）、`(es)/es/`、`(pt-br)/pt-br/`、`(zh-cn)/zh-cn/`、`(id)/id/`。
- 每语言 10 个静态路由 + 1 个 `[slug]` 动态路由（`generateStaticParams` 枚举 31 个 slug：19 风格页 + 12 平台页）。
- **41 个索引路径 × 5 语言 = 205 条 URL**；另有 4 条英文专属 `/learn/` 指南。sitemap 合计 **209 条 URL**（README 写的 40×5=200 已过时：此后新增了 `chicano-font-generator` 风格页与 `fortnite-name-generator` 平台页）。
- 特殊路由：`/og/`（动态 OG 图）、`/llms.txt`、`robots.txt`、`sitemap.xml`、每语言 `not-found`（README：缺页发 noindex）。
- 详见 `route-inventory.csv`。

## 3. 工具能力现状（对照改造方案的关键结论)

| 方案章节 | 方案假设 | 代码实际情况 |
|---|---|---|
| §5.3 功能 A 收藏 | 待建 | **已上线**：`fancyfont:favorite-styles`（localStorage，`useLocalList`），样式列表有 Favorites 筛选 |
| §5.3 功能 B 最近使用 | 待建 | **已上线**：`fancyfont:recent-styles`（上限 8）、`recent-symbols`；有 Recent 筛选并按最近排序 |
| §5.3 功能 C 样式对比 | 待建 | **未实现**（唯一确认缺口） |
| §5.3 功能 D Copy All | 待建 | **部分已有**：符号 board 一键复制、复制全部收藏/全部保存昵称；"一次复制全部 30 样式"确实没有 |
| §5.3 功能 E 字符统计 | 待建 | **已上线**：`measure.ts` 输出 graphemes / code points / UTF-16 三口径（字素簇计数，Intl.Segmenter） |
| §6 Gaming 前后缀/装饰/组合 | 待建 | **大部分已有**：`decoratorPairs`、`composer.ts` wrapPairs（★/♡/꧁꧂/『』）、CustomCombo 自定义组合（可保存）、5 种 vibe 风格（cool/dark/cute/pro/minimal）、种子化确定性生成、24 字符上限、重新生成、保存昵称 |
| §6.3 平台配置模型 | 待设计 | **已有同构实现**：`platform-rules.ts` 的 `PlatformFieldRule`（confidence: unverified/published_approx/verified + testedAt + PlatformTestRecord 升级路径），22 条字段规则，全部 `published_approx`、`testedAt: null`（诚实标注） |
| §6 兼容性检测 | 待建 | **已有**：`unicode-analyze.ts`（字素+码点、组合符、变体选择符、emoji、未覆盖拉丁字母）+ `compat-report.tsx` + 平台预览卡（`platform-preview.tsx`，642 行） |
| §7 符号搜索/分类/批量/收藏 | 待建 | **大部分已有**：388 符号 / 18 分类 / 13 组合、名称+关键词搜索、board 多选（上限 40）+ 一键复制、收藏、最近使用、`#分类` 深链 |
| §7 符号详情（Unicode 名称/码点） | 待建 | **部分已有**：每符号带 Unicode 英文 label；符号级码点展示未见 |
| 首页首屏可输入（§2.3） | 改造点 | **真实缺口**：首页 hero 是文案 + 双 CTA + 平台 chips + 3 行静态示例预览卡，**没有输入框**，需点击进入工具页 |
| Social Bio（90 天规划 Week 5） | 未提 | **已有雏形**：Instagram/TikTok/Discord 页 `bioMode`（`bio-tool.tsx` + `bio.ts`：模板+风格+符号 board 拼接、超限只标 over 不截断、PNG 导出），且 `bio_*` 埋点已在事件白名单里 |
| `/learn/` 指南区 | 方案称 Guides | **已有**：4 篇英文指南（见 route-inventory），EN-only、自 canonical、无 hreflang；支持表格/步骤/图/内链 CTA/外链官方文档 |

详见 `tool-inventory.csv`。

## 4. 多语言实现

- 语言：`en`（根）、`es`、`pt-br`、`zh-cn`、`id`，与方案 §8.1/8.2 的目标一致；`<html lang>` 每语言独立（zh-CN/pt-BR 大小写正确）。
- hreflang：每页声明 5 语言 + `x-default`→英文；zh-cn 用 `zh-Hans`。
- canonical：每语言指向自己的 URL，绝不全部指向英文（`metadata.ts`）。
- 语言切换：仅换前缀（跳等价页），**从不自动重定向**；浏览器语言不匹配时弹一次性建议条（sessionStorage 记忆、6 秒自动消失）。
- UI 翻译：`ui-strings.ts` 用 TypeScript 接口强制 5 语言键完整，缺翻译 = 构建失败；有 i18n 单测。
- SEO 文案：风格页/平台页每语言手写（`style-pages-*.ts` 各约 660 行、`platform-pages-*.ts` + `platform-pages-more.ts` 约 3900 行）；首页/工具页/法务页均有 per-locale content 对象。
- **注意**：各语言 URL slug 目前**全部相同**（如 `/es/fancy-text-generator/`），未做本地化 slug。方案 §8.2 示例暗示本地化 slug（`/es/generador-de-texto/`）——若按方案执行属于批量改 URL，触及方案自身的"禁止未经审核批量修改 URL"红线。见 risk-list R3。
- 详见 `locale-inventory.csv`。

## 5. SEO 现状

- 每页唯一 Title/Description/H1；Title 统一形状 `主词 — Copy & Paste 细节词 | FancyFont`（`serp-title.ts`），**装饰性 Unicode 已按 2026-11 技术审计移除**（Site fix A 已落地），Berry/Coquette 已换 CTR 版 title（commit e8b85c3）。
- 结构化数据：首页 WebSite+Organization+FAQPage；工具页 WebApplication+FAQPage（`schema.ts` + `sections.tsx` 的 `faqJsonLd`）。
- sitemap：209 条 URL，每条带 hreflang alternates；`lastmod` 用固定日期 `contentUpdated`（当前 2026-11-03），不随请求漂移。
- robots.txt 允许常见 AI 爬虫；`/llms.txt` 供 agent 引用。
- 工具内容 SSR 进首屏 HTML（README + 2026-11-01 技术抽查证实）。
- `seo/tech-audit-2026-11.md`（2026-11-01）抽查全部通过：canonical、hreflang、sitemap、404、首屏 H1、无测量 ID 时不加载 GA4/Clarity。
- GSC 已验证（`public/google824e0769c16d7fbd.html`），站点上线日 2026-10-26。

## 6. 数据与埋点现状

- GA4：`src/lib/analytics.ts` 18 个事件白名单（`fancy_text_*` 5 个、`gaming_name_*` 4 个、`symbols_*` 5 个、`symbol_*` 2 个、`bio_*` 3 个），参数白名单（page/tool/style_id/platform/category/length_bucket/ok），**永不采集用户输入文本**；有单测。
- 脚本仅在配置了 `NEXT_PUBLIC_GA_ID`（G-…）/`NEXT_PUBLIC_CLARITY_ID` 环境变量时注入；**当前仓库无法确认生产环境是否已配 ID**（本地 HTML 不含 GA4）。Vercel Analytics（`<Analytics />`）无条件启用（commit 3b266e7）。
- 本地持久化：`storage.ts` 的 `useLocalList`（SSR 安全、跨组件同步、失败静默），键：favorite-styles / recent-styles / saved-names / custom-combos / favorite-symbols / recent-symbols / symbol-board / bio-board。

## 7. 组件与代码组织

见 `component-inventory.md`。要点：页面模板全部服务端组件化（`page-templates/`），工具为客户端组件（`*-tool.tsx`），数据/引擎在 `src/lib` 纯模块并被 MCP 复用（`src/mcp/handlers.ts` 调同一批引擎，`public/fancyfont-mcp.mjs` 可下载）。

## 8. 仓库内既有规划/文档（审计输入）

| 文件 | 作用 | 与本审计的关系 |
|---|---|---|
| `README.md`（11-01） | 代码库权威描述 | **轻微过时**：写 11 个风格页/40 路径，实际 19/41（新增 chicano、fortnite）；"No analytics yet" 一节也已过时（Vercel Analytics 已装） |
| `seo/产品事实底稿.md`（11-01） | 全站能力/限制唯一事实来源 | 本审计功能盘点与其一致（120 字素簇输入上限、24 昵称上限等均经代码证实） |
| `seo/keyword-intent-map.md` | 关键词→页面映射 | 页面清单与本审计 route-inventory 对齐（基准 commit 840a06e，早于 chicano/fortnite） |
| `seo/guide-question-backlog.md` | `/learn/` 立项规则 | learn EN-only 决策有用户确认记录 |
| `seo/tech-audit-2026-11.md` | 技术 SEO 抽查（全过） | 方案 §9 应在此基础上增量复核，不必重建 |
| `schedule-2026-11.md` + briefs | 11 月内容排期 | 与本审计无冲突；Week 1 两项（Twitch 新页、Roblox 刷新）已上线 |
| `FancyFont_90天网站改造与SEO增长规划.md` | 战略层 90 天规划 | 葡萄牙语写 `/pt/`，实际为 `/pt-br/`；事件命名与本库一致 |
| `fancyfont-refactoring-plan.md` | 本次改造规范 | 审计对象；冲突与风险见 `risk-list.md` |

## 9. 第一阶段验收对照（规范 §12 Day 1～3）

| 验收项 | 结果 |
|---|---|
| 所有现有工具页面进入清单 | ✅ route-inventory.csv 共 45 行（41 索引路径 + 4 指南） |
| 所有语言入口进入清单 | ✅ locale-inventory.csv 5 语言 + 语言切换行为 |
| 不存在未识别的核心路由 | ✅ 以 `src/app` 文件树 + `sitemap.ts` + `generateStaticParams` 三方交叉核对 |
| 记录现有功能，不重复开发 | ✅ tool-inventory.csv 逐项标注"已有/部分/缺失" |
| 没有修改生产代码 | ✅ 仅新增 `audit/` 目录；`npm test` 135 通过、`tsc --noEmit` 干净 |
