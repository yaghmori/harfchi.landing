import { cn } from "@/lib/utils";
import { Globe2 } from "lucide-react";
import Image from "next/image";
import { downloadIcons } from "./download-icons";

const LOGO_FRAME_CLASS =
  "flex h-40 w-full max-w-[280px] items-center justify-center rounded-[2rem] border border-border/80 bg-gradient-to-b from-white via-secondary to-neutral-100/90 px-8 py-8 shadow-[0_1px_0_0_rgb(255_255_255_/_0.75),0_8px_24px_rgb(0_0_0_/_0.06),0_16px_40px_rgb(0_0_0_/_0.04),inset_0_1px_0_0_rgb(255_255_255_/_0.9)] sm:h-44 sm:px-10";

const LOGO_IMAGE_CLASS =
  "max-h-24 w-auto max-w-[min(100%,200px)] object-contain sm:max-h-28";

const PLATFORM_IMAGES = {
  android: {
    src: downloadIcons.android,
    alt: "اندروید",
    width: 160,
    height: 140,
  },
  ios: {
    src: downloadIcons.ios,
    alt: "آی‌او‌اس",
    width: 160,
    height: 160,
  },
} as const;

type DownloadPlatformLogoProps = {
  variant: keyof typeof PLATFORM_IMAGES | "web";
  className?: string;
};

export function DownloadPlatformLogo({
  variant,
  className,
}: DownloadPlatformLogoProps) {
  if (variant === "web") {
    return (
      <div className={cn(LOGO_FRAME_CLASS, className)} aria-hidden>
        <Globe2
          className="size-20 text-foreground/75 sm:size-24"
          strokeWidth={1.35}
        />
      </div>
    );
  }

  const logo = PLATFORM_IMAGES[variant];

  return (
    <div className={cn(LOGO_FRAME_CLASS, className)} aria-hidden>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={LOGO_IMAGE_CLASS}
      />
    </div>
  );
}
