"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjectBySlug, projects } from "@/lib/projects";
import { useLanguage, useT } from "@/lib/LanguageContext";

export default function ProjectsPageContent() {
  const { lang } = useLanguage();
  const t = useT();
  const featured = getProjectBySlug("mathis-bs")!;
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="flex-1 px-6 pb-28 pt-32 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {t.nav.backHome}
          </Link>

          <h1 className="mt-6 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            {t.projectsPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.projectsPage.intro}
          </p>

          <Link
            href={`/projects/${featured.slug}`}
            data-cursor-hover
            className="group mt-12 flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/50 transition-colors duration-300 hover:border-violet/50 sm:flex-row"
          >
            <div className="relative h-48 sm:h-auto sm:w-2/5">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet">
                {t.projects.current}
              </span>
              <h2 className="font-display text-2xl text-foreground">{featured.title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                {featured.description[lang]}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-foreground">
                {t.projects.viewProject}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          <div className="mt-20">
            <h3 className="mb-8 font-display text-xl text-foreground">
              {t.projectsPage.other}
              <span className="ml-2 text-sm font-normal text-muted">
                ({others.length})
              </span>
            </h3>
            <ProjectsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
