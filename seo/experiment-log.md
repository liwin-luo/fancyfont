# 优化实验记录（Experiment Log）

- 依据：`seo-growth.md` §11.4。每次为 SEO 做的改动都要有假设和复评时间点，否则 28 天数据出来后无法判断该保留还是回滚。
- 状态口径：`观察中` = 未到复评日期；`可判定` = 已到窗口且有 GSC 数字；无数字时 Result 一律留空，不填推测。
- 复评数据源：Google Search Console 该 URL 的展示 / 点击 / 平均排名 / 触发的查询集合（非品牌词）。
- 提醒：Google 对标题类改动重新抓取通常需 1–2 周，窗口不足时判「尚无数据」而不是「无效」。

| ID | 页面 | 问题 | 证据 | 假设 | 改动 | 开始 | 复评窗口 | 结果 | 决定 |
|---|---|---|---|---|---|---|---|---|---|
| EXP-001 | `/gothic-text-generator/` | Fraktur / Old English / medieval / blackletter 四个名称是同一套字符，可能分散在多个页面或根本没有承接 | 无 SERP 快照、无搜索量（`keyword-intent-map.md` 标为候选表） | 标题与 FAQ 明确四个同义词同页，可承接这批查询而不新建 URL | 2026-11-04 标题 detail 改为 Old English & Medieval，FAQ 声明四词同页（a51e32a） | 2026-11-04 | 2026-11-25（上线 21 天） | | 观察中 |
| EXP-002 | `/preppy-font-generator/` | 主词此前偏 generator 长尾，头部词 `preppy fonts` 未进标题 | 第三方工具截图 2026-11-04：preppy fonts 9.9K/KD18、generator 390/KD16，**工具名未注明，unverified** | 标题主词升到 `preppy fonts` 并补 what-is / how-to 问答，可拿头部词展示 | 2026-11-04 五语标题升级 + FAQ 补充（03a7f0d） | 2026-11-04 | 2026-11-25 | | 观察中 |
| EXP-003 | `/cool-font-generator/`、`/elegant-font-generator/` | `cool letters`、`luxury font` 类查询无承接页也无问答 | 未采集 SERP | 在既有页 FAQ 补信息型问答即可承接，不必新建 URL | 2026-11-04 FAQ 补 cool letters = cool fonts、luxury font 问答（a51e32a） | 2026-11-04 | 2026-11-25 | | 观察中 |
| EXP-004 | `/berry-avenue-fonts/`、`/coquette-font-generator/` | 有展示但点击率低（推测），标题偏描述性 | **无 GSC 数据**，改动依据是 2026-11-03 SEO Desk 简报，非自有数据 | 更贴近搜索表达的标题提升 CTR | 2026-11-03 SERP 标题改写（e8b85c3） | 2026-11-03 | 2026-11-24 | | 观察中（若届时仍无展示则判「无法归因」） |
| EXP-005 | 全站 SERP 标题 | 标题含装饰性 Unicode，Google 可能截断或替换，且明文可读性差 | 当时线上首页 title 实测含 `♡ 𝓒𝓸𝓹𝔂 & 𝓟𝓪𝓼𝓽𝓮 …` | 明文标题让 Google 使用自定标题的概率下降、展示更可控 | 2026-11-03 装饰字符替换为明文（2c0f814） | 2026-11-03 | 2026-11-24 | | 观察中 |
| EXP-006 | `/crazy-font-generator/`、`/fortnite-name-generator/` | 新意图页面能否独立获得展示 | crazy：第三方 1.0K/KD19（unverified，工具名未注明）+ 2026-11-04 DDG SERP 快照；fortnite：YouTube 教程 75,947 播放 + 新闻窗内教程文 | 独立功能（逐字符混搭 / Fortnite 字段）能吃到独立查询，不构成内耗 | 新页上线（f4353fe 2026-11-04；055c141 2026-11-01） | 2026-11-01 / 11-04 | 上线后 28 天：2026-11-29 / 12-02 | | 观察中 |

## 待开实验（缺数据，暂不启动）

1. **五组成组监控**（elegant↔coquette、dark↔chicano↔gothic、heart↔cute↔preppy、symbols↔blank-space、风格页↔fancy）。裁决依据是「两页是否落到同一批查询」，这需要 GSC 查询级数据。数据到位前**不改**这几页的标题和 FAQ。
2. **Site fix B**（近重复风格页合并 / canonical / 分化）：同上，等 2026-11-23 的 28 天基线。
3. **西语标题缩短**（20 个 >60 字符、8 个描述 >160）：会改变现有 SERP 文案，需先决定缩 detail 段还是重构主词，再单独开一条实验。
