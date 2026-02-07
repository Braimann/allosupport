# Analyse du menu de navigation (Header) – Problème mobile

## Contexte
- **Fichier :** `components/Header.tsx`
- **Problème :** Le menu navbar ne fonctionne pas correctement sur mobile.
- **Stack :** Next.js, React, Tailwind CSS, Framer Motion (`motion`, `AnimatePresence`), lucide-react, `useAuth`.

---

## 1. Liste de tous les boutons et liens du menu

### 1.1 Barre du haut (Top Bar) – visible uniquement en desktop (`hidden md:block`)
| Élément | Type | Action |
|--------|------|--------|
| Téléphone | lien `<a href="tel:...">` | Appel |
| Email | lien `<a href="mailto:...">` | Mail |
| "Techniciens en ligne : Dispo immédiate" | texte animé | Aucun clic |

### 1.2 Barre principale (Desktop – `hidden lg:flex`)
| Label | Type | Comportement |
|-------|------|--------------|
| **Accueil** | `Link` vers `/` | Lien simple |
| **Particuliers** | `Link` + dropdown | Hover ouvre dropdown (services particuliers) |
| **Entreprises** | `Link` + dropdown | Hover ouvre dropdown (services entreprises) |
| **Tarifs** | `Link` vers `/#tarifs` | Lien simple, style mis en avant |
| **Blog** | `Link` vers `/blog` | Lien simple |
| **Outils** | `Link` + dropdown | Hover ouvre dropdown (liste d’outils) |
| **Connexion / Mon Compte** | `Link` vers `/login` ou `/dashboard` | Selon `user` |
| **Réponse Immédiate** | lien WhatsApp | `target="_blank"` |

### 1.3 Bouton hamburger mobile
- **Position :** visible en mobile uniquement (`lg:hidden`).
- **Élément :** `<button onClick={() => setIsMenuOpen(!isMenuOpen)}>`.
- **Contenu :** icône `Menu` ou `X` selon `isMenuOpen` (animation Framer Motion).
- **aria-label :** `"Toggle menu"`.

### 1.4 Menu mobile (panneau qui s’ouvre sous la barre)
- **Condition d’affichage :** `isMenuOpen === true` + `lg:hidden`.
- **Contenu :**
  - Même liste que le desktop : Accueil, Particuliers, Entreprises, Tarifs, Blog, Outils.
  - **Particuliers / Entreprises / Outils :** en mobile ce sont des **boutons** qui appellent `handleMobileDropdownToggle(link.dropdownKey!)` pour ouvrir/fermer le sous-menu (état `mobileDropdown`).
  - Les autres (Accueil, Tarifs, Blog) sont des **Links** avec `onClick={() => setIsMenuOpen(false)}`.
  - En bas du panneau :
    - Lien **Mon Compte** ou **Connexion** (selon `user`), avec `onClick={() => setIsMenuOpen(false)}`.
    - Bouton **Réponse Immédiate** (WhatsApp), avec `onClick={() => setIsMenuOpen(false)}`.

---

## 2. États React utilisés

```ts
const [isMenuOpen, setIsMenuOpen] = useState(false);      // ouverture du panneau mobile
const [scrolled, setScrolled] = useState(false);          // scroll pour shadow
const [openDropdown, setOpenDropdown] = useState<string | null>(null);   // desktop dropdown
const [mobileDropdown, setMobileDropdown] = useState<string | null>(null); // mobile sous-menus
```

- **isMenuOpen :** true = panneau mobile visible.
- **mobileDropdown :** `"particuliers"` | `"entreprises"` | `"tools"` | null pour savoir quel sous-menu mobile est ouvert.

---

## 3. Handlers

```ts
// Desktop : toggle dropdown au clic
const handleDropdownToggle = (key: string) => {
  setOpenDropdown(openDropdown === key ? null : key);
};

// Mobile : toggle sous-menu (Particuliers, Entreprises, Outils)
const handleMobileDropdownToggle = (key: string) => {
  setMobileDropdown(mobileDropdown === key ? null : key);
};
```

- En desktop, les dropdowns sont ouverts au **hover** (`onMouseEnter` / `onMouseLeave`), pas avec ce handler (qui existe mais n’est pas utilisé en desktop dans le code actuel).
- En mobile, seuls les **boutons** avec `hasDropdown` utilisent `handleMobileDropdownToggle`; les liens fermant le menu avec `setIsMenuOpen(false)`.

---

## 4. Structure JSX importante (mobile)

```jsx
{/* Bouton hamburger */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="lg:hidden p-2 ..."
  aria-label="Toggle menu"
>
  {isMenuOpen ? <X /> : <Menu />}
</button>

{/* Panneau mobile */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden overflow-hidden bg-white border-t border-slate-200"
    >
      <div className="px-4 py-4 space-y-2">
        {navLinks.map((link) => (
          <div key={link.href}>
            {link.hasDropdown ? (
              <div>
                <button onClick={() => handleMobileDropdownToggle(link.dropdownKey!)} ...>
                  {link.label}
                  <ChevronDown className={mobileDropdown === link.dropdownKey ? "rotate-180" : ""} />
                </button>
                <AnimatePresence>
                  {mobileDropdown === link.dropdownKey && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ ... }} exit={{ ... }}>
                      {/* Links des services */}
                      <Link href={...} onClick={() => setIsMenuOpen(false)}>...</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>...</Link>
            )}
          </div>
        ))}
        {/* Compte + WhatsApp */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## 5. Points pouvant expliquer “le menu ne marche pas” sur mobile

1. **Z-index / superposition**
   - Le header a `z-50`. Si un autre élément (overlay, modal, bandeau) a un `z-index` plus élevé ou un stacking context qui capture les clics, le bouton hamburger ou les liens du panneau peuvent ne pas recevoir les clics.

2. **Overflow / hauteur**
   - Animation avec `height: "auto"` dans Framer Motion : sur certains navigateurs mobiles, des bugs de rendu ou de layout peuvent faire que le panneau a une hauteur 0 ou n’est pas cliquable.
   - Le conteneur parent du menu a `overflow-hidden` ; si un parent plus haut a aussi `overflow: hidden` avec une hauteur limitée, le contenu mobile peut être coupé ou inaccessible.

3. **Touch / clic**
   - Sur mobile, les “hover” n’existent pas ; le code desktop repose sur `onMouseEnter`/`onMouseLeave`, mais le menu mobile utilise bien des `onClick` sur le bouton hamburger et sur les boutons de dropdown. Vérifier qu’aucun élément ne capture le `touchstart`/`touchend` sans que le `click` soit déclenché (zones trop petites, délais, etc.).

4. **Fermeture au clic extérieur**
   - En desktop, un `useEffect` avec `handleClickOutside` ferme le dropdown en clic hors de `dropdownRef`. Ce ref est attaché uniquement aux liens desktop. En mobile, rien ne ferme `isMenuOpen` quand on clique en dehors du menu ; ce n’est pas forcément la cause du “ne marche pas”, mais un overlay ou un fond cliquable pourrait être ajouté pour améliorer le comportement.

5. **AnimatePresence et démontage**
   - Si `AnimatePresence` ou l’animation `exit` empêchent le démontage correct du panneau, l’état et le DOM peuvent rester incohérents (menu “ouvert” en state mais plus visible, ou inverse). Vérifier que les clics sur le bouton changent bien `isMenuOpen` et que le panneau se monte/démonte.

6. **AuthContext / chargement**
   - `const { user, loading } = useAuth();` : si un écran de chargement ou un redirect bloque le rendu ou la page, le header peut sembler “ne pas réagir”. À vérifier seulement si le problème apparaît surtout juste après chargement.

7. **Boutons vs liens dans les dropdowns mobile**
   - Les items avec dropdown (Particuliers, Entreprises, Outils) sont des `<button>`. Les sous-items sont des `<Link>`. Vérifier qu’il n’y a pas de problème de propagation (event bubbling) ou de focus qui empêche le clic (par exemple un formulaire ou un autre listener qui fait `preventDefault()` plus haut).

---

## 6. Code complet du composant

Le composant complet se trouve dans : **`components/Header.tsx`** (environ 631 lignes).

- Lignes 134–204 : état et handlers.
- Lignes 264–384 : bouton hamburger et structure de la barre.
- Lignes 392–427 : condition d’affichage du panneau mobile et boucle sur `navLinks`.
- Lignes 409–416 : bouton mobile pour les entrées avec dropdown (`handleMobileDropdownToggle`).
- Lignes 419–426 : contenu conditionnel du sous-menu mobile (`mobileDropdown === link.dropdownKey`).
- Lignes 433–437 : lien simple mobile avec `onClick={() => setIsMenuOpen(false)}`.
- Lignes 447–478 : bloc Compte / Connexion et WhatsApp en mobile.

---

## 7. Instructions à donner à Claude Sonnet

- **Objectif :** faire en sorte que le menu de navigation mobile fonctionne correctement (ouverture/fermeture du panneau, ouverture/fermeture des sous-menus Particuliers, Entreprises, Outils, et navigation vers les liens).
- **Contraintes :** garder la structure actuelle (Header.tsx), Framer Motion et le design existant ; ne pas casser le menu desktop.
- **À fournir à Claude :** ce fichier d’analyse + le contenu de `components/Header.tsx` (ou le chemin du fichier dans le projet).
- **Souhaits possibles :** proposer des corrections ciblées (z-index, overflow, animation mobile, fermeture au clic extérieur, gestion du touch) et si besoin une version simplifiée du menu mobile pour débugger (sans animation d’abord).
