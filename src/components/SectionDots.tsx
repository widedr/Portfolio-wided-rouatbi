"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/lib/LanguageContext";

export default function SectionDots() {
  const [active, setActive] = useState("top");
  const t = useT();
  const sections = [
    { id: "top", label: t.sectionDots.top },
    { id: "about", label: t.sectionDots.about },
    { id: "experience", label: t.sectionDots.experience },
    { id: "work", label: t.sectionDots.work },
    { id: "contact", label: t.sectionDots.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigation par section"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-cursor-hover
            className="group flex items-center gap-3"
          >
            <span
              className={`text-xs tracking-wide transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-foreground opacity-100"
                  : "translate-x-2 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              {isActive && (
                <motion.span
                  layoutId="section-dot-ring"
                  className="absolute h-full w-full rounded-full border border-violet"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-violet" : "bg-muted/50 group-hover:bg-foreground"
                }`}
              />
            </span>
          </a>
        );
      })}
    </nav>
  );
}
