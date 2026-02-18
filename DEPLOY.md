# Déploiement AlloSupport (Next.js + PM2)

## Si le build « freeze » (reste bloqué)

**Cause possible 1 – Firebase**  
Le projet est configuré pour ne pas utiliser Firebase pendant le build (fichier `.build-in-progress` + env). Toujours lancer le build avec **`npm run build`** (script qui crée ce fichier). En CI : `BUILD_STATIC_SERVICES=1 npm run build`.

**Cause possible 2 – Next.js 14.2 + Windows**  
Sur certaines machines (surtout Windows), le build peut rester bloqué après la ligne « Environments: .env.local », sans erreur. Ce n’est en général **pas** Firebase (testé en désactivant Firebase : le blocage reste).

À essayer :
- **Sur le serveur Linux** : lancer `npm run build` (souvent plus stable qu’en local Windows).
- **Mémoire** : `npm run build:debug` (Node avec 4 Go) pour éviter un blocage lié à la RAM.
- **Diagnostic** : `npx next build --experimental-debug-memory-usage` pour voir où le build s’arrête.
- **Si le blocage continue** : tester un downgrade vers Next.js 14.1.x (bug connu sur 14.2 dans certains environnements).

---

## Erreur « Could not find a production build in the .next directory »

Cette erreur signifie que `next start` est lancé sans avoir exécuté `next build` au préalable.

## Sur le serveur (Linux)

```bash
cd /home/brahim/support/allosupport

# 1. Installer les deps si besoin (après un git pull)
npm ci

# 2. Créer le build de production (obligatoire avant next start)
npm run build

# 3. Redémarrer l’app avec PM2
pm2 restart allosupp
# ou, si tu utilises un autre nom : pm2 restart ecosystem.config.js
```

## Tests (Linux / CI)

```bash
cd /home/brahim/support/allosupport
npm ci
npm test          # tests unitaires
npm run test:ci   # tests + rapport de couverture (pour CI)
```

## Après chaque déploiement (git pull)

Exécuter au minimum :

```bash
cd /home/brahim/support/allosupport
npm ci
npm run build
pm2 restart allosupp
```

Tu peux automatiser avec un script `deploy.sh` sur le serveur :

```bash
#!/bin/bash
set -e
cd /home/brahim/support/allosupport
git pull
npm ci
npm run build
pm2 restart allosupp
```

Rendre le script exécutable : `chmod +x deploy.sh`, puis lancer `./deploy.sh` à chaque déploiement.
