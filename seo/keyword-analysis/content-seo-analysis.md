# 全站内容 SEO 分析（2026-11-08）

> 数据底座：KP 18,135 词聚类主表（en 语料 18,103 词）× 站点 54 个 en 页面清单 × 28 站竞品饱和度（33 条卖点）× 线上 223 页机制词实测
> 分析脚本：`scripts/kw_content_analysis.py` | 技术面见 `technical-seo-audit.md`（223 页全绿）

## 〇、两个重磅发现（先说结论）

### 🔴 发现 A：nickname/name 词族 3.0M 需求，英文站没有落地页
`decorated-nicknames` 页**只有中文版**（旧站设计：中文昵称装饰页），导致以下英文需求全部 404 落空：

| 词族头词 | vol | 趋势 |
|---|---|---|
| nickname generator / fantasy nickname generator / nickname gen / nickname generator random / random nickname maker | 5×500k | 平稳 |
| **fancy name maker** | 500k | **+900% YoY** |
| name font generator / stylish name generator / cursive name generator / name font maker 等 | 50k×7 | 平稳 |
| character / cute / female nickname generator 等 | 50k×3 | 平稳 |
| **合计** | **≈3.54M** | nickname 簇是全站第 8 大簇，覆盖率为 0 |

**修法（零新模板成本）**：`decorated-nicknames` 路由和生成器机械都在，只需**给该 slug 增加 en copy**（代码按 copy 键自动成簇 hreflang en+zh）。TDK 双意图定位（此前 tdk-adjustments 已定）：`Nickname Generator — Fancy Fonts & Name Ideas`，正文一半字体化一半灵感，避开纯起名站。

### 🔴 发现 B：Free Fire 的**英文查询** 1.2M，页只有 es/pt 版
之前「free-fire 页只做 es/pt 是正确定向」的结论**要修正**：en 语料里 `free fire nickname style`(500k)、`free fire stylish nickname`(500k)、`nickfinder free fire`(50k) 是英语查询（印度/菲/巴英语用户），簇 1.21M 在 en 无落地。
**修法（零新模板成本）**：给 `free-fire-name-generator` 补 en copy（页面/主题/游戏视觉全现成，此前还写了 en 的 Free Fire 指南可直链）。

## 一、关键词覆盖矩阵（en 语料 18,103 词 → 54 页）

| 簇 | 词数 | 量级 | 覆盖 | 备注 |
|---|---|---|---|---|
| core-generic | 3,817+899 | 32.0M | ≈100% | 首页+全部生成器承接 |
| cursive-script | 2,336 | 6.76M | ✓ | cursive 页 + signature 页分流 |
| symbols 系（general/heart/star/arrow/…） | 2,190 | 8.29M | ✓ 除 ascii | symbols+heart 页 |
| platform 系 9 平台 | 3,020 | 6.3M | ✓ | twitter 新页补上后全覆盖 |
| style 系 16 子簇 | 1,889 | 4.9M | ✓ 除 3d/graffiti/wide-text | |
| bio/username | 124 | 199k | ✓ 经两篇指南 | 信息意图 |
| **nickname/profile-name** | **297** | **3.54M** | **✗ 0%** | **发现 A** |
| **free-fire (en)** | **65** | **1.21M** | **✗ en 0%** | **发现 B** |
| ascii-text-art | 37 | 536k | ✗ | content-gaps P1 |
| 3d-text / graffiti | 66 | 528k | ✗ | content-gaps P1 |
| competitor-brand | 78 | 599k | 有意不追 | lingojam-alternatives 文部分截流 |

**口径修正说明**：username(138k)/bio(61k) 经 `/learn/fancy-text-usernames`、`/learn/instagram-bio-fonts` 覆盖 ✓；nickname/profile-name 的映射页是仅中文页 → 真缺口。

## 二、自相残杀（keyword cannibalization）评估

标题词重叠扫描出 7 对，逐对判定：

| 对 | Jaccard | 判定 | 动作 |
|---|---|---|---|
| small-fonts × superscript-subscript-generator | 0.33 | ⚠️ 真风险 | small title 明确含 "Super & Subscript"，与新页正面撞；**small-fonts title 去掉 Super & Subscript**（保留 Small Caps 定位） |
| tiny-text-generator × superscript-subscript | 0.33 | ⚠️ 轻风险 | tiny 的 desc 提 superscript/subscript；tiny 收缩为 "whisper size" 定位即可（desc 已如此，title 无冲突 → 仅观察） |
| bold-fonts × italic-text-generator | 0.60 | 可接受 | bold 的 "Bold Italic" 是样式名，italic 页吃 italic 查询——查询意图不同 |
| cursive × signature | 0.50 | ✓ 有意分流 | 场景拆分（写字 vs 签名），TDK 锚点不同 |
| bubble × fancy-numbers | 0.29 | ✓ | 字母 vs 数字 |
| roblox × adopt-me | 0.29 | ✓ | 游戏特化页，意图不同 |
| instagram × tiktok | 0.25 | ✓ | 平台特化 |

## 三、页面意图结构

| 维度 | 数据 | 解读 |
|---|---|---|
| 页面构成 | 工具 41（23 风格+15 平台+2 特殊+首页）/ 指南 11 / hub 2 | 工具主导 |
| 需求意图比 | 工具词 ≈106.6M vs 信息词 ≈18.7k | 赛道本质是工具意图；指南的价值在 E-E-A-T 和长尾试纸，不在量 |
| 意图-页面匹配 | 每个生成器页聚焦单一风格/平台意图 ✓ | 无混合意图页 |
| 信息意图承接 | how-to 18.7k → 仅 pick-your-style 一篇扛；limits/troubleshoot → why-boxes-appear ✓ | how-to 长尾还有 A4（change font copy and paste 5k）未写 |

## 四、竞品信息增量（information gain）

**我们独有、赛道无人给的信息**（线上 223 页实测 vs 竞品 28 站饱和度）：

| 信息资产 | 我们覆盖率 | 竞品 TDK / 正文 | 判定 |
|---|---|---|---|
| 诚实边界声明（方框/缺字/不支持平台） | **100%** | — / 部分 | 全站标配，竞品无此体系 |
| 屏幕阅读器/无障碍提示 | **87%** | ≈0 / ≈0 | **独家**（无障碍是赛道盲区）|
| Unicode 原理解释 | 100% | 25% / 90.5% | 正文竞品也有，我们 TDK+正文双占 |
| 平台字符实测数字（WhatsApp about 139 等） | 32% 页面带数字规格 | **0 / 0** | **独家证据位** |
| 本地处理/隐私声明 | 45% | ≈0 | 差异化 |
| 一键复制主张 | 30% 页面 | **0% / 47.6%** | 空位已占，可继续扩 |
| 即时预览主张 | 27% 页面 | 10.7% / 61.9% | 空位已占 |
| 工具资产：乱码清洗器 / 空白字符工具 / 388 符号库 / 收藏夹 | 独有功能 | 无对手全家桶 | 产品级增量 |
| MCP + llms.txt（AI 代理接口） | 独有 | 无对手 | 面向未来的增量 |
| 5 语种 hreflang 成簇 | 全站 | 5/28 站有任何 hreflang | 结构性护城河 |

**竞品有、我们别跟的**：虚标样式数（300+/1000+ styles——我们 180 是真实引擎数，把「诚实数字」做成叙事而不是跟风通胀）；教程矩阵厚度堆词数（C2/C6 模式，我们以指南质量+双向内链应对）。

## 五、内容传递漏斗（guide ↔ tool）

| 检查 | 结果 |
|---|---|
| 指南 → 工具出链 | 11 篇全部有 relatedTools 出链 ✓ |
| 工具 → 指南回链 | 23 风格页全覆盖 ✓；**4 个新工具页零指南支撑**：twitter / minecraft / signature / superscript |
| 孤儿指南 | **lingojam-alternatives 零反链**（appearOn 为空，只有 /learn/ 索引入口）|
| 锚文本质量 | 相关指南卡用 navName（如 "Free Fire name styles"）✓ 描述性锚 |

**快修**：`name-length-limits` 指南 appearOn 加 `minecraft-fonts`（Minecraft 用户名 3–16 规则正是该指南内容）；lingojam 文从 `discord-fonts-guide`、`fancy-text-usernames` 正文各加一行内链；twitter 页等待 B7 类指南时一并支撑。

## 六、行动清单（优先级）

**P0（数据支撑最硬）**
1. `decorated-nicknames` 补 en copy → 接住 3.54M nickname 词族（含 +900% 的 fancy name maker）
2. `free-fire-name-generator` 补 en copy → 接住 1.21M 英文查询（页面/视觉/指南全现成）
3. `small-fonts` title 去掉 "Super & Subscript"（让位给新页，消除正面相撞）

**P1**
4. minecraft 页挂 name-length-limits 指南；lingojam 文补 2 处正文内链
5. how-to 长尾写 A4（change font copy and paste 5k，/learn/ 第 12 篇）

**P2（沿 content-gaps 既定排序）**
6. ascii-art（536k）→ graffiti（215k）→ 3d-text（313k）三页依序排
7. linkedin bold 并入 bold 页平台段；vaporwave/wide-text 并入 aesthetic 页段

> 方法论备注：覆盖率按 en 语料；`/learn/*` 目标计为已覆盖；`/styles/decorated-nicknames` 类旧路径目标按「页面是否存在对应 locale copy」复核（发现 A 即由此得出）。
