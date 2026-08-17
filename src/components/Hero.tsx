"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { RevealWords } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

const roles = ["UX/UI Design", "Product Design", "AI-Augmented Design"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 sm:px-10"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-20 h-[24rem] w-[24rem] rounded-full bg-orange/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-[#c17bff]/15 blur-[110px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet" />
            </span>
            Disponible — actuellement chez Neoshore
          </motion.div>

          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            <RevealWords text="Wided Rouatbi." className="block" />
            <RevealWords
              text="Je conçois des produits"
              className="mt-1 block text-muted"
            />
            <span className="mt-1 block">
              <RevealWords text="pensés à l'ère de" className="text-muted" />{" "}
              <RevealWords text="l'IA." as="span" className="text-gradient" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            UX/UI Designer &amp; Product Designer, je transforme des besoins
            métier complexes en interfaces claires — en intégrant
            l&apos;intelligence artificielle à chaque étape de mon process
            créatif, de la recherche au prototypage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor-hover
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform"
              >
                Voir mes projets
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:widedrouatbi@gmail.com"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-violet"
              >
                Me contacter
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2"
          >
            {roles.map((r) => (
              <span
                key={r}
                className="text-xs uppercase tracking-[0.18em] text-muted/70"
              >
                {r}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet/40 via-[#c17bff]/30 to-orange/40 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-surface shadow-2xl">
            <Image
              src="/images/profile.png"
              alt="Portrait de Wided Rouatbi"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 384px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-surface/90 px-5 py-3 text-center backdrop-blur-md"
          >
            <p className="font-display text-sm text-foreground">
              UX/UI &amp; Product Designer
            </p>
            <p className="text-xs text-muted">AI-Augmented Design</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        <span className="tracking-[0.2em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
