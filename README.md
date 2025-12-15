<div align="center">

# 🛡️ Student Prefect Web Portal

**A Modern, Responsive Web Application for Student Prefect Organization**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-success?style=for-the-badge)](https://pansamcth.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?style=for-the-badge&logo=github)](https://pansamcth.github.io/)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Responsive](https://img.shields.io/badge/Responsive-100%25-blue?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

</div>

---

## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/pansamcth/pansamcth.github.io.git

# Navigate to project
cd pansamcth.github.io

# Open in browser (or use live server)
open index.html

# Or serve with Python
python -m http.server 8080
```

**🌐 Live Demo:** [https://pansamcth.github.io/](https://pansamcth.github.io/)

---

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [File Structure](#-file-structure)
- [CSS Design System](#-css-design-system)
- [JavaScript Modules](#-javascript-modules)
- [Integrations](#-integrations)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Development](#-development)
- [Deployment](#-deployment)
- [Credits](#-credits)

</details>

---

## ✨ Features

```
┌─────────────────────────────────────────────────────────────┐
│                    FEATURE OVERVIEW                         │
├─────────────────────────────────────────────────────────────┤
│  ✅ Modern Glassmorphism UI                                 │
│  ✅ Fully Responsive (Mobile-First)                         │
│  ✅ Smooth CSS Animations                                   │
│  ✅ Social Media Integration (FB, IG)                       │
│  ✅ Interactive Gallery Slider                              │
│  ✅ SEO Optimized                                           │
│  ✅ Accessible (ARIA Labels)                                │
│  ✅ Fast Loading (No Framework)                             │
│  ✅ Thai Typography (Kanit Font)                            │
│  ✅ Dark Theme Committee Section                            │
└─────────────────────────────────────────────────────────────┘
```

### Page Breakdown

| Page        | Route         | Description                    |
| ----------- | ------------- | ------------------------------ |
| 🏠 **Home** | `/index.html` | Landing page with all sections |
| 👥 **Team** | `/team.html`  | Team members grid              |

### Section Components

```
index.html
├── 🦸 Hero          → Animated landing with CTA
├── 📋 About         → Mission & responsibilities
├── 👤 Chairman      → Leader profile card
├── 🏛️ Committee     → Org structure timeline
├── 📱 Social Feed   → FB & IG embeds
├── 📄 Documents     → Downloadable files
├── 🖼️ Gallery       → Image slider
├── 📞 Contact       → Contact cards
└── 🦶 Footer       → Links & credits
```

---

## 🛠️ Tech Stack

### Core

| Technology                                                                                                       | Version | Purpose              |
| ---------------------------------------------------------------------------------------------------------------- | ------- | -------------------- |
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)                | 5       | Semantic markup      |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)                   | 3       | Styling + Animations |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+    | Interactivity        |

### Dependencies

```json
{
  "dependencies": {
    "lucide-icons": "latest",
    "google-fonts": "Kanit@300;400;500;600;700"
  },
  "devDependencies": {}
}
```

### CDN Resources

```html
<!-- Icon Library -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Typography -->
<link
  href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700"
  rel="stylesheet"
/>

<!-- Social SDKs -->
<script async src="https://connect.facebook.net/th_TH/sdk.js"></script>
<script async src="//www.instagram.com/embed.js"></script>
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      BROWSER                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   HTML5     │  │    CSS3     │  │     JS      │         │
│  │  (Content)  │  │  (Styles)   │  │  (Logic)    │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                │                │
│         └────────────────┼────────────────┘                │
│                          │                                  │
│                    ┌─────▼─────┐                           │
│                    │    DOM    │                           │
│                    └─────┬─────┘                           │
│                          │                                  │
│         ┌────────────────┼────────────────┐                │
│         │                │                │                │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐        │
│  │   Lucide    │  │  FB Plugin  │  │  IG Embed   │        │
│  │   Icons     │  │             │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 File Structure

```bash
.
├── index.html              # Main entry point (700+ lines)
├── team.html               # Team page (180+ lines)
├── README.md               # Documentation
│
├── css/
│   └── style.css           # Main stylesheet (2800+ lines)
│                           #   ├── Variables & Reset
│                           #   ├── Components
│                           #   ├── Animations
│                           #   └── Media Queries
│
├── js/
│   └── main.js             # JavaScript logic
│                           #   ├── Lucide init
│                           #   ├── Mobile menu
│                           #   ├── Scroll reveal
│                           #   ├── Gallery slider
│                           #   └── Back to top
│
└── assets/
    └── icons/
        ├── favicon.png     # 32x32 browser icon
        ├── logo.png        # School logo
        └── sarawat-logo.png # Brand logo
```

---

## 🎨 CSS Design System

### Color Palette

```css
:root {
  /* Primary */
  --color-primary: #1e3a5f; /* Navy Blue      */
  --color-primary-light: #2d5a8a; /* Light Navy     */
  --color-primary-dark: #0f1f33; /* Dark Navy      */

  /* Accent */
  --color-secondary: #6366f1; /* Indigo       */
  --color-secondary-light: #818cf8; /* Light Indigo */
  --color-accent: #8b5cf6; /* Purple       */

  /* Neutrals */
  --color-white: #ffffff;
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-900: #0f172a;
}
```

### Typography Scale

```css
:root {
  --font-heading: "Kanit", sans-serif;
  --font-body: "Kanit", sans-serif;

  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */
  --text-6xl: 3.75rem; /* 60px */
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem; /* 4px  */
  --space-2: 0.5rem; /* 8px  */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
}
```

### Glassmorphism Effect

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
}
```

### Animation Keyframes

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

## 📜 JavaScript Modules

### main.js Overview

```javascript
// 1. Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

// 2. Mobile Menu Toggle
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", toggleMenu);

// 3. Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", revealOnScroll);

// 4. Gallery Slider
function initGallerySlider() {
  /* ... */
}

// 5. Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", toggleBackToTop);
```

---

## 🔌 Integrations

### Facebook Page Plugin

```html
<div id="fb-root"></div>
<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0"
></script>

<div
  class="fb-page"
  data-href="https://www.facebook.com/YOUR_PAGE"
  data-tabs="timeline"
  data-width="500"
  data-height="400"
  data-small-header="true"
></div>
```

### Instagram Embed

```html
<blockquote
  class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/p/POST_ID/"
  data-instgrm-version="14"
></blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

---

## ⚡ Performance

```
┌─────────────────────────────────────────────────────────────┐
│                  LIGHTHOUSE METRICS                         │
├─────────────────────────────────────────────────────────────┤
│  Performance    ████████████████████░░░░  85%              │
│  Accessibility  ██████████████████████░░  92%              │
│  Best Practices █████████████████████░░░  88%              │
│  SEO            ████████████████████████  100%             │
└─────────────────────────────────────────────────────────────┘
```

### Optimizations

- ✅ No JavaScript frameworks (Vanilla JS)
- ✅ CSS-only animations
- ✅ Lazy loading for images
- ✅ Minifiable assets
- ✅ Google Fonts with `display=swap`

---

## 🌐 Browser Support

| Browser | Version | Status           |
| ------- | ------- | ---------------- |
| Chrome  | 80+     | ✅ Full          |
| Firefox | 75+     | ✅ Full          |
| Safari  | 13+     | ✅ Full          |
| Edge    | 80+     | ✅ Full          |
| IE      | -       | ❌ Not Supported |

> ⚠️ Requires `backdrop-filter` CSS support for glassmorphism effects

---

## 💻 Development

### Local Development

```bash
# Clone
git clone https://github.com/pansamcth/pansamcth.github.io.git

# Navigate
cd pansamcth.github.io

# Serve (choose one)
npx serve .                    # Node.js
python -m http.server 8080     # Python
php -S localhost:8080          # PHP

# Open
open http://localhost:8080
```

### VS Code Extensions

```json
{
  "recommendations": [
    "ritwickdey.LiveServer",
    "esbenp.prettier-vscode",
    "formulahendry.auto-rename-tag",
    "pranaygp.vscode-css-peek"
  ]
}
```

---

## 🚀 Deployment

### GitHub Pages

```bash
# Push to main branch
git add .
git commit -m "Deploy"
git push origin main

# Enable GitHub Pages in repo settings
# Settings → Pages → Source: main branch
```

**Live URL:** `https://pansamcth.github.io/`

---

## 👥 Organization

```
    ┌─────────────────────────────┐
    │  🛡️ ผู้บังคับบัญชาสารวัตร   │
    │  นายจีรฏะ วิเชียรรัตน์      │
    └─────────────┬───────────────┘
                  │
                  ▼
    ┌─────────────────────────────┐
    │  👑 ประธานสารวัตรนักเรียน   │
    │  รอรับข้อมูล                │
    └─────────────────────────────┘
```

---

## 📝 License

```
MIT License

Copyright (c) 2024 Sarawat Student Prefect

Permission is hereby granted, free of charge...
```

---

<div align="center">

### 🔗 Links

[![GitHub](https://img.shields.io/badge/GitHub-pansamcth-181717?style=for-the-badge&logo=github)](https://github.com/pansamcth)
[![Facebook](https://img.shields.io/badge/Facebook-pansamcth-1877F2?style=for-the-badge&logo=facebook)](https://web.facebook.com/pansamcth)

---

**Built with ❤️ by [Rujira Wattanakitpaisal](https://web.facebook.com/pansamcth)**

_โรงเรียนเดชะปัตตนยานุกูล © 2567_

</div>
