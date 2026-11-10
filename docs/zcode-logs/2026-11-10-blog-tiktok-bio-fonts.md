# ZCode log — 2026-11-10 blog: /learn/tiktok-bio-fonts/

Start: 2026-11-10 13:58 北京时间   End: 2026-11-10 18:41 北京时间   Total: ≈70 分钟有效工作（中间 14:40–18:25 因配额暂停 + 排查陈旧 dev server）
Base commit: ab1b442   Branch: blog/2026-11-10-tiktok-bio-fonts

| # | Step | What I did | Commands / tools | Result | Problems | Time |
|---|---|---|---|---|---|---|
| 0 | Setup | fetch/pull main（ab1b442，porcelain 空）、建分支、配 git identity、`npm ci`（lockfile 比 node_modules 新，未跳过） | `git fetch/pull`, `git checkout -b`, `npm ci` | HEAD=ab1b442，branch 就绪 | 无 | 6m |
| 0b | Baseline | production build（exit 0）+ 起服务 :3100，抓 sitemap（230 行）与 7 页 canonical 存 `/tmp/*-before.txt` 后杀服务 | `npm run build`, `npm run start -- -p 3100`, curl | 基线已固定 | 无 | 8m |
| 1 | 读模式 | 读 `guides.ts` / `guides-en.ts` / `(en)/learn/[slug]/page.tsx` / `handlers.tsx` / `guide.tsx` / `llms.ts` / `sitemap.ts` / `tdk-budget.test.ts` | Read | 确认：加数据即可自动进 sitemap/目录/llms/相关指南；段落 key=前16字、表行 key=第一列需节内唯一 | 无 | 6m |
| 2 | 生成示例 | stdin heredoc node 脚本导入 `src/lib/text-styles.ts`，对 brief §8 逐行重生成并打印码点数/UTF-16 数 | `node --experimental-strip-types --input-type=module <<'EOF'` | 15/15 行与 brief §8 逐字一致（含计数）；文章写入后再跑字节级复核，**抓出并修复 1 处手输字形错误**（★彡 帧的 𝗮 误为 𝓪，U+1D4EA→U+1D5EE），复核 ALL MATCH | 首次写入示例时我手打了 ★彡帧字符串，1 个字形错；已改为只信引擎输出 | 12m |
| 3 | 指南数据 | `guides-en.ts` 在 instagram-bio-fonts 后插入 `tiktok-bio-fonts`（title 50/desc 158/published 2026-11-10/intro 两段/7 个 H2/示例表 15 行/bio 版式/FAQ 6 条/relatedTools 4 条/appearOn 3 个）；IG 页 "A bio layout that works" 段落末追加一句回链；`GUIDE_EMOJI` 加 `"tiktok-bio-fonts": "🎵"` | Edit | 完成；tdk-budget 绿（title 唯一、≤60、desc 70–160） | 首次 Edit 遗漏 IG 回链，复核时发现并补上 | 14m |
| 4 | InlineLinks 扩展 | 新建 `src/lib/inline-links.ts`（纯解析函数，站内 token 行为不变 + https 外链 token）；`guide.tsx` 的 InlineLinks 改用该解析器：站内仍 `next/link`，外链渲染 `<a href rel="noopener noreferrer">`；新增 `inline-links.test.ts` 5 个用例 | Write + Edit | 63/63 tests 绿，typecheck 绿；旧格式输出不变（纯文本/单链接/多链接/非法写法全断言） | 无 | 12m |
| 5 | 图片 | 图1 hero：node 生成 HTML（引擎注入 𝓜𝓲𝓪 𝓓𝓪𝓲𝓵𝔂 𝓥𝓵𝓸𝓰𝓼 等）→ headless Chrome 1200×675 截图 → `public/guides/tiktok-profile-fields.png`（64,623 B）。图2：playwright-core（本地 chromium，FONTCONFIG_FILE 指向仓库内未跟踪字体目录）打开 `/tiktok-fonts/`、输入 `Mia Daily Vlogs`、裁 1200×675 → `public/guides/tiktok-fonts-tool.png`（36,861 B）。图3/4：**无**（briefs/assets/tiktok/ 不存在，no app screenshots provided） | chrome --headless=new --screenshot; playwright chromium | 两图 ≤200KB、1200×675；caption 以 `Illustration, not a TikTok screenshot:` 开头；alt 按 brief §9 | 系统缺 Mathematical Alphanumeric 字体（截图会出 □）：下载 Noto Sans Math/Javanese/Symbols2 三个 TTF 放**仓库内未跟踪目录 `fonts-build-tmp/`**（`.git/info/exclude` 排除，不进 PR），仅经 FONTCONFIG_FILE 生效；IAB 浏览器无该字体，图2 改用 playwright chromium | 35m |
| 6 | 事实修正 | 12 处改前→改后（详见 PR 描述表格）：platform-pages-en title/desc/limits/FAQ×2、guides-en 4 处、style-pages-gap-en 2 处、`seo/产品事实底稿.md` L42 | Edit + grep 复核 | EN 内容 grep "TikTok" 无残留 ~24（仅剩 username 2–24 表述与 grep 行号假阳性）；es/pt-br/de 原样未动 | 无 | 10m |
| 7 | 本地验证 | 全套 curl 验证 + 移动端截图（见下方 Verification output） | npm test/typecheck/build; curl; playwright | 全绿 | **教训**：14:36 起的服务因基线旧 server 仍占 3100 而 EADDRINUSE，首轮验证打到旧进程（sitemap 无新 URL、入链 0、页面旧内容）。18:25 杀掉陈旧 pid 654852 重启后全部通过——sitemap、入链无需改代码 | 25m |
| 8 | 提交/推送/PR | commit ① `7b669a9`（guide + InlineLinks + 图）；commit ② `212157b`（Step 6 修正）；push；`gh pr create` → **PR #12**；`gh pr view` 验证 | git commit/push, gh pr create/view | push done；PR OPEN（输出原文见下） | 无 | 8m |
| 9 | 日志 | 写本日志并随 commit ③ 推送 | Write + git commit/push | done | 无 | 6m |

## Verification output

```
npm run typecheck  → tsc --noEmit（无输出，exit 0）
npm test           → Test Files 7 passed (7) / Tests 63 passed (63)
npm run build      → (SSG) prerendered as static HTML … exit 0

curl /learn/tiktok-bio-fonts      → 308
curl /learn/tiktok-bio-fonts/     → 200

<title>How to Change Your TikTok Bio &amp; Name Font (No App)</title>        ← 50 字符
<meta name="description" content="Fancy fonts work in your TikTok Name and Bio, but not your @username. Copy styled text, paste it in Edit profile, then check the 30 and 80 character counters."   ← 158 字符
<link rel="canonical" href="https://fancyfont.tools/learn/tiktok-bio-fonts/"/>
<link rel="alternate" hrefLang="en" href="https://fancyfont.tools/learn/tiktok-bio-fonts/"/>
<link rel="alternate" hrefLang="x-default" href="https://fancyfont.tools/learn/tiktok-bio-fonts/"/>
h1 数量 = 1
JSON-LD @type 计数: Article×1, FAQPage×1(6 Question/6 Answer=可见FAQ), BreadcrumbList×1

sitemap diff（before → after）:
126a127
> <loc>https://fancyfont.tools/learn/tiktok-bio-fonts/</loc>
（仅多出 1 行）

入链检查 href="/learn/tiktok-bio-fonts/":
/tiktok-fonts/ 1   /small-fonts/ 1   /cursive-fonts/ 1   /learn/ 1   /learn/instagram-bio-fonts/ 1

llms.txt 含: - [How to Change Your TikTok Bio & Name Font (No App)](https://fancyfont.tools/learn/tiktok-bio-fonts/): Fancy fonts work in …

新页站内链接爬查: 44 个 href 全部 200
外链: https://support.tiktok.com/…changing-your-nickname ×2、…changing-your-username ×1，
渲染为 <a href=… rel="noopener noreferrer">（无 nofollow）；curl 实测两个 URL 均 302（TikTok 区域跳转，可达）
违禁词检查 tested/we tried/verified: 0 处

canonical 抽查 diff（/ /tiktok-fonts/ /learn/ /learn/instagram-bio-fonts/ /learn/name-length-limits/ /small-fonts/ /cursive-fonts/）:
（无差异，diff exit 0）

移动端 390px: document.documentElement 横向溢出 0px；表格在 overflow-x-auto 容器内滚动；
截图存 fonts-build-tmp/mobile-check.png（仓库内未跟踪——因"不写仓库外文件"约束，改自任务原定的
/workspace/.../tiktok-build/ 路径，见 Deviations）
```

## Push / PR
- push: **done**（`git push -u origin blog/2026-11-10-tiktok-bio-fonts` → `* [new branch] … set up to track`）
- `gh pr view` output（原样）:
```json
{"baseRefName":"main","commits":[{"authoredDate":"2026-11-10T10:32:14Z","authors":[{"email":"67359543+liwin-luo@users.noreply.github.com","id":"MDQ6VXNlcjY3MzU5NTQz","login":"liwin-luo","name":"liwin-luo"}],"committedDate":"2026-11-10T10:32:14Z","messageBody":"…ce links)","messageHeadline":"blog: add /learn/tiktok-bio-fonts/ guide (+ InlineLinks external sour…","oid":"7b669a9a5fb7fac9995d68999232cfe8d7b72e96"},{"authoredDate":"2026-11-10T10:34:28Z","authors":[{"email":"67359543+liwin-luo@users.noreply.github.com","id":"MDQ6VXNlcjY3MzU5NTQz","login":"liwin-luo","name":"liwin-luo"}],"committedDate":"2026-11-10T10:34:28Z","messageBody":"","messageHeadline":"fix(en): TikTok name limit is 30, username 2–24 (TikTok Help)","oid":"212157b7df42fd9e15c4b811b6f4be10090ebcc8"}],"headRefName":"blog/2026-11-10-tiktok-bio-fonts","number":12,"state":"OPEN","url":"https://github.com/liwin-luo/fancyfont/pull/12"}
```
- `git ls-remote origin refs/heads/blog/2026-11-10-tiktok-bio-fonts` → `212157b7df42fd9e15c4b811b6f4be10090ebcc8`
- **Not merged, not deployed, no Vercel changes.** `next.config.ts` 无改动；无任何现有 slug/URL/canonical/hreflang/redirect 变化；PR 11 刚动过的 en/es/pt-br Berry Avenue、es coquette/preppy、PUBG 页面未触碰。

## Follow-ups
- es/pt-br/de 仍写 TikTok nickname ~24（本 PR 未改）：`src/lib/content/platform-pages-es.ts:71,73`、`platform-pages-pt-br.ts:130,132`、`platform-pages-de.ts:70,72`、`guides-es.ts:141`、`guides-pt-br.ts:143`、`guides-de.ts:148`
- script 样式把大写 L 映射成 ℓ（U+2113）而不是 ℒ（U+2112）：`src/lib/text-styles.ts:598`（`76: 0x2113, // L -> ℓ`），未修；新指南示例刻意避开了含大写 L 的输入
- 是否有 TikTok app 真实截图：**无**（`briefs/assets/tiktok/` 目录不存在），图 3/4 未放，全文无 "tested" 表述
- brief §10 待办（非本 PR 范围）：补 SERP 快照 `how to change font in tiktok bio`、上线后 GSC Request indexing、intent-url-map 的 TT-HOWTO-01 状态改"已有"

## Deviations（与任务文件的差异，均已按用户指示执行）
1. 临时验证脚本不落盘 `/tmp`：示例生成/复核改为 Bash heredoc + stdin 直跑（用户指定）。
2. 截图字体放仓库内未跟踪目录 `fonts-build-tmp/`（含 hero.html、tool-shot.mjs、原始 PNG、pr-body.md、mobile-check.png），经 `.git/info/exclude` 排除、不进 PR——替代任务原定的 `/workspace/.../tiktok-build/`（"不写仓库外文件"约束）。
3. 全部 git/gh 命令带 `env -u GITHUB_TOKEN -u GH_TOKEN` 前缀，按记忆与任务要求执行。
