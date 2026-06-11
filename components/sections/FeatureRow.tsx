import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { IntegrationOrbit } from "@/components/ui/IntegrationOrbit";
import { cn } from "@/lib/cn";

export type FeatureRowData = {
  id: string;
  title: string;
  highlight: string;
  body: string;
  cta: string;
  theme: "light" | "dark";
  media: "image" | "orbit-collab";
  reverse: boolean;
};

/**
 * Reusable two-column feature row. `reverse` flips the desktop column order
 * (text|media vs media|text). On mobile both layouts stack text-first.
 * One component drives Project Management / Work together / Use as Extension
 * / Customise it to your needs.
 */
export function FeatureRow({ data }: { data: FeatureRowData }) {
  const headingId = `${data.id}-heading`;
  // Section `theme` describes the BACKGROUND; heading/body tone is the inverse.
  const isDarkBg = data.theme === "dark";
  const tone = isDarkBg ? "light" : "dark";

  const media =
    data.media === "orbit-collab" ? (
      <IntegrationOrbit variant="collab" />
    ) : (
      <Placeholder
        width={560}
        height={420}
        alt={`${data.title} preview`}
        className="shadow-card"
      />
    );

  return (
    <Section id={data.id} labelledBy={headingId} theme={data.theme} withWaves={data.theme === "dark"}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[100px]">
          {/* Text — always first in the DOM (mobile text-first); reordered on lg. */}
          <Reveal className={cn(data.reverse && "lg:order-2")}>
            <SectionHeading
              id={headingId}
              title={data.title}
              highlight={data.highlight}
              tone={tone}
            />
            <p
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed md:text-body-lg",
                isDarkBg ? "text-white/85" : "text-ink/80 dark:text-white/75"
              )}
            >
              {data.body}
            </p>
            <Button
              variant="primary"
              withArrow
              href="#try-today"
              className="mt-8"
            >
              {data.cta}
            </Button>
          </Reveal>

          {/* Media */}
          <Reveal delay={120} className={cn(data.reverse && "lg:order-1")}>
            {media}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
