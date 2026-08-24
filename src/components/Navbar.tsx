"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Magnetic from "./motion/Magnetic";
import { useLanguage, useT } from "@/lib/LanguageContext";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = useT();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "/projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

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
            <button
              onClick={toggle}
              data-cursor-hover
              aria-label="Changer de langue / Switch language"
              className="relative flex items-center rounded-full border border-border p-1 text-xs font-medium"
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute h-6 w-8 rounded-full bg-violet/20"
                style={{ left: lang === "fr" ? 4 : 36 }}
              />
              <span
                className={`relative z-10 w-8 rounded-full py-1 text-center transition-colors ${
                  lang === "fr" ? "text-foreground" : "text-muted"
                }`}
              >
                FR
              </span>
              <span
                className={`relative z-10 w-8 rounded-full py-1 text-center transition-colors ${
                  lang === "en" ? "text-foreground" : "text-muted"
                }`}
              >
                EN
              </span>
            </button>
            <Magnetic>
              <a
                href="mailto:widedrouatbi@gmail.com"
                data-cursor-hover
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-violet"
              >
                {t.nav.cta}
              </a>
            </Magnetic>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              data-cursor-hover
              aria-label="Changer de langue / Switch language"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {lang === "fr" ? "FR" : "EN"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor-hover
              className="flex flex-col gap-1.5"
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
          </div>
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
