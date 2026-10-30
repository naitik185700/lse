const { SERVICES } = require('./src/data/services.ts');
SERVICES.forEach(s => {
  if (s.metaDescription && s.metaDescription.length > 155) {
    console.log(`[SERVICE META (${s.metaDescription.length} chars)] ${s.slug}: "${s.metaDescription}"`);
  }
});
