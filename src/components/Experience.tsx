"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealWords, FadeUp } from "./motion/Reveal";

const experiences = [
  {
    company: "Neoshore",
    role: "UX/UI Designer & Product Designer",
    period: "Mars 2026 — Aujourd'hui",
    current: true,
    description:
      "Conception de l'expérience produit pour des solutions SaaS B2B destinées aux acteurs de l'immobilier et de la fiscalité. De la recherche utilisateur à l'architecture de l'information, du design system au prototypage haute-fidélité — en collaboration étroite avec les équipes produit et tech. Intégration d'outils IA pour accélérer l'idéation et fluidifier le passage du design au code.",
    tags: ["SaaS B2B", "Design System", "Fiscalité immobilière", "AI Tooling"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-violet">02</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text="Parcours" />
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute left-0 top-1 h-full w-px bg-border sm:left-1" />
          <motion.div
            style={{ height }}
            className="absolute left-0 top-1 w-px bg-gradient-to-b from-violet to-yellow sm:left-1"
          />

          {experiences.map((exp) => (
            <FadeUp key={exp.company} className="relative pb-4">
              <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-14">
                <span className="relative flex h-3 w-3">
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-60" />
                  )}
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-violet to-yellow" />
                </span>
              </span>

              <div
                data-cursor-hover
                className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-violet/50 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">
                    {exp.role}
                    <span className="text-muted"> · {exp.company}</span>
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet">
                      Poste actuel
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{exp.period}</p>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {exp.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
