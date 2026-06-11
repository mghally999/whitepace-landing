import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  /** Accessible name: id of the heading inside. */
  labelledBy?: string;
  theme?: "light" | "dark";
  children: ReactNode;
  className?: string;
  /** Render the decorative wave background (dark sections). */
  withWaves?: boolean;
};

/**
 * Semantic <section> with the spec's vertical rhythm (48 / 72 / 112 px) and
 * the alternating navy/white surface theme. Dark sections invert in dark mode
 * to the deepest navy; light sections use the themeable --bg.
 */
export function Section({
  id,
  labelledBy,
  theme = "light",
  children,
  className,
  withWaves = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative overflow-hidden py-14 md:py-[72px] lg:py-[140px]",
        theme === "dark"
          ? "bg-navy text-white dark:bg-[var(--surface-dark)]"
          : "bg-[var(--bg)] text-ink dark:text-[var(--text)]",
        className
      )}
    >
      {withWaves && <Waves />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Faint decorative contour line-art for dark sections. */
function Waves() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 600"
      fill="none"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M-100 ${120 + i * 70} C 300 ${40 + i * 70}, 700 ${260 + i * 70}, 1540 ${100 + i * 70}`}
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
    </svg>
  );
}
