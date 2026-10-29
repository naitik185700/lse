const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // Extract form fields
    const inputs = html.match(/<input[^>]+name=[\"'][^\"']+[\"'][^>]*>/gi) || [];
    console.log('Inputs count:', inputs.length);
    inputs.forEach(i => console.log(i));
    const selects = html.match(/<select[^>]+name=[\"'][^\"']+[\"'][^>]*>/gi) || [];
    console.log('Selects count:', selects.length);
    selects.forEach(s => console.log(s));
    const labels = html.match(/<label[^>]*>[\s\S]*?<\/label>/gi) || [];
    console.log('Labels count:', labels.length);
    labels.slice(0, 15).forEach(l => console.log(l.replace(/\s+/g, ' ')));
  });
});
