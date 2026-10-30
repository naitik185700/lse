const https = require('https');
https.get('https://loansettlementexpert.in/', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // strip HTML tags to get pure visible text
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ');
    const words = textOnly.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];
    console.log('Total words in text:', words.length);
    const loanCount = words.filter(w => w === 'loan' || w === 'loans').length;
    console.log('"loan"/"loans" count:', loanCount);
    const exactLoan = words.filter(w => w === 'loan').length;
    console.log('Exact "loan" count:', exactLoan, `(${(exactLoan / words.length * 100).toFixed(2)}%)`);

    // Let's find occurrences of "loan" in different parts
    const lines = textOnly.split('.');
    console.log('\nSample sentences with loan:');
    lines.filter(l => l.toLowerCase().includes('loan')).slice(0, 10).forEach(l => console.log('-', l.trim()));
  });
});
