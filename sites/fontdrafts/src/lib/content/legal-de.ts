// Deutsche Rechts-/Info-Seiten, gefüllt mit handgeschriebenem Text.
// Gleiche Aussagen wie legal-en.ts; siehe dort für die Referenz.

import type { LegalBundle } from "./legal";
import { contentUpdated, contactEmail, siteName } from "../site";

export const legalDe: LegalBundle = {
  about: {
    navName: "Über uns",
    h1: `Über ${siteName}`,
    intro: [
      `${siteName} ist eine Werkzeugkiste für ausgefallenen Text: Sie verwandelt Buchstaben und Zahlen in gestylte Unicode-Zeichen und dekorier Nicknames mit Symbol-Rahmen. Jede Umwandlung läuft in deinem Browser — nichts, was du tippst, erreicht einen Server.`,
    ],
    sections: [
      {
        heading: "Wie wir Inhalte erstellen",
        paragraphs: [
          "Jede Stileseite, Plattformseite und jeder Ratgeber wird von Hand aus einer gemeinsamen Faktenbasis geschrieben: Die Ausgabe ist normaler Text; gestylte Glyphen decken nur lateinische Buchstaben und Ziffern ab; Plattformregeln ändern sich ohne Ankündigung.",
          "Wo Plattform-Limits auftauchen, kennzeichnen wir sie als „circa“ und verweisen auf den Live-Zähler der Plattform selbst — wir behaupten nichts, was wir nicht prüfen können, und sprechen für keine Plattform.",
        ],
      },
      {
        heading: "Ehrliche Kennzeichnung",
        paragraphs: [
          "Stile, die auf alten Geräten oder seltenen Fonts schlecht dargestellt werden, tragen eine sichtbare ⚠-Risikonotiz direkt auf der Karte — nicht versteckt in einer Hilfeseite. Symbolquellen, Abdeckungsgrenzen und Zähl-Sonderheiten werden auf der Seite erklärt, auf der du sie benutzt.",
          "Diese Seite ist unabhängig und mit keiner der genannten Plattformen, Spiele oder Apps verbunden; alle Marken gehören ihren Eigentümern.",
        ],
      },
      {
        heading: "Technische Hinweise",
        paragraphs: [
          "Die Seite ist vollständig statisch: keine Konten, keine Tracking-Cookies. Favoriten und letzte Kopien leben im localStorage deines Browsers und gehören allein zu deinem Gerät.",
          "Einen Fehler gefunden oder einen neuen Stil im Kopf? Die Kontaktseite nennt unser Postfach.",
        ],
      },
    ],
  },
  contact: {
    navName: "Kontakt",
    h1: "Kontakt",
    intro: [
      `Ein einziges Postfach erreicht das Team: ${contactEmail}`,
      "Schreib uns, auf welcher Seite du warst, welchen Browser oder welches Gerät du nutzt und was passiert ist — Screenshots helfen. Wir antworten meist innerhalb einer Woche.",
    ],
    sections: [
      {
        heading: "Was wir gern entgegennehmen",
        paragraphs: [
          "Fehlerberichte (Stile, die falsch dargestellt werden, Seiten, die zicken); Wünsche für Stile und Deko; Korrekturen, wenn sich Plattformregeln ändern; Kooperationsanfragen — stell uns deine Organisation bitte vor.",
        ],
      },
      {
        heading: "Was wir nicht bearbeiten",
        paragraphs: [
          "Konto-Beschwerden: Wir sind mit keiner Plattform verbunden und können bei Bans nichts ausrichten. Bezahlte Platzierungen: werden nicht angenommen. Anfragen, „die Validierung einer Plattform zu umgehen“: Diese Validierungen schützen Menschen, und wir werden nicht antworten.",
        ],
      },
    ],
  },
  privacy: {
    navName: "Datenschutz",
    h1: "Datenschutzerklärung",
    intro: [
      `Zuletzt aktualisiert: ${contentUpdated}. Die Kurzfassung: Dein Text bleibt auf deinem Gerät.`,
    ],
    sections: [
      {
        heading: "Was wir verarbeiten",
        paragraphs: [
          "Der Text, den du umwandelst, wird ausschließlich im Speicher deines Browsers verarbeitet. Er wird nie an einen Server gesendet, dort protokolliert oder gespeichert — die Seiten haben kein Backend, das ihn empfangen könnte.",
          "Favoriten und letzte Kopien werden im localStorage deines Browsers gespeichert, existieren nur auf deinem Gerät und verschwinden, wenn du die Browserdaten löschst. Wir können weder darauf zugreifen noch sie wiederherstellen.",
        ],
      },
      {
        heading: "Was wir nicht tun",
        paragraphs: [
          "Keine Tracking-Cookies, keine Analyse-Tools von Drittanbietern oder Werbe-Skripte, kein Kontosystem, kein Fingerprinting.",
          "Unser Hosting-Anbieter kann im Rahmen der Auslieferung standardmäßige anonyme Zugriffsprotokolle aufzeichnen (IP, Zeitstempel); diese Leitung ist von der Textumwandlung getrennt, die die Seite nie verlässt.",
        ],
      },
      {
        heading: "Verweise auf Drittanbieter",
        paragraphs: [
          "Die Ratgeber nennen Plattformen namentlich, ausschließlich als Kompatibilitätskontext; es werden keine Ressourcen von Drittanbietern eingebettet. Falls sich das jemals ändert, steht es in diesem Abschnitt.",
        ],
      },
      {
        heading: "Änderungen",
        paragraphs: [
          "Wesentliche Änderungen aktualisieren diese Seite und ihr Datum. Bedeutende Änderungen werden mindestens 14 Tage lang auf der Startseite angekündigt.",
        ],
      },
    ],
  },
  terms: {
    navName: "Nutzungsbedingungen",
    h1: "Nutzungsbedingungen",
    intro: [
      `Zuletzt aktualisiert: ${contentUpdated}. Mit der Nutzung von ${siteName} akzeptierst du die folgenden Bedingungen.`,
    ],
    sections: [
      {
        heading: "Was dieser Dienst ist",
        paragraphs: [
          "Ein kostenloses Werkzeug zur Umwandlung von Unicode-Text, bereitgestellt „wie besehen“, ohne Gewährleistung der Marktgängigkeit oder Eignung für einen bestimmten Zweck. Die Ausgabe sind gewöhnliche Textzeichen; wir beanspruchen keine Rechte daran und machen keine Zusagen darüber, wie irgendeine Plattform oder ein Gerät sie anzeigt.",
        ],
      },
      {
        heading: "Unabhängigkeit",
        paragraphs: [
          "Diese Seite ist mit keiner der genannten Plattformen, Spiele oder Apps verbunden, wird von ihnen nicht unterstützt und steht zu ihnen in keiner Beziehung. Namen und Marken gehören ihren jeweiligen Eigentümern und erscheinen nur als Kompatibilitätskontext.",
        ],
      },
      {
        heading: "Deine Verantwortung",
        paragraphs: [
          "Die Nutzung der Ausgabe muss den Bedingungen der Zielplattform und deinem örtlichen Recht folgen. Gestylte Zeichen zu verwenden, um Menschen oder Amtsträger zu imitieren, Inhaltsfilter zu umgehen oder Zahlungs-/Verifizierungsdaten zu verschleiern, ist untersagt und geschieht auf deine alleinige Verantwortung.",
          "Kompatibilitätsregeln legen die Plattformen fest, und sie ändern sich ohne Ankündigung; „circa“-Werte auf dieser Seite sind nur zur Referenz.",
        ],
      },
      {
        heading: "Haftungsbeschränkung",
        paragraphs: [
          "Im gesetzlich zulässigen Höchstmaß haften wir für keinen direkten oder indirekten Schaden, der aus der Nutzung oder Nichtnutzung dieses Dienstes entsteht. Änderungen dieser Bedingungen aktualisieren das Datum dieser Seite.",
        ],
      },
    ],
  },
};
