# 指南选题 Backlog（/learn/ 候选问题池）

- 建立日期：2026-11-01。配套：`keyword-intent-map.md`（工具页意图）、`产品事实底稿.md`（能力边界）
- 用途：收录"信息型意图"的真实提问，作为 `/learn/` 指南页的唯一立项依据。**没有出处的问题不立项**。
- 与 90 天计划的关系：计划原文"教程最多 2 篇，挂在工具页底部，不另起博客站"于 2026-11-01 经用户确认修订为——不建博客时间线，建 4–6 页常青指南区（`/learn/`），英语先行；"不另起博客站"约束保留。选题 1、2 已于 2026-11-01 提前上线（比计划的第 5–6 周早），因为其视频证据当天即满足立项规则 #1。

## 证据状态图例（与 keyword-intent-map 同一纪律）

| 标记 | 含义 |
|---|---|
| 已验证 | 本仓库采集记录里有原始数字/链接，注明日期与来源 |
| 待采集 | 方法已定但尚未采到。**不得凭模型知识补全** |
| 已否决 | 采集后发现证据不成立或与现有页冲突，写明原因 |

## 已验证证据（2026-11-01 采集）

| 证据 | 数字 | 说明 |
|---|---|---|
| YouTube《How to Change Instagram Username Font》(HOWTECH) | 155,143 播放 | "怎么改 IG 字体"类查询里最大的单一视频 |
| YouTube《How To Change Instagram Bio Font》(Trevor Nace, id gfdjAj6LkCA) | 71,161 播放 | IG 简介改字体教程有稳定受众 |
| YouTube《How to Change Fonts on Instagram Bio》(Gauging Gadgets, id td5YS94updc) | 10,533 播放 | 同上，近期仍有人看 |
| YouTube《How To Change Font On Instagram Bio》(id Fnp-RRtNiQU) | 6,002 播放 | 同一查询多个频道都在做，长尾稳定 |
| YouTube《How to fix copy and paste problem in Pubg mobile (iphone)》(id zuNd4V7IfVw) | 382,622 播放 | 游戏内粘贴失败的排障需求极大，属于工具页接不住的叙事型问题 |
| YouTube《How to fix copy and paste problem in Pubg mobile iphone iPad…》(id HxX02VLy0TM) | 6,035 播放 | 同一排障问题的新版本追问 |
| YouTube《PUBG Stylish Name Trick 2025》(AN Tech) | 43,326 播放 | 花体游戏名改法教程 |
| Roblox DevForum《Say "Hello" to Display Names!》 | 1,765 回复 | 显示名话题在官方开发论坛热度高（devforum.roblox.com search.json，2026-11-01） |
| YouTube《How to Make Display Name Tricks on Roblox! (2025)》(Syruproot) | 231,170 播放 | Roblox 显示名玩法教程最大单条（2026-11-01 补采） |
| YouTube《How to Get CUSTOM FONTS in Roblox》(xvappa) | 126,444 播放 | 同集群（2026-11-01 补采） |
| YouTube《How To Change Font In Roblox Mobile》(Trevor Nace) | 62,770 播放 | 同频道也做了 IG 字体教程，集群稳定（2026-11-01 补采） |
| YouTube《How To Change Display Name Without Waiting 7 Days Roblox》(Ned HELP) | 51,208 播放 | 暴露"7 天冷却"子意图：改名等待是真实痛点（2026-11-01 补采） |
| YouTube《How to Change Your Roblox Display Name With Special Characters (2026)》(Core Method) | 7,168 播放 | 特殊字符角度，集群合计约 48 万播放（2026-11-01 补采） |
| 竞品差距 | — | 90 天规划 §2.2 已记录：YayText 有 How-to 教程 + Unicode FAQ，本站无对应物 |

## 候选选题表（2026-11-01 裁决）

| # | 候选标题（工作名） | 承接的问题 | 意图 | 内链目标 | 证据状态 | 裁决 |
|---|---|---|---|---|---|---|
| 1 | How to Change Your Instagram Bio Font (Step-by-Step) | 怎么给 IG 简介换花体 | 步骤教程 | `/instagram-fonts/` | 已验证（4 条视频合计 24.3 万播放，标题即查询形态） | **立项，2026-11-01 建页** |
| 2 | PUBG / Free Fire Stylish Name：改名步骤与粘贴失败修复 | 名字改不上、iOS 粘贴失败、超长被截 | 排障 | `/pubg-name-generator/` `/free-fire-name-generator/` | 已验证（38.2 万 + 6 千 + 4.3 万播放） | **立项，2026-11-01 建页** |
| 3 | Why Your Fancy Font Shows Squares (□□□) — and Where It Works | 方块字/豆腐块跨平台排障 | 排障 | 字符报告（Fancy/Gaming 内） | 已否决（2026-11-01 复采：YouTube 四组查询只返回桌面字体/开发类结果，无玩家侧提问；与指南 1 的样式表 section 重叠） | **不建**：无玩家侧证据（规则 #1）+ 指南 1 表格已承接机制解释（规则 #2）；继续留在 backlog，待 Reddit/PAA 证据 |
| 4 | Roblox Display Name：规则、字体符号与 7 天冷却 | 用户名 vs 显示名、哪些符号能过、改名被拒、7 天等待 | 规则解释 | `/roblox-name-generator/` `/adopt-me-fonts/` `/berry-avenue-fonts/` | 已验证（5 条视频合计约 48 万播放；"Without Waiting 7 Days"类标题证实冷却规则是真实痛点） | **立项，2026-11-01 建页**（`/learn/roblox-display-name-rules/`） |

## 待采集清单（方法与阻塞原因；2026-11-01 实测）

| 来源 | 采集方法 | 状态 |
|---|---|---|
| Reddit | `arctic-shift.photon-reddit.com/api/posts/search?subreddit=X&query=Y`（免费镜像 API，本次实测可达但限流严重，间隔 30s 仍 422；pullpush.io 被 Cloudflare 拦；reddit.com 全 403） | 待采集：需要登录态 cookie、代理，或换低峰时段重试 arctic-shift |
| Google People Also Ask | 手工搜选题主查询，截图记录 PAA 问题集合 | 待采集（本网络 Bing/DDG/Mojeek 均被封，需人工浏览器） |
| YouTube 评论区 | `yt-dlp --write-comments`（本次实测触发 bot 校验，需 `--cookies-from-browser`） | 待采集：需要浏览器 cookie 授权 |
| Discord/Steam 讨论 | 各游戏社区搜 "name symbols not working" | 未开始 |

> 2026-11-01 结论：本网络下只有 YouTube 搜索（yt-dlp flat-playlist）与 Roblox DevForum JSON 可达。选题 1、2 的视频标题证据已满足立项规则 #1（高播放视频标题算出处），先行建页；3、4 不降标硬建。

## 立项规则（一篇指南上线前必须全过）

1. 证据：真实提问 ≥2 条带出处（Reddit 帖 / PAA 截图 / 高播放视频标题），记录进本文件。
2. 空缺：现有工具页和 FAQ 确实接不住（步骤型、排障叙事型、跨页规则对比型）；若工具页 FAQ 能两句话答清，扩 FAQ 而不建页。
3. 事实：内容只写 `产品事实底稿.md` 里已上线的能力；平台限制沿用"约 / 未实测"表述，不出现 Verified。
4. 结构：问题 → 为什么 → 步骤（真实截图）→ 常见失败 → 用本站工具试（内链）→ FAQ；schema 用 FAQPage + Article。
5. 语言：只写英语；其他语言等该篇 GSC 曝光达标后单独立项翻译。

## 度量（上线 28 天后回填，空着就是没到裁决时间）

| 指南 URL | 上线日期 | 28 天曝光 | 28 天点击 | 指南→工具页点击事件 | 裁决 |
|---|---|---|---|---|---|
| `/learn/change-instagram-bio-font/` | 2026-11-01 |  |  |  |  |
| `/learn/pubg-free-fire-stylish-name/` | 2026-11-01 |  |  |  |  |
| `/learn/roblox-display-name-rules/` | 2026-11-01 |  |  |  |  |

## 明确不做

- 不建 `/blog/` 时间线首页；`/learn/` 只做目录页或直接工具页互链。
- 不写清单凑数文（"100+ bio ideas"）除非采集到对应证据。
- 不翻译五语直到英语版有 GSC 数据。
- 不在指南里承诺平台兼容性（与全站纪律一致）。
