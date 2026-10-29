const https = require('https');
const scripts = [
  'https://static.zohocdn.com/forms/js/formstplivejs.5598e1e583c1d09fc270b76b7bc87fed.js',
  'https://static.zohocdn.com/forms/js/formsofthirdpartylivejs.44e2e575a610118280a724ae6837b339.js',
  'https://static.zohocdn.com/forms/js/formslivecore.846efcf7c22177e3fc6f532c9802fd03.js',
  'https://static.zohocdn.com/forms/js/formslivetextfields.9435c8332bb78ac2e1bc1cb834db76a5.js',
  'https://static.zohocdn.com/forms/js/formslivechoicefields.ed0f4a6fd850a025f4bbb5e87dce051a.js',
  'https://static.zohocdn.com/forms/js/formsrulesincwebhlive.013e2f74c192876ef0bebcb41e71ceed.js',
  'https://static.zohocdn.com/forms/js/formsselect.b9384dcadf2bc7b3816527891df599f6.js'
];

scripts.forEach(url => {
  https.get(url, { rejectUnauthorized: false }, res => {
    let js = '';
    res.on('data', c => js += c);
    res.on('end', () => {
      if (js.includes('postMessage')) {
        console.log('Found postMessage in', url);
        let idx = js.indexOf('postMessage');
        console.log(js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 200)));
      }
    });
  });
});
