---
title: Ruby on Mac
---

Although I'm not a Ruby developer, I encounter Ruby in many places as a user.
This page collects some notes on using Ruby on Mac OS X.

# Upgrade Ruby

Mac OS X comes with Ruby installed. The stock setup ... is annoying to say the least, so the steps below install the latest version in a user-based virtual environment.

Kudos to [https://luther.io/macos/how-to-install-latest-ruby-on-a-mac/](https://luther.io/macos/how-to-install-latest-ruby-on-a-mac/).

## Install Homebrew

DUH ;-)

## Install rbenv

```console
$ brew install rbenv ruby-build rbenv-gemset rbenv-vars
...
$ rbenv init
...
$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
...
$ rbenv install 3.0.2
...
$ rbenv global 3.0.2
```

Edit `~/.zshrc`

```console
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
eval "$(rbenv init -)"
```
