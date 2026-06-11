/**
 * Single source of truth for all page copy. Copy is taken verbatim from the
 * design, with the template's naming bugs standardized:
 *   - every product reference -> "whitepace" / "Whitepace"
 *   - every primary CTA -> "Try Whitepace free"
 *   - "Evernote" / "Taskey" / "TasKey" / "Whitepate" corrected.
 */

export const NAV_LINKS = [
  { label: "Products", href: "#project-management" },
  { label: "Solutions", href: "#work-together" },
  { label: "Resources", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const HERO = {
  title: "Get More Done with whitepace",
  body:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
  cta: "Try Whitepace free",
};

/** The four alternating feature rows (sections 3–6 of V1). */
export const FEATURE_ROWS = [
  {
    id: "project-management",
    title: "Project Management",
    highlight: "Management",
    body:
      "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
    cta: "Get Started",
    theme: "light" as const,
    media: "image" as const,
    reverse: false,
  },
  {
    id: "work-together",
    title: "Work together",
    highlight: "together",
    body:
      "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
    cta: "Try it now",
    theme: "light" as const,
    media: "orbit-collab" as const,
    reverse: true,
  },
  {
    id: "use-as-extension",
    title: "Use as Extension",
    highlight: "Extension",
    body:
      "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
    cta: "Let's Go",
    theme: "dark" as const,
    media: "image" as const,
    reverse: false,
  },
  {
    id: "customise",
    title: "Customise it to your needs",
    highlight: "your needs",
    body:
      "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
    cta: "Let's Go",
    theme: "light" as const,
    media: "image" as const,
    reverse: true,
  },
];

export const PRICING = {
  title: "Choose Your Plan",
  highlight: "Your Plan",
  subtitle:
    "Whether you want to get organized, keep your personal life on track, or boost workplace productivity, whitepace has the right plan for you.",
  features: [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ],
  plans: [
    {
      name: "Free",
      price: "$0",
      tagline: "Capture ideas and find them quickly",
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Personal",
      price: "$11.99",
      tagline: "Keep home and family on track",
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Organization",
      price: "$49.99",
      tagline: "Capture ideas and find them quickly",
      cta: "Get Started",
      featured: false,
    },
  ],
};

export const CTA_EVERYWHERE = {
  id: "cta-everywhere",
  title: "Your work, everywhere you are",
  highlight: "you are",
  body:
    "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
  cta: "Try Whitepace free",
};

export const DATA_SECURITY = {
  id: "data",
  title: "100% your data",
  highlight: "data",
  body:
    "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.",
  cta: "Read more",
};

export const SPONSORS = {
  title: "Our sponsors",
  highlight: "sponsors",
};

export const INTEGRATIONS = {
  id: "integrations",
  title: "Work with Your Favorite Apps Using whitepace",
  highlight: "Favorite Apps",
  body:
    "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
  cta: "Read more",
};

export const TESTIMONIALS = {
  title: "See what our trusted users Say",
  highlight: "Say",
  items: [
    {
      quote:
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      name: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/figma/avatar-1.png",
      highlighted: false,
    },
    {
      quote:
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      name: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/figma/avatar-2.png",
      highlighted: true,
    },
    {
      quote:
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      name: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/figma/avatar-3.png",
      highlighted: true,
    },
  ],
};

export const FINAL_CTA = {
  id: "try-today",
  title: "Try whitepace today",
  highlight: "today",
  lines: ["Get started for free.", "Add your whole team as your needs grow."],
  cta: "Try Whitepace free",
  contact: "On a big team? Contact sales",
};

export const FOOTER = {
  blurb:
    "whitepace was created for the new ways we live and work. We make a better workspace around the world",
  columns: [
    {
      title: "Product",
      links: ["Overview", "Pricing", "Customer stories"],
    },
    {
      title: "Resources",
      links: ["Blog", "Guides & tutorials", "Help center"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Media kit"],
    },
  ],
  tryToday: {
    title: "Try It Today",
    body: "Get started for free.\nAdd your whole team as your needs grow.",
    cta: "Start today",
  },
  legal: ["Terms & privacy", "Security", "Status"],
  copyright: "©2021 Whitepace LLC.",
};
