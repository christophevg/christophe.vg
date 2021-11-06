# Bundle update with native extensions fails

```bash
$ xcode-select --install
```

If it still fails:

```bash
$ cd /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby
$ ln -sf ../../../../Headers/ruby/config.h

$ cd /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0
$ ln -sf universal-darwin20 universal-darwin19
```

# Bundle update _downgrades github-pages_

solution for https://github.com/bundler/bundler/issues/5154

```
gem 'github-pages', '104', group: :jekyll_plugins
```

# cannot load such file -- webrick (LoadError)

https://github.com/jekyll/jekyll/issues/8523

```
gem "webrick"
```
