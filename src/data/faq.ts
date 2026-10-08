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
          "An independent Australian software company. We build affordable tools for small businesses in industries the big vendors overlook.",
      },
      {
        question: "Why the name?",
        answer:
          "An airport is where journeys start. We want to be where small operators get their ideas off the ground.",
      },
      {
        question: "Who's behind it?",
        answer:
          "airpport is founder-led. The person who builds the product also answers your emails.",
      },
    ],
  },
  {
    title: "SPACECAMPS",
    items: [
      {
        question: "What is SPACECAMPS?",
        answer:
          "Our first product: booking and park management software for caravan parks and campgrounds. You get a 24/7 booking page, an interactive park map, live availability, automatic guest emails and card payments.",
      },
      {
        question: "How much does it cost?",
        answer:
          "$29 a month covers up to 100 sites. Unlimited sites cost $79 a month, and groups running several parks get custom pricing. There are no setup fees or booking commissions.",
      },
      {
        question: "Can I try it first?",
        answer:
          "Yes. Every plan has a 30-day free trial, long enough to set up your park and take real bookings before you pay.",
      },
      {
        question: "Do I need to be technical?",
        answer:
          "No. If you can use email, you can run SPACECAMPS. It works on a phone, even with patchy reception.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "What's next after SPACECAMPS?",
        answer:
          "We're working on it now, for another industry stuck with bad software.",
      },
      {
        question: "Are you open to partnerships?",
        answer:
          "Yes. We talk with industry associations, integration partners and investors who think small operators deserve good software at a fair price.",
      },
      {
        question: "How do I get in touch?",
        answer:
          "For SPACECAMPS questions and support, go to spacecamps.com.au. A person who works on the product will answer.",
      },
    ],
  },
];
