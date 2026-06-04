---

# GitHub Pages CI/CD Deployment

This project uses GitHub Actions to automatically build and deploy to GitHub Pages.

## 🚀 How It Works

### Triggering Deployment

The workflow automatically triggers on:
- **Push to `main` branch** - Automatic deployment
- **Manual trigger** - Can be run manually from the GitHub Actions tab

### Deployment Process

1. **Build Job** (`ubuntu-latest`)
   - Checks out the repository
   - Sets up Node.js v22 (matching project requirements)
   - Caches npm dependencies for faster builds
   - Installs dependencies with `npm ci`
   - Builds the Astro site with `npm run build`
   - Uploads the `dist/` folder as a GitHub Pages artifact

2. **Deploy Job** (`ubuntu-latest`)
   - Waits for build job to complete
   - Deploys the uploaded artifact to GitHub Pages
   - Sets environment as `github-pages`

## 📋 Requirements

### GitHub Repository Settings

To enable GitHub Pages deployment:

1. Go to **Settings → Pages** in your repository
2. Set **Source** to **GitHub Actions**
3. Save changes

### Repository Permissions

The workflow automatically sets required permissions:
- `contents: read` - To access repository files
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For GitHub Pages deployment authentication

## 🔧 Configuration

### Astro Configuration

The project is configured for GitHub Pages deployment in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://kuchengnom.github.io',
  base: '/lonely-planet-sc',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- **site**: Your GitHub Pages domain
- **base**: Repository name (important for correct path resolution)

### Build Output

The site builds to the `dist/` directory, which is:
- Automatically ignored by git (in `.gitignore`)
- Uploaded as an artifact during GitHub Actions
- Deployed to GitHub Pages by the workflow

## 🛠️ Local Testing

Before deploying, you can test the build locally:

```bash
# Install dependencies (if needed)
npm install

# Build the site
npm run build

# Preview the built site
npm run preview
```

The preview will run at `http://localhost:4321/lonely-planet-sc`

## 🌐 Accessing Your Site

Once deployed, your site will be available at:

```
https://kuchengnom.github.io/lonely-planet-sc/
```

## 🔍 Troubleshooting

### Build Fails

1. **Check Actions**: Go to **Actions** tab to see detailed error logs
2. **Node Version**: Ensure Node.js v22+ is available (workflow uses v22)
3. **Dependencies**: Run `npm install` locally first to catch dependency issues

### Deployment Fails

1. **Pages Settings**: Verify Pages is configured to use **GitHub Actions**
2. **Permissions**: Ensure workflow has `pages: write` permission
3. **Base Path**: Check `astro.config.mjs` has correct `base` path

### Site Loads But 404s

1. **Base Path**: Verify `base: '/lonely-planet-sc'` matches repository name
2. **Asset Paths**: Ensure images and assets use correct relative paths
3. **Cache**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Styling Issues

1. **Tailwind**: Ensure assets are processed correctly by Vite
2. **Fonts**: Check custom fonts are loading from correct paths
3. **Production vs Dev**: Some issues only appear in production builds

## 📊 Performance Optimizations

The CI/CD workflow includes:
- **npm caching**: Speeds up dependency installation
- **Artifact upload**: Efficient deployment process
- **Concurrent deployment management**: Prevents conflicting deployments

## 🔄 Manual Deployment

To deploy manually without pushing to main:

1. Go to **Actions** tab in GitHub
2. Select **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"**
4. Select branch and click **"Run workflow"**

## 📝 Workflow Status

- ✅ **Build**: Compiles Astro site with Node.js v22
- ✅ **Deploy**: Deploys to GitHub Pages with proper permissions
- ✅ **Caching**: Optimized build times with npm cache
- ✅ **Concurrency**: Prevents deployment conflicts

---

*This CI/CD setup ensures your Lonely Planet: Star Citizen guide is automatically deployed with every push to main, keeping your site up-to-date with minimal manual intervention.*