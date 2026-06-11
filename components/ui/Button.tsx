import { ArrowRight } from "lucide-react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "login" | "outline" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold leading-none transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-base",
  lg: "px-7 py-4 text-base",
};

const variants: Record<Variant, string> = {
  // Primary blue, white text, lifts on hover.
  primary:
    "bg-brand text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#3D8BEF] hover:shadow-nav",
  // Yellow navbar Login button, navy text (AA contrast).
  login: "bg-accent text-navy hover:-translate-y-0.5 hover:bg-[#FFD95C]",
  // Outline for non-featured pricing on light surfaces.
  outline:
    "border border-navy/25 text-navy hover:bg-navy hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-navy",
  // Outline on dark surfaces.
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Polymorphic button: renders <a> when `href` is given, otherwise <button>. */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    children,
    className,
    ...rest
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
