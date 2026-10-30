const https = require('https');
https.get('https://loansettlementexpert.in/', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('HTML byte length:', Buffer.byteLength(html));
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ').trim();
    console.log('Text byte length:', Buffer.byteLength(textOnly));
    console.log('Ratio:', (Buffer.byteLength(textOnly) / Buffer.byteLength(html) * 100).toFixed(2) + '%');

    // What takes up the HTML?
    const scripts = (html.match(/<script[\s\S]*?<\/script>/gi) || []).join('');
    console.log('Script tags byte length:', Buffer.byteLength(scripts));
    const svgs = (html.match(/<svg[\s\S]*?<\/svg>/gi) || []).join('');
    console.log('SVG tags byte length:', Buffer.byteLength(svgs));
  });
});
