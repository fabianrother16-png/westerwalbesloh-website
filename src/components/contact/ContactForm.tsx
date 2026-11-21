"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/icons/UiIcons";

const inputClasses =
  "w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm text-brand-ink placeholder:text-brand-ink-soft/50 focus-visible:outline-2 focus-visible:outline-brand-accent";
const labelClasses = "mb-1.5 block text-sm font-medium text-brand-ink";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("anfrage");
  const initialInquiryType = company.contactFormOptions.inquiryTypes.find((option) => option === requestedType) ?? "Sonstiges";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      address: String(formData.get("address") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      inquiryType: String(formData.get("inquiryType") || ""),
      product: String(formData.get("product") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unbekannter Fehler");
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : `Ihre Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an: ${company.phoneDisplay}`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand-border bg-white p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-success/10 text-brand-success">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-brand-ink">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-brand-ink-soft">
          Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen zurück.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")} variant="secondary">
          Weitere Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={120}
            className={inputClasses}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Telefonnummer *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minLength={4}
            maxLength={40}
            className={inputClasses}
            autoComplete="tel"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClasses}>
            Adresse *
          </label>
          <input
            id="address"
            name="address"
            required
            minLength={3}
            maxLength={200}
            placeholder="Straße, PLZ, Ort"
            className={inputClasses}
            autoComplete="street-address"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClasses}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className={inputClasses}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className={labelClasses}>
            Art der Anfrage *
          </label>
          <select id="inquiryType" name="inquiryType" required defaultValue={initialInquiryType} className={inputClasses}>
            {company.contactFormOptions.inquiryTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="product" className={labelClasses}>
            Produkt
          </label>
          <select
            id="product"
            name="product"
            defaultValue={searchParams.get("produkt") ?? "Sonstiges"}
            className={inputClasses}
          >
            {company.contactFormOptions.products.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={5}
            maxLength={3000}
            rows={5}
            defaultValue={searchParams.get("nachricht") ?? ""}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Firma (bitte freilassen)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-brand-ink-soft">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-brand-border text-brand-accent focus-visible:outline-2 focus-visible:outline-brand-accent"
        />
        <span>
          Ich habe die{" "}
          <Link
            href="/datenschutz"
            className="font-semibold text-brand-primary underline hover:text-brand-accent"
          >
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          einverstanden. *
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-brand-error">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet…" : "Anfrage absenden"}
      </Button>
      <p className="mt-3 text-xs text-brand-ink-soft">* Pflichtfelder</p>
    </form>
  );
}
