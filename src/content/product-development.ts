export type ProductTextBlock = {
  description: string;
  title: string;
};

export type ProductSection = {
  imagePath?: string;
  items: string[];
  paragraphs: string[];
  title: string;
};

export type ProductLifecycleStage = {
  description: string;
  number: string;
  title: string;
};

export type ProductJourney = {
  label: string;
  steps: string[];
  title: string;
};

export type ProductRelatedCapability = {
  description: string;
  href: string;
  title: string;
};

export type ProductFaqItem = {
  answer: string;
  question: string;
};

export const productDevelopmentPage = {
  hero: {
    eyebrow: "Product Development",
    title: "Turning ideas into products people can use, understand, and grow with.",
    summary:
      "From early product thinking to launch and continuous evolution, BIMAL GLOBAL brings product strategy, design, engineering, and technology together to build digital products around real needs.",
    imagePath: "/images/capabilities/product-development/hero.jpg",
    imageAlt: "Abstract product development, digital interface, and technology collaboration visual",
    primaryCta: { href: "/contact", label: "Discuss a Product Idea" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  overview: {
    title: "Product development is more than building features.",
    paragraphs: [
      "Successful digital products require alignment between user needs, business objectives, product strategy, experience design, technology, data, engineering, operations, and continuous feedback.",
      "A product should evolve based on real-world learning rather than assumptions. The first version matters, but the ability to learn, adapt, and improve matters just as much.",
    ],
    layers: [
      "Problem",
      "Product Direction",
      "Experience",
      "Technology",
      "Product",
      "Feedback",
      "Evolution",
    ],
  },
  productCategories: [
    { title: "Digital Products", description: "Customer-facing applications and digital experiences." },
    { title: "SaaS Platforms", description: "Software products designed around recurring workflows, users, roles, and capabilities." },
    { title: "Marketplaces", description: "Platforms connecting different participants, transactions, services, or inventory." },
    { title: "Business Platforms", description: "Operational systems that bring workflows, teams, data, and processes together." },
    { title: "Consumer Applications", description: "Digital experiences designed around frequent user interactions." },
    { title: "Internal Products", description: "Technology products built to improve organizational workflows and operational efficiency." },
    { title: "Content & Media Platforms", description: "Platforms for publishing, managing, discovering, and consuming digital content." },
    { title: "Industry-Specific Platforms", description: "Software products designed around particular operational or domain requirements." },
  ] satisfies ProductTextBlock[],
  sections: [
    {
      title: "Start with the problem, not the feature list.",
      paragraphs: [
        "Product discovery clarifies the problem before the team commits to a solution. It can include understanding users, mapping workflows, defining goals, identifying constraints, reviewing current processes, and understanding technical context.",
        "A clear problem creates a stronger foundation for product decisions.",
      ],
      items: ["Users", "Problems", "Workflows", "Opportunities", "Product Direction"],
    },
    {
      title: "Define what the product needs to become.",
      paragraphs: [
        "Product strategy turns product ambition into a clearer direction. It considers product vision, user groups, core value proposition, product scope, feature priorities, business rules, MVP boundaries, future roadmap, and success indicators.",
      ],
      items: ["Why: Problem and opportunity", "Who: Users and stakeholders", "What: Product capabilities", "How: Technology and execution", "What next: Evolution and roadmap"],
    },
    {
      title: "Experiences designed around real workflows.",
      imagePath: "/images/capabilities/product-development/ux.jpg",
      paragraphs: [
        "UX is more than visual design. It shapes user journeys, information architecture, navigation, task flows, interaction patterns, forms, search, onboarding, dashboards, notifications, accessibility considerations, and responsive experiences.",
      ],
      items: ["Discover", "Navigate", "Act", "Confirm", "Continue"],
    },
    {
      title: "From structure to interface.",
      paragraphs: [
        "Product design translates structure into usable interface behavior. It considers wireframes, visual hierarchy, components, responsive layouts, interaction states, empty states, error states, loading states, and accessibility-aware design.",
        "Design should account for actual product behavior, not only static screens.",
      ],
      items: ["Wireframes", "Interface structure", "Design systems", "Components", "States", "Responsive layouts"],
    },
    {
      title: "Make ideas tangible before building everything.",
      imagePath: "/images/capabilities/product-development/prototyping.jpg",
      paragraphs: [
        "Prototyping helps teams explore early concepts, user flows, feature validation, stakeholder alignment, technical feasibility, and iteration before full implementation.",
        "Useful prototypes reduce ambiguity before deeper engineering investment.",
      ],
      items: ["Concept", "Prototype", "Feedback", "Refine", "Build"],
    },
    {
      title: "Build the smallest useful version - not the smallest possible product.",
      paragraphs: [
        "An MVP should contain enough functionality to solve a meaningful user problem and generate useful learning. It is not a stripped-down application without a clear purpose.",
        "The first useful version may need core workflows, essential features, technical foundation, authentication, user roles, data model, APIs, admin capabilities, analytics foundations, deployment, and feedback mechanisms.",
      ],
      items: ["Core workflows", "Essential features", "Data model", "APIs", "Admin capabilities", "Feedback mechanisms"],
    },
    {
      title: "Where product thinking becomes working software.",
      imagePath: "/images/capabilities/product-development/engineering.jpg",
      paragraphs: [
        "Product engineering connects product decisions to frontend development, backend development, API engineering, database design, integrations, authentication, business logic, background processing, notifications, search, file and media handling, testing, and deployment.",
      ],
      items: ["Frontend", "Backend", "APIs", "Database", "Integrations", "Deployment"],
    },
    {
      title: "Build foundations that can evolve with the product.",
      imagePath: "/images/capabilities/product-development/architecture.jpg",
      paragraphs: [
        "Product architecture considers domain modeling, application structure, data architecture, API boundaries, modular systems, authentication, authorization, integration boundaries, background processing, observability, and deployment architecture.",
        "Architecture should match product maturity, workload, team context, operational requirements, and expected change.",
      ],
      items: ["Experience Layer", "Application Layer", "Business Logic", "Data & Services", "Infrastructure"],
    },
    {
      title: "Build. Learn. Improve.",
      paragraphs: [
        "Product analytics and feedback help teams understand user behavior, conversion points, feature usage, search behavior, workflow completion, errors, feedback collection, and operational insights.",
      ],
      items: ["Launch", "Observe", "Learn", "Prioritize", "Improve"],
    },
    {
      title: "A product is never really finished.",
      imagePath: "/images/capabilities/product-development/evolution.jpg",
      paragraphs: [
        "Product evolution can include new features, UX improvements, performance improvements, technical modernization, new integrations, new user roles, market changes, operational requirements, and platform expansion.",
      ],
      items: ["Stabilize: Make the foundation reliable", "Improve: Enhance experience and capabilities", "Expand: Introduce new workflows, integrations, or product capabilities when appropriate"],
    },
  ] satisfies ProductSection[],
  lifecycle: [
    { number: "01", title: "Discover", description: "Understand users, problems, context, and objectives." },
    { number: "02", title: "Define", description: "Establish product direction, priorities, scope, and constraints." },
    { number: "03", title: "Design", description: "Create workflows, interfaces, and product experiences." },
    { number: "04", title: "Prototype", description: "Make important ideas tangible and testable." },
    { number: "05", title: "Engineer", description: "Build the product and its technical foundations." },
    { number: "06", title: "Validate", description: "Test workflows, assumptions, usability, and technical behavior." },
    { number: "07", title: "Launch", description: "Prepare the product for real-world use." },
    { number: "08", title: "Evolve", description: "Use feedback and changing requirements to guide future development." },
  ] satisfies ProductLifecycleStage[],
  ecosystem: {
    title: "One product. Multiple disciplines.",
    summary:
      "Product development becomes stronger when strategy, UX, software engineering, mobile, cloud, AI, and data are coordinated rather than treated as isolated activities.",
    items: [
      { title: "Software Engineering", href: "/capabilities/software-engineering" },
      { title: "Mobile Platforms", href: "/capabilities/mobile-platforms" },
      { title: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" },
      { title: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
    ],
  },
  technologyDomains: [
    "Web",
    "Mobile",
    "Backend",
    "APIs",
    "Databases",
    "Cloud",
    "Data",
    "AI",
    "Search",
    "Payments",
    "Communication",
    "Identity",
    "Integrations",
    "Automation",
  ],
  principles: [
    { title: "Start with value", description: "Build around meaningful user and business outcomes." },
    { title: "Keep the first version focused", description: "Avoid unnecessary complexity before the core product is understood." },
    { title: "Design for real behavior", description: "Account for edge cases, empty states, errors, permissions, and real workflows." },
    { title: "Engineer for evolution", description: "Build foundations that can support future change." },
    { title: "Learn from reality", description: "Use product feedback and system behavior to guide improvements." },
    { title: "Connect product and technology", description: "Product decisions and engineering decisions should inform one another." },
  ] satisfies ProductTextBlock[],
  situations: [
    "You have a product idea and need to define the first version.",
    "You need to turn business requirements into a digital product.",
    "Your existing product needs restructuring.",
    "Your product needs new capabilities.",
    "Your UX and technology need stronger alignment.",
    "You need to move from prototype to production.",
    "You need engineering support for continued product evolution.",
    "You want to build a new digital platform.",
  ],
  engagementModels: [
    { title: "New Product", description: "For turning a validated idea or opportunity into a working digital product." },
    { title: "Product Evolution", description: "For improving an existing product through new capabilities, UX improvements, modernization, or technical evolution." },
    { title: "Product Engineering Partnership", description: "For ongoing engineering and product development support." },
  ] satisfies ProductTextBlock[],
  journeys: [
    { label: "Illustrative product journey - not a client case study", title: "From Idea", steps: ["Idea", "Discovery", "Product Definition", "Prototype", "MVP", "Launch", "Evolution"] },
    { label: "Illustrative product journey - not a client case study", title: "From Existing System", steps: ["Assessment", "Prioritization", "UX / Architecture Improvements", "Engineering", "Release", "Continuous Improvement"] },
    { label: "Illustrative product journey - not a client case study", title: "From Growing Product", steps: ["Existing Product", "New Capabilities", "Platform Improvements", "Performance", "Infrastructure", "Product Expansion"] },
  ] satisfies ProductJourney[],
  productEngineeringConnection: {
    title: "Great product ideas need strong engineering underneath them.",
    summary:
      "Product development and software engineering work together: requirements become technical requirements, workflows become application flows, rules become business logic, data becomes architecture, integrations become API architecture, and product growth becomes scalability requirements.",
    href: "/capabilities/software-engineering",
    label: "Explore Software Engineering",
  },
  relatedCapabilities: [
    { href: "/capabilities/software-engineering", title: "Software Engineering", description: "Engineering turns product direction into reliable applications, platforms, APIs, and systems." },
    { href: "/capabilities/mobile-platforms", title: "Mobile Platforms", description: "Mobile products need thoughtful UX, reliable APIs, and product behavior designed for frequent use." },
    { href: "/capabilities/cloud-infrastructure", title: "Cloud & Infrastructure", description: "Infrastructure supports how products are deployed, operated, observed, and scaled." },
    { href: "/capabilities/artificial-intelligence", title: "Artificial Intelligence", description: "AI can be considered where it creates meaningful product value with appropriate engineering foundations." },
  ] satisfies ProductRelatedCapability[],
  faqs: [
    { question: "What does product development include?", answer: "Product development can cover discovery, strategy, UX, design, prototyping, engineering, launch, analytics, and continuous evolution." },
    { question: "Can BIMAL GLOBAL help with an idea that is still early?", answer: "Yes. Early-stage product work can focus on problem definition, product scope, workflows, feasibility, and prototype direction." },
    { question: "Can you work with an existing product?", answer: "Yes. Product development can include product evolution, modernization, UX improvements, technical improvements, integrations, and new capabilities." },
    { question: "What is an MVP?", answer: "An MVP is a focused version of a product designed to solve a meaningful problem and generate learning, not simply a stripped-down application." },
    { question: "Do you handle both design and engineering?", answer: "BIMAL GLOBAL's capability model connects product development with design, software engineering, and technology execution." },
    { question: "Can a product start as a modular monolith?", answer: "Yes. Architecture should match actual requirements and evolve when necessary." },
    { question: "Can product development include mobile applications?", answer: "Yes. Product development can include mobile applications and can connect naturally with the Mobile Platforms capability." },
    { question: "Can AI be part of a product?", answer: "Yes. AI can be considered where it provides meaningful product value, with appropriate engineering and operational considerations." },
    { question: "How do you decide what to build first?", answer: "Prioritization should consider user value, business objectives, dependencies, feasibility, risk, and learning potential." },
  ] satisfies ProductFaqItem[],
  finalCta: {
    title: "Have a product idea worth building?",
    summary:
      "Bring the problem, opportunity, or product direction. We can explore what it could become and what it would take to engineer it thoughtfully.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
