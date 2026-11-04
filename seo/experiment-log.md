# 优化实验记录（Experiment Log）

- 依据：`seo-growth.md` §11.4。每次为 SEO 做的改动都要有假设和复评时间点，否则 28 天数据出来后无法判断该保留还是回滚。
- 状态口径：`观察中` = 未到复评日期；`可判定` = 已到窗口且有 GSC 数字；无数字时 Result 一律留空，不填推测。
- 复评数据源：Google Search Console 该 URL 的展示 / 点击 / 平均排名 / 触发的查询集合（非品牌词）。
- 提醒：Google 对标题类改动重新抓取通常需 1–2 周，窗口不足时判「尚无数据」而不是「无效」。

| ID | 页面 | 问题 | 证据 | 假设 | 改动 | 开始 | 复评窗口 | 结果 | 决定 |
|---|---|---|---|---|---|---|---|---|---|
| EXP-001 | `/gothic-text-generator/` | Fraktur / Old English / medieval / blackletter 四个名称是同一套字符，可能分散在多个页面或根本没有承接 | 无 SERP 快照、无搜索量（`keyword-intent-map.md` 标为候选表）。首批 GSC（02 窗口）该页未进 top-30 页面表 → 改动前展示 < 27，具体值待按 URL 过滤复拉 | 标题与 FAQ 明确四个同义词同页，可承接这批查询而不新建 URL | 2026-11-04 标题 detail 改为 Old English & Medieval，FAQ 声明四词同页（a51e32a） | 2026-11-04 | 2026-11-25（上线 21 天） | | 观察中 |
| EXP-002 | `/preppy-font-generator/` | 主词此前偏 generator 长尾，头部词 `preppy fonts` 未进标题 | 第三方工具截图 2026-11-04：preppy fonts 9.9K/KD18、generator 390/KD16，**工具名未注明，unverified**。首批 GSC：查询 `letras preppy` 12 展示 / 0 点击（pt-br 意图），英文页未进 top-30 | 标题主词升到 `preppy fonts` 并补 what-is / how-to 问答，可拿头部词展示 | 2026-11-04 五语标题升级 + FAQ 补充（03a7f0d） | 2026-11-04 | 2026-11-25 | | 观察中 |
| EXP-003 | `/cool-font-generator/`、`/elegant-font-generator/` | `cool letters`、`luxury font` 类查询无承接页也无问答 | 未采集 SERP。首批 GSC：两页均未进 top-30 页面表，`elegant`/`cool` 类查询未进 top-30 查询表 → 改动前展示 <27 | 在既有页 FAQ 补信息型问答即可承接，不必新建 URL | 2026-11-04 FAQ 补 cool letters = cool fonts、luxury font 问答（a51e32a） | 2026-11-04 | 2026-11-25 | | 观察中 |
| EXP-004 | `/berry-avenue-fonts/`、`/coquette-font-generator/` | 有展示但点击率低 | **改动前实测基线（首批 GSC，窗口 2026-10-26→11-02，见 `seo/gsc-2026-11-04/report.md`）：`/berry-avenue-fonts/` 4 点击 / 317 展示 = CTR 1.26%；`/pt-br/coquette-font-generator/` 5/160 = CTR 3.13%；`/es/coquette-font-generator/` 2/34；`/coquette-font-generator/`（en）未进 top-30** | 更贴近搜索表达的标题提升 CTR。对照基线已建立，11-24 复评时直接比对同名 URL | 2026-11-03 SERP 标题改写（e8b85c3） | 2026-11-03 | 2026-11-24 | | 观察中（改动 11-03 生效，数据窗口只到 11-02，改动后展示尚未纳入首批拉取；11-09 前需补拉改动后窗口） |
| EXP-005 | 全站 SERP 标题 | 标题含装饰性 Unicode，Google 可能截断或替换，且明文可读性差 | 当时线上首页 title 实测含 `♡ 𝓒𝓸𝓹𝔂 & 𝓟𝓪𝓼𝓽𝓮 …` | 明文标题让 Google 使用自定标题的概率下降、展示更可控 | 2026-11-03 装饰字符替换为明文（2c0f814） | 2026-11-03 | 2026-11-24 | | 观察中 |
| EXP-006 | `/crazy-font-generator/`、`/fortnite-name-generator/` | 新意图页面能否独立获得展示 | crazy：第三方 1.0K/KD19（unverified，工具名未注明）+ 2026-11-04 DDG SERP 快照；fortnite：YouTube 教程 75,947 播放 + 新闻窗内教程文。首批 GSC：`/es/fortnite-name-generator/` 1 点击 / 2 展示（样本 2，无判定力）；en 版与 crazy 系列未进 top-30 | 独立功能（逐字符混搭 / Fortnite 字段）能吃到独立查询，不构成内耗 | 新页上线（f4353fe 2026-11-04；055c141 2026-11-01） | 2026-11-01 / 11-04 | 上线后 28 天：2026-11-29 / 12-02 | | 观察中 |

## 改动前基线（首批 GSC，窗口 2026-10-26→11-02）

来源：`seo/gsc-2026-11-04/report.md` + 同目录 CSV / `raw/`。复评时**只与同 URL 同名指标**比较，不跨语言汇总。

| 关联实验 | URL | 点击 | 展示 | CTR |
|---|---|---|---|---|
| EXP-004 | `fancyfont.tools/berry-avenue-fonts/` | 4 | 317 | 1.26% |
| EXP-004 | `fancyfont.tools/pt-br/coquette-font-generator/` | 5 | 160 | 3.13% |
| EXP-004 | `fancyfont.tools/es/coquette-font-generator/` | 2 | 34 | 5.88% |
| EXP-006 | `fancyfont.tools/es/fortnite-name-generator/` | 1 | 2 | 50%（样本 2，忽略） |
| EXP-001/002/003 | 各英文承接页 | 未进 top-30 页面表 | < 27 | 需按 URL 单独过滤复拉 |

全站基线（供后续对比口径用，非单页归因）：23 点击 / 2,196 展示 / CTR 1% / 平均排名 28.9；非英文页贡献 16/23 点击（pt-br 7、es 5、zh-cn 4）。

- 注意：查询表点击合计只有 5，页面表与国家表各自精确等于 23 → **查询表被阈值截断，任何 CTR/归因计算一律用页面表，不要用查询表点击数做除法**（`keyword-intent-map.md` 首批回填第 4 条修正）。

## 待开实验（缺数据，暂不启动）

1. **五组成组监控**（elegant↔coquette、dark↔chicano↔gothic、heart↔cute↔preppy、symbols↔blank-space、风格页↔fancy）。裁决依据是「两页是否落到同一批查询」，这需要查询 × 页面二维数据。首批 GSC（2026-11-04 拉取）**只有单维表**：页面表被分页截断到 top-30、查询表被阈值截断（点击合计 5 vs 实际 23），无法判定查询重合 → 仍需 2026-11-23 之后用「页面 + 查询」组合过滤逐页复拉。数据到位前**不改**这几页的标题和 FAQ。
2. **Site fix B**（近重复风格页合并 / canonical / 分化）：同上，等 2026-11-23 的 28 天基线。
3. **西语标题缩短**（20 个 >60 字符、8 个描述 >160）：会改变现有 SERP 文案，需先决定缩 detail 段还是重构主词，再单独开一条实验。
4. **英文 gaming 页 CTR（SOP §10.5 案例 E）**：`/cod-name-generator/` 0/123、`/es/gaming-name-generator/` 0/91、`/pubg-name-generator/` 0/79、`/roblox-name-generator/` 0/60、`/strikethrough-text-generator/` 0/58 —— 有展示、零点击，合计 411 展示 / 0 点击，是首批数据里最大的一块可优化流量（占全站展示 18.7%）。但改动会覆盖 EXP-005 的标题变量，**必须等 2026-11-23 基线**，且一次只动一个变量（先标题或先描述，不同时改）。
5. **i18n 队列重排**（pt-br 提前于 zh-cn/id）：首批数据 pt-br 7 点击 / 320 展示（CTR 2.19%）、巴西是第 1 国家（7/480）。这是流程决定、不是页面改动，不占实验位；依据见 `seo/gsc-2026-11-04/report.md` 结论第 4 条。
