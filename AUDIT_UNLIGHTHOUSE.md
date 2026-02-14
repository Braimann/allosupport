# Audit SEO Unlighthouse — AlloSupport.ma

**Durée totale :** ~15 min (scan complet)  
**Outil :** [Unlighthouse](https://unlighthouse.dev/) (Lighthouse en batch via sitemap)

---

## Étape 1 : Vérifier l’installation (30 s)

```bash
cd allosupport
npm install
npx unlighthouse --version
```

Sous Windows PowerShell, enchaîner avec `;` : `npm install; npx unlighthouse --version`

Si besoin d’installer en local (déjà fait si vous avez lancé `npm install`) :

```bash
npm install --save-dev @unlighthouse/cli
```

---

## Étape 2 : Lancer le scan (≈10 min pour 76 URLs)

**Scan complet (toutes les URLs du sitemap) :**

```bash
npm run audit:seo
```

Équivalent manuel :

```bash
npx unlighthouse \
  --site https://allosupport.ma \
  --sitemap https://allosupport.ma/sitemap.xml \
  --budget 70 \
  --throttle \
  --cache false \
  --reporter json,html,csv \
  --output-path ./unlighthouse-report
```

**Scan rapide (15 pages, ~2 min) :**

```bash
npm run audit:seo:quick
```

| Option        | Rôle |
|---------------|------|
| `--site`      | URL du site à auditer |
| `--sitemap`   | Crawl des URLs du sitemap |
| `--budget 70` | Seuil SEO : pages &lt; 70 = à corriger |
| `--throttle`  | Simule 4G (débit réaliste) |
| `--cache false` | Pas de cache, résultats à jour |
| `--reporter`  | Sorties : JSON, HTML, CSV |
| `--output-path` | Dossier des rapports |

---

## Étape 3 : Consulter le rapport

Unlighthouse démarre un serveur local. Ouvrir dans le navigateur :

**http://localhost:5678**

(Souvent ouvert automatiquement à la fin du scan.)

Sous Windows :

```powershell
start http://localhost:5678
```

---

## Étape 4 : Fichiers générés

Dans `./unlighthouse-report/` :

- `index.html` — Dashboard interactif
- `ci-result.json` — Données brutes (scores, audits)
- `report.csv` — Export pour Excel

Sauvegarder un rapport daté :

```bash
# Linux / macOS
cp -r ./unlighthouse-report ./allosupport-audit-$(date +%Y%m%d)

# Windows PowerShell (exécuter les commandes avec ; au lieu de &&)
Copy-Item -Recurse ./unlighthouse-report ./allosupport-audit-$(Get-Date -Format "yyyyMMdd")
```

---

## Étape 5 : Analyse rapide en CLI (optionnel)

**Pages avec SEO &lt; 60 (à traiter en priorité) :**

Avec **jq** installé :

```bash
# Linux / macOS
cat ./unlighthouse-report/ci-result.json | jq -r '.routes[] | select(.report.audits.seo.score < 60) | "\(.path): SEO \(.report.audits.seo.score)/100"'
```

**Score moyen du site :**

```bash
cat ./unlighthouse-report/ci-result.json | jq '.summary.score'
```

Exemple de sortie :

```json
{
  "performance": 82,
  "seo": 68,
  "accessibility": 91,
  "bestPractices": 88
}
```

---

## Étape 6 : Rapport Markdown (template)

Après le scan, compléter manuellement les scores dans un fichier `analyse-unlighthouse.md` :

```markdown
# Rapport Audit SEO AlloSupport.ma
**Date :** YYYY-MM-DD
**Outil :** Unlighthouse
**Pages scannées :** 76

## Scores globaux
- Performance : XX/100
- SEO : XX/100
- Accessibilité : XX/100
- Best Practices : XX/100

## Pages critiques (SEO < 60)
[Coller ici la sortie de l’étape 5]

## Actions prioritaires
1. Enrichir le contenu des pages < 60
2. Compléter les meta descriptions manquantes
3. Réduire le duplicate content sur les pages villes
4. Rendre les pages tools en SSR (contenu indexable)

## Estimation d’impact
- Pages mieux indexées
- Trafic organique
- CA potentiel
```

---

## Scripts npm disponibles

| Script              | Description |
|---------------------|-------------|
| `npm run audit:seo` | Scan complet (sitemap, ~10 min) |
| `npm run audit:seo:quick` | Scan 15 pages (~2 min) |

---

## Bonnes pratiques

- Lancer l’audit sur le **site en production** (https://allosupport.ma).
- Relancer après grosses mises à jour (nouveau contenu, refonte SEO).
- Conserver les rapports datés pour suivre l’évolution des scores.
