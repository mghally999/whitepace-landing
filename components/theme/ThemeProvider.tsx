"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

/**
 * Class-based dark mode. Persists to localStorage and respects the OS
 * `prefers-color-scheme` on first load. Toggling adds/removes `.dark`
 * on <html>, which drives the inverted palette in globals.css + `dark:`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
