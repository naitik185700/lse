module.exports = {
  apps: [
    {
      name: 'loan-settlement-expert',
      script: 'npm',
      args: 'start -- -p 3005',
      cwd: '/var/www/loansettlementexpert',
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
        NEXT_PUBLIC_APP_URL: 'https://loansettlementexpert.in',
      },
    },
  ],
};
