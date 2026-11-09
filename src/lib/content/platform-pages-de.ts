// Deutsche Plattform-Seiten: Instagram, TikTok, Facebook, YouTube, WhatsApp,
// Discord und die Spielernamen-Einstiege. Limits sind „circa“-Werte — der
// eigene Zähler der Plattform ist immer die maßgebliche Quelle.

import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesDe: Record<string, { de: PlatformPageCopy }> = {
  "instagram-fonts": {
    de: {
      navName: "Instagram Fonts",
      h1: "Instagram Font Generator",
      title: "Instagram Fonts kopieren — Name 30 & Bio 150",
      description:
        "Fancy Fonts für Instagram: Anzeigename (ca. 30 Zeichen) und Bio (150). Stile erscheinen beim Tippen, ein Tipp zum Kopieren — der @username bleibt schlicht.",
      platform: "Instagram",
      intro: [
        "Instagrams Anzeigename und Bio akzeptieren beide ausgefallene Unicode-Zeichen — 𝓈𝓊𝓃𝓈ℯ𝓉 und ｖａｐｏｒｗａｖｅ sind IG-Klassiker. Tippe unten, sieh die Vorschau live, tippe zum Kopieren.",
        "Die Grenze ist dein @username: nur Buchstaben, Ziffern, Punkte und Unterstriche — ausgefallene Zeichen werden abgelehnt. Halte die Stile in Name und Bio; Handles und Hashtags bleiben schlicht.",
      ],
      limits: [
        { label: "Anzeigename", value: "30 Zeichen, Fancy-Symbole zählen mit" },
        { label: "Bio", value: "150 Zeichen, unterstützt Zeilenumbrüche & Fancy-Zeichen" },
        { label: "@username", value: "Nur Buchstaben/Ziffern/Punkte/Unterstriche — keine Fancy-Zeichen" },
      ],
      compat: [
        "Anzeigename: Schreibschrift-, Fullwidth- und Rahmen-Stile funktionieren alle",
        "Bio: Fancy-Zeichen unterstützt; mit Zeilenumbrüchen für Layout kombinieren",
        "Stories/Reels-Text: nutzt das In-App-Fontsystem — hat mit Zeichenstilen nichts zu tun",
        "Hashtags: Fancy-Zeichen brechen die Tag-Suche — Tags schlicht halten",
      ],
      examples: ["𝓈𝓊𝓃𝓈ℯ𝓉", "ｖａｐｏｒｗａｖｅ", "♡ 𝐋𝐢𝐞𝐛𝐞 ♡", "୨୧melody୨୧", "⋆r_e_i_s_e_n⋆", "𝐊𝐚𝐢𝐬𝐞𝐫", "☾mondkind☾", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶"],
      steps: [
        "Instagram öffnen → Profil bearbeiten → Name oder Bio.",
        "Kandidaten hier generieren — Schreibschrift und Fullwidth sind die IG-Klassiker.",
        "Einfügen und die 30/150-Zeichenzähler prüfen.",
        "Nach dem Speichern einmal selbst suchen — eine schlichte Version in der Bio behalten.",
      ],
      faq: [
        {
          q: "Name vs. Benutzername — worin liegt der Unterschied?",
          a: "Der @username ist deine Login- und Such-ID, nur schlichte Zeichen. Der Name ist die Anzeigezeile, 30 Zeichen mit erlaubten Fancy-Stilen. Fancy Fonts gelten nur für Name und Bio.",
        },
        {
          q: "Funktioniert Durchgestrichen in der Bio?",
          a: "Die Zeichen lassen sich einfügen, aber IGs Darstellung kann kombinierende Zeichen verrutschen lassen. Für das Bio-Layout lieber Ganz-Glyphen-Stile wie Schreibschrift und Fullwidth nehmen.",
        },
        {
          q: "Beeinträchtigt ein ausgefallener Name das Markieren?",
          a: "Nein — @Erwähnungen matchen den @username, der von einem gestylten Anzeigenamen unberührt bleibt.",
        },
        {
          q: "Verbrauchen Fancy-Zeichen mein 30/150-Limit schneller?",
          a: "Meistens nein — Schreibschrift-, Fett- und Fullwidth-Buchstaben zählen je eins, genauso wie normale Buchstaben. Einige schwere Symbole können als Anzeigebreite 2 zählen; prüfe nach dem Einfügen IGs eigenen Zähler.",
        },
        {
          q: "Funktionieren Fancy Fonts in Stories oder Reels?",
          a: "Nicht als Zeichenstile — Stories- und Reels-Text nutzt Instagrams In-App-Fontmenü, das vom Einfügen getrennt ist. Fancy Unicode gehört in Name und Bio; in Stories wähle aus den eingebauten Stilen.",
        },
        {
          q: "Ist dieses Instagram-Font-Tool kostenlos?",
          a: "Ja — kostenlos, ohne Anmeldung, und es wird nichts installiert oder mit deinem Konto verbunden. Du kopierst die Zeichen hier und fügst sie selbst in Instagram ein.",
        },
      ],
    },
  },
  "tiktok-fonts": {
    de: {
      navName: "TikTok Fonts",
      h1: "TikTok Font Generator",
      title: "TikTok Schrift Generator — Nickname ~24 & Bio ~80",
      description:
        "Fancy Fonts für TikTok-Nicknames (ca. 24 Zeichen) und Bios (ca. 80). Live-Vorschau, Kopieren mit einem Tipp; der @Handle und Hashtags bleiben schlicht.",
      platform: "TikTok",
      intro: [
        "TikTok-Nicknames akzeptieren ausgefallene Unicode-Zeichen, und die Bio verträgt die meisten Stile ebenfalls. Tippe deinen Nickname unten — Gamer-Rahmen, Schreibschrift, Fullwidth — und tippe zum Kopieren.",
        "Achtung an der Grenze: dein @Handle nimmt nur schlichte Zeichen, und Hashtags mit Fancy-Zeichen matchen nicht. Stile gehören in den Nickname und die Bio.",
      ],
      limits: [
        { label: "Nickname", value: "Ca. 24 Zeichen — verlasse dich auf den Zähler des Bearbeitungsfensters" },
        { label: "Bio", value: "Ca. 80 Zeichen, Fancy-Symbole zählen mit" },
        { label: "@Handle", value: "Nur Buchstaben/Ziffern/Punkte/Unterstriche — keine Fancy-Zeichen" },
      ],
      compat: [
        "Nickname: Fancy-Zeichen funktionieren; Nickname-Änderungen sind ratenbegrenzt",
        "Bio: die meisten Stile okay; schwere kombinierende Zeichen können auf älteren Androids brechen",
        "Kommentare: unterstützt, aber Symbolewände werden evtl. eingeklappt",
        "Suche: ausgefallene Nicknames matchen evtl. nicht wörtlich — schlichten Alias in der Bio behalten",
      ],
      examples: ["꧁sternlicht꧂", "ｖａｐｏｒｗａｖｅ", "𝓈𝓊𝓃𝓈ℯ𝓉", "☾mondgirl☾", "★彡hype彡★", "𝐊𝐚𝐢𝐬𝐞𝐫", "♡ 𝐋𝐢𝐞𝐛𝐞 ♡", "꧁𝐉ä𝐠𝐞𝐫꧂"],
      steps: [
        "TikTok öffnen → Profil → Profil bearbeiten → Name.",
        "Kandidaten hier generieren und zwei oder drei markieren.",
        "In das Namensfeld einfügen und den Zähler im Blick behalten.",
        "Speichern, dann dein Profil auf einem anderen Gerät prüfen.",
      ],
      faq: [
        {
          q: "Schadet ein ausgefallener Nickname meiner Reichweite?",
          a: "Nein — Fancy-Zeichen sind normaler Text; Reichweite hängt vom Inhalt ab. Der echte Nachteil ist die Suche: ein gestylter Nickname matcht evtl. nicht wörtlich, also ab ins Bio eine schlichte Version.",
        },
        {
          q: "Kann ich Fancy Fonts in Beschreibungen nutzen?",
          a: "Ja, Beschreibungen akzeptieren die Zeichen. Aber Hashtags müssen schlicht bleiben, sonst löst der Tag nicht auf.",
        },
        {
          q: "Warum ließ sich mein Name nicht speichern?",
          a: "TikTok prüft Nicknames gegen eine Sperrliste; ein paar exotische Symbole lösen sie aus. Tausche den Schmuck gegen sicherere (♡ ★ 『』) und versuch es erneut.",
        },
        {
          q: "Warum zeigt mein Nickname auf älteren Androids Kästchen?",
          a: "Diesen Geräten fehlen Fonts für die schwereren Stile — kombinierende Zeichen und seltene Stapel versagen zuerst. Schreibschrift, Fett und gängige Rahmen (꧁꧂ ★ ♡) überleben die meisten Handys.",
        },
        {
          q: "Zählen Fancy-Zeichen mehr beim Nickname- oder Bio-Limit?",
          a: "Meist je eins — aber manche schwere Symbole zählen als Anzeigebreite 2. Mit nur ~24 Namenszeichen: vor dem Speichern den Zähler des Bearbeitungsfensters checken.",
        },
        {
          q: "Wie oft darf ich meinen TikTok-Nickname ändern?",
          a: "Nickname-Änderungen sind ratenbegrenzt; ein fehlgeschlagenes Speichern kann dich eine Weile aussperren. Entscheide hier zuerst, markiere zwei Kandidaten und füge nur einen ein, bei dem du sicher bist.",
        },
      ],
    },
  },
  "facebook-fonts": {
    de: {
      navName: "Facebook Fonts",
      h1: "Facebook Font Generator",
      title: "Facebook Fonts kopieren — Name & Bio-Stile",
      description:
        "Fancy Fonts für deinen Facebook-Namen und Kurzbeschreibung. Stile erscheinen beim Tippen, ein Tipp zum Kopieren — Suche und @Erwähnungen bleiben schlicht.",
      platform: "Facebook",
      intro: [
        "Facebooks Anzeigename und die Kurzbeschreibung im Profil akzeptieren ausgefallene Unicode-Zeichen — 𝓈𝓊𝓃𝓈ℯ𝓉, 𝐊𝐚𝐢𝐬𝐞𝐫, ♡ 𝐋𝐢𝐞𝐛𝐞 ♡. Tippe unten, prüfe die Vorschau, kopiere mit einem Tipp.",
        "Grenzen kennen: Facebooks Namensfelder haben eigene Richtlinien, und die Suche matcht deinen echten Namen. Dekoriere dezent und halte deinen Klarnamen auffindbar.",
      ],
      limits: [
        { label: "Name", value: "Ca. 50 Zeichen — Facebooks eigenes Feld zählt verbindlich" },
        { label: "Kurzbeschreibung", value: "Ca. 101 Zeichen, Fancy-Symbole zählen mit" },
        { label: "Namensrichtlinien", value: "Facebook verlangt einen echten Namen; Stile können abgelehnt werden" },
        { label: "Zählung", value: "Manche Felder zählen einen stilisierten Buchstaben als mehrere Zeichen — Facebooks eigenes Feld ist verbindlich" },
      ],
      compat: [
        "Name: ausgefallene Zeichen funktionieren meist, werden aber strenger geprüft als woanders",
        "Kurzbeschreibung: Fancy-Zeichen unterstützt",
        "Beiträge & Kommentare: Stile bleiben als Text erhalten",
        "Suche & Freundschaftsanfragen: matchen den echten Namen — schlichte Version behaltbar machen",
      ],
      examples: ["𝐊𝐚𝐢𝐬𝐞𝐫", "♡ 𝐋𝐢𝐞𝐛𝐞 ♡", "𝓈𝓊𝓃𝓈ℯ𝓉", "☾morgenlicht☾", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶", "⋆f e i e r n⋆", "✧gemütlich✧", "『kuschelmodus』"],
      steps: [
        "Facebook öffnen → Profil → Info → Name bzw. Kurzbeschreibung bearbeiten.",
        "Kandidaten hier generieren und zwei bis drei markieren.",
        "Einfügen und speichern; lehnt Facebook ab, den nächsten Kandidaten nehmen.",
        "Danach selbst suchen — dein echter Name bleibt die Such-ID.",
      ],
      faq: [
        {
          q: "Erlaubt Facebook ausgefallene Namen überhaupt?",
          a: "Die Namensrichtlinien verlangen einen authentischen Namen, und schwere Stile können abgelehnt werden. Dezente Stile im Anzeigenamen funktionieren meist; garantiert nicht ist es nie — teste im eigenen Feld.",
        },
        {
          q: "Bleibt meine Auffindbarkeit bestehen?",
          a: "Freunde suchen dich über deinen echten Namen. Dekoriere den Anzeigenamen nur dezent und führe deinen Klarnamen weiter — z. B. im Feld „Außerdem bekannt als“.",
        },
        {
          q: "Warum wurde mein Name abgelehnt?",
          a: "Facebooks Validierung ist strenger als bei anderen Plattformen: Symbole, Ziffern statt Namen oder ungewöhnliche Zeichenketten verstoßen gegen die Namensrichtlinien. Nimm einen dezenteren Stil.",
        },
        {
          q: "Zählen Fancy-Zeichen anders gegen das Limit?",
          a: "Meist je eins — ein paar schwere Symbole können als Anzeigebreite 2 zählen. Prüfe nach dem Einfügen Facebooks eigenen Zähler im Bearbeitungsfeld.",
        },
        {
          q: "Funktionieren Fancy Fonts in Facebook-Gruppen?",
          a: "In Beiträgen und Kommentaren ja — es ist normaler Text. Für deinen Gruppen-Beitrittsnamen gilt: Kollegen und Nachbarn finden dich über den echten Namen, halte ihn erkennbar.",
        },
        {
          q: "Ist dieses Facebook-Font-Tool kostenlos?",
          a: "Ja — kostenlos, ohne Anmeldung, keine Verbindung zu deinem Konto. Du kopierst die Zeichen hier und fügst sie selbst in Facebook ein.",
        },
      ],
    },
  },
  "youtube-fonts": {
    de: {
      navName: "YouTube Fonts",
      h1: "YouTube Font Generator",
      title: "YouTube Kanalname Generator — Kanal ~100 & Handle ~30",
      description:
        "Fancy Fonts für deinen YouTube-Kanalnamen (ca. 100 Zeichen) und @Handle (ca. 30). Live-Vorschau, ein Tipp zum Kopieren — der Handle bleibt schlicht.",
      platform: "YouTube",
      intro: [
        "Dein YouTube-Kanalname verträgt ausgefallene Unicode-Zeichen — perfekt für 𝐊𝐚𝐢𝐬𝐞𝐫 𝐆𝐚𝐦𝐢𝐧𝐠 oder ꧁sternlicht꧂. Tippe unten, sieh die Stile live, kopiere mit einem Tipp.",
        "Der @Handle ist die harte Grenze: nur Buchstaben, Ziffern, Punkte, Unterstriche und Bindestriche. Kanalname und Kanalbeschreibung dürfen styliert sein; der Handle bleibt schlicht.",
      ],
      limits: [
        { label: "Kanalname", value: "Ca. 100 Zeichen, Fancy-Zeichen zählen mit" },
        { label: "@Handle", value: "Ca. 30 Zeichen, nur Buchstaben/Ziffern/Punkte/Unterstriche/Bindestriche" },
        { label: "Kanalbeschreibung", value: "Ca. 1000 Zeichen — für Layout und schlichten Alias nutzbar" },
        { label: "Zählung", value: "Manche Felder zählen einen stilisierten Buchstaben als mehrere Zeichen — YouTubes Zähler ist verbindlich" },
      ],
      compat: [
        "Kanalname: ausgefallene Zeichen voll unterstützt",
        "Kanalbeschreibung: Fancy-Zeichen okay; schlichte Schreibweise für die Suche einplanen",
        "Kommentare: Stile bleiben erhalten; dein Kanalname wird daneben schlicht angezeigt",
        "Handle & Kanal-URL: matchen immer den schlichten Handle",
      ],
      examples: ["𝐊𝐚𝐢𝐬𝐞𝐫 𝐆𝐚𝐦𝐢𝐧𝐠", "꧁sternlicht꧂", "𝓈𝓊𝓃𝓈ℯ𝓉 𝕊𝕥𝕦𝕕𝕚𝕠", "☾mondkanal☾", "★彡hype彡★", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶 𝒱𝓁𝑜𝑔𝓈", "✧fokus✧", "⋆b i l d e r⋆"],
      steps: [
        "YouTube Studio öffnen → Anpassung → Grundlegende Infos.",
        "Kanalnamen-Kandidaten hier generieren und zwei markieren.",
        "Einfügen, speichern; den @Handle separat schlicht wählen oder prüfen.",
        "Kanalseite aufrufen und die Darstellung auf Handy und Desktop prüfen.",
      ],
      faq: [
        {
          q: "Kanalname vs. @Handle — was ist der Unterschied?",
          a: "Der Kanalname ist die Anzeigezeile und darf Fancy-Zeichen enthalten. Der @Handle ist deine Adresse (@deinhandle und die Kanal-URL) und akzeptiert nur schlichte Zeichen.",
        },
        {
          q: "Finden mich Abonnenten trotzdem, wenn mein Kanalname gestylt ist?",
          a: "Ja — Suche und Erwähnungen laufen über den Handle und die Kanal-ID. Ein sehr ausgefallener Name kann aber schwer zu erraten sein; nenne eine schlichte Variante in der Kanalbeschreibung.",
        },
        {
          q: "Wie oft kann ich meinen Kanalnamen ändern?",
          a: "Kanalnamen-Änderungen sind nicht auf ein paar pro Woche begrenzt wie Handles, aber zu häufiges Wechseln verwirrt Abonnenten. Entscheide hier zuerst und wechsle mit Bedacht.",
        },
        {
          q: "Zählen Fancy-Zeichen anders gegen die ~100 Zeichen?",
          a: "Meist je eins — ein paar schwere Symbole können als Anzeigebreite 2 zählen. Bei ~100 Zeichen ist Spielraum genug; prüfe nach dem Einfügen YouTube Studios eigenen Zähler.",
        },
        {
          q: "Funktionieren Fancy Fonts in Videobeschreibungen?",
          a: "Ja — Beschreibungen sind normaler Text. Aber halte Titel, Tags und den Handle schlicht: Suchmatching und Verlinkungen brauchen die unformatierten Zeichen.",
        },
        {
          q: "Ist dieses YouTube-Font-Tool kostenlos?",
          a: "Ja — kostenlos, ohne Anmeldung, nichts wird installiert oder mit deinem Kanal verbunden. Du kopierst die Zeichen hier und fügst sie selbst in YouTube Studio ein.",
        },
      ],
    },
  },
  "whatsapp-fonts": {
    de: {
      navName: "WhatsApp Fonts",
      h1: "WhatsApp Font Generator",
      title: "WhatsApp Font Generator — Name ~25 & Info ~139",
      description:
        "Unicode-Fonts für den WhatsApp-Profilnamen (ca. 25 Zeichen) und die Info-Zeile (ca. 139). Stile überleben Nachrichten komplett — kopieren mit einem Tipp.",
      platform: "WhatsApp",
      intro: [
        "WhatsApp-Profilname und Info-Zeile akzeptieren ausgefallene Unicode-Zeichen, und Nachrichten behalten den Stil von Ende zu Ende — es sind alles normale Zeichen. Tippe unten, tippe zum Kopieren.",
        "Dekoriere mit Maß — WhatsApp ist, wo Familie und Kollegen wohnen. Zarte Rahmen und Small Caps altern besser als schwere Gamer-Stapel.",
      ],
      limits: [
        { label: "Profilname", value: "Ca. 25 Zeichen" },
        { label: "Info", value: "Ca. 139 Zeichen" },
        { label: "Nachrichten", value: "Ca. 65.536 Zeichen — gestylter Text zählt normal" },
      ],
      compat: [
        "Profilname: Fancy-Zeichen unterstützt",
        "Info: unterstützt, sichtbar auf deiner Kontaktkarte",
        "Nachrichten: Stile überleben den ganzen Weg — die Zeichen sind der Stil",
        "Gruppen: dein Name erscheint je Gruppe; halte ihn für Arbeitsgruppen erkennbar",
      ],
      examples: ["★彡drifter彡★", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶", "⋆o n l i n e⋆", "✧fokus✧", "『ruhe modus』", "♡ 𝐋𝐢𝐞𝐛𝐞 ♡", "☾mondkind☾", "𝐊𝐚𝐢𝐬𝐞𝐫"],
      steps: [
        "WhatsApp öffnen → Einstellungen → dein Profil → Name (oder Info).",
        "Kandidaten hier generieren und einen kopieren.",
        "Einfügen und speichern.",
        "Einen Kontakt fragen, wie es dargestellt wird — alte Androids sind die üblichen Kästchen-Sünder.",
      ],
      faq: [
        {
          q: "Funktionieren Fancy Fonts in WhatsApp-Nachrichten?",
          a: "Ja — besser als in den meisten Apps, weil der Stil in den Zeichen selbst steckt. WhatsApps eigene *Fett* _Kursiv_-Syntax ist davon getrennt und bleibt unverändert.",
        },
        {
          q: "Verwirrt ein gestylter Name meine Kontakte?",
          a: "Kann sein — Leute suchen Kontakte über den Namen. Ein dekorierter Name matcht evtl. nicht; halte deinen echten Namen in der Info-Zeile auffindbar.",
        },
        {
          q: "Kollidiert WhatsApps eingebaute Formatierung?",
          a: "Nein — *Fett* und _Kursiv_ sind Syntax um normalen Text; Fancy-Zeichen stören sie nicht.",
        },
        {
          q: "Warum zeigt mein Name bei manchen Kontakten Kästchen?",
          a: "Ihr Handy hat die Fonts für diese Glyphen nicht — alte Androids sind die üblichen Sünder. Lass vor dem Speichern einen Kontakt prüfen und behalte eine schlichtere Variante als Reserve markiert.",
        },
        {
          q: "Soll ich in Arbeitsgruppen einen ausgefallenen Namen nutzen?",
          a: "Lieber nicht — Kollegen finden und speichern dich über den Namen, und ein dekorierter geht leicht verloren. Halte deinen echten Namen schlicht für die Arbeit und verlege den Stil in die Info-Zeile oder private Chats.",
        },
        {
          q: "Können Screenreader gestylte WhatsApp-Namen lesen?",
          a: "Sie versuchen es, aber 𝓂𝒾𝓁𝓀 𝓉𝑒𝒶 kommt evtl. als Liste von „Schreibschrift“-Buchstabennamen heraus. Halte den Stil auf Profilname und Info beschränkt; schreibe Nachrichten, die verstanden werden müssen, in normalem Text.",
        },
      ],
    },
  },
  "discord-fonts": {
    de: {
      navName: "Discord Fonts",
      h1: "Discord Font Generator",
      title: "Discord Text stylen — Namen, Status & Nachrichten",
      description:
        "Gestyltes Unicode für Discord-Anzeigenamen, Server-Nicks (ca. 32), Status und Nachrichten — ohne Nitro. Live beim Tippen, Erwähnungen bleiben schlicht.",
      platform: "Discord",
      intro: [
        "Discord-Anzeigenamen, Server-Nicknames und Nachrichten akzeptieren alle ausgefallene Unicode-Zeichen — kein Nitro nötig, denn das sind Zeichen, keine Fonts. Tippe unten und tippe zum Kopieren.",
        "Wo es funktioniert: Anzeigename, Server-Nickname, Status und Nachrichten. Wo nicht: @Erwähnungen und Slash-Commands matchen deinen echten Handle — halte ihn schlicht.",
      ],
      limits: [
        { label: "Anzeigename", value: "Ca. 32 Zeichen" },
        { label: "Server-Nickname", value: "Ca. 32 Zeichen, pro Server einzeln gesetzt" },
        { label: "Nachrichten", value: "2000 Zeichen — gestylter Text zählt normal" },
      ],
      compat: [
        "Anzeigename / Server-Nickname: Fancy-Zeichen voll unterstützt",
        "Status: Fancy-Zeichen funktionieren",
        "Nachrichten: unterstützt; schwere kombinierende Zeichen können seltsam umbrechen",
        "Bots & Erwähnungen: matchen den schlichten Handle — Fancy-Text pingt nicht",
      ],
      examples: ["𝔡𝔞𝔯𝔨𝔫𝔦𝔤𝔥𝔱", "⚡sturmrufer⚡", "ᴍɪʀᴀɢᴇ", "꧁ACE꧂", "꧁𝐉ä𝐠𝐞𝐫꧂", "ⓜⓞⓞⓝⓒⓗⓘⓛⓓ", "𝐊𝐚𝐢𝐬𝐞𝐫", "☾nachtfalke☾"],
      steps: [
        "Discord öffnen → Nutzereinstellungen → Anzeigename (oder Server-Rechtsklick → Nickname ändern).",
        "Kandidaten hier generieren und den Favoriten kopieren.",
        "In das Namensfeld einfügen und speichern.",
        "Eine Nachricht und einen Ping testen — Erwähnungen müssen deinen schlichten Handle weiter treffen.",
      ],
      faq: [
        {
          q: "Brauche ich Nitro für einen ausgefallenen Discord-Namen?",
          a: "Nein. Serverweite Emojis und andere Nitro-Vorteile sind etwas anderes — Fancy-Zeichen sind einfach Text und funktionieren bei jedem Konto.",
        },
        {
          q: "Kann ich meine @Erwähnung stylen?",
          a: "Nein — Erwähnungen lösen über deinen schlichten Handle auf. Halte den Handle gewöhnlich und dekorier den Anzeigenamen.",
        },
        {
          q: "Warum zeigt mein ausgefallener Name manchen Mitgliedern Kästchen?",
          a: "Ihren Systemfonts fehlen diese Glyphen. Populäre Rahmen (꧁꧂ ★ ♡) sind sicherer als exotische Schreibschrift-Mixe.",
        },
        {
          q: "Zählt Fancy-Text anders gegen Discords Limits?",
          a: "Nein — jedes Zeichen zählt normal gegen das ~32-Zeichen-Namenlimit und das 2000-Zeichen-Nachrichtenlimit. Ein Rahmenpaar wie ꧁꧂ kostet nur 2.",
        },
        {
          q: "Sind gestylte Discord-Namen für Screenreader in Ordnung?",
          a: "Screenreader buchstabieren 𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱 evtl. als „Fraktur“-Buchstaben — für Zuhörende Rauschen. Ein gestylter Anzeigename ist deine Entscheidung; Nachrichten, die wirklich gelesen werden müssen, in reinem Text halten.",
        },
        {
          q: "Kann ich in jedem Server einen anderen ausgefallenen Namen haben?",
          a: "Ja — Server-Nicknames werden pro Server gesetzt: in der einen Community 𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱, in der anderen schlicht. Dein kontoweit gesetzter Anzeigename bleibt, was du in den Nutzereinstellungen setzt.",
        },
      ],
    },
  },
  "game-name-generator": {
    de: {
      navName: "Spielernamen",
      h1: "Spielernamen Generator",
      title: "Spielernamen Generator — Rahmen, Strike & Stile",
      description:
        "Gamer-Rahmen und gestylte IDs für jedes Spiel — Nicknames laufen meist über 6–16 Zeichen, Whitelists lehnen Exoten ab. Markieren, testen, speichern.",
      platform: "Spiele",
      intro: [
        "꧁ACE꧂, ♛𝐊𝐚𝐢𝐬𝐞𝐫♛, 𝗦𝗧𝗢𝗥𝗠 — die universelle Gamer-Rahmen-Grammatik, funktioniert in Shootern, MOBAs und Gacha-Spielen. Tippe deinen Namen, wähle einen Stil, kopiere in den Umbenennungsdialog.",
        "Die Unterstützung variiert je Spiel: die meisten akzeptieren gängige Rahmen, Whitelists lehnen exotische ab. Namenswechsel kosten oft Währung — markiere Kandidaten hier, dann im Spiel speichern.",
      ],
      limits: [
        { label: "Typischer Nickname", value: "Ca. 6–16 Zeichen je Spiel — dem In-Game-Zähler vertrauen" },
        { label: "Umbenennungskosten", value: "Karten oder Währung in den meisten Spielen; vor dem Ausgeben prüfen" },
        { label: "Validierung", value: "Whitelist-Prüfung in manchen Titeln; Fehler heißen „ungültige Zeichen“" },
      ],
      compat: [
        "Shooter & MOBAs: gängige Rahmen ꧁꧂ ༺༻ ★彡彡★ meist akzeptiert",
        "Anime-Stil-Spiele: Zeichen okay, aber weichere Rahmen passen zur Optik",
        "E-Sport-Konten: nur schlichte Namen, laut Turnierregeln",
        "Freundessuche: gestylte IDs schwer exakt findbar — ID-String teilen",
      ],
      examples: ["꧁ACE꧂", "♛𝐊𝐚𝐢𝐬𝐞𝐫♛", "𝗦𝗡𝗜𝗣𝗘𝗥", "⚡sturm⚡", "꧔꧇1v5꧇꧕", "꧁𝐉ä𝐠𝐞𝐫꧂", "☾nachtjagd☾", "★彡blitz彡★"],
      steps: [
        "Spielnamen eintippen und 2–3 Kandidaten markieren.",
        "Das Umbenennungsfenster im Spiel öffnen und den ersten einfügen.",
        "Lehnt der Filter ab, den nächsten Kandidaten versuchen — nicht gegen die Whitelist ankämpfen.",
        "Einen Teamkollegen die ID-Liste-Darstellung prüfen lassen.",
      ],
      faq: [
        {
          q: "Warum lehnen manche Spiele ausgefallene Namen ab?",
          a: "Anti-Imitation-Filter whitelisten erlaubte Zeichen; alles andere wird abgelehnt. Das ist eine Speicher-Sperre, kein Bann — auf schlichte Zeichen umsteigen.",
        },
        {
          q: "Können gestylte Namen wie Admin-Namen aussehen und Ärger machen?",
          a: "Admins oder Moderatoren zu imitieren ist für sich ein Verstoß — die gestylten Zeichen schützen dich nicht. Dekoriere niemals einen Namen, um offiziell zu wirken.",
        },
        {
          q: "Ein Name für viele Spiele — wie wähle ich?",
          a: "Entwirf für das strengste Spiel, das du spielst (kürzestes Limit, härteste Whitelist); es passt überall sonst automatisch.",
        },
        {
          q: "Zählt Deko gegen das 6–16-Zeichen-Limit?",
          a: "Ja — jedes Symbol ist ein Zeichen, ꧁ACE꧂ kostet also 7, nicht 3. Baue zuerst den Kernnamen und füge Rahmen nur hinzu, wenn der In-Game-Zähler Platz hat.",
        },
        {
          q: "Ist dieser Generator kostenlos — brauche ich ein Konto?",
          a: "Kostenlos, ohne Konto, nichts zu installieren — gestylte Namen sind Unicode-Zeichen, die du selbst kopierst und einfügst. Die einzigen Kosten sind im Spiel, etwa Umbenennungskarten.",
        },
        {
          q: "Welche Stile passen zu Anime- oder Cute-Spielen?",
          a: "Weichere Rahmen — ♡name♡, ✿name✿, Small Caps — passen zu dieser Optik besser als schwere Shooter-Stapel. Sie validieren genauso wie andere Zeichen; der Unterschied ist rein ästhetisch.",
        },
      ],
    },
  },
  "roblox-name-generator": {
    de: {
      navName: "Roblox Namen",
      h1: "Roblox Name Generator",
      title: "Roblox Namen Generator — Anzeige ~20, Username 3–20",
      description:
        "Roblox-Anzeigenamen-Stile (ca. 20 Zeichen, Filter-geprüft) und die @Username-Regel: 3–20 schlichte Zeichen. Zwei Kandidaten markieren, dann speichern.",
      platform: "Roblox",
      intro: [
        "Roblox hat zwei Namen: den @username (schlichte Zeichen, einzigartig) und den Anzeigenamen (was andere sehen). Fancy-Zeichen gehören in den Anzeigenamen — tippe unten und kopiere.",
        "Roblox prüft Namen mit einem Filter, und gestylte Zeichen kommen uneinheitlich durch. Teste im Einstellungsfenster, bevor du eine Änderung bestätigst — Anzeigenamen-Änderungen sind auf ca. eine pro 7 Tage begrenzt.",
      ],
      limits: [
        { label: "Anzeigename", value: "3–20 Zeichen; Änderungen ca. 1× pro 7 Tage möglich" },
        { label: "@username", value: "3–20 Zeichen, nur Buchstaben/Ziffern/Unterstrich" },
        { label: "Validierung", value: "Roblox filtert Namen — gestylte Zeichen können abgelehnt werden" },
      ],
      compat: [
        "Anzeigename: Fett/Schreibschrift/Umriss kommen meist durch die Validierung",
        "Kombinierende Zeichen (Strike, Zalgo): oft abgelehnt — für den Hauptnamen meiden",
        "@username: nur schlichte Zeichen, unterstützt nie Stile",
        "Suche: Freunde finden dich über den exakten Username — teilbar halten",
      ],
      examples: ["𝐒𝐜𝐡𝐚𝐭𝐭𝐞𝐧", "𝒮𝓉𝑒𝓇𝓃", "ᴘʀᴏxʏ", "⚡Blitz⚡", "𝕊𝕡𝕒𝕣𝕜", "𝐊𝐚𝐢𝐬𝐞𝐫", "꧁𝐉ä𝐠𝐞𝐫꧂", "☾mondkind☾"],
      steps: [
        "Roblox öffnen → Einstellungen → Konto-Infos → Anzeigename.",
        "Kandidaten hier generieren; 2–3 markierte Reserven behalten.",
        "Einfügen, durch den Filter bringen, speichern.",
        "Wird er abgelehnt, zum nächsten Kandidaten wechseln statt Symbole zu frickeln.",
      ],
      faq: [
        {
          q: "Warum wurde mein gestylter Name abgelehnt?",
          a: "Roblox läuft Namen durch einen Filter, der Zeichen außerhalb der erlaubten Menge ablehnt — kombinierende Zeichen sind die üblichen Opfer. Ganz-Glyphen-Stile (Fett, Schreibschrift) kommen öfter durch.",
        },
        {
          q: "Betrifft das meinen Username?",
          a: "Nie — @usernames sind von Definition schlicht. Fancy-Stile gehören ausschließlich in den Anzeigenamen.",
        },
        {
          q: "Wie oft kann ich meinen Anzeigenamen ändern?",
          a: "Roblox begrenzt Anzeigenamen-Änderungen auf ca. eine pro 7 Tage (laut Roblox-Hilfe). Entscheide daher hier zuerst und setze einen Versuch auf deinen Favoriten.",
        },
        {
          q: "Verbrauchen Fancy-Zeichen meine 20 Anzeigenamen-Zeichen?",
          a: "Ja — gestylte Buchstaben zählen je eins gegen das 3–20-Limit, genauso wie schlichte. Ein Rahmen wie ⚡…⚡ kommt mit 2 extra dazu; plane die Deko in die Summe ein.",
        },
        {
          q: "Finden mich Freunde noch, wenn mein Anzeigename gestylt ist?",
          a: "Ja — Suche und Freundschaftsanfragen matchen den @username, der schlicht bleibt. Der Anzeigename ist nur, was Leute sehen; teile deinen Username, nicht die gestylte Version.",
        },
        {
          q: "Braucht dieses Tool meinen Roblox-Login?",
          a: "Nein — es fragt nie nach Zugangsdaten und verbindet sich mit nichts. Du generierst und kopierst Namen hier und fügst sie selbst in Roblox' eigenem Einstellungsfenster ein.",
        },
      ],
    },
  },
  "fortnite-name-generator": {
    de: {
      navName: "Fortnite Namen",
      h1: "Fortnite Name Generator",
      title: "Fortnite Name Generator — Epic Games Name Stile",
      description:
        "Gestylte Namen für Fortnite und dein Epic Games-Konto — Nicknames laufen über ca. 3–16 Zeichen. Kandidaten markieren, paste-testen, dann speichern.",
      platform: "Fortnite",
      intro: [
        "꧁ACE꧂, ★彡blitz彡★, 𝗦𝗧𝗢𝗥𝗠 — auch in Fortnite funktioniert die Gamer-Rahmen-Grammatik, denn dein Anzeigename kommt vom Epic Games-Konto. Tippe unten und kopiere mit einem Tipp.",
        "Die Änderung läuft über die Epic-Kontoeinstellungen, nicht im Spiel selbst. Prüfe nach dem Speichern die Darstellung in der Lobby — und halte die Squad-Liste erkennbar.",
      ],
      limits: [
        { label: "Anzeigename", value: "Ca. 3–16 Zeichen — dem Epic-Einstellungsfeld vertrauen" },
        { label: "Namenswechsel", value: "Epic begrenzt Änderungen; vor dem Bestätigen prüfen" },
        { label: "Validierung", value: "Epic filtert Namen — exotische Zeichen können abgelehnt werden" },
        { label: "Zählung", value: "Manche Felder zählen einen stilisierten Buchstaben als mehrere Zeichen — Epics Feld ist verbindlich" },
      ],
      compat: [
        "Anzeigename: gängige Rahmen ꧁꧂ ★彡彡★ meist akzeptiert",
        "Kombinierende Zeichen (Strike, Zalgo): oft abgelehnt",
        "Epic-Konto: der Name gilt für alle Epic-Spiele, nicht nur Fortnite",
        "Freundessuche: gestylte IDs schwer exakt findbar — Epic-Tag teilen",
      ],
      examples: ["꧁ACE꧂", "★彡blitz彡★", "𝗦𝗧𝗢𝗥𝗠", "♛𝐊𝐚𝐢𝐬𝐞𝐫♛", "꧁𝐉ä𝐠𝐞𝐫꧂", "☾nachtsicht☾", "⚡gewitter⚡", "ᴠɪᴄᴛᴏʀʏ"],
      steps: [
        "Kandidaten hier generieren und die besten zwei markieren.",
        "epicgames.com öffnen → Kontoeinstellungen → Kontoinfo → Anzeigename.",
        "Den ersten Kandidaten einfügen; bei Ablehnung die Reserve nehmen.",
        "In der Lobby prüfen und einen Squad-Kollegen gegenlesen lassen.",
      ],
      faq: [
        {
          q: "Wo ändere ich meinen Fortnite-Namen?",
          a: "Nicht im Spiel — der Anzeigename kommt von deinem Epic Games-Konto. Ändere ihn auf epicgames.com unter Kontoeinstellungen; er gilt dann in allen Epic-Spielen.",
        },
        {
          q: "Wie oft darf ich den Namen ändern?",
          a: "Epic begrenzt Namensänderungen; das genaue Intervall kann sich ändern. Entscheide daher hier zuerst und markiere zwei Kandidaten, bevor du im Epic-Konto bestätigst.",
        },
        {
          q: "Kann ein ausgefallener Name einen Bann geben?",
          a: "Nein — die Zeichen sind Text, keine Cheats. Bans treffen Verhalten und beleidigende Namen; Validierungsfehler verweigern nur das Speichern.",
        },
        {
          q: "Warum heißt es „ungültige Zeichen“?",
          a: "Epic whitelistet erlaubte Zeichen, und dein Symbol ist nicht darauf. Nimm einen gängigeren Rahmen oder lass die Deko weg.",
        },
        {
          q: "Finden mich Freunde noch in der Lobby?",
          a: "Ja — über Epic-Freundschaftsanfragen und den Epic-Namens-Tag, nicht über den exakten Anzeigenamen. Teile deinen Tag statt der gestylten Version.",
        },
        {
          q: "Ist dieser Fortnite Name Generator kostenlos?",
          a: "Ja — kostenlos, ohne Konto, nichts zu installieren. Du generierst Namen hier und fügst sie selbst auf der Epic-Games-Seite ein.",
        },
      ],
    },
  },
  "cod-name-generator": {
    de: {
      navName: "CoD Namen",
      h1: "CoD Name Generator",
      title: "CoD Spitznamen Generator — 16 Zeichen & Clan-Tag",
      description:
        "Gestylte CoD-Spitznamen mit ꧁꧂-Rahmen — ca. 16 Zeichen plus Clan-Tag. Kandidaten markieren, paste-testen, dann einen Wechsel spendieren.",
      platform: "Call of Duty",
      intro: [
        "꧁ACE꧂, ★彡sniper彡★, 𝗦𝗛𝗔𝗗𝗢𝗪 — Gamer-Rahmen sind die gemeinsame Sprache der CoD-IDs. Tippe deinen Namen, prüfe die Stile, kopiere in den Umbenennungsdialog.",
        "CoD-Nicknames laufen über ca. 16 Zeichen, dazu kommt der Clan-Tag. Der Wechsel kostet meist einen Token oder Aktivierung — entscheide hier: zwei Kandidaten markieren, dann speichern.",
      ],
      limits: [
        { label: "Spitzname", value: "Ca. 16 Zeichen je Version — dem In-Game-Zähler vertrauen" },
        { label: "Clan-Tag", value: "Meist 4–5 Zeichen, separat vor dem Namen" },
        { label: "Wechselkosten", value: "Umbenennungs-Token je nach Titel — vor dem Ausgeben prüfen" },
        { label: "Zählung", value: "Manche Felder zählen einen stilisierten Buchstaben als mehrere Zeichen — das Spielfeld ist verbindlich" },
      ],
      compat: [
        "Die meisten Versionen akzeptieren gängige Rahmen ꧁꧂ ༺༻ ★彡彡★",
        "Kombinierende Zeichen (Strike/Zalgo): auf strengeren Servern abgelehnt",
        "E-Sport-Konten: Turnierregeln verlangen schlichte Namen",
        "Freundessuche: gestylte IDs widersetzen sich der Exaktsuche — ID-String teilen",
      ],
      examples: ["꧁ACE꧂", "★彡sniper彡★", "𝗦𝗖𝗛𝗔𝗧𝗧𝗘𝗡", "♛𝐊𝐚𝐢𝐬𝐞𝐫♛", "꧁𝐉ä𝐠𝐞𝐫꧂", "꧔꧇1v5꧇꧕", "☾nachtjagd☾", "𝗦𝗧𝗢𝗥𝗠"],
      steps: [
        "Kandidaten hier generieren und die besten zwei markieren.",
        "Spiel öffnen → Inventar/Activision-Konto → Namen ändern.",
        "Den ersten Kandidaten einfügen; lehnt der Filter ab, die Reserve nehmen.",
        "Ins Squad einsteigen und einen Teamkollegen den Namen in der Liste prüfen lassen.",
      ],
      faq: [
        {
          q: "Kann ein ausgefallener Name einen Bann geben?",
          a: "Nein — die Zeichen sind Text, keine Cheats. Bans treffen Verhalten und beleidigende Namen; Validierungsfehler verweigern nur das Speichern.",
        },
        {
          q: "Warum scheitert mein Name an „ungültige Zeichen“?",
          a: "Dieser Server whitelistet Zeichen, und dein Symbol steht nicht darauf. Nimm einen gängigeren Rahmen oder lass auf den strengsten Servern die Deko weg.",
        },
        {
          q: "Erlauben Pro-/Turniernamen Stile?",
          a: "Nein — registrierte Wettkampfnamen folgen Turnierregeln, typischerweise schlichte Buchstaben und Ziffern. Halte Stile auf deine Matchmaking-ID beschränkt.",
        },
        {
          q: "Fressen Rahmen wie ꧁꧂ mein 16-Zeichen-Limit?",
          a: "Ja — jedes Rahmen-Symbol ist ein Zeichen, ein ★彡…彡★-Stapel allein kann 6 fressen. Gestalte zuerst den Kernnamen und füge Rahmen mit dem Rest-Budget hinzu.",
        },
        {
          q: "Wie funktioniert der Clan-Tag daneben?",
          a: "Der Clan-Tag ist ein eigenes, kurzes Feld (meist 4–5 Zeichen), das vor deinen Spitznamen gestellt wird. Styli ihn für sich — oder lasse ihn schlicht, damit dein Clan findbar bleibt.",
        },
        {
          q: "Wie vermeide ich, einen Umbenennungs-Token zu verschwenden?",
          a: "Entscheide, bevor du das Spiel öffnest: markiere hier zwei bis drei Kandidaten und sortiere sie. Ein Token kauft einen Versuch — füge zuerst den stärksten ein und hebe die Reserve für eine Ablehnung auf.",
        },
      ],
    },
  },
};
