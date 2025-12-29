# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### 1. Netlify (Recommended - Easiest)

**Via Netlify Drop:**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist` folder
4. Done! Your site is live

**Via GitHub:**
1. Push your code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### 2. Vercel (Great for React projects)

**Via Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Via GitHub:**
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Custom Domain Setup

**Netlify:**
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records (Netlify provides instructions)

**Vercel:**
1. Go to Project settings > Domains
2. Add domain
3. Update DNS records

## Environment Setup

If you need environment variables:

1. Create `.env` file:
   ```
   VITE_API_URL=your_api_url
   VITE_OTHER_VAR=value
   ```

2. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. Add to `.gitignore`:
   ```
   .env
   .env.local
   ```

## Performance Optimization

The build is already optimized, but you can:

1. **Enable Compression** on your hosting platform
2. **Use CDN** for static assets
3. **Enable Caching** headers
4. **Monitor with Lighthouse** for performance scores

## Updating Content

To update your portfolio:

1. Edit `src/Portfolio.jsx`
2. Modify the data arrays (projects, experience, etc.)
3. Test locally: `npm run dev`
4. Build: `npm run build`
5. Deploy using your chosen method

## Troubleshooting Deployment

**Build fails:**
- Check Node.js version (use v14+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**404 on routes:**
- Add `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```

**Styles not loading:**
- Check `base` setting in `vite.config.js`
- Ensure Tailwind is properly configured

## SEO Optimization

Already included:
- Meta tags in `index.html`
- Semantic HTML
- Proper heading hierarchy

Consider adding:
- `sitemap.xml`
- `robots.txt`
- Open Graph tags for social sharing

## Analytics

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## Support

For issues:
1. Check the README.md
2. Review Vite documentation: https://vitejs.dev
3. Check React documentation: https://react.dev

Good luck with your deployment! 🚀
