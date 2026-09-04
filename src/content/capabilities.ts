export type Capability = {
  description: string;
  focusAreas: string[];
  href: string;
  id: string;
  imageAlt: string;
  imagePath: string;
  number: string;
  title: string;
};

export type CapabilityOutcome = {
  description: string;
  title: string;
};

export type CapabilityLifecycleStage = {
  capabilities: string[];
  description: string;
  stage: string;
};

export type EngagementScenario = {
  capabilities: string[];
  cta: {
    href: string;
    label: string;
  };
  description: string;
  number: string;
  title: string;
};

export type CapabilityRelationship = {
  from: string;
  to: string;
};

export const capabilitiesPage = {
  hero: {
    eyebrow: "Capabilities",
    heading: "Technology capabilities",
    highlight: "for ambitious ideas.",
    summary:
      "From software engineering and product development to mobile platforms, cloud infrastructure, and artificial intelligence, BIMAL GLOBAL brings together the capabilities needed to build and evolve modern technology.",
    imagePath: "/images/capabilities/capabilities-hero.jpg",
    imageAlt: "Abstract technology ecosystem for BIMAL GLOBAL capabilities",
    primaryCta: {
      href: "/contact",
      label: "Start a Project",
    },
    secondaryCta: {
      href: "/company/how-we-work",
      label: "How We Work",
    },
  },
  introduction: {
    eyebrow: "What We Do",
    heading: "Different capabilities.",
    highlight: "One connected approach.",
    paragraphs: [
      "Modern technology rarely fits inside one discipline. A product may require product strategy, software engineering, mobile experiences, cloud infrastructure, and intelligent systems at different points in its lifecycle.",
      "BIMAL GLOBAL brings these capabilities together so technology can be approached as one connected system instead of a set of isolated services.",
    ],
  },
  capabilities: [
    {
      id: "software-engineering",
      number: "01",
      title: "Software Engineering",
      description:
        "Engineering reliable software systems, platforms, APIs, and applications designed for real-world complexity and long-term evolution.",
      focusAreas: [
        "Web Applications",
        "Backend Systems",
        "APIs",
        "Platform Engineering",
        "System Architecture",
        "Integrations",
      ],
      href: "/capabilities/software-engineering",
      imagePath: "/images/capabilities/software-engineering.jpg",
      imageAlt: "Abstract software and system architecture visual",
    },
    {
      id: "product-development",
      number: "02",
      title: "Product Development",
      description:
        "Turning ideas, opportunities, and business challenges into thoughtful digital products that can evolve with users and markets.",
      focusAreas: [
        "Product Strategy",
        "UX & Product Design",
        "Prototyping",
        "MVP Development",
        "Product Engineering",
        "Product Evolution",
      ],
      href: "/capabilities/product-development",
      imagePath: "/images/capabilities/product-development.jpg",
      imageAlt: "Abstract product and interface composition",
    },
    {
      id: "mobile-platforms",
      number: "03",
      title: "Mobile Platforms",
      description:
        "Building mobile experiences and platforms designed for performance, usability, reliability, and scale.",
      focusAreas: [
        "Android",
        "iOS",
        "Cross-platform Applications",
        "Mobile APIs",
        "Mobile Architecture",
        "App Performance",
      ],
      href: "/capabilities/mobile-platforms",
      imagePath: "/images/capabilities/mobile-platforms.jpg",
      imageAlt: "Abstract mobile platform product visual",
    },
    {
      id: "cloud-infrastructure",
      number: "04",
      title: "Cloud & Infrastructure",
      description:
        "Designing the technical foundations that help applications and platforms remain reliable, secure, observable, and ready to scale.",
      focusAreas: [
        "Cloud Architecture",
        "Infrastructure",
        "DevOps",
        "Deployment",
        "Observability",
        "Scalability",
      ],
      href: "/capabilities/cloud-infrastructure",
      imagePath: "/images/capabilities/cloud-infrastructure.jpg",
      imageAlt: "Abstract cloud infrastructure and network visual",
    },
    {
      id: "artificial-intelligence",
      number: "05",
      title: "Artificial Intelligence",
      description:
        "Exploring and engineering intelligent systems that can improve products, automate complex workflows, and create new technology experiences.",
      focusAreas: [
        "AI Applications",
        "Machine Learning",
        "Generative AI",
        "Intelligent Automation",
        "AI Integrations",
        "AI-powered Products",
      ],
      href: "/capabilities/artificial-intelligence",
      imagePath: "/images/capabilities/artificial-intelligence.jpg",
      imageAlt: "Abstract intelligent system visual",
    },
  ] satisfies Capability[],
  relationships: [
    { from: "Product Development", to: "Software Engineering" },
    { from: "Software Engineering", to: "Cloud & Infrastructure" },
    { from: "Mobile Platforms", to: "Software Engineering" },
    { from: "Artificial Intelligence", to: "Product Development" },
    { from: "Artificial Intelligence", to: "Cloud & Infrastructure" },
  ] satisfies CapabilityRelationship[],
  outcomes: [
    {
      title: "Digital Products",
      description:
        "User-facing products shaped by product thinking, design, engineering, and iteration.",
    },
    {
      title: "Software Platforms",
      description:
        "Core platforms that support workflows, data, users, and long-term product growth.",
    },
    {
      title: "Mobile Applications",
      description:
        "Connected mobile experiences designed for performance, usability, and reach.",
    },
    {
      title: "Business Systems",
      description:
        "Operational systems that help teams work with better visibility and control.",
    },
    {
      title: "Cloud-native Platforms",
      description:
        "Technology foundations designed for deployment, resilience, observability, and scale.",
    },
    {
      title: "AI-powered Experiences",
      description:
        "Intelligent product and workflow layers that make technology more useful.",
    },
    {
      title: "Internal Technology Systems",
      description:
        "Tools and platforms that improve how organizations coordinate, decide, and operate.",
    },
    {
      title: "Data-driven Applications",
      description:
        "Applications that connect data, interfaces, and systems around clearer decisions.",
    },
  ] satisfies CapabilityOutcome[],
  lifecycle: {
    heading: "From first idea",
    highlight: "to continuous evolution.",
    note:
      "Every engagement has its own path. This lifecycle shows how capabilities can connect across different moments of technology development.",
    stages: [
      {
        stage: "Explore",
        description: "Understand the opportunity, users, problem, and technical context.",
        capabilities: ["Product Development"],
      },
      {
        stage: "Define",
        description: "Shape scope, product direction, architecture, and practical constraints.",
        capabilities: ["Product Development", "Software Engineering"],
      },
      {
        stage: "Design",
        description: "Translate product intent into usable experiences and system patterns.",
        capabilities: ["Product Development"],
      },
      {
        stage: "Build",
        description: "Engineer the product, platform, application, and connected systems.",
        capabilities: ["Software Engineering", "Mobile Platforms"],
      },
      {
        stage: "Launch",
        description: "Prepare deployment, environments, reliability, and operating foundations.",
        capabilities: ["Cloud & Infrastructure"],
      },
      {
        stage: "Scale",
        description: "Improve performance, resilience, observability, and product capacity.",
        capabilities: ["Cloud & Infrastructure", "Software Engineering"],
      },
      {
        stage: "Evolve",
        description: "Continue improving the product with learning, automation, and intelligence.",
        capabilities: ["Software Engineering", "Artificial Intelligence", "Product Development"],
      },
    ] satisfies CapabilityLifecycleStage[],
  },
  engagements: {
    eyebrow: "Built Around The Challenge",
    heading: "Start with what",
    highlight: "you need.",
    items: [
      {
        number: "01",
        title: "Build Something New",
        description:
          "For new digital products, platforms, applications, and technology ideas.",
        capabilities: ["Product Development", "Software Engineering", "Cloud"],
        cta: { href: "/contact", label: "Start a Conversation" },
      },
      {
        number: "02",
        title: "Improve What Exists",
        description:
          "For existing systems, products, applications, and technology environments that need improvement.",
        capabilities: ["Engineering", "Infrastructure", "Product Evolution"],
        cta: { href: "/contact", label: "Discuss Improvement" },
      },
      {
        number: "03",
        title: "Extend Your Technology Capability",
        description:
          "For organizations that need additional engineering, product, mobile, cloud, or AI capability.",
        capabilities: ["Engineering", "Mobile", "Cloud", "AI"],
        cta: { href: "/contact", label: "Explore Capability" },
      },
    ] satisfies EngagementScenario[],
  },
  domains: [
    "Web",
    "Backend",
    "Mobile",
    "Cloud",
    "Data",
    "AI",
    "APIs",
    "Platforms",
    "Integrations",
    "Infrastructure",
  ],
  industries: {
    eyebrow: "Across Industries",
    heading: "Technology changes",
    highlight: "with the problem.",
    summary:
      "These are application areas where technology capabilities may be relevant, not claims of existing client work.",
    cta: {
      href: "/industries",
      label: "Explore Industries",
    },
    items: [
      "Financial Services",
      "Healthcare",
      "Retail & Commerce",
      "Media & Entertainment",
      "Real Estate",
      "Hospitality",
      "Education",
      "Logistics",
      "Startups & New Ventures",
    ],
  },
  mindset: {
    heading: "Build for today.",
    highlight: "Design for change.",
    paragraphs: [
      "Technology needs to work in the present while leaving room for what comes next.",
      "That means thinking about maintainability, scalability, performance, security, flexibility, and evolution from the beginning.",
    ],
  },
  depth: {
    heading: "Capability depth",
    highlight: "from strategy to intelligence.",
    stages: ["Strategy", "Design", "Engineering", "Infrastructure", "Intelligence"],
  },
  cta: {
    heading: "Have a technology challenge",
    highlight: "worth solving?",
    summary: "Tell us what you're building, improving, or exploring.",
    primaryCta: {
      href: "/contact",
      label: "Start a Conversation",
    },
    secondaryCta: {
      href: "/company/how-we-work",
      label: "See How We Work",
    },
  },
} as const;

export const capabilities = capabilitiesPage.capabilities;
