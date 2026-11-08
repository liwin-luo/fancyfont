#!/usr/bin/env python3
"""Page mapping + stats assembly for deliverables.

Adds page mapping to clusters-master.csv -> clusters-master-final.csv,
prints compact stats JSON for authoring the 4 deliverable docs.
"""
import csv, json, os
from collections import defaultdict

BASE = "/Users/luogangming/projects-b/fancyfont/seo/keyword-analysis"
SRC = os.path.join(BASE, "clusters-master.csv")
OUT = os.path.join(BASE, "clusters-master-final.csv")

# cluster|sub -> existing fontdrafts page (empty = no page = gap candidate)
PAGE_MAP = {
    "core-generic|generator-generic": "/",
    "core-generic|fancy-core": "/",
    "platform|instagram": "/platforms/instagram-fonts",
    "platform|tiktok": "/platforms/tiktok-fonts",
    "platform|discord": "/platforms/discord-fonts",
    "platform|whatsapp": "/platforms/whatsapp-fonts",
    "platform|facebook": "/platforms/facebook-fonts",
    "platform|youtube": "/platforms/youtube-fonts",
    "platform|twitter": "",  # no page
    "platform|snapchat": "",
    "platform|telegram": "",
    "platform|linkedin": "",
    "platform|pinterest": "",
    "platform|generic-social": "/",
    "gaming-names|roblox": "/platforms/roblox-name-generator",
    "gaming-names|free-fire": "/platforms/free-fire-name-generator",
    "gaming-names|pubg": "/platforms/pubg-name-generator",
    "gaming-names|fortnite": "/platforms/fortnite-name-generator",
    "gaming-names|adopt-me": "/platforms/adopt-me-fonts",
    "gaming-names|berry-avenue": "/platforms/berry-avenue-fonts",
    "gaming-names|minecraft": "",
    "gaming-names|cod": "/platforms/cod-name-generator",
    "gaming-names|valorant": "",
    "gaming-names|genshin": "",
    "gaming-names|among-us": "",
    "gaming-names|agario": "",
    "gaming-names|generic-game": "/platforms/game-name-generator",
    "bio-username|bio": "/learn/instagram-bio-fonts",
    "bio-username|username": "/learn/fancy-text-usernames",
    "bio-username|nickname": "/styles/decorated-nicknames",
    "bio-username|display-name": "/styles/decorated-nicknames",
    "bio-username|profile-name": "/styles/decorated-nicknames",
    "special|invisible-blank": "/blank-space",
    "special|fancy-numbers": "/styles/fancy-numbers",
    "special|sub-superscript": "",  # gap
    "special|wide-text": "",  # gap
    "symbols|heart": "/styles/heart-font-generator",
    "symbols|star": "/symbols",
    "symbols|arrow": "/symbols",
    "symbols|check-cross": "/symbols",
    "symbols|music": "/symbols",
    "symbols|bullets-brackets": "/symbols",
    "symbols|kaomoji-emoticon": "/symbols",
    "symbols|emoji": "/symbols",
    "symbols|ascii-text-art": "",  # gap
    "symbols|general-symbols": "/symbols",
    "signature|signature": "",  # gap
    "style|cursive-script": "/styles/cursive-fonts",
    "style|bold-italic": "/styles/bold-fonts",
    "style|gothic-blackletter": "/styles/gothic-fonts",
    "style|small-tiny": "/styles/small-fonts",
    "style|bubble": "/styles/bubble-fonts",
    "style|aesthetic": "/styles/aesthetic-fonts",
    "style|cute-kawaii": "/styles/cute-fonts",
    "style|zalgo-glitch": "/styles/zalgo-text",
    "style|strikethrough": "/styles/strikethrough-text",
    "style|upside-down": "/styles/upside-down-text",
    "style|coquette": "/styles/coquette-font-generator",
    "style|preppy": "/styles/preppy-font-generator",
    "style|chicano": "/styles/chicano-font-generator",
    "style|elegant-luxury": "/styles/elegant-font-generator",
    "style|3d-text": "",  # gap
    "style|graffiti": "",  # gap
    "style|weird-funny": "/styles/crazy-font-generator",
    "competitor-brand|brand": "",
    "informational|how-to": "/learn",
    "informational|what-why": "/learn",
    "informational|limits-troubleshoot": "/learn/why-boxes-appear",
    "longtail|misc": "",
}
# style subs without dedicated pages -> closest generator page target
SUB2GEN = {
    "style|bold-italic": "/styles/bold-fonts",  # italic has own page; bold sub dominates
    "style|cursive-script": "/styles/cursive-fonts",
}

def main():
    rows = list(csv.DictReader(open(SRC)))
    for r in rows:
        key = f"{r['cluster']}|{r['sub']}"
        r["page"] = PAGE_MAP.get(key, "")
    with open(OUT, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)

    def top(group, n=12):
        group = sorted(group, key=lambda r: (-int(r["vol"]), r["keyword"]))
        return [{"kw": r["keyword"], "vol": int(r["vol"]), "yoy": r["yoy"], "three": r["three_mo"], "page": r["page"]} for r in group[:n]]

    live = [r for r in rows if not r["cluster"].startswith("irrelevant-")]
    out = {}

    # 1) per-cluster head terms (en only for the en tree; es/pt separately)
    en = [r for r in live if r["lang"] == "en"]
    per = defaultdict(list)
    for r in en:
        if r["variant_artifact"] == "True":
            continue
        per[f"{r['cluster']}|{r['sub']}"].append(r)
    out["en_clusters"] = {k: {"count": len(v), "top": top(v)} for k, v in sorted(per.items(), key=lambda x: -len(x[1]))}

    # 2) gaps: cluster subs with no page, ranked by head volume
    gaps = defaultdict(list)
    for r in en:
        if r["page"] == "" and r["cluster"] not in ("competitor-brand", "longtail") and not r["cluster"].startswith("irrelevant-"):
            gaps[f"{r['cluster']}|{r['sub']}"].append(r)
    out["gaps"] = {k: {"count": len(v), "top": top(v, 8)} for k, v in sorted(gaps.items(), key=lambda x: -max(int(r["vol"]) for r in x[1]))}

    # 3) competitor brand queries
    out["competitor"] = top([r for r in en if r["cluster"] == "competitor-brand"], 20)

    # 4) movers: strongest YoY / 3mo among en rows vol>=5000, non-artifact, non-irrelevant
    def movers(field, n=25):
        cand = []
        for r in en:
            if r["variant_artifact"] == "True" or int(r["vol"]) < 5000:
                continue
            v = r[field]
            if v not in ("", None):
                try:
                    cand.append((int(v), r))
                except ValueError:
                    pass
        cand.sort(key=lambda x: -x[0])
        return [{"kw": r["keyword"], "vol": int(r["vol"]), "val": v, "page": r["page"], "cluster": f"{r['cluster']}|{r['sub']}"} for v, r in cand[:n]]
    out["rising_yoy"] = movers("yoy")
    out["rising_3mo"] = movers("three_mo")
    neg = []
    for r in en:
        if r["variant_artifact"] == "True" or int(r["vol"]) < 5000 or r["cluster"].startswith("irrelevant-"):
            continue
        try:
            v = int(r["yoy"])
        except (ValueError, TypeError):
            continue
        if v < 0:
            neg.append((v, int(r["vol"]), r))
    neg.sort(key=lambda x: (x[0], -x[1]))
    out["declining"] = [{"kw": r["keyword"], "vol": int(r["vol"]), "val": v, "page": r["page"], "cluster": f"{r['cluster']}|{r['sub']}"} for v, vol, r in neg[:20]]

    # 5) informational corpus (blog feed)
    info = [r for r in en if r["cluster"].startswith("informational")]
    info += [r for r in en if r["cluster"] == "bio-username" and int(r["vol"]) >= 5000]
    out["informational"] = top(info, 60)

    # 6) es / pt heads
    out["es"] = top([r for r in live if r["lang"] == "es"], 30)
    out["pt"] = top([r for r in live if r["lang"] == "pt"], 15)

    # 7) platform/gaming totals for priority calls
    tot = defaultdict(lambda: [0, 0])
    for r in en:
        if r["variant_artifact"] == "True" or r["cluster"].startswith("irrelevant-"):
            continue
        t = tot[f"{r['cluster']}|{r['sub']}"]
        t[0] += 1
        t[1] += int(r["vol"])
    out["cluster_totals"] = {k: {"n": v[0], "vol_sum": v[1]} for k, v in sorted(tot.items(), key=lambda x: -x[1][1])}

    print(json.dumps(out, ensure_ascii=False, indent=1))

if __name__ == "__main__":
    main()
