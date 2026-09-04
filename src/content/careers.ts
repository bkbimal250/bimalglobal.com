export type CareerArea = {
  description: string;
  name: string;
};

export type JobOpening = {
  department?: string;
  href: string;
  location?: string;
  title: string;
  type?: string;
};

export const careerAreas: CareerArea[] = [
  {
    name: "Engineering",
    description: "Building software, platforms, systems, and digital infrastructure.",
  },
  {
    name: "Product",
    description: "Turning opportunities into products and experiences with real purpose.",
  },
  {
    name: "Design",
    description:
      "Creating thoughtful and intuitive experiences around people and technology.",
  },
  {
    name: "Mobile",
    description: "Building modern mobile platforms and connected digital experiences.",
  },
  {
    name: "Cloud & Infrastructure",
    description:
      "Creating reliable foundations for products and technology systems.",
  },
  {
    name: "Artificial Intelligence",
    description:
      "Exploring and applying intelligent systems, automation, and emerging technologies.",
  },
];

export const jobOpenings: JobOpening[] = [];
