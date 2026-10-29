const fs = require('fs');
const html = fs.readFileSync('raw_audit/index.html', 'utf8');
const links = html.match(/<link[^>]+stylesheet[^>]*>/gi) || [];
console.log(links.join('\n'));
