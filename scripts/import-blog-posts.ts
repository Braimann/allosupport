/**
 * Script d'import des articles de blog depuis le fichier markdown vers Firebase
 * 
 * Usage: npx ts-node scripts/import-blog-posts.ts
 */

import { readFileSync } from "fs";
import { join } from "path";
import { createPost, generateSlug, estimateReadTime, BLOG_CATEGORIES, BlogPostInput } from "../lib/firebase/blog-service";

// Mapping des catégories depuis les articles vers les catégories Firebase
const categoryMapping: Record<string, { name: string; color: string }> = {
  "Dépannage": { name: "Dépannage", color: "bg-blue-500" },
  "Sécurité": { name: "Cybersécurité", color: "bg-red-500" },
  "Tuto Windows": { name: "Dépannage", color: "bg-blue-500" },
  "Télétravail": { name: "Productivité", color: "bg-green-500" },
  "Optimisation": { name: "Dépannage", color: "bg-blue-500" },
  "Maintenance": { name: "Infogérance", color: "bg-orange-500" },
};

// Fonction pour parser le fichier markdown et extraire les articles
function parseMarkdownFile(filePath: string): Array<{
  title: string;
  titleSEO: string;
  metaDescription: string;
  images: Array<{ alt: string }>;
  content: string;
  category: string;
}> {
  const content = readFileSync(filePath, "utf-8");
  const articles: Array<{
    title: string;
    titleSEO: string;
    metaDescription: string;
    images: Array<{ alt: string }>;
    content: string;
    category: string;
  }> = [];

  // Diviser par les séparateurs "---"
  const sections = content.split(/^---$/gm).filter(s => s.trim().length > 0);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i].trim();
    
    // Vérifier si c'est un article (contient "## Article")
    if (!section.includes("## Article")) continue;

    // Extraire les métadonnées
    const titleMatch = section.match(/## Article \d+ : (.+)/);
    const titleSEOMatch = section.match(/\*\*Title SEO :\*\* (.+)/);
    const metaDescMatch = section.match(/\*\*Meta Description :\*\* (.+)/);
    const imagesMatch = section.match(/\*\*Images suggérées :\*\*([\s\S]*?)(?=\n---|\n#|$)/);
    
    // Extraire le contenu (après le premier #)
    const contentMatch = section.match(/^# (.+?)\n\n([\s\S]+)$/m);
    
    if (!titleMatch || !contentMatch) continue;

    const title = titleMatch[1].trim();
    const titleSEO = titleSEOMatch ? titleSEOMatch[1].trim() : title;
    const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : "";
    
    // Extraire les images
    const images: Array<{ alt: string }> = [];
    if (imagesMatch) {
      const imageLines = imagesMatch[1].split("\n");
      for (const line of imageLines) {
        const altMatch = line.match(/alt:\s*"(.+?)"/);
        if (altMatch) {
          images.push({ alt: altMatch[1] });
        }
      }
    }

    // Déterminer la catégorie depuis le titre
    let category = "Dépannage";
    if (title.toLowerCase().includes("sécurité") || title.toLowerCase().includes("antivirus") || title.toLowerCase().includes("télétravail")) {
      category = "Sécurité";
    } else if (title.toLowerCase().includes("windows") || title.toLowerCase().includes("installation")) {
      category = "Tuto Windows";
    } else if (title.toLowerCase().includes("maintenance") || title.toLowerCase().includes("pme")) {
      category = "Maintenance";
    } else if (title.toLowerCase().includes("télétravail")) {
      category = "Télétravail";
    }

    const fullContent = contentMatch[2].trim();

    articles.push({
      title,
      titleSEO,
      metaDescription,
      images,
      content: fullContent,
      category,
    });
  }

  return articles;
}

// Fonction pour convertir le markdown en HTML simple
function markdownToHTML(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Lists
  html = html.replace(/^\- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    return `<ul>${match}</ul>`;
  });

  // Paragraphs
  html = html.split("\n\n").map(para => {
    if (para.trim().startsWith("<")) return para;
    if (para.trim().length === 0) return "";
    return `<p>${para.trim()}</p>`;
  }).join("\n\n");

  // Line breaks
  html = html.replace(/\n/g, "<br/>");

  return html;
}

// Fonction principale d'import
async function importArticles() {
  console.log("🚀 Démarrage de l'import des articles...\n");

  const markdownPath = join(process.cwd(), "ARTICLES_BLOG_ALLOSUPPORT.md");
  
  try {
    const articles = parseMarkdownFile(markdownPath);
    console.log(`✅ ${articles.length} articles trouvés dans le fichier markdown\n`);

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      console.log(`\n📝 Import de l'article ${i + 1}/${articles.length}: "${article.title}"`);

      // Déterminer la catégorie
      const categoryInfo = categoryMapping[article.category] || BLOG_CATEGORIES[0];
      
      // Générer le slug
      const slug = generateSlug(article.title);
      
      // Extraire un excerpt depuis le contenu (premiers 200 caractères)
      const excerpt = article.metaDescription || article.content.substring(0, 200).replace(/\n/g, " ").trim() + "...";
      
      // Convertir le contenu en HTML
      const htmlContent = markdownToHTML(article.content);
      
      // Extraire les keywords depuis le titre et la description
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
        imageUrl: "", // L'utilisateur devra ajouter les images via l'admin
        imageAlt: article.images[0]?.alt || article.title,
        metaDescription: article.metaDescription || excerpt,
        keywords: [...new Set(keywords)], // Supprimer les doublons
        author: "AlloSupport.ma",
        readTime: estimateReadTime(htmlContent),
        published: true, // Publier directement
      };

      try {
        const id = await createPost(postData);
        if (id) {
          console.log(`  ✅ Article créé avec succès (ID: ${id})`);
          successCount++;
        } else {
          console.log(`  ❌ Erreur lors de la création`);
          errorCount++;
        }
      } catch (error) {
        console.error(`  ❌ Erreur:`, error);
        errorCount++;
      }

      // Attendre un peu entre chaque article pour éviter de surcharger Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`\n\n✅ Import terminé !`);
    console.log(`   ✅ Succès: ${successCount}`);
    console.log(`   ❌ Erreurs: ${errorCount}`);
    console.log(`\n💡 N'oubliez pas d'ajouter les images via l'admin panel pour chaque article.`);

  } catch (error) {
    console.error("❌ Erreur lors de l'import:", error);
    process.exit(1);
  }
}

// Exécuter l'import
if (require.main === module) {
  importArticles()
    .then(() => {
      console.log("\n✅ Script terminé avec succès");
      process.exit(0);
    })
    .catch((error) => {
      console.error("\n❌ Erreur fatale:", error);
      process.exit(1);
    });
}

export { importArticles };
