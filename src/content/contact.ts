export type ContactOption = {
  description: string;
  href: string;
  title: string;
};

export type ContactFaq = {
  answer: string;
  question: string;
};

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Let's build what comes next.",
    summary:
      "Tell us what you are trying to build, improve, connect, or scale. We will start by understanding the problem, the product, and the technology behind it.",
    primaryCta: { href: "#contact-form", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  form: {
    title: "Start with the problem.",
    summary:
      "You do not need a complete specification. A clear description of the problem is a good place to start.",
    submitLabel: "Review Inquiry",
    loadingLabel: "Checking details...",
    successMessage:
      "Your inquiry was submitted successfully through the configured contact endpoint.",
    deliveryUnavailableMessage:
      "This contact form is validated, but message delivery is not configured yet. No inquiry has been sent.",
    errorMessage:
      "The inquiry could not be processed. Please review the fields and try again.",
  },
  fields: {
    helpTopics: [
      "Software Engineering",
      "Product Development",
      "Mobile Platforms",
      "Cloud & Infrastructure",
      "Artificial Intelligence",
      "Existing System Modernization",
      "Other",
    ],
    timelines: [
      "Not defined yet",
      "Exploring options",
      "Soon",
      "This quarter",
      "Longer-term planning",
    ],
  },
  usefulContext: [
    {
      title: "The problem",
      description: "What are you trying to solve, improve, connect, or scale?",
    },
    {
      title: "The product",
      description: "What are you trying to build, modernize, or evolve?",
    },
    {
      title: "The users",
      description: "Who will use the system, product, workflow, or platform?",
    },
    {
      title: "The current technology",
      description:
        "Mention any existing application, API, infrastructure, data, or integration context.",
    },
    {
      title: "The goal",
      description: "What would make the work useful or successful?",
    },
    {
      title: "The constraints",
      description:
        "Share timeline, integrations, scale, operations, or other known limits if you have them.",
    },
  ],
  capabilities: [
    {
      title: "Software Engineering",
      description:
        "Applications, APIs, platforms, architecture, integrations, quality, and performance.",
      href: "/capabilities/software-engineering",
    },
    {
      title: "Product Development",
      description:
        "Discovery, UX, prototyping, MVPs, product engineering, and evolution.",
      href: "/capabilities/product-development",
    },
    {
      title: "Mobile Platforms",
      description:
        "Android, iOS, cross-platform applications, and mobile architecture.",
      href: "/capabilities/mobile-platforms",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Cloud architecture, CI/CD, automation, observability, reliability, and scalability.",
      href: "/capabilities/cloud-infrastructure",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Generative AI, RAG, intelligent search, AI workflows, machine learning, and evaluation.",
      href: "/capabilities/artificial-intelligence",
    },
  ] satisfies ContactOption[],
  startingPoints: [
    {
      title: "New Product",
      description:
        "You have an idea and need help turning it into a technology product.",
    },
    {
      title: "Existing Product",
      description:
        "You already have a system and want to improve, extend, or scale it.",
    },
    {
      title: "Modernization",
      description:
        "Your existing technology needs architectural or infrastructure improvement.",
    },
    {
      title: "AI Opportunity",
      description:
        "You want to identify where AI can provide practical value.",
    },
    {
      title: "Mobile Expansion",
      description:
        "You want to bring an existing product or service to mobile.",
    },
    {
      title: "Platform Challenge",
      description:
        "You need help with architecture, cloud, integrations, reliability, or scale.",
    },
  ],
  collaboration: {
    title: "Technology has no fixed geography.",
    description:
      "BIMAL GLOBAL's positioning connects India, Nepal, international markets, distributed teams, and remote product and engineering collaboration. The conversation can begin from the problem and move toward the right working model.",
    links: [
      { href: "/company/presence", label: "Explore Presence" },
      { href: "/company/how-we-work", label: "See How We Work" },
    ],
  },
  faqs: [
    {
      question: "What should I include in my inquiry?",
      answer:
        "A problem description, product context, existing technology, goals, and known constraints are useful. A complete specification is not required.",
    },
    {
      question: "Can you work with an existing system?",
      answer:
        "Yes. Where appropriate, BIMAL GLOBAL can work on modernization, integration, optimization, infrastructure, and product evolution.",
    },
    {
      question: "Can you build a product from an idea?",
      answer:
        "Product development can begin with understanding the problem, defining the right scope, and deciding what should be built first.",
    },
    {
      question: "Can you help with AI even if we are unsure what to build?",
      answer:
        "AI opportunities should be evaluated against actual workflows, data, users, and business goals before deciding what to build.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "BIMAL GLOBAL is positioned around India, Nepal, international markets, and distributed product and engineering collaboration.",
    },
    {
      question: "Can we discuss only a technical problem?",
      answer:
        "Yes. The conversation can start from an architecture, infrastructure, mobile, integration, AI, or engineering problem.",
    },
  ] satisfies ContactFaq[],
  finalCta: {
    title: "Have a problem worth solving?",
    summary:
      "Start with the problem. We can explore the product, engineering, infrastructure, mobile, and AI possibilities together.",
    primaryCta: { href: "#contact-form", label: "Start a Conversation" },
    secondaryCta: { href: "/company/how-we-work", label: "Explore How We Work" },
  },
} as const;
