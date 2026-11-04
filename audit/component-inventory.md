# 组件与代码组织盘点（component-inventory）

审计日期：2026-11-04｜commit `e8b85c3`｜只读审计

## 1. 分层结构

```text
src/
├── app/                      # 路由（全静态）
│   ├── (en)/(es)/(pt-br)/(zh-cn)/(id)/   # 5 个语言 route group，共享 AppShell
│   │   ├── layout.tsx        # 每语言根 layout：htmlLang + layoutMetadata
│   │   ├── page.tsx          # 首页（HomePageTemplate）
│   │   ├── [slug]/page.tsx   # 31 个 slug：19 风格页 + 12 平台页（generateStaticParams）
│   │   ├── learn/(page|[slug])  # 仅 (en) 存在；英文指南
│   │   └── …10 个静态路由 + not-found
│   ├── sitemap.ts / robots.ts / llms.txt/route.ts / og/route.tsx / icon.svg / globals.css
├── components/
│   ├── app-shell.tsx         # 共享壳：GA4/Clarity 条件注入、Vercel Analytics、Header/Footer、skip-link、LocaleProvider、ToastProvider
│   ├── header.tsx            # 导航仅 3 项：Fancy / Gaming / Symbols + 语言切换
│   ├── language-switcher.tsx # 换前缀跳等价页；不自动重定向；一次性建议条
│   ├── footer.tsx            # 5 列内链：核心工具 / 平台页全量 / Look 风格 / 字母风格 / 站点页
│   ├── *-tool.tsx            # 7 个客户端工具（见下表）
│   ├── page-templates/*.tsx  # 9 个服务端页面模板（home/fancy/gaming/symbols/blank-space/mcp/privacy/about-contact/not-found）
│   ├── style-page-template.tsx / platform-page-template.tsx / guide-page-template.tsx  # 3 个动态页模板（服务端，含 FAQ JSON-LD）
│   ├── sections.tsx          # 通用块：Faq、JsonLd、faqJsonLd、RelatedLinks 等
│   ├── platform-preview.tsx(642行) + pinned-field-preview.tsx + platform-chips.tsx + platform-mark.tsx  # 平台预览卡体系
│   ├── style-actions.tsx     # 复制/PNG/分享/收藏操作条（fancy 与 single-style 共用）
│   ├── compat-report.tsx     # 昵称字符分析报告
│   ├── *-scenario-kits.tsx   # berry / cod / coquette 三套场景套件
│   ├── sample-name.tsx / toast.tsx / pixel-star.tsx / locale-context.tsx
├── lib/                      # 纯模块（可被 MCP 复用），见下
├── lib/content/              # 全部 SEO 文案数据（per-locale）
├── lib/__tests__/            # 23 个测试文件 / 135 测试（全部通过）
└── mcp/                      # stdio.ts / handlers.ts / install.ts
```

## 2. 客户端工具组件与复用

| 组件 | 用在哪 | 复用方式 |
|---|---|---|
| `fancy-text-tool.tsx` | /fancy-text-generator/ | 完整 30 风格生成器 |
| `single-style-tool.tsx` | 19 个风格页 | 只渲染该页 styleIds + 专属装饰，共享 style-actions |
| `platform-text-tool.tsx` | 6 个 text 平台页 | 平台 featuredStyles + 平台预览 |
| `gaming-name-tool.tsx`（551 行） | /gaming-name-generator/ + 5 个 gaming 平台页 | 预设/装饰/自定义组合/兼容分析 |
| `symbols-tool.tsx` | /symbols/ | 搜索/分类/board |
| `blank-space-tool.tsx` | /blank-space/ | 独立小工具 |
| `bio-tool.tsx` | 3 个 bioMode 平台页（instagram/tiktok/discord） | 模板+风格+符号板 |

复用结论：**统一模板模式已经存在**——方案 §3「统一页面结构 + 配置化模块开关」在代码里的对应物是 `StylePageDef`/`PlatformPageDef`（slug、styleIds、wrappers、toolMode、bioMode、preview、featuredStyles、related、per-locale copy）。方案 §3.3 的 `ToolPageConfig` 与之高度同构；改造应扩展现有 Def 接口，而不是新造一套配置层。

## 3. lib 纯模块（引擎与数据）

| 模块 | 职责 | 被谁复用 |
|---|---|---|
| text-styles.ts | 30 风格映射 + 9 分类 + 覆盖元数据 | fancy/single/platform 工具、MCP、样式页预览 |
| nickname.ts | vibe 风格、种子化生成、装饰对、自定义组合 | gaming 工具、MCP |
| symbols-data.ts | 388 符号/18 分类/搜索/组合 | symbols 工具、首页、MCP |
| composer.ts | wrap 装饰 + paste target 档位 | fancy + gaming 共用 |
| measure.ts | graphemes/codepoints/utf16 三口径 | 全部工具 + bio |
| unicode-analyze.ts + platform-rules.ts | 字符分析 + 平台字段规则(置信度/testedAt) | gaming 兼容报告 + 平台预览 |
| style-pages.ts / platform-pages.ts / guides.ts | 页面注册表（slug、related、per-locale copy） | 路由、sitemap、内链、模板 |
| serp-title.ts | SERP title 统一形状 + per-slug 细节词 | 全部页面 metadata |
| metadata.ts | canonical + hreflang + OG/Twitter | 全部页面 |
| storage.ts | useLocalList（SSR 安全 localStorage） | 全部工具的收藏/最近/保存 |
| copy.ts / export-image.ts / share.ts | 剪贴板回退 / canvas PNG / 5 平台分享链接 | style-actions 等 |
| analytics.ts | GA4 事件白名单 | 全部工具 |
| i18n.ts / ui-strings.ts | locale 配置 + 类型化 UI 翻译 | 全站 |
| bio.ts / blank-space.ts / sample-names.ts / style-risk.ts / coquette-*.ts / berry-avenue-extra.ts / cod-extra.ts / roblox-extra.ts / core-focus.ts | 各页专属数据与文案 | 对应模板 |

## 4. 测试覆盖（23 文件 / 135 测试，2026-11-04 实测全绿）

引擎类：text-styles、nickname、composer、symbols-data、blank-space、bio、measure、unicode-analyze、platform-rules、style-pages、sample-names、share、copy(间接)。
SEO/内容类：guides、i18n(翻译完整性)、seo-ctr、serp-title、seo-mcp、berry-gap、info-gain-cod-coquette-roblox、core-focus、style-risk、platform-preview、analytics。

结论：转换引擎、数据完整性、SEO 标题形状、翻译完整性均有回归保护——**任何页面模板/信息架构改造都应先扩这些测试再动代码**（与方案 §14「先分析再修改」一致）。

## 5. 服务端渲染与水合

- 页面正文、样式网格、FAQ、JSON-LD 全部在服务端模板中输出（初始 HTML 可见）。
- 客户端工具组件水合后接管交互；`storage.ts` 严格 SSR 守卫（`typeof window` 检查），水合前后状态一致（初始为空列表）。
- 代码中留有 `ponytail:` 前缀的自我备注（如 measure.ts 每次 new Segmenter、platform-rules 置信度升级路径），属于已知的小型优化欠账，非缺陷。
