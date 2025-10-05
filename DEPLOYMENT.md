# Netlify Deployment Guide

## Setup Instructions

### 1. GitHub Repository Setup
1. Push your portfolio code to GitHub (already done ✅)
2. Make sure all files including `netlify.toml` and `public/_redirects` are committed

### 2. Netlify Site Setup
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your portfolio repository (`MyPortfolio`)
5. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build` (auto-detected from netlify.toml)
   - **Publish directory**: `dist/portfolio` (auto-detected from netlify.toml)
6. Click "Deploy site"

### 3. Build Configuration (Already Set Up)
The following files ensure proper deployment:

#### `netlify.toml` (Root directory)
```toml
[build]
  publish = "dist/portfolio"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### `public/_redirects` (Public directory)
```
/*    /index.html   200
```

### 4. Key Features Enabled
- ✅ **SPA Routing**: All routes redirect to index.html for client-side routing
- ✅ **Asset Caching**: Optimized caching for JS/CSS/images
- ✅ **Production Build**: Optimized Angular build with minification
- ✅ **Node 18**: Latest stable Node.js version

### 5. Custom Domain (Optional)
After successful deployment:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Netlify will provide SSL certificate automatically

### 6. Environment Variables (If needed)
For Kit.com integration:
1. Go to Site settings > Environment variables
2. Add any sensitive configuration (API keys, etc.)

## Common Issues & Solutions

### Issue: "Page not found" on direct URLs
**Solution**: ✅ Already fixed with `_redirects` file

### Issue: Build fails
**Possible solutions**:
- Check Node.js version (set to 18 in netlify.toml)
- Verify package.json dependencies
- Check Angular build configuration

### Issue: Assets not loading
**Solution**: ✅ Already configured with proper caching headers

## Deployment Status
- ✅ Configuration files ready
- ✅ SPA routing configured
- ✅ Production build optimization
- ✅ Asset caching configured
- ⏳ Deploy to Netlify (next step)

## Next Steps
1. Commit and push the configuration files to GitHub
2. Set up Netlify site with the repository
3. Test all routes after deployment
4. Configure custom domain (optional)

## Build Command Verification
The build will run: `npm run build` which executes `ng build` with production optimization.

Output directory: `dist/portfolio` (contains the built Angular app)