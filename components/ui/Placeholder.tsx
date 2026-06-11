"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** Aspect ratio width/height for layout reservation (no CLS). */
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Show a skeleton shimmer until the image loads. */
  withSkeleton?: boolean;
};

/**
 * Product-screenshot stand-in. The design uses light-blue placeholder
 * rectangles where dashboards go; we render a generated SVG (data URI) via
 * next/image so width/height are reserved (no layout shift) and the bonus
 * "loading skeleton" requirement is satisfied.
 */
export function Placeholder({
  width,
  height,
  alt,
  className,
  priority = false,
  withSkeleton = true,
}: PlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const src = makeSvg(width, height);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        withSkeleton && !loaded && "animate-pulse bg-sky/40",
        className
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 90vw, (max-width: 1152px) 45vw, 640px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/**
 * The design renders product-screenshot areas as clean solid light-blue
 * (#C4DEFD) rounded rectangles — confirmed against both the supplied PNGs and
 * the Figma "Illustration" nodes. We reproduce exactly that, as an inline SVG
 * data URI (no extra request, no CLS, supports the loading skeleton).
 */
function makeSvg(w: number, h: number) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <rect width='${w}' height='${h}' rx='16' fill='#C4DEFD'/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
