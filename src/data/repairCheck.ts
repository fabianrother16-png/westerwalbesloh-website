import type { ProductFormLabel, ProductIconKey } from "@/types";

export type RepairSymptom = {
  label: string;
  /** What usually causes it, in plain words. */
  cause: string;
  /** Something safe the customer can check before calling. */
  tip?: string;
  /** Safety note where DIY would be dangerous. */
  warning?: string;
};

export type RepairArea = {
  key: string;
  label: string;
  icon: ProductIconKey;
  formLabel: ProductFormLabel;
  symptoms: RepairSymptom[];
};

const motorTip =
  "Sicherung prüfen. Nach vielen Fahrten hintereinander schaltet sich ein Motor zum Schutz vor Überhitzung ab – nach etwa 20 Minuten Pause läuft er meist wieder.";

export const repairAreas: RepairArea[] = [
  {
    key: "rollladen",
    label: "Rollladen",
    icon: "rollladen",
    formLabel: "Rollladen",
    symptoms: [
      {
        label: "Gurt gerissen oder ausgefranst",
        cause: "Der Gurt nutzt sich mit den Jahren ab. Wir tauschen Gurt und bei Bedarf den Gurtwickler – danach läuft der Rollladen wieder sauber.",
        tip: "Ist der Gurt nur ausgefranst, den Rollladen bis zur Reparatur möglichst wenig bewegen – so reißt er nicht ganz.",
      },
      {
        label: "Rollladen klemmt oder hängt schief",
        cause: "Oft hat sich ein Profil im Panzer verschoben oder eine Führungsschiene ist verschmutzt oder verbogen. Das lässt sich in vielen Fällen richten.",
        tip: "Nicht mit Kraft ziehen – sonst verbiegen sich weitere Profile.",
      },
      {
        label: "Motor brummt, aber nichts bewegt sich",
        cause: "Häufig ist der Panzer blockiert oder im Winter festgefroren, manchmal hat der Motor seine Endlage verloren.",
        tip: "Bei Frost warten, bis es taut, und den Schalter nicht dauernd drücken.",
      },
      { label: "Motor reagiert gar nicht", cause: "Mögliche Ursachen sind Stromversorgung, Schalter, Funkempfänger oder der Motor selbst. Wir finden den Fehler und tauschen nur, was nötig ist.", tip: motorTip },
      {
        label: "Profile beschädigt oder verblasst",
        cause: "Einzelne Profile lassen sich oft austauschen. Ist der ganze Panzer in die Jahre gekommen, lohnt sich ein neuer – auf Wunsch gleich mit Motor.",
      },
    ],
  },
  {
    key: "raffstore",
    label: "Raffstore",
    icon: "raffstore",
    formLabel: "Raffstore",
    symptoms: [
      {
        label: "Lamellen hängen schief",
        cause: "Meist ist ein Textband – die Leiterkordel, die die Lamellen trägt – gerissen oder hat sich verhakt. Wir tauschen es aus, danach hängen die Lamellen wieder gerade.",
        tip: "Die Anlage bis zur Reparatur nicht mehr bewegen, damit sich nichts weiter verhakt.",
      },
      {
        label: "Fährt nicht mehr ganz hoch oder runter",
        cause: "Die Endlagen des Motors haben sich verstellt. Wir stellen sie neu ein – häufig ganz ohne Teiletausch.",
      },
      { label: "Motor reagiert nicht", cause: "Mögliche Ursachen sind Stromversorgung, Schalter, Funkempfänger oder der Motor selbst. Wir finden den Fehler und tauschen nur, was nötig ist.", tip: motorTip },
      {
        label: "Klappert oder ist laut",
        cause: "Oft sind Führungsseile oder Schienen locker oder verschmutzt. Richtig eingestellt läuft die Anlage wieder leise.",
      },
    ],
  },
  {
    key: "markise",
    label: "Markise",
    icon: "markise",
    formLabel: "Markise",
    symptoms: [
      {
        label: "Tuch verblichen, eingerissen oder fleckig",
        cause: "Ein neues Tuch wirkt wie eine neue Markise: Das Gestell bleibt, nur der Stoff wird getauscht – in vielen Farben und Mustern.",
      },
      {
        label: "Markise hängt durch oder schließt nicht mehr",
        cause: "Häufig ist ein Gelenkarm ermüdet oder die Neigung hat sich verstellt. Wir justieren die Arme oder tauschen sie aus.",
        warning: "Gelenkarme stehen unter starker Federspannung – bitte nicht selbst öffnen oder lösen.",
      },
      { label: "Motor reagiert nicht", cause: "Mögliche Ursachen sind Stromversorgung, Schalter, Funkempfänger oder der Motor selbst. Wir finden den Fehler und tauschen nur, was nötig ist.", tip: motorTip },
      {
        label: "Fährt bei Wind nicht mehr ein",
        cause: "Dann arbeitet der Windwächter nicht richtig. Wir prüfen den Sensor, stellen ihn neu ein oder tauschen ihn aus.",
        tip: "Bis dahin die Markise bei Wind und über Nacht von Hand einfahren.",
      },
    ],
  },
  {
    key: "insektenschutz",
    label: "Insektenschutz",
    icon: "insektenschutz",
    formLabel: "Insektenschutz",
    symptoms: [
      {
        label: "Gewebe eingerissen oder ausgebeult",
        cause: "Der vorhandene Rahmen lässt sich meist neu bespannen – auf Wunsch auch mit Pollenschutz- oder Haustiergewebe.",
      },
      {
        label: "Rahmen klemmt oder schließt nicht",
        cause: "Oft sind Scharniere, Magnetverschluss oder Bürstendichtung abgenutzt. Wir tauschen die Teile oder richten den Rahmen neu aus.",
      },
    ],
  },
  {
    key: "innen",
    label: "Plissee & Rollo",
    icon: "innensonnenschutz",
    formLabel: "Innen-Sonnenschutz",
    symptoms: [
      { label: "Schnur gerissen", cause: "Die Spannschnüre eines Plissees lassen sich erneuern – der Stoff bleibt erhalten." },
      { label: "Stoff verschmutzt oder beschädigt", cause: "Häufig lässt sich nur der Stoff tauschen – eine gute Gelegenheit für eine neue Farbe." },
    ],
  },
  {
    key: "steuerung",
    label: "Steuerung",
    icon: "steuerung",
    formLabel: "Steuerungen",
    symptoms: [
      {
        label: "Handsender reagiert nicht",
        cause: "Oft ist nur die Batterie leer. Hilft das nicht, lernen wir den Sender neu an oder ersetzen ihn.",
        tip: "Batterie des Handsenders tauschen und es erneut versuchen.",
      },
      {
        label: "Zeitschaltuhr oder App schaltet nicht mehr",
        cause: "Nach einem Stromausfall oder Router-Wechsel müssen Uhrzeit, Zeitpläne oder die Verbindung neu eingerichtet werden.",
        tip: "Prüfen, ob Uhrzeit und WLAN-Verbindung der Steuerung stimmen.",
      },
      {
        label: "Alte Anlage soll smart werden",
        cause: "Viele bestehende Rollläden, Raffstores und Markisen lassen sich mit Funkmotoren und Somfy TaHoma nachrüsten – dann steuern Sie alles per App.",
      },
    ],
  },
];
