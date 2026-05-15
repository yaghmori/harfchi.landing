/** Canonical production URL for metadata, sitemap, and JSON-LD. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://harfchi.ir";

export const siteConfig = {
  name: "حرف چی",
  nameLatin: "Harfchi",
  tagline: "گیم‌پلی کلاسیک، هیجان تازه",
  title: "حرف چی — بازی آنلاین اسم و فامیل با حروف فارسی",
  description:
    "حرف چی بازی چندنفرهٔ آنلاین اسم و فامیل با حروف فارسی است؛ اتاق خصوصی و گروهی، رقابت دو نفره، چت با دوستان. دانلود برای اندروید، iOS و نسخهٔ وب.",
  shortDescription: "بازی چندنفره اسم و فامیل با حروف فارسی",
  locale: "fa_IR",
  language: "fa",
  themeColor: "#630ed4",
  backgroundColor: "#f8f9fa",
  pwaPlayUrl:
    process.env.NEXT_PUBLIC_PWA_PLAY_URL?.trim() ?? "https://play.harfchi.ir",
  keywords: [
    "حرف چی",
    "اسم و فامیل آنلاین",
    "بازی اسم و فامیل",
    "بازی کلمات فارسی",
    "بازی چندنفره فارسی",
    "بازی آنلاین فارسی",
    "دانلود بازی اندروید",
    "بازی موبایل فارسی",
  ],
  ogImage: {
    path: "/brand/promotional.png",
    width: 1200,
    height: 630,
    alt: "حرف چی — بازی آنلاین اسم و فامیل با حروف فارسی",
  },
  /** Full-bleed logo for PWA manifest / JSON-LD (not app-icon-safe, which has mobile padding). */
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
} as const;
