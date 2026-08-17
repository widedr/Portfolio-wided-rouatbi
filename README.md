# Wided Rouatbi — Portfolio

Portfolio créatif de **Wided Rouatbi**, UX/UI Designer, Product Designer & AI-Augmented Designer.
Construit avec Next.js (App Router), TypeScript, Tailwind CSS 4, Framer Motion et Lenis (scroll fluide).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — micro-interactions, reveal au scroll, tilt, curseur personnalisé
- **Lenis** — smooth scroll
- **lucide-react** — icônes

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # servir le build de production
npm run lint     # ESLint
```

## ⚠️ Remplacer les visuels placeholder

Le design ne peut pas encore embarquer tes vraies images (elles ont été partagées dans la
conversation, pas comme fichiers). Deux dégradés générés automatiquement servent de
placeholders. Pour les remplacer, dépose tes fichiers **exactement** à ces emplacements
(mêmes noms, mêmes extensions) :

| Emplacement | Contenu attendu |
| --- | --- |
| `public/images/profile.png` | Ta photo de portrait (format portrait, ex. 4:5) |
| `public/images/mathis-bs-dashboard.png` | La capture d'écran du dashboard "Patrimoine" de Mathis BS |

Aucun changement de code n'est nécessaire — les composants pointent déjà vers ces chemins.

## Structure

```
src/
  app/            # layout, page, metadata, styles globaux
  components/      # Navbar, Hero, About, Experience, Projects, Contact, Footer
  components/motion # primitives d'animation réutilisables (Reveal, Magnetic)
  lib/            # utilitaires
public/images/    # visuels (photo, capture Mathis BS)
```

## Déploiement sur Vercel

1. Pousser le repo sur GitHub (déjà fait sur la branche de ce projet).
2. Sur [vercel.com/new](https://vercel.com/new), importer le repo GitHub `portfolio-wided-rouatbi`.
3. Vercel détecte automatiquement Next.js — aucune configuration supplémentaire n'est requise.
4. Déployer. Chaque push sur la branche par défaut redéploiera automatiquement.
