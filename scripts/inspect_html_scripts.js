const fs = require('fs');
const https = require('https');

https.get('https://loansettlementexpert.in/', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // Check Next.js flight data / RSC script payload
    const scripts = html.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
    console.log('Total script tags count:', scripts.length);
    scripts.forEach((s, idx) => {
      console.log(`Script ${idx + 1} size: ${s.length} chars, starts with: ${s.slice(0, 80).replace(/\n/g, ' ')}`);
    });
  });
});
