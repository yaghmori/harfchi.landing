import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

type DownloadChannelButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  /**
   * Render as a plain `<a download>` (no `next/link`, no `target=_blank`).
   * Use for direct file downloads so each click triggers a fresh navigation
   * to the route handler instead of a client-side router transition.
   */
  download?: boolean | string;
  disabled?: boolean;
};

export function DownloadChannelButton({
  href,
  label,
  icon,
  external = false,
  download = false,
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

  if (external || download) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={
          download === true ? "" : typeof download === "string" ? download : undefined
        }
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
