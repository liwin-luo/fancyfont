#!/usr/bin/env python3
"""Content-SEO analysis: keyword coverage, cluster matrix, cannibalization,
intent mix, info-gain vs competitors, blog funnel. Reads clusters CSV + site
inventory JSON + SERP diff.json; prints compact JSON for report authoring."""
import csv, json, re
from collections import defaultdict

BASE = "/Users/luogangming/projects-b/fancyfont"
CSV = f"{BASE}/seo/keyword-analysis/clusters-master-final.csv"
INV = "/tmp/site-inventory.json"
DIFF = "/Users/luogangming/WorkBuddy/57rfy/seo-analysis/fancyfont-serp-2026-11/diff.json"
OUT = {}

inv = json.load(open(INV))
pages = {p["slug"]: p for p in inv}

# ---------- updated cluster -> page map (en tree; supersedes CSV column)
PAGE_MAP = {
    "core-generic|generator-generic": "/", "core-generic|fancy-core": "/",
    "platform|instagram": "/instagram-fonts", "platform|tiktok": "/tiktok-fonts",
    "platform|discord": "/discord-fonts", "platform|whatsapp": "/whatsapp-fonts",
    "platform|facebook": "/facebook-fonts", "platform|youtube": "/youtube-fonts",
    "platform|twitter": "/twitter-fonts", "platform|snapchat": "", "platform|telegram": "",
    "platform|linkedin": "", "platform|pinterest": "", "platform|generic-social": "/",
    "gaming-names|roblox": "/roblox-name-generator", "gaming-names|free-fire": "/free-fire-name-generator",
    "gaming-names|pubg": "/pubg-name-generator", "gaming-names|fortnite": "/fortnite-name-generator",
    "gaming-names|adopt-me": "/adopt-me-fonts", "gaming-names|berry-avenue": "/berry-avenue-fonts",
    "gaming-names|minecraft": "/minecraft-fonts", "gaming-names|cod": "/cod-name-generator",
    "gaming-names|valorant": "", "gaming-names|genshin": "", "gaming-names|among-us": "",
    "gaming-names|agario": "", "gaming-names|generic-game": "/game-name-generator",
    "bio-username|bio": "/learn/instagram-bio-fonts", "bio-username|username": "/learn/fancy-text-usernames",
    "bio-username|nickname": "/decorated-nicknames", "bio-username|display-name": "/decorated-nicknames",
    "bio-username|profile-name": "/decorated-nicknames",
    "special|invisible-blank": "/blank-space", "special|fancy-numbers": "/fancy-numbers",
    "special|sub-superscript": "/superscript-subscript-generator", "special|wide-text": "",
    "symbols|heart": "/heart-font-generator", "symbols|star": "/symbols", "symbols|arrow": "/symbols",
    "symbols|check-cross": "/symbols", "symbols|music": "/symbols", "symbols|bullets-brackets": "/symbols",
    "symbols|kaomoji-emoticon": "/symbols", "symbols|emoji": "/symbols", "symbols|ascii-text-art": "",
    "symbols|general-symbols": "/symbols",
    "signature|signature": "/signature-font-generator",
    "style|cursive-script": "/cursive-fonts", "style|bold-italic": "/bold-fonts",
    "style|gothic-blackletter": "/gothic-fonts", "style|small-tiny": "/small-fonts",
    "style|bubble": "/bubble-fonts", "style|aesthetic": "/aesthetic-fonts",
    "style|cute-kawaii": "/cute-fonts", "style|zalgo-glitch": "/zalgo-text",
    "style|strikethrough": "/strikethrough-text", "style|upside-down": "/upside-down-text",
    "style|coquette": "/coquette-font-generator", "style|preppy": "/preppy-font-generator",
    "style|chicano": "/chicano-font-generator", "style|elegant-luxury": "/elegant-font-generator",
    "style|3d-text": "", "style|graffiti": "", "style|weird-funny": "/crazy-font-generator",
    "competitor-brand|brand": "", "longtail|misc": "",
    "informational|how-to": "/learn", "informational|what-why": "/learn",
    "informational|limits-troubleshoot": "/learn/why-boxes-appear",
}
SLUGS = set(pages.keys())

rows = [r for r in csv.DictReader(open(CSV)) if r["lang"] == "en" and not r["cluster"].startswith("irrelevant-")]
for r in rows:
    key = f"{r['cluster']}|{r['sub']}"
    tgt = PAGE_MAP.get(key, r.get("page", ""))
    r["tgt"] = tgt if (tgt == "/" or tgt.strip("/") in SLUGS or tgt == "/learn") else ""

# ---------- 1) coverage by cluster
cov = defaultdict(lambda: [0, 0, 0, 0])  # kw, kw_cov, vol, vol_cov
for r in rows:
    key = f"{r['cluster']}|{r['sub']}"
    c = cov[key]
    c[0] += 1; c[1] += bool(r["tgt"]); c[2] += int(r["vol"]); c[3] += int(r["vol"]) if r["tgt"] else 0
OUT["coverage"] = sorted(
    [{"cluster": k, "kw": v[0], "kw_cov": v[1], "vol": v[2], "vol_cov": v[3],
      "vol_cov_pct": round(100 * v[3] / max(v[2], 1))} for k, v in cov.items()],
    key=lambda x: -(x["vol"] - x["vol_cov"]))

# uncovered demand by target='' grouped
gap = defaultdict(lambda: [0, 0, []])
for r in rows:
    if not r["tgt"]:
        key = f"{r['cluster']}|{r['sub']}"
        g = gap[key]; g[0] += 1; g[1] += int(r["vol"]); g[2].append(r)
OUT["uncovered"] = [
    {"cluster": k, "kw": v[0], "vol": v[1],
     "heads": sorted(v[2], key=lambda r: -int(r["vol"]))[:5]}
    for k, v in sorted(gap.items(), key=lambda x: -x[1][1])]

# ---------- 2) cannibalization: title token overlap between pages
STOP = {"generator", "fonts", "font", "text", "generator", "copy", "paste", "for", "the", "and", "your", "name", "names"}
def toks(t):
    return {w for w in re.findall(r"[a-z]+", t.lower())} - STOP
pairs = []
plist = [p for p in inv if p["kind"] in ("style", "platform")]
for i, a in enumerate(plist):
    for b in plist[i + 1:]:
        ta, tb = toks(a["title"]), toks(b["title"])
        ov = ta & tb
        if len(ov) >= 1 and min(len(ta), len(tb)) > 0:
            j = len(ov) / len(ta | tb)
            if j >= 0.25 or len(ov) >= 2:
                pairs.append({"a": a["slug"], "b": b["slug"], "overlap": sorted(ov), "j": round(j, 2)})
pairs.sort(key=lambda x: -x["j"])
OUT["cannibalization"] = pairs[:15]

# ---------- 3) intent mix
kinds = defaultdict(lambda: [0, 0])  # pages, faq_sum
for p in inv:
    kinds[p["kind"]][0] += 1
info_vol = sum(int(r["vol"]) for r in rows if r["cluster"].startswith("informational"))
tool_vol = sum(int(r["vol"]) for r in rows if not r["cluster"].startswith("informational"))
OUT["intent"] = {
    "pages_by_kind": {k: v[0] for k, v in kinds.items()},
    "demand_info_vs_tool_vol": {"informational": info_vol, "tool": tool_vol,
                                 "info_share_pct": round(100 * info_vol / (info_vol + tool_vol), 1)},
    "guide_count": len([p for p in inv if p["kind"] == "guide"]),
}

# informational keywords -> guide mapping coverage
info_rows = [r for r in rows if r["cluster"].startswith("informational") or (r["cluster"] == "bio-username")]
INFO_GUIDE = {
    "bio": "/learn/instagram-bio-fonts", "username": "/learn/fancy-text-usernames",
    "how-to": "/learn/pick-your-style", "what-why": "/learn/what-are-unicode-fonts",
    "limits-troubleshoot": "/learn/why-boxes-appear",
}
info_cov = defaultdict(lambda: [0, 0])
for r in info_rows:
    sub = r["sub"] if r["cluster"].startswith("informational") else r["sub"]
    tgt = INFO_GUIDE.get(sub, "")
    info_cov[sub][0] += 1; info_cov[sub][1] += int(r["vol"]) if tgt else 0
OUT["info_demand"] = {k: {"kw": v[0], "vol": v[1]} for k, v in info_cov.items()}

# ---------- 4) info gain vs competitors (33 claims)
d = json.load(open(DIFF))
claims = d["claims"]
OUT["infogain"] = {
    "blue_ocean_we_claim": [  # body common, TDK rare = we can claim; our_pages>0 means present
        {"claim": c["claim"], "tdk_pct": c["tdk_pct"], "body_pct": c["body_pct"], "vacancy": c["vacancy"]}
        for c in sorted(claims, key=lambda x: -x["vacancy"])[:12]],
    "competitors_have_info_we_may_lack": [
        {"claim": c["claim"], "body_pct": c["body_pct"], "our_old_pages": c.get("our_pages")}
        for c in sorted(claims, key=lambda x: -x["body_pct"])[:12]],
}

# ---------- 5) blog funnel: guide <-> tool graph
guides = [p for p in inv if p["kind"] == "guide"]
tool_slugs = {p["slug"] for p in inv if p["kind"] in ("style", "platform", "tool")} | {"/"}
linked_tools = set()
for g in guides:
    for t in g.get("tools", []):
        linked_tools.add(t.strip("/").rstrip("/"))
appear_tools = set()
for g in guides:
    for s in g.get("appearOn", []):
        appear_tools.add(s)
orphans = sorted(tool_slugs - linked_tools - appear_tools - {"symbols", "blank-space"})
OUT["funnel"] = {
    "guides": len(guides),
    "guides_without_backlinks": [g["slug"] for g in guides if not g.get("appearOn")],
    "tools_without_any_guide_link": orphans,
    "guide_out_links": {g["slug"]: len(g.get("tools", [])) for g in guides},
}

print(json.dumps(OUT, ensure_ascii=False, indent=1))
