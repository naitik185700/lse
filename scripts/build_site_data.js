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

// 1. EXTRACT ALL TESTIMONIALS FROM testimonials.html
const testHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'testimonials.html'), 'utf8');
const testimonials = [];
const cardRegex = /<div class=["']lse-card["']>([\s\S]*?)<\/div>/gi;
let tMatch;
while ((tMatch = cardRegex.exec(testHtml)) !== null) {
  const c = tMatch[1];
  const pM = c.match(/<p>([\s\S]*?)<\/p>/i);
  const h4M = c.match(/<h4>([\s\S]*?)<\/h4>/i);
  const spanM = c.match(/<span>([\s\S]*?)<\/span>/i);
  if (pM && h4M) {
    testimonials.push({
      quote: clean(pM[1].replace(/<[^>]+>/g, '')),
      name: clean(h4M[1].replace(/<[^>]+>/g, '')),
      location: spanM ? clean(spanM[1].replace(/<[^>]+>/g, '')) : 'India'
    });
  }
}

// 2. EXTRACT ALL FAQS FROM faq.html
const faqHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'faq.html'), 'utf8');
const faqs = [];
const qRegex = /<button class=["']faq-question["']>([\s\S]*?)<\/button>/gi;
const aRegex = /<div class=["']faq-answer["']>([\s\S]*?)<\/div>/gi;

let qMatch, aMatch;
const questions = [];
const answers = [];

while ((qMatch = qRegex.exec(faqHtml)) !== null) {
  const qText = qMatch[1].replace(/<span[\s\S]*?<\/span>/gi, '').replace(/^\d+\.\s*/, '').trim();
  questions.push(clean(qText));
}

while ((aMatch = aRegex.exec(faqHtml)) !== null) {
  answers.push(clean(aMatch[1].replace(/<[^>]+>/g, '')));
}

for (let i = 0; i < Math.min(questions.length, answers.length); i++) {
  faqs.push({
    question: questions[i],
    answer: answers[i]
  });
}

// 3. EXTRACT TERMS & CONDITIONS
const termsHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'terms-and-conditions.html'), 'utf8');
const termsSections = [];
const termsH2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/gi;
let termMatch;
while ((termMatch = termsH2Regex.exec(termsHtml)) !== null) {
  const h2 = clean(termMatch[1].replace(/<[^>]+>/g, ''));
  const body = termMatch[2];
  const paras = [];
  const pReg = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pM;
  while ((pM = pReg.exec(body)) !== null) {
    const text = clean(pM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('JavaScript') && text.length > 5) paras.push(text);
  }
  const items = [];
  const liReg = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let liM;
  while ((liM = liReg.exec(body)) !== null) {
    const text = clean(liM[1].replace(/<[^>]+>/g, ''));
    if (text) items.push(text);
  }
  if (h2 && (paras.length > 0 || items.length > 0)) {
    termsSections.push({ title: h2, paragraphs: paras, items });
  }
}

// 4. EXTRACT PRIVACY POLICY
const privHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'privacy-policy.html'), 'utf8');
const privacySections = [];
let privMatch;
while ((privMatch = termsH2Regex.exec(privHtml)) !== null) {
  const h2 = clean(privMatch[1].replace(/<[^>]+>/g, ''));
  const body = privMatch[2];
  const paras = [];
  const pReg = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pM;
  while ((pM = pReg.exec(body)) !== null) {
    const text = clean(pM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('JavaScript') && text.length > 5) paras.push(text);
  }
  const items = [];
  const liReg = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let liM;
  while ((liM = liReg.exec(body)) !== null) {
    const text = clean(liM[1].replace(/<[^>]+>/g, ''));
    if (text) items.push(text);
  }
  if (h2 && (paras.length > 0 || items.length > 0)) {
    privacySections.push({ title: h2, paragraphs: paras, items });
  }
}

// 5. EXTRACT ABOUT US PAGE SPECIFIC DETAILS
const aboutHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'about.html'), 'utf8');
const aboutSections = [];
let abMatch;
while ((abMatch = termsH2Regex.exec(aboutHtml)) !== null) {
  const h2 = clean(abMatch[1].replace(/<[^>]+>/g, ''));
  const body = abMatch[2];
  const paras = [];
  const pReg = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pM;
  while ((pM = pReg.exec(body)) !== null) {
    const text = clean(pM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('JavaScript') && text.length > 10) paras.push(text);
  }
  const items = [];
  const liReg = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let liM;
  while ((liM = liReg.exec(body)) !== null) {
    const text = clean(liM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('Home') && !text.includes('Services')) items.push(text);
  }
  if (h2 && (paras.length > 0 || items.length > 0)) {
    aboutSections.push({ title: h2, paragraphs: paras, items });
  }
}

// 6. EXTRACT JOIN OUR TEAM PAGE
const joinHtml = fs.readFileSync(path.join(__dirname, '..', 'raw_audit', 'join-our-team.html'), 'utf8');
const joinSections = [];
let jMatch;
while ((jMatch = termsH2Regex.exec(joinHtml)) !== null) {
  const h2 = clean(jMatch[1].replace(/<[^>]+>/g, ''));
  const body = jMatch[2];
  const paras = [];
  const pReg = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pM;
  while ((pM = pReg.exec(body)) !== null) {
    const text = clean(pM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('JavaScript') && text.length > 5) paras.push(text);
  }
  const items = [];
  const liReg = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let liM;
  while ((liM = liReg.exec(body)) !== null) {
    const text = clean(liM[1].replace(/<[^>]+>/g, ''));
    if (text && !text.includes('Home')) items.push(text);
  }
  if (h2 && (paras.length > 0 || items.length > 0)) {
    joinSections.push({ title: h2, paragraphs: paras, items });
  }
}

const siteDataTs = `export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PolicySection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

export const SITE_CONFIG = {
  name: "Loan Settlement Expert",
  legalName: "Loan Settlement Expert",
  tagline: "From Constant Worry to Complete Relief — Loan Settlement Expert Stands With You.",
  phone: "+91-92203 60824",
  phoneRaw: "919220360824",
  email: "info@loansettlementexpert.in",
  address: "Plot No. 38p, Saraswati Kunj, 1, Golf Course Rd, Sector 54, Gurugram, Haryana 122001",
  location: "Gurugram (HR)",
  url: "https://loansettlementexpert.in",
  zohoFormUrl: "https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo",
  whatsappUrl: "https://wa.me/919220360824",
  disclaimer: "Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision.",
  copyrightYear: 2026,
  designerCredit: "Pixel Pragati",
  designerUrl: "https://pixelpragati.com/"
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "From Constant Worry to Complete Relief",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg.png"
  },
  {
    title: "Life Feels Better When Loans Stop Controlling Your Home",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg3.png"
  },
  {
    title: "A Secure Family Life Begins with the Right Financial Support",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg4.png"
  },
  {
    title: "From Harassment Calls to Peaceful Nights",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg5.png"
  }
];

export const ABOUT_HOMEPAGE_PARAGRAPHS = [
  "Loan Settlement Expert is a trusted loan settlement company in India, specialising in loan settlement, debt resolution, and legal advisory services for borrowers facing prolonged EMI stress and financial hardship. We work closely with individuals and families who are unable to manage credit card dues, personal loans, or business loans due to unavoidable circumstances such as income disruption, medical emergencies, business losses, or financial instability. Our purpose is to help such borrowers find lawful, structured, and dignified solutions to close their loan obligations and move forward with confidence.",
  "In today's lending environment, borrowers often feel overwhelmed by mounting EMIs, recovery pressure, and a lack of clear guidance. Loan Settlement Expert was established to bridge this gap by providing transparent and legally aligned loan settlement solutions that focus on realistic outcomes rather than false promises. We believe that financial distress should be addressed through structured debt resolution processes, not fear or harassment.",
  "Our core focus lies in delivering professional loan settlement services that are practical, transparent, and compliant with applicable legal frameworks. Each case begins with a detailed assessment of the borrower's financial position, liabilities, and repayment capacity. Based on this assessment, we guide clients through structured settlement discussions with banks and NBFCs, ensuring that settlement proposals are realistic, documented, and aligned with lawful procedures. Every loan settlement solution we assist with is designed to reflect the borrower's genuine financial capacity while ensuring proper documentation and closure clarity.",
  "A strong foundation of legal advisory for loan settlement defines our approach. Many borrowers are unaware of their rights and obligations during loan recovery and settlement proceedings. Our role is to bring clarity by helping clients understand the legal framework governing loan recovery, settlement, and fair practices. We assist in addressing recovery-related pressure, ensuring that all actions taken during the settlement process remain lawful, ethical, and compliant. This legal-first approach allows borrowers to navigate the process with confidence rather than uncertainty.",
  "At Loan Settlement Expert, we handle every case with individual attention, confidentiality, and responsibility. We prioritise clear communication, realistic expectations, and step-by-step guidance throughout the debt resolution journey. Our commitment does not end at negotiation; we continue to support clients until proper settlement confirmation, documentation, and closure are achieved.",
  "Our objective is to provide legal loan settlement and debt resolution services that reduce financial stress, restore confidence, and help clients transition toward long-term financial stability with peace of mind. Through ethical practices, structured processes, and reliable legal advisory, Loan Settlement Expert strives to be a dependable partner for borrowers seeking lawful closure and a fresh financial start."
];

export const SETTLEMENT_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Case Assessment",
    description: "Complete evaluation of your loan situation and recovery pressure."
  },
  {
    step: 2,
    title: "Settlement Strategy",
    description: "Customized strategy to reduce principal and interest burden."
  },
  {
    step: 3,
    title: "Legal Protection",
    description: "Protection from harassment & unfair recovery actions."
  },
  {
    step: 4,
    title: "Bank Negotiation",
    description: "Professional negotiation with banks & NBFCs."
  },
  {
    step: 5,
    title: "Successful Closure",
    description: "Settlement letter, NOC & financial relief delivered."
  }
];

export const BUSINESS_STATS = [
  { value: 95000, display: "95,000+", label: "Client Conversations" },
  { value: 25000, display: "25,000+", label: "Customers" },
  { value: 2700, display: "2,700+", label: "Debt Handled" },
  { value: 99, display: "99%", label: "Clients Satisfied" }
];

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    quote: "I was under huge pressure from banks. SettleLoan360 helped me legally settle my loan and stop harassment."
  },
  {
    name: "Pooja Verma",
    location: "Mumbai",
    quote: "Very professional team. They guided me step by step and reduced my loan burden significantly."
  },
  {
    name: "Amit Singh",
    location: "Bangalore",
    quote: "I finally got peace of mind. Calls stopped and settlement was done smoothly."
  },
  {
    name: "Neha Gupta",
    location: "Jaipur",
    quote: "Transparent process and genuine support. Highly recommended for loan settlement."
  }
];

export const ALL_TESTIMONIALS: Testimonial[] = ${JSON.stringify(testimonials, null, 2)};

export const ALL_FAQS: FAQItem[] = ${JSON.stringify(faqs, null, 2)};

export const ABOUT_PAGE_SECTIONS = ${JSON.stringify(aboutSections, null, 2)};

export const JOIN_TEAM_SECTIONS = ${JSON.stringify(joinSections, null, 2)};

export const TERMS_SECTIONS: PolicySection[] = ${JSON.stringify(termsSections, null, 2)};

export const PRIVACY_SECTIONS: PolicySection[] = ${JSON.stringify(privacySections, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'siteData.ts'), siteDataTs);
console.log('Saved updated siteData.ts with realistic hero images.');
