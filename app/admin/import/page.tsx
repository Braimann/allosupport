"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Loader2, CheckCircle, XCircle } from "lucide-react";
import { onAuthChange, isAdmin } from "@/lib/firebase/auth-service";
import { createPost, generateSlug, estimateReadTime, BLOG_CATEGORIES, BlogPostInput } from "@/lib/firebase/blog-service";
import { getMarkdownTableRegex } from "@/lib/markdown-table-regex";

interface ParsedArticle {
  title: string;
  titleSEO: string;
  metaDescription: string;
  content: string;
  category: string;
  images: Array<{ alt: string }>;
  /** MDX: slug from frontmatter */
  slug?: string;
  /** MDX: author from frontmatter */
  author?: string;
  /** MDX: image URL from frontmatter */
  imageUrl?: string;
  /** MDX: keywords from frontmatter/tags */
  keywords?: string[];
  /** MDX: reading time e.g. "8 min de lecture" */
  readTime?: string;
  /** true if parsed from .mdx (single article) */
  fromMdx?: boolean;
}

export default function ImportPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);
  const [fileContent, setFileContent] = useState<string>("");
  const [parsedArticles, setParsedArticles] = useState<ParsedArticle[]>([]);
  const [importResults, setImportResults] = useState<Array<{ title: string; success: boolean; error?: string }>>([]);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user || !isAdmin(user)) {
        router.push("/admin/login");
        return;
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const parseMarkdown = (content: string): ParsedArticle[] => {
    const articles: ParsedArticle[] = [];
    
    // Trouver tous les indices où commencent les articles
    const articleIndices: number[] = [];
    const articleRegex = /^## Article \d+\s*:/gm;
    let match;
    while ((match = articleRegex.exec(content)) !== null) {
      articleIndices.push(match.index);
    }
    
    console.log(`🔍 ${articleIndices.length} articles trouvés dans le fichier`);
    
    // Extraire chaque article
    for (let i = 0; i < articleIndices.length; i++) {
      const startIndex = articleIndices[i];
      const endIndex = i < articleIndices.length - 1 ? articleIndices[i + 1] : content.length;
      const section = content.substring(startIndex, endIndex);
      
      // Extraire le titre depuis "## Article X : Titre"
      const titleMatch = section.match(/^## Article \d+\s*:\s*(.+?)(?:\n|$)/m);
      if (!titleMatch) {
        console.warn(`⚠️ Impossible d'extraire le titre de la section ${i + 1}`);
        continue;
      }
      
      const title = titleMatch[1].trim();
      const fullSection = section;
      
      // Extraire les métadonnées
      const titleSEOMatch = fullSection.match(/\*\*Title SEO :\*\* (.+)/);
      const metaDescMatch = fullSection.match(/\*\*Meta Description :\*\* (.+)/);
      
      // Extraire les images
      const images: Array<{ alt: string }> = [];
      const imagesMatch = fullSection.match(/\*\*Images suggérées :\*\*([\s\S]*?)(?=\n---|\n#|$)/);
      if (imagesMatch) {
        const imageLines = imagesMatch[1].split("\n");
        for (const line of imageLines) {
          const altMatch = line.match(/alt:\s*"(.+?)"/);
          if (altMatch) {
            images.push({ alt: altMatch[1] });
          }
        }
      }
      
      // Extraire le contenu : tout ce qui vient APRÈS le dernier "---" dans cette section
      // Le contenu commence par "# Titre" (H1)
      // Structure: métadonnées, puis "---", puis "# Titre", puis contenu
      
      // Méthode 1 : Chercher directement le pattern "---\n\n# Titre\n\nContenu"
      let articleContent = "";
      const contentMatch1 = fullSection.match(/---\s*\n\s*#\s+[^\n]+\n\n([\s\S]+?)(?=\n---\s*\n\s*## Article|\*\*FIN DES|$)/);
      if (contentMatch1 && contentMatch1[1]) {
        articleContent = contentMatch1[1].trim();
      }
      
      // Méthode 2 (fallback) : Diviser par "---" et chercher la partie avec H1
      if (!articleContent || articleContent.length < 200) {
        const parts = fullSection.split(/^---$/m);
        console.log(`  📦 Section divisée en ${parts.length} parties`);
        
        for (let i = parts.length - 1; i >= 0; i--) {
          const part = parts[i].trim();
          // Si cette partie commence par un H1 et fait plus de 200 caractères, c'est le contenu
          if (part.match(/^#\s+.+$/m) && part.length > 200) {
            articleContent = part;
            console.log(`  ✅ Contenu trouvé dans partie ${i + 1} (${part.length} caractères)`);
            break;
          }
        }
      }
      
      // Méthode 3 (dernier fallback) : Prendre la dernière partie significative qui n'est pas des métadonnées
      if (!articleContent || articleContent.length < 200) {
        const parts = fullSection.split(/^---$/m);
        for (let i = parts.length - 1; i >= 0; i--) {
          const part = parts[i].trim();
          if (part.length > 200 && 
              !part.includes("Title SEO") && 
              !part.includes("Meta Description") &&
              !part.includes("Images suggérées") &&
              !part.match(/^## Article/)) {
            articleContent = part;
            console.log(`  ✅ Contenu trouvé (fallback) dans partie ${i + 1}`);
            break;
          }
        }
      }

      // Vérifier qu'on a bien du contenu
      if (!articleContent || articleContent.length < 200) {
        console.warn(`Article "${title}" ignoré : contenu trop court (${articleContent?.length || 0} caractères)`);
        continue;
      }
      
      // Déterminer la catégorie
      let category = "Dépannage";
      if (title.toLowerCase().includes("sécurité") || title.toLowerCase().includes("antivirus") || title.toLowerCase().includes("télétravail")) {
        category = "Cybersécurité";
      } else if (title.toLowerCase().includes("windows") || title.toLowerCase().includes("installation")) {
        category = "Dépannage";
      } else if (title.toLowerCase().includes("maintenance") || title.toLowerCase().includes("pme")) {
        category = "Infogérance";
      }

      console.log(`✅ Article détecté: "${title}" (${articleContent.length} caractères, catégorie: ${category})`);

      articles.push({
        title,
        titleSEO: titleSEOMatch ? titleSEOMatch[1].trim() : title,
        metaDescription: metaDescMatch ? metaDescMatch[1].trim() : "",
        content: articleContent,
        category,
        images,
      });
    }

    console.log(`📊 Total: ${articles.length} articles parsés`);
    return articles;
  };

  /** Parse un fichier .mdx (un article avec frontmatter YAML) */
  const parseMdxFile = (content: string): ParsedArticle[] => {
    const start = content.indexOf("---\n");
    const end = content.indexOf("\n---\n", start + 4);
    if (start === -1 || end === -1) return [];
    const frontmatter = content.slice(start + 4, end).trim();
    const body = content.slice(end + 5).trim();

    const get = (key: string): string => {
      const re = new RegExp(`^${key}:\\s*(.+)$`, "m");
      const m = frontmatter.match(re);
      if (!m) return "";
      return m[1].trim().replace(/^["']|["']$/g, "");
    };
    const slug = get("slug") || "";
    const title = get("title") || "Sans titre";
    const description = get("description") || "";
    const categoryRaw = get("category") || "Dépannage";
    const author = get("author") || "Équipe AlloSupport";
    const readingTime = get("readingTime") || "8";
    const featuredImage = get("featuredImage") || "";
    const metaDesc =
      frontmatter.match(/metaDescription:\s*(.+?)(?=\n|$)/m)?.[1]?.trim()?.replace(/^["']|["']$/g, "") ||
      frontmatter.match(/seo:\s*\n[\s\S]*?metaDescription:\s*(.+?)(?=\n|$)/m)?.[1]?.trim()?.replace(/^["']|["']$/g, "") ||
      description;
    const keywordsMatch = frontmatter.match(/keywords:\s*\n([\s\S]*?)(?=\n[A-Za-z]|\n---|$)/);
    const keywords: string[] = [];
    if (keywordsMatch) {
      keywordsMatch[1].split("\n").forEach((line) => {
        const m = line.match(/-\s*["']?(.+?)["']?(?=\s*$|\s*#)/);
        if (m) keywords.push(m[1].trim());
      });
    }
    const tagsMatch = frontmatter.match(/tags:\s*\n([\s\S]*?)(?=\n[A-Za-z]|\n---|$)/);
    if (tagsMatch) {
      tagsMatch[1].split("\n").forEach((line) => {
        const m = line.match(/-\s*["']?(.+?)["']?(?=\s*$|\s*#)/);
        if (m) keywords.push(m[1].trim());
      });
    }
    const categoryMap: Record<string, string> = {
      "entreprise-maroc": "Infogérance",
      "Infogérance": "Infogérance",
      "Dépannage": "Dépannage",
      "Cybersécurité": "Cybersécurité",
      "Productivité": "Productivité",
      "Cloud": "Cloud",
      "SEO": "SEO",
    };
    const category = categoryMap[categoryRaw] || "Infogérance";
    const imageUrl = featuredImage.startsWith("http") ? featuredImage : featuredImage ? `https://allosupport.ma${featuredImage.startsWith("/") ? "" : "/"}${featuredImage}` : "";

    const htmlContent = markdownToHTMLWithTables(body);
    const excerpt = description || body.slice(0, 200).replace(/\n/g, " ").trim() + "...";
    const readTimeStr = readingTime && !readingTime.includes("min") ? `${readingTime} min de lecture` : readingTime || estimateReadTime(htmlContent);

    return [
      {
        title,
        titleSEO: title,
        metaDescription: metaDesc || excerpt,
        content: htmlContent,
        category,
        images: [{ alt: title }],
        slug: slug || undefined,
        author,
        imageUrl: imageUrl || undefined,
        keywords: keywords.length ? keywords : undefined,
        readTime: readTimeStr,
        fromMdx: true,
      },
    ];
  };

  const markdownToHTMLWithTables = (md: string): string => {
    let html = md;
    html = html.replace(getMarkdownTableRegex(), (_, headerRow, bodyRows) => {
      const headers = headerRow.split("|").map((c: string) => c.trim()).filter(Boolean);
      const rows = bodyRows.trim().split("\n").map((row: string) => row.split("|").map((c: string) => c.trim()).filter(Boolean));
      let table = '<table class="w-full border border-gray-300 my-4"><thead><tr>';
      headers.forEach((h: string) => { table += `<th class="border border-gray-300 px-3 py-2 text-left bg-gray-100">${h}</th>`; });
      table += "</tr></thead><tbody>";
      rows.forEach((row: string[]) => {
        table += "<tr>";
        row.forEach((cell: string) => { table += `<td class="border border-gray-300 px-3 py-2">${cell}</td>`; });
        table += "</tr>";
      });
      table += "</tbody></table>";
      return table;
    });
    html = html.replace(/^### (.+)$/gm, "<h3 class=\"text-xl font-bold mt-6 mb-2 text-gray-900\">$1</h3>");
    html = html.replace(/^## (.+)$/gm, "<h2 class=\"text-2xl font-bold mt-8 mb-3 text-gray-900\">$1</h2>");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline">$1</a>');
    html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
    html = html.replace(/(^|\n)(((?:<li>.*?<\/li>)(?:\n<li>.*?<\/li>)*))/g, '$1<ul class="list-disc pl-6 my-3 space-y-1">$2</ul>');
    html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-200" />');
    html = html.split("\n\n").map((para) => {
      const p = para.trim();
      if (!p) return "";
      if (p.startsWith("<")) return p;
      return `<p class="my-3 text-gray-700 leading-relaxed">${p}</p>`;
    }).join("\n");
    html = html.replace(/\n/g, "<br/>");
    return html;
  };

  const markdownToHTML = (markdown: string): string => {
    let html = markdown;
    html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/^\- (.+)$/gm, "<li>$1</li>");
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
    html = html.split("\n\n").map(para => {
      if (para.trim().startsWith("<")) return para;
      if (para.trim().length === 0) return "";
      return `<p>${para.trim()}</p>`;
    }).join("\n\n");
    html = html.replace(/\n/g, "<br/>");
    return html;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setFileContent(content);
      setImportResults([]);
      const isMdx = file.name.toLowerCase().endsWith(".mdx");
      const articles = isMdx ? parseMdxFile(content) : parseMarkdown(content);
      setParsedArticles(articles);
    };
    reader.readAsText(file);
  };

  const handleImport = async () => {
    if (parsedArticles.length === 0) {
      alert("Aucun article à importer. Veuillez d'abord charger le fichier markdown.");
      return;
    }

    setImporting(true);
    setImportResults([]);

    const results: Array<{ title: string; success: boolean; error?: string }> = [];

    for (const article of parsedArticles) {
      try {
        const categoryInfo = BLOG_CATEGORIES.find(c => c.name === article.category) || BLOG_CATEGORIES[0];
        const slug = generateSlug(article.title);
        const excerpt = article.metaDescription || article.content.substring(0, 200).replace(/\n/g, " ").trim() + "...";
        const htmlContent = markdownToHTML(article.content);

        const keywords: string[] = [];
        const titleWords = article.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        keywords.push(...titleWords);
        if (article.metaDescription) {
          const descWords = article.metaDescription.toLowerCase().split(/\s+/).filter(w => w.length > 3);
          keywords.push(...descWords.slice(0, 5));
        }

        const postData: BlogPostInput = {
          slug,
          title: article.title,
          excerpt,
          content: htmlContent,
          category: categoryInfo.name,
          categoryColor: categoryInfo.color,
          imageUrl: "",
          imageAlt: article.images[0]?.alt || article.title,
          metaDescription: article.metaDescription || excerpt,
          keywords: Array.from(new Set(keywords)),
          author: "AlloSupport.ma",
          readTime: estimateReadTime(htmlContent),
          published: true,
        };

        const id = await createPost(postData);
        if (id) {
          results.push({ title: article.title, success: true });
        } else {
          results.push({ title: article.title, success: false, error: "Erreur lors de la création" });
        }
      } catch (error) {
        results.push({ 
          title: article.title, 
          success: false, 
          error: error instanceof Error ? error.message : "Erreur inconnue" 
        });
      }

      // Attendre un peu entre chaque article
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setImportResults(results);
    setImporting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Importer des articles</h1>
          <p className="text-gray-600 mt-2">
            Importez les articles depuis le fichier markdown ARTICLES_BLOG_ALLOSUPPORT.md
          </p>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fichier Markdown (ARTICLES_BLOG_ALLOSUPPORT.md)
          </label>
          <input
            type="file"
            accept=".md"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600"
          />
          {parsedArticles.length > 0 ? (
            <p className="mt-4 text-sm text-green-600 font-semibold">
              ✅ {parsedArticles.length} article(s) détecté(s) - Le bouton d'import apparaîtra ci-dessous
            </p>
          ) : fileContent ? (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-semibold mb-2">
                ⚠️ Aucun article détecté
              </p>
              <p className="text-xs text-yellow-700 mb-1">
                Le fichier a été chargé ({fileContent.length} caractères) mais aucun article n'a été détecté.
              </p>
              <p className="text-xs text-yellow-700 mb-1">
                Vérifiez que le fichier contient des articles au format :
              </p>
              <pre className="text-xs bg-yellow-100 p-2 rounded mt-2 overflow-x-auto">
{`## Article 1 : Titre de l'article

**Title SEO :** ...
**Meta Description :** ...
**Images suggérées :** ...

---

# Titre de l'article

Contenu...`}
              </pre>
              <p className="text-xs text-yellow-700 mt-2">
                💡 Ouvrez la console du navigateur (F12 → Console) pour voir les détails du parsing
              </p>
            </div>
          ) : (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                💡 Sélectionnez le fichier <code className="bg-blue-100 px-1 rounded">ARTICLES_BLOG_ALLOSUPPORT.md</code> depuis votre dossier du projet
              </p>
            </div>
          )}
        </div>

        {/* Articles Preview */}
        {parsedArticles.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Articles à importer ({parsedArticles.length})
            </h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {parsedArticles.map((article, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{article.title}</p>
                  <p className="text-sm text-gray-600">Catégorie: {article.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Import Button */}
        {parsedArticles.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <button
              onClick={handleImport}
              disabled={importing}
              className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {importing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Import en cours...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Importer {parsedArticles.length} article(s)
                </>
              )}
            </button>
          </div>
        )}

        {/* Results */}
        {importResults.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Résultats de l'import</h2>
            <div className="space-y-2">
              {importResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg flex items-center gap-3 ${
                    result.success ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <div className="flex-1">
                    <p className={`font-semibold ${result.success ? "text-green-900" : "text-red-900"}`}>
                      {result.title}
                    </p>
                    {result.error && (
                      <p className="text-sm text-red-600">{result.error}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                💡 <strong>Note:</strong> N'oubliez pas d'ajouter les images via l'édition de chaque article dans le dashboard.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
