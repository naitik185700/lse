const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Let's inspect the largest DOM sections in index.html
const sections = html.match(/<(section|header|footer|div|main)[^>]*>[\s\S]*?<\/\1>/gi) || [];
console.log('Top level parts:');
['<header', '<main', '<footer', '<script', '<svg'].forEach(tag => {
  let len = 0;
  const regex = new RegExp(tag + '[\\s\\S]*?<\\/' + tag.slice(1) + '>', 'gi');
  let m;
  while ((m = regex.exec(html)) !== null) {
    len += m[0].length;
  }
  console.log(`${tag} total length: ${len} bytes (${(len / html.length * 100).toFixed(1)}%)`);
});
