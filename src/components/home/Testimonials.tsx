import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconStar } from "@/components/icons/UiIcons";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

export function Testimonials() {
  return (
    <Section background="sand">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title={`${company.reviews.label} auf Google`}
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
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 60}>
            <figure className="flex h-full flex-col rounded-3xl border border-brand-border bg-white p-6">
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
                <p className="text-xs text-brand-ink-soft/70">{testimonial.context}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
