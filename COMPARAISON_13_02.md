# Comparaison : code actuel (local) vs GitHub au 13-02-2026

Référence : **c463062** (dernier commit du 13 février 2026 — "Fix readonly keywords/pricing types for build").  
État comparé : **origin/main** (ce qui est sur GitHub aujourd’hui) = identique au 14-02 après les 2 derniers commits.

---

## Erreurs détectées sur le code GitHub (prod Linux)

### 1. **FAQ — `Metadata` dans un Client Component (risque build)**

**Fichier :** `app/faq/page.tsx`

Sur GitHub, la page contient :
- `"use client";` en première ligne
- `import { Metadata } from "next";`

**Problème :** `Metadata` est réservé aux Server Components. Dans une page `"use client"`, cet import est invalide et peut provoquer une erreur au build Next.js.

**Correction (déjà faite en local) :** supprimer la ligne `import { Metadata } from "next";` (les métadonnées sont déjà définies dans `app/faq/layout.tsx`).

---

### 2. **Build qui freeze — Firebase pendant `next build`**

**Fichiers :** `lib/firebase/config.ts`, `lib/firebase/services-service.ts`, `package.json`

Sur GitHub :
- **config.ts** : Firebase est toujours initialisé (pas de détection de la phase de build).
- **services-service.ts** : `getPublishedServices()` et `getServiceBySlug()` appellent Firestore sans timeout ni contournement en phase de build.
- **package.json** : `"build": "next build"` (pas de script qui crée `.build-in-progress` ni de variable d’environnement pour forcer le mode statique).

**Problème :** En prod (Linux), `npm run build` exécute `next build`, qui charge ces modules et appelle Firestore. Si le réseau est lent ou Firebase indisponible, le build reste bloqué après la ligne « Environments: .env.local ».

**Corrections (déjà faites en local) :**
- Détection de la phase de build dans `config.ts` (NEXT_PHASE, npm_lifecycle_event, BUILD_STATIC_SERVICES, fichier `.build-in-progress`) et pas d’init Firebase pendant le build.
- Dans `services-service.ts` : `isBuildPhase()` + timeout 8 s sur les appels Firestore avec repli sur les données statiques.
- Script `scripts/build.js` qui crée `.build-in-progress`, lance `next build`, puis supprime le fichier.
- `package.json` : `"build": "node scripts/build.js"` et ajout de `cross-env` si besoin.

---

### 3. **Résumé des différences importantes (non poussées sur GitHub)**

| Élément | Sur GitHub (prod) | En local (corrigé) |
|--------|--------------------|---------------------|
| `app/faq/page.tsx` | `import { Metadata } from "next"` dans une page `"use client"` | Import supprimé |
| `lib/firebase/config.ts` | Firebase toujours initialisé | Init Firebase sautée en phase build (env + `.build-in-progress`) |
| `lib/firebase/services-service.ts` | Appels Firestore directs, pas de timeout | `isBuildPhase()` + timeout 8 s + repli données statiques |
| `package.json` → build | `"build": "next build"` | `"build": "node scripts/build.js"` |
| Script build | Aucun | `scripts/build.js` + `.build-in-progress` dans `.gitignore` |
| Tests | Aucun | Jest + `npm test` / `npm run test:ci` |

---

## Que pousser pour corriger la prod (sans tout le reste)

Pour uniquement corriger l’erreur de build / freeze, il faut au minimum pousser :

1. **app/faq/page.tsx** : retirer `import { Metadata } from "next";`
2. **lib/firebase/config.ts** : version avec `isBuildPhase()` et pas d’init Firebase pendant le build
3. **lib/firebase/services-service.ts** : version avec `isBuildPhase()`, timeout et repli statique
4. **package.json** : `"build": "node scripts/build.js"` et dépendance `cross-env`
5. **scripts/build.js** : contenu actuel (création/suppression de `.build-in-progress` + appel à `next build`)
6. **.gitignore** : ajout de `.build-in-progress` et `/coverage/` si tu ajoutes les tests plus tard

Sans pousser ces changements, la prod continuera à avoir :
- un risque d’échec de build à cause de `Metadata` dans la FAQ,
- un build qui peut rester bloqué à cause de Firebase pendant `next build`.
