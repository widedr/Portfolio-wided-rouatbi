"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Calculator, LineChart, FileCheck2 } from "lucide-react";
import { RevealWords, FadeUp } from "./motion/Reveal";
import TiltCard from "./TiltCard";
import ProjectsGrid from "./ProjectsGrid";
import Magnetic from "./motion/Magnetic";
import { useLanguage, useT } from "@/lib/LanguageContext";
import { getProjectBySlug } from "@/lib/projects";

const highlightIcons = [Building2, Calculator, LineChart, FileCheck2];

export default function Projects() {
  const { lang } = useLanguage();
  const t = useT();
  const mathis = getProjectBySlug("mathis-bs")!;

  return (
    <section id="work" className="relative px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-violet">{t.projects.number}</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text={t.projects.title} />
          </h2>
        </div>

        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted/70">
          {t.projects.current}
        </p>

        <FadeUp>
          <TiltCard className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative order-2 flex flex-col justify-between p-8 sm:p-10 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl text-foreground sm:text-3xl">
                      {mathis.title}
                    </h3>
                    <span className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet">
                      {t.projects.mathisTag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{t.projects.mathisSubtitle}</p>

                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    <strong className="font-medium text-foreground">{mathis.title}</strong>{" "}
                    {mathis.longDescription[lang][0]}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {t.projects.highlights.map((h, i) => {
                      const Icon = highlightIcons[i];
                      return (
                        <div key={h.title} className="flex gap-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{h.title}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-muted">{h.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {mathis.tags.map((tag) => (
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
                  src={mathis.image!}
                  alt={mathis.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-l" />
                <Link
                  href={`/projects/${mathis.slug}`}
                  data-cursor-hover
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </TiltCard>
        </FadeUp>

        <div className="mt-16">
          <FadeUp>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-display text-xl text-foreground">
                {t.projects.other}
                <span className="ml-2 text-sm font-normal text-muted">(21)</span>
              </h3>
              <Magnetic>
                <Link
                  href="/projects"
                  data-cursor-hover
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-violet"
                >
                  {t.projects.viewAll}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
            </div>
          </FadeUp>

          <ProjectsGrid showFilters={false} limit={6} />
        </div>
      </div>
    </section>
  );
}
