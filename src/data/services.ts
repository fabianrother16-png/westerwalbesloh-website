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
    // Kachel zeigt das Beratungsfoto (Unsplash, Platzhalter bis zum eigenen Beratungsfoto) – Fabian: Montagefoto passt nicht zu Beratung & Aufmaß.
    cardImage: {
      src: "/images/leistungen/beratung-aufmass-montage/beratung-stoffauswahl.jpg",
      alt: "Zwei Personen wählen gemeinsam Stoffmuster für Sonnenschutz aus",
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
      {
        question: "Kann ich Raffstore oder Rollläden auch nachträglich an meinem Haus anbringen lassen?",
        answer: "In vielen Fällen ja. Ob und in welcher Ausführung das geht, hängt von Sturz, Laibung, Fassade und dem Platz für Kasten und Führungsschienen ab. Das prüfen wir beim Termin vor Ort und zeigen Ihnen danach die Varianten, die zu Ihrem Gebäude passen.",
      },
      {
        question: "Brauche ich am Fenster einen Stromanschluss für einen elektrischen Antrieb?",
        answer: "Ein Motorantrieb braucht Strom, deshalb planen wir die Leitungswege schon beim Aufmaß mit ein. Eine Ausnahme ist der VELUX Solar-Rollladen für Dachfenster: Die Solarzelle sitzt im Kasten, ein Stromkabel ist nicht nötig. Bedient wird er per Funk mit Wandschalter oder Handsender.",
      },
      {
        question: "Kann ich die Funksteuerung gleich mit planen lassen?",
        answer: "Ja, das ist sogar sinnvoll. Wir arbeiten mit Somfy io und TaHoma sowie mit dem WAREMA-Funksystem WMS, auf Wunsch mit Wind- und Sonnensensoren. Bei Somfy io bestätigt die Anlage, dass ein Befehl angekommen ist, und meldet ihre Position zurück.",
      },
      {
        question: "Muss ich während der Montage zu Hause sein?",
        answer: "Den Termin stimmen wir vorher mit Ihnen ab. Spätestens zum Schluss sollten Sie oder eine Vertretung vor Ort sein. Dann machen wir gemeinsam einen Testlauf und zeigen Ihnen, wie Sie die Anlage bedienen.",
      },
    ],
    icon: "beratung",
    metaTitle: "Beratung, Aufmaß & Montage Gütersloh | Westerwalbesloh",
    metaDescription:
      "Kostenlose Beratung vor Ort, exaktes Aufmaß und saubere Montage durch unser eigenes Team – für Sonnenschutz in Gütersloh, Bielefeld und ganz OWL.",
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
      // Foto: Tobias Kaiser, Unsplash – Fabian wollte in der Kachel einen defekten, aber nicht zerstörten Rollladen.
      src: "/images/leistungen/reparatur-modernisierung/rollladen-halb.jpg",
      alt: "Älterer Rollladen, der auf halber Höhe hängen geblieben ist",
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
          { title: "Endlagen-Check", text: "Fährt der Raffstore nicht mehr ganz hoch oder nicht mehr ganz herunter, stellen wir die Endlagen des Motors direkt vor Ort neu ein. So schließt der Behang sauber, das Paket wird oben nicht gequetscht und Motor und Bänder werden geschont.", image: { src: "/images/leistungen/reparatur-modernisierung/raffstore-endlage.jpg", alt: "Großer Raffstore, ganz heruntergefahren in der unteren Endlage vor einer Fensterfront" } },
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
          { title: "Wellen & Technik", text: "Wir reparieren Wellen und Aufhängungen, damit Ihr Panzer wieder absolut sicher und stabil hängt.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-stoerung.jpg", alt: "Rollläden während eines Reparatureinsatzes, darüber der geöffnete Kasten mit Welle" } },
          { title: "Stab-Service", text: "Wir beheben Schäden an Stäben oder tauschen den Panzer aus – für optimale Optik und Schutz.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-stab.jpg", alt: "Aluminium-Rollladenstab mit Schaumfüllung im Querschnitt" } },
          { title: "Störungs-Hilfe", text: "Wir lösen klemmende Rollläden schnell und sicher, beheben die Störung und prüfen die Technik.", image: { src: "/images/leistungen/reparatur-modernisierung/rollladen-halb.jpg", alt: "Älterer Rollladen, der auf halber Höhe hängen geblieben ist" /* Foto: Tobias Kaiser, Unsplash */ } },
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
          { title: "Antrieb & Mechanik", text: "Wir tauschen defekte Motoren aus oder reparieren die Kurbelmechanik für eine mühelose und präzise Bedienung.", image: { src: "/images/leistungen/reparatur-modernisierung/markise-antriebe-lager.jpg", alt: "Regal mit Rohrmotoren für Markisen und Rollläden, mit Anschlusskabeln" /* Bild: WAREMA (warema.com) */ } },
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
          { title: "Smart Home und Umrüstung auf io", text: "Mit einer Somfy TaHoma steuern Sie Ihre Anlagen per App, Zeitplan oder Sprache, auch ältere RTS-Systeme binden wir ein. Auf Wunsch rüsten wir RTS-Anlagen auf io um: Dann meldet die Anlage zurück, ob ein Befehl angekommen ist, und die App zeigt die aktuelle Position.", image: { src: "/images/leistungen/reparatur-modernisierung/steuerung-tahoma.jpg", alt: "Somfy TaHoma switch im Wohnzimmer, im Hintergrund bedient eine Person die App auf dem Smartphone" } },
        ],
      },
      {
        type: "variants",
        title: "Weitere Reparatur-Services",
        intro:
          "Auch Insektenschutz und Innenbeschattung setzen wir wieder instand – für ein perfekt funktionierendes Zuhause.",
        items: [
          { title: "Insektenschutz", text: "Wir erneuern Gewebe und reparieren Scharniere sowie Rahmen für festen Schutz.", image: { src: "/images/produkte/insektentschutz/gewebe-rahmen.jpg", alt: "Insektenschutzrahmen am Fenster, die feine Gaze ist deutlich zu erkennen" }, options: [{ label: "Riss im Gewebe", image: { src: "/images/leistungen/reparatur-modernisierung/insektenschutz-loch.jpg", alt: "Insektenschutzgewebe mit einem Riss, der repariert werden muss" /* Foto: maks_d, Unsplash */ } }] },
          { title: "Innenbeschattung", text: "Wir reparieren Ketten an Rollos und anderen kettengeführten Systemen und bringen Ihre Innenbeschattung wieder in Form.", image: { src: "/images/produkte/sonnenschutz/rollo-raum.jpg", alt: "Schlafzimmer mit gemustertem Rollo am Fenster" }, options: [{ label: "Kugelkette erneuern", image: { src: "/images/leistungen/reparatur-modernisierung/kugelkette.jpg", alt: "Metall-Kugelkette, wie sie zur Bedienung von Rollos verwendet wird" /* Foto: Praveen kumar Mathivanan, Unsplash */ } }] },
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
      {
        question: "Muss mein Raffstore für die Reparatur abgebaut werden?",
        answer: "Das hängt vom Defekt ab. Endlagen und Mechanik richten wir meist direkt bei Ihnen. Für einen Motortausch oder neue Textbänder bauen wir den Raffstore in der Regel aus und arbeiten in unserer Halle am Galgen. Dort hängt der Behang gerade, und wir können alles genau einstellen.",
      },
      {
        question: "Mein Rollladen reagiert nicht mehr auf den Handsender. Was kann ich selbst prüfen?",
        answer: "Wechseln Sie zuerst die Batterie im Handsender. Lässt sich die Anlage über einen Wandtaster oder die App noch bedienen, liegt der Fehler meist am Handsender. Hilft das nicht, kommen wir vorbei, lernen Motor und Sender neu ein oder ersetzen den Handsender.",
      },
      {
        question: "Kann ich meine alte Somfy-RTS-Anlage zusammen mit neuen io-Produkten steuern?",
        answer: "Ja. Eine TaHoma steuert RTS- und io-Produkte gemeinsam in einer App. Der Unterschied liegt in der Rückmeldung: io-Antriebe bestätigen den Befehl und melden ihre Position, RTS-Antriebe führen ihn nur aus.",
      },
      {
        question: "Kann man einen Rollladen mit Gurt auf Motor umrüsten?",
        answer: "In vielen Fällen ja, ohne den ganzen Rollladen zu erneuern. Wir bauen entweder einen Motor in die Welle ein oder setzen einen elektrischen Gurtwickler. Auf Wunsch bekommt die Anlage gleich eine Funksteuerung, zum Beispiel Somfy io. Was bei Ihnen passt, sehen wir vor Ort.",
      },
    ],
    icon: "reparatur",
    metaTitle: "Rollladen & Markise Reparatur Gütersloh | Westerwalbesloh",
    metaDescription:
      "Rollladen klemmt, Markise defekt, Motor ausgefallen? Wir reparieren Rollläden, Raffstores und Markisen und rüsten Funk nach – in Gütersloh, Bielefeld und OWL.",
  },
  {
    slug: "wartung",
    name: "Wartung für gewerbliche und öffentliche Gebäude",
    shortDescription:
      "Wartung, Sicherheitsprüfung und Dokumentation der Betreiberpflichten – exklusiv für Gewerbe und öffentliche Träger.",
    heroText:
      "Exklusiv für Gewerbe und öffentliche Träger: Wir übernehmen Wartung, Sicherheitsprüfung und die lückenlose Dokumentation Ihrer Betreiberpflichten.",
    heroImage: {
      src: "/images/leistungen/wartung/hero.jpg",
      alt: "Monteur von Westerwalbesloh bei der Wartung einer Sonnenschutzanlage",
    },
    cardImage: {
      src: "/images/leistungen/wartung/karte-vertrag.jpg", // Foto: Amina Atar, Unsplash
      alt: "Handschlag über einem unterschriebenen Wartungsvertrag am Schreibtisch",
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
      {
        question: "Wie oft sollten Sonnenschutzanlagen gewartet werden?",
        answer: "Das hängt von den Vorgaben des Herstellers, der Nutzung und der Lage des Gebäudes ab. Eine stark genutzte Anlage an einer Schule braucht andere Abstände als ein ruhiges Verwaltungsgebäude. Die passenden Intervalle legen wir gemeinsam mit Ihnen im Wartungsvertrag fest.",
      },
      {
        question: "Prüfen Sie bei der Wartung auch Wind- und Wettersensoren?",
        answer: "Ja, Steuerungen gehören zur Technik-Prüfung, und dazu zählen auch die Sensoren. Wind- und Wetterstationen sorgen dafür, dass Markisen und Raffstore bei starkem Wind in eine sichere Position fahren. Fällt ein Sensor unbemerkt aus, fehlt dieser Schutz. Deshalb prüfen wir, ob er richtig auslöst.",
      },
      {
        question: "Was passiert, wenn bei der Wartung ein Mangel gefunden wird?",
        answer: "Wir halten den Mangel in der Dokumentation fest und besprechen mit Ihnen, was zu tun ist. Kleinere Einstellarbeiten können wir oft gleich erledigen. Für größere Reparaturen bekommen Sie vorab ein Angebot, und nach Ihrer Freigabe setzt unser eigenes Team die Anlage instand.",
      },
    ],
    icon: "wartung",
    metaTitle: "Sonnenschutz Wartung Gütersloh & OWL | Westerwalbesloh",
    metaDescription:
      "Wartung von Sonnenschutz für Gewerbe, Schulen und öffentliche Gebäude: Prüfung, Instandsetzung und Dokumentation in Gütersloh, Bielefeld und OWL.",
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
            title: "Schulneubau mit Raffstoren",
            text: "Außenliegender Sonnenschutz an allen Fensterbändern eines zweigeschossigen Schulneubaus.",
            image: { src: "/images/leistungen/objektbau-projekte/neubau.jpg", alt: "Zweigeschossiger Schulneubau mit Raffstoren an allen Fensterbändern" },
          },
          {
            title: "Textilscreen an einer Sporthalle",
            text: "Montage eines großflächigen Textilscreens als Blend- und Hitzeschutz an der Fassade einer Sporthalle.",
            image: { src: "/images/leistungen/objektbau-projekte/screen-montage.jpg", alt: "Frisch montierter Textilscreen an der Fassade einer Sporthalle" },
          },
          {
            title: "Schenke im Bahnhof, Gütersloh",
            text: "Neue Tücher für die Markisen über den Fenstern der Schenke im Bahnhof am Hauptbahnhof Gütersloh.",
            image: { src: "/images/leistungen/objektbau-projekte/gallery-schenke.jpg", alt: "Neu bezogene Markisen an der Schenke im Bahnhof am Hauptbahnhof Gütersloh" },
          },
          // Eigene Fotos aus dem Drive-Ordner „Webseite“ (21.11.2026), Orte laut Fabian.
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
            title: "Reparatur für eine Hausverwaltung",
            text: "Einen defekten Raffstore haben wir ausgebaut, repariert und wieder eingebaut. Das Bild zeigt den Einbau auf dem Laubengang des mehrgeschossigen Gebäudes.",
            image: { src: "/images/leistungen/objektbau-projekte/projekt-montage-hoehe.jpg", alt: "Monteur von Westerwalbesloh mit einem Raffstore-Behang auf einem Laubengang in der Höhe" },
          },
          // Querformat-Foto zuletzt: die siebte Kachel läuft über die ganze Breite.
          {
            title: "Universität Bielefeld",
            text: "Großschirme für den Außenbereich des Campus – Schattenplätze für viele Menschen gleichzeitig.",
            image: { src: "/images/produkte/sonnenschirme/projekt-1.jpg", alt: "Großschirme über den Sitzbereichen im Außenbereich des Campus der Universität Bielefeld" },
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
      {
        question: "Unterstützen Sie Architekten und Planer schon in der Planungsphase?",
        answer: "Ja. Wir beraten bei der Auswahl der Systeme für Blend- und Hitzeschutz, klären die Einbausituation und stimmen Leitungswege und Steuerung mit ab. So lassen sich spätere Änderungen auf der Baustelle möglichst vermeiden.",
      },
      {
        question: "Lässt sich der Sonnenschutz eines ganzen Gebäudes zentral steuern?",
        answer: "Ja, zum Beispiel mit dem WAREMA-Funksystem WMS. Eine einzige Wetterstation auf dem Dach kann ihre Messwerte über WMS Splitter an mehrere Funknetze im Gebäude weitergeben, etwa an verschiedene Wohnungen oder Nutzer. Mit der App WMS WebControl pro lassen sich Anlagen gemeinsam oder nach Räumen bedienen und nach Sonne, Wind und anderen Wetterwerten automatisch steuern.",
      },
      {
        question: "Können Sie auch an hohen Fassaden und schwer zugänglichen Stellen montieren?",
        answer: "Ja. Unser eigenes Montageteam arbeitet bei Bedarf mit Hubsteiger und montiert auch in großen Höhen, auf Laubengängen oder in Nischen. Wie wir am besten an die Fassade kommen, klären wir vorab beim Termin vor Ort.",
      },
      {
        question: "Welche Sonnenschutzlösungen bieten Sie für Objekte an?",
        answer: "Im Objektbau setzen wir vor allem Raffstore, Textilscreens, Markisen und Rollläden ein. Für Außenbereiche mit vielen Menschen, etwa auf einem Campus, liefern wir Großschirme von CARAVITA. Welche Lösung passt, hängt von Fassade, Nutzung und Steuerung ab.",
      },
    ],
    icon: "objektbau",
    metaTitle: "Sonnenschutz & Objektbau Gütersloh | Westerwalbesloh",
    metaDescription:
      "Sonnenschutz für Schulen, Büros und Gewerbebauten: Raffstore, Textilscreens und Markisen, geplant und montiert vom eigenen Team in Gütersloh, Bielefeld und OWL.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
