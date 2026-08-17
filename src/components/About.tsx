"use client";

import {
  Sparkles,
  PenTool,
  Users,
  LayoutGrid,
  Bot,
  Workflow,
} from "lucide-react";
import { FadeUp, RevealWords } from "./motion/Reveal";

const skills = [
  {
    icon: Users,
    title: "UX Research",
    desc: "Interviews, parcours utilisateurs, tests d'usabilité pour ancrer chaque décision dans le réel.",
  },
  {
    icon: PenTool,
    title: "UI Design",
    desc: "Interfaces soignées, systèmes typographiques et visuels cohérents, du wireframe au pixel-perfect.",
  },
  {
    icon: LayoutGrid,
    title: "Design Systems",
    desc: "Composants réutilisables et documentés pour accélérer le passage du design au code.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Design",
    desc: "Intégration d'outils IA (génération, prototypage, automatisation) dans le process créatif.",
  },
  {
    icon: Workflow,
    title: "Product Strategy",
    desc: "Cadrage produit, priorisation et roadmap pour des solutions SaaS B2B à fort enjeu métier.",
  },
  {
    icon: Sparkles,
    title: "Prototypage",
    desc: "Prototypes interactifs à haute fidélité (Figma) pour valider vite, itérer mieux.",
  },
];

const marqueeItems = [
  "UX Research",
  "UI Design",
  "Design Systems",
  "Prototypage",
  "AI-Augmented Design",
  "Product Strategy",
  "Data Visualization",
  "Design-to-Code",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-baseline gap-4">
          <span className="font-display text-sm text-violet">01</span>
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text="À propos" />
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <p className="text-2xl font-light leading-relaxed text-foreground sm:text-3xl">
              Designer produit passionnée par la conception
              d&apos;expériences digitales{" "}
              <span className="text-gradient font-medium">
                intuitives, élégantes et augmentées par l&apos;IA
              </span>
              .
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Je travaille à la croisée du design, de la donnée et des
              outils d&apos;intelligence artificielle pour concevoir des
              produits qui simplifient des sujets complexes — notamment dans
              le SaaS B2B. Mon approche : comprendre le métier en profondeur,
              prototyper vite, et livrer des interfaces que les équipes tech
              peuvent construire sans friction.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.06}>
                <div
                  data-cursor-hover
                  className="group h-full rounded-2xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:bg-surface"
                >
                  <s.icon className="h-5 w-5 text-violet transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <h3 className="mt-4 font-display text-sm text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-xl text-muted/40 sm:text-2xl"
            >
              {item}
              <span className="text-violet/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
