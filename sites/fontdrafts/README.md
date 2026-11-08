# FancyFont

花式文字生成器站点:英文/数字 → 30 种带样式 Unicode 字符,昵称装饰 → 27 种环绕框。
Next.js 15 App Router 纯静态,**四语言**:英文(主,根路径)/ 简体中文 `/zh/` / 西班牙语 `/es/` / 巴西葡语 `/pt-br/`,平台页按国家组合(en: IG/TikTok/Discord/WhatsApp/Roblox/PUBG;es: +Free Fire;pt-br: IG/WhatsApp/TikTok/Roblox/Free Fire;zh: 抖音/小红书/微博/微信/QQ/B站)。

> **品牌与域名已定**:FancyFont · https://fancyfont.tools(本站为 fancyfont.tools 的新版重写,目录名 fontdrafts 为历史名;旧站 URL 见 next.config 重定向映射)
> 上线前完成下方「占位符替换清单」。

## 本地开发

```bash
cd sites/fontdrafts
npm install
npm run dev        # http://localhost:3100(根项目 dev 占用 3000,故用 3100)
npm run typecheck
npm test           # vitest:引擎测试
npm run build      # 静态预渲染(全语言 ~122 页)
```

## 目录结构

```
src/
  app/(en)/         # 英文:根路径(主语言)
  app/(zh)/zh/      # 中文 /zh/
  app/(es)/es/      # 西语 /es/
  app/(ptbr)/pt-br/ # 巴西葡语 /pt-br/
    每组:layout(page壳)/page(首页)/[slug](样式+平台)/learn|zhinan|guia(指南)/legal×4/not-found
  app/_shared/handlers.tsx   # 四语言共享的页面工厂(路由文件只传 locale)
  app/sitemap.ts    # 全站 sitemap:alternates 按"页面可用语言"输出,不指向 404
  app/robots.ts     # 全站允许 + 显式允许 AI 爬虫
  app/llms.txt/     # /llms.txt(四语言结构说明)
  lib/
    text-styles.ts  # 30 种 Latin/数字样式引擎(确定性,测试覆盖)
    cjk-styles.ts   # 27 种中文环绕装饰(竞品没有的能力)
    zalgo-clean.ts  # 乱码清洗
    style-meta.ts   # 样式名称/分类/风险的按语言覆盖
    ui-strings.ts   # 全站 UI 文案 ×4 语言
    style-pages.ts  # 样式页注册表(共享 def + 按语言 copy,content/style-pages-*.ts)
    platform-pages.ts # 平台页注册表(每语言平台组合,platform-pages-*.ts)
    guides.ts       # 指南注册表(每语言独立集合,guide 路径本地化:/learn /zhinan /guia)
    content/legal*.ts # 法务页 ×4 语言
    i18n.ts         # 语言定义 + ACTIVE_LOCALES(hreflang 只覆盖实际上线的语言)
```

新增页面 = 注册表加一条(共享 def + 对应语言文件里的 copy),sitemap 自动覆盖。

## 添加语言 / 修改平台组合

- 语言:`i18n.ts` 的 `locales`/`ACTIVE_LOCALES`/前缀 + 新路由组 + 新 content 文件。
- 平台组合:改 `platform-pages.ts` 的 SHARED 条目(删/增 slug)+ 对应语言 content 文件。
- 样式页 `decorated-nicknames` 仅中文(en/es/pt-br 无此页,hreflang 自动只含 zh-Hans)。

## 占位符替换清单(上线前)

- [ ] `src/lib/site.ts`:`NEXT_PUBLIC_SITE_URL` 环境变量或 fallback 域名(一处)
- [ ] `src/lib/site.ts`:品牌名 `siteName`、联系邮箱
- [ ] 全局搜索 `FancyFont`(llms.ts / README / 页脚 tagline 等文案处)
- [ ] `public/og.png`:替换为正式品牌 OG 图(1200×630;`scripts/og-template.html` 可改后用无头 Chrome 重新截图)
- [ ] Google Search Console 验证文件放 `public/`

## 部署(Vercel)

- 本目录是独立 app,与根 `fancyfont` 应用互不影响(根 tsconfig 已排除 `sites`)。
- Vercel 独立项目:Root Directory = `sites/fontdrafts`,设置环境变量 `NEXT_PUBLIC_SITE_URL`。
- `trailingSlash: true`,canonical 与 sitemap 全部带尾斜杠。

## 内容标准

- 平台字数限制一律标「约 / about / cerca de」,以平台输入框实时计数为准,不做实测承诺。
- 样式/装饰的显示风险(方框、emoji 化)直接标注在卡片上(style-meta.ts 四语言)。
- 文案原创;指南基于「结果是普通 Unicode 字符」这一事实展开。
- 平台页按国家区分:每个语言只收录该市场主流平台,规则/限制按对应平台写。
