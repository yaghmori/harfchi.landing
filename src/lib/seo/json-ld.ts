import { siteConfig, siteUrl } from "@/lib/site";

type JsonLdObject = Record<string, unknown>;

export function createHomeJsonLd(): JsonLdObject[] {
  const logoUrl = `${siteUrl}${siteConfig.icons.icon}`;
  const screenshotUrl = `${siteUrl}${siteConfig.ogImage.path}`;

  const organization: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.nameLatin,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    description: siteConfig.shortDescription,
  };

  const webSite: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webPage: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#software` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: screenshotUrl,
    },
  };

  const software: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: siteConfig.name,
    alternateName: siteConfig.nameLatin,
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
    },
    description: siteConfig.description,
    url: siteUrl,
    downloadUrl: `${siteUrl}/download`,
    screenshot: screenshotUrl,
    image: logoUrl,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return [organization, webSite, webPage, software];
}
