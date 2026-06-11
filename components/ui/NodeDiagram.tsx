import { Key, Coins, Shield, Lock } from "lucide-react";
import { Logo } from "./Logo";

/**
 * "100% your data" node diagram: white rounded-square tiles holding key,
 * coins, shield and lock icons, plus the whitepace mark at the center,
 * connected by dashed blue lines with dots at the joins.
 */
export function NodeDiagram() {
  const tiles = [
    { Icon: Key, label: "Encryption key", x: 18, y: 16, accent: "text-navy" },
    { Icon: Coins, label: "Open format", x: 78, y: 24, accent: "text-accent" },
    { Icon: Shield, label: "Security", x: 14, y: 74, accent: "text-brand" },
    { Icon: Lock, label: "End-to-end encryption", x: 80, y: 76, accent: "text-navy" },
  ];

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      role="img"
      aria-label="whitepace secures your data with encryption keys, an open format, security and end-to-end encryption"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand"
        fill="none"
        aria-hidden="true"
      >
        {tiles.map((t, i) => (
          <g key={i}>
            <line
              x1="50"
              y1="50"
              x2={t.x + 6}
              y2={t.y + 6}
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              strokeOpacity="0.5"
            />
            <circle cx={t.x + 6} cy={t.y + 6} r="1" fill="currentColor" />
          </g>
        ))}
      </svg>

      {tiles.map(({ Icon, label, x, y, accent }) => (
        <div
          key={label}
          className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-card animate-float"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon className={`h-6 w-6 ${accent}`} aria-hidden="true" />
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-navy shadow-card">
        <Logo tone="light" withWordmark={false} />
      </div>
    </div>
  );
}
