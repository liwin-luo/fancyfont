# 首页改造设计（homepage-spec）

- 阶段：第二阶段 Day 4–7｜依据：规范 §2 + 决策 D3（按新方案执行，不设观察期）
- 基准：现状首页 = `src/components/page-templates/home.tsx`（hero 文案 + 双 CTA + 平台 chips + 静态示例卡 + 五个区块 + FAQ）
- 状态：设计稿，等待人工确认

---

## 1. 目标页面结构（规范 §2.2 对照）

```text
Homepage
├── Header            # 改：五项导航（见 information-architecture §2）
├── Hero              # 改：H1 + 新文案 + 可输入的实时转换器（新）
├── Main Categories   # 改：三分类卡升级（现状 tool cards 扩展）
├── Popular Tools     # 新：6 项热门工具行
├── Popular Styles    # 留：现区块原样
├── Popular Use Cases # 新：平台页分组区（承接原 hero chips）
├── How It Works      # 留
├── Compatibility     # 留（诚实披露条）
├── FAQ               # 留（FAQPage JSON-LD 不变）
├── All Tools 目录    # 留（现 directory 区，全量 31 页内链，爬虫价值）
└── Footer            # 不变
```

删除：hero 内 PlatformChips（迁至 Use Cases 区）、「热门符号」条、`what` 独立说明区（并入分类区导语）。

## 2. 首屏（Hero）详细设计

### 2.1 H1 与文案（5 语言独立手写）

- H1（en）：`Fancy Font Generator — Stylish Text, Names & Symbols`（规范 §2.3 建议）
- 其余 4 语言在实施时按同一语义手写（es：Generador de letras bonitas…；pt-br / zh-cn / id 同理），**禁止逐词机翻**，走 `homeContent[locale].hero` 数据结构。
- 副标题一句话说清三件事（样式转换 / 游戏昵称 / 符号复制），不堆砌关键词。
- **`<title>` 同步更新**（SEO 元信息变更，按 §14.4 披露）：
  - en：`Fancy Font Generator — Stylish Text, Names & Symbols | FancyFont`
  - 保持 `serp-title.ts` 的「主词 — 细节词 | 品牌」形状与品牌置尾规则；es/pt-br/zh-cn/id 各自手写主词与细节词。
  - Description：在现文案基础上补「转换器就在首屏、输入即见结果」一句，5 语言手写。

### 2.2 实时转换器（新组件 `hero-converter`）

| 项 | 规格 |
|---|---|
| 输入 | 单输入框，默认文案用 `sample-names`（每语言示例），上限 120 字素簇（与工具页一致，`sliceGraphemes` 截断） |
| 输出 | 固定展示 6 个代表风格：script / bold / fraktur / smallCaps / bubble / fullwidth，实时随输入更新 |
| 操作 | 每行复制按钮（复用 `copy.ts` + toast）；不提供 PNG/分享/收藏（保持首屏轻） |
| 入口 | 「打开完整生成器 →」链接到 `/fancy-text-generator/`（规范 §2.3 必须项） |
| 实现 | 新客户端组件，**复用 `text-styles.ts` 引擎**，零新依赖；默认文案的 6 行结果在服务端预渲染进首屏 HTML（与全站 SSR 策略一致，爬虫可见） |
| 边界 | 空输入回退默认示例；非拉丁字符原样保留并在卡片下沿用现有 coverage 诚实标注 |

## 3. 各区块规格

### Main Categories（规范 §2.4 三分类必须有明显区分）

| 卡片 | 内容要求（规范 §2.4） | 实现 |
|---|---|---|
| Text Styles | 展示文字样式示例 + 热门转换工具入口 | 卡内放 3 行实时样例（复用 SampleStyledName）+ 链接到生成器与两个代表风格页 |
| Name Maker | 展示昵称示例 + 装饰组合效果 | 卡内放 2–3 条装饰组合示例（如 `꧁༒Alex༒꧂`，来自 nickname 引擎静态渲染）+ 链接 |
| Symbols | 展示符号示例 + 搜索入口 | 卡内放 6–8 个热门符号（复用现 popular symbols 数据）+ 链接 `/symbols/` |

### Popular Tools（新，一行 6 项）

`/fancy-text-generator/`、`/gaming-name-generator/`、`/symbols/`、`/blank-space/`、`/instagram-fonts/`、`/pubg-name-generator/`（en 与各语言用各自 H1 文案）。

### Popular Use Cases（新，承接 hero chips）

12 个平台页分三组：Social（instagram / tiktok / discord / facebook / youtube）、Gaming（pubg / free-fire / cod / roblox / fortnite）、Roleplay（adopt-me / berry-avenue）。每项一行链接（h1 + 一句说明），数据直接来自 `platformPages` 注册表，无新增内容文件。

### 保留区块

Popular Styles / How It Works / 兼容性披露条 / FAQ / All Tools 目录：结构不变，文案随新定位微调（各语言手写）。All Tools 目录保留理由：全站 31 个子页的首页内链是主要抓取入口，删除属破坏性变更。

## 4. SEO 与验收（规范 §2.5 逐项）

| 验收项 | 通过标准 | 验证方式 |
|---|---|---|
| 产品定位 | 首屏可见三分类与 H1 | 人工检查 + 截图 |
| 首屏操作 | 可输入并看到 ≥1 个实时结果 | 浏览器手测 |
| 分类 | 三卡内容互不雷同 | 人工检查 |
| 导航 | 核心工具 ≤2 次点击可达 | 手测 |
| 移动端 | 360px 宽无横向溢出 | 手测 + DevTools |
| SEO | 全页仅 1 个 H1；title/description 唯一；FAQ JSON-LD 仍与可见内容一致 | build 后查看 HTML |
| 内链 | 首页推荐链接全部 200 | 全链接爬一遍（本地 build） |
| 多语言 | 5 语言 hero/文案各自语言正确 | 逐语言检查 |
| SSR | 转换器默认结果在初始 HTML 中 | 查看页面源码 |

**性能护栏**：hero 转换器只新增一个轻客户端组件（引擎为纯函数映射）；无新依赖、无网络请求；首屏 LCP 元素仍是 H1/文案（文本）。实测指标在第五阶段补（seo-audit §4 待测项）。

**GSC 影响（D3 已接受）**：首页 H1/title 变更后，原「Fancy Text — Copy & Paste Names & Symbols」查询的印象归属会重置；11-03 的 CTR 迭代（e8b85c3）不受影响（那是风格页 title）。
