const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

const matches = html.match(/<([a-zA-Z0-9]+)/g) || [];
const tagCounts = {};
matches.forEach(m => {
  const t = m.slice(1).toLowerCase();
  tagCounts[t] = (tagCounts[t] || 0) + 1;
});
console.log('Tag counts:', Object.entries(tagCounts).sort((a, b) => b[1] - a[1]));
