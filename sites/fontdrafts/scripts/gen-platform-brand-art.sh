#!/bin/bash
# 平台品牌元素插图批量生成(Ark Seedream)+ 文章配图更新
set -u
ROOT=/Users/luogangming/projects-b/fancyfont/sites/fontdrafts
KEY="${ARK_API_KEY:?需要 ARK_API_KEY 环境变量}"
SUFFIX="flat vector sticker illustration, bold clean shapes, thick black outlines, neo-brutalist poster art, solid warm cream background, no text, no letters, no watermark"

gen() {
  SLUG=$1; PROMPT=$2; SEED=$3
  OUTFILE="$ROOT/public/ai/plat-$SLUG.jpg"
  RESP=$(curl -s -m 180 -X POST "https://ark.ap-southeast.bytepluses.com/api/v3/images/generations" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $KEY" \
    -d "{\"model\":\"seedream-5-0-260128\",\"prompt\":\"$PROMPT, $SUFFIX\",\"response_format\":\"url\",\"size\":\"2560x1440\",\"watermark\":false,\"seed\":$SEED}")
  IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try: print(json.load(sys.stdin)['data'][0]['url'])
except Exception: print('')")
  if [ -z "$IMG_URL" ]; then echo "  $SLUG FAILED"; return; fi
  curl -sL -m 180 "$IMG_URL" -o /tmp/raw-$SLUG.jpg
  sips -Z 1200 /tmp/raw-$SLUG.jpg --out "$OUTFILE" >/dev/null 2>&1
  echo "  $SLUG: $(stat -f%z "$OUTFILE" 2>/dev/null) bytes"
}

echo "=== 平台品牌插图(13)==="
gen instagram "Instagram-inspired camera lens emblem with pink purple orange gradient ring, glossy social media style" 210
sleep 8; gen tiktok "TikTok-inspired music note emblem with cyan and pink chromatic offset shadow on black rounded square" 211
sleep 8; gen discord "Discord-inspired friendly game chat mascot emblem in blurple with game controller accents" 212
sleep 8; gen whatsapp "WhatsApp-inspired green phone receiver inside speech bubble emblem" 213
sleep 8; gen douyin "Douyin-inspired music note emblem with cyan and red chromatic offset on black rounded square" 214
sleep 8; gen xiaohongshu "Xiaohongshu-inspired red notebook with seal stamp and sparkles emblem" 215
sleep 8; gen weibo "Weibo-inspired orange sun and eye broadcast emblem" 216
sleep 8; gen wechat "WeChat-inspired twin green speech bubbles with cute eyes emblem" 217
sleep 8; gen qq "QQ-inspired cute penguin mascot with scarf emblem in blue palette" 218
sleep 8; gen bilibili "Bilibili-inspired retro TV with antennae and cheer emblem in blue and white" 219
sleep 8; gen roblox "Roblox-inspired blocky stacked toy bricks with blocky avatar in red palette" 220
sleep 8; gen pubg "PUBG-inspired military crosshair with helmet emblem in olive and orange" 221
sleep 8; gen freefire "Free Fire-inspired flame battle royale emblem in orange and red" 222

echo "=== 文章配图(2)==="
gen_ig_article() {
  RESP=$(curl -s -m 180 -X POST "https://ark.ap-southeast.bytepluses.com/api/v3/images/generations" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $KEY" \
    -d '{"model":"seedream-5-0-260128","prompt":"Instagram-style mobile profile page mockup illustration: gradient ring avatar circle, decorative fancy script font nickname as the display name, bio lines with sparkle and heart decorations, pink and purple palette, flat vector illustration, neo-brutalist frame, no readable words","response_format":"url","size":"2560x1440","watermark":false,"seed":230}')
  IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try: print(json.load(sys.stdin)['data'][0]['url'])
except Exception: print('')")
  curl -sL -m 180 "$IMG_URL" -o /tmp/raw-igbio.jpg
  sips -s format png -Z 1200 /tmp/raw-igbio.jpg --out "$ROOT/public/guides/ig-profile.png" >/dev/null 2>&1
  echo "  ig-profile.png: $(stat -f%z "$ROOT/public/guides/ig-profile.png" 2>/dev/null)"
}
gen_ig_article
sleep 8
gen_discord_article() {
  RESP=$(curl -s -m 180 -X POST "https://ark.ap-southeast.bytepluses.com/api/v3/images/generations" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $KEY" \
    -d '{"model":"seedream-5-0-260128","prompt":"Discord-style chat interface mockup illustration: dark blurple sidebar, two chat bubbles with styled fancy font usernames and grey message placeholder lines, small game controller accent, blurple and dark palette, flat vector illustration, neo-brutalist frame, no readable words","response_format":"url","size":"2560x1440","watermark":false,"seed":231}')
  IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try: print(json.load(sys.stdin)['data'][0]['url'])
except Exception: print('')")
  curl -sL -m 180 "$IMG_URL" -o /tmp/raw-dc.jpg
  sips -s format png -Z 1200 /tmp/raw-dc.jpg --out "$ROOT/public/guides/discord-chat.png" >/dev/null 2>&1
  echo "  discord-chat.png: $(stat -f%z "$ROOT/public/guides/discord-chat.png" 2>/dev/null)"
}
gen_discord_article
echo "=== ALL DONE ==="
