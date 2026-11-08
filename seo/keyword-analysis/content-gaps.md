# 内容缺口：新页候选（有搜索量、无对应页面）

> 判定：簇内词映射 `page=""` 且非噪音/竞品簇。vol 为 KP 分桶下界。
> 引擎复用性标注：新站引擎是 Unicode 变换，凡 Unicode 能表达的风格 → 复用 44 页模板，边际成本低。

## P0 — 头部 50k 且模板可复用（建议本月内做）

| 候选页 | 头部词（vol） | 词数 | 复用性 | 说明 |
|---|---|---|---|---|
| `/platforms/twitter-fonts` | `fonts for twitter`(50k) | 44 | 高（platform 模板） | 平台簇第 5 名，纯模板复制，X 支持基本拉丁 Unicode |
| `/styles/signature-font-generator` | `handwritten signature generator`(50k) | 58 | 高（script 变体） | 签名意图≈cursive 的场景化包装，与 cursive-fonts 互链 |
| `/styles/superscript-subscript-generator` | `superscript generator`(50k) `subscript generator`(50k) | 12 | 高（小字体引擎已有 sup/sub 映射） | small-fonts 页 title 已提 super/subscript，独立成页接 100k 头部并互链 |
| `/platforms/minecraft-fonts` | `minecraft font generator`(50k) | 14 | 高（gaming 模板） | 游戏簇缺口里最大的一个 |

## P1 — 头部 50k，需要少量新内容

| 候选页 | 头部词（vol） | 词数 | 说明 |
|---|---|---|---|
| `/styles/graffiti-font-generator` | `graffiti font generator`(50k) | 42 | Unicode 近似风格有限（可用 fraktur/装饰框近似），需诚实标注 |
| `/styles/ascii-text-art` | `ascii art generator`(50k) | 37 | 内容型页面（预设 ASCII 画库 + 复制），与 generator 页模板不同，但 /symbols 页已有基础 |

## P2 — 5k 级小簇，合并不单独建页

| 词族 | 头部词（vol） | 建议 |
|---|---|---|
| linkedin bold | `linkedin font generator`(5k) `linkedin bold text generator`(5k) | 并入 bold 页"platform 场景"段（LinkedIn 简历场景，出价高） |
| snapchat / telegram / pinterest | 各 500–5k | 各加 1 个 H2 段到相近平台页或写进 game-name 页，暂不建页 |
| among-us / genshin / valorant / agario | 各 500 | 在 /platforms/game-name-generator 正文加"其他游戏"列表段 |
| vaporwave / wide text | `vapor wave font`(5k) `wide text`(5k) | aesthetic 页已有 Fullwidth & Vaporwave 标题 ✓ 补正文段落即可 |
| blurred text | `blurred text generator`(50k, **+900% YoY**) | zalgo 页加 "blur/glitch 变体" 小节（Unicode 无真模糊，用 zalgo 组合近似，诚实标注） |

## 刻意不建的页（异意图，已隔离在 clusters-master `irrelevant-*`）
- 印度手机/车牌靓号（459 词）、tattoo 字体设计、logo/wordart 图片生成、印地语等本地文字体、Google Docs/Word 排版、设计软件字体安装
- 这些词量再大也不匹配"复制粘贴 Unicode 文本"的产品形态，别被量迷惑

## es/pt 语区缺口
- 西语 `espacio para nombres free fire`(5k) → blank-space es 页加 free fire 场景段
- 葡语头部词几乎全部已映射（迁移页覆盖 ✓）；es/pt 长尾在本次 KP 导出里没有扩展语料，若要深耕需用西/葡语界面重新跑 KP（语言参数设 es/pt）
