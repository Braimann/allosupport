"use client";

import Link from "next/link";
import { ArrowRight, Monitor, Cloud, ShieldAlert, Server, Search, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPublishedPosts, type BlogPost } from "@/lib/firebase/blog-service";

// Icon mapping based on category
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Dépannage": Monitor,
  "Productivité": Cloud,
  "Cybersécurité": ShieldAlert,
  "Cloud": Cloud,
  "Infogérance": Server,
  "SEO": Search,
};

const categoryGradients: Record<string, string> = {
  "Dépannage": "from-blue-500 to-cyan-500",
  "Productivité": "from-green-500 to-emerald-500",
  "Cybersécurité": "from-red-500 to-rose-500",
  "Cloud": "from-purple-500 to-pink-500",
  "Infogérance": "from-orange-500 to-red-500",
  "SEO": "from-teal-500 to-cyan-500",
};

function formatDate(date: { toDate?: () => Date } | Date): string {
  try {
    const d = date && typeof (date as { toDate?: () => Date }).toDate === 'function' 
      ? (date as { toDate: () => Date }).toDate() 
      : new Date(date as Date);
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPublishedPosts();
        setPosts(fetchedPosts.slice(0, 3)); // Show only 3 posts on homepage
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-600 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Blog & Actualités
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conseils d&apos;Experts &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Actualités Tech
            </span>{" "}
            au Maroc
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières tendances IT, astuces de dépannage et
            conseils en sécurité informatique pour les entreprises marocaines.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => {
            const Icon = categoryIcons[post.category] || Settings;
            const gradient = categoryGradients[post.category] || "from-gray-500 to-gray-600";

            return (
              <motion.article
                key={post.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />
                
                {/* Card */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 h-full flex flex-col hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {/* Image */}
                  {post.imageUrl && (
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.imageUrl}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`bg-gradient-to-r ${gradient} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-semibold">{post.category}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{formatDate(post.createdAt)}</span>
                      <span>•</span>
                      <span>{post.readTime || "5 min"}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold mt-auto group-hover:text-primary-700 transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Voir tous les articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
