"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { finderQuestions, type FinderOption } from "./finderLogic";
import { getProductBySlug } from "@/data/products";
import type { Product } from "@/types";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";

export function SonnenschutzFinder() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [wantsMotorization, setWantsMotorization] = useState(false);

  const isDone = step >= finderQuestions.length;

  function answer(option: FinderOption) {
    setScores((prev) => {
      const next = { ...prev };
      for (const [slug, points] of Object.entries(option.scores)) {
        next[slug] = (next[slug] ?? 0) + (points ?? 0);
      }
      return next;
    });
    if (option.motorization) setWantsMotorization(true);
    setStep((s) => s + 1);
  }

  function restart() {
    setStep(0);
    setScores({});
    setWantsMotorization(false);
  }

  const recommendations = useMemo<Product[]>(() => {
    const ranked = Object.entries(scores)
      .filter(([slug]) => slug !== "steuerung-antriebe")
      .sort((a, b) => b[1] - a[1]);
    const top = ranked
      .slice(0, 2)
      .map(([slug]) => getProductBySlug(slug))
      .filter((product): product is Product => Boolean(product));

    if (top.length === 0) {
      const fallback = getProductBySlug("sonnenschutz");
      return fallback ? [fallback] : [];
    }
    return top;
  }, [scores]);

  const progress = Math.min(step, finderQuestions.length) / finderQuestions.length;
  const currentQuestion = finderQuestions[step];

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm">
      <div className="h-1.5 w-full bg-brand-sand">
        <div
          className="h-full bg-brand-accent transition-all duration-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-10">
        {!isDone && currentQuestion ? (
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-accent">
              Frage {step + 1} von {finderQuestions.length}
            </p>
            <h3 className="text-2xl font-bold text-brand-ink">{currentQuestion.question}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => answer(option)}
                  className="rounded-2xl border border-brand-border px-5 py-4 text-left text-sm font-medium text-brand-ink-soft transition-colors hover:border-brand-primary hover:bg-brand-sand hover:text-brand-primary"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-accent">
              Ihre Empfehlung
            </p>
            <h3 className="text-2xl font-bold text-brand-ink">Das passt zu Ihrem Vorhaben</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {recommendations.map((product) => (
                <div key={product.slug} className="rounded-2xl border border-brand-border p-5">
                  <ProductIcon icon={product.icon} className="h-8 w-8 text-brand-accent" />
                  <h4 className="mt-3 text-lg font-bold text-brand-ink">{product.name}</h4>
                  <p className="mt-1.5 text-sm text-brand-ink-soft">{product.shortDescription}</p>
                  <Link
                    href={`/produkte/${product.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent"
                  >
                    Mehr erfahren <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            {wantsMotorization && (
              <p className="mt-5 text-sm text-brand-ink-soft">
                Da Sie eine motorisierte Lösung wünschen, lohnt sich zusätzlich ein Blick auf{" "}
                <Link
                  href="/produkte/steuerung-antriebe"
                  className="font-semibold text-brand-primary hover:text-brand-accent"
                >
                  Steuerungen &amp; Antriebe
                </Link>
                .
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={`/kontakt?produkt=${encodeURIComponent(
                  recommendations[0]?.formLabel ?? "Sonstiges"
                )}&nachricht=${encodeURIComponent(
                  `Ich habe den Sonnenschutz-Finder genutzt und interessiere mich für: ${recommendations
                    .map((product) => product.name)
                    .join(", ")}.`
                )}`}
              >
                Jetzt unverbindliches Angebot anfordern
              </Button>
              <Button variant="secondary" onClick={restart}>
                Finder neu starten
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
