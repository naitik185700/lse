const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const scripts = html.match(/<script[^>]+src=[\"'][^\"']+[\"'][^>]*>/gi) || [];
    console.log(scripts.join('\n'));
  });
});
