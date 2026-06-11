import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IntegrationOrbit } from "@/components/ui/IntegrationOrbit";
import { INTEGRATIONS } from "@/lib/content";

/** "Work with Your Favorite Apps Using whitepace" — orbit left, text right (navy). */
export function Integrations() {
  return (
    <Section id={INTEGRATIONS.id} labelledBy="integrations-heading" theme="dark" withWaves>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
          <Reveal className="lg:order-1">
            <IntegrationOrbit variant="apps" />
          </Reveal>
          <Reveal delay={120} className="lg:order-2">
            <SectionHeading
              id="integrations-heading"
              title={INTEGRATIONS.title}
              highlight={INTEGRATIONS.highlight}
              tone="light"
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-body-lg">
              {INTEGRATIONS.body}
            </p>
            <Button variant="primary" withArrow href="#try-today" className="mt-8">
              {INTEGRATIONS.cta}
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
