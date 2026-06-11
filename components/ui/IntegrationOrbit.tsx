import { CSSProperties } from "react";
import { Logo } from "./Logo";
import {
  DropboxIcon,
  GoogleCalendarIcon,
  GoogleDriveIcon,
  OutlookIcon,
  SlackIcon,
} from "./icons";
import { cn } from "@/lib/cn";

type OrbitProps = {
  /** "collab" = colored dots (Work together); "apps" = app-icon bubbles (favorite apps). */
  variant: "collab" | "apps";
  className?: string;
};

// viewBox is 0..520; center 260. Three rings the dots ride on.
const RINGS = [120, 180, 240];

type Dot = { ring: number; angle: number; color: string; size: number };
const COLLAB_DOTS: Dot[] = [
  { ring: 2, angle: 200, color: "#E01E5A", size: 26 },
  { ring: 1, angle: 295, color: "#FFE492", size: 24 },
  { ring: 1, angle: 45, color: "#2EB67D", size: 26 },
  { ring: 2, angle: 25, color: "#4F9CF9", size: 26 },
  { ring: 0, angle: 150, color: "#E01E5A", size: 16 },
  { ring: 2, angle: 115, color: "#4F9CF9", size: 16 },
];

const APP_BUBBLES = [
  { ring: 2, angle: 200, Icon: DropboxIcon, label: "Dropbox" },
  { ring: 1, angle: 265, Icon: SlackIcon, label: "Slack" },
  { ring: 2, angle: 320, Icon: OutlookIcon, label: "Outlook" },
  { ring: 1, angle: 30, Icon: GoogleDriveIcon, label: "Google Drive" },
  { ring: 2, angle: 95, Icon: GoogleCalendarIcon, label: "Google Calendar" },
];

// Per-ring rotation: alternating direction + varied speed for organic motion.
const RING_ANIM = [
  { anim: "animate-orbit", rev: "animate-orbit-rev", dur: "28s" },
  { anim: "animate-orbit-rev", rev: "animate-orbit", dur: "34s" },
  { anim: "animate-orbit", rev: "animate-orbit-rev", dur: "40s" },
];

/**
 * Larger concentric dashed-ring integration graphic with a centered whitepace
 * mark. Dots/app-icons sit on rotating ring layers so they continuously orbit
 * the center; app icons counter-rotate to stay upright. Motion is disabled
 * under prefers-reduced-motion (global rule freezes the rotation).
 */
export function IntegrationOrbit({ variant, className }: OrbitProps) {
  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[520px]", className)}
      role="img"
      aria-label={
        variant === "apps"
          ? "whitepace connected to Dropbox, Slack, Outlook, Google Drive and Google Calendar"
          : "Collaboration graphic showing whitepace at the center of orbiting contributors"
      }
    >
      {/* dashed rings */}
      <svg
        viewBox="0 0 520 520"
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
            strokeDasharray="3 8"
          />
        ))}
      </svg>

      {/* center mark */}
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-navy shadow-card">
        <Logo tone="light" withWordmark={false} className="scale-125" />
      </div>

      {/* orbiting items, one rotating layer each (grouped by ring speed) */}
      {variant === "collab"
        ? COLLAB_DOTS.map((d, i) => (
            <OrbitLayer key={i} ring={d.ring} angle={d.angle}>
              <span
                className="block rounded-full"
                style={{ width: d.size, height: d.size, background: d.color }}
              />
            </OrbitLayer>
          ))
        : APP_BUBBLES.map(({ ring, angle, Icon, label }) => (
            <OrbitLayer key={label} ring={ring} angle={angle} counterRotate>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card">
                <Icon className="h-8 w-8" title={label} />
              </span>
            </OrbitLayer>
          ))}
    </div>
  );
}

/**
 * A full-size layer that rotates around the center, placing one child on a ring.
 * The starting angle is set via a negative animation-delay (so it composes with
 * the continuous spin instead of fighting a static transform). The child is
 * pushed from the top edge to the ring radius with padding (% of the square box,
 * so it scales responsively). Icons counter-rotate at the same rate to stay upright.
 */
function OrbitLayer({
  ring,
  angle,
  counterRotate = false,
  children,
}: {
  ring: number;
  angle: number;
  counterRotate?: boolean;
  children: React.ReactNode;
}) {
  const r = RINGS[ring];
  const a = RING_ANIM[ring];
  const durS = parseFloat(a.dur);
  // negative delay = start the loop partway = desired initial angle
  const delay = `-${((angle / 360) * durS).toFixed(2)}s`;
  // distance from the top edge (260) down to the ring (260 - r), as % of box width
  const padTopPct = ((260 - r) / 520) * 100;

  const layerStyle: CSSProperties = { animationDuration: a.dur, animationDelay: delay };
  const counterStyle: CSSProperties = { animationDuration: a.dur, animationDelay: delay };

  return (
    <div className={cn("absolute inset-0", a.anim)} style={layerStyle}>
      <div
        className="absolute inset-0 flex justify-center"
        style={{ paddingTop: `${padTopPct}%` }}
      >
        {counterRotate ? (
          <div className={a.rev} style={counterStyle}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
