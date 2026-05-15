import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

type DownloadChannelButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  disabled?: boolean;
};

export function DownloadChannelButton({
  href,
  label,
  icon,
  external = false,
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

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={
          disabled
            ? "pointer-events-none block w-full opacity-50"
            : "block w-full"
        }
      >
        <Button
          variant="outline"
          size="lg"
          className="w-full font-bold text-foreground hover:bg-white/10"
          disabled={disabled}
        >
          {content}
        </Button>
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={
        disabled
          ? "pointer-events-none block w-full opacity-50"
          : "block w-full"
      }
    >
      <Button
        variant="outline"
        size="lg"
        className="w-full font-bold text-foreground hover:bg-white/10"
        disabled={disabled}
      >
        {content}
      </Button>
    </Link>
  );
}
