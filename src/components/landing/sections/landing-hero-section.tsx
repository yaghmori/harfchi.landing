import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { landingBrand } from "../landing-brand";
import { LandingHeroStartButton } from "./landing-hero-start-button";

type EllipseSpec = { cx: number; cy: number; rx: number; ry: number };

/** Round puffs (ry close to rx) — with `meet` scaling they stay cloud-shaped, not flattened bands. */
const CLOUD_PUFFS: EllipseSpec[] = [
  { cx: -20, cy: 118, rx: 92, ry: 76 },
  { cx: 118, cy: 102, rx: 108, ry: 86 },
  { cx: 268, cy: 116, rx: 96, ry: 78 },
  { cx: 418, cy: 96, rx: 118, ry: 92 },
  { cx: 578, cy: 110, rx: 100, ry: 84 },
  { cx: 728, cy: 94, rx: 122, ry: 94 },
  { cx: 888, cy: 106, rx: 104, ry: 86 },
  { cx: 1048, cy: 98, rx: 114, ry: 90 },
  { cx: 1198, cy: 110, rx: 98, ry: 82 },
  { cx: 1348, cy: 102, rx: 108, ry: 88 },
  { cx: 1375, cy: 112, rx: 65, ry: 58 },
];

const CLOUD_POP: EllipseSpec[] = [
  { cx: 52, cy: 132, rx: 44, ry: 34 },
  { cx: 198, cy: 128, rx: 40, ry: 32 },
  { cx: 348, cy: 136, rx: 46, ry: 34 },
  { cx: 498, cy: 130, rx: 42, ry: 32 },
  { cx: 648, cy: 138, rx: 44, ry: 34 },
  { cx: 798, cy: 128, rx: 40, ry: 30 },
  { cx: 948, cy: 134, rx: 46, ry: 34 },
  { cx: 1098, cy: 128, rx: 42, ry: 32 },
  { cx: 1248, cy: 136, rx: 44, ry: 34 },
];

const VB = { w: 1440, h: 280 };

/**
 * One wide SVG with uniform scaling (`meet`) + aspect-ratio wrapper so domes stay round.
 * Layered groups + blur read as volumetric clouds instead of a stretched straight band.
 */
function HeroCloudWaveStack() {
  const reactId = useId().replace(/:/g, "");
  const blurSoft = `hc-cloud-soft-${reactId}`;
  const blurMid = `hc-cloud-mid-${reactId}`;

  const ellipses = (specs: EllipseSpec[], keyPrefix: string) =>
    specs.map((e, i) => (
      <ellipse
        key={`${keyPrefix}-${i}`}
        cx={e.cx}
        cy={e.cy}
        rx={e.rx}
        ry={e.ry}
        fill="currentColor"
      />
    ));

  return (
    <div
      className="pointer-events-none relative aspect-1440/280 w-full min-w-0 shrink-0"
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 h-full w-full text-white"
      >
        <defs>
          <filter id={blurSoft} x="-10%" y="-20%" width="120%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" />
          </filter>
          <filter id={blurMid} x="-8%" y="-8%" width="116%" height="116%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" />
          </filter>
        </defs>

        {/* Distant mass — shifted + blurred */}
        <g
          transform="translate(24 10)"
          className="text-sky-50"
          opacity={0.72}
          filter={`url(#${blurSoft})`}
        >
          {ellipses(CLOUD_PUFFS, "far")}
        </g>
        <g
          transform="translate(-132 -0)"
          className="text-white"
          opacity={0.55}
          filter={`url(#${blurSoft})`}
        >
          {ellipses(CLOUD_PUFFS, "far2")}
        </g>

        {/* Mid volume */}
        <g
          transform="translate(12 0)"
          className="text-white"
          opacity={0.82}
          filter={`url(#${blurMid})`}
        >
          {ellipses(CLOUD_PUFFS, "mid")}
          {ellipses(CLOUD_POP, "midp")}
        </g>

        {/* Crisp foreground + base */}
        <g className="text-white" opacity={0.98}>
          <rect x="0" y="188" width={VB.w} height="92" fill="currentColor" />
          {ellipses(CLOUD_PUFFS, "fg")}
          {ellipses(CLOUD_POP, "fgp")}
        </g>
      </svg>
    </div>
  );
}

export function LandingHeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh w-full min-w-0 flex-col overflow-x-hidden bg-linear-to-b from-sky-400 via-sky-300 to-sky-200 pb-0 pt-4 sm:pt-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(255,255,255,0.35)_0%,transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-[32%] h-80 w-80 rounded-full bg-sky-100/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-[45%] h-56 w-96 max-w-[60vw] -translate-x-1/2 rounded-full bg-sky-300/35 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col items-center px-4 pb-6 pt-6 sm:pb-8 sm:pt-8">
        <Link
          href="/"
          className="relative -mt-1 inline-flex sm:mt-0"
          aria-label="حرف چی — صفحهٔ اصلی"
        >
          <Image
            src={landingBrand.logoType}
            alt="حرف چی"
            width={320}
            height={84}
            className="h-17 w-auto drop-shadow-[0_8px_24px_rgba(15,23,42,0.15)] sm:h-19 md:h-24"
            priority
          />
        </Link>

        <div className="mx-auto mt-5 flex w-full max-w-2xl shrink-0 flex-col items-center text-center sm:mt-6">
          <h1 className="font-heading text-3xl  font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            گیم‌پلی کلاسیک،
            <br className="sm:hidden" /> هیجان تازه
          </h1>
          <p className="mt-4 max-w-md text-sm  leading-relaxed text-foreground sm:text-2xl">
            اسم و فامیل آنلاین با حروف فارسی
          </p>
        </div>
      </div>

      <div className="relative z-10 flex w-full shrink-0 justify-center px-4 pb-2 pt-6 sm:pb-3 sm:pt-8 md:pt-10">
        <LandingHeroStartButton />
      </div>

      <Image
        src={landingBrand.heroPromotional}
        alt="هیجان تازه"
        width={1500}
        height={1200}
        className="h-auto w-full self-center max-w-xl origin-bottom object-contain scale-[1.04] sm:max-w-2xl sm:scale-105 md:max-w-3xl md:scale-110 lg:max-w-4xl lg:scale-[1.1]"
        priority
      />
      <div className="pointer-events-none relative z-20 -mt-11 w-full max-w-none shrink-0 sm:-mt-14 md:-mt-15 lg:-mt-10">
        <HeroCloudWaveStack />
      </div>
    </section>
  );
}
