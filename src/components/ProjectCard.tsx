"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Project } from "@/lib/projects";

const categoryStyle: Record<string, { from: string; to: string; text: string }> = {
  "Plateformes & Produits": {
    from: "from-violet/25",
    to: "to-violet/5",
    text: "text-violet",
  },
  "Sites web": { from: "from-yellow/25", to: "to-yellow/5", text: "text-yellow" },
  "Apps mobiles": { from: "from-pink/25", to: "to-pink/5", text: "text-pink" },
  "Produit SaaS": { from: "from-violet/25", to: "to-yellow/10", text: "text-violet" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const style = categoryStyle[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-hover
        className="group block overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors duration-300 hover:border-violet/40 hover:bg-surface"
      >
        <div
          className={`relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-br ${style.from} ${style.to}`}
        >
          <span
            className={`font-display text-5xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110 ${style.text}`}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </span>
          <span
            className={`absolute right-3 top-3 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-[10px] uppercase tracking-wide ${style.text}`}
          >
            {project.category}
          </span>
        </div>
        <div className="p-5">
          <h4 className="font-display text-base text-foreground">{project.title}</h4>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-3 text-xs text-muted/70">
            {project.role} · {project.duration}
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
