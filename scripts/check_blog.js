const fs = require('fs');
const content = fs.readFileSync('raw_audit/blog_.html', 'utf8');

// Find all hrefs
const hrefRegex = /href=["']([^"']+)["']/g;
const links = new Set();
let match;
while ((match = hrefRegex.exec(content)) !== null) {
  const url = match[1];
  if (url.includes('/blog/') && url !== '/blog/' && !url.includes('/category/') && !url.includes('/tag/') && !url.includes('/author/') && !url.includes('/page/')) {
    links.add(url);
  }
}

console.log('Discovered Blog Posts:', Array.from(links));
