const { SiteChecker } = require("broken-link-checker");

const brokenLinks = [];

const siteChecker = new SiteChecker(
  {
    excludeExternalLinks: false,
    filterLevel: 3,
  },
  {
    error: (error) => {
      console.error("❌ Erreur:", error);
    },
    link: (result) => {
      if (result.broken) {
        const message = `🔴 CASSÉ: ${result.url.original} (sur ${result.base.original})`;
        brokenLinks.push(message);
        console.log(message);
      }
    },
    end: () => {
      if (brokenLinks.length === 0) {
        console.log("✅ Scan terminé - aucun lien cassé détecté (interne/externe selon la config).");
      } else {
        console.log(`⚠️ Scan terminé - ${brokenLinks.length} lien(s) cassé(s) détecté(s).`);
      }
    },
  }
);

siteChecker.enqueue("http://localhost:3000");

