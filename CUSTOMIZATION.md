# Customization Guide

This guide will help you customize the portfolio to match your preferences and needs.

## 🎨 Changing Colors

### Primary Colors
Edit `/src/index.css` and update the CSS variables:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color (blue) */
  --secondary-color: #1e40af;    /* Secondary brand color (darker blue) */
  --text-primary: #1f2937;       /* Main text color (dark gray) */
  --text-secondary: #6b7280;     /* Secondary text color (medium gray) */
  --bg-primary: #ffffff;         /* Main background (white) */
  --bg-secondary: #f9fafb;       /* Secondary background (light gray) */
  --bg-accent: #eff6ff;          /* Accent background (light blue) */
  --border-color: #e5e7eb;       /* Border color (light gray) */
}
```

**Popular Color Schemes:**

**Green Theme:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--bg-accent: #d1fae5;
```

**Purple Theme:**
```css
--primary-color: #8b5cf6;
--secondary-color: #7c3aed;
--bg-accent: #ede9fe;
```

**Orange Theme:**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--bg-accent: #ffedd5;
```

---

## 📝 Updating Content

### Hero Section
File: `/src/components/Hero.jsx`

```jsx
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>
<h2 className="hero-subtitle">Your Role</h2>
<p className="hero-description">
  Your bio and description here...
</p>
```

Update contact information:
```jsx
const contactInfo = [
  { icon: <FaEnvelope />, value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
  { icon: <FaPhone />, value: 'Your Phone', link: 'tel:yourphone' },
  { icon: <FaMapMarkerAlt />, value: 'Your Location' },
]
```

Update social links:
```jsx
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
<a href="https://medium.com/@yourusername">
```

---

### About Section
File: `/src/components/About.jsx`

Update the statistics:
```jsx
<div className="stat-card">
  <h3>5+</h3>
  <p>Years Experience</p>
</div>
```

---

### Experience Section
File: `/src/components/Experience.jsx`

Add/edit your experiences:
```jsx
const experiences = [
  {
    company: 'Company Name',
    position: 'Job Title',
    period: 'MM/YYYY - MM/YYYY',
    location: 'City, Country',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more experiences...
]
```

---

### Projects Section
File: `/src/components/Projects.jsx`

Add/edit your projects:
```jsx
const projects = [
  {
    title: 'Project Name',
    role: 'Your Role',
    description: 'Project description...',
    achievements: [
      'Key achievement 1',
      'Key achievement 2',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/repo',  // optional
    live: 'https://project-live-url.com',        // optional
  },
]
```

---

### Skills Section
File: `/src/components/Skills.jsx`

Update your skills and proficiency levels:
```jsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'Vue.js', icon: <SiVuedotjs />, level: 85 },
    ],
  },
  // Add more categories...
]
```

Add additional skills:
```jsx
const additionalSkills = [
  'Skill 1',
  'Skill 2',
  'Skill 3',
]
```

---

### Education Section
File: `/src/components/Education.jsx`

Update your education details:
```jsx
<h3>Bachelor of Science in Computer Science</h3>
<h4>
  <FaUniversity />
  Your University Name
</h4>
<p>
  <FaCalendar />
  Start Date - End Date
</p>
<p>City, Country</p>
```

Update languages:
```jsx
<div className="language-card">
  <h4>Language Name</h4>
  <p>Proficiency Level</p>
  <div className="language-level">
    <div className="level-bar" style={{ width: '95%' }}></div>
  </div>
</div>
```

---

## 🖼️ Adding Images

### Profile Picture
1. Add your image to `/public/images/`
2. Update Hero section:

```jsx
<div className="hero-image">
  <img src="/images/profile.jpg" alt="Your Name" />
</div>
```

### Project Screenshots
1. Add images to `/public/images/projects/`
2. Update Projects section:

```jsx
<img src="/images/projects/project1.png" alt="Project Name" />
```

---

## 🎭 Changing Fonts

### Using Google Fonts

1. Go to [fonts.google.com](https://fonts.google.com)
2. Select fonts you like
3. Update `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

4. Update `index.css`:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

**Popular Font Combinations:**
- **Modern:** Inter + Roboto Mono
- **Elegant:** Playfair Display + Source Sans Pro
- **Minimal:** Montserrat + Open Sans
- **Professional:** Lato + Merriweather

---

## ✨ Customizing Animations

### Animation Speed
File: `/src/index.css`

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Change this value */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;  /* Change duration */
}
```

### Adding New Animations

```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}
```

Use in components:
```jsx
<div className="animate-slideInRight">
  Content here
</div>
```

---

## 📱 Adding New Sections

### Create New Component

1. Create file: `/src/components/NewSection.jsx`

```jsx
import './NewSection.css'

const NewSection = () => {
  return (
    <section id="newsection" className="newsection">
      <h2 className="section-title">Section Title</h2>
      <div className="section-content scroll-reveal">
        {/* Your content */}
      </div>
    </section>
  )
}

export default NewSection
```

2. Create styles: `/src/components/NewSection.css`

```css
.newsection {
  background-color: var(--bg-primary);
}

.section-content {
  max-width: 1000px;
  margin: 0 auto;
}
```

3. Add to `App.jsx`:

```jsx
import NewSection from './components/NewSection'

// Add in return statement
<NewSection />
```

4. Add to Navbar:

```jsx
const navItems = [
  // existing items...
  { name: 'New Section', href: '#newsection' },
]
```

---

## 🎯 Adding Contact Form

### Using Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update Contact component:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

## 🌐 Adding More Icons

Using React Icons (already installed):

```jsx
// Import from different icon libraries
import { FaIcon } from 'react-icons/fa'      // Font Awesome
import { SiIcon } from 'react-icons/si'      // Simple Icons
import { AiIcon } from 'react-icons/ai'      // Ant Design
import { BsIcon } from 'react-icons/bs'      // Bootstrap Icons
import { IoIcon } from 'react-icons/io5'     // Ionicons

// Use in component
<FaIcon />
```

Browse all icons: [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)

---

## 🔧 Advanced Customizations

### Adding Dark Mode

1. Update `index.css`:

```css
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --text-primary: #f9fafb;
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
}
```

2. Create theme toggle in Navbar:

```jsx
const [theme, setTheme] = useState('light')

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  document.documentElement.setAttribute('data-theme', newTheme)
}
```

---

## 📊 Adding Blog Section

If you want to display Medium/Dev.to articles:

1. Use RSS feed or API
2. Create BlogSection component
3. Fetch and display articles

Example using Medium RSS:
```jsx
useEffect(() => {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername')
    .then(res => res.json())
    .then(data => setArticles(data.items))
}, [])
```

---

## 🎓 Resources

- [React Docs](https://react.dev)
- [CSS Tricks](https://css-tricks.com)
- [React Icons](https://react-icons.github.io)
- [Color Palettes](https://coolors.co)
- [Font Pairings](https://fontpair.co)
- [Animation Inspiration](https://animista.net)

---

## 💡 Tips

1. **Keep it Simple:** Don't overcomplicate the design
2. **Test Responsiveness:** Check on different devices
3. **Performance:** Optimize images and minimize animations
4. **Accessibility:** Use semantic HTML and proper contrast
5. **Update Regularly:** Keep your portfolio fresh with new projects
6. **Get Feedback:** Ask friends/colleagues for their opinion

---

Happy customizing! 🎨

