const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

console.log('Total HTML length:', html.length);

const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
let totalScriptLen = 0;
scripts.forEach((s, i) => {
  totalScriptLen += s.length;
  if (s.length > 500) {
    console.log(`Script ${i+1}: ${s.length} chars (${(s.length/html.length*100).toFixed(1)}%), start: ${s.slice(0, 60)}`);
  }
});
console.log('Total script length:', totalScriptLen, `(${(totalScriptLen/html.length*100).toFixed(1)}%)`);

const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
let totalSvgLen = 0;
svgs.forEach(s => totalSvgLen += s.length);
console.log('Total SVG length:', totalSvgLen, `(${svgs.length} svgs, ${(totalSvgLen/html.length*100).toFixed(1)}%)`);

// What about CSS / inline styles?
const styles = html.match(/<style[\s\S]*?<\/style>/gi) || [];
let totalStyleLen = 0;
styles.forEach(s => totalStyleLen += s.length);
console.log('Total style length:', totalStyleLen);
