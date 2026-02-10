/**
 * Regex pour les tableaux Markdown (ligne de séparateur : tirets, deux-points, espaces, pipes).
 * Dans un fichier séparé pour éviter que Tailwind JIT interprète la classe de caractères
 * comme une classe arbitraire si elle était dans app/**.
 * Retourne une nouvelle instance à chaque appel (flag g conserve lastIndex).
 */
export function getMarkdownTableRegex(): RegExp {
  return /\|(.+)\|\n\|(?:-|:|\s|\|)+\|\n((?:\|.+\|\n?)+)/g;
}
