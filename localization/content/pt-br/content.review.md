# 葡语内容审校 · 第一批（Português BR / `pt-br`）

- 审校日期：2026-11-04
- 源提交：`6769c08`（西语内容批次之后）
- 范围：42 个页面（20 风格页、12 平台页、10 静态页），共 1,109 个审查单元
- 方法：`npm run content:export -- pt-br` 自动检测 + 逐页人工对照英文原文与 `seo/产品事实底稿.md`
- 状态：全部条目仍为 `pending`；本文件只列问题与建议，未改 `src`

## 一、自动检测结果

| 检测项 | 结果 |
|---|---|
| 空翻译 | 0 |
| 与英文完全相同 | 0 |
| 英文残留 | 0 |
| 数字/事实不一致 | 3（全部为 COD FAQ 排序造成的误报，见下） |
| 标题长度异常 | 21（仅截断风险，不是错误） |
| 描述长度异常 | 7（仅截断风险，不是错误） |
| FAQ 数量差异 | 1（`/coquette-font-generator/`：英文 3、葡语 4） |
| 重复标题 / 描述 | 0 / 0 |

误报说明：COD 页葡语 FAQ 的顺序是（名字长度、clan tag、官方关系），英文是（clan tag、名字长度、官方关系）；三条答案分别对应自己的问题，数字没有错。自动脚本按位置配对才报出 3 条“数字不一致”。

coquette 页多出的一条 FAQ 是“O que é uma letra coquette?”，属于有意补充，与西语页做法一致，不是漏删。

工具问题：`content.report.md` 表头把目标语言写成了 `en→es`，脚本的列名是硬编码，仅影响报告可读性，不影响导出的内容。

原始数据：`localization/content/pt-br/content.json`、`content.csv`、`content.report.md`。

## 二、P0 · 确定性错误（语法、错词、语义)

这些不涉及术语方向，建议直接修。

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 1 | `src/lib/content/style-pages-pt-br.ts:240` | `Posso risar emoji?` — `risar` 不是葡语动词 | `Posso riscar emoji?` |
| 2 | `src/lib/content/style-pages-pt-br.ts:173` | `Os estilos bolha e circulado cobrem — só o entre parênteses pula o zero.` 句子断裂，缺宾语，`o entre parênteses` 缺名词 | `Os estilos bolha e circulado também cobrem o zero — só o estilo entre parênteses o salta por completo.` |
| 3 | `src/lib/content/style-pages-pt-br.ts:532` | 标题 `laço na bios` — `bios` 是复数，冠词不匹配 | `laço nas bios` |
| 4 | `src/lib/content/style-pages-pt-br.ts:598` | `O usuário do Roblox continua letras, dígitos e um sublinhado.` 缺动词，语义不成立 | `O nome de usuário do Roblox aceita só letras, dígitos e um sublinhado.` |
| 5 | `src/lib/content/style-pages-pt-br.ts:369,551,632` | 把 username 字段译成“人”：`Usuários que só aceitam letras…`、`Esses usuários só aceitam…` | `Nomes de usuário que só aceitam…`、`Esses nomes de usuário só aceitam…` |
| 6 | `src/lib/content/platform-pages-pt-br.ts:202` | `Os usuários ficam limitados a letras, números e um underline.` | `Os nomes de usuário ficam limitados a letras, números e um sublinhado.` |
| 7 | `src/lib/content/page-symbols-privacy.ts:159` | `Usuários costumam ser mais restritos` | `Nomes de usuário costumam ser mais restritos` |
| 8 | `src/lib/content/page-blank-space.ts:212` | `1–5 remove esses espaços e usa o branco` — 主语是 1–5（复数） | `1–5 removem esses espaços e usam o branco` |

## 三、P1 · 不自然或术语混用

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 1 | `style-pages-pt-br.ts:37,381`；`platform-pages-pt-br.ts:38,89,140,186,202`；`page-gaming.ts:216`；`page-symbols-privacy.ts:159` | `underline` 直接混入葡语句子，UI 字典用的是 `sublinhado` | 全部改为 `sublinhado`（复数 `sublinhados`） |
| 2 | `page-home.ts:257,288`；`platform-pages-pt-br.ts:14`；`style-pages-pt-br.ts:37` | `nome visível` 是西语 `nombre visible` 的直译；葡语平台界面和本页其他位置用 `nome de exibição` | 4 处统一为 `nome de exibição` |
| 3 | `platform-pages-pt-br.ts:186` | `Aplicado à risca` 主语悬空 | `Aplicado com rigor` 或 `Regra aplicada à risca` |
| 4 | `style-pages-pt-br.ts:33` | `Use a cursiva negrito` | `Use a cursiva em negrito` |
| 5 | `style-pages-pt-br.ts:187` | `minúsculas-maiúsculas` 是生造复合词 | `maiúsculas em miniatura`（与本页 `howItWorks` 一致） |
| 6 | `style-pages-pt-br.ts:189` | `o estilo continua lendo natural` | `o estilo continua legível` 或 `continua parecendo natural` |
| 7 | `style-pages-pt-br.ts:429` | `Letra emo é essa mistura.` 主语不当 | `O estilo emo é essa mistura.` |
| 8 | `style-pages-pt-br.ts:536` | `O fofo deste site são as letras bolha` | `O estilo fofo deste site são as letras bolha` |
| 9 | `style-pages-pt-br.ts:580,606` | `maiúsculas mais baixas` 直译 `shorter capitals` | `maiúsculas de menor altura` |
| 10 | `style-pages-pt-br.ts:475` | `não em usuários limitados a letras simples`（字段被说成人） | `não em nomes de usuário limitados a letras simples` |
| 11 | `platform-pages-more.ts:837` | `Conte com os mesmos 16 caracteres aproximados.` | `Conte com uns 16 caracteres, como no PUBG Mobile.` |
| 12 | `platform-pages-more.ts:952,954,956,982,990` | `clan tag` 与正文 `tag do clã` 混用；`cod nome` 不是葡语搭配 | 标题/描述改 `tag do clã`；`cod nome` 改 `nome no COD`（`nick COD Mobile` 同改 `nome COD Mobile`） |
| 13 | `platform-pages-more.ts:1048` | `encurtados para testar` 丢失“短到能放进字段”的意思 | `encurtados o bastante para caber` |
| 14 | `platform-pages-more.ts:1090` | 标题 `~20 chars` 英文缩写残留 | `~20 caracteres` |
| 15 | `platform-pages-more.ts:1126` | `ver que ela desenha no seu aparelho` | `ver como ela aparece no seu aparelho` |
| 16 | `platform-pages-more.ts:1176,1196` | `small caps` 直接混入正文 | `versaletes`（风格页 h1 的 `small caps` 括注可保留，用于搜索词） |
| 17 | `page-about-contact.ts:101` | `cursiva, gótica, bolha, mini, glitch` — `mini` 与风格页 `letras pequenas/tiny` 不一致 | `letras pequenas` |
| 18 | `page-symbols-privacy.ts:144` | 分类名 `música e vibe` | `música e ambiente`（实际分类 `Music & Vibes`） |
| 19 | `page-terms.ts:94` | `Não é feito por, nem tem ligação com, Instagram…` 插入语断裂 | `Não foi feito por Instagram, TikTok, Discord, Facebook, YouTube, Roblox, PUBG, Free Fire ou Call of Duty, e não tem ligação com eles.` |
| 20 | `page-fancy.ts:184` | `quase todo lugar` | `quase qualquer lugar` |

## 四、P2 · 需要决策，不宜自动改

| # | 位置 | 问题 | 说明 |
|---|---|---|---|
| 1 | 全站 | `usuário` 到底指“用户名”还是“用户” | 巴西葡语口语里 `usuário` 指 handle 很常见（UI 字典也这么用）。建议只修“人做主语”的 P0 条目，字段名保留 `usuário`，不搞全站替换 |
| 2 | 风格页标题 | 20 个标题统一 `— Copiar e Colar …` 大写句式 | 有搜索词堆叠感，是否统一改写属于 SEO 决策，和西语批次保持一致，暂不动 |
| 3 | `style-pages-pt-br.ts:199` | `renderiza em quase todo aparelho e é aceito em quase todo lugar` | 语法可懂但不够自然；可与 `page-fancy.ts:184` 一并改为 `quase qualquer aparelho/lugar` |
| 4 | `style-pages-pt-br.ts:183` | `Gerador de versalete (small caps)` | 括注保留英文可覆盖搜索词，建议不动 |
| 5 | `platform-pages-more.ts:1142` | `dentro do 3–20 anunciado` | 英文原文 `inside the announced 3–20` 本身生硬；葡语可改 `dentro dos 3–20 informados pela Roblox`，但属于跨语言改法，最好和英文一起定 |
| 6 | `platform-pages-more.ts:1180` | `O ID da sua conta Epic é um número` | Epic 账户 ID 实际是长串十六进制，英文原文即如此；需产品事实确认后再改，不能只改葡语 |
| 7 | `platform-pages-pt-br.ts:50` | `igual a milhões de perfis` | 英文原文同样说法，无数据来源；删除或弱化属于跨语言内容决策 |
| 8 | `style-pages-pt-br.ts:271` | `um quadrinho de 2004`（zalgo 起源） | 英文原文如此，来源未核实；不单独改葡语 |
| 9 | 全站 | `script`、`fraktur`、`aesthetic` 等借词 | 与 UI 字典及风格页导航命名一致，保留 |

## 五、SEO 标题与描述

不是排名错误，只是 SERP 截断风险。明细见 `content.report.md`。

- 标题超过 60 字符：21 个，集中在 20 个风格页和首页、`/fancy-text-generator/`。风格页标题普遍是 `Gerador de … — Copiar e Colar … | FancyFont` 结构。
- 描述超过 160 字符：7 个——`/chicano-font-generator/`（176）、`/berry-avenue-fonts/`（163）、`/`（171）、`/gaming-name-generator/`（164）、`/blank-space/`（193）、`/about/`（164）、`/contact/`（162）。
- 本轮建议只修 P1 里的 `~20 chars` 和 `laço na bios`，其余长度问题等 SEO 批次统一决定，避免和西语批次的处理不一致。

## 六、产品事实与跨语言问题

| # | 位置 | 问题 |
|---|---|---|
| 1 | `page-symbols-privacy.ts:403` | 隐私页写“没有 Google Analytics、Clarity 或事件跟踪”，但 `seo/产品事实底稿.md` 写的是“配置了 GA4 与 Clarity ID 时才加载”。英文、西语、葡语、中文、印尼语五语一致，属于英文原文层面的表述冲突，需要产品确认，不是葡语翻译错误 |
| 2 | `page-symbols-privacy.ts:380` | 描述说“seu texto nunca chega aos nossos servidores”，与站内“浏览器内转换”一致，可保留 |
| 3 | `platform-pages-more.ts:1180` | Epic ID 的说法同上，需事实确认 |
| 4 | `platform-pages-more.ts:1142` | Roblox `3–20` 的 `anunciado` 措辞，与英文一致但不精确 |

## 七、FAQ 数量差异

`/coquette-font-generator/`：英文 3 条、葡语 4 条。多出的“O que é uma letra coquette?”是有效补充，建议保留，不改回 3 条。

## 八、建议处理顺序

1. **第一批（建议本轮做）**：P0 全部 8 组（实际涉及 12 个字符串位置）+ P1 第 1–20 条。
2. **第二批（需确认）**：P2 第 1–3 条中与术语统一相关的部分；SEO 标题长度与描述长度统一改写。
3. **跨语言批次**：P2 第 5–8 条和第六节的隐私/Epic ID 事实，等英文原文一起定，不在葡语单语批次里改。

执行后需要：重新导出 `localization/content/pt-br/`、跑 `content.report.md` 对比、`npm run typecheck`、`npm test`，并用浏览器核对受影响页面（风格页 small caps / coquette / preppy / COD / Berry Avenue / 首页）。

## 九、未验证项

- 没有葡语母语者审校；以上判断基于语法、术语一致性和英文原文对照。
- 没有做关键词搜索量、难度或 SERP 实测；本文件不包含任何编造的搜索数据。
- 没有逐台设备验证 Unicode 字符显示、各平台字段上限或过滤规则；相关内容沿用英文原文的“近似/需实测”表述。
- P2 中列为“跨语言”的条目只在葡语中定位，修复会影响其他语言，未在本轮处理。

## 十、应用记录（2026-11-04）

按用户确认的 **P0 + P1 + P2 可自动项** 执行，共改 45 个内容字符串（10 个内容文件），另同步 2 处测试期望：

- P0 全部 8 组：`riscar`、bolha/circulado 断句、`laço nas bios`、Roblox 用户名动词、三处“用户名字段当人”、Roblox 平台页、symbols 页、blank-space 主谓一致。
- P1 全部 20 条：`underline`→`sublinhado`（9 处）、`nome visível`→`nome de exibição`（4 处）、`Aplicado com rigor`、`cursiva em negrito`、`maiúsculas em miniatura`、`continua legível`、`O estilo emo`、`O estilo fofo`、`maiúsculas de menor altura`（2 处）、`nomes de usuário limitados`、PUBG/BGMI 16 字符、`tag do clã` / `nome no COD`、`encurtados o bastante para caber`、`~20 caracteres`、`como ela aparece no seu aparelho`、`versaletes`（2 处）、`letras pequenas`、`música e ambiente`、条款页断句、`quase qualquer lugar`。
- P2 可自动项：`quase qualquer aparelho/lugar`、`dentro dos 3–20 informados pela Roblox`、COD/Coquette/Berry 的本地标题措辞。
- 未改：21 个由共享模板 `serp-title.ts` 生成的超过 60 字符的标题（改动会让葡语与其他四语标题结构不一致，留待全局 SEO 决策）；隐私页 GA/Clarity 冲突、Epic ID“是一个数字”、Instagram“数百万资料”、zalgo 2004 等跨语言事实条目。

验证结果：

- `npm run content:export -- pt-br`：42 页 / 1,109 单元，3 条 COD 误报、21 个标题长度、7 个描述长度，与修改前相同（没有新增空翻译、英文残留或重复）。
- `npm run typecheck`：通过，无输出。
- `npm test`：24 个测试文件、140 个测试全部通过。
- 浏览器（dev server，pt-BR）：首页、small caps、coquette、preppy、COD、Berry Avenue、blank-space、symbols、terms、gaming、instagram、strikethrough 共 12 个页面均返回 200，且渲染出修改后的字符串；coquette 移动端与 COD 桌面端截图正常，coquette 标题渲染为 `laço nas bios`，Berry 标题渲染为 `~20 caracteres`。
- 已知非本次引入：coquette 移动端文档 `scrollWidth` 为 498（英文 447、西语 493），来自示例长结果行的横向滚动，三种语言都如此；未在本轮处理。
- 仍未经葡语母语者复核；Unicode 显示、平台字段上限和搜索数据均未实测。
