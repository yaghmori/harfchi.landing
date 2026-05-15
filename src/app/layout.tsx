import { LandingProviders } from "@/components/providers/LandingProviders";
import { vazirmatn } from "@/lib/fonts/vazirmatn";
import { createRootMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";
import type { Viewport } from "next";
import "./globals.css";

export const metadata = createRootMetadata();

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
