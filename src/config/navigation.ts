export type NavigationItem = {
  description?: string;
  href: string;
  items?: NavigationSubItem[];
  label: string;
};

export type NavigationSubItem = {
  description?: string;
  href: string;
  label: string;
};

export const navigation: NavigationItem[] = [
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "Overview", href: "/company" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Our Presence", href: "/company/presence" },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    description:
      "Technology capabilities for ambitious products and complex systems.",
    items: [
      {
        label: "Software Engineering",
        href: "/capabilities/software-engineering",
      },
      {
        label: "Product Development",
        href: "/capabilities/product-development",
      },
      { label: "Mobile Platforms", href: "/capabilities/mobile-platforms" },
      {
        label: "Cloud & Infrastructure",
        href: "/capabilities/cloud-infrastructure",
      },
      {
        label: "Artificial Intelligence",
        href: "/capabilities/artificial-intelligence",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export const primaryNavigationCta = {
  href: "/contact",
  label: "Start a Project",
} as const;

const companyNavigation = navigation.find((item) => item.label === "Company");
const capabilitiesNavigation = navigation.find(
  (item) => item.label === "Capabilities",
);

export const footerNavigationGroups = [
  {
    label: "Company",
    links: companyNavigation?.items ?? [],
  },
  {
    label: "Capabilities",
    links: capabilitiesNavigation?.items ?? [],
  },
  {
    label: "Explore",
    links: navigation
      .filter((item) =>
        ["Industries", "Work", "Insights", "Careers"].includes(item.label),
      )
      .map(({ href, label }) => ({ href, label })),
  },
  {
    label: "Connect",
    links: [{ href: "/contact", label: "Contact" }],
  },
] as const;

export const legalNavigation = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;
