import { LandingProviders } from "@/components/providers/LandingProviders";
import { vazirmatn } from "@/lib/fonts/vazirmatn";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "حرف چی",
    template: "%s · حرف چی",
  },
  description: "بازی چندنفره اسم و فامیل با حروف فارسی",
  applicationName: "حرف چی",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [{ url: "/brand/app-icon-safe.png", type: "image/png" }],
    shortcut: ["/brand/app-icon-safe.png"],
    apple: [{ url: "/brand/app-icon-safe.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#630ed4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full light", vazirmatn.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <LandingProviders>{children}</LandingProviders>
      </body>
    </html>
  );
}
