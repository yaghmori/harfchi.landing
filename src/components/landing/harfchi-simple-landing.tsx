import { LandingEventsSplitSection } from "./sections/landing-events-split-section";
import { LandingFeaturesSection } from "./sections/landing-features-section";
import { LandingHeroSection } from "./sections/landing-hero-section";
import { LandingNav } from "./sections/landing-nav";
import { LandingRoomTeaserSection } from "./sections/landing-room-teaser-section";
import { LandingScreenshotsMarqueeSection } from "./sections/landing-screenshots-marquee-section";
import { LandingSiteFooter } from "./sections/landing-site-footer";
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
    <div className="min-h-full  ">
      <LandingNav />
      <LandingHeroSection />
      {/* <LandingIntroArtSection /> */}
      <LandingFeaturesSection />
      <LandingScreenshotsMarqueeSection />
      <LandingRoomTeaserSection />
      <LandingEventsSplitSection />
      <LandingTestimonialsSection />
      <LandingSiteFooter />
    </div>
  );
}
