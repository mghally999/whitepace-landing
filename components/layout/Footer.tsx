import { ChevronDown, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/icons";
import { FOOTER } from "@/lib/content";

const SOCIALS = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white dark:bg-[var(--surface-dark)]">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              {FOOTER.blurb}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <h2 className="text-base font-bold">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Try It Today */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-bold">{FOOTER.tryToday.title}</h2>
            <p className="mt-4 whitespace-pre-line text-sm text-white/75">
              {FOOTER.tryToday.body}
            </p>
            <Button variant="primary" withArrow href="#try-today" className="mt-5">
              {FOOTER.tryToday.cta}
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            English
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
            {FOOTER.legal.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
            <li className="text-white/60">{FOOTER.copyright}</li>
          </ul>

          <ul className="flex items-center gap-4">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" title={label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
