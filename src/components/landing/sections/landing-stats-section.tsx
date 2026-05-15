export function LandingStatsSection() {
  return (
    <section className="bg-[#1e1b4b] py-8 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:gap-8">
        <p className="text-center text-sm font-semibold text-violet-200 sm:text-start">
          در حال بازی در سراسر جهان
        </p>
        <div className="grid w-full max-w-lg grid-cols-3 gap-4 text-center sm:gap-8">
          <div>
            <p className="text-xl font-black sm:text-2xl">۲۰هزار+</p>
            <p className="text-xs text-violet-200 sm:text-sm">دانلود</p>
          </div>
          <div>
            <p className="text-xl font-black sm:text-2xl">۳هزار+</p>
            <p className="text-xs text-violet-200 sm:text-sm">نظر مثبت</p>
          </div>
          <div>
            <p className="text-xl font-black sm:text-2xl">۵٫۰</p>
            <p className="text-xs text-violet-200 sm:text-sm">امتیاز فروشگاه</p>
          </div>
        </div>
      </div>
    </section>
  );
}
