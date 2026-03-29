# Website Performance Audit

**Date:** 2026-03-29
**URL:** https://christophe.vg
**Tool:** Lighthouse 13.0.3

## Summary Scores

| Category | Score | Rating |
|----------|-------|--------|
| Performance | 71/100 | Needs Improvement |
| Accessibility | 71/100 | Needs Improvement |
| SEO | 92/100 | Good |
| Best Practices | 100/100 | Excellent |

## Core Web Vitals

| Metric | Value | Score | Assessment |
|--------|-------|-------|------------|
| First Contentful Paint | 1.6s | 0.95 | Good |
| Largest Contentful Paint | 5.9s | 0.14 | Poor |
| Speed Index | 7.0s | 0.33 | Poor |
| Time to Interactive | 5.9s | 0.66 | Moderate |
| Total Blocking Time | 70ms | 0.99 | Good |
| Cumulative Layout Shift | 0 | 1.00 | Good |

## Performance Issues

### Critical: Largest Contentful Paint (5.9s)

The LCP is significantly above the 2.5s target. This is the primary performance bottleneck.

### Network Payload: 3,823 KB

Top resources by size:

| Resource | Size | Type |
|----------|------|------|
| cv-ua.png | 415KB | Image |
| current.jpeg | 351KB | Image |
| novid-kiosk.png | 343KB | Image |
| nametag.png | 324KB | Image |
| cv-telindus.png | 249KB | Image |
| c3po.jpeg | 202KB | Image |
| cv-acerta-2.jpeg | 200KB | Image |
| cv-kul.png | 156KB | Image |
| cv-msc.png | 132KB | Image |
| cv-isw.png | 119KB | Image |

**Total from top 10:** ~2,489KB (65% of total payload)

### Unused JavaScript: 24 KB

- `main.min.js`: 23KB unused code

### Render Blocking

- Initial server response: 130ms (acceptable)

## Accessibility Issues

| Issue | Severity |
|-------|----------|
| Images without `alt` attributes | Critical |
| Buttons without accessible names | Critical |
| Form elements without labels | Critical |
| Insufficient color contrast | Moderate |

## Recommendations

### High Priority (Performance Impact)

1. **Image Compression**
   - Convert PNG/JPEG to WebP format
   - Target <100KB for banner images
   - Expected savings: ~2MB+

2. **Responsive Images**
   - Implement `srcset` for different viewport sizes
   - Serve smaller images on mobile devices

3. **Lazy Loading**
   - Add `loading="lazy"` to offscreen images
   - Defer loading of below-fold content

4. **JavaScript Optimization**
   - Tree-shake unused code from main.min.js
   - Consider code splitting

### Medium Priority (Accessibility)

1. Add descriptive `alt` attributes to all images
2. Ensure buttons have accessible names
3. Associate labels with form elements
4. Improve color contrast ratios

### Future Considerations

- Implement caching headers for static assets
- Consider CDN for image delivery
- Explore image CDN for automatic optimization

## Technical Details

### Test Environment

- **User Agent:** Chrome 140 (Headless)
- **Network:** Simulated mobile (Moto G Power)
- **CPU Throttling:** 4x slowdown

### Lighthouse Version

- Version: 13.0.3
- axe-core: 4.11.1