"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Magnetic from "./motion/Magnetic";

const links = [
  { href: "#about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-violet to-yellow"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href={resolveHref("#top")}
            data-cursor-hover
            className="font-display text-sm font-medium tracking-tight text-foreground"
          >
            Wided Rouatbi<span className="text-violet">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                data-cursor-hover
                className="group relative text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet to-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Magnetic>
              <a
                href="mailto:widedrouatbi@gmail.com"
                data-cursor-hover
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-violet"
              >
                Me contacter
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor-hover
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="h-px w-6 bg-foreground"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="h-px w-6 bg-foreground"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="h-px w-6 bg-foreground"
            />
          </button>
        </nav>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 pb-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={() => setOpen(false)}
                className="py-2 text-lg text-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </header>
    </>
  );
}
