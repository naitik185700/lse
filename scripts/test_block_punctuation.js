const fs = require('fs');
let html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Replace closing block and link tags with a period and space to simulate proper block separation
const separated = html.replace(/<\/(p|div|li|h[1-6]|span|a|button|td|th)>/gi, '. ');
const textOnly = separated.replace(/<script[\s\S]*?<\/script>/gi, ' ')
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
const words = textOnly.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
let totalSyllables = 0;
words.forEach(w => totalSyllables += countSyllables(w));
const wps = words.length / sentences.length;
const spw = totalSyllables / words.length;
const fkGrade = 0.39 * wps + 11.8 * spw - 15.59;
const fleschEase = 206.835 - 1.015 * wps - 84.6 * spw;

console.log(`With proper block punctuation:`);
console.log(`Total sentences: ${sentences.length}, Total words: ${words.length}`);
console.log(`Average words per sentence: ${wps.toFixed(2)}`);
console.log(`Average syllables per word: ${spw.toFixed(2)}`);
console.log(`Flesch-Kincaid Grade Level: ${fkGrade.toFixed(2)}`);
console.log(`Flesch Reading Ease: ${fleschEase.toFixed(2)} / 100`);
