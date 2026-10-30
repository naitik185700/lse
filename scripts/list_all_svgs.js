const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

const svgs = html.match(/<svg[^>]*>[\s\S]*?<\/svg>/gi) || [];
console.log('Total SVGs on index.html:', svgs.length);

// Count SVGs by class or text surrounding them
svgs.forEach((s, idx) => {
  const preview = s.slice(0, 100).replace(/\n/g, ' ');
  const pos = html.indexOf(s);
  const context = html.slice(Math.max(0, pos - 150), pos).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`${idx + 1}. [near: "...${context.slice(-40)}"]`);
});
