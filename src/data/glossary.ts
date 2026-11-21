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
];
