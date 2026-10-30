const fs = require('fs');
let html = fs.readFileSync('.next/server/app/index.html', 'utf8');

const additionalText = `
Who Qualifies for Debt Settlement in India?
To qualify for a legal compromise settlement, borrowers must demonstrate genuine financial hardship. Common acceptable grounds under banking guidelines include:
1. Significant loss of regular employment or business income.
2. Major unexpected medical expenses affecting family finances.
3. Severe financial obligations exceeding total household income.
4. Continuous default exceeding 90 days where regular EMI payment is no longer feasible.

How Long Does the Settlement Process Take?
A standard debt compromise typically takes between 45 to 90 days depending on the lender. During this time, our advocates:
1. Formally record your financial hardship with the lender's credit committee.
2. Demand immediate cessation of third-party recovery harassment under RBI fair practice rules.
3. Secure a written sanction letter specifying the exact waiver and discounted lump-sum payment.
4. Assist in obtaining the unconditional No Dues Certificate and closure confirmation.

Can Credit Scores Be Rebuilt After a Settlement?
Yes. While a settlement initially marks the account as settled in CIBIL and Experian records, it permanently stops mounting late penalties, legal actions, and criminal complaint risks. Once your debt liability is cleared, you can systematically rebuild your credit score through secured credit cards, timely utility payments, and disciplined financial planning.
`;

const extraWords = additionalText.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
console.log('Extra words:', extraWords.length, 'Extra chars:', additionalText.length);

const currentText = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/\s+/g, ' ').trim();

const combinedText = currentText + ' ' + additionalText;

function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

const words = combinedText.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
const sentences = combinedText.split(/[.!?]+/).filter(s => s.trim().length > 3);
let totalSyllables = 0;
words.forEach(w => totalSyllables += countSyllables(w));
const wps = words.length / sentences.length;
const spw = totalSyllables / words.length;
const fkGrade = 0.39 * wps + 11.8 * spw - 15.59;
const exactLoan = words.filter(w => w.toLowerCase() === 'loan').length;

console.log(`With additional content:`);
console.log(`Total words: ${words.length}`);
console.log(`"loan" density: ${(exactLoan / words.length * 100).toFixed(2)}%`);
console.log(`Flesch-Kincaid Grade Level: ${fkGrade.toFixed(2)} (Target <= 12.0)`);
console.log(`Text size: ${combinedText.length}`);
console.log(`Estimated Text-to-HTML ratio: ${(combinedText.length / (html.length + 3000) * 100).toFixed(2)}%`);
