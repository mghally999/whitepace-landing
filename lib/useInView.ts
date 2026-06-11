"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal IntersectionObserver hook for scroll-reveal animations.
 * Fires once, then disconnects. Respects prefers-reduced-motion by
 * reporting `inView` immediately so content is never trapped invisible.
 */
export function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...opts }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}
