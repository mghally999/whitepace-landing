import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NodeDiagram } from "@/components/ui/NodeDiagram";
import { DATA_SECURITY } from "@/lib/content";

export function DataSecurity() {
  return (
    <Section id={DATA_SECURITY.id} labelledBy="data-heading" theme="light">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[100px]">
          <Reveal>
            <SectionHeading
              id="data-heading"
              title={DATA_SECURITY.title}
              highlight={DATA_SECURITY.highlight}
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 md:text-body-lg dark:text-white/75">
              {DATA_SECURITY.body}
            </p>
            <Button variant="primary" withArrow href="#try-today" className="mt-8">
              {DATA_SECURITY.cta}
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <NodeDiagram />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
