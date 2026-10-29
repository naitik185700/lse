const fs = require('fs');
const html = fs.readFileSync('raw_audit/contact.html', 'utf8');

const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
styleMatches.forEach((s) => {
  if (s.includes('connect-form') || s.includes('connect-left') || s.includes('iframe')) {
    console.log(s);
  }
});
