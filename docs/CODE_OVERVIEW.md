# Code Overview

This document provides a high-level overview of the frontend codebase for the Light Ocean Studios website.

## `styles.css` - Styling and Architecture

The CSS is written using a mobile-first methodology. All base styles are intended for small viewports, and `min-width` media queries are used to add complexity for larger screens.

### Key Features:
- **CSS Custom Properties (Variables)**: Colors, font families, and spacing units are defined as variables in the `:root` for easy theming and maintainability.
- **Fluid Typography**: The `clamp()` function is used for headings to create scalable typography that adapts smoothly to different viewport sizes.
- **Utility Classes**: A few utility classes are used for common patterns like flexbox centering, but the styling is primarily component-based.
- **Animations**: Animations and transitions are handled directly in CSS to leverage hardware acceleration and ensure smooth performance.

## `script.js` - Interactivity

The JavaScript file manages all dynamic and interactive elements on the page. It is written in vanilla ES6+.

### Key Responsibilities:
- **Modal Logic**: Handles the opening and closing of the email capture modal. It also uses `localStorage` to prevent the modal from reappearing for users who have already submitted their email.
- **Smooth Scrolling**: Implements the smooth scroll behavior for anchor links in the navigation.
- **Intersection Observer**: Manages the scroll-triggered animations. As sections of the page enter the viewport, a class is added to them to trigger a CSS animation. This is a performant alternative to scroll event listeners.
- **Hero Flame Animation**: Controls the logic for the animated flame effect in the hero section.
