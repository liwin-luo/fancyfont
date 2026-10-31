# FancyFont 90 天开发与实施方案

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 在 2026-10-31 至 2027-01-29，把现有 Fancy Text、Gaming Names、Symbols 收成可度量的差异化工具（游戏昵称组合 + 字符分析），并只为已有独立意图的页面补内容，不新铺模板页。

**Architecture:** 继续用现有 Next.js App Router 纯前端架构。新能力落在 `src/lib/` 的纯函数（计数、字符分析、平台规则、埋点），组件只消费它们。样式引擎保持函数映射，不改写成 JSON。平台限制继续标成「约 / 未实测」，没有测试记录不得标 Verified。用户原文不离开浏览器，埋点只发事件名、样式 ID、长度区间。

**Tech Stack:** Next.js 15、React 19、TypeScript、Tailwind 4、Vitest。分析用 GA4 + Microsoft Clarity，环境变量打开，未配置时埋点是空操作。不新增运行时依赖。

**基准文档：** `FancyFont_90天网站改造与SEO增长规划.md`（2026-10-31）。本方案以当前仓库为准，和规划冲突时以本方案的「不做」为准。

**人力：** 一名全栈，前端为主。调整后约 24～30 人日，摊在 90 个日历日里。60% 功能，25% 页面与文案，15% 数据和技术 SEO。

---

## 1. 现状：规划要做的，代码里哪些已经有

站点是 `fancyfont.tools`。英语在根路径，另外四种语言是 `/es/`、`/pt-br/`、`/zh-cn/`、`/id/`。规划里的 `/pt/` 和 hreflang `zh-CN` 与线上不符：线上葡萄牙语是 `/pt-br/`，简体中文 hreflang 是 `zh-Hans`（`src/lib/i18n.ts`）。已索引 URL 不改。

| 规划项 | 仓库现状 | 本阶段动作 |
| --- | --- | --- |
| 约 30 种 Unicode 样式、分类、覆盖范围 | `src/lib/text-styles.ts` 已有 id、category、coverage、risk、transform | 加搜索别名。不改成 JSON，不扩到 100 种 |
| 样式搜索、收藏、复制、PNG | `fancy-text-tool.tsx`、`storage.ts`、`export-image.ts`、`copy-button.tsx` | 搜索吃别名；补最近使用；计数改成字素簇 |
| 游戏昵称组合、预设、去重、保存 | `nickname.ts`、`gaming-name-tool.tsx` | 接平台字段长度和字符分析，不重写生成器 |
| 符号库、18 类、搜索、最近、多选托盘、组合模板 | `symbols-data.ts`、`symbols-tool.tsx` | 收藏、托盘可持久、文字+符号拼接 |
| 风格页（cursive、bold、gothic、bubble、small caps、tiny、glitch/zalgo、upside down 等） | `src/lib/style-pages.ts` | 不新建同意图 URL。glitch 页已承接 zalgo |
| 平台页（IG、TikTok、Discord、FB、YouTube、PUBG、Free Fire、COD、Roblox、Adopt Me、Berry Avenue） | `src/lib/platform-pages.ts` | 加深已有页，不建 `*-bio-fonts` 平行页 |
| 空白字符 | `/blank-space/`，`blank-space.ts` | 优化说明。零宽仍留在符号库 invisible 类 |
| Sitemap、robots、canonical、hreflang、WebApplication / FAQ JSON-LD | `sitemap.ts`、`robots.ts`、`metadata.ts`、各 page template | 审计缺口，不重建 |
| 平台预览长度 | `platform-preview.ts` 用码点计数，文案写「约」 | 抽成带置信度的规则表，UI 继续说未实测 |
| GA4 / Clarity / 产品事件 | 没有。隐私文案写明上分析前要先改隐私页 | 第一周做，且先改隐私页 |
| 字素簇计数 | Fancy Text 用 `text.length`（UTF-16）。预览用码点 `[...text].length` | 统一到 `measureText` |
| 兼容性报告、Verified 测试库 | 没有。页面只有免责声明 | 分析器先做；Verified 等有测试记录再出现 |
| Social Bio 流程 | 没有独立流程。平台页是通用文字工具 + 字段说明 | 第二个月做在 Instagram / TikTok / Discord 页上 |
| 账号、付费、AI 文案、日语 | 没有 | 90 天不做 |

事实来源仍是 `seo/产品事实底稿.md` 和 `seo/keyword-intent-map.md`。新页面上线前先改这两份，避免文案承诺代码没有的限制。

---

## 2. 不做

这些是规划里容易被做成大工程、但和现有代码或战略冲突的项。

1. **不把样式引擎改成 JSON 映射表。** Zalgo、删除线、上下颠倒不是一张码点表能表达的。`TextStyle` 上加 `aliases: string[]` 就够搜索、筛选和 SEO 复用。
2. **不新建已有意图的 URL。** 集群 A 的风格页、集群 B/C 的平台页、blank space、zalgo（即 glitch 页）都在。同义词进同一页的 title / H1 / FAQ。
3. **不改语言前缀。** 保持 `/pt-br/` 与 `zh-Hans`。
4. **不把「约 16 / 约 12」升成 Verified。** `previewFields` 里的数字是预览卡拟合，注释已写明不是平台规范。新规则类型必须带 `confidence`，默认 `published_approx`。
5. **不把用户输入发到 GA4 或 Clarity。** 事件参数白名单：`page`、`tool`、`style_id`、`platform`、`length_bucket`、`ok`。类型上不接受 `text`。
6. **90 天不加日语、账号、会员、AI 生成、字体文件下载、ASCII 艺术。** ASCII 和 text reverser 放到第 11 周，有复制率数据再决定；默认只做 reverser，ASCII 砍掉。
7. **符号分类页默认不建。** `/heart-symbols/`、`/kaomoji/` 等放到第 8 周用 GSC 裁决。裁决前只在 `/symbols/` 上做筛选深链（`#hearts` 一类已有分类 id），不增加索引 URL。

---

## 3. 共享模块

新逻辑集中在四个文件，三个工具一起用。

```text
src/lib/measure.ts            字素簇 / 码点 / UTF-16
src/lib/unicode-analyze.ts    码点、区块、组合字符、变体选择符、映射缺口
src/lib/platform-rules.ts     字段、约略上限、计数单位、置信度、来源
src/lib/analytics.ts          白名单事件；无测量 ID 时为空操作
```

`platform-preview.ts` 的 `previewFields` 改为从 `platform-rules.ts` 读 `published_approx` 的预览上限，避免两套数字。`codePointLength` 保留为 `measureText(text).codePoints` 的别名，现有测试不用大改。

计数展示（高级信息，默认折叠）：

```text
Visible characters: 12
Unicode code points: 15
UTF-16 units: 16
```

长度警告用该字段声明的单位。未声明单位时用码点，并在 UI 写「按码点估算，平台可能按别的规则计数」。

埋点事件名沿用规划第 9.2 节，但第一周只接已经存在的动作：浏览、复制成功、样式筛选、收藏、PNG、符号搜索、加入托盘、复制全部、昵称生成、保存。兼容性检查和 Bio 事件随功能上线再加，避免空事件。

---

## 4. 三阶段开发计划

日期与规划一致。每周验收是「能在浏览器里点通」，不是文档完成。

### 第一阶段 · Day 1～30（2026-10-31 ～ 2026-11-29）

目标：三个现有工具更诚实、更好用，并且开始记行为。不新增索引 URL。

| 周 | 日期 | 交付 | 人日 |
| --- | --- | --- | --- |
| 1 | 10-31 ～ 11-06 | 技术 SEO 审计清单、隐私页改完、GA4/Clarity 可开关、`measure` + 样式别名 | 3 |
| 2 | 11-07 ～ 11-13 | Fancy Text：字素计数、别名搜索、最近样式、复制反馈保持现状 | 2 |
| 3 | 11-14 ～ 11-20 | 平台规则表 + 字符分析 MVP，接到 Gaming 和平台预览 | 4 |
| 4 | 11-21 ～ 11-29 | Symbol：收藏、托盘持久、文字与符号拼接、三个工具互链 | 2.5 |

第一个月验收：

- Fancy Text 输入 `e\u0301` 和 `😀` 时，可见字符数分别是 1，UTF-16 分别是 2。
- 搜索 `cursive`、`zalgo`、`bubble` 能命中对应样式。
- Gaming / 平台预览超长时出现警告，文案含「未在本站实测」或等价表述，不出现 Verified。
- 字符分析能列出组合字符和映射未覆盖的原样字符。
- Symbols 多选结果刷新后还在，能和一段文字拼在一起复制。
- 复制、生成、导出在配置了测量 ID 的环境里出现事件；事件参数里没有原文。
- 五种语言的首页、Fancy、Gaming、Symbols、一条平台页、一条风格页，手机宽度能完成「输入 → 复制」。

### 第二阶段 · Day 31～60（2026-11-30 ～ 2026-12-29）

目标：把差异化做进已有场景页。新增索引页 0～4 个，且每个都先过第 8 周的裁决。

| 周 | 日期 | 交付 | 人日 |
| --- | --- | --- | --- |
| 5 | 11-30 ～ 12-06 | Social Bio MVP：模板、换行、符号、计数、复制、PNG。只做 Instagram、TikTok、Discord 三个已有页 | 3 |
| 6 | 12-07 ～ 12-13 | 兼容性报告面板：分析 + 规则置信度 + 风险句。无测试记录时结果固定为 Needs verification | 3 |
| 7 | 12-14 ～ 12-20 | 加深 8 个已有页：首页、Fancy、Gaming、Symbols、Instagram、PUBG、Free Fire、Roblox。文案和工具焦点不同，见第 6 节 | 4 |
| 8 | 12-21 ～ 12-29 | 用 GSC 决定是否新增符号意图页。默认为零。若做，最多 heart、aesthetic、kaomoji 三页，且工具不是首页的复制 | 2 |

第二个月验收：

- 三个社交页能从模板生成一段多行简介并一次复制。
- 兼容性面板对未测试平台不显示 Verified。
- 8 个核心页的 title、H1、首屏工具焦点互不完全相同（用现有 `serp-title` 测试加一条快照断言）。
- 五种语言这些页面的标题和 FAQ 仍是手写，不机器替换关键词。
- 埋点能按 `tool` 分开看复制率。

### 第三阶段 · Day 61～90（2026-12-30 ～ 2027-01-29）

目标：用前 60 天的数据决定下一刀切在哪，而不是把规划第 5 节的表做完。

| 周 | 日期 | 交付 | 人日 |
| --- | --- | --- | --- |
| 9 | 12-30 ～ 01-05 | 只复用现有映射。Upside down、Zalgo、Tiny、Blank space 已有页做一次体验修补。Text reverser 仅当 blank/glitch 复制率说明长尾工具有人用时才做 | 2 |
| 10 | 01-06 ～ 01-12 | 从 cursive、gothic、bubble、small caps、TikTok、Discord 里选 GSC 有曝光但意图不清的页改文案。不新开 URL | 2 |
| 11 | 01-13 ～ 01-19 | 五语 hreflang、canonical、`html lang`、sitemap 互指检查。日语只有在 GSC 国家里 JP 明显抬头时才单独立项，本周不做 | 2 |
| 12 | 01-20 ～ 01-26 | 按复制率和跨工具率调首页三张卡片的顺序和文案 | 1 |
| 13 | 01-27 ～ 01-29 | 90 天复盘：索引、曝光、点击、工具激活、复制率、下一季度只保留一条主线 | 1 |

90 天结束时必须有的东西：

- Fancy Text、Gaming Name Builder、Symbol Studio、Social Bio MVP、Compatibility MVP 都能在现有 URL 上用完。
- 核心事件在 GA4 里能查到，且抽查一条请求没有用户原文。
- 核心页移动端主路径走过一遍。
- Sitemap 含全部索引页，每种语言 canonical 指向自己。
- 关键词表（`seo/keyword-intent-map.md`）补上 GSC 的展示和点击，搜索量仍空着就保持空着。
- 下一季度路线图只选一个主线：继续游戏昵称，或转向社交简介。数据不够就维持游戏昵称。

不作为 90 天承诺的数字：自然点击增长倍率、进前 20、新增 6～10 个页面、4～6 篇教程。教程只有在某一页的展示上来了但 CTR 低、而且工具本身已经说清楚用法时才写，最多 2 篇，挂在该工具页底部，不另起博客站。

---

## 5. 第一阶段详细任务

每项都是一次可合并的改动。测试用现有 Vitest：`npm test`。逻辑放 `src/lib/`，断言放 `src/lib/__tests__/`。UI 改完在 `npm run dev` 里走一遍主路径。

### Task 1: 文本三种长度

**Files:**

- Create: `src/lib/measure.ts`
- Test: `src/lib/__tests__/measure.test.ts`
- Modify: `src/lib/platform-preview.ts`（`codePointLength` 改为调用 `measureText`）
- Modify: `src/components/fancy-text-tool.tsx`（输入计数和上限判断改用字素簇；折叠区展示三种数）
- Modify: `src/lib/ui-strings.ts`（三种计数的五语文案）

**Step 1: 失败测试**

```ts
import { describe, expect, it } from "vitest";
import { measureText, lengthBucket } from "@/lib/measure";

describe("measureText", () => {
  it("counts a grapheme cluster as one visible character", () => {
    const m = measureText("e\u0301");
    expect(m.graphemes).toBe(1);
    expect(m.codePoints).toBe(2);
    expect(m.utf16).toBe(2);
  });

  it("counts an emoji as one visible character and two UTF-16 units", () => {
    const m = measureText("😀");
    expect(m.graphemes).toBe(1);
    expect(m.utf16).toBe(2);
  });

  it("buckets length without keeping the text", () => {
    expect(lengthBucket(0)).toBe("0");
    expect(lengthBucket(12)).toBe("1-20");
    expect(lengthBucket(80)).toBe("21-120");
    expect(lengthBucket(121)).toBe("121+");
  });
});
```

**Step 2:** `npm test -- src/lib/__tests__/measure.test.ts` 应失败。

**Step 3: 实现**

```ts
export interface TextMeasures {
  graphemes: number;
  codePoints: number;
  utf16: number;
}

export function measureText(text: string): TextMeasures {
  const Segmenter = (Intl as { Segmenter?: typeof Intl.Segmenter }).Segmenter;
  const graphemes = Segmenter
    ? [...new Segmenter(undefined, { granularity: "grapheme" }).segment(text)].length
    : [...text].length; // ponytail: 无 Segmenter 时退回码点。升级路径是测试环境补 polyfill，不手写分段器。
  return { graphemes, codePoints: [...text].length, utf16: text.length };
}

export function lengthBucket(graphemes: number): "0" | "1-20" | "21-120" | "121+" {
  if (graphemes <= 0) return "0";
  if (graphemes <= 20) return "1-20";
  if (graphemes <= 120) return "21-120";
  return "121+";
}
```

Fancy Text 的 120 上限改为按字素簇截断，避免把一个 emoji 切成半个代理项。平台预览仍按码点，和现在的警告一致，只是数字来自 `measureText`。

**Step 4:** 测试通过。手动：输入 `😀`，可见字符为 1。

**Step 5:** 提交信息建议 `feat: count visible characters as graphemes`。

### Task 2: 样式搜索别名

**Files:**

- Modify: `src/lib/text-styles.ts`（`TextStyle` 增加 `aliases: readonly string[]`）
- Modify: `src/lib/__tests__/text-styles.test.ts`
- Modify: `src/components/fancy-text-tool.tsx` 的过滤
- Modify: `src/lib/ui-strings.ts` 仅当别名需要本地化时。英文别名（cursive、zalgo、bubble letters、old english）放样式数据里，五种语言搜索都认这些词，因为查询本身是英文搜索习惯。本地样式名继续走 `t.styleNames`。

别名最少覆盖：`script → cursive, handwriting`；`fraktur → gothic, old english`；`bubble → bubble letters`；`smallCaps → small caps`；`zalgoLight/Medium/Heavy → zalgo, glitch`；`upsideDown → upside down, flip`；`superscript/subscript → tiny`。

测试：`convertAll` 或新函数 `styleMatches(style, "cursive")` 对 script 为 true，对 bold 为 false。不要为了别名去改转换结果。

### Task 3: 最近使用的样式

**Files:**

- Modify: `src/components/fancy-text-tool.tsx`
- 复用 `useLocalList("fancyfont:recent-styles", 8)`

复制成功时 `recents.add(styleId)`。筛选条增加 Recent，空则不显示。不新写存储层。无单测；手动复制两种样式后刷新，Recent 仍在。

### Task 4: 埋点与隐私页

**Files:**

- Create: `src/lib/analytics.ts`
- Test: `src/lib/__tests__/analytics.test.ts`
- Modify: `src/components/app-shell.tsx`（有 `NEXT_PUBLIC_GA_ID` 才插入 gtag；有 `NEXT_PUBLIC_CLARITY_ID` 才插入 Clarity）
- Modify: `src/lib/content/page-symbols-privacy.ts` 五种语言：写明使用 GA4 与 Clarity、不上传输入文本、可拒绝的范围以各工具的说明为准
- Modify: 复制、PNG、收藏、符号复制、昵称复制的调用点，各加一行 `track`

```ts
const EVENTS = [
  "fancy_text_view",
  "fancy_text_style_filter",
  "fancy_text_copy",
  "fancy_text_favorite",
  "fancy_text_png_export",
  "gaming_name_view",
  "gaming_name_generate",
  "gaming_name_copy",
  "gaming_name_save",
  "symbols_view",
  "symbols_search",
  "symbols_category_select",
  "symbol_copy",
  "symbol_add_to_board",
  "symbol_copy_all",
] as const;

export type AnalyticsEvent = (typeof EVENTS)[number];

export interface AnalyticsParams {
  page: string;
  tool: "fancy" | "gaming" | "symbols" | "blank" | "bio";
  style_id?: string;
  platform?: string;
  length_bucket?: string;
  ok?: boolean;
}

export function track(event: AnalyticsEvent, params: AnalyticsParams): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  gtag("event", event, params);
}
```

测试不打网络：断言 `track` 在没有 `gtag` 时不抛错；给 `AnalyticsParams` 做一次类型层面的约束即可（不要 `text` 字段）。搜索事件在输入停止 500ms 后发一次，参数只有 `length_bucket` 表示查询长度，不发查询字符串。

Clarity 脚本按官方 snippet 放进 `app-shell`，同样无 ID 不渲染。上线前在隐私页能读到这段说明。测量 ID 由部署环境提供，不写进仓库。

第一周同时产出审计笔记，追加到 `seo/keyword-intent-map.md` 顶部或单独 `seo/tech-audit-2026-11.md`，只记失败项：抽查首页和一条工具页的 200、`robots.txt`、sitemap 是否含五语、canonical 是否自指、404 是否真 404、H1 是否在服务端 HTML 里。用 `curl -sI` 和 `curl` 对本地 `next start` 或线上即可。已通过的项记一行「通过」，不展开。

### Task 5: 平台规则表

**Files:**

- Create: `src/lib/platform-rules.ts`
- Test: `src/lib/__tests__/platform-rules.test.ts`
- Modify: `src/lib/platform-preview.ts` 从规则表取 `nameMax` / `extra.max`
- Modify: 游戏工具和平台页上的长度警告，读取规则并带出置信度文案

```ts
export type RuleConfidence = "unverified" | "published_approx" | "verified";

export interface PlatformFieldRule {
  platformId: string;
  field: "display_name" | "username" | "bio" | "player_name" | "status";
  /** 预览用上限。null 表示不警告。 */
  approxMax: number | null;
  unit: "code_points" | "graphemes" | "utf16";
  unicodePolicy: "unknown" | "often_shown" | "usually_stripped";
  emojiPolicy: "unknown" | "often_shown" | "usually_stripped";
  confidence: RuleConfidence;
  sourceNote: string;
  testedAt: string | null;
}

export function confidenceLabel(rule: PlatformFieldRule): "verified" | "partial" | "needs_verification" {
  if (rule.confidence === "verified" && rule.testedAt) return "verified";
  if (rule.unicodePolicy === "usually_stripped") return "partial";
  return "needs_verification";
}
```

种子数据从现有 `previewFields` 和 `seo/产品事实底稿.md` 搬过来，`confidence` 全部是 `published_approx`，`testedAt` 全部 `null`。测试：`confidenceLabel` 在 `testedAt === null` 时绝不是 `"verified"`，即使有人误把 confidence 写成 `verified`。这是本文件唯一要守住的不变量。

Roblox username 继续用现有 `plainHandle`：纯文本、符号会被去掉。这条是产品行为，不是「已验证游戏服务器接受」。UI 写「登录名只保留平台公开允许的 ASCII」，不写「一定能通过审核」。

### Task 6: Unicode 分析器

**Files:**

- Create: `src/lib/unicode-analyze.ts`
- Test: `src/lib/__tests__/unicode-analyze.test.ts`
- Modify: `src/components/gaming-name-tool.tsx` 在自定义组合预览下加一块「字符分析」
- Modify: `src/lib/ui-strings.ts`

分析器只做浏览器做得到的事：

- 逐字素列出码点（`U+XXXX`）
- 是否含组合附加符号（`\p{M}`）
- 是否含变体选择符（`U+FE0E` / `U+FE0F`）
- 是否含 emoji（`\p{Extended_Pictographic}`）
- 选定样式下，哪些拉丁字母转换后仍与输入相同（映射缺口）

不做：判断游戏服务器收不收、设备有没有字体。报告固定三行状态：`Character analysis: complete`、`Platform rule: needs verification | partial | verified`（来自 Task 5）、`Display: depends on the device`。

测试用例用规划里的例子不算数，用固定字符串：`"A\u0301"` 含组合标记；`"❤\uFE0F"` 含变体选择符；`convert` 缺口用一个已知 partial 样式（看 `coverage === "partial"` 的样式）喂一个它留原样的字符。

游戏页第一版只在用户展开「检查这段昵称」时渲染，避免首屏变长。PUBG、Free Fire、Roblox、COD 四个 `toolMode: "gaming"` 的平台页复用同一面板，传入对应 `platformId`。

### Task 7: Symbol Studio 补齐

**Files:**

- Modify: `src/components/symbols-tool.tsx`
- Modify: `src/lib/ui-strings.ts`
- 可选小函数放 `src/lib/symbols-data.ts`：`joinBoard(text: string, symbols: string[]): string` 只做拼接，测试一行

已有托盘是 `useState`，刷新即失。改为 `useLocalList("fancyfont:symbol-board", 40)`。收藏用 `useLocalList("fancyfont:favorite-symbols", 80)`，卡片上加星，交互复制现有 Fancy Text 收藏按钮。

文字拼接：托盘上方一个单行输入，复制全部时复制 `joinBoard(input, board)`，即 `input + board.join("")`。输入为空则行为与现在的 `copyTray` 相同。

组合模板 `symbolCombos` 保持一键复制。不在本月做「模板编辑器」。Aesthetic 场景分类先不加新数据层：现有 category id 够用。搜索事件不要发送查询词。

三个工具页的相关链接：Fancy 结果区链到 Gaming 和 Symbols，Gaming 链到 Symbols，Symbols 链到 Gaming。用已有 `localePath`，文案进 `ui-strings`。这是规划里的交叉导流，不做新页面。

### Task 8: 第一月末回归

- `npm test` 全绿，`npm run typecheck` 通过。
- 浏览器：桌面和 390px 宽各走一遍 Fancy 复制、Gaming 生成并展开分析、Symbols 加入托盘后刷新再复制。
- 隐私页五语都能看到分析工具说明。
- 不发版日语、不新增 sitemap URL。

---

## 6. 第二阶段实施方案

### 6.1 Social Bio（第 5 周）

不新路由。在 `platform-pages` 里给 Instagram、TikTok、Discord 加 `bioMode: true`。这三个页的工具从「单行风格列表」切成「简介草稿」：

```text
模板（3 个，写死在该平台文案里，五语手写）
  → 套用 Fancy 样式（复用 convertText）
  → 行尾追加当前符号托盘（读 fancyfont:symbol-board）
  → 按该字段 approxMax 显示计数
  → 复制整段 / 导出 PNG（复用 downloadTextPng）
```

模板是换行字符串，不是 AI。例如 Instagram 三个方向：名字一行、空行、一行符号。具体句子放 `platform-pages-*.ts`，和现有 FAQ 一样按语言手写。

**Files:** `src/lib/bio.ts`（套模板 + 计数）、`src/lib/__tests__/bio.test.ts`、`src/components/bio-tool.tsx`、三个平台的页面模板分支、`ui-strings.ts`、埋点 `bio_template_select`、`bio_copy`、`bio_png_export`。

测试：给定模板、样式 id、符号数组，输出字符串确定；超限时返回 `{ text, over: true }`，不截断用户内容（截断会弄坏 emoji）。超限只警告。

Facebook、YouTube 本月不加 bio 模式。它们的字段说明保持原样。

### 6.2 兼容性报告（第 6 周）

把 Task 6 的面板抽成 `src/components/compat-report.tsx`，Fancy Text 的单条结果也能打开。报告结构固定为规划第 4.5 节的三块：输入预览、Unicode 分析、平台规则。平台未选择时第二块仍在，第三块写「未选择平台」。

禁止的文案：`will work`、`supported`、`guaranteed`、`已验证`（除非 `confidenceLabel` 返回 `verified`）。用一条测试扫英文 UI 字符串常量，或在 `compat-report` 的纯函数 `reportStatus(rule)` 上断言。页面长文案不靠测试穷举，靠这一处状态词。

本月不采集真实游戏测试。`testedAt` 继续全是 `null`。若有人以后补测试，记录字段是：日期、版本、平台、字段、样例字符、结果。先把类型放在 `platform-rules.ts`，不建后台。

### 6.3 八个核心页怎么改才不算换标题（第 7 周）

每页只改「首屏工具焦点 + 一段该页才有的说明」。五语一起改，禁止只改英语。

| 页面 | 首屏必须多出来的东西 | 不要做的 |
| --- | --- | --- |
| `/` | 定位句改成 stylish text、gaming names、symbols 三件事，卡片顺序先保持 | 不把首页做成第四个工具 |
| `/fancy-text-generator/` | 字素计数和别名搜索可见 | 不堆平台教程 |
| `/gaming-name-generator/` | 组合器 + 字符分析入口 | 不写「保证通过审核」 |
| `/symbols/` | 托盘持久和文字拼接可见 | 不拆成十个分类站 |
| `/instagram-fonts/` | Bio 草稿模式，字段仍是 display name 与 bio | 不新建 `/instagram-bio-fonts/` |
| `/pubg-name-generator/` | 约 16 码点警告 + 分析面板 + needs verification | 不把 16 写成官方硬限制 |
| `/free-fire-name-generator/` | 约 12，其余同 PUBG | 不复制 PUBG 的例子当自己的例子 |
| `/roblox-name-generator/` | Username 与 Display Name 分两栏说明；登录名走 `plainHandle` | 不暗示装饰字符能当用户名 |

Title 沿用 `serp-title.ts` 的长度约束。规划第 6.2 节的英文句子若超出现有标题测试上限，截到测试允许的长度，意图留在 description。先改 `src/lib/__tests__/serp-title.test.ts` 会失败的那条，再改文案。

### 6.4 第 8 周页面裁决

只看 GSC 导出，不看猜测的搜索量。一张表，四列：查询、现有 URL、28 天展示、是否独立意图。

独立意图的判定：查询在现有 URL 上几乎没有展示，且搜索结果前 10 不是本站已有页的同类工具。满足才允许新页。候选顺序：

1. `/kaomoji/` — 仅当「kaomoji」查询不落在 `/symbols/`。工具是现有 kaomoji 分类的独立页，数据仍来自 `symbols-data.ts`。
2. `/heart-symbols/` — 仅当查询与 `/heart-font-generator/`、`/symbols/` 都不是同一意图（单符号复制 vs 文字加心）。
3. aesthetic / cute 默认合并进 `/symbols/` 的分类，不建页。

新页必须走现有 `[slug]` 或单独 `page.tsx` 五语各一份，加入 `sitemap.ts` 的路径表，并更新 `seo/keyword-intent-map.md`。做不到五语手写，就不要发这一页。

---

## 7. 第三阶段实施方案

第 9 周先读 GA4：Fancy、Gaming、Symbols、Bio 的 `*_copy` 次数。复制率最高的工具，首页第一张卡片改成它。没有数据就保持 Gaming 第二、Fancy 第一，不动布局。

Text reverser：`src/lib/reverse.ts` 按字素簇反转，测试 `"e\u0301"` 反转后仍是一个字素。页面 `/text-reverser/` 五语。仅当第 9 周决定做。不做则本文件不存在。

第 10 周不发明新关键词页。打开 GSC 展示最高的 6 个已有 URL，每个只改一处：标题没有写出工具动作的，改标题；FAQ 在回答别的页的问题的，改 FAQ 并链到那一页。`keyword-intent-map.md` 里 elegant/coquette、dark/chicano/gothic、heart/cute/preppy、symbols/blank-space 四组，把「查询是否落到同一 URL」填上，决定下季度合并或保持。

第 11 周检查清单（脚本或测试，能自动化的不要手点）：

- 每个索引路径 × 5 语言都在 sitemap。
- 每页 canonical 是自己的 locale path。
- hreflang 五语加 `x-default` 指向英语。
- `html lang` 与 `htmlLang` 一致。
- 抽查一页视图源码，H1 和第一段在 HTML 里，不靠点击才出现。

第 13 周复盘写成 `seo/retro-2027-01.md`，八个标题用规划第 10 部分 Week 13 的列表。下一季度只写一个赌注和明确不做的三件事。

---

## 8. 关键词与页面对照

规划第 5 节里，下面这些 **已经有页，禁止再造**：

`/fancy-text-generator/`、`/`、`/cursive-text-generator/`、`/bold-text-generator/`、`/gothic-text-generator/`、`/bubble-letters-generator/`、`/small-caps-generator/`、`/upside-down-text-generator/`、`/glitch-text-generator/`（含 zalgo）、`/tiny-text-generator/`、`/instagram-fonts/`、`/tiktok-fonts/`、`/discord-fonts/`、`/facebook-fonts/`、`/youtube-fonts/`、`/gaming-name-generator/`、`/pubg-name-generator/`、`/free-fire-name-generator/`、`/roblox-name-generator/`、`/cod-name-generator/`、`/symbols/`、`/blank-space/`。

下面这些 **90 天内默认不建**，理由是同意图或产品接不住：

| 规划 URL | 决定 |
| --- | --- |
| `/instagram-bio-fonts/`、`/tiktok-bio-fonts/`、`/discord-text-formatter/`、`/aesthetic-bio-generator/` | 做进对应平台页的 Bio 模式 |
| `/cool-gamer-names/`、`/stylish pubg names` 独立页 | 留在 `/gaming-name-generator/` 与 `/pubg-name-generator/` |
| `/invisible-name-generator/`、`/invisible-characters/` | 零宽在符号 invisible 类；可见空白在 `/blank-space/`。两页文案互相链，不增加第三页，除非第 8 周查询证明两边都接不住 |
| `/gaming-symbols/` | 符号页分类 + Gaming 互链 |
| `/heart-symbols/` 等分类站 | 第 8 周裁决，默认不建 |
| `/text-reverser/` | 第 9 周可选 |
| `/ascii-text-art/`、`/zalgo-text-generator/` | 不做。Zalgo 继续用 glitch 页 |
| Font download、AI font、logo、tattoo、signature、font converter | 规划第 5.3 节，不做 |

评分公式 `0.3D+0.25F+0.2C+0.15K+0.1R` 先不落地成功能。D 没有搜索量时不打分。本季度用两个已有信号排序：产品是否已经能完成该任务（Fit）、是新 URL 还是改旧 URL（成本）。改旧 URL 优先。

---

## 9. 数据、SEO、发布

**环境变量（不进 git）：** `NEXT_PUBLIC_GA_ID`、`NEXT_PUBLIC_CLARITY_ID`。缺省时站点行为与现在一致。

**GSC：** 已验证。第 30 天导出页面和查询，填进 `seo/keyword-intent-map.md` 的「待 GSC」列。没有的数字留空。

**性能：** 不单独立项优化。第 1 周用 PageSpeed Insights 记首页和 Fancy 页移动端 LCP / INP / CLS 各一个数，第 13 周再记一次。输入卡顿若在第 12 周的行为里出现，再查样式列表是否每次按键都 `convertAll` 全量计算；现在就是这样，先接受，等数据说它慢。

**结构化数据：** 保持现有 WebApplication 和 FAQPage。不新增 Organization 页。FAQ 富媒体不作为目标。

**发布：** 每任务可独立上线。隐私页文案和埋点脚本必须同一发布。平台规则文案若改了数字，要同步 `seo/产品事实底稿.md`。

**测试命令：**

```bash
npm test
npm run typecheck
```

UI 任务额外在本地走第 4 节该月的验收路径。没有浏览器自动化套件，不为本计划引入 Playwright。

---

## 10. 风险与升级路径

| 风险 | 处理 |
| --- | --- |
| `Intl.Segmenter` 在极旧浏览器缺失 | `measure.ts` 退回码点，UI 不报错。真正要修时再加 polyfill |
| 平台修改昵称规则，预览上限过时 | 文案保持「约」，`sourceNote` 写清来自本站预览卡而非公告。有官方页面时只更新 `sourceNote` 和数字，置信度仍停在 `published_approx`，直到有人按字段实测 |
| 五语手写拖慢 Bio 和第 7 周 | 英语和一种其他语言没写完就不发布该页改动 |
| GSC 样本仍然很小 | 第 8、10 周默认「不新建页面」。数据不足是停的理由 |
| 埋点被广告拦截器吃掉 | 接受。不自建采集服务 |
| 范围滑向图片编辑器或账号系统 | 回到本文第 2 节。PNG 只修「导出打不开」类故障，不加大画布 |
