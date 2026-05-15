"use client";

import { useState } from "react";

export function FooterNewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <div className="max-w-md">
      <p className="mb-2 text-base font-bold text-slate-700">در جریان باشید</p>
      {sent ? (
        <p className="text-base text-emerald-700">ممنون! به‌زودی خبر می‌رسانیم.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-sky-200/80"
        >
          <label htmlFor="footer-email" className="sr-only">
            ایمیل
          </label>
          <input
            id="footer-email"
            type="email"
            autoComplete="email"
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2.5 text-base text-slate-800 outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="shrink-0 bg-[#2563eb] px-4 py-2.5 text-base font-bold text-white transition hover:bg-[#1d4ed8]"
            aria-label="ثبت ایمیل"
          >
            ثبت
          </button>
        </form>
      )}
    </div>
  );
}
