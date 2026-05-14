"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export type SegmentedControlOption<T extends string = string> = {
  value: T;
  label: ReactNode;
  icon?: LucideIcon;
  disabled?: boolean;
};

export type SegmentedControlProps<T extends string = string> = {
  value: T;
  onValueChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  "aria-label": string;
  disabled?: boolean;
  /**
   * Equal columns in `grid` layout. Defaults to `options.length` (clamped 1–6).
   */
  columns?: number;
  /**
   * `comfortable` matches create-room public / private tiles (`min-h-14`, `lg`).
   * `compact` is for 3-up filters and similar dense rows.
   */
  density?: "comfortable" | "compact";
  /** `grid` fills width; `scroll` is a horizontal row with hidden scrollbar. */
  layout?: "grid" | "scroll";
  /** `vertical`: icon above label (create room). `horizontal`: icon + label in a row. */
  segmentLayout?: "vertical" | "horizontal";
  className?: string;
};

export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  "aria-label": ariaLabel,
  disabled = false,
  columns: columnsProp,
  density = "compact",
  layout = "grid",
  segmentLayout = "vertical",
  className,
}: SegmentedControlProps<T>) {
  const columnCount = Math.min(6, Math.max(1, columnsProp ?? options.length));

  const listStyle: CSSProperties | undefined =
    layout === "grid"
      ? { gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }
      : undefined;

  return (
    <div
      className={cn(
        layout === "grid" && "grid w-full gap-3",
        layout === "scroll" &&
          "flex w-full  min-w-0 gap-2  overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      style={listStyle}
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        const Icon = opt.icon;
        const isDisabled = disabled || opt.disabled;

        const iconClass =
          density === "comfortable" ? "size-6 shrink-0" : "size-5 shrink-0";

        const labelNode =
          typeof opt.label === "string" ? (
            <span
              className={cn(
                "min-w-0  text-center font-bold",
                segmentLayout === "vertical" &&
                  density === "compact" &&
                  "line-clamp-2 text-xs leading-tight sm:text-sm",
                segmentLayout === "horizontal" &&
                  "truncate text-xs whitespace-nowrap sm:text-sm",
              )}
            >
              {opt.label}
            </span>
          ) : (
            opt.label
          );

        return (
          <Button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            variant={active ? "default" : "outline"}
            size={density === "comfortable" ? "lg" : "sm"}
            disabled={isDisabled}
            onClick={() => onValueChange(opt.value)}
            className={cn(
              "h-auto justify-center rounded-2xl font-bold shadow-none",
              layout === "grid" && "w-full min-w-0 shrink",
              layout === "scroll" && "w-auto shrink-0",
              density === "comfortable" &&
                segmentLayout === "vertical" &&
                "min-h-14 flex-col gap-1 py-4 text-base",
              density === "compact" &&
                segmentLayout === "vertical" &&
                "min-h-11 flex-col gap-0.5 px-2 py-2.5 text-xs sm:text-sm",
              density === "compact" &&
                segmentLayout === "horizontal" &&
                cn(
                  "min-h-11 gap-2 px-2.5 py-1 text-[11px] sm:text-xs",
                  layout === "grid" && "max-w-[min(100%,20rem)]",
                ),
            )}
          >
            {Icon ? (
              <Icon
                className={iconClass}
                strokeWidth={active ? 2.5 : 1.5}
                aria-hidden
              />
            ) : null}
            {labelNode}
          </Button>
        );
      })}
    </div>
  );
}
