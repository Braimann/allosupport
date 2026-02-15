import { MetadataRoute } from "next";
import { getAllPostsForSitemap } from "@/content/blog/posts";
import { getAllServicesForSitemap } from "@/lib/firebase/services-service";

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
    // Local SEO - villes principales
    {
      url: `${baseUrl}/casablanca`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rabat`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marrakech`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/agadir`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Services prioritaires (landing pages SEO)
    {
      url: `${baseUrl}/depannage-informatique`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pc-lent-solution`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/virus-ordinateur-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/formatage-pc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/formatage-pc-casablanca`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/support-pme`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparation-ordinateur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/installation-windows`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/antivirus-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recuperation-donnees`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/maintenance-informatique`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Solutions par métier (B2B verticals)
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/solutions/cabinets-medicaux`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/cabinets-avocats`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/experts-comptables`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/architectes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog listing + articles statiques (pages dédiées app/blog/xxx/page.tsx)
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pc-portable-sans-windows-freedos-maroc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/7-pannes-pc-courantes-2026-maroc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wifi-lent-maroc-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/comparatif-maroc-telecom-inwi-orange-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/192-168-1-1-admin-login-maroc-routeur-2026`,
      lastModified: now,
      changeFrequency: "monthly",
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
      url: `${baseUrl}/avis`,
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
    {
      url: `${baseUrl}/plan-du-site`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
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

  // Blog posts (local content/blog/posts) — inclut tous les articles dont 192.168.1.1 et comparatif MT/Inwi/Orange
  const blogPosts = getAllPostsForSitemap();
  const blogPages: MetadataRoute.Sitemap =
    blogPosts.length > 0
      ? blogPosts.map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        }))
      : [];

  // Combine all pages and deduplicate by URL (blog can appear in static + blogPages)
  const seen = new Set<string>();
  const allPages: MetadataRoute.Sitemap = [];
  for (const page of [...staticPages, ...servicePages, ...blogPages]) {
    if (seen.has(page.url)) continue;
    seen.add(page.url);
    allPages.push(page);
  }

  // Log for debugging (only in development)
  if (process.env.NODE_ENV === "development") {
    console.log(`✅ Sitemap generated: ${allPages.length} pages total (deduplicated)`);
    console.log(`   - Static: ${staticPages.length}`);
    console.log(`   - Services: ${servicePages.length}`);
    console.log(`   - Blog posts: ${blogPages.length}`);
  }

  return allPages;
}
