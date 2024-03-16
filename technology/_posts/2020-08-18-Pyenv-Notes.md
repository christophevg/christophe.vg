---
title: Pyenv Notes
header:
  teaser: /technology/images/thumb/pyenv.png
  image: /technology/images/header/pyenv.png
---

Up to now, I haven been using virtualenv for my Python development. Recently, after having run into issues now and then - which were more related to the installation of Python on my MacBook, I started looking for alternatives. Pyenv seems a nice candidate, because it focusses more on separate Python installations.

Good habits die hard, so it will take some time to convert my mind and fingers to use pyenv. These notes will help ;-)

## Global Installation

### Install pyenv itself...

#### MacOS

```bash
$ brew install pyenv 
```

#### From Git repo

```bash
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
$ cd ~/.pyenv && src/configure && make -C src
$ echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
$ echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

#### Minimal Python build enviornment

```bash
$ brew install openssl readline sqlite3 xz zlib
```

#### Virtuelenv support

Also install virtualenv plugin

```bash
$ git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
$ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.zshrc
```

### Install a version of Python...

```bash
$ pyenv install --list
$ pyenv install 3.8.12
```

Enable the version for global use

```bash
$ pyenv global 3.8.12
$ pyenv version
3.8.12 (set by /Users/xtof/.pyenv/version)
```

## Managing Virtual Environments

Create a virtual environment based on a Python version...

```bash
$ pyenv virtualenv 3.8.12 hello_world
```

or "fork" from active version:

```bash
$ pyenv version
3.8.12 (set by /Users/xtof/.pyenv/version)

$ pyenv virtualenv test3.8.12
Looking in links: /var/folders/nq/xvzwtwsj25727ybthkp1wmhr0000gn/T/tmpji3hjgb_
Requirement already satisfied: setuptools in /Users/xtof/.pyenv/versions/3.8.12/envs/test3.8.12/lib/python3.8/site-packages (56.0.0)
Requirement already satisfied: pip in /Users/xtof/.pyenv/versions/3.8.12/envs/test3.8.12/lib/python3.8/site-packages (21.1.1)

$ pyenv versions             
  system
* 3.8.12 (set by /Users/xtof/.pyenv/version)
  3.8.12/envs/test3.8.12
  test3.8.12
```

Removing a virtual environment

```bash
$ pyenv uninstall test3.8.12
```

Enabling the virtual environment for a given folder...

```bash
$ cd hello_world
$ pyenv local hello_world
$ pyenv version
hello_world (set by /Users/xtof/Workspace/hello_world/.python-version)
$ cd ..
$ pyenv version
3.8.12 (set by /Users/xtof/.pyenv/version)
$ cd hello_world
$ pyenv version
hello_world (set by /Users/xtof/Workspace/hello_world/.python-version)
```

Makefile support for the virtual environment, creating it if needed:

```Makefile
.python-version:
	@pyenv virtualenv 3.8.12 $$(basename ${CURDIR}) > /dev/null 2>&1 || true
	@pyenv local $$(basename ${CURDIR})
	@pyenv version
```
