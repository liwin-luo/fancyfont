# SERP 供给侧 × 关键词需求侧 合并结论

> 左边这份：`WorkBuddy/57rfy/seo-analysis/fancyfont-serp-2026-11/`（2026-11-05，28 竞品 SERP 取单 + TDK/正文饱和度 + 15 规则 + 20 页改写方案）
> 右边这份：`seo/keyword-analysis/`（2026-11-08，KP 18,135 词聚类 + 涨跌 + 页面映射）
> ⚠ 时间差：SERP 分析针对**旧站**（2026-11-08 新站已上线，部分 P0 已随新 title 落地），合并时逐条核对了新站现状。

## 一、SERP query 组 × KP 簇 交叉矩阵

| SERP 取单词 | KP 需求侧 | SERP 赢家 | 竞争密度 | 我们的打法 |
|---|---|---|---|---|
| font generator | core-generic 28.7M（`font generator` 5M 桶） | picsart/lingojam/creativefabrica 等大站混战 | 红海 | **不打首页正面战**；TDK-01 把 `Font Generator` 词根铺满 44 个长尾风格页 |
| fancy text generator | fancy-core 3.3M，`fancy text`(500k, **+900% YoY**) | lingojam #1 | 红海但在涨 | fancy 根 + `copy and paste` 卖点差异化（见 P0-B） |
| instagram font | platform/instagram 4.21M（6 个头部词） | **igfonts.io #1**（其品牌词 500k） | 中高 | bio 场景内容 + 字符上限数字位（竞品 0 占位） |
| pubg name generator | gaming/pubg 635k | lingojam + 印度垂直站 | 中 | 已有页 ✓ 补数字位 |
| cute font generator | style/cute 403k | fontgen.cool #1 | 中 | 已有页 ✓ |
| upside down text generator | style/upside 572k | **EMD upsidedowntext.com #1** | 中 | 已有页 ✓；**先例价值：专属小页能赢**→ 支撑缺口新页策略 |
| gaming name generator | gaming generic + free-fire 1.2M + roblox | usernamegenerator/perchance AI | 中 | 已有页 ✓；free-fire nickname style 500k 需内容承接 |
| fancy font generator online | core | lingojam | 红海 | 同 fancy text；注意 KP 里 `online` 修饰词族 **-90%**，TD 别押 online |

**本站在 8 组取单 0 次出现**（11-05 旧站口径）。新站域名切换+重定向 11-08 才完成，SERP 重新进入需要时间；上述打法均为内容侧动作，不等排名。

## 二、三条战略级合并结论（两边数据互相印证）

### 1. 词根错位 = 最大单点缺口，且恰好是需求最大的词
- 供给：竞品 TDK 67.9% 写 `fancy text/font` + `font generator` 词根，旧站只有 4/47、12/47 页（FONT-TDK-01/02）
- 需求：`font generator`(5M 桶) + `fancy fonts/text`(500k×N, +900%) = 全表最大的两个词族
- **新站现状核对**：风格/平台页新 title 已带 `Font Generator` 根（如 `Cursive Font Generator — Script Styles, Copy & Paste`、`Instagram Font Generator — Name 30 & Bio 150`）✓ TDK-01 基本落地
- **剩余动作**：① 首页 meta title 现为 `Fancy Text Generator`，按 plan 应为 `Fancy Font Generator — Copy & Paste 30 Unicode Styles`（同时含两个词根 + 数字规格）② symbols 页 title 缺 `388` 数字规格（TDK-05）③ 全站跑一次 ≤60/≤160 长度复检（旧站超限 15/47，新站未复检）

### 2. 「无人认领的证据位」× 需求侧上涨簇 = 平台页是当前最佳发力点
- 供给：平台字符上限数字，竞品 TDK **0/144 页**写（TDK-04）；`one tap copy` 竞品 TDK 0/28（TDK-07）；`as you type` 竞品 TDK 3/28（TDK-03）
- 需求：platform 簇 4.21M + **WhatsApp 簇爆发**（50k +900%，子词 +9900%）+ `free fire nickname style`(500k) + `copy and paste` 修饰词是用户语言里的头部词（`copy and paste fonts`/`copy and paste symbols` 各 500k）
- **新站现状**：部分平台页 title 已带数字（`WhatsApp Font Generator — Name ~25 & About ~139` ✓）；剩余：把 `one tap copy` / `as you type` 补进 description（这两条竞品 TDK 几乎全空、我们正文有原句，纯搬运即可），优先 WhatsApp/Instagram/Discord/Free Fire 四页

### 3. es 语区从「迁移补尾」升级为「增长主线」
- 需求：`letras bonitas` **5M**、`letras cursivas` **5M** —— 任何英文头部词的 10 倍量级
- 供给：多语言是本站唯一成建制护城河（172 locale 页全 200 + hreflang 6 条/页 vs 竞品 5/28 站有 hreflang）
- 新站 es 首页 title `Generador de letras bonitas` ✓ 已对齐；动作：es/pt 页按 tdk-adjustments.md 的 es/pt 表逐页过一遍主词，配合 18 迁移落地页做 es 内链密度

## 三、plan.json 20 页改写方案 → 新站 URL 重映射

改写方案的 title 文案仍有效，但计划是按旧站 slug 写的，落地时按此表映射：

| 旧站 slug（plan 所写） | 新站落地页 | 状态 |
|---|---|---|
| `/` | `/` | **title 待改**（见结论 1①） |
| `/fancy-text-generator/` | `/fancy-text-generator/`（新站已有此路由） | 核对 title 是否含 fancy 根+30 数字 |
| `/gothic-text-generator/` | `/styles/gothic-fonts` | ✓ 新 title 已含 Old English |
| `/cursive-text-generator/` | `/styles/cursive-fonts` | ✓ |
| `/strikethrough-text-generator/` | `/styles/strikethrough-text` | ✓ |
| `/glitch-text-generator/` | `/styles/zalgo-text` | ✓（3 Levels 数字已在） |
| `/symbols/` | `/symbols/` | **title 缺 388 数字，待改** |
| `/mcp/` | `/mcp/`（新站已有） | 低优先 |
| `/gaming-name-generator/` | `/gaming-name-generator/` + `/platforms/game-name-generator` | 核对 |
| `/whatsapp-fonts/` | `/platforms/whatsapp-fonts` | ✓ 数字已在，补 desc 卖点 |
| `/free-fire-name-generator/` | `/platforms/free-fire-name-generator` | 补 12 字符数字核对 |
| `/instagram-fonts/` | `/platforms/instagram-fonts` | ✓ |
| `/roblox-name-generator/` | `/platforms/roblox-name-generator` | ✓ |
| `/adopt-me-fonts/` | `/platforms/adopt-me-fonts` | ✓ |
| `/blank-space/` | `/blank-space/` | 核对 title 是否含 Invisible Character 双词（需求侧两词各 500k） |
| `/aesthetic-text-generator/` | `/styles/aesthetic-fonts` | ✓ |
| `/upside-down-text-generator/` | `/styles/upside-down-text` | ✓ |
| `/crazy-font-generator/` | `/styles/crazy-font-generator` | ✓ |
| `/bold-text-generator/` | `/styles/bold-fonts` | ✓ |
| `/small-caps-generator/` | `/styles/small-fonts` | ✓（title 已含 Super & Subscript） |

## 四、缺口新页 × 竞品占位复核（SERP 侧验证）

| 我方候选（KP 头部 50k） | 29 站存档复核 | 结论 |
|---|---|---|
| `/platforms/twitter-fonts`(50k) | **0 站有**（采样内） | P0 维持，全赛道空位 |
| `/styles/superscript-subscript-generator`(50k+50k) | **0 站有** | P0 维持 |
| `/styles/signature-font-generator`(50k) | 仅 fastestchecker 1 站 | P0 维持，竞争极稀 |
| `/platforms/minecraft-fonts`(50k) | 仅 namezly 1 站（且是 name 页非 fonts 页） | P0 维持 |
| graffiti / ascii-art（50k） | 仅 fontspace 分类页（下载站，异意图） | P1 维持 |

> EMD 先例：`upsidedowntext.com` 靠一个专属页拿下 SERP #1 —— 缺口新页策略有实战背书。

## 五、合并后的行动优先级

**P0（本周）**
1. 首页 title 改 `Fancy Font Generator — Copy & Paste 30 Unicode Styles`；symbols title 补 `388`
2. 四个重点平台页（WhatsApp/Instagram/Discord/Free-Fire）description 补 `one tap copy` + `as you type`（正文原句搬运，TDK-03/07）
3. 全站 title≤60 / desc≤160 复检（可复用 SERP 项目的 `audit_plan.py` 闸门）

**P1（下周起）**
4. 缺口新页 ×4：twitter-fonts → signature → superscript-subscript → minecraft（模板复用，见 content-gaps.md）
5. es/pt 页主词逐页核对（tdk-adjustments.md es/pt 表）；WhatsApp es/id 版测试（`cara tukar font whatsapp` 5k 印尼语词）
6. blog A1（Free Fire 名字大全，500k 词族）+ LingoJam/igfonts 替代品对比文（SERP #1 常客的品牌词 50k+500k）

**P2（本月内）**
7. 长尾风格页 description 补 `fancy` 词根（TDK-02 后半）；HowTo/SoftwareApplication schema（旧站差距表 P1 项）
8. 每语种补回缺的 ~1 段落差（es +7 / pt-br +8 / zh-cn +9 / id +9）
