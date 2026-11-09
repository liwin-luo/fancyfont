#!/usr/bin/env bash
# 生成 public/favicon.ico(16/32/48 三尺寸,内嵌 PNG 条目)。
# 流程:HTML 包 icon.svg → Chrome 截 PNG → python 手写 ICO 容器(零第三方依赖)。
set -euo pipefail
cd "$(dirname "$0")"
OUT="../public/favicon.ico"
SRC="../src/app/icon.svg"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

for size in 16 32 48; do
  cat > "$WORK/f$size.html" <<HTML
<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0} body{width:${size}px;height:${size}px;overflow:hidden;background:#fff}
  img{display:block;width:${size}px;height:${size}px}
</style></head><body><img src="icon.svg"></body></html>
HTML
  cp "$SRC" "$WORK/icon.svg"
  PROFILE="$(mktemp -d)"
  "$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" \
    --screenshot="$WORK/f$size.png" --window-size=$size,$size "file://$WORK/f$size.html" 2>/dev/null
  rm -rf "$PROFILE"
  echo "f$size.png $(wc -c < "$WORK/f$size.png") b"
done

python3 - "$WORK" "$OUT" <<'PYEOF'
import struct, sys
work, out = sys.argv[1], sys.argv[2]
sizes = [16, 32, 48]
blobs = []
for s in sizes:
    data = open(f"{work}/f{s}.png", "rb").read()
    assert data[:8] == b"\x89PNG\r\n\x1a\n", f"f{s}.png not PNG"
    blobs.append((s, data))
# ICO 头:reserved=0 type=1 count=N;目录项 16 字节/项;数据 PNG 原样内嵌
header = struct.pack("<HHH", 0, 1, len(blobs))
offset = 6 + 16 * len(blobs)
entries, body = b"", b""
for s, data in blobs:
    entries += struct.pack("<BBBBHHII", s % 256, s % 256, 0, 0, 1, 32, len(data), offset)
    body += data
    offset += len(data)
with open(out, "wb") as f:
    f.write(header + entries + body)
print("favicon.ico written:", out)
PYEOF
echo "favicon.ico $(wc -c < "$OUT") b"
