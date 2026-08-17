"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { RevealWords } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

const stats = [
  { value: "4+", label: "Ans d'expérience" },
  { value: "3", label: "Secteurs — Fintech, E-commerce, Voyage" },
  { value: "Neoshore", label: "Poste actuel, depuis mars 2026" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-purple-deep px-6 pb-24 pt-28 sm:px-10 lg:px-16"
    >
      {/* Ambient gradient orbs — echoes the Figma cover's blurred corner blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-56 h-[34rem] w-[34rem] rounded-full bg-violet/50 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-violet/40 blur-[130px]"
        />
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-yellow/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <div className="grid items-center gap-10 sm:grid-cols-[auto_1px_1fr] sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40"
          >
            <div className="absolute -inset-2 rounded-full bg-yellow/20 blur-md" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-surface">
              <Image
                src="/images/profile.jpg"
                alt="Portrait de Wided Rouatbi"
                fill
                priority
                sizes="160px"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-yellow/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden h-40 w-[3px] origin-top rounded-full bg-white/80 sm:block"
          />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-white/80"
            >
              My Portfolio
            </motion.p>
            <h1 className="font-display text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              <RevealWords text="Wided Rouatbi" className="block" />
            </h1>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <RevealWords text="UX/UI" className="block text-yellow" />
              <RevealWords text="Designer" className="block text-white" />
            </h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Product Designer &amp; AI-Augmented Designer, je transforme des
          besoins métier complexes en interfaces claires — en intégrant
          l&apos;intelligence artificielle à chaque étape de mon process
          créatif, de la recherche au prototypage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-purple-deep transition-transform"
            >
              Voir mes projets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:widedrouatbi@gmail.com"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-yellow hover:text-yellow"
            >
              Me contacter
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-12 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-yellow sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-2 text-xs text-white/50"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow" />
          </span>
          Disponible — actuellement chez Neoshore
        </motion.div>

        <motion.a
          href="#about"
          data-cursor-hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="group flex flex-col items-center gap-3"
        >
          <span
            style={{ writingMode: "vertical-rl" }}
            className="rotate-180 text-xs font-light tracking-wide text-white/70 transition-colors group-hover:text-yellow"
          >
            Let&apos;s Get started
          </span>
          <span className="h-10 w-px bg-yellow/70" />
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-yellow"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
