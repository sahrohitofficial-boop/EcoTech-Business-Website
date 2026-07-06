# EcoTech Solutions — Modern Business Website

![EcoTech Solutions](images/hero/hero-bg.png)

> A complete, production-ready, fully responsive multi-page business website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no libraries, no dependencies.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Live Features](#live-features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment Guide](#deployment-guide)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## 🌐 Project Overview

**EcoTech Solutions** is a fictional technology & digital services company. This website showcases their full range of services — web development, mobile apps, UI/UX design, cloud solutions, AI automation, and digital marketing — in a polished, professional, and fully responsive package.

The website is designed to look and feel like a real commercial business website, following modern web design standards with:

- A premium dark-mode hero section with animated particles
- Glassmorphism-inspired UI components
- Scroll-triggered reveal animations via IntersectionObserver
- Animated statistics counters
- Full mobile-first responsive layout
- WCAG 2.1 accessibility compliance
- Complete SEO meta tags and Open Graph support

---

## ✨ Live Features

### All Pages
| Feature | Status |
|---|---|
| Sticky navbar with scroll transparency | ✅ |
| Hero-nav transparent → frosted glass on scroll | ✅ |
| Mobile hamburger menu with smooth open/close | ✅ |
| Active nav link highlighting per page | ✅ |
| Scroll reveal animations (fade + slide) | ✅ |
| Back-to-Top button (appears at 400px scroll) | ✅ |
| Page loading animation | ✅ |
| Fully responsive (mobile, tablet, desktop) | ✅ |
| SEO meta tags + Open Graph on every page | ✅ |
| ARIA labels & keyboard navigation | ✅ |

### Home Page (`index.html`)
| Feature | Status |
|---|---|
| Animated hero with particles & floating cards | ✅ |
| 6 business feature cards with hover effects | ✅ |
| 3 service preview cards | ✅ |
| 4 animated counter statistics | ✅ |
| Why Choose Us section with animated circles | ✅ |
| 6 client testimonials | ✅ |
| FAQ accordion (JS, keyboard accessible) | ✅ |
| Newsletter subscription with email validation | ✅ |
| Footer with social, quick links, contact info | ✅ |

### About Page (`about.html`)
| Feature | Status |
|---|---|
| Company story with image | ✅ |
| 4 animated company statistics | ✅ |
| Mission & Vision cards | ✅ |
| 6 core values | ✅ |
| 6-milestone company timeline (alternating) | ✅ |
| 4 team member cards with social hover | ✅ |
| Call to Action section | ✅ |

### Services Page (`services.html`)
| Feature | Status |
|---|---|
| 6 full service cards with images | ✅ |
| Feature checklists per service | ✅ |
| Pricing for each service | ✅ |
| Individual CTA buttons per service | ✅ |
| 4-step process section | ✅ |
| CTA section | ✅ |

### Contact Page (`contact.html`)
| Feature | Status |
|---|---|
| Contact info (address, phone, email) | ✅ |
| Working hours table | ✅ |
| Google Map placeholder | ✅ |
| Full contact form (6 fields) | ✅ |
| JS validation — required, email, phone, min-length | ✅ |
| Live inline error messages | ✅ |
| Success state with auto-reset | ✅ |
| Trust section (response time, free call) | ✅ |

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure, accessibility |
| **CSS3** | Custom properties, Flexbox, Grid, animations |
| **Vanilla JavaScript (ES6+)** | All interactivity, validation, animations |
| **Google Fonts (Poppins)** | Typography |
| **IntersectionObserver API** | Scroll reveal animations |
| **CSS Custom Properties** | Design tokens / theme system |

**No frameworks. No Bootstrap. No jQuery. No Tailwind. No React.**

---

## 📁 Folder Structure

```
EcoTech-Business-Website/
│
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
│
├── css/
│   ├── style.css           # Main stylesheet (design tokens, components, layouts)
│   └── responsive.css      # Mobile-first responsive breakpoints
│
├── js/
│   ├── script.js           # Core JS (navbar, menu, FAQ, counters, animations)
│   └── validation.js       # Contact form validation
│
├── images/
│   ├── hero/
│   │   └── hero-bg.png
│   ├── services/
│   │   ├── web-dev.png
│   │   ├── mobile.png
│   │   ├── uiux.png
│   │   ├── cloud.png
│   │   └── ai.png
│   ├── team/               # (placeholder avatars via CSS)
│   ├── testimonials/       # (placeholder avatars via CSS)
│   └── icons/
│
├── assets/                 # Additional assets
│
└── README.md
```

---

## 🚀 How to Run Locally

This project requires **no build tools, no npm install, no dependencies**.

### Option 1: Direct Browser Open
1. Download or clone the repository
2. Navigate to the `EcoTech-Business-Website/` folder
3. Double-click `index.html` to open it in your browser

### Option 2: VS Code Live Server (Recommended)
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. The site opens at `http://127.0.0.1:5500/`

### Option 3: Python Local Server
```bash
# Python 3
cd EcoTech-Business-Website
python -m http.server 8080
# Open: http://localhost:8080
```

### Option 4: Node.js `http-server`
```bash
npm install -g http-server
cd EcoTech-Business-Website
http-server -p 8080
# Open: http://localhost:8080
```

---

## 🌍 Deployment Guide

All asset paths are **relative**, so the site works correctly after deployment with no changes required.

### GitHub Pages

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch, `/ (root)` folder
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/EcoTech-Business-Website/`

### Netlify (Drag & Drop — Easiest)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop the entire `EcoTech-Business-Website/` folder onto the Netlify dashboard
3. Done! Your site is live instantly with a Netlify subdomain

### Netlify (CLI)

```bash
npm install -g netlify-cli
cd EcoTech-Business-Website
netlify deploy --dir . --prod
```

### Vercel

```bash
npm install -g vercel
cd EcoTech-Business-Website
vercel --prod
```

---

## 📸 Screenshots

> The website features the following pages:

| Page | Description |
|---|---|
| **Home** | Hero, Features (6), Services Preview, Stats, Testimonials (6), FAQ, Newsletter |
| **About** | Company Story, Mission/Vision, Core Values (6), Timeline, Team (4), CTA |
| **Services** | 6 full service cards with pricing, features, and CTAs |
| **Contact** | Contact info, working hours, map, validated contact form |

---

## 🔮 Future Improvements

- [ ] **Blog Section** — Articles and insights page with category filtering
- [ ] **Portfolio/Case Studies** — Showcase real client projects with before/after
- [ ] **Dark Mode Toggle** — System-preference-aware dark/light theme switcher
- [ ] **Multi-language Support** — i18n for global audiences
- [ ] **Real Google Maps Integration** — Embed live interactive map on contact page
- [ ] **Backend Form Handling** — Connect contact form to Formspree, EmailJS, or a custom API
- [ ] **Live Chat Widget** — Integrate Intercom or Crisp for real-time support
- [ ] **Cookie Consent Banner** — GDPR-compliant cookie notice
- [ ] **Pricing Page** — Dedicated pricing comparison table
- [ ] **Testimonials Carousel** — Auto-rotating testimonials on mobile
- [ ] **Service Worker / PWA** — Offline support and installability
- [ ] **A/B Testing** — Hero headline and CTA variants for conversion optimization

---

## 👤 Author

**EcoTech Solutions Dev Team**

- 🌐 Website: [ecotechsolutions.com](https://ecotechsolutions.com)
- 📧 Email: [hello@ecotechsolutions.com](mailto:hello@ecotechsolutions.com)
- 𝕏 Twitter: [@ecotechsol](https://twitter.com/ecotechsol)
- 💼 LinkedIn: [EcoTech Solutions](https://linkedin.com)
- 🐙 GitHub: [ecotechsolutions](https://github.com)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 EcoTech Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

<div align="center">
  <strong>Built with ❤️ by EcoTech Solutions</strong><br>
  <em>Transforming businesses through technology — one line of code at a time.</em>
</div>
