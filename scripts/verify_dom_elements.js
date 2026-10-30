const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Count opening HTML tags (excluding self-closing / void elements like img, input, meta, link)
const openingTags = html.match(/<([a-zA-Z0-9]+)(\s+[^>]*?)?(?<!\/)>/g) || [];
// void tags:
const voidTags = ['img', 'input', 'link', 'meta', 'br', 'hr'];
let totalElements = 0;
openingTags.forEach(t => {
  const name = t.match(/<([a-zA-Z0-9]+)/)[1].toLowerCase();
  totalElements++;
});

console.log('Total DOM elements in index.html:', totalElements);
console.log('SEOmator threshold: < 800');
console.log('STATUS:', totalElements < 800 ? 'PASSED ✓' : 'EXCEEDED');
