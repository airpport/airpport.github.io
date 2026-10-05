export interface FaqGroup {
  title: string;
  items: { question: string; answer: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "About airpport",
    items: [
      {
        question: "What is airpport?",
        answer:
          "airpport is an independent Australian software company. We build focused, affordable tools for small businesses in industries that big software vendors tend to overlook.",
      },
      {
        question: "Why the name?",
        answer:
          "An airport is where journeys begin. We want to be the launch pad for small operators — the place where good ideas get off the ground and run smoothly every day after.",
      },
      {
        question: "Who's behind it?",
        answer:
          "airpport is founder-led. The person who builds the product is the same person who answers your emails, which keeps us close to the people who use what we make.",
      },
    ],
  },
  {
    title: "Spacecamps",
    items: [
      {
        question: "What is Spacecamps?",
        answer:
          "Spacecamps is our first product: online booking and park management software for caravan parks and campgrounds. It includes a 24/7 booking page, an interactive park map, live availability, automatic guest emails and secure payments.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Plans start at $29 a month for parks with up to 100 sites, $79 a month for unlimited sites, and custom pricing for groups running multiple parks. There are no setup fees and no booking commissions.",
      },
      {
        question: "Can I try it first?",
        answer:
          "Yes. Every plan comes with a 30-day free trial, so you can set up your park and take real bookings before you pay anything.",
      },
      {
        question: "Do I need to be technical?",
        answer:
          "Not at all. If you can use email, you can run Spacecamps. It's designed for busy park managers, and it works well on a phone, even with patchy reception.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "What's next after Spacecamps?",
        answer:
          "We're exploring our next product now, again for an industry that deserves better tools. If you run a small business with a frustrating software problem, we'd genuinely love to hear about it.",
      },
      {
        question: "Are you open to partnerships?",
        answer:
          "Yes. We're happy to talk with industry associations, integration partners and investors who share our view that small operators deserve great software at a fair price.",
      },
      {
        question: "How do I get in touch?",
        answer:
          "Email us any time — a real person reads every message. For Spacecamps support, you can also reach the team through spacecamps.com.au.",
      },
    ],
  },
];
