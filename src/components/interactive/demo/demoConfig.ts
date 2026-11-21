import type { DemoKey, ProductFormLabel, ProductIconKey } from "@/types";

export type { DemoKey };

export type DemoCopy = {
  /** Short tab label */
  label: string;
  icon: ProductIconKey;
  productSlug: string;
  productName: string;
  /** Preselects the product in the contact form. */
  formLabel: ProductFormLabel;
  /** Link text to the product page. */
  cta: string;
  title: string;
  description: string;
  points: string[];
  note: string;
};

export const demoOrder: DemoKey[] = ["raffstore", "rollladen", "markise", "insektenschutz", "plissee", "sonnenschirm", "smarthome"];

export const demoCopy: Record<DemoKey, DemoCopy> = {
  raffstore: {
    label: "Raffstore",
    icon: "raffstore",
    productSlug: "raffstore",
    productName: "Raffstore",
    formLabel: "Raffstore",
    cta: "Alles über Raffstores",
    title: "Licht lenken per Fingertipp",
    description: "Ziehen Sie den Regler und drehen Sie die Lamellen – genau so lenken Raffstores das Tageslicht und halten die Hitze draußen.",
    points: ["Waagerecht: volles Tageslicht und freie Sicht", "Schräg gestellt: hell, aber ohne Blendung", "Geschlossen: Hitze-, Sicht- und Blendschutz"],
    note: "Die Sonnenautomatik zeigt, wie ein Sonnensensor die Anlage im Tagesverlauf ganz von selbst steuert – auf Wunsch per Somfy Smart Home.",
  },
  rollladen: {
    label: "Rollladen",
    icon: "rollladen",
    productSlug: "rollladen",
    productName: "Rollladen",
    formLabel: "Rollladen",
    cta: "Alles über Rollläden",
    title: "Rollladen hoch, Rollladen runter",
    description: "Fahren Sie den Rollladen stufenlos – oder lassen Sie die Szenen für den Abend und den Morgen laufen.",
    points: ["Halb geschlossen: Die hoch stehende Sonne bleibt draußen", "Lichtschlitze: Licht und Luft trotz heruntergefahrenem Panzer", "Ganz zu: Verdunkelung, Sicht- und Einbruchschutz"],
    note: "Mit Motor und Zeitschaltuhr fahren Rollläden abends automatisch herunter – auch dann, wenn Sie nicht zu Hause sind.",
  },
  markise: {
    label: "Markise",
    icon: "markise",
    productSlug: "markisen",
    productName: "Markisen",
    formLabel: "Markise",
    cta: "Alles über Markisen",
    title: "Schatten genau dann, wenn Sie ihn brauchen",
    description: "Fahren Sie die Markise aus und sehen Sie, wie viel Schatten entsteht – oder lassen Sie Sonne und Wind entscheiden.",
    points: ["Je höher die Sonne, desto größer der Schatten unter der Markise", "Sonnenautomatik: fährt bei starker Sonne aus und abends wieder ein", "Windwächter: holt die Markise bei Böen sicher ein"],
    note: "Wind- und Sonnensensoren lassen sich an motorisierten Markisen in vielen Fällen nachrüsten – wir prüfen das gern bei Ihnen vor Ort.",
  },
  insektenschutz: {
    label: "Insektenschutz",
    icon: "insektenschutz",
    productSlug: "insektentschutz",
    productName: "Insektenschutz",
    formLabel: "Insektenschutz",
    cta: "Alles über Insektenschutz",
    title: "Frische Luft rein, Mücken raus",
    description: "Öffnen Sie das Fliegengitter ein Stück und beobachten Sie, was mit den Insekten passiert.",
    points: ["Feinmaschiges Gewebe: Luft strömt durch, Insekten nicht", "Maßgefertigt: kein Spalt, durch den Mücken schlüpfen", "Als Spannrahmen, Drehrahmen, Schiebeanlage oder Pendeltür"],
    note: "Schon ein schmaler Spalt reicht einer Mücke – deshalb fertigen wir jeden Rahmen millimetergenau nach Aufmaß.",
  },
  plissee: {
    label: "Plissee",
    icon: "innensonnenschutz",
    productSlug: "sonnenschutz",
    productName: "Innenliegender Sonnenschutz",
    formLabel: "Innen-Sonnenschutz",
    cta: "Alles über Plissees & Rollos",
    title: "Oben Licht, unten Sichtschutz",
    description: "Plissees lassen sich von oben und von unten verschieben – probieren Sie die Position und verschiedene Stoffe aus.",
    points: ["Verspannt: frei positionierbar, auch in Dach- und Sonderfenstern", "Wabenplissee: Luftkammern dämmen Hitze und Kälte", "Verdunkelnde Stoffe für Schlaf- und Kinderzimmer"],
    note: "Innen liegender Sonnenschutz ist ideal gegen Blendung und Einblicke – für Hitzeschutz im Sommer ist außen liegender Sonnenschutz noch wirksamer.",
  },
  sonnenschirm: {
    label: "Sonnenschirm",
    icon: "sonnenschirm",
    productSlug: "sonnenschirme",
    productName: "Sonnenschirme",
    formLabel: "Sonnenschirm",
    cta: "Alles über Sonnenschirme",
    title: "Schatten, der der Sonne folgt",
    description: "Öffnen und neigen Sie den Ampelschirm, stellen Sie die Uhrzeit ein – oder spielen Sie den Sonnenverlauf ab.",
    points: ["Ampelschirm: Mast seitlich, darunter bleibt alles frei", "Neigen und drehen: Der Schatten wandert mit der Sonne", "Großschirme für Gastronomie, auch mit fester Bodenhülse"],
    note: "Mittags liegt der Schatten fast senkrecht unter dem Schirm, morgens und abends wird er lang – dann hilft das Neigen.",
  },
  smarthome: {
    label: "Smart Home",
    icon: "steuerung",
    productSlug: "steuerung-antriebe",
    productName: "Steuerungen & Antriebe",
    formLabel: "Steuerungen",
    cta: "Alles über Smart Home",
    title: "Ein Fingertipp – alles fährt",
    description: "Szenen und Sensoren steuern Rollläden, Raffstores und Markisen gemeinsam. Probieren Sie es aus: Szene wählen oder einen Sensor einschalten.",
    points: ["Szenen: Guten Morgen, Hitzeschutz, Gute Nacht", "Sensoren für Sonne, Wind und Regen reagieren automatisch", "Per App, Sprachsteuerung, Handsender oder Wandschalter"],
    note: "Als Somfy-Experte richten wir TaHoma für Sie ein und binden auch bestehende Motoren ein, sofern sie kompatibel sind.",
  },
};
