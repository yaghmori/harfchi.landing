import Link from "next/link";
import { GameplayPhoneImage } from "../gameplay-phone";
import { PhoneFrame } from "../phone-frame";

export function LandingEventsSplitSection() {
  return (
    <section id="events" className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div>
          <PhoneFrame>
            <GameplayPhoneImage />
          </PhoneFrame>
        </div>
        <div className="text-center md:text-start">
          <h2 className="font-heading text-2xl font-extrabold text-[#312e81] sm:text-3xl">
            نوستالژی با نوآوری
          </h2>
          <p className="mt-4 text-slate-600">
            همان قوانین آشنا، با اتاق آنلاین، چت و لیدربورد. اسکرین‌شات گیم‌پلی
            موبایل را با نام{" "}
            <code className="rounded bg-violet-100 px-1 text-xs">
              gameplay-mobile.png
            </code>{" "}
            در پوشهٔ{" "}
            <code className="rounded bg-violet-100 px-1 text-xs">
              public/brand
            </code>{" "}
            قرار دهید؛ تا آن زمان همان تصویر اسپلش نمایش داده می‌شود.
          </p>
          <Link
            href="#community"
            className="mt-6 inline-flex rounded-full bg-[#630ed4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition hover:bg-[#5211b0]"
          >
            بیشتر بدانید
          </Link>
        </div>
      </div>
    </section>
  );
}
