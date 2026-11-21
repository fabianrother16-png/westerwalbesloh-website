import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconStar } from "@/components/icons/UiIcons";
import { layoutFor } from "@/components/content/ContentSections";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

export function Testimonials() {
  const layout = layoutFor(testimonials.length);
  const rating = String(company.reviews.rating).replace(".", ",");
  return (
    <Section background="surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title={`${rating} von 5 Sternen bei Google`}
          description="Ein Auszug echter Bewertungen unserer Kundinnen und Kunden."
        />
        <a
          href={company.social.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent"
        >
          Alle Bewertungen bei Google ansehen
          <IconArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className={`mt-12 grid gap-5 ${layout.grid}`}>
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 60} className={layout.span(index)}>
            <figure className="flex h-full flex-col rounded-3xl border border-brand-border bg-brand-sand p-6">
              <div className="flex gap-1 text-brand-accent">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink-soft">
                „{testimonial.text}“
              </blockquote>
              <figcaption className="mt-5 border-t border-brand-border pt-4">
                <p className="text-sm font-semibold text-brand-ink">{testimonial.author}</p>
                <p className="text-xs text-brand-ink-soft">{testimonial.context}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
