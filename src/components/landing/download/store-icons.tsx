import { cn } from "@/lib/utils";
import { AppWindow, Download } from "lucide-react";
import Image from "next/image";
import { downloadIcons } from "./download-icons";

const brandIconClass = "h-8 w-auto max-w-10 object-contain sm:h-9 sm:max-w-11";

const lucideIconClass = "max-w-6 max-h-6 shrink-0 size-6";

export function AndroidStoreIcon() {
  return (
    <Image
      src={downloadIcons.android}
      alt=""
      width={32}
      height={28}
      className={cn(brandIconClass, "max-w-12")}
      aria-hidden
    />
  );
}

export function AndroidDirectIcon({ className }: { className?: string }) {
  return <Download className={lucideIconClass} strokeWidth={2} aria-hidden />;
}

export function CafeBazaarIcon() {
  return (
    <Image
      src={downloadIcons.bazaar}
      alt=""
      width={48}
      height={24}
      className={cn(brandIconClass, "max-w-12 sm:max-w-14")}
      aria-hidden
    />
  );
}

export function SibcheIcon() {
  return (
    <Image
      src={downloadIcons.sibche}
      alt=""
      width={72}
      height={28}
      className={cn(brandIconClass, "max-w-[4.5rem] sm:max-w-20")}
      aria-hidden
    />
  );
}

export function PwaWebIcon({ className }: { className?: string }) {
  return (
    <AppWindow
      className={cn(lucideIconClass, className)}
      strokeWidth={2}
      aria-hidden
    />
  );
}
