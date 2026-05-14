import Image from "next/image";
import Link from "next/link";
import { landingBrand } from "../landing-brand";
import { PhoneFrame } from "../phone-frame";

export function LandingRoomTeaserSection() {
  return (
    <section className="border-y border-violet-100 bg-[#faf8ff] py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div className="order-2 text-center md:order-1 md:text-start">
          <h2 className="font-heading text-2xl font-extrabold text-[#312e81] sm:text-3xl">
            نگاهی تازه به اسم و فامیل
          </h2>
          <p className="mt-4 text-slate-600">
            اتاق بساز، دعوت بفرست، و با حروف تصادفی هر بار تجربه‌ای تازه داشته
            باش.
          </p>
          <Link
            href="#features"
            className="mt-6 inline-flex rounded-full bg-[#630ed4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition hover:bg-[#5211b0]"
          >
            بیشتر بدانید
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <PhoneFrame>
            <Image
              src={landingBrand.splash}
              alt="صفحهٔ امتیاز"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 80vw, 260px"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
