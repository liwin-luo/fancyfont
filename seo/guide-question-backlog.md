# 指南选题 Backlog（/learn/ 候选问题池）

- 建立日期：2026-11-01。配套：`keyword-intent-map.md`（工具页意图）、`产品事实底稿.md`（能力边界）
- 用途：收录"信息型意图"的真实提问，作为 `/learn/` 指南页的唯一立项依据。**没有出处的问题不立项**。
- 与 90 天计划的关系：计划原文"教程最多 2 篇，挂在工具页底部，不另起博客站"于 2026-11-01 经用户确认修订为——不建博客时间线，建 4–6 页常青指南区（`/learn/`），英语先行，12 月第 5–6 周落地 2–4 篇；"不另起博客站"约束保留。

## 证据状态图例（与 keyword-intent-map 同一纪律）

| 标记 | 含义 |
|---|---|
| 已验证 | 本仓库采集记录里有原始数字/链接，注明日期与来源 |
| 待采集 | 方法已定但尚未采到。**不得凭模型知识补全** |
| 已否决 | 采集后发现证据不成立或与现有页冲突，写明原因 |

## 已验证证据（2026-11-01 采集）

| 证据 | 数字 | 说明 |
|---|---|---|
| YouTube《How to Change Instagram Bio Font》(Trevor Nace) | 71,161 播放 | IG 简介改字体教程有稳定受众 |
| YouTube《How to Change Instagram Username Font》(HOWTECH) | 155,143 播放 | 同上，"怎么改"类查询最大 |
| YouTube《How to Change Fonts on Instagram Bio》(Gauging Gadgets) | 10,530 播放 | 近期仍有人看 |
| YouTube《How to fix copy and paste problem in Pubg mobile (iphone)》(Old account but active) | 382,622 播放 | 游戏内粘贴失败的排障需求极大，属于工具页接不住的叙事型问题 |
| YouTube《PUBG Stylish Name Trick 2025》(AN Tech) | 43,326 播放 | 花体游戏名改法教程 |
| Roblox DevForum《Say "Hello" to Display Names!》 | 1,765 回复 | 显示名话题在官方开发论坛热度高（devforum.roblox.com search.json，2026-11-01） |
| 竞品差距 | — | 90 天规划 §2.2 已记录：YayText 有 How-to 教程 + Unicode FAQ，本站无对应物 |

## 候选选题表（按证据强度排序；12 月立项时逐条复核）

| # | 候选标题（工作名） | 承接的问题 | 意图 | 内链目标 | 证据状态 | 立项条件 |
|---|---|---|---|---|---|---|
| 1 | How to Change Your Instagram Bio Font (Step-by-Step) | 怎么给 IG 简介换花体 | 步骤教程 | `/instagram-fonts/` | 已验证（YouTube 3 条合计 23.7 万播放） | 复核 PAA/论坛无反证 |
| 2 | PUBG / Free Fire：stylish name 改名与粘贴失败修复 | 名字改不上、iOS 粘贴失败、超长被截 | 排障 | `/pubg-name-generator/` `/free-fire-name-generator/` | 已验证（38 万 + 4.3 万播放） | 需补论坛原帖 1–2 条 |
| 3 | Why Your Fancy Font Shows Squares (□□□) — and Where It Works | 方块字/豆腐块跨平台排障 | 排障 | 字符报告（Fancy/Gaming 内） | 待采集 | 需 Reddit/论坛原帖 ≥2 条 |
| 4 | Roblox Display Name vs Username：What Symbols Are Allowed | 两者规则差异、哪些符号能过 | 规则解释 | `/roblox-name-generator/` `/adopt-me-fonts/` | 部分（DevForum 热度，无玩家提问原帖） | 需玩家侧提问原帖 ≥1 条 |

## 待采集清单（2026-11 内完成；本网络 Reddit 403，需登录态或代理）

| 来源 | 采集方法 | 状态 |
|---|---|---|
| Reddit（r/Instagram、r/discordapp、r/roblox、r/PUBGMobile） | 登录态 cookie 或代理走 `reddit.com/search.json`；每条记录：原帖标题、URL、日期、subreddit、赞数 | 待采集（2026-11-01 尝试：WebFetch 403、JSON 403、Jina 403） |
| Google People Also Ask | 手工搜选题 #1/#3 的主查询，截图记录 PAA 问题集合 | 待采集 |
| YouTube 评论区 | 对上表 3 条高播放视频抓评论中的追问 | 待采集 |
| Discord/Steam 讨论 | 各游戏社区搜 "name symbols not working" | 待采集 |

## 立项规则（一篇指南上线前必须全过）

1. 证据：真实提问 ≥2 条带出处（Reddit 帖 / PAA 截图 / 高播放视频标题），记录进本文件。
2. 空缺：现有工具页和 FAQ 确实接不住（步骤型、排障叙事型、跨页规则对比型）；若工具页 FAQ 能两句话答清，扩 FAQ 而不建页。
3. 事实：内容只写 `产品事实底稿.md` 里已上线的能力；平台限制沿用"约 / 未实测"表述，不出现 Verified。
4. 结构：问题 → 为什么 → 步骤（真实截图）→ 常见失败 → 用本站工具试（内链）→ FAQ；schema 用 FAQPage + Article。
5. 语言：只写英语；其他语言等该篇 GSC 曝光达标后单独立项翻译。

## 度量（上线 28 天后回填，空着就是没到裁决时间）

| 指南 URL | 上线日期 | 28 天曝光 | 28 天点击 | 指南→工具页点击事件 | 裁决 |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## 明确不做

- 不建 `/blog/` 时间线首页；`/learn/` 只做目录页或直接工具页互链。
- 不写清单凑数文（"100+ bio ideas"）除非采集到对应证据。
- 不翻译五语直到英语版有 GSC 数据。
- 不在指南里承诺平台兼容性（与全站纪律一致）。
