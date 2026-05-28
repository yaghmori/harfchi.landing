import { HarfchiLanding } from "@/components/landing/harfchi-simple-landing";
import { JsonLd } from "@/components/seo/json-ld";
import { createHomeJsonLd } from "@/lib/seo/json-ld";
import { createHomeMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createHomeMetadata();

const cafeBazaarUrl = process.env.NEXT_PUBLIC_CAFE_BAZAAR_URL;
const myketUrl = process.env.NEXT_PUBLIC_MYKET_URL;
const sibcheUrl = process.env.NEXT_PUBLIC_SIBCHE_URL;
const pwaPlayUrl =
  process.env.NEXT_PUBLIC_PWA_PLAY_URL ?? "https://play.harfchi.ir";

export default function HomePage() {
  return (
    <>
      <JsonLd data={createHomeJsonLd()} />
      <HarfchiLanding
        cafeBazaarUrl={cafeBazaarUrl}
        myketUrl={myketUrl}
        sibcheUrl={sibcheUrl}
        pwaPlayUrl={pwaPlayUrl}
      />
    </>
  );
}
