"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, TESTIMONIALS.items.length - 1));
    setActive(clamped);
    const track = trackRef.current;
    const card = track?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / (track.scrollWidth / TESTIMONIALS.items.length));
    setActive(Math.max(0, Math.min(i, TESTIMONIALS.items.length - 1)));
  };

  return (
    <Section labelledBy="testimonials-heading" theme="light">
      <Container>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            title={TESTIMONIALS.title}
            highlight={TESTIMONIALS.highlight}
            centered
          />
        </Reveal>

        <Reveal delay={120}>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            className="relative mt-14"
          >
            <ul
              ref={trackRef}
              onScroll={onScroll}
              className="grid auto-cols-[88%] grid-flow-col gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:auto-cols-[60%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {TESTIMONIALS.items.map((t, i) => (
                <li
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.items.length}`}
                  className={cn(
                    "flex snap-start flex-col rounded-lg p-8 transition-shadow",
                    t.highlighted
                      ? "bg-brand text-white shadow-card"
                      : "bg-[var(--bg)] text-ink shadow-card dark:bg-[var(--bg-alt)] dark:text-white"
                  )}
                >
                  <Quote
                    className={cn(
                      "h-9 w-9 rotate-180",
                      t.highlighted ? "text-white" : "text-navy dark:text-white"
                    )}
                    aria-hidden="true"
                  />
                  <p className="mt-4 flex-1 text-base leading-relaxed md:text-lg">{t.quote}</p>
                  <hr className={cn("my-6 border-t", t.highlighted ? "border-white/30" : "border-ink/10 dark:border-white/15")} />
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        t.highlighted ? "bg-white/20 text-white" : "bg-sky/40 text-navy"
                      )}
                    >
                      OS
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className={cn("text-sm", t.highlighted ? "text-white/80" : "text-ink/70 dark:text-white/70")}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-navy transition-colors hover:bg-sky/30 disabled:opacity-40 dark:border-white/20 dark:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active === i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      active === i ? "w-6 bg-navy dark:bg-white" : "w-2.5 bg-brand/50"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === TESTIMONIALS.items.length - 1}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-navy transition-colors hover:bg-sky/30 disabled:opacity-40 dark:border-white/20 dark:text-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
