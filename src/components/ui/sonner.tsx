"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { cn } from "@/lib/utils";

const gameToastClassNames: NonNullable<
  NonNullable<ToasterProps["toastOptions"]>["classNames"]
> = {
  toast: cn(
    "cn-toast w-full rounded-full border-2 border-primary/15 bg-card/95 px-5 py-4 font-sans shadow-[0_1px_0_0_rgb(255_255_255_/_0.22),0_4px_14px_rgb(0_0_0_/_0.08),0_8px_28px_rgb(99_14_212_/_0.12)] backdrop-blur-md",
    "dark:border-primary/25 dark:bg-card/90 dark:shadow-[0_2px_8px_rgb(0_0_0_/_0.42),0_6px_22px_rgb(99_14_212_/_0.18)]",
  ),
  title: "font-heading text-base font-bold leading-snug text-foreground",
  description: "mt-1 text-sm leading-relaxed text-muted-foreground",
  content: "gap-3",
  icon: "shrink-0 [&_svg]:size-6",
  actionButton: cn(
    "h-11 min-h-11 shrink-0 rounded-full border-0 bg-linear-to-r from-primary to-primary/80 px-5 text-base font-bold text-primary-foreground",
    "shadow-[0_6px_18px_rgba(99,14,212,0.28)] active:translate-y-0.5 active:scale-[0.98]",
  ),
  cancelButton:
    "h-11 min-h-11 shrink-0 rounded-full border-2 border-border bg-secondary/80 px-5 text-base font-semibold text-secondary-foreground",
  closeButton:
    "top-2 end-2 size-9 rounded-full border border-border/80 bg-background/90 text-foreground hover:bg-muted",
};

const Toaster = ({ toastOptions, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      swipeDirections={["left", "right", "top"]}
      icons={{
        success: <CircleCheckIcon className="size-6" aria-hidden />,
        info: <InfoIcon className="size-6" aria-hidden />,
        warning: <TriangleAlertIcon className="size-6" aria-hidden />,
        error: <OctagonXIcon className="size-6" aria-hidden />,
        loading: <Loader2Icon className="size-6 animate-spin" aria-hidden />,
      }}
      style={
        {
          "--normal-bg": "var(--card)",
          "--normal-text": "var(--card-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        ...toastOptions,
        classNames: {
          ...gameToastClassNames,
          ...toastOptions?.classNames,
          toast: cn(gameToastClassNames.toast, toastOptions?.classNames?.toast),
          title: cn(gameToastClassNames.title, toastOptions?.classNames?.title),
          description: cn(
            gameToastClassNames.description,
            toastOptions?.classNames?.description,
          ),
          content: cn(
            gameToastClassNames.content,
            toastOptions?.classNames?.content,
          ),
          icon: cn(gameToastClassNames.icon, toastOptions?.classNames?.icon),
          actionButton: cn(
            gameToastClassNames.actionButton,
            toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cn(
            gameToastClassNames.cancelButton,
            toastOptions?.classNames?.cancelButton,
          ),
          closeButton: cn(
            gameToastClassNames.closeButton,
            toastOptions?.classNames?.closeButton,
          ),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
