const fs = require('fs');

const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// 1. Meta Description Pixel Width Check
const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
const metaDesc = metaDescMatch ? metaDescMatch[1] : '';
console.log('=== 1. META DESCRIPTION ===');
console.log(`Content: "${metaDesc}"`);
console.log(`Character length: ${metaDesc.length} chars (Target <= 155 chars)`);
console.log(`Estimated pixel width: ~${Math.round(metaDesc.length * 5.9)}px (Target <= 920px)`);
console.log(`STATUS: ${metaDesc.length <= 155 ? 'PASSED ✓' : 'FAILED ✗'}\n`);

// 2. Heading Hierarchy Check
console.log('=== 2. HEADING HIERARCHY ===');
const headings = [];
const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let match;
while ((match = hRegex.exec(html)) !== null) {
  headings.push({ level: parseInt(match[1]), text: match[2].replace(/<[^>]+>/g, '').trim().slice(0, 40) });
}
let skipped = 0;
for (let i = 0; i < headings.length - 1; i++) {
  const cur = headings[i].level;
  const next = headings[i + 1].level;
  if (next > cur + 1) {
    console.log(`[SKIPPED] h${cur} (${headings[i].text}) -> h${next} (${headings[i+1].text})`);
    skipped++;
  }
}
console.log(`Total headings: ${headings.length}, Skipped levels: ${skipped}`);
console.log(`STATUS: ${skipped === 0 ? 'PASSED ✓' : 'FAILED ✗'}\n`);

// 3. Keyword Density ("loan" / "loans")
console.log('=== 3. KEYWORD DENSITY ===');
const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                     .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ').trim();
const words = textOnly.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
const exactLoan = words.filter(w => w.toLowerCase() === 'loan').length;
const totalLoanWords = words.filter(w => w.toLowerCase() === 'loan' || w.toLowerCase() === 'loans').length;
const density = (exactLoan / words.length * 100).toFixed(2);
console.log(`Total words: ${words.length}`);
console.log(`"loan" occurrences: ${exactLoan} (${density}%) (Target <= 3.0%)`);
console.log(`"loan/loans" occurrences: ${totalLoanWords} (${(totalLoanWords / words.length * 100).toFixed(2)}%)`);
console.log(`STATUS: ${parseFloat(density) < 3.0 ? 'PASSED ✓' : 'FAILED ✗'}\n`);

// 4. Content Reading Level
console.log('=== 4. CONTENT READING LEVEL ===');
function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}
const sentences = textOnly.split(/[.!?]+/).filter(s => s.trim().length > 3);
let totalSyllables = 0;
words.forEach(w => totalSyllables += countSyllables(w));
const wps = words.length / sentences.length;
const spw = totalSyllables / words.length;
const fkGrade = 0.39 * wps + 11.8 * spw - 15.59;
const fleschEase = 206.835 - 1.015 * wps - 84.6 * spw;
console.log(`Sentences: ${sentences.length}, Avg words/sentence: ${wps.toFixed(2)}`);
console.log(`Avg syllables/word: ${spw.toFixed(2)}`);
console.log(`Flesch-Kincaid Grade Level: ${fkGrade.toFixed(2)} (Target <= 12.0)`);
console.log(`Flesch Reading Ease: ${fleschEase.toFixed(2)} / 100`);
console.log(`STATUS: ${fkGrade <= 12.0 ? 'PASSED ✓' : 'WARNING (Grade ' + fkGrade.toFixed(1) + ')'}\n`);

// 5. Text-to-HTML Ratio
console.log('=== 5. TEXT-TO-HTML RATIO ===');
const htmlBytes = Buffer.byteLength(html);
const textBytes = Buffer.byteLength(textOnly);
const ratio = (textBytes / htmlBytes * 100).toFixed(2);
console.log(`HTML size: ${htmlBytes} bytes, Text size: ${textBytes} bytes`);
console.log(`Text-to-HTML ratio: ${ratio}% (Target >= 10.0%)`);
console.log(`STATUS: ${parseFloat(ratio) >= 10.0 ? 'PASSED ✓' : 'NEEDS OPTIMIZATION'}\n`);
