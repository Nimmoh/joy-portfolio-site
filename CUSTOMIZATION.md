# Customization Guide

This guide will help you customize your portfolio website to match your preferences and showcase your unique projects.

## Table of Contents
1. [Updating Personal Information](#updating-personal-information)
2. [Adding/Removing Projects](#addingremoving-projects)
3. [Modifying Experience Section](#modifying-experience-section)
4. [Changing Colors and Theme](#changing-colors-and-theme)
5. [Customizing Typography](#customizing-typography)
6. [Adding New Sections](#adding-new-sections)
7. [Updating Education](#updating-education)
8. [Modifying Skills](#modifying-skills)

## Updating Personal Information

Open `src/Portfolio.jsx` and find the Hero section (around line 200):

```javascript
<h1 className="syne text-6xl md:text-7xl font-black mb-4">
  <span className="gradient-text">YOUR FIRST NAME</span>
  <br />
  <span className="text-slate-200">YOUR LAST NAME</span>
</h1>

<p className="text-xl md:text-2xl text-slate-400 mb-4 font-medium">
  Your Professional Title
</p>
```

### Update Contact Links

Find the contact section and update:

```javascript
<a href="mailto:your-email@example.com">
<a href="https://your-linkedin-url">
```

Update phone numbers in the contact section:
```javascript
<span>+254 XXX XXX XXX</span>
```

## Adding/Removing Projects

Find the `projects` array (around line 70):

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Detailed description of what the project does...',
    tech: ['React', 'Node.js', 'MongoDB'], // Technologies used
    category: 'Full-Stack' // or 'Mobile', 'Backend', etc.
  },
  // Add more projects here
];
```

**To add a project:** Add a new object to the array
**To remove a project:** Delete the project object
**To reorder projects:** Move objects up or down in the array

## Modifying Experience Section

Find the `experience` array (around line 45):

```javascript
const experience = [
  {
    title: 'Job Title',
    company: 'COMPANY NAME',
    period: 'Start Date – End Date',
    highlights: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3'
    ]
  },
  // Add more positions here
];
```

## Changing Colors and Theme

### Main Color Scheme

The portfolio uses a gradient theme. Find the style section (around line 120):

```javascript
.gradient-text {
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
  // Change these hex colors to your preferred colors
}
```

### Individual Color Changes

**Blue accents:** Change `#60a5fa` and `blue-400`, `blue-500`
**Purple accents:** Change `#a78bfa` and `purple-400`, `purple-500`
**Pink accents:** Change `#f472b6` and `pink-400`, `pink-500`

Find and replace throughout the file:
- `text-blue-400` → `text-yourcolor-400`
- `bg-blue-500` → `bg-yourcolor-500`

### Background Colors

Current background: Dark theme (`slate-950`, `slate-900`)

To change to light theme, replace:
- `bg-slate-950` → `bg-white`
- `text-slate-100` → `text-gray-900`
- `text-slate-300` → `text-gray-700`

## Customizing Typography

### Changing Fonts

Current fonts (in the style section):

```javascript
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

**To use different fonts:**

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the import URL
4. Replace the import statement
5. Update font-family references:
   - `.orbitron` → your heading font
   - `.syne` → your title font
   - `font-sans` → your body font

Example:
```javascript
.orbitron {
  font-family: 'YourFont', sans-serif;
}
```

### Font Sizes

Main heading: `text-6xl md:text-7xl`
Section titles: `text-2xl` to `text-4xl`
Body text: `text-lg` to `text-xl`

Use Tailwind classes: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.

## Adding New Sections

To add a new section:

1. **Add to navigation array:**
```javascript
['home', 'about', 'skills', 'experience', 'projects', 'yournewsection', 'contact']
```

2. **Create the section:**
```javascript
<section id="yournewsection" className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="section-title gradient-text text-center">Your Section Title</h2>
    
    {/* Your content here */}
    
  </div>
</section>
```

3. **Use existing card styles:**
```javascript
<div className="glow-card rounded-2xl p-8">
  {/* Card content */}
</div>
```

## Updating Education

Find the `education` array:

```javascript
const education = [
  {
    degree: 'Degree Name',
    institution: 'University/School Name',
    period: 'Start Year - End Year'
  },
  // Add more education entries
];
```

## Modifying Skills

Find the `skills` object:

```javascript
const skills = {
  backend: ['Skill 1', 'Skill 2', 'Skill 3'],
  frontend: ['Skill 1', 'Skill 2'],
  tools: ['Tool 1', 'Tool 2'],
  network: ['Network Skill 1', 'Skill 2']
};
```

**To add a skill category:**

1. Add to the skills object:
```javascript
const skills = {
  // existing categories...
  yourcategory: ['Skill 1', 'Skill 2']
};
```

2. Add the display section (copy existing pattern):
```javascript
<div className="glow-card rounded-2xl p-8">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-3 bg-blue-500/10 rounded-lg">
      <YourIcon size={28} className="text-blue-400" />
    </div>
    <h3 className="text-2xl font-bold syne text-blue-400">Your Category</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    {skills.yourcategory.map((skill, idx) => (
      <span key={idx} className="skill-tag">{skill}</span>
    ))}
  </div>
</div>
```

## Quick Customization Checklist

- [ ] Update name and title
- [ ] Update email and phone numbers
- [ ] Update LinkedIn URL
- [ ] Add/modify projects
- [ ] Update work experience
- [ ] Update education
- [ ] Customize colors (if desired)
- [ ] Add/remove skills
- [ ] Update profile description
- [ ] Test on mobile devices
- [ ] Build and deploy

## Tips for Best Results

1. **Keep consistency:** Use the same color scheme throughout
2. **Update regularly:** Keep projects and experience current
3. **Test responsiveness:** Check on mobile, tablet, and desktop
4. **Optimize images:** If you add images, compress them first
5. **Keep it concise:** Quality over quantity in project descriptions
6. **Proofread:** Check for typos and grammar
7. **Get feedback:** Ask friends or colleagues to review

## Need Help?

If you're stuck:
1. Check the code comments in Portfolio.jsx
2. Search for examples of similar sections
3. Review React and Tailwind documentation
4. Test changes incrementally with `npm run dev`

Happy customizing! 🎨
