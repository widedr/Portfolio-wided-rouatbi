"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Search,
  Layers,
  PenTool,
  Bot,
} from "lucide-react";
import { RevealWords } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

const stats = [
  { value: "6+", label: "Ans d'expérience" },
  { value: "21", label: "Projets menés" },
  { value: "3", label: "Secteurs — Fintech, E-commerce, Voyage" },
];

const badges = [
  {
    icon: Search,
    label: "User Research",
    className: "left-[-2%] top-[18%] sm:left-[-8%]",
    duration: 5.5,
  },
  {
    icon: Layers,
    label: "Design System",
    className: "right-[-4%] top-[8%] sm:right-[-10%]",
    duration: 6.5,
  },
  {
    icon: PenTool,
    label: "Prototypage",
    className: "left-[-6%] bottom-[26%] sm:left-[-12%]",
    duration: 6,
  },
  {
    icon: Bot,
    label: "AI Tools",
    className: "right-[-2%] bottom-[14%] sm:right-[-8%]",
    duration: 5,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background px-6 pb-24 pt-28 sm:px-10 lg:px-16"
    >
      {/* Soft mesh-gradient wash — muted echo of the pastel blob in the
          Figma "About me" cover, tuned down for dark mode instead of one
          flat saturated purple panel. */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-56 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-purple-deep/25 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 top-1/3 h-[22rem] w-[22rem] rounded-full bg-pink/10 blur-[130px]"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-yellow/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left — copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/60"
          >
            My Portfolio
          </motion.p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <RevealWords text="Hello, je suis" className="block text-white/70" />
            <RevealWords text="Wided Rouatbi" className="block text-gradient" />
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-pink px-4 py-2 shadow-lg shadow-pink/20"
          >
            <span className="text-sm font-semibold text-white">
              UX/UI Designer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
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
              <Link
                href="/projects"
                data-cursor-hover
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-purple-deep transition-transform"
              >
                Voir mes projets
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
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
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-yellow sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait with floating micro-interaction badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute inset-x-6 inset-y-10 rounded-full bg-gradient-to-br from-violet/40 via-pink/20 to-yellow/30 blur-3xl" />
          <div className="relative h-full w-full">
            <Image
              src="/images/profile.png"
              alt="Portrait de Wided Rouatbi"
              fill
              priority
              sizes="(max-width: 1024px) 380px, 480px"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {badges.map((b) => (
            <motion.div
              key={b.label}
              data-cursor-hover
              className={`absolute z-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-surface/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex ${b.className}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1 },
                y: {
                  duration: b.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <b.icon className="h-4 w-4 text-violet" />
              <span className="whitespace-nowrap text-xs font-medium text-foreground">
                {b.label}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
            whileHover={{ rotate: 12, scale: 1.1 }}
            data-cursor-hover
            className="absolute -right-3 -top-3 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-yellow shadow-lg shadow-yellow/30 sm:-right-5 sm:-top-5"
          >
            <Sparkles className="h-6 w-6 text-purple-deep" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-end">
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
