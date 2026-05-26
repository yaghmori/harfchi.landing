import { LandingDownloadSection } from "./sections/landing-download-section";
import { LandingFeaturesSection } from "./sections/landing-features-section";
import { LandingHeroSection } from "./sections/landing-hero-section";
import { LandingNav } from "./sections/landing-nav";
import { LandingScreenshotsMarqueeSection } from "./sections/landing-screenshots-marquee-section";
import { LandingSiteFooter } from "./sections/landing-site-footer";
import { LandingTestimonialsSection } from "./sections/landing-testimonials-section";

type HarfchiLandingProps = {
  cafeBazaarUrl?: string;
  myketUrl?: string;
  sibcheUrl?: string;
  pwaPlayUrl?: string;
};

export function HarfchiLanding({
  cafeBazaarUrl,
  myketUrl,
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
        myketUrl={myketUrl}
        sibcheUrl={sibcheUrl}
        pwaPlayUrl={pwaPlayUrl}
      />
      <LandingSiteFooter />
    </div>
  );
}
