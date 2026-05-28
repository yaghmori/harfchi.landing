const APK_PATH = "/api/download/apk";

function normalizeOrigin(raw: string): string {
  return raw.trim().replace(/\/+$/, "").replace(/\/api$/i, "");
}

/**
 * Resolve the absolute URL of the APK download endpoint exposed by the API.
 *
 * Reads `API_URL` (server-only) first, then falls back to
 * `NEXT_PUBLIC_API_URL`. Either value should be the API origin (e.g.
 * `https://api.harfchi.ir`); a trailing `/api` is tolerated and stripped to
 * match the convention used by the mobile and other clients.
 */
export function getApkDownloadUrl(): string | null {
  const raw =
    process.env.API_URL?.trim() || process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) return null;
  try {
    const origin = normalizeOrigin(raw);
    return new URL(APK_PATH, `${origin}/`).toString();
  } catch {
    return null;
  }
}
