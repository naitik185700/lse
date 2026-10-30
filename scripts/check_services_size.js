const fs = require('fs');
const content = fs.readFileSync('src/data/services.ts', 'utf8');
console.log('src/data/services.ts length:', content.length, 'chars');
