"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { RevealWords, FadeUp } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 sm:px-10 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[26rem] w-[26rem] rounded-full bg-violet/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-display text-sm text-violet">04</span>
          <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            <RevealWords text="Contact" />
          </h2>
        </div>

        <FadeUp>
          <p className="max-w-xl text-base text-muted sm:text-lg">
            Partons ensemble à la conquête d&apos;interfaces engageantes et
            centrées utilisateur. Un projet, une idée, une opportunité ? Je
            suis toujours partante pour échanger.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Magnetic strength={0.2} className="mt-10 inline-block">
            <a
              href="mailto:widedrouatbi@gmail.com"
              data-cursor-hover
              className="group flex flex-wrap items-center gap-3 font-display text-4xl font-medium tracking-tight text-foreground transition-colors hover:text-violet sm:text-6xl md:text-7xl"
            >
              widedrouatbi@gmail.com
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-12 sm:w-12" />
            </a>
          </Magnetic>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="mailto:widedrouatbi@gmail.com"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-violet"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="tel:+21654367147"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-violet"
              >
                <Phone className="h-4 w-4" /> +216 54 367 147
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/wided-rouatbi-25501a15a/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-violet"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://github.com/widedr"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-violet"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
