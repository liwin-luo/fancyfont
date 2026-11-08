#!/usr/bin/env python3
"""Parse Keyword Planner 'Keyword Stats' CSV exports (UTF-16 LE), clean & merge.

Input : seo/google-trends-data/*.csv (7 files)
Output: seo/keyword-analysis/master-unfiltered.csv  (raw union, provenance kept)
        seo/keyword-analysis/master-filtered.csv    (noise removed, language tagged)
"""
import csv, glob, os, re, sys, unicodedata

SRC = "/Users/luogangming/projects-b/fancyfont/seo/google-trends-data"
OUT = "/Users/luogangming/projects-b/fancyfont/seo/keyword-analysis"
os.makedirs(OUT, exist_ok=True)

FILE_THEME = {
    "01_05_32": "core-en",
    "01_06_10": "styles-en",
    "01_06_56": "special-platforms-en",
    "01_07_31": "games-scenario-en",
    "01_08_19": "es-core",
    "01_08_50": "es-games",
    "01_09_21": "pt",
}

SEEDS = set()
for group in [
    "fancy fonts,font generator,fancy font generator,font changer,cool fonts",
    "fancy fonts,copy and paste fonts,font copy and paste,text generator,fancy text",
    "fancy fonts,cursive font,gothic font,small text generator,bubble text",
    "fancy fonts,zalgo text,glitch text generator,upside down text,strikethrough text",
    "fancy fonts,coquette font,preppy font,chicano lettering,elegant font",
    "fancy fonts,invisible character,blank space,fancy numbers,text symbols",
    "fancy fonts,instagram fonts,tiktok font generator,discord fonts,whatsapp font",
    "fancy fonts,roblox name generator,fortnite name generator,adopt me fonts,berry avenue fonts",
    "fancy fonts,instagram bio fonts,aesthetic usernames,nickname generator,display name ideas",
    "fuentes para instagram,letras bonitas,letras raras,letras cursivas,fuentes de letras",
    "fuentes para instagram,nombres para free fire,letras pequeñas,letras góticas,letras especiales",
    "fontes para instagram,letras diferentes,letras cursivas,nomes para free fire,fontes de letras",
]:
    SEEDS.update(k.strip().lower() for k in group.split(","))

VOL_ORDER = [10000000, 5000000, 1000000, 500000, 100000, 50000, 10000, 5000, 1000, 500, 100, 50, 10]

def parse_pct(s):
    s = s.strip().replace("%", "").replace("+", "")
    if not s:
        return None
    try:
        return int(s)
    except ValueError:
        return None

def parse_num(s):
    s = s.strip().replace(",", "")
    if not s:
        return None
    try:
        return int(s)
    except ValueError:
        return None

def strip_accents(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")

# ---- language detection on accent-stripped lowercase keyword ----
ES_MARKERS = [
    r"\bletra", r"\bfuente", r"\bnombres?\b", r"\bcomo\b", r"\bpara\b", r"\bde\b(?=.*letra)",
    r"\bpeek", r"peque", r"\bfeo\b", r"\bbonitas?\b", r"\braras?\b", r"\bcursivas?\b", r"\bgotic",
    r"\bespeciales?\b", r"\bperfil\b", r"\bwhatsapp\b.*\bletra", r"\bfondos\b", r"\bletras\b",
    r"\bapodo", r"\bfirma", r"\bnumerales\b", r"\bletras chinas\b", r"\bcopy\b.*\bpega",
    r"\bestilos? de\b", r"\bcriar\b.*\bletras\b", r"\bponer\b", r"\bsimbolos?\b",
]
PT_MARKERS = [
    r"\bletras?\b", r"\bfontes?\b", r"\bnomes?\b", r"\bcomo\b", r"\bpara\b", r"\bfazer\b",
    r"\bcolar\b", r"\bperfil\b", r"\bdiferentes\b", r"\bfancy\b.*\bpt\b", r"\bde letras\b",
    r"\bcurso\b", r"\bapelido", r"\bnumero\b", r"\beletrad\b", r"\bestilos? de\b",
]

# exclusive markers win when both es & pt share markers (letras/para/como/estilos de)
ES_EXCL = r"fuente|peek|peque|bonita|raras|cursiva|gotic|especial|apodo|copy.*pega|poner|simbolo|numeral|firma|feo"
PT_EXCL = r"fonte|fazer|colar|apelido|eletrad|\bnumero|\bnome"

def detect_lang(kw_norm, kw_raw, themes=""):
    es = any(re.search(p, kw_norm) for p in ES_MARKERS)
    pt = any(re.search(p, kw_norm) for p in PT_MARKERS)
    if es and not pt:
        return "es"
    if pt and not es:
        return "pt"
    if es and pt:
        if re.search(ES_EXCL, kw_norm):
            return "es"
        if re.search(PT_EXCL, kw_norm):
            return "pt"
        # ambiguous: provenance decides (es-only file -> es, pt file -> pt)
        if "pt" in themes:
            return "pt"
        if themes.startswith("es"):
            return "es"
        return "es?"
    if not es and not pt:
        return "en"
    return "en"

def main():
    rows = {}
    skipped = 0
    for path in sorted(glob.glob(os.path.join(SRC, "*.csv"))):
        theme = FILE_THEME.get(os.path.basename(path).split(" at ")[1].replace(".csv", "")[:8], "unknown")
        with open(path, encoding="utf-16") as f:
            lines = f.read().splitlines()
        # rows start at line index 3 (0=title, 1=range, 2=header)
        for line in lines[3:]:
            if not line.strip():
                continue
            parts = line.split("\t")
            if len(parts) < 9:
                skipped += 1
                continue
            kw = parts[0].strip().lower()
            if not kw:
                skipped += 1
                continue
            vol = parse_num(parts[2]) or 0
            three = parse_pct(parts[3])
            yoy = parse_pct(parts[4])
            comp = parts[5].strip()
            bid_lo = parse_num(parts[7])
            bid_hi = parse_num(parts[8])
            if kw in rows:
                r = rows[kw]
                r["vol"] = max(r["vol"], vol)
                if theme not in r["themes"].split("|"):
                    r["themes"] += "|" + theme
                if kw in SEEDS:
                    r["is_seed"] = True
                if (yoy is not None) and (r["yoy"] is None):
                    r["yoy"] = yoy
                if (three is not None) and (r["three_mo"] is None):
                    r["three_mo"] = three
                r["comp"] = r["comp"] or comp
            else:
                rows[kw] = {
                    "keyword": kw, "vol": vol, "three_mo": three, "yoy": yoy,
                    "comp": comp, "bid_lo": bid_lo, "bid_hi": bid_hi,
                    "is_seed": kw in SEEDS, "themes": theme,
                }
    for r in rows.values():
        r["lang"] = detect_lang(strip_accents(r["keyword"]), r["keyword"], r["themes"])

    all_rows = sorted(rows.values(), key=lambda r: -r["vol"])
    with open(os.path.join(OUT, "master-unfiltered.csv"), "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "lang", "vol", "three_mo", "yoy", "comp",
                                          "bid_lo", "bid_hi", "is_seed", "themes"])
        w.writeheader()
        w.writerows(all_rows)

    # ---- noise filter: keep only keywords relevant to this niche ----
    norm = lambda s: re.sub(r"\s+", " ", strip_accents(s)).strip()
    KEEP = [
        r"\bfonts?\b", r"\bletra", r"\bfuente", r"\bfonte", r"\btexts?\b", r"\btextos?\b",
        r"\bnick", r"\busernames?\b", r"\bbios?\b", r"\bsymbols?\b", r"\bcharacters?\b",
        r"\bdisplay ?name", r"\bnombres?", r"\bnomes?\b", r"\bapelido", r"\bapodo",
        r"\bstylish\b", r"\bgen(?:erator|erators|erate|rat|eratorweb)\b", r"\balphabet\b",
        r"\bcursive\b", r"\bitalic\b", r"\bbold\b", r"\bsmall\b", r"\btiny\b", r"\bglitch\b",
        r"\bzalgo\b", r"\bstrikethrough\b", r"\bupsided?own\b", r"\bbubble\b", r"\baesthetic\b",
        r"\bfancy\b", r"\bcool\b", r"\bcute\b", r"\bpreppy\b", r"\bcoquette\b", r"\bchicano\b",
        r"\bgothic\b", r"\bcountry ?codes?\b", r"\bnumbers?\b", r"\binvisible\b", r"\bblank\b",
        r"\bwhatsapp\b", r"\binstagram\b", r"\btiktok\b", r"\bdiscord\b", r"\bfacebook\b",
        r"\byoutube\b", r"\btelegram\b", r"\btwitter\b", r"\bsnapchat\b", r"\bfree ?fire\b",
        r"\bpubg\b", r"\broblox\b", r"\bfortnite\b", r"\badopt ?me\b", r"\bberry avenue\b",
        r"\bminecraft\b", r"\bvalorant\b", r"\bgenshin\b", r"\bcod\b", r"\bcallofduty\b",
        r"\bsignature\b", r"\bhandwrit", r"\bscript\b", r"\bcalligraphy\b", r"\bcalli\b",
        r"\bfancy number\b", r"\bvip\b", r"\bstrike\b", r"\bcopy ?(and|&|n)? ?paste\b",
        r"\bcopy ?e ?colar\b", r"\bcopiar\b", r"\bpegar\b", r"\bpega\b", r"\btraduc", r"\bfontes? pra\b",
        r"\bstylis", r"\bwa\b", r"\big\b", r"\bfb\b", r"\bstyler\b", r"\bemojis?\b", r"\bkaomoji\b",
        r"\bspecial chars?\b", r"\bsimbolos?\b", r"\bsimbol", r"\bstylishname?\b", r"\bnamestyle\b",
        r"\btextart\b", r"\bascii\b", r"\bstars?\b", r"\bhearts?\b", r"\barrow", r"\bbrackets?\b",
        r"\bunderl", r"\bstrikethru", r"\bwide\b", r"\bweird\b", r"\bkrunky?\b", r"\bcursed\b",
        r"\bmedieval\b", r"\bold ?english\b", r"\bblackletter\b", r"\bfancy ?letters?\b",
        r"\bfancy ?text\b", r"\bfancy ?fonts?\b", r"\bstylish ?text\b", r"\bstylish ?fonts?\b",
        r"\bfancy ?nick", r"\bfancy ?name", r"\btech?\b", r"\bhighl", r"\bbold ?italic\b",
        r"\bsquare\b", r"\bcircle\b", r"\brounded?\b", r"\bfraktur\b", r"\bscript\b",
        r"\bdoublestruck\b", r"\bdouble.?struck\b", r"\bmonospace\b", r"\bcurrency\b",
        r"\bfancy ?letters for ?bio\b", r"\bmedievalstyle\b", r"\bfancytext\b",
        r"\binstafont\w*", r"\bigfont\w*", r"\bfbfont\w*", r"\bcooltextfont\w*",
        r"\bcoolsymbol\w*", r"\bfontcopypaste", r"\bgame ?names?\b", r"\bclan ?names?\b",
        r"\bsquad ?names?\b", r"\bguild ?names?\b", r"\bchannel ?names?\b", r"\bsymbolio\b",
        r"\btext ?faces?\b", r"\bstylish ?names?\b", r"\bstylish ?fonts?\b", r"\bfancy ?symbols?\b",
    ]
    DROP = [
        r"\bbaby\b", r"\bbabies\b", r"\bbusiness\b", r"\bbrand\b", r"\bcompany\b", r"\bteam\b",
        r"\busername ?ideas\b.*\bbaby\b", r"\bbot\b", r"\bgirls? name\b", r"\bboys? name\b",
        r"\bfonts? (free )?download\b", r"\bttf\b", r"\botf\b", r"\bdafont\b", r"\bcanva\b",
        r"\bphotoshop\b", r"\bfigma\b", r"\bword\b(?=.*font)", r"\bgoogle ?docs\b",
        r"\bhtml\b", r"\bcss\b", r"\bpython\b", r"\bpdf\b", r"\bavatar\b", r"\bskin\b",
        r"\bcrosshair\b", r"\bsensitivity\b", r"\bconfig\b", r"\bcrossh", r"\bdpi\b",
        r"\baim\b", r"\bhack\b", r"\bmod ?menu\b", r"\bwallpaper\b", r"\blogo ?(maker|design)\b",
        r"\bbabyname\b", r"\btrademark\b", r"\bdomain\b", r"\bsport\b", r"\bsports\b",
        r"\bnfl\b", r"\bnba\b", r"\bmovie\b", r"\bfilm\b", r"\bmovie ?name\b",
        r"\bplate\b", r"\bairtel\b", r"\bbsnl\b", r"\bjio\b", r"\bvi\b", r"\brto\b",
        r"\btattoo\b", r"\bfor ?logo\b", r"\blogo ?fonts?\b", r"\btypeface for\b",
        r"\bfaceit\b", r"\bleague of legends ?rank\b", r"\bporn\b", r"\bxxx\b", r"\bsex\b",
        r"\bnsfw\b", r"\bdiscord server\b(?!.*(font|name|symbol))", r"\bemote\b", r"\bsticker\b",
        r"\bgifs?\b", r"\bmemes?\b", r"\bgebeya\b", r"\bnumeral\b",
    ]
    kept, dropped = [], []
    for r in all_rows:
        n = norm(r["keyword"])
        if any(re.search(p, n) for p in DROP):
            dropped.append(r)
        elif any(re.search(p, n) for p in KEEP):
            kept.append(r)
        else:
            dropped.append(r)

    with open(os.path.join(OUT, "master-filtered.csv"), "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "lang", "vol", "three_mo", "yoy", "comp",
                                          "bid_lo", "bid_hi", "is_seed", "themes"])
        w.writeheader()
        w.writerows(kept)

    # ---- stats printout ----
    print(f"rows union: {len(all_rows)}  kept: {len(kept)}  dropped: {len(dropped)}  skipped-lines: {skipped}")
    from collections import Counter
    print("lang:", Counter(r["lang"] for r in kept))
    print("vol buckets:", Counter(r["vol"] for r in kept).most_common())
    print("\n-- top 40 kept --")
    for r in kept[:40]:
        print(f"  {r['vol']:>9,}  {r['keyword'][:44]:<46} {r['lang']:>3} seed={r['is_seed']}")
    print("\n-- top 30 dropped (inspect for false positives) --")
    for r in dropped[:30]:
        print(f"  {r['vol']:>9,}  {r['keyword'][:60]}")

if __name__ == "__main__":
    main()
