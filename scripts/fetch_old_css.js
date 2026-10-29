const https = require('https');
https.get('https://loansettlementexpert.in/assets/css/style.css', { rejectUnauthorized: false }, res => {
  let css = '';
  res.on('data', c => css += c);
  res.on('end', () => {
    console.log('CSS length:', css.length);
    ['zoho', 'connect-form', 'connect-left'].forEach(k => {
      let idx = 0;
      while ((idx = css.indexOf(k, idx)) !== -1) {
        console.log('Match', k, ':\n', css.slice(Math.max(0, idx - 40), Math.min(css.length, idx + 250)));
        idx += k.length;
      }
    });
  });
});
