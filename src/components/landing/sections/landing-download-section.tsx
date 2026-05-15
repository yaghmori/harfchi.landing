import type { ReactNode } from "react";
import { DownloadChannelButton } from "../download/download-channel-button";
import { DownloadPlatformLogo } from "../download/download-platform-logo";
import {
  AndroidDirectIcon,
  CafeBazaarIcon,
  PwaWebIcon,
  SibcheIcon,
} from "../download/store-icons";

const DEFAULT_PWA_PLAY_URL = "https://play.harfchi.ir";

type PlatformVariant = "android" | "ios" | "web";

type LandingDownloadSectionProps = {
  cafeBazaarUrl?: string;
  sibcheUrl?: string;
  pwaPlayUrl?: string;
};

function PlatformColumn({
  variant,
  children,
  className,
}: {
  variant: PlatformVariant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={[
        "flex flex-col items-center md:border-e md:border-border/80 md:pe-6 lg:pe-10",
        "last:md:border-e-0 last:md:pe-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <DownloadPlatformLogo variant={variant} />
      <div className="mt-8 flex w-full max-w-[19rem] flex-col gap-3 sm:max-w-xs">
        {children}
      </div>
    </article>
  );
}

export function LandingDownloadSection({
  cafeBazaarUrl,
  sibcheUrl,
  pwaPlayUrl = DEFAULT_PWA_PLAY_URL,
}: LandingDownloadSectionProps) {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-[4.5rem] bg-neutral-50 py-16 sm:scroll-mt-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="download-heading"
            className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl"
          >
            دانلود اپلیکیشن حرف چی
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            اندروید، iOS یا نسخهٔ وب (PWA) — هر کدام را که می‌خواهید انتخاب
            کنید.
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <div className="grid items-start justify-items-center gap-14 md:grid-cols-3 md:gap-6 lg:gap-10">
            <PlatformColumn variant="android">
              <DownloadChannelButton
                href="/download"
                label="دانلود مستقیم"
                icon={<AndroidDirectIcon />}
              />
              <DownloadChannelButton
                href={cafeBazaarUrl ?? "#"}
                label="دانلود از بازار"
                icon={<CafeBazaarIcon />}
                external={Boolean(cafeBazaarUrl)}
                disabled={!cafeBazaarUrl}
              />
            </PlatformColumn>

            <PlatformColumn variant="ios">
              <DownloadChannelButton
                href={sibcheUrl ?? "#"}
                label="دانلود از سیبچه"
                icon={<SibcheIcon />}
                external={Boolean(sibcheUrl)}
                disabled={!sibcheUrl}
              />
            </PlatformColumn>

            <PlatformColumn variant="web">
              <DownloadChannelButton
                href={pwaPlayUrl}
                label="نسخه وب اپلیکیشن"
                icon={<PwaWebIcon />}
                external
              />
            </PlatformColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
