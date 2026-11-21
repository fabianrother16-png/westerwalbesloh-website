export type FaqItem = {
  question: string;
  answer: string;
};

export type ImageRef = {
  src: string;
  alt: string;
  /** Crop focus as an object-position class, for photos whose subject isn't centred. */
  position?: string;
};

export type TitledText = {
  title: string;
  text: string;
};

/** A labelled example inside a variant card, e.g. one lamella shape or one surface finish. */
export type VariantOption = {
  label: string;
  image: ImageRef;
};

export type VariantItem = TitledText & {
  image: ImageRef;
  /** Draws the RAL colour fan instead of the photo. */
  visual?: "ral-faecher" | "volant-formen" | "dachfenster-solar";
  options?: VariantOption[];
};

export type ContentSection =
  | {
      type: "variants";
      eyebrow?: string;
      /** Short label for the in-page navigation of product pages. */
      navLabel?: string;
      title: string;
      intro?: string;
      items: VariantItem[];
      /** Small fabric/colour samples shown below the cards. */
      swatches?: { title: string; text?: string; items: ImageRef[] };
    }
  | {
      type: "cards";
      eyebrow?: string;
      /** Short label for the in-page navigation of product pages. */
      navLabel?: string;
      title: string;
      intro?: string;
      items: (TitledText & { illustration?: IllustrationKey; icon?: HighlightIcon })[];
      image?: ImageRef;
    }
  | {
      type: "checklist";
      eyebrow?: string;
      /** Short label for the in-page navigation of product pages. */
      navLabel?: string;
      title: string;
      intro?: string;
      items: string[];
      image?: ImageRef;
      /** One photo per item: shows the list as photo tiles instead of check marks. */
      tiles?: ImageRef[];
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
  /** Interactive demo shown after the benefits, e.g. the slat demo for raffstores. */
  demo?: DemoKey;
  /** Four key facts shown as tiles in the page hero. */
  highlights?: { value: string; label: string }[];
  icon: ProductIconKey;
  metaTitle: string;
  metaDescription: string;
};

/** Small drawn pictograms for cards, e.g. the steps of a site measurement. */
export type IllustrationKey = "einbautiefe" | "leitungswege" | "platzbedarf" | "bausubstanz";

export type HighlightIcon = "scale" | "award" | "shield" | "diamond" | "clock" | "bolt" | "compass" | "crank" | "users" | "home";

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
  /** Short bullet points below the intro text. */
  introPoints?: string[];
  /** Short icon tiles below the intro text, easier to scan than paragraphs. */
  introHighlights?: { icon: HighlightIcon; title: string; text: string }[];
  /** Photo shown above the contact box next to the intro. */
  introImage?: ImageRef;
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

/** Interactive product demos, see src/components/interactive/demo. */
export type DemoKey = "raffstore" | "rollladen" | "markise" | "insektenschutz" | "plissee" | "sonnenschirm" | "smarthome";

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
