const fs = require('fs');
const content = fs.readFileSync('src/data/services.ts', 'utf8');

// Extract the SERVICES array items
const { SERVICES } = require('./scripts/extract_services_for_node.js');
