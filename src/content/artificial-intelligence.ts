export type TextBlock = {
  title: string;
  description: string;
};

export type Cta = {
  href: string;
  label: string;
};

export type FeatureSection = {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  flow?: string[];
  imagePath?: string;
  imageAlt?: string;
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

export const artificialIntelligencePage = {
  hero: {
    eyebrow: "ARTIFICIAL INTELLIGENCE",
    title: "AI designed to become part of the product.",
    summary:
      "Build practical AI capabilities that connect software, data, workflows, and intelligent systems into products designed for real-world use.",
    imagePath: "/images/capabilities/artificial-intelligence/hero.jpg",
    imageAlt:
      "Technical product workspace visual representing artificial intelligence connected to software and data systems",
    primaryCta: { href: "/contact", label: "Discuss an AI Product" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  overview: {
    title: "Artificial intelligence becomes valuable when it solves a real problem.",
    paragraphs: [
      "AI can become part of digital products, business software, mobile applications, search experiences, content systems, customer workflows, internal tools, automation, and data processing.",
      "BIMAL GLOBAL approaches AI as a practical product capability: connected to user needs, product context, software architecture, data quality, infrastructure, and long-term operation.",
    ],
    flow: ["User", "Product Experience", "AI Capability", "Data + Context", "Software Systems"],
    statement:
      "The goal is not to add AI everywhere. The goal is to use intelligence where it creates meaningful value.",
  },
  capabilities: [
    {
      title: "AI-Powered Product Features",
      description:
        "Integrate intelligent capabilities directly into web, mobile, and software products.",
    },
    {
      title: "AI Assistants",
      description:
        "Build conversational or task-oriented experiences connected to product workflows and information.",
    },
    {
      title: "Intelligent Search",
      description:
        "Help users discover information using more context-aware search experiences.",
    },
    {
      title: "Recommendations",
      description:
        "Support more relevant content, products, actions, or experiences where appropriate.",
    },
    {
      title: "Workflow Automation",
      description:
        "Use AI to assist repetitive or information-heavy workflows.",
    },
    {
      title: "Content Processing",
      description:
        "Process, classify, summarize, extract, or transform information.",
    },
    {
      title: "Document Intelligence",
      description:
        "Create systems that help understand and process structured or unstructured documents.",
    },
    {
      title: "AI-Enabled Internal Tools",
      description:
        "Bring intelligent capabilities into operational and business software.",
    },
  ] satisfies TextBlock[],
  productIntegration: {
    eyebrow: "AI Inside The Product",
    title: "AI works best when it fits the product experience.",
    body:
      "AI capabilities should support the user journey rather than interrupt it. Useful AI products consider user experience, product context, data context, permissions, responses, actions, feedback, human control, error handling, and system boundaries.",
    items: [
      "User experience",
      "Product context",
      "Data context",
      "Permissions",
      "Responses",
      "Actions",
      "Feedback",
      "Human control",
      "Error handling",
      "System boundaries",
    ],
    flow: ["User Action", "Product Context", "AI Processing", "Response or Action", "Feedback"],
    imagePath: "/images/capabilities/artificial-intelligence/product-integration.jpg",
    imageAlt:
      "Product interface and system flow visual showing AI integrated into a software experience",
  } satisfies FeatureSection,
  generativeAI: {
    eyebrow: "Generative AI",
    title: "Generative capabilities for useful product experiences",
    body:
      "Generative AI can support text generation, summarization, content assistance, question answering, information extraction, classification, transformation, structured output, and workflow assistance. Product requirements should define validation, review, permissions, user expectations, and error handling because generated output can be imperfect.",
    items: [
      "Text generation",
      "Summarization",
      "Content assistance",
      "Question answering",
      "Information extraction",
      "Classification",
      "Transformation",
      "Structured output",
      "Workflow assistance",
    ],
  } satisfies FeatureSection,
  assistant: {
    eyebrow: "AI Assistants",
    title: "Assistants connected to real workflows",
    body:
      "An assistant can go beyond a simple chat interface when it is connected to product context, information, and approved workflows. It may answer questions, retrieve information, generate drafts, summarize details, guide users, or trigger product actions where permissions and human control make sense.",
    items: [
      "Questions",
      "Information retrieval",
      "Workflow assistance",
      "Draft generation",
      "Summaries",
      "Guided experiences",
      "Approved actions",
      "Structured systems",
    ],
    flow: ["Question", "Context", "AI Processing", "Response", "Optional Product Action"],
  } satisfies FeatureSection,
  search: {
    eyebrow: "Search & Discovery",
    title: "Help users find what matters.",
    body:
      "AI-enhanced search and discovery can improve relevance, query understanding, content discovery, filtering, ranking, recommendations, and information navigation. Search quality depends on data quality, content structure, product requirements, user behavior, and evaluation.",
    items: [
      "Search relevance",
      "Context-aware retrieval",
      "Content discovery",
      "Recommendations",
      "Query understanding",
      "Filtering",
      "Ranking",
      "Information navigation",
    ],
  } satisfies FeatureSection,
  workflowAutomation: {
    eyebrow: "AI Workflow Automation",
    title: "Reduce repetitive information work.",
    body:
      "AI can assist content classification, information extraction, document processing, summarization, data enrichment, internal operations, and customer support workflows. The right automation model should account for risk, human review, data sensitivity, and business impact.",
    items: [
      "Content classification",
      "Information extraction",
      "Document processing",
      "Summarization",
      "Data enrichment",
      "Workflow assistance",
      "Internal operations",
      "Customer support workflows",
    ],
    flow: ["Input", "Understand", "Process", "Validate", "Action"],
    imagePath: "/images/capabilities/artificial-intelligence/workflows.jpg",
    imageAlt:
      "Workflow visual showing information moving through understanding, processing, validation, and action",
  } satisfies FeatureSection,
  dataAI: {
    eyebrow: "Data + AI",
    title: "AI quality depends on the information around it.",
    body:
      "AI capabilities rely on useful context. Structured data, unstructured data, product context, user context, content, knowledge sources, access permissions, data quality, and data lifecycle planning all influence how the system behaves.",
    items: [
      "Structured data",
      "Unstructured data",
      "Product context",
      "User context",
      "Content",
      "Knowledge sources",
      "Data quality",
      "Access permissions",
      "Data lifecycle",
    ],
    flow: ["Data Sources", "Processing", "Context", "AI Capability", "Product Experience"],
    imagePath: "/images/capabilities/artificial-intelligence/data-ai.jpg",
    imageAlt:
      "Data and product context visual for artificial intelligence capability design",
  } satisfies FeatureSection,
  architecture: {
    eyebrow: "AI Architecture",
    title: "AI systems are still software systems.",
    body:
      "Architecture should depend on product requirements, data sensitivity, response requirements, cost considerations, reliability, and scale. Supporting layers such as authentication, permissions, logging, monitoring, evaluation, and security are part of the product system, not extras.",
    items: [
      "Authentication",
      "Permissions",
      "Logging",
      "Monitoring",
      "Evaluation",
      "Security",
      "Cost awareness",
      "Reliability",
      "Scale",
    ],
    flow: [
      "Product Experience",
      "Application Layer",
      "AI Orchestration",
      "Models / AI Services",
      "Data & Context",
      "Infrastructure",
    ],
    imagePath: "/images/capabilities/artificial-intelligence/architecture.jpg",
    imageAlt:
      "Technical architecture visual showing software layers around artificial intelligence systems",
  } satisfies FeatureSection,
  connections: [
    {
      title: "AI features need strong software around them.",
      description:
        "AI capabilities may need APIs, backend systems, authentication, data, integrations, user interfaces, permissions, analytics, and infrastructure to become production product experiences.",
      href: "/capabilities/software-engineering",
      cta: "Explore Software Engineering",
      flow: ["AI Capability", "Software Engineering", "Production Product Experience"],
    },
    {
      title: "Bring intelligent experiences to mobile products.",
      description:
        "Mobile applications can include assistants, search, content support, personalization, device-aware experiences, and product workflows where AI adds practical value.",
      href: "/capabilities/mobile-platforms",
      cta: "Explore Mobile Platforms",
      flow: ["Mobile App", "AI Capability", "Product Workflow"],
    },
    {
      title: "AI also requires thoughtful infrastructure.",
      description:
        "AI-enabled products can depend on APIs, data processing, compute, storage, monitoring, deployment, scaling, and security decisions.",
      href: "/capabilities/cloud-infrastructure",
      cta: "Explore Cloud & Infrastructure",
      flow: ["APIs", "Data Processing", "Compute", "Monitoring", "Security"],
    },
  ],
  evaluation: {
    eyebrow: "AI Evaluation",
    title: "Measure whether the AI capability is actually useful.",
    body:
      "Evaluation should be tied to the product, not universal accuracy claims. Teams need to review output quality, relevance, accuracy considerations, consistency, user feedback, failure cases, edge cases, and success criteria that match the real workflow.",
    items: [
      "Output quality",
      "Relevance",
      "Accuracy considerations",
      "Consistency",
      "User feedback",
      "Failure cases",
      "Edge cases",
      "Product-specific criteria",
    ],
    flow: ["Build", "Evaluate", "Observe", "Improve"],
    imagePath: "/images/capabilities/artificial-intelligence/evaluation.jpg",
    imageAlt:
      "Evaluation visual showing product feedback and quality review around AI output",
  } satisfies FeatureSection,
  monitoring: {
    eyebrow: "Monitoring & Evolution",
    title: "AI products need to evolve after launch.",
    body:
      "AI capabilities may require ongoing attention to user feedback, product changes, data changes, model or service changes, output quality, cost, reliability, performance, and safety considerations.",
    items: [
      "User feedback",
      "Product changes",
      "Data changes",
      "Model or service changes",
      "Output quality",
      "Cost",
      "Reliability",
      "Performance",
      "Safety considerations",
    ],
    flow: ["Launch", "Observe", "Evaluate", "Improve", "Evolve"],
  } satisfies FeatureSection,
  responsibleAI: {
    title: "Intelligence should be implemented with responsibility.",
    statement:
      "The appropriate level of automation and human review depends on the product, users, data, and potential impact of errors.",
    items: [
      "Human oversight where appropriate",
      "Data sensitivity",
      "Permissions",
      "Transparency",
      "Error handling",
      "Bias considerations",
      "Validation",
      "User expectations",
      "Security",
      "System boundaries",
    ],
  },
  lifecycle: [
    { number: "01", title: "Identify", description: "Define the real user or business problem." },
    { number: "02", title: "Explore", description: "Understand data, workflows, constraints, and possible approaches." },
    { number: "03", title: "Design", description: "Design the product experience and AI interaction." },
    { number: "04", title: "Build", description: "Integrate AI capabilities into software systems." },
    { number: "05", title: "Evaluate", description: "Test outputs against relevant product criteria." },
    { number: "06", title: "Launch", description: "Deploy the capability into the product environment." },
    { number: "07", title: "Observe", description: "Monitor usage, feedback, quality, and system behavior." },
    { number: "08", title: "Evolve", description: "Improve the capability as products, data, and requirements change." },
  ] satisfies LifecycleStage[],
  principles: [
    { title: "Solve a real problem", description: "AI should create meaningful value." },
    { title: "Start with product context", description: "The user experience determines how intelligence should behave." },
    { title: "Use the right amount of automation", description: "Not every workflow should operate without human involvement." },
    { title: "Connect AI to useful information", description: "Context and data matter." },
    { title: "Design for uncertainty", description: "AI systems can produce imperfect outputs." },
    { title: "Evaluate continuously", description: "Product-specific evaluation matters." },
    { title: "Protect sensitive information", description: "Data and permissions require careful design." },
    { title: "Build for evolution", description: "AI capabilities and underlying technologies change." },
  ] satisfies TextBlock[],
  technologyDomains: [
    "Generative AI",
    "AI Assistants",
    "Intelligent Search",
    "Recommendations",
    "Automation",
    "Document Intelligence",
    "Content Processing",
    "AI APIs",
    "Data Processing",
    "AI Evaluation",
    "AI Monitoring",
    "AI Infrastructure",
    "Product Integration",
  ],
  situations: [
    "You want to add intelligent capabilities to an existing product.",
    "You are building a new AI-enabled platform.",
    "You need an AI assistant connected to product workflows.",
    "Your application needs better search or information discovery.",
    "You want to automate information-heavy processes.",
    "You need AI connected to existing software and APIs.",
    "You need help evaluating an AI product idea.",
    "You want to turn an AI concept into a production-ready software experience.",
  ],
  engagementModels: [
    {
      title: "AI Product Exploration",
      description:
        "Explore whether and how AI can solve a product or workflow problem.",
    },
    {
      title: "AI Feature Development",
      description:
        "Design and integrate specific AI capabilities into an existing product.",
    },
    {
      title: "AI-Enabled Platform Development",
      description:
        "Build a larger product where AI is one important capability within the overall software system.",
    },
  ] satisfies TextBlock[],
  useCases: [
    "Customer-facing assistants",
    "Internal knowledge tools",
    "Intelligent search",
    "Content platforms",
    "Document processing",
    "Workflow automation",
    "Product recommendations",
    "Content assistance",
    "Business software",
    "Mobile product experiences",
    "Data enrichment",
    "Information processing",
  ],
  relatedCapabilities: [
    {
      href: "/capabilities/software-engineering",
      title: "Software Engineering",
      description:
        "AI becomes useful when it is supported by strong application architecture, APIs, interfaces, permissions, and quality practices.",
    },
    {
      href: "/capabilities/product-development",
      title: "Product Development",
      description:
        "Product thinking defines where intelligence should appear, what user need it serves, and how success should be evaluated.",
    },
    {
      href: "/capabilities/mobile-platforms",
      title: "Mobile Platforms",
      description:
        "Mobile experiences can bring AI into search, assistants, content, personalization, and practical user workflows.",
    },
    {
      href: "/capabilities/cloud-infrastructure",
      title: "Cloud & Infrastructure",
      description:
        "AI capabilities often depend on data processing, APIs, monitoring, security, deployment, scaling, and cost-aware infrastructure.",
    },
  ] satisfies RelatedCapability[],
  faqs: [
    {
      question: "What AI capabilities can BIMAL GLOBAL help build?",
      answer:
        "BIMAL GLOBAL can help design and integrate product-focused AI capabilities such as assistants, intelligent search, automation, recommendations, document processing, content processing, AI APIs, and workflow support.",
    },
    {
      question: "Can AI be added to an existing software product?",
      answer:
        "Yes. AI can often be integrated with existing applications, APIs, workflows, data systems, permissions, and user experiences when the architecture and product requirements are clear.",
    },
    {
      question: "Can you build AI assistants?",
      answer:
        "Yes. Assistants can be designed around product context, workflow needs, information access, permissions, and human control rather than only a standalone chat interface.",
    },
    {
      question: "Can AI automate business workflows?",
      answer:
        "AI can assist workflow automation, but the appropriate level of automation and human review depends on risk, data sensitivity, business impact, and workflow requirements.",
    },
    {
      question: "How do you evaluate AI output?",
      answer:
        "Evaluation should use product-specific criteria such as relevance, quality, consistency, failure cases, user feedback, edge cases, and continuous improvement signals.",
    },
    {
      question: "Can AI work with mobile applications?",
      answer:
        "Yes. AI can be integrated into Android, iOS, and cross-platform mobile experiences where it supports assistants, search, content, personalization, or product workflows.",
    },
    {
      question: "Does AI require cloud infrastructure?",
      answer:
        "Infrastructure requirements depend on the architecture, data, compute needs, integrations, monitoring, security, and expected scale of the product.",
    },
    {
      question: "How do you handle AI errors?",
      answer:
        "AI products should include validation, error handling, clear user expectations, fallback experiences, monitoring, and human review where appropriate.",
    },
    {
      question: "Can AI work with existing business data?",
      answer:
        "Potentially, depending on data access, permissions, architecture, security requirements, content quality, and the specific product or workflow.",
    },
    {
      question: "Do you build complete AI products?",
      answer:
        "Yes. BIMAL GLOBAL can approach AI as part of a broader software product that includes product experience, data, APIs, infrastructure, evaluation, and long-term evolution.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Ready to turn an AI idea into a real product capability?",
    summary:
      "Whether you are exploring an AI opportunity or integrating intelligence into an existing product, BIMAL GLOBAL can help connect product thinking, software engineering, data, infrastructure, and AI capabilities.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
