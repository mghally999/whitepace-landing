"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
    const card = trackRef.current?.children[clamped] as HTMLElement | undefined;
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
            aria-label="Customer testimonials"
            className="relative mt-14"
          >
            <ul
              ref={trackRef}
              onScroll={onScroll}
              className="grid auto-cols-[88%] grid-flow-col gap-7 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:auto-cols-[60%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {TESTIMONIALS.items.map((t, i) => (
                <li
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.items.length}`}
                  className={cn(
                    "flex snap-start flex-col rounded-lg p-8 shadow-card",
                    t.highlighted
                      ? "bg-brand text-white"
                      : "bg-[var(--bg)] text-ink dark:bg-[var(--bg-alt)] dark:text-white"
                  )}
                >
                  {/* avatar at top */}
                  <Image
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover ring-4 ring-white/40"
                  />

                  <p
                    className={cn(
                      "mt-7 flex-1 text-base leading-relaxed",
                      t.highlighted ? "text-white/95" : "text-ink/80 dark:text-white/80"
                    )}
                  >
                    {t.quote}
                  </p>

                  {/* name/role + stars */}
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className={cn("text-sm", t.highlighted ? "text-white/80" : "text-ink/60 dark:text-white/60")}>
                        {t.role}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                      ))}
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
