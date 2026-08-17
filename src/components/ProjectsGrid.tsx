"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, type ProjectCategory } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const filters: ("Tous" | ProjectCategory)[] = ["Tous", ...categories];

export default function ProjectsGrid({
  showFilters = true,
  limit,
}: {
  showFilters?: boolean;
  limit?: number;
}) {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");
  const source = projects.filter((p) => !p.featured);
  let visible = active === "Tous" ? source : source.filter((p) => p.category === active);
  if (limit) visible = visible.slice(0, limit);

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
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
      )}

      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
