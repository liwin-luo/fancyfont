# 全站技术 SEO 审核报告（2026-11-08）

> 范围：sitemap 全部 **223 个 URL** 逐页抓取 + 基础设施探测
> 工具：`scripts/seo-audit.mjs`（可复跑：`node scripts/seo-audit.mjs`）
> 结果：**站点本体全绿，1 个基础设施级发现（www 无 DNS 记录）**

## 一、逐页检查矩阵（223/223 通过 ✓）

| 检查项 | 结果 | 说明 |
|---|---|---|
| HTTP 状态 | ✓ 223 页全 200 | 无软 404、无意外重定向 |
| canonical | ✓ 每页自引用、无错链 | 含 en-only 页的 self-canonical |
| noindex | ✓ 零泄漏 | 无 robots noindex meta |
| title ≤60 / desc ≤160 | ✓（实体解码后） | 首测 4 条"超限"系 HTML 实体编码假阳性（`&`→`&amp;` +4、`'`→`&#x27;` +5），源码门禁（tdk-budget.test）才是准确口径 |
| hreflang | ✓ 簇完整 | 每页 alternate 目标全部在 sitemap 内（零 404 目标）、含 self、含 x-default；部分语种簇（如 free-fire 仅 es/pt）是设计使然——指向 404 的兄弟页才违反 hreflang 规范 |
| x-default | ✓ 指向 en 版 | |
| `<html lang>` | ✓ 每页正确 | es/pt-br/zh/de/en 各自正确 |
| `<h1>` 唯一性 | ✓ 每页恰好 1 个 | |
| OG / Twitter 卡 | ✓ og:title + og:image 全覆盖 | |
| JSON-LD | ✓ 全部可解析 | WebApplication / FAQPage / HowTo / BreadcrumbList / Article |
| 图片 alt | ✓ 0 缺失 | |
| 混合内容 | ✓ 无 http:// 引用 | |
| 响应时间 | ✓ 0 页超 3s | 全站 10s 内抓完（并发 10）|

## 二、基础设施探测

| 探测 | 结果 | 说明 |
|---|---|---|
| robots.txt | ✓ | 允许所有爬虫 + AI 爬虫白名单（GPTBot/ClaudeBot/PerplexityBot 等），声明 Sitemap |
| sitemap.xml | ✓ | 223 URL，全在 canonical 域上 |
| http→https | ✓ 308 | |
| 无尾斜杠→尾斜杠 | ✓ 308 | 全站统一 /path/ 形态 |
| 404 探测 | ✓ 真 404 状态码 | 无软 404 |
| 旧站 219 重定向 | ✓ 抽样通过 | /zh-cn/→/zh/、/id/→/、改名页（cursive-text-generator→cursive-fonts 等）全部 308 到正确新址 |
| **www.fancyfont.tools** | ✗ **连接失败** | DNS 无 www 记录（dig 无解析）|

## 三、需要你处理的一件事

**补 www 记录**：部分用户/外链会输入 www.fancyfont.tools，现在直接连不上。
修法（DNS 服务商处，约 2 分钟 + 生效等待）：
1. 加记录：`www` → CNAME → `cname.vercel-dns.com`
2. Vercel 项目 Settings → Domains 里把 `www.fancyfont.tools` 加为域名跳转到 apex（Vercel 自动管 308）
3. 生效后重跑 `node scripts/seo-audit.mjs` 应显示 ALL CLEAN

## 四、审计方法学备注

- `hrefLang` 大写渲染：Next 输出 `hrefLang="en"`——HTML 属性名大小写不敏感，Google 解析无碍（F-16 事故的正确结论：那是抓取工具的大小写敏感 bug，不是站点问题）。审计脚本已做不敏感匹配。
- 长度检查以**源码门禁**（`tdk-budget.test.ts`，读转义前的字符串）为准；线上抓取必须先实体解码再计数。
- hreflang 正确的不变量是「**目标可达**」而非「数量≥5」——部分语种簇是产品多语策略的正确实现。

## 五、遗留监控项（非本轮问题）

- PSI 移动端：公开 API 限流未测成，建议 pagespeed.web.dev 手测首页（180 卡片页）
- GSC：重提 sitemap（223 URL）后观察 219 旧站重定向的收录迁移
- 2-3 周后用 GSC 数据交叉验证 KP 的「stylish 词族 -90%」判断
