const fs = require('fs');
const path = require('path');

function clean(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const serviceConfigs = [
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

const services = [];

serviceConfigs.forEach(cfg => {
  const filePath = path.join(__dirname, '..', 'raw_audit', cfg.file);
  const html = fs.readFileSync(filePath, 'utf8');

  // Metadata
  const titleM = html.match(/<title>([^<]+)<\/title>/i);
  const descM = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const keywM = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/i);

  // Extract main content area (between header and footer)
  // Look for sections in body
  const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/gi;
  const sections = [];
  let sMatch;
  while ((sMatch = sectionRegex.exec(html)) !== null) {
    const sContent = sMatch[1];
    // Skip header/footer/menu sections if any
    if (sContent.includes('mobile-nav') || sContent.includes('footer')) continue;

    // Extract H1, H2, H3
    const h1M = sContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h2M = sContent.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const heading = clean(h1M ? h1M[1].replace(/<[^>]+>/g, '') : (h2M ? h2M[1].replace(/<[^>]+>/g, '') : ''));

    // Extract paragraphs
    const paras = [];
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch;
    while ((pMatch = pRegex.exec(sContent)) !== null) {
      const pText = clean(pMatch[1].replace(/<[^>]+>/g, ''));
      if (pText && !pText.includes('JavaScript') && pText.length > 3) {
        paras.push(pText);
      }
    }

    // Extract lists
    const listItems = [];
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    while ((liMatch = liRegex.exec(sContent)) !== null) {
      const liText = clean(liMatch[1].replace(/<[^>]+>/g, ''));
      if (liText && !liText.includes('Home') && !liText.includes('Services') && !liText.includes('Contact')) {
        listItems.push(liText);
      }
    }

    // Extract step grid items if any (e.g., pls-flow-step)
    const stepItems = [];
    const stepRegex = /<(?:div)[^>]*class=["'][^"']*(?:step|flow|grid-item|card|item)[^"']*["'][^>]*>([\s\S]*?)<\/(?:div)>/gi;
    let stMatch;
    while ((stMatch = stepRegex.exec(sContent)) !== null) {
      const h3M = stMatch[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
      const pM = stMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      if (h3M && pM) {
        stepItems.push({
          title: clean(h3M[1].replace(/<[^>]+>/g, '')),
          desc: clean(pM[1].replace(/<[^>]+>/g, ''))
        });
      }
    }

    if (heading || paras.length > 0 || listItems.length > 0 || stepItems.length > 0) {
      sections.push({
        heading,
        paragraphs: paras,
        items: listItems,
        steps: stepItems
      });
    }
  }

  // Find H1 specifically
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const mainH1 = h1Match ? clean(h1Match[1].replace(/<[^>]+>/g, '')) : cfg.title;

  services.push({
    slug: cfg.slug,
    legacyUrl: cfg.file,
    title: cfg.title,
    h1: mainH1,
    image: cfg.image,
    metaTitle: titleM ? clean(titleM[1]) : `${cfg.title} | Loan Settlement Expert`,
    metaDescription: descM ? clean(descM[1]) : '',
    keywords: keywM ? clean(keywM[1]) : '',
    sections
  });
});

const tsContent = `export interface ServiceSectionStep {
  title: string;
  desc: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  items: string[];
  steps?: ServiceSectionStep[];
}

export interface ServiceDetail {
  slug: string;
  legacyUrl: string;
  title: string;
  h1: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  sections: ServiceSection[];
}

export const SERVICES: ServiceDetail[] = ${JSON.stringify(services, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'services.ts'), tsContent);
console.log(`Saved ${services.length} services to src/data/services.ts`);
