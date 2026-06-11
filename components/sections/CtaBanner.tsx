import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AppleIcon, AndroidIcon, WindowsIcon } from "@/components/ui/icons";

type CtaBannerProps = {
  id: string;
  title: string;
  highlight: string;
  /** Single paragraph body OR multiple centered lines. */
  body?: string;
  lines?: string[];
  cta: string;
  /** Secondary "Contact sales" line under the button. */
  contact?: string;
  /** Show the Apple / Windows / Android platform row (final CTA). */
  platforms?: boolean;
};

const PLATFORMS = [
  { Icon: AppleIcon, label: "Apple" },
  { Icon: WindowsIcon, label: "Windows" },
  { Icon: AndroidIcon, label: "Android" },
];

/** Centered navy CTA banner. Reused for both dark call-to-action sections. */
export function CtaBanner({
  id,
  title,
  highlight,
  body,
  lines,
  cta,
  contact,
  platforms = false,
}: CtaBannerProps) {
  return (
    <Section id={id} labelledBy={`${id}-heading`} theme="dark" withWaves>
      <Container className="text-center">
        <Reveal>
          <SectionHeading id={`${id}-heading`} title={title} highlight={highlight} tone="light" centered />

          {body && (
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-body-lg">
              {body}
            </p>
          )}
          {lines && (
            <div className="mx-auto mt-6 max-w-2xl text-base text-white/85 md:text-body-lg">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}

          <div className="mt-9 flex justify-center">
            <Button variant="primary" size="lg" withArrow href="#try-today">
              {cta}
            </Button>
          </div>

          {contact && (
            <p className="mt-5 text-sm text-white/80">
              On a big team?{" "}
              <a href="#" className="font-semibold underline-offset-4 hover:underline">
                Contact sales
              </a>
            </p>
          )}

          {platforms && (
            <ul className="mt-8 flex items-center justify-center gap-8 text-white">
              {PLATFORMS.map(({ Icon, label }) => (
                <li key={label}>
                  <Icon className="h-7 w-7" title={label} />
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
