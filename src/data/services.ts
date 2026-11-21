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
      src: "/images/leistungen/beratung-aufmass-montage/karte.jpg",
      alt: "Westerwalbesloh-Monteur mit Akkuschrauber bei der Montage auf einem Balkon",
    },
    introTitle: "Beratung vor Ort – durchdacht und praxisorientiert",
    intro: [
      "Wir starten jedes Projekt mit einer Beratung direkt bei Ihnen. Dabei prüfen wir die baulichen Gegebenheiten, die Einbausituation und die technischen Möglichkeiten. Ziel ist es, genau die Lösung zu finden, die funktional, langlebig und für Ihr Gebäude geeignet ist.",
      "Wir erklären, was technisch machbar ist, welche Varianten sinnvoll sind und worauf es bei Ihrer Anlage ankommt – verständlich, ohne Fachbegriffe zu überladen und ohne Verkaufsdruck.",
    ],
    introPoints: [
      "Beratung direkt bei Ihnen vor Ort",
      "Prüfung von Bausituation und Einbaumöglichkeiten",
      "Ehrliche Empfehlung: funktional, langlebig, passend zum Gebäude",
      "Verständlich erklärt – ohne Fachchinesisch und ohne Verkaufsdruck",
    ],
    // Platzhalter (Unsplash-Lizenz, Foto: bds) – später durch ein eigenes Beratungsfoto ersetzen.
    introImage: {
      src: "/images/leistungen/beratung-aufmass-montage/beratung-stoffauswahl.jpg",
      alt: "Zwei Personen wählen gemeinsam Stoffmuster aus",
    },
    sections: [
      {
        type: "cards",
        eyebrow: "Präzision im Detail",
        title: "Exaktes Aufmaß – die Basis für Perfektion",
        intro:
          "Wir erfassen millimetergenau alle baulichen Gegebenheiten direkt bei Ihnen vor Ort, damit Ihre neue Anlage später reibungslos montiert werden kann und optisch perfekt passt.",
        items: [
          { illustration: "einbautiefe", title: "Einbautiefen prüfen", text: "Wir ermitteln die exakten Tiefen und stabilsten Punkte für eine sichere Montage." },
          { illustration: "leitungswege", title: "Leitungswege planen", text: "Wir definieren die optimale Kabelführung für eine sichere Steuerung." },
          { illustration: "platzbedarf", title: "Platzbedarf klären", text: "Wir messen den Raum für Kästen und Schienen aus, um eine ideale Optik zu garantieren." },
          { illustration: "bausubstanz", title: "Bausubstanz prüfen", text: "Wir prüfen die Beschaffenheit der Wände, um die passenden Befestigungsmittel zu wählen." },
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
          src: "/images/leistungen/beratung-aufmass-montage/montage-buerogebaeude.jpg",
          alt: "Westerwalbesloh-Monteur auf der Leiter bei der Montage an der Fensterfront einer Schule",
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
    cardImage: {
      src: "/images/leistungen/reparatur-modernisierung/karte.jpg",
      alt: "Westerwalbesloh-Monteur auf der Leiter bei der Reparatur einer Gelenkarmmarkise",
    },
    introTitle: "Wir holen das Maximum aus Ihrer Anlage",
    intro: [
      "Bevor wir Ihnen eine neue Anlage empfehlen, prüfen wir immer zuerst, ob sich eine Reparatur lohnt.",
    ],
    introHighlights: [
      { icon: "scale", title: "Erst prüfen, dann entscheiden", text: "Eine Reparatur geht vor, wenn sie wirtschaftlich sinnvoll ist." },
      { icon: "award", title: "Alle Hersteller", text: "Wir reparieren auch Anlagen, die nicht von uns stammen." },
      { icon: "shield", title: "Mit passenden Ersatzteilen", text: "Solange Teile erhältlich sind und sich der Einbau lohnt." },
      { icon: "diamond", title: "Neu nur in Qualität", text: "Muss erneuert werden, verbauen wir Produkte unserer Fachpartner." },
    ],
    // Bilder: eigene Fotos (Drive-Ordner „Webseite“) sowie Herstellerbilder (WAREMA, SELVE, heroal, Somfy, GEIGER) – Nutzungsrecht vor Go-live klären.
    sections: [
      {
        type: "variants",
        eyebrow: "Schnelle Hilfe vom Profi",
        title: "Fachgerechte Raffstore-Reparaturen",
        intro:
          "Wir beheben alle typischen Defekte Ihrer Raffstore und beraten Sie dabei jederzeit ehrlich über die Wirtschaftlichkeit jeder einzelnen Instandsetzung.",
        items: [
          { title: "Motoren-Austausch", text: "Ein defekter Antrieb lässt sich oft direkt vor Ort tauschen. Meist bauen wir den Raffstore aber aus und erledigen den Tausch in unserer eigenen Halle: Dort hängen wir den Behang an einem Galgen auf und können Motor, Welle und Endlagen in Ruhe und präzise einstellen. Danach montieren wir die Anlage wieder und prüfen den Lauf.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-motor.png", alt: "Raffstore-Antrieb von GEIGER mit Montageclips und Stecker", position: "object-contain! bg-white p-4" } },
          { title: "Textband-Wechsel", text: "Verschlissene oder gerissene Textbänder und Leiterkordeln tauschen wir in unserer Halle. Am Galgen hängt der Behang gerade, so werden die neuen Bänder exakt gleich lang eingestellt und die Lamellen schließen später sauber. Sie bekommen den Raffstore einbaufertig zurück.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-textband.webp", alt: "Unteres Ende eines Raffstores mit Aufzugsband, Leiterkordel und Unterschiene" } },
          { title: "Mechanik-Service", text: "Aufhängungen, Führungsschienen und Endschienen setzen wir in der Regel direkt bei Ihnen vor Ort instand. Wir richten verbogene Teile, ersetzen Verschleißteile und sorgen dafür, dass der Behang wieder ruhig und leise in der Führung läuft.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-mechanik.webp", alt: "Führungsschiene zwischen zwei geschlossenen Raffstore-Behängen an einer weißen Fassade" } },
          { title: "Lauf-Optimierung", text: "Hängt der Behang schief oder stehen einzelne Lamellen schräg, prüfen wir zuerst vor Ort, was sich direkt nachjustieren lässt. Oft hat sich aber ein Textband ungleich gelängt. Dann tauschen wir die Bänder in unserer Halle, damit das Paket wieder gerade hochfährt.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-lamellen-leiterkordel.jpg", alt: "Raffstore-Lamellen mit Leiterkordel an einer Holzfassade, von Westerwalbesloh betreut" } },
          { title: "Endlagen-Check", text: "Fährt der Raffstore nicht mehr ganz hoch oder nicht mehr ganz herunter, stellen wir die Endlagen des Motors direkt vor Ort neu ein. So schließt der Behang sauber, das Paket wird oben nicht gequetscht und Motor und Bänder werden geschont.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-endlagen.png", alt: "Raffstore-Antrieb von GEIGER mit elektronischer Endabschaltung und Steckeranschluss", position: "object-contain! bg-white p-4" } },
          { title: "Programmierung & Neueinstellung", text: "Manchmal verliert ein Motor seine Einstellungen, ein Handsender fällt aus oder das Smart-Home-System muss neu eingerichtet werden. Wir lernen Motoren und Sender neu ein, ersetzen defekte Handsender, stellen Endlagen und Zwischenpositionen ein und richten Zeitpläne und Szenarien in Ihrer Steuerung wieder ein.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-programmierung.webp", alt: "Funk-Wandsender von WAREMA an einer Natursteinwand neben einem Fenster mit Außenjalousie" } },
        ],
      },
      {
        type: "variants",
        eyebrow: "Werterhalt & Funktion",
        title: "Rollladen: Reparatur & Modernisierung",
        intro:
          "Wir bringen Ihre Rollläden wieder in Topform. Ob klassischer Reparaturservice oder modernes Upgrade – wir sorgen für eine einwandfreie Funktion und langlebige Ergebnisse an Ihrem Haus.",
        items: [
          { title: "Gurt & Wickler", text: "Wir tauschen Gurte und Wickler fachgerecht aus und erneuern Lager für einen leichten Lauf.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-gurt.jpg", alt: "Hände ziehen am Rollladengurt neben einem halb geschlossenen Rollladen" } },
          { title: "Wellen & Technik", text: "Wir reparieren Wellen und Aufhängungen, damit Ihr Panzer wieder absolut sicher und stabil hängt.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-welle.jpg", alt: "Geöffneter Rollladenkasten mit Welle über einer Terrassentür während einer Reparatur" } },
          { title: "Stab-Service", text: "Wir beheben Schäden an Stäben oder tauschen den Panzer aus – für optimale Optik und Schutz.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-stab.jpg", alt: "Aluminium-Rollladenstab mit Schaumfüllung im Querschnitt" } },
          { title: "Störungs-Hilfe", text: "Wir lösen klemmende Rollläden schnell und sicher, beheben die Störung und prüfen die Technik.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-stoerung.jpg", alt: "Rollläden während eines Reparatureinsatzes, darüber der geöffnete Kasten" } },
          { title: "Modernisierung", text: "Oft lohnt sich ein Upgrade statt einer reinen Reparatur: Wir rüsten auf Motorantrieb um, bauen elektrische Gurtwickler ein oder integrieren moderne Funksteuerungen wie Somfy io.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-modernisierung.webp", alt: "Funk-Wandschalter neben einem Fenster mit Rollladen" } },
        ],
      },
      {
        type: "variants",
        eyebrow: "Nachhaltig & Modern",
        title: "Markisen: Tuchtausch & Technik",
        intro:
          "Eine hochwertige Markise muss nicht ersetzt werden, nur weil der Stoff alt oder die Technik defekt ist. Wir machen Ihre Anlage mit neuem Glanz und smarter Steuerung wieder fit für die Zukunft.",
        items: [
          { title: "Tuchtausch", text: "Wir bespannen Ihr vorhandenes Gestell mit neuen, modernen Stoffen für eine frische Optik und besten UV-Schutz.", image: { src: "/images/produkte/markisen/projekt-3.jpg", alt: "Neu bespannte Gelenkarmmarkise in Orange über einer Gartenterrasse" } },
          { title: "Gelenkarm-Service", text: "Wir ersetzen verschlissene Gelenkarme fachgerecht, damit Ihre Anlage wieder stabil und sicher ausfährt.", image: { src: "/images/leistungen/reparatur-modernisierung/markise-gelenkarm-service.jpg", alt: "Gelenkarme einer Markise während eines Service-Einsatzes, darunter die Leiter des Monteurs" } },
          { title: "Antrieb & Mechanik", text: "Wir tauschen defekte Motoren aus oder reparieren die Kurbelmechanik für eine mühelose und präzise Bedienung.", image: { src: "/images/leistungen/reparatur-modernisierung/markise-antrieb.webp", alt: "Kassettenmarkise von unten mit Kurbelgetriebe und eingehängter Kurbel" } },
          { title: "Smart-Home-Upgrade", text: "Wir rüsten Funktechnik sowie Windsensoren nach, damit Ihre Markise bei Sturm vollautomatisch einfährt.", image: { src: "/images/leistungen/reparatur-modernisierung/markise-windsensor.webp", alt: "Windsensor am Ausfallprofil einer Markise" } },
        ],
      },
      {
        type: "variants",
        eyebrow: "Unsere Stärke",
        title: "Steuerungstechnik: nachrüsten, tauschen, vernetzen",
        intro:
          "Funk und Steuerung sind unser Spezialgebiet. Ob ein defekter Handsender, ein neuer Wandtaster oder das komplette Smart Home: Wir bringen auch ältere Anlagen auf den aktuellen Stand – ohne dass der ganze Sonnenschutz erneuert werden muss.",
        items: [
          { title: "Handsender & Taster tauschen", text: "Ihr Handsender ist kaputt oder verloren? Wir ersetzen Handsender und Wandtaster und programmieren alles neu auf Ihre Anlage ein.", image: { src: "/images/leistungen/reparatur-modernisierung/steuerung-handsender.jpg", alt: "Weißer Somfy Funkhandsender Situo 5 Variation io Pure", position: "object-contain! bg-white p-4" } },
          { title: "Funk nachrüsten", text: "Aus Schalter oder Gurt wird Funk: Wir rüsten Antriebe und Funkempfänger nach und erweitern bestehende Funksysteme um weitere Anlagen.", image: { src: "/images/leistungen/reparatur-modernisierung/steuerung-funk-nachruesten.webp", alt: "Funk-Wandsender an einer Natursteinwand neben einem Fenster mit Außenjalousie" } },
          { title: "Smart Home mit TaHoma", text: "Sie haben bereits Somfy-Funk? Dann verbinden wir Ihre Anlagen mit einer TaHoma – auch ältere RTS-Systeme. Danach steuern Sie per App, Zeitplan oder Sprache.", image: { src: "/images/leistungen/reparatur-modernisierung/steuerung-tahoma.jpg", alt: "Somfy TaHoma switch im Wohnzimmer, im Hintergrund bedient eine Person die App auf dem Smartphone" } },
          { title: "Umrüstung auf io", text: "Auf Wunsch rüsten wir RTS-Anlagen auf das Funksystem io um. Der Vorteil: Die Anlage meldet zurück, ob ein Befehl angekommen ist.", image: { src: "/images/leistungen/reparatur-modernisierung/steuerung-io.jpg", alt: "Somfy TaHoma switch neben einem Smartphone mit der TaHoma-App", position: "object-contain! bg-white" } },
        ],
      },
      {
        type: "variants",
        title: "Weitere Reparatur-Services",
        intro:
          "Auch Insektenschutz und Innenbeschattung setzen wir wieder instand – für ein perfekt funktionierendes Zuhause.",
        items: [
          { title: "Insektenschutz", text: "Wir erneuern Gewebe und reparieren Scharniere sowie Rahmen für festen Schutz.", image: { src: "/images/produkte/insektentschutz/gewebe.jpg", alt: "Nahaufnahme eines Insektenschutzgewebes" } },
          { title: "Innenbeschattung", text: "Wir reparieren Ketten an Rollos und anderen kettengeführten Systemen und bringen Ihre Innenbeschattung wieder in Form.", image: { src: "/images/produkte/sonnenschutz/rollo-raum.jpg", alt: "Schlafzimmer mit gemustertem Rollo am Fenster" } },
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
    cardImage: {
      src: "/images/leistungen/wartung/karte.jpg",
      alt: "Westerwalbesloh-Monteur bei Wartungsarbeiten an einer Anlage auf einem Balkon",
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
          { icon: "shield", title: "Betriebssicherheit", text: "Minimieren Sie Risiken für Mitarbeitende und schützen Sie Ihr Gebäude." },
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
      src: "/images/leistungen/objektbau-projekte/hero-buerogebaeude.jpg",
      alt: "Schulgebäude in Schloß Holte-Stukenbrock mit Raffstores an allen Fensterbändern, davor der Firmenwagen von Westerwalbesloh",
    },
    cardImage: {
      src: "/images/leistungen/objektbau-projekte/karte.jpg",
      alt: "Schulgebäude mit Raffstores, davor der Firmenwagen von Westerwalbesloh",
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
          { icon: "compass", title: "Planung & Beratung", text: "Wir unterstützen Sie bei der Auswahl optimaler Systeme für Licht und Hitze." },
          { icon: "crank", title: "Montage", text: "Unser Team montiert Ihre Anlagen sicher, auch in großen Höhen oder Nischen." },
          { icon: "home", title: "Bestandspflege", text: "Wir übernehmen die Reparatur sowie die Modernisierung Ihrer bestehenden Anlagen." },
          { title: "Betriebssicherheit", text: "Wir bieten Sicherheit durch Wartung, Prüfung und Dokumentation im laufenden Betrieb." },
        ],
        image: {
          src: "/images/leistungen/objektbau-projekte/fullservice-montage.jpg",
          alt: "Westerwalbesloh-Monteur auf der Leiter bei der Raffstore-Montage an einer Schule",
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
          // Eigene Fotos aus dem Drive-Ordner „Webseite“ (21.11.2026). Orte/Kunden ergänzt Fabian später.
          {
            title: "Universität Bielefeld",
            text: "Großschirme für den Außenbereich des Campus – Schattenplätze für viele Menschen gleichzeitig.",
            image: { src: "/images/produkte/sonnenschirme/projekt-1.jpg", alt: "Großschirme über den Sitzbereichen im Außenbereich des Campus der Universität Bielefeld" },
          },
          {
            title: "Schule in Schloß Holte-Stukenbrock",
            text: "Außenliegender Sonnenschutz an den langen Fensterbändern eines dreigeschossigen Schulgebäudes.",
            image: { src: "/images/leistungen/objektbau-projekte/projekt-buerogebaeude.jpg", alt: "Dreigeschossiges Schulgebäude mit Raffstores an allen Fensterbändern" },
          },
          {
            title: "Gewerbe-Neubau",
            text: "Sonnenschutz-Montage an einem eingerüsteten Gewerbe-Neubau.",
            image: { src: "/images/leistungen/objektbau-projekte/projekt-gewerbeneubau.jpg", alt: "Eingerüsteter Gewerbe-Neubau, davor ein Monteur von Westerwalbesloh" },
          },
          {
            title: "Mehrfamilienhaus",
            text: "Sonnenschutz für einen Neubau mit mehreren Wohneinheiten, montiert während der Bauphase.",
            image: { src: "/images/leistungen/objektbau-projekte/projekt-mehrfamilienhaus.jpg", alt: "Mehrfamilienhaus im Bau mit Gerüst, davor der Firmenwagen von Westerwalbesloh" },
          },
          {
            title: "Montage in der Höhe",
            text: "Montage eines Raffstore-Behangs auf dem Laubengang eines mehrgeschossigen Gebäudes.",
            image: { src: "/images/leistungen/objektbau-projekte/projekt-montage-hoehe.jpg", alt: "Monteur von Westerwalbesloh mit einem Raffstore-Behang auf einem Laubengang in der Höhe" },
          },
          {
            title: "Raffstores im Erdgeschoss",
            text: "Heruntergefahrene Raffstores vor den bodentiefen Fenstern im Erdgeschoss der Schule in Schloß Holte-Stukenbrock.",
            image: { src: "/images/produkte/raffstore/projekt-buero-eg.jpg", alt: "Heruntergefahrener Raffstore im Erdgeschoss einer Schule" },
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
