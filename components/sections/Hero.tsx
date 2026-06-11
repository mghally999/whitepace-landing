import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-navy text-white dark:bg-[var(--surface-dark)]"
    >
      {/* Faint contour wave line-art */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M-100 ${160 + i * 80} C 360 ${60 + i * 80}, 820 ${320 + i * 80}, 1560 ${120 + i * 80}`}
            stroke="white"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <Container className="relative z-10 grid items-center gap-10 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-2 lg:gap-8 lg:pb-32 lg:pt-44">
        <div className="animate-fade-up text-center lg:text-left">
          <SectionHeading
            as="h1"
            id="hero-heading"
            tone="light"
            title={HERO.title}
          />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-body-lg lg:mx-0">
            {HERO.body}
          </p>
          <div className="mt-9 flex justify-center lg:justify-start">
            <Button variant="primary" size="lg" withArrow href="#try-today">
              {HERO.cta}
            </Button>
          </div>
        </div>

        <div className="animate-hero-in">
          <Placeholder
            width={640}
            height={480}
            priority
            withSkeleton={false}
            alt="whitepace project dashboard preview"
            className="shadow-card"
          />
        </div>
      </Container>
    </section>
  );
}
