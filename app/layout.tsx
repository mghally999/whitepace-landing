import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://whitepace-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "whitepace — Get More Done",
    template: "%s | whitepace",
  },
  description:
    "whitepace is project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
  keywords: ["project management", "collaboration", "notes", "productivity", "whitepace"],
  authors: [{ name: "whitepace" }],
  openGraph: {
    title: "whitepace — Get More Done",
    description:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
    url: SITE_URL,
    siteName: "whitepace",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "whitepace — Get More Done",
    description:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#043873",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Mark JS available before paint so scroll-reveal hides only when it can also reveal. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
