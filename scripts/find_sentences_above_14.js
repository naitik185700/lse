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

const list = [];
sentences.forEach(s => {
  const w = s.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
  if (w.length < 10) return;
  let syl = 0;
  w.forEach(word => syl += countSyllables(word));
  const grade = 0.39 * w.length + 11.8 * (syl / w.length) - 15.59;
  if (grade > 14) {
    list.push({ grade, len: w.length, s: s.trim() });
  }
});

list.sort((a, b) => b.grade - a.grade);
console.log(`Sentences with Grade > 14 (${list.length} total):`);
list.slice(0, 15).forEach((item, i) => {
  console.log(`${i+1}. [Grade ${item.grade.toFixed(1)}, ${item.len} words]: ${item.s.slice(0, 100)}...`);
});
