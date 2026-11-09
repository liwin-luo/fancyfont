# FancyFont

花式文字站点，线上域名 [https://fancyfont.tools](https://fancyfont.tools)。

这是仓库根目录的 Next.js 应用。语言是英文（根路径）、简体中文 `/zh/`、西班牙语 `/es/`、巴西葡语 `/pt-br/`、德语 `/de/`。canonical、hreflang 和页面 URL 都由应用自己生成；本仓库整理不改这些地址。

## 本地

```bash
npm ci
npm test
npm run typecheck
npm run build
npm run dev    # http://localhost:3000
npm start
```

`next build` / `next start` 不写死端口，以便托管环境注入 `PORT`。

## 和托管的关系

把应用放到仓库根，只是让 Vercel 能按普通 Next.js 项目识别。**这本身不会接通自动部署。** 现有生产项目仍是 CLI 发布，没有 Git 连接。接通步骤写在 [docs/vercel-git-deploy.md](docs/vercel-git-deploy.md)。不要新建第二个托管项目，也不要在未确认前改域名。

## 保留的参考材料

这些目录不参与站点构建，这次没有删除：

- `seo/`、`design/`、`audit/`、`docs/plans/`：调研和计划
- `localization/`：上一版应用的翻译审阅导出，不是当前文案
- `scripts/kw_*.py`：关键词整理脚本，读取 `seo/` 里的材料
- 根目录上的产品路线图、设计说明和 `NameVibe功能路线图海报.png`

当前文案和工具以 `src/` 为准。
