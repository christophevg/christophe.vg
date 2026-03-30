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
- [x] **JavaScript tree-shaking** - Remove 24KB unused code from main.min.js
  - **Replaced ion.RangeSlider (84KB) with native HTML range input**
  - **Reduced main.min.js from 176KB to 130KB (46KB savings)**
  - **Reduced slider.css from 61KB to 2KB (59KB savings)**
- [x] **Schema.org markup** - Expand structured data for articles, recipes, projects
  - **Recipe schema:** Created `_includes/recipe-schema.html` for JSON-LD
  - **Recipe layout:** Created `_layouts/recipe.html` for structured rendering
  - **Converted:** 153 recipes to structured front matter (see `docs/recipe-conversion-analysis.md`)
  - **Remaining:** 32 recipes need manual review (complex structure, multi-part, or missing sections)

## Accessibility

- [x] **Image alt attributes** - Add descriptive `alt` text to all images for screen readers and SEO
  - **Fixed:** Empty alt in archive-single.html teaser images
  - **Fixed:** Empty alt in search result thumbnails
  - **Fixed:** Empty alt in 404 page hero image
- [x] **Button accessibility** - Ensure all buttons have accessible names (search, navigation, etc.)
- [x] **Form labels** - Associate labels with all form elements for screen reader compatibility
- [x] **Color contrast** - Fix insufficient contrast ratios in text/background combinations

## Visual & Design

- [x] **Print stylesheet** - Enhance print experience with better page breaks and formatting
- [x] **Responsive images** - Implement `srcset` or Jekyll responsive images for better mobile performance (addresses 65% of payload)

## Content Features

- [x] **Recipe structured data** - Add Schema.org Recipe markup to `koken/` posts for SEO
- [x] **Project showcase layout** - Create dedicated project layout with galleries for `makes/`
- [x] **Music integration** - Embed Spotify/YouTube more prominently in `about/muziek/` posts

## More To Do

- [ ] **Remove RSS support** - It's simply no longer "a thing".
- [ ] **Attribution** - Add "coding agent" attribution in footer.
- [ ] **Size of instructions above timeline slider** - The text size has increased with a previous change. This needs to be fixed.
- [ ] **Follow Pop-up** - The popup for the follow button, on narrow width viewports, isn't fully "on top" of everything.
- [ ] **Review the codebase** - look for unused features, unused code, code that can be improved,...

## Don't Do...

- [x] **RSS feed enhancements** - Add category-specific feeds for about, makes, koken, zeilen, technology
- [x] **Dark mode** - Enable Minimal Mistakes dark theme (`default_dark_theme: true`) or add toggle
  - [x] Rationale: I don't like dark mode, it's not how I want my website to look.
