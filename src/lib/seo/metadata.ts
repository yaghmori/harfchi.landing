import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site";

const ogImage = {
  url: siteConfig.ogImage.path,
  width: siteConfig.ogImage.width,
  height: siteConfig.ogImage.height,
  alt: siteConfig.ogImage.alt,
  type: "image/png" as const,
};

function optionalVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();
  if (!google && !yandex) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
  };
}

/** Shared metadata for all pages (layout). */
export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.title,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "game",
    alternates: {
      canonical: "/",
      languages: {
        "fa-IR": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.shortDescription,
      images: [siteConfig.ogImage.path],
    },
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    verification: optionalVerification(),
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

/** Home page — reinforces primary keywords and canonical URL. */
export function createHomeMetadata(): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      url: siteUrl,
      title: siteConfig.title,
      description: siteConfig.description,
    },
  };
}
