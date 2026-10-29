#!/usr/bin/env bash
# ==============================================================================
# Loan Settlement Expert — 1-Click Production VPS Deployment Script
# Target VPS: 46.202.160.208 (Hostinger VPS)
# ==============================================================================
set -euo pipefail

APP_DIR="/var/www/loansettlementexpert"
REPO_URL="https://github.com/naitik185700/lse.git"

echo "==================================================================="
echo "  LOAN SETTLEMENT EXPERT — VPS PRODUCTION DEPLOYMENT"
echo "  Target: $APP_DIR | Internal Port: 3005"
echo "==================================================================="

# 1. Update OS Packages & Prerequisites
echo -e "\n[1/6] Checking system packages and runtime..."
apt-get update -y
apt-get install -y git curl wget nginx tar gzip certbot python3-certbot-nginx

# 2. Check Node.js
if ! command -v node &> /dev/null || [ "$(node -v | cut -d'.' -f1 | tr -d 'v')" -lt 20 ]; then
    echo "Installing Node.js 20 LTS via NodeSource..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
echo "Node.js $(node -v) & npm $(npm -v) verified."

# 3. Check PM2
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2 process manager globally..."
    npm install -g pm2
fi

# 4. Clone or Pull Application from GitHub
echo -e "\n[2/6] Syncing code in ${APP_DIR}..."
if [ -d "$APP_DIR/.git" ]; then
    echo "Updating existing repository..."
    cd "$APP_DIR"
    git fetch origin main
    git reset --hard origin/main
else
    echo "Cloning repository from GitHub ($REPO_URL)..."
    mkdir -p "$APP_DIR"
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# 5. Production Dependencies & Build
echo -e "\n[3/6] Installing dependencies and building production bundle..."
npm install
npm run build

# 6. PM2 Process Launch
echo -e "\n[4/6] Starting application with PM2 on port 3005..."
if pm2 describe loan-settlement-expert &> /dev/null; then
    pm2 reload loan-settlement-expert --update-env
else
    pm2 start deploy/ecosystem.config.cjs
fi
pm2 save
pm2 startup systemd -u root --hp /root || true

# 7. Configure Nginx Reverse Proxy
echo -e "\n[5/6] Setting up Nginx configuration..."
CONF_PATH="/etc/nginx/sites-available/loansettlementexpert.conf"
ENABLED_PATH="/etc/nginx/sites-enabled/loansettlementexpert.conf"

if [ ! -f "/etc/letsencrypt/live/loansettlementexpert.in/fullchain.pem" ]; then
    echo "Setting up temporary HTTP Nginx proxy to obtain SSL..."
    cat > "$CONF_PATH" << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name loansettlementexpert.in www.loansettlementexpert.in;

    location / {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
    ln -sf "$CONF_PATH" "$ENABLED_PATH"
    nginx -t && systemctl reload nginx

    echo "Requesting Let's Encrypt SSL certificate..."
    certbot --nginx -d loansettlementexpert.in -d www.loansettlementexpert.in --non-interactive --agree-tos --register-unsafely-without-email || true
fi

# Deploy final SSL reverse proxy config
cp -f "${APP_DIR}/deploy/nginx-loansettlementexpert.conf" "$CONF_PATH"
ln -sf "$CONF_PATH" "$ENABLED_PATH"
nginx -t && systemctl reload nginx
echo "Nginx reverse proxy reloaded successfully."

# 8. Success Report
echo -e "\n==================================================================="
echo "✓ DEPLOYMENT COMPLETED SUCCESSFULLY!"
echo "==================================================================="
echo "Application: Loan Settlement Expert"
echo "Domain: https://loansettlementexpert.in"
echo "Port: 3005 (Reverse proxied by Nginx on port 80/443)"
echo "Local Health Check: http://127.0.0.1:3005"
echo "===================================================================\n"
