# Portfolio Website - AI Coding Agent Instructions

## Architecture Overview
This is a **minimal, static portfolio website** built with vanilla HTML/CSS/JS and TailwindCSS CDN. No build process, no frameworks - just direct file editing and browser refresh.

## Key Design Patterns

### Theme System
- Uses `.dark` class on `<html>` element to toggle between light/dark modes
- All colors defined in TailwindCSS config within `index.html` using custom color variables:
  - Light: `bgLight`, `panelLight`, `lineLight`, `inkLight`, `mutedLight`
  - Dark: `bgDark`, `panelDark`, `lineDark`, `inkDark`, `mutedDark`
- Theme persistence via `localStorage.getItem("theme")`

### Interactive Project Cards
- Cards use **hover-to-play videos** with `poster` fallback images
- Video opacity toggles: `opacity-0` when paused, `opacity: 1` when playing
- Event pattern: `pointerenter` → play, `pointerleave` → pause + reset to `currentTime = 0`

### Asset Organization
```
assets/
├── images/     # Project covers, logos, profile images
├── videos/     # Project demo videos (MP4)
├── icons/      # UI icons (SVG/PNG)
├── documents/  # PDFs (CV, project docs)
└── gifs/       # Legacy or alternative demo formats
```

### CSS Architecture
- **TailwindCSS CDN** (not build-processed) with inline config in `<head>`
- Custom utilities: `rounded-xl2` (1.25rem), `shadow-card`, transition classes
- Responsive grid: `md:grid-cols-3` for projects, `grid-cols-[auto_1fr_auto]` for header

## Development Workflow

### No Build Process
- Direct file editing - changes appear on browser refresh
- TailwindCSS loaded via CDN with inline configuration
- All assets referenced with relative paths from root

### Asset Management
- Project images should be **640x360** aspect ratio (16:9) for consistent card sizing
- Videos should match poster image dimensions and be optimized for web
- Use `loading="lazy"` for images below the fold
- SVG icons preferred for UI elements (theme toggle, social links)

### Content Updates
- **Project cards**: Update both `<img src>` and `<video src>` paths in card figures
- **Personal info**: Modify hero section with new portrait, CV link, social links
- **Contact**: Update email and links in contact section

### Responsive Behavior
- Header navigation hidden on mobile (`hidden sm:flex`)
- Project grid collapses from 3 columns → 1 column on mobile
- Portrait size scales down on smaller screens

## Critical Implementation Details

### Video Autoplay Handling
```javascript
const start = () => v.play().catch(() => {}); // Handles autoplay restrictions gracefully
```

### Theme Toggle Animation
```javascript
document.documentElement.classList.add("transitioning");
setTimeout(() => document.documentElement.classList.remove("transitioning"), 160);
```

### Accessibility Standards
- Proper `aria-label` and `aria-pressed` on theme toggle
- `alt` attributes on all images
- Semantic HTML structure with proper headings

## When Making Changes

1. **Adding Projects**: Follow the existing card structure in the projects section, ensure 16:9 aspect ratio media
2. **Styling**: Use existing Tailwind classes or extend the inline config for new colors/utilities
3. **Assets**: Place in appropriate `assets/` subdirectory and reference with relative paths
4. **Theme Colors**: Always provide both light and dark variants using the established naming convention
5. **Testing**: Check both light/dark themes and mobile responsiveness after changes

## External Dependencies
- TailwindCSS CDN (configured inline)
- Google Fonts or system fonts (no external font files currently used)
- All other assets are local - no external image/video CDNs