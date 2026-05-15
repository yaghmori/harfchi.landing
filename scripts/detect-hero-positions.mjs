import fs from "fs";
import path from "path";
import sharp from "sharp";

const heroDir = "public/brand/hero";
const finalPath = path.join(heroDir, "final.webp");

const finalMeta = await sharp(finalPath).metadata();
const finalW = finalMeta.width;
const finalH = finalMeta.height;
const finalRaw = await sharp(finalPath).ensureAlpha().raw().toBuffer();

function rgbaAt(buf, w, x, y) {
  const i = (y * w + x) * 4;
  return [buf[i], buf[i + 1], buf[i + 2], buf[i + 3]];
}

async function trimBounds(layerPath) {
  const { data, info } = await sharp(layerPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  let minX = w,
    minY = h,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const a = data[(y * w + x) * 4 + 3];
      if (a < 40) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < minX) return null;
  const tw = maxX - minX + 1;
  const th = maxY - minY + 1;
  const trimmed = Buffer.alloc(tw * th * 4);
  for (let y = 0; y < th; y++) {
    for (let x = 0; x < tw; x++) {
      const si = ((minY + y) * w + (minX + x)) * 4;
      const di = (y * tw + x) * 4;
      trimmed[di] = data[si];
      trimmed[di + 1] = data[si + 1];
      trimmed[di + 2] = data[si + 2];
      trimmed[di + 3] = data[si + 3];
    }
  }
  return { trimmed, tw, th, offsetX: minX, offsetY: minY, fullW: w, fullH: h };
}

async function findPosition(layerPath) {
  const bounds = await trimBounds(layerPath);
  if (!bounds) return null;
  const { trimmed, tw, th } = bounds;
  const lw = tw;
  const lh = th;
  const layerRaw = trimmed;

  const samples = [];
  const step = Math.max(2, Math.floor(Math.min(lw, lh) / 35));
  for (let ly = 0; ly < lh; ly += step) {
    for (let lx = 0; lx < lw; lx += step) {
      const la = layerRaw[(ly * lw + lx) * 4 + 3];
      if (la < 40) continue;
      const lr = layerRaw[(ly * lw + lx) * 4];
      const lg = layerRaw[(ly * lw + lx) * 4 + 1];
      const lb = layerRaw[(ly * lw + lx) * 4 + 2];
      samples.push({ lx, ly, lr, lg, lb });
    }
  }
  if (!samples.length) return null;

  let best = { score: -1, x: 0, y: 0 };
  const coarse = lw > finalW || lh > finalH ? 8 : 4;
  const maxY = Math.max(0, finalH - lh);
  const maxX = Math.max(0, finalW - lw);
  for (let y = 0; y <= maxY; y += coarse) {
    for (let x = 0; x <= maxX; x += coarse) {
      let score = 0;
      for (const s of samples) {
        const fx = x + s.lx;
        const fy = y + s.ly;
        if (fx >= finalW || fy >= finalH) continue;
        const [fr, fg, fb, fa] = rgbaAt(finalRaw, finalW, fx, fy);
        if (fa < 20) continue;
        score +=
          255 -
          Math.min(
            255,
            Math.abs(fr - s.lr) + Math.abs(fg - s.lg) + Math.abs(fb - s.lb),
          );
      }
      if (score > best.score) best = { score, x, y };
    }
  }

  let { x, y } = best;
  for (let dy = -12; dy <= 12; dy++) {
    for (let dx = -12; dx <= 12; dx++) {
      const nx = Math.min(Math.max(0, x + dx), maxX);
      const ny = Math.min(Math.max(0, y + dy), maxY);
      let score = 0;
      for (const s of samples) {
        const fx = nx + s.lx;
        const fy = ny + s.ly;
        if (fx >= finalW || fy >= finalH) continue;
        const [fr, fg, fb, fa] = rgbaAt(finalRaw, finalW, fx, fy);
        if (fa < 20) continue;
        score +=
          255 -
          Math.min(
            255,
            Math.abs(fr - s.lr) + Math.abs(fg - s.lg) + Math.abs(fb - s.lb),
          );
      }
      if (score > best.score) best = { score, x: nx, y: ny };
    }
  }

  return {
    x: best.x,
    y: best.y,
    w: bounds.fullW,
    h: bounds.fullH,
    trimW: lw,
    trimH: lh,
    assetW: bounds.fullW,
    assetH: bounds.fullH,
  };
}

const files = fs
  .readdirSync(heroDir)
  .filter((f) => f.endsWith(".webp") && f !== "final.webp");

console.log(`canvas: ${finalW}x${finalH}\n`);
for (const f of files.sort()) {
  const pos = await findPosition(path.join(heroDir, f));
  if (!pos) {
    console.log(`${f}: not found`);
    continue;
  }
  const leftPct = ((pos.x / finalW) * 100).toFixed(2);
  const topPct = ((pos.y / finalH) * 100).toFixed(2);
  const widthPct = ((pos.assetW / finalW) * 100).toFixed(2);
  const heightPct = ((pos.assetH / finalH) * 100).toFixed(2);
  console.log(
    `${f}: x=${pos.x} y=${pos.y} asset=${pos.assetW}x${pos.assetH} trim=${pos.trimW}x${pos.trimH} | left=${leftPct}% top=${topPct}% width=${widthPct}% height=${heightPct}%`,
  );
}
