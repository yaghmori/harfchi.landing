import { HarfchiLanding } from "@/components/landing/harfchi-simple-landing";

const cafeBazaarUrl = process.env.NEXT_PUBLIC_CAFE_BAZAAR_URL;
const sibcheUrl = process.env.NEXT_PUBLIC_SIBCHE_URL;
const pwaPlayUrl =
  process.env.NEXT_PUBLIC_PWA_PLAY_URL ?? "https://play.harfchi.ir";

export default function HomePage() {
  return (
    <HarfchiLanding
      cafeBazaarUrl={cafeBazaarUrl}
      sibcheUrl={sibcheUrl}
      pwaPlayUrl={pwaPlayUrl}
    />
  );
}
