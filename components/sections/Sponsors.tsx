import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AppleIcon, GoogleIcon, MicrosoftIcon, SlackIcon } from "@/components/ui/icons";
import { SPONSORS } from "@/lib/content";

const LOGOS = [
  { Icon: AppleIcon, label: "Apple", className: "text-ink dark:text-white" },
  { Icon: MicrosoftIcon, label: "Microsoft", className: "" },
  { Icon: SlackIcon, label: "Slack", className: "" },
  { Icon: GoogleIcon, label: "Google", className: "" },
];

export function Sponsors() {
  return (
    <Section labelledBy="sponsors-heading" theme="light" className="py-16 md:py-20 lg:py-24">
      <Container className="text-center">
        <Reveal>
          <SectionHeading id="sponsors-heading" title={SPONSORS.title} highlight={SPONSORS.highlight} centered />
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 md:grid-cols-4 md:gap-12">
            {LOGOS.map(({ Icon, label, className }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className={`h-9 w-9 ${className}`} title={label} />
                <span className="text-xl font-semibold text-ink dark:text-white sm:text-2xl">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
