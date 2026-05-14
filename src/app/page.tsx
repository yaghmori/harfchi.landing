import { HarfchiLanding } from "@/components/landing/harfchi-simple-landing";

const gameAppUrl = process.env.NEXT_PUBLIC_GAME_APP_URL;
const googlePlayUrl = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL;
const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL;

export default function HomePage() {
  return (
    <HarfchiLanding
      gameAppUrl={gameAppUrl}
      googlePlayUrl={googlePlayUrl}
      appStoreUrl={appStoreUrl}
    />
  );
}
