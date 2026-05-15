"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const SCREENSHOTS = [
  "/images/screen-shots/1.jpg",
  "/images/screen-shots/2.jpg",
  "/images/screen-shots/3.jpg",
  "/images/screen-shots/4.jpg",
  "/images/screen-shots/5.jpg",
  "/images/screen-shots/6.jpg",
  "/images/screen-shots/7.jpg",
  "/images/screen-shots/8.jpg",
  "/images/screen-shots/9.jpg",
] as const;

const SCREENSHOT_ALTS = [
  "اسکرین‌شات لیست اتاق‌های بازی",
  "اسکرین‌شات جایزه روزانه",
  "اسکرین‌شات جدول رتبه‌بندی",
  "اسکرین‌شات لیگ و پیشرفت",
  "اسکرین‌شات کلکسیون آواتار",
  "اسکرین‌شات پروفایل کاربر",
  "اسکرین‌شات ایجاد بازی",
  "اسکرین‌شات بخش دوستان",
  "اسکرین‌شات اتاق قبل از شروع بازی",
] as const;

export function LandingScreenshotsMarqueeSection() {
  return (
    <section id="app-screens" aria-labelledby="app-screens-heading">
      <div className="w-full">
        <ThreeDMarquee
          columns={6}
          images={[...SCREENSHOTS]}
          imageAlts={[...SCREENSHOT_ALTS]}
          imageClassName=" aspect-[9/19.5] h-[46.5rem] w-auto  min-w-[26.5rem] max-w-none rounded-[1.35rem] object-cover object-top shadow-md ring-violet-950/10 sm:h-[18rem] lg:h-[59.5rem]"
        />
      </div>
    </section>
  );
}
