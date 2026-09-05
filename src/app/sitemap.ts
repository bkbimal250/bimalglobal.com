import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/company",
  "/company/how-we-work",
  "/company/presence",
  "/capabilities",
  "/capabilities/software-engineering",
  "/capabilities/product-development",
  "/capabilities/mobile-platforms",
  "/capabilities/cloud-infrastructure",
  "/capabilities/artificial-intelligence",
  "/industries",
  "/work",
  "/insights",
  "/careers",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    changeFrequency: route === "/" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : 0.8,
    url: new URL(route, baseUrl).toString(),
  }));
}
