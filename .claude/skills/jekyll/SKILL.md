---
name: jekyll
description: Use this skill when working with Jekyll sites, building, testing, or debugging Jekyll configuration and content.
---

# Jekyll Best Practices

## Building

Use `jekyll build` to generate the site to `_site/`. This is sufficient for testing - **never use `jekyll serve`** as it spawns a persistent server process.

**Important**: Full builds take 30+ seconds. Always use `timeout: 60000` (60 seconds) when running Jekyll build commands.

```bash
bundle exec jekyll build
```

## Incremental Builds

For faster iteration during development, use incremental builds:

```bash
bundle exec jekyll build --incremental
```

Note: Incremental builds can sometimes miss changes. If something seems wrong, do a clean build by removing `_site/` first.

## Clean Build

```bash
rm -rf _site && bundle exec jekyll build
```

## Dependency Management

Update dependencies:
```bash
bundle update
```

Install dependencies:
```bash
bundle install
```

## Key Files

- `_config.yml` - Main configuration
- `_data/` - YAML/JSON data files accessible via `site.data`
- `_includes/` - Reusable Liquid includes
- `_layouts/` - Page templates
- `_pages/` - Static pages (included via `include: _pages` in config)
- `_posts/` - Blog posts (named `YYYY-MM-DD-title.md`)
- `_sass/` - SCSS partials

## Front Matter Defaults

Check `_config.yml` for front matter defaults that apply to different paths/content types. This avoids repeating front matter in every file.

## Liquid Templating

- Use `{% raw %}{{ page.title }}{% endraw %}` for page variables
- Use `{% raw %}{{ site.data.file.field }}{% endraw %}` for data files
- Use `{% raw %}{% include filename.html %}{% endraw %}` for includes

## Debugging

To debug Liquid, output variables:
```liquid
{{ page | inspect }}
```

To see available variables:
```liquid
{{ site | inspect }}
```

## Common Issues

**Build errors with gems**: Try `bundle update` or check Gemfile for version conflicts.

**Missing content**: Check `include`/`exclude` in `_config.yml` - Jekyll excludes files by default.

**CSS not updating**: SCSS files in `_sass/` need to be imported from `assets/css/main.scss` or similar.

**Plugin not working**: Ensure plugin is in both `Gemfile` and `_config.yml` under `plugins:` section.