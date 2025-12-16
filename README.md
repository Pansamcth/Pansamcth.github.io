# 🛡️ Sarawat Student Prefect Website

**A Modern, Responsive Web Application for Student Prefect Organization**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-success?style=for-the-badge)](https://pansamcth.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?style=for-the-badge&logo=github)](https://pansamcth.github.io/)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#tech-stack)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [CSS Design System](#css-design-system)
- [JavaScript Functions](#javascript-functions)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

เว็บไซต์สำหรับแสดงข้อมูลสารวัตรนักเรียน **โรงเรียนเดชะปัตตนยานุกูล** ออกแบบด้วย Modern UI/UX พร้อม _Glassmorphism effects_ และ **smooth animations**

> [!NOTE]
> เว็บไซต์นี้พัฒนาด้วย Vanilla HTML/CSS/JS โดยไม่ใช้ Framework ใดๆ

### Key Highlights

| Feature              | Description                          |
| -------------------- | ------------------------------------ |
| 🎨 **Modern Design** | Glassmorphism, gradients, animations |
| 📱 **Responsive**    | Mobile-first approach                |
| ⚡ **Fast Loading**  | No frameworks overhead               |
| 🔍 **SEO Optimized** | Semantic HTML + meta tags            |

---

## ✨ Features

### Pages

- [x] **Homepage** ([index.html](./index.html)) - Landing page with all sections
- [x] **Team Page** ([team.html](./team.html)) - Team members grid

### Components

- [x] Hero section with animated badges
- [x] About section with role cards
- [x] Committee structure timeline
- [x] Social media feed (Facebook & Instagram)
- [x] Document downloads
- [x] Image gallery slider
- [x] Contact cards
- [x] Back to top button

## 🗺️ Roadmap

- [ ] Add dark mode toggle
- [ ] Implement image lightbox
- [ ] Add more team members
- [ ] PWA support

---

## 🛠️ Tech Stack

### Core Technologies

| Technology     | Purpose              |
| -------------- | -------------------- |
| **HTML5**      | Semantic markup      |
| **CSS3**       | Styling + Animations |
| **JavaScript** | Interactivity (ES6+) |

### External Dependencies

```html
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700"
  rel="stylesheet"
/>
```

> [!TIP]
> ใช้ Lucide Icons แทน Font Awesome เพราะขนาดเล็กกว่าและ load เร็วกว่า

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pansamcth/pansamcth.github.io.git
   cd pansamcth.github.io
   ```

2. **Open in browser**

   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Python server
   python -m http.server 8080

   # Option 3: VS Code Live Server
   # Right-click > "Open with Live Server"
   ```

3. **Visit**
   ```
   http://localhost:8080
   ```

> [!IMPORTANT]
> Social media embeds (Facebook, Instagram) ต้องการ internet connection

---

## 📁 Project Structure

```
.
├── index.html              # Main landing page
├── team.html               # Team members page
├── README.md               # Documentation
│
├── css/
│   └── style.css           # Main stylesheet (~2800 lines)
│
├── js/
│   └── main.js             # JavaScript functions
│
└── assets/
    └── icons/
        ├── favicon.png     # Browser tab icon
        ├── logo.png        # School logo
        └── sarawat-logo.png
```

---

## 🎨 CSS Design System

### Color Variables

```css
:root {
  /* Primary Colors */
  --color-primary: #1e3a5f; /* Navy Blue */
  --color-secondary: #6366f1; /* Indigo */
  --color-accent: #8b5cf6; /* Purple */

  /* Typography */
  --font-heading: "Kanit", sans-serif;
  --font-body: "Kanit", sans-serif;
}
```

### Glassmorphism Effect

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

> [!WARNING]
> `backdrop-filter` ไม่รองรับใน Internet Explorer และ browser เก่า

---

## 📜 JavaScript Functions

| Function               | Description              |
| ---------------------- | ------------------------ |
| `lucide.createIcons()` | Initialize Lucide icons  |
| `toggleMenu()`         | Toggle mobile navigation |
| `revealOnScroll()`     | Scroll reveal animation  |
| `initGallerySlider()`  | Image gallery slider     |

---

## 📸 Screenshots

_Coming soon_

---

## 🗺️ Roadmap

- [ ] Add dark mode toggle
- [ ] Implement image lightbox
- [ ] Add more team members
- [ ] PWA support

---

## 👥 Organization Structure

```
🛡️ ผู้บังคับบัญชาสารวัตร
   └── นายจีรฏะ วิเชียรรัตน์
        │
        ▼
👑 ประธานสารวัตรนักเรียน
   └── รอรับข้อมูล
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

© 2567 สารวัตรนักเรียน โรงเรียนเดชะปัตตนยานุกูล

---

## 📞 Contact

- **GitHub:** [@pansamcth](https://github.com/pansamcth)
- **Facebook:** [pansamcth](https://web.facebook.com/pansamcth)

---

<div align="center">

**Made with ❤️ by [Rujira Wattanakitpaisal](https://web.facebook.com/pansamcth)**

</div>

---

## 📚 Footnotes

[^1]: Glassmorphism ต้องการ `backdrop-filter` CSS property ซึ่งรองรับใน browser ใหม่เท่านั้น
[^2]: Lucide Icons เป็น open-source icon library ที่เป็น fork จาก Feather Icons
