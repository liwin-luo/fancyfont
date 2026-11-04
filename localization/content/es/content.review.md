# 西语内容审校 · 第一批（Español / `es`）

- 审校日期：2026-11-04
- 源提交：`8d73f5a`
- 范围：42 个页面（20 风格页、12 平台页、10 静态页），共 1,123 个审查单元
- 方法：脚本自动检测 + 逐页人工对照英文原文与 `seo/产品事实底稿.md`
- 状态：全部条目仍为 `pending`；本文件只列问题与建议，未改 `src`

## 一、自动检测结果

| 检测项 | 结果 |
|---|---|
| 空翻译 | 0（已排除英文原文就留空的装饰位） |
| 与英文完全相同 | 0（工具标识符 `fancyfont_generate_nicknames` 已排除） |
| 英文残留 | 0 |
| 数字/事实不一致 | 0 |
| 重复标题 | 0 |
| 重复描述 | 0 |
| FAQ 数量差异 | 1（`/coquette-font-generator/`：英文 3、西语 4） |

原始数据：`localization/content/es/content.json`、`content.csv`、`content.report.md`。

## 二、P0 · 确定性错误（语法、错词、性别一致）

这些不涉及术语方向，建议直接修。

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 1 | `src/lib/content/style-pages-es.ts:105` | `Algunos las leten letra por letra` — `leten` 不是西语词 | `Algunos las leen letra por letra` |
| 2 | `src/lib/content/style-pages-es.ts:255` | `marcas reptaestilos` — 生造词 | `marcas que reptan` 或 `marcas escalofriantes` |
| 3 | `src/lib/content/style-pages-es.ts:67` | `el grosor negrito` — 字体术语误用，`negrito` 也不是 `negrita` | `la variante negrita` |
| 4 | `src/lib/content/platform-pages-more.ts:415,446,588,758,769,789` | `unas 16 caracteres` — `caracteres` 是阳性 | `unos 16 caracteres` |
| 5 | `src/lib/content/platform-pages-more.ts:463,465,492` | `unas 12 caracteres` | `unos 12 caracteres` |
| 6 | `src/lib/content/style-pages-es.ts:369,475,551,632` | 把 username 译成“人”：`Los usuarios que solo aceptan letras planas…` | `Los nombres de usuario que solo aceptan…` / `los campos de usuario…` |
| 7 | `src/lib/content/platform-pages-es.ts:202` | `Los usuarios están limitados a letras…` | `Los nombres de usuario están limitados a letras…` |
| 8 | `src/lib/content/page-symbols-privacy.ts:105` | `Los usuarios suelen ser más estrictos` | `Los nombres de usuario suelen ser más estrictos` |
| 9 | `src/lib/content/page-terms.ts:59` | `No lo hacen, ni está vinculado a, Instagram…` 句法断裂 | `No lo hacen Instagram, TikTok… ni está vinculado a ellas.` |
| 10 | `src/lib/content/platform-pages-es.ts:164` | `la culpa son las reglas` | `la culpa es de las reglas` 或 `la causa son las reglas` |
| 11 | `src/lib/content/platform-pages-es.ts:186` | `Se aplica estricto` | `Se aplica de forma estricta` |
| 12 | `src/lib/content/page-blank-space.ts:139` | `1–5 quita esos espacios` 主谓不一致 | `Con 1–5 se quitan esos espacios` |

## 三、P1 · 不自然或术语混用

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 1 | `style-pages-es.ts:21` | `una letra cursiva caería perfecta` | `la cursiva quedaría perfecta` |
| 2 | `style-pages-es.ts:429` | `La letra emo es esta mezcla` | `El estilo emo es esta mezcla` |
| 3 | `style-pages-es.ts:580,606` | `mayúsculas más bajas` — 直译 `shorter capitals` | `mayúsculas de menor altura` / `mayúsculas reducidas` |
| 4 | `style-pages-es.ts:578` | `un corazón … de palo` — 直译 `suit heart` | `corazón de naipe` 或 `corazón de carta` |
| 5 | `page-gaming.ts:157,172` | `cualquier nick`、`Nicks más cortos` — 与全站 `apodo/nombre` 不一致 | `cualquier nombre`、`Nombres más cortos` |
| 6 | `page-home.ts:137` | `Tres trabajos` — 直译 `Three jobs` | `Tres tareas` 或 `Tres herramientas` |
| 7 | `page-symbols-privacy.ts:90` | 分类名 `música y vibra` | `música y ambiente`（需对照实际分类名） |
| 8 | `page-about-contact.ts:70` | `mini` 指 tiny 风格，与页面 `letras pequeñas/tiny` 不一致 | `pequeñas` 或 `tiny`，与风格页统一 |
| 9 | `platform-pages-more.ts:649` | `looks preppy y tierno, recortados para probar` | `estilos preppy y tierno, ajustados para que quepan` |
| 10 | `platform-pages-more.ts:691` | 标题 `Fuentes Berry Avenue — …` 缺介词 | `Fuentes para Berry Avenue — …` |
| 11 | `platform-pages-more.ts:693` | `míralo en ficha y letrero` | `míralo en la ficha y en el letrero` |
| 12 | `platform-pages-more.ts:484` | `uno con estilo que recorta` | `uno con estilo que el juego recorta` |
| 13 | `platform-pages-more.ts:438` | `los mismos 16 caracteres aproximados` | `unos 16 caracteres, igual que en PUBG` |
| 14 | `platform-pages-more.ts:777,797` | `small caps` 直接混入西语句子 | `versalitas`（首次出现可保留 `small caps` 括注） |

## 四、P2 · 需要决策，不宜自动改

### 4.1 `cursiva` 与 `itálica` 的术语方向

西语里 `cursiva` 通常指 italic（斜体），但本站把 Unicode script 风格叫 `cursiva`，把 italic 叫 `itálica`。两页因此分别叫：

- `/cursive-text-generator/` → `Generador de letras cursivas`
- `/italic-text-generator/` → `Generador de letras itálicas`

这可能符合西语用户的搜索习惯（`letras cursivas` 常被用来搜花体），也可能让“italic”用户困惑。**没有关键词数据，不能判断哪个表达更符合搜索意图**。建议保持现状，列入母语审核；不要现在改。

### 4.2 `script` 借词

`script` 在正文出现 34 次，`cursiva` 33 次。建议规则：

- Unicode 范围名保留英文：`Mathematical Script`、`Bold Script`。
- 普通叙述用 `cursiva`。
- coquette/elegant 等以 `script` 为风格名的页面可保留，但首次出现加 `(cursiva)`。

### 4.3 `usuario` 与 `nombre de usuario`

全站正文几乎只用 `usuario`（62 次），`nombre de usuario` 为 0 次。字段标签 `Usuario` 没问题；解释性正文建议用 `nombre de usuario`，避免把“用户名”读成“用户账号”。这会涉及较多句子，需确认后再批量改。

### 4.4 `grosor` 与 `peso`

`grosor` 4 次、`peso` 1 次（`bold-text-generator` 的 `peso serif clásico`）。建议面向用户的文案统一用 `grosor`，`peso` 只留给排版技术说明。

### 4.5 `bio` 与 `biografía`

正文基本用 `bio`，只有条款页用 `biografías`。建议统一为 `bio`（社媒语境更自然）。

## 五、SEO 标题与描述

### 5.1 长度

西语标题普遍比英文长 5–22 字符。20 个页面超过 60 字符，8 个描述超过 160 字符。不是错误，但 Google 会截断，品牌尾通常最先丢失。

最长的标题：

| 页面 | 长度 | 标题 |
|---|---|---|
| `/small-caps-generator/` | 80 | Generador de versalitas (small caps) — Copiar y Pegar bios discretas \| FancyFont |
| `/gothic-text-generator/` | 79 | Generador de letras góticas — Copiar y Pegar Old English y medieval \| FancyFont |
| `/` | 78 | Generador de letras bonitas — Texto con estilo, nombres y símbolos \| FancyFont |
| `/bold-text-generator/` | 75 | Generador de letras en negrita — Copiar y Pegar chats y nombres \| FancyFont |
| `/elegant-font-generator/` | 75 | Generador de letras elegantes — Copiar y Pegar coronas y script \| FancyFont |
| `/heart-font-generator/` | 75 | Generador de letras con corazón — Copiar y Pegar doce corazones \| FancyFont |

超长描述：`/blank-space/` 186、`/` 177、`/chicano-font-generator/` 175、`/about/` 172、`/gaming-name-generator/` 171、`/crazy-font-generator/` 170、`/contact/` 164、`/berry-avenue-fonts/` 162。

**建议**：只缩短 detail 段，不动主查询词；是否调整需先确认，因为会改变现有 SERP 文案。

### 5.2 搜索意图声明

以下文案声称“用户就是这样搜的”，但没有关键词数据支撑：

- `style-pages-es.ts:63`：`«gótica» es como se busca ese texto`
- `style-pages-es.ts:391`：`También lo buscan como texto stylish o tag de clan`
- `style-pages-es.ts:578`：`lo que suelen buscar los nombres preppy de Adopt Me`

按规范“不得编造搜索量/关键词结论”，建议改成中性表述，例如 `en español también se le dice «gótica»`、`también se usa «stylish»`、`lo que suele asociarse con preppy en Adopt Me`。需要确认是否接受这种弱化。

## 六、产品事实与跨语言问题

西语数字与英文原文一致；平台限制、字符覆盖、隐私边界均未发现西语单独的偏差。以下问题英文原文同样存在，**不建议只改西语**：

1. `platform-pages-es.ts:50`：`estarás igual que millones de perfiles` — 未经证实的社交证明，与 `seo/产品事实底稿.md` 的“不写用户数/评价”冲突。
2. `platform-pages-more.ts:781`：`El ID de tu cuenta de Epic es un número` — Epic 账号 ID 通常不是纯数字，需核对。
3. `style-pages-es.ts:271`：Zalgo 起源写成 `un cómic de 2004`，需要来源核对。
4. 隐私页写 `Vercel Analytics` 且“无 GA/Clarity”，但 `seo/产品事实底稿.md:53` 写“配置 GA4 与 Clarity ID 时才加载测量脚本”。两份文档冲突，需确认真实实现后统一。

## 七、FAQ 数量差异

`/coquette-font-generator/` 西语比英语多一条 `¿Dónde encuentro letras coquette para copiar y pegar?`。这像是为搜索意图补充的问答，不是漏翻。建议保留，确认即可。

## 八、建议处理顺序

1. **第一批（P0，12 类）**：错词、语法、`usuario` 误用、`unas 12/16 caracteres`。可立即改，不涉及术语方向。
2. **第二批（P1，14 类）**：不自然表达与 `small caps` 混用。可立即改，但会轻微改变文案风格。
3. **第三批（P2）**：`cursiva/itálica`、`script`、`usuario/nombre de usuario`、`grosor/peso`、`bio/biografía`。需先定方向。
4. **第四批（SEO 长度与来源声明）**：需确认是否缩短标题/描述、是否弱化“用户这样搜”的措辞。
5. **跨语言事实问题**：单独一批，五语一起改，避免只改西语造成不一致。

## 九、未验证项

- 搜索量、关键词难度、SERP 排名：无数据，本报告不包含任何数字。
- 西语母语自然度：本报告由 AI 对照审查，不能替代母语编辑。
- 真机/平台兼容性：未在真实设备上复测，沿用页面既有“约/未实测”表述。

## 十、应用记录（2026-11-04）

用户确认范围：**P0 + P1**。以下已改，P2、SEO 长度、搜索意图声明、跨语言事实问题均未动。

- `src/lib/content/style-pages-es.ts`：`leten`→`leen`、`reptaestilos`→`marcas que reptan`、`grosor negrito`→`la variante negrita`、`usuario` 误用 4 处、`caería perfecta`、`La letra emo`→`El estilo emo`、`mayúsculas más bajas` 2 处、`de palo`→`de naipe`。
- `src/lib/content/platform-pages-es.ts`：`la culpa son`→`la culpa es de`、`Se aplica estricto`→`Se aplica de forma estricta`、`Los usuarios están limitados`→`Los nombres de usuario…`。
- `src/lib/content/platform-pages-more.ts`：`unas 12/16 caracteres`→`unos` 9 处、BGMI `16 caracteres aproximados`、`que recorta`、`recortados para probar`、Berry Avenue 标题补 `para`、`en ficha y letrero`、Fortnite `small caps`→`versalitas` 2 处。
- `src/lib/content/page-home.ts`：`Tres trabajos`→`Tres tareas`。
- `src/lib/content/page-gaming.ts`：`cualquier nick`→`cualquier nombre`、`Nicks más cortos`→`Nombres más cortos`。
- `src/lib/content/page-symbols-privacy.ts`：`música y vibra`→`música y ambiente`、`Los usuarios suelen ser más estrictos`→`Los nombres de usuario…`。
- `src/lib/content/page-about-contact.ts`：`mini`→`letras pequeñas`。
- `src/lib/content/page-terms.ts`：改为 `No está hecho por Instagram… ni Call of Duty, y no está vinculado a ellos`，修复句法断裂并贴近英文原意。
- `src/lib/content/page-blank-space.ts`：`1–5 quita`→`1–5 quitan`。
- `src/lib/__tests__/seo-ctr.test.ts`：同步 Berry Avenue 西语标题断言。

复验：

- `npm run content:export -- es`：42 页 / 1,123 单元，0 flagged；标题超长仍为 20、描述超长仍为 8（本批未动 SEO 长度）。
- `npm run typecheck`：通过。
- `npm test`：24 个文件 / 140 个测试全部通过。
- 浏览器：1280×900 与 390×844 视口下 `/es/berry-avenue-fonts/`、`/es/terms/` 无横向溢出，改动文案正常渲染。

仍未验证：西语母语可读性、真实平台/真机上的字符渲染、搜索表现。所有条目保持 `pending`，等待人工审核。

