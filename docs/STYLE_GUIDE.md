# Frontend Style Guide

This document defines the coding standards and conventions for the Light Ocean Studios project to ensure consistency and maintainability.

## HTML

-   **Semantics**: Use HTML5 semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, etc.) wherever appropriate.
-   **Accessibility**: All images must have descriptive `alt` attributes. Interactive elements like buttons should be actual `<button>` elements. Use ARIA attributes where necessary to enhance accessibility.
-   **Formatting**: Use two spaces for indentation.

## CSS

-   **Naming Convention**: Use the Block Element Modifier (BEM) methodology for class names to create modular and reusable components.
    -   Block: `.card`
    -   Element: `.card__image`
    -   Modifier: `.card--featured`
-   **Formatting**:
    -   Use two spaces for indentation.
    -   Write each property on a new line.
    -   Add a space after the colon in property declarations.
    -   End every declaration with a semicolon.
-   **Units**: Use `rem` for font sizes and `px` or `rem` for spacing (padding, margins) to ensure scalability.
-   **Variables**: All colors and primary font families should be defined as CSS custom properties in the `:root`.

## JavaScript

-   **Variable Naming**: Use `camelCase` for variables and functions.
-   **Constants**: Use `const` by default. Use `let` only for variables that need to be reassigned.
-   **Selectors**: Cache DOM element selectors in constants to avoid repeated queries (e.g., `const heroSection = document.querySelector('.hero');`).
-   **ES6+**: Use modern JavaScript features like arrow functions, template literals, and destructuring where it improves readability.
-   **Comments**: Add comments to explain *why* a piece of complex logic exists, not *what* it does.
