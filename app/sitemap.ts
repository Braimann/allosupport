import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/firebase/blog-service";
import { getAllServiceSlugs } from "@/lib/firebase/services-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://allosupport.ma";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic service pages (Pillar Pages) - Higher priority
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const serviceSlugs = await getAllServiceSlugs();
    servicePages = serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9, // High priority for commercial pages
    }));
  } catch (error) {
    console.error("Error generating service sitemap:", error);
  }

  // Dynamic blog posts (Cluster Posts) - Lower priority
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogSlugs = await getAllSlugs();
    blogPages = blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8, // Lower priority for educational content
    }));
  } catch (error) {
    console.error("Error generating blog sitemap:", error);
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
