# Joy Wairimu - Portfolio Website

A modern, professional portfolio website showcasing the skills, experience, and projects of Ndabari Joy Wairimu, a Full-Stack Developer and IT Specialist.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Sections**: Multiple sections including About, Skills, Experience, Projects, Education, and Contact
- **Smooth Navigation**: Seamless scrolling between sections with active state indicators
- **Mobile-Friendly**: Optimized hamburger menu for mobile devices
- **Professional Aesthetics**: Custom gradient effects, glassmorphism, and modern typography

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom CSS** - Additional styling and animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js) or yarn

## 🔧 Installation & Setup

1. **Extract the project files** to your desired location

2. **Navigate to the project directory**:
   ```bash
   cd joy-wairimu-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you use yarn:
   ```bash
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

5. **Open your browser** and visit `http://localhost:3000`

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized files in the `dist` folder that you can deploy to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment Options

You can deploy this portfolio to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📁 Project Structure

```
joy-wairimu-portfolio/
├── src/
│   ├── Portfolio.jsx      # Main portfolio component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## ✨ Customization

### Adding New Projects

Edit the `projects` array in `src/Portfolio.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['Technology1', 'Technology2'],
    category: 'Category'
  },
  // Add more projects...
];
```

### Updating Contact Information

Modify the contact details in `src/Portfolio.jsx`:

```javascript
// Update email, phone numbers, and LinkedIn URL
```

### Changing Colors and Theme

The portfolio uses CSS variables and Tailwind classes. You can customize:
- Color gradients in the inline `<style>` section
- Tailwind colors in component classes
- Typography by changing Google Fonts imports

### Adding New Sections

1. Add a new section in the JSX
2. Add the section ID to the navigation array
3. Style it consistently with existing sections

## 🎨 Design Features

- **Custom Fonts**: Orbitron for headings, Syne for titles, Inter for body text
- **Gradient Effects**: Blue-purple-pink gradient theme throughout
- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Animations**: CSS-based animations for better performance
- **Hover Effects**: Interactive elements with smooth transitions
- **Grid Background**: Subtle grid pattern for depth

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

**Issue**: Dependencies won't install
- **Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

**Issue**: Port 3000 is already in use
- **Solution**: Change the port in `vite.config.js` or stop the process using port 3000

**Issue**: Styles not loading
- **Solution**: Make sure Tailwind CSS is properly configured and PostCSS is installed

## 📞 Contact

**Ndabari Joy Wairimu**
- Email: ndabari79@gmail.com
- Phone: +254 706 025 696 / +254 727 834 901
- LinkedIn: [Connect on LinkedIn](https://linkedin.com)

## 📄 License

This project is open source and available for personal use and modification.

## 🙏 Acknowledgments

- Built with React and Vite
- Icons by Lucide React
- Fonts from Google Fonts
- Styled with Tailwind CSS

---

**Happy Coding!** 🚀
