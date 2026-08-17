"use client";

import { ArrowUp } from "lucide-react";
import Magnetic from "./motion/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xs text-muted">
          © {year} Wided Rouatbi. Conçu &amp; animé avec soin.
        </p>
        <Magnetic>
          <a
            href="#top"
            data-cursor-hover
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-violet"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </Magnetic>
      </div>
    </footer>
  );
}
