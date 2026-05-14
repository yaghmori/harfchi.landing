import { Apple, Play } from "lucide-react";

export type LandingStoreBadgesProps = {
  googlePlayUrl?: string;
  appStoreUrl?: string;
  /** Focus ring tuned for hero (sky) vs body sections */
  variant?: "onSky" | "onLight";
};

export function LandingStoreBadges({
  googlePlayUrl,
  appStoreUrl,
  variant = "onLight",
}: LandingStoreBadgesProps) {
  if (!googlePlayUrl && !appStoreUrl) return null;

  const focusRing =
    variant === "onSky"
      ? "focus-visible:outline-white"
      : "focus-visible:outline-[#312e81]";

  const badgeClass = `inline-flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-xl px-3.5 text-xs font-semibold shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusRing} sm:h-12 sm:gap-3 sm:px-4 sm:text-sm`;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      {googlePlayUrl ? (
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${badgeClass} bg-[#01875f] text-white ring-1 ring-white/20 hover:bg-[#016b4c]`}
        >
          <Play
            className="size-5 shrink-0 text-white sm:size-[1.35rem]"
            fill="currentColor"
            strokeWidth={1.25}
            aria-hidden
          />
          <span className="text-start leading-tight">
            <span className="block text-[0.65rem] font-normal opacity-90 sm:text-xs">
              دانلود برای اندروید
            </span>
            <span className="font-semibold tracking-tight">Google Play</span>
          </span>
        </a>
      ) : null}
      {appStoreUrl ? (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${badgeClass} bg-neutral-950 text-white ring-1 ring-white/15 hover:bg-neutral-900`}
        >
          <Apple
            className="size-5 shrink-0 stroke-white sm:size-[1.35rem]"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="text-start leading-tight">
            <span className="block text-[0.65rem] font-normal opacity-90 sm:text-xs">
              دانلود برای آیفون و آیپد
            </span>
            <span className="font-semibold tracking-tight">App Store</span>
          </span>
        </a>
      ) : null}
    </div>
  );
}
