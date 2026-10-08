// Central place for company details. Update these and every page follows.
export const site = {
  name: "airpport",
  legalName: "airpport Pty Ltd",
  // Registered as AIRPPORT PTY LTD. ABN and ACN are shown on the privacy and terms pages (and the disabled
  // contact page), and in the structured data search engines read.
  abn: "85 703 022 173",
  acn: "703 022 173",
  tagline: "Software that gets small operators off the ground",
  description:
    "airpport is an Australian software company building simple tools for small businesses, starting with SPACECAMPS, booking software for caravan parks.",
  url: "https://airpport.com",
  // TODO: replace with the real inbox before launch. Hidden on the site for now; only the disabled
  // contact page (src/pages/_contact.astro) uses it.
  email: "hello@airpport.com.au",
  location: "Australia",
  state: "NSW",
  // "Last updated" date (YYYY-MM-DD) on the privacy policy and terms. Update it whenever either page changes.
  legalUpdated: "2026-10-08",
};

export const nav = [
  { label: "About", href: "/about/" },
  { label: "Products", href: "/products/" },
  { label: "FAQ", href: "/faq/" },
];

export const spacecamps = {
  name: "SPACECAMPS",
  url: "https://spacecamps.com.au",
  tagline: "Your park takes the bookings. We don't take a cut.",
  summary:
    "Online bookings, an interactive park map and guest emails for caravan parks. No commissions or setup fees.",
  features: [
    {
      title: "24/7 online bookings",
      description: "Guests book on your own branded page, day or night, without calling you.",
    },
    {
      title: "Interactive park map",
      description: "Map every powered site, cabin and slab so guests can choose where they stay.",
    },
    {
      title: "Live availability",
      description: "One live calendar covers every site, so nothing gets double-booked.",
    },
    {
      title: "Automatic guest emails",
      description: "Confirmations, reminders and arrival details send themselves.",
    },
    {
      title: "Secure payments",
      description: "Card payments through Stripe, paid straight into your account.",
    },
    {
      title: "Built for the bush",
      description: "Mobile-first and light on data, so it still works when the reception doesn't.",
    },
  ],
  plans: [
    { name: "Small", price: "$29", unit: "/month", detail: "Up to 100 sites" },
    { name: "Medium", price: "$79", unit: "/month", detail: "Unlimited sites", featured: true },
    { name: "Enterprise", price: "Custom", unit: "", detail: "Multiple parks & API access" },
  ],
};
