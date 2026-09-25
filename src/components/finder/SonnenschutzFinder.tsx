"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type ComponentType } from "react";
import { finderQuestions, type FinderIcon } from "./finderLogic";
import type { ProductFormLabel, ProductIconKey } from "@/types";
import type { IconProps } from "@/components/icons/Icon";
import { ProductIcon } from "@/components/icons/ProductIcons";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBolt,
  IconCoins,
  IconCrank,
  IconDiamond,
  IconEye,
  IconHeart,
  IconHelp,
  IconHome,
  IconScale,
  IconSlash,
  IconSun,
} from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";

/** The few product fields the finder needs - passed in, so the full product texts stay out of the browser bundle. */
export type FinderProduct = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: ProductIconKey;
  formLabel: ProductFormLabel;
  image: { src: string; alt: string };
};

const productIconKeys: FinderIcon[] = ["raffstore", "innensonnenschutz", "markise", "insektenschutz", "sonnenschirm"];

const uiIcons: Partial<Record<FinderIcon, ComponentType<IconProps>>> = {
  sun: IconSun,
  eye: IconEye,
  slash: IconSlash,
  home: IconHome,
  help: IconHelp,
  bolt: IconBolt,
  crank: IconCrank,
  coins: IconCoins,
  scale: IconScale,
  diamond: IconDiamond,
  heart: IconHeart,
};

function OptionIcon({ icon, className }: { icon: FinderIcon; className: string }) {
  if (productIconKeys.includes(icon)) return <ProductIcon icon={icon as ProductIconKey} className={className} />;
  const Icon = uiIcons[icon] ?? IconHelp;
  return <Icon className={className} />;
}

export function SonnenschutzFinder({ products }: { products: FinderProduct[] }) {
  // Index of the chosen option per answered question - a list makes "back" trivial.
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;
  const isDone = step >= finderQuestions.length;
  const currentQuestion = finderQuestions[step];

  const chosen = useMemo(
    () => answers.map((optionIndex, questionIndex) => finderQuestions[questionIndex]?.options[optionIndex]).filter((option) => option !== undefined),
    [answers]
  );
  const wantsMotorization = chosen.some((option) => option.motorization);

  const recommendations = useMemo(() => {
    const scores: Record<string, number> = {};
    for (const option of chosen) {
      for (const [slug, points] of Object.entries(option.scores)) scores[slug] = (scores[slug] ?? 0) + (points ?? 0);
    }
    const ranked = Object.entries(scores)
      .filter(([slug, score]) => slug !== "steuerung-antriebe" && score > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([slug]) => products.find((product) => product.slug === slug))
      .filter((product): product is FinderProduct => Boolean(product));
    if (ranked.length > 0) return ranked;
    const fallback = products.find((product) => product.slug === "sonnenschutz");
    return fallback ? [fallback] : [];
  }, [chosen, products]);

  const [best, second] = recommendations;
  const contactHref = `/kontakt?produkt=${encodeURIComponent(best?.formLabel ?? "Sonstiges")}&nachricht=${encodeURIComponent(
    `Ich habe den Sonnenschutz-Finder genutzt und interessiere mich für: ${recommendations.map((product) => product.name).join(", ")}.`
  )}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl shadow-brand-ink/5">
      {/* Progress: one segment per question */}
      <div className="flex gap-1.5 px-6 pt-6 sm:px-10 sm:pt-8" aria-hidden="true">
        {finderQuestions.map((question, index) => (
          <span
            key={question.id}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${index < step ? "bg-brand-accent" : index === step ? "bg-brand-accent-soft" : "bg-brand-sand"}`}
          />
        ))}
      </div>

      <div className="p-6 sm:p-10">
        {!isDone && currentQuestion ? (
          <div key={step} className="swap-in">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent">
                Frage {step + 1} von {finderQuestions.length}
              </p>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setAnswers((list) => list.slice(0, -1))}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand-ink-soft transition-colors hover:bg-brand-sand hover:text-brand-primary"
                >
                  <IconArrowLeft className="h-4 w-4" />
                  Zurück
                </button>
              )}
            </div>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">{currentQuestion.question}</h3>
            <div className={`mt-7 grid gap-3 sm:grid-cols-2 ${currentQuestion.options.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {currentQuestion.options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setAnswers((list) => [...list, index])}
                  className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-lg hover:shadow-brand-accent/10 sm:flex-col sm:items-start sm:p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent-soft/40 text-brand-primary transition-colors duration-200 group-hover:bg-brand-accent group-hover:text-white">
                    <OptionIcon icon={option.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-brand-ink sm:text-base">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="swap-in">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent">Ihre Empfehlung</p>
              <button
                type="button"
                onClick={() => setAnswers((list) => list.slice(0, -1))}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand-ink-soft transition-colors hover:bg-brand-sand hover:text-brand-primary"
              >
                <IconArrowLeft className="h-4 w-4" />
                Letzte Antwort ändern
              </button>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">Das passt zu Ihrem Vorhaben</h3>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Ihre Angaben">
              {chosen.map((option) => (
                <li key={option.label} className="inline-flex items-center gap-1.5 rounded-full bg-brand-sand px-3 py-1.5 text-xs font-semibold text-brand-ink-soft">
                  <OptionIcon icon={option.icon} className="h-3.5 w-3.5 text-brand-accent" />
                  {option.label}
                </li>
              ))}
            </ul>

            <div className={`mt-7 grid gap-5 ${second ? "lg:grid-cols-[1.35fr_1fr]" : ""}`}>
              {best && (
                <Link
                  href={`/produkte/${best.slug}`}
                  className="group relative flex min-h-[18rem] overflow-hidden rounded-3xl bg-brand-primary-dark text-white"
                >
                  <Image
                    src={best.image.src}
                    alt={best.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/50 to-transparent" />
                  <span className="relative mt-auto block p-6 sm:p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-brand-ink">
                      Passt am besten
                    </span>
                    <span className="mt-3 flex items-center gap-2.5 text-2xl font-bold sm:text-3xl">
                      <ProductIcon icon={best.icon} className="h-7 w-7 text-brand-accent-soft" />
                      {best.name}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm text-white/80 sm:text-base">{best.shortDescription}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-soft">
                      Mehr erfahren <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              )}
              {second && (
                <Link href={`/produkte/${second.slug}`} className="group flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-white">
                  <span className="relative block aspect-[16/9] overflow-hidden">
                    <Image
                      src={second.image.src}
                      alt={second.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Ebenfalls passend</span>
                    <span className="mt-1.5 flex items-center gap-2 text-lg font-bold text-brand-ink">
                      <ProductIcon icon={second.icon} className="h-5 w-5 text-brand-accent" />
                      {second.name}
                    </span>
                    <span className="mt-1 text-sm text-brand-ink-soft">{second.shortDescription}</span>
                  </span>
                </Link>
              )}
            </div>

            {wantsMotorization && (
              <p className="mt-5 rounded-2xl bg-brand-sand p-4 text-sm text-brand-ink-soft">
                Sie wünschen sich eine motorisierte Lösung – dazu passen unsere{" "}
                <Link href="/produkte/steuerung-antriebe" className="font-semibold text-brand-primary hover:text-brand-accent">
                  Steuerungen &amp; Antriebe
                </Link>{" "}
                von Somfy: per App, Zeitplan oder ganz automatisch mit Sonnen- und Windsensor.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={contactHref}>Jetzt unverbindliches Angebot anfordern</Button>
              <Button variant="secondary" onClick={() => setAnswers([])}>
                Finder neu starten
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
