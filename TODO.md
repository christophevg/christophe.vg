# Website Improvement Backlog

Prioritize by moving items up/down. Mark in-progress with `[ ]` → `[~]`. Mark completed with `[x]`.

## Content & UX

- [x] **Tag filtering** - Add clickable tag cloud and enhance `_pages/tags-archive.md` with filterable tag pages
- [x] **Search functionality** - Add client-side search with Lunr.js or Algolia
- [x] **Related posts** - Improve related posts algorithm with tag-based recommendations instead of basic Jekyll `related_posts`
- [x] **Reading time accuracy** - Review and optionally disable `read_time` for short posts (e.g., music posts)

## Technical

- [x] **Performance audits** - Run Lighthouse and identify image optimization, CSS/JS minification, caching improvements
  - **Results:** Performance 71, Accessibility 71, SEO 92, Best Practices 100
  - **Key issues:** LCP 5.9s (poor), 3.8MB images, 24KB unused JS
  - **Top recommendations:** Convert to WebP, implement responsive images, lazy-load, compress banners
- [x] **Image optimization automation** - Create tooling for checking and fixing oversized images
  - **Created:** `scripts/check-images.sh` and `scripts/fix-images.sh`
  - **Usage:** Run manually to check/report and optimize images
- [x] **Lazy loading** - Add `loading="lazy"` to below-fold images to defer loading and improve LCP
- [ ] **JavaScript tree-shaking** - Remove 24KB unused code from main.min.js
- [ ] **Schema.org markup** - Expand structured data for articles, recipes, projects

## Accessibility

- [ ] **Image alt attributes** - Add descriptive `alt` text to all images for screen readers and SEO
- [ ] **Button accessibility** - Ensure all buttons have accessible names (search, navigation, etc.)
- [ ] **Form labels** - Associate labels with all form elements for screen reader compatibility
- [ ] **Color contrast** - Fix insufficient contrast ratios in text/background combinations

## Visual & Design

- [ ] **Print stylesheet** - Enhance print experience with better page breaks and formatting
- [ ] **Responsive images** - Implement `srcset` or Jekyll responsive images for better mobile performance (addresses 65% of payload)

## Content Features

- [ ] **Recipe structured data** - Add Schema.org Recipe markup to `koken/` posts for SEO
- [ ] **Project showcase layout** - Create dedicated project layout with galleries for `makes/`
- [ ] **Music integration** - Embed Spotify/YouTube more prominently in `about/muziek/` posts

## Don't Do...

- [x] **RSS feed enhancements** - Add category-specific feeds for about, makes, koken, zeilen, technology
  - [ ] Instead we're going to remove RSS support completely. It's simply no longer "a thing".
- [x] **Dark mode** - Enable Minimal Mistakes dark theme (`default_dark_theme: true`) or add toggle
  - [x] Rationale: I don't like dark mode, it's not how I want my website to look.
