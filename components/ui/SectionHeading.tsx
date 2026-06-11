import { ReactNode } from "react";
import { Highlight } from "./Highlight";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Heading text. The substring matching `highlight` gets the brush underline. */
  title: string;
  highlight?: string;
  subtitle?: ReactNode;
  id?: string;
  centered?: boolean;
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

/**
 * Renders an H2 (default) with an optional yellow highlighter under the
 * `highlight` word(s), plus an optional subtitle. Splits the title around the
 * highlight substring so only that word carries the brush stroke.
 */
export function SectionHeading({
  title,
  highlight,
  subtitle,
  id,
  centered = false,
  tone = "dark",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const textColor = tone === "light" ? "text-white" : "text-navy dark:text-white";

  let before = title;
  let mid = "";
  let after = "";
  if (highlight && title.includes(highlight)) {
    const start = title.indexOf(highlight);
    before = title.slice(0, start);
    mid = highlight;
    after = title.slice(start + highlight.length);
  }

  return (
    <div className={cn(centered && "text-center", className)}>
      <Tag
        id={id}
        className={cn(
          "font-bold leading-[1.1] tracking-[-0.02em]",
          // Figma: H1 72px (64 on 1440), H2 64px (72 for centered section heads). Scale down responsively.
          Tag === "h1"
            ? "text-[40px] sm:text-[52px] lg:text-[60px] xl:text-[64px] 2xl:text-[72px]"
            : "text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]",
          textColor
        )}
      >
        {before}
        {mid && <Highlight>{mid}</Highlight>}
        {after}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-body-lg",
            centered && "mx-auto max-w-2xl",
            tone === "light" ? "text-white/85" : "text-ink/80 dark:text-white/75"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
