#!/bin/bash
# 迁移落地页插图批量(16 张:10 样式 + 6 平台),直接输出 public/ai/*.jpg。
# 密钥由调用方环境变量传入:ARK_API_KEY=xxx bash scripts/gen-migration-art.sh
# 断点续跑:目标文件已存在(>20KB)则跳过。
set -u
ROOT=/Users/luogangming/projects-b/fancyfont/sites/fontdrafts
KEY="${ARK_API_KEY:?需要 ARK_API_KEY 环境变量}"
ARK_BASE="https://ark.ap-southeast.bytepluses.com/api/v3/images/generations"
SUFFIX="flat vector sticker illustration, bold clean shapes, thick black outlines, neo-brutalist poster art, solid warm cream background, no text, no letters, no watermark"

gen() {
  OUTFILE=$1; PROMPT=$2; SEED=$3
  if [ -s "$OUTFILE" ] && [ "$(stat -f%z "$OUTFILE")" -gt 20000 ]; then
    echo "  $(basename "$OUTFILE") skip(已有)"
    return
  fi
  RESP=$(curl -s -m 180 -X POST "$ARK_BASE" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $KEY" \
    -d "{\"model\":\"seedream-5-0-260128\",\"prompt\":\"$PROMPT, $SUFFIX\",\"response_format\":\"url\",\"size\":\"2560x1440\",\"watermark\":false,\"seed\":$SEED}")
  IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try: print(json.load(sys.stdin)['data'][0]['url'])
except Exception: print('')")
  if [ -z "$IMG_URL" ]; then
    echo "  $(basename "$OUTFILE") API失败,sleep 20 重试"
    sleep 20
    RESP=$(curl -s -m 180 -X POST "$ARK_BASE" \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $KEY" \
      -d "{\"model\":\"seedream-5-0-260128\",\"prompt\":\"$PROMPT, $SUFFIX\",\"response_format\":\"url\",\"size\":\"2560x1440\",\"watermark\":false,\"seed\":$((SEED+7))}")
    IMG_URL=$(echo "$RESP" | python3 -c "
import json,sys
try: print(json.load(sys.stdin)['data'][0]['url'])
except Exception: print('')")
  fi
  if [ -z "$IMG_URL" ]; then echo "  $(basename "$OUTFILE") 两次失败,跳过"; return; fi
  curl -sL -m 180 "$IMG_URL" -o /tmp/raw-migration.jpg
  sips -Z 1200 /tmp/raw-migration.jpg --out "$OUTFILE" >/dev/null 2>&1
  echo "  $(basename "$OUTFILE"): $(stat -f%z "$OUTFILE" 2>/dev/null) bytes"
}

echo "=== 样式页插图(10)==="
gen "$ROOT/public/ai/style-cool.jpg" "cool chunky letter block with lightning bolt and star burst accents" 140
sleep 8; gen "$ROOT/public/ai/style-elegant.jpg" "elegant script letter flourish with calligraphy swirls and royal gold ornament" 141
sleep 8; gen "$ROOT/public/ai/style-dark.jpg" "dark moody letter emblem with crescent moon and dagger silhouette deep purple black" 142
sleep 8; gen "$ROOT/public/ai/style-heart.jpg" "letter inside heart shape with small hearts floating soft pink and red" 143
sleep 8; gen "$ROOT/public/ai/style-coquette.jpg" "coquette ribbon bow with tiny hearts and pearl string soft pink charm" 144
sleep 8; gen "$ROOT/public/ai/style-chicano.jpg" "chicano tattoo style script letter with fine scroll flourishes black and grey" 145
sleep 8; gen "$ROOT/public/ai/style-preppy.jpg" "preppy letter with polka dots ribbon and bright pastel pattern cheerful" 146
sleep 8; gen "$ROOT/public/ai/style-crazy.jpg" "crazy wild chaotic letters with zigzag burst and wonky playful energy" 147
sleep 8; gen "$ROOT/public/ai/style-italic.jpg" "slanted italic letter with speed lines and dynamic forward lean" 148
sleep 8; gen "$ROOT/public/ai/style-tiny.jpg" "tiny miniature letter under magnifying glass emphasis very small scale" 149

echo "=== 平台页插图(6)==="
gen "$ROOT/public/ai/plat-facebook.jpg" "Facebook-inspired blue rounded square social emblem with friendly thumbs up like symbol blue palette" 240
sleep 8; gen "$ROOT/public/ai/plat-youtube.jpg" "YouTube-inspired red rounded rectangle with white play triangle button emblem" 241
sleep 8; gen "$ROOT/public/ai/plat-adoptme.jpg" "cute cartoon puppy with pastel toy blocks adoption badge emblem rainbow playful" 242
sleep 8; gen "$ROOT/public/ai/plat-berry.jpg" "cozy pastel dollhouse with berry pink palette and heart shaped window emblem" 243
sleep 8; gen "$ROOT/public/ai/plat-cod.jpg" "military dog tags with skull and crosshair emblem olive green" 244
sleep 8; gen "$ROOT/public/ai/plat-fortnite.jpg" "colorful battle royale llama pinata with storm glow emblem purple and blue" 245

echo "=== DONE ==="
ls -la "$ROOT/public/ai/" | grep -E "cool|elegant|dark|heart|coquette|chicano|preppy|crazy|italic|tiny|facebook|youtube|adoptme|berry|cod|fortnite"
