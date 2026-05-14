"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = "/brand/splash-screen.png";
const GAMEPLAY = "/brand/gameplay-mobile.png";

/**
 * Shows `public/brand/gameplay-mobile.png` when present; otherwise falls back to splash.
 */
export function GameplayPhoneImage() {
  const [src, setSrc] = useState(GAMEPLAY);

  return (
    <Image
      src={src}
      alt="گیم‌پلی حرف چی"
      fill
      className="object-cover object-top"
      sizes="260px"
      onError={() => {
        if (src !== FALLBACK) setSrc(FALLBACK);
      }}
    />
  );
}
