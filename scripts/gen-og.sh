#!/usr/bin/env bash
# 重制 OG 图:1200×630,EN 文案 + 真实花字样张(浏览器系统字体渲染)。
# 产物:public/og.png(全站默认)+ og-medieval/og-japanese/og-korean(新页专属)。
set -euo pipefail
cd "$(dirname "$0")"
OUT="../public"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

make_html() { # $1=file $2=bg $3=badge $4=h1 $5=sub $6=chips(html)
cat > "$1" <<HTML
<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; overflow:hidden; background:$2;
    font-family:"Helvetica Neue","Segoe UI","Hiragino Sans","Apple SD Gothic Neo",sans-serif; position:relative; }
  .frame { position:absolute; inset:24px; border:4px solid #111; background:#fff;
    box-shadow:10px 10px 0 #111; padding:52px 64px; display:flex; flex-direction:column; }
  .logo { position:absolute; top:40px; right:52px; display:flex; align-items:center; gap:12px; transform:rotate(3deg); }
  .logo-icon { width:52px; height:52px; background:#ffd23f; border:4px solid #111; border-radius:12px;
    box-shadow:4px 4px 0 #111; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:900; color:#111; }
  .logo-name { font-size:28px; font-weight:900; color:#111; letter-spacing:-0.5px; }
  .badge { align-self:flex-start; background:#ff5d8f; color:#fff; border:4px solid #111; border-radius:10px;
    padding:6px 20px; font-size:22px; font-weight:900; box-shadow:5px 5px 0 #111; transform:rotate(-2deg); }
  h1 { margin-top:24px; font-size:64px; font-weight:900; color:#111; line-height:1.1; letter-spacing:-1.5px; }
  h1 .fancy { color:#ff5d8f; }
  .sub { margin-top:16px; font-size:26px; font-weight:700; color:#3d3a34; line-height:1.45; }
  .samples { margin-top:auto; margin-bottom:14px; display:flex; gap:16px; flex-wrap:wrap; }
  .chip { border:3px solid #111; border-radius:10px; padding:6px 16px; font-size:27px; font-weight:900;
    box-shadow:4px 4px 0 #111; white-space:nowrap; }
  .c1 { background:#ffd23f; transform:rotate(-1.5deg); }
  .c2 { background:#4d96ff; color:#fff; transform:rotate(1deg); }
  .c3 { background:#2ebd85; color:#fff; transform:rotate(-1deg); }
  .c4 { background:#ff5d8f; color:#fff; transform:rotate(1.5deg); }
  .footer { font-size:22px; font-weight:900; color:#6b675f; }
</style></head><body><div class="frame">
  <div class="logo"><div class="logo-icon">Aa</div><div class="logo-name">FancyFont</div></div>
  <div class="badge">$3</div>
  <h1>$4</h1>
  <div class="sub">$5</div>
  <div class="samples">$6</div>
  <div class="footer">fancyfont.tools</div>
</div></body></html>
HTML
}

# 1) 全站默认 og.png
make_html "$WORK/og.html" "#f6f1e7" "Free · No upload · Copy &amp; paste" \
  "Fancy Font <span class=\"fancy\">182 styles</span> &amp; 27 frames" \
  "Turn letters and numbers into styled Unicode text — katakana and ｖａｐｏｒｗａｖｅ included. One tap to copy." \
  '<span class="chip c1">𝒮𝒸𝓇𝒾𝓅𝓉</span><span class="chip c2">𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱</span><span class="chip c3">ᴍɪʀᴀɢᴇ</span><span class="chip c4">꧁ACE꧂</span><span class="chip c1">サクラ</span><span class="chip c2">ㅅㅏㄹㅏㄴㄱ</span>'
# 2) medieval
make_html "$WORK/og-medieval.html" "#efe9fb" "Medieval · Old English" \
  "Medieval <span class=\"fancy\">Font</span> Generator" \
  "Fraktur blackletter for clan tags, guild names and D&amp;D characters — honest about where games draw boxes." \
  '<span class="chip c1">𝕮𝖆𝖒𝖊𝖑𝖔𝖙</span><span class="chip c2">𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱</span><span class="chip c3">𝕶𝖓𝖎𝖌𝖍𝖙</span>'
# 3) japanese
make_html "$WORK/og-japanese.html" "#fdf3d8" "サクラ · Vaporwave" \
  "Japanese <span class=\"fancy\">Font</span> Generator" \
  "Romaji becomes katakana and ｗｉｄｅ fullwidth text — transliteration you can paste anywhere. Not a translator, and it says so." \
  '<span class="chip c1">サクラ</span><span class="chip c2">ハロー</span><span class="chip c3">ａｅｓｔｈｅｔｉｃ</span>'
# 4) korean
make_html "$WORK/og-korean.html" "#e7f5ec" "한글 looks-like" \
  "Korean <span class=\"fancy\">Font</span> Generator" \
  "Swap letters for look-alike Hangul jamo — decoration that borrows the alphabet's look, with the honest limits written out." \
  '<span class="chip c1">ㅅㅏㄹㅏㄴㄱ</span><span class="chip c2">ㅎㅏㄴㄱㅜㅔㄴ</span><span class="chip c3">ㅇㅏㄴㄴㅕㅇ</span>'

for name in og og-medieval og-japanese og-korean; do
  if [ -f "$OUT/$name.png" ] && [ "$(wc -c < "$OUT/$name.png")" -gt 20000 ]; then
    echo "$name.png 已存在,跳过"
    continue
  fi
  PROFILE="$(mktemp -d)"
  "$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" \
    --screenshot="$OUT/$name.png" --window-size=1200,630 "file://$WORK/$name.html" 2>/dev/null
  rm -rf "$PROFILE"
  echo "$name.png $(wc -c < "$OUT/$name.png") b"
done
