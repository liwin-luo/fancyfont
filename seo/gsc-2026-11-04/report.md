# GSC 首批数据报告（2026-11-04）

- 属性：`https://fancyfont.tools/`（URL 前缀属性，账号 happy_gmluo@163.com）
- 采集时间：2026-11-04 17:40 左右，界面显示「最后更新：3.5–4.5 小时前」
- 请求区间：2026-10-26 → 2026-11-03；**有效数据落在 2026-10-26 → 2026-11-02**（Google 数据约 2 天延迟，11-03/11-04 尚无数据；区间边界日 10-25 为 0/0）
- 采集方式：browser-use 驱动真实 Search Console 界面，逐维度抓取表格；原始 JSON 与可访问性树快照存 `raw/`
- 纪律（SOP §13.2）：本文件所有数字均为 GSC 界面原样读数。**不含任何搜索量、关键词难度或竞品流量估计**；派生计算（CTR、语言汇总）单独标注为派生。

## 1. 总量（8 个有效数据日）

| 指标 | 值 |
|---|---|
| Total clicks | **23** |
| Total impressions | **2,196**（界面显示 2.2K） |
| Average CTR | 1%（派生：23 / 2,196 = 1.05%） |
| Average position | **28.9** |

## 2. 逐日（`daily.csv`）

| 日期 | 点击 | 展示 |
|---|---|---|
| 10-26（上线日） | 3 | 19 |
| 10-27 | 1 | 170 |
| 10-28 | 3 | 287 |
| 10-29 | 3 | 345 |
| 10-30 | 0 | 333 |
| 10-31 | 6 | 290 |
| 11-01 | 5 | 364 |
| 11-02 | 2 | 388 |

- 展示从上线日 19 → 11-02 的 388，**8 天内约 20 倍**；近 3 日均值 347/日，前 3 日均值 159/日。
- 点击与展示不同步（10-30 展示 333、点击 0），说明当前排名普遍在结果页第二页之后，曝光多为浏览式呈现。
- 平均位置 28.9 与之一致：**站点处于典型的新域观察期，尚未进入前 20 的稳定排名带。**

## 3. 页面维度（`page-performance.csv`，156 个 URL 有展示，取前 30）

前 30 行的点击合计 = 23，与总量完全对齐（其余 126 个 URL 为 0 点击，合计 673 次展示）。

| URL | 点击 | 展示 | 派生 CTR |
|---|---|---|---|
| `/pt-br/coquette-font-generator/` | 5 | 160 | 3.13% |
| `/berry-avenue-fonts/` | 4 | 317 | 1.26% |
| `/es/coquette-font-generator/` | 2 | 34 | 5.88% |
| `/` | 2 | 27 | 7.41% |
| `/zh-cn/cod-name-generator/` | 2 | 6 | 33.33% |
| `/pt-br/berry-avenue-fonts/` | 1 | 27 | 3.70% |
| `/tiktok-fonts/` | 1 | 26 | 3.85% |
| `/es/berry-avenue-fonts/` | 1 | 21 | 4.76% |
| `/pt-br/` | 1 | 11 | 9.09% |
| `/es/symbols/` | 1 | 7 | 14.29% |
| `/zh-cn/blank-space/` | 1 | 3 | 33.33% |
| `/es/fortnite-name-generator/` | 1 | 2 | 50% |
| `/zh-cn/mcp/` | 1 | 1 | 100% |

零点击但展示最高的（SOP §10.5 情况 E，待优化）：

| URL | 点击 | 展示 |
|---|---|---|
| `/cod-name-generator/` | 0 | 123 |
| `/es/gaming-name-generator/` | 0 | 91 |
| `/pubg-name-generator/` | 0 | 79 |
| `/roblox-name-generator/` | 0 | 60 |
| `/es/free-fire-name-generator/` | 0 | 60 |
| `/strikethrough-text-generator/` | 0 | 58 |
| `/pt-br/cod-name-generator/` | 0 | 57 |
| `/es/cod-name-generator/` | 0 | 48 |
| `/zh-cn/cursive-text-generator/` | 0 | 46 |
| `/upside-down-text-generator/` | 0 | 40 |

## 4. 语言维度（派生，仅基于上表前 30 页）

| 语言目录 | 页面数 | 点击 | 展示 | 派生 CTR |
|---|---|---|---|---|
| en（根路径） | 11 | 7 | 818 | 0.86% |
| pt-br | 6 | **7** | 320 | 2.19% |
| es | 9 | 5 | 329 | 1.52% |
| zh-cn | 4 | **4** | 56 | **7.14%** |

> **核心发现：23 次点击里 16 次（70%）来自非英语页面。** 英语展示量最大（818）但 CTR 最低（0.86%）；zh-cn 展示极小（56）但 CTR 7.14%。这直接影响 SOP §8.2 的语言优先级判断。

## 5. 国家维度（`countries-top20.csv`，107 国有数据，前 20；点击合计 23 与总量对齐）

| 国家 | 点击 | 展示 |
|---|---|---|
| Brazil | **7** | **480** |
| China | 6 | 48 |
| United States | 3 | 422 |
| Mexico | 2 | 137 |
| Colombia / Chile / Taiwan / Romania / Japan | 各 1 | 20 / 16 / 12 / 8 / 3 |
| Indonesia | 0 | 147 |
| United Kingdom | 0 | 93 |
| Spain | 0 | 89 |
| India | 0 | 83 |

- 巴西是第一来源（点击 30%、展示 22%），与美国（展示 19%、点击 13%）形成反差：美国展示多但不点。
- 中国 6 次点击只用 48 次展示，加上印尼 147 展示、印度 83 展示，说明非英语市场的浏览式曝光已经开始积累。

## 6. 设备维度（`devices.csv`）

| 设备 | 点击 | 展示 |
|---|---|---|
| Mobile | 12 | 857 |
| Desktop | 10 | 1,224 |
| Tablet | 1 | 115 |

移动端占展示 39%、占点击 52%。技术审计已确认 360px 无横向溢出（`seo/tech-audit-2026-11-04.md` §5），与移动端主导一致。

## 7. 查询维度（`queries-top30.csv`，363 个查询，前 30）

| 查询 | 点击 | 展示 | 说明 |
|---|---|---|---|
| letras coquette | 3 | 86 | 西语词形，点击跨 coquette 页集群（es + pt-br）聚合，不可归到单页，见下方"数据缺陷" |
| fonts for berry avenue | 2 | 116 | **该词形态已验证为真实查询** |
| berry avenue fonts | 0 | 68 | 同上，另一种表述 |
| generador de nombres gamer | 0 | 27 | 西语游戏名生成器 |
| generador de nombres para juegos | 0 | 27 | 同上 |
| gerador de caracteres 5e | 0 | 22 | **葡语 D&D 5e 角色生成——不是本站意图** |
| pubg name generator | 0 | 22 | |
| berry avenue font | 0 | 20 | |
| letra coquette / upside down text generator | 0 | 19 / 19 | |
| tiktok font generator | 0 | 13 | |
| letras preppy | 0 | 12 | 西语 preppy 需求存在 |
| d terbalik | 0 | 6 | 印尼语「倒转字」 |

**已验证的意图事实**（keyword-intent-map 里此前标「未知 / 主查询表述待 SERP 确认」）：

1. `berry avenue fonts` 与 `fonts for berry avenue` 都是真实查询形态，合计 204 次展示 → `/berry-avenue-fonts/` 的主查询表述确认成立。
2. coquette 需求以西语 `letras coquette` / `letra coquette` / `letras coquettes` 为主，但转化最好的是**葡语**页 `/pt-br/coquette-font-generator/`（5/160）。
3. `gerador de caracteres 5e`（22 展示，0 点击）属桌游角色卡意图，**不建页**：现有工具不覆盖，硬接会构成误导性结果。

**数据缺陷（必须如实记录）**：前 30 查询的点击合计只有 5，而总量是 23；页面与国家两个维度都能对齐到 23。说明 GSC 的查询列表存在阈值截断，低频查询的点击不进入查询表。→ **不得用查询表的点击做除法或归因**，查询维度只用于判断"是否存在该查询形态"和相对热度。

## 8. 按 SOP §10.5 的问题分类

| 情况 | 观察到的证据 | 归类 |
|---|---|---|
| A 未被发现 | 无。156 个 URL 已有展示，209/214 条 URL 返回 200 | 不成立 |
| B 已发现未抓取 | 无 | 不成立 |
| C 已抓取未收录 | 未验证（本轮未查 Page Indexing 报告） | **待查** |
| D 已收录无曝光 | 42 个路径中约 126 个 URL 展示 <27，含新上的 `/crazy-font-generator/` | 成立，样本期正常 |
| E 有曝光低点击 | `/cod-name-generator/` 0/123、`/es/gaming-name-generator/` 0/91、`/pubg-name-generator/` 0/79；英语整体 CTR 0.86% | **成立，主要问题** |
| F 有点击低使用 | 无事件埋点（决策 D1 已移除），**本轮无法测量** | 无法评估 |

## 9. 结论与下一步

1. **样本量仍小**（23 次点击 / 8 天）。按 90 天计划与 SOP §12，这不构成新建页面的依据，但足以判定"哪些页面已被 Google 用于回答哪类查询"。
2. **裁决点不变：2026-11-23 的 28 天基线。** 本报告是它的对照起点。
3. **EXP-004（Berry/Coquette 标题改写，11-03）目前不可判定**——数据只到 11-02，改动尚未进入观测窗口。已在本报告记录改动前基线：`/berry-avenue-fonts/` 4/317、`/pt-br/coquette-font-generator/` 5/160。
4. **i18n 顺序应由数据调整**：pt-br 已是第一点击来源（7/480 国家级、7 次点击落在 6 个 pt-br 页），而内容审校目前只做了 es。建议 `pt-br` 提前到 `zh-cn`、`id` 之前。
5. **情况 E 是接下来的主战场**：有展示无点击的英语游戏页（cod / pubg / gaming / roblox / free-fire）。这些页的标题与首屏需要在 11-23 基线前保持不动以留对照组，之后再按 SOP §11.3 单变量实验。
6. `/zh-cn/` 的高 CTR（7.14%）+ 低展示（56）组合值得单独看一次中文查询落在哪些页——需要下一次拉数时按 `/zh-cn/*` 正则过滤查询维度。

## 10. 未做的检查（诚实清单）

- Page Indexing 报告（收录数、未收录原因分布）——本轮未取
- URL Inspection 单页抓取状态——本轮未取
- Search appearance（结构化结果外观）——本轮未取
- 品牌词与非品牌词拆分——GSC 界面需加正则过滤，本轮未做；已知品牌词查询极小（`fancyfont` 未进前 30）
- 11-03、11-04 两天的数据——GSC 尚未出数
- 156 个 URL 的完整清单——只取了前 30，其余为 0 点击长尾（合计 673 展示）
