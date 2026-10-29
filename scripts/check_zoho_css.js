const fs = require('fs');
const html = fs.readFileSync('raw_audit/index.html', 'utf8');

// Look for .zoho-form in style tags or css
const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
styleMatches.forEach((s, idx) => {
  if (s.includes('zoho')) {
    console.log(`Style ${idx} contains zoho:\n`, s);
  }
});
