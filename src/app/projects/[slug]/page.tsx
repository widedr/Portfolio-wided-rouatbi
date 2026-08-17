import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/projects";

const categoryStyle: Record<string, { from: string; to: string; text: string }> = {
  "Plateformes & Produits": { from: "from-violet/30", to: "to-violet/5", text: "text-violet" },
  "Sites web": { from: "from-yellow/30", to: "to-yellow/5", text: "text-yellow" },
  "Apps mobiles": { from: "from-pink/30", to: "to-pink/5", text: "text-pink" },
  "Produit SaaS": { from: "from-violet/30", to: "to-yellow/10", text: "text-violet" },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Wided Rouatbi`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const style = categoryStyle[project.category];

  return (
    <>
      <Navbar />
      <main className="flex-1 px-6 pb-28 pt-32 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Tous les projets
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <span
              className={`rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-wide ${style.text}`}
            >
              {project.category}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>{project.employer}</span>
            <span>·</span>
            <span>{project.role}</span>
            <span>·</span>
            <span>{project.duration}</span>
          </div>

          <div
            className={`relative mt-10 h-72 overflow-hidden rounded-3xl border border-border sm:h-[28rem] ${
              project.image ? "" : `bg-gradient-to-br ${style.from} ${style.to}`
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className={`font-display text-8xl font-bold opacity-20 sm:text-9xl ${style.text}`}>
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href={`/projects/${next.slug}`}
            data-cursor-hover
            className="group mt-20 flex items-center justify-between rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-violet/40 sm:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Projet suivant</p>
              <p className="mt-1 font-display text-xl text-foreground">{next.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
          </Link>

          <Link
            href="mailto:widedrouatbi@gmail.com"
            data-cursor-hover
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            Discuter d&apos;un projet similaire
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
