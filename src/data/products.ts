import type { Product } from "@/types";

const img = (slug: string, file: string, alt: string) => ({
  src: `/images/produkte/${slug}/${file}`,
  alt,
});

export const products: Product[] = [
  {
    slug: "raffstore",
    highlights: [
      { value: "bis 85 %", label: "weniger Sonnenwärme im Raum" },
      { value: "stufenlos", label: "Licht lenken mit drehbaren Lamellen" },
      { value: "App & Sensor", label: "Somfy Smart Home auf Wunsch" },
      { value: "WAREMA", label: "Markenqualität, von uns montiert" },
    ],
    demo: "raffstore",
    name: "Raffstore",
    formLabel: "Raffstore",
    shortDescription:
      "Moderner Sonnen- und Hitzeschutz mit flexibler Lichtsteuerung – ideal für große Fensterfronten.",
    tagline: "Moderner Sonnenschutz mit perfekter Lichtlenkung",
    intro: [
      "Raffstore verbinden moderne Optik mit effektivem Sonnen- und Hitzeschutz. Durch flexibel verstellbare Lamellen lässt sich das Tageslicht nach Bedarf lenken – hell, blendfrei oder komplett geschützt.",
      "Sie eignen sich besonders für große Fensterflächen, moderne Wohnarchitektur und alle, die Wert auf Komfort, Funktion und Energieeffizienz legen. Wir planen, liefern und montieren Ihre Raffstoreanlage in Gütersloh und ganz OWL – mit eigenem Montageteam.",
    ],
    heroImage: img("raffstore", "hero-abendsonne.jpg", "Modernes Wohnhaus mit Raffstores im Abendlicht, davor ein Tablet mit Steuerungs-App"),
    cardImage: img("raffstore", "card-wohnhaus.jpg", "Modernes Wohnhaus mit außenliegenden Raffstores vor großen Fensterfronten"),
    benefitsTitle: "Warum Raffstore?",
    benefits: [
      { title: "Flexible Lichtsteuerung", text: "Die Lamellen lassen sich stufenlos einstellen – für perfektes Licht den ganzen Tag." },
      { title: "Effektiver Hitzeschutz", text: "Hält Wärme zuverlässig draußen und sorgt so für ein angenehmes Raumklima." },
      { title: "Moderne Fassadengestaltung", text: "Schlanke Optik, klare Linien – ideal für Neubauten und Sanierungen." },
      { title: "Energie sparen", text: "Weniger Hitze im Sommer und bessere Dämmwirkung im Winter." },
      { title: "Komfortable Bedienung", text: "Auf Wunsch mit Motor oder kompletter Smart-Home-Steuerung." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Ausführungen & Varianten",
        navLabel: "Varianten",
        title: "Maßgeschneidert für jede Einbausituation",
        intro:
          "Entdecken Sie unsere technischen Varianten und Design-Optionen im Überblick.",
        items: [
          {
            title: "Lamellenformen",
            text: "Wählen Sie zwischen filigranen Flachlamellen für eine leichte Optik, stabilen randgebördelten Lamellen oder Z-Lamellen, die besonders windstabil sind und Räume zuverlässig abdunkeln.",
            image: img("raffstore", "lamellen.jpg", "Raffstore-Lamellen vor den Glastüren eines modernen Balkons"),
            // Bilder: WAREMA (warema.com) – Nutzungsrecht vor Go-live vom Kunden über WAREMA klären lassen.
            options: [
              { label: "Flachlamelle", image: img("raffstore", "varianten/flachlamelle.webp", "Nahaufnahme flacher WAREMA-Raffstorelamellen") },
              { label: "Gebördelte Lamelle", image: img("raffstore", "varianten/geboerdelte-lamelle.webp", "Zwei randgebördelte WAREMA-Lamellen mit Clips und Führungsbolzen") },
              { label: "Z-Lamelle", image: img("raffstore", "varianten/z-lamelle.webp", "Ineinandergreifende Z-Lamellen eines WAREMA-Raffstores") },
            ],
          },
          {
            title: "Montagearten",
            text: "Ob unauffällig in der Fensternische, im Schacht des Neubaus, als Vorbau-Raffstore vor der Fassade oder als Aufsatz-Lösung auf dem Fenster: Wir finden für jede bauliche Situation die technisch sauberste und optisch beste Einbauvariante.",
            image: img("raffstore", "montagearten.jpg", "Außenliegende Lamellen mit seitlichen Führungsschienen an einer Fassade"),
            options: [
              { label: "Nischenmontage", image: img("raffstore", "varianten/nischenmontage.webp", "Raffstore sitzt in der Fensternische einer hellen Putzfassade") },
              { label: "Aufsatzmontage", image: { ...img("raffstore", "varianten/aufsatzmontage.png", "Schnittbild eines WAREMA-Aufsatz-Raffstores mit überputztem Kasten über dem Fenster"), position: "object-contain! p-2" } },
              { label: "Fassadenvorbau", image: { ...img("raffstore", "varianten/vorbaumontage.png", "WAREMA-Vorbau-Raffstore mit Blende vor der Fassade"), position: "object-contain! p-2" } },
              { label: "Schachtmontage", image: img("raffstore", "varianten/schachtmontage.webp", "Raffstore im Schacht einer Holzfassade, Kasten nicht sichtbar") },
            ],
          },
          {
            title: "Farben & Optik",
            text: "Lamellen gibt es in vielen RAL- und WAREMA-Farbtönen, Führungsschienen und Blenden zusätzlich aus der großen WAREMA-Farbwelt. Bei den Oberflächen wählen Sie zwischen matt, Feinstruktur und seidenglänzend. So setzen Sie den Raffstore als Kontrast oder passen ihn Ton in Ton an Ihre Fassade an.",
            image: img("raffstore", "farben.jpg", "Hellblaue Lamellen neben einer anthrazitfarbenen Klinkerfassade"),
            visual: "ral-faecher",
            options: [
              { label: "Farbfächer", image: img("raffstore", "varianten/farbfaecher.webp", "Hände fächern einen WAREMA-Farbfächer mit vielen Farbtönen auf") },
              { label: "Lamellenfarben", image: { ...img("raffstore", "varianten/lamellenfarben.webp", "Lamellen-Farbmuster von Silber über Anthrazit bis Bronze"), position: "object-contain!" } },
              { label: "Feinstruktur, matt, seidenglänzend", image: { ...img("raffstore", "varianten/oberflaechen.png", "Drei anthrazitfarbene Musterplatten in den Oberflächen Feinstruktur, matt und seidenglänzend"), position: "object-contain! p-2" } },
            ],
          },
        ],
      },
      {
        type: "variants",
        eyebrow: "Bedienung & Steuerung",
        navLabel: "Bedienung",
        title: "Die moderne Art, Licht und Schatten zu lenken",
        intro:
          "Verbinden Sie architektonischen Anspruch mit höchstem Wohnkomfort und Energieeffizienz.",
        // Bilder: WAREMA (warema.com) und Somfy (shop.somfy.de) – Nutzungsrecht vor Go-live klären.
        items: [
          {
            title: "Manuelle Bedienung",
            text: "Bedienen Sie Ihre Raffstore klassisch von Hand per Kurbel. Diese Variante ist besonders robust, günstig und funktioniert völlig unabhängig von einer Stromversorgung.",
            image: { ...img("raffstore", "bedienung/kurbel.webp", "Gelenkkurbel am Fensterrahmen, dahinter die Lamellen einer heruntergelassenen Außenjalousie"), position: "object-[30%_50%]" },
          },
          {
            title: "Motorisiert",
            text: "Leistungsstarke Motoren bewegen Ihre Anlage leise und gleichmäßig – bequem per Wandschalter oder Funkhandsender. Das schont die Mechanik und ist ideal für große, schwere Behänge.",
            image: img("raffstore", "bedienung/funkhandsender-kueche.webp", "Funkhandsender von WAREMA auf einer Küchenarbeitsplatte, Lamellenschatten fallen in den Raum"),
            options: [
              { label: "Wandschalter", image: img("raffstore", "bedienung/wandschalter.webp", "Funk-Wandsender von WAREMA an einer Natursteinwand neben einem Fenster mit Außenjalousie") },
              { label: "Funkhandsender", image: img("raffstore", "bedienung/funkhandsender.webp", "Weißer Funkhandsender von WAREMA vor einem Fenster mit Außenjalousie") },
            ],
          },
          {
            title: "Smart Home (Somfy)",
            text: "Steuerung per App, Zeitplan oder vollautomatisch via Sonnen- und Windwächter. Nutzen Sie eigene Szenarien oder die optionale Sprachsteuerung.",
            image: img("raffstore", "bedienung/tahoma-wohnzimmer.jpg", "Somfy TaHoma switch im Wohnzimmer, im Hintergrund bedient eine Person die App auf dem Smartphone"),
            options: [
              { label: "TaHoma switch", image: img("raffstore", "bedienung/tahoma-switch.jpg", "Somfy TaHoma switch auf einem Holzmöbel") },
              { label: "TaHoma-App", image: { ...img("raffstore", "bedienung/tahoma-app.jpg", "Somfy TaHoma switch vor einem Smartphone mit der TaHoma-App"), position: "object-contain! bg-white" } },
              { label: "Sprachsteuerung", image: { ...img("raffstore", "bedienung/sprachsteuerung.jpg", "Somfy TaHoma switch mit den Hinweisen „works with Alexa“, „Hey Google“ und „Apple HomeKit“"), position: "object-contain! bg-white" } },
            ],
          },
        ],
      },
      {
        type: "checklist",
        navLabel: "Einsatzbereiche",
        title: "Ideal für diese Anwendungsfälle",
        items: [
          "Große Fensterflächen",
          "Büros & Homeoffice",
          "Süd- und Westfassaden",
          "Neubau & Modernisierung",
          "Energiesparsame Lösungen",
        ],
        // Bilder: WAREMA (warema.com) – Nutzungsrecht vor Go-live klären. Reihenfolge wie die Punkte oben.
        tiles: [
          img("raffstore", "einsatz/grosse-fensterflaechen.webp", "Wohnraum mit raumhoher Glasfront, außen halb geschlossene Raffstores"),
          img("raffstore", "einsatz/homeoffice.webp", "Arbeitszimmer mit Schreibtisch und Monitor, Raffstores filtern das Tageslicht"),
          img("raffstore", "einsatz/sonnenseite.webp", "Bungalow in praller Sonne mit geschlossenen dunklen Raffstores vor den Terrassenfenstern"),
          img("raffstore", "einsatz/neubau.webp", "Moderner Neubau mit großen Fenstern und dunklen Raffstores"),
          img("raffstore", "einsatz/hitzeschutz.webp", "Wohn- und Essbereich an einem Sonnentag, heruntergefahrene Raffstores halten die Hitze draußen"),
        ],
      },
    ],
    manufacturersTitle: "Herstellerqualität, auf die wir bauen",
    manufacturers: [
      {
        name: "WAREMA – einer der führenden Raffstore-Hersteller Europas",
        text: "Die Marke steht für Innovation, höchste Qualitätsstandards und jahrzehntelange Erfahrung im Sonnenschutz. WAREMA-Raffstore überzeugen durch präzise Verarbeitung, langlebige Materialien und ausgereifte Technik – für zuverlässigen Sonnen- und Blendschutz sowie eine dauerhaft wertige Fassadengestaltung.",
        logo: { src: "/images/partner/warema.png", width: 1025, height: 650 },
      },
    ],
    projectPhotos: [
      { ...img("raffstore", "projekt-1.jpg", "Montage von Raffstoren an einem Gewerbeobjekt mit Hubsteiger"), caption: "Gewerbeobjekt mit Hubsteiger" },
      { src: "/images/leistungen/objektbau-projekte/detail.jpg", alt: "Wartung von Raffstoren an einer Bürofassade per Hubsteiger", caption: "Raffstore an einer Bürofassade" },
      // Eigene Fotos (Google Drive „Webseite“, 21.11.2026). Bildunterschriften nur nach dem, was zu sehen ist – Orte ergänzt Fabian später.
      { ...img("raffstore", "projekt-erker.jpg", "Raffstores rundum an einem Erker eines Klinkerhauses"), caption: "Raffstores am Erker" },
      { ...img("raffstore", "projekt-holzfassade.jpg", "Raffstores an Fenstern einer Holzfassade mit grünen Rahmen"), caption: "Raffstores an einer Holzfassade" },
      { ...img("raffstore", "projekt-wohnhaus.jpg", "Große Raffstoreanlage vor der Fensterfront eines Wohnhauses mit Garten"), caption: "Große Fensterfront am Wohnhaus" },
      { ...img("raffstore", "projekt-buero-eg.jpg", "Heruntergefahrener Raffstore im Erdgeschoss eines Bürogebäudes"), caption: "Raffstores an einem Bürogebäude" },
      { ...img("raffstore", "projekt-montage-buero.jpg", "Westerwalbesloh-Monteur auf der Leiter bei der Raffstore-Montage an einem Bürogebäude"), caption: "Montage an einem Bürogebäude" },
      { ...img("raffstore", "projekt-montage-geruest.jpg", "Raffstore-Montage am Gerüst an einem Wohnhaus, davor die Werkbank"), caption: "Montage am Gerüst" },
      { ...img("raffstore", "projekt-wohnhaus-detail.jpg", "Nahaufnahme einer heruntergefahrenen Raffstoreanlage an einem Wohnhaus"), caption: "Raffstoreanlage im Detail" },
      { ...img("raffstore", "projekt-holzfassade-detail.jpg", "Detail von Raffstore-Lamellen an einer Holzfassade"), caption: "Lamellen an der Holzfassade" },
    ],
    faqTitle: "Häufige Fragen zu Raffstores",
    faq: [
      {
        question: "Sind Raffstore laut?",
        answer: "Nein. Mit modernen Z-Lamellen und hochwertigen Führungsschienen arbeiten Raffstore sehr leise – auch bei Wind.",
      },
      {
        question: "Kann man Raffstore nachrüsten?",
        answer: "Ja, in vielen Fällen. Bei einem kostenlosen Vor-Ort-Termin prüfen wir die technische Machbarkeit an Ihrer Fassade und nehmen das exakte Aufmaß.",
      },
      {
        question: "Wie werden Raffstore gereinigt?",
        answer: "Ganz einfach mit einem milden Wasserstrahl oder einem Schwamm – Raffstore sind sehr pflegeleicht.",
      },
      {
        question: "Welche Steuerung empfehlen Sie?",
        answer: "Somfy Smart Home – für maximalen Komfort und Sicherheit. So fahren Ihre Raffstore per App, Zeitplan oder automatisch nach Sonne und Wind.",
      },
      {
        question: "Was unterscheidet einen Raffstore von einer Jalousie?",
        answer: "Ein Raffstore ist außen montiert und deutlich robuster gebaut als eine innenliegende Jalousie. Dadurch hält er die Sonnenwärme bereits vor der Scheibe ab und bietet echten Hitzeschutz – eine Innenjalousie reduziert Blendung, verhindert aber nicht das Aufheizen der Räume.",
      },
      {
        question: "Wo kann ich in Gütersloh einen Raffstore kaufen?",
        answer: "Bei uns – allerdings nicht von der Stange: Jede Fassade ist anders. Deshalb beginnt der Kauf eines Raffstores bei uns mit einem kostenlosen Vor-Ort-Termin, exaktem Aufmaß und einer Beratung, die auf Ihr Haus zugeschnitten ist.",
      },
    ],
    icon: "raffstore",
    metaTitle: "Raffstoren Gütersloh | Sonnenschutz nach Maß | Westerwalbesloh",
    metaDescription:
      "Blendet die Sonne? Unsere Raffstoren in Gütersloh bieten perfekten Lichtschutz & modernes Design für Ihr Zuhause. Jetzt Beratung vom Experten anfragen!",
  },
  {
    slug: "rollladen",
    highlights: [
      { value: "bis 90 %", label: "weniger Sonnenwärme im Raum" },
      { value: "ganz dunkel", label: "ideal für Schlaf- und Kinderzimmer" },
      { value: "nachrüstbar", label: "als Vorbaurollladen ohne Stemmen" },
      { value: "Motor & Timer", label: "fährt abends von selbst herunter" },
    ],
    demo: "rollladen",
    name: "Rollladen",
    formLabel: "Rollladen",
    shortDescription:
      "Mehr Komfort, Sicherheit und Energieeffizienz, auf Wunsch auch mit moderner Steuerung.",
    tagline: "Schutz, Komfort und Sicherheit für Ihr Zuhause",
    intro: [
      "Rollläden sind der vielseitige Klassiker für umfassenden Schutz rund ums Haus. Sie bieten weit mehr als nur Verdunkelung: Sie sorgen für effektiven Wärme- und Schallschutz, wahren Ihre Privatsphäre und erhöhen die Sicherheit an Fenstern und Türen.",
      "Ob im Neubau oder bei der Modernisierung – Rollläden sind die robuste Lösung für alle, die Wert auf Energieeffizienz und ungestörten Wohnkomfort legen.",
    ],
    heroImage: img("rollladen", "hero-abend.jpg", "Modernes Haus in der Abenddämmerung mit halb geschlossenem Rollladen, gesteuert per Smartphone"),
    cardImage: img("rollladen", "card-terrasse.jpg", "Graue Rollläden an einem modernen Haus mit Holzterrasse"),
    benefitsTitle: "Warum Rollladen?",
    benefits: [
      { title: "Effektiver Wärmeschutz", text: "Hält Wohnräume im Sommer angenehm kühl und verbessert im Winter spürbar die Wärmedämmung." },
      { title: "Komplette Verdunkelung", text: "Sorgt für vollständige Dunkelheit auf Knopfdruck – die ideale Lösung für Schlaf- und Kinderzimmer." },
      { title: "Mehr Sicherheit", text: "Die stabilen Profile bilden eine widerstandsfähige Barriere und erschweren Einbruchversuche effektiv." },
      { title: "Effektiver Schallschutz", text: "Reduziert Lärm von draußen deutlich und sorgt für Ruhe – besonders wertvoll an stark befahrenen Straßen." },
      { title: "Privatsphäre & Sichtschutz", text: "Schützen Sie Ihr Zuhause jederzeit zuverlässig vor neugierigen Blicken und genießen Sie ungestörte Privatsphäre." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Ausführungen & Varianten",
        navLabel: "Varianten",
        title: "Passend zu Ihrer Fassade",
        intro:
          "Ob Neubau oder Sanierung: Wir bieten Ihnen langlebige Materialien, flexible Bauarten und eine große Farbvielfalt.",
        items: [
          {
            title: "Hochwertige Materialien",
            text: "Wählen Sie zwischen robustem Aluminium für höchste Stabilität und Langlebigkeit oder pflegeleichtem Kunststoff als wirtschaftliche Lösung mit sehr guten Dämmwerten.",
            // Bilder: WAREMA, heroal, SELVE, Somfy – Nutzungsrecht vor Go-live klären.
            image: img("rollladen", "varianten/aluminium-panzer.webp", "Nahaufnahme eines hellen Aluminium-Rollladenpanzers mit dunkler Endleiste und Führungsschiene"),
            options: [
              { label: "Aluminium", image: img("rollladen", "varianten/aluminium-profil.jpg", "Aluminium-Rollladenprofil mit Schaumfüllung im Querschnitt") },
              { label: "Kunststoff", image: { ...img("rollladen", "varianten/kunststoff-profil.png", "Kunststoff-Rollladenprofil mit hohlen Kammern im Querschnitt"), position: "object-contain! bg-white p-2" } },
            ],
          },
          {
            title: "Flexible Bauarten",
            text: "Egal ob unauffälliger Aufsatzrollladen für den Neubau, Vorbaurollladen zur einfachen Nachrüstung oder maßgefertigte Sonderformen für schräge Fenster – wir haben die Lösung.",
            image: img("rollladen", "varianten/bauarten-haus.jpg", "Weißes Wohnhaus mit halb heruntergefahrenen dunklen Rollläden vor großen Fenstern"),
            options: [
              { label: "Aufsatzrollladen", image: img("rollladen", "varianten/aufsatzrollladen.webp", "Fenster in heller Putzfassade mit geschlossenem Aufsatzrollladen, Kasten unsichtbar") },
              { label: "Vorbaurollladen", image: img("rollladen", "varianten/vorbaurollladen.webp", "Vorbaurollladen mit sichtbarem Kasten vor einer dunklen Fassade") },
              { label: "Schachtrollladen", image: img("rollladen", "varianten/schachtrollladen.png", "Zwei Fenster mit Rollläden, die in einem Schacht in der Wand sitzen") },
              { label: "Sonderform (schräg)", image: img("rollladen", "varianten/schraegrollladen.webp", "Wohnhaus mit Schrägrollladen am trapezförmigen Giebelfenster") },
            ],
          },
          {
            title: "Panzerprofile & Farben",
            text: "Gestalten Sie die Optik individuell. Unsere Profile sind in verschiedenen Deckbreiten und zahlreichen Farben erhältlich, damit sich der Rollladen harmonisch in Ihre Architektur einfügt.",
            image: img("rollladen", "varianten/profilfarben.webp", "Farbmusterkarte für Rollladenprofile mit Weiß-, Braun- und Holztönen, daneben Profilmuster"),
            options: [
              { label: "Farbauswahl", image: img("rollladen", "varianten/farbfaecher.webp", "Aufgefächerte Farbmuster in Creme, Grau, Rot und Anthrazit") },
            ],
          },
          {
            title: "Rollläden für Dachfenster",
            text: "Auch Dachfenster bekommen bei uns einen Außenrollladen. Er hält die Hitze unter dem Dach draußen und dunkelt zuverlässig ab. Gesteuert wird per Funk – auf Wunsch mit Solarmodul am Kasten, dann arbeitet der Rollladen autark und ganz ohne Stromkabel.",
            image: { src: "/images/produkte/rollladen/varianten/bauarten-haus.jpg", alt: "Skizze eines Dachfensters mit Außenrollladen und Solarmodul" },
            visual: "dachfenster-solar",
          },
        ],
      },
      {
        type: "variants",
        eyebrow: "Bedienung & Steuerung",
        navLabel: "Bedienung",
        title: "Vom Gurtzug bis zur Hausautomation",
        intro: "Wählen Sie den Bedienkomfort, der zu Ihnen passt.",
        items: [
          {
            title: "Manuelle Bedienung",
            text: "Bedienen Sie Ihre Rollläden einfach und unabhängig von Strom per Gurt. Diese Variante ist besonders robust und kostengünstig.",
            image: img("rollladen", "bedienung/gurt.jpg", "Hände ziehen am Rollladengurt neben einem halb geschlossenen Rollladen"),
            options: [
              { label: "Gurtwickler", image: { ...img("rollladen", "bedienung/gurtwickler.webp", "Aufputz-Gurtwickler in Weiß und Schwarz und ein Unterputz-Gurtwickler"), position: "object-contain! bg-white p-2" } },
            ],
          },
          {
            title: "Motorisierter Antrieb",
            text: "Unsere leisen und langlebigen Motoren sitzen unsichtbar in der Rollladenwelle und bewegen den Behang besonders schonend – per Wandschalter oder Funkhandsender. Das ist bequem und erhöht die Lebensdauer Ihrer Rollläden spürbar.",
            image: img("rollladen", "bedienung/wandschalter.webp", "Weißer Funk-Wandschalter neben einem Fenster mit Rollladen"),
            options: [
              { label: "Rohrmotor für die Welle", image: { ...img("rollladen", "bedienung/rohrmotor.webp", "Rohrmotor für Rollläden"), position: "object-contain! bg-white p-2" } },
              { label: "Funkhandsender", image: img("rollladen", "bedienung/funkhandsender.webp", "Funkhandsender auf einer Küchenarbeitsplatte") },
            ],
          },
          {
            title: "Smart Home (Somfy)",
            text: "Steuern Sie alles per App, Zeitplan oder Sprache. Sonnen- und Windwächter regeln den Schutz vollautomatisch – für maximale Sicherheit und Effizienz.",
            image: img("rollladen", "bedienung/tahoma-wohnzimmer.jpg", "Somfy TaHoma switch im Wohnzimmer, im Hintergrund bedient eine Person die App auf dem Smartphone"),
            options: [
              { label: "TaHoma und App", image: { ...img("rollladen", "bedienung/tahoma-app.jpg", "Somfy TaHoma switch neben einem Smartphone mit der TaHoma-App"), position: "object-contain! bg-white" } },
              { label: "TaHoma zu Hause", image: img("rollladen", "bedienung/tahoma-tisch.jpg", "Somfy TaHoma switch auf einem Holz-Beistelltisch neben Pflanzen") },
            ],
          },
        ],
      },
    ],
    manufacturersTitle: "Unsere Partner & Hersteller",
    manufacturersIntro:
      "Qualität entsteht durch bestes Material. Deshalb setzen wir bei Profilen und Antrieben ausschließlich auf renommierte Marken, die für Langlebigkeit und technische Präzision stehen.",
    manufacturers: [
      { name: "WAREMA", logo: { src: "/images/partner/warema.png", width: 1025, height: 650 } },
      { name: "Neerken & Büter", logo: { src: "/images/partner/neerken-bueter.png", width: 406, height: 161 } },
      { name: "heroal", logo: { src: "/images/partner/heroal.png", width: 381, height: 280 } },
    ],
    projectPhotos: [
      // Eigene Fotos (Google Drive „Webseite“, 21.11.2026). Im Ordner gab es nur diese zwei Rollladen-Motive.
      { ...img("rollladen", "projekt-sanierung-innen.jpg", "Rollladen-Sanierung im Wohnhaus: neue Rollläden, darüber der geöffnete Rollladenkasten"), caption: "Rollladen-Sanierung im Wohnhaus" },
      { ...img("rollladen", "projekt-kastenoeffnung.jpg", "Geöffneter Rollladenkasten über einer Terrassentür während der Modernisierung"), caption: "Modernisierung am Rollladenkasten" },
    ],
    faqTitle: "Häufige Fragen zu Rollläden",
    faq: [
      {
        question: "Kann man Rollläden auch nachträglich einbauen?",
        answer: "Ja, eine Nachrüstung ist bei fast jedem Gebäude möglich. Hierfür eignen sich besonders Vorbaurollläden, die vor das Fenster montiert werden, ohne dass aufwendige Stemmarbeiten am Mauerwerk nötig sind.",
      },
      {
        question: "Sind moderne Rollläden laut?",
        answer: "Nein, moderne Anlagen laufen sehr ruhig. Wir setzen auf hochwertige Aluminiumprofile und gedämpfte Führungsschienen, die Klappergeräusche bei Wind minimieren und ein leises Öffnen und Schließen garantieren.",
      },
      {
        question: "Helfen Rollläden beim Energiesparen?",
        answer: "Absolut – und zwar das ganze Jahr über. Im Winter bildet der geschlossene Rollladen ein isolierendes Luftpolster, das die Wärme im Haus hält. Im Sommer blockiert er die Hitze bereits vor der Scheibe und hält Räume natürlich kühl.",
      },
      {
        question: "Kann man eine alte Anlage auf Motorantrieb umrüsten?",
        answer: "In den meisten Fällen ist das problemlos machbar. Wir können Ihre bestehende Anlage oft mit Rohrmotoren oder elektrischen Gurtwicklern nachrüsten, sodass Sie zukünftig bequem per Knopfdruck oder App steuern können.",
      },
      {
        question: "Was tun, wenn der Gurt reißt oder der Rollladen klemmt?",
        answer: "Das gehört zu den häufigsten Reparaturanfragen. Rufen Sie uns einfach an – Gurte, Wickler, Wellen und Motoren tauschen wir schnell und fachgerecht aus.",
      },
    ],
    icon: "rollladen",
    metaTitle: "Rollläden Gütersloh | Schutz & Wärmedämmung | Westerwalbesloh",
    metaDescription:
      "Zu laut oder zu heiß? Unsere Rollläden in Gütersloh bieten optimalen Wärme- & Schallschutz für Ihr Zuhause. Jetzt kostenloses Angebot anfordern!",
  },
  {
    slug: "markisen",
    highlights: [
      { value: "Schatten", label: "auf Knopfdruck für Terrasse & Balkon" },
      { value: "Wind & Sonne", label: "Sensoren steuern automatisch" },
      { value: "6 Bauarten", label: "von offen bis Vollkassette" },
      { value: "WAREMA & KADECO", label: "Markisen namhafter Hersteller" },
    ],
    demo: "markise",
    name: "Markisen",
    formLabel: "Markise",
    shortDescription:
      "Perfekte Beschattung für Terrasse, Balkon oder Fenster – robust, langlebig und planbar in vielen Varianten.",
    tagline: "Stilvolle Beschattung für Terrasse, Balkon und Fassade",
    intro: [
      "Markisen verbinden Komfort, Design und wirksamen Sonnenschutz. Ob große Terrasse, kleiner Balkon oder Fensterfront – wir bieten hochwertige Markisenlösungen, die genau zu Ihrem Zuhause passen.",
      "Mit vielen Ausstattungs- und Designoptionen, langlebigen Materialien und moderner Steuerung schaffen wir für Sie einen Platz zum Wohlfühlen.",
    ],
    heroImage: img("markisen", "hero-pool-terrasse.jpg", "Ausgefahrene Gelenkarmmarkise über einer Terrasse mit Pool"),
    cardImage: img("markisen", "card-garten-lounge.jpg", "Helle Markise spendet Schatten über einer Lounge-Ecke im Garten"),
    benefitsTitle: "Warum Markisen?",
    benefits: [
      { title: "Angenehmer Schatten & Raumklima", text: "Schützt zuverlässig vor Sonne und Hitze – nicht nur auf der Terrasse, sondern verhindert auch das Aufheizen der dahinterliegenden Wohnräume." },
      { title: "Große Stoff- & Designauswahl", text: "Wählen Sie aus unzähligen Farben und Mustern. Von dezent bis markant finden wir genau das Design, das zu Ihrem Hausstil passt." },
      { title: "Langlebige & robuste Materialien", text: "Unsere Markisen sind wetterfest, windstabil und pflegeleicht, damit Sie lange Freude an Ihrem neuen Schattenplatz haben." },
      { title: "Komfortable Bedienung", text: "Ob klassisch manuell, bequem motorisiert oder smart gesteuert: Genießen Sie höchsten Bedienkomfort ganz nach Ihren Wünschen." },
      { title: "Erweiterter Wohnraum", text: "Verwandeln Sie Terrasse oder Balkon in ein zweites Wohnzimmer im Freien und nutzen Sie Ihre Außenfläche flexibler und öfter." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Markisenarten",
        navLabel: "Markisenarten",
        title: "Für jeden Anspruch die passende Lösung",
        items: [
          {
            title: "Offene Gelenkarmmarkise",
            text: "Der preisattraktive Klassiker für geschützte Lagen, z. B. unter Dachüberständen. Sie überzeugt durch ihre leichte, filigrane Bauweise und ermöglicht besonders große Ausfallmaße.",
            image: img("markisen", "gelenkarm-offen.jpg", "Offene Gelenkarmmarkise, ausgefahren über einer Terrasse"),
          },
          {
            title: "Halbkassetten-Markise",
            text: "Die moderne Zwischenlösung: Im eingefahrenen Zustand ist das Tuch sicher vor Witterung geschützt, während die Technik nach unten offen bleibt. Ideal für Terrassen und Balkone.",
            image: img("markisen", "halbkassette.jpg", "Halbkassetten-Markise an einer Hausfassade"),
          },
          {
            title: "Vollkassetten-Markise",
            text: "Unser Premium-Modell für maximalen Schutz. Tuch und Gelenkarme verschwinden komplett in der geschlossenen Kassette – das sorgt für höchste Lebensdauer und eine saubere Optik.",
            image: img("markisen", "vollkassette.jpg", "Vollkassetten-Markise an einem Haus mit Holzfassade"),
          },
          {
            title: "Wintergarten-Markise",
            text: "Spezieller Hitzeschutz für Glasdächer und Wintergärten. Diese Markisen werden auf oder unter dem Glas montiert und sorgen für ein angenehmes Klima, selbst bei intensiver Sonneneinstrahlung.",
            image: img("markisen", "wintergarten.jpg", "Wintergarten-Markise als Hitzeschutz über einem Glasdach"),
          },
          {
            title: "Freistehende Markisen",
            text: "Schatten genau dort, wo Sie ihn brauchen – ganz ohne Wandmontage. Diese Systeme sind extrem windstabil, decken große Flächen ab und eignen sich perfekt für den freien Garten.",
            image: img("markisen", "freistehend.jpg", "Freistehende Markise über einer Sitzgruppe im Garten"),
          },
          {
            title: "Fenster- & Fassadenmarkisen",
            text: "Der senkrechte Sonnenschutz für moderne Fensterfronten. Sie halten Hitze draußen und verhindern Blendung im Innenraum, ohne die Sicht nach draußen komplett zu versperren.",
            image: img("markisen", "fenster-fassade.jpg", "Beige Senkrechtmarkisen vor drei hohen Fenstern einer Klinkerfassade"),
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Stoffe & Designs",
        navLabel: "Stoffe",
        title: "Markisentücher, die lange schön bleiben",
        items: [
          "Hohe UV-Beständigkeit",
          "Starke & langlebige Farbkraft",
          "Effektiver Hitzeschutz",
          "Große Auswahl an Farben & Mustern",
          "Perfekt abgestimmt auf Ihren Hausstil",
        ],
        // Bilder: WAREMA (warema.com) – Nutzungsrecht vor Go-live klären. Reihenfolge wie die Punkte oben.
        tiles: [
          img("markisen", "stoffe/uv.webp", "Mintgrünes Markisentuch von unten, Sonnenlicht scheint durch, Blätterschatten auf dem Stoff"),
          img("markisen", "stoffe/farbkraft.webp", "Kräftig farbige Markisenstoffe in Rot, Gelb, Grün, Orange und Blau, aufgefächert"),
          img("markisen", "stoffe/hitzeschutz.webp", "Ausgefahrene Gelenkarmmarkise, darunter ein schattiger Terrassentisch, dahinter Garten in der Sonne"),
          img("markisen", "stoffe/auswahl.webp", "Hände halten Stoffmuster über einen aufgeschlagenen Markisen-Musterordner"),
          img("markisen", "stoffe/hausstil.webp", "Kassettenmarkise mit anthrazitfarbenem Gestell und hellem Tuch an einer Fassade aus Holz und Klinker"),
        ],
      },
      {
        type: "variants",
        eyebrow: "Volant",
        navLabel: "Volant",
        title: "Der Volant: Blickfang und Extra-Schatten",
        intro: "Der Volant ist der Stoffstreifen an der Vorderkante der Markise. Er rundet die Optik ab – und als ausfahrbares Volant-Rollo schützt er zusätzlich vor tiefstehender Sonne.",
        items: [
          {
            title: "Volant in Ihrer Wunschform",
            text: "Ob gerade, gewellt oder im Bogen: Den Volant gibt es in verschiedenen Formen und passend zum Markisentuch. So bekommt Ihre Markise genau die Optik, die zu Ihrem Haus passt.",
            image: { src: "/images/produkte/markisen/volant-rollo-detail.webp", alt: "Beispiele für Volant-Formen" },
            visual: "volant-formen",
          },
          {
            title: "Ausfahrbares Volant-Rollo mit Funk",
            text: "Das Volant-Rollo fährt bei Bedarf aus der Vorderkante nach unten und schützt vor tiefstehender Sonne und neugierigen Blicken. Je nach Markise wird es per Kurbel oder elektrisch per Funk bedient – auf Wunsch steuert ein Handsender Markise und Volant gemeinsam.",
            // Bilder: WAREMA (warema.com) – Nutzungsrecht vor Go-live klären.
            image: img("markisen", "volant-rollo.webp", "Grüne Gelenkarmmarkise mit heruntergelassenem Volant-Rollo über einer Terrasse"),
            options: [
              { label: "Volant-Rollo im Detail", image: img("markisen", "volant-rollo-detail.webp", "Volant-Rollo, das aus der Vorderkante einer Markise ausfährt") },
            ],
          },
        ],
      },
      {
        type: "variants",
        eyebrow: "Bedienung & Steuerung",
        navLabel: "Bedienung",
        title: "Von der Kurbel bis zur Wetterautomatik",
        intro:
          "Entscheiden Sie selbst, wie viel Komfort Sie wünschen: Von der manuellen Kurbel bis zur vollautomatischen Wettersteuerung.",
        // Bilder: WAREMA und Somfy – Nutzungsrecht vor Go-live klären.
        items: [
          {
            title: "Manuelle Bedienung",
            text: "Bedienen Sie Ihre Markise klassisch von Hand per Kurbel. Diese Variante ist besonders robust, günstig und funktioniert völlig unabhängig von einer Stromversorgung.",
            image: img("markisen", "bedienung/kurbel.webp", "Kassettenmarkise von unten mit Kurbelgetriebe und eingehängter Kurbel"),
          },
          {
            title: "Motorisierter Antrieb",
            text: "Sparen Sie sich das Kurbeln. Ein leistungsstarker Motor fährt die Markise bequem aus – bedienbar per Wandschalter oder ganz entspannt per Funk-Handsender.",
            image: img("markisen", "bedienung/funkhandsender.webp", "Hand mit Funkhandsender, dahinter eine ausgefahrene Markise über einer Terrasse"),
            options: [
              { label: "Somfy-Funkhandsender", image: { ...img("markisen", "bedienung/somfy-situo.jpg", "Somfy Funkhandsender Situo 5 io"), position: "object-contain! bg-white p-2" } },
            ],
          },
          {
            title: "Smart Home (Somfy & WAREMA)",
            text: "Steuerung per App, Zeitplan oder vollautomatisch via Sonnen- und Windwächter. Nutzen Sie eigene Szenarien oder die optionale Sprachsteuerung.",
            image: img("markisen", "bedienung/wms-app.webp", "Smartphone mit WAREMA-WMS-App vor einer ausgefahrenen Gelenkarmmarkise"),
            options: [
              { label: "WMS Wetterstation", image: img("markisen", "bedienung/wetterstation.webp", "WAREMA WMS Wetterstation plus neben einer Kassettenmarkise an einer Holzfassade") },
              { label: "Somfy TaHoma", image: img("markisen", "bedienung/tahoma-switch.jpg", "Somfy TaHoma switch auf einem Holzmöbel") },
            ],
          },
        ],
      },
    ],
    manufacturersTitle: "Unsere Fachpartner für Markisen",
    manufacturers: [
      {
        name: "WAREMA",
        text: "Als Europas führende Marke für technischen Sonnenschutz steht WAREMA für kompromisslose Qualität und Innovation „Made in Germany“. Wir setzen auf ihre langlebigen Markisen, weil sie technische Perfektion mit vielfach ausgezeichnetem Design verbinden.",
        logo: { src: "/images/partner/warema.png", width: 1025, height: 650 },
      },
      {
        name: "KADECO",
        text: "KADECO verbindet Funktion mit Ästhetik wie kaum ein anderer Hersteller. Die Markisen begeistern durch frische, moderne Stoffkollektionen und eine hochwertige Verarbeitung bis ins Detail – ideal für alle, die neben dem Schatten auch Wert auf eine besondere Wohnatmosphäre legen.",
        logo: { src: "/images/partner/kadeco.png", width: 309, height: 202 },
      },
    ],
    projectPhotos: [
      { ...img("markisen", "projekt-1.jpg", "Blaue Gelenkarmmarkise über einem Balkon, montiert von Westerwalbesloh"), caption: "Balkonmarkise, Gütersloh" },
      { ...img("markisen", "projekt-3.jpg", "Orangefarbene Gelenkarmmarkise über einer Gartenterrasse"), caption: "Terrassenmarkise in Orange" },
      { ...img("markisen", "projekt-2.jpg", "Kassettenmarkise über einer Terrasse mit Hecke, montiert von Westerwalbesloh"), caption: "Terrassenbeschattung, OWL" },
      { ...img("markisen", "projekt-4.jpg", "Zwei Gelenkarmmarkisen übereinander an Balkon und Terrasse eines Klinkerhauses"), caption: "Balkon und Terrasse doppelt beschattet" },
      { ...img("markisen", "projekt-screens-mehrfamilienhaus.jpg", "Senkrechtmarkisen als Textilscreens vor den Fenstern eines Mehrfamilienhauses"), caption: "Senkrechtmarkisen am Mehrfamilienhaus, OWL" },
      { src: "/images/leistungen/objektbau-projekte/gallery-schenke.jpg", alt: "Markisen über den Schaufenstern eines Ladengeschäfts", caption: "Ladengeschäft am Bahnhof" },
      // Eigene Fotos aus dem Drive-Ordner „Webseite“ (21.11.2026), nur noch nicht verwendete Motive. Orte ergänzt Fabian später.
      { ...img("markisen", "projekt-giebelhaus.jpg", "Gestreifte Gelenkarmmarkise über der Terrasse eines Hauses mit dunklem Giebel und Gartenteich"), caption: "Terrassenmarkise am Giebelhaus" },
      { ...img("markisen", "projekt-kassette-neubau.jpg", "Helle Kassettenmarkise über der Terrasse eines modernen weißen Hauses"), caption: "Kassettenmarkise am Neubau" },
      { ...img("markisen", "projekt-terrasse-grau.jpg", "Graue Gelenkarmmarkise über einer Terrasse mit Sitzgruppe"), caption: "Terrassenmarkise in Grau" },
      { ...img("markisen", "projekt-terrasse-beige.jpg", "Beige Markise über einer Terrasse mit Holzzaun und Blumen"), caption: "Schatten für die Gartenterrasse" },
      { ...img("markisen", "projekt-erdgeschoss.jpg", "Markise über der Terrasse im Erdgeschoss unter einem Balkon"), caption: "Markise unter dem Balkon" },
      { ...img("markisen", "projekt-balkon-mfh.jpg", "Markise über einem Balkon eines modernen Mehrfamilienhauses"), caption: "Balkonmarkise am Mehrfamilienhaus" },
      { ...img("markisen", "projekt-senkrechtmarkisen.jpg", "Helle Senkrechtmarkisen vor den Fenstern eines Klinkerhauses"), caption: "Senkrechtmarkisen am Klinkerhaus" },
      { ...img("markisen", "projekt-tuchwechsel.jpg", "Monteur von Westerwalbesloh beim Wechsel eines orangefarbenen Markisentuchs"), caption: "Neues Tuch für eine bestehende Markise" },
    ],
    faqTitle: "Häufige Fragen zu Markisen",
    faq: [
      {
        question: "Welche Markisenarten gibt es?",
        answer: "Die gängigsten Bauarten sind offene Gelenkarmmarkisen, Halbkassetten- und Vollkassetten-Markisen für Terrasse und Balkon sowie Wintergarten-, Fenster- und freistehende Markisen. Welche Variante zu Ihnen passt, klären wir im Beratungsgespräch vor Ort.",
      },
      {
        question: "Ab welcher Windstärke sollte die Markise eingefahren werden?",
        answer: "Das hängt von Modell und Ausfallweite ab. Mit einem optionalen Windwächter fährt Ihre Markise bei zu starkem Wind automatisch ein – auch wenn Sie nicht zu Hause sind.",
      },
      {
        question: "Kann ich einen Sonnen- oder Windsensor nachrüsten lassen?",
        answer: "Ja, bei den meisten motorisierten Markisen lässt sich ein Sonnen- oder Windsensor nachträglich ergänzen. Sprechen Sie uns einfach darauf an.",
      },
      {
        question: "Kann das Markisentuch ausgetauscht werden?",
        answer: "Ja. Ist das Tuch verblichen oder beschädigt, bespannen wir Ihr vorhandenes Gestell mit einem neuen Stoff – oft deutlich günstiger als eine neue Markise.",
      },
    ],
    icon: "markise",
    metaTitle: "Markisen Gütersloh | Sonnenschutz nach Maß | Westerwalbesloh",
    metaDescription:
      "Sonne auf der Terrasse zu heiß? Unsere Markisen in Gütersloh & OWL bieten perfekten Schatten und Design nach Maß. Jetzt kostenloses Angebot anfordern!",
  },
  {
    slug: "insektentschutz",
    highlights: [
      { value: "nach Maß", label: "millimetergenau gefertigt" },
      { value: "6 Systeme", label: "vom Spannrahmen bis zum Plissee" },
      { value: "Pollenschutz", label: "Spezialgewebe für Allergiker" },
      { value: "Aluminium", label: "stabile, langlebige Rahmen" },
    ],
    demo: "insektenschutz",
    name: "Insektenschutz",
    formLabel: "Insektenschutz",
    shortDescription: "Passgenaue Lösungen für Fenster, Türen, Dachfenster und Sonderformen.",
    tagline: "Maßgenaue Lösungen für Fenster, Türen & Sonderformen",
    intro: [
      "Ein guter Insektenschutz sorgt für ungestörtes Lüften und schützt zuverlässig vor Fliegen, Mücken, Wespen und anderen unerwünschten Gästen.",
      "Unsere hochwertigen Systeme von WAREMA bieten passgenauen Schutz für nahezu jede Einbausituation – dezent, langlebig und komfortabel bedienbar. Perfekt für Privathaushalte, Büros, Praxen und öffentliche Einrichtungen.",
    ],
    heroImage: img("insektentschutz", "hero-kueche-schiebeanlage.jpg", "Helle Küche mit Insektenschutz-Schiebeanlage vor der Terrassentür"),
    cardImage: img("insektentschutz", "card-terrassentuer.jpg", "Terrassentür mit Insektenschutz-Schiebeanlage an einem modernen Haus"),
    benefitsTitle: "Warum Insektenschutz?",
    benefits: [
      { title: "Perfekter Schutz ohne Chemie", text: "Halten Sie Plagegeister effektiv fern – ganz natürlich und umweltfreundlich, ohne chemische Sprays oder Stromfallen." },
      { title: "Individuell auf Maß gefertigt", text: "Egal ob Fenster, Balkontür, Dachschräge oder Sonderform: Wir fertigen jeden Rahmen millimetergenau passend für Ihre Einbausituation." },
      { title: "Langlebig & stabil", text: "Robuste Aluminiumrahmen und hochwertige, reißfeste Gewebe trotzen Wind und Wetter über viele Jahre." },
      { title: "Dezente Optik", text: "Dank schlanker Profile in modernen Farben und fast unsichtbarer Gewebe fügt sich der Schutz harmonisch und unauffällig in Ihre Fassade ein." },
      { title: "Komfortable Bedienung", text: "Unsere Systeme sind leichtgängig, stabil und absolut alltagstauglich – ein Schutz, den Sie kaum bemerken, aber nicht mehr missen wollen." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Unsere Insektenschutz-Lösungen",
        navLabel: "Lösungen",
        title: "Vom Kellerfenster bis zur großen Schiebetür",
        intro: "Entdecken Sie unsere maßgefertigten Systeme für ein insektenfreies Zuhause.",
        items: [
          {
            title: "Spannrahmen für Fenster",
            text: "Die ideale Lösung für Fenster, die oft gekippt werden, z. B. im Schlafzimmer. Der Rahmen lässt sich meist ohne Bohren einfach ein- und aushängen – perfekt zur Nachrüstung und schonend für Ihre Fensterrahmen.",
            image: img("insektentschutz", "spannrahmen.jpg", "Insektenschutz-Spannrahmen, passgenau in einen Fensterrahmen eingesetzt"),
          },
          {
            title: "Drehrahmen für Türen & Fenster",
            text: "Der robuste Klassiker für häufig genutzte Durchgänge wie Balkon- oder Terrassentüren. Sie lassen sich bequem wie eine normale Tür öffnen und schließen. Auf Wunsch integrieren wir auch eine Katzen- oder Hundeklappe.",
            image: img("insektentschutz", "drehrahmen.jpg", "Insektenschutz-Drehrahmen als Tür, seitlich aufschwenkend"),
          },
          {
            title: "Schiebeanlagen",
            text: "Perfekt für große Glasfronten, Wintergärten oder Hebe-Schiebetüren. Die Anlagen laufen sehr ruhig und stabil seitlich in Schienen, sparen Platz beim Öffnen und sind ein- oder mehrflügelig realisierbar.",
            image: img("insektentschutz", "schiebeanlage.jpg", "Insektenschutz-Schiebeanlage vor einer breiten Terrassentür"),
          },
          {
            title: "Pendeltüren",
            text: "Komfort pur: Diese Türen öffnen in beide Richtungen und schließen dank Magnettechnik automatisch von selbst. Ideal, wenn Sie mal keine Hand frei haben – und besonders robust für Haushalte mit Kindern und Tieren.",
            image: img("insektentschutz", "pendeltuer.jpg", "Insektenschutz-Pendeltür, in beide Richtungen zu öffnen"),
          },
          {
            title: "Lichtschachtabdeckungen",
            text: "Schluss mit Laub, Spinnen und Kleintieren im Kellerschacht. Unsere Abdeckungen mit feinmaschigem Edelstahlgewebe werden einfach auf den bestehenden Rost montiert – trittfest, witterungsbeständig und optisch sehr dezent.",
            image: img("insektentschutz", "lichtschacht.jpg", "Lichtschachtabdeckung als Insektenschutz über einem Kellerschacht"),
          },
          {
            title: "Plissee für Fenster & Türen",
            text: "Die platzsparende Lösung, wenn für einen Dreh- oder Schieberahmen kein Platz ist: Das Gewebe faltet sich quer zusammen und verschwindet seitlich im Rahmen – ganz ohne Schwenkbereich. Bedient wird es über eine Griffleiste von innen oder außen, auf jeder Höhe. Ideal für Fenster, Balkon- und Terrassentüren, auch auf kleinen Balkonen.",
            // Bilder: WAREMA (warema.com) – Nutzungsrecht vor Go-live klären.
            image: img("insektentschutz", "plissee.webp", "Insektenschutz-Plissee vor einer geöffneten Balkontür in einem hellen Wohnzimmer"),
            options: [
              { label: "Für Fenster", image: img("insektentschutz", "plissee-fenster.webp", "Heller Wohnraum mit Fensterfront und Insektenschutz-Plissee") },
              { label: "Für Türen", image: img("insektentschutz", "plissee-tuer.webp", "Offene Wohnküche mit Balkontür und Insektenschutz-Plissee") },
            ],
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Gewebearten",
        navLabel: "Gewebe",
        title: "Hochleistungsgewebe für jeden Bedarf",
        intro:
          "Ob fast unsichtbar, pollenabweisend oder extrem kratzfest: Wählen Sie das Funktionsgewebe, das perfekt zu Ihren Anforderungen passt.",
        items: [
          { title: "VisionAir-Gaze", text: "Fast unsichtbar für den freien Blick nach draußen. Dieses Gewebe bietet maximale Luftdurchlässigkeit bei gleichzeitig hoher Stabilität." },
          { title: "VisionAir Pollenschutz", text: "Die Erlösung für Allergiker: Dieses Spezialgewebe hält Pollen effektiv draußen, lässt aber dennoch genügend Licht und frische Luft hinein." },
          { title: "VisionAir Feinstaub", text: "Der 3-in-1-Schutz für Wohnlagen in der Stadt: Hält Insekten zuverlässig fern und filtert zusätzlich Pollen sowie Feinstaub aus der Atemluft." },
          { title: "Standard-Fiberglas", text: "Der bewährte Klassiker: Dieses robuste Gewebe ist besonders langlebig, witterungsbeständig und bietet eine solide Durchsicht zum fairen Preis." },
          { title: "Haustiergewebe", text: "Extrem widerstandsfähig gegen Krallen: Das vinylbeschichtete Polyestergewebe ist besonders reißfest und ideal für Haushalte mit Hund oder Katze." },
        ],
        image: img("insektentschutz", "gewebe.jpg", "Nahaufnahme eines feinmaschigen Insektenschutzgewebes im Rahmen"),
      },
    ],
    manufacturersTitle: "Herstellerqualität, auf die wir bauen",
    manufacturers: [
      {
        name: "WAREMA – Präzision im Insektenschutz",
        text: "Wir setzen auf WAREMA, den führenden Experten für maßgefertigte und langlebige Insektenschutz-Lösungen. Dank robuster Aluminiumprofile und spezialisierter Funktionsgewebe genießen Sie perfekten Schutz vor Insekten bei gleichzeitig maximaler Licht- und Luftdurchlässigkeit.",
        logo: { src: "/images/partner/warema.png", width: 1025, height: 650 },
      },
    ],
    projectPhotos: [],
    faqTitle: "Häufige Fragen zum Insektenschutz",
    faq: [
      {
        question: "Kann man Insektenschutz nachträglich einbauen?",
        answer: "Ja, eine Nachrüstung ist nahezu immer möglich – egal ob im Altbau oder bei bestehenden Fenstern. Flexible Systeme wie Spannrahmen lassen sich oft sogar ganz ohne Bohren montieren, was sie ideal für Mietwohnungen macht.",
      },
      {
        question: "Wie viel Pflege braucht das System?",
        answer: "Der Aufwand ist minimal. Unsere hochwertigen Materialien sind wetterfest und schmutzabweisend. Eine gelegentliche Reinigung mit einem feuchten Tuch oder vorsichtiges Absaugen genügt, damit der Insektenschutz wie neu aussieht.",
      },
      {
        question: "Sind die Rahmen stabil genug?",
        answer: "Absolut. Wir verwenden ausschließlich stranggepresste Aluminiumprofile. Diese sind extrem formstabil, verwindungssteif und langlebig – selbst bei großen Schiebeanlagen oder starker Beanspruchung durch Wind und Wetter.",
      },
      {
        question: "Kann man das Gewebe austauschen?",
        answer: "Ja, das ist problemlos machbar. Sollte das Netz nach vielen Jahren oder durch eine Beschädigung (z. B. durch ein Haustier) reißen, müssen Sie nicht den kompletten Rahmen entsorgen – wir ziehen das Gewebe einfach neu ein.",
      },
      {
        question: "Gibt es Insektenschutz auch für Dachfenster und Sonderformen?",
        answer: "Ja. Ob Dachflächenfenster, Rundbogen oder Schräge – wir nehmen das genaue Aufmaß vor Ort und fertigen Ihren Insektenschutz passgenau an.",
      },
    ],
    icon: "insektenschutz",
    metaTitle: "Insektenschutz Gütersloh | Maßarbeit | Westerwalbesloh",
    metaDescription:
      "Mücken im Haus? Unser Insektenschutz nach Maß für Fenster & Türen in Gütersloh & OWL sorgt für ruhige Nächte. Qualität vom Experten. Jetzt Angebot anfragen!",
  },
  {
    slug: "sonnenschutz",
    highlights: [
      { value: "6 Systeme", label: "Plissee, Rollo, Jalousie & mehr" },
      { value: "blendfrei", label: "ideal fürs Homeoffice" },
      { value: "Dachfenster", label: "auch für Sonderformen" },
      { value: "KADECO", label: "Premium-Innenbeschattung" },
    ],
    demo: "plissee",
    name: "Innenliegender Sonnenschutz",
    formLabel: "Innen-Sonnenschutz",
    shortDescription:
      "Plissees, Wabenplissees, Rollos, Jalousien, Lamellen und Flächenvorhänge – individuell und dekorativ.",
    tagline: "Komfort, Design & Lichtsteuerung für jeden Raum",
    intro: [
      "Innenliegender Sonnenschutz verbindet Funktionalität mit Wohnlichkeit. Er schützt vor Blendung, sorgt für Privatsphäre und hilft, das Raumklima zu regulieren.",
      "Mit vielfältigen Stoffen, Farben und Systemen finden wir für jeden Raum die passende Lösung – vom Wohnzimmer bis zum Büro.",
    ],
    heroImage: img("sonnenschutz", "hero-wohnzimmer-plissee.jpg", "Wohnzimmer mit gemusterten Plissees an Fenstern und Dachfenstern"),
    cardImage: img("sonnenschutz", "card-wohnraum.jpg", "Heller Wohnraum mit Plissee und Lamellenvorhang an der Fensterfront"),
    benefitsTitle: "Warum innenliegender Sonnenschutz?",
    benefits: [
      { title: "Effektiver Blend- & Sichtschutz", text: "Schützt zuverlässig vor neugierigen Blicken und störender Sonneneinstrahlung – ideal für Bildschirmarbeit im Homeoffice und entspannte Wohnräume." },
      { title: "Dekoratives Wohnraum-Design", text: "Sonnenschutz ist auch Dekoration: Setzen Sie optische Akzente mit einer riesigen Auswahl an Stoffen, Farben und Strukturen." },
      { title: "Angenehmes Raumklima", text: "Spezielle Funktionsstoffe wie Wabenplissees reflektieren Hitze im Sommer und wirken im Winter isolierend am Fenster, um Energie zu sparen." },
      { title: "Lösungen für jede Fensterform", text: "Egal ob Dachfenster, Giebelverglasung oder Wintergarten: Wir fertigen passgenaue Lösungen für jede noch so schwierige Situation." },
      { title: "Komfortable Bedienung", text: "Wählen Sie zwischen klassischer manueller Bedienung (Griff/Kette) oder modernem Motorantrieb für maximalen Komfort im Alltag." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Unsere Systeme im Überblick",
        navLabel: "Systeme",
        title: "Funktionalität trifft Design",
        intro:
          "Entdecken Sie unsere vielseitigen Lösungen für Licht-, Sicht- und Sonnenschutz – maßgefertigt für Ihr Zuhause.",
        items: [
          {
            title: "Plissee",
            text: "Der flexible Alleskönner für nahezu jede Fensterform. Stufenlos verstellbar, riesige Stoffauswahl und auch ideal für Feuchträume geeignet.",
            image: img("sonnenschutz", "plissee-raum.jpg", "Wohnzimmer mit drei hohen Fenstern, an jedem ein verspanntes einlagiges Plissee"),
          },
          {
            title: "Wabenplissee",
            text: "Energieeffizienz pur dank Wabenstruktur. Isoliert gegen Hitze und Kälte, verdunkelt zuverlässig und kommt ohne sichtbare Schnüre aus.",
            image: img("sonnenschutz", "wabenplissee-raum.jpg", "Zwei hohe Fenster mit grauen Wabenplissees in einem hellen Essbereich"),
          },
          {
            title: "Rollo",
            text: "Der bewährte Klassiker. Ideal als Blendschutz am Arbeitsplatz oder zur kompletten Verdunkelung – pflegeleicht und in vielen Varianten.",
            image: img("sonnenschutz", "rollo-raum.jpg", "Schlafzimmer mit gemustertem Kassettenrollo am Fenster"),
          },
          {
            title: "Jalousie",
            text: "Präzise Lichtsteuerung in moderner Optik. Regulieren Sie Lichteinfall und Privatsphäre ganz flexibel durch das Wenden der Lamellen.",
            image: img("sonnenschutz", "jalousie-raum.jpg", "Raum mit zwei großen Fenstern und hellbraunen Holzjalousien"),
          },
          {
            title: "Lamellenvorhang",
            text: "Die perfekte Lösung für große Fensterflächen. Besticht durch klare Linien, moderne Optik und eignet sich hervorragend als Raumtrenner.",
            image: img("sonnenschutz", "lamellenvorhang-raum.jpg", "Wohnzimmer mit cremefarbenem Lamellenvorhang vor einer bodentiefen Fensterfront"),
          },
          {
            title: "Flächenvorhang",
            text: "Elegante Optik für große Glasfronten und Schiebetüren. Die verschiebbaren Stoffbahnen setzen moderne, ruhige Akzente in jedem Raum.",
            image: img("sonnenschutz", "flaechenvorhang.jpg", "Flächenvorhang vor einer Fensterfront im Wohnzimmer"),
          },
          {
            title: "Dachfenster-Rollos & -Plissees",
            text: "Auch unter der Dachschräge sorgen wir für Blend- und Sichtschutz: Passgenaue Rollos und Plissees werden direkt am Dachfensterrahmen geführt und bleiben in jeder Neigung sicher in Position.",
            // Bilder: KADECO (kadeco.de) – Nutzungsrecht vor Go-live klären.
            image: { ...img("sonnenschutz", "dachfenster-rollo.jpg", "Schlafzimmer unter der Dachschräge mit zwei Dachfenster-Rollos"), position: "object-[35%_50%]" },
            options: [
              { label: "Dachfenster-Plissee", image: { ...img("sonnenschutz", "dachfenster-plissee.jpg", "Dachfenster mit Wabenplissees in einem hellen Schlafzimmer"), position: "object-[75%_50%]" } },
            ],
          },
        ],
      },
    ],
    manufacturersTitle: "Unsere Fachpartner",
    manufacturers: [
      {
        name: "KADECO – Premium-Innenbeschattung",
        text: "Wir setzen auf KADECO, den führenden Hersteller für hochwertigen innenliegenden Sonnenschutz. Die Marke überzeugt durch moderne Designs und eine große Farbauswahl. Dank robuster Materialien und langlebiger Mechanik erhalten Sie ein Produkt, das nicht nur gut aussieht, sondern auch dauerhaft zuverlässig funktioniert.",
        logo: { src: "/images/partner/kadeco.png", width: 309, height: 202 },
      },
    ],
    projectPhotos: [],
    faqTitle: "Häufige Fragen zum Innen-Sonnenschutz",
    faq: [
      {
        question: "Sind die Systeme für Mietwohnungen geeignet?",
        answer: "Absolut. Viele unserer Lösungen – insbesondere Plissees und Jalousien – lassen sich mit Klemmträgern ganz ohne Bohren am Fensterrahmen befestigen. Das ist stabil, schont die Fenster und lässt sich beim Auszug rückstandslos wieder entfernen.",
      },
      {
        question: "Gibt es Stoffe für Bad und Küche?",
        answer: "Ja, wir führen spezielle Kollektionen für Feuchträume. Diese Stoffe sind wasserabweisend behandelt und schimmelresistent, sodass sie der höheren Luftfeuchtigkeit in Badezimmern oder Küchen problemlos standhalten.",
      },
      {
        question: "Welche Systeme verdunkeln am besten?",
        answer: "Für eine effektive Abdunkelung im Schlafzimmer empfehlen wir Wabenplissees oder spezielle Verdunklungsrollos. Durch beschichtete Stoffe und optionale seitliche Führungsschienen wird der Lichteinfall fast vollständig minimiert.",
      },
      {
        question: "Kann man innenliegenden Sonnenschutz motorisieren?",
        answer: "Ja, das ist problemlos möglich. Mit modernen Antrieben, z. B. von Somfy, steuern Sie Rollos oder Jalousien bequem per Knopfdruck, App oder vollautomatisch über Ihr Smart Home – ganz ohne lästige Schnüre.",
      },
      {
        question: "Was ist der Unterschied zwischen Plissee und Wabenplissee?",
        answer: "Ein Plissee besteht aus einer gefalteten Stoffbahn, ein Wabenplissee aus zwei verbundenen Stoffbahnen, die eine isolierende Luftkammer bilden. Das Wabenplissee isoliert dadurch spürbar besser gegen Wärme und Kälte.",
      },
    ],
    icon: "innensonnenschutz",
    metaTitle: "Innenliegender Sonnenschutz Gütersloh | Westerwalbesloh",
    metaDescription:
      "Plissees, Wabenplissees, Rollos, Jalousien & Flächenvorhänge nach Maß in Gütersloh & OWL. Blend- und Sichtschutz vom Fachbetrieb. Jetzt Angebot anfragen!",
  },
  {
    slug: "sonnenschirme",
    highlights: [
      { value: "bis über 6 m", label: "Spannweite für große Flächen" },
      { value: "3 Bauarten", label: "Ampel-, Mittelstock- & Großschirm" },
      { value: "windstabil", label: "Großschirme auch für Gastronomie" },
      { value: "CARAVITA", label: "Premium-Qualität" },
    ],
    demo: "sonnenschirm",
    name: "Sonnenschirme",
    formLabel: "Sonnenschirm",
    shortDescription:
      "Flexible Beschattung für Terrasse und Garten – robust, stabil und ideal dort, wo keine Wandmontage möglich ist.",
    tagline: "Flexible Beschattung für Garten, Terrasse & Gewerbe",
    intro: [
      "Sonnenschirme bieten eine elegante, mobile und vielseitige Möglichkeit, Außenbereiche angenehm zu beschatten – unabhängig von Wänden oder Montagemöglichkeiten.",
      "Ob Terrasse, Balkon, Garten oder Gastronomie: Ein hochwertiger Sonnenschirm schafft sofort eine einladende Wohlfühlzone. Wir setzen dabei auf langlebige Systeme unseres Fachpartners CARAVITA.",
    ],
    heroImage: img("sonnenschirme", "hero-dachterrasse.jpg", "Großer Sonnenschirm über einer Lounge auf einer sonnigen Dachterrasse"),
    cardImage: img("sonnenschirme", "card-gartenterrasse.jpg", "Sonnenschirm über einem runden Tisch auf einer Gartenterrasse"),
    benefitsTitle: "Warum Sonnenschirme?",
    benefits: [
      { title: "Flexibel einsetzbar", text: "Egal ob kleine Stadtbalkone, weitläufige Gärten oder gewerbliche Außenflächen – Sonnenschirme passen sich jeder Umgebung an." },
      { title: "Große Formen- & Größenvielfalt", text: "Vom kompakten Modell für den Balkon bis zum XXL-Gastronomieschirm: runde, quadratische und rechteckige Lösungen in jeder Dimension." },
      { title: "Hohe Stabilität & Langlebigkeit", text: "Massive Masten, robuste Gestelle und wetterfeste Bespannungen trotzen Wind und Wetter über viele Jahre." },
      { title: "Einfache Handhabung", text: "Unsere Schirme lassen sich mühelos öffnen, drehen und neigen, damit der Schatten immer dort ist, wo Sie ihn brauchen." },
      { title: "Mobiler Sonnenschutz", text: "Die ideale Lösung überall dort, wo keine feste Wandmontage möglich ist. Verändern Sie Ihren Schattenplatz ganz nach Bedarf." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Unsere Sonnenschirm-Modelle",
        navLabel: "Modelle",
        title: "Für jeden Anspruch der passende Schatten",
        intro:
          "Entdecken Sie unsere Auswahl an flexiblen Ampelschirmen, robusten Klassikern und windstabilen Großschirmen.",
        items: [
          {
            title: "Ampelschirme",
            text: "Maximale Freiheit ohne störenden Mast in der Mitte. Der Schirm schwebt frei über Ihrer Sitzgruppe, lässt sich flexibel drehen und neigen und sorgt für großflächigen Schatten genau dort, wo Sie ihn brauchen.",
            image: img("sonnenschirme", "ampelschirm-garten.jpg", "Ampelschirm mit seitlichem Mast über einer Gartentafel"),
          },
          {
            title: "Mittelstockschirme",
            text: "Die bewährte Lösung für jeden Einsatzbereich. Extrem robust, kinderleicht zu bedienen und in zahlreichen Formen und Größen verfügbar – ideal für Balkone oder Gartentische mit Schirmloch.",
            image: img("sonnenschirme", "mittelstockschirm-caravita.jpg", "Zwei bordeauxrote Mittelstockschirme mit sichtbarem Mast auf einer Dachterrasse"),
          },
          {
            title: "Großschirme",
            text: "Die Profi-Lösung für Hotellerie, Gastronomie oder weitläufige Privatterrassen. Besonders windstabil konstruiert, decken sie riesige Flächen sicher ab, ohne an Eleganz zu verlieren.",
            image: img("sonnenschirme", "grossschirme-hotel.jpg", "Mehrere Großschirme auf der Terrasse eines Hotels"),
          },
        ],
      },
      {
        type: "variants",
        eyebrow: "Formen & Größen",
        navLabel: "Formen & Größen",
        title: "Maßarbeit statt Standardgröße",
        // Bilder: CARAVITA (caravita.de) – Nutzungsrecht vor Go-live klären.
        items: [
          {
            title: "Vielfältige Formen",
            text: "Klassisch rund, quadratisch oder rechteckig.",
            image: img("sonnenschirme", "formen/quadratisch.jpg", "Gelber quadratischer Sonnenschirm vor einer weißen Villa mit Wasserbecken"),
            options: [
              { label: "Rund", image: img("sonnenschirme", "formen/rund.jpg", "Großer roter runder Schirm über Cafétischen auf einem Altstadtplatz") },
              { label: "Quadratisch", image: img("sonnenschirme", "formen/quadratisch.jpg", "Gelber quadratischer Sonnenschirm") },
            ],
          },
          {
            title: "Flexible Dimensionen",
            text: "Spannweiten von 2 m bis über 6 m.",
            image: img("sonnenschirme", "gastronomie-cafe.jpg", "Rote Sonnenschirme über dem Außenbereich eines Straßencafés"),
          },
          {
            title: "Individuelle Maßarbeit",
            text: "Sondergrößen exakt nach Anforderung.",
            image: img("sonnenschirme", "formen/massarbeit.jpg", "Luftbild: sechs große Schirme bilden zusammen eine große Schattenfläche"),
          },
        ],
      },
      {
        type: "variants",
        eyebrow: "Stoffe für sonnige Jahre",
        navLabel: "Bespannung",
        title: "Bespannung & Design",
        intro:
          "Die Bespannung entscheidet, wie gut Ihr Schirm schützt und wie lange er schön aussieht. CARAVITA verwendet für seine Schirme Markisenstoffe aus Acryl: Die Fasern werden schon beim Spinnen durchgefärbt, das Gewebe ist reißfest und imprägniert.",
        // Fakten laut caravita.de/farben-stoffe und caravita.de/so-entsteht-ihr-sonnenschirm (Stand 21.11.2026).
        items: [
          {
            title: "Hoher UV-Schutz für sicheren Aufenthalt",
            text: "Das Schirmtuch schützt vor UV-Strahlung und Wärme – je nach Stoffdessin bis UPF 50+. Den Wert Ihres Wunschstoffs zeigen wir Ihnen bei der Stoffauswahl.",
            image: img("sonnenschirme", "stoffe/uv-schutz.jpg", "Helles Schirmtuch mit Strebe von unten im Gegenlicht"),
          },
          {
            title: "Lichtechte Stoffe mit langer Farbbrillanz",
            text: "Weil die Acrylfasern durchgefärbt sind, bleiben die Farben lange kräftig. CARAVITA gibt für seine Acrylstoffe eine hohe Farb- und Wetterechtheit an. Das Tuch lässt sich später auch gegen eine andere Farbe tauschen.",
            image: img("sonnenschirme", "stoffe/farbbrillanz.jpg", "Mehrere große helle Sonnenschirme über einer Hotelterrasse"),
          },
          {
            title: "Wasserabweisend, schmutzresistent und wetterfest",
            text: "Eine Schutzimprägnierung lässt Wasser und Schmutz abperlen. Für Regen gibt es Stoffe mit zusätzlicher Beschichtung (Acryl All Weather).",
            image: img("sonnenschirme", "stoffe/wasserabweisend.png", "Wassertropfen perlen auf einem grau-beigen Schirmtuch ab"),
          },
        ],
        swatches: {
          title: "Eine kleine Auswahl aus der Stoffkollektion",
          text: "Unifarben, Melangen und Strukturen – die Zeichen auf den Mustern zeigen den UV-Schutz und ob der Stoff zusätzlich gegen Regen beschichtet ist. Alle Muster bringen wir zur Beratung mit.",
          items: [
            "M_5800_a.jpg", "M_5301_a-2.jpg", "M_7610_a.jpg", "M_7600_a.jpg", "M_6670_a.jpg", "M_6550_a.jpg", "M_5315_a.jpg", "M_7952_a.jpg",
            "M_5330_a.jpg", "M_5334_a.jpg", "M_5322_a.jpg", "M_2808_a.jpg", "M_4040_a-1.jpg", "M_4042_a-1.jpg", "M_4045_a.jpg", "M_4050_a.jpg",
          ].map((file) => img("sonnenschirme", `stoffe/muster/${file}`, "Stoffmuster für Sonnenschirm-Bespannung von CARAVITA")),
        },
      },
      {
        type: "variants",
        eyebrow: "Bedienung & Komfort",
        navLabel: "Bedienung",
        title: "Technik, die mitdenkt",
        items: [
          {
            title: "Leichtgängige Kurbelmechanik",
            text: "Müheloses Aufspannen und Schließen dank hochwertiger Getriebe-Technik.",
            image: { ...img("sonnenschirme", "technik/kurbel.png", "Kurbel am Mast eines Sonnenschirms"), position: "object-contain! bg-white p-2" },
          },
          {
            title: "Optionaler Elektro-Antrieb",
            text: "Maximaler Komfort per Knopfdruck – besonders bei Großschirmen empfohlen.",
            image: img("sonnenschirme", "technik/elektro.jpg", "Funkfernbedienung für einen Großschirm mit Elektroantrieb auf einem gedeckten Tisch"),
          },
          {
            title: "Praktische Teleskopmechanik",
            text: "Der Schirm schließt oberhalb von Tischen – kein Möbelrücken notwendig.",
            image: img("sonnenschirme", "technik/schirm-ueber-tisch.jpg", "Bordeauxroter Sonnenschirm über einem langen Holztisch auf einer Terrasse"),
          },
          {
            title: "Flexible Befestigung",
            text: "Wahlweise mit mobilem Schirmständer, fester Bodenhülse oder – beim Ampelschirm – mit Wandhalterung.",
            image: img("sonnenschirme", "technik/sockelplatten.jpg", "Sonnenschirme auf Sockelplatten auf einer Dachterrasse"),
            options: [
              { label: "Bodenhülse", image: { ...img("sonnenschirme", "technik/bodenhuelse.jpg", "Schnittgrafik einer einbetonierten Bodenhülse für einen Sonnenschirm"), position: "object-contain! bg-white" } },
              { label: "Schirmständer", image: { ...img("sonnenschirme", "technik/schirmstaender.jpg", "Schirmständer mit Stahlplatte"), position: "object-contain! bg-white p-2" } },
              { label: "Wandmontage (Ampelschirm)", image: img("sonnenschirme", "technik/wandhalterung.jpg", "Verschraubte Wandhalterung mit eingesetztem Mast eines Ampelschirms") },
            ],
          },
        ],
      },
    ],
    manufacturersTitle: "Unser Fachpartner",
    manufacturers: [
      {
        name: "CARAVITA – Premium-Qualität",
        text: "Wir setzen auf CARAVITA, den Premiumhersteller für besonders robuste und hochwertige Sonnenschirme. Die Marke steht für maximale Stabilität und langlebige Materialien – die ideale Wahl, wenn Sie einen Schattenplatz suchen, der auch Wind und Wetter standhält.",
        logo: { src: "/images/partner/caravita.png", width: 1025, height: 167 },
      },
    ],
    projectPhotos: [
      { ...img("sonnenschirme", "projekt-1.jpg", "Großschirme über den Sitzbereichen im Außenbereich des Campus der Universität Bielefeld"), wide: true, caption: "Universität Bielefeld, Campus" },
    ],
    faqTitle: "Häufige Fragen zu Sonnenschirmen",
    faq: [
      {
        question: "Sind Sonnenschirme windstabil?",
        answer: "Ja, unsere Premium-Modelle von CARAVITA sind extrem robust konstruiert. Die tatsächliche Windstabilität hängt jedoch stark von der Befestigung ab: Eine fest einbetonierte Bodenhülse bietet deutlich mehr Sicherheit als ein mobiler Ständer. Wir beraten Sie gerne zur sichersten Lösung für Ihren Standort.",
      },
      {
        question: "Welche Schirmgröße ist die richtige?",
        answer: "Das hängt von der Größe Ihrer Terrasse und der gewünschten Nutzung ab. Für einen Balkon reichen oft 2 bis 3 Meter, für große Esstische oder Gastrobereiche sind Modelle mit bis zu 6 Metern Spannweite sinnvoll. Wir helfen Ihnen, das perfekte Maß zu ermitteln.",
      },
      {
        question: "Kann man Schirme nachträglich ausstatten?",
        answer: "Ja, viele unserer Modelle sind modular. Zubehör wie integrierte LED-Beleuchtung, Heizstrahler oder alternative Befestigungssysteme lässt sich oft problemlos nachrüsten.",
      },
    ],
    icon: "sonnenschirm",
    metaTitle: "Sonnenschirme Gütersloh | Maßarbeit | Westerwalbesloh",
    metaDescription:
      "Zu viel Sonne im Garten? Unsere stabilen Sonnenschirme in Gütersloh & OWL bieten perfekten Schutz für Terrasse & Gastro. Jetzt Angebot anfordern!",
  },
  {
    slug: "steuerung-antriebe",
    highlights: [
      { value: "Somfy Expert", label: "zertifizierter Fachbetrieb" },
      { value: "App & Sprache", label: "auch mit Alexa und Google" },
      { value: "Sonne · Wind · Regen", label: "Sensoren steuern automatisch" },
      { value: "nachrüstbar", label: "auch für bestehende Anlagen" },
    ],
    demo: "smarthome",
    name: "Steuerungen & Antriebe",
    formLabel: "Steuerungen",
    shortDescription:
      "Komfortable Bedienung per Schalter, Funk oder App – mit moderner Motor- und Smart-Home-Technik von Somfy & WAREMA.",
    tagline: "Komfort, Sicherheit und Smart Home für Ihren Sonnenschutz",
    intro: [
      "Moderne Sonnenschutzanlagen machen den Alltag komfortabler, sicherer und energieeffizienter. Mit elektrischen Antrieben und intelligenten Steuerungen bedienen Sie Rollläden, Raffstore und Markisen bequem per Knopfdruck, Funk oder App.",
      "Wir setzen dabei hauptsächlich auf Somfy – den europäischen Marktführer für Smart-Home- und Antriebstechnik. Zusätzlich unterstützen wir WAREMA RTS, ideal für Bestandsanlagen oder kabellose Nachrüstungen.",
    ],
    heroImage: img("steuerung-antriebe", "hero-tablet.jpg", "Frau steuert die Raffstores im Wohnzimmer bequem per Tablet"),
    cardImage: img("steuerung-antriebe", "card-somfy-set.jpg", "Somfy-Handsender, Rohrmotor und Smartphone mit Steuerungs-App"),
    benefitsTitle: "Warum motorisieren?",
    benefits: [
      { title: "Komfort auf Knopfdruck", text: "Verabschieden Sie sich vom Kurbeln: Bewegen Sie Rollläden, Raffstore oder Markisen ganz bequem per Wandschalter, Handsender oder App." },
      { title: "Mehr Sicherheit", text: "Intelligente Zeitprogramme und Anwesenheitssimulationen lassen Ihr Zuhause bewohnt wirken, auch wenn Sie im Urlaub sind." },
      { title: "Energieeffizienz verbessern", text: "Sensoren reagieren automatisch auf Wetteränderungen. Das reduziert die Hitze im Sommer und nutzt im Winter die Dämmwirkung der Rollläden optimal." },
      { title: "Längere Lebensdauer", text: "Der Motorantrieb bewegt den Behang gleichmäßig und sanft. Das schont Material und Mechanik deutlich besser als die ruckartige manuelle Bedienung." },
      { title: "Ideal für große Fenster", text: "Die perfekte Lösung für schwere Behänge oder schwer erreichbare Fenster, an denen Gurtwickler oder Kurbelstangen stören würden." },
    ],
    sections: [
      {
        type: "variants",
        eyebrow: "Unsere Steuerungssysteme",
        navLabel: "Systeme",
        title: "Vom Wandschalter bis zur Automatik",
        intro:
          "Entdecken Sie die Vielfalt moderner Antriebstechnik – vom klassischen Wandschalter bis zur vollautomatischen Smart-Home-Lösung.",
        items: [
          {
            title: "Wandschalter",
            text: "Die klassische Lösung wird fest verkabelt und einfach per Wandschalter bedient. Diese Variante ist besonders robust, kostengünstig und ideal für den Neubau geeignet.",
            image: img("steuerung-antriebe", "wandschalter.jpg", "Wandschalter zur Steuerung von Rollläden"),
          },
          {
            title: "Funk-Steuerung",
            text: "Bedienen Sie Ihren Sonnenschutz bequem per Handsender, ganz ohne zum Schalter zu laufen. Die Installation ist sauber und erfordert deutlich weniger Verkabelungsaufwand.",
            // Bilder: Somfy (shop.somfy.de) – Nutzungsrecht vor Go-live klären.
            image: { ...img("steuerung-antriebe", "somfy-situo-5.jpg", "Somfy Funkhandsender Situo 5 io mit Holzoptik"), position: "object-contain! bg-white p-4" },
          },
          {
            title: "Smart Home & App",
            text: "Steuern Sie Ihre Anlagen per Smartphone oder Sprachbefehl – egal, wo Sie gerade sind. Erstellen Sie eigene Szenarien, die Ihren Alltag spürbar komfortabler und sicherer machen.",
            image: img("steuerung-antriebe", "tahoma-wohnzimmer.jpg", "Somfy TaHoma switch im Wohnzimmer, im Hintergrund bedient eine Person die App auf dem Smartphone"),
            options: [
              { label: "TaHoma-App", image: { ...img("steuerung-antriebe", "tahoma-app.jpg", "Somfy TaHoma switch neben einem Smartphone mit der TaHoma-App"), position: "object-contain! bg-white" } },
              { label: "Sprachsteuerung", image: { ...img("steuerung-antriebe", "sprachsteuerung.jpg", "Somfy TaHoma switch mit den Hinweisen „works with Alexa“, „Hey Google“ und „Apple HomeKit“"), position: "object-contain! bg-white" } },
            ],
          },
          {
            title: "Sensoren & Automatik",
            text: "Sonnensensor, Windwächter, Regen- und Helligkeitssensor regeln Ihren Schutz vollautomatisch nach Wetterlage. So fahren Markisen bei Sturm sicher ein oder beschatten bei Sonne ganz von selbst.",
            image: img("steuerung-antriebe", "sensoren.jpg", "Wind- und Sonnensensor an einer Markise"),
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Smart Home mit Somfy TaHoma",
        navLabel: "Smart Home",
        title: "Die Zentrale für Ihren Sonnenschutz",
        intro:
          "Steuern Sie alle Systeme bequem per App – ganz entspannt vom Sofa oder von unterwegs.",
        items: [
          "Bequem per Smartphone, Tablet oder auf Zuruf via Alexa und Google steuern",
          "Automatische Abläufe für „Morgens“, „Hitzeschutz“ oder den Urlaub erstellen",
          "Sonnenschutz, Licht, Heizung und Kameras zentral in einem System verbinden",
          "Funktioniert nahtlos mit Somfy-Antrieben und WAREMA-Produkten",
          "Das System wächst mit – ideal für Neubau und Modernisierung",
        ],
        image: img("steuerung-antriebe", "tahoma.jpg", "Smartphone steuert den Sonnenschutz über die Somfy-TaHoma-Box"),
      },
    ],
    manufacturersTitle: "Unsere Fachpartner",
    manufacturers: [
      {
        name: "Somfy",
        text: "Als Marktführer für intelligente Antriebs- und Funktechnik steht Somfy für höchste Zuverlässigkeit. Wir setzen auf diese zukunftssichere Technologie, weil sie eine intuitive Bedienung mit modernstem Smart-Home-Komfort verbindet.",
        logo: { src: "/images/zertifikate/somfy-expert.png", width: 386, height: 242 },
      },
      {
        name: "WAREMA RTS",
        text: "Die bewährte Funklösung speziell für WAREMA-Sonnenschutzanlagen. Diese Technik eignet sich hervorragend für die kabellose Modernisierung von Bestandsbauten, da sie sich unkompliziert und ohne große Umbaumaßnahmen integrieren lässt.",
        logo: { src: "/images/partner/warema.png", width: 1025, height: 650 },
      },
    ],
    projectPhotos: [],
    faqTitle: "Häufige Fragen zu Antrieben & Smart Home",
    faq: [
      {
        question: "Kann ich meine Rollläden nachträglich motorisieren?",
        answer: "In den allermeisten Fällen ist das problemlos machbar. Wir ersetzen den manuellen Gurtwickler oder die Kurbel einfach durch einen leistungsstarken Rohrmotor. Das erhöht den Komfort sofort und lässt sich meist ohne großen baulichen Aufwand realisieren.",
      },
      {
        question: "Kann mein bestehendes WAREMA-System weiter genutzt werden?",
        answer: "Ja, besonders wenn Sie bereits Anlagen mit WAREMA RTS-Funktechnik nutzen. Diese lassen sich hervorragend in neue Steuerungskonzepte integrieren oder erweitern, sodass Sie oft nicht die komplette Technik austauschen müssen.",
      },
      {
        question: "Wie sicher ist die Funksteuerung?",
        answer: "Sehr sicher. Moderne Funksysteme von Somfy und WAREMA arbeiten mit verschlüsselten Signalen, die nicht einfach kopiert werden können. Zudem sind die Frequenzen sehr störungsresistent, was eine zuverlässige Ausführung Ihrer Befehle garantiert.",
      },
      {
        question: "Brauche ich WLAN für die App-Steuerung?",
        answer: "Für die Bedienung per Handsender oder Wandschalter nicht. Wenn Sie jedoch die Somfy TaHoma-Box nutzen möchten, um Ihre Anlagen per App (auch von unterwegs) oder Sprachbefehl zu steuern, ist eine Verbindung zu Ihrem Internet-Router erforderlich.",
      },
      {
        question: "Was passiert bei Stromausfall?",
        answer: "Motorisierte Anlagen bleiben bei Stromausfall zunächst in ihrer aktuellen Position. Viele Antriebe lassen sich zusätzlich mit einer Notbedienung ausstatten – wir beraten Sie zu den Möglichkeiten für Ihre Anlage.",
      },
    ],
    icon: "steuerung",
    metaTitle: "Steuerung & Antriebe Gütersloh | Smart Home | Westerwalbesloh",
    metaDescription:
      "Lästiges Kurbeln? Wir automatisieren Ihren Sonnenschutz in Gütersloh & OWL mit smarten Antrieben & Steuerungen. Jetzt bequem nachrüsten & anfragen!",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
