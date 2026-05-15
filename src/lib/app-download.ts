import fs from "node:fs";
import path from "node:path";

const DEFAULT_RELATIVE_PATH = "downloads/harfchi.apk";

export type AppDownloadFile = {
  filePath: string;
  fileName: string;
  size: number;
};

export function getAppDownloadConfig(): { filePath: string; fileName: string } {
  const configuredPath = process.env.APP_DOWNLOAD_PATH ?? DEFAULT_RELATIVE_PATH;
  const filePath = path.isAbsolute(configuredPath)
    ? configuredPath
    : path.join(process.cwd(), configuredPath);
  const fileName =
    process.env.APP_DOWNLOAD_FILENAME ?? path.basename(filePath);

  return { filePath, fileName };
}

export function getAppDownloadFile(): AppDownloadFile | null {
  const { filePath, fileName } = getAppDownloadConfig();

  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) {
      return null;
    }

    return { filePath, fileName, size: stat.size };
  } catch {
    return null;
  }
}
