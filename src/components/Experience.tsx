"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealWords, FadeUp } from "./motion/Reveal";
import { useLanguage, useT } from "@/lib/LanguageContext";

const experiences = [
  {
    company: "Neoshore",
    role: { fr: "UX/UI Designer & Product Designer", en: "UX/UI Designer & Product Designer" },
    period: { fr: "Mars 2026 — Aujourd'hui", en: "March 2026 — Present" },
    current: true,
    description: {
      fr: "Conception de l'expérience produit pour des solutions SaaS B2B destinées aux acteurs de l'immobilier et de la fiscalité. De la recherche utilisateur à l'architecture de l'information, du design system au prototypage haute-fidélité — en collaboration étroite avec les équipes produit et tech. Intégration d'outils IA pour accélérer l'idéation et fluidifier le passage du design au code.",
      en: "Designing the product experience for B2B SaaS solutions serving real-estate and tax professionals. From user research to information architecture, from design systems to high-fidelity prototyping — working closely with product and engineering teams. Integrating AI tools to speed up ideation and streamline the handoff from design to code.",
    },
    tags: [
      { fr: "SaaS B2B", en: "SaaS B2B" },
      { fr: "Design System", en: "Design System" },
      { fr: "Fiscalité immobilière", en: "Real-estate tax" },
      { fr: "AI Tooling", en: "AI Tooling" },
    ],
  },
  {
    company: "Satoripop",
    role: { fr: "UX/UI Designer", en: "UX/UI Designer" },
    period: { fr: "Février 2022 — Mars 2026", en: "February 2022 — March 2026" },
    current: false,
    description: {
      fr: "Conception de design systems cohérents pour des clients des secteurs banque, e-commerce et voyage (Carrefour.tn, Attunea, Travel Shaper, Convergence, Bridge Global Funding...). Wireframes et prototypes interactifs en temps réel avec les développeurs, interviews utilisateurs et tests de prototypes. Accompagnement de stagiaires et mentorat de designers juniors sur des projets réels.",
      en: "Building cohesive design systems for clients in banking, e-commerce and travel (Carrefour.tn, Attunea, Travel Shaper, Convergence, Bridge Global Funding...). Wireframes and interactive prototypes built in real time with developers, user interviews and prototype testing. Mentoring interns and junior designers on real client projects.",
    },
    tags: [
      { fr: "Figma", en: "Figma" },
      { fr: "Adobe XD", en: "Adobe XD" },
      { fr: "Design System", en: "Design System" },
      { fr: "Mentorat", en: "Mentoring" },
    ],
  },
  {
    company: "Institut Supérieur des Beaux-Arts de Sousse",
    role: { fr: "Expert professor", en: "Expert professor" },
    period: { fr: "Septembre 2024 — Juillet 2025", en: "September 2024 — July 2025" },
    current: false,
    description: {
      fr: "Enseignement et accompagnement d'étudiants en UX/UI, design thinking et fondamentaux du design produit digital.",
      en: "Teaching and mentoring students in UX/UI, design thinking and the fundamentals of digital product design.",
    },
    tags: [
      { fr: "Enseignement", en: "Teaching" },
      { fr: "Design Thinking", en: "Design Thinking" },
      { fr: "UX/UI", en: "UX/UI" },
    ],
  },
  {
    company: "Gomy Code",
    role: { fr: "UX/UI Instructor", en: "UX/UI Instructor" },
    period: { fr: "Octobre 2021 — Juin 2022", en: "October 2021 — June 2022" },
    current: false,
    description: {
      fr: "Formation de plus de 20 étudiants en design UX/UI : théorie, méthodologie et bonnes pratiques. Accompagnement pédagogique et amélioration continue des supports de cours.",
      en: "Trained 20+ students in UX/UI design: theory, methodology and best practices. Provided pedagogical support and continuously improved course materials.",
    },
    tags: [
      { fr: "Formation", en: "Training" },
      { fr: "Pédagogie", en: "Pedagogy" },
      { fr: "UX/UI", en: "UX/UI" },
    ],
  },
  {
    company: "Diginov / Design code",
    role: { fr: "UX/UI Designer", en: "UX/UI Designer" },
    period: { fr: "Octobre 2021 — Janvier 2022", en: "October 2021 — January 2022" },
    current: false,
    description: {
      fr: "Co-conception d'applications mobiles et web avec une forte orientation UX (Comptat RH, Comptat Crédit Débit). Analyse des besoins clients, proposition de parcours utilisateurs optimisés et collaboration étroite avec les équipes techniques.",
      en: "Co-designed mobile and web applications with a strong UX focus (Comptat RH, Comptat Crédit Débit). Analyzed client needs, proposed optimized user journeys and worked closely with engineering teams.",
    },
    tags: [
      { fr: "Adobe XD", en: "Adobe XD" },
      { fr: "Illustrator", en: "Illustrator" },
      { fr: "Mobile & Web", en: "Mobile & Web" },
    ],
  },
  {
    company: "WeAre Moon",
    role: { fr: "UX/UI Designer", en: "UX/UI Designer" },
    period: { fr: "Août 2020 — Septembre 2021", en: "August 2020 — September 2021" },
    current: false,
    description: {
      fr: "Première immersion professionnelle dans le UX/UI. Conception de concepts graphiques sous la supervision d'une designer senior et production d'assets visuels pour plusieurs projets clients (Split, Rizouya, Demco, AVS, Kindeal).",
      en: "First professional immersion in UX/UI. Designed graphic concepts under the supervision of a senior designer and produced visual assets for several client projects (Split, Rizouya, Demco, AVS, Kindeal).",
    },
    tags: [
      { fr: "Adobe XD", en: "Adobe XD" },
      { fr: "Illustrator", en: "Illustrator" },
      { fr: "Photoshop", en: "Photoshop" },
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = useT();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-violet">{t.experience.number}</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text={t.experience.title} />
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute left-2 top-1 h-full w-px bg-border" />
          <motion.div
            style={{ height }}
            className="absolute left-2 top-1 w-px bg-gradient-to-b from-violet to-yellow"
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
                className="rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:bg-surface sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">
                    {exp.role[lang]}
                    <span className="text-muted"> · {exp.company}</span>
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs text-violet">
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{exp.period[lang]}</p>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {exp.description[lang]}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag.fr}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag[lang]}
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
