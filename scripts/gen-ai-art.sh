#!/bin/bash
# 批量 AI 插图管线:Pollinations 生成底图 → HTML 品牌框合成 → Chrome 截图
# 用法:bash scripts/gen-ai-art.sh
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RAW=$ROOT/public/ai/raw
FRAME=$ROOT/scripts/ai-frame
OUT=$ROOT/public/ai
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$RAW" "$FRAME" "$OUT"
cp "$ROOT/scripts/img/base.css" "$FRAME/base.css"

# 统一风格后缀:强风格词控制一致性(Ark/Seedream 用明文,Pollinations 备用编码版)
SUFFIX_PLAIN="flat vector sticker illustration, bold simple shapes, thick black outlines, retro muted palette, solid warm cream background, neo-brutalist poster art, no text, no letters, no watermark"
SUFFIX="flat%20vector%20sticker%20illustration%2C%20bold%20simple%20shapes%2C%20thick%20black%20outlines%2C%20retro%20muted%20palette%2C%20solid%20warm%20cream%20background%2C%20neo-brutalist%20poster%20art%2C%20no%20text%2C%20no%20letters%2C%20no%20watermark"
ARK_BASE="https://ark.ap-southeast.bytepluses.com/api/v3/images/generations"
ARK_MODEL="seedream-5-0-260128"
# ARK_API_KEY 由调用方以环境变量传入,不写入本文件

# slug|主题提示词(URL 编码,空格=%20)|seed(固定 seed 保证风格一致)
ITEMS=(
"style-cursive|flowing%20script%20letter%20swirls%20and%20ink%20pen%20flourishes%20elegant%20curves|101"
"style-bold|chunky%20heavy%20weight%20letter%20blocks%20stacked|102"
"style-small|row%20of%20tiny%20delicate%20miniature%20capital%20letters|103"
"style-bubble|round%20soap%20bubble%20letters%20floating%20playful|104"
"style-strikethrough|single%20letter%20crossed%20out%20with%20diagonal%20slash%20line|105"
"style-numbers|round%20badge%20tokens%20with%20simple%20digit%20emblems|106"
"style-upside-down|flipped%20reversed%20letters%20with%20spiral%20arrow|107"
"style-decorated|chinese%20lantern%20ornate%20frame%20decorations%20red%20and%20gold|108"
"style-zalgo|corrupted%20glitch%20letter%20with%20displaced%20dark%20bars|109"
"style-gothic|gothic%20cathedral%20spires%20ornate%20blackletter%20emblem%20dark%20purple|110"
"style-smallcaps|small%20caps%20miniature%20letters%20in%20clean%20frame|103"
"style-aesthetic|vaporwave%20sunset%20grid%20horizon%20retro|111"
"style-cute|cute%20hearts%20bows%20and%20flowers%20cluster%20soft%20pink|112"
"style-updown|upside%20down%20flipped%20letters%20playful|107"
"plat-instagram|camera%20lens%20and%20photo%20frame%20social%20emblem%20pink|120"
"plat-tiktok|music%20note%20and%20play%20button%20emblem|121"
"plat-discord|game%20chat%20bubble%20and%20headset%20emblem%20purple|122"
"plat-whatsapp|chat%20bubble%20with%20phone%20emblem%20green|123"
"plat-roblox|stacked%20toy%20blocks%20with%20blocky%20avatar|124"
"plat-pubg|military%20crosshair%20helmet%20emblem%20olive%20orange|125"
"plat-freefire|flame%20battle%20emblem%20orange%20red|126"
"plat-xiaohongshu|notebook%20with%20red%20seal%20stamp%20and%20flowers|127"
"plat-weibo|broadcast%20megaphone%20emblem%20orange|128"
"plat-wechat|two%20chat%20bubbles%20green%20emblem|129"
"plat-qq|gamer%20spark%20frame%20emblem%20yellow|130"
"plat-bilibili|retro%20tv%20screen%20with%20antenna%20emblem%20blue|131"
"plat-douyin|music%20note%20with%20short%20video%20play%20emblem%20purple%20pink|132"
)

gen_one() {
  SLUG=$1; PROMPT=$2; SEED=$3
  # 断点续跑:已有有效底图则跳过
  if [ -s "$RAW/$SLUG.jpg" ] && [ "$(stat -f%z "$RAW/$SLUG.jpg")" -gt 1000 ]; then
    echo "  $SLUG skip(已有底图)"
    return
  fi
  # Ark/Seedream:提示词解码 %20;尺寸须 ≥3686400 像素;关闭水印
  PROMPT_PLAIN=$(printf '%b' "${PROMPT//%20/ }")
  RESP=$(curl -s -m 180 -X POST "$ARK_BASE" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $ARK_API_KEY" \
    -d "{\"model\":\"$ARK_MODEL\",\"prompt\":\"$PROMPT_PLAIN, $SUFFIX_PLAIN\",\"response_format\":\"url\",\"size\":\"2560x1440\",\"watermark\":false,\"seed\":$SEED}")
  IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try:
    r=json.load(sys.stdin)
    print(r['data'][0].get('url',''))
except Exception:
    print('')
")
  if [ -z "$IMG_URL" ]; then
    echo "  $SLUG API失败, sleep 20 retry"
    sleep 20
    RESP=$(curl -s -m 180 -X POST "$ARK_BASE" \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $ARK_API_KEY" \
      -d "{\"model\":\"$ARK_MODEL\",\"prompt\":\"$PROMPT_PLAIN, $SUFFIX_PLAIN\",\"response_format\":\"url\",\"size\":\"2560x1440\",\"watermark\":false,\"seed\":$((SEED+7))}")
    IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try:
    r=json.load(sys.stdin)
    print(r['data'][0].get('url',''))
except Exception:
    print('')
")
  fi
  if [ -n "$IMG_URL" ]; then
    curl -sL -m 180 "$IMG_URL" -o "$RAW/$SLUG.jpg"
  fi
  SIZE=$(stat -f%z "$RAW/$SLUG.jpg" 2>/dev/null || echo 0)
  echo "  $SLUG raw: $SIZE"
}

frame_one() {
  SLUG=$1
  # 已有成品(>20KB)则跳过
  if [ -s "$OUT/$SLUG.png" ] && [ "$(stat -f%z "$OUT/$SLUG.png")" -gt 20000 ]; then
    echo "  $SLUG frame skip(已有成品)"
    return
  fi
  cat > "$FRAME/$SLUG.html" <<HTML
<link rel="stylesheet" href="base.css">
<body><div class="dots"></div><div class="frame" style="padding:70px 60px 56px">
  <div style="position:absolute;top:26px;left:32px;display:flex;align-items:center;gap:10px;transform:rotate(-2deg)">
    <span style="width:44px;height:44px;border:3px solid #111;border-radius:10px;background:#ffd23f;box-shadow:3px 3px 0 #111;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900">字</span>
    <span style="font-size:20px;font-weight:900;letter-spacing:-0.3px">FancyFont</span>
  </div>
  <img src="file://$RAW/$SLUG.jpg" style="position:absolute;inset:96px 48px 64px;width:calc(100% - 96px);height:calc(100% - 160px);object-fit:cover;border:3px solid #111;border-radius:12px;box-shadow:6px 6px 0 #111">
  <div style="position:absolute;bottom:24px;left:60px;font-size:15px;font-weight:900;color:#3d3a34">fancyfont.tools</div>
</div></body>
HTML
  "$CHROME" --headless=new --disable-gpu --screenshot="$OUT/$SLUG.png" --window-size=1200,675 "file://$FRAME/$SLUG.html" 2>/dev/null
  echo "  $SLUG framed: $(stat -f%z "$OUT/$SLUG.png" 2>/dev/null)"
}

echo "=== AI 底图生成(26 张,限流间隔 25s)==="
for item in "${ITEMS[@]}"; do
  IFS='|' read -r SLUG PROMPT SEED <<< "$item"
  gen_one "$SLUG" "$PROMPT" "$SEED"
  sleep 3
done

echo "=== 品牌框合成 + 截图 ==="
for item in "${ITEMS[@]}"; do
  IFS='|' read -r SLUG _ <<< "$item"
  frame_one "$SLUG"
done
echo "=== ALL DONE ==="
ls -la "$OUT"/*.png | wc -l
