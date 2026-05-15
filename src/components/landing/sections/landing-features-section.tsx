import Image from "next/image";
import Link from "next/link";

const FEATURE_CARDS = [
  {
    id: "room-modes",
    title: "حالت‌های بازی، خصوصی و گروهی",
    description:
      "اتاق خصوصی بساز یا به بازی گروهی بپیوند؛ حالت را خودت انتخاب کن.",
    image: "/landing/features/feature-room-modes.jpg",
    alt: "انتخاب اتاق و حالت بازی در اپ حرف چی",
  },
  {
    id: "live-duel",
    title: "رقابت زنده، دو نفره",
    description:
      "رودررو با حریف؛ حروف را بچین، امتیاز بگیر و حس رقابت زنده را تجربه کن.",
    image: "/landing/features/feature-live-duel.jpg",
    alt: "رقابت کلماتی دو نفره با تایل‌های حروف",
  },
  {
    id: "chat-friends",
    title: "چت و ایده، با دوستان",
    description:
      "با دوستانت گپ بزن، از ایده‌های هم الهام بگیر و یادگیری را شبیه بازی نگه دار.",
    image: "/landing/features/feature-chat-friends.jpg",
    alt: "یادگیری و گفتگو با شخصیت‌های حرف چی",
  },
  {
    id: "rewards",
    title: "امتیاز و افتخار",
    description:
      "هر برد جایزه دارد؛ جدول افتخار و جوایز کوچک انگیزه‌ات را بالا نگه می‌دارد.",
    image: "/landing/features/feature-rewards.jpg",
    alt: "جایزه و جدول افتخارات در بازی",
  },
] as const;

export function LandingFeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white  sm:py-16  lg:flex xl:h-svh xl:min-h-svh  xl:max-h-svh lg:flex-col lg:justify-center lg:py-12 xl:py-16"
    >
      <div className="mx-auto   w-full max-w-7xl px-6 sm:px-8 md:px-10 pb-20 lg:px-12 xl:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl  font-extrabold text-[#312e81] sm:text-5xl">
            سیستمی که به مهارت پاداش می‌دهد
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-slate-600 sm:text-2xl">
            هر دور با حروف تازه؛ رقابت عادلانه و سرگرم‌کننده.
          </p>
        </div>

        <div className="mt-12 grid gap-12 xl:gap-5  sm:grid-cols-2 xl:grid-cols-4">
          {FEATURE_CARDS.map((card) => (
            <Link
              key={card.id}
              href="#download"
              aria-label={`${card.title}. ${card.description}`}
              className="group relative block  aspect-square xl:aspect-8/10 w-full overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/10 transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:ring-black/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.07] group-hover:brightness-[1.05]"
              />

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[min(52%,11rem)] bg-linear-to-t from-black/85 via-black/55 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 flex flex-col gap-1.5 px-5 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-12">
                <h3 className="text-start font-heading text-base font-extrabold leading-snug text-pretty text-white drop-shadow-md transition-[opacity,transform] duration-300 ease-out translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:text-lg line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-start text-pretty text-sm leading-relaxed text-white/92 line-clamp-3 transition-[opacity,transform] duration-300 ease-out translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:delay-100">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
