export type MobileTextBlock = {
  description: string;
  title: string;
};

export type MobileSection = {
  imagePath?: string;
  items: string[];
  paragraphs: string[];
  title: string;
};

export type MobileLifecycleStage = {
  description: string;
  number: string;
  title: string;
};

export type MobileRelatedCapability = {
  description: string;
  href: string;
  title: string;
};

export type MobileFaqItem = {
  answer: string;
  question: string;
};

export const mobilePlatformsPage = {
  hero: {
    eyebrow: "Mobile Platforms",
    title: "Mobile experiences engineered as part of a connected product.",
    summary:
      "Build mobile applications that connect users, products, APIs, data, and infrastructure into experiences designed for real-world use.",
    imagePath: "/images/capabilities/mobile-platforms/hero.jpg",
    imageAlt: "Abstract mobile platform and connected product system visual",
    primaryCta: { href: "/contact", label: "Discuss a Mobile Product" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
  overview: {
    title: "A mobile application is part of a larger system.",
    paragraphs: [
      "Mobile products depend on more than the application interface. They connect mobile experience, application logic, APIs, services, data, cloud infrastructure, authentication, notifications, analytics, integrations, and device capabilities.",
      "Mobile architecture should be considered together with backend systems, API design, infrastructure, and product requirements so the application can keep evolving after release.",
    ],
    layers: [
      "Mobile Experience",
      "Application",
      "APIs & Services",
      "Data",
      "Cloud & Infrastructure",
    ],
    connected: [
      "Authentication",
      "Notifications",
      "Analytics",
      "Integrations",
      "Device Capabilities",
    ],
  },
  productTypes: [
    {
      title: "Consumer Mobile Applications",
      description:
        "Applications designed around customer-facing experiences and frequent mobile interaction.",
    },
    {
      title: "Business Applications",
      description:
        "Mobile tools for employees, field teams, operations, management, and business workflows.",
    },
    {
      title: "Platform Companion Apps",
      description:
        "Mobile applications connected to larger web or platform ecosystems.",
    },
    {
      title: "Commerce Applications",
      description:
        "Mobile experiences involving products, services, discovery, transactions, orders, or customer journeys.",
    },
    {
      title: "Content Applications",
      description:
        "Applications for consuming, discovering, organizing, and interacting with digital content.",
    },
    {
      title: "Operational Applications",
      description:
        "Applications supporting real-world workflows, data collection, communication, monitoring, or task management.",
    },
    {
      title: "Location-Aware Applications",
      description:
        "Applications that make use of location and geographic workflows where appropriate.",
    },
    {
      title: "Connected Mobile Experiences",
      description:
        "Applications that depend on APIs, external services, devices, or other connected systems.",
    },
  ] satisfies MobileTextBlock[],
  sections: [
    {
      title: "Designed for the way people actually use mobile devices.",
      imagePath: "/images/capabilities/mobile-platforms/experience.jpg",
      paragraphs: [
        "Mobile UX is shaped by touch-first interaction, navigation, onboarding, forms, search, notifications, permissions, loading states, empty states, error states, accessibility, responsive device behavior, and real connectivity constraints.",
      ],
      items: ["Discover", "Navigate", "Act", "Confirm", "Continue"],
    },
    {
      title: "Android application engineering",
      imagePath: "/images/capabilities/mobile-platforms/android.jpg",
      paragraphs: [
        "Android engineering can include native applications, device diversity, screen sizes, operating system differences, permissions, background processing, notifications, local storage, network behavior, device capabilities, performance, and security-aware application design.",
      ],
      items: [
        "Native Android",
        "Device diversity",
        "Permissions",
        "Notifications",
        "Local storage",
        "Performance",
        "Security-aware design",
      ],
    },
    {
      title: "iOS application engineering",
      imagePath: "/images/capabilities/mobile-platforms/ios.jpg",
      paragraphs: [
        "iOS engineering can include native applications, device-aware interfaces, application lifecycle, permissions, notifications, local storage, network behavior, accessibility, performance, secure application design, and release considerations.",
      ],
      items: [
        "Native iOS",
        "Device-aware interfaces",
        "Application lifecycle",
        "Accessibility",
        "Network behavior",
        "Secure application design",
        "Release considerations",
      ],
    },
    {
      title: "Choosing the right mobile architecture",
      paragraphs: [
        "Cross-platform development can be appropriate when product requirements, team context, maintenance goals, and platform needs support it. Native development can be appropriate when platform-specific capability, performance, or user experience requires it.",
        "Architecture should follow the product, not the trend.",
      ],
      items: [
        "Native: Platform-specific implementation",
        "Cross-platform: Shared implementation with platform-aware behavior",
        "Hybrid approach: Shared foundation plus targeted native capabilities",
      ],
    },
    {
      title: "Architecture for applications that need to evolve.",
      imagePath: "/images/capabilities/mobile-platforms/architecture.jpg",
      paragraphs: [
        "Mobile architecture can include presentation, application state, networking, local storage, authentication, API integration, device services, background processing, error handling, analytics, and configuration.",
        "The right architecture depends on the product, users, workflow requirements, and long-term maintenance needs.",
      ],
      items: [
        "Mobile UI",
        "Application Logic",
        "Networking / APIs",
        "Local Data",
        "Backend Services",
      ],
    },
    {
      title: "The mobile app is only one side of the product.",
      paragraphs: [
        "Mobile applications often need API consumption, authentication, authorization, user profiles, data synchronization, search, transactions, notifications, file uploads, media, background jobs, analytics, and external integrations.",
      ],
      items: ["Mobile App", "API Layer", "Backend Services", "Database", "External Services"],
    },
    {
      title: "Secure access for connected mobile experiences.",
      paragraphs: [
        "Connected mobile products require thoughtful authentication flows, session or token handling, user roles, authorization, account recovery, device and session awareness, secure storage considerations, logout, and session invalidation.",
        "Security requirements should be defined according to the product, data, users, and operating environment.",
      ],
      items: [
        "Authentication flows",
        "Session handling",
        "User roles",
        "Authorization",
        "Secure storage",
        "Session invalidation",
      ],
    },
    {
      title: "Mobile software operates in the real world.",
      paragraphs: [
        "Connectivity can be unreliable. Offline-aware experiences may need local caching, retry strategies, synchronization, conflict handling, upload queues, background synchronization, and graceful degradation.",
        "Offline behavior should be designed according to actual workflow requirements rather than promised as a default for every product.",
      ],
      items: ["Online", "Limited Connectivity", "Offline", "Reconnect", "Synchronize"],
    },
    {
      title: "Connecting software to the capabilities of the device",
      paragraphs: [
        "Device capabilities should be used when they provide meaningful product value and with appropriate permission handling.",
      ],
      items: [
        "Camera",
        "Location",
        "Notifications",
        "Files",
        "Sensors",
        "Biometrics",
        "Contacts",
        "Bluetooth",
        "Audio",
        "Background processing",
      ],
    },
    {
      title: "Performance is part of the mobile experience.",
      imagePath: "/images/capabilities/mobile-platforms/performance.jpg",
      paragraphs: [
        "Mobile performance depends on startup behavior, rendering, memory usage, network efficiency, image and media optimization, API efficiency, local data access, background work, battery considerations, and error recovery.",
        "Performance optimization should be based on actual behavior and measurement.",
      ],
      items: ["Startup", "Rendering", "Memory", "Network", "API Efficiency", "Battery"],
    },
    {
      title: "Security considerations from the device to the backend.",
      paragraphs: [
        "Security-aware mobile engineering considers authentication, authorization, secure storage, data protection, API security, input validation, permissions, session management, dependency awareness, logging, and release practices.",
        "Security architecture depends on application sensitivity, data requirements, platform behavior, and operational context.",
      ],
      items: [
        "Secure authentication",
        "Authorization",
        "Secure storage",
        "API security",
        "Permissions",
        "Release practices",
      ],
    },
    {
      title: "Useful communication without unnecessary interruption.",
      paragraphs: [
        "Mobile communication can include push notifications, transactional alerts, workflow notifications, reminders, status updates, user preferences, notification categories, and deep links.",
        "Notifications should be connected to meaningful user actions and preferences.",
      ],
      items: [
        "Push notifications",
        "Transactional alerts",
        "Workflow notifications",
        "Preferences",
        "Deep links",
      ],
    },
    {
      title: "Understand how the product behaves in the real world.",
      paragraphs: [
        "Mobile analytics can help teams understand feature usage, screen interactions, conversion flows, workflow completion, errors, crashes, performance signals, user feedback, and retention-related signals.",
      ],
      items: ["Observe", "Understand", "Prioritize", "Improve"],
    },
    {
      title: "Quality across devices, workflows, and releases.",
      paragraphs: [
        "Mobile quality includes unit testing, integration testing, UI testing, API testing, device testing, regression testing, network-condition testing, permission testing, error-state testing, and release validation.",
        "Quality means considering both software behavior and real device conditions.",
      ],
      items: ["Build", "Test", "Validate", "Release", "Observe", "Improve"],
    },
    {
      title: "From development build to production release.",
      imagePath: "/images/capabilities/mobile-platforms/engineering.jpg",
      paragraphs: [
        "Release work can include development builds, testing, release preparation, configuration, assets, versioning, distribution, monitoring, and iteration.",
        "Final platform distribution remains subject to the relevant platform requirements.",
      ],
      items: ["Development", "Testing", "Release Preparation", "Distribution", "Monitoring", "Iteration"],
    },
    {
      title: "Mobile products depend on strong infrastructure.",
      paragraphs: [
        "Mobile products often depend on APIs, authentication, databases, storage, notifications, media, background processing, monitoring, deployment, and scalability.",
      ],
      items: ["APIs", "Authentication", "Databases", "Storage", "Monitoring", "Scalability"],
    },
    {
      title: "Intelligence where it creates real product value.",
      paragraphs: [
        "AI can become part of mobile products through personalized experiences, intelligent search, recommendations, assistants, content processing, image understanding, voice experiences, workflow automation, and on-device or server-assisted intelligence.",
        "Not every mobile application should use AI. The value should come from the product need.",
      ],
      items: [
        "Personalization",
        "Search",
        "Recommendations",
        "Assistants",
        "Content processing",
        "Automation",
      ],
    },
  ] satisfies MobileSection[],
  lifecycle: [
    { number: "01", title: "Define", description: "Understand users, goals, workflows, and requirements." },
    { number: "02", title: "Design", description: "Create mobile-first experiences and interaction patterns." },
    { number: "03", title: "Architect", description: "Define application, API, data, and infrastructure boundaries." },
    { number: "04", title: "Build", description: "Develop mobile applications and connected services." },
    { number: "05", title: "Integrate", description: "Connect APIs, authentication, notifications, device capabilities, and external systems." },
    { number: "06", title: "Validate", description: "Test functionality, devices, connectivity, performance, and edge cases." },
    { number: "07", title: "Release", description: "Prepare production distribution and operational processes." },
    { number: "08", title: "Evolve", description: "Use feedback, analytics, and changing requirements to improve the product." },
  ] satisfies MobileLifecycleStage[],
  principles: [
    { title: "Design for the device", description: "Mobile interaction has different constraints than desktop software." },
    { title: "Design for real connectivity", description: "Networks are not always predictable." },
    { title: "Keep the application understandable", description: "Maintainable architecture matters as features grow." },
    { title: "Protect user data", description: "Security should be considered across the device, application, API, and infrastructure." },
    { title: "Measure real behavior", description: "Optimization should be based on actual system behavior." },
    { title: "Respect platform conventions", description: "Good mobile experiences should feel natural to their operating environment." },
    { title: "Keep backend and mobile aligned", description: "A mobile application is part of a larger technology system." },
    { title: "Build for evolution", description: "Mobile products need room for new capabilities, platform changes, and user expectations." },
  ] satisfies MobileTextBlock[],
  technologyDomains: [
    "Android",
    "iOS",
    "Cross-platform",
    "Mobile UX",
    "APIs",
    "Backend",
    "Local Data",
    "Cloud",
    "Notifications",
    "Authentication",
    "Device Services",
    "Analytics",
    "AI",
    "Integrations",
    "Testing",
    "Deployment",
  ],
  situations: [
    "You are building a new mobile product.",
    "Your existing web product needs mobile applications.",
    "Your field or operational workflows need mobile access.",
    "Your product requires device capabilities.",
    "Your mobile application needs stronger backend integration.",
    "Your application needs performance improvements.",
    "Your product needs better mobile UX.",
    "You need to evolve an existing mobile platform.",
    "You need mobile and cloud engineering to work together.",
  ],
  engagementModels: [
    {
      title: "New Mobile Product",
      description:
        "From product definition through application engineering and release preparation.",
    },
    {
      title: "Mobile Product Evolution",
      description:
        "Improve an existing application with new features, UX improvements, integrations, or technical modernization.",
    },
    {
      title: "Connected Mobile Platform",
      description:
        "Build mobile applications as part of a larger web, API, backend, cloud, and data ecosystem.",
    },
  ] satisfies MobileTextBlock[],
  projectTypes: [
    "Consumer mobile applications",
    "Employee applications",
    "Field-service applications",
    "Booking applications",
    "Commerce applications",
    "Delivery applications",
    "Education applications",
    "Healthcare applications",
    "Financial workflow applications",
    "Media applications",
    "Location-based applications",
    "Communication applications",
    "Business dashboards",
    "Operational applications",
    "Connected platform applications",
  ],
  relatedCapabilities: [
    {
      href: "/capabilities/software-engineering",
      title: "Software Engineering",
      description:
        "Mobile platforms depend on reliable applications, APIs, backend services, integrations, and data systems.",
    },
    {
      href: "/capabilities/product-development",
      title: "Product Development",
      description:
        "Strong mobile products begin with product definition, UX, workflows, and long-term product thinking.",
    },
    {
      href: "/capabilities/cloud-infrastructure",
      title: "Cloud & Infrastructure",
      description:
        "Infrastructure supports mobile APIs, storage, authentication, monitoring, deployment, and scalability.",
    },
    {
      href: "/capabilities/artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "AI can support mobile experiences where intelligence creates meaningful product value.",
    },
    {
      href: "/company/how-we-work",
      title: "How We Work",
      description:
        "See how product thinking, engineering discipline, and long-term collaboration shape BIMAL GLOBAL delivery.",
    },
  ] satisfies MobileRelatedCapability[],
  faqs: [
    {
      question: "Does BIMAL GLOBAL build Android and iOS applications?",
      answer:
        "Mobile engineering can support Android, iOS, and cross-platform approaches depending on project requirements.",
    },
    {
      question: "Should we build native or cross-platform?",
      answer:
        "The decision depends on product requirements, platform-specific functionality, performance needs, team context, maintenance, and budget constraints.",
    },
    {
      question: "Can mobile applications work with existing APIs?",
      answer:
        "Yes. Mobile applications can integrate with existing APIs and backend systems when those systems are appropriate for the product requirements.",
    },
    {
      question: "Can you build the backend for a mobile application?",
      answer:
        "Yes. Mobile platforms often need backend services, APIs, authentication, data handling, and integrations connected through software engineering.",
    },
    {
      question: "Can mobile applications work offline?",
      answer:
        "Offline-aware functionality can be designed where the workflow requires it, with appropriate synchronization and conflict considerations.",
    },
    {
      question: "Can mobile apps use device features?",
      answer:
        "Yes. Mobile apps can use camera, location, notifications, files, sensors, biometrics, Bluetooth, and other features when product requirements and platform permissions support them.",
    },
    {
      question: "Can you improve an existing mobile application?",
      answer:
        "Yes. Mobile work can include modernization, UX improvements, performance work, architecture improvements, integrations, and new capabilities.",
    },
    {
      question: "Can AI be integrated into mobile applications?",
      answer:
        "Yes. AI can support assistants, recommendations, search, content processing, and automation when it creates meaningful product value.",
    },
    {
      question: "How do you approach mobile security?",
      answer:
        "Security is considered across authentication, authorization, storage, APIs, permissions, data handling, and infrastructure.",
    },
    {
      question: "Do you handle app release?",
      answer:
        "Release preparation and engineering workflows can be part of the engagement, while final platform distribution remains subject to the relevant platform requirements.",
    },
  ] satisfies MobileFaqItem[],
  finalCta: {
    title: "Have a mobile product worth building?",
    summary:
      "Whether you are starting a new mobile experience or evolving an existing application, BIMAL GLOBAL can help connect product thinking, mobile engineering, APIs, infrastructure, and long-term evolution.",
    primaryCta: { href: "/contact", label: "Start a Conversation" },
    secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
  },
} as const;
