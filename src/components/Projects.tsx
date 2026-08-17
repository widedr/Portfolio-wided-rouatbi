"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, Calculator, LineChart, FileCheck2 } from "lucide-react";
import { RevealWords, FadeUp } from "./motion/Reveal";
import TiltCard from "./TiltCard";

const highlights = [
  {
    icon: Building2,
    title: "Vision patrimoniale consolidée",
    desc: "Centralisation des données patrimoniales, cadastrales et fiscales.",
  },
  {
    icon: Calculator,
    title: "Suivi des taxes foncières",
    desc: "Analyse fiabilisée des charges fiscales par bien et par lot.",
  },
  {
    icon: LineChart,
    title: "Simulation d'impacts",
    desc: "Projection des évolutions fiscales futures pour anticiper les décisions.",
  },
  {
    icon: FileCheck2,
    title: "Traitements automatisés",
    desc: "Processus comptables et déclaratifs fiabilisés et automatisés.",
  },
];

const tags = [
  "SaaS B2B",
  "Fiscalité immobilière",
  "Product Design",
  "Design System",
  "Data Visualization",
];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-violet">03</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text="Projet phare" />
          </h2>
        </div>

        <FadeUp>
          <TiltCard className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative order-2 flex flex-col justify-between p-8 sm:p-10 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl text-foreground sm:text-3xl">
                      Mathis BS
                    </h3>
                    <span className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet">
                      Bailleurs sociaux
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Plateforme SaaS de gestion fiscale immobilière
                  </p>

                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    <strong className="font-medium text-foreground">
                      Mathis BS
                    </strong>{" "}
                    est une solution SaaS dédiée aux bailleurs sociaux pour
                    simplifier et automatiser la gestion de leur fiscalité
                    immobilière. La plateforme centralise les données
                    patrimoniales, cadastrales et fiscales afin de faciliter
                    le suivi des taxes foncières, l&apos;analyse des charges
                    fiscales, la simulation des impacts futurs et les
                    traitements comptables et déclaratifs — pour fiabiliser
                    les données, automatiser les processus métier et offrir
                    aux équipes une vision consolidée de leur patrimoine et
                    de leurs obligations fiscales.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {highlights.map((h) => (
                      <div key={h.title} className="flex gap-3">
                        <h.icon className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {h.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted">
                            {h.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative order-1 aspect-[4/3] overflow-hidden border-b border-border bg-[#0b0a10] lg:order-2 lg:aspect-auto lg:border-b-0 lg:border-l">
                <Image
                  src="/images/mathis-bs-dashboard.png"
                  alt="Dashboard patrimoine de la plateforme Mathis BS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-l" />
                <div
                  data-cursor-hover
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </TiltCard>
        </FadeUp>
      </div>
    </section>
  );
}
