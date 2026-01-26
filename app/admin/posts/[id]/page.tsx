"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  X,
  Image as ImageIcon,
  Trash2,
} from "lucide-react";
import { onAuthChange, isAdmin } from "@/lib/firebase/auth-service";
import {
  getPostById,
  updatePost,
  deletePost,
  uploadImage,
  generateSlug,
  estimateReadTime,
  BLOG_CATEGORIES,
  BlogPost,
} from "@/lib/firebase/blog-service";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);

  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "",
    metaDescription: "",
    keywords: [] as string[],
    author: "AlloSupport.ma",
    readTime: "5 min de lecture",
    published: false,
  });

  const [keywordsInput, setKeywordsInput] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (!user || !isAdmin(user)) {
        router.push("/admin/login");
        return;
      }

      // Load post data
      const postData = await getPostById(postId);
      if (!postData) {
        router.push("/admin");
        return;
      }

      setPost(postData);
      setFormData({
        slug: postData.slug,
        title: postData.title,
        excerpt: postData.excerpt,
        content: postData.content,
        category: postData.category,
        categoryColor: postData.categoryColor,
        imageUrl: postData.imageUrl,
        imageAlt: postData.imageAlt,
        metaDescription: postData.metaDescription,
        keywords: postData.keywords || [],
        author: postData.author,
        readTime: postData.readTime,
        published: postData.published,
      });
      setKeywordsInput(postData.keywords?.join(", ") || "");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, postId]);

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleContentChange = (content: string) => {
    setFormData({
      ...formData,
      content,
      readTime: estimateReadTime(content),
    });
  };

  const handleCategoryChange = (categoryName: string) => {
    const category = BLOG_CATEGORIES.find((c) => c.name === categoryName);
    if (category) {
      setFormData({
        ...formData,
        category: category.name,
        categoryColor: category.color,
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);

    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const url = await uploadImage(file, fileName);

    if (url) {
      setFormData({ ...formData, imageUrl: url });
    }
    setUploading(false);
  };

  const handleKeywordsChange = (value: string) => {
    setKeywordsInput(value);
    const keywords = value
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);
    setFormData({ ...formData, keywords });
  };

  const handleSubmit = async (e: React.FormEvent, publish?: boolean) => {
    e.preventDefault();
    setSaving(true);

    const postData = {
      ...formData,
      published: publish !== undefined ? publish : formData.published,
    };

    const success = await updatePost(postId, postData);

    if (success) {
      router.push("/admin");
    } else {
      alert("Erreur lors de la mise à jour de l'article.");
    }

    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;

    const success = await deletePost(postId);
    if (success) {
      router.push("/admin");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-lg font-semibold text-gray-900">
                Modifier l&apos;article
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 text-red-600 hover:bg-red-50 font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Supprimer
              </button>
              <button
                onClick={(e) => handleSubmit(e, false)}
                disabled={saving}
                className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Brouillon
              </button>
              <button
                onClick={(e) => handleSubmit(e, true)}
                disabled={saving}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Publier
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <form className="space-y-6">
          {/* Title */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Titre de l&apos;article *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full px-4 py-3 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-2 text-sm text-gray-500">
              URL: /blog/<span className="font-mono">{formData.slug}</span>
            </p>
          </div>

          {/* Image */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image de couverture
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              {imagePreview || formData.imageUrl ? (
                <div className="relative">
                  <img
                    src={imagePreview || formData.imageUrl}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setFormData({ ...formData, imageUrl: "" });
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer py-8">
                  {uploading ? (
                    <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
                  ) : (
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  )}
                  <span className="mt-2 text-sm text-gray-500">
                    {uploading
                      ? "Upload en cours..."
                      : "Cliquez pour télécharger une image"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              )}
            </div>
            <input
              type="text"
              value={formData.imageAlt}
              onChange={(e) =>
                setFormData({ ...formData, imageAlt: e.target.value })
              }
              className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Texte alternatif de l'image (SEO)"
            />
          </div>

          {/* Category & Author */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Catégorie *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Auteur
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Extrait *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contenu * (HTML supporté)
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleContentChange(e.target.value)}
              required
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
            <p className="mt-2 text-sm text-gray-500">
              Temps de lecture: {formData.readTime}
            </p>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              SEO & Référencement
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, metaDescription: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  {formData.metaDescription.length}/160 caractères
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mots-clés (séparés par des virgules)
                </label>
                <input
                  type="text"
                  value={keywordsInput}
                  onChange={(e) => handleKeywordsChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formData.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
