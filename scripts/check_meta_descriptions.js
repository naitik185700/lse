const fs = require('fs');
const path = require('path');

function searchMeta(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) searchMeta(full);
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const c = fs.readFileSync(full, 'utf8');
      const matches = c.match(/description:\s*["'`]([\s\S]*?)["'`]/g) || [];
      matches.forEach(m => {
        const text = m.replace(/description:\s*["'`]([\s\S]*?)["'`]/, '$1').replace(/\s+/g, ' ').trim();
        if (text.length > 155) {
          console.log(`[LONG META (${text.length} chars)] in ${full}:\n  "${text}"\n`);
        }
      });
    }
  }
}

searchMeta('src');
