const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Find all script tags
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, idx) => {
  if (s.length > 2000) {
    console.log(`Script ${idx}: length ${s.length}, preview: ${s.slice(0, 150)}`);
  }
});

// Find repeated strings
const words = html.match(/[a-zA-Z0-9_-]{5,}/g) || [];
const counts = {};
words.forEach(w => counts[w] = (counts[w] || 0) + 1);
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
console.log('Most frequent tokens in HTML:');
console.log(sorted.slice(0, 20));
