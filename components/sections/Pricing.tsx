import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PRICING } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section id="pricing" labelledBy="pricing-heading" theme="light">
      <Container>
        <Reveal>
          <SectionHeading
            id="pricing-heading"
            title={PRICING.title}
            highlight={PRICING.highlight}
            subtitle={PRICING.subtitle}
            centered
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
          {PRICING.plans.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 100}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border p-8 transition-transform duration-300",
                  plan.featured
                    ? "border-transparent bg-navy text-white shadow-card lg:-translate-y-4 lg:scale-[1.03]"
                    : "border-ink/10 bg-[var(--bg)] text-ink hover:-translate-y-1 hover:shadow-card dark:border-white/15 dark:text-white"
                )}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-4 text-h3 font-bold",
                    plan.featured ? "text-accent" : "text-navy dark:text-white"
                  )}
                >
                  {plan.price}
                </p>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.featured ? "text-white/85" : "text-ink/70 dark:text-white/70"
                  )}
                >
                  {plan.tagline}
                </p>

                <Button
                  variant={plan.featured ? "primary" : "outline"}
                  withArrow
                  href="#try-today"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 space-y-4">
                  {PRICING.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          plan.featured ? "text-accent" : "text-brand"
                        )}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-white/90" : "text-ink/80 dark:text-white/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
