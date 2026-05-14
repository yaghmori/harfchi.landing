import Image from "next/image";
import { landingBrand } from "../landing-brand";

export function LandingIntroArtSection() {
  return (
    <section
      id="intro-art"
      aria-label="معرفی بصری"
      className="bg-[#ece8f7] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-4xl px-4">
        <Image
          src={landingBrand.illustrationAlphabet}
          alt="شخصیت حرف چی با حروف فارسی شناور"
          width={1024}
          height={1024}
          className="mx-auto h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>
    </section>
  );
}
