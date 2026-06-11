import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

type OrbitProps = { className?: string };

// box is 520 units; center = 260. Three dashed rings the dots ride on.
const BOX = 520;
const RINGS = [120, 180, 240];

/** angle: 0 = top, clockwise (deg). Position as % of the square box (responsive). */
function pos(angle: number, ring: number) {
  const r = RINGS[ring];
  const rad = (angle * Math.PI) / 180;
  const pctR = (r / BOX) * 100;
  return {
    left: `${50 + pctR * Math.sin(rad)}%`,
    top: `${50 - pctR * Math.cos(rad)}%`,
  };
}

type Dot = { angle: number; ring: number; color: string; size: number };
const DOTS: Dot[] = [
  { angle: 0, ring: 1, color: "#FFE492", size: 24 },
  { angle: 55, ring: 2, color: "#4F9CF9", size: 28 },
  { angle: 130, ring: 1, color: "#2EB67D", size: 26 },
  { angle: 200, ring: 2, color: "#4F9CF9", size: 16 },
  { angle: 250, ring: 1, color: "#E01E5A", size: 28 },
  { angle: 315, ring: 2, color: "#E01E5A", size: 18 },
];

const SPIN = "42s";

/**
 * Collaboration orbit (the "Work together" section): concentric dashed rings
 * with colored contributor dots orbiting the centered whitepace mark. Dots are
 * positioned statically (always evenly distributed) on a single rotating layer;
 * motion is frozen under prefers-reduced-motion.
 */
export function IntegrationOrbit({ className }: OrbitProps) {
  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[460px]", className)}
      role="img"
      aria-label="Collaboration graphic showing whitepace at the center of orbiting contributors"
    >
      <svg
        viewBox={`0 0 ${BOX} ${BOX}`}
        className="absolute inset-0 h-full w-full text-brand"
        fill="none"
        aria-hidden="true"
      >
        {RINGS.map((r) => (
          <circle
            key={r}
            cx="260"
            cy="260"
            r={r}
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="absolute inset-0 motion-safe:animate-orbit" style={{ animationDuration: SPIN }}>
        {DOTS.map((d, i) => (
          <span
            key={i}
            className="absolute block -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ ...pos(d.angle, d.ring), width: d.size, height: d.size, background: d.color }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-navy shadow-card">
        <Logo tone="light" withWordmark={false} className="scale-[1.4]" />
      </div>
    </div>
  );
}
