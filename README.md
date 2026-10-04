# The One With the Website

A cinematic, unofficial, non-commercial fan experience inspired by the television series *Friends*. 

This project was built following strict constraints to create a cheerful, nostalgic, and handcrafted single-page application without using modern frameworks (like React or Vue) or build steps.

## Features
- **Apartment-door preloader**: A fun CSS-based animation that simulates the iconic purple door.
- **Thematic Design**: Two color themes ("Apartment Day" and "New York Night") representing different moods.
- **Meet the Six**: Dynamic character profiles utilizing a global modal system.
- **Personality Quiz**: An interactive "Which Friend Are You?" quiz.
- **Connections Web**: A simple visual graph showing the relationships between characters.
- **Apartment Explorer**: Interactive hotspots for iconic locations (Monica's, Joey's, Central Perk).
- **Episode Guide**: Searchable and filterable episode archive.
- **Central Perk Memory Wall & Jokes**: A masonry layout of memorable items and jokes.
- **Trivia Night**: Interactive fan trivia.
- **Quote Carousel**: Memorable quotes displayed with sitcom-style transitions.
- **Leave a Note**: A simulated sticky-note contact form.

## Technology Used
- Semantic HTML5
- Modern CSS3 (CSS Variables, Flexbox, CSS Grid)
- Vanilla JavaScript
- Inline SVG and CSS Gradients for robust fallbacks

## File Structure
```text
/
├── index.html          # Main HTML structure
├── style.css           # Styling and theming
├── script.js           # Interactive logic
├── README.md           # Project documentation
├── master_prompt.md    # Original build prompt
└── assets/
    ├── ASSET-CREDITS.txt
    ├── audio/
    ├── images/
    │   ├── characters/
    │   ├── episodes/
    │   ├── locations/
    │   ├── objects/
    │   ├── favicon.svg
    │   └── siteicon.png
    └── video/
```

## Setup & Deployment

### Local Setup
Since this project uses no bundlers or dependencies, you can run it directly using any static file server.

Using Python:
```bash
python -m http.server 8000
```
Navigate to `http://localhost:8000`

Using npx (Node.js):
```bash
npx serve .
```

### Static Deployment
This website is completely deployment-safe and can be hosted on platforms like GitHub Pages, Vercel, Netlify, or any standard web server without a build step. Just upload the directory contents.

## Asset Requirements & Fallbacks
If local assets are missing, the website uses robust CSS colors, gradients, and inline-SVG fallbacks. This ensures that the application remains fully functional and aesthetically pleasing even when offline or without media.

## Accessibility
- **Screen Reader Support**: Implemented `aria-live` regions for dynamic content (Quiz, Trivia, Preloader).
- **Keyboard Navigation**: Strong focus states and focus trapping in modals. Escape key listeners for menus and modals.
- **Reduced Motion**: Respects the `prefers-reduced-motion` media query to disable continuous animations (like the custom cursor, bounce effects, etc.).

## Disclaimer
This is an unofficial, non-commercial fan project created for educational and entertainment purposes. It is not affiliated with, endorsed by, or sponsored by Warner Bros. Television, NBC, Bright/Kauffman/Crane Productions, the creators, cast, or any related rights holders. *Friends* and related characters, titles, imagery, quotations, and marks belong to their respective owners.
