export type Leader = {
  bio: string;
  featured: boolean;
  focusAreas: string[];
  imageAlt: string;
  imagePath: string;
  linkedin: string | null;
  name: string;
  profileHref?: string;
  role: string;
  socialLinks: Array<{
    href: string;
    label: string;
  }>;
  specialty?: string;
  type: "founder";
};

export type LeadershipPrinciple = {
  description: string;
  number: string;
  title: string;
};

export type LeadershipCapability = {
  href: string;
  title: string;
};

export const leaders: Leader[] = [
  {
    name: "Bimal Vishwakarma",
    role: "Founder & CEO",
    type: "founder",
    specialty: "Company Direction",
    featured: true,
    imagePath: "/images/company/leadership/bimal-vishwakarma.jpg",
    imageAlt: "Portrait of Bimal Vishwakarma",
    bio: "Bimal Vishwakarma is the Founder and CEO of BIMAL GLOBAL, leading the company's direction across technology, products, and long-term growth. His focus is on building digital products, software platforms, and technology systems that can evolve with changing business and market needs.",
    focusAreas: [
      "Technology Strategy",
      "Product Development",
      "Software Engineering",
      "Platform Thinking",
      "Long-Term Growth",
    ],
    linkedin: null,
    socialLinks: [],
  },
  {
    name: "Founder Profile Two",
    role: "Co-Founder",
    type: "founder",
    specialty: "Technology & Engineering",
    featured: false,
    imagePath: "/images/company/leadership/founder-02.jpg",
    imageAlt: "Replaceable portrait placeholder for Founder Profile Two",
    bio: "Focused on engineering systems, technical foundations, and building reliable technology for ambitious products.",
    focusAreas: [
      "Engineering Systems",
      "Technical Foundations",
      "Platform Reliability",
    ],
    linkedin: null,
    socialLinks: [],
  },
  {
    name: "Founder Profile Three",
    role: "Co-Founder",
    type: "founder",
    specialty: "Product & Growth",
    featured: false,
    imagePath: "/images/company/leadership/founder-03.jpg",
    imageAlt: "Replaceable portrait placeholder for Founder Profile Three",
    bio: "Focused on product thinking, business opportunities, and shaping technology into meaningful experiences.",
    focusAreas: [
      "Product Thinking",
      "Business Opportunities",
      "Experience Strategy",
    ],
    linkedin: null,
    socialLinks: [],
  },
];

export const leadershipPage = {
  hero: {
    eyebrow: "Leadership",
    heading: "Building the future",
    highlight: "takes direction.",
    summary:
      "BIMAL GLOBAL is guided by a founding team focused on building ambitious technology products, systems, and platforms with a long-term perspective.",
    imagePath: "/images/company/leadership/leadership-hero.jpg",
    imageAlt: "Abstract leadership and technology direction visual",
  },
  introduction: {
    heading: "Three founders.",
    highlight: "One shared ambition.",
    paragraphs: [
      "Leadership at BIMAL GLOBAL brings together different perspectives around technology, engineering, products, business building, and long-term execution.",
      "The founding team is shaped around a simple belief: ambitious technology needs direction, discipline, curiosity, and the willingness to keep improving as the work evolves.",
    ],
  },
  founderFeature: {
    heading: "Building technology",
    highlight: "with long-term ambition.",
    paragraphs: [
      "Bimal Vishwakarma is the Founder and CEO of BIMAL GLOBAL, leading the company's direction across technology, products, and long-term growth.",
      "His focus is on building digital products, software platforms, and technology systems that can evolve with changing business and market needs.",
      "The work connects technology strategy, product development, software engineering, scalable platforms, and a global ambition for what the company can build next.",
    ],
  },
  team: {
    eyebrow: "Founding Team",
    heading: "Different perspectives.",
    highlight: "Shared direction.",
  },
  principles: {
    eyebrow: "How We Lead",
    heading: "Direction without",
    highlight: "standing still.",
    items: [
      {
        number: "01",
        title: "Think Long-Term",
        description:
          "Technology decisions should consider what comes after launch, including how products change and systems mature.",
      },
      {
        number: "02",
        title: "Stay Close to the Work",
        description:
          "Leadership should remain connected to products, engineering, and the challenges teams are solving.",
      },
      {
        number: "03",
        title: "Build With Curiosity",
        description:
          "New technologies and changing markets require continuous learning, practical judgment, and openness to better approaches.",
      },
      {
        number: "04",
        title: "Create Room for Ambition",
        description:
          "People and ideas should have space to grow beyond the obvious solution and into work that can create lasting value.",
      },
    ],
  },
  buildingCompany: {
    heading: "A company is built",
    highlight: "through what it enables.",
    imagePath: "/images/company/leadership/building-company.jpg",
    paragraphs: [
      "BIMAL GLOBAL aims to create an environment where people can explore ambitious ideas, solve difficult problems, and build meaningful technology.",
      "The company is still writing its story through the products, systems, disciplines, and people it brings together over time.",
    ],
  },
  direction: {
    eyebrow: "Our Direction",
    heading: "Technology changes.",
    highlight: "Direction matters.",
    summary:
      "Leadership connects multiple technology disciplines so software, product, mobile, infrastructure, and artificial intelligence can move with a shared point of view.",
    capabilities: [
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
  forward: {
    heading: "The work ahead",
    highlight: "is still being built.",
    paragraphs: [
      "BIMAL GLOBAL is still writing its story.",
      "The focus is not only on what has been built so far, but on the products, systems, ideas, and technology that can be created next.",
    ],
  },
  cta: {
    eyebrow: "Build With Us",
    heading: "Ambitious ideas",
    highlight: "need ambitious people.",
    summary:
      "Explore the people, capabilities, and thinking behind BIMAL GLOBAL.",
    primaryCta: {
      href: "/careers",
      label: "Explore Careers",
    },
    secondaryCta: {
      href: "/contact",
      label: "Start a Conversation",
    },
  },
} as const;
