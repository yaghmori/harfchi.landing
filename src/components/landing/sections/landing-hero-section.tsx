import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { LandingHeroIllustration } from "../hero-illustration/landing-hero-illustration";
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

/** Room above the aspect box so upward wave motion + blur are not clipped by layout. */
const CLOUD_TOP_BLEED_PX = 56;

/** User-space Y where the visible sky ends and an opaque white “shore” begins (matches design + blur bleed). */
const CLOUD_FILL_START_Y = 168;

/** Fraction of the layout box for the CSS bottom cap (visible shore band). */
const CLOUD_BOTTOM_WHITE_FRAC = (VB.h - CLOUD_FILL_START_Y) / VB.h;

/**
 * Opaque plate under blur + final SVG rect + CSS bottom cap stop sky/page bg showing through.
 * Filters use userSpaceOnUse so animation does not shrink the filter region.
 */
function HeroCloudWaveStack() {
  const reactId = useId().replace(/:/g, "");
  const blurSoft = `hc-cloud-soft-${reactId}`;
  const blurMid = `hc-cloud-mid-${reactId}`;
  const filterW = VB.w + 200;
  const filterH = VB.h + 200;
  const filterX = -100;
  const filterY = -100;

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
      className="pointer-events-none relative w-full min-w-0 shrink-0 overflow-visible"
      style={{
        marginTop: -CLOUD_TOP_BLEED_PX,
        paddingTop: CLOUD_TOP_BLEED_PX,
      }}
      aria-hidden
    >
      <div className="relative aspect-1440/280 w-full overflow-visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          preserveAspectRatio="xMidYMax meet"
          overflow="visible"
          className="absolute inset-0 block size-full overflow-visible text-white"
        >
        <defs>
          <filter
            id={blurSoft}
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            x={filterX}
            y={filterY}
            width={filterW}
            height={filterH}
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" />
          </filter>
          <filter
            id={blurMid}
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            x={filterX}
            y={filterY}
            width={filterW}
            height={filterH}
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" />
          </filter>
        </defs>

        {/* Full-width opaque plate under all layers (blur + translucent groups composite on white, not sky). */}
        <rect x="0" y="95" width={VB.w} height={VB.h - 95} fill="#ffffff" />

        {/* Filter + wave on the same <g> so transform does not outrun the filter bbox. */}
        <g
          className="landing-hero-cloud-drift-slow text-sky-50"
          transform="translate(24 10)"
          opacity={0.82}
          filter={`url(#${blurSoft})`}
        >
          {ellipses(CLOUD_PUFFS, "far")}
        </g>
        <g
          className="landing-hero-cloud-drift-slow text-white [animation-delay:-9s]"
          transform="translate(102 5)"
          opacity={0.62}
          filter={`url(#${blurSoft})`}
        >
          {ellipses(CLOUD_PUFFS, "far2")}
        </g>

        {/* Mid volume */}
        <g
          className="landing-hero-cloud-drift-mid text-white"
          transform="translate(12 0)"
          opacity={0.88}
          filter={`url(#${blurMid})`}
        >
          {ellipses(CLOUD_PUFFS, "mid")}
          {ellipses(CLOUD_POP, "midp")}
        </g>

        {/* Foreground puffs (cap rect below paints opaque white). */}
        <g className="landing-hero-cloud-drift-fast text-white">
          {ellipses(CLOUD_PUFFS, "fg")}
          {ellipses(CLOUD_POP, "fgp")}
        </g>

        {/* Hard straight fill inside SVG (CSS layer below repeats the same ratio for subpixel safety). */}
        <rect
          x="0"
          y={CLOUD_FILL_START_Y}
          width={VB.w}
          height={VB.h - CLOUD_FILL_START_Y}
          fill="#ffffff"
        />
        </svg>
        {/* Paints over the bottom band so uneven puff bottoms + filter fringe never reveal hero/page bg. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-white"
          style={{ height: `${CLOUD_BOTTOM_WHITE_FRAC * 100}%` }}
        />
      </div>
    </div>
  );
}

export function LandingHeroSection() {
  return (
    <section
      id="top"
      className="relative flex w-full min-w-0 flex-col bg-linear-to-b from-sky-100 via-sky-200 to-sky-400 pb-0 pt-4 sm:pt-6"
    >
      {/* Inset + clip so blurred orbs and transforms cannot widen the document (RTL / flex min-width). */}
      <div
        className="pointer-events-none absolute  inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_72%_at_50%_0%,rgba(255,255,255,0.52)_0%,rgba(255,255,255,0.14)_38%,transparent_56%)]" />
        <div className="absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-sky-200/55 blur-3xl" />
        <div className="absolute -right-20 top-[32%] h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute left-1/3 top-[45%] h-56 w-96 max-w-[60vw] -translate-x-1/2 rounded-full bg-sky-300/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 flex-col items-center px-4 pb-4 pt-36 sm:pb-6 sm:pt-8 xl:pb-3 xl:pt-6">
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
            className="h-22 w-auto drop-shadow-[0_8px_24px_rgba(15,23,42,0.15)] sm:h-23 "
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

      <div className="relative z-10 flex w-full shrink-0 justify-center px-4 pb-6 sm:pb-8 xl:pb-4">
        <LandingHeroStartButton />
      </div>

      <div className="relative z-10 flex w-full min-w-0 shrink-0 justify-center overflow-visible px-4">
        <LandingHeroIllustration className="w-full max-w-xl origin-bottom scale-[1.04] sm:max-w-2xl sm:scale-105 md:max-w-3xl md:scale-110 lg:max-w-4xl lg:scale-[1.1] xl:max-w-3xl xl:scale-100" />
      </div>
      <div className="pointer-events-none relative z-20 -mb-px -mt-11 w-full min-w-0 max-w-none shrink-0 overflow-visible sm:-mt-14 md:-mt-15 lg:-mt-10 xl:-mt-8">
        <HeroCloudWaveStack />
        {/* Flush straight seam into the white features section (no sky / page bg gap) */}
        <div className="h-px w-full bg-white" aria-hidden />
      </div>
    </section>
  );
}
