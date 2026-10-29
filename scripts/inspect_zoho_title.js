const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const titleMatch = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    console.log('Zoho form headers:', titleMatch);
    // check pageTitle or formTitle
    const formTitle = html.match(/formTitle[^>]*>[\s\S]*?<\//gi);
    console.log('formTitle:', formTitle);
  });
});
