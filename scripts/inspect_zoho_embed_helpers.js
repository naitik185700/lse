const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // Look for embed or iframe in the html
    const idx = html.indexOf('zf_perma');
    console.log('zf_perma:', idx);
    const m = html.match(/zf_[a-zA-Z0-9_]+/g);
    console.log('zf functions:', [...new Set(m)].slice(0, 20));
  });
});
