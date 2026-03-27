# Website Improvement Backlog

Prioritize by moving items up/down. Mark in-progress with `[ ]` → `[~]`. Mark completed with `[x]`.

## Content & UX

- [ ] **Tag filtering** - Add clickable tag cloud and enhance `_pages/tags-archive.md` with filterable tag pages
- [ ] **Search functionality** - Add client-side search with Lunr.js or Algolia
- [ ] **Related posts** - Improve related posts algorithm with tag-based recommendations instead of basic Jekyll `related_posts`
- [ ] **Reading time accuracy** - Review and optionally disable `read_time` for short posts (e.g., music posts)

## Technical

- [ ] **Performance audits** - Run Lighthouse and identify image optimization, CSS/JS minification, caching improvements
- [ ] **Image optimization automation** - Automate `reduce-image-sizes.sh` via pre-commit hook or GitHub Actions
- [ ] **RSS feed enhancements** - Add category-specific feeds for about, makes, koken, zeilen, technology
- [ ] **Schema.org markup** - Expand structured data for articles, recipes, projects

## Visual & Design

- [ ] **Dark mode** - Enable Minimal Mistakes dark theme (`default_dark_theme: true`) or add toggle
- [ ] **Print stylesheet** - Enhance print experience with better page breaks and formatting
- [ ] **Responsive images** - Implement `srcset` or Jekyll responsive images for better mobile performance

## Content Features

- [ ] **Recipe structured data** - Add Schema.org Recipe markup to `koken/` posts for SEO
- [ ] **Project showcase layout** - Create dedicated project layout with galleries for `makes/`
- [ ] **Music integration** - Embed Spotify/YouTube more prominently in `about/muziek/` posts
