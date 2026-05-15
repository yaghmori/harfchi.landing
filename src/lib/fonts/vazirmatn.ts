import localFont from "next/font/local";

/** Bundled Vazirmatn (SIL OFL) — no Google Fonts fetch at build or runtime. */
export const vazirmatn = localFont({
  src: [
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_400Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_500Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_600SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_700Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_800ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../assets/fonts/vazirmatn/Vazirmatn_900Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});
