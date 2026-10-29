const fs = require('fs');
const html = fs.readFileSync('raw_audit/index.html', 'utf8');
const idx = html.indexOf('zoho-form');
console.log(html.slice(idx - 200, idx + 400));
