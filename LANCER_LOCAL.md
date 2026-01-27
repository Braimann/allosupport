# 🚀 Lancer l'application AlloSupport en local

## Prérequis

- Node.js 18+ installé
- npm installé
- Fichier `.env.local` présent à la racine du projet

## Étapes pour lancer l'application

### 1. Ouvrir un terminal dans le dossier du projet

```bash
cd C:\Users\lenovo\Downloads\tech
```

### 2. Installer les dépendances (si pas déjà fait)

```bash
npm install
```

### 3. Vérifier que .env.local existe

```bash
# Sur Windows PowerShell
Get-Content .env.local

# Vous devriez voir toutes les variables Firebase
```

### 4. Lancer l'application en mode développement

```bash
npm run dev
```

### 5. Ouvrir dans le navigateur

L'application sera accessible sur :
- **http://localhost:3000**

### 6. Tester la page admin

- **http://localhost:3000/admin/login**
- Email : `brahim.boumai97@gmail.com`
- Mot de passe : (votre mot de passe Firebase)

## Commandes utiles

### Arrêter l'application
Dans le terminal où l'application tourne, appuyez sur `Ctrl + C`

### Rebuild complet (si problème)
```bash
# Nettoyer le cache
rm -rf .next
# ou sur Windows PowerShell
Remove-Item -Recurse -Force .next

# Relancer
npm run dev
```

### Voir les logs
Les logs s'affichent directement dans le terminal où vous avez lancé `npm run dev`

## Problèmes courants

### Erreur "Firebase configuration error"
- Vérifiez que `.env.local` existe et contient toutes les variables
- Redémarrez l'application (`Ctrl + C` puis `npm run dev`)

### Erreur "Port 3000 already in use"
- Un autre processus utilise le port 3000
- Arrêtez l'autre processus ou changez le port :
  ```bash
  npm run dev -- -p 3001
  ```

### Erreur "Module not found"
- Réinstallez les dépendances :
  ```bash
  rm -rf node_modules
  npm install
  ```

## Structure des URLs locales

- **Accueil** : http://localhost:3000
- **Blog** : http://localhost:3000/blog
- **Services** : http://localhost:3000/services
- **Admin Login** : http://localhost:3000/admin/login
- **Admin Dashboard** : http://localhost:3000/admin (après connexion)
