const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                     .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ').trim();

function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

const sentences = textOnly.split(/[.!?]+/).filter(s => s.trim().length > 3);
console.log('Total sentences:', sentences.length);

// Sort sentences by Flesch-Kincaid score
const scored = sentences.map(s => {
  const words = s.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
  if (words.length === 0) return { s, grade: 0, words: 0 };
  let syl = 0;
  words.forEach(w => syl += countSyllables(w));
  const wps = words.length;
  const spw = syl / words.length;
  const grade = 0.39 * wps + 11.8 * spw - 15.59;
  return { s: s.trim(), grade, words: words.length, spw };
}).filter(x => x.words > 8);

scored.sort((a, b) => b.grade - a.grade);

console.log('Top 10 highest grade (hardest to read) sentences:');
scored.slice(0, 10).forEach((item, idx) => {
  console.log(`${idx + 1}. [Grade ${item.grade.toFixed(1)}, ${item.words} words, ${item.spw.toFixed(2)} spw]:\n   "${item.s.slice(0, 120)}..."\n`);
});
