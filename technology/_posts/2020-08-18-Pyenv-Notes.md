---
title: Pyenv Notes
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
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile
```

Also install virtualenv plugin

```bash
$ git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
$ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile
```

### Install a version of Python...

```bash
$ pyenv install --list
$ pyenv install 3.7.7
```

Enable the version for global use

```bash
$ pyenv global 3.7.7
$ pyenv version
3.7.9 (set by /Users/mbbroberg/.pyenv/version)
```

To enable pyenv in every shell, add to `~/.bash_profile`

```bash
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi
```

## Managing Virtual Environments

Create a virtual environment based on a Python version...

```bash
$ pyenv virtualenv 3.7.7 hello_world
```

Enabling the virtual environment for a given folder...

```bash
$ cd hello_world
$ pyenv local hello_world
$ pyenv version
hello_world (set by /Users/xtof/Workspace/hello_world/.python-version)
$ cd ..
$ pyenv version
3.7.7 (set by /Users/xtof/.pyenv/version)
$ cd hello_world
$ pyenv version
hello_world (set by /Users/xtof/Workspace/hello_world/.python-version)
```

Makefile support for the virtual environment, creating it if needed:

```Makefile
.python-version:
	@pyenv virtualenv 3.7.7 $$(basename ${CURDIR}) > /dev/null 2>&1 || true
	@pyenv local $$(basename ${CURDIR})
	@pyenv version
```

## references

* [https://opensource.com/article/19/5/python-3-default-mac#what-to-do](https://opensource.com/article/19/5/python-3-default-mac#what-to-do)
* [https://akrabat.com/creating-virtual-environments-with-pyenv/](https://akrabat.com/creating-virtual-environments-with-pyenv/)
