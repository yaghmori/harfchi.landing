import { cn } from "@/lib/utils";
import { AppWindow, Download } from "lucide-react";
import Image from "next/image";
import { downloadIcons } from "./download-icons";

const brandIconClass =
  "h-9 w-9 shrink-0 rounded-md object-contain sm:h-10 sm:w-10";

const lucideIconClass = "max-w-6 max-h-6 shrink-0 size-6";

export function AndroidStoreIcon() {
  return (
    <Image
      src={downloadIcons.android}
      alt=""
      width={36}
      height={36}
      className={brandIconClass}
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
      width={36}
      height={36}
      className={brandIconClass}
      aria-hidden
    />
  );
}

export function SibcheIcon() {
  return (
    <Image
      src={downloadIcons.sibche}
      alt=""
      width={36}
      height={36}
      className={cn(brandIconClass, "p-1 sm:p-1.5")}
      aria-hidden
    />
  );
}

export function MyketIcon() {
  return (
    <Image
      src={downloadIcons.myket}
      alt=""
      width={36}
      height={36}
      className={cn(brandIconClass, "p-1 sm:p-1.5")}
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
