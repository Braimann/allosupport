# ✅ Cloudflare APO (Automatic Platform Optimization) Checklist

## 🎯 Objectif: Score PageSpeed 95+ Mobile

### 1. Configuration Cloudflare APO

- [ ] **Activer APO** dans le dashboard Cloudflare
  - Aller dans: Speed > Optimization > APO
  - Activer pour: `allosupport.ma`
  - Mode: Automatic

- [ ] **Vérifier Rocket Loader**
  - Aller dans: Speed > Optimization > Rocket Loader
  - Mode: **Automatic** (recommandé)
  - ⚠️ Si conflits JS: Mode **Manual** avec `data-cfasync="false"` sur scripts critiques

- [ ] **Activer Auto Minify**
  - Aller dans: Speed > Optimization > Auto Minify
  - ✅ JavaScript
  - ✅ CSS
  - ✅ HTML

### 2. Optimisations Code (Déjà faites ✅)

- [x] **Critical CSS inline** dans `<head>`
- [x] **Preload fonts** critiques (Poppins 400, 600)
- [x] **Preconnect** vers Google Fonts, GTM
- [x] **DNS prefetch** pour ressources externes
- [x] **Lazy load** composants below-the-fold
- [x] **Images WebP** avec fallback (Next.js Image)
- [x] **Font-display: swap** pour éviter FOIT

### 3. Headers HTTP Cloudflare

Vérifier que ces headers sont présents (via `next.config.js`):

```
X-DNS-Prefetch-Control: on
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Cache-Control: public, max-age=31536000, immutable (pour images)
```

### 4. Cache Configuration

- [ ] **Page Rules Cloudflare:**
  ```
  Rule 1: allosupport.ma/*
    - Cache Level: Standard
    - Edge Cache TTL: 1 month
    - Browser Cache TTL: 1 month
  
  Rule 2: allosupport.ma/_next/static/*
    - Cache Level: Cache Everything
    - Edge Cache TTL: 1 year
    - Browser Cache TTL: 1 year
  
  Rule 3: allosupport.ma/*.jpg|png|webp|svg|ico
    - Cache Level: Cache Everything
    - Edge Cache TTL: 1 year
    - Browser Cache TTL: 1 year
  ```

### 5. Compression

- [ ] **Brotli activé** (automatique Cloudflare)
- [ ] **Gzip fallback** activé
- [ ] **Vérifier compression** sur: https://tools.pingdom.com/

### 6. Images Optimisées

- [x] **Next.js Image** avec WebP automatique
- [x] **Lazy loading** par défaut (sauf priority)
- [x] **Blur placeholder** pour LCP
- [x] **Sizes responsive** pour mobile/desktop

**Format attendu:**
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority={false} // true seulement pour LCP
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 7. JavaScript Optimisé

- [x] **Code splitting** automatique (Next.js)
- [x] **Dynamic imports** pour composants non-critiques
- [x] **Tree shaking** activé (webpack)
- [x] **Minification** en production

**Vérifier:**
- Bundle size < 200KB (gzipped) pour initial load
- Chunks séparés: framework, libs, app code

### 8. CSS Optimisé

- [x] **Critical CSS inline** (< 14KB)
- [x] **Non-critical CSS** chargé en defer
- [x] **Tailwind purge** activé (production)
- [x] **Minification** automatique

### 9. Fonts Optimisées

- [x] **Preload** fonts critiques (Poppins 400, 600)
- [x] **font-display: swap** activé
- [x] **Subset** fonts (unicode-range)
- [x] **WOFF2** format (plus léger)

### 10. LCP (Largest Contentful Paint) < 2.5s

**Éléments critiques:**
- [x] Hero section optimisée
- [x] Fonts preloadées
- [x] Critical CSS inline
- [ ] **Hero image** (si présente) avec `priority={true}`
- [ ] **Dimensions fixes** pour éviter CLS

### 11. CLS (Cumulative Layout Shift) < 0.1

- [x] **Dimensions fixes** sur images
- [x] **Reserve space** pour contenus dynamiques
- [x] **Font-display: swap** (évite FOIT)
- [ ] **Skeleton loaders** pour contenus async

### 12. FID (First Input Delay) < 100ms

- [x] **Code splitting** pour réduire JS initial
- [x] **Defer non-critical JS**
- [x] **Passive event listeners** (scroll)
- [ ] **Worker threads** pour calculs lourds (si besoin)

### 13. Tests PageSpeed

**Avant déploiement:**
- [ ] Test local: `npm run build && npm start`
- [ ] Lighthouse local: Score > 90

**Après déploiement:**
- [ ] **PageSpeed Insights:** https://pagespeed.web.dev/
  - Mobile: **95+** ✅
  - Desktop: **98+** ✅
- [ ] **GTmetrix:** https://gtmetrix.com/
  - Performance: **A**
  - Structure: **A**
- [ ] **WebPageTest:** https://www.webpagetest.org/
  - First Contentful Paint: < 1.5s
  - LCP: < 2.5s
  - CLS: < 0.1

### 14. Monitoring Post-Déploiement

- [ ] **Core Web Vitals** dans GA4
- [ ] **Real User Monitoring (RUM)** Cloudflare
- [ ] **Alertes** si LCP > 2.5s ou CLS > 0.1

### 15. Checklist Finale

**Performance:**
- [x] Critical CSS inline
- [x] Fonts preloadées
- [x] Images WebP + lazy loading
- [x] Code splitting
- [x] Lazy load composants

**Cloudflare:**
- [ ] APO activé
- [ ] Rocket Loader configuré
- [ ] Auto Minify activé
- [ ] Page Rules configurées
- [ ] Cache optimisé

**Tests:**
- [ ] PageSpeed Mobile: **95+**
- [ ] PageSpeed Desktop: **98+**
- [ ] LCP: **< 2.5s**
- [ ] CLS: **< 0.1**
- [ ] FID: **< 100ms**

---

## 🚀 Commandes de Test

```bash
# Build production
npm run build

# Test local
npm start

# Lighthouse CLI
npx lighthouse https://allosupport.ma --view

# Test PageSpeed
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://allosupport.ma&strategy=mobile"
```

---

## 📊 Métriques Cibles

| Métrique | Cible | Actuel | Status |
|----------|-------|--------|--------|
| Performance Score | 95+ | ~70 | ⚠️ |
| LCP | < 2.5s | > 2.5s | ⚠️ |
| CLS | < 0.1 | > 0.1 | ⚠️ |
| FID | < 100ms | ? | ⚠️ |
| FCP | < 1.8s | ? | ⚠️ |
| TTI | < 3.8s | ? | ⚠️ |

---

*Checklist créée le: 2026-01-28*  
*Dernière mise à jour: 2026-01-28*
