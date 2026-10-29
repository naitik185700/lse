const http = require('http');

function checkPage(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const hasZoho = d.includes('forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow');
        console.log(`Page: ${path} | Status: ${res.statusCode} | Has Zoho Form iframe: ${hasZoho}`);
        resolve(hasZoho);
      });
    });
  });
}

(async () => {
  await checkPage('/');
  await checkPage('/contact');
  await checkPage('/services/personal-loan-settlement');
})();
