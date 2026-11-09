# 把现有 FancyFont 项目改成 Git 自动部署

这份说明只描述以后要做的事。本次改动**没有**创建部署、没有改域名、也没有把仓库连到 Vercel。

仓库根现在就是 Next.js 应用（`package.json`、`next.config.ts`、`src/`、`public/`）。整理目录不会自动开始部署。生产站点在有人把**现有项目**接到这个仓库之前，仍是原来的 CLI 版本。

## 已经核对过的生产身份

- 项目：`fontdrafts`
- 项目 ID：`prj_OERWowlgKksaseaAp0m44xVcPEve`
- 团队：`liwins-projects`（`team_DFKhugYhEiAmTdiMqGbeCAJ1`）
- 域名：`fancyfont.tools`，`www.fancyfont.tools` 308 到 apex
- 此前看到的生产部署：`dpl_2pe9zShR2dwLWVTeN4fq9DSfd6T3`，`source=cli`，没有 `gitSource`
- 域名上的 `gitBranch` 当时是空的

不要新建另一个 Vercel 项目。新项目会变成第二套托管，域名也不会自动过去。

## 等这次 PR 合并、并且明确要切换时

在**上面这个已有项目**里操作：

1. 确认 `main` 已包含这次根目录整理，并且根目录 `npm ci && npm test && npm run typecheck && npm run build` 通过。
2. 打开项目 `prj_OERWowlgKksaseaAp0m44xVcPEve` 的 Git 设置，连接 `https://github.com/liwin-luo/fancyfont`。
3. Production Branch 用 `main`。
4. Root Directory 设为 `.`（仓库根）。不要再填 `sites/fontdrafts`，那个目录已经不存在。
5. Framework Preset 保持 Next.js。安装命令可用默认的 `npm install` 或 `npm ci`。构建命令用默认的 `next build`（也就是 `npm run build`）。不要把 Start 写成 `next start -p 3100`，让平台传入 `PORT`。
6. 不要在这一步改域名、DNS 或把 `www` 的 308 拿掉。
7. 环境变量如果要显式设置，只需要已有的 `NEXT_PUBLIC_SITE_URL=https://fancyfont.tools`。代码里的缺省值已经是这个域名。不要把密钥写进仓库。

连接 Git 之后，Vercel 往往会用生产分支立刻打一版生产部署，成功后生产域名会指向这一版。所以只有准备用这棵 `main` 替换当前 CLI 生产时才连接。

## 回滚顺序

1. 若 Git 部署已经接上生产域名，在**同一个项目**里把流量退回 CLI 部署 `dpl_2pe9zShR2dwLWVTeN4fq9DSfd6T3`（或当时仍保留的上一版生产部署）。不要新建项目，不要改 DNS。
2. 若还没连接 Git，这个 PR 未合并就不会影响线上。合并后若尚未连接，线上仍是 CLI 版本。
3. 代码层面回退这次整理：对合并提交做一次反向提交即可，不要改写或强推历史。

## 建议顺序

1. 审查并合并本 PR。
2. 再在现有项目上连接本仓库 `main`，Root Directory 为 `.`。
3. 看新部署的首页、`/zh/`、`/sitemap.xml`、`/favicon.ico` 和 IndexNow 文件是否仍是 200，并且 canonical 仍指向 `https://fancyfont.tools`。
4. 确认无误后，生产才算从 CLI 切到 Git。连接之前，线上不会因为仓库根目录变了就自动更新。
