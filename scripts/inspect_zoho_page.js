const https = require('https');
https.get('https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // Check if there are stylesheets in the Zoho page
    const links = html.match(/<link[^>]+stylesheet[^>]*>/gi) || [];
    console.log('Zoho CSS links:\n', links.join('\n'));
    // Check form classes
    const formTag = html.match(/<form[^>]*>/gi);
    console.log('Form tag:', formTag);
  });
});
