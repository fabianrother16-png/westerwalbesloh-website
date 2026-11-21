import type { ProductIconKey } from "@/types";

export type GlossaryTerm = {
  term: string;
  text: string;
  icon: ProductIconKey;
  /** Product page that explains the term in more depth. */
  slug?: string;
};

// Plain-language explanations - short enough to read in passing, linked to the matching product page.
export const glossary: GlossaryTerm[] = [
  {
    term: "Raffstore",
    text: "Eine Außenjalousie mit stabilen Aluminium-Lamellen. Die Lamellen lassen sich drehen – so bestimmen Sie selbst, wie viel Licht hereinkommt.",
    icon: "raffstore",
    slug: "raffstore",
  },
  {
    term: "Z-Lamelle",
    text: "Eine Raffstore-Lamelle mit Z-förmigem Profil. Beim Schließen greifen die Lamellen ineinander – so dunkeln sie gut ab und sind besonders windstabil.",
    icon: "raffstore",
    slug: "raffstore",
  },
  {
    term: "Vorbaurollladen",
    text: "Ein Rollladen mit eigenem Kasten, der vor das Fenster gesetzt wird. Ideal zum Nachrüsten – ganz ohne Stemmarbeiten am Mauerwerk.",
    icon: "rollladen",
    slug: "rollladen",
  },
  {
    term: "Aufsatzrollladen",
    text: "Sitzt direkt auf dem Fenster und verschwindet fast unsichtbar in der Fassade. Die typische Lösung im Neubau.",
    icon: "rollladen",
    slug: "rollladen",
  },
  {
    term: "Kassettenmarkise",
    text: "Eingefahren verschwinden Tuch und Gelenkarme komplett in einem geschlossenen Kasten – so sind sie vor Wind, Wetter und Schmutz geschützt.",
    icon: "markise",
    slug: "markisen",
  },
  {
    term: "Senkrechtmarkise",
    text: "Ein Tuch, das senkrecht vor dem Fenster herunterfährt. Es hält die Hitze draußen und lässt den Blick nach draußen trotzdem frei.",
    icon: "markise",
    slug: "markisen",
  },
  {
    term: "Plissee",
    text: "Ein fein gefalteter Stoff, der zwischen zwei Schienen gespannt ist. Er lässt sich von oben und von unten verschieben – auch in Dach- und Sonderfenstern.",
    icon: "innensonnenschutz",
    slug: "sonnenschutz",
  },
  {
    term: "Wabenplissee",
    text: "Zwei Stoffbahnen bilden kleine Luftkammern wie Bienenwaben. Die Luft darin dämmt – gegen Hitze im Sommer und Kälte im Winter.",
    icon: "innensonnenschutz",
    slug: "sonnenschutz",
  },
  {
    term: "Spannrahmen & Pendeltür",
    text: "Spannrahmen werden fest ins Fenster gesetzt und bei Bedarf herausgenommen. Pendel- und Drehtüren öffnen sich wie eine Tür – ideal für Terrasse und Balkon.",
    icon: "insektenschutz",
    slug: "insektentschutz",
  },
  {
    term: "Ampelschirm",
    text: "Ein Sonnenschirm mit seitlichem Mast: Der Schirm hängt am Ausleger, darunter bleibt die ganze Fläche frei für Tisch und Stühle.",
    icon: "sonnenschirm",
    slug: "sonnenschirme",
  },
  {
    term: "Fc-Wert",
    text: "Zeigt, wie viel Sonnenwärme trotz Sonnenschutz noch durchs Fenster kommt. Je kleiner, desto besser: 0,10 heißt, nur noch 10 % der Wärme gelangen hinein.",
    icon: "raffstore",
  },
  {
    term: "g-Wert",
    text: "Gibt an, wie viel Sonnenwärme eine Verglasung durchlässt. Bei modernen Wärmeschutzfenstern liegt er etwa zwischen 0,5 und 0,6.",
    icon: "innensonnenschutz",
  },
  {
    term: "Sonnen- und Windwächter",
    text: "Sensoren messen Helligkeit und Wind. Sie fahren den Sonnenschutz bei Sonne automatisch aus und bei Böen sicher ein – auch wenn niemand zu Hause ist.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "TaHoma",
    text: "Die Smart-Home-Zentrale von Somfy. Sie verbindet Motoren und Sensoren und steuert alles per App, Zeitplan oder Sprache – auch mit Alexa oder Google.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "Funkmotor",
    text: "Braucht kein Kabel zum Schalter: Bedient wird per Handsender, Funk-Wandschalter, App oder Sprachsteuerung. Ideal zum Nachrüsten.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "Gelenkarmmarkise",
    text: "Die klassische Markise für Terrasse und Balkon: Zwei Gelenkarme klappen beim Ausfahren auf und spannen das Tuch. Es gibt sie offen, als Halbkassette oder als Vollkassette.",
    icon: "markise",
    slug: "markisen",
  },
  {
    term: "Volant",
    text: "Der Stoffstreifen an der Vorderkante der Markise. Je nach Markise gibt es zusätzlich ein ausfahrbares Volant-Rollo: Es fährt aus der Vorderkante nach unten und schützt vor tief stehender Sonne und Blicken von außen.",
    icon: "markise",
    slug: "markisen",
  },
  {
    term: "Gurtwickler",
    text: "Das Kästchen neben dem Fenster, in dem der Rollladengurt aufgerollt wird. Es sitzt auf oder unter Putz. Wer es bequemer möchte, ersetzt ihn durch einen elektrischen Gurtwickler oder rüstet auf einen Rohrmotor um.",
    icon: "rollladen",
    slug: "rollladen",
  },
  {
    term: "Rohrmotor",
    text: "Ein Elektromotor, der unsichtbar in der Welle von Rollladen oder Markise steckt. Er ersetzt Gurt oder Kurbel und wird per Schalter oder Handsender bedient, als Funkmotor mit passender Zentrale auch per App.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "Somfy io",
    text: "Das Funksystem von Somfy, das in beide Richtungen funkt: Der Motor meldet zurück, ob ein Befehl angekommen ist, und zeigt seine Position, zum Beispiel in der TaHoma-App. Beim älteren Somfy-Funk RTS geht der Befehl nur in eine Richtung, ohne Rückmeldung.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "WAREMA WMS",
    text: "Das Funksystem von WAREMA. Alle Geräte bestätigen, dass ein Befehl angekommen und ausgeführt ist. Außerdem geben die Empfänger Befehle untereinander weiter, so erreicht das Signal auch weiter entfernte Anlagen.",
    icon: "steuerung",
    slug: "steuerung-antriebe",
  },
  {
    term: "Pollenschutzgewebe",
    text: "Ein besonders feines Spezialgewebe für Insektenschutz an Fenstern und Türen. Es hält neben Insekten auch viele Pollen draußen und lässt trotzdem Licht und frische Luft herein.",
    icon: "insektenschutz",
    slug: "insektentschutz",
  },
  {
    term: "Flächenvorhang",
    text: "Große, glatte Stoffbahnen, die in einer Laufschiene hängen und sich seitlich verschieben lassen. Sie passen gut zu breiten Fensterfronten und Schiebetüren und werden von Hand oder mit einem Bedienstab bewegt.",
    icon: "innensonnenschutz",
    slug: "sonnenschutz",
  },
];
