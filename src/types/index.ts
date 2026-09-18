export type FaqItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Exakte Bezeichnung im Kontaktformular-Dropdown "Produkt". */
  formLabel: ProductFormLabel;
  shortDescription: string;
  heroText: string;
  intro: string;
  features: string[];
  applications: string[];
  faq: FaqItem[];
  icon: ProductIconKey;
  metaTitle: string;
  metaDescription: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroText: string;
  intro: string;
  features: string[];
  faq: FaqItem[];
  icon: ServiceIconKey;
  metaTitle: string;
  metaDescription: string;
  quote?: string;
};

export type ProductIconKey =
  | "raffstore"
  | "rollladen"
  | "markise"
  | "insektenschutz"
  | "innensonnenschutz"
  | "sonnenschirm"
  | "steuerung";

export type ServiceIconKey = "beratung" | "reparatur" | "wartung" | "objektbau";

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export type Testimonial = {
  author: string;
  text: string;
  context: string;
  rating: number;
};

export type HistoryMilestone = {
  year: string;
  title: string;
  text: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type InquiryType =
  | "Sonstiges"
  | "Beratung"
  | "Reparatur"
  | "Modernisierung"
  | "Neue Anlage"
  | "Gewerbliche Anfrage";

export type InquiryProduct =
  | "Sonstiges"
  | "Raffstore"
  | "Rollladen"
  | "Markise"
  | "Sonnenschirm"
  | "Insektenschutz"
  | "Innen-Sonnenschutz"
  | "Steuerungen";

export type ProductFormLabel = Exclude<InquiryProduct, "Sonstiges">;
