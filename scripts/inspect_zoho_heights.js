const https = require('https');
https.get('https://static.zohocdn.com/forms/css/fullpageformlivenew.8dec0e16596cff97c076207cd8ab2140.css', { rejectUnauthorized: false }, res => {
  let css = '';
  res.on('data', c => css += c);
  res.on('end', () => {
    ['fieldWrapper', 'form-header', 'pageWrapper'].forEach(k => {
      let idx = 0;
      while ((idx = css.indexOf(k, idx)) !== -1) {
        console.log('CSS match', k, ':\n', css.slice(Math.max(0, idx - 20), Math.min(css.length, idx + 150)));
        idx += k.length + 50;
      }
    });
  });
});
