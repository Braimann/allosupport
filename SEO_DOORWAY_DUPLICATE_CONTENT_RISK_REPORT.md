# SEO Risk Report – Doorway Pages & Duplicate Content

**Date:** Audit based on current codebase  
**Scope:** City pages (`/casablanca`, `/rabat`, `/fes`, `/marrakech`, `/agadir`) and Service pages (`/virus-ordinateur-maroc`, `/pc-lent-solution`, `/depannage-informatique`).

---

## 1. City Pages (Casablanca vs Rabat vs Fès vs Marrakech vs Agadir)

### Similarity Score: **Medium–High Risk**

---

### 1.1 Structural Similarity

| Criterion | Finding | Risk |
|-----------|---------|------|
| **Number of H2s** | Same on all city pages: 4 main H2s (2 in problem/solution, 1 pricing, 1 FAQ) | High |
| **Order of sections** | Identical: Hero → Problem/Solution (2 cols) → Pricing (3 packs) → FAQ (3 questions) → Internal links | High |
| **Pricing layout** | Same 3 packs (150 DH / 250 DH / 499 DH), same card structure | Medium |

**Verdict:** The same template is used everywhere. Only the city name and a few phrases change. This is the main doorway risk.

---

### 1.2 Text Similarity – Identified Patterns

**A. Hero CTA (quasi-identical)**

- Casablanca: *"Intervention immédiate via WhatsApp"* + *"Tarifs dès **250 DH** • Satisfait ou Remboursé"*
- Rabat: *"Intervention immédiate via WhatsApp"* + *"Tarifs dès **250 DH** • Satisfait ou Remboursé"*
- Fès: *"Diagnostic gratuit via WhatsApp"* + *"Tarifs dès **250 DH** • Satisfait ou Remboursé"*

Same CTA and same price line on all cities → **high similarity**.

**B. Solution column (city-name swap)**

- Casablanca: *"Plus besoin de traverser tout **Casablanca** pour déposer votre PC... un technicien se connecte à votre ordinateur **à distance via un outil sécurisé (AnyDesk / TeamViewer)**..."*
- Rabat: *"Plus besoin d'attendre un technicien sur place : nous nous connectons à votre PC via un **outil sécurisé (TeamViewer / AnyDesk)**..."*

Same idea and same tool names; only the intro changes slightly → **medium–high similarity**.

**C. Pricing pack descriptions (boilerplate)**

- Pack 150 DH: *"Idéal pour un problème simple"* (Casablanca) vs *"Pour un problème simple ou une question technique urgente"* (Rabat) — very close.
- Pack 250 DH: *"Pour PC lent, bugs Windows, virus, problème internet ou imprimante"* vs *"Réparation de la majorité des pannes logicielles : lenteur, erreurs, virus, Wi‑Fi..."* — same meaning, different words.
- Badge: *"Le plus demandé à Casablanca"* / *"Le plus demandé à Rabat"* — pure city swap.

**D. FAQ (template swap)**

- Casablanca: *"Intervenez‑vous uniquement à distance ou aussi à domicile **à Casablanca** ?"*  
  Answer: *"Notre spécialité est le dépannage informatique à distance... partout **à Casablanca (Derb Ghallef, Maarif...)**."*
- Rabat: *"Intervenez‑vous uniquement à distance ou aussi sur site **à Rabat** ?"*  
  Answer: *"Notre service principal est le dépannage informatique à distance... partout **à Rabat**."*

Same question structure; only city name and one FAQ (Rabat has payment) differ → **high similarity**.

**E. Internal links block**

- Same H3s: *"Autres services AlloSupport.ma"* / *"Autres villes prises en charge"*.
- Same list of links (only order can change). **Identical structure.**

---

### 1.3 Unique Value by City

| Page | Specific references | Verdict |
|------|---------------------|--------|
| **Casablanca** | Derb Ghallef, Maarif, Sidi Maarouf; marché Derb Ghallef, centre‑ville | **Good** – neighbourhoods + context |
| **Rabat** | Agdal, Hay Riad, Souissi, Hassan; télétravail, études, administrations | **Good** – neighbourhoods + context |
| **Fès** | No districts in hero or problem block; "particuliers, étudiants, petites entreprises" | **Weak** – no quartiers nommés |
| **Marrakech** | Riads, hôtels, agences; "saison touristique" | **Medium** – public cible, pas de quartiers |
| **Agadir** | Aucun quartier ni lieu précis | **Weak** – très générique |

---

## 2. Service Pages (Virus vs PC lent vs Dépannage)

### Similarity Score: **Low–Medium Risk**

---

### 2.1 Structural Similarity

| Page | H2s | Theme / angle |
|------|-----|----------------|
| **virus-ordinateur-maroc** | Problème / Nettoyage sans formatage / Tarifs / FAQ | Virus, malware, nettoyage sans formatage |
| **pc-lent-solution** | Pourquoi PC lent / Ce qu’on fait / Packs optimisation / FAQ | Lenteur, optimisation, pas de formatage |
| **depannage-informatique** | Quand faire appel / Comment se passe l’intervention / Tarifs / FAQ | Dépannage général |

- Same global layout: Hero → 2-col → Pricing → FAQ → Internal links.
- **H2 wording and intent** differ (virus vs lenteur vs dépannage général) → **lower structural risk** than city pages.

---

### 2.2 Text Similarity

- **Virus** and **PC lent** do not share the same sentences; each page talks about its own problem (infection vs slowness).
- **Dépannage informatique** is the “umbrella” page; it overlaps in theme with city pages and with virus/PC lent, but the copy is different (no city name swap, different H2s and bullets).
- **Pricing:** Virus uses "Scan & contrôle", "Nettoyage complet sans formatage", "Pack sécurité PME". PC lent uses "Nettoyage simple", "Optimisation complète", "Pack performance Pro". Names and descriptions differ → **low duplicate risk** between these two.

**Verdict:** Service pages are sufficiently distinct in meaning and wording. Risk is **low to medium** (same template, different content).

---

### 2.3 Unique Value – Services

| Page | Specific content |
|------|-------------------|
| **virus-ordinateur-maroc** | "Nettoyage complet sans formatage", types de menaces (ransomware, trojan, adware), processus (analyse processus, extensions malveillantes, DNS, antivirus) | **Good** |
| **pc-lent-solution** | Causes (démarrage, fichiers temporaires, disque 100 %), actions (désinstallation, tâches, réglages Windows) | **Good** |
| **depannage-informatique** | Cas d’usage généraux (écran bleu, connexion, etc.), déroulement intervention | **Correct** |

---

## 3. Summary Table

| Group | Similarity score | Main risk | Unique value |
|-------|------------------|-----------|--------------|
| **City pages** | **Medium–High** | Same structure, same CTA/pricing/FAQ template, city-name swap | Casablanca & Rabat OK; Fès, Agadir, Marrakech à renforcer |
| **Service pages** | **Low–Medium** | Même squelette de page | Contenu déjà différencié par service |

---

## 4. Fixing Suggestions (High priority = city pages)

### 4.1 City pages – 3 actions ciblées

**1. Varier les H2 et l’ordre des blocs (sémantique + structure)**  
- Ne pas garder exactement les mêmes 4 H2 partout. Exemples :
  - **Fès:** remplacer un H2 par *"Dépannage PC à Fès : pour qui ?"* et parler artisans, étudiants, médinas.
  - **Marrakech:** un H2 du type *"Support IT pour riads et hôtels à Marrakech"* et un autre *"Intervention à distance : comment ça marche ?"*.
  - **Agadir:** un H2 *"Problèmes PC fréquents à Agadir (bureau, maison, cyber)"* et citer des lieux (Talborjt, centre, zones d’activité).
- Permettre un ordre légèrement différent (ex. FAQ avant pricing sur une page, ou un encadré “Témoignage” / “Chiffres” sur une seule ville).

**2. Enrichir chaque ville avec des éléments non réutilisables**  
- **Fès:** quartiers (Médina, Fès el Bali, Ville nouvelle, Atlas), contexte (artisanat, télétravail, administration).
- **Marrakech:** quartiers (Guéliz, Hivernage, Médina, Palmeraie) + "riads, hôtels, agences de voyage".
- **Agadir:** quartiers ou zones (Talborjt, centre, front de mer, zones industrielles / commerciales) + contexte (tourisme, bureaux, cybercafés).
- **Rabat:** ajouter d’autres quartiers (Hassan, Océan, Takkadoum) si pas déjà présents.
- Dans le bloc problème/solution, **1–2 phrases propres à la ville** (trafic, type de clients, saisonnalité) pour éviter le simple swap du nom.

**3. Différencier CTA, pricing et FAQ**  
- **CTA:** varier le libellé du bouton et la phrase d’accroche (ex. "Réserver une intervention à Fès", "Demander un diagnostic gratuit à Agadir", "Contacter un technicien pour Marrakech").
- **Pricing:** garder 150/250/499 mais changer les **sous-titres** ou **exemples** (ex. à Rabat: "idéal pour un télétravailleur"; à Marrakech: "pour un riad ou un petit bureau").
- **FAQ:** au moins **1 question 100 % spécifique** par ville (ex. Fès: "Intervenez-vous pour les artisans de la médina ?"; Marrakech: "Peut-on avoir un créneau le soir pour un riad ?"; Agadir: "Couvez-vous les cybercafés ?"). Éviter que les 3 questions soient le même schéma avec uniquement le nom de ville changé.

---

### 4.2 Service pages – recommandations légères

- **PC lent:** ajouter 1 phrase sur les **outils** utilisés (nettoyage disque Windows, msconfig, gestion des tâches, désinstallation propre) pour renforcer l’angle “technique”.
- **Virus:** c’est déjà bien spécifique; éventuellement nommer 1–2 types de menaces ou logiciels (ex. adware de barres d’outils, faux antivirus) pour encore plus de singularité.
- Garder une structure globale similaire est acceptable ici car le **contenu rédactionnel** et l’**intention** (virus vs lenteur vs dépannage) diffèrent.

---

## 5. Conclusion

- **City pages:** risque **Medium–High** (structure et formules répétées, risque doorway/duplicate). Priorité: varier H2/ordre, ajouter quartiers et contexte par ville, différencier CTA/pricing/FAQ.
- **Service pages:** risque **Low–Medium**; contenu déjà distinct, améliorations mineures possibles (détails techniques, exemples).

En appliquant les 3 axes ci-dessus sur les pages ville (sémantique, contenu unique, CTA/pricing/FAQ), on réduit nettement le risque de pénalité doorway et de contenu dupliqué tout en gardant une base de pages optimisées pour le référencement local.
