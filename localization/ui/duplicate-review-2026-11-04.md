# 重复英文审校（2026-11-04）

- 来源：`localization/ui/ui-strings.json` / `ui-strings.csv`
- 口径：英文相同、key 不同
- 数量：10 组（8 组普通文本 + 2 组函数模板）
- 结论：**3 组已于 2026-11-04 处理**（2 组合并、1 处术语统一）；处理后剩余 8 组保留

## 逐组结论

| # | 英文 | keys | 结论 | 处理 |
|---|---|---|---|---|
| 1 | Gothic | `styleNames.fraktur` / `styleCategoryNames.gothic` / `vibeNames.gothic` | 保留 3 个 key | ES/PT 的 `Gótica`（单数风格）、`Góticas`（复数分类）、`Gótico`（阳性 vibe）是语法需要；ZH/ID 一致 |
| 2 | Your text | `common.yourText` / `common.stylePageInputLabel` | **已合并** | `stylePageInputLabel` 已删除；`single-style-tool.tsx` 改用 `common.yourText` |
| 3 | Clear | `common.clear` / `symbols.batchClear` | 保留 2 个 key | 一个清空输入，一个清空符号多选托盘，作用域不同；译文相同可接受 |
| 4 | Recent | `common.recent` / `symbols.recent` | 保留 2 个 key | 一个是筛选 chip，一个是区块标题；译文相同可接受 |
| 5 | Decoration | `common.wrapLabel` / `gaming.decoration` | **已统一印尼语** | `common.wrapLabel.id` 已由 `Hiasan` 改为 `Dekorasi`，与 gaming 页一致；待母语复核 |
| 6 | Brackets | `common.wrapBrackets` / `symbolCats.brackets` | 保留 2 个 key | 一个是装饰包装类型，一个是符号分类；译文一致 |
| 7 | Copy {label} | `symbols.copySymbol` / `symbols.copyCombo` | 保留（可选合并） | 都是 aria-label，译文一致；数据域不同，保留更稳 |
| 8 | Copy all | `symbols.copyAll` / `gaming.copyAllSaved` | 保留 2 个 key | ES `todo/todos`、PT `tudo/todos` 按对象变位，当前差异是正确的 |
| 9 | Remove {name} from saved names | `gaming.removeSaved` / `gaming.removeName` | **已合并** | 统一用 `removeSaved`；`removeName` 已从接口和 5 个 locale 删除 |
| 10 | Upside Down | `styleNames.upsideDown` / `styleCategoryNames.flipped` | 保留 2 个 key | 风格名 vs 分类名；ZH `颠倒字` vs `颠倒` 是粒度差异，不是错误 |

## 已完成的 3 组

### 1. 合并 `common.stylePageInputLabel` → `common.yourText`

- 现状：5 语完全一致。
- 使用位置：`src/components/single-style-tool.tsx` 用 `stylePageInputLabel`，其余文字工具用 `yourText`。
- 动作：改 `single-style-tool.tsx` 引用；从 `UiStrings` 接口和 5 个 locale 对象删除 `stylePageInputLabel`。
- 影响：无视觉变化，减少一个漂移点。

### 2. 统一 `common.wrapLabel` 的印尼语

- 现状：`common.wrapLabel.id = "Hiasan"`，`gaming.decoration.id = "Dekorasi"`。
- 判断：同一个“装饰”概念在同一产品里出现两个词，属于术语不一致。
- 建议：两边统一为 `Dekorasi`（更常见的借词，且与 gaming 页一致）；需印尼语母语复核。
- 影响：fancy 工具装饰选择器的标签文案变化，需 360px 下复查换行。

### 3. 合并 `gaming.removeName` → `gaming.removeSaved`

- 现状：两个 key 都是 `Remove {name} from saved names`，5 语完全一致。
- 使用位置：`gaming-name-tool.tsx` 同时使用 `removeSaved`（已保存 chip 的 aria-label）和 `removeName`（昵称按钮的移除标签）。
- 动作：统一用 `removeSaved`；从接口和 5 个 locale 对象删除 `removeName`。
- 影响：无视觉变化。

## 保留但不改的组

- **Gothic**：英文相同但词性/数不同，属于“同英文、不同上下文”的正确处理；不建议全局替换。
- **Clear / Recent / Brackets**：作用域或 UI 角色不同，key 分开更利于以后单独调整；当前译文相同不算缺陷。
- **Copy {label}**：两个 aria-label 的域不同（符号 vs 组合），保留分开；若以后要做统一措辞再合并。
- **Copy all**：ES/PT 的变位跟随对象（todo=一切，todos=若干个），当前是正确的；只有确认 symbols 按钮确实指“符号”时，才考虑改成 `Copiar todos` / `Copiar todos`，需母语判断。
- **Upside Down**：中文分类用 `颠倒`、风格名用 `颠倒字`，与其它分类的命名粒度一致，不是漏翻或错误。

## 下一步

1. 你确认上述 3 个动作后，我改 `ui-strings.ts` 并重新导出字典。
2. 改完跑 typecheck、单测、构建；涉及按钮文案的 `Dekorasi` 用浏览器在 360px 复查。
3. 其余 7 组在报告中保留 `pending`，等母语审核再决定是否 `approved`。
