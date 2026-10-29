const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const idx = html.indexOf('SingleLine-arialabel');
    console.log(html.slice(Math.max(0, idx - 300), Math.min(html.length, idx + 400)));
  });
});
