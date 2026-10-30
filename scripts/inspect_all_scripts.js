const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Print every script length and first 100 chars
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, idx) => {
  console.log(`Script ${idx + 1}: length ${s.length}, preview: ${s.slice(0, 100).replace(/\n/g, ' ')}`);
});
