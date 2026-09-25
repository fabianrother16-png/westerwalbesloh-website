"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconClose, IconSend, IconSparkles } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import type { ChatMessage } from "@/types";

// Internal paths mentioned in answers ("Mehr dazu: /produkte/raffstore") become clickable links.
const LINK_PATTERN = /(\/(?:produkte|leistungen|ratgeber|kontakt|ueber-uns)(?:\/[a-z0-9-]+)?(?:#[a-z0-9-]+)?)/g;

const PAGE_LABELS: Record<string, string> = {
  "/kontakt": "Kontaktformular",
  "/ratgeber": "Ratgeber",
  "/ueber-uns": "Über uns",
  "/produkte": "Produkte",
  "/leistungen": "Leistungen",
  "/produkte/raffstore": "Raffstore",
  "/produkte/rollladen": "Rollladen",
  "/produkte/markisen": "Markisen",
  "/produkte/insektentschutz": "Insektenschutz",
  "/produkte/sonnenschutz": "Innenliegender Sonnenschutz",
  "/produkte/sonnenschirme": "Sonnenschirme",
  "/produkte/steuerung-antriebe": "Steuerungen & Antriebe",
  "/leistungen/beratung-aufmass-montage": "Beratung, Aufmaß & Montage",
  "/leistungen/reparatur-modernisierung": "Reparatur & Modernisierung",
  "/leistungen/wartung": "Wartung",
  "/leistungen/objektbau-projekte": "Objektbau",
};

function MessageText({ text, onNavigate }: { text: string; onNavigate: () => void }) {
  const parts = text.split(LINK_PATTERN);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <Link key={index} href={part} onClick={onNavigate} className="font-semibold text-brand-primary underline underline-offset-2">
            {PAGE_LABELS[part.split("#")[0] ?? ""] ?? part}
          </Link>
        ) : (
          part
        )
      )}
    </>
  );
}

const STARTER_PROMPTS = [
  "Welcher Sonnenschutz passt zu großen Fensterfronten?",
  "Wie läuft eine Beratung bei Ihnen ab?",
  "Können Sie meinen alten Rollladen reparieren?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"ai" | "faq">("ai");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        throw new Error("request-failed");
      }
      setMode(res.headers.get("X-Chat-Mode") === "faq" ? "faq" : "ai");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }

      if (!assistantText) {
        throw new Error("empty-response");
      }
    } catch {
      setError(
        `Der Chat ist gerade nicht erreichbar. Rufen Sie uns gerne direkt an: ${company.phoneDisplay}`
      );
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-21 right-5 z-50 flex items-center gap-2.5 rounded-full bg-brand-accent px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-brand-accent/30 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
        aria-expanded={open}
        aria-label="Sonnenschutz-Berater öffnen"
      >
        {open ? <IconClose className="h-5 w-5" /> : <IconSparkles className="h-5 w-5" />}
        <span className="hidden sm:inline">
          {open ? "Chat schließen" : "Fragen Sie unseren Sonnenschutz-Berater"}
        </span>
      </button>

      {open && (
        <div className="fixed inset-x-4 bottom-24 z-50 flex h-[min(32rem,70vh)] flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-2xl sm:inset-x-auto sm:right-7 sm:w-96">
          <div className="flex items-center gap-3 bg-brand-primary px-5 py-4 text-white">
            <IconSparkles className="h-5 w-5 text-brand-accent-soft" />
            <div>
              <p className="text-sm font-semibold">Sonnenschutz-Berater</p>
              <p className="text-xs text-white/60">Digitaler Assistent von {company.shortName}</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-brand-ink-soft">
                  Hallo! Ich helfe Ihnen gerne bei Fragen zu Rollläden, Raffstores, Markisen und
                  mehr. Wie kann ich helfen?
                </p>
                <div className="flex flex-col gap-2">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="rounded-xl border border-brand-border px-3.5 py-2.5 text-left text-sm text-brand-ink-soft hover:border-brand-primary hover:text-brand-primary"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-brand-primary text-white"
                    : "bg-brand-sand text-brand-ink"
                }`}
              >
                {message.content ? (
                  message.role === "assistant" ? (
                    <MessageText text={message.content} onNavigate={() => setOpen(false)} />
                  ) : (
                    message.content
                  )
                ) : loading && index === messages.length - 1 ? (
                  "…"
                ) : (
                  ""
                )}
              </div>
            ))}

            {error && (
              <p className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-brand-error">
                {error}{" "}
                <Link href="/kontakt" className="underline">
                  Zum Kontaktformular
                </Link>
              </p>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-brand-border p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Ihre Frage an den Sonnenschutz-Berater
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ihre Frage…"
              maxLength={500}
              className="flex-1 rounded-full border border-brand-border px-4 py-2.5 text-sm focus-visible:outline-brand-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Nachricht senden"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white disabled:opacity-40"
            >
              <IconSend className="h-4 w-4" />
            </button>
          </form>
          <p className="px-4 pb-3 text-[0.7rem] text-brand-ink-soft">
            {mode === "faq" ? "Antworten aus unseren häufigen Fragen" : "KI-gestützte Auskunft"} ohne Gewähr – für verbindliche Angebote nutzen Sie bitte das{" "}
            <Link href="/kontakt" className="underline">
              Kontaktformular
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
