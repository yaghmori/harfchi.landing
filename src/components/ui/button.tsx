import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

type RaisedVariant = "default" | "destructive" | "outline" | "secondary";

function isRaisedVariant(v: string | null | undefined): v is RaisedVariant {
  return (
    v === "default" ||
    v === "destructive" ||
    v === "outline" ||
    v === "secondary"
  );
}

/** Resting shell — soft lift (lighter than a full “keyboard tray” shadow). */
const shellRestShadowRaised =
  "shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_2px_6px_rgb(0_0_0_/_0.06),0_3px_10px_rgb(0_0_0_/_0.04)] dark:shadow-[0_1px_2px_rgb(0_0_0_/_0.38),0_2px_8px_rgb(0_0_0_/_0.28),0_4px_14px_rgb(0_0_0_/_0.18)]";

/** Default / destructive — taller stack + rim light for a stronger floating keycap. */
const shellRestShadowRaisedBold =
  "shadow-[0_1px_0_0_rgb(255_255_255_/_0.22),0_1px_2px_rgb(0_0_0_/_0.07),0_3px_9px_rgb(0_0_0_/_0.09),0_6px_18px_rgb(0_0_0_/_0.07)] dark:shadow-[0_1px_0_0_rgb(255_255_255_/_0.08),0_2px_4px_rgb(0_0_0_/_0.42),0_5px_14px_rgb(0_0_0_/_0.32),0_9px_26px_rgb(0_0_0_/_0.22)]";

/** Shared depth plate for default + destructive — one neutral, slightly lighter than the face stack. */
const depthPlateDefault = "bg-primary/50";
const depthPlateDestructive = "bg-destructive/50"; // bg-destructive/40

const shellDisabledRestShadow =
  "disabled:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.08),0_2px_8px_rgb(0_0_0_/_0.07),0_4px_16px_rgb(0_0_0_/_0.05)] dark:disabled:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.45),0_2px_10px_rgb(0_0_0_/_0.35),0_6px_20px_rgb(0_0_0_/_0.22)]";

const buttonLayeredShellVariants = cva(
  [
    "group relative isolate inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-full text-center text-sm font-semibold outline-none",
    "translate-y-0 motion-safe:transition-all motion-safe:duration-600 motion-safe:ease-out motion-reduce:duration-0",
    "active:translate-y-0.5 motion-reduce:active:translate-y-0 active:shadow-[0_1px_1px_rgb(0_0_0_/_0.05)] dark:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.22)]",
    "disabled:pointer-events-none disabled:opacity-50 disabled:translate-y-0 disabled:active:translate-y-0",
    shellDisabledRestShadow,
    "focus-visible:ring-[3px] focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:[&_[data-slot=button-face]]:border-destructive",
  ].join(" "),
  {
    variants: {
      variant: {
        default: ["text-primary-foreground", shellRestShadowRaisedBold].join(
          " ",
        ),
        destructive: ["text-white", shellRestShadowRaisedBold].join(" "),
        outline: ["text-foreground", shellRestShadowRaised].join(" "),
        secondary: ["text-muted-foreground", shellRestShadowRaised].join(" "),
      },
      size: {
        default: "h-11 min-h-11 rounded-full px-4",
        xs: "h-8 min-h-8 gap-1 rounded-full px-2 text-xs [&_[data-slot=button-label]_svg:not([class*='size-'])]:size-3",
        sm: "h-9 min-h-9 rounded-full px-3 text-[0.8rem] [&_[data-slot=button-label]_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 min-h-12 rounded-full px-6 text-base font-bold",
        icon: "size-9 min-h-9 min-w-9 rounded-full p-0",
        "icon-xs":
          "size-7 min-h-7 min-w-7 rounded-full p-0 [&_[data-slot=button-label]_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 min-h-8 min-w-8 rounded-full p-0",
        "icon-lg":
          "size-12 min-h-12 min-w-12 rounded-full p-0 [&_[data-slot=button-label]_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

const depthLayerVariants = cva(
  [
    "pointer-events-none absolute inset-0 rounded-full",
    "motion-safe:transition-all motion-safe:duration-600 motion-safe:ease-out motion-reduce:duration-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          depthPlateDefault,
          "translate-y-1 motion-reduce:translate-y-0.5",
          "group-active:translate-y-0 motion-reduce:group-active:translate-y-0.5",
          "group-disabled:translate-y-1 motion-reduce:group-disabled:translate-y-0.5",
        ].join(" "),
        destructive: [
          depthPlateDestructive,
          "translate-y-1 motion-reduce:translate-y-0.5",
          "group-active:translate-y-0 motion-reduce:group-active:translate-y-0.5",
          "group-disabled:translate-y-1 motion-reduce:group-disabled:translate-y-0.5",
        ].join(" "),
        outline: [
          "bg-neutral-300/85 dark:bg-neutral-800/90",
          "translate-y-0.5",
          "group-active:translate-y-0 motion-reduce:group-active:translate-y-0.5",
          "group-disabled:translate-y-0.5",
        ].join(" "),
        secondary: [
          "bg-neutral-200/70 dark:bg-neutral-800/90",
          "translate-y-0.5",
          "group-active:translate-y-0 motion-reduce:group-active:translate-y-0.5",
          "group-disabled:translate-y-0.5",
        ].join(" "),
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const faceLayerVariants = cva(
  "pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-full border bg-gradient-to-b motion-safe:transition-all motion-safe:duration-600 motion-safe:ease-out motion-reduce:duration-0",
  {
    variants: {
      variant: {
        default: [
          "border-border/88 from-primary via-primary to-primary/78 dark:border-neutral-500/55 dark:from-neutral-600 dark:via-primary dark:to-primary/78",
          "group-active:border-border/92 group-active:from-primary group-active:via-primary group-active:to-primary/76 dark:group-active:from-neutral-700 dark:group-active:via-primary dark:group-active:to-neutral-800",
        ].join(" "),
        destructive: [
          "border-border/88 from-destructive via-destructive to-destructive/78 dark:border-neutral-500/55 dark:from-neutral-600 dark:via-destructive dark:to-destructive/78",
          "group-active:border-border/92 group-active:from-destructive group-active:via-destructive group-active:to-destructive/76 dark:group-active:from-neutral-700 dark:group-active:via-destructive dark:group-active:to-neutral-800",
        ].join(" "),
        outline: [
          "shadow-[inset_0_-1px_0_0_rgb(0_0_0_/_0.09)] dark:shadow-[inset_0_-1px_0_0_rgb(0_0_0_/_0.2)] group-active:shadow-none dark:group-active:shadow-none",
          "border-border/82 from-background via-muted to-muted/86 dark:border-neutral-600/65 dark:from-neutral-600 dark:via-muted dark:to-muted/86",
          "group-active:border-border/90 group-active:from-background group-active:via-muted group-active:to-muted/82 dark:group-active:from-neutral-700 dark:group-active:via-muted dark:group-active:to-neutral-800",
        ].join(" "),
        secondary: [
          "shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.85),inset_0_-1px_0_0_rgb(0_0_0_/_0.06)] dark:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.12),inset_0_-1px_0_0_rgb(0_0_0_/_0.2)] group-active:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.55)] dark:group-active:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.08)]",
          "border-border/80 from-white via-secondary to-neutral-100/90 dark:border-neutral-600/65 dark:from-neutral-600 dark:via-secondary dark:to-secondary/86",
          "group-active:border-border/90 group-active:from-neutral-50 group-active:via-secondary group-active:to-neutral-100/85 dark:group-active:from-neutral-700 dark:group-active:via-secondary dark:group-active:to-neutral-800",
        ].join(" "),
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const labelLayerVariants = cva(
  "relative z-10 inline-flex min-h-0 min-w-0 max-w-full items-center justify-center gap-2 text-center text-inherit [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      size: {
        default: "",
        xs: "",
        sm: "",
        lg: "",
        icon: "size-full min-h-0 min-w-0",
        "icon-xs": "size-full min-h-0 min-w-0",
        "icon-sm": "size-full min-h-0 min-w-0",
        "icon-lg": "size-full min-h-0 min-w-0",
      },
    },
    defaultVariants: { size: "default" },
  },
);

/** Single-node styles: ghost, link, or Slot (asChild) — includes pseudo 3D for raised + asChild. */
const buttonVariants = cva(
  [
    "relative isolate inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full text-center text-sm font-semibold outline-none",
    "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-reduce:duration-0",
    "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full motion-safe:before:transition-all motion-safe:before:duration-700 motion-safe:before:ease-out motion-reduce:before:duration-0",
    "before:translate-y-px active:before:translate-y-0",
    "translate-y-0 active:translate-y-0",
    "disabled:pointer-events-none disabled:opacity-50 disabled:active:translate-y-0 disabled:before:translate-y-px",
    "focus-visible:ring-[3px] focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border border-border/85 bg-gradient-to-b from-primary via-primary to-primary/78 text-primary-foreground dark:border-neutral-500/55 dark:from-neutral-600 dark:via-primary dark:to-primary/78",
          "shadow-[0_1px_0_0_rgb(255_255_255_/_0.2),0_1px_2px_rgb(0_0_0_/_0.08),0_3px_10px_rgb(0_0_0_/_0.08),0_6px_18px_rgb(0_0_0_/_0.06),inset_0_1px_0_0_rgb(255_255_255_/_0.22),inset_0_-2px_0_0_rgb(0_0_0_/_0.12)] dark:shadow-[0_1px_0_0_rgb(255_255_255_/_0.07),0_2px_6px_rgb(0_0_0_/_0.42),0_5px_16px_rgb(0_0_0_/_0.28),inset_0_1px_0_0_rgb(255_255_255_/_0.1),inset_0_-2px_0_0_rgb(0_0_0_/_0.28)]",
          "hover:from-primary hover:via-primary hover:to-primary/76 dark:hover:from-neutral-600",
          "active:from-primary active:via-primary active:to-primary/78 dark:active:from-neutral-700 dark:active:to-neutral-800",
          "active:shadow-[0_1px_1px_rgb(0_0_0_/_0.07),inset_0_1px_0_0_rgb(255_255_255_/_0.12)] dark:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.32),inset_0_1px_0_0_rgb(255_255_255_/_0.05)]",
          "before:bg-black/22 dark:before:bg-black/55",
        ].join(" "),
        destructive: [
          "border border-border/85 bg-gradient-to-b from-destructive via-destructive to-destructive/78 text-white dark:border-neutral-500/55 dark:from-neutral-600 dark:via-destructive dark:to-destructive/78",
          "shadow-[0_1px_0_0_rgb(255_255_255_/_0.16),0_1px_2px_rgb(0_0_0_/_0.09),0_3px_10px_rgb(0_0_0_/_0.09),0_6px_18px_rgb(0_0_0_/_0.07),inset_0_1px_0_0_rgb(255_255_255_/_0.18),inset_0_-2px_0_0_rgb(0_0_0_/_0.14)] dark:shadow-[0_1px_0_0_rgb(255_255_255_/_0.06),0_2px_6px_rgb(0_0_0_/_0.44),0_5px_16px_rgb(0_0_0_/_0.3),inset_0_1px_0_0_rgb(255_255_255_/_0.08),inset_0_-2px_0_0_rgb(0_0_0_/_0.3)]",
          "hover:from-destructive hover:via-destructive hover:to-destructive/76 dark:hover:from-neutral-600",
          "active:from-destructive active:via-destructive active:to-destructive/76 dark:active:from-neutral-700 dark:active:to-neutral-800",
          "active:shadow-[0_1px_1px_rgb(0_0_0_/_0.07),inset_0_1px_0_0_rgb(255_255_255_/_0.1)] dark:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.32),inset_0_1px_0_0_rgb(255_255_255_/_0.04)]",
          "before:bg-black/22 dark:before:bg-black/55",
        ].join(" "),
        outline: [
          "border border-border/80 bg-gradient-to-b from-background via-muted to-muted/86 text-foreground dark:border-neutral-600/60 dark:from-neutral-600 dark:via-muted dark:to-muted/86",
          "shadow-[0_1px_2px_rgb(0_0_0_/_0.08),0_2px_8px_rgb(0_0_0_/_0.07),0_4px_14px_rgb(0_0_0_/_0.05),inset_0_-1px_0_0_rgb(0_0_0_/_0.09)] dark:shadow-[0_1px_2px_rgb(0_0_0_/_0.45),0_2px_10px_rgb(0_0_0_/_0.3),inset_0_-1px_0_0_rgb(0_0_0_/_0.2)]",
          "hover:from-background hover:via-muted hover:to-muted/82 dark:hover:from-neutral-600",
          "active:from-background active:via-muted active:to-muted/80 dark:active:from-neutral-700 dark:active:to-neutral-800",
          "active:shadow-[0_1px_1px_rgb(0_0_0_/_0.06)] dark:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.3)]",
          "before:bg-black/20 dark:before:bg-black/55",
        ].join(" "),
        secondary: [
          "border border-border/75 bg-gradient-to-b from-white via-secondary to-neutral-100/90 text-muted-foreground dark:border-neutral-600/60 dark:from-neutral-600 dark:via-secondary dark:to-secondary/86",
          "shadow-[0_1px_0_0_rgb(255_255_255_/_0.6),0_1px_2px_rgb(0_0_0_/_0.06),0_3px_10px_rgb(0_0_0_/_0.05),0_5px_16px_rgb(0_0_0_/_0.04),inset_0_1px_0_0_rgb(255_255_255_/_0.75),inset_0_-1px_0_0_rgb(0_0_0_/_0.06)] dark:shadow-[0_1px_2px_rgb(0_0_0_/_0.45),0_2px_10px_rgb(0_0_0_/_0.3),inset_0_-1px_0_0_rgb(0_0_0_/_0.2)]",
          "hover:from-neutral-50 hover:via-secondary hover:to-neutral-100/85 dark:hover:from-neutral-600",
          "active:from-neutral-100 active:via-secondary active:to-neutral-200/80 dark:active:from-neutral-700 dark:active:to-neutral-800",
          "active:shadow-[0_1px_1px_rgb(0_0_0_/_0.05),inset_0_1px_0_0_rgb(255_255_255_/_0.45)] dark:active:shadow-[0_1px_2px_rgb(0_0_0_/_0.3)]",
          "before:bg-neutral-300/40 dark:before:bg-black/55",
        ].join(" "),
        ghost: [
          "before:hidden",
          "rounded-full border-0 bg-transparent shadow-none",
          "translate-y-0 active:translate-y-0",
          "hover:bg-muted/80 hover:text-foreground active:bg-muted/60 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100",
        ].join(" "),
        link: [
          "before:hidden",
          "h-auto rounded-full border-0 bg-transparent px-0 py-0 shadow-none",
          "translate-y-0 active:translate-y-0",
          "text-primary underline-offset-4 hover:underline dark:text-violet-400",
        ].join(" "),
      },
      size: {
        default: "h-11 rounded-full px-4",
        xs: "h-8 gap-1 rounded-full px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 rounded-full px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 rounded-full px-6 text-base font-bold",
        icon: "size-9 rounded-full",
        "icon-xs": "size-7 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      type,
      ...props
    },
    ref,
  ) => {
    const useLayered3d = !asChild && isRaisedVariant(variant);

    if (useLayered3d) {
      return (
        <button
          type={type ?? "button"}
          data-slot="button"
          className={cn(
            buttonLayeredShellVariants({ variant, size }),
            className,
          )}
          ref={ref}
          {...props}
        >
          <span
            aria-hidden
            data-slot="button-depth"
            className={depthLayerVariants({ variant })}
          />
          <span
            aria-hidden
            data-slot="button-face"
            className={faceLayerVariants({ variant })}
          />
          <span
            data-slot="button-label"
            className={labelLayerVariants({ size })}
          >
            {children}
          </span>
        </button>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-slot="button"
        type={!asChild ? (type ?? "button") : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
