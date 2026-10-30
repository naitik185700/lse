const fs = require('fs');
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');

// Measure what each element contributes
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
const tags = html.match(/<[^>]+>/g) || [];
const classes = html.match(/class=["'][^"']*["']/g) || [];

console.log('Total HTML length:', html.length);
console.log('Total scripts length:', scripts.reduce((acc, s) => acc + s.length, 0));
console.log('Total SVGs length:', svgs.reduce((acc, s) => acc + s.length, 0));
console.log('Total tags count:', tags.length);
console.log('Total class attributes length:', classes.reduce((acc, c) => acc + c.length, 0));
