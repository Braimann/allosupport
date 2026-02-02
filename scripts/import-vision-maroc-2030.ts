/**
 * Importe l'article Vision Maroc 2030 (MDX) dans Firebase.
 * Usage: npx ts-node -r tsconfig-paths/register scripts/import-vision-maroc-2030.ts
 * Ou: node --loader ts-node/esm scripts/import-vision-maroc-2030.ts
 * Avec .env.local chargé si besoin (dotenv).
 */

import { readFileSync } from "fs";
import { join } from "path";
import {
  createPost,
  estimateReadTime,
  BlogPostInput,
} from "../lib/firebase/blog-service";

const MDX_PATH = join(
  process.cwd(),
  "content",
  "blog",
  "vision-maroc-2030-transformation-digitale-pme.mdx"
);

function extractBody(mdxContent: string): string {
  const start = mdxContent.indexOf("---\n");
  const end = mdxContent.indexOf("\n---\n", start + 4);
  if (start === -1 || end === -1) return mdxContent;
  return mdxContent.slice(end + 5).trim();
}

function markdownToHTML(md: string): string {
  let html = md;

  // Tables: | ... | ... | \n|---|---|\n|...|
  const tableRegex = /\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g;
  html = html.replace(tableRegex, (_, headerRow, bodyRows) => {
    const headers = headerRow.split("|").map((c: string) => c.trim()).filter(Boolean);
    const rows = bodyRows.trim().split("\n").map((row: string) =>
      row.split("|").map((c: string) => c.trim()).filter(Boolean)
    );
    let table = "<table class=\"w-full border border-gray-300 my-4\"><thead><tr>";
    headers.forEach((h: string) => {
      table += `<th class="border border-gray-300 px-3 py-2 text-left bg-gray-100">${h}</th>`;
    });
    table += "</tr></thead><tbody>";
    rows.forEach((row: string[]) => {
      table += "<tr>";
      row.forEach((cell: string) => {
        table += `<td class="border border-gray-300 px-3 py-2">${cell}</td>`;
      });
      table += "</tr>";
    });
    table += "</tbody></table>";
    return table;
  });

  // Headings (do before paragraphs so we don't wrap in <p>)
  html = html.replace(/^### (.+)$/gm, "<h3 class=\"text-xl font-bold mt-6 mb-2 text-gray-900\">$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2 class=\"text-2xl font-bold mt-8 mb-3 text-gray-900\">$1</h2>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 underline">$1</a>');

  // Unordered lists: - item at line start
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(^|\n)((<li>.*?<\/li>)(?:\n<li>.*?<\/li>)*)/g, "$1<ul class=\"list-disc pl-6 my-3 space-y-1\">$2</ul>");

  // Checklist - □ and **
  html = html.replace(/^- □ (.+)$/gm, "<li class=\"flex items-center gap-2\"><span class=\"text-gray-400\">□</span> $1</li>");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr class=\"my-8 border-gray-200\" />");

  // Paragraphs: double newline -> </p><p>
  const lines = html.split("\n");
  const blocks: string[] = [];
  let current: string[] = [];
  const flush = () => {
    if (current.length) {
      const block = current.join(" ").trim();
      if (block && !block.startsWith("<")) {
        blocks.push(`<p class="my-3 text-gray-700 leading-relaxed">${block}</p>`);
      } else if (block) {
        blocks.push(block);
      }
      current = [];
    }
  };
  for (const line of lines) {
    const t = line.trim();
    if (t === "") {
      flush();
    } else if (t.startsWith("<h") || t.startsWith("<ul") || t.startsWith("<li") || t.startsWith("<table") || t.startsWith("<hr") || t.startsWith("</")) {
      flush();
      blocks.push(t);
    } else {
      current.push(t);
    }
  }
  flush();
  html = blocks.join("\n");

  return html;
}

async function main() {
  console.log("📖 Lecture du fichier MDX...");
  const raw = readFileSync(MDX_PATH, "utf-8");
  const body = extractBody(raw);
  const contentHtml = markdownToHTML(body);

  const slug = "vision-maroc-2030-transformation-digitale-pme";
  const title = "Vision Maroc 2030 : Comment la Transformation Digitale Révolutionne les PME Marocaines";
  const excerpt = "Découvrez comment la Vision Maroc 2030 transforme le paysage digital des PME. Enjeux, opportunités et solutions informatiques pour réussir votre transition numérique.";
  const metaDescription = "Guide complet sur la Vision Maroc 2030 et son impact sur la digitalisation des PME. Opportunités, défis informatiques et solutions pour réussir en 2026.";
  const keywords = [
    "vision maroc 2030",
    "transformation digitale maroc",
    "digitalisation pme maroc",
    "maroc digital 2030",
    "infrastructure informatique maroc",
    "transformation digitale",
    "digitalisation pme maroc",
    "informatique entreprise",
  ];

  const post: BlogPostInput = {
    slug,
    title,
    excerpt,
    content: contentHtml,
    category: "Infogérance",
    categoryColor: "bg-orange-500",
    imageUrl: "https://allosupport.ma/blog/vision-maroc-2030-digital.jpg",
    imageAlt: "Vision Maroc 2030 et transformation digitale des PME",
    metaDescription,
    keywords,
    author: "Équipe AlloSupport",
    readTime: "8 min de lecture",
    published: true,
  };

  post.readTime = estimateReadTime(contentHtml);

  console.log("📤 Création de l'article dans Firebase...");
  const id = await createPost(post);
  if (id) {
    console.log("✅ Article créé avec succès. ID:", id);
    console.log("   URL: https://allosupport.ma/blog/" + slug);
  } else {
    console.error("❌ Échec de la création (Firebase non initialisé ou erreur).");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
