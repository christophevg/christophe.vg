# Website Improvement Backlog

Prioritize by moving items up/down. Mark in-progress with `[ ]` → `[~]`. Mark completed with `[x]`.

## Performance Optimization (Lighthouse 84 → 95+)

- [x] **Convert images to WebP** - Replace PNG/JPG with WebP format
  - `nametag.png` (268KB → 44KB) - **84% reduction**
  - `header/*.jpeg` (351KB → 199KB) - **43% reduction**
  - `about/images/banner/` (2.2MB → 379KB) - **83% reduction**
  - Added `<picture>` elements with WebP primary and fallbacks
  - Updated `_includes/hi.html`, `_includes/timeline.html`, `_includes/page__hero.html`, `404.html`
  - **Total saved: ~2.2MB (78% reduction)**
- [x] **Optimize FontAwesome** - Replace 70KB font with inline SVGs for used icons only
  - **Analysis complete:** 25 unique icons used out of 675+ in font (4% usage)
  - **Current:** 70KB woff2 font + ~50KB CSS = 120KB
  - **Potential:** ~10KB with subset or inline SVGs
  - **SKIPPED:** Manual SVG replacement results in poor visual quality - icons look inconsistent, sizing/styling issues. FontAwesome's CSS framework provides essential styling that is lost with raw SVGs. The 120KB is acceptable for the icon system provided.
- [x] **Remove unused CSS** - Eliminate unused FontAwesome icon classes
  - **Analysis complete:** 1724 lines of FA CSS, using ~4% of icons
  - **17KB unused CSS** primarily from FA icon classes (675+ icons, using 25)
  - **SKIPPED:** Related to FontAwesome optimization - PurgeCSS on FA risks breaking icon styling. 17KB savings not worth the complexity and risk.
- [x] **Implement image lazy loading** - Add `loading="lazy"` to below-fold images
  - Already implemented in `_includes/image` and `_includes/images`
  - Added lazy loading to footer icons in `_includes/footer.html`
  - Added lazy loading to sidebar images in `_includes/sidebar.html`
  - Added lazy loading to author profile icons in `_includes/author-profile.html`
  - Added lazy loading to comment avatars in `_includes/comment.html`
  - Hero images and nametag intentionally excluded (above-fold)
  - **Expected gain: +2-3 performance points, improves LCP**

## Accessibility (93 → 100)

- [x] **Fix contrast ratio** - Darken `$primary-color` and `$text-color` in `_sass/_variables.scss`
  - Changed `$primary-color`: #7a8288 → #5a6268
  - Darkened `$dark-gray`: 40% → 50% black mix
  - Darkened `$darker-gray`: 60% → 70% black mix
  - Changed `$text-color`: $dark-gray → $darker-gray
  - **WCAG AA compliant (4.5:1 contrast ratio achieved)**

## Content & Marketing

- [x] **Expand llms.txt coverage** - Add Dutch content sections
  - Expanded Koken section with recipe count (185), popular dishes, categories
  - Expanded Zeilen section with logbook years (2004-2025), coverage areas
  - Added Dutch language notes for both sections
  - Improved section organization and descriptions
- [x] **Add Article schema** - Implement JSON-LD for blog posts
  - Created `_includes/article-schema.html` with Article structured data
  - Added to `_includes/seo.html` for automatic inclusion on all posts
  - Provides: headline, description, author, dates, image, keywords
  - Excludes recipes and projects (have their own schemas)
- [x] **Add "Last Updated" timestamps** - Show content freshness
  - Added publication date to post header (visible with title)
  - Updated footer to show both "Published" and "Last updated" dates
  - Last updated shows only when different from publication date
  - Styled consistently with existing meta (calendar icon, time element)

## UX Enhancements

- [x] **Add scroll-to-top button** - Improve navigation on long pages
  - Created `_includes/scroll-to-top.html` with button and JavaScript
  - Added CSS styles in `assets/css/custom.css`
  - Button appears after scrolling 300px, smooth scrolls to top
  - Accessible: aria-label, keyboard focusable, print-hidden
  - Mobile-friendly: smaller size on mobile screens
  - Removed old 👆 emoji scroll-to-top link from single.html
- [x] **Implement LQIP** - Low-quality image placeholders for faster perceived load
  - Added gradient placeholder with shimmer effect
  - Images fade in when loaded, placeholder background becomes transparent
  - Updated `_includes/image`, `_includes/images`, `_includes/archive-single.html`, `_includes/timeline.html`
  - Added `_includes/lqip.html` for JavaScript
  - Added CSS styles in `assets/css/custom.css`
  - Hero images excluded (above-fold, load immediately)
- [x] **Add sticky navigation** - Keep nav visible while scrolling
  - Changed masthead position from `relative` to `sticky`
  - Added `top: 0` and `background-color` for proper sticky behavior
  - CSS-only solution, works on desktop and mobile
  - Navigation now stays visible while scrolling

## Don't Do...

- [x] **Sticky navigation** - Keep nav visible while scrolling
  - **REJECTED:** User does not want sticky navigation
  - Do not propose this change again
- [x] **FontAwesome SVG replacement** - Replace font icons with inline SVGs
  - **REJECTED:** Visual quality is poor - icons lose essential styling from FontAwesome CSS framework
  - Raw SVGs don't match FontAwesome's consistent sizing, alignment, and appearance
  - 120KB for the full icon system is acceptable
  - Do not propose this optimization again
  - **REJECTED:** User does not want sticky navigation
  - Do not propose this change again

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

- [x] **Update pyenv page** - Add disclaimer about migrating to uv
  - Added migration notice using WIP-style notice box
  - Links to uv documentation
  - Original content preserved for reference

- [ ] **Create uv page** - Document uv-based Python workflow
  - Cover installation, dependency management, virtual environments
  - Document project setup workflow
  - Reference python-project skill as authoritative source
  - Acceptance: New page created under about/ or technology/

- [ ] **Update "How I use agents" page** - Add local image generation
  - Document use of `ollama run x/z-image-turbo` for image generation
  - Explain local-first approach to AI image creation
  - Acceptance: Page updated with image generation workflow

- [x] **Remove RSS support** - It's simply no longer "a thing".
- [x] **Attribution** - Add "coding agent" attribution in footer.
- [x] **Size of instructions above timeline slider** - The text size has increased with a previous change. This needs to be fixed.
- [x] **Follow Pop-up** - The popup for the follow button, on narrow width viewports, isn't fully "on top" of everything. The timeline cards and the slider are rendered "above" it, hiding it partially.
- [x] **Review the codebase** - look for unused features, unused code, code that can be improved,...

## Don't Do...

- [x] **RSS feed enhancements** - Add category-specific feeds for about, makes, koken, zeilen, technology
- [x] **Dark mode** - Enable Minimal Mistakes dark theme (`default_dark_theme: true`) or add toggle
  - [x] Rationale: I don't like dark mode, it's not how I want my website to look.
