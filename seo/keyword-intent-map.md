# 关键词与搜索意图地图（Keyword Intent Map）

- 站点：https://fancyfont.tools（42 路径 × 5 语言，URL 结构各语言一致）
- 站点上线：2026-10-26；GSC 属性已验证（`google824e0769c16d7fbd.html`）
- 本表基准：2026-10-29，对应代码 commit 840a06e
- 配套文件：`seo/产品事实底稿.md`（能力/限制的唯一事实来源）

## 证据状态图例（按 SOP 数据真实性原则）

| 标记 | 含义 |
|---|---|
| 候选表 | 查询词收录于 roadmap §5.2 候选关键词主题。**候选 ≠ 已验证**：无搜索量、无难度、无 SERP 记录 |
| 未知 | 无 SERP 快照、无关键词工具数据、无 GSC 表现数据。**不得凭模型知识补全** |
| 待 GSC | 页面已上线但站点不足 28 天，等 Search Console 出现该页的查询/曝光数据后回填 |

本表当前**不含任何搜索量、关键词难度或排名数字**——这些字段在采集到真实数据前一律留空。

## 主表

| 路径 | 主要目标查询 | 相关查询/变体 | 意图（用户要完成什么） | 证据状态 | 重叠风险与防守 |
|---|---|---|---|---|---|
| `/` | 品牌词 + 通用字体转换入口 | fancy fonts、text generator（族） | 认识站点并进入三个核心工具 | 待 GSC | 首页是全站目录，不与子页抢具体查询 |
| `/fancy-text-generator/` | fancy text generator | stylish text generator、font changer | 一次输入看全部 30 种风格并复制 | 候选表（§5.2A） | 各风格页从这里分流并链回，标准辐射结构 |
| `/gaming-name-generator/` | gaming name generator | nickname generator、clan name generator | 把基础名变成带装饰的昵称组合 | 候选表（§5.2B） | 游戏场景页共用引擎但带游戏专属限制，靠"游戏字段+预览"区分 |
| `/symbols/` | symbols copy and paste | text symbols、star/wing/crown symbols | 找单个符号浏览、搜索、复制 | 候选表（§5.2E） | 心形单符号意图在本页；文字加心形装饰在 heart 页 |
| `/blank-space/` | invisible character / blank space copy | empty name、blank text | 复制可见宽度的空白字符或给文字加间隙 | 未知 | 与 `/symbols/` 的零宽分区不同用途，页面文案已区分；需 SERP 确认查询归本页 |
| `/cursive-text-generator/` | cursive text generator | handwriting font generator | 专用花体转换 | 候选表（§5.2D） | 低（字母表被 look 页复用但意图不同） |
| `/gothic-text-generator/` | gothic text generator | fraktur、old english font generator | 专用黑字母转换 | 候选表（§5.2D） | 与 chicano/dark 共用 fraktur；FAQ 已声明"三个名字同一页"，文案互相路由。**GSC 盯：old english 查询是否归本页** |
| `/bold-text-generator/` | bold text generator | bold font generator | 专用粗体转换 | 候选表（§5.2D） | 低 |
| `/italic-text-generator/` | italic text generator | — | 专用斜体转换 | 候选表（§5.2D） | 低 |
| `/bubble-letters-generator/` | bubble letters generator | bubble font、bubble text | 专用圆体转换 | 候选表（§5.2D） | 低 |
| `/small-caps-generator/` | small caps generator | small text generator（相邻） | 专用小型大写转换 | 候选表（§5.2D） | 低 |
| `/strikethrough-text-generator/` | strikethrough text generator | strike through text | 专用删除线转换 | 候选表（§5.2D） | 低 |
| `/glitch-text-generator/` | zalgo text generator | glitch text generator | 专用故障字转换 | 候选表（§5.2D，标题 detail 已写 Zalgo Text） | 低 |
| `/upside-down-text-generator/` | upside down text generator | flip text generator | 专用倒转转换 | 候选表（§5.2D） | 低 |
| `/tiny-text-generator/` | tiny text generator | superscript generator | 专用上下标转换 | 候选表（§5.2D） | 低 |
| `/aesthetic-text-generator/` | aesthetic text generator | aesthetic font generator | 专用宽体+装饰组合 | 候选表（§5.2D） | 低 |
| `/cute-font-generator/` | cute font generator | cute text generator | 可爱风字母+装饰组合 | 未知 | 与 heart/preppy 装饰相邻；文案已互相区分 |
| `/cool-font-generator/` | cool fonts generator（§5.2A 有近似候选词） | cool text generator | 酷炫风字母+装饰组合 | 候选表（近似词） | 低 |
| `/crazy-font-generator/` | crazy font generator | crazy fonts、crazy text、weird text（相邻） | 逐字符混搭多种字母风格 + 疯狂装饰，可重掷出新版本 | unverified（第三方工具显示约 1.0K/KD19，来自 2026-11-04 用户截图，工具名未注明；待 Keyword Planner 复核后升级） | 与 cool（单字母表+装饰）、glitch（纯 zalgo）意图已区分；SERP 快照 2026-11-04（DDG）：glyphy weird-text、fontylish /crazy/、lingojam weird、crazy-fonts.com 均为工具页，角度=weird/wild/混搭 |
| `/dark-font-generator/` | dark font generator | emo font generator | 暗黑风字母+装饰组合 | 未知 | **高：与 chicano 共用 fraktur 系字母表**。文案路由已做（"装饰里没有 dark 页的骷髅月亮"）。**GSC 盯：两页查询重合度** |
| `/elegant-font-generator/` | elegant font generator | fancy script generator | 优雅风字母+装饰组合 | 未知 | **高：与 coquette 共用完全相同的字母表对（boldScript+script）**。文案路由已做。**GSC 盯：两页查询重合度** |
| `/coquette-font-generator/` | coquette font generator | coquette text、ribbon font | coquette 趋势字母+丝带装饰 | 未知 | 同上（与 elegant 成对监控） |
| `/preppy-font-generator/` | preppy font generator | preppy text | preppy 风字母+装饰 | 未知 | 与 heart/cute 相邻，文案已区分 |
| `/heart-font-generator/` | heart font generator | heart text generator、text with hearts | 文字加心形装饰组合 | 未知 | 单符号意图在 `/symbols/`；12 组心形装饰独占。需 SERP 确认"heart symbols copy paste"查询归 symbols 而非本页 |
| `/chicano-font-generator/` | chicano font generator | chicano text、chicano lettering（相邻） | chicano 风黑字母+装饰 | 未知 | **与 dark/gothic 成组监控**（fraktur 三页梯度：裸/暗黑装饰/chicano 装饰）；页面明示非手绘字、非纹身模板 |
| `/instagram-fonts/` | instagram fonts | instagram font generator、instagram bio symbols | IG 场景的名字/简介生成与字段指引 | 候选表（§5.2C） | 与 fancy 生成器按"场景+限制"区分，标准结构 |
| `/tiktok-fonts/` | tiktok fonts | tiktok font generator | 同上（TikTok） | 候选表（§5.2C） | 低 |
| `/discord-fonts/` | discord fonts | discord font generator、discord nickname | 同上（Discord） | 候选表（§5.2C） | 低 |
| `/roblox-name-generator/` | roblox name generator | roblox display name | 同上（Roblox，含用户名/显示名区分） | 候选表（§5.2C） | 与 adopt-me/berry-avenue 按"哪个游戏"分流，文案已互相路由 |
| `/pubg-name-generator/` | pubg name generator | pubg stylish name | PUBG 场景昵称（16 字符限制+预览） | 未知 | 与 gaming 生成器按游戏分流 |
| `/free-fire-name-generator/` | free fire name generator | free fire stylish name | Free Fire 场景昵称（12 字符限制） | 未知 | 同上 |
| `/cod-name-generator/` | cod name generator | call of duty name、warzone name | COD 场景昵称（玩家名/战队标签分流） | 未知 | 同上 |
| `/facebook-fonts/` | facebook fonts | facebook stylish name、facebook bio | Facebook 场景名字/简介 | 未知 | 低 |
| `/youtube-fonts/` | youtube fonts | youtube channel name generator | YouTube 场景频道名/handle 区分 | 未知 | 低 |
| `/adopt-me-fonts/` | adopt me fonts？ | adopt me name ideas | Adopt Me 玩家的 Roblox 显示名 | 未知 | 与 roblox 页按游戏分流；**主查询表述待 SERP 确认**（"fonts"是否是真实查询形态） |
| `/berry-avenue-fonts/` | berry avenue fonts？ | berry avenue bio / display name | Berry Avenue 玩家的头顶名 | 未知 | 同上 |
| `/fortnite-name-generator/` | fortnite name generator、fortnite name symbols | fortnite symbols name、change fortnite name | Fortnite 场景昵称（Epic 显示名，约 16 字符，未实测） | 已验证需求（YouTube《How To Add Symbols To Your Fortnite Name!》75,947 播放 + FRVR 教程文进 30 天新闻窗，见 guide-question-backlog）；待 GSC | 平台第 12 个场景页；与 pubg/cod/free-fire 按游戏分流 |
| `/learn/` | 无独立查询（目录页） | — | 指南入口，把信息型流量分给三篇指南 | — | 不参与意图竞争 |
| `/learn/change-instagram-bio-font/` | how to change instagram bio font | instagram font changer、how to add fonts to instagram bio | 步骤教程：换 IG 简介字体 | 已验证需求（YouTube 4 条合计 24.3 万播放，见 guide-question-backlog）；待 GSC | 与 `/instagram-fonts/` 按意图分流：该页是工具，本页是步骤；页面互链。日语以外四语无对应页（英语独有，无 hreflang） |
| `/learn/pubg-free-fire-stylish-name/` | pubg stylish name、fix copy paste problem pubg | free fire stylish name、stylish name not working | 步骤 + 排障：改名与粘贴失败修复 | 已验证需求（38.2 万 + 4.3 万播放，见 guide-question-backlog）；待 GSC | 与三个游戏页按意图分流（工具 vs 排障叙事）；长度数字沿用"约 16/约 12，未实测"；含装饰开销实测表 |
| `/learn/roblox-display-name-rules/` | roblox display name、roblox display name not working | roblox display name fonts、display name without waiting 7 days | 规则解释：用户名 vs 显示名、7 天冷却、被拒处理 | 已验证需求（5 条合计约 48 万播放，见 guide-question-backlog）；待 GSC | 与 `/roblox-name-generator/` 按意图分流（工具 vs 规则）；7 天冷却为公开规则，字符过滤沿用"约/未实测"；挂在 roblox/adopt-me/berry-avenue 三页 |
| `/privacy/` `/terms/` `/about/` `/contact/` | 无搜索意图 | — | 信任与合规信息页 | — | 不参与意图竞争 |
| `/mcp/` | fancyfont mcp（品牌长尾） | mcp server for fonts | 本机 agent 用户下载接入 | 未知（低优先） | 唯一入口 |

## 成组监控清单（GSC 查询重合是合并/分化的裁决依据）

1. **elegant ↔ coquette**：同一字母表对，仅装饰不同。若两页开始对同一批查询轮替排名，优先进一步分化（装饰/示例/FAQ 已部分分化）或考虑合并表述。
2. **dark ↔ chicano ↔ gothic**：fraktur 三页梯度。gothic 已用标题与 FAQ 明确承接 Fraktur/Old English；dark/chicano 按装饰语义切分。观察三页各自触发的查询集合是否互斥。
3. **heart ↔ cute ↔ preppy**：心形装饰相邻。观察 heart 页是否吸附 cute/preppy 的查询。
4. **symbols ↔ blank-space**：零宽（invisible 分类）与可见宽度空白是两个决定。观察 invisible character 类查询落在哪页。
5. **风格页 ↔ fancy-text-generator**：辐射结构属预期，不算蚕食；观察风格页是否反向吸附通用查询（若吸附，说明风格页意图不够专）。

## SERP 快照采集优先级（seo_serp_data_mining_tool.md §6 字段，工具建成前人工小规模采集）

证据状态"未知"且上线最新、风险最高的查询先采，每次记录：查询、地区（建议 US/en）、日期、前 10 名 URL/页面类型/在回答的问题：

1. coquette font generator
2. chicano font generator
3. elegant font generator
4. dark font generator
5. heart font generator
6. invisible character copy and paste（blank-space 页）
7. adopt me fonts
8. berry avenue fonts

候选表内的词（§5.2）同样需要快照与关键词工具数据后才能视为"已验证"。

## GSC 回填计划（SOP STEP 0/6 检查点）

- ~2026-11-02（上线 7 天）：索引与抓取检查；确认 200 条 URL 开始被抓取，无 noindex 异常。
- ~2026-11-09（14 天）：按页面拉取查询/曝光初值，回填"待 GSC"行；检查成组监控清单的查询重合。
- ~2026-11-23（28 天）：产出 SEO Baseline Report（28 天曝光/点击/CTR/平均排名，按页面与查询细分，区分品牌词与非品牌词）；据此决定花体标题实验是否立项。

## 第 8 周页面裁决（2026-11-01）

仓库里没有 GSC 导出。下表四列按计划留空展示数。没有 28 天展示，就不能判断查询是否独立意图，因此不新建 URL。

| 查询 | 现有 URL | 28 天展示 | 是否独立意图 |
| --- | --- | --- | --- |
| kaomoji | `/symbols/` |  | 未知，不建 `/kaomoji/` |
| heart symbols | `/symbols/` 与 `/heart-font-generator/` |  | 未知，不建 `/heart-symbols/` |
| aesthetic symbols / cute symbols | `/symbols/` |  | 默认合并进符号页分类，不建页 |

同一天没有 GA4 的 `*_copy` 次数，首页卡片顺序保持 Fancy 第一、Gaming 第二。不新增 `/text-reverser/`。

四组成组监控的「查询是否落到同一 URL」仍是待 GSC：elegant/coquette、dark/chicano/gothic、heart/cute/preppy、symbols/blank-space。没有展示数，不改这几页的标题和 FAQ。

## 缺失数据（不得用猜测填充）

- GSC 28 天表现数据（站点上线不足，客观缺失）
- 全部目标查询的 SERP 前 10 名快照（未采集）
- 关键词搜索量/难度（未使用关键词工具）
- 竞品页面功能与内容覆盖清单（未采集）
- es / pt-br / zh-cn / id 各语言市场查询是否与英语一致（未研究；seo方法论 步骤 1 要求按地区/语言分别锁定）
