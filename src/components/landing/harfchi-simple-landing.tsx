import { LandingDownloadSection } from "./sections/landing-download-section";
import { LandingFeaturesSection } from "./sections/landing-features-section";
import { LandingHeroSection } from "./sections/landing-hero-section";
import { LandingNav } from "./sections/landing-nav";
import { LandingScreenshotsMarqueeSection } from "./sections/landing-screenshots-marquee-section";
import { LandingSiteFooter } from "./sections/landing-site-footer";
import { LandingTestimonialsSection } from "./sections/landing-testimonials-section";

type HarfchiLandingProps = {
  cafeBazaarUrl?: string;
  sibcheUrl?: string;
  pwaPlayUrl?: string;
};

export function HarfchiLanding({
  cafeBazaarUrl,
  sibcheUrl,
  pwaPlayUrl,
}: HarfchiLandingProps) {
  return (
    <div className="min-h-full  ">
      <LandingNav />
      <LandingHeroSection />
      {/* <LandingIntroArtSection /> */}
      <LandingFeaturesSection />
      <LandingScreenshotsMarqueeSection />
      {/* <LandingRoomTeaserSection />
      <LandingEventsSplitSection /> */}
      <LandingTestimonialsSection />
      <LandingDownloadSection
        cafeBazaarUrl={cafeBazaarUrl}
        sibcheUrl={sibcheUrl}
        pwaPlayUrl={pwaPlayUrl}
      />
      <LandingSiteFooter />
    </div>
  );
}
