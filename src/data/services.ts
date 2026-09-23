import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "beratung-aufmass-montage",
    name: "Beratung, Aufmaß & Montage",
    shortDescription:
      "Technische Prüfung vor Ort, exaktes Aufmaß und fachgerechte Montage Ihrer Wunschanlage – präzise und sauber.",
    heroText:
      "Wir bieten eine technische Prüfung vor Ort, nehmen exaktes Aufmaß und sorgen für die fachgerechte Montage Ihrer Wunschanlage – präzise und sauber.",
    heroImage: {
      src: "/images/leistungen/beratung-aufmass-montage/hero.jpg",
      alt: "Glasfassade eines Neubaus mit Raffstoren, montiert von Westerwalbesloh",
    },
    // The hero photo also appears in the Objektbau project gallery, so the teaser card uses a montage photo.
    cardImage: {
      src: "/images/home/montage-garten.jpg",
      alt: "Zwei Westerwalbesloh-Monteure bei der Montage einer Markise im Garten",
    },
    introTitle: "Beratung vor Ort – durchdacht und praxisorientiert",
    intro: [
      "Wir starten jedes Projekt mit einer Beratung direkt bei Ihnen. Dabei prüfen wir die baulichen Gegebenheiten, die Einbausituation und die technischen Möglichkeiten. Ziel ist es, genau die Lösung zu finden, die funktional, langlebig und für Ihr Gebäude geeignet ist.",
      "Wir erklären, was technisch machbar ist, welche Varianten sinnvoll sind und worauf es bei Ihrer Anlage ankommt – verständlich, ohne Fachbegriffe zu überladen und ohne Verkaufsdruck.",
    ],
    sections: [
      {
        type: "cards",
        eyebrow: "Präzision im Detail",
        title: "Exaktes Aufmaß – die Basis für Perfektion",
        intro:
          "Wir erfassen millimetergenau alle baulichen Gegebenheiten direkt bei Ihnen vor Ort, damit Ihre neue Anlage später reibungslos montiert werden kann und optisch perfekt passt.",
        items: [
          { title: "Einbautiefen prüfen", text: "Wir ermitteln die exakten Tiefen und stabilsten Punkte für eine sichere Montage." },
          { title: "Leitungswege planen", text: "Wir definieren die optimale Kabelführung für eine sichere Steuerung." },
          { title: "Platzbedarf klären", text: "Wir messen den Raum für Kästen und Schienen aus, um eine ideale Optik zu garantieren." },
          { title: "Bausubstanz prüfen", text: "Wir prüfen die Beschaffenheit der Wände, um die passenden Befestigungsmittel zu wählen." },
        ],
      },
      {
        type: "cards",
        eyebrow: "Unser Qualitätsversprechen",
        title: "Montage – sauber, zuverlässig und fachgerecht",
        intro:
          "Unser eigenes Expertenteam sorgt für eine schlüsselfertige Installation Ihrer Anlage – präzise, ordentlich und direkt einsatzbereit.",
        items: [
          { title: "Montage & Ausrichtung", text: "Wir verankern Ihre Anlage sicher im passenden Untergrund und richten alle Komponenten für eine perfekte Funktion exakt aus." },
          { title: "Anschluss & Programmierung", text: "Unsere Techniker übernehmen den elektrischen Anschluss sowie die Programmierung von Motoren, Endlagen und Ihrer Funksteuerung." },
          { title: "Sicherheits-Check", text: "Wir führen eine umfassende Funktions- und Sicherheitsprüfung durch, um einen dauerhaft reibungslosen Betrieb zu garantieren." },
          { title: "Testlauf & Übergabe", text: "Nach einem gemeinsamen Testlauf erhalten Sie eine persönliche Einweisung, damit Sie Ihre neue Anlage sofort sicher bedienen können." },
        ],
        image: {
          src: "/images/projekte/montage-hochhaus.jpg",
          alt: "Westerwalbesloh-Monteur bei der Montage an einem mehrgeschossigen Gebäude",
        },
      },
    ],
    faqTitle: "Häufige Fragen zu Beratung & Montage",
    faq: [
      {
        question: "Ist die Erstberatung kostenlos?",
        answer: "Ja, das erste Beratungsgespräch inklusive technischer Einschätzung vor Ort ist für Sie unverbindlich und kostenlos.",
      },
      {
        question: "Wie lange dauert es von der Beratung bis zur Montage?",
        answer: "Das hängt vom gewählten Produkt und der Verfügbarkeit beim Hersteller ab. Im Beratungsgespräch geben wir Ihnen eine realistische Einschätzung des Zeitrahmens.",
      },
      {
        question: "Arbeiten Sie mit Subunternehmern?",
        answer: "Nein. Jede Anlage wird von unserem festangestellten Team montiert – so wissen Sie genau, wer bei Ihnen arbeitet, und wir stehen für die Qualität gerade.",
      },
    ],
    icon: "beratung",
    metaTitle: "Beratung, Aufmaß & Montage Gütersloh | Westerwalbesloh",
    metaDescription:
      "Angst vor Fehlkäufen? Wir garantieren exaktes Aufmaß und fachgerechte Montage Ihres Sonnenschutzes in Gütersloh & OWL. Sicher & sauber. Jetzt anfragen!",
  },
  {
    slug: "reparatur-modernisierung",
    name: "Reparatur & Modernisierung",
    shortDescription:
      "Wir beheben Defekte schnell oder rüsten moderne Technik nach – und reparieren, was sich lohnt.",
    heroText:
      "Wir beheben Defekte schnell oder rüsten modernere Technik nach. Unser ehrlicher Grundsatz: Wir reparieren, was sich lohnt, und erneuern, was Sinn macht.",
    heroImage: {
      src: "/images/leistungen/reparatur-modernisierung/hero.jpg",
      alt: "Firmenwagen von Westerwalbesloh mit Hubsteiger bei einem Reparatureinsatz",
    },
    introTitle: "Wir holen das Maximum aus Ihrer Anlage",
    intro: [
      "Bevor wir Ihnen eine komplett neue Anlage verkaufen, prüfen wir immer erst, ob eine wirtschaftlich sinnvolle Reparatur möglich ist. Grundsätzlich reparieren wir Anlagen aller Hersteller, solange die Ersatzteilbeschaffung möglich und vernünftig ist.",
      "Sollte eine Reparatur zu teuer oder technisch nicht mehr sinnvoll sein, verbauen wir ausschließlich hochwertige neue Produkte unserer Fachpartner.",
    ],
    sections: [
      {
        type: "cards",
        eyebrow: "Schnelle Hilfe vom Profi",
        title: "Fachgerechte Raffstore-Reparaturen",
        intro:
          "Wir beheben alle typischen Defekte Ihrer Raffstore und beraten Sie dabei jederzeit ehrlich über die Wirtschaftlichkeit jeder einzelnen Instandsetzung.",
        items: [
          { title: "Motoren-Austausch", text: "Wir ersetzen defekte Antriebe schnell durch hochwertige neue Motoren." },
          { title: "Textband-Wechsel", text: "Wir tauschen verschlissene Textbänder sowie Leiterkordeln präzise aus." },
          { title: "Mechanik-Service", text: "Wir setzen alle Aufhängungen sowie Führungsteile professionell instand." },
          { title: "Lauf-Optimierung", text: "Wir beheben schiefe Behang-Pakete oder hängende Lamellen unmittelbar." },
          { title: "Endlagen-Check", text: "Wir justieren die Motoren-Endlagen für einen sicheren und langlebigen Betrieb." },
        ],
        image: {
          src: "/images/leistungen/objektbau-projekte/detail.jpg",
          alt: "Reparatur von Raffstoren an einer Bürofassade per Hubsteiger",
        },
      },
      {
        type: "cards",
        eyebrow: "Werterhalt & Funktion",
        title: "Rollladen: Reparatur & Modernisierung",
        intro:
          "Wir bringen Ihre Rollläden wieder in Topform. Ob klassischer Reparaturservice oder modernes Upgrade – wir sorgen für eine einwandfreie Funktion und langlebige Ergebnisse an Ihrem Haus.",
        items: [
          { title: "Gurt & Wickler", text: "Wir tauschen Gurte und Wickler fachgerecht aus und erneuern Lager für einen leichten Lauf." },
          { title: "Wellen & Technik", text: "Wir reparieren Wellen und Aufhängungen, damit Ihr Panzer wieder absolut sicher und stabil hängt." },
          { title: "Stab-Service", text: "Wir beheben Schäden an Stäben oder tauschen den Panzer aus – für optimale Optik und Schutz." },
          { title: "Störungs-Hilfe", text: "Wir lösen klemmende Rollläden schnell und sicher, beheben die Störung und prüfen die Technik." },
          { title: "Modernisierung", text: "Oft lohnt sich ein Upgrade statt einer reinen Reparatur: Wir rüsten auf Motorantrieb um, bauen elektrische Gurtwickler ein oder integrieren moderne Funksteuerungen wie Somfy io." },
        ],
        image: {
          src: "/images/produkte/rollladen/projekt-1.jpg",
          alt: "Monteur von Westerwalbesloh bei der Rollladenreparatur an einem Wohnhaus",
        },
      },
      {
        type: "cards",
        eyebrow: "Nachhaltig & Modern",
        title: "Markisen: Tuchtausch & Technik",
        intro:
          "Eine hochwertige Markise muss nicht ersetzt werden, nur weil der Stoff alt oder die Technik defekt ist. Wir machen Ihre Anlage mit neuem Glanz und smarter Steuerung wieder fit für die Zukunft.",
        items: [
          { title: "Tuchtausch", text: "Wir bespannen Ihr vorhandenes Gestell mit neuen, modernen Stoffen für eine frische Optik und besten UV-Schutz." },
          { title: "Gelenkarm-Service", text: "Wir ersetzen verschlissene Gelenkarme fachgerecht, damit Ihre Anlage wieder stabil und sicher ausfährt." },
          { title: "Antrieb & Mechanik", text: "Wir tauschen defekte Motoren aus oder reparieren die Kurbelmechanik für eine mühelose und präzise Bedienung." },
          { title: "Smart-Home-Upgrade", text: "Wir rüsten Funktechnik sowie Windsensoren nach, damit Ihre Markise bei Sturm vollautomatisch einfährt." },
        ],
        image: {
          src: "/images/produkte/markisen/projekt-3.jpg",
          alt: "Neu bespannte Gelenkarmmarkise in Orange über einer Gartenterrasse",
        },
      },
      {
        type: "cards",
        title: "Weitere Reparatur-Services",
        intro:
          "Von Insektengittern bis zur smarten Steuerung: Wir kümmern uns um die Instandsetzung all Ihrer Systeme für ein perfekt funktionierendes Zuhause.",
        items: [
          { title: "Insektenschutz", text: "Wir erneuern Gewebe und reparieren Scharniere sowie Rahmen für festen Schutz." },
          { title: "Innenbeschattung", text: "Wir reparieren Schnurzüge sowie Ketten und bringen Ihre Rollos wieder in Form." },
          { title: "Steuerungstechnik", text: "Wir tauschen Handsender oder Taster und programmieren Ihre gesamte Funktechnik." },
        ],
      },
      {
        type: "cards",
        eyebrow: "Ehrliche Beratung",
        title: "Entscheidungshilfe: Reparieren oder erneuern?",
        intro:
          "Unser Versprechen an Sie ist Transparenz: Wir reparieren, was sich wirklich lohnt, und erneuern nur das, was technisch oder wirtschaftlich keinen Sinn mehr macht.",
        items: [
          { title: "Defekt-Analyse", text: "Wir klären präzise, welches Bauteil defekt ist und warum es hakt." },
          { title: "Lösungs-Optionen", text: "Wir zeigen alle Wege auf, von der Reparatur bis hin zum Neukauf." },
          { title: "Haltbarkeits-Check", text: "Wir schätzen ehrlich ein, wie lange eine Reparatur sicher hält." },
          { title: "Wirtschaftlichkeit", text: "Wir berechnen genau, ab wann eine Neuanlage die klügere Wahl ist." },
        ],
      },
    ],
    faqTitle: "Häufige Fragen zu Reparatur & Modernisierung",
    faq: [
      {
        question: "Lohnt sich eine Reparatur oder sollte ich modernisieren?",
        answer: "Das hängt vom Alter und Zustand Ihrer Anlage ab. Wir schauen uns das Problem vor Ort an und sagen Ihnen ehrlich, welche Option für Sie wirtschaftlich sinnvoller ist.",
      },
      {
        question: "Reparieren Sie auch Anlagen anderer Hersteller?",
        answer: "Ja. Grundsätzlich reparieren wir Anlagen aller Hersteller, solange die Ersatzteilbeschaffung möglich und vernünftig ist – auch wenn die Anlage nicht von uns montiert wurde.",
      },
      {
        question: "Wie schnell kann eine Reparatur erfolgen?",
        answer: "Bei vielen gängigen Defekten – etwa einem gerissenen Gurt oder einem defekten Motor – können wir kurzfristig einen Termin anbieten. Rufen Sie uns einfach an.",
      },
    ],
    icon: "reparatur",
    metaTitle: "Sonnenschutz & Rollladen Reparatur Gütersloh | Westerwalbesloh",
    metaDescription:
      "Markise defekt oder Rollladen klemmt? Wir reparieren Ihren Sonnenschutz in Gütersloh & OWL – schnell, sauber & fachgerecht. Jetzt Reparatur-Termin anfragen!",
  },
  {
    slug: "wartung",
    name: "Wartung (gewerblich & öffentlich)",
    shortDescription:
      "Wartung, Sicherheitsprüfung und Dokumentation der Betreiberpflichten – exklusiv für Gewerbe und öffentliche Träger.",
    heroText:
      "Exklusiv für Gewerbe und öffentliche Träger: Wir übernehmen Wartung, Sicherheitsprüfung und die lückenlose Dokumentation Ihrer Betreiberpflichten.",
    heroImage: {
      src: "/images/leistungen/wartung/hero.jpg",
      alt: "Monteur von Westerwalbesloh bei der Wartung einer Sonnenschutzanlage",
    },
    introTitle: "Gewerbliche Wartung & Betreiberpflichten",
    intro: [
      "Als Betreiber technischer Anlagen unterliegen Sie bestimmten Prüfpflichten. Wir unterstützen Sie dabei, diese rechtssicher und effizient zu erfüllen.",
      "Zu unseren langjährigen Referenzkunden zählen unter anderem Arvato (Rolltorwartung inkl. Abnahme) sowie der Kreis Gütersloh (Wartung von Schulen und öffentlichen Liegenschaften).",
    ],
    sections: [
      {
        type: "cards",
        eyebrow: "Professionelle Wartung",
        title: "Fokus auf Gewerbe, Industrie & öffentliche Träger",
        intro:
          "Wir sichern die Betriebssicherheit Ihrer professionellen Sonnenschutzanlagen durch gezielte Wartung für Gewerbe und Kommunen – ein Privatkunden-Service wird nicht angeboten.",
        items: [
          { title: "Büro & Verwaltung", text: "Wir sichern Ihre Bürogebäude und sorgen für dauerhafte Betriebsbereitschaft." },
          { title: "Industrie & Logistik", text: "Wir warten Ihre Industriehallen für maximale Sicherheit und lange Haltbarkeit." },
          { title: "Bildung & Erziehung", text: "Wir prüfen Kitas und Schulen und garantieren einen sicheren Anlagenbetrieb." },
          { title: "Öffentliche Objekte", text: "Wir betreuen kommunale Objekte und erfüllen alle gesetzlichen Wartungsnormen." },
        ],
      },
      {
        type: "cards",
        eyebrow: "Wartungs-Details",
        title: "Umfassender Leistungsumfang",
        intro:
          "Wir prüfen Ihre Anlagen auf Herz und Nieren, um maximale Sicherheit und eine lange Lebensdauer im professionellen Einsatz zu garantieren.",
        items: [
          { title: "Funktionsprüfung", text: "Wir prüfen alle mechanischen und elektrischen Bauteile auf volle Funktion." },
          { title: "Sicherheits-Check", text: "Wir testen sicherheitsrelevante Bauteile wie Absturzsicherungen im Detail." },
          { title: "Technik-Prüfung", text: "Wir kontrollieren alle Endlagen, Motoren und Steuerungen." },
          { title: "Substanz-Check", text: "Wir führen eine Sichtprüfung aller Befestigungen und Trageelemente durch." },
          { title: "Präventions-Plan", text: "Wir erkennen Verschleiß frühzeitig, bevor teure Ausfälle im Betrieb entstehen." },
          { title: "Dokumentation", text: "Wir erstellen eine lückenlose Dokumentation Ihrer Anlage." },
        ],
        image: {
          src: "/images/projekte/firmenwagen-objekt.jpg",
          alt: "Firmenwagen und Hubsteiger von Westerwalbesloh bei einem Wartungseinsatz",
        },
      },
      {
        type: "cards",
        eyebrow: "Wartungsverträge",
        title: "Ihre Vorteile durch einen Wartungsvertrag",
        intro:
          "Sicherheit mit Planbarkeit: Auf Wunsch erstellen wir individuelle Wartungsverträge, die exakt auf die Intervalle und Anforderungen Ihrer Gebäude zugeschnitten sind.",
        items: [
          { title: "Betriebssicherheit", text: "Minimieren Sie Risiken für Mitarbeitende und schützen Sie Ihr Gebäude." },
          { title: "Weniger Ausfälle", text: "Beheben Sie Defekte, bevor Ihre Anlagen ungeplant stillstehen." },
          { title: "Planbare Kosten", text: "Nutzen Sie ein festes Budget und vermeiden Sie so teure Notfalleinsätze." },
          { title: "Rechtssichere Nachweise", text: "Erhalten Sie alle Dokumente für Berufsgenossenschaft und Versicherung." },
          { title: "Fester Partner", text: "Wir kennen Ihre Technik genau und sind als fester Partner immer für Sie da." },
        ],
      },
    ],
    faqTitle: "Häufige Fragen zur Wartung",
    faq: [
      {
        question: "Für wen ist ein Wartungsvertrag sinnvoll?",
        answer: "Für Unternehmen, Verwaltungen, Schulen und andere Betreiber größerer Anlagen, die ihren Betreiberpflichten nachkommen und Ausfälle vermeiden möchten.",
      },
      {
        question: "Was beinhaltet die Dokumentation?",
        answer: "Sie erhalten eine nachvollziehbare Dokumentation der durchgeführten Prüfungen und Wartungsarbeiten als Nachweis gegenüber Berufsgenossenschaft und Versicherung.",
      },
      {
        question: "Warten Sie auch Anlagen von Privatkunden?",
        answer: "Unser Wartungsservice richtet sich ausschließlich an Gewerbe und öffentliche Träger. Privatkunden helfen wir gerne mit Reparaturen und Modernisierungen weiter.",
      },
    ],
    icon: "wartung",
    metaTitle: "Sonnenschutz Wartung Gütersloh & OWL | Westerwalbesloh",
    metaDescription:
      "Wartung für Gewerbe & öffentliche Träger in Gütersloh & OWL: Sicherheitsprüfung, Dokumentation der Betreiberpflichten & Wartungsverträge. Jetzt Termin anfragen!",
  },
  {
    slug: "objektbau-projekte",
    name: "Projekte für Unternehmen & öffentliche Einrichtungen",
    shortDescription:
      "Skalierbare Großanlagen und komplexe Sonnenschutzlösungen für Industrie, Verwaltung und Schulen.",
    heroText:
      "Ob Industrie, Verwaltung oder Schule: Wir planen und realisieren skalierbare Großanlagen sowie komplexe Sonnenschutzlösungen für den Objektbereich.",
    heroImage: {
      src: "/images/leistungen/objektbau-projekte/hero.jpg",
      alt: "Großschirme über den Außensitzplätzen eines Firmencampus",
    },
    introTitle: "Sonnenschutzlösungen im großen Maßstab",
    intro: [
      "Große Gebäude stellen besondere Anforderungen an Technik und Logistik. Wir sind Ihr erfahrener Partner für den Objektbau – vom ersten Beratungsgespräch bis zur Wartung im laufenden Betrieb.",
      "Wir verstehen die Abläufe auf Großbaustellen und wissen, worauf es bei öffentlichen Ausschreibungen und gewerblichen Investitionen ankommt. Bereits in den 1980er-Jahren gewann unser Betrieb namhafte Kunden wie Miele, Claas und Bertelsmann.",
    ],
    sections: [
      {
        type: "cards",
        title: "Unsere Einsatzbereiche",
        intro:
          "Wir realisieren Sonnenschutzprojekte jeder Größenordnung für anspruchsvolle Auftraggeber aus dem öffentlichen und gewerblichen Sektor.",
        items: [
          { title: "Bildung", text: "Wir statten Schulen, Kitas sowie Universitäten mit moderner Technik aus." },
          { title: "Verwaltung", text: "Wir betreuen Rathäuser und Behörden mit funktionalen, langlebigen Lösungen." },
          { title: "Business", text: "Wir optimieren Bürogebäude für ein angenehmes Arbeitsklima." },
          { title: "Industrie", text: "Wir sichern Hallenbauten sowie Produktionsstätten mit robuster Technik." },
        ],
      },
      {
        type: "cards",
        eyebrow: "Alles aus einer Hand",
        title: "Full-Service für Ihr Projekt",
        intro: "Wir entlasten Planer und Architekten durch ein durchdachtes Gesamtpaket für gewerbliche Projekte.",
        items: [
          { title: "Planung & Beratung", text: "Wir unterstützen Sie bei der Auswahl optimaler Systeme für Licht und Hitze." },
          { title: "Montage", text: "Unser Team montiert Ihre Anlagen sicher, auch in großen Höhen oder Nischen." },
          { title: "Bestandspflege", text: "Wir übernehmen die Reparatur sowie die Modernisierung Ihrer bestehenden Anlagen." },
          { title: "Betriebssicherheit", text: "Wir bieten Sicherheit durch Wartung, Prüfung und Dokumentation im laufenden Betrieb." },
        ],
        image: {
          src: "/images/leistungen/objektbau-projekte/fassade.jpg",
          alt: "Raffstore an der Glasfassade eines Verwaltungsgebäudes",
        },
      },
      {
        type: "variants",
        eyebrow: "Aus unseren Projekten",
        title: "Objektbau in Gütersloh und OWL",
        items: [
          {
            title: "Neubau mit Raffstoren",
            text: "Außenliegender Sonnenschutz an allen Fensterbändern eines zweigeschossigen Neubaus.",
            image: { src: "/images/leistungen/objektbau-projekte/neubau.jpg", alt: "Neubau mit Raffstoren an allen Fensterbändern" },
          },
          {
            title: "Textiler Screen an der Fassade",
            text: "Montage eines großflächigen Screens als Blend- und Hitzeschutz an einem Gewerbeobjekt.",
            image: { src: "/images/leistungen/objektbau-projekte/screen-montage.jpg", alt: "Frisch montierter textiler Screen an einem Gewerbegebäude" },
          },
          {
            title: "Beschattung für den Handel",
            text: "Gelenkarmmarkisen über den Schaufenstern eines Ladengeschäfts – funktional und einladend.",
            image: { src: "/images/leistungen/objektbau-projekte/gallery-schenke.jpg", alt: "Markisen über den Schaufenstern eines Ladengeschäfts" },
          },
        ],
      },
    ],
    closing: {
      title: "Verlässlichkeit zählt",
      text: "Im Projektgeschäft sind Zeitpläne und Budgets entscheidend. Wir arbeiten zuverlässig, termingerecht und mit klaren Abläufen. Diese Planungssicherheit ist der Grund, warum uns viele öffentliche und gewerbliche Auftraggeber – wie der Kreis Gütersloh – seit Jahren vertrauen.",
    },
    faqTitle: "Häufige Fragen zu Objektprojekten",
    faq: [
      {
        question: "Übernehmen Sie auch Ausschreibungen für öffentliche Auftraggeber?",
        answer: "Ja, wir erstellen Angebote für Ausschreibungen öffentlicher Einrichtungen und begleiten das Projekt von der Planung bis zur Wartung.",
      },
      {
        question: "Welche Referenzen können Sie vorweisen?",
        answer: "Zu unseren langjährigen Referenzkunden zählen unter anderem Arvato und der Kreis Gütersloh; bereits in den 1980er-Jahren gewannen wir namhafte Kunden wie Miele, Claas und Bertelsmann. Sprechen Sie uns gerne auf konkrete Referenzen für Ihr Vorhaben an.",
      },
    ],
    icon: "objektbau",
    metaTitle: "Sonnenschutz & Objektbau Gütersloh | Westerwalbesloh",
    metaDescription:
      "Großprojekt geplant? Wir realisieren professionellen Sonnenschutz für Gewerbe & Objektbau in Gütersloh & OWL. Fachgerechte Planung. Jetzt anfragen!",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
