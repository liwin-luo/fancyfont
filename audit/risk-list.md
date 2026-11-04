# 风险与冲突清单（risk-list）

审计日期：2026-11-04｜commit `e8b85c3`｜只读审计产出

规范第 17 章要求：发现现有架构与本规范冲突时，先说明冲突、分析现有实现、给出兼容方案。以下每条按此格式。严重度：🔴 高（照方案字面执行会破坏已有资产）/ 🟡 中（需人工决策）/ 🟢 低（记录即可）。

---

## R1 🔴 埋点事件命名冲突：方案 §10 vs 已上线 `analytics.ts`

- **冲突**：方案 §10.1 定义泛化事件名（`style_copy`、`tool_view`、`symbol_batch_copy`、`nickname_generate`…）；已上线代码用工具前缀命名（`fancy_text_copy`、`gaming_name_generate`、`symbol_copy`、`bio_copy`…），共 18 个事件，参数白名单、永不采集文本、有单测保护。
- **现有实现分析**：`src/lib/analytics.ts` 的事件名与 90 天规划 §9.2 一致；GA4 脚本仅在配置 `NEXT_PUBLIC_GA_ID` 后注入；Vercel Analytics 恒开（commit 3b266e7）。本地与 2026-11-01 技术抽查均证实未配 ID 时 HTML 无 GA4。
- **兼容方案**：第一阶段结论是**沿用现有命名，废弃方案 §10.1 的事件清单**。方案新增的事件（如 `language_switch`、`compatibility_check`→已对应 `gaming_name_*` 分析交互）以增量方式追加进白名单并补单测；不要重命名存量事件，否则历史数据断档。另注意：GA4 DebugView 验收（§10.5）取决于生产环境变量是否已配 ID——仓库内无法证实，需用户在 Vercel 后台确认。

## R2 🔴 方案大量"待建功能"实际已上线，按方案排期会重复开发

- **冲突**：方案 §5.3（收藏/最近使用/字符统计）、§6（前后缀/装饰/组合/长度/重生成/收藏、§6.3 平台配置模型）、§7（搜索/分类/批量/收藏）全部按"待优化"表述。
- **现有实现分析**：见 `tool-inventory.csv`——上述功能除"样式对比"和"复制全部 30 风格"外均已实现；`platform-rules.ts` 与方案 §6.3 `PlatformConfig` 字段一一对应（confidence 三态 + testedAt + 测试记录接口，当前 22 条规则全部 `published_approx`、`testedAt: null`，诚实标注）。
- **兼容方案**：第二阶段设计方案时，把工作量改为「缺口清单」：Compare Styles（§5.3C）、Copy All Styles（§5.3D）、符号级码点展示（§7E）、新 vibe 风格、平台实测记录回填（`testedAt`）。其余项从排期中删除，只保留验收回归。

## R3 🟡 多语言 slug：方案暗示本地化 slug vs 全站统一英文 slug

- **冲突**：方案 §8.2/8.5 示例为本地化 slug（`/es/generador-de-texto/`）且写明"不允许所有语言强制使用完全相同的页面目录"；现状是 5 语言共用相同 slug（`/es/fancy-text-generator/`），`keyword-intent-map.md` 也记录"URL 结构各语言一致"为既定事实。
- **现有实现分析**：205 条 URL 已提交 Google（GSC 已验证，上线 2026-10-26）；改为本地化 slug = 全站批量改 URL + 301 迁移，直接触碰方案 §14.5「未经确认批量重定向」禁令，且各语言 SEO 文案（Title/H1/正文）已经是本地化的，slug 本地化的边际收益存疑。
- **兼容方案**：**默认保留统一 slug**，将其列为需用户拍板的决策项（类似 11 月排期 Site fix B 的处理方式）。若未来某语言数据证明本地化 slug 有 CTR 价值，按单语言、单页面灰度迁移。

## R4 🟡 首页改造范围：方案 §2.3 要求首屏可输入 vs 现首页无输入框

- **冲突**：方案要求首屏含"可直接使用的文字输入区域 + 实时生成结果"；现状首页 hero 是文案 + 双 CTA + 平台 chips + 3 行静态示例预览卡（`page-templates/home.tsx`），无输入框。
- **现有实现分析**：这是方案与现状的**真实差距**（方案 P0 有依据）；但方案 §2.3 同时建议改 H1/定位语，而 SERP title 体系（`serp-title.ts`）刚在 11-01~11-03 完成去装饰 + CTR 迭代（commit 2c0f814、e8b85c3），首页 title/H1 再动会干扰正在进行的 CTR 实验。
- **兼容方案**：第二阶段首页设计只做「hero 加输入框 + 实时预览（复用 FancyTextTool 组件）」，H1/title 冻结一个观察周期（建议 ≥28 天，与 GSC 基线对齐）再议；任何文案变更走排期文档同款"用户批准文案"流程。

## R5 🟡 信息架构：方案五分类导航 vs 现有三项导航 + 41 页目录

- **冲突**：方案 §1.2 提出 Text Styles / Name Maker / Symbols / Use Cases / Guides 五个一级分类和五项导航；现状 header 仅 3 项（Fancy/Gaming/Symbols），全量 41 页目录放在首页 directory 区 + footer 五列；90 天规划另有第六套六模块架构（Gaming Studio 等）。
- **现有实现分析**：三份规划三种 IA，且现状的"平铺 + 首页目录 + footer 分组"对 41 页规模并无明显病症；`/learn/` 已承担 Guides 职能。方案自身也声明"目标架构不代表立即开发"。
- **兼容方案**：第三阶段改造以**最小导航变更**为默认（如 header 增加第 4 项 Guides→`/learn/`，风格/平台分组仍靠 footer/首页目录），五分类大改版降级为 Day 31 后的可选项；执行前需用户在三个 IA 方案中指定一个权威版本。

## R6 🟡 `/learn/` 与方案 i18n 章节的豁免缺失

- **冲突**：方案 §8.5 要求每语言独立维护 SEO 内容、§8.8 要求每页正确 hreflang；`/learn/` 是 EN-only、自 canonical、无 hreflang（代码注释、sitemap、`guide-question-backlog.md` 用户确认记录三重一致）。
- **现有实现分析**：`metadata.ts` 的 `enOnlyMetadata` 刻意不生成指向 404 的 alternates（注释：指向不存在页会使整个 hreflang 集群失效）。方案若按字面要求给 learn 页补 hreflang，会**主动引入错误**。
- **兼容方案**：在方案 §8 增加显式豁免条款："learn 指南保持 EN-only，不生成 hreflang"；11 月排期新增的 4 篇指南沿用同一模式。

## R7 🟡 11 月内容排期与 30 天改造的资源撞车

- **冲突**：方案 30 天排期（若 11-04 启动）与 `schedule-2026-11.md` Week 2–4（3 刷新 + 4 新指南，简报有截止日）争夺同一执行者；方案通篇未提内容轨。
- **兼容方案**：改造排期显式声明内容轨优先级不变（每周约 2 项照常），工程改造按阶段让位；或由用户明确"11 月内改造只做 Day 1–14（审计+设计+首页模板）"。此决策需用户确认，不属于审计阶段可自定范围。

## R8 🟢 Site fix A 已完成；Site fix B 已部分被设计消化

- **事实**：首页/全站 SERP title 已去装饰 Unicode（`serp-title.ts` 注释明确记录此动机）→ 排期 Site fix A 完成。近重复风格页（cute/cool/aesthetic/coquette 等 Look 页）在 `style-pages.ts` 设计上已做差异化：每页独占一组他页不用的装饰 wrapper，且 chicano/dark 等页继续分化；Berry/Coquette 另换 CTR title。排期 Site fix B 要求的"先出一页对比再决策"仍有效，但审计发现差异化基础已存在，合并风险低于排期撰写时的判断。
- **兼容方案**：方案 §4 的 C 级页面审计照做，但结论预期偏向 KEEP/OPTIMIZE 而非 MERGE；对比表可直接复用 route-inventory + `style-pages.ts` 的 wrapper 配置。

## R9 🟢 方案 §9 SEO 技术审计应增量而非重建

- **事实**：`seo/tech-audit-2026-11.md`（2026-11-01）已抽查 canonical/hreflang/sitemap/404/首屏 H1/无 ID 不注入脚本，全部通过；sitemap 209 条 URL 的生成逻辑是代码派生（`sitemap.ts`），结构性错误概率低。
- **兼容方案**：Day 4–7 的 seo-audit 交付改为：复核 11-01 报告 + 增补该报告未覆盖项（性能 Lighthouse 实测、移动端真机抽查、全部 209 URL 的批量状态码）——性能与移动端当时未测，属于真实增量。

## R10 🟢 README 与两份旧规划的数据过时（不影响执行，需修正记录）

- `README.md`：写 11 个风格页/40 路径/200 URL（实际 19/41/209）、"No analytics yet"（Vercel Analytics 已装）。
- `FancyFont_90天…规划.md`：葡萄牙语写 `/pt/`（实际 `/pt-br/`）；其 Week 2–4 要做的收藏/统计/board 大部分已上线。
- **兼容方案**：不急于改文档；在第二阶段设计方案时以本审计（commit e8b85c3）为准绳，避免按旧数据排期。

## R11 🟢 方案的执行主体表述与实际不符

- 方案通篇写给 "Cursor AI"；本仓库 11 月排期的 owner 是"执行agent"。纪律条款（§14 禁止行为、先分析后修改）可整体移植，无技术冲突；仅需用户确认由哪个执行体按方案推进。

---

## 审计阶段结论

1. 方案的**纪律框架（先审计、人工确认、反编造）与现状完全兼容**，本审计即第一阶段产出。
2. 方案的功能范围需按 `tool-inventory.csv` 削减为真实缺口，埋点按 R1 收口，slug/首页 H1/IA 三项需用户拍板（R3/R4/R5）。
3. **第一阶段未修改任何生产代码**；`npm test` 135 通过、`tsc --noEmit` 干净。
4. 按方案第 17 章约定：**至此停止，等待人工确认后再进入第二阶段（Day 4–7 设计）**。
