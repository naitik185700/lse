const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const headings = [];
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({ level: parseInt(match[1]), text: match[2].replace(/<[^>]+>/g, '').trim().slice(0, 30) });
  }
  
  for (let i = 0; i < headings.length - 1; i++) {
    const cur = headings[i].level;
    const next = headings[i + 1].level;
    if (next > cur + 1) {
      console.log(`[SKIPPED HEADING] in ${filePath}: h${cur} (${headings[i].text}) -> h${next} (${headings[i + 1].text})`);
    }
  }
}

function traverse(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) traverse(full);
    else if (f.endsWith('.tsx')) checkFile(full);
  }
}

traverse('src');
