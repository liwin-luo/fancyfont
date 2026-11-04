# UI 字典导出报告

- 生成时间：2026-11-04T08:04:33.088Z
- 源提交：`a51e32a`
- 源文件：`src/lib/ui-strings.ts`（唯一真源，导出文件只用于审核）
- 语言：English (`en`)、Español (`es`)、Português (BR) (`pt-br`)、简体中文 (`zh-cn`)、Bahasa Indonesia (`id`)

## 总量

- 条目：268（普通文本 223、函数模板 44、枚举 1）
- 翻译单元：268 × 5 = 1340

| 语言 | 条目 | 空值 | 占位符不一致 | 长度风险 (>1.5×) |
|---|---|---|---|---|
| English (`en`) | 268 | 0 | 0 | 0 |
| Español (`es`) | 268 | 0 | 0 | 30 |
| Português (BR) (`pt-br`) | 268 | 0 | 0 | 26 |
| 简体中文 (`zh-cn`) | 268 | 0 | 0 | 0 |
| Bahasa Indonesia (`id`) | 268 | 0 | 0 | 18 |

## 重复英文（同文案、不同 key，不能全局替换）

| 英文 | 出现的 key |
|---|---|
| Gothic | styleNames.fraktur, styleCategoryNames.gothic, vibeNames.gothic |
| Clear | common.clear, symbols.batchClear |
| Recent | common.recent, symbols.recent |
| Decoration | common.wrapLabel, gaming.decoration |
| Brackets | common.wrapBrackets, symbolCats.brackets |
| Copy {label} | symbols.copySymbol, symbols.copyCombo |
| Copy all | symbols.copyAll, gaming.copyAllSaved |
| Upside Down | styleNames.upsideDown, styleCategoryNames.flipped |

## 长度风险（任一译文超过英文 1.5 倍）

| key | en | es | pt-br | zh-cn | id | 超限语言 |
|---|---|---|---|---|---|---|
| `sections.faq` | 3 | 20 | 20 | 4 | 3 | es, pt-br |
| `gaming.inputPreview` | 5 | 7 | 7 | 4 | 17 | id |
| `symbolCats.math` | 4 | 11 | 10 | 2 | 10 | es, pt-br, id |
| `tools.about` | 5 | 13 | 5 | 4 | 7 | es |
| `platformPreview.posts` | 5 | 13 | 11 | 2 | 9 | es, pt-br, id |
| `platformPreview.next` | 4 | 9 | 7 | 3 | 10 | es, pt-br, id |
| `tools.lookGenerators` | 5 | 11 | 7 | 2 | 8 | es, id |
| `common.recent` | 6 | 9 | 8 | 4 | 12 | id |
| `common.wrapStar` | 4 | 8 | 7 | 2 | 7 | es, pt-br, id |
| `symbols.recent` | 6 | 9 | 8 | 4 | 12 | id |
| `gaming.myCombos` | 9 | 17 | 18 | 4 | 11 | es, pt-br |
| `crazyLevelNames.wild` | 4 | 7 | 8 | 2 | 4 | es, pt-br |
| `sections.related` | 13 | 25 | 24 | 4 | 12 | es, pt-br |
| `gaming.saveCombo` | 10 | 19 | 17 | 4 | 16 | es, pt-br, id |
| `common.copiedToClipboard` | 19 | 23 | 36 | 7 | 22 | pt-br |
| `gaming.loadMore` | 9 | 10 | 13 | 4 | 17 | id |
| `common.pasteAnywhere` | 8 | 15 | 14 | 2 | 12 | es, pt-br |
| `gaming.platformHeading` | 8 | 10 | 10 | 4 | 15 | id |
| `common.previewSize` | 12 | 22 | 17 | 4 | 16 | es |
| `styleNames.upsideDown` | 11 | 8 | 20 | 3 | 8 | pt-br |
| `styleCategoryNames.flipped` | 11 | 8 | 20 | 2 | 8 | pt-br |
| `common.reset` | 5 | 9 | 9 | 2 | 5 | es, pt-br |
| `symbolCats.stars` | 5 | 9 | 8 | 2 | 7 | es, pt-br |
| `nav.home` | 4 | 6 | 6 | 2 | 7 | id |
| `common.savedAsPng` | 12 | 19 | 16 | 9 | 21 | es, id |
| `common.wrapNone` | 4 | 7 | 7 | 1 | 5 | es, pt-br |
| `styleNames.bold` | 4 | 7 | 7 | 2 | 5 | es, pt-br |
| `vibeNames.dark` | 4 | 6 | 7 | 2 | 5 | pt-br |
| `common.shareMore` | 18 | 27 | 31 | 6 | 20 | pt-br |
| `styleNames.slash` | 7 | 9 | 9 | 4 | 12 | id |
| `platformPreview.preview` | 7 | 12 | 6 | 2 | 9 | es |
| `tools.terms` | 12 | 15 | 13 | 4 | 20 | id |
| `tools.lastUpdated` | 12 | 20 | 18 | 4 | 19 | es, id |
| `common.all` | 3 | 5 | 5 | 2 | 5 | es, pt-br, id |
| `tools.privacy` | 14 | 22 | 23 | 4 | 17 | es, pt-br |
| `symbolCats.faces` | 5 | 7 | 8 | 2 | 5 | pt-br |
| `platformPreview.likes` | 5 | 8 | 8 | 1 | 4 | es, pt-br |
| `bio.drafts` | 5 | 8 | 8 | 2 | 4 | es, pt-br |
| `sections.exploreAll` | 29 | 46 | 44 | 19 | 31 | es, pt-br |
| `vibeNames.minimal` | 7 | 11 | 11 | 2 | 9 | es, pt-br |
| `tools.blank` | 11 | 17 | 16 | 4 | 12 | es |
| `gaming.savedNames` | 11 | 17 | 12 | 6 | 14 | es |
| `gaming.comboSaved` | 26 | 40 | 34 | 9 | 36 | es |
| `tools.gaming` | 21 | 32 | 27 | 7 | 19 | es |
| `common.compareAdd` | 21 | 27 | 30 | 13 | 32 | id |

## 字典外硬编码（aria-label / placeholder / title）

| 文件 | 行 | 属性 | 值 |
|---|---|---|---|
| `src/components/footer.tsx` | 25 | aria-label | Tools |
| `src/components/footer.tsx` | 61 | aria-label | Style generators |
| `src/components/footer.tsx` | 83 | aria-label | Site |
| `src/components/header.tsx` | 79 | aria-label | Main |

## 说明

- 所有非英文条目的 `review` 均为 `pending`，未经人工审核不得标记为 `approved`。
- `template` 条目由函数调用还原，占位符形如 `{name}`、`{count}`；翻译时必须保留。
- `enum` 条目按固定取值导出，不是可自由翻译的句子。
- 页面内容与 SEO 文案不在本字典范围内（第二阶段单独导出）。
