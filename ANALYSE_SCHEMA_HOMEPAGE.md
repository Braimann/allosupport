# Analyse Schema.org – Page d'accueil (Homepage) AlloSupport.ma

**URL analysée :** https://allosupport.ma  
**Source du schema :** `app/layout.tsx` (injecté dans `<head>` pour toutes les pages, donc actif sur la home).

---

## 1. Schémas actuellement présents

### 1.1 Un seul bloc JSON-LD : `ProfessionalService`

La home n’a **qu’un seul** script `application/ld+json`, défini dans le layout racine :

| Propriété | Valeur actuelle |
|-----------|-----------------|
| **@type** | `ProfessionalService` |
| **@id** | `https://allosupport.ma` |
| **name** | AlloSupport Maroc |
| **description** | Service de dépannage informatique à domicile au Maroc. Intervention rapide à Casablanca, Rabat, Fès, Marrakech et Agadir. |
| **url** | https://allosupport.ma |
| **logo** | https://allosupport.ma/logo.png |
| **image** | https://allosupport.ma/og-image.jpg |
| **telephone** | +212775237038 (via `GOOGLE_BUSINESS.PHONE`) |
| **priceRange** | `$$` |
| **address** | PostalAddress : streetAddress "Service à domicile", Casablanca, Casablanca-Settat, 20000, MA |
| **geo** | GeoCoordinates 33.5731, -7.5898 |
| **areaServed** | 5 villes (Casablanca, Rabat, Fès, Marrakech, Agadir) avec `containedInPlace` Maroc |
| **serviceType** | Dépannage informatique à domicile |
| **provider** | Organization "AlloSupport Maroc" |
| **aggregateRating** | Inclus **uniquement si** `GOOGLE_BUSINESS.HAS_REVIEWS && REVIEW_COUNT > 0` → actuellement **absent** (HAS_REVIEWS = false) |
| **openingHoursSpecification** | Lun–Sam 08:00–20:00, Dimanche 10:00–18:00 |
| **sameAs** | SHARE_URL Google, Facebook, lien avis Google |
| **contactPoint** | ContactPoint (téléphone, customer service, langues fr/ar, areaServed MA) |

**Injection :**  
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
```

### 1.2 Microdata (Footer)

Le composant `Footer` utilise des attributs Schema.org en microdata (`itemScope`, `itemType`, `itemProp`) pour l’adresse. Sur la home, ce bloc est en lazy load, donc présent après chargement. Ce n’est pas du JSON-LD mais peut être pris en compte par les moteurs pour l’adresse.

---

## 2. Points forts

- **Type adapté** : `ProfessionalService` est pertinent pour un service de dépannage / support (sous-type de `LocalBusiness`), et éligible aux rich results type “professionnel” / knowledge panel.
- **Identifiant stable** : `@id` pointe vers l’URL du site, cohérent pour le graphe d’entités.
- **Données locales complètes** : adresse, geo, `areaServed` (villes + pays), horaires, téléphone.
- **Contact** : `contactPoint` avec type, langues et zone couverte (MA).
- **Réseaux sociaux** : `sameAs` pour Google, Facebook et avis.
- **Conditionnel propre** : `aggregateRating` n’est ajouté que lorsque des avis existent, ce qui évite un rating à 0 ou incohérent.

---

## 3. Limites et recommandations

### 3.1 Type : ProfessionalService vs LocalBusiness

- **Actuel :** `ProfessionalService`.
- **Recommandation :** Garder `ProfessionalService` pour la home (service B2B/B2C). Pour un maximum de compatibilité avec la recherche locale (ex. “dépannage informatique Casablanca”), on peut **en plus** ajouter un second bloc `LocalBusiness` (même contenu, type différent) ou documenter que Google recommande souvent `LocalBusiness` pour les fiches établissement ; ici le choix actuel reste valide pour un service “pro”.

### 3.2 Pas de schéma `WebSite`

- **Manque :** Aucun `WebSite` avec `url`, `potentialAction` (SearchAction), etc.
- **Impact :** Pas d’éligibilité explicite aux rich results “sitelinks search box” ni de lien fort entre l’entité “site” et l’entité “entreprise”.
- **Recommandation :** Ajouter un second JSON-LD de type `WebSite` :
  - `@id`: `https://allosupport.ma/#website`
  - `url`: `https://allosupport.ma`
  - `name`, `description`
  - `publisher`: référence à l’organisation (ou au ProfessionalService via @id)
  - Optionnel : `potentialAction` (SearchAction) si une recherche existe sur le site.

### 3.3 Adresse : “Service à domicile”

- **Actuel :** `streetAddress: "Service à domicile"`.
- **Recommandation :** Si vous avez une adresse physique (siège, bureau), mettre une vraie adresse (rue, code postal). Si vous êtes 100 % à domicile / à distance, garder une formulation du type “Intervention à domicile” ou “Service à domicile” est acceptable, mais une adresse réelle renforce la confiance et le référencement local.

### 3.4 Horaires vs annonces (“8h–22h”)

- **Actuel :** Lun–Sam 08:00–20:00, Dim 10:00–18:00.
- **À vérifier :** Sur d’autres pages (ex. dépannage-informatique) vous indiquez “8h–22h” et “7j/7”. Si la réalité est 8h–22h tous les jours, aligner le schema de la home avec ces horaires pour cohérence et confiance.

### 3.5 Prix : `priceRange` “$$”

- **Actuel :** `priceRange: "$$"`.
- **Recommandation :** Pour le Maroc, une fourchette en MAD est plus parlante pour Google et l’utilisateur, ex. `"150 MAD - 500 MAD"` (comme sur la page dépannage), tout en restant factuel.

### 3.6 Avis (aggregateRating)

- **Actuel :** Pas d’`aggregateRating` (HAS_REVIEWS = false).
- **Recommandation :** Dès que vous avez des avis Google (ou autres) fiables, activer `HAS_REVIEWS` et renseigner `RATING` / `REVIEW_COUNT` dans `GOOGLE_BUSINESS` pour afficher les étoiles dans le schema sans rien casser.

### 3.7 Pas de BreadcrumbList sur la home

- **Constat :** Pas de `BreadcrumbList` sur la home.
- **Recommandation :** Sur la home, un breadcrumb minimal est optionnel (ex. “Accueil”). Priorité faible par rapport à l’ajout de `WebSite` et à l’alignement horaires/prix.

---

## 4. Synthèse et actions prioritaires

| Priorité | Action |
|----------|--------|
| **Haute** | Ajouter un schéma **WebSite** (avec `url`, `name`, `publisher`, optionnel `potentialAction`) pour la home. |
| **Haute** | Aligner **openingHoursSpecification** avec la réalité (ex. 8h–22h, 7j/7 si c’est le cas). |
| **Moyenne** | Remplacer **priceRange** “$$” par une fourchette en MAD (ex. “150 MAD - 500 MAD”) si elle reflète bien l’offre. |
| **Moyenne** | Si vous avez une adresse physique, mettre une vraie **streetAddress** (et code postal) dans `address`. |
| **Basse** | Activer **aggregateRating** dès que les avis Google sont en place (via `GOOGLE_BUSINESS`). |

---

## 5. Validation

- **Test recommandé :** [Google Rich Results Test](https://search.google.com/test/rich-results) en collant l’URL https://allosupport.ma.
- **Validator :** [Schema.org Validator](https://validator.schema.org/) en collant le JSON du `organizationSchema` pour vérifier qu’il n’y a pas d’erreurs de syntaxe ou de propriétés invalides.

---

*Document généré à partir du code dans `app/layout.tsx` et `lib/constants/google-business.ts`.*
