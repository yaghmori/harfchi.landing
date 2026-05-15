"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { landingBrand } from "../landing-brand";

type Stat = { value: string; label: string };

type Testimonial = {
  name: string;
  region: string;
  quote: string;
  rating: number;
};

const STATS: Stat[] = [
  { value: "۲۰هزار+", label: "دانلود" },
  { value: "۳هزار+", label: "نظر مثبت" },
  { value: "۵٫۰", label: "امتیاز فروشگاه" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "با خانواده هر شب یک دور می‌زنیم؛ خیلی بانمک شده.",
    name: "سارا",
    region: "تهران",
    rating: 5,
  },
  {
    quote: "رابط کاربری تمیز و فارسی راست‌چین عالیه.",
    name: "امیر",
    region: "اصفهان",
    rating: 5,
  },
  {
    quote: "دعوت دوستان سریع بود، تازه وارد شدیم بازی کردیم.",
    name: "نازنین",
    region: "شیراز",
    rating: 4.9,
  },
  {
    quote: "برای مهمانی عالیه؛ همه می‌فهمن چی کار کنن.",
    name: "مهدی",
    region: "رشت",
    rating: 5,
  },
  {
    quote:
      "چند تا بازی گروهی امتحان کردیم؛ حرف چی برای جمع‌های بزرگ‌تر روان‌تر و بامزه‌تر بود.",
    name: "الهام",
    region: "مشهد",
    rating: 5,
  },
];

function formatRatingFa(value: number) {
  return value.toLocaleString("fa-IR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  });
}

const StatCard = ({ value, label }: Stat) => (
  <Card className="rounded-xl border border-white/15 bg-white/10 py-0 text-center text-white ring-0">
    <CardContent className="px-3 py-4 sm:px-4">
      <p className="text-xl font-black sm:text-2xl">{value}</p>
      <p className="text-xs text-violet-200 sm:text-sm">{label}</p>
    </CardContent>
  </Card>
);

/** Pinned below sticky nav (h-16 / sm:h-18) plus breathing room. */
const STICKY_CARD_TOP_BASE_PX = 96;
const STICKY_CARD_TOP_STEP_PX = 26;

function StickyTestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const fullStars = Math.min(5, Math.round(testimonial.rating));

  return (
    <div
      className="sticky w-full"
      style={{
        top: `${STICKY_CARD_TOP_BASE_PX + index * STICKY_CARD_TOP_STEP_PX}px`,
      }}
    >
      <div
        className={cn(
          "flex h-auto w-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg",
        )}
      >
        <div className="flex items-center gap-4">
          <Image
            src={landingBrand.appIcon}
            alt=""
            width={56}
            height={56}
            className="size-14 shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1 text-start">
            <p className="text-lg font-bold text-[#1e1b4b]">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.region}</p>
          </div>
        </div>

        <div
          className="my-4 flex items-center gap-2"
          dir="ltr"
        >
          <span className="text-base font-bold text-[#1e1b4b]">
            {formatRatingFa(testimonial.rating)}
          </span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-4",
                  i < fullStars
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-300",
                )}
              />
            ))}
          </div>
        </div>

        <p className="text-start text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
          «{testimonial.quote}»
        </p>
      </div>
    </div>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function LandingTestimonialsSection() {
  const scrollContainerHeight = `calc(100vh + ${TESTIMONIALS.length * 120}px)`;

  return (
    <section
      id="community"
      className="scroll-mt-24 bg-[#1e1b4b] py-16 sm:scroll-mt-28 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm lg:self-start">
              <span
                className="size-2 shrink-0 rounded-full bg-emerald-400"
                aria-hidden
              />
              <span className="text-violet-200">بازخورد واقعی از بازیکنان</span>
            </div>

            <h2 className="text-center font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-start">
              نظر بازیکنان دربارهٔ حرف چی
            </h2>
            <p className="text-center text-base text-violet-100/90 sm:text-lg lg:text-start">
              از دور همی خانوادگی تا جمع دوستان؛ این‌ها بخشی از تجربه‌ای است که
              با اپ به اشتراک گذاشته‌اند.
            </p>

            <div className="mt-2 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                onClick={() => scrollToId("features")}
              >
                امکانات بازی
              </Button>
              <Button
                type="button"
                size="lg"
                className="font-bold"
                onClick={() => scrollToId("download")}
              >
                دانلود و شروع
              </Button>
            </div>
          </div>

          <div
            className="relative flex flex-col gap-4"
            style={{ minHeight: scrollContainerHeight }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <StickyTestimonialCard
                key={testimonial.name}
                index={index}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
