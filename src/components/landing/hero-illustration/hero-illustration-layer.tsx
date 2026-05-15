"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Transition } from "motion/react";
import type { HeroIllustrationLayer } from "./hero-illustration-config";
import { HERO_ILLUSTRATION_CANVAS } from "./hero-illustration-config";

type HeroIllustrationLayerProps = {
  layer: HeroIllustrationLayer;
  priority?: boolean;
};

function layerBoxStyle(layer: HeroIllustrationLayer) {
  const { width: cw, height: ch } = HERO_ILLUSTRATION_CANVAS;
  return {
    left: `${(layer.x / cw) * 100}%`,
    top: `${(layer.y / ch) * 100}%`,
    width: `${(layer.width / cw) * 100}%`,
    height: `${(layer.height / ch) * 100}%`,
    zIndex: layer.zIndex,
  };
}

function motionTarget(
  layer: HeroIllustrationLayer,
  reduceMotion: boolean,
): Record<string, number | number[]> {
  if (reduceMotion) return { opacity: 1, y: 0, rotate: 0, scale: 1 };

  const base = { opacity: 1, y: 0, rotate: 0, scale: 1 };

  switch (layer.motion) {
    case "enter":
      return base;
    case "float":
      return { ...base, y: [0, -10, 0] };
    case "sway":
      return { ...base, rotate: [-2.5, 2.5, -2.5] };
    case "bob":
      return { ...base, y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] };
    case "pulse":
      return { ...base, scale: [1, 1.12, 1], opacity: [1, 0.92, 1] };
    case "wiggle":
      return { ...base, rotate: [-6, 6, -6], y: [0, -4, 0] };
    default:
      return base;
  }
}

function motionTransition(
  layer: HeroIllustrationLayer,
  reduceMotion: boolean,
): Transition {
  const delay = layer.delay ?? 0;
  const duration = layer.duration ?? 3.5;
  const enterEase = [0.22, 1, 0.36, 1] as const;

  if (reduceMotion || layer.motion === "enter") {
    return { duration: 0.65, delay, ease: enterEase };
  }

  const loopStart = delay + 0.65;
  return {
    opacity: { duration: 0.65, delay, ease: enterEase },
    y: {
      duration,
      delay: loopStart,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    rotate: {
      duration,
      delay: loopStart,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    scale: {
      duration,
      delay: loopStart,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };
}

export function HeroIllustrationLayerView({
  layer,
  priority = false,
}: HeroIllustrationLayerProps) {
  const reduceMotion = useReducedMotion();
  const delay = layer.delay ?? 0;
  const box = layerBoxStyle(layer);

  return (
    <motion.div
      className="pointer-events-none absolute origin-center will-change-transform"
      style={box}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24, scale: 0.97, rotate: 0 }
      }
      animate={motionTarget(layer, !!reduceMotion)}
      transition={motionTransition(layer, !!reduceMotion)}
    >
      <Image
        src={layer.src}
        alt={layer.alt}
        width={layer.width}
        height={layer.height}
        className="h-full w-full object-contain object-left-top"
        priority={priority}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 896px"
        draggable={false}
      />
    </motion.div>
  );
}
