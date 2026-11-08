// Deutsche Guides: 4 kompakte Ratgeber für den Start der deutschen Version.
// Plattform-Limits wie im Englischen mit "ca."-Formulierung; der Zähler im Eingabefeld entscheidet.

import type { GuideDef } from "../guides";

export const guidesDe: GuideDef[] = [
  {
    locale: "de",
    slug: "what-are-unicode-fonts",
    navName: "Was sind Zierfonts?",
    h1: "Was sind Zierfonts eigentlich? Das Prinzip einfach erklärt",
    title: "Was sind Zierfonts? Wie gestylter Text wirklich funktioniert",
    description:
      "Zierfonts sind keine Font-Dateien, sondern gestylte Unicode-Zeichen. Das Prinzip dahinter, wo es funktioniert, wo es scheitert und was es unterscheidet.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "Jeder „Zierfont“, den du je gesehen hast — 𝓱𝓮𝓵𝓵𝓸, ꧁ace꧂ — ist gar kein Font. Das sind ganz normale Zeichen aus der Unicode-Tabelle, genau wie die Buchstaben in diesem Satz: Text, keine Formatierung.",
      "Wer dieses eine Faktum verinnerlicht hat, löst die meisten Rätsel von selbst: warum der Stil das Einfügen überlebt, warum manche Geräte Kästchen zeigen, warum die Suche gestylte Namen nicht findet und warum @Handles sie ablehnen.",
    ],
    sections: [
      {
        heading: "Ein zweites Alphabet in der Zeichentabelle",
        paragraphs: [
          "Unicode ist der weltweite Katalog, der jedem Zeichen jedes Schriftsystems eine Nummer gibt. Um 2001 herum ergänzte er einen kompletten Satz gestylter lateinischer Buchstaben für den mathematischen Satzes — fett, kursiv, Schreibschrift, outline und gotisch bekamen je A–Z und a–z, später kamen Bubble-, eingekreiste und eckige Varianten dazu.",
          "Diese Buchstaben waren für Formeln gedacht, aber weil sie aussehen wie eine andere Schriftart, lieh man sie für persönlichen Text. Ein [Generator](/de/cursive-fonts/) macht genau eine Sache: jeden gewöhnlichen Buchstaben gegen das gestylte Zeichen an derselben Position tauschen. Der Text bleibt identisch; nur die Zeichenbilder ändern sich.",
        ],
      },
      {
        heading: "Warum der Stil jedes Einfügen überlebt",
        paragraphs: [
          "Fett in einem Textprogramm ist ein Formatierungs-Flag — es verschwindet, wenn das Ziel es nicht unterstützt. Ein gestylter Buchstabe IST einfach fett: die Fettigkeit ist eine Eigenschaft des Zeichens, nicht der Umgebung. Jede Stelle, die den Text annimmt, nimmt auch den Stil an.",
          "Das erklärt auch das Zählen: ein gestylter Buchstabe bleibt ein Zeichen (außer bei Durchgestrichen und Zalgo, wo unsichtbare kombinierende Zeichen mitgezählt werden).",
        ],
      },
      {
        heading: "Wo die Grenzen liegen",
        bullets: [
          "Begrenzte Abdeckung: gestylte Zeichenbilder gibt es nur für lateinische Buchstaben und Ziffern. Andere Schriften haben keine zweite Form — chinesische Spitznamen nutzen stattdessen dekorative Rahmen.",
          "Suchprobleme: gestylte Zeichen sind keine normalen Buchstaben; wörtliche Suche, @Erwähnungen und Hashtags können scheitern.",
          "Anzeige hängt von Fonts ab: ein Gerät ohne das Zeichenbild zeigt ein Kästchen — siehe den Kästchen-Ratgeber.",
          "Barrierefreiheit: Screenreader buchstabieren womöglich die vollständigen Zeichennamen vor. Nie für wichtige Informationen nutzen.",
        ],
      },
    ],
    faq: [
      {
        q: "Muss die Leserin etwas installieren?",
        a: "Keine Installation — aber ihre Font-Sammlung muss die Zeichenbilder enthalten. Gängige Systeme decken die beliebten Stile ab; exotische Symbole sind die Quelle der Kästchen.",
      },
      {
        q: "Bekommen andere Schriften irgendwann auch gestylte Formen?",
        a: "Unicode könnte sie ergänzen, aber bei großen Schriften ist die Arbeit nie materialisiert. Rahmen und Dekorationen sind der praktikable Weg — genau das macht der Nickname-Dekorateur.",
      },
      {
        q: "Zählt ein gestylter Buchstabe als ein Zeichen?",
        a: "Ja — ein Zeichen bleibt ein Zeichen. Nur Durchgestrichen und Zalgo fügen unsichtbare kombinierende Zeichen hinzu, die manche Zähler mitzählen.",
      },
    ],
    relatedTools: [
      { href: "/de/cursive-fonts/", title: "Schreibschrift-Generator", description: "Probiere die Zeichen-Ersetzung selbst aus." },
      { href: "/de/fancy-numbers/", title: "Nickname-Dekorateur", description: "Rahmen, die auf jeden Text passen." },
      { href: "/de/italic-text-generator/", title: "Kursiv", description: "Öffnen und direkt beim Lesen ausprobieren." },
    ],
    appearOn: ["cursive-fonts", "bold-fonts", "italic-text-generator", "fancy-numbers"],
  },
  {
    locale: "de",
    slug: "why-boxes-appear",
    navName: "Warum Kästchen erscheinen",
    h1: "Warum Zierfont manchmal Kästchen (□) zeigt",
    title: "Warum Zierfonts Kästchen (□) zeigen — und der Fix",
    description:
      "Kästchen bedeuten: Dem Gerät fehlt das Zeichenbild — kein kaputter Text. Mechanismus, risikoreiche Stile, die sicheren und der Rettungsweg.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "Auf deinem Bildschirm sieht es gut aus, dann kommt es auf einem älteren Handy als Kästchenreihe □ an — der klassische Zierfont-Fehler. Kästchen sind keine Beschädigung, und beim Kopieren ist nichts verloren: dem anderen Gerät fehlt schlicht die Zeichnung für dieses Zeichen.",
      "Dieser Ratgeber erklärt den Mechanismus, welche Stile riskant sind, welche fast unkaputtbar — und die Rettungsreihenfolge.",
    ],
    sections: [
      {
        heading: "Fehlendes Zeichenbild, keine fehlenden Daten",
        paragraphs: [
          "Um ein Zeichen anzuzeigen, braucht die Font-Sammlung des Geräts eine Zeichnung dafür. Unicode katalogisiert Zehntausende Zeichen, und kein Gerät liefert Zeichnungen für alle mit. Das Zeichen kam unbeschädigt an — das Gerät kann es nur nicht malen und zeichnet stattdessen einen Platzhalter: „hier ist ein Zeichen, das ich nicht zeichnen kann“.",
          "Deshalb ist das Kästchen immer ein Empfänger-Problem: du siehst alles, die anderen sehen Kästchen — deine Fonts decken es ab, ihre nicht.",
        ],
      },
      {
        heading: "Risikoarme und risikoreiche Stile",
        bullets: [
          "Exotische Schrift-Dekorationen: ꧁ ꧇ ᨳ aus dem Javanischen und Lontara — starke Gamer-Energie, hohe Kästchenquote auf alten Geräten.",
          "Zeichen mit Emoji-Darstellung: 🅱 ⚜ werden auf manchen Plattformen in Farb-Emojis gezwungen — nicht das, was du entworfen hast.",
          "Dichte kombinierende Zeichen: Zalgo stapelt Dutzende Diakritika; alte Renderer überfordern.",
          "Sichere Wahl: Vollbreite Buchstaben (ein CJK-Klassiker), eingekreiste Ziffern ① und Grundsymbole ♡ ★ ✿ — fast überall abgedeckt.",
        ],
      },
      {
        heading: "Die Rettungsreihenfolge",
        paragraphs: [
          "Erstens den Stil tauschen — jede Absicht hat einen sichereren Zwilling (꧁꧂ → 『』, 🅱 → 𝗕). Mit dem [Fett-Generator](/de/bold-fonts/) findest du für fast jeden Look eine gut unterstützte Variante. Zweitens das Symbol tauschen — exotische Dekorationen → einfache ♡ ★. Drittens die Grenze akzeptieren — auf einem zehn Jahre alten Gerät kann alles Dekorierte scheitern; wichtige Nachrichten bleiben dann schlicht.",
          "Die billigste Versicherung: sieh dir deinen eigenen Post vor dem Absenden auf einem zweiten Gerät an.",
        ],
      },
    ],
    faq: [
      {
        q: "Kann die andere Person den Kästchentext korrekt kopieren?",
        a: "Ja — das Kästchen ist nur ein Anzeige-Platzhalter; die Daten sind intakt. An ein Gerät mit besseren Fonts weitergeleitet, zeigt er sich einwandfrei.",
      },
      {
        q: "Gibt es einen Stil, der überall angezeigt wird?",
        a: "Vollbreite Buchstaben, eingekreiste Ziffern und Grundsymbole kommen nahe dran — aber nichts ist zu 100 % sicher. Wähle mit der Erwartung „funktioniert auf fast allem“.",
      },
      {
        q: "Woran erkenne ich riskante Zeichen vor dem Posten?",
        a: "An Seltenheit: Zeichen aus exotischen Schriften und dichte Diakritika-Stapel sind die üblichen Verdächtigen. Teste auf einem zweiten Gerät — das zeigt es zuverlässiger als jede Liste.",
      },
    ],
    relatedTools: [
      { href: "/de/zalgo-text/", title: "Zalgo-Bereiniger", description: "Gestapelte Diakritika aus kaputtem Text entfernen." },
      { href: "/de/crazy-font-generator/", title: "Crazy", description: "Öffnen und direkt beim Lesen ausprobieren." },
      { href: "/de/cute-fonts/", title: "Cute-Stile", description: "Riskantarme Deko mit Herz und Blume." },
    ],
    appearOn: ["zalgo-text", "cute-fonts", "crazy-font-generator", "discord-fonts"],
  },
  {
    locale: "de",
    slug: "name-length-limits",
    navName: "Zeichenlimits",
    h1: "Zeichenlimits für Namen & Bios — Plattform für Plattform",
    title: "Zeichenlimits für Namen & Bios — IG, TikTok, Discord",
    description:
      "Spitznamen- und Bio-Limits für Instagram, TikTok, Discord, WhatsApp, Roblox und Shooter — wie Zierzeichen zählen und was du am Limit tun kannst.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "Zierzeichen verlängern den Text nicht sichtbar (ein Buchstabe wird gegen ein Zeichen getauscht), aber Deko-Rahmen tun es — 1–2 Symbole pro Seite. Strikte Plattformen brauchen Deko-Pläne, die ins Limit passen.",
      "Die folgende Tabelle sammelt gängige Werte. Regeln verschieben sich mit der Zeit, die Zahlen sind „ca.“-Werte, und der Live-Zähler im Eingabefeld ist immer die letzte Instanz.",
    ],
    sections: [
      {
        heading: "Die Schnellübersicht",
        table: {
          head: ["Plattform", "Namens-Limit (ca.)", "Deko-Tipp"],
          rows: [
            ["Instagram", "Name 30 / Bio 150", "Name für den Stil, Bio für eine Suchzeile in normalem Text"],
            ["TikTok", "Ca. 24 (Bio ~80)", "Einzelrahmen ✧ ⋆ lassen Platz für den Text"],
            ["Discord", "Ca. 32 (Anzeigename)", "Raum für Doppelrahmen ꧁༺༻꧂"],
            ["WhatsApp", "Ca. 25 (Info ~139)", "Schlanke Rahmen ━ ✧ passen ins knappe Feld"],
            ["Roblox", "3–20 Anzeigename", "Validierung streng — schlichte Zeichen kommen am häufigsten durch"],
            ["Shooter (PUBG & Co.)", "Ca. 5–16", "Kurze IDs + ꧁꧂ passen exakt; erst zählen"],
            ["Steam", "Ca. 32", "Großzügig; lange Rahmen passen"],
            ["Telegram", "Ca. 64", "Am großzügigsten — alles passt"],
          ],
        },
      },
      {
        heading: "Zwei Zähl-Fallen",
        bullets: [
          "Kombinierende Zeichen zählen mit: Durchgestrichen und Zalgo fügen 1–4 unsichtbare Symbole pro sichtbarem Zeichen hinzu — Zähler verdoppeln sich und strenge Felder laufen über.",
          "Vollbreite Zeichen zählen unterschiedlich: die meisten Plattformen zählen eins pro Buchstabe, manche rechnen die Anzeigebreite als zwei — nach dem Einfügen den Zähler beobachten.",
        ],
      },
      {
        heading: "Wenn du über dem Limit bist",
        paragraphs: [
          "Kürze den Text, nicht die Dekoration — der Rahmen ist der Kern des Stils. ꧁starlight꧂, das nicht passt, wird zu ꧁star꧂; das schlägt den Rückfall auf reinen Text.",
          "Du willst einen Namen plattformübergreifend behalten? [Plane für das strengste Spiel, das du spielst](/de/game-name-generator/) — der Rest folgt. Für Bios hilft die Bio-Struktur aus dem [Instagram-Übersetzer](/de/instagram-fonts/), wo Suchtext und Deko getrennt bleiben.",
        ],
      },
    ],
    faq: [
      {
        q: "Wo finde ich die offiziellen Zahlen?",
        a: "In den Hilfecentern der jeweiligen Plattform. Diese Tabelle sind gepflegte „ca.“-Werte aus der Community — der Zähler im Eingabefeld lügt nie.",
      },
      {
        q: "Warum zählt mein Freund ein anderes Ergebnis?",
        a: "Das Zählen kombinierender Zeichen unterscheidet sich: manche Plattformen zählen jedes Zeichen einzeln, manche fassen es zu Graphem-Clustern zusammen. Verlass den Zähler dort, wo du einfügst.",
      },
      {
        q: "Warum wurde mein Name abgelehnt, obwohl er ins Limit passt?",
        a: "Dann liegt es meist nicht an der Länge, sondern an der Zeichenprüfung — manche Spiele erlauben nur bekannte Zeichensätze. Reduziere auf schlichte Zeichen oder wechsle die Deko.",
      },
    ],
    relatedTools: [
      { href: "/de/fancy-numbers/", title: "Nickname-Dekorateur", description: "Rahmen wählen, die ins Budget passen." },
      { href: "/de/game-name-generator/", title: "Spielnamen-Generator", description: "Limits je Spiel direkt einplanen." },
      { href: "/de/instagram-fonts/", title: "Instagram-Fonts", description: "Öffnen und direkt beim Lesen ausprobieren." },
    ],
    appearOn: ["instagram-fonts", "tiktok-fonts", "game-name-generator", "discord-fonts", "fancy-numbers"],
  },
  {
    locale: "de",
    slug: "account-safety",
    navName: "Account-Sicherheit",
    h1: "Account-Sicherheit bei gestylten Namen: die echten Regeln",
    title: "Führt ein Ziername zur Sperre? Plattform-Regeln",
    description:
      "Gestylte Namen sind normaler Text — sie lösen keine Sperren aus. Wo Plattformen tatsächlich Grenzen ziehen: Whitelists, Suchprobleme und Identitätsmissbrauch.",
    published: "2026-11-08",
    updated: "2026-11-08",
    intro: [
      "„Kann ich mit einem Ziernamen gesperrt werden?“ ist die meistgestellte Frage. Antwort: Zierzeichen sind normaler Text ohne Code darin — keine Plattform sperrt dich wegen der Zeichen selbst.",
      "Echte Einschränkungen häufen sich in drei Arten: Zeichen-Whitelists (manche Spiele), Suchprobleme (die Suche greift nicht) und Identitätsmissbrauch (gestylter Text, der offiziell wirkt). Nur das letzte ist ein echtes Sperren-Risiko.",
    ],
    sections: [
      {
        heading: "Drei Formen der Plattform-Regeln",
        bullets: [
          "Offen: Discord, WhatsApp, Telegram und die meisten Bios akzeptieren Zierzeichen; Prüfungen schauen auf den Inhalt, nicht auf den Zeichenstil.",
          "Whitelist-Prüfung: manche Spiele erlauben nur einen bekannten Zeichensatz — „ungültige Zeichen“ bedeutet eine abgelehnte Speicherung, keine Sperre.",
          "Kontextabhängig: der Name selbst ist legal, aber wer damit Mitarbeiter vortäuscht oder Filter umgeht, begeht genau diesen Verstoß.",
        ],
      },
      {
        heading: "Die drei Dinge, die wirklich zählen",
        paragraphs: [
          "Identitätsmissbrauch: Wer „Offizieller Support“ gestylt wie ein verifiziertes Account schreibt, verstößt klar gegen die Regeln — der Sperrgrund ist der Missbrauch, nicht die Zeichenbilder.",
          "Filterumgehung: Beleidigungen oder Werbung in gestylten Zeichen zu verstecken, um Filter zu umgehen, wird als Filterumgehung geahndet.",
          "Betrugs-Kontexte: Zierzeichen in Zahlungsdaten oder Verifizierungscodes — nie machen, und der Familie erklären, „offiziellen Mitteilungen“ in Zierschrift nicht zu vertrauen.",
        ],
      },
      {
        heading: "Die Checkliste für sichere Nutzung",
        bullets: [
          "Spitznamen, Bios, Signaturen: frei dekorieren — das ist Identitätsausdruck.",
          "Kritische Infos (Kontakte, IDs, Beträge): immer in normalen Zeichen.",
          "Fehler „ungültige Zeichen“: Zeichen oder Plattform wechseln; keine Umwege suchen.",
          "Nach einer Umbenennung einen Test posten: prüfen, dass Anzeige und Suche weiterhin funktionieren.",
        ],
      },
    ],
    faq: [
      {
        q: "Jemand sagte, sein Ziername habe zu Drosselung geführt — stimmt das?",
        a: "Drosselung zielt auf Inhalte und Verhalten, nicht auf Zeichenformen. Der zeitliche Zufall lässt sich leicht auf den neuen Namen schieben; prüfe den tatsächlichen Post, der begrenzt wurde.",
      },
      {
        q: "Stören gestylte Zeichen die Sicherheitsprüfung des Accounts?",
        a: "Nein — Sicherheit bindet an Telefon-/E-Mail-/ID-Verifizierung. Anzeigenamen sind rein zur Anzeige und fließen nie in Sicherheitsabläufe ein.",
      },
      {
        q: "Warum akzeptiert mein Spiel den Namen nicht?",
        a: "Viele Spiele prüfen gegen eine Whitelist erlaubter Zeichen. „Ungültige Zeichen“ ist eine Ablehnung, keine Sperre — reduziere die Deko oder wähle schlichte Zeichenbilder.",
      },
    ],
    relatedTools: [
      { href: "/de/game-name-generator/", title: "Spielnamen-Generator", description: "Sichere Deko-Ideen fürs Spiel." },
      { href: "/de/roblox-name-generator/", title: "Roblox-Namen", description: "Whitelist-freundliche Stile." },
      { href: "/de/cod-name-generator/", title: "COD-Namen", description: "Öffnen und direkt beim Lesen ausprobieren." },
    ],
    appearOn: ["game-name-generator", "roblox-name-generator", "fortnite-name-generator", "cod-name-generator"],
  },
];
