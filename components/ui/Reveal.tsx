"use client";

import { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: ElementType;
};

/**
 * Wraps children in a scroll-reveal container. Adds the `.is-visible` class
 * once the element enters the viewport. Reduced-motion users see content
 * immediately (handled in useInView + globals.css).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
