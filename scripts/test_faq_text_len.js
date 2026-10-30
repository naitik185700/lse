const fs = require('fs');
const content = fs.readFileSync('src/data/siteData.ts', 'utf8');

const faqsMatch = content.match(/export const ALL_FAQS: FAQItem\[\] = (\[[\s\S]*?\]);/);
if (faqsMatch) {
  const faqs = eval(faqsMatch[1]);
  console.log('Total FAQs:', faqs.length);
  const totalChars = faqs.reduce((acc, f) => acc + f.question.length + f.answer.length, 0);
  console.log('Total FAQ characters:', totalChars);
}
