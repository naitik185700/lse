const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    ['parent', 'top', 'postMessage', 'resize', 'frame'].forEach(k => {
      let idx = 0;
      let count = 0;
      while ((idx = html.indexOf(k, idx)) !== -1) {
        count++;
        idx += k.length;
      }
      console.log(k, count);
    });
  });
});
