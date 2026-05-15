import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { FooterNewsletterForm } from "../footer-newsletter-form";
import { landingBrand } from "../landing-brand";

function SocialIconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function SocialIconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function SocialIconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function SocialIconDiscord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 19.877 19.877 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.124-.094.248-.194.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
      />
    </svg>
  );
}

const FOOTER_SOCIALS = [
  {
    href: "#footer",
    label: "ایکس",
    Icon: SocialIconX,
  },
  {
    href: "#footer",
    label: "لینکدین",
    Icon: SocialIconLinkedIn,
  },
  {
    href: "#footer",
    label: "اینستاگرام",
    Icon: SocialIconInstagram,
  },
  {
    href: "#footer",
    label: "دیسکورد",
    Icon: SocialIconDiscord,
  },
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
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 lg:py-20">
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
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                حرف چی جایی است که کلمات شکل می‌گیرند و بازی جمعی جان می‌گیرد؛
                بسازید، هم‌بازی شوید و با دوستان رشد کنید.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              <div>
                <p className="text-base font-bold text-slate-900">صفحه</p>
                <ul className="mt-3 space-y-2.5 text-base text-slate-600">
                  <li>
                    <Link href="#features" className="hover:text-[#2563eb]">
                      ویژگی‌ها
                    </Link>
                  </li>
                  <li>
                    <Link href="#app-screens" className="hover:text-[#2563eb]">
                      تصاویر اپ
                    </Link>
                  </li>
                  <li>
                    <Link href="#events" className="hover:text-[#2563eb]">
                      رویدادها
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-base font-bold text-slate-900">جامعه</p>
                <ul className="mt-3 space-y-2.5 text-base text-slate-600">
                  <li>
                    <Link href="#community" className="hover:text-[#2563eb]">
                      نظرات کاربران
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-3 text-base font-bold text-slate-700">
                ما را دنبال کنید
              </p>
              <div className="flex flex-wrap gap-2.5">
                {FOOTER_SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm ring-1 ring-sky-200/80 transition hover:bg-sky-50 hover:text-[#2563eb]"
                  >
                    <Icon className="size-5" />
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

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} حرف چی. تمامی حقوق محفوظ است.</p>
          <p className="flex items-center gap-2 text-slate-600">
            <span
              className="flex size-8 items-center justify-center rounded-md bg-[#2563eb] text-sm text-white"
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
