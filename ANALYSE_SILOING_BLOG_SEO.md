# Analyse SEO – Siloing & maillage interne du blog AlloSupport

**Date :** Février 2026  
**Périmètre :** Blog Next.js (`/app/blog`, `/content/blog`), stratégie de maillage interne vers les pages mères (Money Pages).  
**Note :** Ce document décrit l’**existant actuel**, y compris les modifications déjà appliquées (liens ajoutés en siloing).

---

## 1. Contexte et objectifs du siloing

- **Principe :** Faire remonter le "link juice" des articles de blog (pages filles) vers des pages de conversion (pages mères) : dépannage, services, antivirus, etc.
- **Règles visées :** Un lien contextuel (premier paragraphe ou fin de section) ou un CTA par article vers la page mère pertinente ; ancres variées et descriptives (pas "cliquez ici").
- **Pages mères cibles identifiées sur le site :**
  - `/depannage-informatique` — Dépannage & réparation (silo principal)
  - `/antivirus-maroc` — Antivirus & cybersécurité
  - `/virus-ordinateur-maroc` — Suppression virus
  - `/pc-lent-solution` — PC lent
  - `/services` — Catalogue services (hub)
  - `/services/reseau-wifi` — Wi‑Fi / réseau
  - `/services/depannage-pc-mac` — Dépannage PC/Mac
  - `/contact` — Contact
  - `/devis` — Devis
  - `/support-pme` — Support PME

---

## 2. Structure technique du blog

| Élément | Détail |
|--------|--------|
| **Listing** | `app/blog/page.tsx` — liste des articles via `getPublishedPosts()` |
| **Articles dynamiques** | `app/blog/[slug]/page.tsx` — contenu depuis `content/blog/posts.ts` (HTML dans `content`) |
| **Articles en page dédiée** | Dossiers dans `app/blog/` avec leur propre `page.tsx` (priorité sur `[slug]`) |
| **Source de données** | `content/blog/posts.ts` — tableau `BLOG_POSTS` (slug, title, excerpt, content, category, imageUrl, etc.) |

**Slugs ayant une page statique dédiée** (définis dans `[slug]/page.tsx` → `STATIC_BLOG_SLUGS`) :  
`wifi-lent-maroc-2026`, `7-pannes-pc-courantes-2026-maroc`, `192-168-1-1-admin-login-maroc-routeur-2026`, `comparatif-maroc-telecom-inwi-orange-2026`.  
Le slug `meilleur-antivirus-gratuit-maroc-2026-comparatif` a **aussi** une page dédiée (`app/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif/page.tsx`) : Next.js sert cette route en priorité.

---

## 3. Inventaire des articles et liens internes (état actuel)

### 3.1 Articles en page dédiée (.tsx)

#### A. `meilleur-antivirus-gratuit-maroc-2026-comparatif/page.tsx`
- **Sujet :** Comparatif antivirus gratuits Maroc 2026 (Bitdefender, Kaspersky, Avast, etc.), installation, PME.
- **Liens internes actuels :**
  - `/blog` (breadcrumb / retour)
  - `/` (Accueil), `/blog/categories/securite` (breadcrumb)
  - **`/depannage-informatique`** — ancre : *« dépannage informatique à distance »* (dans le 2ᵉ paragraphe d’intro)
  - **`/antivirus-maroc`** — ancre : *« Découvrez notre offre antivirus et cybersécurité »* (dans la note Pros, après le tableau gratuit/payant)
  - `/contact` — ancre : *« demandez un audit gratuit »*
- **Évaluation :** Deux liens vers pages mères (dépannage + antivirus), ancres pertinentes et variées. Position : intro + CTA en fin de section.

#### B. `comparatif-maroc-telecom-inwi-orange-2026/page.tsx`
- **Sujet :** Comparatif opérateurs (Maroc Telecom, Inwi, Orange) : prix, vitesse, couverture, fiabilité.
- **Liens internes actuels :**
  - `/`, `/blog` (navigation)
  - **`/depannage-informatique`** — ancre : *« assistance dépannage réseau et box »* (dans le sous-titre du hero)
  - `/blog/wifi-lent-maroc-2026` (guide Wi‑Fi)
  - `/blog/192-168-1-1-admin-login-maroc-routeur-2026` (guide config, CTA, footer)
  - `/blog/7-pannes-pc-courantes-2026-maroc`, `/services`, `/blog`, `/contact`, `/devis` (footer)
- **Évaluation :** Lien dépannage présent en haut de page, ancre orientée “réseau/box”. Bon maillage vers autres articles blog + services.

#### C. `wifi-lent-maroc-2026/page.tsx`
- **Sujet :** Wi‑Fi lent au Maroc : causes, solutions, réglages box, répéteurs, par ville.
- **Liens internes actuels :**
  - `/`, `/blog`
  - **`/depannage-informatique`** — ancre : *« expert dépannage à distance »* (dans la liste “Ce que vous allez apprendre”)
  - `/services/reseau-wifi` (plusieurs occurrences : CTA, PME, cartes)
  - `/services/depannage-pc-mac` (carte lien)
  - `/blog/pc-lent-10-solutions-rapides-maroc` (article lié)
- **Évaluation :** Lien dépannage en début de contenu (liste pédagogique). Fort maillage vers `/services/reseau-wifi` et `/services/depannage-pc-mac`.

#### D. `7-pannes-pc-courantes-2026-maroc/page.tsx`
- **Sujet :** 7 pannes PC courantes (PC lent, surchauffe, écran bleu, virus, Wi‑Fi, démarrage, périphériques), solutions et dépannage.
- **Liens internes actuels :**
  - `/`, `/blog` (breadcrumb)
  - **`/depannage-informatique`** — ancre : *« dépannage informatique »* (en fin d’article, bloc “Voir aussi”)
  - **`/virus-ordinateur-maroc`** — ancre : *« Suppression virus ordinateur Maroc »*
  - **`/pc-lent-solution`** — ancre : *« PC lent solution »*
  - `/contact` (CTA)
- **Évaluation :** Silo dépannage/virus/PC lent déjà bien couvert ; ancres descriptives.

#### E. `192-168-1-1-admin-login-maroc-routeur-2026/page.tsx`
- **Sujet :** Accès 192.168.1.1, logins par FAI (MT, Inwi, Orange), configuration Wi‑Fi, contrôle parental.
- **Liens internes actuels :**
  - `/`, `/blog`
  - **`/depannage-informatique`** — ancre : *« Dépannage informatique »* (bloc liens en bas)
  - `/blog/wifi-lent-maroc-2026`, `/blog/7-pannes-pc-courantes-2026-maroc`, `/blog/pc-lent-10-solutions-rapides-maroc` (articles liés)
  - `/blog` (tous les articles)
- **Évaluation :** Lien dépannage présent ; maillage horizontal blog solide.

---

### 3.2 Articles servis par la route dynamique `[slug]` (contenu dans `content/blog/posts.ts`)

Le contenu affiché est le champ `content` (HTML généré via `toHtml()` ou chaînes HTML). Résumé des liens présents **dans ce contenu** (état actuel) :

| # | Slug | Sujet principal | Liens vers pages mères dans le contenu | Ancres (extraits) |
|---|------|------------------|----------------------------------------|-------------------|
| 1 | ordinateur-lent-astuces-booster-pc | PC lent, 5 astuces, SSD, Casablanca | **/depannage-informatique**, /devis, /services, /blog/vision-maroc-2030... | « Dépannage informatique à distance », « devis gratuit », « catalogue de services » |
| 2 | google-workspace-vs-office-365-pme-maroc | Comparatif GWS vs M365, PME Maroc | /contact, /blog/vision-maroc-2030, /devis | « Contactez-nous », « demander un devis » |
| 3 | ransomware-maroc-proteger-donnees-entreprise | Ransomware, protection données | /contact, /blog/vision-maroc-2030, /services | « Contactez-nous », « nos services » |
| 4 | vision-maroc-2030-transformation-digitale-pme | Vision 2030, digitalisation PME | /contact, /devis, tel, WhatsApp, /blog/ordinateur-lent..., /services, /support-pme, /devis, /contact | « audit gratuit », « Devis », « Services », « Support PME » |
| 5 | mon-pc-est-lent-10-solutions-simples... | 10 solutions PC lent | /blog/nettoyer-pc..., /blog/ordinateur-lent..., /devis, /contact | Liens blog + « devis », « contact » |
| 6 | guide-achat-ordinateur-professionnel-maroc-2026 | Achat PC pro Maroc | /blog/teletravail..., /blog/vision-maroc-2030, /services, /devis | « nos services », « devis » |
| 7 | cybersecurite-pme-maroc-guide-2026 | Cybersécurité PME | /blog/ransomware..., /blog/vision-maroc-2030, /contact, /devis | « audit sécurité », « devis » |
| 8 | recuperation-donnees-disque-dur-maroc | Récupération données | /services, /blog/cybersecurite..., /devis, /contact | « Service récupération données », « devis », « contact » |
| 9 | windows-11-vs-windows-10-maroc-2026 | Windows 11 vs 10 | /blog/guide-achat..., /blog/ordinateur-lent..., /devis, /contact | Liens blog + « devis », « contact » |
| 10 | maintenance-preventive-pc-entreprise-maroc | Maintenance préventive PC | /blog/vision-maroc-2030, /blog/cybersecurite..., /support-pme, /devis, /contact | « Support PME », « devis », « contact » |
| 11 | nettoyer-pc-poussiere-maroc-tuto | Nettoyage PC, poussière | /blog/mon-pc-est-lent..., /blog/pannes-pc-frequentes..., /devis, /contact | Liens blog + « devis », « contact » |
| 12 | pannes-pc-frequentes-maroc-solutions | 5 pannes PC fréquentes | /blog/recuperation..., /blog/nettoyer-pc..., **/services**, /devis, /contact | « services », « devis », « contact » — **pas de lien /depannage-informatique** |
| 13 | 7-pannes-pc-courantes-2026-maroc (entrée posts) | Résumé 7 pannes (page dédiée existe) | /contact, /devis | Court paragraphe + liens — page réelle = dédiée |
| 14 | wifi-lent-maroc-2026 (entrée posts) | Résumé Wi‑Fi (page dédiée existe) | /contact, /blog/7-pannes-pc... | Idem |
| 15 | 192-168-1-1-admin-login-maroc-routeur-2026 (entrée posts) | Résumé 192.168.1.1 (page dédiée existe) | /contact, /blog/wifi-lent..., /devis | Idem |
| 16 | comparatif-maroc-telecom-inwi-orange-2026 (entrée posts) | Résumé comparatif (page dédiée existe) | /blog/192.168.1.1..., /blog/wifi-lent..., /contact, /devis | Idem |
| 17 | teletravail-maroc-equipement-informatique | Télétravail, équipement | /blog/vision-maroc-2030, /blog/guide-achat..., /blog/google-workspace..., /devis, /contact | **Pas de lien /depannage-informatique** |
| 18 | meilleur-antivirus-gratuit-maroc-2026-comparatif (entrée posts) | Résumé antivirus (page dédiée existe) | /blog/meilleur-antivirus... (auto) | Contenu court ; page réelle = dédiée (liens en .tsx ci‑dessus) |

**Synthèse contenu `posts.ts` :**
- **A un lien explicite vers `/depannage-informatique`** dans le texte : **ordinateur-lent-astuces-booster-pc** (ancre « Dépannage informatique à distance »).
- **Ont /services, /contact, /devis mais pas /depannage-informatique** : google-workspace-vs-office-365, ransomware, vision-maroc-2030, mon-pc-est-lent-10-solutions, guide-achat-ordinateur, cybersecurite-pme, recuperation-donnees, windows-11-vs-10, maintenance-preventive, nettoyer-pc-poussiere, **pannes-pc-frequentes-maroc-solutions**, teletravail-maroc-equipement.
- **Ransomware** : thème très aligné “dépannage / sécurité” mais ne pointe que vers /contact, /blog, /services.
- **Pannes PC fréquentes** (slug `pannes-pc-frequentes-maroc-solutions`) : sujet dépannage pur ; opportunité forte d’ajouter `/depannage-informatique` si modification future.

---

## 4. Cartographie silo (qui pointe vers quelle page mère)

### 4.1 Vers `/depannage-informatique`
- **Pages dédiées :** meilleur-antivirus (intro), comparatif-maroc-telecom (hero), wifi-lent (liste CTA), 7-pannes-pc (fin), 192-168-1-1 (bloc liens).
- **Contenu posts.ts :** ordinateur-lent-astuces-booster-pc.

### 4.2 Vers `/antivirus-maroc`
- **Pages dédiées :** meilleur-antivirus (note Pros uniquement).

### 4.3 Vers `/virus-ordinateur-maroc`
- **Pages dédiées :** 7-pannes-pc-courantes-2026-maroc.

### 4.4 Vers `/pc-lent-solution`
- **Pages dédiées :** 7-pannes-pc-courantes-2026-maroc.

### 4.5 Vers `/services` (hub)
- Présent dans de nombreux articles (posts.ts et comparatif telecom en footer).
- Wi‑Fi : liens spécifiques `/services/reseau-wifi` et `/services/depannage-pc-mac`.

### 4.6 Vers `/contact` et `/devis`
- Quasi systématiques en CTA ou en fin de contenu (posts et pages dédiées).

---

## 5. Qualité des ancres (état actuel)

- **Ancres optimisées (descriptives, variées) :**  
  « dépannage informatique à distance », « Découvrez notre offre antivirus et cybersécurité », « assistance dépannage réseau et box », « expert dépannage à distance », « dépannage informatique », « Suppression virus ordinateur Maroc », « PC lent solution », « Dépannage informatique à distance » (posts).
- **Ancres génériques mais acceptables :** « Contactez-nous », « Devis gratuit », « Nos services », « Voir tous les articles ».
- **À éviter (non observé dans l’existant) :** « Cliquez ici », « En savoir plus » sans contexte.

---

## 6. Modifications déjà appliquées (incluses dans cette analyse)

Les changements suivants sont **déjà en place** dans le code et sont reflétés dans les sections 3 et 4 :

1. **meilleur-antivirus-gratuit-maroc-2026-comparatif/page.tsx**  
   - Lien **intro** vers `/depannage-informatique` (ancre « dépannage informatique à distance »).  
   - Lien **CTA** vers `/antivirus-maroc` (ancre « Découvrez notre offre antivirus et cybersécurité ») dans la note Pros.

2. **comparatif-maroc-telecom-inwi-orange-2026/page.tsx**  
   - Lien dans le **sous-titre du hero** vers `/depannage-informatique` (ancre « assistance dépannage réseau et box »).

3. **wifi-lent-maroc-2026/page.tsx**  
   - Lien dans la **liste “Ce que vous allez apprendre”** vers `/depannage-informatique` (ancre « expert dépannage à distance »).

4. **content/blog/posts.ts** (article ordinateur-lent-astuces-booster-pc)  
   - Dans le paragraphe “Besoin d’aide ?”, ajout d’un lien vers **`/depannage-informatique`** avec l’ancre « Dépannage informatique à distance » (en 15 min), avant « devis gratuit » et « catalogue de services ».

Aucune autre modification n’a été faite pour cette analyse.

---

## 7. Synthèse et pistes d’étude (sans implémentation)

- **Points forts :**  
  - Pages dédiées “lourdes” (antivirus, comparatif telecom, Wi‑Fi, 7 pannes, 192.168.1.1) ont au moins un lien vers une page mère pertinente (/depannage-informatique et/ou /antivirus-maroc, /virus-ordinateur-maroc, /pc-lent-solution).  
  - Ancres variées et thématiques ; peu de liens génériques.  
  - Maillage horizontal (blog → blog) et vers /services, /contact, /devis bien présent.

- **Opportunités (pour étude ultérieure) :**  
  - **posts.ts** : plusieurs articles “dépannage / PC / sécurité” n’ont pas de lien explicite vers `/depannage-informatique` (ex. pannes-pc-frequentes-maroc-solutions, ransomware, recuperation-donnees, maintenance-preventive, teletravail-maroc-equipement). Une analyse ciblée par article permettrait de proposer une phrase + ancre adaptée.  
  - **Page [slug]** : le template n’injecte pas de lien systématique vers une page mère ; tout dépend du `content` dans `posts.ts`.  
  - **Silo antivirus** : seul l’article “meilleur antivirus” pointe vers `/antivirus-maroc` ; d’autres contenus “sécurité” (ransomware, cybersécurité PME) pourraient, en étude, être reliés à `/antivirus-maroc` ou `/depannage-informatique` selon le message.

- **Cohérence technique :**  
  - Les slugs avec page dédiée ne sont pas tous dans `STATIC_BLOG_SLUGS` (ex. meilleur-antivirus) ; le routage Next.js sert quand même la page dédiée en priorité. Pour une maintenance claire, on peut envisager d’aligner `STATIC_BLOG_SLUGS` avec la liste réelle des dossiers sous `app/blog/`.

Ce document constitue une **photographie complète de l’existant** (structure, liens, ancres, modifications déjà faites) pour étudier le siloing du blog sans effectuer de nouvelles modifications.
