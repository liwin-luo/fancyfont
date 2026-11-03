# Site fix B：近重复风格页对比（fancy / cool / aesthetic / cute）

## 1. 元信息

- **目的**：评估四个模板相近的生成器页之间的自相残杀（cannibalization）风险，给出对比表与 A/B/C 三选项利弊。**本文档只是决策输入，不改任何站点行为。**
- **排期来源**：`/workspace/search-content/fancyfont/schedule-2026-11.md` → **Site fix B**（status: awaiting user judgment）
- **数据截止**：2026-11-03。GSC 口径：`Search type = Web`，`Date = Last 3 months`（约 2026-08 → 2026-11 窗口）。
- **GSC 数据来源**：仅引用已存在的 `/workspace/fancyfont_gsc.xlsx`（Pages 表）。禁止编造展示/点击；本文所有 GSC 数字都可直接对回该表。
- **不改代码声明**：⚠️ 本文**不伴随任何站点代码修改**。H1、canonical、301 等一切动作**等待用户决策**（见 §6）。
- **分支**：`docs/style-pages-comparison-site-fix-b`（自 `main` @ `3b266e7`）。唯一提交文件即本文。

## 2. 方法（本文依据）

1. **通读仓库源码**（`main` @ `3b266e7`，EN 为主，五语结构相同）：
   - `src/app/(en)/fancy-text-generator/page.tsx`、`src/app/(en)/[slug]/page.tsx`（两条路由入口）
   - `src/components/page-templates/fancy.tsx`、`src/components/style-page-template.tsx`（两套模板）
   - `src/components/fancy-text-tool.tsx`、`src/components/single-style-tool.tsx`（两套工具 UI）
   - `src/lib/style-pages.ts`（styleIds / wrappers / related 配置）
   - `src/lib/content/page-fancy.ts`、`src/lib/content/style-pages-en.ts`（EN 文案）
   - `src/lib/serp-title.ts`、`src/lib/site.ts`、`src/lib/metadata.ts`（title 加工与输出）
2. **行数对比**（只读）：
   ```
   wc -l src/components/style-page-template.tsx src/components/page-templates/fancy.tsx
   #   194 src/components/style-page-template.tsx
   #   134 src/components/page-templates/fancy.tsx
   # （另：fancy-text-tool.tsx 468 行 vs single-style-tool.tsx 171 行）
   ```
   在 `style-pages-en.ts` 上按 `h1:|description:|intro:` 过滤时无输出——这些键嵌在各 slug 对象内部、不在行首匹配行上，故四页文案以直接通读文件为准（`page-fancy.ts` 的过滤可命中 `meta:` / `h1:` / `intro:` 行）。
3. **线上核对**（`curl -sL`，未登录、未改动任何内容）：对四个 en URL 抓取 `<title>`、meta description、`<h1>`、canonical，与源码一致（见 §3 各卡片「实渲染」行）。
4. **Overlap 估计**：基于源码结构（模板是否共享、styleIds 是否重叠、文案是否互相指认），不用拍脑袋的 SEO 百分比。
5. **GSC**：只取 `/workspace/fancyfont_gsc.xlsx` Pages 表中与四 slug 相关的行（§5）。

## 3. 分页面卡片

### 3.1 `/fancy-text-generator/`（主多风格生成器，独立模板）

| 项 | 内容 |
|----|------|
| 规范 URL (en) | `https://fancyfont.tools/fancy-text-generator/`（canonical 自指，线上已核） |
| title（源码表达式） | `serpTitle("Fancy Text Generator", "en", "Live Preview")`，见 `page-fancy.ts` → `serp-title.ts` 拼为 `${head} — ${phrase} ${detail} \| ${siteName}` |
| title（实渲染） | `Fancy Text Generator — Copy & Paste Live Preview \| FancyFont`（线上已核，一致） |
| H1 | `Fancy Text Generator`（线上已核） |
| meta description | “Live font generator for cursive, gothic, bold, bubble, and 30 Unicode styles. The preview updates as you type. Copy and paste into bios, names, and chats.”（线上已核，一致） |
| 首屏 | H1 + intro（“A live font generator for plain text…”）+ 一句 `coreFocus`（字素计数/搜索提示）+ 工具紧随（`fancy.tsx` header → `mt-8` 工具），above the fold |
| 工具 | `FancyTextTool`（`fancy-text-tool.tsx`，468 行）：输入一次转换**全量 text-styles（约 30 种）**，带样式搜索/分类过滤、收藏/最近使用、装饰 wrap、PNG 导出、粘贴目标预览 |
| 独特块（相对另外三页） | ① 全量样式列表 + 搜索/过滤（唯一）；② “Dedicated style generators” 区块，链到**全部** style 页（唯一入口枢纽）；③ 较长的 About（Unicode 原理两段）与 4 条通用 FAQ；④ 4 条固定场景 Examples（Instagram bio / Game tag / Discord nickname / Aesthetic caption） |
| 共享块 | `CompatNote`、How to use（自有 steps）、Examples、FAQ、WebApplication + FAQPage JSON-LD —— 结构与 style 模板**不同源**（`fancy.tsx` 自成模板，不走 `StylePageTemplate`） |
| 内链 | Related：`/gaming-name-generator/`、`/symbols/`；“Dedicated style generators” → 全部 style 页（含本文三页）；`page-fancy.ts` 相关数组 |
| 引擎 | **不在** `src/lib/style-pages.ts`，不是 `StylePageDef`；转换走 `convertAll`（全样式） |

### 3.2 `/cool-font-generator/`（look 风格页，`StylePageTemplate`）

| 项 | 内容 |
|----|------|
| 规范 URL (en) | `https://fancyfont.tools/cool-font-generator/`（canonical 自指，线上已核） |
| title（源码表达式） | 无 `title` 字段 → `resolvedStyleTitle` 走 `styleSerpTitle` → `serpTitle("Cool Font Generator", "en", "Stars & Wings")` |
| title（实渲染） | `Cool Font Generator — Copy & Paste Stars & Wings \| FancyFont`（线上已核，一致） |
| H1 | `Cool Font Generator`（线上已核） |
| meta description | “Cool copy-and-paste names: bold letters with lightning, stars, or a clan wing. Free, and it stays in your browser.”（线上已核，一致） |
| 首屏 | H1 + intro + 一句 `lookUses`（本页 wraps **bold**）+ `SingleStyleTool`，above the fold |
| 工具 | `SingleStyleTool`：6 行 = Bold（裸）+ 4 条 wrapper 行（⚡ / ★彡 / ꧁༒ / 『』，只包 bold 行）+ Small caps（裸） |
| 独特块（相对另外三页） | ① 唯一主打 **bold + 符号装饰**（clan tag / gaming 定位）；② intro 与 FAQ **显式与 fancy 页切割**（见 §4）；③ `bestFor` 指向 Discord 游戏名 |
| 共享块 | `StylePageTemplate` 全套：JSON-LD 对、H1+intro+lookUses、`SingleStyleTool`、`CompatNote`、How to use（共享 `t.stylePageSteps`）、How it works（+`coverageNote`）、Where it shines、Examples（`previewStylePage`：bold+⚡）、On platforms、Related tools、FAQ、页尾 “Open the full Fancy Text Generator →”。EN 未配 `copyExamples` ⇒ 横滑区不渲染 |
| 内链 | `related`: `/cute-font-generator/`、`/dark-font-generator/`、`/bold-text-generator/` + RelatedTools 附带 `/fancy-text-generator/` + 页尾 fancy 链接 |
| 引擎 | `styleIds: ["bold", "smallCaps"]`；wrappers ⚡ / ★彡 / ꧁༒ / 『』（`style-pages.ts`） |

### 3.3 `/aesthetic-text-generator/`（look 风格页，`StylePageTemplate`）

| 项 | 内容 |
|----|------|
| 规范 URL (en) | `https://fancyfont.tools/aesthetic-text-generator/`（canonical 自指，线上已核） |
| title（源码表达式） | 无 `title` 字段 → `serpTitle("Aesthetic Font Generator", "en", "Wide Letters")` |
| title（实渲染） | `Aesthetic Font Generator — Copy & Paste Wide Letters \| FancyFont`（线上已核，一致） |
| H1 | `Aesthetic Font Generator`（线上已核）。⚠️ 事实备注：H1 是 “…Font Generator”，slug 是 “…text-generator”，两者不矛盾但不对称 |
| meta description | “Wide vaporwave letters with a sparkle or a dot-mist on either side, plus small caps if you want it quieter. Copy and paste, no font file.”（线上已核，一致） |
| 首屏 | H1 + intro + `lookUses`（wraps **fullwidth**）+ `SingleStyleTool`，above the fold |
| 工具 | `SingleStyleTool`：4 行 = Fullwidth（裸）+ 2 条 wrapper 行（·˚ / ✧･ﾟ，只包 fullwidth 行）+ Small caps（裸） |
| 独特块（相对另外三页） | ① 唯一主打 **fullwidth/vaporwave** 宽体字母；② `howItWorks` 讲 CJK 等宽栅格来历（四页中独有的技术叙事）；③ **EN 文案中没有指向任何兄弟页的句子**（cool、cute 都有，见 §4） |
| 共享块 | 同 §3.2 的 `StylePageTemplate` 全套；EN 无 `copyExamples` ⇒ 横滑区不渲染 |
| 内链 | `related`: `/cute-font-generator/`、`/elegant-font-generator/`、`/small-caps-generator/` + `/fancy-text-generator/`（RelatedTools 附带 + 页尾） |
| 引擎 | `styleIds: ["fullwidth", "smallCaps"]`；wrappers ·˚ / ✧･ﾟ |

### 3.4 `/cute-font-generator/`（look 风格页，`StylePageTemplate`）

| 项 | 内容 |
|----|------|
| 规范 URL (en) | `https://fancyfont.tools/cute-font-generator/`（canonical 自指，线上已核） |
| title（源码表达式） | 无 `title` 字段 → `serpTitle("Cute Font Generator", "en", "Hearts & Bows")` |
| title（实渲染） | `Cute Font Generator — Copy & Paste Hearts & Bows \| FancyFont`（线上已核，一致） |
| H1 | `Cute Font Generator`（线上已核） |
| meta description | “Cute copy-and-paste text: round bubble letters with one heart, bow, or flower. Free in the browser, nothing to install.”（线上已核，一致） |
| 首屏 | H1 + intro + `lookUses`（wraps **bubble**）+ `SingleStyleTool`，above the fold |
| 工具 | `SingleStyleTool`：7 行 = Bubble（裸）+ 4 条 wrapper 行（♡ / ୨୧ / ✿ / ꒰꒱，只包 bubble 行）+ Script（裸）+ Circled（裸） |
| 独特块（相对另外三页） | ① 唯一主打 **bubble + 心/结/花装饰**（kawaii/soft 定位）；② intro 与 FAQ **显式与 coquette 页切割**（“Ribbon script is the coquette page.” / “Is coquette or kawaii text a different generator?”）；③ 三行裸字母（bubble/script/circled），行数最多 |
| 共享块 | 同 §3.2 的 `StylePageTemplate` 全套；EN 无 `copyExamples` ⇒ 横滑区不渲染 |
| 内链 | `related`: `/heart-font-generator/`、`/coquette-font-generator/`、`/cool-font-generator/`、`/bubble-letters-generator/` + `/fancy-text-generator/`（RelatedTools 附带 + 页尾） |
| 引擎 | `styleIds: ["bubble", "script", "circled"]`；wrappers ♡ / ୨୧ / ✿ / ꒰꒱ |

## 4. Overlap 估计（基于源码）

量表（低 / 中 / 高）+ 证据：

| 维度 | 重叠档 | 证据（源码） |
|------|--------|--------------|
| 三 look 页之间：模板骨架 | **高** | 三页共用同一 `src/components/style-page-template.tsx`，区块顺序完全一致；How to use 用的是共享 UI 文案 `t.stylePageSteps`，三页字面相同 |
| 三 look 页之间：主字母（styleIds） | **低** | `styleIds` 两两不重合（cool: bold+smallCaps；aesthetic: fullwidth+smallCaps；cute: bubble+script+circled）；唯一交集是 **smallCaps 同时作 cool 与 aesthetic 的第二行**，且都仅作“安静备选行”存在 |
| 三 look 页之间：装饰（wrappers） | **低（互不重复）** | wrappers 互不相同且注释声明设计意图：“Look pages … wrap ONE primary alphabet in decorations that no other page uses”（`style-pages.ts` 头注） |
| 三 look 页之间：文案互指 | **中** | cool↔cute 互进对方 `related`；aesthetic 的 `related` 指向 cute；但 cute/cool/aesthetic 三页 FAQ 各自只辩自己的近邻（cute 辩 coquette、cool 辩 fancy），**aesthetic 页文案没有任何兄弟页互指** |
| look 页 vs fancy：工具 UX | **中** | 不同组件：`SingleStyleTool`（单 look 分行，171 行）vs `FancyTextTool`（全样式网格+搜索，468 行）；但两者首屏都是“输入框 + 结果 + Copy”，对只想要“一个好看的字”的用户体验相似 |
| look 页 vs fancy：字母覆盖 | **高** | fancy 走 `convertAll` 全量转换，三个 look 页用到的所有字母（bold、smallCaps、fullwidth、bubble、script、circled）都包含在 fancy 的列表里；fancy 的 Examples 甚至直接演示了这些 look：Game tag 用 `꧁༒…༒꧂`（= cool 的 wrapper）、Aesthetic caption 用 `fullwidth`（= aesthetic 的主字母）、Discord nickname 用 `smallCaps` |
| look 页 vs fancy：定位/文案互指 | **中（已部分处理）** | cool 页 FAQ 第一条已是 “Is this the same as the fancy text page? → No. Fancy Text lists every alphabet and adds no decorations. This page only builds the cool look…”；cool intro 也有 “The full list of every alphabet … is the Fancy Text page”；fancy 的 “Dedicated style generators” 区块把三页当作自己的子入口链出。**cute 与 aesthetic 尚无对 fancy 的对应辩析句** |

**结论档位**：
- 三 look 页彼此：骨架重叠**高**，但引擎与卖点分层清晰（字母不重合、装饰唯一、文案互指），互抢主要是“模板相似度”观感，不是查询意图重合。
- 三 look 页 vs fancy：**工具 UX 重叠中、字母覆盖重叠高**，定位差异靠装饰行与游戏/bio 场景支撑；是否足够由产品判断。
- 当前 GSC 上四 slug **总展示 109、点击 0**（§5），互抢风险眼下是结构性的、不是流量事实。

`diff` 思路佐证：`diff <(三 look 页渲染骨架) 任意两 look 页` 逐块相同（同一组件）；`fancy.tsx` 与 `style-page-template.tsx` 仅共享 `CompatNote`/`Steps`/`Faq`/`RelatedTools`/`JsonLd` 等原子组件，区块编排不同 ⇒ 骨架重叠低、工具 UX 重叠中。

## 5. GSC 快照（仅 xlsx 数字）

来源：**`/workspace/fancyfont_gsc.xlsx` · Pages · Last 3 months**（Web；导出截止 2026-11-03）。16 行与四 slug 相关，全部 0 clicks：

| page | impressions | clicks | CTR | avg position |
|------|-------------|--------|-----|--------------|
| `/pt-br/fancy-text-generator/` | 21 | 0 | 0% | 30.14 |
| `/es/fancy-text-generator/` | 15 | 0 | 0% | 70.47 |
| `/zh-cn/cute-font-generator/` | 12 | 0 | 0% | 4.5 |
| `/cute-font-generator/` | 12 | 0 | 0% | 64.92 |
| `/id/cute-font-generator/` | 8 | 0 | 0% | 5.0 |
| `/zh-cn/cool-font-generator/` | 8 | 0 | 0% | 5.5 |
| `/id/fancy-text-generator/` | 6 | 0 | 0% | 23.33 |
| `/es/aesthetic-text-generator/` | 6 | 0 | 0% | 35.83 |
| `/pt-br/cute-font-generator/` | 4 | 0 | 0% | 8.75 |
| `/es/cool-font-generator/` | 4 | 0 | 0% | 70.75 |
| `/id/aesthetic-text-generator/` | 4 | 0 | 0% | 71.5 |
| `/fancy-text-generator/` | 2 | 0 | 0% | 10.5 |
| `/es/cute-font-generator/` | 2 | 0 | 0% | 17.0 |
| `/aesthetic-text-generator/` | 2 | 0 | 0% | 39.5 |
| `/pt-br/cool-font-generator/` | 2 | 0 | 0% | 42.5 |
| `/id/cool-font-generator/` | 1 | 0 | 0% | 4.0 |

slug 汇总（可逐行核对上表；Last 3 months，GSC xlsx）：

| slug（全语种合计） | impressions | clicks |
|--------------------|-------------|--------|
| `fancy-text-generator`（en 2 + pt-br 21 + es 15 + id 6） | 44 | 0 |
| `cute-font-generator`（en 12 + zh-cn 12 + id 8 + pt-br 4 + es 2） | 38 | 0 |
| `cool-font-generator`（zh-cn 8 + es 4 + pt-br 2 + id 1；**表中无 en 根行**） | 15 | 0 |
| `aesthetic-text-generator`（es 6 + id 4 + en 2） | 12 | 0 |
| **四 slug 总计** | **109** | **0** |

如实备注：en 主 URL 展示极低（fancy 2、aesthetic 2、cute 12，cool 在表中没有 en 行），**不能**用“应该很多”补叙事。en 根页 0 点击 + 展示个位数，说明问题目前是“结构预防”，不是“存量损失”。

## 6. 三个选项（等待用户决策）

| 选项 | 含义 | 优点 | 风险/成本 | 适用信号 |
|------|------|------|-----------|----------|
| **A. 独特 H1/首屏角度** | 保留四 URL，强化差异文案与内链角色 | 保留长尾；改动小 | 若角度仍糊仍会互抢 | 各页有清晰差异词且 GSC 有分开需求 |
| **B. canonical → 主生成器** | cool/aesthetic/cute（或其中部分）`rel=canonical` 到 `/fancy-text-generator/` | 合并权重信号 | 可能丢 look 专用查询；需慎选 | 确认 look 页几乎无独立价值 |
| **C. 合并 + 301** | 下线部分 look URL，301 到 fancy 或单一 hub | 最干净 | 工程与书签/外链成本；不可轻易回滚 | 产品决定减少索引面 |

**推荐倾向（advisory，仅供参考）**：现状更接近选项 A 已大半落地——三页引擎分层清晰（字母不重合、装饰互不重复）、title/H1 各不相同、canonical 均自指（线上已核）。剩余可做的小步是补齐文案互指（cute/aesthetic 仿照 cool 加一句对 fancy 的辩析）。B/C 在 GSC 只有 109 展示/0 点击的现状下，收益无法度量、回滚成本高，**不建议**此时执行。

> ⚠️ **Awaiting user decision — 在用户明确选择 A/B/C（或混合）之前，不得改站点代码、canonical 或重定向。**

## 7. 建议的下一步（仍等批准，本文不执行）

- **若选 A**：① 给 `/cute-font-generator/` 与 `/aesthetic-text-generator/` 各补一条类似 cool 的 FAQ（“Is this the same as the fancy text page?”），intro 各补一句指向 fancy 的完整列表；② 评估 `/aesthetic-text-generator/` 的 H1（“…Font Generator”）与 slug（“…text-generator”）是否要对齐——只列建议，不动手。
- **若选 B**：先确认 look 页无独立价值的信号（当前 GSC 展示量过低，无法据此判断）；候选顺序建议 aesthetic → cool → cute（aesthetic 文案互指最少、与 fancy 的 fullwidth/smallCaps 字母重叠最直接）。同样**只列建议**。
- **若选 C**：需产品先决定保留哪些 URL 作为 hub，再评估 301 映射与外链盘点，本文不展开。
- 观察手段（不改代码）：给四 slug 建 GSC 监控行，收集 ≥1 个完整季度的 en 根页数据再复查 B/C 的前提。

## 8. 参考路径列表（本文用过的文件）

- `src/app/(en)/fancy-text-generator/page.tsx`
- `src/app/(en)/[slug]/page.tsx`
- `src/components/page-templates/fancy.tsx`
- `src/components/style-page-template.tsx`
- `src/components/fancy-text-tool.tsx`
- `src/components/single-style-tool.tsx`
- `src/lib/style-pages.ts`
- `src/lib/content/page-fancy.ts`
- `src/lib/content/style-pages-en.ts`
- `src/lib/serp-title.ts`
- `src/lib/site.ts`（`siteName = "FancyFont"`）
- `src/lib/metadata.ts`
- `src/lib/content/core-focus.ts`
- `/workspace/fancyfont_gsc.xlsx`（GSC 数据，只引用不修改）
- `/workspace/search-content/fancyfont/schedule-2026-11.md`（排期来源，只读）
