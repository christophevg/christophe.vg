---
title: Ruby on macOS
tags:
  - ruby
  - development
header:
  teaser: /technology/images/thumb/ruby.jpg
  image: /technology/images/header/ruby.jpg
---

I've never programmed in Ruby, never found a reason to. Still, even alone for this website, I need it to run Jekyll. So sometimes I need to upgrade it. And then I need copy/paste-instructions ;-)

## Step 1: Install `rbenv`

1. Install rbenv and ruby-build

```bash
% brew install rbenv ruby-build
```

2. Initialize rbenv in zsh

```bash
% echo 'eval "$(rbenv init - zsh)"' >> ~/.zprofile
% source ~/.zprofile
```

## Step 2: Install and Set a New Ruby Version

```console
% rbenv install -l
% rbenv install 3.2.2
% rbenv global 3.2.2
% ruby -v
```
