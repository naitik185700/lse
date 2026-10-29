const http = require('http');

http.get('http://localhost:3000', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const cssLinks = d.match(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi) || [];
    console.log('CSS links found:', cssLinks);
    
    // Check if css link exists and fetch it
    cssLinks.forEach(link => {
      const m = link.match(/href=["']([^"']+)["']/i);
      if (m) {
        const href = m[1];
        console.log('Fetching CSS href:', href);
        http.get('http://localhost:3000' + href, (cssRes) => {
          let cssData = '';
          cssRes.on('data', c => cssData += c);
          cssRes.on('end', () => {
            console.log(`CSS status: ${cssRes.statusCode}, size: ${cssData.length} bytes`);
            console.log('CSS preview:', cssData.slice(0, 300));
            // Check if Tailwind utilities like flex, grid, bg-, text- are in the CSS
            console.log('Contains .flex?', cssData.includes('.flex'));
            console.log('Contains .grid?', cssData.includes('.grid'));
            console.log('Contains .hidden?', cssData.includes('.hidden'));
            console.log('Contains .max-w-7xl?', cssData.includes('.max-w-7xl') || cssData.includes('max-w-7xl'));
          });
        });
      }
    });
  });
});
