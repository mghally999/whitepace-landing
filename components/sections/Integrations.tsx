import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { INTEGRATIONS } from "@/lib/content";

/** "Work with Your Favorite Apps Using whitepace" — exact Figma orbit (left), text (right). */
export function Integrations() {
  return (
    <Section id={INTEGRATIONS.id} labelledBy="integrations-heading" theme="dark" withWaves>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
          <Reveal className="lg:order-1">
            <Image
              src="/figma/apps-orbit.svg"
              alt="whitepace connected to Gmail, Dropbox, Slack, Outlook, Google Drive and Google Calendar"
              width={582}
              height={471}
              unoptimized
              className="mx-auto w-full max-w-[520px] motion-safe:animate-float"
            />
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
