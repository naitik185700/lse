const fs = require('fs');

const testHtml = fs.readFileSync('raw_audit/testimonials.html', 'utf8');
const linesT = testHtml.split('\n');
console.log('Testimonials page lines:', linesT.length);

// Let's print out lines around the testimonials
for (let i = 0; i < linesT.length; i++) {
  if (linesT[i].includes('testimonial') || linesT[i].includes('Rahul') || linesT[i].includes('Pooja')) {
    console.log(`Line ${i}: ${linesT[i].trim()}`);
  }
}

const faqHtml = fs.readFileSync('raw_audit/faq.html', 'utf8');
const linesF = faqHtml.split('\n');
console.log('FAQ page lines:', linesF.length);
for (let i = 0; i < linesF.length; i++) {
  if (linesF[i].includes('accordion-button') || linesF[i].includes('accordion-header') || linesF[i].includes('card-header') || linesF[i].includes('collapse')) {
    console.log(`FAQ Line ${i}: ${linesF[i].trim()}`);
  }
}
