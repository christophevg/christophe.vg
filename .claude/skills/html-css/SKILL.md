---
name: html-css
description: Use this skill when working with HTML/CSS, especially for layout, positioning, and styling issues. Provides guidance on common pitfalls and best practices.
---

# HTML/CSS Development

This skill provides guidance for common HTML/CSS issues encountered during web development.

## Common Issues

### Z-index not working

When z-index doesn't seem to work, check if a parent element has these properties (they create new stacking contexts):
- `transform` (most common - e.g., `translate3d()`)
- `opacity` < 1
- `position: fixed/relative/absolute` with z-index
- `filter`, `perspective`, `will-change`

**Solution:** Move the element outside the stacking context (e.g., append modal to `<body>`) or remove the transform from the parent.

### Centering elements

For centering, prefer:
- Flexbox: `display: flex; justify-content: center; align-items: center;`
- Grid: `place-items: center`
- Absolute centering: `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`

### Responsive images

Always include:
- `max-width: 100%; height: auto;` for fluid scaling
- `srcset` for different resolutions
- `loading="lazy"` for below-fold images

### Modal/Overlay positioning

For modals that need to overlay everything:
1. Append to `<body>` directly, not inside other containers
2. Use `position: fixed` with high z-index (9999+)
3. Consider adding an overlay backdrop behind the modal