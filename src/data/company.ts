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
  vatId: "DE126797446",
  chamber: {
    name: "Handwerkskammer Ostwestfalen-Lippe zu Bielefeld",
    address: "Oberntorwall 8, 33602 Bielefeld",
    url: "https://www.hwk-owl.de/",
  },
  profession: "Rollladen- und Sonnenschutzmechatroniker",
  liabilityInsurer: {
    name: "Württembergische Versicherung AG",
    address: "W&W-Platz 1, 70806 Kornwestheim",
    scope: "Deutschland",
  },
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
    { name: "WAREMA", logo: "/images/partner/warema.png", width: 1025, height: 650 },
    { name: "Somfy", logo: "/images/zertifikate/somfy-expert.png", width: 386, height: 242 },
    { name: "KADECO", logo: "/images/partner/kadeco.png", width: 309, height: 202 },
    { name: "CARAVITA", logo: "/images/partner/caravita.png", width: 1025, height: 167 },
    { name: "Selve", logo: "/images/partner/selve.png", width: 1240, height: 391 },
    { name: "heroal", logo: "/images/partner/heroal.png", width: 381, height: 280 },
    { name: "Neerken & Büter", logo: "/images/partner/neerken-bueter.png", width: 406, height: 161 },
  ],
  certificates: [
    {
      name: "RS-Fachbetrieb Rollladen + Sonnenschutz",
      image: "/images/zertifikate/rs-fachbetrieb.png",
      width: 591,
      height: 591,
    },
    {
      name: "Somfy Expert",
      image: "/images/zertifikate/somfy-expert.png",
      width: 386,
      height: 242,
    },
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

export const story: string[] = [
  "Seit über 60 Jahren steht der Name Westerwalbesloh in Gütersloh für hochwertiges Handwerk im Bereich Rollläden, Sonnenschutz und Markisen. Was 1959 in einer kleinen Garage an der Elsässer Straße begann, hat sich über drei Generationen zu einem angesehenen Familienbetrieb entwickelt – verwurzelt in Tradition, geprägt von Erfahrung und getragen von Leidenschaft für das Handwerk.",
  "Gegründet wurde unser Unternehmen von Engelbert Westerwalbesloh senior, einem visionären, streng handwerklich geprägten Mann, der mit Tatkraft und Weitblick den ersten Rollladen- und Markisenbetrieb in Gütersloh aufbaute. Schon früh wurde aus der kleinen Garage eine richtige Werkstatt – ein Ort, an dem bis heute gearbeitet, geplant und gefertigt wird.",
  "Sein Sohn, Engelbert Westerwalbesloh junior, führte den Betrieb mit Herz, Ruhe und großer Nähe zu den Kunden weiter. Mit seinem Meisterbrief und später dem Goldenen Meisterbrief im Rollladen- und Jalousienbau prägte er das Unternehmen nachhaltig. In den 1980er-Jahren firmierte er den Betrieb zur „Westerwalbesloh GmbH Rollladenbau“ um und legte damit den Grundstein für die weitere professionelle Entwicklung. Er war bis ins hohe Alter von 80 Jahren aktiv im Betrieb und lebte für seine Arbeit – loslassen fiel ihm nie leicht. Unter seiner Führung wuchs das Unternehmen stetig, erweiterte sein Angebot um Kunststoffrollläden und Raffstore und gewann namhafte Kunden wie Miele, Claas und Bertelsmann.",
  "Heute wird der Betrieb in dritter Generation von seiner Tochter Elke Westerwalbesloh als alleinige Geschäftsführerin geführt. Mit ihrer herzlichen, nahbaren und zugleich durchsetzungsfähigen Art prägt sie das Unternehmen auf ihre eigene Weise. Sie führt den Betrieb partnerschaftlich und offen – auf Augenhöhe mit ihrem Team. Jeder einzelne Mitarbeiter wird geschätzt, gehört und ernst genommen, sodass ein Arbeitsklima entsteht, das eher einer kleinen Familie als einem klassischen Handwerksbetrieb gleicht.",
  "Besonders wichtig sind ihr die Zufriedenheit der Kunden ebenso wie die ihrer Mitarbeiter. Gleichzeitig hat sie den Betrieb strukturierter und digitaler aufgestellt – mit moderner Software, klareren Abläufen und mehr Ordnung –, ohne dabei den familiären Charakter zu verlieren. Sie verbindet das Erbe ihres Vaters mit ihrem eigenen Stil: Tradition bewahren, aber mit der Zeit gehen.",
  "Wir sind kein anonymer Großbetrieb, sondern ein bodenständiges Familienunternehmen, das seine Kunden kennt und ernst nimmt. Unser Anspruch ist es nicht, einfach nur zu verkaufen – wir hören zu, beraten ehrlich und finden Lösungen, die wirklich passen. Denn Tradition bedeutet für uns nicht Stillstand, sondern Verantwortung gegenüber unserer Vergangenheit, unseren Mitarbeitern und unseren Kunden in Gütersloh und Umgebung.",
];

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
