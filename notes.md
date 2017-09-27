# Bundle update fails due to Nokogiri

```bash
$ xcode-select --install
```

# Bundle update _downgrades github-pages_

solution for https://github.com/bundler/bundler/issues/5154

```
gem 'github-pages', '104', group: :jekyll_plugins
```
