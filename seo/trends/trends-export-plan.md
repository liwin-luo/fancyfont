# Google Trends 关键词导出计划

> 用途：关键词聚类 → 页面 TDK 调整 / 内容优化 / blog 选题
> 导出日期：2026-11-08 起
> 数据落位：所有 CSV 放到 `seo/trends/`，按下方命名规范命名

## 导出规则（重要）

1. **每组 ≤5 个词** — Trends 一次比较最多 5 词，直接把下面「搜索框粘贴串」整段粘贴即可（逗号分隔）。
2. **锚点词** — 每组第 1 个词是锚点（加粗标出）。Trends 的 0–100 是组内相对值，有共同锚点才能跨组横向比较热度。
3. **每组导 2 个时间范围的 CSV**：
   - `Past 12 months`（季节性 + 近期热度）
   - `Past 5 years`（趋势方向：词在涨还是跌；新兴词没有 5 年数据就跳过）
4. **每组同时导 Related Queries（相关查询）**：图下方「Related queries」面板右上角 ⬇ 下载，Top + Rising 各一份。这是 blog 长尾选题的金矿。
5. **命名规范**：`{组号}_{地区}_{范围}.csv`，如 `G1_us_12m.csv`、`G1_us_5y.csv`、`G1_us_related.csv`
6. 地区固定按每组的 Region 设置（别用 Worldwide，噪音大）。

---

## P0 必导（9 组，全部映射到现有页面）

### G1 · 核心大词 → 首页
- Region: **United States**
- 粘贴串: `fancy fonts, font generator, fancy font generator, font changer, cool fonts`
- 锚点: **fancy fonts**

### G2 · 竞品/复制粘贴词 → 首页（对标 copyandpaste-fonts.com）
- Region: **United States**
- 粘贴串: `fancy fonts, copy and paste fonts, font copy and paste, text generator, fancy text`
- 锚点: **fancy fonts**（与 G1 同锚点，可直接对比）

### G3 · 风格词 A → cursive/gothic/small/bold/bubble 页
- Region: **United States**
- 粘贴串: `fancy fonts, cursive font, gothic font, small text generator, bubble text`
- 锚点: **fancy fonts**

### G4 · 风格词 B → zalgo/strikethrough/upside-down/tiny 页
- Region: **United States**
- 粘贴串: `fancy fonts, zalgo text, glitch text generator, upside down text, strikethrough text`
- 锚点: **fancy fonts**

### G5 · 风格词 C（趋势/新兴）→ coquette/preppy/chicano/elegant/heart 页
- Region: **United States**
- 粘贴串: `fancy fonts, coquette font, preppy font, chicano lettering, elegant font`
- 锚点: **fancy fonts**
- 注：coquette/preppy/berry avenue 是 2023 年后起来的词，5 年图可能没数据，导 12 个月即可

### G6 · 特殊功能词 → blank-space / symbols / fancy-numbers 页
- Region: **United States**
- 粘贴串: `fancy fonts, invisible character, blank space, fancy numbers, text symbols`
- 锚点: **fancy fonts**

### G7 · 平台词 → instagram/tiktok/discord/whatsapp/facebook 页
- Region: **United States**
- 粘贴串: `fancy fonts, instagram fonts, tiktok font generator, discord fonts, whatsapp font`
- 锚点: **fancy fonts**

### G8 · 游戏词 → roblox/fortnite/adopt-me/berry-avenue/game-name 页
- Region: **United States**
- 粘贴串: `fancy fonts, roblox name generator, fortnite name generator, adopt me fonts, berry avenue fonts`
- 锚点: **fancy fonts**

### G9 · 场景词 → decorated-nicknames 页 + instagram-bio / usernames guides
- Region: **United States**
- 粘贴串: `fancy fonts, instagram bio fonts, aesthetic usernames, nickname generator, display name ideas`
- 锚点: **fancy fonts**

---

## P1 必导（2 组，西语 16 个迁移页的 TDK 依据）

### G10 · 西语核心 → es 版首页 + style/platform 页 es 版
- Region: **Mexico**
- 粘贴串: `fuentes para instagram, letras bonitas, letras raras, letras cursivas, fuentes de letras`
- 锚点: **fuentes para instagram**
- 注：free fire 在墨西哥流量巨大，见 G11

### G11 · 西语游戏/风格 → free-fire/pubg/gothic/small 页 es 版
- Region: **Mexico**
- 粘贴串: `fuentes para instagram, nombres para free fire, letras pequeñas, letras góticas, letras especiales`
- 锚点: **fuentes para instagram**

---

## P2 可选（3 组，有余力再导）

### G12 · 葡语（巴西是 pt-br 16 页唯一主力市场）
- Region: **Brazil**
- 粘贴串: `fontes para instagram, letras diferentes, letras cursivas, nomes para free fire, fontes de letras`
- 锚点: **fontes para instagram**

### G13 · 信息型词 → 现有 guides + 潜在新页验证
- Region: **United States**
- 粘贴串: `fancy fonts, instagram character limit, discord character limit, unicode font, steam name ideas`
- 锚点: **fancy fonts**
- 注：`steam name ideas` / `discord about me ideas` 有量但我们没有对应页 → 新页候选；`unicode font` 对应 what-are-unicode-fonts guide

### G14 · 中文词（仅覆盖台湾/香港，大陆用户不用 Google）
- Region: **Taiwan**
- 粘贴串: `特殊符號, ig 字體, 字體轉換, 暱稱, 英文名字產生器`
- 锚点: **特殊符號**
- 注：抖音/小红书/微信等 zh 平台页的目标用户不在 Google 上，这些词在 Trends 里数据接近 0，**不要用 Trends 验证**，改用百度指数/微信指数

---

## 导出完成后

把 `seo/trends/` 目录告诉我，我会做：

1. 解析所有 CSV（含 isPartial 列剔除、跨组锚点归一化）
2. 聚类输出：关键词 × 簇 × 热度 × 趋势方向（涨/跌/季节性）
3. 三个交付物：
   - **TDK 调整表** — 每个现有页面的主词是否要换（用数据说话）
   - **缺口清单** — Related Queries 里有量但没页面的词（新页候选）
   - **Blog 选题清单** — 信息型长尾词按优先级排序，排进内容日历
