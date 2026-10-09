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
    title: "Spacecamps",
    items: [
      {
        question: "What is Spacecamps?",
        answer:
          "Our first product: booking and park management software for caravan parks and campgrounds. You get a booking page guests can use at any hour, an interactive park map, one calendar for every booking, online check-in, confirmation and check-in emails, and card payments through Stripe.",
      },
      {
        question: "How much does it cost?",
        answer:
          "$29 a month covers up to 100 sites. Unlimited sites cost $79 a month, and groups running several parks get custom pricing. There's no commission or booking fee on stays. Stripe's card processing fees still apply.",
      },
      {
        question: "Can I try it first?",
        answer:
          "Yes. Every plan has a 30-day free trial and you don't need a credit card to start, so you can try it with your own park's sites and rates before you subscribe.",
      },
      {
        question: "Do I need to be technical?",
        answer:
          "No. If you can fill in a form, you can set up your park, and most parks are live in under an hour. It works on a phone, even on one bar of signal.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "What's next after Spacecamps?",
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
          "For Spacecamps questions and support, go to spacecamps.com.au. A person who works on the product will answer.",
      },
    ],
  },
];
