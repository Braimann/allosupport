# Configuration Détaillée des 5 Rapports GA4 Explorations

## 📊 Rapport 1: Organic Keywords + Bounce Rate

### Configuration Step-by-Step

1. **Accéder à GA4:**
   - Aller dans `Explorations` (menu gauche)
   - Cliquer sur `+ Créer`

2. **Type de rapport:**
   - Sélectionner: **Free Form**

3. **Dimensions à ajouter:**
   ```
   - Session source/medium
   - Search term (ou Query si disponible)
   - Page title
   - Landing page
   ```

4. **Métriques à ajouter:**
   ```
   - Sessions
   - Bounce rate
   - Average session duration
   - Engagement rate
   - New users
   ```

5. **Filtres:**
   - `Session source/medium` = `google / organic`
   - (Optionnel) `Sessions` >= 10 (pour filtrer le bruit)

6. **Visualisation:**
   - Type: **Table**
   - Trier par: `Sessions` (desc)
   - Limiter à: Top 50

7. **Nom du rapport:**
   `SEO - Keywords Organiques + Bounce`

### Colonnes du tableau final:
| Search term | Page title | Sessions | Bounce rate | Avg duration | Engagement rate |
|-------------|------------|----------|-------------|--------------|-----------------|
| dépannage informatique maroc | Dépannage Informatique | 245 | 42% | 2m 15s | 58% |
| ... | ... | ... | ... | ... | ... |

### Insights à chercher:
- ✅ Mots-clés avec **fort trafic** mais **haut bounce** (>60%) → Optimiser ces pages
- ✅ Mots-clés avec **faible trafic** mais **faible bounce** (<30%) → Augmenter le contenu SEO
- ✅ Pages avec **forte durée moyenne** → Identifier le contenu qui engage

---

## 📊 Rapport 2: Landing Pages Performance

### Configuration Step-by-Step

1. **Type:** Free Form

2. **Dimensions:**
   ```
   - Landing page
   - Session source/medium
   - Device category
   - Country
   ```

3. **Métriques:**
   ```
   - Sessions
   - New users
   - Bounce rate
   - Average session duration
   - Event count (whatsapp_click)
   - Pages per session
   ```

4. **Filtres:**
   - `Session source/medium` contient `google`
   - (Optionnel) `Sessions` >= 5

5. **Visualisation:**
   - Type: **Table**
   - Trier par: `Sessions` (desc)
   - Limiter à: Top 30

6. **Nom:** `SEO - Performance Landing Pages`

### Colonnes du tableau final:
| Landing page | Sessions | Bounce rate | Avg duration | WhatsApp clicks | Conversion rate |
|--------------|----------|-------------|--------------|-----------------|-----------------|
| /casablanca | 1,234 | 35% | 3m 20s | 89 | 7.2% |
| /depannage-informatique | 987 | 42% | 2m 45s | 67 | 6.8% |
| ... | ... | ... | ... | ... | ... |

### Insights à chercher:
- ✅ Pages avec **fort trafic** et **faible bounce** → Modèles à reproduire
- ✅ Pages avec **fort trafic** mais **faible conversion WhatsApp** → Optimiser CTAs
- ✅ Pages avec **faible trafic** mais **forte conversion** → Augmenter le SEO

---

## 📊 Rapport 3: Core Web Vitals

### Prérequis
⚠️ **Important:** Ce rapport nécessite que **Google Search Console soit lié à GA4**.

### Configuration Step-by-Step

1. **Lier GSC à GA4:**
   - GA4 > Admin > Property Settings > Search Console Links
   - Ajouter une propriété Search Console

2. **Type:** Free Form

3. **Dimensions:**
   ```
   - Page path
   - Device category
   - Country
   - Browser
   ```

4. **Métriques:**
   ```
   - LCP (Largest Contentful Paint) - en secondes
   - FID (First Input Delay) - en millisecondes
   - CLS (Cumulative Layout Shift) - score 0-1
   - Sessions
   - Page views
   ```

5. **Filtres:**
   - `Page path` ne contient pas `/admin` (exclure admin)
   - `Sessions` >= 10

6. **Visualisation:**
   - Type: **Table**
   - Trier par: `LCP` (asc) pour voir les plus lentes en premier
   - Limiter à: Top 50

7. **Nom:** `SEO - Core Web Vitals`

### Colonnes du tableau final:
| Page path | Device | LCP | FID | CLS | Sessions | Status |
|-----------|--------|-----|-----|-----|----------|--------|
| /casablanca | Desktop | 1.8s ✅ | 45ms ✅ | 0.05 ✅ | 1,234 | Good |
| /depannage-informatique | Mobile | 3.2s ⚠️ | 120ms ⚠️ | 0.15 ⚠️ | 987 | Needs work |
| ... | ... | ... | ... | ... | ... | ... |

### Seuils de performance:
- **LCP:** < 2.5s ✅ | 2.5s - 4s ⚠️ | > 4s ❌
- **FID:** < 100ms ✅ | 100ms - 300ms ⚠️ | > 300ms ❌
- **CLS:** < 0.1 ✅ | 0.1 - 0.25 ⚠️ | > 0.25 ❌

### Insights à chercher:
- ✅ Pages avec **LCP > 4s** → Optimiser images, fonts, CSS
- ✅ Pages avec **FID > 300ms** → Réduire JavaScript, optimiser interactions
- ✅ Pages avec **CLS > 0.25** → Fixer les layout shifts (images sans dimensions, fonts)

---

## 📊 Rapport 4: Traffic par Ville (Casablanca/Rabat)

### Configuration Step-by-Step

1. **Type:** Free Form

2. **Dimensions:**
   ```
   - City
   - Landing page
   - Session source/medium
   - Device category
   ```

3. **Métriques:**
   ```
   - Sessions
   - New users
   - Bounce rate
   - Average session duration
   - Event count (whatsapp_click)
   - Pages per session
   ```

4. **Filtres:**
   - `City` = `Casablanca` OU `Rabat`
   - (Optionnel) `Sessions` >= 5

5. **Visualisation:**
   - Type: **Table**
   - Trier par: `Sessions` (desc)
   - Grouper par: `City` puis `Landing page`

6. **Nom:** `SEO - Traffic Villes (Casablanca/Rabat)`

### Colonnes du tableau final:
| City | Landing page | Sessions | Bounce rate | Avg duration | WhatsApp clicks | Conversion rate |
|------|--------------|----------|-------------|--------------|-----------------|-----------------|
| Casablanca | /casablanca | 2,145 | 32% | 3m 45s | 156 | 7.3% |
| Casablanca | /depannage-informatique | 1,234 | 38% | 2m 50s | 89 | 7.2% |
| Rabat | /rabat | 987 | 35% | 3m 20s | 72 | 7.3% |
| Rabat | /depannage-informatique | 654 | 42% | 2m 30s | 45 | 6.9% |
| ... | ... | ... | ... | ... | ... | ... |

### Variante: Rapport séparé par ville
Créer 2 rapports distincts:
- `SEO - Traffic Casablanca`
- `SEO - Traffic Rabat`

### Insights à chercher:
- ✅ Pages les plus visitées par ville → Adapter le contenu local
- ✅ Taux de conversion par ville → Identifier les différences de comportement
- ✅ Bounce rate par ville → Optimiser l'expérience locale

---

## 📊 Rapport 5: Conversion Funnel (WhatsApp)

### Configuration Step-by-Step

1. **Type:** Funnel Exploration

2. **Étapes du funnel:**
   ```
   Étape 1: Session start
   - Event: session_start
   - Nom: "Visiteurs"
   
   Étape 2: Page view
   - Event: page_view
   - Nom: "Pages vues"
   
   Étape 3: Scroll 50%
   - Event: scroll_50_percent
   - Nom: "Engagement (Scroll 50%)"
   
   Étape 4: WhatsApp click
   - Event: whatsapp_click
   - Nom: "Conversion WhatsApp"
   ```

3. **Dimensions:**
   ```
   - Landing page
   - Session source/medium
   - Device category
   - Country
   ```

4. **Métriques:**
   ```
   - Sessions
   - Drop-off rate (entre chaque étape)
   - Conversion rate (Session → WhatsApp)
   - Funnel conversion rate
   ```

5. **Filtres:**
   - `Session source/medium` contient `google`
   - (Optionnel) `Sessions` >= 10

6. **Visualisation:**
   - Type: **Funnel**
   - Afficher: Drop-off rate entre chaque étape

7. **Nom:** `SEO - Funnel Conversion WhatsApp`

### Résultat attendu (exemple):
```
Étape 1: Visiteurs              → 10,000 sessions (100%)
         ↓ Drop-off: 15%
Étape 2: Pages vues             → 8,500 sessions (85%)
         ↓ Drop-off: 40%
Étape 3: Engagement (Scroll 50%) → 5,100 sessions (51%)
         ↓ Drop-off: 60%
Étape 4: Conversion WhatsApp    → 2,040 sessions (20.4%)
```

### Colonnes du tableau (détails):
| Landing page | Sessions | → Page view | → Scroll 50% | → WhatsApp | Conversion rate |
|--------------|----------|-------------|--------------|------------|-----------------|
| /casablanca | 1,234 | 1,100 (89%) | 650 (53%) | 89 (7.2%) | 7.2% |
| /depannage-informatique | 987 | 850 (86%) | 500 (51%) | 67 (6.8%) | 6.8% |
| ... | ... | ... | ... | ... | ... |

### Insights à chercher:
- ✅ **Drop-off élevé** entre Session → Page view → Optimiser le chargement initial
- ✅ **Drop-off élevé** entre Scroll → WhatsApp → Optimiser les CTAs WhatsApp
- ✅ Pages avec **forte conversion** → Identifier les meilleures pratiques
- ✅ Pages avec **faible conversion** → Analyser les différences avec les pages performantes

---

## 🎯 Actions Recommandées par Rapport

### Après analyse du Rapport 1 (Keywords + Bounce):
1. Identifier les 10 mots-clés avec **haut trafic + haut bounce**
2. Optimiser ces pages: améliorer le contenu, ajouter des CTAs, réduire le temps de chargement
3. Identifier les 10 mots-clés avec **faible trafic + faible bounce**
4. Créer du contenu SEO supplémentaire pour ces mots-clés

### Après analyse du Rapport 2 (Landing Pages):
1. Identifier les 5 pages les plus performantes (trafic + conversion)
2. Analyser leur structure et reproduire sur d'autres pages
3. Identifier les 5 pages avec fort trafic mais faible conversion
4. Optimiser les CTAs WhatsApp sur ces pages

### Après analyse du Rapport 3 (Core Web Vitals):
1. Créer une liste prioritaire des pages avec problèmes (LCP/FID/CLS)
2. Optimiser images (WebP, lazy loading, dimensions)
3. Optimiser fonts (preload, font-display: swap)
4. Réduire JavaScript (code splitting, lazy loading)

### Après analyse du Rapport 4 (Villes):
1. Adapter le contenu des pages principales pour chaque ville
2. Créer des landing pages spécifiques si besoin
3. Optimiser les CTAs selon le comportement par ville

### Après analyse du Rapport 5 (Funnel):
1. Identifier les pages avec fort drop-off entre étapes
2. Optimiser le chargement initial (LCP)
3. Optimiser les CTAs WhatsApp (position, design, copy)
4. A/B tester différentes approches sur les pages problématiques

---

## 📅 Fréquence d'Analyse Recommandée

- **Hebdomadaire:** Rapports 2, 4, 5 (Performance, Villes, Funnel)
- **Mensuel:** Rapports 1, 3 (Keywords, Core Web Vitals)
- **Trimestriel:** Analyse complète des 5 rapports + actions d'optimisation

---

*Document créé le: 2026-01-28*
*Dernière mise à jour: 2026-01-28*
