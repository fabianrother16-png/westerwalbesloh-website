import { company } from "@/data/company";
import { glossary } from "@/data/glossary";
import { products } from "@/data/products";
import { repairAreas } from "@/data/repairCheck";
import { services } from "@/data/services";

/**
 * Answers chat questions from the website's own FAQ, glossary and product texts when the AI model is not available
 * (no API key configured or the API is down). Simple keyword matching - good enough for the typical questions.
 */

type Entry = {
  question: string;
  answer: string;
  /** Extra search words, e.g. the product name. */
  keywords: string[];
  link?: { href: string; label: string };
};

const STOPWORDS = new Set(
  "aber alle alles als also am an auch auf aus bei bin bis bitte da dann das dass dem den der des die dies diese diesem dieser doch du ein eine einem einen einer eines er es etwas euch euer fur gibt gerne gut habe haben habt hat hier ich ihm ihn ihnen ihr ihre ihrem ihren im in ist ja jetzt kann kannst konnen konnte macht machen man mehr mein meine meinem meinen meiner mich mir mit mochte mochten muss mussen nach nicht noch nur ob oder ohne schon sehr sein sich sie sind so soll sollte sowie uber um und uns unser unsere unter viel vom von vor war ware was weil welche welcher welches wenn wer werden wie wieso wird wir wo wollen wurde zu zum zur hallo hi guten tag abend morgen danke frage fragen gerade eigentlich".split(
    " "
  )
);

// Umlauts are folded to the plain vowel so that "Rollläden" and "Rollladen" meet.
function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss");
}

/** Very small German stemmer: "gereinigt", "reinige" and "reinigen" all become "reinig". */
function stem(word: string) {
  let result = word.length > 6 && word.startsWith("ge") ? word.slice(2) : word;
  for (const suffix of ["ungen", "ung", "en", "er", "es", "et", "st", "e", "n", "s", "t"]) {
    if (result.endsWith(suffix) && result.length - suffix.length >= 4) {
      result = result.slice(0, -suffix.length);
      break;
    }
  }
  return result;
}

function tokens(text: string) {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word));
}

// German plurals and compounds: "Rollläden" should find "Rollladen", "Markisentuch" should find "Markise".
// Whole-word matches count fully, matches on a part of a compound word only partly.
function similarity(a: string, b: string) {
  if (a === b) return 1;
  if (stem(a) === stem(b)) return 1;
  const [short, long] = a.length <= b.length ? [a, b] : [b, a];
  if (short.length >= 4 && long.includes(stem(short))) return 0.6;
  return 0;
}

const contactLine = `Für ein unverbindliches Angebot oder eine Beratung vor Ort: /kontakt oder Tel. ${company.phoneDisplay}.`;

function buildEntries(): Entry[] {
  const entries: Entry[] = [];

  for (const product of products) {
    const link = { href: `/produkte/${product.slug}`, label: product.name };
    entries.push({
      question: `Was ist ${product.name}? Was bietet ihr bei ${product.name}?`,
      answer: `${product.shortDescription} ${product.intro[0] ?? ""}`.trim(),
      keywords: [product.name, product.slug, product.formLabel],
      link,
    });
    for (const item of product.faq) entries.push({ question: item.question, answer: item.answer, keywords: [product.name], link });
    for (const section of product.sections) {
      if (section.type === "checklist") {
        entries.push({ question: section.title, answer: [section.intro, section.items.join(", ")].filter(Boolean).join(" "), keywords: [product.name, section.eyebrow ?? ""], link });
      } else {
        for (const item of section.items) {
          entries.push({ question: item.title, answer: item.text, keywords: [product.name, section.eyebrow ?? "", section.title], link });
        }
      }
    }
    for (const item of product.benefits) entries.push({ question: item.title, answer: item.text, keywords: [product.name], link });
  }

  for (const area of repairAreas) {
    for (const symptom of area.symptoms) {
      entries.push({
        question: `${area.label}: ${symptom.label}`,
        answer: [symptom.cause, symptom.tip && `Tipp: ${symptom.tip}`, symptom.warning && `Wichtig: ${symptom.warning}`].filter(Boolean).join(" "),
        keywords: [area.label, "Reparatur", "kaputt", "defekt", "geht nicht"],
        link: { href: "/leistungen/reparatur-modernisierung#reparatur-check", label: "Reparatur-Check" },
      });
    }
  }

  for (const service of services) {
    const link = { href: `/leistungen/${service.slug}`, label: service.name };
    entries.push({ question: service.name, answer: service.shortDescription, keywords: [service.name], link });
    for (const item of service.faq) entries.push({ question: item.question, answer: item.answer, keywords: [service.name], link });
  }

  for (const term of glossary) {
    entries.push({
      question: `Was ist ${term.term}?`,
      answer: term.text,
      keywords: [term.term],
      link: term.slug ? { href: `/produkte/${term.slug}`, label: term.term } : { href: "/ratgeber#lexikon", label: "Lexikon" },
    });
  }

  entries.push(
    {
      question: "Wie läuft eine Beratung ab? Ablauf Zusammenarbeit Termin Aufmaß",
      answer:
        "So läuft es bei uns ab: 1. persönliche Beratung, 2. präzises Aufmaß bei Ihnen vor Ort, 3. Bestellung beim Fachhersteller (z. B. Somfy oder WAREMA), 4. Montage durch unser eigenes, festangestelltes Team, 5. Service und Betreuung auch nach dem Kauf.",
      keywords: ["Beratung", "Ablauf", "Termin", "Aufmaß", "vor Ort"],
      link: { href: "/leistungen/beratung-aufmass-montage", label: "Beratung, Aufmaß & Montage" },
    },
    {
      question: "Wo sind Sie? Adresse Telefon E-Mail Öffnungszeiten erreichen Kontakt",
      answer: `Sie finden uns in der ${company.street}, ${company.zip} ${company.city}. Telefon: ${company.phoneDisplay}, E-Mail: ${company.email}. ${company.hoursNote}`,
      keywords: ["Adresse", "Telefon", "Anrufen", "Mail", "Öffnungszeiten", "geöffnet", "offen", "Bürozeiten", "Kontakt", "erreichbar"],
      link: { href: "/kontakt", label: "Kontakt" },
    },
    {
      question: "In welcher Region sind Sie tätig? Einsatzgebiet Bielefeld OWL Gütersloh",
      answer: `Wir sind in ${company.areaServed} für Sie unterwegs – für Beratung und Aufmaß vor Ort, Montage, Reparatur und Wartung.`,
      keywords: ["Region", "Einsatzgebiet", "Bielefeld", "OWL", "Gütersloh", "Umgebung", "kommen"],
      link: { href: "/kontakt", label: "Kontakt" },
    },
    {
      question: "Welcher Sonnenschutz passt zu mir? Empfehlung Hitze Fenster Südseite Westseite",
      answer:
        "Das hängt vor allem von der Himmelsrichtung und dem Ziel ab: Gegen Hitze wirkt außenliegender Sonnenschutz wie Raffstore, Rollladen oder Senkrechtmarkise am besten, für Terrasse und Balkon eine Markise oder ein Sonnenschirm, innen ein Plissee als Blend- und Sichtschutz. Probieren Sie unseren Sonnenstand-Rechner und den Produktvergleich im Ratgeber: /ratgeber",
      keywords: ["passt", "Empfehlung", "welcher", "Hitze", "Fensterfront", "Südseite", "Westseite", "Vergleich"],
      link: { href: "/ratgeber", label: "Ratgeber" },
    },
    {
      question: "Können Sie meinen alten Rollladen reparieren? Reparatur defekt kaputt",
      answer:
        "Ja – wir reparieren Rollläden, Raffstores, Markisen, Insektenschutz, Innenbeschattung und Steuerungen, auch von anderen Herstellern. Unser Grundsatz: Wir reparieren, was sich lohnt, und erneuern, was Sinn macht. Mit dem Reparatur-Check finden Sie in zwei Klicks heraus, was meist dahintersteckt: /leistungen/reparatur-modernisierung",
      keywords: ["Reparatur", "reparieren", "defekt", "kaputt", "Gurt", "Motor", "klemmt"],
      link: { href: "/leistungen/reparatur-modernisierung", label: "Reparatur-Check" },
    }
  );

  return entries;
}

let cached: { entry: Entry; weights: Map<string, number> }[] | null = null;

function index() {
  if (cached) return cached;
  cached = buildEntries().map((entry) => {
    const weights = new Map<string, number>();
    const add = (text: string, weight: number) => {
      for (const token of tokens(text)) weights.set(token, Math.max(weights.get(token) ?? 0, weight));
    };
    add(entry.answer, 1);
    add(entry.question, 3);
    add(entry.keywords.join(" "), 4);
    return { entry, weights };
  });
  return cached;
}

const PRICE_WORDS = ["preis", "preise", "kosten", "kostet", "teuer", "guenstig", "euro", "budget"];

export function fallbackAnswer(question: string): string {
  const words = tokens(question);

  if (words.some((word) => PRICE_WORDS.some((price) => word.startsWith(price)))) {
    return `Konkrete Preise nennen wir erst nach dem Aufmaß – jede Anlage wird für Ihr Fenster, Ihre Fassade und Ihre Wünsche geplant. Die Beratung vor Ort ist kostenlos und unverbindlich, danach erhalten Sie ein transparentes Angebot.\n\n${contactLine}`;
  }

  if (words.length === 0) {
    return `Gern helfe ich Ihnen bei Fragen zu Raffstores, Rollläden, Markisen, Insektenschutz, Plissees, Sonnenschirmen und Smart-Home-Steuerungen. Was möchten Sie wissen?\n\n${contactLine}`;
  }

  let best: { entry: Entry; score: number } | null = null;
  for (const { entry, weights } of index()) {
    let score = 0;
    for (const word of words) {
      let hit = 0;
      for (const [token, weight] of weights) hit = Math.max(hit, weight * similarity(word, token));
      score += hit;
    }
    if (!best || score > best.score) best = { entry, score };
  }

  if (!best || best.score < 3) {
    return `Dazu kann ich Ihnen hier leider keine sichere Auskunft geben. Unser Team beantwortet Ihre Frage aber gern persönlich.\n\n${contactLine}`;
  }

  const link = best.entry.link && !best.entry.answer.includes(best.entry.link.href) ? `\n\nMehr dazu: ${best.entry.link.href}` : "";
  return `${best.entry.answer}${link}\n\n${contactLine}`;
}
