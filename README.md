# Portfolio Website

A modern, responsive portfolio website inspired by minimalist design principles.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, minimalist design with bold typography and strategic use of color
- **Easy to Edit**: All personal information is centralized in a single data file
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Functional contact form for potential clients

## How to Edit Your Information

All personal information is stored in `/src/data/portfolioData.js`. Simply edit this file to update:

### Personal Information
- Name and title
- Bio/description
- Contact details (email, phone, location)
- Social media links

### Projects
- Project titles and descriptions
- Technologies used
- Project links (live demo and GitHub)

### Skills
- Skill categories
- Descriptions
- Technology lists

### Stats
- Number of projects
- Years of experience
- Any other metrics

## Getting Started

1. **Install Dependencies**
   ```bash
   cd portfolio
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Edit Your Information**
   - Open `/src/data/portfolioData.js`
   - Update all the placeholder information with your details
   - Save the file and see changes instantly

4. **Replace Profile Image**
   - Replace `/src/assets/IMG_1985_refined.png` with your own photo
   - Update the import path in `/src/components/Hero.jsx` if needed

## Deployment

To build for production:
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.

## Customization

### Colors
The main color scheme uses:
- Black (#000000) for text and primary elements
- White (#FFFFFF) for backgrounds
- Red (#EF4444) for accents and highlights
- Gray tones for secondary text and backgrounds

### Typography
The design uses system fonts with a focus on:
- Bold, large headings for impact
- Clean, readable body text
- Proper hierarchy and spacing

### Layout
- Mobile-first responsive design
- Grid-based layouts
- Consistent spacing and alignment
- Strategic use of white space

## File Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Main hero section
│   ├── Projects.jsx    # Projects showcase
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Site footer
├── data/
│   └── portfolioData.js # All editable content
├── assets/             # Images and static files
└── App.jsx            # Main app component
```

## Support

If you need help customizing your portfolio, refer to the React and Tailwind CSS documentation, or modify the components directly for more advanced customizations.

