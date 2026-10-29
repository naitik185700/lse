const http = require('http');

const testCases = [
  // Core routes
  { path: '/', expectedStatus: 200, expectedText: 'Loan Settlement Expert' },
  { path: '/about', expectedStatus: 200, expectedText: 'About Loan Settlement Expert' },
  { path: '/services', expectedStatus: 200, expectedText: 'Debt Resolution' },
  { path: '/testimonials', expectedStatus: 200, expectedText: 'Real Client Experiences' },
  { path: '/faq', expectedStatus: 200, expectedText: 'Frequently Asked Questions' },
  { path: '/blog', expectedStatus: 200, expectedText: 'Debt Relief' },
  { path: '/join-our-team', expectedStatus: 200, expectedText: 'Join a Mission-Driven Team' },
  { path: '/contact', expectedStatus: 200, expectedText: 'Speak With a Loan Settlement Expert' },
  { path: '/terms-and-conditions', expectedStatus: 200, expectedText: 'Terms and Conditions' },
  { path: '/privacy-policy', expectedStatus: 200, expectedText: 'Privacy Policy' },
  { path: '/sitemap.xml', expectedStatus: 200, expectedText: 'urlset' },
  { path: '/robots.txt', expectedStatus: 200, expectedText: 'User-Agent' },

  // Service pages (All 11 + legacy aliases)
  { path: '/services/loan-settlement-services', expectedStatus: 200, expectedText: 'Loan Settlement Services' },
  { path: '/services/personal-loan-settlement', expectedStatus: 200, expectedText: 'Personal Loan Settlement' },
  { path: '/services/credit-card-debt-settlement', expectedStatus: 200, expectedText: 'Credit Card Debt Settlement' },
  { path: '/services/business-loan-settlement', expectedStatus: 200, expectedText: 'Business Loan Settlement' },
  { path: '/services/application-based-loan-settlement', expectedStatus: 200, expectedText: 'Application Based Loan Settlement' },
  { path: '/services/home-loan-settlement', expectedStatus: 200, expectedText: 'Home Loan Settlement' },
  { path: '/services/loan-againest-property-settlement', expectedStatus: 200, expectedText: 'Property' },
  { path: '/services/loan-against-property-settlement', expectedStatus: 200, expectedText: 'Property' },
  { path: '/services/vehicle-loan-settlement', expectedStatus: 200, expectedText: 'Vehicle Loan Settlement' },
  { path: '/services/education-loan-settlement', expectedStatus: 200, expectedText: 'Education Loan Settlement' },
  { path: '/services/credit-rebuilding', expectedStatus: 200, expectedText: 'Credit Rebuilding' },
  { path: '/services/anti-harassment-support', expectedStatus: 200, expectedText: 'Anti Harassment Support' },

  // Blog pages (All 9)
  { path: '/blog/how-to-stop-recovery-harassment-legally-in-india-2026-complete-guide', expectedStatus: 200, expectedText: 'Recovery Harassment' },
  { path: '/blog/is-hiring-a-loan-settlement-expert-worth-it', expectedStatus: 200, expectedText: 'Worth It' },
  { path: '/blog/is-loan-settlement-legal-india', expectedStatus: 200, expectedText: 'Legal in India' },
  { path: '/blog/loan-settlement-expert-checklist-are-you-eligible-for-settlement', expectedStatus: 200, expectedText: 'Checklist' },
  { path: '/blog/loan-settlement-expert-complete-guide-india', expectedStatus: 200, expectedText: 'Complete Guide' },
  { path: '/blog/loan-settlement-expert-personal-loan-settlement', expectedStatus: 200, expectedText: 'Personal Loan' },
  { path: '/blog/loan-settlement-expert-recovery-harassment-support', expectedStatus: 200, expectedText: 'Harassment' },
  { path: '/blog/loan-settlement-process-india', expectedStatus: 200, expectedText: 'Process in India' },
  { path: '/blog/why-you-need-a-loan-settlement-expert', expectedStatus: 200, expectedText: 'Why You Need' },

  // Legacy .html redirects
  { path: '/about.html', expectedStatus: 308, redirectTarget: '/about' },
  { path: '/testimonials.html', expectedStatus: 308, redirectTarget: '/testimonials' },
  { path: '/faq.html', expectedStatus: 308, redirectTarget: '/faq' },
  { path: '/contact.html', expectedStatus: 308, redirectTarget: '/contact' },
  { path: '/personal-loan-settlement.html', expectedStatus: 308, redirectTarget: '/services/personal-loan-settlement' },
  { path: '/credit-card-debt-settlement.html', expectedStatus: 308, redirectTarget: '/services/credit-card-debt-settlement' },
  { path: '/anti-harassment-support.html', expectedStatus: 308, redirectTarget: '/services/anti-harassment-support' },
  { path: '/loan-againest-property-settlement.html', expectedStatus: 308, redirectTarget: '/services/loan-against-property-settlement' },

  // 404 custom page
  { path: '/non-existent-page-test', expectedStatus: 404, expectedText: 'Page Not Found' },
];

function testRoute(test) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${test.path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let passed = true;
        let reasons = [];

        if (res.statusCode !== test.expectedStatus) {
          passed = false;
          reasons.push(`status ${res.statusCode} !== ${test.expectedStatus}`);
        }

        if (test.expectedText && !data.includes(test.expectedText)) {
          passed = false;
          reasons.push(`missing text "${test.expectedText}"`);
        }

        if (test.redirectTarget && res.headers.location !== test.redirectTarget) {
          passed = false;
          reasons.push(`location ${res.headers.location} !== ${test.redirectTarget}`);
        }

        if (passed) {
          console.log(`✓ PASS: ${test.path} (${res.statusCode})`);
        } else {
          console.error(`✗ FAIL: ${test.path} -> ${reasons.join(', ')}`);
        }
        resolve(passed);
      });
    });

    req.on('error', (err) => {
      console.error(`✗ ERROR: ${test.path} -> ${err.message}`);
      resolve(false);
    });
  });
}

function testApi() {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      fullName: 'Rahul Sharma Verification Test',
      phone: '9876543210',
      email: 'rahul.test@example.com',
      loanType: 'Personal Loan',
      debtAmount: '350000',
      city: 'Delhi NCR',
      message: 'Automated migration route test submission',
    });

    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode === 200 && parsed.success === true) {
            console.log('✓ PASS: POST /api/contact (200 JSON Success)');
            resolve(true);
          } else {
            console.error(`✗ FAIL: POST /api/contact -> status ${res.statusCode}, data: ${data}`);
            resolve(false);
          }
        } catch (e) {
          console.error('✗ FAIL: POST /api/contact invalid JSON:', data);
          resolve(false);
        }
      });
    });

    req.on('error', (err) => {
      console.error(`✗ ERROR: POST /api/contact -> ${err.message}`);
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

(async () => {
  let allPassed = true;
  for (const t of testCases) {
    const ok = await testRoute(t);
    if (!ok) allPassed = false;
  }

  const apiOk = await testApi();
  if (!apiOk) allPassed = false;

  console.log('\n=======================================');
  if (allPassed) {
    console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
  } else {
    console.log('SOME CHECKS FAILED. PLEASE REVIEW ABOVE.');
  }
  console.log('=======================================\n');
})();
