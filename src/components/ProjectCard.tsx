"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Project, type ProjectCategory, categoryLabels } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

const categoryStyle: Record<ProjectCategory, { from: string; to: string; text: string }> = {
  platforms: { from: "from-violet/25", to: "to-violet/5", text: "text-violet" },
  websites: { from: "from-yellow/25", to: "to-yellow/5", text: "text-yellow" },
  mobile: { from: "from-pink/25", to: "to-pink/5", text: "text-pink" },
  saas: { from: "from-violet/25", to: "to-yellow/10", text: "text-violet" },
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const { lang } = useLanguage();
  const style = categoryStyle[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
          delay: Math.min(index, 8) * 0.05,
        },
      }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.97, transition: { duration: 0.12, ease: "easeOut" } }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-hover
        className="group block overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors duration-300 hover:border-violet/40 hover:bg-surface"
      >
        <div
          className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${style.from} ${style.to}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span
              className={`font-display text-5xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110 ${style.text}`}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <span
            className={`absolute right-3 top-3 rounded-full border border-border/60 bg-background/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide shadow-[0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-md ${style.text}`}
          >
            {categoryLabels[project.category][lang]}
          </span>
          <h4 className="absolute bottom-3 left-4 right-4 font-display text-lg font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {project.title}
          </h4>
        </div>
        <div className="p-5">
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description[lang]}
          </p>
          <p className="mt-3 text-xs text-muted/70">
            {project.role} · {project.duration[lang]}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
