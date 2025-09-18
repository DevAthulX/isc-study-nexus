# ISC Study Hub - Vanilla HTML, CSS, JavaScript

This is the vanilla HTML, CSS, and JavaScript version of the ISC Study Hub application, converted from the original React-based version.

## Files Structure

- `index.html` - Main HTML structure with all sections
- `styles.css` - Complete CSS styling with design system and responsive design
- `script.js` - JavaScript functionality for navigation, filtering, and dynamic content

## Features

### 🎨 Design System
- **Modern academic theme** with blue/purple gradients
- **Dark/Light mode toggle** with smooth transitions
- **Responsive design** that works on all devices
- **CSS Custom properties** for consistent theming
- **Beautiful animations** and hover effects

### 📚 Sections

1. **Home Section**
   - Hero section with statistics
   - Interactive study cards
   - Smooth navigation between sections

2. **Previous Year Questions**
   - Subject and year filtering
   - Search functionality
   - Grid layout with paper cards
   - View/download actions for each paper

3. **Specimen Papers**
   - Featured papers section
   - Difficulty level indicators
   - Topic tags for each paper
   - All papers grid view

4. **Interactive Quizzes**
   - Progress tracking for each subject
   - Category-wise quiz organization
   - Statistics display (completion rate, average time, etc.)

### 🔧 Functionality

- **Single Page Application** behavior with section switching
- **Theme persistence** using localStorage
- **Responsive navigation** with mobile menu
- **Dynamic content rendering** using JavaScript
- **Search and filtering** capabilities
- **Smooth animations** and transitions

## How to Run

1. **Simple Setup**: Just open `index.html` in any modern web browser
2. **Local Server** (recommended): Use a local server like:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Responsive design for all screen sizes

## Technical Details

### CSS Features
- **CSS Grid** and **Flexbox** for layouts
- **CSS Custom Properties** for theming
- **CSS Transitions** and **Animations**
- **Mobile-first** responsive design
- **Print-friendly** styles

### JavaScript Features
- **ES6+ syntax** with modern JavaScript
- **Event delegation** for efficient event handling
- **State management** using plain JavaScript objects
- **Dynamic DOM manipulation**
- **localStorage** for theme preference

### External Dependencies
- **Lucide Icons**: For beautiful, consistent iconography
- **Inter Font**: For modern, readable typography
- **No frameworks**: Pure vanilla code for maximum performance

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --academic-primary: 217 91% 60%;    /* Main blue */
    --academic-secondary: 262 83% 58%;  /* Purple accent */
    /* Add your custom colors here */
}
```

### Content
Update the data arrays in `script.js`:
```javascript
const subjects = [/* Add/modify subjects */];
const specimenPapers = [/* Add/modify papers */];
const quizCategories = [/* Add/modify quizzes */];
```

### Styling
- Modify `styles.css` for visual changes
- All colors use HSL format for easy theming
- Responsive breakpoints at 768px and 480px

## Performance Benefits

- **Fast loading**: No framework overhead
- **Small bundle size**: Only necessary code included
- **Efficient rendering**: Direct DOM manipulation
- **Caching friendly**: Static files can be easily cached
- **SEO optimized**: Proper HTML structure and meta tags

## Future Enhancements

- Add actual PDF viewing/downloading functionality
- Implement quiz taking interface
- Add user authentication
- Create admin panel for content management
- Add search analytics
- Implement offline functionality with Service Workers

---

This vanilla version maintains all the visual appeal and functionality of the original React version while being completely self-contained and framework-independent.