#!/bin/bash

# GitHub Pages Deployment Script
# This script builds the Astro site and deploys it to GitHub Pages using gh-pages

echo "🚀 Starting GitHub Pages Deployment..."

# Build the site
echo "📦 Building Astro site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Deployment aborted."
    exit 1
fi

echo "✅ Build successful. Deploying to GitHub Pages..."

# Deploy using gh-pages package
npx gh-pages -d dist -m "Deploy to GitHub Pages $(date +'%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed."
    exit 1
fi

echo "✅ Deployment successful! Check your GitHub Pages settings to use the gh-pages branch."
echo "🌐 Your site should be available at: https://kuchengnom.github.io/lonely-planet-sc/"