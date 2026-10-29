const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const lis = html.match(/<li[^>]*elType=[\"'][^\"']+[\"'][^>]*>/gi) || [];
    console.log('Total Zoho Form Fields (li elements):', lis.length);
    lis.forEach((li, idx) => console.log(idx + 1, li));
  });
});
