import Image from "next/image";
import Link from "next/link";
import { SlatPattern } from "@/components/ui/SlatPattern";
import type { IconProps } from "@/components/icons/Icon";

export function RelatedCard({
  href,
  name,
  description,
  image,
  icon: Icon,
}: {
  href: string;
  name: string;
  description: string;
  image: string | null;
  icon: (props: IconProps) => React.ReactElement;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-ink/5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-primary-soft to-brand-primary-dark p-4">
            <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
            <Icon className="relative h-6 w-6 text-white/70" strokeWidth={1.5} />
            <span className="relative text-lg leading-[1.05] font-bold tracking-tight text-white">
              {name}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-brand-ink">{name}</h3>
        <p className="mt-1.5 text-sm text-brand-ink-soft">{description}</p>
      </div>
    </Link>
  );
}
