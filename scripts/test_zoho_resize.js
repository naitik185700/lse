const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo?zf_rszfm=1', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const idx = html.indexOf('resizeform');
    console.log(html.slice(idx - 50, idx + 100));
    const postMsg = html.match(/postMessage/gi);
    console.log('postMessage count with zf_rszfm=1:', postMsg ? postMsg.length : 0);
  });
});
