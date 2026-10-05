#!/bin/bash

# Manual Fallback — GitHub Pages Deployment via gh-pages npm package
#
# Primary deployment method: GitHub Actions (on every push to main or manual trigger).
# Use this script ONLY if you cannot deploy via Actions (e.g. SSH keys unavailable,
# CI is down, or you want a targeted rebuild without touching main).

set -euo pipefail

echo "🚀 Starting Manual GitHub Pages Deployment (fallback)..."

# Build the site
echo "📦 Building Astro site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Deployment aborted."
    exit 1
fi

echo "✅ Build successful. Deploying to GitHub Pages..."

# Deploy using gh-pages package (creates/updates the gh-pages branch)
npx gh-pages -d dist -m "Deploy to GitHub Pages $(date +'%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed."
    exit 1
fi

echo "✅ Deployment successful!"
echo "🌐 Your site should be available at: https://kuchengnom.github.io/lonely-planet-sc/"