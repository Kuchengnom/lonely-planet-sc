---

# Manual Deployment Method

Since the GitHub Actions deployment is having issues, let's use a reliable manual deployment method.

## 🚀 Quick Manual Deployment

### Option 1: Using the Deploy Script (Recommended)

```bash
# Make sure you're on the main branch
git checkout main

# Run the deployment script
./deploy.sh
```

This will:
1. Build the Astro site
2. Deploy to the `gh-pages` branch using the `gh-pages` package
3. Push the branch to GitHub

### Option 2: Manual Steps

```bash
# Build the site
npm run build

# Deploy using gh-pages
npx gh-pages -d dist -m "Deploy to GitHub Pages"
```

## 🔧 GitHub Pages Configuration

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **Deploy from a branch**  
3. Select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

## 💡 Why This Works

The `gh-pages` package:
- Creates/deletes a `gh-pages` branch
- Copies the contents of `dist/` to that branch
- Pushes the branch to GitHub
- GitHub Pages automatically serves the branch

This method is:
- ✅ Proven and reliable
- ✅ No GitHub Actions configuration needed
- ✅ Full control over when to deploy
- ✅ Easy to debug if something goes wrong

## 📊 What Gets Deployed

When you run the deploy script, the `dist/` folder (which is building successfully) gets deployed to a `gh-pages` branch on GitHub. GitHub Pages then serves that branch as your website.

**Deployed structure:**
```
dist/
├── index.html
├── stanton/
├── images/
├── _astro/
└── _nojekyll
```

## 🎯 Step-by-Step Guide

1. **Build locally** (we confirmed this works):
   ```bash
   npm run build
   ```

2. **Deploy to GitHub:**
   ```bash
   ./deploy.sh
   ```

3. **Configure GitHub Pages:**
   - Settings → Pages → Deploy from branch
   - Branch: `gh-pages` → `/ (root)`

4. **Check your site:**
   - Wait 1-2 minutes
   - Visit: `https://kuchengnom.github.io/lonely-planet-sc/`

## 🔍 Troubleshooting

### "gh-pages not found"
```bash
npm install --save-dev gh-pages
./deploy.sh
```

### "Permission denied"
```bash
chmod +x deploy.sh
```

### Site shows 404
- Make sure GitHub Pages is set to `gh-pages` branch
- Wait 1-2 minutes for DNS to update
- Check the gh-pages branch exists in your repository

### Build fails locally
- Run `npm run build` first to see the error
- Fix the error
- Run deployment again

---

*This manual deployment method is simpler and more reliable than GitHub Actions for your setup.*