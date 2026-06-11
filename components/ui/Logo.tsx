import { cn } from "@/lib/cn";

type LogoProps = {
  /** Text + mark color. */
  tone?: "light" | "dark";
  className?: string;
  withWordmark?: boolean;
};

/**
 * whitepace logo: upward-chevron mark + lowercase wordmark.
 * `tone="light"` renders white (for the navy hero/footer); `tone="dark"`
 * renders navy/blue (for white surfaces).
 */
export function Logo({ tone = "light", className, withWordmark = true }: LogoProps) {
  const markColor = tone === "light" ? "#ffffff" : "#043873";
  const textColor = tone === "light" ? "text-white" : "text-navy dark:text-white";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* stacked upward arrowheads */}
        <path d="M16 4 L28 14 L23 14 L16 8.5 L9 14 L4 14 Z" fill={markColor} />
        <path
          d="M16 14 L28 24 L23 24 L16 18.5 L9 24 L4 24 Z"
          fill={markColor}
          opacity="0.85"
        />
      </svg>
      {withWordmark && (
        <span className={cn("text-xl font-bold tracking-tight", textColor)}>
          whitepace
        </span>
      )}
    </span>
  );
}
