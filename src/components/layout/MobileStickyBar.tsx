import { IconPhone } from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-brand-border bg-white/95 px-4 py-2.5 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.15)] backdrop-blur sm:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={company.phoneHref}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-border bg-white px-4 py-3 text-sm font-semibold text-brand-ink"
      >
        <IconPhone className="h-4 w-4 text-brand-accent" />
        Anrufen
      </a>
      <Button href="/kontakt" className="flex-1">
        Angebot anfordern
      </Button>
    </div>
  );
}
