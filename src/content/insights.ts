export type InsightCategory =
  | "Engineering"
  | "Product"
  | "Artificial Intelligence"
  | "Cloud"
  | "Mobile"
  | "Technology"
  | "Company";

export type Insight = {
  author?: string;
  category?: InsightCategory;
  excerpt?: string;
  featured?: boolean;
  imageAlt?: string;
  imagePath?: string;
  publishedAt?: string;
  slug: string;
  title: string;
};

export const insights: Insight[] = [];
