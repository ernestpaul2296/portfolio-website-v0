# GitHub Pages Deployment Setup

This portfolio website is configured to deploy to GitHub Pages automatically.

## Prerequisites

1. Push your code to GitHub at: `https://github.com/ernestpaul2296/portfolio-website-v0`
2. The repository must be public for GitHub Pages to work

## Configuration

The following changes have been made for GitHub Pages deployment:

### 1. **next.config.mjs**
- Added `output: 'export'` - Exports a static site instead of using Node.js server
- Added `basePath: '/portfolio-website-v0'` - Sets the base URL path for all routes
- Images are unoptimized to work with static export

### 2. **.github/workflows/deploy.yml**
- Automated CI/CD pipeline that builds and deploys on every push to `main` branch
- Uses Node.js 18.x for building
- Deploys to GitHub Pages automatically

### 3. **.nojekyll**
- Tells GitHub Pages to skip Jekyll processing
- Ensures Next.js assets are served correctly

### 4. **lib/is-prod.tsx**
- Production-only environment configuration

## Deployment Steps

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Click Save

2. **Push code to main branch:**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Build the Next.js project
   - Export it as static HTML
   - Deploy to the `gh-pages` branch

4. **Your site will be live at:**
   ```
   https://ernestpaul2296.github.io/portfolio-website-v0
   ```

## Important Notes

- The `basePath: '/portfolio-website-v0'` is critical for correct routing on GitHub Pages
- All links and routes should work automatically with this basePath
- Changes to the `main` branch will trigger automatic deployment
- The first deployment may take 1-2 minutes to appear online

## Local Testing

To test the build locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000/portfolio-website-v0` to preview.
