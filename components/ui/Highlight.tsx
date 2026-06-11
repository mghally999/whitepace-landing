import { ReactNode } from "react";

/**
 * Signature hand-drawn yellow brush-stroke highlight behind a heading word.
 * Matches the Figma stroke: a thick, slightly-tapered swash that overlaps the
 * lower third of the text with a gentle upward sweep (decorative, aria-hidden).
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[0.02em] left-[-3%] z-0 h-[0.4em] w-[106%] text-accent"
        viewBox="0 0 320 44"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* tapered brush swash, solid accent */}
        <path
          d="M8 30C70 17 150 12 250 14c26 .6 50 2.4 62 7.5-2.5 5-9 8-20 9.5-46 6-150 4.5-200 5.5C66 37 36 34 8 30Z"
          fill="currentColor"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
