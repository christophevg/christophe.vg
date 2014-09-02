---
layout: post
title: Java on Mac
---

Although I don't like Java, I encounter it in (too) many places. This page
collects some notes on using Java on Mac OS X.

# Installation

[Mac OS X](Mac_OS_X_Notes.html) - recent versions anyway - asks to install Java
on first use. It will now redirect you to the download page @ Oracle with the
latest version on offer.

## Older versions

Like it or not - I don't - using the latest version doesn't always mean that
older stuff still works. So I would like to install and maintain older version
of Java. Luckily on OS X different Java versions simply live in different
directories:

{% highlight bash %}
$ ls -l /Library/Java/JavaVirtualMachines/
total 0
drwxr-xr-x  3 root  wheel  102 Sep  2 11:46 jdk1.7.0_67.jdk
drwxr-xr-x  3 root  wheel  102 Sep  2 11:23 jdk1.8.0_20.jdk
{% endhighlight %}

And you have <tt>java_home</tt> to list all available:

{% highlight bash %}
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (4):
    1.8.0_20, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_20.jdk/Contents/Home
    1.7.0_67, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_67.jdk/Contents/Home
    1.6.0_65-b14-466.1, x86_64:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
    1.6.0_65-b14-466.1, i386:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/jdk1.8.0_20.jdk/Contents/Home
{% endhighlight %}

**Pro Tip** - Need version 1.6 like the one above? Take a look at
[http://support.apple.com/kb/DL1572](http://support.apple.com/kb/DL1572).

## Java Version Management

To be able to easily switch between these versions, I assembled a few bash
functions from various parts found around the web:

{% highlight bash %}
# the following functions are useful to manage multiple versions of java
# most of these functions are based on the work of others:
# http://superuser.com/questions/490425

# usage example: jdk_set 1.6
function jdk_set() {
  if [ $# -ne 0 ]; then
    jdk_reset
    export JAVA_HOME=`/usr/libexec/java_home -v $@`
    path_prepend ${JAVA_HOME}/bin
  fi
}

function jdk_reset() {
  path_remove '/System/Library/Frameworks/JavaVM.framework/Home/bin'
  if [ -n "${JAVA_HOME}" ]; then
   path_remove ${JAVA_HOME}/bin
   unset JAVA_HOME
  fi
}

function jdk_check() {
  echo JAVA_HOME=${JAVA_HOME}
  echo PATH=${PATH}
  java -version
}

function jdk_list() {
  /usr/libexec/java_home -V 2>&1 | grep -E "\d.\d.\d[,_]" | cut -d , -f 1 | colrm 1 4 | grep -v Home
}

# some utility functions for manipulating the PATH env var
# http://superuser.com/questions/490425

function path_append() {
  path_remove $1
  export PATH="$PATH:$1"
}

function path_prepend() {
  path_remove $1
  export PATH="$1:$PATH"
}

function path_remove() {
  export PATH=`echo -n $PATH | awk -v RS=: -v ORS=: '$0 != "'$1'"' | sed 's/:$//'`
}
{% endhighlight %}

Using them is straightforward. Add them to your <tt>.bashrc</tt> file and make
sure that's loaded. Then ...

{% highlight bash %}
$ jdk_list
1.8.0_20
1.7.0_67
1.6.0_65-b14-466.1
1.6.0_65-b14-466.1

$ jdk_check
JAVA_HOME=
PATH=/opt/local/bin:/opt/local/sbin:/Users/xtof/.rvm/gems/ruby-2.0.0-p481/bin:...
java version "1.8.0_20"
Java(TM) SE Runtime Environment (build 1.8.0_20-b26)
Java HotSpot(TM) 64-Bit Server VM (build 25.20-b23, mixed mode)

$ jdk_set 1.7

$ jdk_check
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_67.jdk/Contents/Home
PATH=/Library/Java/JavaVirtualMachines/jdk1.7.0_67.jdk/Contents/Home/bin:/opt/...
java version "1.7.0_67"
Java(TM) SE Runtime Environment (build 1.7.0_67-b01)
Java HotSpot(TM) 64-Bit Server VM (build 24.65-b04, mixed mode)

$ jdk_set 1.6

$ jdk_check
JAVA_HOME=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
PATH=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/bin:/opt/...
java version "1.6.0_65"
Java(TM) SE Runtime Environment (build 1.6.0_65-b14-466.1-11M4716)
Java HotSpot(TM) 64-Bit Server VM (build 20.65-b04-466.1, mixed mode)

$ jdk_reset

$ jdk_check
JAVA_HOME=
PATH=/opt/local/bin:/opt/local/sbin:/Users/xtof/.rvm/gems/ruby-2.0.0-p481/bin:...
java version "1.8.0_20"
Java(TM) SE Runtime Environment (build 1.8.0_20-b26)
Java HotSpot(TM) 64-Bit Server VM (build 25.20-b23, mixed mode)
{% endhighlight %}
