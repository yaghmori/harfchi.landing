import { NextResponse } from "next/server";
import { getApkDownloadUrl } from "@/lib/app-download";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const target = getApkDownloadUrl();
  if (!target) {
    return new Response("فایل دانلود در دسترس نیست.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return NextResponse.redirect(target, 302);
}
