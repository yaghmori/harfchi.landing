"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { landingBrand } from "../landing-brand";

/**
 * Header is omitted while the hero (`#top`) is on screen.
 * After the hero, show a full-width sticky bar with a frosted white background: logo at one edge, CTA at the other.
 */
export function LandingNav() {
  const [pastHero, setPastHero] = useState(false);

  const updatePastHero = useCallback(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setPastHero(false);
      return;
    }
    const rect = hero.getBoundingClientRect();
    setPastHero(rect.bottom <= 0);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updatePastHero();
    });
    window.addEventListener("scroll", updatePastHero, { passive: true });
    window.addEventListener("resize", updatePastHero);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePastHero);
      window.removeEventListener("resize", updatePastHero);
    };
  }, [updatePastHero]);

  if (!pastHero) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/50 bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/55">
      <div className="mx-auto flex h-16 w-full min-w-0 max-w-full items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink-0 items-center"
          aria-label="حرف چی — صفحهٔ اصلی"
        >
          <Image
            src={landingBrand.logoType}
            alt="حرف چی"
            width={160}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <Button
          type="button"
          variant="default"
          size="lg"
          className="font-bold"
          onClick={() => {
            document
              .getElementById("download")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          شروع بازی
        </Button>
      </div>
    </header>
  );
}
