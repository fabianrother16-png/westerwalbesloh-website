export type FaqItem = {
  question: string;
  answer: string;
};

export type ImageRef = {
  src: string;
  alt: string;
};

export type TitledText = {
  title: string;
  text: string;
};

export type ContentSection =
  | {
      type: "variants";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: (TitledText & { image: ImageRef })[];
    }
  | {
      type: "cards";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: TitledText[];
      image?: ImageRef;
    }
  | {
      type: "checklist";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: string[];
      image?: ImageRef;
    };

export type Manufacturer = {
  name: string;
  text?: string;
  logo?: { src: string; width: number; height: number };
};

export type Product = {
  slug: string;
  name: string;
  /** Exakte Bezeichnung im Kontaktformular-Dropdown "Produkt". */
  formLabel: ProductFormLabel;
  shortDescription: string;
  tagline: string;
  intro: string[];
  heroImage: ImageRef;
  cardImage: ImageRef;
  benefitsTitle: string;
  benefits: TitledText[];
  sections: ContentSection[];
  manufacturersTitle: string;
  manufacturersIntro?: string;
  manufacturers: Manufacturer[];
  /** `wide` marks a landscape photo that may span two grid columns. */
  projectPhotos: (ImageRef & { caption: string; wide?: boolean })[];
  faqTitle: string;
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
  heroImage: ImageRef;
  /** Image for teaser cards when it should differ from the hero photo. */
  cardImage?: ImageRef;
  introTitle: string;
  intro: string[];
  sections: ContentSection[];
  closing?: TitledText;
  faqTitle: string;
  faq: FaqItem[];
  icon: ServiceIconKey;
  metaTitle: string;
  metaDescription: string;
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
  photo?: string;
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
