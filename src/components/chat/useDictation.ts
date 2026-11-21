"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const noSubscribe = () => () => {};

// Minimal typing for the Web Speech API (not part of the TypeScript DOM library yet).
type SpeechRecognitionResultLike = { isFinal: boolean; 0: { transcript: string } };
type SpeechRecognitionEventLike = { resultIndex: number; results: ArrayLike<SpeechRecognitionResultLike> };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/**
 * Dictation via the browser's own speech recognition. Nothing is recorded or sent by the website itself; the browser
 * decides where recognition runs (Chrome/Edge use the manufacturer's online service).
 * `onText` receives the full text spoken so far in this session (interim results included).
 */
export function useDictation(onText: (text: string) => void) {
  // false on the server, real check in the browser - without a hydration mismatch.
  const supported = useSyncExternalStore(noSubscribe, () => getRecognitionCtor() !== null, () => false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const onTextRef = useRef(onText);

  useEffect(() => {
    onTextRef.current = onText;
  }, [onText]);

  useEffect(() => () => recognitionRef.current?.abort(), []);

  const stop = useCallback(() => recognitionRef.current?.stop(), []);

  const start = useCallback(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor || recognitionRef.current) return;
    const recognition = new Ctor();
    recognition.lang = "de-DE";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) text += event.results[i]?.[0]?.transcript ?? "";
      onTextRef.current(text.trim());
    };
    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setError("Bitte erlauben Sie den Zugriff aufs Mikrofon, um zu diktieren.");
      } else if (event.error !== "no-speech" && event.error !== "aborted") {
        setError("Die Spracheingabe hat gerade nicht geklappt. Bitte tippen Sie Ihre Frage ein.");
      }
    };
    recognition.onend = () => {
      recognitionRef.current = null;
      setListening(false);
    };
    setError(null);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }, []);

  return { supported, listening, error, start, stop };
}
