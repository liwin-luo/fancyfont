# 信息架构设计（information-architecture）

- 阶段：第二阶段 Day 4–7（规范 §12）
- 基准：`audit/`（2026-11-04，commit e8b85c3）
- 状态：设计稿，**等待人工确认后进入第三阶段开发**
- 本文遵循规范 §17 冲突条款：所有与现状的冲突均先说明、再给兼容方案

---

## 0. 已确认决策（2026-11-04，用户拍板）

| # | 决策 | 对设计的影响 |
|---|---|---|
| D1 | **埋点全局移除，90 天内不考虑数据体系** | 方案 §10 整章出范围；现有 GA4/Clarity 事件系统全部拆除（清单见 §4）；Vercel Analytics 一并移除，站点回到「零数据上传」，与隐私定位完全一致 |
| D2 | **URL slug 保持英文统一；TDK 与内容本地化** | 205+4 条 URL 全部冻结不变；现状（各语言共用 slug、TDK/正文已按语言手写）即为目标状态，无需迁移 |
| D3 | **首页按新方案（规范 §2）执行，不设观察期** | 首页重构进入第三阶段；H1/title 按新方案更新，接受 GSC 基线重置 |
| D4 | **资源分配不变** | 11 月内容排期（Week 2–4 共 7 项）照常执行；工程改造让位内容轨，不挤占每周约 2 项的发布节奏 |

## 1. 目标信息架构（规范 §1.2 落地到现有 URL）

原则：**一级分类是导航与页面分组概念，不是新 URL**。全部 41 个索引路径保持原 slug（D2）。

| 分类（导航） | 覆盖的现有页面 | 数量 |
|---|---|---|
| **Text Styles** | `/fancy-text-generator/` + 10 个字母转换页 + 9 个 Look 页 | 20 |
| **Name Maker** | `/gaming-name-generator/` + 5 个 gaming 平台页（pubg / free-fire / cod / roblox / fortnite） | 6 |
| **Symbols** | `/symbols/` | 1 |
| **Use Cases** | 12 个平台页（Social：instagram / tiktok / discord / facebook / youtube；Gaming 5 项与 Name Maker 重叠；Roleplay：adopt-me / berry-avenue） | 7（独立于 Name Maker 的部分） |
| **Guides** | `/learn/` 索引 + 4 篇英文指南（**EN-only，D2/R6 豁免**） | 5 |
| 站点页 | blank-space / about / contact / privacy / terms / mcp | 6 |

- 三大用户任务（转换文字 / 生成昵称 / 找符号）= 三个一级分类，与规范 §1.1 一致。
- **分类 hub 页（/text-styles/ 等聚合页）本轮不建**：规范 §1.2 自身声明目标架构不代表立即开发；避免新 URL。列入 90 天后候选。
- Look 页 9 个全部**保留为独立风格页**（规范 §1.3 选项一）：审计证实每页持有他页不用的专属装饰 wrapper（`style-pages.ts`），独立价值成立，不合并、不降级为筛选项（audit risk-list R8）。

## 2. 导航设计（规范 §2.2 Header 落地）

```text
Header：Logo | Text Styles ▾ | Name Maker ▾ | Symbols | Guides | [语言切换]
```

- 下拉用 `<details>/<summary>` 实现（与现有语言切换器同模式）：无 JS、SSR 可见、触屏可用。
- **Text Styles ▾**：Fancy Text Generator；字母风格（10 项）；Look 风格（9 项，小字标注「装饰组合」）。
- **Name Maker ▾**：Gaming Name Generator；PUBG / Free Fire / COD / Roblox / Fortnite。
- **Symbols**：直达 `/symbols/`。
- **Guides**：直达 `/learn/`。**仅在 en 语言显示**（/learn/ 无其他语言版本；非英语页显示指向 404 的入口属于制造死链，违反规范 §8.7「合理回退」）。
- 移动端：沿用现 header 的横向滚动条方案；下拉在全宽下以整行展开。
- Footer 五列维持现状（已覆盖 Use Cases 与全部风格），仅在 en 的站点列追加 `/learn/` 链接。

## 3. 内链结构变化（需在实施报告 §14.4 中披露）

| 位置 | 变化 |
|---|---|
| Header | +2 个下拉导航（新增约 25 条全站内链入口，每语言一致） |
| 首页 hero | 移除 PlatformChips（迁移到新增的 Use Cases 区，见 homepage-spec §3） |
| 首页 | 移除「热门符号」条（/symbols/ 仍由分类卡、目录区、footer 三处链接，链接数不减到 2 以下） |
| 其余 | 不变：风格页 ↔ related 互链、平台页 → related + guides 回链（en）、footer 全量列 |

## 4. 范围与变更清单（D1 埋点移除的实施清单，供第三阶段执行）

**删除：**
- `src/lib/analytics.ts`（18 事件白名单 + track()）
- `src/lib/__tests__/analytics.test.ts`
- 4 个工具组件内共 22 处 `track()` 调用：`fancy-text-tool.tsx`、`gaming-name-tool.tsx`、`symbols-tool.tsx`、`bio-tool.tsx`
- `app-shell.tsx` 中 GA4/Clarity 条件注入与 `measurementIds` 引用
- `package.json` 依赖 `@vercel/analytics` + `<Analytics />` 渲染

**同步修改（内容，非代码逻辑）：**
- 隐私页 5 语言各一段「analytics 说明」改写为「本站不加载任何统计脚本，不采集任何数据」（`page-symbols-privacy.ts` 约 325–480 行区间）
- README 移除 GA/Clarity 环境变量说明（`NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID`）
- `seo/产品事实底稿.md` 核对日期刷新时补记「无任何遥测」

**环境变量清理：** Vercel 项目中的 `NEXT_PUBLIC_GA_ID`、`NEXT_PUBLIC_CLARITY_ID`（用户操作，代码删除后残留无害）。

**不做：** 方案 §10 的事件体系、GA4 DebugView 验收、转化指标——全部出范围至 90 天后（D1）。因此规范 §15 验收清单中「数据」一节按 N/A 处理。

## 5. 多语言（D2 冻结项）

- 5 语言路由、hreflang（zh-cn=zh-Hans + x-default→en）、每语言自 canonical：**维持现状，零改动**。
- 本地化范围（现状已满足，验收时复核）：Title / Description / H1 / 正文 / FAQ / UI 文案（`ui-strings.ts` 类型强制）。
- `/learn/` 豁免条款（R6）：指南 EN-only、自 canonical、不生成 hreflang、sitemap 单独区段——现状实现即正确，写成规范禁止未来误改。
- URL slug 本地化（规范 §8.2 示例）：**否决**（D2）。若某语言未来数据证明必要，走单页灰度 + 人工批准。

## 6. 阶段排期（含 D4 资源约束）

| 阶段 | 工作内容 | 与内容轨的关系 |
|---|---|---|
| Day 8–14（第三阶段） | ① 埋点移除（§4 清单）② 首页重构（homepage-spec）③ Header 导航 ④ 移动端回归 | 内容轨照常，工程任务避开周四发布日 |
| Day 15–20（第四阶段） | 功能缺口：样式对比、复制全部风格、符号码点展示（tool-page-spec §4）；Gaming/Symbols 按缺口清单补差 | 同上 |
| Day 21–25（第五阶段） | 多语言复核（基本为零改动验证）+ seo-audit 待测项实测（性能、移动端、全量状态码） | — |
| Day 26–30（第六阶段） | 回归测试、改造前后对比、交付报告 | — |

## 7. 本设计验收标准（规范 §12 第二阶段）

- [ ] 首页结构明确（homepage-spec.md）
- [ ] 工具页面模板明确（tool-page-spec.md）
- [ ] 页面保留/优化/合并建议明确（page-classification.csv，结论：全站 0 合并、0 删除、0 noindex）
- [ ] 所有潜在破坏性修改有记录（§3 内链变化、§4 删除清单、seo-audit §3 SEO 变更披露）
- [ ] URL 零变更、hreflang 零变更（D2）
