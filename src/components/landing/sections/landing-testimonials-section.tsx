import Image from "next/image";
import { landingBrand } from "../landing-brand";

const TESTIMONIALS = [
  {
    quote: "با خانواده هر شب یک دور می‌زنیم؛ خیلی بانمک شده.",
    name: "سارا",
    region: "تهران",
  },
  {
    quote: "رابط کاربری تمیز و فارسی راست‌چین عالیه.",
    name: "امیر",
    region: "اصفهان",
  },
  {
    quote: "دعوت دوستان سریع بود، تازه وارد شدیم بازی کردیم.",
    name: "نازنین",
    region: "شیراز",
  },
  {
    quote: "برای مهمانی عالیه؛ همه می‌فهمن چی کار کنن.",
    name: "مهدی",
    region: "رشت",
  },
] as const;

export function LandingTestimonialsSection() {
  return (
    <section id="community" className="bg-[#1e1b4b] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-2xl font-extrabold text-white sm:text-3xl">
          نظر بازیکنان
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-3xl bg-white p-6 text-start shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={landingBrand.appIcon}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full"
                />
                <div>
                  <p className="font-bold text-[#1e1b4b]">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.region}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">
                «{item.quote}»
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
