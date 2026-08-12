export type ProductStatus = "Live" | "In development";

export type Product = {
  slug: string;
  name: string;
  /** The product's own headline, quoted from its site. */
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  period?: string;
  org?: { name: string; url: string };
  url: string;
  status: ProductStatus;
  /** True for the product actively being built right now. */
  current: boolean;
  logo: string;
  logoAlt: string;
  /** Cover gradient, taken from each product's real brand colours. */
  brand: { from: string; to: string };
  /** Whether the logo file is drawn for a dark or light cover. */
  logoTone: "light" | "dark";
};

export const products: Product[] = [
  {
    slug: "stroomup",
    name: "StroomUp",
    tagline: "Empowering Africa's Hidden Talent.",
    description:
      "A social platform where African creators create, advertise and get paid from their content. Audiences send gifts, money and recognition straight to creators, and monetisation rolls out in two stages — first a culture of support, then real transactions.",
    highlights: [
      "StroomGift — in-app rewards that move money and recognition directly to creators",
      "Engagement scoring from likes, comments and shares that unlocks rewards",
      "AI-powered feed matching creators with the audiences most likely to back them",
      "Live streaming with real-time video processing and delivery",
      "Creator analytics dashboard, with symmetric encryption over data and transactions",
    ],
    stack: ["Django", "REST APIs", "Live streaming", "JWT + RBAC"],
    role: "Chief Technology Officer",
    period: "June 2025 – present",
    url: "https://www.stroomup.com/",
    status: "In development",
    current: true,
    logo: "/products/stroomup.png",
    logoAlt: "StroomUp logo",
    brand: { from: "#0B1220", to: "#1E40AF" },
    logoTone: "light",
  },
  {
    slug: "gc-builds",
    name: "GC Builds",
    tagline: "One Platform. Every stage of property.",
    description:
      "Construction and real-estate management end to end — build, sell and manage every project from one connected dataset instead of a stack of spreadsheets and disconnected apps.",
    highlights: [
      "Construction management — phases, milestones, dependent tasks and daily site logs",
      "Property sales and rentals — installment plans, unit inventory, leases, rent invoicing",
      "Financial tracking with cost codes, change orders, retainage and a full audit trail",
      "Workforce management — face and fingerprint attendance via Hikvision, auto timesheets",
      "Live site monitoring with HLS camera streaming, remote door control and alarm rules",
    ],
    stack: ["Next.js", "React", "REST APIs", "RBAC", "Hikvision", "QuickBooks"],
    role: "Chief Technology Officer",
    period: "October 2025 – present",
    org: { name: "GC Technologies", url: "https://gcbuilds.io/" },
    url: "https://gcbuilds.io/",
    status: "Live",
    current: false,
    logo: "/products/gc-builds.svg",
    logoAlt: "GC Builds logo",
    brand: { from: "#FFC93C", to: "#FF9F1C" },
    logoTone: "dark",
  },
  {
    slug: "ijambo",
    name: "Ijambo",
    tagline: "Play Kinyarwanda, one riddle a day.",
    description:
      "The daily Kinyarwanda word game. Three free games every day — a word puzzle, a traditional Rwandan riddle and a daily quiz — so learning the language becomes a habit rather than a lesson.",
    highlights: [
      "Ijambo — guess a 3–6 letter Kinyarwanda word from colour clues in six tries",
      "Ibisakuzo — a traditional Rwandan riddle a day, with hints and the cultural meaning",
      "A five-question daily quiz on history, culture and geography, with 'Did you know?' notes",
      "XP, levels, daily streaks and a national leaderboard",
      "Installable PWA, interface in English, Kinyarwanda and French, MoMo and card payments",
    ],
    stack: ["PWA", "Kinyarwanda", "MTN MoMo", "Airtel Money"],
    role: "Founder",
    url: "https://ijambo.rw/",
    status: "Live",
    current: false,
    logo: "/products/ijambo.webp",
    logoAlt: "Ijambo logo",
    brand: { from: "#1E5C2E", to: "#5FA05A" },
    logoTone: "light",
  },
  {
    slug: "agaseke-store",
    name: "Agaseke Store",
    tagline: "Anyone can become a vendor. Sell to thousands.",
    description:
      "Rwanda's marketplace for trusted vendors and everyday shoppers — a multi-vendor commerce SaaS where anyone can open a storefront, and buyers discover and purchase with everything tracked in one place.",
    highlights: [
      "Free vendor onboarding and storefront setup, verified against business details and tax ID",
      "Product catalogue, cart and checkout with payment processing",
      "Integrated delivery coordination, order tracking and notifications",
      "Invoices, coupons, purchase history, favourites and in-app messaging",
      "Rental and subscription listings alongside straight sales",
    ],
    stack: ["Next.js", "Multi-vendor SaaS", "Payments", "Logistics"],
    role: "Chief Technology Officer",
    org: { name: "viastroom", url: "https://viastroom.com/" },
    url: "https://www.agasekestore.com/",
    status: "Live",
    current: false,
    logo: "/products/agaseke-white.png",
    logoAlt: "Agaseke Store logo",
    brand: { from: "#1A1D21", to: "#4A3A12" },
    logoTone: "light",
  },
];

export const currentProducts = products.filter((p) => p.current);
export const shippedProducts = products.filter((p) => !p.current);
