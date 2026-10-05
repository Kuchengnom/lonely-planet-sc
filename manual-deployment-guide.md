---

# Deployment Guide — Lonely Planet: Star Citizen

## 🚀 Deployment Methods

### Primary: GitHub Actions (Recommended)

Every push to `main` triggers an automated build and deploy via GitHub Actions.
Manual triggers are also available.

**Configuration:** `.github/workflows/deploy.yml`

```
1. Push your changes to main
2. Actions tab → watch the build
3. If green → site is live in ~1–2 minutes
```

To trigger manually: **Actions → Deploy to GitHub Pages → Run workflow**

### Manual Fallback: `deploy.sh`

Use this when you cannot deploy via Actions (CI down, SSH keys unavailable, or
you want a targeted rebuild without touching `main`).

```bash
./deploy.sh
```

This builds locally and uses the `gh-pages` npm package to push the `dist/`
directory to the `gh-pages` branch on GitHub.

---

## 🔧 GitHub Pages Configuration

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **Deploy from a branch**
3. Select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

This tells GitHub to serve the `gh-pages` branch, which both Actions and the
manual script deploy to.

---

## 📊 What Gets Deployed

Both methods build `dist/` from the Astro project and deploy it to the
`gh-pages` branch. The deployed structure:

```
dist/
├── index.html
├── stanton/
├── pyro/
├── images/
├── _astro/
└── _nojekyll
```

---

## 🔍 Troubleshooting

### Actions deploy fails
- Check the **Actions → Runs** tab for red errors
- Most common: build error (run `npm run build` locally to see the actual error)
- Fix the error, push to main, the action re-runs automatically

### Manual deploy fails ("gh-pages not found")
```bash
npm install --save-dev gh-pages
./deploy.sh
```

### Manual deploy fails ("Permission denied")
```bash
chmod +x deploy.sh
```

### Site shows 404 or is stale
- Wait 1–2 minutes for GitHub to propagate
- Hard-refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
- Verify the `gh-pages` branch exists: `git ls-remote origin gh-pages`
- Check Settings → Pages shows `gh-pages` / `/ (root)`

---

*Primary: GitHub Actions. Fallback: `deploy.sh`. Both deploy to the `gh-pages` branch.*
