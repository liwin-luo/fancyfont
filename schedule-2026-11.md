# 执行排期：fancyfont.tools 前 8 个快赢 + 站点修补轨

> Asia/Shanghai｜2026-11-02 → 2026-11-29｜约 2 项/周  
> 原则：Week 1 先做 Twitch 诚实文 + **Roblox 规则事实核查刷新**（准确性优先）；其余先刷新后新页。  
> **简报：** 第 N 周内容由 SEO Desk 在**该周前一个周五**交付（Week 1 例外见下）。  
> Owner：一律 **执行agent**。禁止编造 GSC/排名数字。

---

## 简报交付日历

| 执行周 | 日期 | 简报最晚交付 | 覆盖 |
| --- | --- | --- | --- |
| Week 1 | 2026-11-02 ~ 11-08 | #1 Twitch **已交付**；**Roblox #6 简报请 Desk 于 2026-11-05（周三）前补交** | #1 Twitch new；#6 Roblox refresh |
| Week 2 | 2026-11-09 ~ 11-15 | **2026-11-07** | #7 Instagram bio search refresh；#8 YouTube handle vs name refresh |
| Week 3 | 2026-11-16 ~ 11-22 | **2026-11-14** | #2 LinkedIn headline（new learn）；#5 Tofu/boxes（new learn） |
| Week 4 | 2026-11-23 ~ 11-29 | **2026-11-21** | #3 Accessibility/screen readers（new learn）；#4 Minecraft username NO（new learn） |

---

## 发布后轻量测量（每项）

1. 发布当日：GSC URL Inspection → **Request indexing**  
2. 发布后 **2–4 周**：该 URL 的 Impressions / Queries（有则记录，无则写「尚无展示」）  
3. 五行学习笔记给用户（哪类 query、标题是否该改）

---

## 主轨：Top 8

| week | dates | item | type | target URL | primary term | deliverable | owner | dependencies | done criteria |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-02–11-08 | #1 Twitch display name fancy text | new page | https://fancyfont.tools/learn/twitch-display-name-fancy-text/ | can I use fancy font in twitch display name | 按 brief 新建英文 learn + FAQ schema + 内链；引 Twitch Help | 执行agent | Brief：`briefs/2026-11-02-twitch-display-name-fancy-text.md` | Brief DoD；Request indexing；看板→published |
| 1 | 2026-11-02–11-08 | #6 Roblox display-name rules fact-check | refresh existing | https://fancyfont.tools/learn/roblox-display-name-rules/ | roblox display name symbols | 对照 Roblox Support + 可信第三方测试，修正「符号/花体是否可用」表述；避免过时承诺 | 执行agent | **简报最晚 2026-11-05**；准确性优先于扩词 | 正文与现行规则一致；indexing；注明核实日期 |
| 2 | 2026-11-09–11-15 | #7 Instagram bio vs search | refresh existing | https://fancyfont.tools/learn/change-instagram-bio-font/ | does fancy font affect SEO on instagram | 补「关键词保持明文 / 站内搜索」与 a11y 短节；链 `/instagram-fonts/` | 执行agent | 简报截止 **2026-11-07** | DoD + indexing；GSC +14–28d |
| 2 | 2026-11-09–11-15 | #8 YouTube handle vs channel name | refresh existing | https://fancyfont.tools/youtube-fonts/ | youtube handle fancy font | 字段矩阵：@handle 明文 vs channel name/description；链 YouTube Help | 执行agent | 简报截止 **2026-11-07** | 同上 |
| 3 | 2026-11-16–11-22 | #2 LinkedIn headline Unicode blocked | new page | https://fancyfont.tools/learn/linkedin-headline-fancy-text/（以简报最终 slug 为准） | linkedin headline fancy unicode | 新建：Headline 拒花体的说明 + 仍可用处 + a11y；勿鼓励违规 | 执行agent | 简报截止 **2026-11-14**；需用户/编辑确认 LinkedIn 现行 UI | DoD + indexing |
| 3 | 2026-11-16–11-22 | #5 Why fancy text shows boxes | new page | https://fancyfont.tools/learn/fancy-text-shows-boxes/ | why does fancy text show boxes | 新建 tofu 解释 + 较安全风格列表 + 链生成器 | 执行agent | 简报截止 **2026-11-14** | DoD + indexing |
| 4 | 2026-11-23–11-29 | #3 Fancy text accessibility | new page | https://fancyfont.tools/learn/fancy-text-accessibility-screen-readers/ | is fancy text bad for accessibility | 新建：screen reader 行为、社交 bio 建议、诚实「少用」 | 执行agent | 简报截止 **2026-11-21** | DoD + indexing |
| 4 | 2026-11-23–11-29 | #4 Minecraft username NO | new page | https://fancyfont.tools/learn/minecraft-username-fancy-text/ | why fancy text not working minecraft username | 新建：Java username 限制 vs 服务器 nickname；勿假称官方支持花体用户名 | 执行agent | 简报截止 **2026-11-21**；引 Minecraft Help/Wiki | DoD + indexing |

---

## 并行低工作量轨（需用户拍板，不占 Top8 名额）

| track | item | type | notes | owner | status |
| --- | --- | --- | --- | --- | --- |
| Site fix A | Homepage `<title>` 去掉装饰性 Unicode | tech/content fix | 当前类似 `Fancy Text — ♡ 𝓒𝓸𝓹𝔂 & 𝓟𝓪𝓼𝓽𝓮 …`；改为明文 ASCII/基本标点。**需用户确认**新 title 文案 | 执行agent（实施） / **用户（批准文案）** | awaiting user judgment |
| Site fix B | 区分或合并近重复风格页 | IA / SEO | `/fancy-text-generator/`、`/cool-font-generator/`、`/aesthetic-text-generator/`、`/cute-font-generator/` 模板相近，有自相残杀风险。选项：独特 H1/首屏角度、canonical 到主生成器、或合并。**需用户判断选哪条路径** | 执行agent（出对比表） / **用户（决策）** | awaiting user judgment |

建议：Site fix A 可在 Week 1 任意空档 30 分钟内做完（批准后）；Site fix B 先出一页对比再决策，勿与 Roblox 事实核查抢同一天。

---

## 每周节奏建议

- 周一–周二：读简报、写/改  
- 周三：内链、事实核对、预览  
- 周四：发布 + Request indexing  
- 周五：更新 Google Sheet 状态 + 学习笔记  

---

## 文件

- 本排期：`/workspace/search-content/fancyfont/schedule-2026-11.md`  
- #1 简报：`/workspace/search-content/fancyfont/briefs/2026-11-02-twitch-display-name-fancy-text.md`  
- Sheet：SEO Ideas Board – fancyfont.tools → **Schedule**；Ideas Board #1 → `briefed`
