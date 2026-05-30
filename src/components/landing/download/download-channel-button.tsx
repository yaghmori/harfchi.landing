import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

type DownloadChannelButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  /**
   * Render as a plain `<a>` that performs a fresh full-page navigation to the
   * download route handler (no `next/link` prefetch, no client-side
   * transition, no `target=_blank`).
   *
   * IMPORTANT: we intentionally do NOT set the HTML `download` attribute. The
   * route may respond with either a 302 to the actual APK (the API supplies
   * `Content-Disposition: attachment; filename="harfchi.apk"`) or with an
   * HTML fallback when the file isn't available. Combining `download="..."`
   * with an HTML fallback causes mobile browsers (Chrome on Android in
   * particular) to save the error page as `harfchi.apk.html`. Letting the
   * server-side `Content-Disposition` header decide is both correct and
   * cross-origin-safe.
   */
  directDownload?: boolean;
  disabled?: boolean;
};

export function DownloadChannelButton({
  href,
  label,
  icon,
  external = false,
  directDownload = false,
  disabled = false,
}: DownloadChannelButtonProps) {
  const content = (
    <div className="flex items-center gap-2">
      <span className="flex  shrink-0 items-center justify-center ">
        {icon}
      </span>
      <span className="min-w-0 flex-1 rounded-lg text-start leading-snug">
        {label}
      </span>
    </div>
  );

  const wrapperClassName = disabled
    ? "pointer-events-none block w-full opacity-50"
    : "block w-full";

  const buttonInner = (
    <Button
      variant="outline"
      size="lg"
      className="w-full font-bold text-foreground hover:bg-white/10"
      disabled={disabled}
    >
      {content}
    </Button>
  );

  if (external || directDownload) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : "noopener"}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={wrapperClassName}
      >
        {buttonInner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={wrapperClassName}
    >
      {buttonInner}
    </Link>
  );
}
