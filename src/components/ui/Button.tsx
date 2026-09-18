import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-dark shadow-sm shadow-brand-accent/20",
  secondary:
    "bg-white text-brand-primary border border-brand-border hover:border-brand-primary hover:bg-brand-sand",
  ghost: "text-white border border-white/40 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const isInternal = props.href.startsWith("/") || props.href.startsWith("#");
    if (isInternal && !props.external) {
      return (
        <Link href={props.href} className={classes} onClick={props.onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={classes}
        onClick={props.onClick}
        target={props.href.startsWith("http") ? "_blank" : undefined}
        rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, ...buttonProps } = props as ButtonAsButton;
  void _href;
  void _v;
  void _s;
  void _c;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
