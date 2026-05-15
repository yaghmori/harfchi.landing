import fs from "node:fs";
import { Readable } from "node:stream";
import { getAppDownloadFile } from "@/lib/app-download";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const file = getAppDownloadFile();
  if (!file) {
    return new Response("فایل دانلود در دسترس نیست.", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const nodeStream = fs.createReadStream(file.filePath);
  const body = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;

  return new Response(body, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": `attachment; filename="${file.fileName}"`,
      "Content-Length": String(file.size),
      "Cache-Control": "private, no-cache",
    },
  });
}
