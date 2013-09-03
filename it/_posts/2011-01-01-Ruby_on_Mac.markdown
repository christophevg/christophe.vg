---
layout: post
title: Ruby on Mac
---

Although I'm not a Ruby developer, I encounter Ruby in many places as a user.
This page collects some notes on using Ruby on Mac OS X.

# Upgrade Ruby

Mac OS X comes with Ruby installed. At a certain point, you run in to version
problems and need to upgrade it. Googling for upgrading Ruby is a pain. These
steps help...

## Install RVM - Ruby Version Manager

{% highlight console %}
$ \curl -L https://get.rvm.io | bash -s stable
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   184  100   184    0     0    179      0  0:00:01  0:00:01 --:--:--   274
100 15445  100 15445    0     0  10431      0  0:00:01  0:00:01 --:--:--  193k
Downloading RVM from wayneeseguin branch stable
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   124  100   124    0     0    147      0 --:--:-- --:--:-- --:--:--   312
100 1083k  100 1083k    0     0   456k      0  0:00:02  0:00:02 --:--:-- 1783k

Installing RVM to /Users/xtof/.rvm/
    Adding rvm PATH line to /Users/xtof/.bashrc /Users/xtof/.zshrc.
    Adding rvm loading line to /Users/xtof/.bash_profile /Users/xtof/.zprofile.
Installation of RVM in /Users/xtof/.rvm/ is almost complete:

  * To start using RVM you need to run `source /Users/xtof/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.

# Christophe VG,
#
#   Thank you for using RVM!
#   I sincerely hope that RVM helps to make your life easier and more enjoyable!!!
#
# ~Wayne

# In case of problems:
#      run and read: rvm notes
#         read docs: http://rvm.io/
#        talk to us: http://webchat.freenode.net/?channels=rvm (http://freenode.net/faq.shtml#plusr)
#   read cheatsheet: http://cheat.errtheblog.com/s/rvm
#  watch screencast: http://screencasts.org/episodes/how-to-use-rvm
# open a bug report: https://github.com/wayneeseguin/rvm/issues

  * WARNING: You have '~/.profile' file, you might want to load it,
    to do that add the following line to '/Users/xtof/.bash_profile':

      source ~/.profile
{% endhighlight %}

Don't forget to  ...

{% highlight console %}
$ source ~/.rvm/scripts/rvm
{% endhighlight %}

## Install a new version

Next, list the known versions that can be installed and pick the one you need.

{% highlight console %}
$ rvm list known
# MRI Rubies
[ruby-]1.8.6[-p420]
[ruby-]1.8.7[-p374]
[ruby-]1.9.1[-p431]
[ruby-]1.9.2[-p320]
[ruby-]1.9.3[-p448]
[ruby-]2.0.0-p195
[ruby-]2.0.0[-p247]
[ruby-]2.0.0-head
ruby-head
...
$ rvm install ruby-1.9.3
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.8/x86_64/ruby-1.9.3-p448.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for osx.
Installing requirements for osx.
...
{% endhighlight %}

## Start using the new version

{% highlight console %}
$ rvm use ruby-1.9.3
Using /Users/xtof/.rvm/gems/ruby-1.9.3-p448
astroboy:christophe.vg xtof$ ruby --version
ruby 1.9.3p448 (2013-06-27 revision 41675) [x86_64-darwin12.4.0]
{% endhighlight %}

