import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons/UiIcons";
import type { ContentSection, ImageRef, TitledText } from "@/types";

type Background = "surface" | "sand";

type GridLayout = {
  grid: string;
  /** Column span per card, so that no row is left half-empty. */
  span: (index: number) => string;
  /** Photo aspect per card: cards spanning two columns get a wider frame. */
  aspect: (index: number) => string;
};

const standardAspect = () => "aspect-[4/3]";

export function layoutFor(count: number): GridLayout {
  switch (count) {
    case 1:
      return { grid: "", span: () => "", aspect: () => "aspect-[16/9]" };
    case 2:
      return { grid: "sm:grid-cols-2", span: () => "", aspect: standardAspect };
    case 3:
      // Two plus one wide card on tablets, three in a row on desktop.
      return {
        grid: "sm:grid-cols-2 lg:grid-cols-3",
        span: (index) => (index === 2 ? "sm:col-span-2 lg:col-span-1" : ""),
        aspect: (index) => (index === 2 ? "aspect-[4/3] sm:aspect-[16/8] lg:aspect-[4/3]" : "aspect-[4/3]"),
      };
    case 4:
      return { grid: "sm:grid-cols-2 lg:grid-cols-4", span: () => "", aspect: standardAspect };
    case 5:
      // Three cards in the first desktop row, two wider ones in the second.
      return {
        grid: "sm:grid-cols-2 lg:grid-cols-6",
        span: (index) => (index < 3 ? "lg:col-span-2" : index === 4 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-3"),
        aspect: (index) =>
          index === 3 ? "aspect-[4/3] lg:aspect-[16/8]" : index === 4 ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/3]",
      };
    default:
      return { grid: "sm:grid-cols-2 lg:grid-cols-3", span: () => "", aspect: standardAspect };
  }
}

export function NumberedCards({
  items,
  background,
  columns,
}: {
  items: TitledText[];
  background: Background;
  columns?: string;
}) {
  const cardBackground = background === "sand" ? "bg-white" : "bg-brand-sand";
  const layout = layoutFor(items.length);
  const span = (index: number) => {
    if (!columns) return layout.span(index);
    // A fixed two-column grid only needs the last card widened when the count is odd.
    const oddLast = columns === "sm:grid-cols-2" && items.length % 2 === 1 && index === items.length - 1;
    return oddLast ? "sm:col-span-2" : "";
  };
  return (
    <div className={`grid gap-5 ${columns ?? layout.grid}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 70} className={span(index)}>
          <div
            className={`group h-full rounded-3xl border border-brand-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-xl hover:shadow-brand-ink/5 ${cardBackground}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent text-white shadow-md shadow-brand-accent/25 transition-transform duration-300 group-hover:scale-110">
                <IconCheck className="h-5 w-5" strokeWidth={2.5} />
              </span>
              {/* Decorative number, drawn as generated content so it stays out of the text flow. */}
              <span
                data-number={String(index + 1).padStart(2, "0")}
                className="text-3xl font-bold leading-none tabular-nums text-brand-border transition-colors duration-300 after:content-[attr(data-number)] group-hover:text-brand-accent-soft"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-brand-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SideImage({ image }: { image: ImageRef }) {
  return (
    <Reveal delay={120} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </Reveal>
  );
}

function VariantsBlock({ section, background }: { section: Extract<ContentSection, { type: "variants" }>; background: Background }) {
  const cardBackground = background === "sand" ? "bg-white" : "bg-brand-sand";
  const layout = layoutFor(section.items.length);
  return (
    <>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.intro} />
      <div className={`mt-12 grid gap-6 ${layout.grid}`}>
        {section.items.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 90} className={layout.span(index)}>
            <article className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border ${cardBackground}`}>
              <div className={`relative w-full overflow-hidden ${layout.aspect(index)}`}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{item.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function CardsBlock({ section, background }: { section: Extract<ContentSection, { type: "cards" }>; background: Background }) {
  if (!section.image) {
    return (
      <>
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.intro} />
        <div className="mt-12">
          <NumberedCards items={section.items} background={background} />
        </div>
      </>
    );
  }
  // The photo column stretches to the height of the card grid, so neither side is left with a gap.
  return (
    <>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.intro} />
      <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="relative min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[22rem]">
          <Image
            src={section.image.src}
            alt={section.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </Reveal>
        <NumberedCards items={section.items} background={background} columns="sm:grid-cols-2" />
      </div>
    </>
  );
}

function ChecklistBlock({ section }: { section: Extract<ContentSection, { type: "checklist" }> }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.intro} />
        <ul className="mt-8 space-y-4">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-ink">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white">
                <IconCheck className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      {section.image && <SideImage image={section.image} />}
    </div>
  );
}

/** Anchor id for a content section, derived from its short navigation label. */
export function sectionId(section: ContentSection) {
  const label = section.navLabel ?? section.eyebrow ?? section.title;
  return label
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Scroll offset so anchored sections are not hidden behind the sticky header (and section nav from md on). */
export const anchorOffset = "scroll-mt-20 md:scroll-mt-40";

export function ContentSections({
  sections,
  startWith = "sand",
}: {
  sections: ContentSection[];
  startWith?: Background;
}) {
  return (
    <>
      {sections.map((section, index) => {
        const background: Background =
          index % 2 === 0 ? startWith : startWith === "sand" ? "surface" : "sand";
        return (
          <Section key={section.title} id={sectionId(section)} background={background} className={anchorOffset}>
            {section.type === "variants" && <VariantsBlock section={section} background={background} />}
            {section.type === "cards" && <CardsBlock section={section} background={background} />}
            {section.type === "checklist" && <ChecklistBlock section={section} />}
          </Section>
        );
      })}
    </>
  );
}
