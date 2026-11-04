# 单功能工具页统一模板设计（tool-page-spec）

- 阶段：第二阶段 Day 4–7｜依据：规范 §3 + audit 结论
- 核心结论：**统一模板已经存在**（`StylePageDef` / `PlatformPageDef` 配置驱动 + 三个服务端模板组件），规范 §3.3 的 `ToolPageConfig` 与现有 Def 接口高度同构。本轮**不新造配置层**，只做缺口补齐与配置微扩。

---

## 1. 现状模板结构（审计证实）

### 风格页（19 页，`style-page-template.tsx`）

```text
H1 + intro（Look 页加装饰说明）
→ 复制示例区（静态示例）
→ SingleStyleTool（输入→该页风格结果→复制/PNG/分享）
→ How to use → How it works → Where it shines（=Features）
→ Examples → On platforms（=Compatibility，含 style-risk 诚实标注）
→ Related Tools → （Look 页追加 safety 区）→ FAQ → 打开完整生成器 CTA
```

### 平台页（12 页，`platform-page-template.tsx`）

```text
H1 + intro
→ 主工具（按 toolMode: text / gaming / bio 三态）+ 平台预览卡两栏常驻（=Popular Presets + Compatibility）
→ How to use → Guidance（平台字段说明）→ Related Tools
→ Related guides（仅 en，appearOn 回链）
→ 专属追加区（berry / cod / roblox extras）→ FAQ（含专属 FAQ）
```

## 2. 模块开关矩阵（规范 §3.2 三类工具）

| 模块（规范 §3.1） | 文字转换页 | 游戏昵称页 | 符号页 | 现状 |
|---|---|---|---|---|
| Breadcrumb | 暂缓 | 暂缓 | 暂缓 | 全站无面包屑；分类 hub URL 不存在（IA §1），面包屑只能指回首页锚点，SEO 价值存疑。**列 90 天后候选**，避免伪层级 |
| Hero(H1/Description/Intro) | ✅ | ✅ | ✅ | 已有 |
| Main Tool | ✅ | ✅ | ✅ | 已有 |
| Popular Presets | ✅（Look 页装饰组合） | ✅（vibe 风格 + 自定义组合） | ✅（13 组合） | 已有 |
| Examples | ✅ | ✅（示例昵称） | ✅ | 已有 |
| How To Use / Features | ✅ | ✅ | ✅ | 已有 |
| Compatibility Information | ✅（coverage + style-risk） | ✅（字符分析 + 平台预览卡，`published_approx` 诚实标注） | — | 已有 |
| Related Tools | ✅ | ✅ | ✅ | 已有（related 注册表驱动） |
| FAQ | ✅ | ✅ | ✅ | 已有（FAQPage JSON-LD 镜像可见内容） |

**结论：模板结构无需重构，规范 §3.1 的模块在三类页面上已按工具类型取舍呈现。**

## 3. 配置层微扩（代替规范 §3.3 的新接口）

在现有 Def 上增加可选字段，均为展示开关，不改路由与 URL：

```ts
// StylePageDef / PlatformPageDef 追加（全部可选，缺省=现状行为）
modules?: {
  compare?: boolean;   // 文字转换页：样式对比入口（见 §4）
};
```

禁止：为对齐规范示例而把 `StylePageCopy` 五语言手写结构改成通用 `content` 字段——现有 per-locale 类型强制（缺译即构建失败）是资产，不是负债。

## 4. 功能缺口清单（规范 §5–7 对照 audit 后的真实缺口，第四阶段执行）

| 缺口 | 页面 | 规格 |
|---|---|---|
| 样式对比（§5.3C） | /fancy-text-generator/ | 勾选 ≤4 个风格 → 同一输入并排展示 → 逐个复制；移动端纵向堆叠不横向溢出；纯前端，无新依赖 |
| 复制全部风格（§5.3D） | /fancy-text-generator/ | 「Copy all styles」按钮：按当前输入复制全部 30 风格（空结果自动过滤），复制前弹出行数确认，失败给手动选择回退（复用 copy.ts 语义） |
| 符号码点展示（§7E） | /symbols/ | 符号长按/悬停 tooltip：Unicode 名称（已有 label）+ `U+` 码点（`formatCodePoint` 已有实现，复用） |
| vibe 风格扩充（§6A，可选） | gaming | 新增 gothic / aesthetic 两个风格预设（cool/dark/cute/pro/minimal 已有）；每档必须对应真实装饰组合，不改名称不配内容 |

规范 §5/§6/§7 其余条目（收藏、最近、批量、长度三口径、平台配置模型等）audit 已证实存在——**不重复开发**，只纳入回归验收。

## 5. 页面独立价值（规范 §3.4 落地）

- 每页五问由 per-locale 手写文案承载（intro / where-shines / FAQ），audit 证实无「仅换标题」页面。
- 批量生产禁令（§3.4）写为代码层约束：`stylePages`/`platformPages` 注册表新增条目时**必须**同时提供 5 语言 copy（`pageCopy()` 缺失即 throw，现有机制保留）。

## 6. 验收标准（规范 §3.5 逐项 → 执行方式）

| 项 | 通过标准 | 执行 |
|---|---|---|
| 页面模板 | 三类页面模块矩阵如 §2 | 人工核对 |
| 工具功能 | 原有功能正常 | 135 个现有单测全绿 + 手测 |
| H1/Title/Description | 每页唯一且本地化 | 新增单测：遍历 41×5 断言 title 非空且互不相同（seo-ctr.test 扩展） |
| FAQ | 与工具相关、镜像可见 | 现有机制 + 抽查 |
| 内链 | related 全部可达 | 单测遍历 related 注册表断言 slug 存在 |
| 移动端 | 主操作可完成 | 第五阶段真机抽查 |
| 404 | 不存在 slug 正确 404 | 现有 notFound() 行为 + 抽查 |
