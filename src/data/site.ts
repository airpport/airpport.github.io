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
    "airpport is an Australian software company building simple tools for small businesses, starting with Spacecamps, booking software for caravan parks.",
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
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "FAQ", href: "/faq" },
];

export const spacecamps = {
  name: "Spacecamps",
  url: "https://spacecamps.com.au",
  tagline: "Your park takes the bookings. We don't take a cut.",
  summary:
    "Online bookings, online check-in, an interactive park map and guest emails for caravan parks. No commission on stays.",
  features: [
    {
      title: "24/7 online bookings",
      description: "Guests pick a free site, see the exact price and book at any hour on a page in your park's colours.",
    },
    {
      title: "Interactive park map",
      description: "Upload a map of your park and place each site on it, so guests can see where they'll stay.",
    },
    {
      title: "One calendar",
      description: "Direct bookings, walk-ins, permanents and OTA stays share one calendar your staff can check from their phones.",
    },
    {
      title: "Online check-in",
      description: "Booking confirmation and check-in emails go out for you, and guests get the gate code on their phone.",
    },
    {
      title: "Secure payments",
      description: "Guests pay by card when they book, straight to your bank through Stripe.",
    },
    {
      title: "Built for the bush",
      description: "Fast for guests and staff on poor reception, even on one bar of signal.",
    },
  ],
  plans: [
    { name: "Small", price: "$29", unit: "/month", detail: "Up to 100 sites" },
    { name: "Medium", price: "$79", unit: "/month", detail: "Unlimited sites", featured: true },
    { name: "Enterprise", price: "Custom", unit: "", detail: "Multiple parks & API access" },
  ],
};
