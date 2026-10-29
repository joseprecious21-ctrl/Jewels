const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

const publicDir = path.join(__dirname, '..', 'public');

// 1. Standard Favicon SVG: 512x512 rounded square (22% radius = 112.64px) with #0A0A0A background and 62% icon size (317.44px)
// Lucide clipboard-check with stroke-width 2.25
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" ry="112" fill="#0A0A0A"/>
  <g transform="translate(97.28, 97.28) scale(13.2267)" fill="none" stroke="#C9A227" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="m9 14 2 2 4-4"/>
  </g>
</svg>`;

// 2. Apple Touch Icon SVG: 180x180 solid #0A0A0A square (no transparency), icon filling about 56% (100.8px) with extra padding for iOS squircle
const appleTouchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" fill="#0A0A0A"/>
  <g transform="translate(39.6, 39.6) scale(4.2)" fill="none" stroke="#C9A227" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="m9 14 2 2 4-4"/>
  </g>
</svg>`;

async function generateAll() {
  // Write favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');
  console.log('Created favicon.svg');

  const svgBuffer = Buffer.from(faviconSvg);

  // Generate PNGs
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  console.log('Created favicon-16x16.png');

  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  console.log('Created favicon-32x32.png');

  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), png48);
  console.log('Created favicon-48x48.png');

  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);
  console.log('Created android-chrome-192x192.png');

  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);
  console.log('Created android-chrome-512x512.png');

  // Apple touch icon (180x180, solid #0A0A0A background)
  const appleTouchBuffer = Buffer.from(appleTouchSvg);
  const applePng = await sharp(appleTouchBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), applePng);
  console.log('Created apple-touch-icon.png');

  // Generate multi-size favicon.ico (16, 32, 48)
  const icoBuffer = await toIco([png16, png32, png48]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Created favicon.ico with 16x16, 32x32, 48x48 icons');
}

generateAll().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
