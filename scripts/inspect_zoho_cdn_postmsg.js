const https = require('https');
https.get('https://static.zohocdn.com/forms/js/fullpageformlive.17f6d9bd10798df26236c149f2d14f84.js', { rejectUnauthorized: false }, res => {
  let js = '';
  res.on('data', c => js += c);
  res.on('end', () => {
    let idx = 0;
    while ((idx = js.indexOf('postMessage', idx)) !== -1) {
      console.log('Found postMessage in fullpageformlive.js:\n', js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 200)));
      idx += 11;
    }
  });
});
