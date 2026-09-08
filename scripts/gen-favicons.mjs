import sharp from "sharp";
import { writeFileSync } from "fs";

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="130 15 645 645">
  <path fill="#99FF00" fill-rule="nonzero" d="M 449.996094 418.410156 C 280.851562 643.261719 143.730469 506.144531 368.585938 336.996094 C 143.730469 167.851562 280.851562 30.734375 449.996094 255.585938 C 619.140625 30.734375 756.261719 167.851562 531.410156 336.996094 C 756.261719 506.144531 619.140625 643.261719 449.996094 418.410156 Z M 449.996094 418.410156 "/>
</svg>`;

// Apple touch icon: opaque ink-black background (Apple recommends no
// transparency), mark inset so it isn't cropped by the iOS rounded-square mask.
const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
  <rect width="900" height="900" fill="#0A0A0A"/>
  <g transform="translate(75,112.5) scale(0.833)">
    <path fill="#99FF00" fill-rule="nonzero" d="M 449.996094 418.410156 C 280.851562 643.261719 143.730469 506.144531 368.585938 336.996094 C 143.730469 167.851562 280.851562 30.734375 449.996094 255.585938 C 619.140625 30.734375 756.261719 167.851562 531.410156 336.996094 C 756.261719 506.144531 619.140625 643.261719 449.996094 418.410156 Z M 449.996094 418.410156 "/>
  </g>
</svg>`;

const faviconSizes = [16, 32, 48, 96];

async function run() {
  for (const size of faviconSizes) {
    const buf = await sharp(Buffer.from(markSvg), { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    writeFileSync(`public/favicon-${size}x${size}.png`, buf);
    console.log(`wrote favicon-${size}x${size}.png`);
  }

  const appleBuf = await sharp(Buffer.from(appleSvg), { density: 384 })
    .resize(180, 180)
    .png()
    .toBuffer();
  writeFileSync("public/apple-icon.png", appleBuf);
  console.log("wrote apple-icon.png");

  // Build a simple multi-size PNG-in-ICO (16/32/48) -- supported by all
  // modern browsers including Safari/Chrome.
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(Buffer.from(markSvg), { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buf });
  }

  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let offset = headerSize + dirSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const { size, buf } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    dirEntries.push(entry);
    offset += buf.length;
  }

  const ico = Buffer.concat([
    header,
    ...dirEntries,
    ...pngBuffers.map((p) => p.buf),
  ]);
  writeFileSync("public/favicon.ico", ico);
  console.log("wrote favicon.ico");
}

run();

async function runSocial() {
  const socialSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <rect width="900" height="900" fill="#0A0A0A"/>
    <g transform="translate(75,112.5) scale(0.833)">
      <path fill="#99FF00" fill-rule="nonzero" d="M 449.996094 418.410156 C 280.851562 643.261719 143.730469 506.144531 368.585938 336.996094 C 143.730469 167.851562 280.851562 30.734375 449.996094 255.585938 C 619.140625 30.734375 756.261719 167.851562 531.410156 336.996094 C 756.261719 506.144531 619.140625 643.261719 449.996094 418.410156 Z M 449.996094 418.410156 "/>
    </g>
  </svg>`;
  const buf = await sharp(Buffer.from(socialSvg), { density: 384 })
    .resize(512, 512)
    .png()
    .toBuffer();
  writeFileSync("public/images/logo-social.png", buf);
  console.log("wrote logo-social.png");
}
runSocial();
