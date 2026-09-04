export type Industry = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  challenges: string[];
  opportunities: string[];
  capabilities: string[];
  image?: string;
  seo: {
    title: string;
    description: string;
  };
};

export type TextBlock = {
  title: string;
  description: string;
};

export type FlowSection = {
  title: string;
  body: string;
  items: string[];
  flow: string[];
  imagePath?: string;
  imageAlt?: string;
};

export type LifecycleStage = {
  number: string;
  title: string;
  description: string;
};

export type CapabilityConnection = TextBlock & {
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const industries = [
  {
    slug: "financial-services",
    name: "Financial Services",
    shortDescription:
      "Digital platforms, customer experiences, internal systems, data workflows, mobile applications, automation, and infrastructure.",
    longDescription:
      "Technology for financial services can involve customer portals, operational workflows, data visibility, mobile access, secure system design, and integrations shaped around the business model.",
    challenges: ["Trust", "Data sensitivity", "Operational accuracy", "System integration"],
    opportunities: ["Customer platforms", "Data workflows", "Mobile access", "Automation"],
    capabilities: ["Software Engineering", "Mobile Platforms", "Cloud & Infrastructure", "Artificial Intelligence"],
    seo: {
      title: "Financial Services Technology | BIMAL GLOBAL",
      description:
        "Technology capabilities for financial service platforms, internal systems, workflows, mobile applications, data, and infrastructure.",
    },
  },
  {
    slug: "healthcare-wellness",
    name: "Healthcare & Wellness",
    shortDescription:
      "Customer platforms, appointment systems, operational tools, mobile experiences, information workflows, and digital service platforms.",
    longDescription:
      "Healthcare and wellness products require thoughtful digital journeys, clear information handling, operational coordination, and user experiences that avoid unnecessary complexity.",
    challenges: ["Sensitive information", "Service coordination", "Scheduling", "User clarity"],
    opportunities: ["Appointment systems", "Customer portals", "Mobile experiences", "Operational tools"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Cloud & Infrastructure"],
    seo: {
      title: "Healthcare & Wellness Technology | BIMAL GLOBAL",
      description:
        "Digital platforms and software capabilities for healthcare and wellness workflows, appointment systems, mobile experiences, and operations.",
    },
  },
  {
    slug: "commerce-retail",
    name: "Commerce & Retail",
    shortDescription:
      "Commerce platforms, customer experiences, product systems, mobile applications, operations, analytics, and digital workflows.",
    longDescription:
      "Commerce technology connects product discovery, ordering, inventory, operations, customer communication, payments, analytics, and post-purchase workflows.",
    challenges: ["Product data", "Customer journeys", "Operations", "Platform scale"],
    opportunities: ["Commerce platforms", "Mobile commerce", "Analytics", "Workflow automation"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Cloud & Infrastructure"],
    seo: {
      title: "Commerce & Retail Technology | BIMAL GLOBAL",
      description:
        "Software and product capabilities for commerce platforms, retail workflows, customer experiences, mobile applications, and analytics.",
    },
  },
  {
    slug: "food-hospitality",
    name: "Food & Hospitality",
    shortDescription:
      "Ordering platforms, customer applications, operations, reservations, digital service systems, delivery workflows, and business management tools.",
    longDescription:
      "Food and hospitality technology often needs to connect fast customer experiences with service workflows, order management, staff operations, and repeat engagement.",
    challenges: ["Real-time service", "Order flow", "Reservations", "Operational coordination"],
    opportunities: ["Ordering platforms", "Reservation systems", "Delivery workflows", "Customer apps"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Cloud & Infrastructure"],
    seo: {
      title: "Food & Hospitality Technology | BIMAL GLOBAL",
      description:
        "Digital product and software capabilities for food ordering, hospitality operations, reservations, customer apps, and delivery workflows.",
    },
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    shortDescription:
      "Content platforms, streaming products, media systems, mobile applications, discovery, recommendations, and digital experiences.",
    longDescription:
      "Media products need strong content systems, discovery flows, audience experiences, scalable delivery foundations, and product thinking around engagement.",
    challenges: ["Content scale", "Discovery", "Audience experience", "Platform performance"],
    opportunities: ["Content platforms", "Streaming products", "Recommendations", "Mobile experiences"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Artificial Intelligence"],
    seo: {
      title: "Media & Entertainment Technology | BIMAL GLOBAL",
      description:
        "Technology capabilities for media platforms, content systems, streaming products, mobile applications, discovery, and recommendations.",
    },
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    shortDescription:
      "Listing platforms, property discovery, lead systems, CRM workflows, mobile applications, internal tools, and digital property experiences.",
    longDescription:
      "Real estate products can connect listings, search, lead capture, CRM workflows, communication, property data, and mobile-first customer journeys.",
    challenges: ["Property data", "Lead workflows", "Discovery", "CRM coordination"],
    opportunities: ["Listing platforms", "Property search", "Lead systems", "Internal tools"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Artificial Intelligence"],
    seo: {
      title: "Real Estate & Property Technology | BIMAL GLOBAL",
      description:
        "Software capabilities for real estate platforms, property discovery, lead workflows, CRM systems, mobile applications, and internal tools.",
    },
  },
  {
    slug: "travel-tourism",
    name: "Travel & Tourism",
    shortDescription:
      "Booking experiences, travel platforms, customer applications, content systems, operations, and digital discovery.",
    longDescription:
      "Travel and tourism products can combine booking flows, itinerary content, discovery, customer communication, partner systems, and operational tools.",
    challenges: ["Booking flows", "Content quality", "Customer communication", "Partner systems"],
    opportunities: ["Travel platforms", "Discovery products", "Customer apps", "Operations tools"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Cloud & Infrastructure"],
    seo: {
      title: "Travel & Tourism Technology | BIMAL GLOBAL",
      description:
        "Digital product capabilities for travel platforms, booking experiences, tourism content systems, customer apps, and operations.",
    },
  },
  {
    slug: "education",
    name: "Education",
    shortDescription:
      "Learning platforms, student systems, mobile applications, content experiences, internal tools, and digital education products.",
    longDescription:
      "Education technology can support learning journeys, student management, content delivery, assessment workflows, mobile access, and institutional operations.",
    challenges: ["Learning access", "Content delivery", "Student workflows", "Operational tools"],
    opportunities: ["Learning platforms", "Student systems", "Mobile apps", "Content products"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Artificial Intelligence"],
    seo: {
      title: "Education Technology | BIMAL GLOBAL",
      description:
        "Software and product capabilities for learning platforms, student systems, mobile education products, content experiences, and internal tools.",
    },
  },
  {
    slug: "logistics-mobility",
    name: "Logistics & Mobility",
    shortDescription:
      "Operational systems, tracking workflows, mobile applications, APIs, data platforms, and process automation.",
    longDescription:
      "Logistics and mobility software can connect field operations, tracking, routing, APIs, data visibility, workforce tools, and business process automation.",
    challenges: ["Operational visibility", "Tracking", "Field workflows", "System integration"],
    opportunities: ["Tracking systems", "Mobile workforce apps", "APIs", "Automation"],
    capabilities: ["Software Engineering", "Mobile Platforms", "Cloud & Infrastructure", "Artificial Intelligence"],
    seo: {
      title: "Logistics & Mobility Technology | BIMAL GLOBAL",
      description:
        "Technology capabilities for logistics systems, mobility platforms, tracking workflows, mobile applications, APIs, and automation.",
    },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    shortDescription:
      "Client systems, workflow tools, CRM platforms, internal applications, automation, and data-driven operations.",
    longDescription:
      "Professional service firms can use technology to improve client coordination, project visibility, repeatable workflows, knowledge management, and internal operations.",
    challenges: ["Client workflows", "Knowledge work", "CRM visibility", "Manual coordination"],
    opportunities: ["Client systems", "Workflow tools", "Internal applications", "Automation"],
    capabilities: ["Product Development", "Software Engineering", "Artificial Intelligence", "Cloud & Infrastructure"],
    seo: {
      title: "Professional Services Technology | BIMAL GLOBAL",
      description:
        "Software capabilities for client systems, workflow tools, CRM platforms, internal applications, automation, and data-driven operations.",
    },
  },
  {
    slug: "business-enterprise",
    name: "Business & Enterprise",
    shortDescription:
      "Internal software, workflow platforms, operational systems, data applications, automation, APIs, and infrastructure.",
    longDescription:
      "Enterprise technology often needs stable internal platforms, clear data movement, role-aware access, workflow automation, integrations, and dependable infrastructure.",
    challenges: ["Complex workflows", "Access control", "Data movement", "Operational scale"],
    opportunities: ["Internal software", "Workflow platforms", "Data applications", "APIs"],
    capabilities: ["Software Engineering", "Cloud & Infrastructure", "Artificial Intelligence", "Product Development"],
    seo: {
      title: "Business & Enterprise Technology | BIMAL GLOBAL",
      description:
        "Technology capabilities for enterprise software, workflow platforms, operational systems, data applications, APIs, and infrastructure.",
    },
  },
  {
    slug: "startups-digital-products",
    name: "Startups & Digital Products",
    shortDescription:
      "MVPs, product development, scalable software architecture, mobile applications, AI-enabled products, and technology platforms.",
    longDescription:
      "Startup and digital product work can move from opportunity discovery to MVPs, product architecture, mobile experiences, AI-enabled features, launch, and evolution.",
    challenges: ["Product clarity", "MVP scope", "Architecture choices", "Speed with quality"],
    opportunities: ["MVPs", "Digital platforms", "Mobile products", "AI-enabled products"],
    capabilities: ["Product Development", "Software Engineering", "Mobile Platforms", "Artificial Intelligence"],
    seo: {
      title: "Startups & Digital Products | BIMAL GLOBAL",
      description:
        "Product development and engineering capabilities for MVPs, digital platforms, mobile products, scalable architecture, and AI-enabled products.",
    },
  },
] satisfies Industry[];

export const industriesOverviewPage = {
  hero: {
    eyebrow: "INDUSTRIES",
    title: "Technology built around how businesses actually work.",
    summary:
      "Different industries face different workflows, customer expectations, operational challenges, and technology requirements. BIMAL GLOBAL designs software and digital products around the systems and opportunities that matter to each business.",
    imagePath: "/images/industries/hero.jpg",
    imageAlt:
      "Broad global technology and business systems visual representing multiple industries",
    primaryCta: { href: "/contact", label: "Discuss Your Industry" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  overview: {
    title: "Technology should reflect the business behind it.",
    paragraphs: [
      "Different industries may require different approaches to customer experience, operations, workflows, data, mobile access, integrations, compliance considerations, infrastructure, automation, and AI.",
      "BIMAL GLOBAL starts with the business context so the product, platform, application, or internal system can be shaped around real requirements instead of generic assumptions.",
    ],
    flow: [
      "Industry Context",
      "Business Workflow",
      "Product & Software Design",
      "Technology Architecture",
      "Continuous Evolution",
    ],
    statement:
      "The technology should support the way the business creates value, not force the business into a generic system.",
  },
  challenges: [
    {
      title: "Fragmented Systems",
      description:
        "Businesses often operate across disconnected tools and workflows.",
    },
    {
      title: "Manual Processes",
      description:
        "Important work can depend on repetitive human effort.",
    },
    {
      title: "Legacy Technology",
      description:
        "Existing systems may become difficult to maintain or evolve.",
    },
    {
      title: "Customer Expectations",
      description:
        "Digital users increasingly expect simple, fast, and connected experiences.",
    },
    {
      title: "Data Complexity",
      description:
        "Businesses generate information but may struggle to make it useful.",
    },
    {
      title: "Scaling Requirements",
      description:
        "Technology needs can change as the business grows.",
    },
    {
      title: "Integration Challenges",
      description:
        "Different systems often need to communicate.",
    },
    {
      title: "Operational Visibility",
      description:
        "Teams need better understanding of workflows and system performance.",
    },
  ] satisfies TextBlock[],
  value: {
    title: "Technology can improve more than the interface.",
    body:
      "Technology can affect how customers interact with a business, how teams operate, how information moves, how decisions are supported, how products scale, and how new digital services are created.",
    items: [
      "Customer Experience",
      "Business Operations",
      "Data",
      "Automation",
      "Software Systems",
      "Infrastructure",
    ],
    flow: [
      "Customer Experience",
      "Business Operations",
      "Data",
      "Automation",
      "Software Systems",
      "Infrastructure",
    ],
  } satisfies FlowSection,
  lifecycle: [
    { number: "01", title: "Understand", description: "Understand users, business workflows, systems, and constraints." },
    { number: "02", title: "Identify", description: "Identify where technology can create meaningful value." },
    { number: "03", title: "Design", description: "Design the product, workflow, or system." },
    { number: "04", title: "Build", description: "Develop software and technology capabilities." },
    { number: "05", title: "Integrate", description: "Connect systems, data, APIs, and workflows." },
    { number: "06", title: "Launch", description: "Move the solution into real-world use." },
    { number: "07", title: "Learn", description: "Understand usage and operational behavior." },
    { number: "08", title: "Evolve", description: "Improve the product and technology over time." },
  ] satisfies LifecycleStage[],
  capabilities: [
    {
      title: "Software Engineering",
      description:
        "For platforms, APIs, internal systems, and digital products.",
      href: "/capabilities/software-engineering",
    },
    {
      title: "Product Development",
      description:
        "For turning business opportunities into complete products.",
      href: "/capabilities/product-development",
    },
    {
      title: "Mobile Platforms",
      description:
        "For customer-facing and workforce applications.",
      href: "/capabilities/mobile-platforms",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "For systems that need dependable deployment, operation, and scale.",
      href: "/capabilities/cloud-infrastructure",
    },
    {
      title: "Artificial Intelligence",
      description:
        "For intelligent workflows, automation, search, processing, and product features.",
      href: "/capabilities/artificial-intelligence",
    },
  ] satisfies CapabilityConnection[],
  digitalProducts: {
    title: "New products can emerge from industry problems.",
    body:
      "Technology work is not only about replacing existing systems. Industry challenges can create opportunities for new platforms, marketplaces, mobile products, SaaS products, internal software, customer portals, data products, AI-enabled products, and automation systems.",
    items: [
      "New platforms",
      "Marketplaces",
      "Mobile products",
      "SaaS products",
      "Internal software",
      "Customer portals",
      "Data products",
      "AI-enabled products",
      "Automation systems",
    ],
    flow: ["Problem", "Opportunity", "Product", "Platform", "Evolution"],
    imagePath: "/images/industries/digital-products.jpg",
    imageAlt:
      "Digital product opportunity visual showing business context becoming software platforms",
  } satisfies FlowSection,
  aiAcrossIndustries: {
    title: "Intelligence should support real workflows.",
    body:
      "AI can support intelligent search, information processing, workflow assistance, content processing, recommendations, internal assistants, and customer experiences where those capabilities create meaningful value.",
    items: [
      "Intelligent search",
      "Information processing",
      "Workflow assistance",
      "Content processing",
      "Recommendations",
      "Internal assistants",
      "Customer experiences",
    ],
    statement:
      "AI should be used where it creates meaningful value, not simply because it is available.",
  },
  modernization: {
    title: "Existing businesses can evolve without rebuilding everything at once.",
    body:
      "Modernization can improve legacy systems, workflows, API integration, mobile extensions, cloud infrastructure, automation, and product evolution while preserving what still works.",
    items: [
      "Legacy system improvement",
      "Workflow modernization",
      "API integration",
      "Mobile extensions",
      "Cloud infrastructure improvements",
      "Automation",
      "Product evolution",
    ],
    flow: ["Existing Systems", "Assess", "Prioritize", "Improve", "Integrate", "Evolve"],
    imagePath: "/images/industries/modernization.jpg",
    imageAlt:
      "Modernization visual showing existing business systems evolving into connected software",
  } satisfies FlowSection,
  globalContext: {
    title: "Technology can be global while business context remains local.",
    body:
      "BIMAL GLOBAL serves across India and Nepal while thinking about broader international technology requirements. Useful products can account for local customer behavior, language considerations, regional workflows, market context, mobile-first users, global product scalability, and cross-market expansion.",
    items: [
      "Local customer behavior",
      "Language considerations",
      "Regional workflows",
      "Market context",
      "Mobile-first users",
      "Global product scalability",
      "Cross-market expansion",
    ],
    flow: ["Local Context", "Product Design", "Technology Foundation", "Cross-Market Evolution"],
    imagePath: "/images/industries/global-context.jpg",
    imageAlt:
      "Global and local market context visual for India, Nepal, and broader technology growth",
  } satisfies FlowSection,
  engagementScenarios: [
    "You need to build a new digital platform.",
    "Your existing systems need modernization.",
    "Your industry workflow is too manual.",
    "Your customers need a better digital experience.",
    "Your business needs a mobile application.",
    "Different systems need integration.",
    "You are exploring an AI-enabled workflow.",
    "You are launching a technology product.",
    "Your software needs to scale.",
    "You need a stronger technology foundation.",
  ],
  principles: [
    {
      title: "Understand the context",
      description:
        "Technology decisions should begin with the business environment.",
    },
    {
      title: "Focus on workflows",
      description:
        "Understand how people and systems actually work.",
    },
    {
      title: "Build for users",
      description:
        "A product should serve real user needs.",
    },
    {
      title: "Integrate intelligently",
      description:
        "New software should consider existing systems.",
    },
    {
      title: "Avoid unnecessary complexity",
      description:
        "Use the right level of technology for the problem.",
    },
    {
      title: "Design for evolution",
      description:
        "Business requirements change over time.",
    },
    {
      title: "Connect capabilities",
      description:
        "Complex problems may require software, mobile, infrastructure, and AI together.",
    },
  ] satisfies TextBlock[],
  faqs: [
    {
      question: "Which industries does BIMAL GLOBAL work with?",
      answer:
        "BIMAL GLOBAL can support businesses and products across different industries depending on the software, product, mobile, cloud, data, and AI requirements involved.",
    },
    {
      question: "Do you only work with the industries listed on this page?",
      answer:
        "No. The listed industries represent key domains, while BIMAL GLOBAL can evaluate technology requirements across other business sectors.",
    },
    {
      question: "Can you build industry-specific software?",
      answer:
        "Yes. BIMAL GLOBAL can build platforms, internal systems, mobile applications, APIs, workflow tools, and digital products designed around specific business workflows.",
    },
    {
      question: "Can you modernize existing industry software?",
      answer:
        "Yes. Modernization can include assessment, workflow improvement, integration, automation, infrastructure improvements, and product evolution.",
    },
    {
      question: "Can you build mobile applications for specific industries?",
      answer:
        "Yes. Mobile applications can be built for customer-facing products, workforce workflows, service access, operational tools, and connected platform experiences.",
    },
    {
      question: "Can AI be integrated into industry software?",
      answer:
        "Yes, where AI creates meaningful product or workflow value through search, processing, assistance, recommendations, automation, or intelligent product features.",
    },
    {
      question: "Can you build a new digital product for a specific market?",
      answer:
        "Yes. Product development and engineering can help turn a market opportunity into a product strategy, MVP, platform, mobile application, or complete software system.",
    },
    {
      question: "Do you work with startups and established businesses?",
      answer:
        "Yes. The technology approach can differ depending on product stage, existing systems, workflow complexity, market needs, and business requirements.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "What could technology change in your industry?",
    summary:
      "Whether you are improving an existing business system, launching a new digital product, or exploring a new technology opportunity, BIMAL GLOBAL can help turn complex requirements into practical software and digital solutions.",
    primaryCta: { href: "/contact", label: "Discuss Your Project" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
