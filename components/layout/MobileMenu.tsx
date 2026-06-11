"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_LINKS, HERO } from "@/lib/content";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Full-screen mobile navigation. Animated entrance, Esc-to-close, focus trap,
 * and body-scroll lock while open.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        className="absolute inset-0 h-full w-full bg-navy/60 backdrop-blur-sm"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="absolute inset-x-0 top-0 animate-menu-in bg-navy px-6 pb-10 pt-5 text-white shadow-nav"
      >
        <div className="flex items-center justify-between">
          <Logo tone="light" />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-lg font-semibold hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <Button variant="login" className="w-full" href="#pricing" onClick={onClose}>
            Login
          </Button>
          <Button variant="primary" className="w-full" withArrow href="#try-today" onClick={onClose}>
            {HERO.cta}
          </Button>
          <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-sm text-white/70">Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
