export type TextBlock = {
  title: string;
  description: string;
};

export type LinkItem = TextBlock & {
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type LeadershipProfile = {
  label: string;
  name: string;
  role: string;
  note: string;
  verified: boolean;
};

export const companyOverviewPage = {
  hero: {
    eyebrow: "Company",
    title: "Building technology for what comes next.",
    summary:
      "BIMAL GLOBAL is a technology company focused on designing and building software, digital products, mobile platforms, cloud infrastructure, and AI-enabled solutions around real business and product opportunities.",
    imagePath: "/images/company/hero.jpg",
    imageAlt:
      "Abstract company technology system visual for BIMAL GLOBAL",
    primaryCta: { href: "/contact", label: "Work With Us" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  introduction: {
    title: "A technology company built around complex problems.",
    paragraphs: [
      "Modern businesses increasingly require connected technology rather than isolated websites or individual applications. Digital products, software platforms, mobile applications, internal systems, APIs, cloud infrastructure, and AI-enabled workflows often need to work together.",
      "The challenge is not simply writing code. It is understanding what should be built and how different technologies should work together.",
    ],
  },
  technologyView: {
    title: "Technology works best when it works together.",
    summary:
      "Different projects require different combinations of technology. Some need a focused product and web platform. Others need mobile, infrastructure, integrations, or intelligence as part of the same system.",
    imagePath: "/images/company/technology-view.jpg",
    imageAlt:
      "Conceptual technology view showing product, software, mobile, cloud, and AI connections",
    flow: [
      "Business Opportunity",
      "Product Thinking",
      "Software Engineering",
      "Mobile + Cloud + AI",
      "Connected Digital Product",
    ],
  },
  whyWeExist: [
    {
      title: "Build Around Real Needs",
      description:
        "Technology should begin with actual users, workflows, and opportunities.",
    },
    {
      title: "Connect the Bigger Picture",
      description:
        "Products, systems, mobile applications, infrastructure, and intelligence often need to work together.",
    },
    {
      title: "Keep Complexity Intentional",
      description:
        "Not every problem requires a complicated architecture.",
    },
    {
      title: "Design for Evolution",
      description:
        "Technology requirements change as businesses and products grow.",
    },
    {
      title: "Think Beyond the First Release",
      description:
        "A product should have room to evolve after launch.",
    },
  ] satisfies TextBlock[],
  buildCategories: [
    "Digital Products",
    "Software Platforms",
    "Mobile Applications",
    "SaaS Products",
    "Marketplaces",
    "Business Systems",
    "Internal Tools",
    "APIs & Backend Systems",
    "Media & Content Platforms",
    "AI-Enabled Products",
  ],
  approach: [
    {
      number: "01",
      title: "Understand",
      description:
        "Understand the business context, users, workflows, and technology requirements.",
    },
    {
      number: "02",
      title: "Define",
      description: "Define what needs to be built and why.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Shape the product, workflows, and technology direction.",
    },
    {
      number: "04",
      title: "Build",
      description: "Develop the software and connected systems.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Prepare technology for real-world use.",
    },
    {
      number: "06",
      title: "Evolve",
      description:
        "Improve as requirements and opportunities change.",
    },
  ] satisfies ProcessStep[],
  businessTypes: [
    {
      title: "Startups & New Products",
      description:
        "For teams building something new across MVPs, product development, platforms, and scalable foundations.",
    },
    {
      title: "Growing Businesses",
      description:
        "For businesses expanding product capabilities, mobile applications, workflow systems, and integrations.",
    },
    {
      title: "Established Organizations",
      description:
        "For organizations evolving larger technology systems through software modernization, connected systems, infrastructure, and internal platforms.",
    },
  ] satisfies TextBlock[],
  globalView: {
    title: "Built across markets. Thinking beyond borders.",
    imagePath: "/images/company/global-view.jpg",
    imageAlt:
      "Abstract connected markets visual representing India, Nepal, and broader technology ambition",
    paragraphs: [
      "BIMAL GLOBAL serves India and Nepal while maintaining a broader perspective on digital products and technology.",
      "Different markets, users, local business contexts, mobile-first experiences, regional requirements, and international scalability can all influence how technology should be designed.",
      "Good technology can begin with a local understanding and still be designed for a much broader future.",
    ],
  },
  leadership: {
    title: "The people building BIMAL GLOBAL.",
    imagePath: "/images/company/leadership.jpg",
    imageAlt: "Abstract leadership and company direction visual",
    summary:
      "BIMAL GLOBAL has three founders. Public founder details can be expanded as verified leadership content becomes available.",
    profiles: [
      {
        label: "Verified Profile",
        name: "Bimal Vishwakarma",
        role: "CEO",
        note: "Verified leadership information available in the project.",
        verified: true,
      },
      {
        label: "Replaceable Profile",
        name: "Founder profile",
        role: "Founder",
        note: "Content placeholder. Name and biography should be added only when verified.",
        verified: false,
      },
      {
        label: "Replaceable Profile",
        name: "Founder profile",
        role: "Founder",
        note: "Content placeholder. Name and biography should be added only when verified.",
        verified: false,
      },
    ] satisfies LeadershipProfile[],
  },
  longTerm: {
    title: "Building for the next generation of digital products.",
    paragraphs: [
      "BIMAL GLOBAL is building toward more connected digital products, mobile-first experiences, AI-enabled software, cloud-based systems, global product opportunities, and new technology platforms.",
      "The technologies will change. The need to build useful, reliable, and evolving products will remain.",
    ],
  },
  principles: [
    { title: "Solve the real problem", description: "Strong technology begins with the actual need, not the appearance of complexity." },
    { title: "Build with purpose", description: "Every product, system, and workflow should have a clear reason to exist." },
    { title: "Keep systems understandable", description: "Readable systems are easier to operate, improve, and extend." },
    { title: "Connect technology thoughtfully", description: "Software, mobile, cloud, and AI should work together when the product needs them to." },
    { title: "Design for change", description: "Technology should be ready to evolve as business requirements change." },
    { title: "Use intelligence intentionally", description: "AI should create meaningful product or workflow value." },
    { title: "Focus on long-term value", description: "A system should matter beyond the first release." },
  ] satisfies TextBlock[],
  explore: [
    {
      title: "Leadership",
      description: "Meet the verified and future-ready leadership structure behind BIMAL GLOBAL.",
      href: "/company/leadership",
    },
    {
      title: "Presence",
      description: "Explore the company's India, Nepal, and broader technology outlook.",
      href: "/company/presence",
    },
    {
      title: "Capabilities",
      description: "See the technology disciplines that shape BIMAL GLOBAL's work.",
      href: "/capabilities",
    },
    {
      title: "Industries",
      description: "Explore where different technology needs can appear across markets.",
      href: "/industries",
    },
    {
      title: "Work",
      description: "Review the product and platform types BIMAL GLOBAL can build.",
      href: "/work",
    },
  ] satisfies LinkItem[],
  finalCta: {
    title: "Let's build what comes next.",
    summary:
      "Whether you are exploring a new product, improving an existing system, or building a larger technology platform, BIMAL GLOBAL can help bring product thinking and engineering together.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/work", label: "Explore Our Work" },
  },
} as const;
