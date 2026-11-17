export type TextBlock = {
  title: string;
  description: string;
};

export type SectionBlock = {
  imagePath?: string;
  title: string;
  paragraphs: string[];
  items: string[];
};

export type FlowSection = {
  title: string;
  body: string;
  items: string[];
  flow: string[];
};

export type LifecycleStage = {
  number: string;
  title: string;
  description: string;
};

export type RelatedCapability = TextBlock & {
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const cloudInfrastructurePage = {
  hero: {
    eyebrow: "Cloud & Infrastructure",
    title: "Infrastructure designed to help software run, scale, and evolve.",
    summary:
      "Design the cloud and infrastructure foundations behind digital products, APIs, data systems, and business applications with an approach focused on reliability, security, observability, scalability, and operational clarity.",
    imagePath: "/images/capabilities/cloud-infrastructure/hero.jpg",
    imageAlt:
      "Abstract infrastructure architecture visual with connected systems and operational layers",
    primaryCta: { href: "/contact", label: "Discuss Your Infrastructure" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  overview: {
    title: "The foundation behind every digital product.",
    paragraphs: [
      "Infrastructure connects software engineering with real-world operation. It is the layer where applications meet deployment, security, data, monitoring, recovery, performance, and ongoing change.",
      "Good infrastructure decisions begin with the application: how it is used, what data it depends on, how teams release it, what must remain visible, and what risks matter most.",
      "BIMAL GLOBAL approaches infrastructure as a connected system rather than a place to simply put an application on a server.",
    ],
    layers: [
      "Application",
      "Services",
      "Data",
      "Infrastructure",
      "Monitoring & Operations",
    ],
    concerns: [
      "Security",
      "Networking",
      "Storage",
      "Deployment",
      "Observability",
      "Scalability",
    ],
  },
  capabilities: [
    {
      title: "Cloud Architecture",
      description:
        "Design infrastructure structures around application requirements, workloads, environments, and operational needs.",
    },
    {
      title: "Application Infrastructure",
      description:
        "Infrastructure supporting web applications, APIs, services, workers, and background processing.",
    },
    {
      title: "Deployment Systems",
      description:
        "Automated and repeatable processes for building, testing, and deploying software.",
    },
    {
      title: "Infrastructure Automation",
      description:
        "Reduce repetitive infrastructure work through consistent configuration and automation.",
    },
    {
      title: "Observability",
      description:
        "Create visibility into application and infrastructure behavior through logs, metrics, traces, and operational signals.",
    },
    {
      title: "Scalability",
      description:
        "Design systems that can respond to changing workload requirements.",
    },
    {
      title: "Reliability",
      description:
        "Build operational practices and infrastructure patterns that support predictable system behavior.",
    },
    {
      title: "Infrastructure Modernization",
      description:
        "Improve existing infrastructure when architecture, deployment, operational processes, or application requirements have changed.",
    },
  ] satisfies TextBlock[],
  sections: [
    {
      title: "Cloud architecture that fits the workload",
      imagePath: "/images/capabilities/cloud-infrastructure/cloud.jpg",
      paragraphs: [
        "Cloud architecture should be shaped by workload behavior, application boundaries, data requirements, operational risk, and the way teams release and support software.",
        "The right design may combine compute, networking, storage, databases, caching, queues, background processing, load distribution, security boundaries, monitoring, and deployment environments without locking the product into unnecessary complexity.",
      ],
      items: [
        "Compute",
        "Networking",
        "Storage",
        "Databases",
        "Caching",
        "Queues",
        "Background processing",
        "Load distribution",
        "Security boundaries",
        "Monitoring",
        "Deployment environments",
      ],
    },
    {
      title: "Portable application environments",
      paragraphs: [
        "Containerization can help package applications with their dependencies, support consistent environments, and make deployment more repeatable.",
        "It is most useful when it solves a real deployment, consistency, or operational problem. Not every product needs the same runtime model, and infrastructure should stay appropriate to the application.",
      ],
      items: [
        "Application packaging",
        "Consistent environments",
        "Dependency isolation",
        "Repeatable deployment",
        "Service separation",
        "Resource awareness",
      ],
    },
    {
      title: "Infrastructure is also about how systems communicate.",
      imagePath: "/images/capabilities/cloud-infrastructure/architecture.jpg",
      paragraphs: [
        "Reliable digital systems depend on clear connectivity. DNS, routing, load distribution, private and public access, secure connections, APIs, and traffic management all influence how software behaves in operation.",
        "Infrastructure architecture should make communication understandable while protecting the boundaries that matter for users, data, and system operation.",
      ],
      items: [
        "DNS",
        "Routing",
        "Load distribution",
        "Network boundaries",
        "Private and public access",
        "Service communication",
        "API connectivity",
        "Secure connections",
        "Traffic management",
      ],
    },
    {
      title: "Infrastructure for data that applications depend on",
      paragraphs: [
        "Applications rely on data infrastructure for persistence, retrieval, resilience, and operational continuity. Storage decisions should reflect product needs rather than a fixed default technology.",
        "Choices across relational databases, NoSQL where appropriate, object storage, file storage, caching, backups, replication concepts, and data lifecycle planning depend on structure, access patterns, scale, consistency, availability, cost, and product requirements.",
      ],
      items: [
        "Relational databases",
        "NoSQL where appropriate",
        "Object storage",
        "File storage",
        "Caching",
        "Backups",
        "Replication concepts",
        "Data lifecycle considerations",
      ],
    },
    {
      title: "Performance often begins below the application layer.",
      imagePath: "/images/capabilities/cloud-infrastructure/performance.jpg",
      paragraphs: [
        "Performance is shaped by the application, APIs, data access, caching, assets, network paths, resource allocation, and infrastructure configuration.",
        "BIMAL GLOBAL thinks about performance across content delivery, database optimization, connection management, asynchronous processing, asset delivery, API efficiency, and the infrastructure capacity that supports them.",
      ],
      items: [
        "Caching",
        "Content delivery",
        "Database optimization",
        "Resource allocation",
        "Connection management",
        "Asynchronous processing",
        "Asset delivery",
        "API efficiency",
      ],
    },
    {
      title: "Design for predictable operation.",
      paragraphs: [
        "Reliability is not a slogan or a universal uptime claim. It comes from understanding failure modes, business impact, system requirements, and the operational practices needed for a particular product.",
        "Infrastructure can support predictable behavior through health checks, redundancy where appropriate, graceful degradation, retries, timeouts, error handling, backups, recovery planning, and monitoring.",
      ],
      items: [
        "Failure awareness",
        "Health checks",
        "Redundancy where appropriate",
        "Graceful degradation",
        "Retry strategies",
        "Timeouts",
        "Error handling",
        "Backups",
        "Recovery planning",
        "Monitoring",
      ],
    },
    {
      title: "Security across the infrastructure layer",
      paragraphs: [
        "Security-aware infrastructure considers access, networks, secrets, configuration, data protection, dependencies, logging, monitoring, and update practices from the beginning.",
        "Security architecture should reflect application sensitivity, data requirements, threat models, and operating environment.",
      ],
      items: [
        "Access control",
        "Least-privilege principles",
        "Network boundaries",
        "Secrets management",
        "Encryption considerations",
        "Secure configuration",
        "Dependency management",
        "Logging",
        "Monitoring",
        "Patch and update awareness",
        "Backup protection",
      ],
    },
    {
      title: "Scale when the product needs to scale.",
      imagePath: "/images/capabilities/cloud-infrastructure/scalability.jpg",
      paragraphs: [
        "Scalability should be guided by real workload patterns and product requirements. Some systems need more resources, some need architectural changes, and some simply need clearer bottleneck visibility.",
        "Scaling can involve vertical capacity, horizontal capacity, application architecture, data access, storage, queries, indexes, partitioning where appropriate, compute, networking, or other infrastructure capacity.",
      ],
      items: [
        "Vertical scaling",
        "Horizontal scaling",
        "Application scaling",
        "Data scaling",
        "Infrastructure scaling",
      ],
    },
    {
      title: "Build infrastructure with economics in mind.",
      paragraphs: [
        "Infrastructure architecture has financial consequences. The goal is not to use the most infrastructure. It is to use the infrastructure the product actually needs.",
        "Cost-aware infrastructure considers resource utilization, environment management, storage lifecycle, compute efficiency, scaling policies, architecture choices, infrastructure cost visibility, and avoiding unnecessary complexity.",
      ],
      items: [
        "Resource utilization",
        "Environment management",
        "Storage lifecycle",
        "Compute efficiency",
        "Scaling policies",
        "Architecture choices",
        "Cost visibility",
        "Controlled complexity",
      ],
    },
    {
      title: "Cloud-native when it makes sense.",
      paragraphs: [
        "Cloud-native thinking can include managed services, elastic infrastructure, automation, containers, service-oriented architecture, observability, infrastructure automation, and event-driven patterns.",
        "Cloud-native architecture should be adopted when it creates meaningful operational or product value.",
      ],
      items: [
        "Managed services",
        "Elastic infrastructure",
        "Automation",
        "Containers",
        "Service-oriented architecture",
        "Observability",
        "Infrastructure automation",
        "Event-driven patterns",
      ],
    },
  ] satisfies SectionBlock[],
  automation: {
    title: "Make infrastructure repeatable.",
    body:
      "Infrastructure automation helps teams reduce manual repetition, create clearer change history, keep environments consistent, and make provisioning more repeatable through defined, version-controlled configuration.",
    items: [
      "Declarative infrastructure",
      "Environment configuration",
      "Repeatable deployments",
      "Version-controlled infrastructure",
      "Automated provisioning",
      "Configuration consistency",
      "Environment parity",
      "Change visibility",
    ],
    flow: ["Define", "Version", "Provision", "Deploy", "Observe", "Improve"],
  } satisfies FlowSection,
  environments: {
    title: "Clear environments. Controlled changes.",
    body:
      "Environment separation helps teams experiment, validate, release, and operate with clearer boundaries. Exact environment structures should depend on application size, team workflow, risk, and deployment model.",
    flow: ["Development", "Testing", "Staging", "Production"],
    items: [
      {
        title: "Development",
        description: "Active engineering and experimentation.",
      },
      {
        title: "Testing",
        description: "Validation and integration.",
      },
      {
        title: "Staging",
        description: "Production-like validation before release.",
      },
      {
        title: "Production",
        description: "Real-world application operation.",
      },
    ],
  },
  delivery: {
    title: "From code change to controlled release.",
    body:
      "CI/CD connects source control with build, test, validation, deployment, environment configuration, rollback thinking, release visibility, and monitoring so software changes can move through controlled release paths.",
    items: [
      "Source control",
      "Automated builds",
      "Testing",
      "Artifact generation",
      "Deployment",
      "Environment configuration",
      "Release validation",
      "Rollback strategies",
      "Deployment visibility",
    ],
    flow: ["Commit", "Build", "Test", "Validate", "Deploy", "Monitor"],
  } satisfies FlowSection,
  observability: {
    title: "You cannot improve what you cannot see.",
    body:
      "Observability gives teams a practical way to understand application and infrastructure behavior. It should help answer what happened, where it happened, why it happened, whether the system is healthy, and what changed.",
    layers: [
      {
        title: "Logs",
        description: "Understand events and application behavior.",
      },
      {
        title: "Metrics",
        description: "Track system-level signals and trends.",
      },
      {
        title: "Traces",
        description: "Understand requests as they move across services.",
      },
      {
        title: "Alerts",
        description: "Surface important conditions requiring attention.",
      },
      {
        title: "Dashboards",
        description: "Create operational visibility.",
      },
    ],
    questions: [
      "What happened?",
      "Where did it happen?",
      "Why did it happen?",
      "Is the system healthy?",
      "What changed?",
    ],
    flow: ["System", "Logs", "Metrics", "Traces", "Alerts", "Decisions"],
  },
  backup: {
    title: "Prepare for failure before it happens.",
    body:
      "Backup and recovery planning helps teams think about data protection, restore paths, disaster scenarios, operational documentation, retention, and recovery testing before failure arrives. Recovery objectives should be defined according to business requirements.",
    items: [
      "Backup strategies",
      "Data recovery",
      "Restore testing",
      "Recovery planning",
      "Backup retention",
      "Disaster scenarios",
      "Operational documentation",
    ],
    flow: ["Backup", "Protect", "Test", "Recover", "Learn"],
  } satisfies FlowSection,
  modernization: {
    title: "Improve what already exists.",
    body:
      "Infrastructure modernization improves systems when architecture, deployment, environments, observability, security, performance, or application requirements have changed. It starts by understanding what exists and what actually needs to improve.",
    items: [
      "Legacy infrastructure assessment",
      "Deployment modernization",
      "Environment restructuring",
      "Infrastructure automation",
      "Observability improvements",
      "Security improvements",
      "Performance improvements",
      "Migration planning",
      "Application and infrastructure alignment",
    ],
    flow: ["Assess", "Prioritize", "Modernize", "Validate", "Operate"],
  } satisfies FlowSection,
  connections: [
    {
      title: "Software and infrastructure should evolve together.",
      description:
        "Product, application, APIs, data, infrastructure, and operations all influence each other. Architecture decisions made at one layer can affect deployment, monitoring, reliability, scalability, and future change.",
      href: "/capabilities/software-engineering",
      cta: "Explore Software Engineering",
      flow: ["Product", "Application", "APIs", "Data", "Infrastructure", "Operations"],
    },
    {
      title: "Mobile applications need dependable systems behind them.",
      description:
        "Mobile products depend on APIs, authentication, notifications, data, storage, media, background services, monitoring, and scaling foundations behind the device experience.",
      href: "/capabilities/mobile-platforms",
      cta: "Explore Mobile Platforms",
      flow: ["Mobile App", "APIs", "Authentication", "Data", "Storage", "Monitoring"],
    },
    {
      title: "AI workloads introduce new infrastructure considerations.",
      description:
        "AI-enabled products can add considerations around model serving, data pipelines, compute requirements, storage, APIs, monitoring, cost awareness, security, and scaling.",
      href: "/capabilities/artificial-intelligence",
      cta: "Explore Artificial Intelligence",
      flow: ["Data", "Pipelines", "Models", "APIs", "Monitoring", "Cost Awareness"],
    },
  ],
  lifecycle: [
    { number: "01", title: "Understand", description: "Workload, application, data, users, constraints." },
    { number: "02", title: "Architect", description: "Define infrastructure and system boundaries." },
    { number: "03", title: "Provision", description: "Create required environments and resources." },
    { number: "04", title: "Deploy", description: "Connect application delivery to infrastructure." },
    { number: "05", title: "Observe", description: "Monitor system behavior and operational signals." },
    { number: "06", title: "Secure", description: "Review access, configuration, data, and infrastructure risks." },
    { number: "07", title: "Scale", description: "Adapt infrastructure to changing requirements." },
    { number: "08", title: "Evolve", description: "Modernize architecture as applications and products change." },
  ] satisfies LifecycleStage[],
  principles: [
    { title: "Keep infrastructure understandable", description: "Complex systems should remain understandable to the teams operating them." },
    { title: "Automate repeatable work", description: "Infrastructure should not depend unnecessarily on manual repetition." },
    { title: "Design for failure", description: "Systems should account for failure modes rather than assuming everything always works." },
    { title: "Observe the system", description: "Operational visibility should be part of the architecture." },
    { title: "Secure by design", description: "Access, secrets, networks, and data require deliberate consideration." },
    { title: "Scale intentionally", description: "Scale infrastructure according to actual workload requirements." },
    { title: "Control complexity", description: "Use distributed systems, containers, and managed services when they provide real value." },
    { title: "Consider the economics", description: "Infrastructure architecture has operational and financial consequences." },
  ] satisfies TextBlock[],
  technologyDomains: [
    "Cloud",
    "Compute",
    "Networking",
    "Storage",
    "Databases",
    "Containers",
    "Deployment",
    "CI/CD",
    "Infrastructure Automation",
    "Observability",
    "Security",
    "Caching",
    "Queues",
    "APIs",
    "Monitoring",
    "Backup & Recovery",
    "Scalability",
  ],
  situations: [
    "You are launching a new digital platform.",
    "Your application needs a stronger production foundation.",
    "Deployment has become difficult to manage.",
    "Infrastructure is becoming increasingly manual.",
    "Your systems need better observability.",
    "Your application needs to scale.",
    "Your infrastructure costs are becoming difficult to understand.",
    "Your existing architecture needs modernization.",
    "Your software and infrastructure have become disconnected.",
    "You need infrastructure designed alongside a new product.",
  ],
  engagementModels: [
    { title: "New Infrastructure", description: "Design infrastructure foundations for a new product or platform." },
    { title: "Infrastructure Modernization", description: "Improve existing environments, deployments, observability, security, or architecture." },
    { title: "Engineering & Infrastructure Partnership", description: "Connect application engineering with infrastructure and operational capabilities over time." },
  ] satisfies TextBlock[],
  scenarios: [
    "Web application infrastructure",
    "SaaS platforms",
    "API platforms",
    "Mobile backends",
    "Content platforms",
    "Commerce platforms",
    "Business systems",
    "Data platforms",
    "AI-enabled applications",
    "Internal enterprise systems",
    "Media platforms",
    "High-growth digital products",
    "Multi-environment application systems",
  ],
  relatedCapabilities: [
    {
      href: "/capabilities/software-engineering",
      title: "Software Engineering",
      description:
        "Application architecture, APIs, quality, performance, and deployment practices shape the infrastructure underneath.",
    },
    {
      href: "/capabilities/product-development",
      title: "Product Development",
      description:
        "Product goals help define the infrastructure needed for release, operation, growth, and long-term evolution.",
    },
    {
      href: "/capabilities/mobile-platforms",
      title: "Mobile Platforms",
      description:
        "Mobile apps depend on reliable APIs, data systems, storage, monitoring, and scalable backend infrastructure.",
    },
    {
      href: "/capabilities/artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "AI-enabled systems can introduce new compute, data, security, monitoring, and cost-awareness needs.",
    },
  ] satisfies RelatedCapability[],
  faqs: [
    {
      question: "What does cloud and infrastructure engineering include?",
      answer:
        "It can include architecture, environments, deployment, automation, observability, security-aware infrastructure, scalability, reliability, backup and recovery planning, performance, cost awareness, and modernization.",
    },
    {
      question: "Do you only work with cloud platforms?",
      answer:
        "No. Infrastructure decisions depend on requirements and may involve cloud platforms, dedicated environments, hybrid approaches, or other architectures where appropriate.",
    },
    {
      question: "Do you always recommend containers?",
      answer:
        "No. Containerization should solve a real consistency, deployment, packaging, or operational need.",
    },
    {
      question: "Do you always recommend microservices?",
      answer:
        "No. Architecture should match system complexity, workload, team context, and operational requirements.",
    },
    {
      question: "Can you improve existing infrastructure?",
      answer:
        "Yes. Modernization can include automation, deployment improvements, observability, security-aware configuration, environment restructuring, performance work, and architecture alignment.",
    },
    {
      question: "Can you build CI/CD pipelines?",
      answer:
        "Yes. CI/CD work can include automated build, test, validation, deployment, environment configuration, release workflows, rollback thinking, and deployment visibility.",
    },
    {
      question: "How do you approach scalability?",
      answer:
        "Scalability depends on workload patterns, application architecture, data access, infrastructure capacity, and actual system behavior.",
    },
    {
      question: "How do you approach infrastructure security?",
      answer:
        "Infrastructure security includes access control, least-privilege thinking, secrets, network boundaries, secure configuration, monitoring, update awareness, and application-specific security requirements.",
    },
    {
      question: "Can you help with infrastructure costs?",
      answer:
        "Yes. Cost-aware architecture considers resource utilization, environment management, scaling, storage lifecycle, architecture choices, and visibility into infrastructure usage.",
    },
    {
      question: "Does cloud infrastructure include monitoring?",
      answer:
        "Yes. Monitoring and observability can include logs, metrics, traces, dashboards, and alerts where appropriate.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Is your infrastructure ready for what your software needs next?",
    summary:
      "Whether you are building a new platform, modernizing an existing system, or preparing for the next stage of growth, BIMAL GLOBAL can help connect software engineering with thoughtful infrastructure.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
