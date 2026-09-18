import type { HistoryMilestone } from "@/types";

export const company = {
  legalName: "Westerwalbesloh GmbH Rollladenbau",
  shortName: "Westerwalbesloh",
  slogan: "Ihr regionaler Partner für Sonnenschutz in Gütersloh und ganz OWL.",
  founded: 1959,
  street: "Elsässer Straße 12",
  zip: "33332",
  city: "Gütersloh",
  cityDistrict: "Gütersloh-Innenstadt",
  region: "Nordrhein-Westfalen",
  areaServed: "Gütersloh und Ostwestfalen-Lippe (OWL)",
  country: "DE",
  phoneDisplay: "05241 20514",
  phoneHref: "tel:+49524120514",
  email: "westerwalbesloh_gmbh@t-online.de",
  hoursNote:
    "Termine nach Vereinbarung – wir sind mit vielen Außenterminen direkt bei Ihnen vor Ort.",
  registerCourt: "Amtsgericht Gütersloh",
  registerNumber: "HRB 1653",
  managingDirector: "Elke Westerwalbesloh",
  social: {
    instagram: "https://www.instagram.com/westerwalbesloh_gmbh/",
    facebookSearch:
      "https://www.facebook.com/search/top?q=Westerwalbesloh%20GmbH%20Rollladenbau",
    googleProfile:
      "https://www.google.com/maps/search/?api=1&query=Westerwalbesloh+GmbH+Rollladenbau+Els%C3%A4sser+Stra%C3%9Fe+12+33332+G%C3%BCtersloh",
  },
  reviews: {
    rating: 4.9,
    label: "4,9 ★ bei Google-Bewertungen",
  },
  partners: [
    { name: "Somfy", note: "Somfy-Expert-zertifizierter Fachbetrieb" },
    { name: "WAREMA", note: "WAREMA-Fachhandelspartner" },
  ],
  values: [
    {
      title: "Realistische Beratung",
      text: "Wir empfehlen, was zu Ihrem Haus und Ihrem Budget passt – nicht, was sich am besten verkauft.",
    },
    {
      title: "Technisch sinnvoll",
      text: "Jede Lösung wird auf ihre technische Machbarkeit geprüft, bevor sie angeboten wird.",
    },
    {
      title: "Wirtschaftlich fair",
      text: "Transparente Kalkulation und ein Preis-Leistungs-Verhältnis, das sich langfristig rechnet.",
    },
    {
      title: "Sorgfältige, saubere Montage",
      text: "Unser festangestelltes Team montiert präzise, sauber und mit Blick fürs Detail.",
    },
  ],
  usps: [
    {
      title: "Echte Familienwerte",
      text: "In dritter Generation familiengeführt – mit persönlicher Verantwortung für jedes Projekt.",
    },
    {
      title: "60 Jahre Erfahrung",
      text: "Seit 1959 in Gütersloh zuhause und mit dem Handwerk großgeworden.",
    },
    {
      title: "Montage vom Profi",
      text: "Kein Subunternehmer: Unser festangestelltes Team montiert jede Anlage selbst.",
    },
    {
      title: "Beratung vor Ort",
      text: "Wir schauen uns Ihr Zuhause persönlich an, bevor wir etwas empfehlen.",
    },
    {
      title: "Service & Reparatur",
      text: "Auch nach der Montage sind wir für Sie da – schnell, unkompliziert, ehrlich.",
    },
    {
      title: "Starke Partnerschaften",
      text: "Als Somfy-Experte und WAREMA-Partner setzen wir auf bewährte Markenqualität.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Persönliche Beratung",
      text: "Wir hören zu, verstehen Ihre Anforderungen und beraten Sie ehrlich zu den passenden Möglichkeiten.",
    },
    {
      step: 2,
      title: "Präzises Aufmaß",
      text: "Vor Ort nehmen wir jedes Maß exakt auf – die Grundlage für eine passgenaue Anlage.",
    },
    {
      step: 3,
      title: "Bestellung beim Fachhersteller",
      text: "Wir bestellen Ihre Anlage bei bewährten Herstellern wie Somfy und WAREMA in Markenqualität.",
    },
    {
      step: 4,
      title: "Fachgerechte Montage",
      text: "Unser festangestelltes Team montiert Ihre Anlage sorgfältig, sauber und termingerecht.",
    },
    {
      step: 5,
      title: "Service & Betreuung",
      text: "Auch nach der Montage sind wir für Wartung, Reparatur und Fragen für Sie erreichbar.",
    },
  ],
  contactFormOptions: {
    inquiryTypes: [
      "Sonstiges",
      "Beratung",
      "Reparatur",
      "Modernisierung",
      "Neue Anlage",
      "Gewerbliche Anfrage",
    ] as const,
    products: [
      "Sonstiges",
      "Raffstore",
      "Rollladen",
      "Markise",
      "Sonnenschirm",
      "Insektenschutz",
      "Innen-Sonnenschutz",
      "Steuerungen",
    ] as const,
  },
};

export const history: HistoryMilestone[] = [
  {
    year: "1959",
    title: "Der Anfang in der Garage",
    text: "Engelbert Westerwalbesloh senior gründet an der Elsässer Straße in Gütersloh einen kleinen Rollladen- und Markisenbaubetrieb – zunächst in einer Garage.",
  },
  {
    year: "1980er",
    title: "Die Westerwalbesloh GmbH entsteht",
    text: "Sohn Engelbert Westerwalbesloh junior, Träger des Goldenen Meisterbriefs im Rollladen- und Jalousienbau, formt aus dem Familienbetrieb die 'Westerwalbesloh GmbH Rollladenbau' und gewinnt namhafte Kunden wie Miele, Claas und Bertelsmann.",
  },
  {
    year: "Heute",
    title: "Dritte Generation",
    text: "Tochter Elke Westerwalbesloh führt den Familienbetrieb heute in dritter Generation – mit demselben Anspruch an Qualität und Kundennähe wie am ersten Tag.",
  },
];
