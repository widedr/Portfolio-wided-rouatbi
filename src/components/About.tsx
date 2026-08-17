"use client";

import { Search, PenTool, Wrench, Sparkles } from "lucide-react";
import { FadeUp, RevealWords } from "./motion/Reveal";
import { useT } from "@/lib/LanguageContext";

const expertiseIcons = [Search, PenTool, Wrench, Sparkles];

export default function About() {
  const t = useT();

  return (
    <section id="about" className="relative px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-violet">{t.about.number}</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text={t.about.title} />
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <p className="text-2xl font-light leading-relaxed text-foreground sm:text-3xl">
              {t.about.leadPrefix}
              <span className="text-gradient font-medium">
                {t.about.leadHighlight}
              </span>
              .
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              {t.about.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted/70">
                  {t.about.education}
                </p>
                <p className="mt-1 text-sm text-foreground">{t.about.educationValue}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted/70">
                  {t.about.languages}
                </p>
                <p className="mt-1 text-sm text-foreground">{t.about.languagesValue}</p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.about.expertise.map((s, i) => {
              const Icon = expertiseIcons[i];
              return (
                <FadeUp key={s.title} delay={i * 0.06}>
                  <div
                    data-cursor-hover
                    className="group h-full rounded-2xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:bg-surface"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet/25 to-yellow/15 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-violet transition-transform duration-300 group-hover:rotate-6" />
                    </span>
                    <h3 className="mt-4 font-display text-sm text-foreground">
                      {s.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[...t.about.marquee, ...t.about.marquee].map((item, i) => (
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
