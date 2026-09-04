export type PresenceCountry = {
  code: "IN" | "NP";
  country: string;
  description: string;
  heading: string;
  imagePath: string;
  status: "Operational Presence";
};

export type PresenceConcept = {
  description: string;
  title: string;
};

export type PresenceMetric = {
  label: string;
  value: string;
};

export type PresenceCapability = {
  href: string;
  title: string;
};

export const presencePage = {
  hero: {
    eyebrow: "Our Presence",
    heading: "Built across borders.",
    highlight: "Thinking beyond them.",
    summary:
      "BIMAL GLOBAL brings together technology, product thinking, and engineering across India and Nepal while building with a perspective that extends beyond geography.",
    imagePath: "/images/company/presence/presence-hero.jpg",
    imageAlt: "Abstract connected geography visual for India and Nepal",
    primaryCta: {
      href: "/contact",
      label: "Start a Conversation",
    },
    secondaryCta: {
      href: "/company",
      label: "Explore Our Company",
    },
  },
  introduction: {
    eyebrow: "Where We Work",
    heading: "Two operational markets.",
    highlight: "One connected perspective.",
    paragraphs: [
      "BIMAL GLOBAL works across India and Nepal with a shared approach to technology, product development, and engineering execution.",
      "The company is shaped by cross-border collaboration, regional understanding, and the belief that strong technology capability can connect teams and ideas beyond distance.",
      "This presence is not about claiming offices everywhere. It is about building with enough clarity, discipline, and flexibility to collaborate across markets.",
    ],
  },
  countries: [
    {
      country: "India",
      code: "IN",
      status: "Operational Presence",
      heading: "Building from one of the world's most dynamic technology ecosystems.",
      description:
        "India represents a deep environment for software engineering, product development, digital growth, and technology capability. BIMAL GLOBAL's presence here supports work shaped by ambition, technical skill, and practical execution.",
      imagePath: "/images/company/presence/india.jpg",
    },
    {
      country: "Nepal",
      code: "NP",
      status: "Operational Presence",
      heading: "Connected to ideas, technology, and what comes next.",
      description:
        "Nepal is part of BIMAL GLOBAL's company journey and regional collaboration. The presence supports product thinking, emerging technology opportunity, and a connected approach to building digital systems.",
      imagePath: "/images/company/presence/nepal.jpg",
    },
  ] satisfies PresenceCountry[],
  connection: {
    heading: "Different places.",
    highlight: "Connected work.",
    summary:
      "Technology makes collaboration less dependent on distance. BIMAL GLOBAL brings together perspectives, capabilities, and work across India and Nepal while creating products and systems that can move beyond local boundaries.",
    disciplines: ["Technology", "Product", "Engineering"],
  },
  globalOutlook: {
    eyebrow: "Global Outlook",
    heading: "Geography shapes context.",
    highlight: "Technology creates connection.",
    paragraphs: [
      "A global outlook does not require claiming offices in every market. It means designing collaboration, products, and technology systems with broader use, adaptation, and scale in mind.",
      "BIMAL GLOBAL's perspective is shaped by digital collaboration, remote technology delivery, cross-border teams, and products that can evolve for audiences beyond one location.",
    ],
  },
  marketPerspective: {
    heading: "Local understanding.",
    highlight: "Broader perspective.",
    items: [
      {
        title: "Understanding Context",
        description:
          "Technology works differently when business environments, users, and markets differ.",
      },
      {
        title: "Building for Scale",
        description:
          "Products can begin in one market while being designed to evolve into others.",
      },
      {
        title: "Connected Collaboration",
        description:
          "Modern technology teams can collaborate across locations without treating geography as a technical limitation.",
      },
    ],
  },
  visualization: {
    heading: "Operational presence.",
    highlight: "Global outlook.",
    summary:
      "India and Nepal are represented as operational presence. The broader field represents collaboration, not physical office locations.",
  },
  collaboration: {
    eyebrow: "Connected By Technology",
    heading: "Work isn't limited",
    highlight: "to one room.",
    imagePath: "/images/company/presence/collaboration.jpg",
    paragraphs: [
      "Modern technology work depends on shared context, product collaboration, distributed engineering, cloud-based workflows, and connected systems.",
      "BIMAL GLOBAL approaches collaboration as a design problem as much as an operational one: keep communication clear, keep systems visible, and keep teams connected to the work.",
    ],
  },
  future: {
    heading: "The map can grow.",
    paragraphs: [
      "BIMAL GLOBAL is building with the ambition to work across markets, industries, and technology challenges.",
      "Where the company works in the future will evolve with the opportunities, partnerships, products, and teams that help shape what comes next.",
    ],
  },
  metrics: [
    { value: "2", label: "Operational Markets" },
    { value: "India & Nepal", label: "Connected Presence" },
    { value: "3", label: "Founders" },
    { value: "Global", label: "Technology Outlook" },
  ] satisfies PresenceMetric[],
  capabilities: {
    heading: "One company.",
    highlight: "Multiple capabilities.",
    summary:
      "The company's capabilities are designed to connect across teams, products, and markets.",
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
    ] satisfies PresenceCapability[],
  },
  cta: {
    eyebrow: "Working Together",
    heading: "Technology makes",
    highlight: "distance less important.",
    summary:
      "Whether you are building locally, expanding across markets, or exploring a technology challenge with a broader perspective, the conversation can start from anywhere.",
    primaryCta: {
      href: "/contact",
      label: "Start a Conversation",
    },
    secondaryCta: {
      href: "/capabilities",
      label: "Explore Our Capabilities",
    },
  },
} as const;
