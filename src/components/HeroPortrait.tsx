"use client";

import Image from "next/image";
import { motion, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

const TILT_DEG = 26;

export default function HeroPortrait({
  front,
  side,
  rear,
  alt,
  progress,
}: {
  front: string;
  side: string;
  rear: string;
  alt: string;
  progress: MotionValue<number>;
}) {
  const prefersReducedMotion = useReducedMotion();

  // Breakpoint arrays deliberately span the full [0, 1] scroll range —
  // framer-motion's hardware-accelerated scroll transforms (used for
  // opacity/filter/transform style bindings) mishandle ranges that stop
  // short of 1, replaying the sequence in reverse for the remainder
  // instead of holding the last value.
  const rotateY = useTransform(progress, [0, 1], [0, TILT_DEG]);
  const frontOpacity = useTransform(progress, [0, 0.3, 0.5, 1], [1, 1, 0, 0]);
  const sideOpacity = useTransform(progress, [0, 0.3, 0.55, 0.8, 1], [0, 0, 1, 0, 0]);
  const rearOpacity = useTransform(progress, [0, 0.6, 0.85, 1], [0, 0, 1, 1]);
  // A light camera "refocus" pass through the middle of the turn.
  const blur = useTransform(progress, [0, 0.35, 0.5, 0.65, 1], [0, 3, 4, 3, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  if (prefersReducedMotion) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={front}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 380px, 480px"
          className="object-contain drop-shadow-2xl"
          unoptimized
        />
      </div>
    );
  }

  return (
    <motion.div
      style={{ rotateY, filter, transformPerspective: 1200 }}
      className="relative h-full w-full"
    >
      <motion.div style={{ opacity: frontOpacity }} className="absolute inset-0">
        <Image
          src={front}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 380px, 480px"
          className="object-contain drop-shadow-2xl"
          unoptimized
        />
      </motion.div>
      <motion.div style={{ opacity: sideOpacity }} className="absolute inset-0">
        <Image
          src={side}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 380px, 480px"
          className="object-contain drop-shadow-2xl"
          unoptimized
        />
      </motion.div>
      <motion.div style={{ opacity: rearOpacity }} className="absolute inset-0">
        <Image
          src={rear}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 380px, 480px"
          className="object-contain drop-shadow-2xl"
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}
