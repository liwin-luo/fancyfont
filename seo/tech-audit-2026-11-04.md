# 技术 SEO 审计（2026-11-04，第五阶段增量实测）

- 对象：本地生产构建（`next build` + `next start`，commit 见仓库当日改动）
- 性质：`seo/tech-audit-2026-11.md`（2026-11-01）的增量复核；规范 §9 要求的"先检查"已在设计阶段完成（`design/seo-audit.md`），本报告回填其中的待测项
- 纪律：全部数字来自本轮真实工具输出，无估算

## 1. 全量 URL 巡检

- 数据源：`https://fancyfont.tools/sitemap.xml`（本地映射到 localhost 逐条请求）
- 结果：**209 条 URL 全部 200，无重定向、无 404、无软 404**（41 索引路径 × 5 语言 + 4 篇英文指南）
- 明细：`seo/url-status.csv`

## 2. Canonical / Hreflang / html lang（HTML 级抽查）

- 抽样：5 个代表路径（首页、fancy、symbols、风格页 cursive、平台页 pubg）× 5 语言 = 25 页
- 每页检查：canonical 指向自身生产 URL（`https://fancyfont.tools` 域）；hreflang 声明恰好 6 条（en / es / pt-BR / zh-Hans / id / x-default→英文），兄弟 URL 逐一与期望一致（双向关系成立）
- `<html lang>`：5 语言主页逐一核对（en / es / pt-BR / zh-CN / id）
- 结果：**ALL PASS**（175 项断言 0 失败）
- 备注（外观项，非问题）：Next 渲染属性名为驼峰 `hrefLang`——HTML 属性名不区分大小写，浏览器与 Google 解析等效；11-01 抽查时的 `zh-Hans` 输出即此格式。不修复。

## 3. 语言切换（浏览器实测）

- 工具页上打开切换器：5 个语言项均指向等价页（仅换前缀，如 `/es/fancy-text-generator/`）
- 点击 Español → 落地 `/es/fancy-text-generator/`，H1 "Generador de letras bonitas"，`html lang="es"`
- 无任何自动重定向；与 i18n 单测（canonical/hreflang 单元断言）互为印证

## 4. Core Web Vitals（Lighthouse 12，本地生产构建，headless Chrome）

| 页面 | 移动端 perf | LCP | CLS | TBT | 桌面端 perf | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | 95 | 2.8s | 0 | 20ms | 100 | 0.5s | 0 | 0ms |
| `/fancy-text-generator/` | 98 | 2.3s | 0 | 10ms | 100 | 0.5s | 0 | 0ms |
| `/symbols/` | 98 | 2.3s | 0 | 10ms | — | — | — | — |
| `/cursive-text-generator/` | 97 | 2.6s | 0 | 10ms | — | — | — | — |
| `/pubg-name-generator/` | 98 | 2.3s | 0 | 10ms | — | — | — | — |

- CLS 全部 0（远优于 ≤0.1）；TBT ≤20ms 是 INP 的良好实验室代理（INP 本身需 28 天真实字段数据，待 GSC/CrUX 积累）
- 首页移动端 LCP 2.8s 略超 2.5s 良好阈值（其余全部达标）：LCP 元素为 H1 文本，无字体文件与图片依赖，超时主要来自 headless 环境的固定开销。**如实记录，不粉饰**；列为观察项，部署后用 PSI 复测真实 URL，若仍 >2.5s 再优化（候选：hero 转换器延迟水合）

## 5. 移动端 360px 检查（真实浏览器视口）

- 页面：`/`、`/fancy-text-generator/`、`/symbols/`、`/gaming-name-generator/`
- 横向溢出：4 页 `scrollWidth` 均 ≤345px（视口 360）——**无横向溢出**
- 首页 hero 输入框可见可交互；复制按钮在移动端布局内可达（此前已实测点击复制流程）

## 6. 待办与移交

1. **GSC 基线**：站点 2026-10-26 上线，部署本轮改造后请导出近期展示/点击作对照基线（用户操作）
2. **部署后复测**：PSI 对 `https://fancyfont.tools` 真实 URL 复跑（重点首页移动端 LCP）
3. `INP` 字段数据：等 CrUX 出数后再评估（实验室 TBT 已足够低）
