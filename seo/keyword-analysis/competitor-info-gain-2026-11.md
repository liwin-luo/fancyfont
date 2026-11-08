# 竞品信息增益与差异化分析(第二轮)— autocomplete + SERP + 内容画像

**日期**:2026-11-08 | **前置报告**:`content-seo-analysis.md`(第七节,逐页 diff)、`serp-x-demand-integration.md`
**原始数据留存**:`seo/keyword-analysis/data-2026-11-08/`(词表/聚类/矩阵/24 份 SERP/70 站画像,928KB)+ 完整抓取存档 `~/WorkBuddy/57rfy/seo-analysis/fancyfont-competitive-2026-11-08/`

## 一、方法与数据量

| 数据源 | 规模 | 采集方式 |
|---|---|---|
| Google autocomplete 递归展开(en) | 53 种子 → 相关词扩展 → **5,808 去重词** | suggestqueries API,含 how/what/can 问题式前缀 |
| Google autocomplete(es) | 10 种子 → **376 词** | hl=es&gl=mx |
| Google SERP(en,us) | 24 查询 × 前 9-10 位 → **116 域名矩阵** | 真实浏览器,hl=en&gl=us&pws=0 |
| People also ask | 该环境下 Google 少给 PAA 板块,仅 5 查询捕获 | 问题意图以 autocomplete 问题式(104 词)+ related searches(~190 词)+ 竞品 FAQ 问题文本补足 |
| 竞品内容画像 | 本轮新发现 **67 站** TDK+H2/H3+词数+信号位 | curl/浏览器;旧 29 站复用上轮存档(tdk_all 5 页/站) |

查询覆盖:头部(fancy/cool font generator×8)+ 平台(discord/twitter/whatsapp/tiktok/instagram)+ 缺口页对应词(twitter fonts/minecraft/signature/superscript/small/bold/graffiti/ascii)+ 昵称(nickname/free fire)+ symbols。

## 二、核心结论(TL;DR)

1. **我们域名在 24/24 个查询的前 9-10 位全部缺席**(上轮 8 查询同样 0 次)。头部词正面战场不存在我们的位置,验证"主攻中尾+专页 EMD"路线;本轮价值在于找出**哪些中尾簇 SERP 结构性弱**。
2. **最大的新发现缺口:日韩假文词族**。copy-paste 簇 153 词里近半是 `japanese/korean font generator copy and paste` 词族(≥14 个变体),我们 0 覆盖(grep 样式表无 japan/korea)。上一轮 KP 分析把它归为"本地文字噪音"是**误判**——autocomplete 显示明确的 copy-paste 使用意图,Unicode 假文( workaround )能真实满足。
3. **平台词 SERP 被"非工具站"占据=软档**:`discord fonts` #1 是 GitHub 主题页、#2 Reddit、#4 是软件代理商(redstaglabs.com);`twitter fonts` #1/#2 是排期工具 postpone.app 和 AI 站 refont.ai。专一工具站缺位,我们的平台专页有真实进入空间。
4. **新竞品质量分层明显**:EMD 专页型(copypastefont.net 4,440 词/40 H2、calligraphyfontgenerator.com、superscriptgenerator.org、smallcaps.app、graffiti-generator.art)+ 平台纵深型(fontsgeneratorpro WhatsApp 3,616 词、refont.ai 带 20 篇博客飞轮)vs 大量 200-800 词薄页(lettertype.org 217 词、utilitytools.net 235 词、gate2home 614 词)。**薄页能排进前 10 = 词可赢,拼信息增益必赢**。
5. WhatsApp 簇判断更新:竞品已从"工具"卷向"方法教程"(fontsgeneratorpro:内置代码法 vs Unicode 法 + "What Font Does WhatsApp Use?" 专节);我们 en 指南已覆盖同类增益,**缺口在 es 语区**(`agrandar/cambiar letras de whatsapp` 在 es 词表高频)。

## 三、词簇 × 竞品 × 我们覆盖

| 簇 | 词量 | SERP 常客(best rank) | 我们覆盖 | 判定 |
|---|---|---|---|---|
| head-tool | 1,074 | lingojam#1、textfancy#1、fontspace#2、fancymytext#4、thecoolfont#3 | 首页+styles hub | 不正面打 |
| generic-tool | 296 | picsart#1、lingojam#2、font-generator#1 | 首页 | 不正面打 |
| platform | 998 | redstaglabs#1、postpone#1、refont.ai#2、liinks#1 | 7 平台页+3 新页 | **机会簇**(见 P0-4/P1-5) |
| games | 669 | texttofont#1、mcgic#1、ewanhowell#3、nickfinder#5 | 9 个游戏名生成页+minecraft | 机会簇 |
| cursive-calligraphy | 373 | textzy#2、kapwing#2、fontsgenerator.io#3、makecalligraphy | cursive-fonts+signature 新页 | 部分覆盖(download 意图缺) |
| symbols | 756 | hotsymbol#2、coolsymbol#3、fsymbols#4、symbolcombos#7 | /symbols(388) | 被低估(维持上轮结论) |
| transform | 1,022 | utilitytools#1、texttooling#1、textfancy#1 | 12 个变换专页 | 覆盖最好;**medieval 缺** |
| names | 182 | reedsy#2、plarium#5、nickfinder#5、mystylishname#7 | nickname-generator 新页 | 新页待权重 |
| copy-paste | 153 | copypastefont.net#1、copyandpastefonts.cc#5、thecoolfont#3 | 首页承接 | **日韩词族缺口** |
| question | 104 | —(PAA proxy) | /learn 13 篇 | 见 P1 内容题 |
| es | 376 | (es SERP 未采,上轮结论有效) | es 镜像 40 页 | whatsapp es 指南缺 |

完整矩阵:`data-2026-11-08/competitor-serp-matrix-2026-11.csv`(域名×24查询×名次)。

## 四、新竞品威胁分层(67 站画像要点)

**A. EMD 专页型(打法与我们一致,正面撞)**
- `copypastefont.net`(copy and paste fonts #1):4,440 词、40 个 H2 风格分区(Pretty/Cool/Glitch/Medieval/Bold/Cursive/Italic/Intermixed/**Mirror**)。注意:上轮深挖的 copyandpaste-fonts.com 只排 #5,EMD 内部已换人。
- `calligraphyfontgenerator.com`(cursive #6 EMD):1,051 词,结构标准。
- `superscriptgenerator.org`(#9):868 词,卖点"实时字数+上下文预览"。
- `smallcaps.app`(small text #6):1,460 词,有"Unicode small caps vs CSS 版本"专业区分——信息增益范式值得抄。
- `graffiti-generator.art`(#8)、`hotsymbol/coolsymbol/fsymbols/symbolcombos`(symbols 4 连)。
- `mystylishname.com`(free fire #7):3,176 词+广告,free fire 姿态激进。

**B. 平台纵深型(卷内容深度)**
- `refont.ai`(twitter #2):951 词但挂 **20 篇博客**的飞轮,FAQ+Best Practices 结构完整。
- `postel.app`(twitter #3):725 词,克制的 13 字体+诚实 UX,"Where Twitter fonts work" 信息增益型文案。
- `fontsgeneratorpro.com`(whatsapp #1):3,616 词,双方法(内置代码/Unicode)+ 平台问答,标称 400+ styles。
- `postoria.io`(whatsapp #2)、`onlinefontsgenerator.com`(twitter #7)、`givemefonts.com`+`liinks.co`(instagram bio)。

**C. SaaS 内容营销页(占头部词名次但非工具站,是名次假象)**
- `postpone.app`(排期工具)占 twitter fonts #1;`liinks.co`(链接 bio)、`creatorflow.so`、`upload-post.com`、`kapwing`。**这些页排名=这些词的实际工具竞争弱**。

**D. 薄工具页(能排但必然输增益)**
- lettertype.org(217 词, twitter/discord 双词 #9)、utilitytools.net(235 词)、gate2home(614 词)、fancytexty/fancymytext/textfancy(300-2,300 词不等)、symbolcombos(97 词)。
- 例外参考标杆:`onlinetexttools.com`(tiny text 5,013 词)和 `thecoolfont.com`(3,418 词,"Where Cool Fonts Work, and Where They Don't" 诚实章节)。

**E. 噪音(SERP 出现但非竞品)**:thewordfinder(拼词)、trickle.so(AI 建站广告)、ewanhowell(Minecraft 插件作者)、emojidb、GitHub 页、Pinterest、应用商店。

## 五、信息增益与差异化机会清单

### P0(本轮数据直接支撑,建议 2 周内)
1. **新建 `/japanese-font-generator/` + `/korean-font-generator/`**。证据:copy-paste 簇 `japanese font generator copy and paste`(≥6 变体)、`korean/hangul`(≥8 变体),67 站里仅 glyphy.io、gate2home、fancytexty 提及日韩,无专页 EMD 占位;我们 grep 样式表 0 覆盖。定位诚实化:这是 Unicode 假文(不可翻译),平台实测规则写清楚(沿用 discord/whatsapp 指南的边界声明范式)。
2. **新建 `/medieval-fonts/`(或在 `/gothic-fonts/` 内扩 medieval 词根)**。证据:transform 簇高频 `medieval font generator copy and paste/free/online`(5 变体),竞品侧 copypastefont 有 Medieval 分区但无 EMD 专页。我们 180 样式表已含 Fraktur/Old English 样式,只缺着陆页。
3. **`/signature-font-generator/` 补 download 意图**。证据:cursive 簇 `signature font generator download/png`(2 词)+ makecalligraphy/suncatcherstudio 以 PNG/下载承接。我们不导图(诚实原则),但可加"浏览器打印/存 PDF 引导 + 手写体样式推荐"章节和 FAQ,把这个意图接住再导流。
4. **`/discord-fonts/` 对照 refont/postel 结构补信息增益**,目标进前 10。证据:SERP #1=GitHub 页、#2=Reddit、#4=代理商,无专一工具站在前 4;该词在我们上轮 KP 有簇、竞品矩阵里 fontb 才 #3。补:H2 锚点覆盖 "how to change font on discord"/"where discord fonts work"/"which font should you use"(postel 的三段式)+ 常见客户端边界 FAQ(已有基础)。

### P1(1-2 个月,内容工程)
5. **平台页补 style-qualifier 锚点**:`twitter font generator bold/tiny`、`tiktok username/symbol`、`facebook color`(platform 簇 998 词的主干修饰词)。每平台页加 2-3 个风格限定 H2(直链对应样式),对标 refont.ai 的 10-H2 结构。我们 7 个平台页现在是单 H1+FAQ 结构(上轮 diff 已确认信息量占优,但锚点覆盖窄)。
6. **symbols 页美学子集**:`copy and paste symbols goth/cute/cross/faces/aesthetic`(symbols 簇 8+ 变体)+ symbolcombos 的"组合装饰"概念。388 符号库加"按美学挑"分区(每美学 5-8 个组合 combo),不动 URL 结构。
7. **WhatsApp 增益补齐**:en 指南加 "What font does WhatsApp use?" 问答(fontsgeneratorpro 有专节,我们指南无);**es 新建 whatsapp 指南**(es 词表 `agrandar letras de whatsapp`、`cambiar letras de whatsapp` 高频,es guia 现仅 4 页)。
8. **nickname-generator 加"从你的名字生成"输入模式**:`nickname generator using your name/from name/based on name`(names 簇 3 变体)。竞品(nickfinder/reedsy)全是随机列表;基于用户输入的公式化生成是我们指南"5 公式"内容的工具化,天然信息增益。
9. **question 簇内容题**(104 词清洗后有效题):`is font generator safe` → /learn 信任文(我们有隐私+乱码清洗器素材);`what is the best font generator` → 对比评测文(诚实列出自身局限,反常规做法);`what font is brat generator` → 趋势短文(brat 绿)挂 crazy-font 页。

### P2(观察/低成本)
10. 首页/hub 抄 thecoolfont 的 **"Pick by Purpose"** 分区思路(按用途选样式:bio/昵称/签名/公告)。
11. fortnite 页补 `sweaty/not taken/girl` qualifier FAQ(games 簇 3 变体)。
12. makecalligraphy 的 wedding/tattoo 场景词 → cursive 页加 wedding invitation 场景章节(tattoo 场景 KP 已判噪音,不建页只留段落)。
13. `fancy text generator png` 头部变体(head-tool 簇)持续无诚实解法,维持不做导图的边界声明。

### 护城河维持项(竞品 67 站几乎全无,继续投入)
- 诚实边界声明(仅 thecoolfont 有近似章节)、无障碍/screen reader 内容、乱码清洗器、388 符号库真数、180 样式不虚标(对手虚标 400+/660+/50K+)、5 语种、MCP+llms.txt、FAQ JSON-LD 全覆盖、13 篇指南内链网。
- 上轮结论仍有效:逐页 diff 我们信息量为竞品 2-8 倍;广告与 PNG 导出不做。

## 六、数据文件与复现

- `data-2026-11-08/autocomplete-terms-en-2026-11.json`:5,808 词(词→来源种子)
- `data-2026-11-08/autocomplete-terms-es-2026-11.json`:es 376 词
- `data-2026-11-08/serp/`:24 个查询的原始 SERP(标题/真实 URL/名次/PAA/related searches)
- `data-2026-11-08/competitor-serp-matrix-2026-11.csv`:116 域名×查询×名次
- `data-2026-11-08/competitor-profiles-2026-11.json`:70 站 TDK+H2/H3+词数+信号位(ads/png/signup/guides/languages)
- `data-2026-11-08/competitor-clusters-2026-11.json`:11 簇(词/竞品/我们页映射)
- 聚类脚本与完整抓取:`~/WorkBuddy/57rfy/seo-analysis/fancyfont-competitive-2026-11-08/scripts/`
- 已知局限:SERP 每 query 稳定捕获前 9-10 位(懒加载后段未触发);该环境 Google PAA 板块出现率低,问题意图覆盖以 autocomplete 问题式为主;fontgenerator.cc 抓取超时未入画像;nickfinder 被 captcha 挡(仅 SERP 数据)。
