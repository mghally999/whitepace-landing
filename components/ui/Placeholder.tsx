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

/** Generates a light-blue dashboard-like placeholder as an inline SVG data URI. */
function makeSvg(w: number, h: number) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#C4DEFD'/>
        <stop offset='1' stop-color='#A7CEFC'/>
      </linearGradient>
    </defs>
    <rect width='${w}' height='${h}' rx='16' fill='url(#g)'/>
    <rect x='${w * 0.08}' y='${h * 0.12}' width='${w * 0.5}' height='${h * 0.07}' rx='8' fill='#ffffff' opacity='0.7'/>
    <rect x='${w * 0.08}' y='${h * 0.26}' width='${w * 0.84}' height='${h * 0.42}' rx='12' fill='#ffffff' opacity='0.55'/>
    <rect x='${w * 0.08}' y='${h * 0.76}' width='${w * 0.36}' height='${h * 0.1}' rx='8' fill='#4F9CF9' opacity='0.8'/>
    <rect x='${w * 0.5}' y='${h * 0.76}' width='${w * 0.42}' height='${h * 0.1}' rx='8' fill='#ffffff' opacity='0.7'/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
