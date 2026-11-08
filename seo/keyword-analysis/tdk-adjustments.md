# TDK 调整建议（基于 Keyword Planner 18,135 词聚类）

> 数据：`clusters-master-final.csv`（vol 为 KP 分桶值=区间下界，用于相对比较；地区未指定，组内相对比较成立）
> 竞争参照：同簇头部词的竞争度全部为 Low，出价 $0.01–$2.26 → SEO 可博，自然排名是主战场

## 总览：簇 → 量级地图（en 语料 vol_sum）

| 簇 | vol_sum | 词数 | 对应页面 | 结论 |
|---|---|---|---|---|
| 核心生成器词 | 28.7M | 3,817 | 首页 | 量级最大，`stylish` 词族在跌（-90%），`fancy` 词族在涨（+900%） |
| 草书/手写体 | 6.76M | 2,336 | /styles/cursive-fonts | 第二大簇，近变体词极多 → TD 要覆盖 script/handwriting/calligraphy |
| 符号复制粘贴 | 6.46M | 1,408 | /symbols | 多个 500k 头部词，symbols 页是隐形金矿 |
| 爱心符号 | 5.48M | 273 | /styles/heart-font-generator + /symbols | 500k 级头部词 6 个 |
| Instagram | 4.21M | 2,236 | /platforms/instagram-fonts | 500k 头部 + 大量 bio 长尾 |
| 粗体 | 3.51M | 186 | /styles/bold-fonts | 500k 头部词 6 个，比直觉大得多 |
| Fancy 核心词 | 3.31M | 882 | 首页 | 上涨词族 |
| 昵称/名字 | 2.54M | 279 | /styles/decorated-nicknames | 注意：与"起名灵感"类网站意图重叠 |
| 空白/隐藏字符 | 1.24M | 35 | /blank-space | 2 个 500k 头部词，页面验证成功 |
| Free Fire | 1.21M | 65 | /platforms/free-fire-name-generator | `free fire nickname style` 500k，西语另有 500k |

## 逐页调整（只列需要动的）

### 首页 `/`
- 头部词：`fancy fonts`(500k) `fancy text`(500k) `font changer`(500k) `cool fonts`(500k) `copy and paste fonts`(500k)
- **保持 fancy 系主词**，域名 fancyfont.tools 与之天然匹配；避免把 `stylish text`（-90% YoY，且带印度英语色彩）做主词
- T 建议保留现结构，D 里补 `copy and paste`（500k 独立头部词 + 竞品站即以此命名，是对标词）

### /styles/heart-font-generator + /symbols（最大被低估簇）
- 数据：`heart copy and paste`(500k) `heart symbol copy paste`(500k) `heart icon copy paste`(500k) `copy and paste love heart`(500k) `text symbols`(500k) `copy and paste symbols`(500k) `cool symbols`(500k)
- **调整**：heart 页 T 补 `Heart Symbol Copy and Paste`；symbols 页 T 建议 `Text Symbols & Cool Symbols — Copy and Paste`，覆盖 3 个 500k 词族
- 心形/星星/箭头/对勾/音符各设锚点小节（各 500k/50k 族），页内互相链接

### /blank-space
- 数据：`invisible character`(500k) `blank space`(500k) `invisible character copy and paste`(50k)
- **调整**：T 同时含 `Invisible Character` 与 `Blank Space`（两者都是 500k，两个词族都要接住）；已有页继续保留 WhatsApp/Discord 场景段

### /styles/decorated-nicknames（意图重定位）
- 数据：`nickname generator`(500k) 但 SERP 被"起名灵感"站占据；上涨词：`fancy name maker`(500k, +900% YoY) `nickname font generator`(5k, +900% 3mo)
- **调整**：T 从纯字体工具改为双意图 `Fancy Name & Nickname Generator — Stylish Fonts`，正文分两段：字体化名字 + 名字灵感，接住 2.54M 簇而不硬碰起名站

### /platforms/whatsapp-fonts（趋势最优页面）
- 数据：`whatsapp font`(50k, **+900% YoY**) `whatsapp font format`(5k, **+9900%**) `whatsapp text font`(5k, +9900%) `symbol in whatsapp`(50k) `typography whatsapp`(50k)
- 页面刚上线就踩中上涨簇（537 词，vol_sum 449k），**建议优先扩充内容**：fonts 清单、name/about 场景、symbol 小节；印尼语 `cara tukar font whatsapp`(5k) 提示可加 id 落地页测试

### /platforms/instagram-fonts
- 数据：`instagram fonts`(500k) `ig fonts`(500k) `fonts for instagram`(50k) `fonts for instagram bio`(50k) `instagram font style`(50k)
- **调整**：T/D 补 `fonts for instagram` 语序变体 + `IG fonts` 别名；bio 词族内链到 /learn/instagram-bio-fonts

### /platforms/discord-fonts
- 数据：`discord fonts`(500k) `discord font generator`(50k) `discord font changer`(5k)
- **调整**：T 保持，D 补 `fonts for discord`；guide `/learn/discord-fonts-guide` 双向内链（已有，确认锚文本用 discord fonts）

### /platforms/facebook-fonts
- 数据：`fonts for facebook`(500k) `facebook font changer`(50k) `bold text generator for facebook`(50k)
- **调整**：T 补 `changer`；与 bold 页互链承接 facebook bold 词族

### /styles/cursive-fonts
- 数据：`cursive font generator`(500k) + script/handwriting/calligraphy 近族（簇 6.76M）；`calligraphy font generator`(50k)
- **调整**：T 已对；H2 加 calligraphy 小节承接 50k 词族；`cursive i font`/`fancy i text` 类单字母词(500k+900% 段) → 正文加"按字母浏览"锚点（低投入高相关性）

### /styles/bold-fonts
- 数据：`bold text generator`(500k) `bold font generator`(500k) 等 6 个 500k，簇 3.51M
- **调整**：title 与 H1 统一（现 title=Bold Font Generator / H1=Bold Text Generator，两者都是 500k 头部词，建议 T=`Bold Text Generator — Copy & Paste Bold Fonts` 对齐 H1）

### /styles/gothic-fonts
- 数据：`gothic font generator`(50k) `old english font generator`(50k) `old english text generator`(50k)
- **调整**：title 已含 Old English ✓；正文补 blackletter/fraktur/medieval 同义词段（各 5k 级）

### /styles/zalgo-text
- 数据：`glitch text generator`(50k, 出价 $0.95–$11.47 全表最高) `creepy/cursed/scary text generator`(各50k) `blurred text generator`(50k, +900%)
- **调整**：H2 小节覆盖 glitch/creepy/cursed/weird/blurred 同义词；出价异常高说明商业意图强（工具站竞争大），值得加内链权重

### /styles/upside-down-text
- 数据：`upside down text`(50k) `make text upside down`(50k) `inverted text generator`(50k)
- **调整**：D 补 `backwards text` / `flip text` / `mirror text` 变体（50k/5k 级）

### /styles/strikethrough-text
- 数据：`strikethrough text generator`(50k) `strike through`(50k)
- **调整**：补 `crossed out`(5k) `line through`(5k) 变体；与 bold 页同属"格式化"意图可互链

### /styles/elegant-font-generator
- 数据：`elegant font`(50k) `fancy writing`(50k) `luxury fonts`(50k) `classy fonts`(5k)
- **调整**：T 加 `Luxury & Classy`；正文 fancy writing 小节（50k 且含 copy paste 变体）

### /styles/fancy-numbers
- 数据：`fancy numbers`(500k) `number font generator`(5k)；已剔除印度手机靓号噪音 459 词（另属意图）
- **调整**：D 补 `number fonts copy and paste`；正文说明仅适用于支持 Unicode 数字变体的平台（抖音/微博不支持）

### es 语区（vol 未指定地区，量级为西语全球）
| 页面 | 头部词 | 动作 |
|---|---|---|
| es 首页 | `letras bonitas`(5M!) `letras raras`(50k) | T 主词用 `Letras Bonitas` |
| es cursive | `letras cursivas`(5M) | T=`Letras Cursivas` |
| es gothic | `letras góticas`(500k) + `letras góticas para nombres`(5k) | 加 nombres 场景段 |
| es small | `letras pequeñas`(50k) | 已有迁移页 ✓ |
| es instagram | `fuentes para instagram`(50k) | T 保持 |
| es free-fire | `nombres para free fire`(500k) `espacio para nombres free fire`(5k) | **重点**：500k 级；后者与 blank-space es 互链 |
| es discord | `letras discord`(5k) | 已有页 ✓ |

### pt 语区（量级为葡语全球）
- pt 首页：`letras diferentes`(5M) → T 主词
- pt instagram：`fontes para instagram`(500k)
- pt free-fire：`nomes para free fire`(50k)

## 竞品查询需求（brand 词，不进 TDK 但可写对比内容）
`lingojam`(50k×3+5k×4) `cool text`(50k) `cooltextfont`(50k) `fontmeme`(50k) `fontspace`(50k) `instafonts`(500k) `igfonts`(500k)
→ 建议 /learn/ 写一篇 "LingoJam alternatives" 类对比文（搜索意图=找工具，可直接转化）
