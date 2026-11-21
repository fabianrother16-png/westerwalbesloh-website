export type FinderIcon =
  | "raffstore"
  | "innensonnenschutz"
  | "markise"
  | "insektenschutz"
  | "sonnenschirm"
  | "sun"
  | "eye"
  | "slash"
  | "home"
  | "help"
  | "bolt"
  | "crank"
  | "coins"
  | "scale"
  | "diamond"
  | "heart";

export type FinderOption = {
  label: string;
  icon: FinderIcon;
  scores: Partial<Record<string, number>>;
  motorization?: boolean;
};

export type FinderQuestion = {
  id: string;
  question: string;
  options: FinderOption[];
};

export const finderQuestions: FinderQuestion[] = [
  {
    id: "beschattung",
    question: "Was möchten Sie in erster Linie beschatten oder schützen?",
    options: [
      { label: "Fenster – von außen", icon: "raffstore", scores: { raffstore: 2, rollladen: 2 } },
      { label: "Fenster – von innen", icon: "innensonnenschutz", scores: { sonnenschutz: 3 } },
      { label: "Terrasse oder Balkon", icon: "markise", scores: { markisen: 2, sonnenschirme: 2 } },
      { label: "Fenster/Türen vor Insekten schützen", icon: "insektenschutz", scores: { insektentschutz: 4 } },
    ],
  },
  {
    id: "hitzeschutz",
    question: "Wie wichtig ist Ihnen wirksamer Hitzeschutz an heißen Tagen?",
    options: [
      {
        label: "Sehr wichtig – Räume sollen sich nicht aufheizen",
        icon: "sun",
        scores: { raffstore: 3, markisen: 1 },
      },
      { label: "Eher Sicht- und Blendschutz", icon: "eye", scores: { sonnenschutz: 2, rollladen: 1 } },
      { label: "Nicht relevant für mein Anliegen", icon: "slash", scores: { insektentschutz: 1 } },
    ],
  },
  {
    id: "montage",
    question: "Ist an der gewünschten Stelle eine Wandmontage möglich, z. B. an der Fassade?",
    options: [
      { label: "Ja, Wandmontage ist möglich", icon: "home", scores: { markisen: 2, raffstore: 1, rollladen: 1 } },
      { label: "Nein, es soll freistehend sein", icon: "sonnenschirm", scores: { sonnenschirme: 3 } },
      { label: "Weiß ich noch nicht", icon: "help", scores: {} },
    ],
  },
  {
    id: "motorisierung",
    question: "Soll die Anlage motorisiert oder smart steuerbar sein?",
    options: [
      {
        label: "Ja, elektrisch oder per App/Smart Home",
        icon: "bolt",
        scores: { "steuerung-antriebe": 3 },
        motorization: true,
      },
      { label: "Nein, manuell reicht", icon: "crank", scores: {} },
      { label: "Bin mir noch unsicher", icon: "help", scores: {} },
    ],
  },
  {
    id: "budget",
    question: "Wie würden Sie Ihren groben Budgetrahmen einschätzen?",
    options: [
      {
        label: "Preisbewusster Einstieg",
        icon: "coins",
        scores: { rollladen: 1, sonnenschutz: 1, insektentschutz: 1 },
      },
      { label: "Mittlere Kategorie", icon: "scale", scores: { markisen: 1, raffstore: 1 } },
      { label: "Premium – Qualität steht im Vordergrund", icon: "diamond", scores: { raffstore: 2, "steuerung-antriebe": 1 } },
      { label: "Unwichtig, Hauptsache es passt", icon: "heart", scores: {} },
    ],
  },
];
