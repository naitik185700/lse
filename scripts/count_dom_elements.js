const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Count total DOM elements
const tags = html.match(/<[a-zA-Z][a-zA-Z0-9:-]*[^>]*>/g) || [];
// Filter out void tags and self-closing tags to count elements
console.log('Total tags count:', tags.length);

// Let's count elements per section
const sections = [
  'header',
  'Hero Section',
  'About Loan Settlement Expert',
  'Expert Loan Settlement Solutions',
  'Our Debt Resolution Services',
  'Know Your Rights as a Borrower in India',
  'How Debt Settlement Works in India',
  'Your Debt Resolution Journey',
  'Existing Business Statistics',
  'What Our Clients Say',
  'Frequently Asked Questions',
  'Take the First Step Toward Permanent Debt Relief',
  'footer'
];

sections.forEach(s => {
  const idx = html.indexOf(s);
  if (idx !== -1) {
    const chunk = html.slice(idx, idx + 8000);
    const count = (chunk.match(/<[a-zA-Z]/g) || []).length;
    console.log(`[${s}] approximate tag count: ${count}`);
  }
});
