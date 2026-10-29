const https = require('https');
const fs = require('fs');
const path = require('path');

const serviceImages = [
  'lss.jpeg',
  'pls.jpeg',
  'ccs.jpeg',
  'bls.jpeg',
  'abls.jpeg',
  'hls.jpeg',
  'lap.jpeg',
  'vls.jpeg',
  'els.png',
  'crg.jpeg',
  'ahs.jpeg'
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'services');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

function downloadImg(filename) {
  const url = `https://loansettlementexpert.in/assets/images/services/${filename}`;
  return new Promise((resolve) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(path.join(targetDir, filename));
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded image: ${filename}`);
          resolve();
        });
      } else {
        console.log(`Failed image ${filename}: status ${res.statusCode}`);
        resolve();
      }
    }).on('error', err => {
      console.log(`Error ${filename}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const img of serviceImages) {
    await downloadImg(img);
  }
  console.log('Finished downloading service images.');
})();
