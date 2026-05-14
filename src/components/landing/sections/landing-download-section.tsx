import { LandingStoreBadges } from "../landing-store-badges";

type LandingDownloadSectionProps = {
  gameAppUrl?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
};

export function LandingDownloadSection({
  gameAppUrl,
  googlePlayUrl,
  appStoreUrl,
}: LandingDownloadSectionProps) {
  const hasStores = Boolean(googlePlayUrl || appStoreUrl);
  const hasAny = hasStores || Boolean(gameAppUrl);

  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-[4.5rem] bg-[#ece8f7] py-14 sm:scroll-mt-20 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2
          id="download-heading"
          className="font-heading text-2xl font-extrabold text-[#312e81] sm:text-3xl"
        >
          دانلود حرف چی
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 sm:text-base">
          اپ را نصب کنید و با دوستانتان دور بعدی را شروع کنید.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          {gameAppUrl ? (
            <a
              href={gameAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#630ed4] px-6 text-sm font-bold text-white shadow-lg ring-1 ring-violet-400/30 transition hover:bg-[#5512b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312e81] sm:h-12 sm:text-base"
            >
              بازی در مرورگر
            </a>
          ) : null}

          {hasStores ? (
            <LandingStoreBadges
              googlePlayUrl={googlePlayUrl}
              appStoreUrl={appStoreUrl}
              variant="onLight"
            />
          ) : null}

          {!hasAny ? (
            <p className="text-sm text-slate-600">
              لینک‌های فروشگاه به‌زودی اینجا قرار می‌گیرند.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
