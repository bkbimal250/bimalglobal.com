export type TextBlock = {
  title: string;
  description: string;
};

export type EngineeringSection = {
  imagePath?: string;
  title: string;
  paragraphs: string[];
  items: string[];
};

export type EngineeringLifecycleStage = {
  number: string;
  title: string;
  description: string;
};

export type RelatedCapability = {
  href: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const softwareEngineeringPage = {
  hero: {
    eyebrow: "Software Engineering",
    title: "Engineering software built for today and designed for change.",
    summary:
      "Build reliable digital products, platforms, APIs, and business systems with an engineering approach that considers architecture, maintainability, performance, security, and long-term evolution.",
    imagePath: "/images/capabilities/software-engineering/hero.jpg",
    imageAlt: "Abstract software engineering and technology infrastructure visual",
    primaryCta: { href: "/contact", label: "Discuss a Technology Challenge" },
    secondaryCta: { href: "/capabilities", label: "Explore All Capabilities" },
  },
  overview: {
    title: "Software engineering across the full technology stack.",
    paragraphs: [
      "Software engineering is not only writing application code. It includes the decisions, systems, and practices that help products remain useful, reliable, understandable, and adaptable over time.",
      "BIMAL GLOBAL approaches engineering across architecture, frontend, backend, APIs, data, integrations, testing, security, performance, infrastructure, scalability, and long-term maintainability.",
    ],
    layers: ["Application", "APIs", "Services", "Data", "Infrastructure"],
  },
  engineeredSystems: [
    {
      title: "Digital Applications",
      description:
        "Web applications and digital experiences designed around real user workflows.",
    },
    {
      title: "Business Systems",
      description:
        "Internal platforms, operational systems, management software, workflow applications, and business automation.",
    },
    {
      title: "Software Platforms",
      description:
        "Multi-module and multi-user platforms designed to support evolving product requirements.",
    },
    {
      title: "APIs & Services",
      description:
        "Structured APIs and backend services that connect applications, users, data, and external systems.",
    },
    {
      title: "Data-Driven Applications",
      description:
        "Applications that depend on structured data, analytics, reporting, search, workflows, and intelligent processing.",
    },
    {
      title: "Integrated Systems",
      description:
        "Software ecosystems that connect internal services with external platforms, APIs, payment systems, communication services, and other technologies.",
    },
  ] satisfies TextBlock[],
  disciplines: [
    {
      title: "Frontend engineering",
      imagePath: "/images/capabilities/software-engineering/frontend.jpg",
      paragraphs: [
        "Frontend engineering turns product direction into usable, responsive, accessible, and performance-conscious interfaces.",
        "The work can include component-based interfaces, design-system implementation, state management, API-driven views, SEO-aware web applications, and progressive enhancement where appropriate.",
      ],
      items: [
        "Responsive web applications",
        "Component-based interfaces",
        "Design-system implementation",
        "Interactive user experiences",
        "Accessibility-aware interfaces",
        "API-driven frontends",
        "Performance-conscious rendering",
        "SEO-aware applications",
      ],
    },
    {
      title: "Backend engineering",
      paragraphs: [
        "Backend engineering creates the foundation for reliable software systems: business logic, APIs, authentication, authorization, data processing, workflows, notifications, search, reporting, integrations, and service architecture.",
        "Architecture should evolve with product requirements rather than becoming an unnecessary collection of services. The right solution can range from a modular monolith to distributed services depending on actual needs.",
      ],
      items: [
        "Business logic",
        "Authentication and authorization",
        "Workflow systems",
        "Background jobs",
        "Notifications",
        "Search",
        "Reporting",
        "Service architecture",
      ],
    },
    {
      title: "APIs that connect products, systems, and services.",
      paragraphs: [
        "APIs should be designed as stable contracts between systems. That means clear design, authentication, authorization, validation, pagination, filtering, search, rate-aware behavior, error handling, versioning, documentation, and third-party integration patterns.",
      ],
      items: ["Web App", "API Layer", "Business Services", "Database / External Services"],
    },
    {
      title: "Platform engineering",
      paragraphs: [
        "Platform engineering creates reusable foundations that help products grow without repeating the same technical work across every module.",
        "Shared services, authentication systems, user management, role-based access, notifications, media handling, search, analytics foundations, admin systems, configuration, and observability foundations can reduce duplication and improve consistency.",
      ],
      items: [
        "Shared services",
        "User management",
        "Role-based access",
        "Notification infrastructure",
        "Media handling",
        "Admin systems",
        "Configuration",
        "Observability foundations",
      ],
    },
    {
      title: "Architecture before complexity.",
      imagePath: "/images/capabilities/software-engineering/architecture.jpg",
      paragraphs: [
        "The right architecture is not the most complicated architecture. It is the architecture that fits the product.",
        "Architecture decisions should consider requirements, domain boundaries, data ownership, API boundaries, security, performance, deployment, scalability, maintainability, and future change.",
      ],
      items: [
        "What needs to scale?",
        "What needs to remain simple?",
        "Where should data live?",
        "Which systems need to communicate?",
        "What should remain modular?",
        "What should be separated later?",
      ],
    },
    {
      title: "Software does not operate in isolation.",
      paragraphs: [
        "Integrated software often depends on payments, communication platforms, identity providers, maps and location services, email systems, SMS services, storage services, analytics systems, external APIs, and enterprise systems.",
        "We design integrations around reliability, validation, error handling, security, and graceful failure.",
      ],
      items: ["Payments", "Communication", "Identity", "Storage", "Analytics", "External APIs"],
    },
    {
      title: "Quality is part of engineering, not the final step.",
      imagePath: "/images/capabilities/software-engineering/quality.jpg",
      paragraphs: [
        "Quality engineering is built through testable architecture, validation, error handling, code review, and release practices that improve confidence without pretending software can be proven perfect.",
      ],
      items: ["Build", "Test", "Validate", "Review", "Release", "Monitor", "Improve"],
    },
    {
      title: "Security built into the engineering process.",
      paragraphs: [
        "Security-aware engineering considers authentication, authorization, least-privilege thinking, input validation, secure API design, data protection, secrets management, dependency awareness, access control, logging, monitoring, and secure deployment practices.",
        "Security requirements vary by product, data sensitivity, regulatory environment, and deployment context.",
      ],
      items: [
        "Authentication",
        "Authorization",
        "Input validation",
        "Secure API design",
        "Data protection",
        "Access control",
        "Secure deployment",
      ],
    },
    {
      title: "Performance that starts with good engineering.",
      imagePath: "/images/capabilities/software-engineering/scalability.jpg",
      paragraphs: [
        "Performance is influenced by architecture and implementation: frontend rendering, API efficiency, database queries, caching strategies, asset optimization, background processing, asynchronous workflows, infrastructure design, observability, and capacity planning.",
      ],
      items: ["Frontend", "API", "Database", "Caching", "Infrastructure"],
    },
    {
      title: "Engineering does not stop when the code is written.",
      paragraphs: [
        "Software engineering connects closely with infrastructure through development environments, build pipelines, deployment, environment configuration, monitoring, logging, observability, rollbacks, release workflows, and scaling strategies.",
      ],
      items: ["Build pipelines", "Deployment", "Configuration", "Monitoring", "Logging", "Rollbacks"],
    },
  ] satisfies EngineeringSection[],
  lifecycle: [
    { number: "01", title: "Understand", description: "Understand the product, users, workflows, constraints, and objectives." },
    { number: "02", title: "Architect", description: "Define the technical structure and major system boundaries." },
    { number: "03", title: "Design", description: "Translate requirements into usable product and technical experiences." },
    { number: "04", title: "Build", description: "Develop the application, services, APIs, integrations, and supporting systems." },
    { number: "05", title: "Validate", description: "Test functionality, reliability, security considerations, and real-world workflows." },
    { number: "06", title: "Launch", description: "Prepare deployment, environments, monitoring, and release processes." },
    { number: "07", title: "Evolve", description: "Improve the system as users, requirements, and technology change." },
  ] satisfies EngineeringLifecycleStage[],
  technologyDomains: [
    "Web Applications",
    "Backend Systems",
    "APIs",
    "Databases",
    "Cloud",
    "Data",
    "AI",
    "Mobile",
    "Integrations",
    "Infrastructure",
    "Automation",
    "Developer Tooling",
  ],
  principles: [
    { title: "Build for change", description: "Requirements evolve. Systems should be structured to evolve with them." },
    { title: "Keep complexity intentional", description: "Complexity should solve a real problem rather than exist for its own sake." },
    { title: "Make systems understandable", description: "Readable architecture and code improve collaboration and long-term maintenance." },
    { title: "Design around real workflows", description: "Technology should support how people and businesses actually operate." },
    { title: "Automate repetitive work", description: "Automation should reduce unnecessary manual effort across development and operations." },
    { title: "Measure before optimizing", description: "Performance improvements should be guided by actual system behavior and meaningful measurements." },
    { title: "Security is a system concern", description: "Security should be considered throughout architecture, implementation, deployment, and operation." },
  ] satisfies TextBlock[],
  engagementModels: [
    { title: "Build Something New", description: "For new applications, platforms, digital products, and software systems." },
    { title: "Improve What Exists", description: "For existing applications that require modernization, optimization, restructuring, or new capabilities." },
    { title: "Extend Your Technology Capability", description: "For organizations that need additional engineering capacity for a product or technical initiative." },
  ] satisfies TextBlock[],
  strategicSituations: [
    "You are starting a new digital product.",
    "An existing system has become difficult to evolve.",
    "Multiple systems need to communicate.",
    "Your application needs stronger technical foundations.",
    "You need to introduce new product capabilities.",
    "Your software needs better scalability.",
    "You need to modernize an existing platform.",
    "You need engineering support across product and infrastructure.",
  ],
  projectTypes: [
    "Customer-facing web platforms",
    "SaaS applications",
    "Business management systems",
    "Marketplace platforms",
    "Booking platforms",
    "Content platforms",
    "Financial workflow systems",
    "Healthcare software",
    "Retail platforms",
    "Logistics systems",
    "Education platforms",
    "Media platforms",
    "Internal enterprise applications",
    "Data-driven dashboards",
    "API platforms",
  ],
  relatedCapabilities: [
    {
      href: "/capabilities/product-development",
      title: "Product Development",
      description:
        "Software engineering turns product direction into scalable digital systems.",
    },
    {
      href: "/capabilities/mobile-platforms",
      title: "Mobile Platforms",
      description:
        "Mobile experiences depend on reliable applications, APIs, authentication, and backend services.",
    },
    {
      href: "/capabilities/cloud-infrastructure",
      title: "Cloud & Infrastructure",
      description:
        "Infrastructure provides the environment where software is deployed, observed, and scaled.",
    },
    {
      href: "/capabilities/artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "AI capabilities can be integrated into applications, workflows, and products through appropriate engineering foundations.",
    },
  ] satisfies RelatedCapability[],
  faqs: [
    {
      question: "What types of software can BIMAL GLOBAL build?",
      answer:
        "BIMAL GLOBAL can support frontend and backend web applications, platforms, business systems, APIs, integrations, data-driven applications, and digital products.",
    },
    {
      question: "Can you work with an existing software system?",
      answer:
        "Yes. Engineering work can include modernization, optimization, refactoring, new features, integrations, and architectural improvements.",
    },
    {
      question: "Do you only build new products?",
      answer:
        "No. Software engineering can support both greenfield products and existing systems that need to evolve.",
    },
    {
      question: "Do you always recommend microservices?",
      answer:
        "No. Architecture should match actual requirements and can range from modular monoliths to distributed architectures.",
    },
    {
      question: "Can software engineering include cloud and infrastructure?",
      answer:
        "Yes. Engineering often connects closely with cloud and infrastructure capabilities, especially around deployment, environments, observability, and scaling.",
    },
    {
      question: "Can you integrate third-party services?",
      answer:
        "Yes. API and integration engineering can connect products with external systems, identity providers, payment categories, communication platforms, storage, analytics, and other services.",
    },
    {
      question: "How do you approach scalability?",
      answer:
        "Scalability begins with understanding workload patterns, bottlenecks, architecture, data access, infrastructure, and operational requirements.",
    },
    {
      question: "Can you work with different technology stacks?",
      answer:
        "Technology selection should be based on requirements, maintainability, ecosystem, team context, and long-term needs.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Have a software challenge worth solving?",
    summary:
      "From a new digital product to an existing system that needs to evolve, BIMAL GLOBAL can help turn technical requirements into thoughtfully engineered software.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
