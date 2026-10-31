# FancyFont.tools 未来 90 天网站改造、功能开发与 SEO 增长规划

> **规划基准：** 2026-10-31\
> **规划周期：** 2026-10-31 至 2027-01-29\
> **项目阶段：** 上线初期\
> **核心方向：** 产品差异化、工具体验、场景化 SEO、数据驱动增长

------------------------------------------------------------------------

## 0. 执行摘要

FancyFont.tools 刚上线几天，当前最重要的任务不是追求短期 SEO
流量，而是尽快找到真正有搜索需求、产品价值和竞争差异的细分方向。

目前提供的 Google Search Console 截图显示：

  指标                  截图数据
  ------------------- ----------
  统计时间范围             28 天
  Total Clicks                10
  Total Impressions          821
  Average CTR               1.2%
  Average Position          30.4

由于网站实际上只上线几天，这些数字只能视为早期曝光信号，不能当作完整的
28 天经营基线，也不足以判断哪些功能最受欢迎。

### 核心判断

1.  Google 已经发现并开始展示网站，但目前样本量很小。
2.  当前平均排名仍然靠后，短期重点应是页面质量、搜索意图匹配和索引基础。
3.  普通 Unicode 字体转换容易被复制，单纯增加样式数量难以形成长期壁垒。
4.  FancyFont 已有 Fancy Text、Gaming Names、Symbols
    等基础，应优先深化现有资产。
5.  未来 90 天不建议批量铺设大量模板化 SEO 页面。

### 推荐定位

**FancyFont = Stylish Text + Gaming Names + Symbol Builder + Platform
Compatibility**

建议将产品定位为：

> A Free Text Styling & Unicode Toolkit

帮助用户生成个性化文字、装饰游戏昵称、组合特殊符号，并美化社交主页。

### 90 天最重要的战略选择

优先打造：

**Gaming Name Builder + Unicode Compatibility Checker**

它可以复用现有字体映射和符号库，把普通字符转换升级为更贴近用户真实场景的工具。

------------------------------------------------------------------------

# 第一部分：网站现状与竞争格局

## 1.1 当前产品资产盘点

根据当前公开页面和已有产品信息，FancyFont 已经具备以下基础：

  --------------------------------------------------------------------------------------------
  产品模块                当前基础                                     判断
  ----------------------- -------------------------------------------- -----------------------
  Fancy Text Generator    约 30 种 Unicode 文字样式                    核心能力已具备

  样式分类                Script、Gothic、Bold、Bubble、Tiny、Glitch   需要优化分类与检索
                          等                                           

  实时转换                输入后实时更新                               保留并优化

  样式搜索                可以搜索样式                                 增加别名和标签

  装饰功能                Star、Heart、Wings、Brackets 等              可深化

  PNG 导出                支持预览尺寸和透明背景                       值得保留和优化

  Gaming Name             昵称装饰、字体组合、风格筛选                 有差异化空间

  Gaming Presets          Cool、Dark、Cute、Pro、Minimal 等            可扩展

  Symbols                 约 388 个符号                                已有资源资产

  Symbol Categories       约 18 个分类                                 可升级为组合工具

  平台场景                Instagram、TikTok、Discord、PUBG 等          已有页面矩阵

  多语言                  EN、ES、PT、ZH、ID                           国际化基础已建立

  隐私                    浏览器本地处理，不上传用户输入               可作为信任卖点
  --------------------------------------------------------------------------------------------

数据依据：当前公开页面和用户提供的产品信息。上线初期应再次逐页核验功能是否正常、页面是否可索引，以及各语言版本是否完整。

## 1.2 当前优势

### 优势一：已经不是单一工具

当前产品可以形成三个相互关联的模块：

``` text
FancyFont
├── Fancy Text
│   ├── Styles
│   ├── Style Filters
│   ├── Decoration
│   ├── Live Preview
│   └── PNG Export
├── Gaming Names
│   ├── Name Decoration
│   ├── Letter Styles
│   ├── Gaming Presets
│   └── Random Combinations
└── Symbols
    ├── Symbol Library
    ├── Categories
    ├── Search
    └── Batch Combination
```

三类用户的主要需求不同：

  用户类型   核心需求
  ---------- ----------------------------------
  社交用户   美化个人简介、昵称和评论
  游戏用户   生成独特昵称、组合特殊符号
  装饰用户   找到爱心、星星、翅膀等符号并组合

三个方向可以共享 Unicode 映射、符号数据、搜索和复制能力。

### 优势二：已经有平台场景入口

现有平台场景包括 PUBG、Free
Fire、Facebook、Instagram、TikTok、Discord、COD、YouTube、Roblox、Adopt
Me、Berry Avenue 等。

后续重点不是继续堆页面，而是判断哪些页面有独立搜索意图和独立工具价值。

### 优势三：隐私和即时使用体验

无需注册、无需上传、浏览器本地处理，是文字工具天然适合强调的体验优势。需要确保实际实现与隐私声明一致。

### 优势四：已有 PNG 导出能力

PNG
导出可以让产品从纯文本转换扩展到社交视觉素材制作，但应先观察真实使用率，再决定是否投入复杂图片编辑能力。

### 优势五：已有多语言基础

现阶段应优先保证现有五种语言页面的质量，而不是急于增加语言数量。

## 1.3 当前最需要解决的问题

  问题                       影响                         优先级
  -------------------------- ---------------------------- --------
  普通字体转换同质化         难以建立竞争壁垒             P0
  平台兼容性缺少系统化证据   用户无法判断字符能否使用     P0
  游戏昵称工具场景深度不足   与普通字体转换器差异不明显   P0
  平台和风格页面内容相似     可能产生重复或低价值页面     P0
  缺少完整行为数据           无法判断真实功能价值         P0
  复制即离开，复访机制较弱   留存和交叉使用机会有限       P1

### 问题一：样式数量不是长期壁垒

Unicode 字体转换本质上是字符映射。例如：

``` text
Hello
  ↓ Bold
𝐇𝐞𝐥𝐥𝐨
  ↓ Cursive
ℋℯ𝓁𝓁ℴ
  ↓ Gothic
ℌ𝔢𝔩𝔩𝔬
```

竞争对手只要拥有相同映射表，就能实现相似功能。因此不建议把"30 种增加到
100 种"作为核心战略。

### 问题二：兼容性是真实用户问题

用户复制结果后可能遇到：

-   游戏不接受某些特殊字符。
-   某些设备显示为方框。
-   某些样式不支持数字或部分字母。
-   部分字符无法转换。
-   组合字符导致长度计算与用户预期不同。
-   不同平台对用户名、展示名称和简介字段有不同限制。

应把兼容性从免责声明升级为可使用的分析工具。

### 问题三：平台页面容易模板化

Instagram Fonts、TikTok Fonts、Facebook Fonts、Discord Fonts
如果只是标题不同，工具和正文完全相同，页面独立价值就很弱。

应让不同页面真正解决不同问题：

  页面              应有的独立价值
  ----------------- -------------------------------------------
  Instagram Fonts   Bio、Display Name、简介排版
  TikTok Fonts      Bio、昵称、视频描述文字
  Discord Fonts     昵称、频道名称、消息格式
  Facebook Fonts    帖子、个人简介、评论
  PUBG Names        游戏昵称组合、字符分析、长度检查
  Roblox Names      Username 与 Display Name 的区别及规则说明

------------------------------------------------------------------------

# 第二部分：竞争对手分析

## 2.1 竞争对手范围

  竞争对手     核心方向                 官网
  ------------ ------------------------ -----------------------------------------
  YayText      Unicode 字体转换         https://yaytext.com/
  LingoJam     文字转换工具             https://lingojam.com/Fancytextgenerator
  CoolSymbol   符号资源库               https://coolsymbol.com/
  FSymbols     符号、颜文字、文字艺术   https://fsymbols.com/
  PiliApp      独立文字转换工具         https://www.piliapp.com/
  FancyFont    文字、昵称、符号         https://fancyfont.tools/

竞争关系分为三类：

-   **直接竞争：** 争夺 Fancy Text 等相同搜索需求。
-   **功能竞争：** 解决相似的文字转换和符号使用问题。
-   **场景竞争：** 争夺 Instagram、Discord、游戏昵称等需求。

## 2.2 主要竞品分析

### YayText

官网：https://yaytext.com/

可重点研究的能力：

-   Bold、Italic、Cursive、Gothic、Monospace 等样式。
-   Emoji 和符号分类。
-   独立样式说明。
-   How-to 教程和 Unicode FAQ。

**启示：** 学习其信息架构和使用说明，不要只比较样式数量。FancyFont
应让每种效果都有清晰示例、字符覆盖范围和限制说明。

### LingoJam

官网：https://lingojam.com/Fancytextgenerator

主要模式是：

``` text
输入 → 转换 → 复制
```

其优势是简单、直接、门槛低。

**启示：** FancyFont
主工具应保持轻量。高级配置放在进阶区域，不要让用户每次输入文字都经过复杂配置。

### CoolSymbol

官网：https://coolsymbol.com/

值得研究的能力：

-   多分类符号库。
-   点击复制。
-   符号组合区域。
-   多种装饰符号。

**启示：** 将现有 Symbols 升级为 Symbol
Builder，支持搜索、多选、组合、保存和分享。

### FSymbols

官网：https://fsymbols.com/

覆盖符号、颜文字、文字艺术、Fancy Letters 等多个独立工具。

**启示：** 可以逐步扩展 Text
Utilities，但应优先开发与现有用户行为高度相关的工具，不要一开始做成没有重点的工具集合。

### PiliApp

官网：https://www.piliapp.com/

建议重点研究其独立工具页面、页面关键词对应关系和工具间内链方式。

**启示：**
可以借鉴独立工具页面的组织方式，但不能仅因为竞争对手有某个页面就复制页面。

## 2.3 竞争差异化矩阵

  能力       竞品现有优势                  FancyFont 应对
  ---------- ----------------------------- --------------------------
  字体转换   YayText、LingoJam 成熟        做好体验，不以数量取胜
  符号库     CoolSymbol、FSymbols 较成熟   组合器、搜索、场景推荐
  社交媒体   YayText 有教程                每个平台建立专属工作流
  游戏昵称   市场上已有相关工具            深化游戏规则与兼容检测
  兼容性     普遍以免责声明为主            建立有测试证据的数据体系
  图片导出   许多竞品以文本为主            优化 PNG 和分享能力
  国际化     竞争者已有多语言              先做好现有五种语言
  隐私       需逐站核实                    坚持本地处理并如实说明

### 推荐差异化定位

1.  Gaming Name Builder。
2.  Unicode Compatibility Checker。
3.  Social Bio Creator。
4.  Symbol Combination Studio。

这四个方向可以共享现有字符映射、符号数据和导出模块。

------------------------------------------------------------------------

# 第三部分：产品定位与未来架构

## 3.1 产品定位

建议使用：

**A Free Text Styling & Unicode Toolkit**

副标题：

> Create stylish text, decorate gaming names, combine symbols, and make
> your social profiles stand out.

产品价值：帮助用户生成个性化文字、装饰游戏昵称、组合特殊符号和美化社交主页。

## 3.2 未来产品架构

``` text
FancyFont
├── 1. Fancy Text
│   ├── Text Generator
│   ├── Style Library
│   ├── Style Search
│   ├── Text Decoration
│   ├── Text Preview
│   └── PNG Export
├── 2. Gaming Studio
│   ├── Gaming Name Builder
│   ├── Name Decoration
│   ├── Game Presets
│   ├── Character Counter
│   ├── Compatibility Checker
│   └── Saved Names
├── 3. Symbol Studio
│   ├── Symbol Library
│   ├── Symbol Search
│   ├── Symbol Combination
│   ├── Symbol Decorator
│   ├── Kaomoji Library
│   └── Favorites
├── 4. Social Studio
│   ├── Instagram Bio
│   ├── TikTok Bio
│   ├── Discord Profile
│   ├── Facebook Bio
│   └── Social Text Templates
├── 5. Text Utilities
│   ├── Blank Space
│   ├── Invisible Characters
│   ├── Upside Down Text
│   ├── Small Caps
│   ├── Text Reverser
│   ├── Zalgo Text
│   └── ASCII Text Art
└── 6. Image Studio
    ├── Text to PNG
    ├── Transparent Text
    ├── Text Background
    └── Social Image Export
```

这是长期产品结构，不代表 90 天内全部开发。

## 3.3 90 天投入建议

  模块               建议投入 原因
  ---------------- ---------- --------------------
  Fancy Text              20% 已有基础，继续打磨
  Gaming Studio           30% 差异化机会较大
  Symbol Studio           20% 已有数据资产
  Social Studio           15% 场景化增长
  Text Utilities          10% 扩展长尾需求
  Image Studio             5% 先验证，不重投入

------------------------------------------------------------------------

# 第四部分：核心功能开发规划

## 4.1 P0：Fancy Text 核心体验升级

目标：先让现有核心能力稳定、好用、可维护，不急于扩充样式数量。

  功能       改造内容                   优先级
  ---------- -------------------------- --------
  实时转换   优化长文本处理             P0
  样式分类   优化分类体系               P0
  样式搜索   支持别名、标签搜索         P0
  一键复制   统一复制反馈               P0
  多选复制   批量选择样式               P1
  收藏       统一收藏数据               P1
  最近使用   本地记录最近样式           P1
  字符统计   使用 Unicode 字素簇计数    P0
  PNG 导出   优化尺寸和字体渲染         P1
  样式对比   同一文本多种样式并排比较   P1

### 字符计数必须区分不同概念

不能简单使用 JavaScript `string.length` 作为用户看到的字符数量：

``` javascript
"Hello".length
// 5

"😀".length
// 2

"e\u0301".length
// 2
```

建议使用 `Intl.Segmenter` 计算 Grapheme Cluster：

``` javascript
const segmenter = new Intl.Segmenter(
  undefined,
  { granularity: "grapheme" }
);

const count = [
  ...segmenter.segment(text)
].length;
```

还应区分：

-   Unicode Code Point 数量。
-   Grapheme Cluster 数量。
-   UTF-16 长度。
-   平台自身的字符计数规则。

可在高级信息中展示：

``` text
Visible characters: 12
Unicode code points: 15
UTF-16 units: 16
```

### 样式元数据统一管理

建议不要继续在前端散落维护映射逻辑，统一为配置：

``` json
{
  "id": "bold-serif",
  "name": "Bold",
  "category": "bold",
  "tags": ["bold", "strong", "professional"],
  "supports": {
    "uppercase": true,
    "lowercase": true,
    "digits": true,
    "latin": true
  },
  "partial": false,
  "preview": "𝐇𝐞𝐥𝐥𝐨",
  "mappingVersion": "1.0"
}
```

这份数据可以同时服务工具展示、搜索、SEO
页面、样式筛选、收藏和兼容性测试。

## 4.2 P0：Gaming Name Builder

这是未来 90 天最值得投入的差异化功能。

### 功能一：Game Rule Engine

建立游戏规则配置：

``` json
{
  "game": "PUBG",
  "field": "player_name",
  "rules": {
    "maxLength": null,
    "allowedCharacterGroups": [],
    "unicodePolicy": "needs_verification",
    "emojiPolicy": "needs_verification",
    "testedAt": null
  }
}
```

不要填写未经核实的游戏最大长度或字符限制。不同版本、地区、平台和字段可能不同。

建议记录：

  规则                 说明
  -------------------- ------------------
  Max Length           最大长度
  Allowed Characters   允许字符
  Emoji Support        是否允许 Emoji
  Unicode Support      Unicode 支持情况
  Username Rule        用户名规则
  Display Name Rule    展示名称规则
  Tested Version       测试版本
  Last Verified        最后验证时间

### 功能二：兼容性等级

建议三种状态：

-   **Verified：** 在明确记录的版本、设备和字段下测试通过。
-   **Partial：** 部分字符可用，部分字符可能被拒绝或显示异常。
-   **Unsupported：** 已验证目标字段不接受该类字符。

每条测试证据应保留：

-   测试日期。
-   游戏版本。
-   测试平台。
-   测试字段。
-   字符组合。
-   测试结果。

状态不能仅由 Unicode 区块推断，必须有目标平台的真实测试证据。

### 功能三：昵称组合器

提供 Prefix、Name、Letter Style、Suffix 等组合选项。

示例：

``` text
꧁༒𝓐𝓵𝓮𝔁༒꧂
★彡𝐀𝐥𝐞𝐱彡★
୨୧Alex୨୧
『𝔄𝔩𝔢𝔵』
```

需要支持：

-   组合模板。
-   随机组合。
-   去重。
-   不支持字符过滤。
-   昵称长度检测。
-   复制。
-   收藏。
-   历史记录。

随机组合不能只是堆叠符号，应提供风格和组合规则。

### 功能四：Game-specific Presets

第一批优先开发：

  游戏           页面                           功能重点
  -------------- ------------------------------ ------------------------------
  PUBG           `/pubg-name-generator/`        昵称组合与长度
  Free Fire      `/free-fire-name-generator/`   昵称与符号组合
  Roblox         `/roblox-name-generator/`      Username / Display Name 区分
  COD            `/cod-name-generator/`         简洁游戏昵称
  Adopt Me       `/adopt-me-fonts/`             可爱风格昵称
  Berry Avenue   `/berry-avenue-fonts/`         美学昵称装饰

未验证规则前，不得向用户保证特殊字符一定可以通过游戏审核。

## 4.3 P0：Symbol Studio

将现有符号库升级为 Symbol Builder。

  功能                说明             优先级
  ------------------- ---------------- --------
  Symbol Search       搜索符号         P0
  Category Filter     分类筛选         已有
  Multi Select        多选符号         P0
  Symbol Board        组合面板         P0
  Text + Symbol       文字与符号组合   P0
  Preset Templates    预设模板         P1
  Favorite            收藏             P1
  Recent Symbols      最近使用         P1
  Copy All            一键复制         P0
  Share Combination   分享组合         P2

建议分类：

``` text
Aesthetic
├── Coquette
├── Kawaii
├── Soft
├── Dreamy
└── Minimal

Decorations
├── Hearts
├── Stars
├── Flowers
├── Wings
└── Bows

Text Frames
├── Brackets
├── Borders
├── Lines
└── Dividers

Expressions
├── Kaomoji
├── Faces
├── Cute Expressions
└── Emoticons
```

Aesthetic 是使用场景分类，底层字符可以复用。

组合模板示例：

``` text
♡ ୨୧ ♡
꧁༺༻꧂
⋆｡°✩ ✩°｡⋆
✧･ﾟ: *✧･ﾟ:*
```

## 4.4 P1：Social Bio Creator

目标是把 Fancy Text 和 Symbol Studio
连接起来，让用户完成一段社交主页简介。

流程：

``` text
输入个人简介
      ↓
选择风格
      ↓
添加符号
      ↓
选择排版模板
      ↓
生成多个版本
      ↓
检查字符数量
      ↓
复制 / PNG 导出
```

第一版功能：

  功能                说明
  ------------------- --------------
  Bio Templates       预设简介模板
  Fancy Text          字体转换
  Symbol Decorator    添加符号
  Line Break          排版换行
  Character Counter   字符计数
  Copy Bio            复制完整简介
  PNG Export          图片导出

第一期支持 Instagram Bio、TikTok Bio、Discord About Me。

暂时不需要开发复杂的 AI 文案生成器，重点是排版和装饰。

## 4.5 P1：Unicode Compatibility Checker

普通浏览器可以完成：

1.  识别 Unicode 码点。
2.  检查字符所属 Unicode 区块。
3.  检查字符类别。
4.  检查变体选择符。
5.  检查组合字符。
6.  判断样式映射是否完整。
7.  提供常见风险提示。

普通浏览器不能准确完成：

1.  判断目标游戏服务器是否接受字符。
2.  判断所有设备是否有对应字体。
3.  判断所有 App 是否会过滤字符。
4.  完全模拟目标平台实际显示效果。

因此能力应由两部分组成：

``` text
Unicode Analyzer
       +
Platform Test Database
       ↓
Compatibility Report
```

报告示例：

``` text
Input:
꧁༒𝓐𝓵𝓮𝔁༒꧂

Unicode Analysis:
- Character count
- Code points
- Combining marks
- Unsupported mapping
- Emoji / variation selectors

Platform:
PUBG

Result:
- Character analysis: Complete
- Platform rule: Needs verification
- Display: Device dependent
```

------------------------------------------------------------------------

# 第五部分：SEO 关键词布局

## 5.1 数据可信度说明

当前 GSC 历史数据不足，因此必须区分：

  数据类型                   当前状态
  -------------------------- -------------------------------
  网站实际已有页面与功能     可以核验
  竞争对手覆盖的搜索主题     可以核验
  关键词真实月搜索量         尚未确认
  Keyword Difficulty         尚未确认
  FancyFont 当前关键词排名   需要 GSC 导出
  各国家真实搜索需求         需要 Keyword Planner / Trends

本规划的关键词分组是基于搜索意图和竞争页面形成的优先级假设，不是经过
Keyword Planner 验证的搜索量排名。不得将其当作真实月搜索量或流量预测。

## 5.2 五个关键词集群

### 集群 A：核心 Fancy Text

  Keyword                      Intent   建议页面                       优先级
  ---------------------------- -------- ------------------------------ --------
  fancy text generator         Tool     `/fancy-text-generator/`       P0
  fancy font generator         Tool     首页                           P0
  fancy text                   Tool     首页                           P0
  cool text generator          Tool     评估独立页或合并               P1
  cursive text generator       Tool     `/cursive-font-generator/`     P0
  bold text generator          Tool     `/bold-font-generator/`        P1
  gothic text generator        Tool     `/gothic-font-generator/`      P1
  bubble letters generator     Tool     `/bubble-letters-generator/`   P1
  small caps generator         Tool     `/small-caps-generator/`       P1
  upside down text generator   Tool     `/upside-down-text/`           P1
  glitch text generator        Tool     `/glitch-text-generator/`      P1
  tiny text generator          Tool     `/tiny-text-generator/`        P1

已有页面优先优化原 URL，不要创建重复页面。

### 集群 B：Social Media Fonts

  Keyword                    建议页面                      优先级
  -------------------------- ----------------------------- --------
  instagram fonts            `/instagram-fonts/`           P0
  instagram bio fonts        `/instagram-bio-fonts/`       P1
  instagram font generator   `/instagram-fonts/`           P0
  tiktok fonts               `/tiktok-fonts/`              P0
  tiktok bio fonts           `/tiktok-bio-fonts/`          P1
  discord fonts              `/discord-fonts/`             P0
  discord text formatter     `/discord-text-formatter/`    P1
  facebook fonts             `/facebook-fonts/`            P1
  youtube fonts              `/youtube-fonts/`             P1
  aesthetic bio generator    `/aesthetic-bio-generator/`   P1

同义词如果搜索意图相同，应由同一个页面承接。

### 集群 C：Gaming Names

  Keyword                    建议页面                       优先级
  -------------------------- ------------------------------ --------
  gaming name generator      `/gaming-name-generator/`      P0
  stylish gaming names       `/gaming-name-generator/`      P1
  pubg name generator        `/pubg-name-generator/`        P0
  free fire name generator   `/free-fire-name-generator/`   P0
  roblox name generator      `/roblox-name-generator/`      P0
  cod name generator         `/cod-name-generator/`         P1
  cool gamer names           `/cool-gamer-names/`           P2
  stylish pubg names         `/pubg-name-generator/`        P1
  invisible name generator   `/invisible-name-generator/`   P1
  gaming symbols             `/gaming-symbols/`             P1

### 集群 D：Symbols

  Keyword                  建议页面                 优先级
  ------------------------ ------------------------ --------
  symbols copy and paste   `/symbols/`              P0
  aesthetic symbols        `/aesthetic-symbols/`    P1
  cute symbols             `/cute-symbols/`         P1
  heart symbols            `/heart-symbols/`        P1
  star symbols             `/star-symbols/`         P1
  flower symbols           `/flower-symbols/`       P1
  crown symbols            `/crown-symbols/`        P2
  wing symbols             `/wing-symbols/`         P2
  kaomoji copy and paste   `/kaomoji/`              P1
  decorative symbols       `/decorative-symbols/`   P1
  arrow symbols            `/arrow-symbols/`        P2
  bow symbols              `/bow-symbols/`          P2

### 集群 E：Text Utilities

  Keyword                      建议页面                   优先级
  ---------------------------- -------------------------- --------
  invisible characters         `/invisible-characters/`   P0
  blank space copy and paste   `/blank-space/`            P0
  upside down text             `/upside-down-text/`       P1
  zalgo text generator         `/zalgo-text-generator/`   P1
  text reverser                `/text-reverser/`          P2
  ascii text art generator     `/ascii-text-art/`         P2
  bold text copy paste         `/bold-text-generator/`    P1
  small text generator         `/tiny-text-generator/`    P1

## 5.3 暂不建议投入的关键词

  关键词方向              原因
  ----------------------- ---------------------------------------
  Font Download           用户想下载字体文件，不是 Unicode 转换
  Free Font Download      搜索意图不同
  Font Generator AI       需要真正的字体设计或图像生成能力
  Logo Maker              产品跨度太大
  Tattoo Font Generator   可能需要不同的字体预览和商业授权说明
  Signature Generator     需要手写签名视觉能力
  Font Converter          容易和文件格式转换混淆

这些关键词不代表没有需求，而是当前产品承接能力不足。

## 5.4 页面数量控制

未来 90 天建议：

-   优化已有核心页面：8～12 个。
-   新增高质量工具页面：6～10 个。
-   新增教程内容：4～6 篇。
-   暂时不追求 100 个 SEO 页面。

每个页面必须有独立用户价值。不要只替换关键词、标题和少量描述后批量发布。

------------------------------------------------------------------------

# 第六部分：SEO 页面设计规范

## 6.1 统一工具页面模板

以 Instagram Fonts 为例：

``` text
Instagram Fonts Generator
├── 1. Page Introduction
├── 2. Main Generator
│   ├── Text Input
│   ├── Font Styles
│   ├── Decoration
│   ├── Live Preview
│   └── Copy
├── 3. Instagram Presets
│   ├── Bio Style
│   ├── Name Style
│   ├── Cute Style
│   └── Minimal Style
├── 4. How to Use Instagram Fonts
├── 5. Instagram Compatibility
├── 6. Examples
├── 7. Related Tools
└── 8. FAQ
```

不同页面可以共享组件，但必须有不同的功能重点和内容。

  页面类型          必须有的独立内容
  ----------------- ----------------------------------
  Font Style        样式效果、字符覆盖范围、转换示例
  Social Platform   平台字段、使用场景、操作说明
  Gaming            游戏规则、昵称示例、字符检测
  Symbols           对应分类符号库、组合示例
  Text Utility      转换逻辑、输入输出示例

## 6.2 Title 和 Description 示例

  -----------------------------------------------------------------------
  页面                    Title                   Description
  ----------------------- ----------------------- -----------------------
  首页                    Fancy Text Generator -  Generate fancy Unicode
                          Stylish Text & Symbols  text, decorate gaming
                          \| FancyFont            names, and copy symbols
                                                  for social profiles and
                                                  games. Free, instant,
                                                  and private.

  Fancy Text              Fancy Text Generator -  Turn plain text into
                          Copy & Paste Stylish    cursive, bold, gothic,
                          Text                    bubble and more styles.
                                                  Preview and copy
                                                  instantly.

  Gaming Name             Gaming Name Generator - Decorate your gaming
                          Stylish Names & Symbols nickname with stylish
                                                  letters and symbols.
                                                  Preview, customize and
                                                  copy your name.

  Symbols                 Symbols Copy and        Browse and copy Unicode
                          Paste - Hearts, Stars & symbols, hearts, stars,
                          More                    wings, arrows and
                                                  decorative characters.

  Instagram               Instagram Fonts         Create stylish
                          Generator - Stylish Bio Instagram bio and
                          & Names                 display name text using
                                                  Unicode styles. Copy
                                                  and paste instantly.

  PUBG                    PUBG Name Generator -   Create and decorate
                          Stylish Names & Symbols PUBG player names with
                                                  stylish Unicode letters
                                                  and symbols. Check
                                                  character length before
                                                  copying.

  Blank Space             Blank Space Copy and    Copy blank and
                          Paste - Invisible       invisible Unicode
                          Characters              characters, inspect
                                                  their code points and
                                                  learn where they may
                                                  work.
  -----------------------------------------------------------------------

Title 不要为了堆叠关键词而过长。每个页面应突出自己的搜索意图。

## 6.3 页面内容质量标准

  内容           要求
  -------------- ----------------------------
  核心工具       必须可以直接使用
  使用说明       根据真实功能撰写
  真实示例       提供不同输入的结果
  兼容性说明     明确技术限制
  FAQ            回答真实问题
  相关工具       提供合理内部链接
  数据来源       涉及平台规则时引用官方来源
  页面更新时间   有实质更新时才更新

不要给每个页面硬性规定 1000 或 2000
个单词。对于工具站，工具本身就是主要内容。

------------------------------------------------------------------------

# 第七部分：国际化 SEO

## 7.1 现有语言策略

建议先保留现有五种语言：

  语言               URL 前缀示例      建议
  ------------------ ----------------- --------
  English            根路径或 `/en/`   主市场
  Español            `/es/`            保留
  Português          `/pt/`            保留
  简体中文           `/zh-cn/`         保留
  Bahasa Indonesia   `/id/`            保留

如果现有 URL 已经被 Google
发现或索引，不要在没有迁移计划的情况下随意改变
URL。根路径是否作为英语版本，应根据当前真实路由决定。

## 7.2 90 天语言策略

第一个月不增加新语言。第二、三个月根据实际数据决定是否增加日语。

每种语言都需要：

-   本地化关键词。
-   本地化页面标题。
-   本地化描述。
-   本地化 FAQ。
-   本地化示例。
-   本地化内部链接。
-   对应的工具界面翻译。

不能只机械翻译英文关键词。

## 7.3 Hreflang 示例

``` html
<link rel="alternate" hreflang="en"
  href="https://fancyfont.tools/" />

<link rel="alternate" hreflang="es"
  href="https://fancyfont.tools/es/" />

<link rel="alternate" hreflang="pt-BR"
  href="https://fancyfont.tools/pt/" />

<link rel="alternate" hreflang="zh-CN"
  href="https://fancyfont.tools/zh-cn/" />

<link rel="alternate" hreflang="id"
  href="https://fancyfont.tools/id/" />
```

以上是结构示例，实际 URL 必须对应当前网站语言路由。

检查：

1.  每个页面的 hreflang 相互对应。
2.  每个语言页面使用自己的 canonical。
3.  Sitemap 收录正确语言 URL。
4.  不同语言页面不能全部 canonical 到英文。
5.  页面语言与 HTML lang 属性一致。

------------------------------------------------------------------------

# 第八部分：技术 SEO 改造

## 8.1 页面可索引性

检查：

-   首页是否返回 200。
-   工具页面是否返回 200。
-   是否存在 noindex。
-   robots.txt 是否允许抓取。
-   Sitemap 是否包含有效页面。
-   Canonical 是否正确。
-   语言页面是否被正确识别。
-   404 页面是否返回真正的 404 状态。

## 8.2 JavaScript SEO

重点检查：

1.  页面首屏是否有完整 H1。
2.  页面描述是否出现在初始 HTML。
3.  工具说明是否可以被 Google 渲染。
4.  内部链接是否使用真实 `<a href>`。
5.  页面内容是否依赖用户交互才出现。
6.  不同路由是否有不同 Title。
7.  动态 URL 是否产生重复页面。

参考：Google JavaScript SEO Basics\
https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

## 8.3 Core Web Vitals

工程目标：

  指标     推荐目标
  ------ ----------
  LCP      ≤ 2.5 秒
  INP      ≤ 200 ms
  CLS         ≤ 0.1

这些是 Google 推荐的良好体验阈值，不是排名保证。

重点关注：

-   首屏工具显示速度。
-   输入时是否卡顿。
-   复制是否即时响应。
-   PNG 导出是否阻塞主线程。
-   移动端输入区域是否稳定。
-   样式列表是否造成布局抖动。

参考：https://developers.google.com/search/docs/appearance/core-web-vitals

## 8.4 结构化数据

  Schema           适用页面         建议
  ---------------- ---------------- ------------------------------------
  WebSite          首页             可以使用
  Organization     关于页面         可以使用
  WebApplication   工具页面         仅使用真实适用属性
  BreadcrumbList   有层级的工具页   可以使用
  FAQPage          FAQ              不应期待获得 Google FAQ 富媒体结果

结构化数据必须与用户可见内容一致。

参考：https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

## 8.5 技术 SEO 交付清单

``` text
[ ] robots.txt
[ ] sitemap.xml
[ ] Canonical
[ ] Hreflang
[ ] Unique Title
[ ] Unique Description
[ ] H1
[ ] HTTP Status
[ ] Internal Links
[ ] Mobile Layout
[ ] Core Web Vitals
[ ] Structured Data
[ ] 404 Handling
[ ] Search Console Verification
[ ] Sitemap Submission
[ ] Indexing Inspection
```

------------------------------------------------------------------------

# 第九部分：数据分析与产品埋点

这是第一周就应该完成的工作。数据少不代表不能积累数据，越早埋点，越容易判断后续应该开发什么。

## 9.1 建议使用的工具

  工具                    用途                   是否必须
  ----------------------- ---------------------- ----------
  Google Search Console   搜索曝光、点击、排名   必须
  Google Analytics 4      用户行为、来源、国家   建议
  Microsoft Clarity       用户操作与页面体验     建议
  PageSpeed Insights      页面性能               必须
  Google Trends           关键词趋势             建议
  Keyword Planner         搜索量验证             建议

官方地址：

-   GSC：https://search.google.com/search-console
-   GA4：https://analytics.google.com/
-   Clarity：https://clarity.microsoft.com/
-   Trends：https://trends.google.com/trends/
-   Keyword Planner：https://ads.google.com/home/tools/keyword-planner/

## 9.2 产品埋点事件

### Fancy Text

``` text
fancy_text_view
fancy_text_input
fancy_text_style_filter
fancy_text_style_select
fancy_text_copy
fancy_text_copy_success
fancy_text_favorite
fancy_text_png_export
```

### Gaming Name

``` text
gaming_name_view
gaming_name_input
gaming_name_style_select
gaming_name_decoration_select
gaming_name_generate
gaming_name_copy
gaming_name_save
gaming_name_compatibility_check
```

### Symbols

``` text
symbols_view
symbols_search
symbols_category_select
symbol_copy
symbol_add_to_board
symbol_remove_from_board
symbol_copy_all
symbol_favorite
```

### Social Bio

``` text
bio_generator_view
bio_input
bio_template_select
bio_symbol_add
bio_generate
bio_copy
bio_png_export
```

## 9.3 关键指标

  指标                   计算方式
  ---------------------- -----------------------------------
  Tool Activation Rate   使用工具的用户 / 工具访问用户
  Copy Rate              至少复制一次的用户 / 工具访问用户
  PNG Export Rate        导出 PNG 用户 / 工具访问用户
  Favorite Rate          收藏用户 / 工具访问用户
  Repeat Usage           重复使用用户 / 使用用户
  Cross-tool Rate        使用多个工具的用户 / 使用用户

第一阶段先建立数据基线，不要提前设定过高的转化率目标。

**隐私要求：** 不要把用户输入的原始文字发送到 GA4 或
Clarity。只记录事件类型、页面类型、样式
ID、工具类型、成功状态和字符数量区间，不记录具体文本。

------------------------------------------------------------------------

# 第十部分：90 天执行计划

规划日期：2026-10-31 至 2027-01-29。

分为三个阶段：

1.  第一阶段：产品基础和差异化。
2.  第二阶段：SEO 页面和功能扩展。
3.  第三阶段：验证增长和迭代。

## 第一阶段：Day 1～30（2026-10-31 至 2026-11-29）

**核心目标：完成产品基础改造，建立可持续的数据体系。**

### Week 1：现状审计与数据基础

  任务       具体内容                       优先级
  ---------- ------------------------------ --------
  网站审计   全部页面、链接、标题、描述     P0
  GSC        检查索引状态、页面曝光         P0
  GA4        配置事件与转化                 P0
  Clarity    观察真实用户操作               P1
  SEO 技术   Sitemap、Canonical、Hreflang   P0
  页面速度   测试移动端和桌面端             P0
  产品分析   记录现有样式和符号             P0

交付结果：

``` text
1. 当前页面清单
2. SEO 技术问题清单
3. GA4 事件配置
4. GSC 基线数据
5. 产品功能清单
```

### Week 2：Fancy Text 改造

  任务       具体内容
  ---------- ----------------------------
  样式配置   统一样式映射配置
  字符统计   增加 Grapheme Cluster 统计
  样式搜索   优化关键词和标签
  复制体验   统一复制反馈
  收藏       统一收藏逻辑
  最近使用   本地历史
  PNG        检查不同样式渲染

交付：更稳定的 Fancy Text Generator、统一样式数据结构和完整埋点。

### Week 3：Gaming Name 改造

  任务            具体内容
  --------------- --------------------
  Game Config     游戏规则配置模型
  Name Builder    优化前缀、后缀组合
  Presets         优化风格预设
  Length Check    字符长度检查
  Duplicate       去重
  Save            保存昵称
  Compatibility   第一版分析器

交付：Gaming Name Builder V2、游戏配置基础数据、兼容性分析 MVP。

### Week 4：Symbol Studio 改造

  任务            具体内容
  --------------- ----------------
  Symbol Board    组合工作台
  Multi Select    多选
  Search          搜索优化
  Favorites       收藏
  Templates       组合模板
  Text + Symbol   文字与符号组合
  Copy All        一键复制

交付：Symbol Studio V2、组合模板库、工具间交叉导流。

### 第一个月验收标准

  项目         验收标准
  ------------ ----------------------
  Fancy Text   核心转换流程正常
  Gaming       可以组合和检查昵称
  Symbols      可以组合多个符号
  Analytics    关键事件正常采集
  SEO          核心页面技术检查完成
  Mobile       核心流程可以正常使用

## 第二阶段：Day 31～60（2026-11-30 至 2026-12-29）

**核心目标：完成场景化工具和第一批有独立价值的 SEO 页面。**

### Week 5：Social Bio Creator

开发：

-   Bio Templates。
-   Fancy Text Integration。
-   Symbol Integration。
-   Line Break Formatter。
-   Character Counter。
-   Copy All。
-   PNG Export。

第一批场景：Instagram Bio、TikTok Bio、Discord Profile。

### Week 6：Compatibility Checker

开发：

-   Unicode Code Point Analyzer。
-   Character Category Analyzer。
-   Grapheme Counter。
-   Platform Rule Config。
-   Risk Warning。
-   Compatibility Report。

先建立规则数据结构。没有经过真实测试的字符不能显示为 Verified。

### Week 7：SEO 第一批页面优化

  页面          改造内容
  ------------- ------------------------
  首页          强化核心定位和工具入口
  Fancy Text    强化主工具体验
  Gaming Name   强化昵称组合
  Symbols       强化符号工作台
  Instagram     加入 Bio 专属能力
  PUBG          加入游戏规则信息
  Free Fire     增加游戏场景能力
  Roblox        区分用户名和展示名称

SEO 优化应与功能改造同步完成。

### Week 8：新增 SEO 工具页面

优先评估：

  页面                       功能
  -------------------------- ----------------------
  `/invisible-characters/`   不可见字符分析和复制
  `/heart-symbols/`          爱心符号库
  `/aesthetic-symbols/`      美学符号集合
  `/kaomoji/`                颜文字库

如果现有页面已经覆盖相同搜索意图，则优先合并或增强，不要重复创建。

### 第二个月验收标准

  项目            目标
  --------------- --------------------------
  Social Bio      核心流程完成
  Compatibility   第一版可使用
  SEO 页面        核心页面完成优化
  新增页面        2～4 个高质量页面
  埋点            能分析不同工具的使用率
  国际化          五种语言核心页面保持一致

## 第三阶段：Day 61～90（2026-12-30 至 2027-01-29）

**核心目标：根据真实数据决定增长方向，而不是继续盲目开发。**

### Week 9：Text Utilities

优先评估和开发：

-   Upside Down Text。
-   Zalgo Text。
-   Text Reverser。
-   Tiny Text。
-   Blank Space 优化。

优先复用已有字符映射引擎。

### Week 10：SEO 第二批页面

根据前两个月数据选择：

-   Cursive。
-   Gothic。
-   Bubble。
-   Small Caps。
-   TikTok Fonts。
-   Discord Fonts。

不是全部机械创建，而是选择搜索意图明确、功能差异足够的页面。

### Week 11：国际化优化

重点检查：

-   英语页面。
-   西班牙语页面。
-   葡萄牙语页面。
-   印尼语页面。
-   中文页面。

检查翻译、语言 URL、hreflang、canonical。

如果数据表明日语有明显机会，再开发日语版本。

### Week 12：用户行为优化

分析：

-   哪些工具访问量最高。
-   哪些工具复制率最高。
-   哪些工具访问后没有操作。
-   哪些页面用户会跳转到其他工具。
-   哪些页面移动端体验较差。

根据数据调整首页布局和工具入口。

### Week 13：90 天复盘

输出：

``` text
1. SEO 页面表现报告
2. 国家与语言表现报告
3. 工具使用率报告
4. 用户行为报告
5. 关键词增长报告
6. 页面索引报告
7. 功能使用率报告
8. 下一季度开发路线图
```

------------------------------------------------------------------------

# 第十一部分：90 天目标与量化验收

## 11.1 产品交付目标

  指标                        90 天目标
  ----------------------- -------------
  核心产品模块                     5 个
  Fancy Text 核心功能              完整
  Gaming Name Builder                V2
  Symbol Studio                      V2
  Social Bio Creator                MVP
  Compatibility Checker             MVP
  Text Utilities            3～5 个工具
  核心埋点                     全部完成
  核心页面移动端测试               100%
  核心页面 SEO 检查                100%

## 11.2 SEO 交付目标

  指标             目标
  ---------------- ----------------------
  核心页面优化     8～12 个
  新增高质量页面   6～10 个
  新增教程         4～6 篇
  有效 Sitemap     覆盖所有核心页面
  Hreflang         对应语言页面正确配置
  Canonical        所有索引页面正确配置
  关键词数据库     建立并持续更新
  搜索曝光         持续增长
  自然搜索点击     持续增长

## 11.3 增长目标制定方式

当前 10 clicks、821 impressions 不适合做稳定增长预测。

建议：

-   **第 30 天：** 建立第一个完整月的可比较基线。
-   **第 60 天：** 判断哪些页面开始获得持续曝光，哪些功能真正有人使用。
-   **第 90 天：** 使用最近 28 天与前 28 天比较增长。

重点分析：

  指标              观察方式
  ----------------- --------------------------
  Impressions       搜索覆盖是否增加
  Clicks            实际自然流量是否增加
  CTR               同类排名下点击率是否改善
  Position          核心词是否逐渐进入前 20
  Indexed Pages     有价值页面是否被收录
  Tool Activation   页面是否真正解决用户问题
  Copy Rate         用户是否完成核心操作
  Country           哪些国家值得重点投入

不要以索引页面数量作为唯一增长目标。

------------------------------------------------------------------------

# 第十二部分：关键词数据验证方案

## 12.1 关键词研究流程

``` text
竞争对手页面
      +
Google 搜索建议
      +
Google Trends
      +
Keyword Planner
      +
GSC 实际查询
      ↓
关键词数据库
      ↓
搜索意图分类
      ↓
页面映射
      ↓
功能开发
      ↓
上线与数据验证
```

## 12.2 关键词数据库字段

  字段                 示例
  -------------------- ---------------------
  Keyword              instagram fonts
  Language             English
  Country              US
  Search Volume        待查询
  Keyword Difficulty   待查询
  Search Intent        Tool
  SERP Type            Generator
  Competitor URL       YayText
  Target URL           `/instagram-fonts/`
  Current Position     待 GSC
  Impressions          待 GSC
  Clicks               待 GSC
  Tool Function        Instagram Bio
  Status               Planned

## 12.3 关键词优先级评分

内部评分模型：

\[ Score = 0.3D + 0.25F + 0.2C + 0.15K + 0.1R \]

  变量   含义
  ------ -------------------------------
  D      搜索需求（Demand）
  F      产品功能匹配度（Fit）
  C      竞争可进入程度（Competition）
  K      关键词集群价值（Cluster）
  R      开发成本收益（ROI）

每项按 1～5 分评分。Competition 分数越高，代表竞争越容易进入。

示例评分（仅用于说明方法，不是真实搜索数据）：

  关键词                    D   F   C   K   R
  ----------------------- --- --- --- --- ---
  fancy text generator      5   5   1   5   3
  pubg name generator       4   5   3   4   5
  heart symbols             4   5   3   4   5
  tattoo font generator     3   2   2   2   2

当前阶段应重视产品匹配度和开发成本收益。

------------------------------------------------------------------------

# 第十三部分：建议沉淀的技术资产

建议从现在开始沉淀四类数据，避免后续逻辑散落在各个页面。

## 13.1 Unicode Style Database

``` text
style_id
style_name
category
character_mapping
supported_characters
partial_mapping
preview
version
```

## 13.2 Symbol Database

``` text
symbol_id
symbol
unicode_codepoint
category
tags
description
is_emoji
```

## 13.3 Platform Rules Database

``` text
platform_id
platform_name
field_type
max_length
allowed_characters
unicode_policy
emoji_policy
rule_source
tested_version
tested_at
confidence
```

## 13.4 SEO Page Database

``` text
page_id
url
language
page_type
primary_keyword
secondary_keywords
search_intent
title
description
canonical
hreflang_group
index_status
last_updated
```

这些数据应成为产品长期资产，而不是写死在各个页面中。

------------------------------------------------------------------------

# 第十四部分：开发资源与工作量

假设以一名后端开发为主，前端和设计资源有限，建议控制项目规模。

  工作模块               预计工作量 优先级
  -------------------- ------------ --------
  现有产品审计与埋点      2～3 人日 P0
  Fancy Text 改造         3～4 人日 P0
  Gaming Name V2          5～7 人日 P0
  Symbol Studio V2        3～4 人日 P0
  Social Bio MVP          3～4 人日 P1
  Compatibility MVP       4～6 人日 P1
  Text Utilities          3～5 人日 P1
  技术 SEO                2～4 人日 P0
  SEO 页面优化            4～6 人日 P0
  国际化检查              2～3 人日 P1

估算基于现有代码可以复用、没有重大架构问题。部分工作可以并行，不是精确排期承诺。

建议资源分配：

-   60%：产品功能。
-   25%：SEO 页面与内容。
-   15%：数据分析、技术 SEO 和优化。

------------------------------------------------------------------------

# 第十五部分：三个关键战略决策

## 决策一：不要把 FancyFont 做成另一个 YayText

如果只是增加字体、复制按钮、符号和风格页面，用户没有足够理由迁移。

建议形成：

**Gaming Name + Symbol Builder + Compatibility。**

这是最值得验证的差异化方向。

## 决策二：SEO 页面必须跟产品能力同步

例如开发 `/pubg-name-generator/` 时，不应只复制一个 Fancy Text
工具然后替换 H1。

应开发真正与 PUBG 场景相关的能力：

-   游戏昵称组合。
-   长度检测。
-   字符分析。
-   兼容性说明。
-   经过验证的规则。
-   真实昵称示例。

## 决策三：前 90 天不要急于变现

当前用户量很小，不建议立即投入大量时间做会员体系、复杂账号系统、订阅套餐、AI
付费生成或大量广告位。

建议优先做好免费工具。

未来可以验证：

-   PNG 高清导出。
-   高级文字设计模板。
-   批量文字图片生成。
-   更多图片导出样式。

是否付费应由实际使用数据决定。

------------------------------------------------------------------------

# 第十六部分：最终执行优先级

## P0：现在立即做

1.  GSC、GA4、Clarity 数据体系。
2.  技术 SEO 基础审计。
3.  Fancy Text 核心体验优化。
4.  Gaming Name Builder V2。
5.  Symbol Studio V2。
6.  现有核心页面 SEO 优化。

## P1：第 30～60 天

1.  Social Bio Creator。
2.  Unicode Compatibility Checker。
3.  PUBG、Free Fire、Roblox 场景深化。
4.  Heart Symbols、Aesthetic Symbols 等页面。
5.  国际化页面质量优化。

## P2：第 60～90 天

1.  Text Utilities。
2.  TikTok、Discord 专属工具。
3.  根据真实搜索数据扩展关键词页面。
4.  优化表现最好的语言和国家。
5.  根据用户行为决定下一季度功能。

------------------------------------------------------------------------

# 结论

FancyFont 未来 90 天最合理的路线，不是继续扩充字体数量，也不是马上铺设
100 个 SEO 页面。

而是：

1.  **第一个月：** 把现有三个核心工具打磨好，尤其是 Gaming Name 和
    Symbols。
2.  **第二个月：** 做出 Social Bio 和兼容性分析能力，形成竞争差异。
3.  **第三个月：** 通过真实搜索和用户行为数据决定 SEO 扩张方向。

如果只能选择一个最值得投入的差异化项目，建议选择：

**Gaming Name Builder + Unicode Compatibility Checker。**

它能把普通字符转换能力变成真正解决用户问题的产品，并且可以与现有符号库、字体映射、平台页面共享技术资产。

这才是 FancyFont 应该建立的长期竞争优势。

------------------------------------------------------------------------

# 附录：参考资料与数据来源

## FancyFont 自身

-   https://fancyfont.tools/
-   https://fancyfont.tools/（Fancy Text Generator 及相关工具页面）
-   https://fancyfont.tools/（Gaming Name Generator 及相关工具页面）
-   https://fancyfont.tools/（Symbols & Decorators 及相关工具页面）

## 竞争对手

-   YayText：https://yaytext.com/
-   LingoJam：https://lingojam.com/Fancytextgenerator
-   CoolSymbol：https://coolsymbol.com/
-   FSymbols：https://fsymbols.com/
-   PiliApp：https://www.piliapp.com/

## Google 官方 SEO 文档

-   SEO Starter
    Guide：https://developers.google.com/search/docs/fundamentals/seo-starter-guide
-   Helpful, Reliable, People-First
    Content：https://developers.google.com/search/docs/fundamentals/creating-helpful-content
-   Spam
    Policies：https://developers.google.com/search/docs/essentials/spam-policies
-   JavaScript SEO
    Basics：https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
-   Localized
    Versions：https://developers.google.com/search/docs/specialty/international/localized-versions
-   Core Web
    Vitals：https://developers.google.com/search/docs/appearance/core-web-vitals
-   Structured Data
    Introduction：https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

## 数据与分析工具

-   Google Search Console：https://search.google.com/search-console
-   Google Analytics：https://analytics.google.com/
-   Microsoft Clarity：https://clarity.microsoft.com/
-   Google Trends：https://trends.google.com/trends/
-   Google Keyword
    Planner：https://ads.google.com/home/tools/keyword-planner/

## 重要说明

本规划中的 GSC
数字来自用户提供的截图；产品现状来自当前对话中的网站分析；关键词搜索量、KD、流量预测并未伪造，均标记为待验证。竞品功能对比属于公开产品层面的定性分析，不代表竞品流量、收入或市场份额数据。正式执行前应重新核验各网站页面、功能和
Google 官方文档的最新状态。
