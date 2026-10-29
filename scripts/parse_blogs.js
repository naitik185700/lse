const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '..', 'raw_audit', 'blogs');
const files = fs.readdirSync(blogsDir);

files.forEach(f => {
  const html = fs.readFileSync(path.join(blogsDir, f), 'utf8');
  const titleM = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : '';
  const dateM = html.match(/<time[^>]*datetime=["']([^"']*)["'][^>]*>([\s\S]*?)<\/time>/i);
  const date = dateM ? dateM[2].replace(/<[^>]+>/g, '').trim() : '';
  console.log(`Blog [${f}] -> Title: "${title}" | Date: "${date}"`);
});
