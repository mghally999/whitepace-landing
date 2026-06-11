import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DataSecurity } from "@/components/sections/DataSecurity";
import { Sponsors } from "@/components/sections/Sponsors";
import { Integrations } from "@/components/sections/Integrations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FEATURE_ROWS, CTA_EVERYWHERE, FINAL_CTA } from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main">
        {/* 2 — Hero */}
        <Hero />

        {/* 3–6 — Alternating feature rows (one reusable component) */}
        {FEATURE_ROWS.map((row) => (
          <FeatureRow key={row.id} data={row} />
        ))}

        {/* 7 — Pricing */}
        <Pricing />

        {/* 8 — CTA banner */}
        <CtaBanner
          id={CTA_EVERYWHERE.id}
          title={CTA_EVERYWHERE.title}
          highlight={CTA_EVERYWHERE.highlight}
          body={CTA_EVERYWHERE.body}
          cta={CTA_EVERYWHERE.cta}
        />

        {/* 9 — 100% your data + node diagram */}
        <DataSecurity />

        {/* 10 — Our sponsors */}
        <Sponsors />

        {/* 11 — Favorite apps integration orbit */}
        <Integrations />

        {/* 12 — Testimonials */}
        <Testimonials />

        {/* 13 — Final CTA */}
        <CtaBanner
          id={FINAL_CTA.id}
          title={FINAL_CTA.title}
          highlight={FINAL_CTA.highlight}
          lines={FINAL_CTA.lines}
          cta={FINAL_CTA.cta}
          contact={FINAL_CTA.contact}
          platforms
        />
      </main>

      <Footer />
    </>
  );
}
