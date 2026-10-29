const fs = require('fs');
const faqHtml = fs.readFileSync('raw_audit/faq.html', 'utf8');
const linesF = faqHtml.split('\n');
console.log(linesF.slice(175, 420).join('\n'));
