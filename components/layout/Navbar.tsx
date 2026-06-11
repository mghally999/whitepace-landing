"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS, HERO } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Placeholder dropdown contents — the design shows triggers with chevrons. */
const DROPDOWN_ITEMS = ["Overview", "Features", "What's new"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Sticky background after 80px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlighting (bonus).
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled ? "bg-navy/90 shadow-nav backdrop-blur-md" : "bg-transparent"
        )}
      >
        <Container as="nav" className="flex items-center justify-between py-4" aria-label="Primary">
          <a href="#top" aria-label="whitepace home" className="rounded-md">
            <Logo tone="light" />
          </a>

          {/* Desktop links with dropdowns */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-white/90 transition-colors hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      aria-hidden="true"
                    />
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded bg-accent" />
                    )}
                  </a>
                  {/* Dropdown: opens on hover and keyboard focus-within */}
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-52 overflow-hidden rounded-xl bg-white p-2 shadow-card">
                      {DROPDOWN_ITEMS.map((item) => (
                        <li key={item}>
                          <a
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-sky/30"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button variant="login" href="#pricing">
              Login
            </Button>
            <Button variant="primary" withArrow href="#try-today">
              {HERO.cta}
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
