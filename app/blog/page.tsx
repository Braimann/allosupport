import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Monitor, Cloud, ShieldAlert, Server, Search, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Blog & Actualités IT | AlloSupport.ma",
  description:
    "Conseils d'experts en dépannage informatique à distance, astuces PC, cybersécurité et productivité pour particuliers et PME au Maroc. Articles et guides pratiques.",
  keywords: [
    "blog informatique Maroc",
    "actualités IT",
    "conseils dépannage PC",
    "dépannage informatique distance",
    "support IT Maroc",
  ],
  openGraph: {
    title: "Blog & Actualités IT | AlloSupport.ma",
    description: "Conseils d'experts en dépannage informatique à distance pour particuliers et PME au Maroc.",
    type: "website",
    url: "https://allosupport.ma/blog",
  },
  alternates: {
    canonical: "https://allosupport.ma/blog",
  },
};

// Icon mapping based on category
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Dépannage": Monitor,
  "Productivité": Cloud,
  "Cybersécurité": ShieldAlert,
  "Cloud": Cloud,
  "Infogérance": Server,
  "SEO": Search,
};

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 pt-40">
          <div className="max-w-7xl mx-auto px-4">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Blog & Actualités
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conseils d&apos;Experts & Actualités Tech
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Astuces de dépannage, guides pratiques et actualités en
              cybersécurité pour les entreprises marocaines.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucun article pour le moment
                </h2>
                <p className="text-gray-500">
                  Les articles seront bientôt disponibles.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const IconComponent = categoryIcons[post.category] || Monitor;
                  return (
                    <article
                      key={post.slug}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt={post.imageAlt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-gray-300 group-hover:text-blue-400 transition-colors" />
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`${post.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-orange-500 transition-colors"
                        >
                          Lire l&apos;article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Besoin d&apos;un accompagnement personnalisé ?
            </h2>
            <p className="text-gray-600 mb-8">
              Nos experts sont disponibles pour répondre à vos questions et vous
              proposer des solutions adaptées à votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#devis"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
