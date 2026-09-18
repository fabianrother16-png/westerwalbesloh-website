export type FinderOption = {
  label: string;
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
      { label: "Fenster – von außen", scores: { raffstore: 2, rollladen: 2 } },
      { label: "Fenster – von innen", scores: { sonnenschutz: 3 } },
      { label: "Terrasse oder Balkon", scores: { markisen: 2, sonnenschirme: 2 } },
      { label: "Fenster/Türen vor Insekten schützen", scores: { insektentschutz: 4 } },
    ],
  },
  {
    id: "hitzeschutz",
    question: "Wie wichtig ist Ihnen wirksamer Hitzeschutz an heißen Tagen?",
    options: [
      {
        label: "Sehr wichtig – Räume sollen sich nicht aufheizen",
        scores: { raffstore: 3, markisen: 1 },
      },
      { label: "Eher Sicht- und Blendschutz", scores: { sonnenschutz: 2, rollladen: 1 } },
      { label: "Nicht relevant für mein Anliegen", scores: { insektentschutz: 1 } },
    ],
  },
  {
    id: "montage",
    question: "Ist an der gewünschten Stelle eine Wandmontage möglich, z. B. an der Fassade?",
    options: [
      { label: "Ja, Wandmontage ist möglich", scores: { markisen: 2, raffstore: 1, rollladen: 1 } },
      { label: "Nein, es soll freistehend sein", scores: { sonnenschirme: 3 } },
      { label: "Weiß ich noch nicht", scores: {} },
    ],
  },
  {
    id: "motorisierung",
    question: "Soll die Anlage motorisiert oder smart steuerbar sein?",
    options: [
      {
        label: "Ja, elektrisch oder per App/Smart Home",
        scores: { "steuerung-antriebe": 3 },
        motorization: true,
      },
      { label: "Nein, manuell reicht", scores: {} },
      { label: "Bin mir noch unsicher", scores: {} },
    ],
  },
  {
    id: "budget",
    question: "Wie würden Sie Ihren groben Budgetrahmen einschätzen?",
    options: [
      {
        label: "Preisbewusster Einstieg",
        scores: { rollladen: 1, sonnenschutz: 1, insektentschutz: 1 },
      },
      { label: "Mittlere Kategorie", scores: { markisen: 1, raffstore: 1 } },
      { label: "Premium – Qualität steht im Vordergrund", scores: { raffstore: 2, "steuerung-antriebe": 1 } },
      { label: "Unwichtig, Hauptsache es passt", scores: {} },
    ],
  },
];
