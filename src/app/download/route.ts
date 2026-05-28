import { NextResponse } from "next/server";
import {
  getApkDownloadInfoUrl,
  getApkDownloadUrl,
} from "@/lib/app-download";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROBE_TIMEOUT_MS = 5_000;

function unavailableHtml(reason: string): string {
  return `<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>دانلود حرف‌چی</title>
  <style>
    :root { color-scheme: light; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: "Vazirmatn", "Tahoma", sans-serif;
      background: #f8fafc;
      color: #0f172a;
      padding: 1.5rem;
    }
    main {
      max-width: 32rem;
      width: 100%;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      padding: 2rem 2.25rem;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
      text-align: center;
    }
    h1 { font-size: 1.4rem; margin: 0 0 0.75rem; color: #0f172a; }
    p { margin: 0 0 1.5rem; line-height: 1.9; color: #475569; }
    .row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
    a {
      display: inline-block;
      padding: 0.65rem 1.25rem;
      border-radius: 0.625rem;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.15s ease, background 0.15s ease;
    }
    a.primary { background: #1e40af; color: #fff; }
    a.primary:hover { background: #1d4ed8; }
    a.secondary { background: #f1f5f9; color: #1e293b; }
    a.secondary:hover { background: #e2e8f0; }
    small { display: block; margin-top: 1.25rem; color: #94a3b8; font-size: 0.8rem; }
  </style>
</head>
<body>
  <main>
    <h1>دانلود مستقیم فعلاً در دسترس نیست</h1>
    <p>
      به نظر می‌رسد فایل نصبی هنوز روی سرور قرار نگرفته است. لطفاً چند دقیقه دیگر
      دوباره تلاش کنید یا از کافه‌بازار / مایکت / سیبچه دانلود کنید.
    </p>
    <div class="row">
      <a class="primary" href="/">بازگشت به صفحهٔ اصلی</a>
      <a class="secondary" href="/#download">گزینه‌های دیگر دانلود</a>
    </div>
    <small>${reason}</small>
  </main>
</body>
</html>`;
}

function unavailableResponse(reason: string, status: number): Response {
  return new Response(unavailableHtml(reason), {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

async function probeDownload(infoUrl: string): Promise<boolean> {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), PROBE_TIMEOUT_MS);
  try {
    const res = await fetch(infoUrl, {
      cache: "no-store",
      signal: ac.signal,
      redirect: "follow",
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  const target = getApkDownloadUrl();
  const infoUrl = getApkDownloadInfoUrl();

  if (!target || !infoUrl) {
    return unavailableResponse(
      "API endpoint URL is not configured (API_URL / NEXT_PUBLIC_API_URL).",
      503,
    );
  }

  const ready = await probeDownload(infoUrl);
  if (!ready) {
    return unavailableResponse(
      "Download endpoint is not ready yet — check back soon.",
      503,
    );
  }

  return NextResponse.redirect(target, 302);
}
