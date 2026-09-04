export type TextBlock = {
  title: string;
  description: string;
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
  number: string;
  title: string;
  example: string;
  components: string[];
  capabilities: string[];
};

export type ArchitectureLayer = {
  title: string;
  detail: string;
};

export type LifecycleStage = {
  number: string;
  title: string;
  description: string;
};

export type CapabilityConnection = TextBlock & {
  href: string;
};

export type FutureCaseStudy = {
  slug: string;
  title: string;
  industry?: string;
  summary: string;
  challenge?: string;
  solution?: string;
  capabilities: string[];
  technologies?: string[];
  images?: string[];
  outcomes?: string[];
  published: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const workItems: WorkItem[] = [];

export const futureCaseStudies: FutureCaseStudy[] = [];

export const workPage = {
  hero: {
    eyebrow: "Work",
    title: "Technology built for products, platforms, and real-world systems.",
    summary:
      "BIMAL GLOBAL designs and develops digital products, software platforms, mobile applications, business systems, infrastructure, and AI-enabled experiences around real requirements and opportunities.",
    imagePath: "/images/work/hero.jpg",
    imageAlt:
      "Abstract product and technology system visual for BIMAL GLOBAL work possibilities",
    primaryCta: { href: "/contact", label: "Discuss Your Project" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  categories: [
    {
      title: "Digital Platforms",
      description:
        "Large web-based products designed around customers, workflows, content, or business operations.",
    },
    {
      title: "Mobile Applications",
      description:
        "Customer, employee, marketplace, service, and workflow applications.",
    },
    {
      title: "SaaS Products",
      description:
        "Subscription-based or platform-based software products designed to evolve over time.",
    },
    {
      title: "Marketplaces",
      description:
        "Platforms connecting customers, providers, sellers, creators, or businesses.",
    },
    {
      title: "Business Systems",
      description:
        "Internal software supporting operations, teams, workflows, and information.",
    },
    {
      title: "Media Platforms",
      description:
        "Content, streaming, discovery, creator, and entertainment experiences.",
    },
    {
      title: "AI-Enabled Products",
      description:
        "Products where AI becomes part of the user experience or workflow.",
    },
    {
      title: "APIs & Backend Systems",
      description:
        "Services, integrations, data systems, and backend platforms powering digital products.",
    },
  ] satisfies TextBlock[],
  productTypes: [
    {
      label: "Consumer Product",
      title: "Customer-facing application",
      description:
        "Digital experiences designed around discovery, action, service, or engagement.",
    },
    {
      label: "Business Product",
      title: "Internal or enterprise software",
      description:
        "Systems that help teams operate, collaborate, report, and manage workflows.",
    },
    {
      label: "Marketplace",
      title: "Multiple users and transaction flows",
      description:
        "Products that connect demand, supply, trust, communication, and operations.",
    },
    {
      label: "Platform",
      title: "Multiple systems and capabilities",
      description:
        "Connected software foundations that support several roles, modules, and integrations.",
    },
    {
      label: "Mobile Product",
      title: "Experiences designed around mobile usage",
      description:
        "Applications built for device behavior, real-time context, and mobile workflows.",
    },
    {
      label: "Content Product",
      title: "Media, content, discovery, or streaming",
      description:
        "Products where content structure, experience, management, and delivery matter.",
    },
    {
      label: "Intelligent Product",
      title: "AI integrated into workflows and experiences",
      description:
        "Software where intelligence assists people, decisions, content, or operations.",
    },
  ] satisfies ProductType[],
  scenarios: [
    {
      number: "01",
      title: "Marketplace Platform",
      example: "A platform connecting users with service providers.",
      components: [
        "User applications",
        "Provider dashboards",
        "Search",
        "Discovery",
        "Profiles",
        "Booking or requests",
        "Payments integration",
        "Notifications",
        "Admin systems",
        "Analytics",
      ],
      capabilities: ["Product Development", "Software Engineering", "Mobile", "Cloud"],
    },
    {
      number: "02",
      title: "Media & OTT Platform",
      example: "A digital entertainment and content ecosystem.",
      components: [
        "Content discovery",
        "Video experiences",
        "User profiles",
        "Multiple content categories",
        "Creator or content workflows",
        "Subscription capabilities",
        "Mobile applications",
        "Backend systems",
        "Content management",
        "Streaming infrastructure",
      ],
      capabilities: [
        "Product Development",
        "Software Engineering",
        "Mobile",
        "Cloud",
        "AI",
      ],
    },
    {
      number: "03",
      title: "Business Operations Platform",
      example:
        "Internal software connecting teams, workflows, and business information.",
      components: [
        "Dashboards",
        "Staff management",
        "CRM",
        "Reporting",
        "Workflow automation",
        "Data management",
        "Roles and permissions",
        "APIs",
        "Mobile workforce access",
      ],
      capabilities: ["Product Development", "Software Engineering", "Cloud"],
    },
    {
      number: "04",
      title: "Food & Hospitality Platform",
      example: "Digital systems connecting customers and business operations.",
      components: [
        "Customer application",
        "Ordering",
        "Reservations",
        "Service workflows",
        "Business dashboard",
        "Notifications",
        "Operations tools",
        "Analytics",
      ],
      capabilities: ["Product Development", "Software Engineering", "Mobile"],
    },
    {
      number: "05",
      title: "Real Estate Platform",
      example:
        "A digital platform for property discovery and business workflows.",
      components: [
        "Property listings",
        "Search",
        "Filters",
        "Location-based discovery",
        "Lead workflows",
        "CRM",
        "Agent tools",
        "Mobile applications",
        "Admin systems",
      ],
      capabilities: ["Product Development", "Software Engineering", "Mobile", "Cloud"],
    },
    {
      number: "06",
      title: "AI-Enabled Business Product",
      example:
        "A software platform where AI supports information-heavy workflows.",
      components: [
        "AI assistants",
        "Search",
        "Information processing",
        "Content assistance",
        "Workflow automation",
        "Data context",
        "Human review",
      ],
      capabilities: ["Product Development", "Software Engineering", "AI", "Cloud"],
    },
  ] satisfies SolutionScenario[],
  architectureLayers: [
    { title: "Experience", detail: "Web + Mobile" },
    { title: "Product Layer", detail: "Features + Workflows" },
    { title: "Application Layer", detail: "Backend + APIs" },
    { title: "Data", detail: "Business Information + Content" },
    { title: "Integrations", detail: "External Systems + Services" },
    { title: "Infrastructure", detail: "Deployment + Monitoring + Reliability" },
    { title: "Intelligence", detail: "AI where appropriate" },
  ] satisfies ArchitectureLayer[],
  capabilityConnections: [
    {
      title: "Product Development",
      description: "Defines the product direction and structure.",
      href: "/capabilities/product-development",
    },
    {
      title: "Software Engineering",
      description: "Builds the applications and systems.",
      href: "/capabilities/software-engineering",
    },
    {
      title: "Mobile Platforms",
      description: "Extends the experience to mobile users.",
      href: "/capabilities/mobile-platforms",
    },
    {
      title: "Cloud & Infrastructure",
      description: "Supports deployment, operations, and scalability.",
      href: "/capabilities/cloud-infrastructure",
    },
    {
      title: "Artificial Intelligence",
      description: "Adds intelligence where it creates meaningful value.",
      href: "/capabilities/artificial-intelligence",
    },
  ] satisfies CapabilityConnection[],
  lifecycle: [
    { number: "01", title: "Explore", description: "Understand the opportunity, users, and requirements." },
    { number: "02", title: "Define", description: "Define the product direction and major capabilities." },
    { number: "03", title: "Design", description: "Design the experience, workflows, and technical structure." },
    { number: "04", title: "Build", description: "Develop the product and supporting systems." },
    { number: "05", title: "Integrate", description: "Connect relevant APIs, services, and business systems." },
    { number: "06", title: "Launch", description: "Prepare the product for real-world use." },
    { number: "07", title: "Learn", description: "Observe how the product is used." },
    { number: "08", title: "Evolve", description: "Improve as requirements and opportunities change." },
  ] satisfies LifecycleStage[],
  newProducts: {
    title: "New technology products start with a problem worth solving.",
    imagePath: "/images/work/new-products.jpg",
    imageAlt:
      "Abstract new digital product planning and engineering visual",
    paragraphs: [
      "New products can begin as business opportunities, customer needs, internal workflow gaps, new digital ventures, industry platforms, or AI-enabled possibilities.",
      "The work is to turn that direction into a product structure, user experience, software system, operating model, and technology foundation that can evolve.",
    ],
    items: [
      "New digital businesses",
      "Startup products",
      "SaaS platforms",
      "Marketplaces",
      "Consumer applications",
      "Internal products",
      "Industry platforms",
      "AI-enabled products",
    ],
  },
  evolution: {
    title: "Existing technology can become the foundation for what comes next.",
    imagePath: "/images/work/evolution.jpg",
    imageAlt: "Abstract technology modernization and system evolution visual",
    paragraphs: [
      "Existing systems do not always need to be replaced. They may need clearer architecture, better workflows, stronger APIs, mobile extensions, infrastructure improvements, or carefully introduced AI capabilities.",
      "Modernization should begin with understanding what works, what blocks progress, and which changes create the most meaningful product or operational value.",
    ],
    items: [
      "Modernization",
      "New product capabilities",
      "API integration",
      "Mobile extensions",
      "Cloud improvements",
      "Workflow redesign",
      "AI integration",
      "System evolution",
    ],
    flow: ["Existing System", "Understand", "Prioritize", "Improve", "Integrate", "Evolve"],
  },
  industries: [
    {
      title: "Commerce",
      description: "Marketplaces, customer platforms, mobile products.",
    },
    {
      title: "Food & Hospitality",
      description: "Ordering, booking, operations, customer experiences.",
    },
    {
      title: "Media & Entertainment",
      description: "Content platforms, OTT, streaming, discovery.",
    },
    {
      title: "Real Estate",
      description: "Listings, search, CRM, lead workflows.",
    },
    {
      title: "Healthcare & Wellness",
      description: "Digital experiences, operational systems, workflow tools.",
    },
    {
      title: "Education",
      description: "Learning products, content systems, mobile experiences.",
    },
    {
      title: "Business & Enterprise",
      description: "Internal software, APIs, automation, data platforms.",
    },
  ] satisfies TextBlock[],
  buildingBlocks: [
    "Web Application",
    "Mobile Application",
    "Backend",
    "APIs",
    "Database",
    "Authentication",
    "Admin Platform",
    "Content System",
    "Notifications",
    "Search",
    "Analytics",
    "Integrations",
    "Cloud Infrastructure",
    "AI Capabilities",
  ],
  principles: [
    { title: "Start with the real requirement", description: "Technology direction should come from the problem, users, workflow, and business context." },
    { title: "Design around users and workflows", description: "A product should match how people need to work, decide, communicate, or transact." },
    { title: "Avoid unnecessary complexity", description: "Architecture should solve real product needs rather than perform complexity." },
    { title: "Build connected systems", description: "Modern products often depend on APIs, data, infrastructure, integrations, and operational visibility." },
    { title: "Think about operations early", description: "Deployment, monitoring, support, security, and reliability affect the product experience." },
    { title: "Design for evolution", description: "Products should be able to grow as requirements, markets, and opportunities change." },
    { title: "Use AI intentionally", description: "AI should support meaningful product or workflow value rather than exist as decoration." },
    { title: "Keep technology maintainable", description: "Readable, maintainable systems are easier to improve over time." },
  ] satisfies TextBlock[],
  engagementModels: [
    { title: "New Product Development", description: "For building a new product, platform, or application." },
    { title: "Product Evolution", description: "For extending an existing digital product." },
    { title: "Platform Development", description: "For larger connected systems and technology ecosystems." },
    { title: "Technology Modernization", description: "For improving existing software and infrastructure." },
  ] satisfies TextBlock[],
  futureCaseStudySchema: [
    "Project name",
    "Industry",
    "Challenge",
    "Product",
    "Capabilities used",
    "Technology areas",
    "Images",
    "Outcomes",
    "Case study link",
  ],
  faqs: [
    {
      question: "What types of software can BIMAL GLOBAL build?",
      answer:
        "BIMAL GLOBAL can build digital platforms, software products, mobile applications, business systems, APIs, backend platforms, content systems, and AI-enabled products.",
    },
    {
      question: "Can you build a complete digital product?",
      answer:
        "Yes. A complete product can combine product thinking, software engineering, mobile platforms, cloud infrastructure, and AI where it creates meaningful value.",
    },
    {
      question: "Do you work on new product ideas?",
      answer:
        "Yes. New product work can start with exploration, requirements, product structure, experience design, technical architecture, and development planning.",
    },
    {
      question: "Can you improve an existing software product?",
      answer:
        "Yes. Existing products can be modernized, extended, integrated, redesigned, or evolved through focused product and engineering work.",
    },
    {
      question: "Can you build a mobile application alongside a web platform?",
      answer:
        "Yes. Mobile applications can be designed alongside web platforms, backend systems, APIs, authentication, notifications, and infrastructure.",
    },
    {
      question: "Can you build platforms for specific industries?",
      answer:
        "Yes. The same technology capabilities can support different industry contexts, including commerce, hospitality, media, real estate, education, healthcare and wellness, and enterprise operations.",
    },
    {
      question: "Can AI be integrated into a product?",
      answer:
        "Yes. AI can be integrated where it creates meaningful value for search, assistance, content workflows, information processing, automation, or decision support.",
    },
    {
      question: "Where can I see client case studies?",
      answer:
        "Selected project stories will be published when they become available for public sharing. This page currently presents illustrative solution possibilities, not client case studies.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "What could your next product become?",
    summary:
      "Whether you are starting with an idea, improving an existing system, or building a larger digital platform, BIMAL GLOBAL can help connect product thinking, software engineering, mobile technology, infrastructure, and AI.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
