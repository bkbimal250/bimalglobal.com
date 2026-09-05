export type TextBlock = {
  description: string;
  title: string;
};

export type WorkItem = {
  category:
    | "Product"
    | "Platform"
    | "Engineering"
    | "Mobile"
    | "AI"
    | "Infrastructure";
  description: string;
  href: string;
  imageAlt: string;
  imagePath: string;
  name: string;
  tags: string[];
  type: "client" | "internal-product" | "venture" | "platform" | "initiative";
  visibility: "public" | "coming-soon" | "private";
};

export type ProductType = TextBlock & {
  label: string;
};

export type SolutionScenario = {
  components: string[];
  description: string;
  number: string;
  title: string;
};

export type ComplexityStage = TextBlock & {
  scope: string;
};

export type TechnologyLayer = TextBlock & {
  examples: string[];
};

export type LifecycleStage = TextBlock & {
  number: string;
};

export type CapabilityConnection = TextBlock & {
  href: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export const workItems: WorkItem[] = [];

export const workPage = {
  hero: {
    eyebrow: "Work",
    title: "Technology built for products, platforms, and real-world systems.",
    summary:
      "From digital products and mobile applications to enterprise platforms, cloud infrastructure, and AI-enabled systems, BIMAL GLOBAL helps turn complex technology requirements into products that can evolve.",
    primaryCta: { href: "/capabilities", label: "Explore Capabilities" },
    secondaryCta: { href: "/contact", label: "Start a Conversation" },
  },
  buildCategories: [
    {
      title: "Digital Products",
      description: "Customer-facing applications and digital experiences.",
    },
    {
      title: "Platforms",
      description:
        "Multi-user systems, marketplaces, SaaS platforms, content platforms, and operational platforms.",
    },
    {
      title: "Enterprise Systems",
      description:
        "Business workflows, internal tools, dashboards, integrations, and operational software.",
    },
    {
      title: "Mobile Applications",
      description: "Android, iOS, and cross-platform mobile experiences.",
    },
    {
      title: "Media & OTT Platforms",
      description:
        "Content platforms, streaming experiences, subscriptions, recommendations, multi-language systems, and live-content capabilities.",
    },
    {
      title: "AI-Enabled Products",
      description:
        "Search, recommendations, assistants, document intelligence, automation, predictive systems, and intelligent workflows.",
    },
    {
      title: "Cloud Systems",
      description:
        "Application infrastructure, deployment systems, observability, reliability, scalability, and automation.",
    },
  ] satisfies TextBlock[],
  productTypes: [
    {
      label: "Marketplaces",
      title: "Connect demand, supply, trust, and operations.",
      description:
        "Search, profiles, transactions, communication, dashboards, and workflow control.",
    },
    {
      label: "SaaS Platforms",
      title: "Subscription products that can evolve over time.",
      description:
        "Roles, accounts, product logic, billing touchpoints, data, and operational visibility.",
    },
    {
      label: "Mobile Applications",
      title: "Products built for real mobile usage.",
      description:
        "Device behavior, offline needs, notifications, mobile APIs, and cross-platform delivery.",
    },
    {
      label: "OTT / Media",
      title: "Content, streaming, discovery, and subscriptions.",
      description:
        "Catalogs, recommendations, profiles, analytics, multi-language experiences, and mobile access.",
    },
    {
      label: "Customer Portals",
      title: "Digital access to services, data, and actions.",
      description:
        "Self-service workflows, account areas, support flows, and connected backend systems.",
    },
    {
      label: "Business Systems",
      title: "Operational software for teams and workflows.",
      description:
        "Dashboards, permissions, reporting, CRM-like workflows, approvals, and integrations.",
    },
    {
      label: "AI-Enabled Applications",
      title: "Intelligence added where it supports real work.",
      description:
        "Assistants, search, document processing, classification, recommendations, and human review.",
    },
    {
      label: "Integration Platforms",
      title: "Systems that connect tools, APIs, data, and operations.",
      description:
        "Internal services, external APIs, payment systems, communication platforms, and data flows.",
    },
  ] satisfies ProductType[],
  scenarios: [
    {
      number: "01",
      title: "Marketplace Platform",
      description:
        "A platform connecting customers, providers, search, payments, communication, and operational workflows.",
      components: [
        "Customer app",
        "Provider dashboard",
        "Search",
        "Payments",
        "Messaging",
        "Admin tools",
      ],
    },
    {
      number: "02",
      title: "OTT Platform",
      description:
        "Content management, subscriptions, streaming, recommendations, mobile applications, analytics, and cloud infrastructure.",
      components: [
        "Content catalog",
        "Streaming",
        "Profiles",
        "Subscriptions",
        "Recommendations",
        "Mobile apps",
      ],
    },
    {
      number: "03",
      title: "Business Operations Platform",
      description:
        "Role-based workflows, dashboards, staff systems, notifications, reporting, and integrations.",
      components: [
        "Roles",
        "Dashboards",
        "Workflows",
        "Notifications",
        "Reports",
        "Integrations",
      ],
    },
    {
      number: "04",
      title: "Food Technology Platform",
      description:
        "Ordering, restaurant management, customer applications, payments, operational workflows, and analytics.",
      components: [
        "Ordering",
        "Menu systems",
        "Payments",
        "Operations",
        "Analytics",
        "Customer app",
      ],
    },
    {
      number: "05",
      title: "Real Estate Platform",
      description:
        "Listings, search, CRM workflows, lead management, communication, analytics, and mobile experiences.",
      components: [
        "Listings",
        "Search",
        "CRM",
        "Leads",
        "Communication",
        "Analytics",
      ],
    },
    {
      number: "06",
      title: "AI Business Platform",
      description:
        "Intelligent search, document processing, assistants, classification, recommendations, workflow automation, and decision support.",
      components: [
        "AI search",
        "Documents",
        "Assistants",
        "Classification",
        "Automation",
        "Review",
      ],
    },
  ] satisfies SolutionScenario[],
  complexity: [
    {
      title: "Application",
      scope: "Interface + Workflow",
      description: "Interfaces, workflows, APIs, and authentication.",
    },
    {
      title: "Product",
      scope: "Users + Data",
      description: "User journeys, data, integrations, analytics, and product logic.",
    },
    {
      title: "Platform",
      scope: "Roles + Services",
      description:
        "Multiple users, services, permissions, reliability, and scaling considerations.",
    },
    {
      title: "Ecosystem",
      scope: "Apps + Partners",
      description:
        "Multiple applications, services, partners, integrations, data flows, and infrastructure.",
    },
  ] satisfies ComplexityStage[],
  buildingBlocks: [
    {
      title: "Experience",
      description: "Interfaces where users understand, decide, act, and manage work.",
      examples: ["Web", "Mobile", "Dashboards", "Customer interfaces"],
    },
    {
      title: "Application",
      description: "The software layer where business rules and workflows live.",
      examples: ["Logic", "APIs", "Workflows", "Authentication"],
    },
    {
      title: "Data",
      description: "Information foundations that support product behavior and decisions.",
      examples: ["Databases", "Search", "Analytics", "Storage"],
    },
    {
      title: "Infrastructure",
      description: "The operating foundation for deployment, reliability, and visibility.",
      examples: ["Cloud", "Containers", "CI/CD", "Observability"],
    },
    {
      title: "Intelligence",
      description: "AI or machine learning added where it supports useful outcomes.",
      examples: ["AI", "Recommendations", "Search", "Automation"],
    },
    {
      title: "Integration",
      description: "Connections to systems, services, partners, and external APIs.",
      examples: ["Payments", "Communication", "Internal systems", "External APIs"],
    },
  ] satisfies TechnologyLayer[],
  lifecycle: [
    {
      number: "01",
      title: "Understand",
      description: "Users, business model, workflows, constraints.",
    },
    {
      number: "02",
      title: "Define",
      description: "Product scope, priorities, architecture direction.",
    },
    {
      number: "03",
      title: "Design",
      description: "Experience, workflows, interaction, prototypes.",
    },
    {
      number: "04",
      title: "Engineer",
      description: "Frontend, backend, mobile, APIs, infrastructure, AI.",
    },
    {
      number: "05",
      title: "Validate",
      description: "Quality, performance, usability, security considerations.",
    },
    {
      number: "06",
      title: "Launch",
      description: "Production readiness, deployment, monitoring.",
    },
    {
      number: "07",
      title: "Evolve",
      description: "Feedback, analytics, optimization, new functionality.",
    },
  ] satisfies LifecycleStage[],
  newProductFlow: [
    "Idea",
    "Problem definition",
    "Product scope",
    "Prototype",
    "MVP",
    "Production",
    "Product evolution",
  ],
  existingSystemEvolution: [
    {
      title: "Modernization",
      description: "Improve architecture without unnecessarily rebuilding everything.",
    },
    {
      title: "Performance",
      description: "Identify bottlenecks and improve application or infrastructure behavior.",
    },
    {
      title: "Integration",
      description: "Connect disconnected platforms, services, data, and workflows.",
    },
    {
      title: "Reliability",
      description:
        "Improve observability, deployment, recovery, and operational resilience.",
    },
    {
      title: "Mobile Expansion",
      description: "Extend existing systems into mobile experiences.",
    },
    {
      title: "AI Integration",
      description: "Add practical AI capabilities where they make sense.",
    },
    {
      title: "Cloud Evolution",
      description:
        "Improve infrastructure, deployment, scalability, and automation.",
    },
  ] satisfies TextBlock[],
  industries: [
    {
      title: "Retail",
      description: "Commerce, marketplace, inventory, customer platforms.",
    },
    {
      title: "Food & Hospitality",
      description: "Ordering, bookings, operations, loyalty.",
    },
    {
      title: "Media",
      description: "Streaming, content, subscriptions, recommendations.",
    },
    {
      title: "Real Estate",
      description: "Listings, CRM, lead workflows, analytics.",
    },
    {
      title: "Healthcare & Wellness",
      description: "Appointments, operations, customer and patient experiences.",
    },
    {
      title: "Enterprise",
      description: "Internal workflows, dashboards, integrations, automation.",
    },
  ] satisfies TextBlock[],
  engagementModels: [
    {
      title: "New Product",
      description: "Build from an idea or business requirement.",
    },
    {
      title: "Product Extension",
      description: "Add major functionality to an existing product.",
    },
    {
      title: "Engineering Partnership",
      description: "Support ongoing product engineering.",
    },
    {
      title: "Modernization",
      description: "Improve existing systems and infrastructure.",
    },
    {
      title: "Technology Initiative",
      description:
        "Solve a focused architectural, cloud, mobile, or AI challenge.",
    },
  ] satisfies TextBlock[],
  futureCaseStudyStructure: [
    {
      title: "Problem",
      description: "What needed to be solved.",
    },
    {
      title: "Approach",
      description: "How product and technology decisions were made.",
    },
    {
      title: "Architecture",
      description: "How the system was engineered.",
    },
    {
      title: "Outcome",
      description: "Verified measurable results, once available.",
    },
  ] satisfies TextBlock[],
  capabilityConnections: [
    {
      title: "Software Engineering",
      description: "Applications, APIs, platforms, integrations, and engineering quality.",
      href: "/capabilities/software-engineering",
    },
    {
      title: "Product Development",
      description: "Discovery, UX, prototypes, product scope, and product evolution.",
      href: "/capabilities/product-development",
    },
    {
      title: "Mobile Platforms",
      description: "Android, iOS, cross-platform applications, and mobile architecture.",
      href: "/capabilities/mobile-platforms",
    },
    {
      title: "Cloud & Infrastructure",
      description: "Deployment, CI/CD, observability, reliability, and scalability.",
      href: "/capabilities/cloud-infrastructure",
    },
    {
      title: "Artificial Intelligence",
      description: "AI workflows, intelligent search, automation, RAG, and evaluation.",
      href: "/capabilities/artificial-intelligence",
    },
  ] satisfies CapabilityConnection[],
  faqs: [
    {
      question: "What types of products can BIMAL GLOBAL build?",
      answer:
        "BIMAL GLOBAL can build digital products, platforms, mobile applications, business systems, APIs, cloud systems, and AI-enabled applications around real requirements.",
    },
    {
      question: "Do you only build new products?",
      answer:
        "No. Existing systems can also be modernized, extended, integrated, optimized, and evolved.",
    },
    {
      question: "Can you build an entire product?",
      answer:
        "Work can span product definition, engineering, mobile, cloud, AI, launch, and evolution depending on the requirements.",
    },
    {
      question: "Do you have a fixed technology stack?",
      answer:
        "Technology should follow product requirements rather than being selected simply because it is fashionable.",
    },
    {
      question: "Are the examples on this page client projects?",
      answer:
        "No. The scenarios are illustrative examples of technology possibilities and should not be interpreted as client case studies unless explicitly identified as such.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Have a product or technology challenge?",
    summary:
      "Start with the problem. We can explore the product, architecture, engineering, mobile, cloud, and AI possibilities together.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/company/how-we-work", label: "Explore How We Work" },
  },
} as const;
