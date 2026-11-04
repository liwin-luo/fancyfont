# FancyFont.tools 网站改造实施规范
## 产品体验、SEO 信息架构、多语言及核心工具优化方案

- 项目：FancyFont.tools
- 文档类型：产品改造与技术实施规范
- 执行工具：Cursor AI
- 目标周期：30 天
- 后续规划：90 天持续优化
- 优先级：P0 / P1 / P2
- 执行原则：先审计、再设计、分阶段实施、逐项验收

---

# 0. 项目背景与总体目标

## 0.1 项目现状

FancyFont.tools 是一个面向全球用户的在线字体及 Unicode 工具站。

目前产品已经包含以下能力：

1. Fancy Text Generator：花式文字生成。
2. Letter Styles：不同文字样式转换。
3. Gaming Name Generator：游戏昵称生成。
4. Symbols：特殊符号搜索与复制。
5. Platform Tools：面向 Instagram、Discord、PUBG、Free Fire 等平台的工具。
6. 多语言：目前可观察到英语、西班牙语、葡萄牙语、简体中文、印尼语入口。

目前网站已经具备一定的工具功能和页面数量，不需要从零开发。

本次改造的核心不是增加大量新页面，而是：

- 优化网站信息架构。
- 明确产品定位。
- 优化首页用户体验。
- 提高单功能工具页面的独立价值。
- 减少相似 SEO 页面之间的内容重复。
- 优化多语言页面体系。
- 强化核心工具功能。
- 建立可持续的数据反馈机制。

## 0.2 核心问题

当前需要重点解决以下问题：

| 编号 | 问题 | 影响 | 优先级 |
|---|---|---|---|
| P01 | 首页分类维度不统一 | 用户难以理解产品结构 | P0 |
| P02 | 工具页面之间可能存在内容重叠 | SEO 页面独立价值不足 | P0 |
| P03 | 不同工具页面缺乏统一设计规范 | 后续维护成本高 | P0 |
| P04 | 多语言页面主要采用统一目录 | 不能充分适应不同市场需求 | P0 |
| P05 | 核心工具的使用体验仍有优化空间 | 用户使用效率和留存 | P1 |
| P06 | 游戏昵称兼容性信息不足 | 用户可能无法判断结果是否可用 | P1 |
| P07 | 缺少完整的工具使用行为数据 | 无法判断功能真实价值 | P0 |
| P08 | SEO 页面生产缺乏标准化流程 | 后续容易批量生产低价值页面 | P1 |

注意：

以上问题中，页面分类和公开页面内容可以直接观察；页面重复程度、实际索引状态、流量表现、转化率等必须进一步通过代码审计和真实数据验证。

不能将未经验证的风险直接当成已经发生的故障。

---

# 1. 总体产品定位与信息架构

## 1.1 产品定位

建议将 FancyFont.tools 定位为：

**An All-in-One Text Styling, Gaming Name & Unicode Symbols Toolkit**

中文理解：

一个集文字样式转换、游戏昵称生成、Unicode 特殊符号搜索与复制于一体的在线工具平台。

核心用户任务分为三类：

1. 我想把普通文字转换成特殊样式。
2. 我想生成一个有个性的游戏或社交昵称。
3. 我想找到并复制特殊符号。

三类任务应成为网站一级产品分类。

## 1.2 新的信息架构

建议采用以下结构：

```text
FancyFont
│
├── Home
│
├── Text Styles
│   ├── Fancy Text Generator
│   ├── Bold Text Generator
│   ├── Italic Text Generator
│   ├── Cursive Text Generator
│   ├── Gothic Text Generator
│   ├── Bubble Text Generator
│   ├── Small Text Generator
│   └── Other Style Tools
│
├── Name Maker
│   ├── Gaming Name Generator
│   ├── PUBG Name Generator
│   ├── Free Fire Name Generator
│   ├── Roblox Name Generator
│   ├── Discord Name Generator
│   └── Other Platform Names
│
├── Symbols
│   ├── All Symbols
│   ├── Hearts
│   ├── Stars
│   ├── Flowers
│   ├── Arrows
│   ├── Decorative Symbols
│   ├── Invisible Characters
│   └── Other Unicode Categories
│
├── Use Cases
│   ├── Instagram Fonts
│   ├── TikTok Fonts
│   ├── Discord Fonts
│   ├── Gaming Names
│   └── Social Media Names
│
├── Guides
│   ├── Unicode Guide
│   ├── Special Characters Guide
│   ├── Gaming Name Guide
│   └── Platform Compatibility Guides
│
└── About
```

以上为目标信息架构，不代表要求所有页面立即开发。

## 1.3 分类设计原则

一级分类必须按照用户任务划分，而不是混用不同分类标准。

| 分类维度 | 定义 | 示例 |
|---|---|---|
| Text Styles | 文字转换类型 | Bold、Italic、Cursive |
| Name Maker | 昵称生成任务 | Gaming Name、PUBG Name |
| Symbols | 符号查找和复制 | Hearts、Stars |
| Use Cases | 使用场景 | Instagram、Discord |
| Guides | 知识及教程 | Unicode Guide |

原有 Looks 分类不需要直接删除。

应先检查其中每个页面的功能和搜索意图，再决定：

- 保留为独立风格页面。
- 调整为风格筛选入口。
- 合并到相关工具页面。
- 作为工具中的预设样式。

不得仅因为分类结构调整而删除已有 URL。

---

# 2. P0：网站首页改造

## 2.1 改造目标

首页应该首先帮助用户快速找到并使用工具，而不是单纯展示大量 SEO 页面入口。

核心目标：

1. 让用户在首屏明确知道网站提供什么。
2. 让用户快速进入核心工具。
3. 建立三个主要产品分类。
4. 合理展示热门工具和使用场景。
5. 降低首页信息层级混乱的问题。

## 2.2 首页目标结构

```text
Homepage
│
├── Header
│   ├── Logo
│   ├── Text Styles
│   ├── Name Maker
│   ├── Symbols
│   ├── Guides
│   └── Language Selector
│
├── Hero Section
│   ├── H1
│   ├── Short Description
│   ├── Text Input
│   └── Live Preview
│
├── Main Categories
│   ├── Text Styles
│   ├── Name Maker
│   └── Symbols
│
├── Popular Tools
│
├── Popular Styles
│
├── Popular Use Cases
│
├── How It Works
│
├── FAQ
│
└── Footer
```

## 2.3 首屏设计要求

首屏必须包含：

- 明确的产品定位。
- 一个可以直接使用的文字输入区域。
- 至少一个实时生成结果。
- 进入完整 Fancy Text Generator 的入口。
- 三个主要产品分类的快捷入口。

建议的 H1：

Fancy Font Generator - Stylish Text, Names & Symbols

说明文案应简洁，不能为了 SEO 重复堆砌关键词。

## 2.4 分类入口要求

三个一级分类应有明显区分。

Text Styles：

- 展示文字样式示例。
- 提供热门转换工具。
- 点击后进入文字转换工具。

Name Maker：

- 展示游戏昵称示例。
- 展示装饰组合效果。
- 进入昵称生成工具。

Symbols：

- 展示特殊符号示例。
- 提供符号搜索入口。
- 进入符号库。

## 2.5 首页验收标准

| 验收项 | 通过标准 |
|---|---|
| 产品定位 | 首屏能清楚表达三类产品 |
| 首屏操作 | 可以直接输入并看到生成结果 |
| 分类 | 三个一级分类清晰区分 |
| 导航 | 核心工具可以直接访问 |
| 移动端 | 无明显横向溢出 |
| SEO | 页面只有一个主要 H1 |
| 内链 | 所有首页推荐链接均有效 |
| 多语言 | 首页内容正确对应当前语言 |

---

# 3. P0：统一单功能工具页面模板

这是本次改造最重要的工作之一。

目前网站有很多单功能工具页面。

需要避免每个页面单独开发，也要避免所有页面只有标题不同、实际内容完全相同。

解决方案：

**统一页面结构，允许不同工具配置不同的功能模块和内容模块。**

## 3.1 标准工具页结构

```text
Tool Page
│
├── Breadcrumb
│
├── Hero
│   ├── H1
│   ├── Description
│   └── Tool Introduction
│
├── Main Tool
│   ├── Input
│   ├── Options
│   ├── Result
│   └── Actions
│
├── Popular Presets
│
├── Examples
│
├── How To Use
│
├── Features
│
├── Compatibility Information
│
├── Related Tools
│
└── FAQ
```

不是每个页面都必须出现所有模块。

需要根据工具类型决定模块是否展示。

## 3.2 不同工具类型的内容模块

### A. 文字转换工具

例如：

- Fancy Text Generator
- Bold Text Generator
- Cursive Text Generator
- Gothic Text Generator

必须重点展示：

1. 输入文字。
2. 实时转换。
3. 不同样式的结果。
4. 一键复制。
5. 样式筛选。
6. 使用案例。
7. 相关工具。

### B. 游戏昵称工具

例如：

- Gaming Name Generator
- PUBG Name Generator
- Free Fire Name Generator
- Roblox Name Generator

必须重点展示：

1. 昵称输入。
2. 昵称风格。
3. 前缀和后缀。
4. 装饰符号。
5. 组合结果。
6. 长度统计。
7. 兼容性说明。

### C. 符号工具

例如：

- Symbols Copy and Paste
- Heart Symbols
- Star Symbols
- Invisible Characters

必须重点展示：

1. 符号搜索。
2. 分类筛选。
3. 符号展示。
4. 单个复制。
5. 批量复制。
6. 收藏。
7. 相关符号。

## 3.3 工具页面配置化

建议将页面配置与工具实现分离。

示例：

```typescript
interface ToolPageConfig {
  toolId: string;

  category:
    | "text-styles"
    | "name-maker"
    | "symbols";

  toolType:
    | "text-converter"
    | "name-generator"
    | "symbol-library";

  locale: string;

  slug: string;

  seo: {
    title: string;
    description: string;
    h1: string;
  };

  content: {
    introduction: string;
    howToUse?: string[];
    examples?: Example[];
    faq?: FAQ[];
  };

  modules: {
    presets: boolean;
    examples: boolean;
    compatibility: boolean;
    relatedTools: boolean;
    faq: boolean;
  };

  relatedToolIds: string[];
}
```

实际类型需要结合现有技术栈和项目结构调整。

禁止为了套用此示例而破坏现有代码架构。

## 3.4 页面独立价值要求

每个工具页面必须明确回答：

1. 这个工具解决什么问题？
2. 用户为什么需要独立访问这个页面？
3. 与其他相似工具有什么区别？
4. 它提供哪些独特的结果或预设？
5. 用户使用后可以完成什么任务？

禁止只修改以下字段就批量生产页面：

- Title
- Description
- H1
- URL

如果两个页面没有实质性区别，应先考虑合并、调整定位或转为筛选入口。

## 3.5 工具页面验收标准

| 项目 | 通过标准 |
|---|---|
| 页面模板 | 核心布局统一 |
| 工具功能 | 原有功能正常 |
| SEO 内容 | 每个页面有独立定位 |
| H1 | 每页一个主要 H1 |
| Title | 每个页面独立 |
| Description | 与页面功能匹配 |
| FAQ | 内容与工具相关 |
| 内链 | 相关工具之间互相引导 |
| 移动端 | 主要操作可正常完成 |
| 404 | 不存在的工具返回正确状态 |

---

# 4. P0：现有工具页面审计与分级

在增加新页面之前，必须先审核现有页面。

## 4.1 页面清单

建立一份完整页面清单，至少包含：

```text
url
tool_id
category
locale
page_type
primary_keyword
search_intent
unique_function
unique_content
indexability
canonical
hreflang
status
action
```

其中 action：

```text
KEEP
OPTIMIZE
MERGE
REPOSITION
NOINDEX
```

注意：

NOINDEX 和删除操作必须经过人工确认。

不能因为页面暂时没有流量就直接 noindex。

## 4.2 页面分级

### A 级：核心工具

重点保留和优化：

- Fancy Text Generator
- Gaming Name Generator
- Symbols
- Blank Space / Invisible Characters

### B 级：场景工具

需要提供具体平台或场景价值：

- Instagram Fonts
- Discord Fonts
- PUBG Name Generator
- Free Fire Name Generator
- Roblox Name Generator

### C 级：风格工具

逐个评估：

- Cute
- Heart
- Elegant
- Coquette
- Preppy
- Cool
- Gothic
- Aesthetic

## 4.3 页面合并判断标准

以下情况需要人工审核：

1. 主要关键词相同。
2. 用户搜索意图相同。
3. 工具生成结果基本相同。
4. 内容只是替换风格名称。
5. 页面之间没有独立使用场景。

不能仅凭关键词相似就合并。

如果需要合并：

- 确定保留哪个 URL。
- 确定被合并页面的目标 URL。
- 检查外链和现有排名。
- 设置正确的 301。
- 更新内部链接。
- 更新 Sitemap。
- 监控原 URL 和目标 URL 的索引变化。

没有经过人工批准，不允许执行重定向或删除。

## 4.4 验收标准

最终交付：

- 完整 URL 清单。
- 页面分类清单。
- 页面独立价值分析。
- 相似页面分析。
- 建议保留、优化、合并的页面。
- 每个合并建议的理由。

---

# 5. P1：Fancy Text Generator 核心功能优化

## 5.1 当前基础

现有 Fancy Text Generator 已经具备：

- 实时文字转换。
- 样式列表。
- 样式搜索。
- 样式分类。
- 收藏。
- PNG 复制。
- Unicode 相关统计。

本阶段不应重复开发已有功能。

首先进行代码审计，确认已有实现、数据结构和边界情况。

## 5.2 优化目标

让用户能够更快地：

- 找到喜欢的样式。
- 比较不同样式。
- 复制结果。
- 保存喜欢的样式。
- 再次使用历史结果。

## 5.3 功能要求

### 功能 A：Favorite Styles

用户可以收藏喜欢的样式。

要求：

- 点击收藏图标切换状态。
- 收藏状态立即更新。
- 浏览器刷新后保留。
- 收藏数据按用户本地环境保存。
- 无收藏时展示空状态。

### 功能 B：Recently Used

记录最近使用的样式。

要求：

- 用户复制某个样式后记录。
- 最多保存 20 条。
- 相同记录更新使用时间，不重复堆积。
- 支持清空历史。

### 功能 C：Compare Styles

允许用户快速比较不同样式。

要求：

- 可以选择多个样式。
- 同一输入内容生成对比结果。
- 可以逐个复制。
- 移动端不出现横向布局溢出。

### 功能 D：Copy All

允许一次复制所有可用样式结果。

要求：

- 清楚显示复制范围。
- 对空结果进行过滤。
- 显示复制反馈。
- 不能静默失败。

### 功能 E：字符统计

区分：

- Unicode Code Points。
- UTF-16 Code Units。
- Grapheme Clusters（如适用）。

不能把 UTF-16 长度简单当成用户看到的字符数量。

## 5.4 验收标准

- 输入后可以正常生成所有已有样式。
- 收藏刷新后仍存在。
- 最近使用记录正确。
- 批量复制结果正确。
- emoji、组合字符、非拉丁文字正常处理。
- 不影响现有样式转换算法。
- 无明显性能回归。

---

# 6. P1：Gaming Name Generator 优化

这是建议重点投入的差异化方向。

## 6.1 产品目标

从普通的文字装饰工具升级为：

**A Gaming Nickname Creation Toolkit**

用户不仅可以输入昵称，还可以组合不同风格和装饰字符。

## 6.2 功能规划

### A. Nickname Styles

建议增加：

- Cute
- Cool
- Dark
- Gothic
- Minimal
- Aggressive
- Funny
- Aesthetic

每种风格都必须对应真实的预设组合，不能只更换分类名称。

### B. Prefix & Suffix

支持：

```text
Prefix + Name + Suffix
```

例如：

```text
Prefix: 亗
Name: Shadow
Suffix: 么

Result: 亗Shadow么
```

示例仅用于说明组合方式。

### C. Symbol Decoration

支持：

- 左右装饰。
- 前缀装饰。
- 后缀装饰。
- 包围装饰。
- 多种符号组合。

### D. Length Checker

显示：

- Unicode Code Points。
- UTF-16 Units。
- Grapheme Count（如适用）。
- 平台特定限制（只有经过验证才展示）。

### E. Regenerate

支持：

- 更换符号。
- 更换前缀。
- 更换后缀。
- 保留原昵称。
- 一次生成多个候选结果。

### F. Favorite Names

用户可以保存喜欢的昵称。

## 6.3 平台配置

平台信息必须配置化。

```typescript
interface PlatformConfig {
  platformId: string;

  name: string;

  displayNameRules?: {
    maxLength?: number;
    countingMethod?: string;
  };

  allowedCharacterTypes?: string[];

  compatibilityStatus:
    | "verified"
    | "partially_verified"
    | "unverified";

  lastTestedAt?: string;

  sourceUrls?: string[];
}
```

上述字段是建议的数据模型。

没有真实官方依据或测试数据时：

- 不设置虚假的最大字符数。
- 不标注已兼容。
- 不承诺一定能在游戏内使用。
- 不把 Unicode 字符计数直接等同于平台长度规则。

## 6.4 验收标准

- 支持昵称与装饰符号组合。
- 支持多个候选结果。
- 支持重新生成。
- 支持复制。
- 支持收藏。
- 支持字符统计。
- 平台限制有来源和测试记录。
- 未验证数据有明显提示。

---

# 7. P1：Symbols 工具优化

## 7.1 产品目标

将 Symbols 从普通的特殊字符列表升级为：

**Unicode Symbol Discovery & Copy Toolkit**

## 7.2 功能规划

### A. 搜索优化

支持：

- 符号名称。
- Unicode 字符。
- Unicode Code Point。
- 分类名称。
- 相关关键词。

### B. 分类

建议：

```text
Symbols
│
├── Hearts
├── Stars
├── Flowers
├── Arrows
├── Brackets
├── Math
├── Decorative
├── Gaming
├── Invisible
└── Other
```

不要为了分类数量而随意添加重复类别。

### C. 批量操作

支持：

- 单个复制。
- 多选。
- 批量复制。
- 组合预览。
- 清空选择。

### D. 收藏

支持：

- 收藏常用符号。
- 查看收藏列表。
- 删除收藏。
- 本地持久化。

### E. 符号详情

有价值的情况下展示：

- Symbol。
- Unicode Name。
- Code Point。
- Category。
- Copy。

Unicode 名称必须来自可靠的数据源，不能由 AI 凭空生成。

## 7.3 验收标准

- 搜索结果正确。
- Unicode Code Point 正确。
- 分类不重复。
- 批量复制正常。
- 收藏刷新后保留。
- 移动端选择操作方便。

---

# 8. P0：多语言系统优化

## 8.1 当前策略

先稳定现有五种语言：

```text
en
es
pt-BR
zh-CN
id
```

暂时不扩展更多语言。

后续是否增加：

- de
- fr
- ja
- ko

由真实搜索需求决定。

## 8.2 URL 规范

保留英文根路径：

```text
/
```

其他语言使用子目录：

```text
/es/
/pt-br/
/zh-cn/
/id/
```

示例：

```text
/fancy-text-generator/

/es/generador-de-texto/

/pt-br/gerador-de-letras/
```

英文 URL 不需要强制迁移到 /en/。

禁止未经审核批量修改现有 URL。

## 8.3 多语言配置中心

建立统一语言配置：

```typescript
interface LocaleConfig {
  locale: string;

  languageName: string;

  nativeName: string;

  enabled: boolean;

  defaultLocale: boolean;

  direction: "ltr" | "rtl";
}
```

语言配置需要与页面内容配置分离。

## 8.4 UI Translation

统一管理：

- 导航。
- 按钮。
- 输入提示。
- 错误提示。
- 空状态。
- 操作反馈。
- 工具说明。

不能在组件中散落大量硬编码翻译。

## 8.5 SEO Content

每个语言独立维护：

- URL Slug。
- Title。
- Meta Description。
- H1。
- Introduction。
- How To Use。
- FAQ。
- Related Links。

不允许所有语言强制使用完全相同的页面目录。

## 8.6 本地化要求

AI 可以辅助翻译，但必须经过内容审核。

重点检查：

1. 是否符合当地用户表达。
2. 关键词是否自然。
3. 是否存在机械直译。
4. 示例是否符合当地场景。
5. FAQ 是否符合当地用户的问题。
6. 特殊字符和 Unicode 描述是否准确。

## 8.7 语言切换

要求：

- 当前页面切换到对应语言的等价页面。
- 对应页面不存在时，合理回退。
- 不要一律跳转语言首页。
- 不要根据 IP 强制重定向。
- 保留用户主动选择。
- 搜索引擎可以访问所有语言 URL。

## 8.8 Hreflang

每个页面需要正确声明实际存在的语言版本。

要求：

- 自引用。
- 双向引用。
- 语言代码准确。
- 地区代码准确。
- 不存在的语言版本不生成链接。
- 每个页面拥有正确的 canonical。
- 语言页面不能全部 canonical 到英文页面。

示例：

```html
<link
  rel="alternate"
  hreflang="en"
  href="https://fancyfont.tools/fancy-text-generator/"
/>

<link
  rel="alternate"
  hreflang="es"
  href="https://fancyfont.tools/es/generador-de-texto/"
/>

<link
  rel="alternate"
  hreflang="pt-BR"
  href="https://fancyfont.tools/pt-br/gerador-de-letras/"
/>
```

## 8.9 多语言验收标准

| 验收项目 | 标准 |
|---|---|
| 语言路由 | 所有已启用语言正常 |
| 语言切换 | 尽可能跳转对应工具页面 |
| UI 翻译 | 不存在明显缺失 |
| SEO 内容 | 各语言独立配置 |
| Canonical | 每个页面正确 |
| Hreflang | 双向关系正确 |
| Sitemap | 包含有效语言 URL |
| 404 | 不存在页面正确返回 |
| SSR/SEO | 搜索引擎可以读取页面内容 |

---

# 9. P0：SEO 技术审计

本阶段先检查，不要先修改。

## 9.1 检查项目

### A. 页面状态

检查：

- HTTP 状态码。
- 是否可以正常访问。
- 是否有错误重定向。
- 是否存在软 404。
- 是否存在重复 URL。

### B. Canonical

检查：

- 是否存在 canonical。
- 是否指向正确页面。
- 是否发生跨语言错误 canonical。
- 是否有多个 canonical 标签。

### C. Hreflang

检查：

- 是否存在。
- 是否双向。
- 是否自引用。
- 是否引用不存在页面。
- 语言代码是否正确。

### D. Sitemap

检查：

- 是否存在。
- 是否包含有效页面。
- 是否混入 404。
- 是否包含 noindex 页面。
- 是否包含错误语言 URL。
- 是否遗漏核心工具页面。

### E. Robots

检查：

- 是否误屏蔽 CSS、JS。
- 是否误屏蔽工具页面。
- 是否正确声明 Sitemap。

### F. 移动端

检查：

- 横向溢出。
- 字体大小。
- 输入框体验。
- 复制按钮。
- 工具结果展示。
- 导航和语言选择器。

### G. 性能

使用 PageSpeed Insights / Lighthouse 检查：

- LCP。
- INP。
- CLS。
- JavaScript 体积。
- 图片加载。
- 首屏资源。

Core Web Vitals 目标：

| 指标 | 良好标准 |
|---|---|
| LCP | ≤ 2.5 秒 |
| INP | ≤ 200 毫秒 |
| CLS | ≤ 0.1 |

测试需要基于真实工具结果记录，不允许自行编造当前分数。

## 9.2 验收标准

生成一份 SEO 技术审计报告：

```text
seo-audit/
├── overview.md
├── url-status.csv
├── canonical-report.csv
├── hreflang-report.csv
├── sitemap-report.csv
├── robots-report.md
├── mobile-report.md
└── performance-report.md
```

所有问题标注：

- 已确认问题。
- 潜在风险。
- 未能验证。
- 建议处理方案。

---

# 10. P0：用户行为数据体系

没有数据，就无法判断哪些功能值得继续投入。

本阶段建立统一事件体系。

## 10.1 事件定义

```text
page_view

tool_view

text_input

style_search

style_filter

style_copy

copy_all

favorite_add

favorite_remove

png_download

nickname_generate

nickname_copy

symbol_search

symbol_copy

symbol_batch_copy

compatibility_check

language_switch
```

## 10.2 事件属性

建议统一携带：

```typescript
interface ToolEvent {
  eventName: string;

  toolId?: string;

  pageType?: string;

  locale?: string;

  category?: string;

  styleId?: string;

  platformId?: string;

  timestamp: number;
}
```

不要记录用户输入的完整文本、私人昵称或其他不必要的个人信息。

## 10.3 核心指标

### 用户获取

- Organic Users。
- Organic Sessions。
- Search Impressions。
- Search Clicks。
- CTR。
- Average Position。

### 工具使用

- Tool Views。
- Input Rate。
- Copy Rate。
- Download Rate。
- Favorite Rate。
- Nickname Generation Rate。

### 页面表现

- 按页面统计曝光。
- 按语言统计曝光。
- 按工具类型统计使用量。
- 按国家统计自然流量。
- 按页面统计工具交互率。

## 10.4 关键转化指标

建议重点关注：

```text
Tool Usage Rate =
Tool Users / Tool Page Visitors

Copy Rate =
Users Who Copy / Tool Users

Download Rate =
Users Who Download / Tool Users
```

这些是建议的内部分析口径，不是 Google 官方排名指标。

## 10.5 验收标准

- 事件正常触发。
- GA4 DebugView 可以检查。
- 不存在重复事件。
- 语言和工具 ID 正确。
- 不收集不必要的输入内容。
- 可以按照页面和语言分析。

---

# 11. P1：SEO 内容与页面生产体系

未来不能再采用：

找到一个关键词 → AI 生成一个页面 → 上线。

必须建立页面生产审核流程。

## 11.1 页面生产流程

```text
Keyword Research
      ↓
Search Intent Analysis
      ↓
SERP Competitor Analysis
      ↓
Keyword Clustering
      ↓
Page Mapping
      ↓
Unique Value Definition
      ↓
Content Creation
      ↓
Localization
      ↓
Technical SEO Check
      ↓
Human Review
      ↓
Publish
      ↓
GSC Monitoring
      ↓
Optimization
```

## 11.2 关键词数据表

建议建立：

```typescript
interface KeywordRecord {
  keyword: string;

  locale: string;

  country?: string;

  searchVolume?: number;

  keywordDifficulty?: number;

  source: string;

  collectedAt: string;

  searchIntent: string;

  targetPageId?: string;

  verificationStatus:
    | "verified"
    | "unverified";
}
```

重要：

搜索量和关键词难度必须记录数据来源、获取日期和目标国家。

没有可靠来源时填写 null 或 unverified。

不允许 AI 自行编造搜索量。

## 11.3 页面生产规则

一个页面上线前必须确认：

1. 存在明确的用户搜索意图。
2. 有明确的目标关键词。
3. 有真实可用的工具或独立内容。
4. 与现有页面不存在明显的意图冲突。
5. 有清晰的内部链接。
6. 有符合语言习惯的本地化内容。
7. Title、Description、H1 正确。
8. 页面可以正常索引。

---

# 12. 30 天执行排期

## 第一阶段：Day 1～3

目标：完整理解现有系统。

工作：

- 阅读项目代码。
- 分析路由。
- 分析页面组件。
- 分析工具数据结构。
- 分析多语言实现。
- 生成页面 URL 清单。
- 检查已有工具功能。

交付：

```text
audit/
├── project-overview.md
├── route-inventory.csv
├── tool-inventory.csv
├── locale-inventory.csv
├── component-inventory.md
└── risk-list.md
```

验收：

- 所有现有工具页面进入清单。
- 所有语言入口进入清单。
- 不存在未识别的核心路由。
- 记录现有功能，不重复开发。
- 没有修改生产代码。

## 第二阶段：Day 4～7

目标：首页和页面体系设计。

工作：

- 完成新信息架构。
- 完成首页模块设计。
- 完成单功能工具页模板设计。
- 完成页面分级。
- 完成相似页面审核。
- 完成 SEO 技术审计。

交付：

```text
design/
├── information-architecture.md
├── homepage-spec.md
├── tool-page-spec.md
├── page-classification.csv
└── seo-audit.md
```

验收：

- 首页结构明确。
- 工具页面模板明确。
- 页面保留、优化、合并建议明确。
- 所有潜在破坏性修改有记录。
- 等待人工确认后再进入开发。

## 第三阶段：Day 8～14

目标：完成首页及统一页面模板。

工作：

- 调整首页信息架构。
- 调整导航。
- 实现统一工具页模板。
- 保持现有 URL。
- 适配移动端。
- 检查已有页面功能。

验收：

- 首页主要入口正常。
- 三个一级分类明确。
- 原有核心工具可访问。
- 现有 SEO URL 不发生未经批准的变化。
- 桌面端和移动端正常。

## 第四阶段：Day 15～20

目标：优化核心工具。

工作：

- Fancy Text 功能优化。
- Gaming Name Generator 功能优化。
- Symbols 功能优化。
- 收藏和历史记录。
- 批量复制。
- 字符统计。
- 兼容性信息展示。

验收：

- 核心交互完整。
- 没有破坏原有功能。
- 特殊字符处理正确。
- 移动端可用。
- 未验证的兼容性不做确定性承诺。

## 第五阶段：Day 21～25

目标：多语言和技术 SEO。

工作：

- 检查现有五种语言。
- 完善语言切换。
- 检查 hreflang。
- 检查 canonical。
- 检查 Sitemap。
- 检查页面本地化。
- 完成 SEO 技术问题修复。

验收：

- 每个有效语言页面 URL 正确。
- hreflang 双向关系正确。
- canonical 正确。
- Sitemap 正确。
- 没有错误语言跳转。

## 第六阶段：Day 26～30

目标：数据体系和最终验收。

工作：

- 增加用户行为事件。
- 验证 GA4。
- 完成最终回归测试。
- 对比改造前后页面结构。
- 整理剩余问题。
- 制定下一阶段 SEO 计划。

验收：

- 事件可以正确采集。
- 可以区分语言和工具。
- 核心页面测试全部通过。
- 生成最终交付报告。
- 不存在未处理的 P0 问题。

---

# 13. 90 天后续规划

30 天完成基础改造后，继续按照数据驱动方式发展。

## Day 31～45：页面内容优化

- 检查 GSC 页面曝光。
- 检查各语言搜索表现。
- 优化已有页面 Title。
- 优化 CTR 较低的页面。
- 检查关键词重叠。
- 增加有明确需求的场景页。

## Day 46～60：差异化功能建设

- Gaming Name Generator 增强。
- 平台兼容性数据库。
- Unicode 搜索增强。
- 更多符号分类。
- 常用昵称收藏。
- 用户使用体验优化。

## Day 61～75：多语言市场优化

- 分析不同语言曝光。
- 分析不同国家搜索需求。
- 识别有增长潜力的语言。
- 优化本地化关键词。
- 建立对应语言的独立页面。

是否新增德语、法语、日语，应由关键词和市场数据决定。

## Day 76～90：SEO 反馈与扩展

- 分析页面表现。
- 分析关键词覆盖。
- 分析工具使用率。
- 优化表现较差的页面。
- 扩展表现较好的主题。
- 制定下一轮开发任务。

---

# 14. Cursor 执行规范

这一章节是强制要求。

## 14.1 执行原则

Cursor 必须遵循：

1. 先理解现有项目，再修改代码。
2. 先检查现有实现，再决定是否新增功能。
3. 优先复用现有组件。
4. 不为完成文档而强行重构。
5. 不擅自更换技术栈。
6. 不擅自修改 URL。
7. 不擅自删除已有页面。
8. 不擅自合并 SEO 页面。
9. 不虚构关键词搜索量。
10. 不虚构游戏或平台兼容性。
11. 不为了 SEO 堆砌关键词。
12. 每个阶段必须有测试和交付报告。

## 14.2 阶段执行机制

每个阶段采用：

```text
分析
  ↓
实施方案
  ↓
人工确认
  ↓
编码
  ↓
测试
  ↓
验收报告
  ↓
进入下一阶段
```

不能让 Cursor 一次性完成全部改造。

## 14.3 修改代码之前

必须：

- 查看项目目录。
- 查看 package.json。
- 查看路由。
- 查看主要页面。
- 查看组件体系。
- 查看多语言实现。
- 查看数据文件。
- 查看现有测试。

输出分析结果后再开始修改。

## 14.4 每次修改之后

必须输出：

```text
本次修改：

1. 修改了哪些文件
2. 修改原因
3. 修改了什么功能
4. 是否改变 URL
5. 是否改变 SEO 元信息
6. 是否影响多语言
7. 执行了哪些测试
8. 测试结果
9. 仍然存在的问题
```

## 14.5 禁止行为

以下行为必须禁止：

- 无依据删除页面。
- 未经确认批量重定向。
- 生成大量重复 SEO 页面。
- 虚构 SEO 数据。
- 虚构官方平台规则。
- 使用不可靠翻译作为最终本地化内容。
- 将未验证页面标记为已验证。
- 直接覆盖现有生产配置。
- 未经检查更改核心工具算法。
- 未经测试发布。

---

# 15. 最终验收清单

## 产品结构

- [ ] 首页一级分类清晰。
- [ ] Text Styles、Name Maker、Symbols 明确区分。
- [ ] 首页首屏可以直接使用工具。
- [ ] 导航结构合理。
- [ ] 页面分类与实际用户任务匹配。

## 工具功能

- [ ] Fancy Text 正常。
- [ ] Gaming Name 正常。
- [ ] Symbols 正常。
- [ ] 搜索正常。
- [ ] 收藏正常。
- [ ] 历史记录正常。
- [ ] 批量复制正常。
- [ ] PNG 导出正常。
- [ ] Unicode 统计正确。

## SEO

- [ ] 页面 Title 独立。
- [ ] 页面 Description 独立。
- [ ] 每页主要 H1 唯一。
- [ ] Canonical 正确。
- [ ] Hreflang 正确。
- [ ] Sitemap 正确。
- [ ] Robots 正确。
- [ ] 内部链接有效。
- [ ] 页面无错误状态码。
- [ ] 未经批准的 URL 没有变化。

## 多语言

- [ ] 五种现有语言正常。
- [ ] UI 翻译完整。
- [ ] SEO 内容本地化。
- [ ] URL 对应关系正确。
- [ ] 语言切换正确。
- [ ] 不存在错误自动跳转。

## 数据

- [ ] GA4 事件正常。
- [ ] 工具 ID 正确。
- [ ] Locale 正确。
- [ ] 不采集不必要的输入内容。
- [ ] GSC 数据可以按页面分析。
- [ ] 可以分析不同语言的 SEO 表现。

## 性能与兼容性

- [ ] 移动端正常。
- [ ] 无明显横向溢出。
- [ ] 无严重控制台错误。
- [ ] 核心 Web Vitals 达标或有明确整改记录。
- [ ] 主要浏览器功能正常。

---

# 16. 本项目的成功标准

本次改造不是以新增页面数量作为成功指标。

最终应该形成以下能力：

| 目标 | 成功标准 |
|---|---|
| 产品结构 | 用户能清楚区分三大核心工具体系 |
| 工具页面 | 具备统一模板和独立内容配置 |
| 页面质量 | 每个 SEO 页面有明确的用户价值 |
| 多语言 | 能够独立维护不同语言的页面 |
| SEO 技术 | URL、Canonical、Hreflang、Sitemap 正确 |
| 核心功能 | 文字、昵称、符号三类工具体验完善 |
| 数据分析 | 能够区分页面、语言和工具使用情况 |
| 后续扩展 | 新增工具和语言不需要重复开发基础设施 |

不预先承诺 30 天内获得多少自然流量、排名或用户增长。

SEO 效果需要通过上线后的实际数据验证。

---

# 17. 给 Cursor 的总执行指令

请你作为本项目的高级产品架构师、前端技术负责人和 SEO 技术负责人，基于当前代码库执行本改造计划。

你的首要任务不是立即写代码，而是：

**完整审计现有项目，理解已经实现的功能、页面、路由、多语言及 SEO 结构。**

第一轮只执行第 12 章的第一阶段（Day 1～3）。

你必须：

1. 阅读现有项目结构。
2. 识别所有页面路由。
3. 识别所有工具及其实际功能。
4. 识别五种语言的实现方式。
5. 识别组件复用情况。
6. 识别现有 SEO 配置。
7. 输出完整审计报告。

第一轮禁止：

- 修改生产代码。
- 删除页面。
- 修改 URL。
- 修改 SEO 元信息。
- 批量翻译内容。
- 增加新工具。
- 修改现有业务逻辑。

完成后等待人工确认。

后续每个阶段都必须遵循：

**先分析 → 输出方案 → 确认 → 实施 → 测试 → 验收。**

如果发现现有架构与本规范存在冲突：

- 先说明冲突。
- 分析现有实现。
- 给出兼容方案。
- 不允许为了机械遵守文档而破坏现有系统。

最终目标：

将 FancyFont.tools 建设为一个结构清晰、工具体验完善、具有独立页面价值、支持多语言 SEO、能够持续通过真实数据迭代的国际化工具平台。

**现在只开始第一阶段审计，不要提前执行后续阶段。**
