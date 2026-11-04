# SEO 审计（增量版，seo-audit）

- 阶段：第二阶段 Day 4–7｜规范 §9 要求「先检查、不先修改」；本报告为增量版（audit risk-list R9 结论：11-01 技术抽查已通过，不重建）
- 纪律：规范 §9.1G「测试需基于真实工具结果记录，不允许自行编造当前分数」——性能数字**留空待测**（§4）

---

## 1. 已确认通过项（复用 `seo/tech-audit-2026-11.md`，2026-11-01，本地 build 实测）

| 检查 | 结果 |
|---|---|
| HTTP 状态 | 首页与 `/fancy-text-generator/` 200；不存在路径 404 |
| Robots | 允许抓取、声明 sitemap、显式放行常见 AI 爬虫 |
| Sitemap | 含全部语言子目录；结构由 `sitemap.ts` 从页面注册表派生（当前 41×5+4=209 条，代码复核一致） |
| Canonical | 西语工具页指向自身 URL；每语言自 canonical（`metadata.ts` 复核） |
| Hreflang | 5 语言 + `x-default`→en；zh-cn 用 `zh-Hans`；`/learn/` 无 hreflang（enOnly，正确） |
| 首屏内容 | H1 与描述在初始 HTML；工具结果 SSR 可见 |
| 脚本门控 | 未配置测量 ID 时 HTML 无 GA4/Clarity（D1 移除后此项变为永久成立） |

## 2. 本阶段新增复核（设计层，2026-11-04）

1. **URL 冻结**（D2）：205+4 条 URL 与 hreflang 关系零变更；sitemap 生成逻辑无需改动。
2. **结构化数据盘点**：首页 WebSite+Organization+FAQPage；工具页 WebApplication+FAQPage（JSON-LD 镜像可见内容，单测保护）；**全站无 BreadcrumbList**（与「暂缓面包屑」决定一致，见 tool-page-spec §2）。
3. **Title 体系**：全站统一「主词 — 细节词 | 品牌」明文形状（`serp-title.ts`），Look 页与 Berry/Coquette 已 CTR 定制；规范 §9 的 Title 唯一性将由新增遍历单测保证（tool-page-spec §6）。
4. **软 404 / 重复 URL**：`trailingSlash: true` + 非 slash 308，参数 URL 不存在（全静态生成）；未见软 404 机制。

## 3. 计划内的 SEO 相关变更（改造将产生，逐条披露）

| # | 变更 | 影响 | 风险控制 |
|---|---|---|---|
| C1 | 首页 H1 与 title/description 更新（D3） | 首页查询归属重置；新定位更贴近「fancy font generator」主词 | 5 语言手写；FAQ JSON-LD 同步核对；已获用户批准不设观察期 |
| C2 | 隐私页 analytics 段落改写（D1，5 语言） | 内容变化，无索引风险 | 不改 URL、不改 title |
| C3 | 首页内链调整（chips 迁移、热门符号条移除、新增 6 项热门工具行） | /symbols/ 与平台页首页入链数变化 | 目录区与 footer 全量链接保留；变更后跑全链接 200 检查 |
| C4 | Header 新增下拉导航（约 25 条入口 × 41 路径） | 全站内链入口增加 | `Guides` 项仅 en 显示，避免非英语死链 |
| C5 | README / 事实底稿同步 | 非 SEO | 实施时顺带更新 |

**不做**：URL 迁移、301、noindex、hreflang 调整、sitemap 结构变更、批量翻译——均无。

## 4. 待测项（第五阶段已于 2026-11-04 实测，详见 `seo/tech-audit-2026-11-04.md`）

| 项 | 方法 | 状态 |
|---|---|---|
| Core Web Vitals | 本地生产构建 + Lighthouse（移动 5 页 / 桌面 2 页） | ✅ 实测：CLS 全 0、TBT ≤20ms；移动 perf 95–98、桌面 100；首页移动 LCP 2.8s 略超阈值，列为部署后观察项 |
| 移动端体验 | 真实浏览器 360px 视口 × 4 页 | ✅ 无横向溢出（scrollWidth 345 ≤ 360）；hero 输入可用 |
| 全量状态码 | 遍历 sitemap 209 条 | ✅ 209/200，零失败（`seo/url-status.csv`） |
| GSC 基线 | 用户导出近期展示/点击 | **待用户提供** |

## 5. 验收产出（规范 §9.2 对应）

- overview：本文档 §1–3
- url-status / canonical / hreflang / sitemap 复核：§1–2（增量；全量 CSV 由 §4 第三项实测后补 `seo/url-status.csv`）
- robots / mobile / performance：§4 待测后在第五阶段补录
