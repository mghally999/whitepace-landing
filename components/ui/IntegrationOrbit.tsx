import { Logo } from "./Logo";
import {
  DropboxIcon,
  GmailIcon,
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

// viewBox/box is 520 units; center = 260. Three dashed rings the items ride on.
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
const COLLAB_DOTS: Dot[] = [
  { angle: 0, ring: 1, color: "#FFE492", size: 24 },
  { angle: 55, ring: 2, color: "#4F9CF9", size: 28 },
  { angle: 130, ring: 1, color: "#2EB67D", size: 26 },
  { angle: 200, ring: 2, color: "#4F9CF9", size: 16 },
  { angle: 250, ring: 1, color: "#E01E5A", size: 28 },
  { angle: 315, ring: 2, color: "#E01E5A", size: 18 },
];

type Bubble = { angle: number; ring: number; Icon: typeof GmailIcon; label: string };
const APP_BUBBLES: Bubble[] = [
  { angle: 2, ring: 2, Icon: GmailIcon, label: "Gmail" },
  { angle: 52, ring: 1, Icon: SlackIcon, label: "Slack" },
  { angle: 112, ring: 2, Icon: GoogleDriveIcon, label: "Google Drive" },
  { angle: 184, ring: 1, Icon: GoogleCalendarIcon, label: "Google Calendar" },
  { angle: 256, ring: 2, Icon: OutlookIcon, label: "Outlook" },
  { angle: 306, ring: 1, Icon: DropboxIcon, label: "Dropbox" },
];

const SPIN = "42s";

/**
 * Concentric dashed-ring integration graphic with a centered whitepace mark.
 * Items are positioned STATICALLY around the rings (so they're always evenly
 * distributed — even at rest / reduced-motion), then a single wrapper rotates
 * to make them orbit; icons counter-rotate to stay upright.
 */
export function IntegrationOrbit({ variant, className }: OrbitProps) {
  const isApps = variant === "apps";

  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[460px]", className)}
      role="img"
      aria-label={
        isApps
          ? "whitepace connected to Gmail, Slack, Google Drive, Google Calendar, Outlook and Dropbox"
          : "Collaboration graphic showing whitepace at the center of orbiting contributors"
      }
    >
      {/* dashed rings */}
      <svg
        viewBox={`0 0 ${BOX} ${BOX}`}
        className={cn("absolute inset-0 h-full w-full", isApps ? "text-white" : "text-brand")}
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
            strokeOpacity={isApps ? 0.35 : 0.3}
            strokeWidth="1.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* rotating layer holds every orbiting item */}
      <div className="absolute inset-0 animate-orbit" style={{ animationDuration: SPIN }}>
        {isApps
          ? APP_BUBBLES.map(({ angle, ring, Icon, label }) => (
              <Item key={label} angle={angle} ring={ring} counterRotate>
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-card">
                  <Icon className="h-7 w-7" title={label} />
                </span>
              </Item>
            ))
          : COLLAB_DOTS.map((d, i) => (
              <Item key={i} angle={d.angle} ring={d.ring}>
                <span
                  className="block rounded-full"
                  style={{ width: d.size, height: d.size, background: d.color }}
                />
              </Item>
            ))}
      </div>

      {/* center mark (outside the rotating layer) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {isApps ? (
          <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-card">
            <Logo tone="dark" withWordmark={false} className="scale-[1.4]" />
          </span>
        ) : (
          <span className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-navy shadow-card">
            <Logo tone="light" withWordmark={false} className="scale-[1.4]" />
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * One orbiting item: statically positioned at (angle, ring) via %, so it is
 * always distributed. The optional counter-rotation cancels the wrapper's spin
 * so icons stay upright (dots don't need it).
 */
function Item({
  angle,
  ring,
  counterRotate = false,
  children,
}: {
  angle: number;
  ring: number;
  counterRotate?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={pos(angle, ring)}
    >
      {counterRotate ? (
        <div className="animate-orbit-rev" style={{ animationDuration: SPIN }}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
