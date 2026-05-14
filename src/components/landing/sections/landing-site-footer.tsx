import Image from "next/image";
import Link from "next/link";
import { FooterNewsletterForm } from "../footer-newsletter-form";
import { landingBrand } from "../landing-brand";

const FOOTER_SOCIALS = [
  { href: "#footer", label: "X" },
  { href: "#footer", label: "in" },
  { href: "#footer", label: "IG" },
  { href: "#footer", label: "DC" },
] as const;

export function LandingSiteFooter() {
  return (
    <footer
      id="footer"
      className="relative border-t border-sky-300/50 bg-sky-100 text-slate-800"
      style={{
        backgroundImage: `url("${landingBrand.footerBackground}")`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 flex flex-col gap-10 lg:order-1 lg:max-w-xl">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={landingBrand.logoType}
                  alt="حرف چی"
                  width={180}
                  height={48}
                  className="h-10 w-auto sm:h-11"
                />
              </Link>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                حرف چی جایی است که کلمات شکل می‌گیرند و بازی جمعی جان می‌گیرد؛
                بسازید، هم‌بازی شوید و با دوستان رشد کنید.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
              <div>
                <p className="text-sm font-bold text-slate-900">محصول</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <Link href="#features" className="hover:text-[#2563eb]">
                      ویژگی‌ها
                    </Link>
                  </li>
                  <li>
                    <Link href="#events" className="hover:text-[#2563eb]">
                      رویدادها
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      قیمت‌گذاری
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="hover:text-[#2563eb]">
                      قالب‌ها
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">شرکت</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <Link href="#community" className="hover:text-[#2563eb]">
                      دربارهٔ ما
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      فرصت‌های شغلی
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      وبلاگ
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      تماس
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-sm font-bold text-slate-900">منابع</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      مرکز راهنما
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="hover:text-[#2563eb]">
                      راهنماها
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      حریم خصوصی
                    </Link>
                  </li>
                  <li>
                    <Link href="#footer" className="hover:text-[#2563eb]">
                      شرایط استفاده
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold text-slate-700">
                ما را دنبال کنید
              </p>
              <div className="flex flex-wrap gap-2">
                {FOOTER_SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex size-10 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-600 shadow-sm ring-1 ring-sky-200/80 transition hover:bg-sky-50 hover:text-[#2563eb]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <FooterNewsletterForm />
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="landing-footer-illustration-wave relative w-full max-w-2xl">
              <Image
                src={landingBrand.illustrationPencil}
                alt="شخصیت سه‌بعدی حرف چی در حال بغل کردن مداد بزرگ — نماد خلاقیت و بازی با کلمات فارسی"
                width={717}
                height={717}
                className="mx-auto h-auto w-full object-contain drop-shadow-md lg:max-h-[min(480px,55vh)] lg:mx-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-sky-200/90" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} حرف چی. تمامی حقوق محفوظ است.</p>
          <p className="flex items-center gap-2 text-slate-600">
            <span
              className="flex size-7 items-center justify-center rounded-md bg-[#2563eb] text-xs text-white"
              aria-hidden
            >
              ♥
            </span>
            ساخته‌شده با خلاقیت برای فردایی بهتر.
          </p>
        </div>
      </div>
    </footer>
  );
}
