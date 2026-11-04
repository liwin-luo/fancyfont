# 印尼语内容审核 · `id`

- 审核对象：`fancyfont.tools` Bahasa Indonesia
- 源提交：`6948b7a`
- 范围：风格页 20、平台页 12、静态页 10，共 42 页 / 1,097 个审查单元
- 审核状态：全部 `pending`，本报告不构成发布批准
- 说明：自动报告表头的 `en→es` 是导出脚本的标签 bug，实际比对是 `en→id`

## 结论

自动检测共标记 20 项：1 个空标题、1 处英文残留、1 处数字差异、12 条标题超长、5 条描述超长。人工复核后：

- **空标题是导出脚本的误报**：Coquette 页没有显式 `title`，但 `resolvedStyleTitle` 会回退生成 63 字符标题，页面渲染正常。
- **数字差异是误报**：`was $99` 译为 `dulu Rp99.000`，是货币本地化，不是事实错误。
- **1 处英文残留是真的**：Discord 页的 `About Me`。
- **12 条标题超过 60 字符不建议改**：`Copy Paste` 是印尼语常用搜索词，品牌尾按设计最后被截断。
- **5 条描述超过 160 字符**：会截断，属可选的 SEO 收缩项。
- **导出脚本没覆盖 4 个补充文案文件**，人工复核在其中又发现 2 处英文残留和多处术语不一致。

人工复核共确认 **2 个 P0、10 组 P1（17 处字符串）、10 组 P2（21 处）**。2026-11-04 已按确认范围应用 **P0 + P1 + P2 可自动项**；应用过程中另发现并修复 1 处 UI 术语（`approxField` 的 `code point`）和 3 处 390px 横向溢出。详见第十节。

## 一、自动检测与实际判定

| 检测项 | 报告数 | 实际有效 | 说明 |
|---|---:|---:|---|
| 空翻译 | 1 | 0 | Coquette 无显式 `title`，代码回退渲染为 63 字符标题 |
| 与英文完全相同 | 0 | 0 | — |
| 英文残留 | 1 | 1 | Discord `About Me` |
| 数字/事实不一致 | 1 | 0 | `was $99` → `dulu Rp99.000`，货币本地化 |
| 标题长度异常 | 12 | 0（不建议改） | 共享模板 + 品牌尾；截断时品牌先掉，查询词仍在前面 |
| 描述长度异常 | 5 | 5（可选） | 超过 160 字符，搜索结果会截断 |
| FAQ 数量不一致 | 0 | 0 | — |
| 重复标题 / 描述 | 0 | 0 | — |

### 文件缩写

- **S** = `src/lib/content/style-pages-id.ts`
- **P** = `src/lib/content/platform-pages-id.ts`
- **M** = `src/lib/content/platform-pages-more.ts`（id 段 1598–1997）
- **H** = `src/lib/content/page-home.ts`（id 段 380–470）
- **F** = `src/lib/content/page-fancy.ts`（id 段 285–360）
- **G** = `src/lib/content/page-gaming.ts`（id 段 310–400）
- **B** = `src/lib/content/page-blank-space.ts`（id 段 329–420）
- **MCP** = `src/lib/content/page-mcp.ts`（id 段 251–320）
- **BA** = `src/lib/content/berry-avenue-extra.ts`（id 段 298–340）
- **COD** = `src/lib/content/cod-extra.ts`（id 段 217–270）
- **RB** = `src/lib/content/roblox-extra.ts`（id 段 124–150）
- **CF** = `src/lib/content/core-focus.ts`（id 段 48–55）

## 二、P0（必须改）

### P0-1 Berry Avenue 用户名 FAQ 是非问句没有回答「不能」

`M:1929–1930` 的问题是「Berry Avenue 字体能放进用户名吗？」，答案却直接从 `Penyebab:` 开始，没有先回答能不能。中文批次有同样的错位。

| 位置 | 现文 | 建议 |
|---|---|---|
| M:1929 | q: Apakah font Berry Avenue untuk username? | q: Apakah font Berry Avenue untuk username? |
| M:1930 | a: Penyebab: artikel bantuan Roblox memperlakukan nama tampilan dan username sebagai kolom yang berbeda.… | a: Tidak. Penyebab: artikel bantuan Roblox memperlakukan nama tampilan dan username sebagai kolom yang berbeda.… |

### P0-2 首页步骤句被截断

`H:441` 的句子停在 `yang paling kamu.`，缺谓语，读者会看到残句。

| 位置 | 现文 | 建议 |
|---|---|---|
| H:441 | Lihat pratinjau semua hasil seketika dan pilih vibe yang paling kamu. | Lihat pratinjau semua hasil seketika dan pilih vibe yang paling cocok untukmu. |

## 三、P1（可自动修）

### P1-1 错字：Pengecualiananya

`S:164`。同段其余位置没有这个词，正确拼写是 `Pengecualiannya`。

| 位置 | 现文 | 建议 |
|---|---|---|
| S:164 | Pengecualiananya adalah gaya kotak | Pengecualiannya adalah gaya kotak |

### P1-2 错字：tanda kombinsi

`S:252`。应为 `kombinasi`，同文件其他位置都写对了。

| 位置 | 现文 | 建议 |
|---|---|---|
| S:252 | Rusak teksmu dengan tanda kombinsi berbahaya | Rusak teksmu dengan tanda kombinasi berbahaya |

### P1-3 英文动词 Copy

`S:176` 正文里保留英文动词 `Copy`，同一句其余部分已是印尼语。

| 位置 | 现文 | 建议 |
|---|---|---|
| S:176 | Copy kombinasi dari Generator Nama Game yang membiarkan nama dasarmu polos, jadi selalu ada cadangan. | Salin kombinasi dari Generator Nama Game yang membiarkan nama dasarmu polos, jadi selalu ada cadangan. |

### P1-4 人称不一致：Anda

`S:704` 是 id 文案中唯一一处 `Anda`，同页与其余页面都用 `kamu`。

| 位置 | 现文 | 建议 |
|---|---|---|
| S:704 | acak lagi dan Anda dapat set baru. | acak lagi dan kamu dapat set baru. |

### P1-5 Discord 页 About Me 未翻

`P:148` 正文保留 `About Me`，同页 FAQ 已经用 `Tentang Saya`（`P:160`）。

| 位置 | 现文 | 建议 |
|---|---|---|
| P:148 | nama panggilan, status kustom, dan About Me tetap hanya menerima karakter biasa | nama panggilan, status kustom, dan Tentang Saya tetap hanya menerima karakter biasa |

### P1-6 Instagram「jutaan profil」无来源

`P:50` 的「kamu sama seperti jutaan profil lain」比英文 `millions of profiles` 属于同一类无来源断言；中文已弱化为「不少用户」。建议 id 先改为「banyak profil lain」，再在跨语言批次统一处理 en/es/pt。

| 位置 | 现文 | 建议 |
|---|---|---|
| P:50 | kamu sama seperti jutaan profil lain. | kamu sama seperti banyak profil lain. |

### P1-7 clan → klan

id 正文有 17 处 `klan`，只有 4 处写成英文 `clan`。`klan` 是印尼语标准拼写。

| 位置 | 现文 | 建议 |
|---|---|---|
| S:44 | untuk nama, bio, dan clan | untuk nama, bio, dan klan |
| S:46 | tag clan | tag klan |
| S:52 | tag clan dengan estetika metal | tag klan dengan estetika metal |
| P:73 | label: "Bingkai clan" | label: "Bingkai klan" |

### P1-8 display name 未翻（补充文案文件）

`BA:306` 和 `BA:318` 保留英文 `display name`，同一文件其余位置都用 `nama tampilan`（`BA:245` 等）。这段文案不在导出脚本覆盖范围内，是人工复核发现的。

| 位置 | 现文 | 建议 |
|---|---|---|
| BA:306 | Penyebab: pengumuman display name Roblox menulis… | Penyebab: pengumuman nama tampilan Roblox menulis… |
| BA:318 | label: "pengumuman display name" | label: "pengumuman nama tampilan" |

### P1-9 core-focus 语法：Periksa nama ini membuka…

`CF:50` 缺少动词形态，`Memeriksa` 才与后面的 `membuka` 构成完整主语。

| 位置 | 现文 | 建议 |
|---|---|---|
| CF:50 | Periksa nama ini membuka laporan karakter | Memeriksa nama ini membuka laporan karakter |

### P1-10 MCP 页残句：Server-nya proses lokal

`MCP:259` 的 `Server-nya proses lokal.` 缺谓语 `adalah` 或 `berjalan sebagai`，读起来像残句；这是 `/mcp/` 首屏介绍。

| 位置 | 现文 | 建议 |
|---|---|---|
| MCP:259 | Server-nya proses lokal. | Server-nya berjalan sebagai proses lokal. |

## 四、P2（建议修，需确认）

| 组 | 位置 | 现文 → 建议 |
|---|---|---|
| h1 大小写不一致（4） | S:530/564/607/641 | `Generator huruf coquette/preppy/hati/chicano` → `Generator Huruf …`，与其余 16 个风格页一致 |
| code point 与 titik kode 混用（4） | M:1637；CF:52/53；UI:1738 | `code point` → `titik kode`，与 S:154、M:1960/1980、B:378、MCP:285 统一。UI:1738 是导出脚本未覆盖的平台字数提示 |
| 「angka kecocokan」晦涩（2） | CF:52/53 | `angka kecocokan` → `patokan muat`，让「预览用来判断超长的数字」更直白 |
| 语序（1） | CF:51 | `sesuai urutan kamu menambahkannya` → `sesuai urutan saat kamu menambahkannya` |
| 动词搭配（1） | MCP:265 | `Minta ia memberi gaya pada sebuah nama` → `Minta ia menghias sebuah nama` |
| 数字写法（1，未应用） | RB:128 | `sekali setiap 7 hari` → `sekali setiap tujuh hari`。**未应用**：`info-gain-cod-coquette-roblox.test.ts:93` 对五个语言都断言可见文本含数字 `7`，改词会红测试；且 en/es/pt/zh 均用数字，保留 `7 hari` 反而与四语一致 |
| 机构名不一致（3） | RB:137/142/168；BA:323/328 | `Community Standards` → `Standar Komunitas`；同时把 BA 的小写 `Standar komunitas` 统一为首字母大写 |
| 价格动词（2） | COD:221/225 | `Ganti nama … berharga 500 COD Points` → `Biaya ganti nama … 500 COD Points` |
| 示例值仍是占位语（3） | S:22、S:690、F:302 | `Nama Kamu` → `Luna` / `Neon`，样例应展示真实名字的转换效果 |
| meta 描述用英文 vibe 名（1） | G:314 | `cool, dark, cute, pro, dan minimal` → `keren, gelap, imut, pro, dan minimalis`，与 G:322 的步骤用词一致 |

## 五、SEO 标题与描述

### 5.1 Coquette 缺显式 `title` 是误报

`S:530` 的对象没有 `title` 字段，导出报告因此报「空翻译」。实际 `resolvedStyleTitle` 会回退为：

`Generator Huruf Coquette — Copy Paste pita & script | FancyFont`（63 字符）

h1 已在 P2 中改为首字母大写，浏览器实测标题与上述一致，不是空值。但它每次导出都会触发误报，而且 63 字符偏长。建议在 SEO 批次补显式标题，例如：

`Generator Huruf Coquette — pita & script | FancyFont`（52 字符）

### 5.2 `Copy Paste` 短语保留

12 条超长标题都来自共享模板 `{h1} — Copy Paste {detail} | FancyFont`。`Copy Paste` 是印尼语常用搜索词，且 es/pt 已本地化、zh 有意保留英文；在没有关键词数据前，不建议改共享模板。品牌名在最后，Google 按像素截断时先丢品牌，查询词仍在前面。

### 5.3 4 条描述偏长（SEO 批次，未应用）

`/gaming-name-generator/` 已在 P2 中顺手收缩到约 158 字符，不再超限。以下 4 条保留待 SEO 批次处理：

| 路径 | 长度 | 现文要点 | 建议收缩到 |
|---|---:|---|---|
| `/chicano-font-generator/` | 162 | 黑体、每行一个装饰、script 行、非字体非模板 | 约 145：`Teks chicano untuk disalin: blackletter dengan satu hiasan per baris, plus satu baris script. Gratis di browser. Bukan font, bukan stensil tato.` |
| `/` | 170 | 30 种风格、游戏名、符号、免费 | 约 130：`Salin 30 gaya Unicode, nama game berhias, dan simbol seperti hati, bintang, serta sayap. Gratis, tanpa daftar, tanpa memasang font.` |
| `/blank-space/` | 178 | 三种空白字符、1/20/100、0–5 间隔 | 约 130：`Salin pengisi Hangul (U+3164), spasi Braille (U+2800), atau spasi ideografis (U+3000): 1, 20, atau 100. Sisipkan 0–5 di antara huruf.` |
| `/about/` | 174 | 独立免费、Unicode、谁运营、联系方式 | 约 140：`FancyFont adalah situs mandiri dan gratis yang mengubah huruf menjadi teks Unicode keren di browser. Kenali pengelolanya dan cara menghubungi kami.` |

## 六、跨语言事实问题（五语统一，需核实）

1. **「millions / millones / milhões / jutaan 个用户」**：`P:50`、`platform-pages-en.ts:103`、es、pt 都保留这个无来源数量级；zh 已弱化为「不少用户」。建议 en/es/pt/id 统一改成 `many / plenty / muchos / muitos / banyak`。
2. **「很多游戏把名字限制在 12–16 个字符」**（`G:330` 及英文源）：概括性数字，没有逐游戏来源；建议改成「十几个字符」或补来源。
3. **「Epic 账号 ID 是数字」**（`M:1972` 及英文源）：Epic Account ID 通常是 32 位十六进制字符串，不是纯数字。建议改成「账号 ID 是固定字符串，不能加样式」。
4. **码位 / 字素措辞**：界面可见计数用 graphemes，超长警告用 code points。id 的「Pratinjau menghitung titik kode」容易被读成可见计数，建议五语统一说明「超长提示按码位计算」。
5. **`Community Standards` 标签**：id 的 Roblox 页保留英文，Berry Avenue 页已用 `Standar komunitas`；es/pt 在两个文件之间也不一致。术语批次可统一，但不影响事实。

## 七、复核后确认不改

- `S:230` 的 `dulu Rp99.000`：把 `was $99` 本地化为印尼盾，是示例文案，不是事实错误。
- 隐私页「November 2026」、条款页「Oktober 2026」：与英文源一致。
- 「388 simbol」「30 gaya」「120 karakter」：符号数、风格数、MCP 文本上限分别与 `symbols-data.ts`、`text-styles.ts`、`public/fancyfont-mcp.mjs:1353` 一致。
- 标题里的 `Copy Paste`：保留为搜索词，见 5.2。
- `font`、`username`、`vibe`、`blackletter`、`small caps`、`Profile Frames`、`rename token` 等：印尼语常用借词或产品名，保留。
- `nama fancy`（`M:1870`）：印尼语口语常用搭配，保留。
- 首页与游戏页的 `Nama Kamu` 以外的英文人名样例（Alex、Mia、Luna 等）：样例需要拉丁字母，保留。

## 八、未验证项

- 搜索量、关键词难度、SERP 排名：没有关键词工具或 GSC 数据，报告不含任何数字。
- 印尼语母语自然度：AI 只能标疑点，不能替代母语编辑。
- 各平台字符上限与过滤规则：页面已用「约 / 未实测」标注，本次没有在游戏内实测。
- 标题在 Google 印尼语 SERP 的实际截断宽度：受像素宽度影响，未做 SERP 截图验证。
- **导出工具缺口**：`scripts/export-content-dictionary.ts` 只覆盖 `stylePages`、`platformPages` 和 `page-*`，不覆盖 `coquette-extra.ts`、`berry-avenue-extra.ts`、`cod-extra.ts`、`roblox-extra.ts`，也不覆盖 `ui-strings.ts`。本报告的 P1-8、P2 中 COD/RB 的问题以及 `approxField` 的 `code point` 只能靠人工发现。

## 九、建议批次

| 批次 | 内容 | 规模 | 状态 |
|---|---|---|---:|---|
| 1 | P0-1 Berry FAQ、P0-2 首页残句、P1-1～P1-10 | 17 处 | 已应用 |
| 2 | P2 可自动项（h1 大小写、code point、angka kecocokan、Community Standards、价格动词、示例值等） | 21 处（RB:128 保留） | 已应用 |
| 3 | SEO：Coquette 显式标题 + 5 条描述收缩 | 1 + 5 页 | 未应用（gaming 描述已顺手收缩） |
| 4 | 跨语言事实：millions、12–16、Epic ID、码位措辞 | 五语 | 未应用，id 已先改为 `banyak profil` |
| 5 | 工具：把 4 个补充文案文件与 `ui-strings.ts` 纳入导出脚本 | 脚本 | 未应用 |

## 十、应用记录

**2026-11-04 已应用 P0 + P1 + P2 可自动项**，未提交、未推送。

### 10.1 修改文件

| 文件 | 修改 |
|---|---|
| `src/lib/content/style-pages-id.ts` | 4 个 h1 首字母大写；`clan` → `klan`（3 处）；`Pengecualiananya` → `Pengecualiannya`；`Copy` → `Salin`；`kombinsi` → `kombinasi`（2 处）；cursive/crazy 的 `Nama Kamu` 改为真实样例名；`Anda` → `kamu` |
| `src/lib/content/platform-pages-id.ts` | Instagram `jutaan profil` → `banyak profil`；Discord `Bingkai clan` → `Bingkai klan`；`About Me` → `Tentang Saya` |
| `src/lib/content/platform-pages-more.ts` | Roblox `code point` → `titik kode`；Berry FAQ 先答 `Tidak.` 再解释 |
| `src/lib/content/page-home.ts` | 首页残句 `yang paling kamu.` → `yang paling cocok untukmu.` |
| `src/lib/content/page-fancy.ts` | 示例名 `Nama Kamu` → `Luna` |
| `src/lib/content/page-gaming.ts` | meta 描述改用 `keren, gelap, imut, pro, dan minimalis`，长度降到约 158 |
| `src/lib/content/page-mcp.ts` | 补回谓语 `berjalan`；`memberi gaya pada` → `menghias` |
| `src/lib/content/core-focus.ts` | `Periksa` → `Memeriksa`；补 `saat`；`code point` → `titik kode`、`angka kecocokan` → `patokan muat`（PUBG/Free Fire） |
| `src/lib/content/berry-avenue-extra.ts` | `display name` → `nama tampilan`（2 处）；`Standar Komunitas` 首字母大写 |
| `src/lib/content/roblox-extra.ts` | `Community Standards` → `Standar Komunitas`（3 处）；RB:128 的 `7 hari` 按测试要求保留 |
| `src/lib/content/cod-extra.ts` | `berharga 500 COD Points` → 明确 `biaya ganti nama 500 COD Points`（2 处） |
| `src/lib/ui-strings.ts` | `approxField` 的 `code point` → `titik kode` |

### 10.2 浏览器复验时新发现并修复

| 问题 | 位置 | 修复 |
|---|---|---|
| 390px 下游戏页工具栏横向溢出（`Simpan kombinasi` 按钮组不换行） | `src/components/gaming-name-tool.tsx:316` | `flex shrink-0 gap-2` → `flex flex-wrap gap-2` |
| 390px 下 Coquette 结果行横向溢出（PNG/复制/`Periksa hasil ini` 不换行） | `src/components/single-style-tool.tsx:122/126` | 标题行与按钮组允许换行 |
| 同一结果行在 `fancy-text-tool` 中有相同风险 | `src/components/fancy-text-tool.tsx:478` | 按钮组允许换行 |

### 10.3 验证结果

- 导出：`npm run content:export -- id` → 42 页 / 1,097 单元；自动标记 2 项、12 条标题长度、4 条描述长度。
- 2 项标记均为误报：Coquette 空标题由 `resolvedStyleTitle` 回退（浏览器实测标题为 `Generator Huruf Coquette — Copy Paste pita & script | FancyFont`）；`sampleInputs[1]` 的 `was $99` → `dulu Rp99.000` 是本地化示例价格。
- 类型检查：`npx tsc --noEmit` 通过。
- 测试：`npx vitest run` 24 个文件 / 140 个测试全部通过。
- 浏览器（headless Chrome，1280×900）：20 个 id 页面 40 条内容断言全部通过，无英文残留；Glitch 的 `tanda kombinasi berbahaya` 只出现在 meta 描述，正文检查按 meta 判定。
- 移动端（390×844）：id 与 en 各 5 个页面 `scrollWidth === clientWidth`，无横向溢出。
- 未验证：SERP 截断、母语自然度、游戏内实际字符上限。

### 10.4 未应用 / 后续

- RB:128 `7 hari`：测试锁定数字，保留。
- SEO 批次：Coquette 显式标题、首页/blank-space/about/chicano 描述收缩未做。
- 跨语言事实批次：en/es/pt 的 `millions`、`12–16`、Epic ID、码位措辞仍未统一。
- 导出脚本缺口：4 个补充文案文件和 `ui-strings.ts` 未纳入自动检测。
