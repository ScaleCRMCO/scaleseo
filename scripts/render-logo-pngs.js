// Renders PNG versions of the generated logo SVGs (see make-logo.py).
// Usage: NODE_PATH=$(npm root -g) node scripts/render-logo-pngs.js
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const pub = path.join(__dirname, "..", "public");
const jobs = [
  ["brand/scaleseo-logo-navy.svg", "brand/scaleseo-logo-navy.png", 1024, false],
  ["brand/scaleseo-logo-navy-light-blue.svg", "brand/scaleseo-logo-navy-light-blue.png", 1024, false],
  ["brand/scaleseo-logo-light-blue.svg", "brand/scaleseo-logo-light-blue.png", 1024, false],
  ["brand/scaleseo-mark-orange.svg", "brand/scaleseo-mark-orange.png", 1024, true],
  ["brand/scaleseo-mark-navy.svg", "brand/scaleseo-mark-navy.png", 1024, true],
  ["brand/scaleseo-mark-light-blue.svg", "brand/scaleseo-mark-light-blue.png", 1024, true],
  ["favicon.svg", "favicon-16x16.png", 16, true],
  ["favicon.svg", "favicon-32x32.png", 32, true],
  ["favicon.svg", "favicon-48x48.png", 48, true],
  ["favicon.svg", "favicon-96x96.png", 96, true],
  ["favicon.svg", "apple-icon.png", 180, false],
  ["brand/scaleseo-logo-navy.svg", "images/logo-social.png", 512, false],
];

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage();
  for (const [src, out, size, transparent] of jobs) {
    const svg = fs.readFileSync(path.join(pub, src), "utf8")
      .replace(/width="\d+" height="\d+"/, `width="${size}" height="${size}"`);
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<html><body style="margin:0;background:transparent">${svg}</body></html>`
    );
    await page.screenshot({
      path: path.join(pub, out),
      omitBackground: transparent,
      clip: { x: 0, y: 0, width: size, height: size },
    });
  }
  await browser.close();

  // favicon.ico: an ICO container holding the 16/32/48 PNGs
  const sizes = [16, 32, 48];
  const pngs = sizes.map((s) => fs.readFileSync(path.join(pub, `favicon-${s}x${s}.png`)));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const entries = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(s, 0);
    e.writeUInt8(s, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(pngs[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += pngs[i].length;
    return e;
  });
  fs.writeFileSync(path.join(pub, "favicon.ico"), Buffer.concat([header, ...entries, ...pngs]));
  console.log("rendered", jobs.length, "PNGs + favicon.ico");
})();
