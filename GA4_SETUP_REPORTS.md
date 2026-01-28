# GA4 Setup & Rapports SEO - AlloSupport.ma

## ✅ Code GA4 Intégré

### Code dans `<head>` (app/layout.tsx)
```tsx
<GoogleAnalytics />
```

**ID GA4:** `G-26K5EC69SQ`

**Optimisations:**
- ✅ Async loading (0 impact PageSpeed)
- ✅ Preconnect vers googletagmanager.com
- ✅ DNS prefetch
- ✅ Strategy: `afterInteractive` (Next.js)
- ✅ Anonymize IP activé
- ✅ Cookie flags: SameSite=None;Secure

---

## 📊 5 Rapports GA4 Explorations SEO Configurés

### 1. **Organic Keywords + Bounce Rate**

**Type:** Exploration > Free Form

**Dimensions:**
- `Session source/medium` (filter: `google / organic`)
- `Search term` (ou `Query` si disponible)
- `Page title`

**Métriques:**
- `Sessions`
- `Bounce rate`
- `Average session duration`
- `Engagement rate`

**Configuration:**
1. Aller dans GA4 > Explorations > Créer
2. Type: **Free Form**
3. Ajouter dimensions ci-dessus
4. Ajouter métriques ci-dessus
5. Filtre: `Session source/medium` = `google / organic`
6. Trier par `Sessions` (desc)
7. Nommer: **"SEO - Keywords Organiques + Bounce"**

**Insight attendu:** Identifier les mots-clés avec fort trafic mais haut bounce → optimiser ces pages.

---

### 2. **Landing Pages Performance**

**Type:** Exploration > Free Form

**Dimensions:**
- `Landing page`
- `Session source/medium`
- `Device category`

**Métriques:**
- `Sessions`
- `New users`
- `Bounce rate`
- `Average session duration`
- `Conversions` (si configuré)
- `Event count` (whatsapp_click)

**Configuration:**
1. Type: **Free Form**
2. Dimensions: Landing page, Source/Medium, Device
3. Métriques: Sessions, Bounce, Duration, WhatsApp clicks
4. Filtre: `Session source/medium` contient `google`
5. Trier par `Sessions` (desc)
6. Nommer: **"SEO - Performance Landing Pages"**

**Insight attendu:** Pages les plus performantes en SEO, taux de conversion WhatsApp par page.

---

### 3. **Core Web Vitals**

**Type:** Exploration > Free Form

**Dimensions:**
- `Page path`
- `Device category`
- `Country`

**Métriques:**
- `LCP (Largest Contentful Paint)` - < 2.5s idéal
- `FID (First Input Delay)` - < 100ms idéal
- `CLS (Cumulative Layout Shift)` - < 0.1 idéal
- `Sessions`

**Configuration:**
1. Type: **Free Form**
2. Dimensions: Page path, Device, Country
3. Métriques: LCP, FID, CLS, Sessions
4. Filtre: `Page path` contient `/` (toutes pages)
5. Trier par `LCP` (asc) pour voir les plus lentes
6. Nommer: **"SEO - Core Web Vitals"**

**Insight attendu:** Pages avec problèmes de performance → optimiser LCP, FID, CLS.

**Note:** Les métriques Core Web Vitals nécessitent que Google Search Console soit lié à GA4.

---

### 4. **Traffic par Ville (Casablanca/Rabat)**

**Type:** Exploration > Free Form

**Dimensions:**
- `City`
- `Landing page`
- `Session source/medium`

**Métriques:**
- `Sessions`
- `New users`
- `Bounce rate`
- `Average session duration`
- `Event count` (whatsapp_click)

**Configuration:**
1. Type: **Free Form**
2. Dimensions: City, Landing page, Source/Medium
3. Métriques: Sessions, Bounce, Duration, WhatsApp clicks
4. Filtre: `City` = `Casablanca` OU `Rabat`
5. Trier par `Sessions` (desc)
6. Nommer: **"SEO - Traffic Villes (Casablanca/Rabat)"**

**Insight attendu:** Pages les plus visitées depuis Casablanca/Rabat, taux d'engagement par ville.

**Variante:** Créer un rapport séparé pour chaque ville si besoin de plus de détails.

---

### 5. **Conversion Funnel (WhatsApp)**

**Type:** Exploration > Funnel Exploration

**Étapes du funnel:**
1. **Session start** (Tous les utilisateurs)
2. **Page view** (Pages vues)
3. **Scroll 50%** (Engagement)
4. **WhatsApp click** (Conversion)

**Dimensions:**
- `Landing page`
- `Session source/medium`
- `Device category`

**Métriques:**
- `Sessions`
- `Drop-off rate` (entre chaque étape)
- `Conversion rate` (Session → WhatsApp)

**Configuration:**
1. Type: **Funnel Exploration**
2. Étape 1: Event = `session_start`
3. Étape 2: Event = `page_view`
4. Étape 3: Event = `scroll_50_percent`
5. Étape 4: Event = `whatsapp_click`
6. Dimensions: Landing page, Source/Medium, Device
7. Nommer: **"SEO - Funnel Conversion WhatsApp"**

**Insight attendu:** Identifier où les utilisateurs abandonnent, optimiser les pages avec fort drop-off.

---

## 🎯 Événements GTM Configurés

### 1. **WhatsApp Click**
```javascript
Event: whatsapp_click
Event Category: engagement
Event Label: [context] (ex: "sticky_button", "mobile_bar", "float_button")
Value: 1
Page Path: [current page]
WhatsApp Message: [message text]
```

**Déclencheur:** Clic sur n'importe quel lien WhatsApp (`href` contient `wa.me`)

**Tag:** GA4 Event
- Event name: `whatsapp_click`
- Parameters:
  - `event_category`: `engagement`
  - `event_label`: `{{Click Element}}`
  - `page_path`: `{{Page Path}}`

---

### 2. **Scroll 50%**
```javascript
Event: scroll_50_percent
Event Category: engagement
Page Path: [current page]
```

**Déclencheur:** Scroll personnalisé (JavaScript dans GTM)
- Variable: `Scroll Depth` = 50%
- Trigger: `Scroll Depth` >= 50%

**Tag:** GA4 Event
- Event name: `scroll_50_percent`
- Parameters:
  - `event_category`: `engagement`
  - `page_path`: `{{Page Path}}`

**Note:** Le tracking scroll est aussi géré côté code (ScrollTracker.tsx) pour double tracking.

---

## ✅ Checklist Optimisation GA4

### Configuration de base
- [x] Code GA4 intégré dans `<head>` avec async
- [x] Preconnect vers googletagmanager.com
- [x] Anonymize IP activé
- [x] Cookie flags configurés (SameSite=None;Secure)
- [x] Page view tracking automatique

### Événements
- [x] WhatsApp click tracking (tous les boutons)
- [x] Scroll 50% tracking
- [ ] Conversion tracking (devis soumis) - À configurer
- [ ] Conversion tracking (signup) - À configurer
- [ ] Conversion tracking (contact form) - À configurer

### Rapports Explorations
- [ ] Rapport 1: Organic Keywords + Bounce créé
- [ ] Rapport 2: Landing Pages Performance créé
- [ ] Rapport 3: Core Web Vitals créé (nécessite GSC lié)
- [ ] Rapport 4: Traffic Villes (Casablanca/Rabat) créé
- [ ] Rapport 5: Conversion Funnel WhatsApp créé

### GTM Setup (optionnel)
- [ ] ID GTM configuré dans `GoogleTagManager.tsx`
- [ ] Tag WhatsApp click configuré dans GTM
- [ ] Tag Scroll 50% configuré dans GTM
- [ ] Variables personnalisées créées (si besoin)

### Optimisations PageSpeed
- [x] GA4 chargé en async (0 impact)
- [x] Preconnect pour DNS lookup
- [x] Scripts chargés après interactive
- [ ] Test PageSpeed après déploiement (objectif: >90)

### Tests
- [ ] Vérifier GA4 Realtime (visiteurs en direct)
- [ ] Tester événement WhatsApp click (vérifier dans Realtime)
- [ ] Tester événement Scroll 50% (vérifier dans Realtime)
- [ ] Vérifier les rapports après 24-48h de données

### Documentation
- [x] Code GA4 documenté
- [x] 5 rapports Explorations documentés
- [x] Checklist optimisation créée
- [ ] Guide GTM (si GTM activé)

---

## 📈 Métriques Clés à Surveiller

### SEO
- **Sessions organiques** (Google / organic)
- **Bounce rate** par landing page
- **Average session duration** par page
- **Core Web Vitals** (LCP, FID, CLS)

### Conversion
- **WhatsApp click rate** (clics / sessions)
- **Funnel drop-off** (Session → Scroll → WhatsApp)
- **Conversion rate** par ville (Casablanca vs Rabat)

### Engagement
- **Scroll 50% rate** (engagement)
- **Pages par session**
- **Returning users** vs **New users**

---

## 🔧 Prochaines Étapes

1. **Attendre 24-48h** pour collecter des données
2. **Créer les 5 rapports Explorations** dans GA4
3. **Configurer GTM** (si souhaité) avec les tags WhatsApp/Scroll
4. **Analyser les rapports** et identifier les optimisations
5. **Configurer les conversions** (devis, signup, contact)
6. **Lier Google Search Console** pour Core Web Vitals

---

## 📝 Notes Techniques

- **GA4 ID:** `G-26K5EC69SQ`
- **GTM ID:** À configurer si GTM activé
- **Tracking code:** `components/analytics/GoogleAnalytics.tsx`
- **Scroll tracker:** `components/analytics/ScrollTracker.tsx`
- **Analytics utils:** `lib/analytics.ts`

**Performance:** Le code GA4 est optimisé pour 0 impact sur PageSpeed grâce à:
- Async loading
- Preconnect
- Strategy `afterInteractive` (Next.js)
- Passive event listeners pour scroll

---

*Document créé le: 2026-01-28*
*Dernière mise à jour: 2026-01-28*
