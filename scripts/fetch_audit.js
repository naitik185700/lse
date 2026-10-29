const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://loansettlementexpert.in/',
  'https://loansettlementexpert.in/about.html',
  'https://loansettlementexpert.in/loan-settlement-services.html',
  'https://loansettlementexpert.in/personal-loan-settlement.html',
  'https://loansettlementexpert.in/credit-card-debt-settlement.html',
  'https://loansettlementexpert.in/Business-loan-settlement.html',
  'https://loansettlementexpert.in/application-based-loan-settlement.html',
  'https://loansettlementexpert.in/home-loan-settlement.html',
  'https://loansettlementexpert.in/loan-againest-property-settlement.html',
  'https://loansettlementexpert.in/vehicle-loan-settlement.html',
  'https://loansettlementexpert.in/education-loan-settlement.html',
  'https://loansettlementexpert.in/credit-rebuilding.html',
  'https://loansettlementexpert.in/anti-harassment-support.html',
  'https://loansettlementexpert.in/testimonials.html',
  'https://loansettlementexpert.in/faq.html',
  'https://loansettlementexpert.in/blog',
  'https://loansettlementexpert.in/blog/',
  'https://loansettlementexpert.in/join-our-team.html',
  'https://loansettlementexpert.in/contact.html',
  'https://loansettlementexpert.in/terms-and-conditions.html',
  'https://loansettlementexpert.in/privacy-policy.html'
];

const outDir = path.join(__dirname, '..', 'raw_audit');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = 'https://loansettlementexpert.in' + redirectUrl;
        }
        console.log(`Redirecting ${url} -> ${redirectUrl}`);
        fetchUrl(redirectUrl).then(resolve);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let filename = url.replace('https://loansettlementexpert.in/', '').replace(/\//g, '_') || 'index.html';
        if (!filename.endsWith('.html')) filename += '.html';
        fs.writeFileSync(path.join(outDir, filename), data);
        console.log(`Fetched ${url} (${res.statusCode}, ${data.length} bytes) -> ${filename}`);
        resolve();
      });
    });
    req.on('error', (err) => {
      console.error(`Failed ${url}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const u of urls) {
    await fetchUrl(u);
  }
  console.log('Finished fetching all audit pages.');
})();
