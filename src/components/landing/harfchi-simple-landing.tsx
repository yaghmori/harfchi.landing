import { LandingDownloadSection } from "./sections/landing-download-section";
import { LandingEventsSplitSection } from "./sections/landing-events-split-section";
import { LandingFeaturesSection } from "./sections/landing-features-section";
import { LandingHeroSection } from "./sections/landing-hero-section";
import { LandingIntroArtSection } from "./sections/landing-intro-art-section";
import { LandingNav } from "./sections/landing-nav";
import { LandingRoomTeaserSection } from "./sections/landing-room-teaser-section";
import { LandingSiteFooter } from "./sections/landing-site-footer";
import { LandingStatsSection } from "./sections/landing-stats-section";
import { LandingTestimonialsSection } from "./sections/landing-testimonials-section";

type HarfchiLandingProps = {
  gameAppUrl?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
};

export function HarfchiLanding({
  gameAppUrl,
  googlePlayUrl,
  appStoreUrl,
}: HarfchiLandingProps) {
  return (
    <div className="min-h-full bg-[#ece8f7] text-[#1e1b4b]">
      <LandingNav />
      <LandingHeroSection />
      <LandingDownloadSection
        gameAppUrl={gameAppUrl}
        googlePlayUrl={googlePlayUrl}
        appStoreUrl={appStoreUrl}
      />
      <LandingStatsSection />
      <LandingIntroArtSection />
      <LandingFeaturesSection />
      <LandingRoomTeaserSection />
      <LandingEventsSplitSection />
      <LandingTestimonialsSection />
      <LandingSiteFooter />
    </div>
  );
}
