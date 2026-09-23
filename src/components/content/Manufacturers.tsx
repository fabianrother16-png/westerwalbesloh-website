import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Manufacturer } from "@/types";

export function Manufacturers({
  title,
  intro,
  manufacturers,
}: {
  title: string;
  intro?: string;
  manufacturers: Manufacturer[];
}) {
  const logosOnly = manufacturers.every((manufacturer) => !manufacturer.text);

  return (
    <>
      <SectionHeading eyebrow="Markenqualität" title={title} description={intro} />
      {logosOnly ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {manufacturers.map((manufacturer, index) => (
            <Reveal key={manufacturer.name} delay={index * 70}>
              <div className="flex h-32 items-center justify-center rounded-3xl border border-brand-border bg-white p-6">
                {manufacturer.logo && (
                  <Image
                    src={manufacturer.logo.src}
                    alt={`${manufacturer.name} Logo`}
                    width={manufacturer.logo.width}
                    height={manufacturer.logo.height}
                    sizes="(min-width: 640px) 320px, 45vw"
                    className="max-h-16 w-auto object-contain"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className={`mt-10 grid gap-6 ${manufacturers.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {manufacturers.map((manufacturer, index) => (
            <Reveal key={manufacturer.name} delay={index * 90}>
              <article className="flex h-full flex-col gap-6 rounded-3xl border border-brand-border bg-white p-6 sm:flex-row sm:items-center sm:p-8">
                {manufacturer.logo && (
                  <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl bg-brand-sand p-4 sm:w-44">
                    <Image
                      src={manufacturer.logo.src}
                      alt={`${manufacturer.name} Logo`}
                      width={manufacturer.logo.width}
                      height={manufacturer.logo.height}
                      sizes="176px"
                      className="max-h-16 w-auto max-w-[60%] object-contain sm:max-h-20 sm:max-w-full"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-brand-ink">{manufacturer.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{manufacturer.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
