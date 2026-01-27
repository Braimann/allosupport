import { MetadataRoute } from "next";
import { getAllPostsForSitemap } from "@/lib/firebase/blog-service";
import { getAllServicesForSitemap } from "@/lib/firebase/services-service";

// Revalidate sitemap every 60 seconds (ISR)
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://allosupport.ma";
  const now = new Date();

  // Static pages - All important pages included
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/html-editor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/password-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/speed-test`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/unit-converter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/qr-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools/invoice-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic service pages (Pillar Pages) - Higher priority with real dates
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const services = await getAllServicesForSitemap();
    if (services && services.length > 0) {
      servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: service.updatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.9, // High priority for commercial pages
      }));
    }
  } catch (error) {
    console.warn("⚠️  Warning: Could not generate service sitemap. Firebase may not be configured. Error:", error);
    // Continue without service pages - static pages will still be included
  }

  // Dynamic blog posts (Cluster Posts) - Lower priority with real dates
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPostsForSitemap();
    if (posts && posts.length > 0) {
      blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.8, // Lower priority for educational content
      }));
    }
  } catch (error) {
    console.warn("⚠️  Warning: Could not generate blog sitemap. Firebase may not be configured. Error:", error);
    // Continue without blog pages - static pages will still be included
  }

  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...blogPages];
  
  // Log for debugging (only in development)
  if (process.env.NODE_ENV === "development") {
    console.log(`✅ Sitemap generated: ${allPages.length} pages total`);
    console.log(`   - Static: ${staticPages.length}`);
    console.log(`   - Services: ${servicePages.length}`);
    console.log(`   - Blog posts: ${blogPages.length}`);
  }

  return allPages;
}
