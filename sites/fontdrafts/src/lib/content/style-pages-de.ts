// German copy for the 11 multilingual style pages and the 10 migration pages.
// Hand-written, du-Form, consumer tone; see style-pages-en.ts for the reference.
// decorated-nicknames is Chinese-only and does not appear here.

import type { StylePageCopy } from "../style-pages";

export const stylePagesDe: Record<string, { de: StylePageCopy }> = {
  "cursive-fonts": {
    de: {
      navName: "Schreibschrift",
      h1: "Schreibschrift Generator",
      title: "Schreibschrift Generator — Script kopieren & einfügen",
      description:
        "Verwandle Wörter in schöne Schreibschrift: Script und fettes Script aktualisieren sich beim Tippen — ein Tipp zum Kopieren für Bios, Signaturen und Nicknamen.",
      intro: [
        "Tippe unten ein Wort, einen Namen oder eine kurze Phrase ein und die Schreibschrift-Versionen erscheinen in Echtzeit auf jeder Karte. Antippen zum Kopieren — keine Fontdateien, keine Anmeldung, keine Limits.",
        "Diese „Schreibschrift-Fonts“ sind gar keine Fonts: Es sind Unicode-Zeichen aus dem Block „Mathematical Alphanumeric Symbols“, die zufällig handgeschrieben aussehen. Weil es ganz normaler Text ist, überlebt der Stil jedes Kopieren und Einfügen in Nicknames, Bios und Signaturen.",
      ],
      steps: [
        "Tippe deinen Namen oder deine Lieblingsphrase in das Feld ein.",
        "Vergleiche die helle Schreibschrift mit dem fetten Script; die ♡- und ✧-Kombis ergänzen die Deko automatisch.",
        "Tippe beim Gewinner auf Kopieren oder markiere ein paar Kandidaten mit dem Stern und entscheide später.",
        "Füge den Text in die Ziel-App ein und poste eine Probe, bevor du ihn fest einsetzt.",
      ],
      about: {
        heading: "Wie Schreibschrift-Text funktioniert",
        paragraphs: [
          "Die stilisierten Buchstaben stammen aus Unicodes Block „Mathematical Alphanumeric Symbols“, der 2001 für den Satzes von Formeln ergänzt wurde. Ein Generator macht nichts weiter, als jeden gewöhnlichen Buchstaben gegen das stilisierte Zeichen an derselben Position zu tauschen — Reihenfolge, Länge und Groß-/Kleinschreibung bleiben identisch.",
          "Weil jeder Buchstabe ein passendes Glyph braucht, deckt Schreibschrift nur A–Z ab. Chinesisch, Japanisch und Arabisch haben in Unicode keine stilisierten Formen — deshalb setzen diese Nicknames auf dekorative Rahmen stattdessen.",
        ],
      },
      faq: [
        {
          q: "Wo kann ich Schreibschrift-Text einfügen?",
          a: "Überall, wo plain text akzeptiert wird: Anzeigenamen, Bios, Signaturen, Chat-Nicknames, Spieler-IDs. Streng validierte Felder — @Handles, Login-IDs — lehnen stilisierte Zeichen meist ab.",
        },
        {
          q: "Warum sehen manche Buchstaben auf anderen Geräten wie Kästchen aus?",
          a: "Den Fonts des empfangenden Geräts fehlen diese Glyphen — vor allem auf alten Systemen. Wechseln zum fetten Script behebt es meist. Markiere zwei Kandidaten mit dem Stern, damit du einen Ersatz hast.",
        },
        {
          q: "Erschwert Schreibschrift-Text die Suche?",
          a: "Ja. Stilisierte Zeichen sind keine gewöhnlichen Buchstaben, deshalb schlägt die Suche nach deinem Nickname scheitern. Halte den echten Namen irgendwo in normalen Zeichen fest — Deko ist zum Zeigen da, nicht zum Suchen.",
        },
        {
          q: "Braucht Schreibschrift-Text mehr Zeichen im Bio?",
          a: "Nein — jeder gewöhnliche Buchstabe wird gegen genau einen Schreibschrift-Buchstaben getauscht, die Länge bleibt also gleich. Was vorher ins Feld passte, passt weiterhin.",
        },
        {
          q: "Lesen Screenreader Schreibschrift-Text richtig vor?",
          a: "Nicht wirklich — viele geben ihn Buchstabe für Buchstabe als „mathematischen Kursiv-Script“ aus. Benutze Schreibschrift nur für Namen und kurze Akzente und schreibe alles, was vorgelesen werden soll, in klartext.",
        },
        {
          q: "Ist der Generator kostenlos? Brauche ich ein Konto oder einen Font?",
          a: "Kostenlos, ohne Anmeldung und nichts zu installieren — Schreibschrift-Buchstaben sind Unicode-Zeichen, keine Fontdateien. Der Stil reist im kopierten Text selbst mit.",
        },
      ],
    },
  },

  "bold-fonts": {
    de: {
      navName: "Fett",
      h1: "Fetter Text Generator",
      title: "Fetter Text Generator — Serif, Sans & fett kursiv",
      description:
        "Wirklich fette Zeichen in vier Stilen: Serif, Sans, fett kursiv und kursiv. Aktualisiert sich beim Tippen — ein Tipp zum Kopieren, überall einsetzbar.",
      intro: [
        "Die meisten Chat-Apps und sozialen Plattformen können kein einzelnes Wort fett setzen — hier sind die Zeichen selbst fett, deshalb überlebt die Betonung jedes Einfügen.",
        "Vier Stärken zur Auswahl: klassisch fett, klare Sans fett, fett kursiv und kursiv. Auch Ziffern bekommen fette Formen, sodass Daten und Nummern funktionieren.",
      ],
      steps: [
        "Tippe das Wort, die Phrase oder Zahl ein, die du betonen willst.",
        "Vergleiche die vier Stärken — fett für Überschriften, kursiv für Akzente.",
        "Kopiere, füge in Chat, Signatur oder Titel ein.",
        "Wenn die Ziel-App es seltsam darstellt, wechsle zur fetten Sans.",
      ],
      about: {
        heading: "Fett auf Zeichenebene",
        paragraphs: [
          "Dieses Fett ist etwas anderes als das in einer Textverarbeitung: Es ist kein Formatflag, sondern ein Tausch in den Block „Mathematical Bold“ von Unicode. Die Fette steckt im Zeichen selbst, unabhängig von jeder Layout-Engine.",
          "Der Preis ist die Barrierefreiheit: Screenreader kündigen 𝗕𝗼𝗹𝗱 vielleicht als „mathematisches Sans Bold B…“ an — Lärm für hörgeschädigte Zuhörer. Bleib bei kurzen Phrasen, nie bei Absätzen.",
        ],
      },
      faq: [
        {
          q: "Funktioniert Fett in Chat-Apps wie WhatsApp oder Discord?",
          a: "Ja — die Fette steckt in den Zeichen selbst, deshalb behalten Chat-Bubbles sie ohne jegliche Format-Syntax.",
        },
        {
          q: "Kann ich Fett mit Chinesisch oder Emoji mischen?",
          a: "Ja. Chinesisch und Emoji haben keine fetten Formen und bleiben unverändert, während die lateinischen Teile fett werden — gemischter Text funktioniert problemlos.",
        },
        {
          q: "Kann ich fette Zeichen in Hashtags benutzen?",
          a: "Besser nicht. Hashtags matchen normale Buchstaben; ein stilisiertes #Fett wird weder indexiert noch klickbar. Halte Hashtags in gewöhnlichen Zeichen.",
        },
        {
          q: "Kommen Screenreader mit fetten Zeichen klar?",
          a: "Schlecht — sie kündigen 𝗕 vielleicht als „mathematisches Sans Bold B“ an statt einfach als B. Fettdruck für ein, zwei Wörter maximum, und halte alles, was vorgelesen werden soll, im Klartext.",
        },
        {
          q: "Warum zeigen fette Buchstaben auf manchen Handys Kästchen?",
          a: "Den Fonts des empfangenden Geräts fehlen Glyphen für den mathematischen Block — selten, aber auf sehr alten Systemen üblich. Nichts kann der Absender reparieren; schicke es im Notfall als Klartext nochmal.",
        },
        {
          q: "Überlebt das Fett das Einfügen in Word oder Google Docs?",
          a: "Ja — die Fette wohnt in den Zeichen selbst, deshalb überlebt sie Dokumente, Tabellen und E-Mails. Sie bleibt sogar fett, wo die eigene Formatierung der App weggestrippt würde.",
        },
      ],
    },
  },

  "gothic-fonts": {
    de: {
      navName: "Fraktur",
      h1: "Fraktur Schrift Generator",
      title: "Fraktur Schrift Generator — Old English Schwarzletter",
      description:
        "Verwandle Text in Fraktur-Schwarzletter in zwei Schnitten. Live beim Tippen, ein Tipp zum Kopieren — der dunkle Look für IDs, Bandnamen und düstere Bios.",
      intro: [
        "Gotisch (Fraktur/Schwarzletter) ist die Schrift auf alten Zeitungsköpfen und Metal-Band-Logos. Tippe ein Wort ein und beide Schnitte rendern live — tippe eine Karte an, um zu kopieren.",
        "Kombiniert mit ☠- oder ⚔-Deko hast du einen fertigen dunklen Nickname. Nur lateinische Buchstaben — andere Schriften bleiben unverändert.",
      ],
      steps: [
        "Tippe deinen Nickname, Bandnamen oder eine kurze Phrase ein.",
        "Vergleiche die beiden Schnitte — der fette bleibt bei kleinen Größen lesbar.",
        "Kopiere, füge ins Namensfeld ein und poste eine Probe zur Darstellung.",
        "Wenn Kästchen auf älteren Geräten auftauchen, wechsle zum fetten Schnitt oder zur Schreibschrift.",
      ],
      about: {
        heading: "Zeitungsschrift als Unicode",
        paragraphs: [
          "Unicodes Block „Mathematical Alphanumeric Symbols“ enthält ein Fraktur A–Z. Seine Lesbarkeit ist von Natur aus niedrig, halte dich also an zwei, drei Wörter — Nicknames und Titel, nie Sätze.",
          "Ein paar Buchstaben (C, H, I, R, Z) haben keinen standardmäßigen Fraktur-Codepunkt, deshalb springen die bekannten dekorativen Ersatz-Zeichen ein — dieselbe Konvention, der jeder Generator folgt.",
        ],
      },
      faq: [
        {
          q: "Kann ich Fraktur-Text in Spielen benutzen?",
          a: "Die meisten Spiele akzeptieren Unicode-Nicknames, und Schwarzletter kommt meist durch. Spiele mit Whitelist-Validierung können ablehnen — siehst du einen Fehler wegen „unerlaubter Zeichen“, bleiben dort nur normale Buchstaben.",
        },
        {
          q: "Ist Fraktur dasselbe wie Old English?",
          a: "Umgangssprachlich ja — „Old English Font“ meint fast immer Fraktur-Schwarzletter, nicht die tatsächliche altenglische Sprache.",
        },
        {
          q: "Warum sehen manche Buchstaben anders aus?",
          a: "Unicode liefert Fraktur-Glyphen nur für einen Teil des Alphabets; C, H, I, R und Z benutzen dekorative Stellvertreter. Jeder Generator erzeugt dasselbe Ergebnis.",
        },
        {
          q: "Braucht Fraktur-Text mehr Zeichen?",
          a: "Nein — es ist ein Eins-zu-eins-Buchstabentausch, 𝔊𝔬𝔱𝔥𝔦𝔠 zählt also gleich wie „gothic“. Deko wie ☠ zählt jeweils als eigenes Zeichen dazu.",
        },
        {
          q: "Ist Schwarzletter für Screenreader lesbar?",
          a: "Nicht natürlich — sie geben ihn eher als „Fraktur“- oder „mathematische“ Buchstaben aus. Halte Fraktur bei Nicknames und Titeln; benutze ihn nie für einen Satz, den jemand hören muss.",
        },
        {
          q: "Kann ich ☠ oder ⚔ an einen Fraktur-Namen hängen?",
          a: "Ja — es sind gewöhnliche Unicode-Symbole und passen natürlich zu Schwarzletter. Beide sind weit unterstützt, auch wenn einige sehr alte Geräte weiterhin Kästchen zeigen.",
        },
      ],
    },
  },

  "small-fonts": {
    de: {
      navName: "Kapitälchen",
      h1: "Kleine Schrift Generator",
      title: "Kleine Schrift Generator — Kapitälchen, hoch & tief",
      description:
        "Ruhige Kapitälchen, Hoch- und Tiefstellung für aufgeräumte Bios. Live-Vorschau, ein Tipp zum Kopieren. Ehrlich: Ein paar Großbuchstaben bleiben unverändert.",
      intro: [
        "Du brauchst eine leise zweite Zeile im Bio? Kapitälchen machen aus Buchstaben Miniatur-Großbuchstaben, Hochstellung hebt Text an, Tiefstellung senkt ihn ab. Live-Vorschau, tippen zum Kopieren.",
        "Alle drei Stile teilen eine Eigenschaft: Sie brüllen nicht. Eine Kapitälchen-Zeile zwischen einer lauten Reihe von Stilen schafft sofort Hierarchie.",
      ],
      steps: [
        "Tippe die Phrase ein, die du verkleinern willst.",
        "Kapitälchen passen zu ganzen Zeilen; hoch- und tiefgestellt passen zu ein, zwei Wörtern.",
        "Kopiere und füge in Bio, Signatur oder Notiz ein.",
        "Ein paar Großbuchstaben haben kein Kapitälchen-Glyph und bleiben unverändert — das ist normal.",
      ],
      about: {
        heading: "Die Grenzen des Kleinschreibens",
        paragraphs: [
          "Unicodes Kapitälchen-Set hat kein X (und Q benutzt einen Lookalike), und die Hochstellungs-Tabelle fehlen mehrere Großbuchstaben. Die Engine ist ehrlich dazu: Zeichen ohne stilisierte Form bleiben, wie getippt, statt gefälscht zu werden.",
          "„Klein“ bedeutet hier andere Zeichen, keine Schriftgrößen-Änderung — Zeilenhöhe und Abstände bleiben unter der Kontrolle der Plattform, und der Text bleibt auf kleinen Bildschirmen lesbar.",
        ],
      },
      faq: [
        {
          q: "Warum haben sich manche Buchstaben nicht verändert?",
          a: "Unicode liefert Kapitälchen-Glyphen nicht für jeden Buchstaben — X hat gar keins. Alle Generatoren haben dieselben Lücken.",
        },
        {
          q: "Wofür sind hochgestellte Ziffern gut?",
          a: "Jahres-Badges wie ²⁰²⁶, Fußnoten und Formel-Witze — sie passen auch gut neben normalen Text als Anmerkungen.",
        },
        {
          q: "Ist kleine Schrift schwerer zu lesen?",
          a: "Die Buchstabenformen sind gewöhnlich; nur die visuelle Größe unterscheidet sich. Aber Screenreader kündigen vielleicht je Zeichen „hochgestellt“ an, also vermeide es für alles, was vorgelesen werden muss.",
        },
        {
          q: "Zählen Kapitälchen im Bio genauso?",
          a: "Ja — ein stilisiertes Zeichen pro gewöhnlichem Buchstaben, die Zählung ändert sich also nicht. Kapitälchen ändern den Look, nicht die Länge.",
        },
        {
          q: "Warum zeigen hochgestellte Buchstaben auf älteren Geräten Kästchen?",
          a: "Die Hochstellungs-Tabelle ist eines der lückenhaften Sets in Unicode, und alte Fonts vermissen viel davon. Wenn Kästchen auftauchen, weiche auf Kapitälchen aus — sie haben die beste Abdeckung der drei Stile.",
        },
        {
          q: "Kann ich mein ganzes Bio in Kapitälchen setzen?",
          a: "Kannst du — Kapitälchen passen besser zu ganzen Zeilen als Hoch- oder Tiefstellung. Aber ein Bio in einem einheitlichen Stil verliert Hierarchie; halte die Hauptzeile normal und style stattdessen die zweite Zeile.",
        },
      ],
    },
  },

  "aesthetic-fonts": {
    de: {
      navName: "Aesthetic",
      h1: "Aesthetic Schrift Generator",
      title: "Aesthetic Schrift Generator — Fullwidth & Vaporwave",
      description:
        "ＡＥＳＴＨＥＴＩＣ-Fullwidth-Buchstaben — der Vaporwave-Look — mit ✧ ｡ﾟ-Herz-Kombis. Live-Vorschau, ein Tipp zum Kopieren für Bios und Captions.",
      intro: [
        "ａｅｓｔｈｅｔｉｃ — gewöhnliche Buchstaben gegen Fullwidth-Formen getauscht, weitet sich alles in einen gleichmäßigen, verträumten Rhythmus. Ein ✧- oder ｡ﾟ-Rahmen dazu, und du hast das komplette Vaporwave-Paket. Tippen zum Kopieren.",
        "Fullwidth-Zeichen wurden für den CJK-Satz entworfen — genau deshalb bekommt Englisch in ihnen diesen unverkennbaren Japanisch-Handbuch-Vibe.",
      ],
      steps: [
        "Tippe ein kurzes Wort oder eine kurze Phrase ein — kürzer liest sich besser.",
        "Nimm den Fullwidth-Körper oder lege eine ✧・｡ﾟ-Deko-Kombi darüber.",
        "Kopiere und füge in Bio, Caption oder Videobeschreibung ein.",
        "Fullwidth-Buchstaben sind breit — prüfe den Zeichenzähler der Plattform.",
      ],
      about: {
        heading: "Warum es aesthetic heißt",
        paragraphs: [
          "Fullwidth Forms sind Unicodes verbreitertes lateinisches Alphabet, gebaut für Kompatibilität mit alten CJK-Terminals. Jedes Zeichen füllt eine ganze ideografische Zelle und gibt dem Text eine bewusst luftige Weite — der Kernbestandteil des Vaporwave-Looks.",
          "Die Deko-Kombis benutzen Zeichen aus derselben Breitenfamilie, dadurch bleibt der Rhythmus gleichmäßig und wird nicht so laut wie bei zufälligem Emoji.",
        ],
      },
      faq: [
        {
          q: "Wie viele Zeichen zählt Fullwidth?",
          a: "Die meisten Plattformen zählen je Zeichen eins; ein paar zählen die Anzeigebreite als 2. Achte nach dem Einfügen auf den eigenen Zähler der Plattform.",
        },
        {
          q: "Passt Fullwidth gut zu Chinesisch?",
          a: "Perfekt — Fullwidth-Buchstaben haben exakt die Breite von Han-Zeichen, gemischte Bios behalten also einen gleichmäßigen Rhythmus. Der beste englische Stil für CJK-gemischten Text.",
        },
        {
          q: "Warum sieht es japanisch aus?",
          a: "Fullwidth-Formen gehören zur CJK-Satztradition, die japanischer Text intensiv nutzt. Sie bleiben standardmäßige Unicode-Zeichen, an keine Sprache gebunden.",
        },
        {
          q: "Lesen Screenreader Fullwidth-Text vor?",
          a: "Meistens ja, aber langsam — viele kündigen jeden Buchstaben als „Fullwidth“-Zeichen an. Fein für einen Ein-Wort-Akzent im Bio; nicht für alles, was vorgelesen werden muss.",
        },
        {
          q: "Funktioniert Fullwidth-Text noch in der Suche?",
          a: "Nein — die Suche nach „vaporwave“ matcht nicht ｖａｐｏｒｗａｖｅ, weil die Zeichen andere Codepunkte sind. Benutze Fullwidth für Anzeigezeilen und halte alles, was gefunden werden soll, in gewöhnlichen Buchstaben.",
        },
        {
          q: "Muss ich einen Vaporwave-Font herunterladen?",
          a: "Nein — Fullwidth-Buchstaben sind standardmäßige Unicode-Zeichen, keine Fontdateien. Nichts zu installieren, kein Konto nötig; der Look reist mit dem kopierten Text mit.",
        },
      ],
    },
  },

  "cute-fonts": {
    de: {
      navName: "Süß",
      h1: "Süße Schrift Generator",
      title: "Süße Schrift Generator — Herzen, Schleifen & Rahmen",
      description:
        "Süße Blubber-, Script- und Kreis-Buchstaben, eingehüllt in ♡ ୨୧ ✿-Rahmen. Live-Vorschau, Kopieren mit einem Tipp für weiche, passende Namen.",
      intro: [
        "Blubber-Buchstaben, Herzen, Schleifen und weiche Klammern — das ganze Süß-Werkzeug auf einer Seite. Tippe einen Namen ein und jeder Stil und jede Kombi rendert live; tippen zum Kopieren.",
        "Deko-Kombis wickeln den Gewinner-Stil in ein Symbolpaar — ♡Sweetie♡. Speichere mehrere Varianten und wechsle je nach Laune.",
      ],
      steps: [
        "Tippe einen Namen oder eine süße kurze Phrase ein.",
        "Wähle die Basis: Blubber ist am rundesten, Script am weichsten.",
        "Lege eine Deko-Kombi darüber — Herzen und Schleifen sind die Favoriten.",
        "Markiere ein paar Kandidaten mit dem Stern und teste, wie sie auf der Plattform rendern.",
      ],
      about: {
        heading: "Das Rezept für süß",
        paragraphs: [
          "Süße entsteht aus runden Glyphen plus symmetrischer Deko. Blubber- und Kreis-Buchstaben tragen die Rundung; Herzen und Blumen auf beiden Seiten geben einen weichen Rhythmus.",
          "Deko-Symbole unterscheiden sich in der Kompatibilität: ♡ und ✿ funktionieren fast überall, während ୨୧ auf alten Geräten zu Kästchen werden kann. Poste eine Probe, bevor du dich festlegst — Risikohinweise stehen auf jeder Karte.",
        ],
      },
      faq: [
        {
          q: "Wie mache ich passende Namen für Paare oder Besties?",
          a: "Wickle denselben Namen in zwei verschiedene Kombis — einmal ♡, einmal ୨୧. Markiere beide mit dem Stern, dann sind sie bereit zum Einfügen.",
        },
        {
          q: "Verbrauchen Dekorationen extra Zeichen?",
          a: "Die Buchstaben tauschen eins zu eins; jede Deko fügt 1–2 Symbole je Seite hinzu. Behalte den Namenslängen-Zähler der Plattform im Auge.",
        },
        {
          q: "Das Schleifen-Symbol zeigt ein Kästchen — was nun?",
          a: "Diesem Gerät fehlt das Glyph. Wechsle zu ♡ oder ✿; die Blubber-Buchstaben selbst sind hochkompatibel.",
        },
        {
          q: "Kommen Screenreader mit einem süßen dekorierten Namen klar?",
          a: "Meistens — ♡ und ✿ werden als kurze Symbolnamen vorgelesen, aber Rahmen um jedes Wort werden schnell laut. Dekoriere den Namen, nicht die Sätze.",
        },
        {
          q: "Warum rendert ♡ manchmal farbig wie ein Emoji?",
          a: "Einige Plattformen geben Herzformen eine Emoji-Darstellung und malen sie rot. Das variiert je Gerät, nicht je Text — wenn es stört, bleiben ✿ oder ✧ zuverlässiger Schwarz-Weiß.",
        },
        {
          q: "Ist der Süß-Generator kostenlos — muss ich etwas installieren?",
          a: "Kostenlos, kein Konto, nichts zu installieren. Blubber- und Kreis-Buchstaben sind Unicode-Zeichen, der Stil wird also zusammen mit dem Text selbst kopiert.",
        },
      ],
    },
  },

  "bubble-fonts": {
    de: {
      navName: "Blubber",
      h1: "Blubberschrift Generator",
      title: "Blubberschrift Generator — Kreise, Quadrate & Klammern",
      description:
        "Wickle jeden Buchstaben ein: gefüllte Bubbles, dünne Kreise, Klammern und quadratische Badges. Live-Vorschau, ein Tipp zum Kopieren für Namen und Nummerierung.",
      intro: [
        "Buchstaben in Kreisen und Kästchen: 🅑🅤🅑🅑🅛🅔 gefüllte Bubbles, ⓑⓤⓑⓑⓛⓔ dünne Kreise, dazu Klammer- und Quadrat-Varianten. Tippen, Vorschau, antippen zum Kopieren.",
        "Die vier Hüllen unterscheiden sich im Gewicht: Bubbles am schwersten, dünne Kreise am leichtesten, Klammern am luftigsten, Quadrate am badge-artigsten (Emoji-Darstellung im Blick behalten).",
      ],
      steps: [
        "Tippe ein Wort ein — 2 bis 6 Buchstaben funktionieren am besten.",
        "Vergleiche die vier Hüllen und wähle die Dichte, die zum Kontext passt.",
        "Kopiere und füge in einen Namen, eine Gruppenkarte oder eine nummerierte Liste ein.",
        "Wenn Quadrate zu farbigen Emoji werden, wechsle zu Bubbles oder Kreisen.",
      ],
      about: {
        heading: "Zwei Familien eingekapselter Buchstaben",
        paragraphs: [
          "Dünne Kreis-Buchstaben stammen aus Unicodes klassischem „Enclosed Alphanumerics“ (Nachbarn der ①②③), das auch eingekreiste Ziffern 1–20 abdeckt; gefüllte Bubbles und Quadrate kommen aus dem neueren Enclosed-Block, wo manche Zeichen eine Emoji-Darstellung tragen.",
          "Diese Emoji-Identität ist der Grund, warum 🅱 gelegentlich farbig rendert — eine Doppelidentität, kein Bug. Wechsle den Stil, wenn eine Plattform die farbige Form erzwingt.",
        ],
      },
      faq: [
        {
          q: "Werden auch Ziffern eingewickelt?",
          a: "Ja — Bubbles und Kreise decken 0–9 ab, Klammern 1–20. Nummerierte Listen wie ⓶⓪⓶ funktionieren direkt out of the box.",
        },
        {
          q: "Warum ist mein Quadrat-Buchstabe bunt geworden?",
          a: "Zeichen wie 🅱🅰 haben eine Emoji-Identität, und manche Plattformen bevorzugen diese Darstellung. Benutze dünne Kreise, wenn du die schlichte Schwarz-Weiß-Form willst.",
        },
        {
          q: "Sind Blubber-Buchstaben gut für lange Sätze?",
          a: "Nein — eingekapselte Zeichen sind visuell dicht und werden schnell laut. Einzelne Wörter, Nummern und Keywords sind die richtige Dosis.",
        },
        {
          q: "Zählen Kreis-Buchstaben als zwei Zeichen?",
          a: "Je eins in den meisten Zählern, aber eingekapselte Buchstaben sind breit — manche Plattformen zählen die Anzeigebreite als 2. Füge erst ein und beobachte den eigenen Zähler der Plattform.",
        },
        {
          q: "Sind Blubber-Buchstaben für Screenreader lesbar?",
          a: "Nicht flüssig — viele kündigen ⓑ als „circled latin small letter b“ an. Fein für einen Anzeigenamen; halte Sätze und alles Vorgelesene in normalen Buchstaben.",
        },
        {
          q: "Muss ich einen Bubble-Font installieren?",
          a: "Nein — das sind Unicode-Zeichen, keine Fontdateien. Nichts zu installieren, kein Konto nötig; die Bubbles reisen im kopierten Text selbst mit.",
        },
      ],
    },
  },

  "strikethrough-text": {
    de: {
      navName: "Durchgestrichen",
      h1: "Durchgestrichener Text Generator",
      title: "Durchgestrichener Text — Generator für Copy Paste",
      description:
        "Durchstreichen, Slash oder Unterstreichen für jeden Text — Chinesisch und Emoji inklusive. Ein Tipp zum Kopieren; Screenreader lesen den Basistext noch.",
      intro: [
        "Chat-Apps lassen dich kein Wort durchstreichen — hier ist die Linie in den Zeichen eingebacken, deshalb überlebt sie jedes Einfügen und funktioniert in jeder Schrift.",
        "Durchgestrichen für Witze und Korrekturen, unterstrichen für Betonung; sechs Varianten von einfachen Linien bis doppelten Unterstreichungen.",
      ],
      steps: [
        "Tippe das Wort oder die Phrase ein, die durchgestrichen werden soll.",
        "Durchgestrichen liest sich als „durchgestrichen“; Unterstreichung liest sich als Betonung.",
        "Kopiere und füge in Chat, Bio oder Kommentar ein.",
        "Die Linienausrichtung hängt vom Font des Lesers ab — leichte Versätze sind normal.",
      ],
      about: {
        heading: "Wie kombinierende Zeichen Linien zeichnen",
        paragraphs: [
          "Die Linien sind keine Grafiken — es sind Unicodes kombinierende Zeichen (U+0336 und Verwandte), die auf jedes Zeichen gestapelt werden. Die Darstellung zieht die Linie durch das vorherige Glyph, deshalb funktioniert der Trick auch auf Chinesisch und Emoji.",
          "Der Preis: Der kopierte Text zählt grob doppelt — jedes sichtbare Zeichen trägt ein unsichtbares. Achte in strengen Eingabefeldern auf den Zähler.",
        ],
      },
      faq: [
        {
          q: "Funktioniert Durchgestrichenes auf Chinesisch?",
          a: "Ja — auch jedes Han-Zeichen bekommt die Linie. Manche Fonts rendern sie auf CJK-Glyphen dünner; der Effekt variiert je Plattform.",
        },
        {
          q: "Warum hat sich meine Zeichenzahl verdoppelt?",
          a: "Jedes sichtbare Zeichen trägt ein unsichtbares kombinierendes Zeichen, das Zähler mitzählen. Durchgestrichener Text ist etwa doppelt so lang wie er aussieht.",
        },
        {
          q: "Kann ich unterstrichenen Text als Spielname benutzen?",
          a: "Kommt aufs Spiel an. Die meisten akzeptieren kombinierende Zeichen; strenge Anti-Cheat-Validierungen können ablehnen. Teste im Umbenennungs-Dialog, bevor du eine Namensänderungskarte investierst.",
        },
        {
          q: "Lesen Screenreader durchgestrichenen Text noch vor?",
          a: "Ja — die kombinierenden Zeichen ändern die Basisbuchstaben nicht, die Wörter kommen also durch. Der „durchgestrichen“-Witz geht für Zuhörer allerdings verloren; verlasse dich nicht auf die Linie als Bedeutung.",
        },
        {
          q: "Wie entferne ich einen Durchstreicher später wieder?",
          a: "Lösche den Text und tippe ihn neu — die Zeichen sind Teil der Buchstaben, nichts kann sie auschalten. Ein Tool, das kombinierende Zeichen stript (wie ein Zalgo-Cleaner), macht es ebenfalls rückgängig.",
        },
        {
          q: "Kann ich auch Emoji durchstreichen?",
          a: "Ja — kombinierende Zeichen stapeln sich auf jedes Zeichen, Emoji inklusive. Die Darstellung variiert: Manche Apps ziehen die Linie sauber, andere versetzen sie oder lassen sie am Emoji-Glyph weg.",
        },
      ],
    },
  },

  "fancy-numbers": {
    de: {
      navName: "Zahlen",
      h1: "Zierzahlen Generator",
      title: "Zierzahlen Generator — Besondere Zahlen zum Kopieren",
      description:
        "Ziffern in ① 𝟙 ➊ — sechs stilisierte Familien für Daten, Türnummern und IDs. Ehrliche Abdeckungshinweise; Kopieren mit einem Tipp.",
      intro: [
        "①②③ 𝟙𝟚𝟛 ➊➋➌ — jeder Ziffern-Stil, den du tippen kannst, auf einer Seite. Gib eine Zahl, ein Datum oder eine Zimmernummer ein und die Stile rendern live.",
        "Ziffern-Stile lassen sich gut mit Wörtern mischen: 𝟐𝟎𝟐𝟕-Klasse, ⓿-Fehler. Die Seite gibt auch Buchstaben-Formen aus, damit du Labels zusammen mit Zahlen kopieren kannst.",
      ],
      steps: [
        "Tippe die Zahl ein — Einheiten und Buchstaben sind willkommen (wie Nr. 1).",
        "Eingekreiste Ziffern passen zur Listennummerierung; fette passen zu Jahren.",
        "Kopiere und füge in Posts, Titel oder Nicknames ein.",
        "Wenn Kästchen auf älteren Geräten auftauchen, wechsle zu fett oder Monospace.",
      ],
      about: {
        heading: "Sechs Formen für zehn Ziffern",
        paragraphs: [
          "Unicode gibt 0–9 mehrere stilisierte Familien: mathematical bold/outline/monospace im Mathe-Block; eingekreiste Ziffern im klassischen Symbolblock neben der ①; gefüllte Bubbles im Enclosed-Block. Die Font-Abdeckung unterscheidet sich je Familie — ältere Systeme vermissen die seltensten.",
          "Eine grobe Zuverlässigkeitsordnung: plain bold > Monospace > Outline > eingekreist > Bubble. Bei unbekannten Geräten bevorzuge den oberen Teil der Liste.",
        ],
      },
      faq: [
        {
          q: "Kann ich Telefonnummern in Zierzahlen schicken?",
          a: "Bitte nicht. Verifizierungscodes, Bestellnummern und Telefonnummern müssen als gewöhnliche Ziffern erkannt werden — stilisierte Ziffern brechen die Erkennung.",
        },
        {
          q: "Was ist der Unterschied zwischen ① und ➊?",
          a: "① ist ein dünner Kreis aus dem klassischen Symbolblock, ➊ eine gefüllte Bubble aus dem Enclosed-Block — verschiedene Quellen, Looks und Font-Abdeckungen. Tausche sie, wenn einer schlecht rendert.",
        },
        {
          q: "Ist eine Benutzer-ID in Zierzahlen auffindbar?",
          a: "Nein. Niemand kann stilisierte Ziffern tippen, um dich zu finden. Zeige Kontaktdaten in gewöhnlichen Ziffern neben jeder dekorierten Version.",
        },
        {
          q: "Warum zeigen eingekreiste Ziffern auf älteren Handys Kästchen?",
          a: "Ältere Fonts decken plain bold und Monospace-Ziffern gut ab, vermissen aber seltenere Familien wie Bubbles und gefüllte Outlines. Bei unbekannten Geräten starte oben in der Zuverlässigkeitsliste — fett zuerst, Bubble zuletzt.",
        },
        {
          q: "Wie gehen Screenreader mit Zierzahlen um?",
          a: "Sie kündigen ① vielleicht als „circled digit one“ an oder überspringen den Stil ganz. Benutze nie stilisierte Ziffern für alles, was vorgelesen oder gewählt werden muss — ein Jahr in einem Post ist okay, eine Adresse nicht.",
        },
        {
          q: "Ist dieser Generator kostenlos nutzbar?",
          a: "Ja — kostenlos, kein Konto, nichts zu installieren. Stilisierte Ziffern sind gewöhnliche Unicode-Zeichen, die du wie jeden anderen Text kopierst.",
        },
      ],
    },
  },

  "zalgo-text": {
    de: {
      navName: "Zalgo",
      h1: "Zalgo Text Generator",
      title: "Glitch Text Generator — Zalgo in 3 Stufen & Cleaner",
      description:
        "Stapele verfluchte Zeichen in drei Intensitäten. Ein Tipp zum Kopieren, oder befreie den Text mit dem eingebauten Cleaner. Screenreader überspringen es.",
      intro: [
        "Zalgo stapeelt kombinierende Zeichen auf Buchstaben, bis der Text blutet. Drei Intensitäten von leicht verstellt bis komplett verflucht — tippen, Vorschau, kopieren.",
        "Der Cleaner am Ende der Seite schließt den Kreis: Füge überallher verhexten Text ein und strippe jede Markierung zurück zum sauberen Original.",
      ],
      steps: [
        "Tippe eine Phrase ein — Zalgo funktioniert auf jedem Zeichen, Chinesisch und Emoji inklusive.",
        "Wähle die Intensität: Leicht passt zu Signaturen, Schwer ist für kurzen Horror-Text.",
        "Tippe auf Kopieren und füge in einen Namen, ein Bio oder einen Gruselpost ein.",
        "Bereust du es? Wirf den Text in den Cleaner unten und stelle ihn wieder her.",
      ],
      about: {
        heading: "Kombinierende Zeichen, zu weit getrieben",
        paragraphs: [
          "Buchstaben, Han-Zeichen und Emoji sind alle gewöhnliche Zeichen — und Unicode liefert hunderte kombinierende Zeichen ohne eigene Breite, die gestapelt auf dem vorherigen Glyph gezeichnet werden. Zalgo stopft 2–8 davon nach jedem Zeichen.",
          "Je dichter der Stapel, desto mehr kämpfen Layout-Engines: Zeilen werden abgeschnitten, Zähler explodieren, und Screenreader rezitieren jede Markierung. Schwerer Zalgo gehört nur in kurzen Text — nie in etwas Wichtiges.",
        ],
      },
      faq: [
        {
          q: "Kann Zalgo-Text meinem Konto schaden?",
          a: "Nein — es ist plain text ohne jeden Code. Die Risiken liegen auf Anzeigenebene: kaputtes Layout, verweigertes Speichern in manchen Spielen. Teste zuerst kurz; der Cleaner stellt immer wieder her.",
        },
        {
          q: "Warum rendert er woanders als Mini-Striche oder Quadrate?",
          a: "Den Fonts des Geräts fehlen diese kombinierenden Glyphen. Eine leichtere Intensität überlebt meist; deshalb ist Schwer nur für kurzen Text.",
        },
        {
          q: "Wie bereinige ich Zalgo, den mir jemand geschickt hat?",
          a: "Füge alles in den Cleaner auf dieser Seite ein — er stript jedes kombinierende Zeichen und jeden Variation Selector und behält nur Basiszeichen, komplett lokal in deinem Browser.",
        },
        {
          q: "Wie viel länger wird Zalgo-Text?",
          a: "Deutlich — jedes Zeichen trägt 2–8 unsichtbare Markierungen, ein schwerer Fluch kann die Länge verdreifachen und strenge Zähler sprengen. Leichter Zalgo passt in einen 30-Zeichen-Namen; schwerer selten.",
        },
        {
          q: "Ist Zalgo für Screenreader lesbar?",
          a: "Im Wesentlichen nein — Screenreader rezitieren jede Markierung und machen aus einem Namen Minuten von Lärm. Es ist der unzugänglichste Stil auf dieser Seite; halte ihn bei kurzen Texten für Augen, nicht für Ohren.",
        },
        {
          q: "Wo kann ich Zalgo-Text überhaupt posten?",
          a: "Bios, Anzeigenamen und Kommentare — kurze, dekorative Stellen. Strenge Felder (Logins, Handles, Formulare) lehnen die Markierungen ab oder schneiden den Stapel, und Spiele mit Namensfiltern lehnen ihn oft ganz ab.",
        },
      ],
    },
  },

  "upside-down-text": {
    de: {
      navName: "Umgedreht",
      h1: "Umgedrehter Text Generator",
      title: "Umgedrehter Text Generator — Buchstaben spiegeln",
      description:
        "Spiegle jeden Buchstaben und drehe die Zeile um — a wird ɐ, ! wird ¡. Tippen, Umkippen zusehen, ein Tipp zum Kopieren. Gut unterstützt in Bios und Nachrichten.",
      intro: [
        "ʇı dᴉlℲ — spiegle jeden Buchstaben und lasse die Zeichenkette rückwärts laufen, und die ganze Zeile liest sich kopfüber. Tippen, Vorschau, kopieren.",
        "Buchstaben, Ziffern 1–9 und gängige Interpunktion haben alle umgedrehte Formen. Chinesisch hat keine und bleibt unverändert, gemischter Text kippt also auf halbem Weg — was seinen eigenen Spaß hat.",
      ],
      steps: [
        "Tippe die Phrase ein, die du umdrehen willst.",
        "Prüfe die Vorschau — auch Interpunktion kippt.",
        "Kopiere und füge in eine Signatur oder einen Kommentar ein.",
        "Soll auch der chinesische Teil seltsam aussehen? Füge einen Rahmen oder Abstände aus dem Dekorator hinzu.",
      ],
      about: {
        heading: "Es ist keine Rotation — es ist Ersetzung",
        paragraphs: [
          "Umgedrehter Text ist kein Grafikeffekt: Die Engine tauscht jeden Buchstaben gegen einen Unicode-Lookalike (a→ɐ, e→ǝ) und kehrt dann die Zeichenkette um, dadurch läuft die Leserichtung rechts nach links und die Zeile wirkt invertiert.",
          "Die Zuordnung deckt beide Schreibweisen, Ziffern und gängige Interpunktion ab; Zeichen ohne umgedrehte Form (wie W oder Chinesisch) bleiben, wo sie sind. Es bleibt ganz normaler Text — Kopieren, Einfügen und Zähler verhalten sich alle normal.",
        ],
      },
      faq: [
        {
          q: "Zeigt umgedrehter Text auf Handys alles korrekt an?",
          a: "Ja — die Spiegelzeichen sind gewöhnliche Buchstaben, die von mainstream Systemfonts abgedeckt werden. Ein paar Formen sehen von Natur aus leicht seltsam aus.",
        },
        {
          q: "Warum ist das Chinesische nicht gekippt?",
          a: "Unicode hat keine gespiegelten Han-Glyphen, Chinesisch bleibt also unverändert. Rahme es oder weite es mit Abständen für den „da stimmt was nicht“-Effekt.",
        },
        {
          q: "Wie lese ich es zurück?",
          a: "Füge es wieder in das Feld ein und kippe erneut — die Transformation ist ihr eigenes Inverses.",
        },
        {
          q: "Verstehen Screenreader umgedrehten Text?",
          a: "Nein — sie lesen die Spiegelbuchstaben, wie geschrieben, was wie Kauderwelch klingt, und die Umkehrung verdreht die Reihenfolge zusätzlich. Kippe nur kurze, dekorative Zeilen.",
        },
        {
          q: "Warum sind manche Buchstaben aufrecht geblieben?",
          a: "Ein paar Zeichen haben keinen umgedrehten Lookalike — W ist der berühmte — also bleiben sie, wie getippt. Es ist eine Lücke in Unicodes Spiegeltabelle, kein Bug im Generator.",
        },
        {
          q: "Kann ich umgedrehten Text in einem Benutzernamen benutzen?",
          a: "Anzeigenamen nehmen ihn meist; strenge @Handles und Login-Felder lehnen die Spiegelzeichen typischerweise ab. Teste zuerst im echten Feld — und bedenke, dass niemand ihn tippen kann, um dich zu suchen.",
        },
      ],
    },
  },

  "cool-font-generator": {
    de: {
      navName: "Cool",
      h1: "Cooler Schriftgenerator",
      title: "Cooler Schriftgenerator — Blitze, Sterne & fette Namen",
      description:
        "Cooler Schriftgenerator für Copy-Paste-Namen: fette Buchstaben mit Blitz ⚡, Sternflügeln ★彡 oder 『』-Klammern. Kostenlos — tippen, vergleichen, kopieren.",
      intro: [
        "Tippe einen Namen ein und die coolen Versionen entstehen beim Tippen: schwere fette Buchstaben, eine leisere Kapitälchen-Zeile und dekorierte Zeilen mit Blitz ⚡, Sternflügel ★彡 oder 『』-Klammern. Karte antippen zum Kopieren — keine Fontdateien, keine Anmeldung, alles läuft im Browser.",
        "Die schwere Zeile ist Unicode Mathematical Bold, die Fette steckt also in den Zeichen selbst und überlebt jedes Einfügen. Leute suchen hier nach stylishem Text oder Clan-Tags — es ist derselbe Look: fette Buchstaben mit einem Symbolpaar, kein eigenes Alphabet.",
      ],
      steps: [
        "Tippe deinen Namen oder Tag ein — ein einzelnes Wort wirkt schwerer als ein langes.",
        "Vergleiche die nackte fette Zeile mit den Blitz-, Sternflügel- und Klammer-Reihen; Kapitälchen ist der leise Rückfall.",
        "Kopiere den Gewinner und füge ihn in einen Discord-Anzeigenamen, ein Bio oder einen Spiel-Tag ein.",
        "Prüfe die eigene Vorschau der App: ASCII-only-Spielfelder strippen fettes Unicode, und die Symbole sind das Erste, was ältere Handys verlieren.",
      ],
      about: {
        heading: "Was einen Namen cool lesen lässt",
        paragraphs: [
          "Fett wandelt Buchstaben und Ziffern; Kapitälchen deckt die meisten Buchstaben ab und lässt ein paar unverändert, wo Unicode keine Kapitälchen-Form hat. Blitz, Sterne und Klammern sind Extra-Zeichen um die fette Reihe und zählen gegen das Längenlimit des Zielfelds.",
          "Diese Seite baut einen dekorierten Namen — den lautesten Look des Generators. Verschwindet ein Symbol in der Vorschau einer App, kopiert die nackte fette Zeile immer sauber; deshalb sollte jeder coole Name eine plain-Version parat haben.",
        ],
      },
      faq: [
        {
          q: "Sind coole Buchstaben dasselbe wie coole Fonts?",
          a: "Ja — coole Buchstaben, coole Fonts und cooler Text beschreiben alle dasselbe: fette oder Kapitälchen-Unicode-Buchstaben mit Sternen, Flügeln oder Klammern. Oben tippen, Look wählen, kopieren.",
        },
        {
          q: "Was bedeutet stylisher Text hier?",
          a: "Dieselben dekorierten fetten Namen. Stylish heißt auf dieser Seite die Blitz-, Sternflügel- und Klammer-Reihen — kein separates Alphabet.",
        },
        {
          q: "Passt ein Clan-Tag in einen Spiel-Benutzernamen?",
          a: "Oft ist das Symbol der Teil, der abgelehnt wird. Verschwinden Flügel oder Blitz in der Spielvorschau, nimm die nackte fette Reihe — sie kommt überall durch, wo das Spiel normale Buchstaben nimmt.",
        },
        {
          q: "Wie lang darf ein cooler Name sein?",
          a: "Achte aufs Feld: Discord-Nicknames laufen bei etwa 32 Zeichen, Instagram-Anzeigenamen bei etwa 30, und jede Deko zählt als eins. Ein kurzes Wort plus ein Symbolpaar passt mit Luft.",
        },
        {
          q: "Ist fettes Unicode sicher für Screenreader?",
          a: "Manche Screenreader geben die mathematischen Buchstaben einzeln oder seltsam buchstabiert aus. Fein für einen Namen oder ein Wort; halte Sätze im Klartext.",
        },
        {
          q: "Funktioniert cooler Text auf Instagram und TikTok?",
          a: "Ja — Bios, Captions und Anzeigenamen nehmen die fetten Buchstaben auf modernen Handys. Handles bleiben plain: Instagram-Benutzernamen erlauben nur Buchstaben, Ziffern, Punkte und Unterstriche.",
        },
      ],
    },
  },

  "elegant-font-generator": {
    de: {
      navName: "Elegant",
      h1: "Elegante Schrift Generator",
      title: "Elegante Schrift Generator — Script Namen & Lilie ⚜",
      description:
        "Eleganter Schriftgenerator für Copy-Paste-Namen: fettes Script mit Lilie ⚜ oder floralen Herz ❦. Für Bios, Captions und formelle Anzeigenamen — kostenlos.",
      intro: [
        "Tippe einen Namen ein und die eleganten Versionen entstehen mit: schweres fettes Script, ein dünneres nacktes Script daneben und dekorierte Zeilen mit Lilie ⚜ oder floralen Herz ❦. Royal- und Prinzessinnen-Namen sind genau dieser Look — fließende Buchstaben und ein formelles Symbol.",
        "Die Buchstaben sind Unicode Bold Script, und jede Lilie oder jedes Herz ist ein separates Symbol, das nur um diese Reihe gelegt wird, ein Paar je Ergebnis. Es ist Text zum Einfügen, keine Kalligraphie-Fontdatei und keine runden Bubble-Zeichen — genau deshalb funktioniert es in Bios und Anzeigenamen.",
      ],
      steps: [
        "Tippe den Namen oder die kurze Caption ein, die du aufhübschen willst — ein, zwei Wörter sind der Sweet Spot.",
        "Vergleiche das schwere fette Script mit der dünneren Script-Reihe, dann probiere die Lilien- und Blütenherz-Paare.",
        "Kopiere die passende Zeile und füge sie in einen Anzeigenamen, ein Bio oder eine Caption ein.",
        "Wenn das schwere Script auf einem älteren Handy Kästchen zeigt, kopiere die dünnere Script-Reihe — gleicher Stil, breitere Geräteunterstützung.",
      ],
      about: {
        heading: "Aufgehübschtes Script, ehrlich erklärt",
        paragraphs: [
          "Beide Script-Stile wandeln nur Buchstaben — Ziffern, akzentuierte Buchstaben und Emoji bleiben, wie getippt, denn Unicode liefert dafür keine Script-Formen. Jede Lilie oder jedes florale Herz ist ein Extra-Zeichen auf seiner Seite des Namens und zählt gegen das Längenlimit des Felds.",
          "Der Look passt zu Hochzeits- und Beauty-Anzeigenamen, zu einem Royal- oder Prinzessinnen-Namen im Bio und zu kurzen Captions, die aufgehübscht wirken sollen. Für ganze Sätze liest sich die nackte Script-Reihe sauberer — hebe die Symbole für Namen auf.",
        ],
      },
      faq: [
        {
          q: "Ist elegant dasselbe wie Schreibschrift?",
          a: "Schreibschrift ist das nackte Script-Alphabet. Elegant führt mit dem schwereren Script und fügt ein formelles Symbol hinzu: eine Lilie oder ein florales Herz.",
        },
        {
          q: "Wo finde ich Royal- und Prinzessinnen-Fonts?",
          a: "Auf dieser Seite. Ein Prinzessinnen- oder Royal-Name hier ist Script plus eine Lilie oder ein florales Herz — kein separater Download.",
        },
        {
          q: "Ist das eine Kalligraphie-Fontdatei?",
          a: "Nein. Du kopierst Zeichen. Kalligraphie-Fontdateien muss man installieren, und diese Seite bietet keine an.",
        },
        {
          q: "Ist das, was Leute einen Luxus-Font nennen?",
          a: "Oft ja. Luxus-Font-Suchen wollen meist denselben formellen Look — fließendes Script mit verzierten Zeichen und ordentlichem Abstand. Wie alles hier ist es Unicode-Text und lässt sich in Bios und Profile einfügen.",
        },
        {
          q: "Kann das in meinen Instagram-Benutzernamen?",
          a: "Nein. Benutzernamen erlauben nur Buchstaben, Ziffern, Punkte und Unterstriche. Füge den Script-Namen in deinen Anzeigenamen oder dein Bio ein — dort werden stilisierte Zeichen akzeptiert.",
        },
        {
          q: "Wie lang darf ein eleganter Name sein?",
          a: "Instagram-Anzeigenamen laufen bei etwa 30 Zeichen, Discord-Nicknames bei etwa 32, und jede Lilie oder jedes Herz fügt je Seite eins hinzu. Ein kurzer Name plus ein Symbolpaar ist die bequeme Größe.",
        },
      ],
    },
  },

  "dark-font-generator": {
    de: {
      navName: "Dunkel",
      h1: "Dunkle Schrift Generator",
      title: "Dunkle Schrift Generator — Fraktur, Totenkopf & Klingen",
      description:
        "Dunkler Schriftgenerator für Copy-Paste-Namen: Fraktur mit Totenkopf ☠ oder gekreuzten Klingen ⚔. Für dunkle Bios und Emo-Namen — kein Font-Download.",
      intro: [
        "Tippe ein Wort ein und die dunklen Reihen setzen es in Fraktur, je Zeile mit einem dunklen Symbol — einem Totenkopf ☠ oder einem Paar gekreuzter Klingen ⚔. Emo-Schrift ist genau diese Mischung: Fraktur-Buchstaben plus eine Marke. Das nackte Alphabet ohne Totenköpfe lebt auf der Fraktur-Seite.",
        "Die Buchstaben sind Unicode Fraktur; der schwere fette Schnitt trägt die Deko und bleibt bei kleinen Größen lesbar. Ziffern bleiben, wie getippt — Unicode hat keine Fraktur-Zahlen — und der Totenkopf ist ein Symbol, das je Handy etwas anders zeichnen kann.",
      ],
      steps: [
        "Tippe deinen Ein-Wort-Namen oder dein Motto ein — Nacht, Rabe, was auch immer düster wirken soll.",
        "Vergleiche Totenkopf- und Klingen-Reihen mit der nackten fetten Fraktur darunter; Strike-, Slash- und Unterstreichungs-Varianten gibt es auch.",
        "Kopiere eine Reihe und füge sie in einen Discord-Namen, ein Bio oder einen Halloween-Post ein.",
        "Zeigt der Totenkopf auf einem Handy ein leeres Kästchen, kopiere stattdessen die Klingen- oder die nackte Fraktur-Reihe.",
      ],
      about: {
        heading: "Der dekorierte dunkle Look",
        paragraphs: [
          "Beide Fraktur-Stile wandeln nur A–Z und a–z — Ziffern, akzentuierte Buchstaben und andere Schriften bleiben unangetastet. Totenkopf und Klingen sind separate Symbole auf den dekorierten Reihen und zählen, wie die Buchstaben, gegen Namenslängen-Limits.",
          "Wo er passt: dunkle Bios und Discord-Namen, Emo- oder düstere Ein-Wort-Namen und Halloween-Zeilen, die trotzdem als Klartext kopieren müssen. Spiele, die plain ASCII verlangen, lehnen Fraktur ganz ab — prüfe also die eigene Umbenennungs-Vorschau des Spiels, bevor du etwas Wichtiges umbenennst.",
        ],
      },
      faq: [
        {
          q: "Ist Emo-Text anders als gotisch?",
          a: "Gotisch ist auf dieser Seite das nackte Fraktur-Alphabet. Emo ist dieses Alphabet plus Totenkopf oder Klinge — und das ist diese Seite.",
        },
        {
          q: "Kann ich einen dunklen Font herunterladen?",
          a: "Nein. Du kopierst Zeichen. Eine Fontdatei müsste installiert werden, und hier wird nichts installiert — genau deshalb überlebt der Stil das Einfügen überhaupt.",
        },
        {
          q: "Warum sehen manche Buchstaben anders aus als der Rest?",
          a: "Fraktur behält historische Formen für C, H, I, R und Z, und Unicode hat keine Fraktur-Ziffern, Zahlen bleiben also plain. Diese Form ist das Alphabet, kein Glitch.",
        },
        {
          q: "Funktioniert dunkler Text in Instagram-Bios?",
          a: "Ja — Fraktur-Buchstaben lassen sich in Instagram-Bios und Anzeigenamen auf modernen Handys einfügen. Der Benutzername bleibt plain, und ein paar ältere Android-Geräte vermissen manche Glyphen.",
        },
        {
          q: "Akzeptieren Spiele Fraktur-Namen?",
          a: "Viele lehnen ab. Spiele mit ASCII-only-Namensfeldern strippen Fraktur komplett — teste also in der eigenen Umbenennungs-Vorschau des Spiels, bevor du dich auf einen dunklen Tag festlegst.",
        },
        {
          q: "Ist dunkler Text okay für Screenreader?",
          a: "Wie andere mathematische Alphabete kann Fraktur Buchstabe für Buchstabe ausgegeben oder übersprungen werden. Halte dich an Namen und kurze Zeilen — nie für Informationen, die jemand lesen muss.",
        },
      ],
    },
  },

  "heart-font-generator": {
    de: {
      navName: "Herz",
      h1: "Herz Schrift Generator",
      title: "Herz Schrift Generator — Namen mit ♡ kopieren",
      description:
        "Herz-Schriftgenerator für Copy-Paste-Namen: Script-Buchstaben mit einem Herz ♡ je Seite oder einer Blume ✿-Reihe. Kostenlos im Browser, nichts zu installieren.",
      intro: [
        "Script-Buchstaben, dann ein Herz ♡ je Seite — die weichste Art, einen Namen aufzuhübschen. Tippe Love, Mia oder Honey ein und jede Reihe baut sich beim Tippen neu auf; antippen zum Kopieren.",
        "Die Herz-Reihen wickeln Unicode Bold Script, das schwerere Alphabet mit echten Formen von e, g und o, sodass kurze Namen ihre Buchstabenformen behalten. Eine Blume ✿-Reihe ist da, wenn ein Herz zu süß wirkt, und die Blubber- und Kapitälchen-Reihen bleiben nackt, damit der Name selbst lesbar bleibt.",
      ],
      steps: [
        "Tippe den Namen oder die kurze Caption ein — ein einzelnes Wort hält das Herzpaar im Fokus.",
        "Vergleiche die Herz ♡- und Blume ✿-Reihen mit den nackten Script- und Blubber-Reihen darunter.",
        "Kopiere eine Reihe und füge sie in einen Instagram-Anzeigenamen, ein TikTok-Bio oder einen Discord-Nickname ein.",
        "Zeigt eine Deko auf deinem Handy ein leeres Kästchen, kopiere die nackte Script-Reihe — dieselben Buchstaben, nichts, was brechen kann.",
      ],
      about: {
        heading: "Ein Herz je Seite, dann Schluss",
        paragraphs: [
          "Script und fettes Script wandeln A–Z und a–z; Blubber wandelt auch Buchstaben und Ziffern, während Kapitälchen ein paar Buchstaben unverändert lässt. Ziffern, akzentuierte Buchstaben und Emoji bleiben unangetastet. Herzen und Blumen sind Extra-Zeichen und zählen gegen Namenslängen-Limits.",
          "Ein Herz auf Blubber-Buchstaben bleibt auf der Süß-Seite, und ein sauberes Herz auf Kapitälchen bleibt auf der Preppy-Seite — diese Seite hält die fließende Script-Version. Am besten geeignet: Instagram- und TikTok-Anzeigenamen, Bios und Discord-Nicknames, wo ein Herz je Seite genügt.",
        ],
      },
      faq: [
        {
          q: "Ist ein Herz-Font eine Datei zum Herunterladen?",
          a: "Nein. Das Ergebnis sind Unicode-Zeichen, deshalb lässt es sich in Apps einfügen, die nur plain text akzeptieren. Diese Seite bietet keine Fontdateien an und zeichnet die Buchstaben auch nicht in ein Bild.",
        },
        {
          q: "Wie unterscheidet sich das von der Süß- und Preppy-Seite?",
          a: "Süß führt mit Blubber-Buchstaben und einer Deko; Preppy ist Kapitälchen mit einem sauberen Herz. Diese Seite ist fließendes Script mit einem Herz ♡ oder einer Blume ✿ je Seite.",
        },
        {
          q: "Kann ich einen Herz-Namen als Instagram-Benutzernamen benutzen?",
          a: "Nein. Instagram-Benutzernamen erlauben nur Buchstaben, Ziffern, Punkte und Unterstriche. Füge den Herz-Namen in deinen Anzeigenamen oder dein Bio ein.",
        },
        {
          q: "Wie viele Zeichen verbraucht ein Herz-Name?",
          a: "Jedes Herz fügt je Seite eins hinzu, zusätzlich zu den Buchstaben. Instagram-Anzeigenamen laufen bei etwa 30 Zeichen, Discord-Nicknames bei etwa 32 — ein kurzes Wort plus ein Paar passt bequem.",
        },
        {
          q: "Funktionieren Herz-Namen auf TikTok?",
          a: "Ja — TikTok-Bios und anzeigename-artige Namen nehmen die Script-Buchstaben und die Herzen. Handles bleiben plain, und was die App letztlich akzeptiert, entscheidet die App — füge also eine Probe ein, bevor du speicherst.",
        },
        {
          q: "Können Screenreader Herz-Text lesen?",
          a: "Oft nicht als das Wort, das du getippt hast — stilisiertes Unicode wird buchstabenweise buchstabiert oder übersprungen. Halte eine Klartext-Kopie des Namens bereit und lege nie wesentliche Informationen in stilisierte Zeichen.",
        },
      ],
    },
  },

  "coquette-font-generator": {
    de: {
      navName: "Coquette",
      h1: "Coquette Schrift Generator",
      title: "Coquette Schrift Generator — Schleifen-Buchstaben",
      description:
        "Kostenlose Coquette-Buchstaben mit ୨୧-Schleife. Script kopieren und einfügen für Instagram-Anzeigenamen und Discord-Nicknames — kein Font-Download.",
      intro: [
        "Script-Buchstaben, dann eine Schleife. Tippe einen Namen ein — Mia, Lila, Belle — und die Reihen bauen sich im Browser neu auf: das ୨୧-Schleifenpaar auf fettem Script, mit Herzen ♡, Blumen ✿ und weichen Klammern ꒰꒱ als Alternativen. Süßer Text ist auf dieser Seite runde Blubber-Buchstaben; diese Seite bleibt beim Schleifen-Look.",
        "Die Schleife wickelt Unicode Bold Script — das schwerere Alphabet mit echten Formen von e, g und o — sodass Namen wie Belle ihre Buchstabenformen behalten. Das dünnere Script sitzt darunter ohne Schleife, und dort sind e, g und o Stellvertreter. Die Schleifen sind separate Symbole, die nur um die fette Reihe gelegt werden.",
      ],
      steps: [
        "Tippe den Namen ein, den du willst — ein Wort hält die Schleife im Fokus.",
        "Benutze die fetten Script-Reihen, damit e, g und o ihre richtigen Formen behalten.",
        "Kopiere eine Reihe und füge sie in einen Instagram-Anzeigenamen, einen TikTok-Namen, eine Caption oder einen Discord-Nickname ein — nie in den Benutzernamen.",
        "Zeigt eine Schleife auf deinem Handy ein leeres Kästchen, kopiere stattdessen die Herz- oder Blumen-Reihe, und behalte die Klartext-Kopie.",
      ],
      about: {
        heading: "Schleifen-Buchstaben und wo sie hingehören",
        paragraphs: [
          "Script wandelt A–Z und a–z; Ziffern bleiben, wie getippt. Jede Schleife, jedes Herz und jede Blume ist ein Extra-Zeichen, das gegen Namenslimits zählt — Instagram-Anzeigenamen laufen bei etwa 30 Zeichen, Discord-Nicknames bei etwa 32, ein Ein-Wort-Name mit einem Paar passt also mit Luft.",
          "Screenreader können stilisiertes Unicode oft nicht als das getippte Wort sprechen, deshalb gehört eine Klartext-Kopie des Namens dazu. Alles wandelt in deinem Browser, nichts wird hochgeladen; was eine App letztlich akzeptiert, entscheidet die App — prüfe also ihre eigene Vorschau, bevor du speicherst.",
        ],
      },
      faq: [
        {
          q: "Ist Coquette ein Font zum Herunterladen?",
          a: "Nein. Du kopierst Zeichen. Eine Fontdatei müsste installiert werden, und diese Seite bietet keine an.",
        },
        {
          q: "Wie unterscheidet sich das von der Süß-Font-Seite?",
          a: "Süß sind Blubber-Buchstaben mit Herz, Schleife oder Blume. Coquette ist fließendes Script mit dem ୨୧-Schleifenpaar. Die beiden Seiten teilen keinen Look.",
        },
        {
          q: "Darf ein Coquette-Name in meinen Instagram-Benutzernamen?",
          a: "Nein. Der Benutzername bleibt plain Buchstaben, Ziffern und ein paar Zeichen. Versuche den stilisierten Namen im Anzeigenamen oder Bio — die App entscheidet, welche Zeichen sie akzeptiert.",
        },
        {
          q: "Kann ich einen Coquette-Namen auf TikTok benutzen?",
          a: "Ja — TikTok-Anzeigenamen und Bios nehmen die Script-Buchstaben und die Schleifen. Der Handle bleibt plain, und was TikTok rendert, ist TikToks Entscheidung — prüfe es in der App.",
        },
        {
          q: "Funktioniert die Schleife in Captions?",
          a: "Ja — eine kurze Caption mit einem Schleifenpaar passt natürlich. Wird die Schleife auf dem Handy eines Lesers ein leeres Kästchen, kopieren die Herz- und Blumen-Reihen weiterhin.",
        },
        {
          q: "Wie behalte ich den Namen, wenn stilisierte Zeichen scheitern?",
          a: "Behalte eine Klartext-Kopie. Screenreader überspringen oder buchstabieren stilisierte Buchstaben vielleicht auch, daher ist die plain-Version netter für die Barrierefreiheit — und sie fügt immer und überall ein.",
        },
      ],
    },
  },

  "chicano-font-generator": {
    de: {
      navName: "Chicano",
      h1: "Chicano Schrift Generator",
      title: "Chicano Schrift Generator — Fraktur & Script kopieren",
      description:
        "Chicano-Schriftgenerator für Namen und Bios: Fraktur mit Verzierung, dazu eine Script-Zeile zum Kopieren. Kostenlos — keine Fontdatei, keine Schablone.",
      intro: [
        "Klassisches Fraktur, dann eine Verzierung je dekorierte Reihe — der Totenkopf ☠ und die gekreuzten Klingen ⚔. Tippe einen kurzen Namen oder ein Motto ein und jede Reihe baut sich beim Tippen neu auf; nacktes Fraktur ohne Verzierungen lebt auf der Fraktur-Seite.",
        "Die Verzierungs-Reihen wickeln Unicode Fraktur, das Schwarzletter-Alphabet, das oft Old English genannt wird, mit fetter Fraktur als schwererem Schnitt darunter. Fettes Script ist die dritte Reihe und bleibt nackt: Es steht für die fließende Hälfte der Chicano-Schrift, und seine Buchstaben sind nicht verbunden.",
      ],
      steps: [
        "Tippe einen kurzen Namen oder ein Motto ein — Rosa, Luz, Vida.",
        "Vergleiche die Verzierungs-Reihen mit nackter fetter Fraktur und sieh dir die Script-Reihe für die fließende Hälfte des Looks an.",
        "Kopiere eine Reihe und füge sie in ein Bio oder einen Anzeigenamen ein, dann sieh sie dir in dieser App an, bevor du speicherst.",
        "Du bereist einen Lettering-Künstler? Nutze die Reihen, um zu entscheiden, welche Hälfte des Stils du wirklich tätowiert haben willst.",
      ],
      about: {
        heading: "Eine Annäherung, ehrlich benannt",
        paragraphs: [
          "Beide Fraktur-Stile wandeln nur A–Z und a–z. Ziffern, akzentuierte Buchstaben wie á, é und ñ und Emoji bleiben, wie getippt, denn Unicode hat dafür keine Fraktur-Formen. Fettes Script wandelt nur Buchstaben, und jede Verzierung ist ein Extra-Zeichen, das gegen Namenslängen-Limits zählt.",
          "Traditionelle Chicano-Schrift ist handgezeichnetes Fraktur und Script aus der mexikanisch-amerikanischen Grafik — Murals, Autos, Tattoos. Diese Reihen nähern nur den Fraktur-Look an und ersetzen keinen Künstler; gut sind sie, um einen kurzen Namen im Bio zu testen und festzulegen, welche Hälfte des Stils du willst, bevor du etwas in Auftrag gibst.",
        ],
      },
      faq: [
        {
          q: "Ist das ein Chicano-Font zum Herunterladen?",
          a: "Nein. Du kopierst Unicode-Zeichen. Diese Seite bietet keine Fontdatei an und lädt auch nicht die Retail-Fraktur- oder Script-Schriften, die Bildgeneratoren benutzen.",
        },
        {
          q: "Ist das traditionelle Chicano-Lettering?",
          a: "Nein. Chicano-Lettering ist handgezeichnetes Fraktur und Script aus der mexikanisch-amerikanischen Grafik — Murals, Autos, Tattoos. Diese Reihen nähern den Fraktur-Look plus ein Script-Alphabet an; sie sind keine Schablone.",
        },
        {
          q: "Warum bleiben ñ und akzentuierte Buchstaben plain?",
          a: "Unicode-Fraktur hat keine stilisierte Form dafür, sie bleiben also unverändert, während die anderen Buchstaben wandeln — á und ñ in einem Namen behalten ihre echten Akzente.",
        },
        {
          q: "Akzeptieren Instagram oder TikTok diese Zeichen?",
          a: "Anzeigenamen und Bios nehmen Fraktur meist auf modernen Handys; Handles nicht. Spiele, die nur plain Buchstaben akzeptieren, lehnen Schwarzletter ganz ab — füge also zuerst eine Probe im echten Feld ein.",
        },
        {
          q: "Wie lang darf der Name sein?",
          a: "Instagram-Anzeigenamen laufen bei etwa 30 Zeichen, Discord-Nicknames bei etwa 32, und jede Verzierung fügt je Seite eins hinzu. Ein kurzes Wort plus eine Marke passt; ein seltenes Symbol kann auf manchen Handys auch als leeres Kästchen rendern.",
        },
        {
          q: "Kann ich das als Tattoo-Schablone benutzen?",
          a: "Bitte nicht. Das sind Text-Glyphen, keine für Haut bemessene Zeichnung. Erkunde den Look hier, dann nimm die Idee — und die Referenzfotos — zu einem Lettering-Künstler.",
        },
      ],
    },
  },

  "preppy-font-generator": {
    de: {
      navName: "Preppy",
      h1: "Preppy Schrift Generator",
      title: "Preppy Schrift Generator — Kapitälchen & Herz ♡",
      description:
        "Preppy-Schriften: saubere Kapitälchen mit einem ordentlichen Herz ♡. Kopieren und einfügen in Bios, TikTok-Namen und Adopt Me-Anzeigenamen — kostenlos.",
      intro: [
        "Preppy-Schriften sind der saubere Kapitälchen-Look mit einem ordentlichen Herz ♡ — der Stil hinter den meisten Preppy-Namen in Adopt Me und TikTok-Bios. Tippe Mila, Blair oder Tess ein und die Reihen bauen sich beim Tippen auf, eine Deko je Seite, damit der Name im Fokus bleibt.",
        "Kapitälchen sind Unicode-Modifikatorbuchstaben, die wie kürzere Großbuchstaben aussehen; Script und Blubber sind die weicheren Zweitoptionen. Funkeln ✧ funktioniert, wenn ein Herz zu süß wirkt, und jede Deko ist ein separates Symbol um die gewählte Reihe.",
      ],
      steps: [
        "Tippe den kurzen Namen ein — ein Wort mit fünf Buchstaben oder weniger ist die bequeme Größe.",
        "Wähle die Deko: ein Herz ♡, ein Funkeln ✧ oder gar nichts auf den nackten Reihen.",
        "Kopiere und füge in ein Instagram-Bio, einen TikTok-Namen oder einen Adopt Me-Anzeigenamen ein.",
        "Füge es auf Robloxs eigenem Namensbildschirm ein und prüfe die Vorschau, bevor du die Änderung bestätigst.",
      ],
      about: {
        heading: "Warum Preppy ordentlich bleibt",
        paragraphs: [
          "Kapitälchen decken die meisten Buchstaben ab und lassen ein paar unverändert, wo Unicode keine Kapitälchen-Form hat; Script wandelt nur Buchstaben, Ziffern in dieser Reihe bleiben also plain. Herzen und Funkeln sind Extra-Zeichen — und manche Herz-Varianten sind Emoji, das Erste, was ein Spielfilter ablehnen kann. Verschwindet eines, kopiert die plain Herz- oder Funkeln-Reihe weiterhin.",
          "Adopt Me zeigt deinen Roblox-Anzeigenamen — meist etwa 20 Zeichen — und der Benutzername selbst kann gar keine Fonts. Ein kurzer Kapitälchen-Name mit einem Herz passt öfter in dieses Feld als ein Stapel Schleifen; deshalb hält diese Seite die Deko plain.",
        ],
      },
      faq: [
        {
          q: "Ist Preppy dasselbe wie Coquette?",
          a: "Nein. Coquette ist fließendes Script mit einem Schleifenpaar. Preppy ist Kapitälchen mit einem sauberen Herz — ordentlicher, kürzer, bodennäher.",
        },
        {
          q: "Funktioniert das als Adopt Me-Benutzername?",
          a: "Nein — der Roblox-Benutzername bleibt Buchstaben, Ziffern und ein Unterstrich. Versuche den stilisierten Namen als Anzeigenamen, und nur nachdem die eigene Vorschau des Spiels ihn akzeptiert.",
        },
        {
          q: "Warum die Deko so plain halten?",
          a: "Ein Stapel Schleifen frisst die 20-Zeichen-Anzeigenamen und wird öfter gefiltert. Ein Herz ist die Preppy-Marke und lässt noch Raum für den Namen.",
        },
        {
          q: "Wie heißt die Preppy-Font?",
          a: "Es gibt keine einzelne Preppy-Font. Was Social Media preppy nennt, sind meist Kapitälchen — kürzere Großbuchstaben — oft mit einem sauberen Herz oder Funkeln daneben. Es ist alles Unicode-Text, kein installierter Font, deshalb überlebt er Kopieren und Einfügen.",
        },
        {
          q: "Wie bekomme ich Preppy-Schriften?",
          a: "Tippe deinen Namen oben ein, wähle eine Stil-Reihe und eine Deko, dann kopieren. Füge es in dein Instagram-Bio, deinen TikTok-Anzeigenamen oder dein Adopt Me-Profil ein und prüfe die eigene Vorschau der Plattform, bevor du speicherst.",
        },
        {
          q: "Warum bleiben ein paar Buchstaben klein?",
          a: "Unicode hat nie Kapitälchen-Formen für jeden Buchstaben definiert, diese wenigen bleiben also, wie getippt. Jeder Generator hat dieselben Lücken — welche, die sie doch wandeln, benutzen Stellvertreter, die nicht auf allen Geräten rendern.",
        },
      ],
    },
  },

  "crazy-font-generator": {
    de: {
      navName: "Verrückt",
      h1: "Verrückte Schrift Generator",
      title: "Verrückte Schrift Generator — Wilde Unicode-Stile",
      description:
        "Verrückter Schriftgenerator für Bios, Spielnamen und Chats: Zalgo, umgedreht, Fraktur und gespreizte wilde Stile. Ein Tipp zum Kopieren — kostenlos.",
      intro: [
        "Ein Stil ist nie verrückt genug. Diese Seite sammelt die lauten in einer einzigen Kartenreihe: Zalgo-Korruption in drei Intensitäten, umgedrehter Text, Fraktur, Schrägstriche, Durchstreicher, gespreizte Buchstaben und negative Quadrate — mit Funkeln ✧- und Totenkopf ☠-Paaren obendrauf.",
        "Jedes Ergebnis ist darunter derselbe Trick: gewöhnliche Buchstaben gegen Unicode-Lookalikes getauscht, deshalb kopiert und fügt alles hier wie plain text ein. Das Chaos steckt in den Zeichen, nicht in einer Fontdatei — was du siehst, ist was reist.",
      ],
      steps: [
        "Tippe deinen Namen oder Handle ein — Cr@zy, GlitchQueen, was auch immer ausgeflippt wirken soll.",
        "Gehe die Karten durch: Zalgo für Korruption, umgedreht für Verwirrung, Fraktur und Schrägstriche für Kanten.",
        "Füge ein Funkeln- oder Totenkopf-Paar hinzu, wenn die Reihe einen letzten Schub braucht.",
        "Kopiere und füge in ein Bio, einen Anzeigenamen, einen Streamtitel oder Clan-Tag ein — dann prüfe die Vorschau der App, bevor du speicherst.",
      ],
      about: {
        heading: "Chaos mit Methode",
        paragraphs: [
          "Die wilden Stile wandeln A–Z und a–z, manche auch Ziffern. Zeichen ohne stilisierten Lookalike — akzentuierte Buchstaben, Emoji, Chinesisch — bleiben unangetastet, ein wildes Ergebnis kann also absichtlich stilisierte und plain Zeichen mischen. Deko kommt zur Länge dazu, die das Zielfeld zählt.",
          "Am besten geeignet: Spielnamen und Clan-Tags, die absichtlich chaotisch wirken sollen, Profile, die Cool und Fraktur schon probiert haben und etwas Lauteres wollen, und Einmal-Witze, Streamtitel und Chat-Handles mit ausgeflippter Energie. Bleib bei ein, zwei Wörtern — dieser Stil ist ein Kostüm, kein Textfont.",
        ],
      },
      faq: [
        {
          q: "Was sind verrückte Fonts?",
          a: "Gar keine Fonts — jedes verrückte Ergebnis ist gewöhnlicher Text, dessen Buchstaben gegen Unicode-Lookalikes getauscht wurden. Deshalb kannst du sie überall einfügen, wo plain text hingeht.",
        },
        {
          q: "Wie unterscheidet sich das von der Glitch- (Zalgo-)Seite?",
          a: "Die Zalgo-Reihen hier stapeln kombinierende Zeichen auf normale Buchstaben. Die anderen Stile tauschen die Buchstaben selbst — umgedrehte Formen, Fraktur, Schrägstriche — diese Seite ist also die ganze laute Werkzeugkiste an einem Ort.",
        },
        {
          q: "Funktioniert verrückter Text in meinem Spielnamen?",
          a: "Kommt aufs Spiel an. Viele Mobile-Games akzeptieren dekoratives Unicode; ASCII-only-Felder nicht. Kopiere eine Variante, füge sie ins echte Feld ein und prüfe, bevor du speicherst.",
        },
        {
          q: "Ist verrückter Text lesbar oder Screenreader-freundlich?",
          a: "Kaum, by design. Screenreader buchstabieren die stilisierten Buchstaben vielleicht einzeln, was für Zuhörer Lärm ist. Halte dich an Namen, Tags und Witze — nie an etwas, das jemand wirklich lesen muss.",
        },
        {
          q: "Wie lang darf ein verrückter Name sein?",
          a: "Achte aufs Limit des Felds: Jeder stilisierte Buchstabe zählt als ein Zeichen, Deko kommt dazu. Discord-Nicknames laufen bei etwa 32 Zeichen — ein kurzes Wort plus ein leichtes Symbolpaar passt, längere Namen werden abgeschnitten.",
        },
        {
          q: "Warum zeigt mein Text auf manchen Handys Quadrate?",
          a: "Dem Gerät fehlen Fonts für diese Zeichen — negative Quadrate und schwerer Zalgo sind die üblichen Verdächtigen. Ist dein Publikum auf älteren Androids, ziehe die Fraktur- und Spreiz-Reihen vor, die fast überall rendern.",
        },
      ],
    },
  },

  "italic-text-generator": {
    de: {
      navName: "Kursiv",
      h1: "Kursiver Text Generator",
      title: "Kursiver Text Generator — Serif & Sans kursiv",
      description:
        "Kursiver Textgenerator für geneigte Buchstaben: klassische Serif kursiv und klare Sans kursiv. Einfügen in Bios, Captions und Chats — sofortige Vorschau.",
      intro: [
        "Eleganter geneigter Text zum Einfügen in Bios, Captions und Chats — überall dort, wo die Apps vergessen haben, dir eine Kursiv-Schaltfläche zu geben. Tippe eine Phrase ein und beide Kursive rendern live; antippen zum Kopieren.",
        "Der klassische Stil stammt aus Unicodes Mathematical-Italic-Bereich — inklusive dem historischen ℎ für h — und die Sans-Variante aus dem Sans-Serif-Italic-Bereich für eine klarere, modernere Neigung. Beide wandeln nur Buchstaben; Unicode definiert keine kursiven Ziffern, Zahlen behalten also ihre normale Form.",
      ],
      steps: [
        "Tippe das Wort oder die Zeile ein, die geneigt sein soll — ein Titel, eine Mood-Line, eine fremdsprachige Phrase.",
        "Vergleiche Serif kursiv, das klassisch und buchig liest, mit Sans kursiv, das bei kleinen Größen klarer bleibt.",
        "Kopiere den Gewinner und füge ihn in ein Bio, eine Caption oder einen Chat ein.",
        "Kursiviere ein Wort oder eine Zeile, nicht das ganze Bio — lange gestreckte geneigte Texte sind schwer zu lesen und schwer zu hören.",
      ],
      about: {
        heading: "Neigung ohne Formatierungsschaltfläche",
        paragraphs: [
          "Beide Kursiv-Stile wandeln nur Buchstaben — Ziffern, Interpunktion, Emoji und andere Schriften bleiben exakt, wie getippt. Fett kursiv fügt der Neigung Gewicht hinzu, und die Kursiv-mit-Unterstrich-Kombis ziehen eine Linie darunter. Am besten geeignet: buchige Captions und Lese-Bios, hervorgehobene Titel und fremdsprachige Phrasen und ein weicherer Akzent in sonst plainen Bios.",
          "Kursives Unicode ist sicher in Bios, Anzeigenamen und Nachrichten auf allen großen Plattformen. In Apps mit eigener Formatierung — Discord-Nachrichten zum Beispiel — ziehe die eigene Kursivschrift der App vor: Sie rendert konsistenter und bleibt Screenreader-freundlich.",
        ],
      },
      faq: [
        {
          q: "Warum haben sich meine Zahlen nicht verändert?",
          a: "Unicode hat keine kursiven Ziffern — nur Buchstaben. Deine Zahlen bleiben im normalen Stil, was gemischt mit kursiven Buchstaben meist gut aussieht.",
        },
        {
          q: "Welchen Kursiv soll ich wählen?",
          a: "Serif kursiv liest sich klassisch und buchig; Sans kursiv wirkt bei kleinen Größen klarer. Beide kopieren gleich, probiere also beide an deinem Text.",
        },
        {
          q: "Kann ich ein ganzes Instagram-Bio kursivieren?",
          a: "Kannst du, aber wir würden es nicht empfehlen: Lange Strecken mathematischer Zeichen werden von Hilfstechnologie umständlich vorgelesen und wirken unruhig. Kursiviere stattdessen ein Wort oder eine Zeile.",
        },
        {
          q: "Funktioniert kursiver Text auf Instagram und TikTok?",
          a: "Ja — Bios, Captions und Anzeigenamen auf beiden nehmen die kursiven Buchstaben. Handles und Hashtags bleiben plain: ein stilisierter Hashtag wird weder indexiert noch klickbar.",
        },
        {
          q: "Ist kursiver Text okay für Screenreader?",
          a: "Manche Screenreader geben die mathematischen Buchstaben einzeln oder seltsam buchstabiert aus. Ein, zwei Wörter sind fein; ein ganzer Absatz kursiven Unicodes ist wirklich anstrengend zu hören.",
        },
        {
          q: "Warum sieht der Buchstabe h anders aus?",
          a: "Der klassische Stil benutzt das historische ℎ — das Symbol der Planck-Konstante — für h, und es steht etwas abseits vom Rest des Alphabets. Das ist authentisch für den Unicode-Bereich, kein Glitch.",
        },
      ],
    },
  },

  "tiny-text-generator": {
    de: {
      navName: "Mini",
      h1: "Mini Schrift Generator",
      title: "Mini Schrift Generator — Hoch- & Tiefstellung kopieren",
      description:
        "Mini-Schrift mit Unicode-Hoch- und Tiefstellung. Verkleinere Wörter für Bios und Nebenbemerkungen — zwei winzige Stile, ein Tipp zum Kopieren.",
      intro: [
        "Verkleinere deine Wörter auf Flüstergröße. Hochstellung lässt deinen Text über der Zeile schweben; Tiefstellung senkt ihn darunter ab. Beides kopiert als plain text, direkt in Bios, Fußnoten und Nebenbemerkungen.",
        "Winzige Schrift benutzt Unicodes hoch- und tiefgestellte Modifikatorbuchstaben — dieselben Zeichen, aus denen Fußnoten-Marker und chemische Formeln gebaut sind. Es ist der lückenhafteste Stil auf der Seite: die meisten Kleinbuchstaben wandeln, aber manche haben gar keine winzige Form, und die ehrlichen bleiben normal groß.",
      ],
      steps: [
        "Tippe das Wort oder den Einschub ein, der winzig sein soll — flüstern, H2O, Notiz:.",
        "Wähle Hochstellung für einen angehobenen Look oder Tiefstellung für einen versenkten; winzige Ziffern sind vollständig abgedeckt.",
        "Kopiere und füge in ein Bio, einen fußnoten-artigen Einschub oder eine leise Nebenbemerkung ein.",
        "Wenn dich die Lücken stören, wo Buchstaben normal bleiben, geben Kapitälchen ein ähnlich leises Gefühl mit voller Abdeckung.",
      ],
      about: {
        heading: "Flüstergröße, ehrliche Lücken",
        paragraphs: [
          "Alles ohne winzige Form — die meisten Großbuchstaben, q in Hochstellung und b, c, d, f, g, q, w, y und z in Tiefstellung — bleibt normal groß, deshalb sind gemischte Ergebnisse hier normal. Der Generator fälscht keine fehlenden Buchstaben mit Lookalikes, die vielleicht nicht rendern. Ziffern sind die Ausnahme: hoch- und tiefgestellte Ziffern sind vollständig abgedeckt, von ⁰ bis ⁹ und ₀ bis ₉.",
          "Am besten geeignet: fußnoten-artige Einschübe in Bios — sie/ihr, winzige Credits — Chemie- und Mathe-Umkehrungen in Studien-Accounts und leise Nebenbemerkungen neben lauterem Text. Es ist am besten für ein, zwei Wörter, nicht für Sätze, und nie für Informationen, die jemand lesen können muss.",
        ],
      },
      faq: [
        {
          q: "Warum sind manche Buchstaben groß und manche winzig?",
          a: "Unicode hat nicht für jeden Buchstaben eine Hoch- oder Tiefstellungs-Form. Die fehlenden bleiben normal groß — ein bekannter Kompromiss des Stils, kein Bug im Generator.",
        },
        {
          q: "Kann ich winzige Zahlen schreiben?",
          a: "Ja — hoch- und tiefgestellte Ziffern sind vollständig abgedeckt, von ⁰ bis ⁹ und ₀ bis ₉. Deshalb funktioniert H₂O perfekt.",
        },
        {
          q: "Ist winzige Schrift lesbar?",
          a: "In Bio-Größen, meistens. Sie ist am besten für ein, zwei Wörter, nicht für Sätze — und nie für Informationen, die zugänglich sein müssen.",
        },
        {
          q: "Kann ich winzige Schrift in meinem Instagram-Bio benutzen?",
          a: "Ja — hoch- und tiefgestellte Buchstaben lassen sich in Instagram-Bios und Anzeigenamen einfügen. Sie zählen als normale Zeichen gegen das Limit, halte den winzigen Teil also bei ein, zwei Wörtern.",
        },
        {
          q: "Ist winzige Schrift barrierefrei?",
          a: "Nicht wirklich. Screenreader überspringen die Modifikatorbuchstaben vielleicht oder lesen sie in falscher Reihenfolge, und die Größe strengt Leser in Bio-Skala an. Benutze sie für Würze, nie für Substanz.",
        },
        {
          q: "Warum sieht winzige Schrift auf manchen Handys ungleichmäßig aus?",
          a: "Fonts zeichnen die Modifikatorbuchstaben in leicht unterschiedlichen Größen, und wo Buchstaben fehlen, erzeugen die vollgroßen Originale Lücken. Kapitälchen sind die stabilere Option, wenn dich der Mix stört.",
        },
      ],
    },
  },
};
