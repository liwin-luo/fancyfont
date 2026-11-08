# Rank Watch — 冷启动观察期(2026-11-08 起)

每快照一份 JSON 存本目录,命名 `snapshot-YYYY-MM-DD.json`,内容:`{ date, notes, keywords: [{ term, top10: [{host, rank}] }] }`。
浏览器抓 Google(hl=en&gl=us&pws=0)前 10 位;fancyfont.tools 出现即记名次,缺席记 `absent`。

## 目标词(P0 页对应,两周内只记录不决策)

| 词 | 对应页 | 基线(2026-11-08) |
|---|---|---|
| medieval font generator | /medieval-fonts/ | 我们缺席 |
| japanese font generator | /japanese-font-generator/ | 我们缺席 |
| korean font generator | /korean-font-generator/ | 我们缺席 |
| discord fonts | /discord-fonts/ | 我们缺席;SERP 前 4 为 GitHub/Reddit/代理商(软档) |
| signature font generator | /signature-font-generator/ | 我们缺席 |
| twitter fonts | /twitter-fonts/ | 我们缺席 |
| minecraft font generator | /minecraft-fonts/ | 我们缺席 |
| fancy font generator | / | 我们缺席(头部词,仅观察不指望) |

## 判读规则(第 4 周复盘用)

- 任一 P0 页进入前 30(GSC 展示)即视为冷启动通过信号 → 启动该簇 P1 加深
- 全部 8 词 4 周后仍无展示 → 检查 GSC 覆盖率(收录问题而非排名问题),再议
- 观察期内禁止:改 URL、改 title、大规模内链重构(其他微调可)
