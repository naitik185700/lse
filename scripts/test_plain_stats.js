const newSimpleAbout = [
  "Loan Settlement Expert helps borrowers across India resolve difficult debt and regain financial peace. We work with individuals, families, and small business owners who face heavy EMI stress. When illness, job loss, or business drops make regular payments impossible, our legal team steps in. We help you negotiate fair, lawful settlements with banks and NBFCs so you can close your dues with dignity.",
  "Many borrowers deal with non-stop collection calls, high penalty charges, and legal notices. Loan Settlement Expert was created to protect you from this pressure. We provide clear, practical debt advice with realistic outcomes. We believe financial trouble should be solved through legal dialogue, not fear or intimidation.",
  "Our approach follows the Reserve Bank of India (RBI) Fair Practices Code. First, we review your debt total, active defaults, and what you can afford to pay. Next, our legal advisors speak directly with your lenders to reach an affordable one-time settlement. We inspect every settlement letter carefully to confirm real waivers and genuine account closure.",
  "Consumer protection laws form the base of our service. Many people do not know their legal rights when lenders demand payment. We explain the RBI rules on recovery agents. Agents cannot call at odd hours or contact your family. If lenders send legal notices or arbitration summons, our advocates draft proper legal replies.",
  "We give each case personal care and complete privacy. We keep you informed at every step of your journey toward financial freedom. Our guidance does not stop at negotiation. We support you until your bank issues the final No Dues Certificate (NOC) and your account is closed.",
  "Our main goal is to lift the weight of unpaid debts, protect your peace of mind, and help you start fresh. With ethical practices and sound legal advice, Loan Settlement Expert is here to guide you to a debt-free life."
].join(' ');

function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function calcStats(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const words = text.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
  let syllables = 0;
  words.forEach(w => syllables += countSyllables(w));
  const wps = words.length / sentences.length;
  const spw = syllables / words.length;
  const fk = 0.39 * wps + 11.8 * spw - 15.59;
  const ease = 206.835 - 1.015 * wps - 84.6 * spw;
  const loanCount = words.filter(w => w.toLowerCase() === 'loan' || w.toLowerCase() === 'loans').length;
  return { words: words.length, sentences: sentences.length, wps: wps.toFixed(1), spw: spw.toFixed(2), fk: fk.toFixed(1), ease: ease.toFixed(1), loanCount, density: (loanCount / words.length * 100).toFixed(2) };
}

console.log('Plain English About Stats:', calcStats(newSimpleAbout));
