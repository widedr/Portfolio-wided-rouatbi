"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./motion/Reveal";

type Category = "Plateformes & Produits" | "Sites web" | "Apps mobiles";

type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  role: string;
  duration: string;
};

const categoryStyle: Record<
  Category,
  { from: string; to: string; text: string }
> = {
  "Plateformes & Produits": {
    from: "from-violet/25",
    to: "to-violet/5",
    text: "text-violet",
  },
  "Sites web": { from: "from-yellow/25", to: "to-yellow/5", text: "text-yellow" },
  "Apps mobiles": { from: "from-pink/25", to: "to-pink/5", text: "text-pink" },
};

const projects: Project[] = [
  {
    title: "Attunea",
    category: "Plateformes & Produits",
    description:
      "Unifier technologie, design et besoins utilisateurs dans une expérience fluide, pour l'app web (CRM) et le site.",
    tags: ["UI/UX", "Dashboard", "Design System"],
    role: "UX/UI Designer",
    duration: "8 mois",
  },
  {
    title: "Five Guys",
    category: "Plateformes & Produits",
    description:
      "Optimiser le workflow et la gestion des formulaires pour fluidifier les processus organisationnels.",
    tags: ["Dashboard", "Design System", "Audit"],
    role: "UX/UI Designer",
    duration: "4 mois",
  },
  {
    title: "Travel Shaper",
    category: "Plateformes & Produits",
    description:
      "Plateforme de voyage propulsée par l'IA centralisant réservation, découverte et planification.",
    tags: ["Dashboard", "Design System", "Audit"],
    role: "UX/UI Designer",
    duration: "10 mois",
  },
  {
    title: "Carrefour.tn",
    category: "Plateformes & Produits",
    description:
      "Refonte du site Carrefour Tunisie pour une expérience d'achat digitale moderne et fluide.",
    tags: ["UI/UX", "Dashboard", "Audit"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
  {
    title: "Planet Tax Solution",
    category: "Plateformes & Produits",
    description:
      "Expérience fluide et intuitive pour les marchands, du back-office au front-office fiscal.",
    tags: ["Wireframes", "Backoffice", "Front office"],
    role: "UX/UI Designer",
    duration: "5 mois",
  },
  {
    title: "Clever Harvest",
    category: "Plateformes & Produits",
    description:
      "Plateforme de traçabilité intuitive pour des produits agricoles comme l'olive, le café et le cacao.",
    tags: ["Design System", "Dashboard", "Responsive"],
    role: "UX/UI Designer",
    duration: "5 mois",
  },
  {
    title: "Demco",
    category: "Plateformes & Produits",
    description:
      "Plateforme B2B pour la fabrication durable, simplifiant lancement de collections et collaborations.",
    tags: ["Wireframes", "B2B Platform", "Research"],
    role: "UX/UI Designer",
    duration: "7 mois",
  },
  {
    title: "Rizouya",
    category: "Plateformes & Produits",
    description:
      "Plateforme tunisienne connectant chercheurs d'emploi et employeurs.",
    tags: ["Wireframes", "Benchmark"],
    role: "UX/UI Designer",
    duration: "4 mois",
  },
  {
    title: "AVS VIP Services",
    category: "Plateformes & Produits",
    description:
      "Gestion des contrats membres et suivi des commandes pour un club VIP.",
    tags: ["Wireframes", "Research"],
    role: "UX/UI Designer",
    duration: "6 mois",
  },
  {
    title: "Clinique Vétérinaire Hammamet",
    category: "Plateformes & Produits",
    description:
      "Site et app pour aider les propriétaires d'animaux à trouver soins, toilettage et adoption.",
    tags: ["Branding", "Benchmark"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
  {
    title: "Bridge Global Funding",
    category: "Plateformes & Produits",
    description:
      "Plateforme data-driven connectant des femmes entrepreneures à des investisseurs.",
    tags: ["Design System", "Research", "Back office"],
    role: "UX/UI Designer",
    duration: "6 mois",
  },
  {
    title: "Convergence",
    category: "Sites web",
    description:
      "Transformation digitale pour l'assurance, la banque et la finance, avec chatbot intégré.",
    tags: ["Chatbot", "Design System", "Mobile App"],
    role: "UX/UI Designer",
    duration: "6 mois",
  },
  {
    title: "Fuzé Digital Africa",
    category: "Sites web",
    description: "Démocratiser l'accès au financement en Afrique francophone.",
    tags: ["Landing page", "Visual design"],
    role: "UX/UI Designer",
    duration: "1 mois",
  },
  {
    title: "ESS Identity",
    category: "Sites web",
    description:
      "Plateforme de billetterie en ligne pour les matchs de football du club ESS.",
    tags: ["Landing page", "Visual design"],
    role: "UX/UI Designer",
    duration: "1 mois",
  },
  {
    title: "Masaya",
    category: "Apps mobiles",
    description:
      "Destination tout-en-un pour séjours, activités et événements hôteliers.",
    tags: ["Design System", "Mobile First"],
    role: "UX/UI Designer",
    duration: "4 mois",
  },
  {
    title: "Comptat Crédit Débit",
    category: "Apps mobiles",
    description: "Consulter revenus et dépenses en toute simplicité, depuis son mobile.",
    tags: ["Design System", "Visual design"],
    role: "UX/UI Designer",
    duration: "1 mois",
  },
  {
    title: "Sheikh Zayed Grand Mosque",
    category: "Apps mobiles",
    description:
      "App visiteurs pour découvrir histoire, architecture et horaires de prière.",
    tags: ["Design System", "Visual design"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
  {
    title: "Kindeal",
    category: "Apps mobiles",
    description:
      "App de contrôle parental alliant neurosciences et éducation positive.",
    tags: ["Design System", "Visual design"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
  {
    title: "Split",
    category: "Apps mobiles",
    description: "Première application de covoiturage nouvelle génération en Tunisie.",
    tags: ["Design System", "Visual design"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
  {
    title: "Comptat RH",
    category: "Apps mobiles",
    description:
      "Gestion des congés, du temps de travail et des documents RH pour les entreprises.",
    tags: ["Design System", "Visual design"],
    role: "UX/UI Designer",
    duration: "3 mois",
  },
];

const filters: ("Tous" | Category)[] = [
  "Tous",
  "Plateformes & Produits",
  "Sites web",
  "Apps mobiles",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");
  const visible =
    active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="mt-16">
      <FadeUp>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-xl text-foreground">
            Autres projets
            <span className="ml-2 text-sm font-normal text-muted">
              ({projects.length})
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-cursor-hover
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  active === f
                    ? "border-violet bg-violet/15 text-foreground"
                    : "border-border text-muted hover:border-violet/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => {
            const style = categoryStyle[p.category];
            return (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                data-cursor-hover
                className="group overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors duration-300 hover:border-violet/40 hover:bg-surface"
              >
                <div
                  className={`relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-br ${style.from} ${style.to}`}
                >
                  <span
                    className={`font-display text-5xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110 ${style.text}`}
                  >
                    {p.title.slice(0, 2).toUpperCase()}
                  </span>
                  <span
                    className={`absolute right-3 top-3 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-[10px] uppercase tracking-wide ${style.text}`}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-base text-foreground">
                    {p.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <p className="mt-3 text-xs text-muted/70">
                    {p.role} · {p.duration}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
