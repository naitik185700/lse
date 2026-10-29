const fs = require('fs');
const html = fs.readFileSync('raw_audit/contact.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(200, 245).join('\n'));
