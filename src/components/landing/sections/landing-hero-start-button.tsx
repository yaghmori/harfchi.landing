"use client";

import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

export function LandingHeroStartButton() {
  return (
    <Button
      type="button"
      variant="default"
      size="lg"
      className="h-14 min-h-14 px-10 mb-5 text-lg font-bold sm:h-16 sm:min-h-16 sm:px-14 sm:text-xl md:h-17 md:min-h-17 md:px-16 md:text-2xl"
      onClick={() => {
        document
          .getElementById("download")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      شروع بازی
      <Gamepad2 size={36} color="white" className="size-12" />
    </Button>
  );
}
