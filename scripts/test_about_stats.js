const fs = require('fs');

const oldAbout = [
  "Loan Settlement Expert is a trusted loan settlement company in India, specialising in loan settlement, debt resolution, and legal advisory services for borrowers facing prolonged EMI stress and financial hardship. We work closely with individuals and families who are unable to manage credit card dues, personal loans, or business loans due to unavoidable circumstances such as income disruption, medical emergencies, business losses, or financial instability. Our purpose is to help such borrowers find lawful, structured, and dignified solutions to close their loan obligations and move forward with confidence.",
  "In today's lending environment, borrowers often feel overwhelmed by mounting EMIs, recovery pressure, and a lack of clear guidance. Loan Settlement Expert was established to bridge this gap by providing transparent and legally aligned loan settlement solutions that focus on realistic outcomes rather than false promises. We believe that financial distress should be addressed through structured debt resolution processes, not fear or harassment.",
  "Our core focus lies in delivering professional loan settlement services that are practical, transparent, and compliant with applicable legal frameworks. Each case begins with a detailed assessment of the borrower's financial position, liabilities, and repayment capacity. Based on this assessment, we guide clients through structured settlement discussions with banks and NBFCs, ensuring that settlement proposals are realistic, documented, and aligned with lawful procedures. Every loan settlement solution we assist with is designed to reflect the borrower's genuine financial capacity while ensuring proper documentation and closure clarity.",
  "A strong foundation of legal advisory for loan settlement defines our approach. Many borrowers are unaware of their rights and obligations during loan recovery and settlement proceedings. Our role is to bring clarity by helping clients understand the legal framework governing loan recovery, settlement, and fair practices. We assist in addressing recovery-related pressure, ensuring that all actions taken during the settlement process remain lawful, ethical, and compliant. This legal-first approach allows borrowers to navigate the process with confidence rather than uncertainty.",
  "At Loan Settlement Expert, we handle every case with individual attention, confidentiality, and responsibility. We prioritise clear communication, realistic expectations, and step-by-step guidance throughout the debt resolution journey. Our commitment does not end at negotiation; we continue to support clients until proper settlement confirmation, documentation, and closure are achieved.",
  "Our objective is to provide legal loan settlement and debt resolution services that reduce financial stress, restore confidence, and help clients transition toward long-term financial stability with peace of mind. Through ethical practices, structured processes, and reliable legal advisory, Loan Settlement Expert strives to be a dependable partner for borrowers seeking lawful closure and a fresh financial start."
].join(' ');

const newAbout = [
  "Loan Settlement Expert is a premier debt resolution consultancy in India. We specialise in compromise settlements, financial dispute resolution, and legal protection for borrowers under severe EMI stress. Our advisors assist individuals, professionals, and business owners struggling with unmanageable credit card dues, unsecured debts, and corporate liabilities. Common causes include income disruptions, unexpected medical crises, or commercial downturns. Our primary mission is to secure lawful, dignified closures so clients can rebuild financial stability without fear.",
  "Borrowers today often face aggressive recovery calls, mounting interest penalties, and confusing legal notices. Loan Settlement Expert was founded to eliminate this uncertainty. We provide honest, legally compliant debt resolution strategies with realistic expectations instead of false guarantees. We believe genuine financial distress requires legal protection and structured negotiation, never intimidation.",
  "Our methodology centers on practical, documented solutions compliant with the Reserve Bank of India (RBI) Fair Practices Code. We begin by evaluating your overall financial standing, active defaults, and realistic repayment budget. Using these findings, our legal team initiates formal compromise discussions with your lending institutions. Every settlement letter is verified thoroughly to ensure genuine waivers and unconditional closure documentation.",
  "A deep foundation in consumer banking law shapes our advisory. Many borrowers remain unaware of their statutory rights when facing default or recovery agents. We educate our clients on the RBI Master Circular on Recovery Conduct, shielding them from verbal abuse or inappropriate visits. When lenders initiate arbitration or section 138 notices, our advocates formulate lawful replies, restoring balance and peace of mind.",
  "Every case receives dedicated personal attention and absolute confidentiality. We emphasize transparent communication and milestone-based updates throughout your debt resolution journey. Our support continues until your official No Dues Certificate (NOC) is released and your accounts are formally closed.",
  "Our ultimate goal is to remove the burden of unmanageable liabilities, restore dignity, and help borrowers make a clean financial start. Guided by ethical standards and proven legal expertise, Loan Settlement Expert stands as your reliable advocate for lawful debt freedom."
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
  return { words: words.length, sentences: sentences.length, wps, spw, fk, ease, loanCount, density: (loanCount / words.length * 100).toFixed(2) };
}

console.log('Old About Stats:', calcStats(oldAbout));
console.log('New About Stats:', calcStats(newAbout));
