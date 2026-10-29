const fs = require('fs');
const path = require('path');

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMeta(html) {
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const keywordsMatch = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/i);
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);

  return {
    title: titleMatch ? cleanText(titleMatch[1]) : '',
    description: descMatch ? cleanText(descMatch[1]) : '',
    keywords: keywordsMatch ? cleanText(keywordsMatch[1]) : '',
    ogTitle: ogTitleMatch ? cleanText(ogTitleMatch[1]) : '',
    ogDescription: ogDescMatch ? cleanText(ogDescMatch[1]) : '',
    h1: h1Match ? cleanText(h1Match[1].replace(/<[^>]+>/g, '')) : ''
  };
}

// Read and extract all services
const servicesFiles = [
  { file: 'loan-settlement-services.html', slug: 'loan-settlement-services', title: 'Loan Settlement Services', image: '/images/services/lss.jpeg' },
  { file: 'personal-loan-settlement.html', slug: 'personal-loan-settlement', title: 'Personal Loan Settlement', image: '/images/services/pls.jpeg' },
  { file: 'credit-card-debt-settlement.html', slug: 'credit-card-debt-settlement', title: 'Credit Card Debt Settlement', image: '/images/services/ccs.jpeg' },
  { file: 'Business-loan-settlement.html', slug: 'Business-loan-settlement', title: 'Business Loan Settlement', image: '/images/services/bls.jpeg' },
  { file: 'application-based-loan-settlement.html', slug: 'application-based-loan-settlement', title: 'Application Based Loan Settlement', image: '/images/services/abls.jpeg' },
  { file: 'home-loan-settlement.html', slug: 'home-loan-settlement', title: 'Home Loan Settlement', image: '/images/services/hls.jpeg' },
  { file: 'loan-againest-property-settlement.html', slug: 'loan-againest-property-settlement', title: 'Loan Against Property Settlement', image: '/images/services/lap.jpeg' },
  { file: 'vehicle-loan-settlement.html', slug: 'vehicle-loan-settlement', title: 'Vehicle Loan Settlement', image: '/images/services/vls.jpeg' },
  { file: 'education-loan-settlement.html', slug: 'education-loan-settlement', title: 'Education Loan Settlement', image: '/images/services/els.png' },
  { file: 'credit-rebuilding.html', slug: 'credit-rebuilding', title: 'Credit Rebuilding', image: '/images/services/crg.jpeg' },
  { file: 'anti-harassment-support.html', slug: 'anti-harassment-support', title: 'Anti Harassment Support', image: '/images/services/ahs.jpeg' }
];

const extractedServices = {};

servicesFiles.forEach(s => {
  const fullPath = path.join(__dirname, '..', 'raw_audit', s.file);
  if (!fs.existsSync(fullPath)) return;
  const html = fs.readFileSync(fullPath, 'utf8');
  const meta = extractMeta(html);

  // Extract main content section
  // Usually inside a service details div or container
  // Let's extract sections, h2, h3, p, lists
  const sections = [];
  
  // Find all h2, h3, and their following paragraphs / lists
  const contentRegex = /<(h2|h3|h4|p|ul)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  let currentHeading = '';
  let currentParas = [];
  
  // We can also extract the full article/details HTML safely
  extractedServices[s.slug] = {
    slug: s.slug,
    file: s.file,
    title: s.title,
    image: s.image,
    meta,
    rawHtmlLength: html.length
  };
});

fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'services_summary.json'), JSON.stringify(extractedServices, null, 2));
console.log('Saved services summary.');
