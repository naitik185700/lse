const https = require('https');
const fs = require('fs');
const path = require('path');

const blogUrls = [
  'https://loansettlementexpert.in/blog/is-hiring-a-loan-settlement-expert-worth-it/',
  'https://loansettlementexpert.in/blog/loan-settlement-expert-recovery-harassment-support/',
  'https://loansettlementexpert.in/blog/loan-settlement-expert-personal-loan-settlement/',
  'https://loansettlementexpert.in/blog/why-you-need-a-loan-settlement-expert/',
  'https://loansettlementexpert.in/blog/loan-settlement-expert-complete-guide-india/',
  'https://loansettlementexpert.in/blog/is-loan-settlement-legal-india/',
  'https://loansettlementexpert.in/blog/loan-settlement-process-india/',
  'https://loansettlementexpert.in/blog/how-to-stop-recovery-harassment-legally-in-india-2026-complete-guide/',
  'https://loansettlementexpert.in/blog/loan-settlement-expert-checklist-are-you-eligible-for-settlement/'
];

const outDir = path.join(__dirname, '..', 'raw_audit', 'blogs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const slug = url.split('/').filter(Boolean).pop();
        fs.writeFileSync(path.join(outDir, `${slug}.html`), data);
        console.log(`Fetched Blog: ${slug} (${res.statusCode}, ${data.length} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Failed ${url}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const u of blogUrls) {
    await fetchUrl(u);
  }
  console.log('All blogs fetched successfully.');
})();
