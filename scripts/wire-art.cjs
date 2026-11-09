// 批量接线 theme.art:为 THEME 地图的每个 slug 插入/替换 art 路径
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

const artMap = {
  "cursive-fonts": "style-cursive", "bold-fonts": "style-bold", "gothic-fonts": "style-gothic",
  "small-fonts": "style-small", "aesthetic-fonts": "style-aesthetic", "cute-fonts": "style-cute",
  "bubble-fonts": "style-bubble", "strikethrough-text": "style-strikethrough",
  "fancy-numbers": "style-numbers", "zalgo-text": "style-zalgo",
  "upside-down-text": "style-upside-down", "decorated-nicknames": "style-decorated",
  "instagram-fonts": "plat-instagram", "tiktok-fonts": "plat-tiktok", "discord-fonts": "plat-discord",
  "whatsapp-fonts": "plat-whatsapp", "roblox-name-generator": "plat-roblox",
  "pubg-name-generator": "plat-pubg", "free-fire-name-generator": "plat-freefire",
  "xiaohongshu-fonts": "plat-xiaohongshu", "weibo-fonts": "plat-weibo",
  "wechat-fonts": "plat-wechat", "qq-fonts": "plat-qq", "bilibili-fonts": "plat-bilibili",
  "douyin-fonts": "plat-douyin", "game-name-generator": "plat-game",
};

let total = 0;
for (const file of ["src/lib/style-pages.ts", "src/lib/platform-pages.ts"]) {
  const abs = path.join(ROOT, file);
  let s = fs.readFileSync(abs, "utf8");
  let count = 0;
  for (const [slug, img] of Object.entries(artMap)) {
    const key = `"${slug}": { band:`;
    const i = s.indexOf(key);
    if (i < 0) continue;
    const close = s.indexOf("}", i);
    const seg = s.slice(i, close);
    const artPath = `/ai/${img}.png`;
    if (seg.includes("art:")) {
      const updated = seg.replace(/art: "[^"]*"/, `art: "${artPath}"`);
      if (updated !== seg) { s = s.slice(0, i) + updated + s.slice(close); count++; }
    } else {
      s = s.slice(0, close) + `, art: "${artPath}"` + s.slice(close);
      count++;
    }
  }
  fs.writeFileSync(abs, s);
  total += count;
  console.log(file, "wired:", count);
}
console.log("TOTAL:", total);
