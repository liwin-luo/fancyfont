#!/usr/bin/env python3
"""Two-level keyword clustering + page mapping for fontdrafts niche.

Reads master-filtered.csv -> writes clusters-master.csv + quality report.
Cluster assignment = ordered first-match rules (platform > gaming > bio >
special > symbols > styles > core > informational). Non-English trees use
the same taxonomy with es/pt patterns.
"""
import csv, os, re, unicodedata
from collections import Counter, defaultdict

BASE = "/Users/luogangming/projects-b/fancyfont/seo/keyword-analysis"
SRC = os.path.join(BASE, "master-filtered.csv")
OUT = os.path.join(BASE, "clusters-master.csv")

def norm(s):
    s = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", s).strip().lower()

# ---------------------------------------------------------------- noise (intent-mismatch, dropped from niche analysis but kept flagged)
NOISE = [
    (r"\btaylor\b|\bswift\b|\bsong\b|\blyrics?\b", "song-lyrics"),
    (r"\bpicsart\b|\bphonto\b|\bcapcut\b|\bcanva\b|\bphotoshop\b|\bpixel ?lab\b|\bprocreate\b|\bsketch\b", "design-app"),
    (r"\bsamsung\b|\bcool ?jazz\b|\binstall\b|\bapk\b|\bapp download\b|\bkeyboard fonts?\b|\bandroid\b", "system-font"),
    (r"\bhindi\b|\btamil\b|\btelugu\b|\bmalayalam\b|\bbangla\b|\bbengali\b|\bpunjabi\b|\bmarathi\b|\bgujarati\b|\barabic\b|\burdu\b|\bpersian\b|\bfarsi\b|\bhebrew\b|\bkorean\b|\bamharic\b|\bsinhala\b|\bkannada\b|\bodia\b|\bsinhalese\b|\bnepali\b|\bthai\b|\bchinese ?font\b|\bjapanese ?font\b|\bkanji\b|\bcyrillic\b", "regional-script"),
    (r"\bvip ?number|\bvip ?no\b|\bvip ?mobile|\bvip ?phone|\bvip ?special\b|\bmobile ?numbers ?vip\b|\bfancy ?(mobile|cell) ?no|\bfancy ?number ?(booking|parivahan|vahan|list|idea|up|registration)|\bfancy ?no ?booking\b|\bbooking fancy\b|\bregistration fancy\b|\bparivahan\b|\bmparivahan\b|\bvahan\b|\baircel\b|\bvodafone\b|\bidea (vip|fancy)\b|\b9666\b|\b9848\b|\bsim\b.*\bnumber\b|\bchoice ?no\b|\bplate\b|\bfancy number punjab\b|\bfancy numbers? in \w+|\bcar fancy\b|\bcell phone fancy\b|\bvip ?(choice|cell|prepaid|shop) ?(mobile )?number\b", "telecom-vip-number"),
    (r"\bbarcode\b|\bcode ?128\b|\bmeta ?tag\b|\bmetatags?\b", "dev-barcode"),
    (r"\bcountry ?codes?\b|\bdial\b|\bisd\b", "telecom-codes"),
    (r"\bminecraft server\b|\bclutch\b", "misc"),
    # design-tool / image / logo / font-download intent — not copy-paste text
    (r"\b(word ?art|wordart|word design)\b|\bpng\b|\blogo\b|\bfont ?(image|picture|pairing|combinations?|template|families?|squirrel|webfont|site)\b|\btext (image|graphics|design|effect|portrait|into shape)\b|\bimage ?(generator|creator|maker)\b|\bgraphics?\b|\bmonogram\b|\bposter\b|\bthumbnail\b|\bt ?shirt\b|\bwedding\b|\bpresentation\b|\bfont ?designs?\b|\btext ?designs?\b|\bqr code\b|\bcreate my own font\b|\bserif\b|\bsans ?serif\b|\btypefaces?\b(?!.*(generator|copy|paste))|\bretro fonts?\b|\bmodern fonts?\b|\bfree fonts?\b|\bfonts? online free\b|\bfonts? (online|download|free download)\b|\bsplatoon\b|\bpokemon\b|\bzaner bloser\b|\bdardura\b|\bhypify\b|\bzcool\b|\bbest font\b|\bbest logotype\b|\bletter ?art\b|\bbaseball font\b|\bcatchy\b|\bcurvy fonts?\b|\bwedding font\b", "design-download"),
    (r"\bcomic sans\b|\bhelvetica\b|\btimes new roman\b|\bmonospace\b|\bligature\b|\bmetafont\b|\brecursive font\b|\bkufi\b|\bambigram\b|\bsquiggly\b|\bmaison margiela\b|\bwhole lotta red\b|\bsee you space\b|\bdisney villain\b|\bangel (tears|wing)\b|\bcrayon font\b|\bkool beans\b|\bphantommuff\b|\bntprecursive\b|\bjessica fonts\b|\bkarsu\b|\bmourich\b|\bcurly (writing|letter)|\bposh fonts?\b|\brefined fonts?\b|\bsophisticated\b|\brounded elegance\b|\btypewriter\b|\bwestern font\b|\bathletic fonts?\b|\bracing fonts?\b|\bmetal font\b|\bpixel fonts?\b|\bvintage font\b|\bfuturis\b|\bminimal fonts?\b|\bcondensed\b|\bweb safe\b|\bwatermark\b|\banime fonts?\b|\bhalloween font\b|\bchristmas font\b|\bbirthday font\b|\bbody font\b|\badobe\b|\bsvg\b|\bfrom image\b|\b(sample|size|match|example|icon|pattern) ?generator\b|\bfont code\b|\bfonts? for websites\b|\bcool [a-z] font\b|\bcool (shrift|typo)\b|\bshrift generator\b|\bfont (family|web|sample) ?generator\b", "design-download"),
]

# ---------------------------------------------------------------- cluster rules: (cluster, sub, pattern)
# Order = priority. Applied to normalized keyword. Non-en rows fall back to es/pt rule trees.
RULES = [
    # ---- platform first (a platform word dominates intent even with style words)
    ("platform", "instagram", r"\binstabio\b|\binsta(gram)?\b|\big\b|\bigfont\w*|\binstafont\w*|\binstagrammable\b|\bfon ig\b"),
    ("platform", "tiktok", r"\btik ?tok\b|\btiktok\b"),
    ("platform", "discord", r"\bdiscord\b"),
    ("platform", "whatsapp", r"\bwhats ?app\b|\bwhatsapp\b|\bwa\b(?!.*r)"),
    ("platform", "facebook", r"\bfacebook\b|\bfb\b"),
    ("platform", "youtube", r"\byoutube\b|\byt\b"),
    ("platform", "twitter", r"\btwitter\b|\bxtwitter\b"),
    ("platform", "snapchat", r"\bsnap ?chat\b"),
    ("platform", "telegram", r"\btelegram\b"),
    ("platform", "linkedin", r"\blinkedin\b"),
    ("platform", "pinterest", r"\bpinterest\b"),
    ("platform", "generic-social", r"\bsocial media\b"),
    # ---- gaming names
    ("gaming-names", "roblox", r"\broblox\b|\bro ?bux\b"),
    ("gaming-names", "free-fire", r"\bfree ?fire\b|\bff\b.*\bname\b|\bnickfinder\b|\bgarena\b"),
    ("gaming-names", "pubg", r"\bpubg\b|\bbattlegrounds\b"),
    ("gaming-names", "fortnite", r"\bfortnite\b"),
    ("gaming-names", "adopt-me", r"\badopt ?me\b"),
    ("gaming-names", "berry-avenue", r"\bberry avenue\b|\bblox ?fruits?\b"),
    ("gaming-names", "minecraft", r"\bminecraft\b"),
    ("gaming-names", "cod", r"\bcod\b|\bcall of duty\b|\bwarzone\b|\bmodern warfare\b"),
    ("gaming-names", "valorant", r"\bvalorant\b"),
    ("gaming-names", "genshin", r"\bgenshin\b"),
    ("gaming-names", "among-us", r"\bamong us\b"),
    ("gaming-names", "agario", r"\bagar ?io\b"),
    ("gaming-names", "generic-game", r"\bfor ml\b|\bmobile legends\b|\bbgmi\b|\bgame ?names?\b|\bgaming ?name|\bgame ?user|\bplayer ?name|\bsquad\b|\bclan\b|\bguild\b|\bign\b|\bgamer ?name|\bgaming ?nick|\bpro ?player\b"),
    # ---- bio / username / nickname scenario
    ("bio-username", "bio", r"\bbios?\b|\bbiography\b"),
    ("bio-username", "username", r"\buser ?names?\b"),
    ("bio-username", "nickname", r"\bnick ?names?\b|\bnicks?\b(?!.*and worst)|\bnickname"),
    ("bio-username", "display-name", r"\bdisplay ?names?\b|\bdn\b"),
    ("bio-username", "profile-name", r"\b(profile|account|page) ?names?\b|\bname ?ideas\b|\bnames? ?generator\b|\bname ?maker\b|\bname ?creator\b|\bstylish ?names?\b|\bnames? stylish\b|\bfonts? name\b|\bname font\b|\bfancy ?names?\b|\bcool ?names?\b|\bcute ?names?\b|\baesthetic ?names?\b|\bnames? for\b"),
    # ---- special functions
    ("special", "invisible-blank", r"\binvisible\b|\bblank ?space\b(?!.*taylor)|\bempty ?(space|char|text)|\bblank ?(char|text|name)|\bhidden ?char|\bnon.?breaking\b|\bspace ?(copy|paste|letter|text|character)"),
    ("special", "fancy-numbers", r"\bfont number generator\b|\bnumerical fonts?\b|\bcircle number\b|\bfancy ?(nos?|numbers?)\b(?!.*plate)|\bstylish ?numbers?\b|\bcool ?numbers?\b|\bnumber ?fonts?\b|\bnumerals? ?(copy|paste|font|stylish)|\bfancy ?digits?\b|\bnumbers? ?(for |copy|paste|stylish)"),
    ("special", "sub-superscript", r"\bsub ?script|\bsuper ?script"),
    ("special", "wide-text", r"\bwide ?text|\bfull ?width|\bvapor ?wave|\baesthetic ?text\b(?!.*(copy|paste))"),
    # ---- symbols / kaomoji / ascii / text-art
    ("symbols", "heart", r"\bheart"),
    ("symbols", "star", r"\bstar\b|\bstars\b"),
    ("symbols", "arrow", r"\barrow"),
    ("symbols", "check-cross", r"\bcheck ?(mark|mark text)?\b.*\b(text|copy|paste|symbol)?\b|\btick\b|\bcross\b(?!.*word)"),
    ("symbols", "music", r"\bmusic ?note|\bnote ?symbol"),
    ("symbols", "bullets-brackets", r"\bbullet|\bbracket|\bparenthes|\bdash\b"),
    ("symbols", "kaomoji-emoticon", r"\bkaomoji|\bemoticon|\bfaces? (copy|paste|text)|\bsmileys?\b(?!.*font)|\bhappy ?face\b|\bsad ?face\b|\bcute ?faces?\b"),
    ("symbols", "emoji", r"\bemojis?\b|\bemoji "),
    ("symbols", "ascii-text-art", r"\bascii\b|\btext ?art\b|\bfont ?art\b|\basciiart\b"),
    ("symbols", "general-symbols", r"\bskull\b|\byin yang\b|\bpentagram\b|\blightning ?bolt\b|\bwarning ?sign\b|\bpesos ?sign\b|\bmusical ?note\b|\bhammer and sickle\b|\bonkar\b|\bglyphs?\b|\bhieroglyphs?\b|\bcharacters to copy\b|\btext characters\b|\bcustom characters\b|\bkeyboard characters\b|\bsimple text faces\b|\bwingdings?\b|\bwebdings?\b|\bdingbats?\b|\bcircle (in )?text\b|\binfinity (text|symbol)\b|\bpeace (sign|logo)\b|\bapple logo\b|\bbts logo\b|\bcharacter text\b|\bsymbols?\b|\bspecial ?(char|character)s?\b|\bcharacters? (copy|paste|for)\b|\bsigns? (copy|paste|for text)\b|\bicons? (for|copy|paste|text)\b|\bsimbol|\bsimbolos?\b|\bdecorat"),
    # ---- signature (gap candidate)
    ("signature", "signature", r"\bsignature\b|\bautograph\b"),
    # ---- styles (specific style names before generic)
    ("style", "cursive-script", r"\bjoined ?(up )?(writing|font)\b|\bjoint writing\b|\brunning (writing|letter)|\bcursif|\bcursiv|\bscripts?\b(?!.*(font|generator|text|letters|writing)for)|\bhandwrit|\bcalligra|\bhand ?(letter|writ|script)|\bhandstyle\b|\bpenmanship\b|\bfontes ?de ?letra ?(cursiva|script)"),
    ("style", "bold-italic", r"\bbold\b|\bitalics?\b|\bitalicized?\b|\bbolditalic\b|\bbold ?italic\b|\bstrike\b(?!.*through)|\bunderlin"),
    ("style", "gothic-blackletter", r"\bgothic|\bgoth\b|\bold ?english\b|\bblackletter\b|\bfraktur\b|\bmedieval\b|\bmedival\b|\bcall of style\b|\bvampire\b"),
    ("style", "small-tiny", r"\bsmall ?capital\b|\bsmall ?words\b|\btiny ?words\b|\bsmall ?(text|font|letters?|writing|generator)|\btext ?small\b|\btiny ?(text|font|letters?|writing)|\blittle ?text\b|\blil ?text\b|\bmini ?(text|font)|\bsmall ?caps?\b|\bsubscript text\b"),
    ("style", "bubble", r"\bbubble"),
    ("style", "aesthetic", r"\baestheti"),
    ("style", "cute-kawaii", r"\bcute\b|\bkawaii\b|\bpretty ?(fonts?|text|letters)\b"),
    ("style", "zalgo-glitch", r"\bzalgo\b|\bglitch|\bcreepy\b|\bcursed\b|\bscary\b|\bhacked?\b|\bcorrupt|\bdemonic\b|\bhorror\b"),
    ("style", "strikethrough", r"\bstrikethrough|\bstriked ?through\b|\bstrike ?through|\bcrossed ?(out|text|letters)\b|\bcross ?out\b|\bline ?through\b|\bslash ?through\b"),
    ("style", "upside-down", r"\bup ?side ?down|\bupsidedown\b|\btext upside\b|\bupside\b|\binvert|\bflip ?(text|letters?|words?)\b|\bbackwards?\b|\bmirror\b|\brevers"),
    ("style", "coquette", r"\bcoquette\b"),
    ("style", "preppy", r"\bpreppy\b"),
    ("style", "chicano", r"\bgangster mexican\b|\bmexican letters\b|\bchicano\b|\bcholo\b|\bbarrio\b"),
    ("style", "elegant-luxury", r"\belegant\b|\belegante\b|\bluxur|\bfanciest?\b.*\bstyle\b|\bclassy\b|\bfancy ?writing\b|\bfancy ?lettering\b"),
    ("style", "3d-text", r"\b3d ?(text|font|letter)|\bthree ?dimensional\b"),
    ("style", "graffiti", r"\bgraffiti\b|\bstreet ?art\b"),
    ("style", "fancy-general", r"\bfancy\b|\bfancier\b"),
    ("style", "weird-funny", r"\bweird\b|\bfunny\b|\bstrange\b|\bsilly\b|\bcrazy\b|\bwacky\b|\bcool ?writing\b"),
    # ---- competitor brands (query demand on competitor products)
    ("competitor-brand", "brand", r"\blingojam\b|\blingo ?jam\b|\bfontmeme\b|\bfontspace\b|\bcoolsymbol\b|\bcooltextfont\b|\bcool ?text\b|\bmessletters\b|\bfsymbols?\b|\btexteditor ?io\b|\bcaractersspecial\w*|\bfancytextool\w*|\bfancytext ?(io|tool|gem)\b|\bfont ?generator ?io\b|\bigfonts? ?io\b|\binstafonts? ?io\b|\bfonts ?io\b|\bpiliapp\b|\bcoolsymbo\b"),
    # ---- informational / how-to (blog targets)
    ("informational", "how-to", r"\bhow (to|do|can|does)|\bcambiar\b|\bcómo\b|\bcomo (cambiar|poner|hacer|colocar|escribir|colocar|adicionar|mudar|trocar)\b|\bchange (font|text|name|nick|letter)|\bput (fonts?|symbols?|text)\b|\badd (fonts?|symbols?|text)\b|\btype in\b|\bwrite in\b|\bmake (text|fonts?|letters?)\b(?!.*generator)|\bturn (text|letters?)\b"),
    ("informational", "what-why", r"\bwhat (is|are|does|do)\b|\bwhy (is|are|does|do|my)\b|\bmeaning\b|\bque es\b|\bpor ?que\b|\bwhy ?do\b"),
    ("informational", "limits-troubleshoot", r"\bcharacter ?limit|\bword ?limit|\blimit\b.*\bchar|\bnot working\b|\bdoesn'?t work\b|\bwon'?t (show|work|let)\b|\bboxes\b|\bsquares\b(?!.*text)|\bsupport\b.*\bfont|\bshow up\b|\bappear\b"),
    # ---- core generic (homepage)
    ("core-generic", "generator-generic", r"\b(font|text|letter|letters?|writing|typography|typeface|lettertype|fonte?styler) ?(generator|gen|ge|creator|maker|changer|typer|writer|styler|converter|customizer|editor|designer|decorator|transformer|fontes?)\b|\bgenerator ?(font|text|of)\b|\b(font|text) ?(copy|paste|copas)\b|\bcopy ?(and|&|n|e)? ?paste ?(fonts?|text|letters?|lettering)?\b|\bfonts? ?copy ?(and|e)? ?paste|\bcopy ?font\w*\b|\bcool ?fonts?\b|\bcooler ?font\b|\bfancy ?fonts?\b|\bstylis\w* ?(text|fonts?|letters?|writing)?\b|\bfont ?style\b|\btext ?style\b|\bfancy ?text\b|\bstylish ?fonts?\b|\btext ?fonts?\b|\bcute ?fonts?\b|\bcool ?letters?\b|\bcool ?text\b|\bfancy ?letters?\b|\bfont ?online\b|\btext ?online\b|\bfonts? for\b|\bfont for\b|\bunicode ?(fonts?|text)\b|\bdifferent ?fonts?\b|\bfont ?that\b|\bfont ?and\b|\bfonts? converter\b|\btext ?styler\b|\bfonts? free\b|\bword fonts?\b|\bcopas\b|\bletterings?\b|\btype ?generator\b|\btyping generator\b|\bunicode\b|\balphabet fonts?\b|\balphabet in\b|\bfonts? ?(gen|g)\b|\bgenera font\b|\brandom ?fonts?\b|\bfont ?cooler\b|\bfantasy ?(text|fonts?)\b|\bfonts ?online\b|\bcool ?writings?\b|\btrendy fonts?\b|\bgen ?z ?fonts?\b|\bfonts ?to ?copy\b|\bcopyable ?fonts?\b|\bfonts ?style ?changer\b|\bcool ?(and |and easy |easy )?fonts?\b|\bfbfontchanger\b|\bfancy ?(a|i|e|o|u|l|m|r|t|s) ?(text|letter|writing)\b|\b(cursive|stylish) ?(a|i|l|m|r|t|s) ?(letter|font)\b|\bletter [a-z] (copy|in|and)\b|\bfonts? ?converte?r?\b|\bcopy ?pasta\b|\bf9nt\b|\btext keren\b|\bfancykey\b|\bmoniker\b|\bcool s font\b|\bfont (switcher|modifier|randomizer)\b|\btext (simulator|to generator)\b|\balphabet changer\b|\bbadass\b|\bclever fonts?\b|\brare fonts?\b|\bchat style\b|\breel fonts?\b|\bcolor(ful)? (letter|letters)\b|\bdown text\b|\bcool (design|new) (font|fonts)\b|\bcool designs? letters\b|\bfont text cool\b|\bletter fonts cool\b|\bcool typography\b|\bbig words generator\b|\bletter design generator\b|\bcool (numerical|keyboard) (fonts|letters)\b"),
    ("longtail", "misc", r".*"),
]

ES_RULES = [
    ("platform", "instagram", r"\binstagram\b|\big\b"),
    ("platform", "whatsapp", r"\bwhats ?app\b"),
    ("platform", "tiktok", r"\btik ?tok\b"),
    ("platform", "discord", r"\bdiscord\b"),
    ("gaming-names", "free-fire", r"\bfree ?fire\b|\bgarena\b|\bnickfinder\b"),
    ("gaming-names", "pubg", r"\bpubg\b"),
    ("gaming-names", "generic-game", r"\bgame ?names?\b|\bgame ?nick|\bgaming\b"),
    ("bio-username", "nickname", r"\bapodo|\bnick"),
    ("bio-username", "username", r"\buser ?names?\b"),
    ("special", "fancy-numbers", r"\bnumerales?\b"),
    ("symbols", "general-symbols", r"\bsimbolos?\b|\bsimbol"),
    ("style", "cursive-script", r"\bcursivas?\b"),
    ("style", "gothic-blackletter", r"\bgotic"),
    ("style", "small-tiny", r"\bpeek|\bpeque|\bchiquit|\bminusculas?\b"),
    ("style", "fancy-general", r"\bbonitas?\b|\braras?\b|\bespeciales?\b|\bester|\bdecorad|\bfancy\b|\bstylis|\bletras\b|\bfuente|\bfontes?\b"),
    ("informational", "how-to", r"\bcomo (cambiar|poner|hacer|colocar|escribir|adicionar|mudar|trocar)\b|\bcómo\b"),
    ("core-generic", "generator-generic", r".*"),
]

def classify(kw_norm, lang):
    rules = ES_RULES if lang in ("es", "pt", "es?") else RULES
    for cluster, sub, pat in rules:
        if re.search(pat, kw_norm):
            return cluster, sub
    return "UNMAPPED", ""

def detect_artifact(kw_norm, vol, canonical_pool):
    """KP close-variant artifacts: e.g. 'font ge'/'font gen' share font generator's bucket."""
    stripped = kw_norm.replace(" ", "")
    for cand in canonical_pool:
        if cand == kw_norm:
            continue
        c = cand.replace(" ", "")
        if vol >= 500000 and len(stripped) <= 14 and stripped != c:
            if stripped in c or (len(stripped) >= 5 and c.startswith(stripped[:5]) and stripped[:4] == c[:4]):
                return True
    return False

def main():
    rows = list(csv.DictReader(open(SRC)))
    canonical_pool = {r["keyword"] for r in rows if int(r["vol"]) >= 500000}
    out_rows = []
    cluster_stats = Counter()
    unmapped = []
    for r in rows:
        kw, lang, vol = r["keyword"], r["lang"], int(r["vol"])
        n = norm(kw)
        noise_hit = None
        for pat, tag in NOISE:
            if re.search(pat, n):
                noise_hit = tag
                break
        if noise_hit:
            cluster, sub = "irrelevant-" + noise_hit, ""
        else:
            cluster, sub = classify(n, lang)
        if cluster == "UNMAPPED":
            unmapped.append((kw, vol, lang))
        # fancy-general IS the homepage head-term intent, not a style page
        if cluster == "style" and sub == "fancy-general":
            cluster, sub = "core-generic", "fancy-core"
        artifact = detect_artifact(n, vol, canonical_pool)
        cluster_stats[f"{cluster}|{sub}"] += 1
        out_rows.append({
            "keyword": kw, "lang": lang, "vol": vol, "three_mo": r["three_mo"], "yoy": r["yoy"],
            "comp": r["comp"], "is_seed": r["is_seed"], "themes": r["themes"],
            "cluster": cluster, "sub": sub, "variant_artifact": artifact,
        })
    out_rows.sort(key=lambda r: (r["cluster"], r["sub"], -r["vol"]))
    with open(OUT, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(out_rows[0].keys()))
        w.writeheader()
        w.writerows(out_rows)

    print(f"total {len(out_rows)}")
    for k, v in sorted(cluster_stats.items(), key=lambda x: -x[1]):
        print(f"  {v:>6}  {k}")
    print(f"\nUNMAPPED: {len(unmapped)}")
    for kw, vol, lang in sorted(unmapped, key=lambda x: -x[1])[:60]:
        print(f"  {vol:>9} {kw} [{lang}]")
    print("\n-- artifact flags (top 25) --")
    arts = [r for r in out_rows if r["variant_artifact"]]
    for r in arts[:25]:
        print(f"  {r['vol']:>9}  {r['keyword']}")

if __name__ == "__main__":
    main()
