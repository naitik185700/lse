const https = require('https');
const fs = require('fs');
const path = require('path');

const heroImages = [
  'hero_3_bg.png',
  'hero_3_bg3.png',
  'hero_3_bg4.png',
  'hero_3_bg5.png',
  'pls-lse-1.avif',
  'hero_3_img.png'
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'hero');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

function downloadImg(filename) {
  const url = `https://loansettlementexpert.in/assets/images/home_3/${filename}`;
  return new Promise((resolve) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      console.log(`Checking ${filename}: status ${res.statusCode}`);
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(path.join(targetDir, filename));
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded hero image: ${filename}`);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', err => {
      console.log(`Error ${filename}:`, err.message);
      resolve(false);
    });
  });
}

(async () => {
  for (const img of heroImages) {
    await downloadImg(img);
  }
})();
