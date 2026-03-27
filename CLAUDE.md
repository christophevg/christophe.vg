# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website hosted on GitHub Pages, built with Jekyll using the Minimal Mistakes theme. Content includes blog posts about technology projects, cooking recipes, sailing adventures, photography, music favorites, and professional articles.

## Common Commands

```bash
# Install/update dependencies and serve locally
make all

# Serve site locally (after initial setup)
make serve

# Update Ruby dependencies only
make update

# Rebuild minified JavaScript assets
make assets
```

The site runs at `http://localhost:4000` when serving locally.

## Architecture

### Content Organization

- `_posts/` subdirectories under content directories (e.g., `about/_posts/`, `technology/_posts/`, `koken/_posts/`)
- Posts use Jekyll's date-prefixed naming: `YYYY-MM-DD-Title.md`
- Static pages in `_pages/` directory
- `_data/navigation.yml` defines the main navigation menu

### Key Directories

- `_layouts/` - Custom Jekyll layouts (single, archive, song, redirect, etc.)
- `_includes/` - Reusable Liquid includes (image, gallery, timeline, etc.)
- `_sass/` - SCSS stylesheets
- `assets/` - Static assets (images, JS)
- `_site/` - Generated site output (gitignored in practice)

### Content Categories

- `about/` - Professional articles and music posts (`about/muziek/`)
- `makes/` - Maker/DIY project posts
- `koken/` - Cooking recipes (Dutch)
- `zeilen/` - Sailing posts (Dutch)
- `fotografie/` - Photography content
- `technology/` - Technical posts
- `local/` - Local/draft content

### Post Front Matter

Posts use standard Jekyll front matter with custom fields:

```yaml
---
title: Post Title
tags: [tag1, tag2]
hidden: true  # optional, hides from listings
header:
  teaser: /path/to/thumb/image.jpg
  image: /path/to/header/image.jpg
---
```

The `hidden: true` field filters posts from archive listings. Posts tagged `wip` show a "Work in Progress" notice.

### Custom Includes

- `{% include image name="..." kind="..." %}` - Image embedding
- `{% include gallery %}` - Image galleries
- `{% include timeline.html %}` - Timeline display on homepage

## Development Notes

- Uses `github-pages` gem for GitHub Pages compatibility
- Requires `webrick` gem on newer Ruby versions
- JavaScript minification uses `terser`
- Site locale is English; some sections use Dutch (`locale: nl` in front matter)