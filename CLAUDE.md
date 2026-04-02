# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website hosted on GitHub Pages, built with Jekyll using the Minimal Mistakes theme. Content includes blog posts about technology projects, cooking recipes, sailing adventures, photography, music favorites, and professional articles.

## Common Commands

```bash
# Install/update dependencies and serve locally
make all

# Build site locally (after initial setup)
make build

# Rebuild minified JavaScript assets
make assets
```

**IMPORTANT**: the user runs a constant build and serve loop. During development no build needs to be triggered, just request the user to visually inspect when ready.

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
- `md/` - LLM-optimized markdown versions of key pages

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

## LLM-Optimized Content Maintenance

This site implements the `llms.txt` standard for LLM-friendly content discovery. The following components MUST be kept up-to-date whenever content changes.

### Files Requiring Maintenance

#### 1. `/llms.txt` - LLM Content Map

The primary entry point for LLMs. Must be updated when:

- **New pages are created**: Add relevant links to appropriate sections
- **Pages are removed**: Remove corresponding links
- **Page URLs change**: Update URLs in links
- **Page descriptions change**: Update descriptions to remain accurate

Structure:
```
# Christophe VG
> Brief description

## Section Name
- [Page Title](https://christophe.vg/path/): Description

## Markdown Versions
- [Page (markdown)](https://christophe.vg/md/path/file.md): Description
```

#### 2. `/md/` Directory - LLM-Optimized Markdown Files

Clean markdown versions of key pages, optimized for LLM consumption.

**Creating new markdown files:**

1. Create file in appropriate subdirectory: `md/about/filename.md`
2. Include front matter with URL: `URL: https://christophe.vg/path/to/page/`
3. Structure content for LLM chunking:
   - Lead with summary/key takeaways
   - Use clear section headings
   - Include structured data (tables, lists)
   - Keep paragraphs concise (40-70 words)
   - Add definitions for key terms

**When to update:**
- When source HTML page is significantly changed
- When new key pages are added to About section
- When factual information changes (services, contact info, etc.)

**Current markdown files:**
- `md/about/index.md` - About page summary
- `md/about/faq.md` - Frequently asked questions
- `md/about/I-Enterprise-Architect.md` - Architecture philosophy
- `md/about/problem-seeker.md` - Problem-seeking approach
- `md/about/coding-agent.md` - AI collaboration practices

#### 3. `/_includes/faq-schema.html` - FAQ Structured Data

FAQPage schema for search engines and LLMs. Must be updated when:

- FAQ questions are added, removed, or reworded
- FAQ answers change significantly
- New factual information requires FAQ coverage

#### 4. `/_config.yml` - Site Configuration (JSON-LD)

The `social:` section contains structured data for the Person schema. Update when:

- Social media profiles change
- Location changes
- Name/title changes

#### 5. `/about/_posts/2026-04-02-FAQ.md` - FAQ Page Content

The FAQ page must remain synchronized with site content. Update when:

- New common questions emerge from user feedback
- Services or offerings change
- Contact information changes
- New sections/content are added to the site that warrant FAQ entries

### Content Creation Checklist for AI-Generated Pages

When creating new content pages, include these front matter fields:

```yaml
---
title: Page Title
tags:
  - thing
  - personal
  - agentic  # Include this tag for AI-generated content
prompt: The exact prompt used to generate this content
header:
  teaser: /path/to/thumb.jpg
  image: /path/to/header.jpg
---
```

**Required for AI-generated pages:**
1. `agentic` tag in tags list
2. `prompt` field with the generation prompt
3. Content must be reviewed and approved before publishing

### Maintenance Procedures

#### When Adding New About/Professional Pages:

1. Create the page in `about/_posts/YYYY-MM-DD-Title.md`
2. If significant enough for LLM consumption:
   - Create `md/about/filename.md` with optimized content
   - Add entry to `llms.txt` under "About" section
   - Add entry to "Markdown Versions" section in `llms.txt`
3. If page answers common questions:
   - Add question/answer to FAQ page
   - Update `faq-schema.html` with new Q&A

#### When Adding New Project/Category Pages:

1. Create the archive page in `_posts/` or `_pages/`
2. Add link to `llms.txt` under appropriate section
3. Consider if FAQ entry is needed

#### When Updating Existing Content:

1. If page has a corresponding `md/` file, update it too
2. If FAQ entries reference the content, verify accuracy
3. If contact info, services, or key facts change:
   - Update `_config.yml` social section
   - Update FAQ page
   - Update `llms.txt` descriptions
   - Update relevant `md/` files

#### When Removing Content:

1. Remove page file
2. Remove corresponding `md/` file if exists
3. Remove link from `llms.txt`
4. Check if FAQ entries need removal
5. Update `faq-schema.html` if needed

### Verification Commands

After making changes to LLM-specific files:

```bash
# Verify llms.txt is accessible
curl -I https://christophe.vg/llms.txt

# Verify JSON-LD in page source
curl -s https://christophe.vg/about/ | grep "application/ld+json"

# Verify markdown files are served
curl -I https://christophe.vg/md/about/faq.md

# Verify robots.txt
curl https://christophe.vg/robots.txt
```

### Key URLs for Reference

- `https://christophe.vg/llms.txt` - LLM content map
- `https://christophe.vg/robots.txt` - Robots file with sitemap
- `https://christophe.vg/about/faq/` - FAQ page
- `https://christophe.vg/md/` - LLM-optimized markdown files