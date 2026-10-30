const https = require('https');

function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

https.get('https://loansettlementexpert.in/', { rejectUnauthorized: false }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ').trim();
    
    // Split into sentences
    const sentences = textOnly.split(/[.!?]+/).filter(s => s.trim().length > 3);
    const words = textOnly.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
    const totalWords = words.length;
    const totalSentences = sentences.length;
    let totalSyllables = 0;
    words.forEach(w => totalSyllables += countSyllables(w));

    const wordsPerSentence = totalWords / totalSentences;
    const syllablesPerWord = totalSyllables / totalWords;
    const fkGrade = 0.39 * wordsPerSentence + 11.8 * syllablesPerWord - 15.59;
    const fleschEase = 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord;

    console.log(`Sentences: ${totalSentences}, Words: ${totalWords}, Syllables: ${totalSyllables}`);
    console.log(`Words per sentence: ${wordsPerSentence.toFixed(2)}`);
    console.log(`Syllables per word: ${syllablesPerWord.toFixed(2)}`);
    console.log(`Flesch-Kincaid Grade Level: ${fkGrade.toFixed(2)}`);
    console.log(`Flesch Reading Ease: ${fleschEase.toFixed(2)}`);

    // Let's find long sentences (words > 25)
    console.log('\nLong sentences (> 25 words):');
    sentences.forEach((s, idx) => {
      const sw = s.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
      if (sw.length > 25) {
        console.log(`[${sw.length} words]:`, s.trim().slice(0, 120) + '...');
      }
    });
  });
});
