"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Monitor,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Loader2,
  FileText,
  AlertCircle,
} from "lucide-react";
import { onAuthChange, isAdmin, signOut } from "@/lib/firebase/auth-service";
import { getAllPosts, deletePost, updatePost, BlogPost } from "@/lib/firebase/blog-service";
import { User } from "firebase/auth";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user || !isAdmin(user)) {
        router.push("/admin/login");
        return;
      }
      setUser(user);
      loadPosts();
    });

    return () => unsubscribe();
  }, [router]);

  const loadPosts = async () => {
    setLoading(true);
    const data = await getAllPosts();
    setPosts(data);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;

    setDeleting(id);
    const success = await deletePost(id);
    if (success) {
      setPosts(posts.filter((p) => p.id !== id));
    }
    setDeleting(null);
  };

  const handleTogglePublish = async (post: BlogPost) => {
    if (!post.id) return;
    await updatePost(post.id, { published: !post.published });
    loadPosts();
  };

  const formatDate = (date: { toDate?: () => Date } | Date): string => {
    const d = date && typeof (date as { toDate?: () => Date }).toDate === 'function' 
      ? (date as { toDate: () => Date }).toDate() 
      : new Date(date as Date);
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  AlloSupport<span className="text-primary-500">.ma</span>{" "}
                  <span className="text-secondary-800">Admin</span>
                </h1>
                <p className="text-xs text-gray-500">Gestion du contenu</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Voir le site
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                <p className="text-sm text-gray-500">Articles total</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.filter((p) => p.published).length}
                </p>
                <p className="text-sm text-gray-500">Publiés</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <EyeOff className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.filter((p) => !p.published).length}
                </p>
                <p className="text-sm text-gray-500">Brouillons</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Articles du blog</h2>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nouvel article
          </Link>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <Loader2 className="w-8 h-8 text-primary-500 animate-spin mx-auto" />
              <p className="text-gray-500 mt-2">Chargement...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Aucun article</p>
              <p className="text-gray-500 text-sm mt-1">
                Commencez par créer votre premier article.
              </p>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors mt-4"
              >
                <Plus className="w-5 h-5" />
                Créer un article
              </Link>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Article
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Catégorie
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Statut
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">
                            {post.title}
                          </p>
                          <p className="text-sm text-gray-500">/blog/{post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`${post.categoryColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}
                      >
                        {post.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {formatDate(post.createdAt)}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full transition-colors ${
                          post.published
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {post.published ? (
                          <>
                            <Eye className="w-3 h-3" />
                            Publié
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" />
                            Brouillon
                          </>
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          title="Voir"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => post.id && handleDelete(post.id)}
                          disabled={deleting === post.id}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Supprimer"
                        >
                          {deleting === post.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
