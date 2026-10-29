const https = require('https');
const url = 'https://static.zohocdn.com/forms/js/formslivecore.846efcf7c22177e3fc6f532c9802fd03.js';
https.get(url, { rejectUnauthorized: false }, res => {
  let js = '';
  res.on('data', c => js += c);
  res.on('end', () => {
    let idx = 0;
    while ((idx = js.indexOf('postMessage', idx)) !== -1) {
      console.log('--- occurrence ---');
      console.log(js.slice(Math.max(0, idx - 150), Math.min(js.length, idx + 250)));
      idx += 11;
    }
  });
});
