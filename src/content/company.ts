export type CompanyLink = {
  href: string;
  label: string;
};

export type CompanyHeroContent = {
  eyebrow: string;
  heading: string;
  highlight: string;
  imageAlt: string;
  imagePath: string;
  primaryCta: CompanyLink;
  secondaryCta: CompanyLink;
  summary: string;
};

export type CompanyTextSection = {
  eyebrow: string;
  heading: string;
  highlight?: string;
  paragraphs: string[];
};

export type CompanyBuildArea = {
  description: string;
  title: string;
};

export type CompanyPrinciple = {
  description: string;
  number: string;
  title: string;
};

export type CompanyCapability = {
  href: string;
  title: string;
};

export type CompanyJourneyItem = {
  description: string;
  label: string;
  title: string;
};

export type CompanyPresenceItem = {
  description: string;
  imagePath?: string;
  label: string;
};

export type CompanyMetric = {
  label: string;
  value: string;
};

export const company = {
  name: "Bimal Global",
  hero: {
    eyebrow: "About Bimal Global",
    heading: "Building technology",
    highlight: "for what comes next.",
    summary:
      "BIMAL GLOBAL is a technology company focused on designing and building digital products, software systems, platforms, infrastructure, and intelligent solutions for ambitious ideas and complex challenges.",
    imagePath: "/images/company/company-hero.jpg",
    imageAlt: "Abstract technology system visual for Bimal Global",
    primaryCta: {
      href: "/capabilities",
      label: "Explore Our Capabilities",
    },
    secondaryCta: {
      href: "/contact",
      label: "Start a Conversation",
    },
  },
  whoWeAre: {
    eyebrow: "Who We Are",
    heading: "A technology company",
    highlight: "built around possibility.",
    paragraphs: [
      "BIMAL GLOBAL works across engineering, product, infrastructure, mobile platforms, and artificial intelligence. The company is built for challenges where different technology disciplines need to come together with clarity and purpose.",
      "We are not focused on only one type of product or one narrow category of work. Each opportunity asks for a different mix of strategy, design, systems thinking, and technical execution.",
      "Long-term technology requires decisions that look beyond launch. We think about how products are built, maintained, improved, and evolved as businesses, users, and markets keep changing.",
    ],
  },
  philosophy: {
    heading: "Technology is not the goal.",
    highlight: "What it makes possible is.",
    paragraphs: [
      "Every technical decision should stay connected to real problems, people, products, operations, and the ability to scale over time.",
    ],
  },
  buildAreas: {
    eyebrow: "What We Build",
    heading: "From ambitious ideas",
    highlight: "to complex technology systems.",
    items: [
      {
        title: "Digital Products",
        description:
          "Product experiences shaped around user needs, business goals, and practical paths from idea to launch.",
      },
      {
        title: "Software Platforms",
        description:
          "Foundational systems designed to support workflows, data, operations, and future product growth.",
      },
      {
        title: "Mobile Applications",
        description:
          "Modern mobile experiences for connected users, teams, services, and digital ecosystems.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Reliable technology foundations for deployment, performance, security, and long-term operation.",
      },
      {
        title: "Artificial Intelligence Systems",
        description:
          "Intelligent workflows, automation, and applied AI patterns designed around useful outcomes.",
      },
      {
        title: "Connected Technology Experiences",
        description:
          "Integrated product and platform experiences where software, data, infrastructure, and people meet.",
      },
    ],
  },
  principles: {
    eyebrow: "How We Think",
    heading: "Principles behind",
    highlight: "the work we build.",
    items: [
      {
        number: "01",
        title: "Think beyond the brief",
        description:
          "We look beyond immediate requirements to understand the wider challenge and the system around it.",
      },
      {
        number: "02",
        title: "Build for change",
        description:
          "Technology should be designed with the expectation that products, users, and businesses evolve.",
      },
      {
        number: "03",
        title: "Engineering matters",
        description:
          "Strong ideas need strong technical foundations, from architecture and code quality to deployment and reliability.",
      },
      {
        number: "04",
        title: "Stay curious",
        description:
          "Technology changes quickly. Curiosity helps teams continue learning, adapting, and improving the work.",
      },
      {
        number: "05",
        title: "Focus on what matters",
        description:
          "Complexity should exist only where it creates value for the product, the business, or the people using it.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "Our Capabilities",
    heading: "Different disciplines.",
    highlight: "One technology ecosystem.",
    items: [
      {
        title: "Software Engineering",
        href: "/capabilities/software-engineering",
      },
      {
        title: "Product Development",
        href: "/capabilities/product-development",
      },
      {
        title: "Mobile Platforms",
        href: "/capabilities/mobile-platforms",
      },
      {
        title: "Cloud & Infrastructure",
        href: "/capabilities/cloud-infrastructure",
      },
      {
        title: "Artificial Intelligence",
        href: "/capabilities/artificial-intelligence",
      },
    ],
  },
  longTerm: {
    heading: "Technology doesn't stop",
    highlight: "at launch.",
    imagePath: "/images/company/long-term.jpg",
    paragraphs: [
      "Products evolve. Businesses change. Users grow. Technology needs to keep moving.",
      "We think about how systems can be built, maintained, improved, and evolved over time, so the work can keep creating value after the first release.",
    ],
  },
  journey: {
    eyebrow: "Our Journey",
    heading: "A company journey",
    highlight: "still being built.",
    items: [
      {
        label: "2024",
        title: "Foundation",
        description:
          "The beginning of an ambition to build technology beyond individual projects.",
      },
      {
        label: "2025",
        title: "Expansion",
        description:
          "Bringing together broader capabilities across product, engineering, infrastructure, and emerging technologies.",
      },
      {
        label: "Next",
        title: "Building Forward",
        description:
          "Developing platforms, products, and technology initiatives with a long-term global outlook.",
      },
    ],
  },
  presence: {
    eyebrow: "Our Presence",
    heading: "Rooted across borders.",
    highlight: "Built with a global outlook.",
    summary:
      "BIMAL GLOBAL brings together operational presence across India and Nepal with an ambition to work across markets and technology challenges globally.",
    cta: {
      href: "/company/presence",
      label: "Explore Our Presence",
    },
    items: [
      {
        label: "India",
        description: "Operational presence and technology delivery.",
        imagePath: "/images/company/presence/india.jpg",
      },
      {
        label: "Nepal",
        description: "Operational presence and technology delivery.",
        imagePath: "/images/company/presence/nepal.jpg",
      },
      {
        label: "Global",
        description: "A technology outlook designed beyond geographic boundaries.",
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    heading: "Direction begins",
    highlight: "with people.",
    founderName: "Bimal Vishwakarma",
    founderRole: "Founder & CEO",
    imagePath: "/images/company/leadership/bimal-vishwakarma.jpg",
    imageAlt: "Portrait of Bimal Vishwakarma",
    summary:
      "Leading BIMAL GLOBAL with a focus on building ambitious technology products, platforms, and systems for long-term impact.",
    teamNote: "Building with a founding team across technology and product.",
    cta: {
      href: "/company/leadership",
      label: "Meet Our Leadership",
    },
  },
  metrics: [
    { value: "5", label: "Core Technology Capabilities" },
    { value: "2", label: "Operational Markets" },
    { value: "3", label: "Founders" },
    { value: "Global", label: "Technology Outlook" },
  ],
  cta: {
    heading: "Let's build",
    highlight: "what comes next.",
    summary:
      "Whether you are developing a new idea, evolving a product, or solving a complex technology challenge, BIMAL GLOBAL is built to explore what is possible.",
    primaryCta: {
      href: "/contact",
      label: "Start a Project",
    },
    secondaryCta: {
      href: "/capabilities",
      label: "Explore Our Capabilities",
    },
  },
} as const;
