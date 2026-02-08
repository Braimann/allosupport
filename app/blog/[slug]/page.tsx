import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter, Monitor, Cloud, ShieldAlert, Server, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InContentCTA from "@/components/conversion/InContentCTA";
import { getPostBySlug, getPublishedPosts, getAllSlugs } from "@/content/blog/posts";
import { generateTitle, generateDescription, generateCanonical } from "@/lib/seo";

const BASE_URL = "https://allosupport.ma";

function getAbsoluteImageUrl(imageUrl: string | undefined): string | undefined {
  if (!imageUrl) return undefined;
  return imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`;
}

interface PageProps {
  params: { slug: string };
}

// Slugs qui ont une page statique dédiée (évite conflit et erreurs vendor-chunks motion)
const STATIC_BLOG_SLUGS = ["wifi-lent-maroc-2026", "7-pannes-pc-courantes-2026-maroc", "192-168-1-1-admin-login-maroc-routeur-2026", "comparatif-maroc-telecom-inwi-orange-2026"];

export function generateStaticParams() {
  return getAllSlugs()
    .filter((slug) => !STATIC_BLOG_SLUGS.includes(slug))
    .map((slug) => ({ slug }));
}

// Icon mapping based on category
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Dépannage": Monitor,
  "Productivité": Cloud,
  "Cybersécurité": ShieldAlert,
  "Cloud": Cloud,
  "Infogérance": Server,
  "SEO": Search,
  "Sécurité": ShieldAlert,
  "Tuto Windows": Monitor,
  "Télétravail": Cloud,
};

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateISO(isoDate: string): string {
  return new Date(isoDate).toISOString().split("T")[0];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: "Article non trouvé | AlloSupport.ma" };
  }

  const title = generateTitle(post.title, "Guide Pratique");
  const description = generateDescription(post.metaDescription || post.excerpt, 160);
  const canonical = generateCanonical(`blog/${params.slug}`);

  const absoluteImageUrl = getAbsoluteImageUrl(post.imageUrl);

  return {
    title,
    description,
    alternates: { canonical },
    keywords: post.keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: formatDateISO(post.publishedAt),
      authors: [post.author || "AlloSupport.ma"],
      tags: post.keywords,
      images: absoluteImageUrl ? [{ url: absoluteImageUrl, alt: post.imageAlt || post.title }] : [],
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const IconComponent = categoryIcons[post.category] || Monitor;

  const allPosts = getPublishedPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  let serviceName = "Dépannage Informatique";
  let price = "250 DH";
  if (post.category.includes("Sécurité") || post.category.includes("Cybersécurité")) {
    serviceName = "Protection & Sécurité";
    price = "450 DH";
  } else if (post.category.includes("Optimisation") || post.category.includes("Tuto")) {
    serviceName = "Optimisation PC";
    price = "250 DH";
  }

  const absoluteImageUrl = getAbsoluteImageUrl(post.imageUrl);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: absoluteImageUrl
      ? {
          "@type": "ImageObject" as const,
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
        }
      : `${BASE_URL}/blog/${post.slug}.jpg`,
    datePublished: formatDateISO(post.publishedAt),
    dateModified: formatDateISO(post.updatedAt),
    author: {
      "@type": "Organization" as const,
      name: post.author || "AlloSupport.ma",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization" as const,
      name: "AlloSupport.ma",
      logo: {
        "@type": "ImageObject" as const,
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(", ") || "",
  };

  // Split content to insert CTA after 2nd paragraph
  const contentParts = post.content.split('</p>');
  const hasEnoughParagraphs = contentParts.length >= 3;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 pt-40">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <div className="mb-4">
              <span
                className={`${post.categoryColor} text-white text-sm font-semibold px-4 py-1 rounded-full`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
              {post.author && (
                <span>Par {post.author}</span>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-32 h-32 text-gray-300" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Excerpt */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-primary-500 pl-4">
                  {post.excerpt}
                </p>

                {/* First paragraphs */}
                {hasEnoughParagraphs && (
                  <>
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 prose-a:hover:text-primary-700"
                      dangerouslySetInnerHTML={{ 
                        __html: contentParts.slice(0, 2).join('</p>') + '</p>'
                      }}
                    />
                    
                    {/* InContentCTA */}
                    <InContentCTA 
                      serviceName={serviceName}
                      price={price}
                      context={post.title}
                    />
                    
                    {/* Rest of content */}
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 prose-a:hover:text-primary-700"
                      dangerouslySetInnerHTML={{ 
                        __html: contentParts.slice(2).join('</p>')
                      }}
                    />
                  </>
                )}
                
                {/* If not enough paragraphs, show all content */}
                {!hasEnoughParagraphs && (
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 prose-a:hover:text-primary-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}

                {/* Tags */}
                {post.keywords && post.keywords.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                      Mots-clés
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Partager cet article
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://allosupport.ma/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://allosupport.ma/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://allosupport.ma/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const RelatedIcon = categoryIcons[relatedPost.category] || Monitor;
                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {relatedPost.imageUrl ? (
                          <Image
                            src={relatedPost.imageUrl}
                            alt={relatedPost.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <RelatedIcon className="w-10 h-10 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        )}
                      </div>
                      <div>
                        <span
                          className={`${relatedPost.categoryColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}
                        >
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-primary-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {relatedPost.readTime}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voir tous les articles du blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
