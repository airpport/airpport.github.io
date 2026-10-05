// Central place for company details. Update these and every page follows.
export const site = {
  name: "airpport",
  legalName: "airpport",
  tagline: "Software that gets small operators off the ground",
  description:
    "airpport is an Australian software company building simple, honest tools for small businesses. Our first product is Spacecamps — online bookings and park management for caravan parks.",
  url: "https://airpport.github.io",
  // TODO: replace with the real inbox before launch.
  email: "hello@airpport.com.au",
  location: "Australia",
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
    "Online bookings, an interactive park map and guest communications for caravan parks — without commissions or setup fees.",
  features: [
    {
      title: "24/7 online bookings",
      description: "Guests book straight from your own branded booking page — day or night, no phone tag.",
    },
    {
      title: "Interactive park map",
      description: "Lay out every powered site, cabin and slab visually, so guests pick exactly where they stay.",
    },
    {
      title: "Live availability",
      description: "One calendar for every site. Real-time availability means no double bookings.",
    },
    {
      title: "Automatic guest emails",
      description: "Confirmations, reminders and arrival details go out on their own.",
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
