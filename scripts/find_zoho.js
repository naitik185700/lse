const fs = require('fs');
const files = ['raw_audit/index.html', 'raw_audit/contact.html', 'raw_audit/about.html'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const lines = html.split('\n');
    lines.forEach((line, idx) => {
      if (line.toLowerCase().includes('zoho') || line.toLowerCase().includes('formperma') || line.toLowerCase().includes('zohopublic')) {
        console.log(`[${file}] Line ${idx}:\n`, lines.slice(Math.max(0, idx - 4), Math.min(lines.length, idx + 15)).join('\n'));
      }
    });
  }
});
