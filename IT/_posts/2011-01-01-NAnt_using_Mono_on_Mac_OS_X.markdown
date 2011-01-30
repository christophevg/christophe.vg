---
layout: post
title: NAnt using Mono on Mac OS X
---
## The Basics

* install Mono using the installer from [http://mono-project.com/downloads](http://mono-project.com/downloads)
* install XCode from [http://connect.apple.com](http://connect.apple.com)

## The Out-of-the-Box-Problem

{% highlight bash %}
 $ echo '<?xml version="1.0"?><project name="test"></project>' > test.build

 $ nant
 NAnt 0.85 (Build 0.85.2344.0; rc4; 06/02/2006) 
 Copyright (C) 2001-2006 Gerry Shaw
 http://nant.sourceforge.net
 
 BUILD FAILED
 
 The current runtime framework 'mono-2.0' is not correctly configured in the NAnt configuration file.
     Unable to locate 'mono' module using pkg-config. Download the Mono development packages from http://www.mono-project.com/downloads/. 
 
 For more information regarding the cause of the build failure, run the build again in debug mode. 
 
 Try 'nant -help' for more information
{% endhighlight %}

## The One-Line Solution

{% highlight bash %}
 $ export PKG_CONFIG_PATH=/Library/Frameworks/Mono.framework/Libraries/pkgconfig
 
 $ nant
 NAnt 0.85 (Build 0.85.2344.0; rc4; 06/02/2006) 
 Copyright (C) 2001-2006 Gerry Shaw
 http://nant.sourceforge.net
 
 Buildfile: file:///Users/xtof/test.build
 Target framework: Mono 2.0 Profile
 
 BUILD SUCCEEDED
 
 Total time: 0 seconds.
{% endhighlight %}

## The Permenant Solution

Change the installed '''/usr/bin/nant''' by one that solves the PKG_CONFIG_PATH issue.

{% highlight bash %}
#!/bin/sh
export PKG_CONFIG_PATH=/Library/Frameworks/Mono.framework/Libraries/pkgconfig
/Library/Frameworks/Mono.framework/Commands/mono \
  /Library/Frameworks/Mono.framework/Libraries/NAnt/NAnt.exe "$@"
{% endhighlight %}
