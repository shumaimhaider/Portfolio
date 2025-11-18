# Deployment Guide

This guide covers various options for deploying your portfolio website.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment for Vite projects with automatic CI/CD.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

Another great option with drag-and-drop deployment.

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify
4. Or connect your Git repository for automatic deploys

**Configuration:**
Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/Portfolio",
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
  base: '/Portfolio/', // Replace with your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Firebase Hosting

Google's hosting solution with free tier.

**Steps:**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure when prompted:
   - Public directory: `dist`
   - Single-page app: Yes
   - Automatic builds: No

4. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## 📝 Pre-Deployment Checklist

- [ ] Update personal information in components
- [ ] Add real project links/GitHub URLs
- [ ] Test all links and navigation
- [ ] Verify responsive design on different devices
- [ ] Check all images and icons load properly
- [ ] Test contact form/email links
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Add SEO meta tags
- [ ] Test performance with Lighthouse

---

## 🔧 SEO Optimization

Add these meta tags to `index.html`:

```html
<head>
  <meta name="description" content="Shumaim Haider - Full Stack Developer specializing in React, Golang, Node.js, and PostgreSQL. Portfolio showcasing 3+ years of experience in building scalable web applications.">
  <meta name="keywords" content="Full Stack Developer, React, Golang, Node.js, PostgreSQL, Web Development, Software Engineer">
  <meta name="author" content="Shumaim Haider">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Shumaim Haider | Full Stack Developer">
  <meta property="og:description" content="Full Stack Developer with 3+ years of experience in React, Golang, and Node.js">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Shumaim Haider | Full Stack Developer">
  <meta property="twitter:description" content="Full Stack Developer with 3+ years of experience in React, Golang, and Node.js">
</head>
```

---

## 🎯 Custom Domain Setup

### For Vercel/Netlify:
1. Buy domain from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. Add domain in platform dashboard
3. Update DNS records:
   - A Record: Points to platform IP
   - CNAME: www → your-site.vercel.app

---

## 📊 Analytics (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

---

## 🔒 Environment Variables

If you add backend features later:

1. Create `.env` file (already in .gitignore)
2. Add variables:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

3. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🐛 Troubleshooting

**Build fails:**
- Check Node.js version (18+ recommended)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**Images not loading:**
- Place images in `public` folder
- Reference as `/image.png` not `./image.png`

**Routes not working on deployment:**
- Configure redirects for SPA (see Netlify section)

---

## 📱 Progressive Web App (Optional)

To make it installable on mobile:

1. Install plugin:
```bash
npm install vite-plugin-pwa -D
```

2. Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Shumaim Haider Portfolio',
        short_name: 'Portfolio',
        description: 'Full Stack Developer Portfolio',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## ✅ Post-Deployment

After deployment:
1. Share your portfolio link on LinkedIn
2. Add to resume and email signature
3. Share on Twitter/Medium
4. Test on different browsers
5. Ask for feedback
6. Update regularly with new projects

---

Good luck with your portfolio! 🚀

