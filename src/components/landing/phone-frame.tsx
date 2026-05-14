import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,260px)] drop-shadow-[0_20px_50px_rgba(99,14,212,0.2)] ${className ?? ""}`}
    >
      <div className="relative aspect-[9/19] rounded-[2.25rem] border-[8px] border-white/90 bg-gradient-to-b from-white to-violet-100/40 p-1 shadow-xl ring-1 ring-violet-200/50">
        <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-transparent">
          {children}
        </div>
      </div>
    </div>
  );
}
