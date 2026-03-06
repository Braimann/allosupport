import { MetadataRoute } from "next";
import { getAllPostsForSitemap } from "@/content/blog/posts";
import { getAllServicesForSitemap } from "@/lib/services-data";

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
    // Services prioritaires — revenue pages get 0.9
    {
      url: `${baseUrl}/depannage-informatique`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/depannage-informatique-a-domicile`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pc-lent-solution`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/virus-ordinateur-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formatage-pc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formatage-pc-casablanca`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support-pme`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/infogerance-pme-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reparation-ordinateur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/installation-windows`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/antivirus-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/controle-parental-maroc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recuperation-donnees`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recuperation-donnees/laboratoire-partenaire`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recuperation-donnees-casablanca`,
      lastModified: new Date("2026-02-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recuperation-donnees-rabat`,
      lastModified: new Date("2026-02-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recuperation-donnees-disque-dur-ssd`,
      lastModified: new Date("2026-02-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recuperation-donnees-cle-usb`,
      lastModified: new Date("2026-02-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/maintenance-informatique`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Solutions par métier (B2B verticals — highest ticket)
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/cabinets-medicaux`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/cabinets-avocats`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/experts-comptables`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/architectes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/blog/installation-windows-11-maroc-2026-prix`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/windows-11-redemarrage-boucle-kb5077181-maroc-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/comment-supprimer-virus-pc-maroc-gratuit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/disque-dur-panne-que-faire-maroc`,
      lastModified: new Date("2026-02-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/arnaque-faux-technicien-informatique-maroc`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/recuperation-donnees-cle-usb-carte-sd-ssd-maroc`,
      lastModified: new Date("2026-03-07"),
      changeFrequency: "monthly",
      priority: 0.8,
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
      url: `${baseUrl}/non-responsabilite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/operateurs-telecom`,
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

  // Pages service (données statiques, plus de Firebase)
  const services = getAllServicesForSitemap();
  const servicePages: MetadataRoute.Sitemap =
    services.length > 0
      ? services.map((service) => ({
          url: `${baseUrl}/services/${service.slug}`,
          lastModified: service.updatedAt,
          changeFrequency: "weekly" as const,
          priority: 0.9,
        }))
      : [];

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
