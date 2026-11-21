/**
 * Zusatzwissen für den Sonnenschutz-Berater (Chat).
 *
 * Alles, was auf der Website steht (Produkte, Leistungen, FAQ, Lexikon, Reparatur-Check), kennt der Berater schon
 * automatisch. Hier kommt nur hinein, was NICHT auf der Website steht, aber oft gefragt wird – z. B. Lieferzeiten,
 * Einsatzorte, Förderungen, Garantie, Zahlungsweise. Nur bestätigte Angaben eintragen; der Berater gibt sie wörtlich
 * als Auskunft des Betriebs weiter. Preise gehören nicht hierher (der Berater nennt grundsätzlich keine Preise).
 *
 * Beispiel:
 *   {
 *     question: "Wie lange dauert es von der Bestellung bis zur Montage?",
 *     answer: "In der Regel ... Wochen, je nach Hersteller und Saison.",
 *     keywords: ["Lieferzeit", "Wartezeit", "wie lange", "Montagetermin"],
 *   },
 */
export type ChatWissenEintrag = {
  question: string;
  answer: string;
  /** Zusätzliche Suchwörter für den Modus ohne KI (Antworten aus den häufigen Fragen). */
  keywords: string[];
  /** Optional: passende Seite, z. B. "/kontakt". */
  link?: { href: string; label: string };
};

export const chatWissen: ChatWissenEintrag[] = [];
