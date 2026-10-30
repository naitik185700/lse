const fs = require('fs');
const content = fs.readFileSync('src/data/services.ts', 'utf8');
const metas = content.match(/metaDescription:\s*["'`]([\s\S]*?)["'`]/g) || [];
metas.forEach(m => {
  const text = m.replace(/metaDescription:\s*["'`]([\s\S]*?)["'`]/, '$1').trim();
  if (text.length > 155) {
    console.log(`[SERVICE META (${text.length} chars)]: "${text}"`);
  }
});
