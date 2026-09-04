export type ContactOption = {
  title: string;
  description: string;
};

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Start a conversation about what you want to build.",
    summary:
      "Tell BIMAL GLOBAL about the product, platform, system, or technical challenge you are thinking through. The first step is understanding the context clearly.",
  },
  form: {
    title: "Project inquiry",
    summary:
      "Share the useful details you have now. The structure can later connect to a CRM, backend workflow, email service, or admin dashboard.",
    submitLabel: "Send Inquiry",
    successMessage:
      "Thank you. Your inquiry has been received in the demo contact endpoint.",
    errorMessage:
      "Something went wrong while sending the inquiry. Please try again.",
  },
  fields: {
    projectTypes: [
      "New product or platform",
      "Existing system improvement",
      "Cloud or infrastructure",
      "Mobile application",
      "AI-enabled product",
      "General technology discussion",
    ],
    budgets: [
      "Not defined yet",
      "Exploratory",
      "Small project",
      "Growth project",
      "Enterprise initiative",
    ],
  },
  options: [
    {
      title: "Build something new",
      description:
        "For new products, platforms, applications, APIs, mobile experiences, and digital systems.",
    },
    {
      title: "Improve an existing system",
      description:
        "For modernization, reliability, performance, infrastructure, UX, or product evolution work.",
    },
    {
      title: "Discuss a technical direction",
      description:
        "For early-stage architecture, product strategy, capability planning, or engineering discovery.",
    },
  ] satisfies ContactOption[],
  details: [
    "India and Nepal focus with global delivery ambitions.",
    "Frontend-first website contact flow ready for backend integration.",
    "No pricing, fixed timelines, or delivery guarantees are assumed from this form.",
  ],
  faqs: [
    {
      question: "What should I include in the message?",
      answer:
        "Share what you are building, what problem you want to solve, the current stage, important constraints, and any timeline or decision context you already know.",
    },
    {
      question: "Can I contact BIMAL GLOBAL for an early idea?",
      answer:
        "Yes. Early conversations can focus on understanding the product direction, technical options, and the next practical step.",
    },
    {
      question: "Does this form create a fixed project scope?",
      answer:
        "No. It starts a conversation. Project scope, timelines, cost, and delivery model should be defined after discovery.",
    },
  ] satisfies ContactFaq[],
} as const;
