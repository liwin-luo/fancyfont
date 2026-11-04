# 上线记录（Release Log）

- 依据：`seo-growth.md` §9.3「每次上线必须记录」。缺这份文件时，28 天 GSC 数据无法归因到具体改动。
- 口径：只记**已进入 origin/main 并已部署到 fancyfont.tools** 的变更。日期取提交日期；部署时间取 Vercel 生产构建时间。
- 数据来源：`git log`（提交与涉及文件）、`curl` 线上抽查、Vercel CLI 部署列表。无一条来自记忆或推测。

| 日期 | URL / 范围 | 语言 | 变更 | 主关键词 | commit | 复验 |
|---|---|---|---|---|---|---|
| 2026-11-01 | `/fortnite-name-generator/` | 5 语 | 新平台场景页（趋势扫描首个落地），Epic 显示名按「约 16、未实测」 | fortnite name generator | 055c141 | — |
| 2026-11-02 | `/learn/twitch-display-name-fancy-text/` | en | 新指南页，正文内渲染官方来源链接 | can I use fancy font in twitch display name | ff53781 | 200 + 标题已核对 |
| 2026-11-02 | 英文 gaming 页 | en | 列出相关指南互链 | — | ea051a8 | — |
| 2026-11-03 | 全站 SERP 标题 | 5 语 | 标题里的装饰性 Unicode 换成明文（SOP Site fix A） | — | 2c0f814 | 首页 title 已确认为明文 |
| 2026-11-03 | `/learn/*` | en | 指南中段加 CTA 区块 + 锚点 | — | baad87a, 9a153df | — |
| 2026-11-03 | `/learn/roblox-display-name-rules/` | en | 对照官方 Help 刷新规则表述（排期 #6） | roblox display name symbols | 2a60a8a | — |
| 2026-11-03 | Berry / Coquette 页标题 | en/es/pt-br | CTR 导向的标题改写（SEO Desk 简报） | berry avenue fonts / coquette font generator | e8b85c3 | — |
| 2026-11-04 | 全站（首页、导航、移除埋点、工具补齐） | 5 语 | 按 30 天重构方案改版 | — | 4299ae1 | 209 URL 全 200、hreflang/canonical 175 项断言 0 失败（`tech-audit-2026-11-04.md`） |
| 2026-11-04 | `/crazy-font-generator/` | 5 语 | 新工具页：逐字符混搭 3 级强度 | crazy font generator | f4353fe | 200 + 已入 sitemap |
| 2026-11-04 | `/preppy-font-generator/` | 5 语 | 标题主词升级为 preppy fonts + FAQ 补信息型问答 | preppy fonts | 03a7f0d | — |
| 2026-11-04 | gothic / cool / elegant 页 | 5 语 | 标题与 FAQ 承接 Old English、medieval、cool letters、luxury font | gothic text generator 等 | a51e32a | — |
| 2026-11-04 | UI 字典 | 5 语 | 合并重复条目（`stylePageInputLabel`→`yourText`、`removeName`→`removeSaved`、`wrapLabel.id` 统一为 Dekorasi） | — | 8d73f5a | typecheck + 140 单测 + 全静态构建通过 |
| 2026-11-04 | `/es/*` 内容 | es | 西语 P0/P1 修正（错词、语法、`usuario` 误用、字符数表述）+ 内容导出脚本 | — | 6769c08 | 见下「本次部署复验」 |

## 本次部署复验（2026-11-04，commit 6769c08）

- 推送 `a51e32a..6769c08` → Vercel 自动生产构建 → 状态 Ready（构建 51s）
- 本地校验：`npm run typecheck` 通过；`npm test` 24 文件 / 140 用例全过；`npm run build` 全静态产出
- `/es/glitch-text-generator/`：`reptaestilos` 残留 **0**（此前线上命中 1 次），新文案 `marcas que reptan` 已出现
- `/es/bold-text-generator/`：`Algunos las leen letra por letra` 已上线（原 `leten`）
- 19 个 `/es/` 风格页扫 `leten|reptaestilos`：**全部 0 命中**
- 首页 title 明文、`sitemap.xml` 214 条、抽查前 5 条 URL 均 200

## 维护规则

1. 每次部署后加一行，不批量补写。
2. 「复验」列只写真实执行过的检查；没查就留空，不写「应该没问题」。
3. 主关键词与 `seo/keyword-intent-map.md` 保持一致；那张表的证据状态改了，这里才跟着改。
4. 涉及标题/FAQ/合并的改动，同时在 `seo/experiment-log.md` 建一条带观察窗口的记录。
5. GSC 拉数不算发布，不进本表；原始数据与口径统一存 `seo/gsc-<日期>/report.md`，本表和实验记录只引用其中的数字与文件路径。
