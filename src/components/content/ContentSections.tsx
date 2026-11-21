import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons/UiIcons";
import { RalFaecher } from "@/components/content/RalFaecher";
import { VolantFormen } from "@/components/content/VolantFormen";
import { DachfensterSolar } from "@/components/content/DachfensterSolar";
import type { ContentSection, HighlightIcon, IllustrationKey, ImageRef, TitledText } from "@/types";
import { HIGHLIGHT_ICONS } from "@/components/icons/highlightIcons";
import { AufmassIllustration } from "@/components/content/AufmassIllustration";

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
    case 7:
      // Two full rows of three, the seventh card spans the whole width.
      return {
        grid: "sm:grid-cols-2 lg:grid-cols-3",
        span: (index) => (index === 6 ? "sm:col-span-2 lg:col-span-3" : ""),
        aspect: (index) => (index === 6 ? "aspect-[4/3] sm:aspect-[21/8]" : "aspect-[4/3]"),
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
  items: (TitledText & { illustration?: IllustrationKey; icon?: HighlightIcon })[];
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
            {item.illustration && (
              <div className="-mx-2 -mt-2 mb-5 rounded-2xl bg-white/70 px-2 py-3">
                <AufmassIllustration kind={item.illustration} />
              </div>
            )}
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent text-white shadow-md shadow-brand-accent/25 transition-transform duration-300 group-hover:scale-110">
                {item.icon ? (
                  (() => {
                    const Icon = HIGHLIGHT_ICONS[item.icon];
                    return <Icon className="h-5 w-5" />;
                  })()
                ) : (
                  <IconCheck className="h-5 w-5" strokeWidth={2.5} />
                )}
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
                {item.visual === "ral-faecher" ? (
                  <RalFaecher />
                ) : item.visual === "volant-formen" ? (
                  <VolantFormen />
                ) : item.visual === "dachfenster-solar" ? (
                  <DachfensterSolar />
                ) : (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.image.position ?? ""}`}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{item.text}</p>
                {item.options && (
                  <ul className="mt-5 grid max-w-sm grid-cols-2 gap-3">
                    {item.options.map((option) => (
                      <li key={option.label}>
                        <figure>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-border bg-white">
                            <Image
                              src={option.image.src}
                              alt={option.image.alt}
                              fill
                              sizes="(min-width: 1024px) 14vw, (min-width: 640px) 22vw, 45vw"
                              className={`object-cover ${option.image.position ?? ""}`}
                            />
                          </div>
                          <figcaption className="mt-1.5 text-xs font-semibold text-brand-ink">{option.label}</figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {section.swatches && (
        <Reveal className={`mt-6 rounded-3xl border border-brand-border p-6 sm:p-8 ${cardBackground}`}>
          <h3 className="text-lg font-bold text-brand-ink">{section.swatches.title}</h3>
          {section.swatches.text && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-brand-ink-soft">{section.swatches.text}</p>}
          <ul className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-8">
            {section.swatches.items.map((swatch) => (
              <li key={swatch.src} className="relative aspect-square overflow-hidden rounded-xl border border-brand-border shadow-sm">
                <Image src={swatch.src} alt={swatch.alt} fill sizes="(min-width: 640px) 10vw, 22vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </Reveal>
      )}
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

/** Checklist shown as photo tiles: one large tile, the others in a grid next to it. */
function ChecklistTiles({ section, tiles }: { section: Extract<ContentSection, { type: "checklist" }>; tiles: ImageRef[] }) {
  return (
    <>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.intro} />
      <ul className="mt-12 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-3">
        {section.items.map((item, index) => {
          const tile = tiles[index];
          return (
            <Reveal
              key={item}
              as="li"
              delay={index * 80}
              className={`group relative overflow-hidden rounded-3xl bg-brand-primary-dark ${index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              {tile && (
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${tile.position ?? ""}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/90 via-brand-primary-dark/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent shadow-md shadow-black/20">
                    <IconCheck className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className={`font-bold leading-tight ${index === 0 ? "text-xl sm:text-2xl" : "text-lg"}`}>{item}</span>
                </div>
                <span className="text-sm font-semibold tabular-nums text-white/60" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </>
  );
}

function ChecklistBlock({ section }: { section: Extract<ContentSection, { type: "checklist" }> }) {
  if (section.tiles?.length) return <ChecklistTiles section={section} tiles={section.tiles} />;
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
