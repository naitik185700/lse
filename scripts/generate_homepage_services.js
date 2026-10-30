const fs = require('fs');

// We can extract slug, title, image, summary, bullets by regex or simple parser
const content = fs.readFileSync('src/data/services.ts', 'utf8');

// Find all objects inside SERVICES
const jsonStart = content.indexOf('export const SERVICES: ServiceDetail[] = [');
const jsonText = content.slice(jsonStart + 'export const SERVICES: ServiceDetail[] = '.length).trim();
// eval or parse
const services = eval(jsonText);

const hpServices = services.map(s => {
  const introPara = s.sections?.[0]?.paragraphs?.[0] || "";
  const bullets = s.sections?.[0]?.items?.slice(0, 3) || [];
  return {
    slug: s.slug,
    title: s.title,
    image: s.image,
    summary: introPara,
    bullets: bullets
  };
});

console.log('Homepage services count:', hpServices.length);
console.log('Size of hpServices:', JSON.stringify(hpServices).length, 'bytes');

fs.writeFileSync('src/data/homepageServices.ts', `export interface HomepageService {
  slug: string;
  title: string;
  image: string;
  summary: string;
  bullets: string[];
}

export const HOMEPAGE_SERVICES: HomepageService[] = ${JSON.stringify(hpServices, null, 2)};
`);
console.log('Written src/data/homepageServices.ts');
