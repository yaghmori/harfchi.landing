"use client";

import { cn } from "@/lib/utils";
import {
  HERO_ILLUSTRATION_CANVAS,
  HERO_ILLUSTRATION_LAYERS,
} from "./hero-illustration-config";
import { HeroIllustrationLayerView } from "./hero-illustration-layer";

type LandingHeroIllustrationProps = {
  className?: string;
};

/**
 * Layered hero scene: each WebP is absolutely positioned on the `final.webp`
 * coordinate system and animated independently.
 */
export function LandingHeroIllustration({
  className,
}: LandingHeroIllustrationProps) {
  const { width, height } = HERO_ILLUSTRATION_CANVAS;

  return (
    <figure
      className={cn("relative w-full min-w-0 origin-bottom", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
      aria-label="تصویر تبلیغاتی بازی حرف چی"
    >
      <div className="absolute inset-0 overflow-visible">
        {HERO_ILLUSTRATION_LAYERS.map((layer) => (
          <HeroIllustrationLayerView
            key={layer.id}
            layer={layer}
            priority={layer.id === "main"}
          />
        ))}
      </div>
    </figure>
  );
}
